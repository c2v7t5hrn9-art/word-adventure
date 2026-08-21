/* 冒烟测试：用最小 DOM 桩加载 words-data.js + game.js + flow.js，
   验证启动流程不抛错、WA 桥接导出、buildMap 真的渲染了岛屿。 */
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index-v2.html', 'utf8');
const htmlIds = new Set([...html.matchAll(/id="([^"]*)"/g)].map((m) => m[1]));
// 回归测试：模拟页面再次缺失某元素（如未来新功能漏加按钮），验证启动不再中断
if (process.env.SIMULATE_MISSING) process.env.SIMULATE_MISSING.split(',').forEach((id) => htmlIds.delete(id));

const lateIds = new Set(); // HTML 中不存在、运行时被 getElementById 的 id
const missingIds = new Set((process.env.SIMULATE_MISSING || '').split(',').filter(Boolean));

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
    appendChild(c) { this.children.push(c); return c; },
    remove() {}, focus() {}, click() {},
    querySelector() { return makeEl(); },
    querySelectorAll() { return []; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 10, height: 10 }; },
    set innerHTML(v) { this._innerHTML = String(v); },
    get innerHTML() { return this._innerHTML; },
    textContent: '', value: '', disabled: false
  };
  return el;
}

const elements = {};
const document = {
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
  body: makeEl('body')
};

const store = {};
const sandbox = {
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
  window: null
};
sandbox.window = sandbox;
vm.createContext(sandbox);

for (const f of ['data/words-data.js', 'game.js', 'minigames.js', 'flow.js']) {
  vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f });
  console.log('✓ 加载完成:', f);
}

console.log('---');
let failed = false;
function check(name, ok, detail) {
  console.log((ok ? '✓ ' : '✗ ') + name + (detail ? ' — ' + detail : ''));
  if (!ok) failed = true;
}

check('WA 桥接导出', !!sandbox.WA);
check('WAFlow 导出', !!sandbox.WAFlow);
const world = elements['world'];
check('地图渲染', !!(world && world.children.length > 0),
  world ? world.children.length + ' 座岛屿' : 'world 元素不存在');
check('HUD 星星已更新', !!(elements['hud-stars'] && /^⭐ \d+$/.test(elements['hud-stars'].textContent)),
  elements['hud-stars'] && elements['hud-stars'].textContent);
check('今日首页渲染', !!(elements['today-screen'] && elements['today-screen']._innerHTML.includes('今日复习')));
console.log('动态 id（运行时 innerHTML 生成，允许）:', [...lateIds].join(', ') || '无');

if (failed) {
  console.error('\n冒烟测试失败 ✗');
  process.exit(1);
}
console.log('\n冒烟测试通过 ✓');
