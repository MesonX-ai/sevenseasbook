/**
 * Minimal zero-dependency static server + streaming API gateway for the
 * Next.js `out/` export.
 *
 * Usage: node serve.js   (or: npm start)
 *
 * Config via env:
 *   PORT        - listen port (default 3000)
 *   OUT_DIR     - static export dir (default ./out)
 *   API_PREFIX  - path prefix proxied to the upstream (default /api)
 *   UPSTREAM_URL- base URL of the backend the gateway forwards to,
 *                 e.g. http://localhost:8000  (omit to disable forwarding)
 *
 * Requests under API_PREFIX are streamed to UPSTREAM_URL and the upstream
 * response (including SSE/token streams) is piped straight back to the
 * client without buffering. Everything else serves the static export.
 */
const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const ROOT = path.resolve(__dirname, process.env.OUT_DIR || "out");

// Support --port / -p CLI args (e.g. `node serve.js --port 3000`) as well as PORT env.
let PORT = Number(process.env.PORT) || 3000;
const argv = process.argv.slice(2);
const portFlagIndex = argv.findIndex((a) => a === "--port" || a === "-p");
if (portFlagIndex !== -1) {
  const inlineValue = argv[portFlagIndex + 1];
  if (inlineValue && !inlineValue.startsWith("-")) {
    PORT = Number(inlineValue) || PORT;
  } else if (argv[portFlagIndex].startsWith("--port=")) {
    PORT = Number(argv[portFlagIndex].split("=")[1]) || PORT;
  }
}
const API_PREFIX = process.env.API_PREFIX || "/api";
const UPSTREAM_URL = process.env.UPSTREAM_URL || "";

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

/**
 * Stream-proxy a request to the configured upstream. Both the request body
 * and the upstream response are piped through without buffering, so SSE and
 * other streaming responses flow to the client in real time.
 */
function forward(req, res, reqUrl) {
  let target;
  try {
    target = new URL(reqUrl.pathname + reqUrl.search, UPSTREAM_URL);
  } catch {
    return send(res, 502, "Bad gateway: invalid upstream URL", "text/plain");
  }

  const client = target.protocol === "https:" ? https : http;
  const headers = { ...req.headers };
  // Let the gateway set the host for the upstream instead of the client's.
  delete headers.host;

  const upstreamReq = client.request(
    target,
    { method: req.method, headers },
    (upstreamRes) => {
      res.writeHead(upstreamRes.statusCode || 502, upstreamRes.headers);
      upstreamRes.pipe(res);
    }
  );

  upstreamReq.on("error", (err) => {
    send(res, 502, `Bad gateway: ${err.message}`, "text/plain");
  });

  req.pipe(upstreamReq);
}

const server = http.createServer((req, res) => {
  let reqUrl;
  try {
    reqUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  } catch {
    return send(res, 400, "Bad request", "text/plain");
  }

  const pathname = decodeURIComponent(reqUrl.pathname);

  if (UPSTREAM_URL && pathname.startsWith(API_PREFIX)) {
    return forward(req, res, reqUrl);
  }
  if (!UPSTREAM_URL && pathname.startsWith(API_PREFIX)) {
    return send(
      res,
      501,
      "API gateway disabled: set UPSTREAM_URL to enable forwarding",
      "text/plain"
    );
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
