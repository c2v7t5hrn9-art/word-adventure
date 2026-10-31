/* 回归测试：验证本次三处修复
 * 1) 薄弱词特训 = 默写（startWeakDictation 存在、词数 ≤10、走 dictation 屏幕）
 * 2) 斗地主：玩家手牌中必须能出现与题目完全相同的词（且多数回合有可出牌）
 * 3) 单词射击：速度常量已降到慢速档
 * 失败时 exit 1。 */
const fs = require('fs');
const vm = require('vm');

function makeEl(id) {
  const el = {
    id: id || '', _innerHTML: '', children: [], dataset: {},
    style: new Proxy({}, { get: (t, k) => (k === 'setProperty' ? () => {} : t[k]), set: () => true }),
    classList: {
      _set: new Set(),
      add(c) { this._set.add(c); }, remove(c) { this._set.delete(c); },
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
    onload: null, onerror: null,
    textContent: '', value: '', disabled: false
  };
  return el;
}

const elements = {};
const document = {
  readyState: 'complete',
  getElementById(id) { if (!elements[id]) elements[id] = makeEl(id); return elements[id]; },
  createElement(t) { return makeEl(t); },
  createElementNS(ns, t) { return makeEl(t); },
  querySelector() { return makeEl(); },
  querySelectorAll() { return []; },
  addEventListener() {},
  body: makeEl('body'), hidden: true
};

const store = {};
const sandbox = {
  console, document,
  localStorage: {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: (k) => { delete store[k]; }
  },
  location: { hash: '#map' }, // 跳过今日首页首渲
  navigator: {},
  setTimeout: () => 0, clearTimeout() {}, clearInterval() {}, setInterval: () => 0,
  alert() {}, confirm: () => true,
  addEventListener() {}, removeEventListener() {},
  URL: { createObjectURL: () => '', revokeObjectURL() {} },
  Blob: function () {}, FileReader: function () { this.readAsText = () => {}; },
  fetch: () => Promise.resolve({ ok: false, status: 404, headers: { get: () => 'text/html' }, json: () => Promise.reject(new Error('x')) }),
  window: null
};
sandbox.window = sandbox;
vm.createContext(sandbox);

function load(f) { vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f }); }

let failures = 0;
function check(name, ok, detail) {
  console.log((ok ? '✓ ' : '✗ ') + name + (detail ? ' — ' + detail : ''));
  if (!ok) failures++;
}

load('data/words-data.js');
load('game.js');
load('minigames.js');
load('flow.js');

const WA = sandbox.window.WA;

/* ---------- 修复 1：薄弱词特训 = 默写 ---------- */
check('WA 导出 startWeakDictation', typeof WA.startWeakDictation === 'function');

// 造 3 个错词（选词库中真实存在的词）
const sample = WA.DATA.units[0].entries.slice(0, 3);
sample.forEach((e) => {
  const key = e.text.toLowerCase().replace(/\s+/g, '');
  WA.save.spellStats[key] = { correct: 0, wrong: 3, lastWrong: '2026-10-01' };
});
WA.startWeakDictation();
const doorName = elements['dictation-door-name'] ? elements['dictation-door-name'].textContent : '';
check('薄弱词特训进入默写屏', doorName.indexOf('薄弱词特训') >= 0 && doorName.indexOf('默写') >= 0, doorName);
const prog = elements['dictation-progress'] ? elements['dictation-progress'].textContent : '';
check('默写队列 = 3 个错词', prog === '1/3', prog);

/* ---------- 修复 2：斗地主能出相同词 ---------- */
const RUNS = 200;
let exactMatchRuns = 0, playableRuns = 0;
for (let i = 0; i < RUNS; i++) {
  sandbox.window.WAMinigames.startLandlord();
  const html = elements['landlord-body'].innerHTML;
  const qm = html.match(/参考词：<b>([^<]+)<\/b>/);
  const q = qm ? qm[1] : null;
  const playable = [];
  const cardRe = /<button class="ll-card ll-card-match"[\s\S]*?<span class="ll-card-word">([^<]+)<\/span>/g;
  let cm;
  while ((cm = cardRe.exec(html))) playable.push(cm[1]);
  if (playable.length > 0) playableRuns++;
  if (q && playable.some((w) => w.toLowerCase() === q.toLowerCase())) exactMatchRuns++;
}
check('斗地主多数回合有可出牌', playableRuns / RUNS >= 0.5, playableRuns + '/' + RUNS);
check('斗地主手牌含题目原词', exactMatchRuns / RUNS >= 0.45, exactMatchRuns + '/' + RUNS + '（修复前恒为 0）');

/* ---------- 修复 3：射击速度常量 ---------- */
const src = fs.readFileSync('minigames.js', 'utf8');
check('射击：出弹间隔降为 1800ms', src.indexOf('spawnInterval: 1800') >= 0);
check('射击：时长升为 40s', src.indexOf('timeLeft: 40') >= 0);
check('射击：初速降为 0.05+0.04 档', src.indexOf('0.05 + Math.random() * 0.04') >= 0);
check('射击：靠近速度降为 dt*0.05', src.indexOf('t.z + dt * 0.05') >= 0);
check('射击：向心拉力按 dt 缩放', src.indexOf('* 0.25 * dt') >= 0);

if (failures) { console.log('\n回归测试失败 ' + failures + ' 项'); process.exit(1); }
console.log('\n回归测试全部通过 ✓');
