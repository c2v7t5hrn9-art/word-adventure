/* ============================================================
 * Cloudflare Pages Function · /api/progress/:code
 * 进度同步接口（替代原 server.js 的后端部分），存档存于 KV 绑定 SAVES。
 * 接口契约与 server.js 完全一致：
 *   GET  /api/progress/:code → { save, updatedAt } | 404 { error: 'no_save' }
 *   PUT  /api/progress/:code ← { save }            → { ok, updatedAt }
 * code 为 3-20 位数字/字母/短横线（孩子的「冒险密码」）。
 * ============================================================ */

const CODE_RE = /^[0-9a-zA-Z-]{3,20}$/;
const MAX_BYTES = 2 * 1024 * 1024; // 2MB 上限（与 server.js 一致）

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

export async function onRequestGet({ params, env }) {
  const code = params.code;
  if (!CODE_RE.test(code)) return json({ error: 'not_found' }, 404);
  const text = await env.SAVES.get(code);
  if (!text) return json({ error: 'no_save' }, 404);
  // KV 里存的就是完整记录 { save, updatedAt }，原样返回
  return new Response(text, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

export async function onRequestPut({ params, env, request }) {
  const code = params.code;
  if (!CODE_RE.test(code)) return json({ error: 'not_found' }, 404);

  let payload;
  try {
    payload = await request.json();
  } catch (e) {
    return json({ error: 'bad_json' }, 400);
  }
  if (!payload || typeof payload.save !== 'object' || !payload.save) {
    return json({ error: 'missing_save' }, 400);
  }

  const record = { save: payload.save, updatedAt: Date.now() };
  const body = JSON.stringify(record);
  if (body.length > MAX_BYTES) return json({ error: 'too_large' }, 413);

  await env.SAVES.put(code, body);
  return json({ ok: true, updatedAt: record.updatedAt });
}
