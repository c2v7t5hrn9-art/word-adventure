/* Worker 接口契约测试：用内存 KV 模拟 env，验证 src/worker.js 的请求处理。
 * 失败时 exit 1。运行：node test_worker.mjs */
import worker from './src/worker.js';

let failed = false;
function check(name, ok, detail) {
  console.log((ok ? '✓ ' : '✗ ') + name + (detail ? ' — ' + detail : ''));
  if (!ok) failed = true;
}

const kv = new Map();
const env = {
  SAVES: {
    get: async (k) => (kv.has(k) ? kv.get(k) : null),
    put: async (k, v) => { kv.set(k, v); }
  },
  ASSETS: { fetch: async (req) => new Response('static:' + new URL(req.url).pathname) }
};

// 1. GET 不存在的密码 → 404 + JSON no_save
let r = await worker.fetch(new Request('https://x/api/progress/0000'), env);
check('GET 未知密码返回 404 JSON', r.status === 404 && (await r.json()).error === 'no_save', 'status=' + r.status);

// 2. PUT 上传存档 → 200 ok
r = await worker.fetch(new Request('https://x/api/progress/1234', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ save: { doors: { 1: { stars: 3 } }, bonusStars: 0 } })
}), env);
check('PUT 存档返回 ok', r.status === 200 && (await r.json()).ok === true, 'status=' + r.status);

// 3. GET 读回存档 → save + updatedAt
r = await worker.fetch(new Request('https://x/api/progress/1234'), env);
const rec = await r.json();
check('GET 读回存档', r.status === 200 && rec.save && rec.save.doors && typeof rec.updatedAt === 'number');

// 4. PUT 缺 save 字段 → 400
r = await worker.fetch(new Request('https://x/api/progress/1234', { method: 'PUT', body: '{}' }), env);
check('PUT 缺 save 返回 400', r.status === 400, 'status=' + r.status);

// 5. 非法密码格式 → 404（不触碰 KV）
r = await worker.fetch(new Request('https://x/api/progress/bad_code!'), env);
check('非法密码返回 404', r.status === 404, 'status=' + r.status);

// 6. DELETE 不支持 → 405
r = await worker.fetch(new Request('https://x/api/progress/1234', { method: 'DELETE' }), env);
check('DELETE 返回 405', r.status === 405, 'status=' + r.status);

// 7. 非 API 路径 → 透传静态资产
r = await worker.fetch(new Request('https://x/game.js'), env);
check('静态资产透传', (await r.text()) === 'static:/game.js');

// 8. 未绑定 KV → 503 JSON（前端探测据此降级仅本机）
r = await worker.fetch(new Request('https://x/api/progress/1234'), { ASSETS: env.ASSETS });
check('未绑 KV 返回 503', r.status === 503 && (await r.json()).error === 'sync_not_configured', 'status=' + r.status);

if (failed) {
  console.error('\nWorker 契约测试失败 ✗');
  process.exit(1);
}
console.log('\nWorker 契约测试通过 ✓');
