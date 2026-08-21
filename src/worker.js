/* ============================================================
 * Cloudflare Worker · 单词冒险岛
 * 职责：
 *   1. /api/progress/:code  → 进度同步接口（存档存 KV 绑定 SAVES）
 *      GET  → { save, updatedAt } | 404 { error: 'no_save' }
 *      PUT  ← { save } → { ok, updatedAt }
 *   2. 其余路径 → 静态资产（index.html 等）
 * ============================================================ */

const CODE_RE = /^[0-9a-zA-Z-]{3,20}$/;
const MAX_BYTES = 2 * 1024 * 1024; // 2MB 上限

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

async function handleProgress(request, env, code) {
  if (!env.SAVES) return json({ error: 'sync_not_configured' }, 503);

  if (request.method === 'GET') {
    const text = await env.SAVES.get(code);
    if (!text) return json({ error: 'no_save' }, 404);
    return new Response(text, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  if (request.method === 'PUT') {
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

  return json({ error: 'method_not_allowed' }, 405);
}

export default {
  async fetch(request, env) {
    const pathname = new URL(request.url).pathname;
    if (pathname.startsWith('/api/')) {
      const m = pathname.match(/^\/api\/progress\/([0-9a-zA-Z-]{3,20})$/);
      if (!m) return json({ error: 'not_found' }, 404);
      return handleProgress(request, env, m[1]);
    }
    return env.ASSETS.fetch(request);
  }
};
