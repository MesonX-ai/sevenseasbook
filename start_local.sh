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

NODE_MAJOR="$(node -v | sed -E 's/^v([0-9]+).*/\1/')"
USE_PROD_MODE="false"

# Next.js 15 is stable on active LTS lines; newer majors can break dev HMR chunking.
if [ "$NODE_MAJOR" -ge 23 ]; then
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
