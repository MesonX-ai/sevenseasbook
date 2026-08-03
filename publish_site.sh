#!/usr/bin/env bash
set -euo pipefail

# Publish flow:
# 1) Build static export (Next.js -> out/).
# 2) Optional: commit + push to GitHub.
# 3) Upload only new/changed files to GoDaddy via checksum manifest.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$SCRIPT_DIR/nextjs-react"
PUBLISH_ROOT="$APP_DIR/out"
FTP_CONFIG="$SCRIPT_DIR/../ftp-config.json"
PROFILE_NAME="SevenSeasBook"
GITHUB_REMOTE_URL="https://github.com/MesonX-ai/sevenseasbook.git"
BRANCH_NAME="main"
CONFIG_FILE="$APP_DIR/next.config.mjs"
CONFIG_BACKUP="$APP_DIR/next.config.mjs.publish_backup"

BUILD_ONLY="false"
SKIP_GIT="false"
CUSTOM_COMMIT_MSG=""
DEFAULT_COMMIT_MSG="chore: publish sevenseas updates"

for arg in "$@"; do
  case "$arg" in
    --build-only)
      BUILD_ONLY="true"
      ;;
    --skip-git)
      SKIP_GIT="true"
      ;;
    --commit-msg=*)
      CUSTOM_COMMIT_MSG="${arg#*=}"
      ;;
    --*)
      echo "ERROR: unknown option: $arg"
      exit 1
      ;;
    *)
      if [[ -z "$CUSTOM_COMMIT_MSG" ]]; then
        CUSTOM_COMMIT_MSG="$arg"
      fi
      ;;
  esac
done

COMMIT_MSG="${CUSTOM_COMMIT_MSG:-$DEFAULT_COMMIT_MSG}"

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
require_cmd awk

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
        print("" if value is None else value)
        sys.exit(0)
print("")
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

restore_config() {
  if [[ -f "$CONFIG_BACKUP" ]]; then
    mv -f "$CONFIG_BACKUP" "$CONFIG_FILE"
  fi
}

build_static_export() {
  echo "Building static export from $APP_DIR ..."
  cd "$APP_DIR"

  if [[ ! -f "$CONFIG_FILE" ]]; then
    echo "ERROR: missing Next.js config: $CONFIG_FILE"
    exit 1
  fi

  trap restore_config EXIT

  cp "$CONFIG_FILE" "$CONFIG_BACKUP"
  cat > "$CONFIG_FILE" <<'CFG'
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
CFG

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

cd "$SCRIPT_DIR"

if [[ "$SKIP_GIT" != "true" ]]; then
  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "ERROR: $SCRIPT_DIR is not a git repository. Initialize git first."
    exit 1
  fi

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
    current_branch="$(git branch --show-current)"
    if [[ -z "$current_branch" ]]; then
      current_branch="$BRANCH_NAME"
    fi
    git push -u origin "$current_branch:$BRANCH_NAME"
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

ensure_remote_dir() {
  local remote_dir="$1"
  lftp_run "mkdir -p \"$remote_dir\""
}

MANIFEST_NAME=".deploy_sha256_manifest.tsv"
REMOTE_MANIFEST_PATH="$REMOTE_PATH/$MANIFEST_NAME"
TMP_DIR="$(mktemp -d)"
LOCAL_MANIFEST="$TMP_DIR/local_manifest.tsv"
REMOTE_MANIFEST_LOCAL="$TMP_DIR/remote_manifest.tsv"

cleanup_tmp() {
  rm -rf "$TMP_DIR"
}
trap cleanup_tmp EXIT

echo "Uploading changed files to ftp://$FTP_HOST:$FTP_PORT$REMOTE_PATH ..."

cd "$PUBLISH_ROOT"
: > "$LOCAL_MANIFEST"

echo "Preparing local checksum manifest ..."
while IFS= read -r -d '' file; do
  rel="${file#./}"
  local_hash="$(shasum -a 256 "$file" | awk '{print $1}')"
  local_size="$(wc -c < "$file" | tr -d '[:space:]')"
  printf "%s\t%s\t%s\n" "$rel" "$local_hash" "$local_size" >> "$LOCAL_MANIFEST"
done < <(find . -type f -print0)

echo "Fetching remote checksum manifest ..."
set +e
"${lftp_base[@]}" -e "set ssl:verify-certificate no; set cmd:fail-exit yes; get \"$REMOTE_MANIFEST_PATH\" -o \"$REMOTE_MANIFEST_LOCAL\"; bye" >/dev/null 2>&1
remote_manifest_rc=$?
set -e

if [[ $remote_manifest_rc -ne 0 ]]; then
  : > "$REMOTE_MANIFEST_LOCAL"
fi

new_count=0
edit_count=0
skip_count=0

while IFS=$'\t' read -r rel local_hash local_size; do
  if [[ -z "$rel" ]]; then
    continue
  fi

  remote_hash="$(awk -F '\t' -v p="$rel" '$1==p { print $2; exit }' "$REMOTE_MANIFEST_LOCAL")"

  if [[ "$local_hash" == "$remote_hash" && -n "$remote_hash" ]]; then
    echo "SKIP  $rel"
    skip_count=$((skip_count + 1))
    continue
  fi

  file="./$rel"
  ensure_remote_dir "$(dirname "$REMOTE_PATH/$rel")"
  "${lftp_base[@]}" -e "set ssl:verify-certificate no; set cmd:fail-exit yes; put -O \"$(dirname "$REMOTE_PATH/$rel")\" \"$file\"; bye" >/dev/null

  if [[ -z "$remote_hash" ]]; then
    echo "NEW   $rel"
    new_count=$((new_count + 1))
  else
    echo "EDIT  $rel"
    edit_count=$((edit_count + 1))
  fi
done < "$LOCAL_MANIFEST"

echo "Uploading checksum manifest ..."
"${lftp_base[@]}" -e "set ssl:verify-certificate no; set cmd:fail-exit yes; put \"$LOCAL_MANIFEST\" -o \"$REMOTE_MANIFEST_PATH\"; bye" >/dev/null

echo "Done. New: $new_count, Edited: $edit_count, Unchanged: $skip_count"
