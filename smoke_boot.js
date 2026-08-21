/* 冒烟测试：用最小 DOM 桩按真实加载链路验证启动流程。
 * 真实链路（与 index.html 一致）：
 *   静态加载 words-data.js + sync.js → sync.js 探测 API（这里模拟纯静态托管返回 HTML 404）
 *   → 进入仅本机模式 → 按序注入 game.js → minigames.js → flow.js
 * 断言：注入顺序正确、WA/WAFlow 桥接导出、岛屿渲染、HUD 更新、今日首页渲染。
 * SIMULATE_MISSING=a,b 可模拟页面缺失元素，验证启动不中断。失败时 exit 1。 */
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');
const htmlIds = new Set([...html.matchAll(/id="([^"]*)"/g)].map((m) => m[1]));
// 回归测试：模拟页面再次缺失某元素（如未来新功能漏加按钮），验证启动不再中断
if (process.env.SIMULATE_MISSING) process.env.SIMULATE_MISSING.split(',').forEach((id) => htmlIds.delete(id));

const lateIds = new Set(); // HTML 中不存在、运行时被 getElementById 的 id
const missingIds = new Set((process.env.SIMULATE_MISSING || '').split(',').filter(Boolean));
const injected = [];       // 记录 sync.js 注入脚本顺序

let sandbox;

function makeEl(id) {
  const el = {
    id: id || '',
    _innerHTML: '',
    children: [],
    dataset: {},
    style: new Proxy({}, { get: (t, k) => (k === 'setProperty' ? () => {} : t[k]), set: () => true }),
    classList: {
      _set: new Set(),
      add(c) { this._set.add(c); },
      remove(c) { this._set.delete(c); },
      toggle(c, f) { if (f === undefined) { this._set.has(c) ? this._set.delete(c) : this._set.add(c); } else if (f) this._set.add(c); else this._set.delete(c); },
      contains(c) { return this._set.has(c); }
    },
    addEventListener() {}, removeEventListener() {},
    setAttribute() {}, getAttribute() { return null; },
    appendChild(c) {
      this.children.push(c);
      // 模拟浏览器加载注入的 <script src>：真实读入本地文件执行
      if (c && c._src) {
        const file = c._src.split('?')[0];
        injected.push(file);
        try {
          vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox, { filename: file });
          if (c.onload) c.onload();
        } catch (e) {
          if (c.onerror) c.onerror(e);
          else throw e;
        }
      }
      return c;
    },
    remove() {}, focus() {}, click() {},
    querySelector() { return makeEl(); },
    querySelectorAll() { return []; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 10, height: 10 }; },
    set innerHTML(v) { this._innerHTML = String(v); },
    get innerHTML() { return this._innerHTML; },
    set src(v) { this._src = v; },
    get src() { return this._src; },
    onload: null, onerror: null,
    textContent: '', value: '', disabled: false
  };
  return el;
}

const elements = {};
const document = {
  readyState: 'complete',
  getElementById(id) {
    if (missingIds.has(id)) return null; // 模拟浏览器中元素缺失的真实行为
    if (!htmlIds.has(id)) lateIds.add(id);
    if (!elements[id]) elements[id] = makeEl(id);
    return elements[id];
  },
  createElement(tag) { return makeEl(tag); },
  createElementNS(ns, tag) { return makeEl(tag); },
  querySelector(sel) { return makeEl(sel); },
  querySelectorAll() { return []; },
  addEventListener() {},
  body: makeEl('body'),
  hidden: true
};

const store = {};
sandbox = {
  console,
  document,
  localStorage: {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; }
  },
  location: { hash: '' },
  navigator: {},
  setTimeout: (fn) => 0, // 不真的延时执行
  clearTimeout() {},
  alert() {}, confirm: () => true,
  addEventListener() {}, removeEventListener() {},
  URL: { createObjectURL: () => '', revokeObjectURL() {} },
  Blob: function () {},
  FileReader: function () { this.readAsText = () => {}; },
  // 模拟纯静态托管：/api 返回 HTML 404（无 JSON），sync.js 应探测后进入仅本机模式
  fetch: () => Promise.resolve({
    ok: false,
    status: 404,
    headers: { get: () => 'text/html' },
    json: () => Promise.reject(new Error('not json'))
  }),
  window: null
};
sandbox.window = sandbox;
vm.createContext(sandbox);

async function main() {
  // 与 index.html 一致的静态脚本
  for (const f of ['data/words-data.js', 'sync.js']) {
    vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f });
    console.log('✓ 静态加载:', f);
  }

  // 等待 sync.js 的探测 + 注入链完成
  await new Promise((r) => setTimeout(r, 100));

  console.log('---');
  let failed = false;
  function check(name, ok, detail) {
    console.log((ok ? '✓ ' : '✗ ') + name + (detail ? ' — ' + detail : ''));
    if (!ok) failed = true;
  }

  check('脚本注入顺序 game → minigames → flow',
    injected.length === 3 &&
    injected[0] === 'game.js' && injected[1] === 'minigames.js' && injected[2] === 'flow.js',
    injected.join(' → '));
  check('WA 桥接导出', !!sandbox.WA);
  check('WAFlow 导出', !!sandbox.WAFlow);
  const world = elements['world'];
  check('地图渲染', !!(world && world.children.length > 0),
    world ? world.children.length + ' 座岛屿' : 'world 元素不存在');
  check('HUD 星星已更新', !!(elements['hud-stars'] && /^⭐ \d+$/.test(elements['hud-stars'].textContent)),
    elements['hud-stars'] && elements['hud-stars'].textContent);
  check('今日首页渲染', !!(elements['today-screen'] && elements['today-screen']._innerHTML.includes('今日复习')));
  check('静态托管自动降级仅本机', store['wa-sync-mode'] === 'local', store['wa-sync-mode']);
  console.log('动态 id（运行时 innerHTML 生成，允许）:', [...lateIds].join(', ') || '无');

  if (failed) {
    console.error('\n冒烟测试失败 ✗');
    process.exit(1);
  }
  console.log('\n冒烟测试通过 ✓');
}

main().catch((e) => { console.error(e); process.exit(1); });
