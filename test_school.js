/* 回归测试：校内默写加强版块
 * 1) 按单元整卷默写：header 正确、每轮 10 词
 * 2) 校内错词特训：读 SCHOOL_MISTAKES 错词本、只练错词、计数正确
 * 3) 错词本为空时不报错
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
  location: { hash: '#map' },
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
load('data/school-mistakes.js');
load('game.js');
load('minigames.js');
load('flow.js');

const WA = sandbox.window.WA;

/* ---------- 按单元整卷默写 ---------- */
check('WA 导出校内默写接口', typeof WA.startSchoolDictation === 'function' && typeof WA.startSchoolMistakes === 'function');
WA.startSchoolDictation('u01-school-life');
let header = elements['dictation-door-name'].textContent;
check('单元默写 header', header.indexOf('校内默写') >= 0 && header.indexOf('U1') >= 0, header);
check('每轮 10 词', elements['dictation-progress'].textContent === '1/10', elements['dictation-progress'].textContent);

/* ---------- 校内错词特训 ---------- */
sandbox.window.SCHOOL_MISTAKES = { 'u01-school-life': ['life', 'break', 'history', '不存在的词xyz'] };
check('错词本计数', WA.schoolMistakeCount() === 4, String(WA.schoolMistakeCount()));
WA.startSchoolMistakes();
header = elements['dictation-door-name'].textContent;
check('错词特训 header（只匹配到 3 个真实词条）', header.indexOf('校内错词特训') >= 0 && header.indexOf('3 词') >= 0, header);
check('错词特训队列', elements['dictation-progress'].textContent === '1/3', elements['dictation-progress'].textContent);

/* ---------- 空错词本不报错 ---------- */
sandbox.window.SCHOOL_MISTAKES = {};
let crashed = false;
try { WA.startSchoolMistakes(); } catch (e) { crashed = true; }
check('空错词本不报错', !crashed && WA.schoolMistakeCount() === 0);

/* ---------- 真实批次：U1（9月10日）diary + easy ---------- */
// diary 是 u05 主词条；easy 是 u9u10 的 dictationExtra 补充词，验证跨单元与补充词查找
sandbox.window.SCHOOL_MISTAKES = { 'U1（9月10日）': ['diary', 'easy'] };
WA.startSchoolMistakes();
header = elements['dictation-door-name'].textContent;
check('批次错词特训（diary + easy 均找到）', header.indexOf('默写 2 词') >= 0, header);

/* ---------- 真实批次：U2（9月21日）6 个订正词/短语 ---------- */
sandbox.window.SCHOOL_MISTAKES = {
  'U2（9月21日）': ['excited', 'strength', 'favourite', 'come to life', 'as fast as the wind', 'interesting']
};
WA.startSchoolMistakes();
header = elements['dictation-door-name'].textContent;
check('U2 批次错词特训（6 个词条均找到）', header.indexOf('默写 6 词') >= 0, header);
check('U2 错词特训队列', elements['dictation-progress'].textContent === '1/6', elements['dictation-progress'].textContent);

/* ---------- 真实批次：U3（10月12日）4 个订正词/短语 ---------- */
sandbox.window.SCHOOL_MISTAKES = {
  'U3（10月12日）': ['tomato', 'a sunny day', 'look for', 'botanical garden']
};
WA.startSchoolMistakes();
header = elements['dictation-door-name'].textContent;
check('U3 批次错词特训（4 个词条均找到）', header.indexOf('默写 4 词') >= 0, header);
check('U3 错词特训队列', elements['dictation-progress'].textContent === '1/4', elements['dictation-progress'].textContent);

/* ---------- 真实批次：U4（10月29日）10 个订正词条 ---------- */
sandbox.window.SCHOOL_MISTAKES = {
  'U4（10月29日）': [
    'habit', 'flamingo', 'injection', 'birth', 'minute', 'a short film', 'try to',
    'a panda cub', 'a little bit of white hair', "I'd like to join the Safari Park Kids Club."
  ]
};
WA.startSchoolMistakes();
header = elements['dictation-door-name'].textContent;
check('U4 批次错词特训（10 个词条均找到）', header.indexOf('默写 10 词') >= 0, header);
check('U4 错词特训队列', elements['dictation-progress'].textContent === '1/10', elements['dictation-progress'].textContent);

/* ---------- 首页版块渲染 ---------- */
sandbox.window.WAFlow.renderToday();
const todayHtml = elements['today-screen'] ? elements['today-screen'].innerHTML : '';
check('首页含校内默写版块', todayHtml.indexOf('校内默写加强') >= 0);
check('首页含 4 个单元按钮', (todayHtml.match(/data-act="school"/g) || []).length === 4);
check('首页含错词特训按钮', todayHtml.indexOf('data-act="school-weak"') >= 0);
check('校内版块含错因分析', todayHtml.indexOf('错因分析') >= 0);
check('校内版块含 7 天提高计划', todayHtml.indexOf('7 天提高计划') >= 0 && todayHtml.indexOf('第 7 天') >= 0);
check('提高计划含验收标准', todayHtml.indexOf('连续 2 轮全对') >= 0 && todayHtml.indexOf('90%') >= 0);

if (failures) { console.log('\n回归测试失败 ' + failures + ' 项'); process.exit(1); }
console.log('\n校内默写版块回归测试全部通过 ✓');
