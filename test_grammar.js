/* 回归测试：语法条目必须走“例句＋同类题＋解析”，不得生成普通词汇题。 */
const fs = require('fs');
const vm = require('vm');

function makeEl(id) {
  return {
    id: id || '', _innerHTML: '', children: [], dataset: {},
    style: new Proxy({}, { get: (t, k) => (k === 'setProperty' ? () => {} : t[k]), set: () => true }),
    classList: {
      _set: new Set(),
      add(c) { this._set.add(c); }, remove(c) { this._set.delete(c); },
      toggle(c, f) { if (f === undefined) { this._set.has(c) ? this._set.delete(c) : this._set.add(c); } else if (f) this._set.add(c); else this._set.delete(c); },
      contains(c) { return this._set.has(c); }
    },
    addEventListener() {}, removeEventListener() {}, setAttribute() {},
    appendChild(c) { this.children.push(c); return c; }, remove() {}, focus() {}, click() {},
    querySelector() { return makeEl(); }, querySelectorAll() { return []; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 10, height: 10 }; },
    set innerHTML(v) { this._innerHTML = String(v); }, get innerHTML() { return this._innerHTML; },
    textContent: '', value: '', disabled: false, onclick: null
  };
}

const elements = {};
const document = {
  readyState: 'complete',
  getElementById(id) { if (!elements[id]) elements[id] = makeEl(id); return elements[id]; },
  createElement(t) { return makeEl(t); }, createElementNS(ns, t) { return makeEl(t); },
  querySelector() { return makeEl(); }, querySelectorAll() { return []; }, addEventListener() {},
  body: makeEl('body'), hidden: true
};
const store = {};
const sandbox = {
  console, document,
  localStorage: {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); }, removeItem: (k) => { delete store[k]; }
  },
  location: { hash: '#map' }, navigator: {},
  setTimeout: () => 0, clearTimeout() {}, clearInterval() {}, setInterval: () => 0,
  alert() {}, confirm: () => true, addEventListener() {}, removeEventListener() {},
  URL: { createObjectURL: () => '', revokeObjectURL() {} }, Blob: function () {},
  FileReader: function () { this.readAsText = () => {}; },
  fetch: () => Promise.resolve({ ok: false, status: 404, headers: { get: () => 'text/html' } }),
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
load('data/grammar-exercises.js');
load('game.js');
load('minigames.js');
load('flow.js');

const WA = sandbox.WA;
const bank = sandbox.GRAMMAR_EXERCISES;
const grammarEntries = WA.DATA.units.flatMap((u) => u.entries).filter(WA.isGrammarEntry);
check('识别全部 43 个语法条目', grammarEntries.length === 43, String(grammarEntries.length));
check('题库无多余条目', Object.keys(bank).length === grammarEntries.length,
  Object.keys(bank).length + '/' + grammarEntries.length);

let complete = true;
let validOptions = true;
let distinctContext = true;
for (const e of grammarEntries) {
  const ex = bank[e.id];
  if (!ex || !ex.example || !ex.exampleZh || !ex.question || !ex.questionZh || !ex.explanation) {
    complete = false;
    console.log('  缺字段:', e.id);
    continue;
  }
  if (!Array.isArray(ex.options) || ex.options.length !== 4 ||
      new Set(ex.options).size !== 4 || ex.options.filter((o) => o === ex.answer).length !== 1) {
    validOptions = false;
    console.log('  选项异常:', e.id);
  }
  if (ex.question === ex.example) distinctContext = false;
}
check('每题都有例句、中文提示、同类题和解析', complete);
check('每题 4 个不同选项且唯一正确答案', validOptions);
check('练习与例句使用不同语境', distinctContext);

const grammarTexts = new Set(grammarEntries.map((e) => e.text));
const grammarDoors = [...new Set(grammarEntries.map((e) => e.door))];
let allGrammarQuestions = true;
let renderedFields = true;
let questionCount = 0;
for (const doorId of grammarDoors) {
  const qs = WA.buildQuestions(WA.DOOR_BY_ID[doorId]);
  questionCount += qs.length;
  for (const q of qs) {
    if (!q || (grammarTexts.has(q.entryText) && q.kind !== 'grammar')) allGrammarQuestions = false;
    if (q && q.kind === 'grammar' && (!q.promptHTML.includes('📖 例句') ||
        !q.promptHTML.includes('✏️ 练一练') || !q.explanation || q.options.length !== 4 ||
        q.options.filter((o) => o.correct).length !== 1)) renderedFields = false;
  }
}
check('所有语法条目均不再生成普通词汇题', allGrammarQuestions,
  grammarDoors.join(', ') + ' 门，共 ' + questionCount + ' 题');
check('生成题均含例句、同类题、解析和唯一答案', renderedFields);

WA.startQuiz(WA.DOOR_BY_ID[41]);
check('语法门可正常开始并渲染', elements['q-type'].textContent.includes('语法闯关') &&
  elements['q-prompt'].innerHTML.includes('grammar-example') && elements['q-options'].children.length === 4);

if (failures) { console.log('\n语法练习回归测试失败 ' + failures + ' 项'); process.exit(1); }
console.log('\n语法练习回归测试全部通过 ✓');
