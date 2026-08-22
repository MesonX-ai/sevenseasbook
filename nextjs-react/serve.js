/**
 * Minimal zero-dependency static server for the Next.js `out/` export.
 * Usage: node serve.js   (or: npm start)
 * Config via env: PORT (default 3000), OUT_DIR (default ./out)
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, process.env.OUT_DIR || "out");
const PORT = Number(process.env.PORT) || 3000;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
};

function send(res, status, body, type) {
  res.writeHead(status, type ? { "Content-Type": type } : {});
  res.end(body);
}

function sendFile(res, filePath, status = 200) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fall back to the static export's 404 page when available.
      fs.readFile(path.join(ROOT, "404.html"), (err404, data404) => {
        if (err404) send(res, 404, "Not found", "text/plain");
        else send(res, 404, data404, "text/html; charset=utf-8");
      });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    send(res, status, data, MIME[ext] || "application/octet-stream");
  });
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host || "localhost"}`).pathname);
  } catch {
    return send(res, 400, "Bad request", "text/plain");
  }

  let filePath = path.normalize(path.join(ROOT, pathname));
  if (!filePath.startsWith(ROOT)) {
    return send(res, 403, "Forbidden", "text/plain");
  }

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) {
      // trailingSlash: true export -> directories map to <dir>/index.html
      return sendFile(res, path.join(filePath, "index.html"));
    }
    if (!err) {
      return sendFile(res, filePath);
    }
    // No extension and missing? Try adding .html (covers non-directory exports).
    if (!path.extname(filePath)) {
      return sendFile(res, `${filePath}.html`);
    }
    sendFile(res, filePath); // triggers the 404 fallback
  });
});

server.listen(PORT, () => {
  console.log(`Seven SEAS preview running at http://localhost:${PORT} (serving ${ROOT})`);
});
