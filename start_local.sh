#!/bin/bash
# =============================================
# Launch SevenSEAS Next.js app locally
# Usage: ./start_local.sh [port]
# Default port: 3000
# =============================================

set -e

PORT="${1:-3000}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$SCRIPT_DIR/nextjs-react"

if [ ! -d "$APP_DIR" ]; then
  echo "ERROR: Next.js app folder not found at $APP_DIR"
  exit 1
fi

cd "$APP_DIR"

# Ensure the selected port is free before starting a new server instance.
existing_pids="$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
if [ -n "$existing_pids" ]; then
  echo "Found existing process(es) on port $PORT: $existing_pids"
  echo "Stopping existing process(es) ..."
  # shellcheck disable=SC2086
  kill $existing_pids 2>/dev/null || true
  sleep 1

  remaining_pids="$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
  if [ -n "$remaining_pids" ]; then
    echo "Force stopping process(es) still listening on port $PORT: $remaining_pids"
    # shellcheck disable=SC2086
    kill -9 $remaining_pids 2>/dev/null || true
    sleep 1
  fi
fi

echo "=============================================="
echo "  SevenSEAS Next.js - Local Server"
echo "  URL: http://localhost:$PORT"
echo "  Press Ctrl+C to stop."
echo "=============================================="

if ! command -v npm >/dev/null 2>&1; then
  echo "ERROR: npm is required but was not found in PATH."
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: node is required but was not found in PATH."
  exit 1
fi

NODE_VERSION_RAW="$(node -v 2>/dev/null || true)"
NODE_MAJOR="$(printf '%s' "$NODE_VERSION_RAW" | sed -E 's/^v([0-9]+).*/\1/')"
if ! [[ "$NODE_MAJOR" =~ ^[0-9]+$ ]]; then
  NODE_MAJOR="0"
fi
USE_PROD_MODE="false"

# Next.js 15 is stable on active LTS lines; newer majors can break dev HMR chunking.
if (( NODE_MAJOR >= 23 )); then
  USE_PROD_MODE="true"
  echo "WARNING: Detected Node v$NODE_MAJOR (unsupported for stable Next.js 15 dev HMR)."
  echo "         Using production mode locally to avoid chunk runtime errors."
fi

# Open browser automatically on macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
  open "http://localhost:$PORT" 2>/dev/null &
fi

if [ "$USE_PROD_MODE" = "true" ]; then
  rm -rf .next
  npm run build
  npm run start -- --port "$PORT"
else
  npm run dev -- --port "$PORT"
fi
