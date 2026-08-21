/* 单词冒险岛 · 轻后端
 * 功能：
 *   1. 静态文件服务（'/' 默认打开 index.html）
 *   2. 进度同步 API（无需数据库，存档以 JSON 文件存于 saves/ 目录）
 *      GET  /api/progress/:code   → { save, updatedAt } | 404
 *      PUT  /api/progress/:code   ← { save }  → { ok, updatedAt }
 *      code 为 3-20 位数字/字母/短横线（孩子的「冒险密码」）
 * 启动：node server.js --port 7100 [--host 0.0.0.0]
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

function arg(name, fallback) {
  const i = process.argv.indexOf('--' + name);
  if (i !== -1 && process.argv[i + 1]) return process.argv[i + 1];
  const eq = process.argv.find(a => a.startsWith('--' + name + '='));
  if (eq) return eq.split('=')[1];
  return fallback;
}

const port = parseInt(arg('port', process.env.PORT || '7100'), 10);
const host = arg('host', '127.0.0.1');
const root = __dirname;
const savesDir = path.join(root, 'saves');
if (!fs.existsSync(savesDir)) fs.mkdirSync(savesDir, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const CODE_RE = /^[0-9a-zA-Z-]{3,20}$/;

function sendJSON(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(body);
}

function savePath(code) {
  return path.join(savesDir, code + '.json');
}

function handleApi(req, res, urlPath) {
  const m = urlPath.match(/^\/api\/progress\/([0-9a-zA-Z-]{3,20})$/);
  if (!m) { sendJSON(res, 404, { error: 'not_found' }); return true; }
  const code = m[1];

  if (req.method === 'GET') {
    fs.readFile(savePath(code), 'utf8', (err, text) => {
      if (err) { sendJSON(res, 404, { error: 'no_save' }); return; }
      try { sendJSON(res, 200, JSON.parse(text)); }
      catch (e) { sendJSON(res, 500, { error: 'corrupt' }); }
    });
    return true;
  }

  if (req.method === 'PUT') {
    let body = '';
    req.on('data', (c) => {
      body += c;
      if (body.length > 2 * 1024 * 1024) req.destroy(); // 2MB 上限
    });
    req.on('end', () => {
      let payload;
      try { payload = JSON.parse(body); } catch (e) { sendJSON(res, 400, { error: 'bad_json' }); return; }
      if (!payload || typeof payload.save !== 'object' || !payload.save) {
        sendJSON(res, 400, { error: 'missing_save' }); return;
      }
      const record = { save: payload.save, updatedAt: Date.now() };
      const tmp = savePath(code) + '.tmp';
      fs.writeFile(tmp, JSON.stringify(record), (err) => {
        if (err) { sendJSON(res, 500, { error: 'write_failed' }); return; }
        fs.rename(tmp, savePath(code), (err2) => {
          if (err2) { sendJSON(res, 500, { error: 'write_failed' }); return; }
          sendJSON(res, 200, { ok: true, updatedAt: record.updatedAt });
        });
      });
    });
    return true;
  }

  sendJSON(res, 405, { error: 'method_not_allowed' });
  return true;
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath.startsWith('/api/')) { handleApi(req, res, urlPath); return; }

  let file = urlPath === '/' ? '/index.html' : urlPath;
  const filePath = path.normalize(path.join(root, file));
  if (!filePath.startsWith(root)) { res.writeHead(403); res.end(); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not Found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, host, () => {
  console.log(`单词冒险岛 server 已启动（同步 API: /api/progress/<code>）`);
  console.log(`  本机访问: http://127.0.0.1:${port}/`);
  if (host === '0.0.0.0') {
    const os = require('os');
    const nets = os.networkInterfaces();
    Object.keys(nets).forEach((name) => {
      (nets[name] || []).forEach((n) => {
        if (n.family === 'IPv4' && !n.internal) {
          console.log(`  局域网访问（同一 Wi-Fi 的其他设备）: http://${n.address}:${port}/`);
        }
      });
    });
  } else {
    console.log(`  提示：加 --host 0.0.0.0 可让同一 Wi-Fi 的 iPad/手机访问`);
  }
});
