#!/usr/bin/env bash
set -euo pipefail

# Publish flow:
# 1) Commit and push current changes to GitHub.
# 2) Build local static publish payload.
# 3) Upload only new/changed files to GoDaddy using checksum comparison.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$SCRIPT_DIR/nextjs-react"
PUBLISH_ROOT="$APP_DIR/out"
FTP_CONFIG="$SCRIPT_DIR/../ftp-config.json"
PROFILE_NAME="SevenSeasBook"
GITHUB_REMOTE_URL="https://github.com/MesonX-ai/sevenseasbook.git"
BRANCH_NAME="main"
COMMIT_MSG="${1:-chore: publish sevenseas updates}"
CONFIG_FILE="$APP_DIR/next.config.mjs"
CONFIG_BACKUP="$APP_DIR/next.config.mjs.publish_backup"
BUILD_ONLY="false"
SKIP_GIT="false"

for arg in "$@"; do
  case "$arg" in
    --build-only)
      BUILD_ONLY="true"
      ;;
    --skip-git)
      SKIP_GIT="true"
      ;;
  esac
done

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "ERROR: required command not found: $1"
    exit 1
  fi
}

require_cmd git
require_cmd lftp
require_cmd npm
require_cmd python3
require_cmd shasum

if [[ ! -d "$APP_DIR" ]]; then
  echo "ERROR: missing app directory: $APP_DIR"
  exit 1
fi

if [[ ! -f "$FTP_CONFIG" ]]; then
  echo "ERROR: missing FTP config: $FTP_CONFIG"
  exit 1
fi

parse_ftp_field() {
  local field="$1"
  python3 - "$FTP_CONFIG" "$PROFILE_NAME" "$field" <<'PY'
import json, sys
path, profile_name, field = sys.argv[1:4]
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)
for entry in data:
    if entry.get('name') == profile_name:
        value = entry.get(field)
        if value is None:
            print("")
        else:
            print(value)
        sys.exit(0)
print("")
sys.exit(0)
PY
}

FTP_HOST="$(parse_ftp_field host)"
FTP_PORT="$(parse_ftp_field port)"
FTP_USER="$(parse_ftp_field username)"
FTP_PASS="$(parse_ftp_field password)"
REMOTE_PATH="$(parse_ftp_field path)"

if [[ -z "$FTP_HOST" || -z "$FTP_USER" || -z "$FTP_PASS" || -z "$REMOTE_PATH" ]]; then
  echo "ERROR: unable to read FTP profile '$PROFILE_NAME' from $FTP_CONFIG"
  exit 1
fi

if [[ -z "$FTP_PORT" ]]; then
  FTP_PORT="21"
fi

cd "$SCRIPT_DIR"

build_static_export() {
  echo "Building static export from $APP_DIR ..."
  cd "$APP_DIR"

  if [[ ! -f "$CONFIG_FILE" ]]; then
    echo "ERROR: missing Next.js config: $CONFIG_FILE"
    exit 1
  fi

  restore_config() {
    if [[ -f "$CONFIG_BACKUP" ]]; then
      mv -f "$CONFIG_BACKUP" "$CONFIG_FILE"
    fi
  }

  trap restore_config EXIT

  cp "$CONFIG_FILE" "$CONFIG_BACKUP"
  cat > "$CONFIG_FILE" <<'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
EOF

  rm -rf .next out
  npm run build >/dev/null
  restore_config
  trap - EXIT

  if [[ ! -d "$PUBLISH_ROOT" || ! -f "$PUBLISH_ROOT/index.html" ]]; then
    echo "ERROR: static export was not created at $PUBLISH_ROOT"
    exit 1
  fi

  echo "Static export ready at: $PUBLISH_ROOT"
}

build_static_export

if [[ "$BUILD_ONLY" == "true" ]]; then
  echo "Build-only mode: skipping git and FTP publish."
  exit 0
fi

if [[ "$SKIP_GIT" != "true" ]] && ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "ERROR: $SCRIPT_DIR is not a git repository. Initialize git first."
  exit 1
fi

if [[ "$SKIP_GIT" != "true" ]]; then
  if git remote get-url origin >/dev/null 2>&1; then
    git remote set-url origin "$GITHUB_REMOTE_URL"
  else
    git remote add origin "$GITHUB_REMOTE_URL"
  fi

  if [[ -n "$(git status --porcelain)" ]]; then
    git add -A
    git commit -m "$COMMIT_MSG"
  else
    echo "No local git changes to commit."
  fi

  if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
    git push -u origin "$BRANCH_NAME"
  else
    CURRENT_BRANCH="$(git branch --show-current)"
    if [[ -z "$CURRENT_BRANCH" ]]; then
      CURRENT_BRANCH="$BRANCH_NAME"
    fi
    git push -u origin "$CURRENT_BRANCH:$BRANCH_NAME"
  fi
else
  echo "Skip-git mode: skipping commit/push."
fi

lftp_base=(
  lftp
  -u "$FTP_USER","$FTP_PASS"
  -p "$FTP_PORT"
  "$FTP_HOST"
)

lftp_run() {
  local cmd="$1"
  "${lftp_base[@]}" -e "set ssl:verify-certificate no; set cmd:fail-exit yes; $cmd; bye" >/dev/null
}

remote_file_hash() {
  local remote_file="$1"
  local hash
  set +e
  hash="$("${lftp_base[@]}" -e "set ssl:verify-certificate no; set cmd:fail-exit yes; cat \"$remote_file\"; bye" 2>/dev/null | shasum -a 256 | awk '{print $1}')"
  local rc=$?
  set -e
  if [[ $rc -ne 0 || -z "$hash" ]]; then
    echo ""
  else
    echo "$hash"
  fi
}

ensure_remote_dir() {
  local remote_dir="$1"
  lftp_run "mkdir -p \"$remote_dir\""
}

echo "Uploading changed files to ftp://$FTP_HOST:$FTP_PORT$REMOTE_PATH ..."

cd "$PUBLISH_ROOT"
mapfile -d '' files < <(find . -type f -print0)

new_count=0
edit_count=0
skip_count=0

for file in "${files[@]}"; do
  rel="${file#./}"
  local_hash="$(shasum -a 256 "$file" | awk '{print $1}')"
  remote_hash="$(remote_file_hash "$REMOTE_PATH/$rel")"

  if [[ "$local_hash" == "$remote_hash" && -n "$remote_hash" ]]; then
    echo "SKIP  $rel"
    skip_count=$((skip_count + 1))
    continue
  fi

  ensure_remote_dir "$(dirname "$REMOTE_PATH/$rel")"
  "${lftp_base[@]}" -e "set ssl:verify-certificate no; set cmd:fail-exit yes; put -O \"$(dirname "$REMOTE_PATH/$rel")\" \"$file\"; bye" >/dev/null

  if [[ -z "$remote_hash" ]]; then
    echo "NEW   $rel"
    new_count=$((new_count + 1))
  else
    echo "EDIT  $rel"
    edit_count=$((edit_count + 1))
  fi
done

echo "Done. New: $new_count, Edited: $edit_count, Unchanged: $skip_count"
