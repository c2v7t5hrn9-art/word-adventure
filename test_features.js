/* 回归测试：设置保存、复习累计星星、切题后旧语音不得补播。 */
const fs = require('fs');
const vm = require('vm');

function makeEl(id, tag) {
  const listeners = {};
  const el = {
    id: id || '', tagName: String(tag || 'div').toUpperCase(), _innerHTML: '', children: [], dataset: {},
    style: new Proxy({}, { get: (t, k) => (k === 'setProperty' ? () => {} : t[k]), set: () => true }),
    classList: {
      _set: new Set(),
      add(c) { this._set.add(c); }, remove(c) { this._set.delete(c); },
      toggle(c, f) { if (f === undefined) { this._set.has(c) ? this._set.delete(c) : this._set.add(c); } else if (f) this._set.add(c); else this._set.delete(c); },
      contains(c) { return this._set.has(c); }
    },
    className: '', textContent: '', value: '', disabled: false, onclick: null,
    addEventListener(ev, fn) { (listeners[ev] || (listeners[ev] = [])).push(fn); },
    removeEventListener() {},
    dispatch(ev) {
      (listeners[ev] || []).slice().forEach((fn) => fn({
        target: el, currentTarget: el, dataset: el.dataset, key: '', files: [],
        preventDefault() {}, stopPropagation() {}
      }));
      if (ev === 'click' && typeof el.onclick === 'function') el.onclick({ target: el, stopPropagation() {} });
    },
    click() { el.dispatch('click'); },
    setAttribute() {}, getAttribute() { return null; },
    appendChild(c) { el.children.push(c); return c; },
    insertBefore(c, ref) {
      const i = ref ? el.children.indexOf(ref) : 0;
      el.children.splice(i < 0 ? 0 : i, 0, c); return c;
    },
    get firstChild() { return el.children[0] || null; },
    remove() {}, focus() {}, contains(c) { return el.children.includes(c); },
    querySelectorAll(selector) {
      if (selector === 'button') return el.children.filter((c) => c.tagName === 'BUTTON');
      if (selector[0] === '.') {
        const name = selector.slice(1);
        return el.children.filter((c) => String(c.className || '').split(/\s+/).includes(name));
      }
      return [];
    },
    querySelector(selector) { return el.querySelectorAll(selector)[0] || makeEl('', 'div'); },
    getBoundingClientRect() { return { left: 0, top: 0, width: 10, height: 10 }; },
    set innerHTML(v) { this._innerHTML = String(v); this.children = []; },
    get innerHTML() { return this._innerHTML; }
  };
  return el;
}

const elements = {};
const docListeners = {};
const document = {
  readyState: 'complete', hidden: true,
  getElementById(id) { if (!elements[id]) elements[id] = makeEl(id); return elements[id]; },
  createElement(t) { return makeEl('', t); }, createElementNS(ns, t) { return makeEl('', t); },
  querySelector(sel) {
    if (sel === '.guide-avatar') {
      if (!this._guide) this._guide = makeEl('guide-avatar');
      return this._guide;
    }
    return makeEl(sel);
  },
  querySelectorAll() { return []; },
  addEventListener(ev, fn) { (docListeners[ev] || (docListeners[ev] = [])).push(fn); },
  body: makeEl('body')
};

const audioInstances = [];
class FakeAudio {
  constructor() {
    this.src = ''; this.pauseCount = 0; this.playCount = 0; this.playReject = null;
    this.playbackRate = 1; this.onerror = null; audioInstances.push(this);
  }
  play() {
    this.playCount++;
    return { catch: (fn) => { this.playReject = fn; } };
  }
  pause() { this.pauseCount++; }
}
const spoken = [];
const speechSynthesis = {
  speaking: false, pending: false, paused: false,
  getVoices: () => [], addEventListener() {},
  speak(u) { spoken.push(u.text); this.speaking = true; },
  cancel() { this.speaking = false; this.pending = false; }, resume() {}
};
class FakeUtterance { constructor(text) { this.text = text; } }

const store = {};
const sandbox = {
  console, document, Audio: FakeAudio, speechSynthesis, SpeechSynthesisUtterance: FakeUtterance,
  localStorage: {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); }, removeItem: (k) => { delete store[k]; }
  },
  location: { hash: '#map' }, navigator: {}, innerWidth: 1024, innerHeight: 768,
  setTimeout: (fn) => { fn(); return 0; }, clearTimeout() {}, clearInterval() {}, setInterval: () => 0,
  requestAnimationFrame: () => 0, cancelAnimationFrame() {},
  performance: { now: () => 0 }, alert() {}, confirm: () => true,
  addEventListener() {}, removeEventListener() {},
  URL: { createObjectURL: () => '', revokeObjectURL() {} }, Blob: function () {},
  FileReader: function () { this.readAsText = () => {}; },
  fetch: () => Promise.resolve({ ok: false, status: 404, headers: { get: () => 'text/html' } }),
  window: null
};
sandbox.window = sandbox;
vm.createContext(sandbox);
function load(f) { vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f }); }

// 设置分组按钮必须在脚本绑定事件前就存在，模拟真实 DOM。
for (const spec of [['set-timelimit', [0, 5, 10]], ['set-dict-level', [1, 2, 3]]]) {
  const root = document.getElementById(spec[0]);
  spec[1].forEach((v) => {
    const b = document.createElement('button'); b.dataset.v = String(v); root.appendChild(b);
  });
}

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

/* 1. 设置按钮：实际点击后保存数值并写入存档。 */
const timeButtons = elements['set-timelimit'].children;
timeButtons[2].click();
check('答题限时点击保存为 10 秒', WA.save.settings.timeLimit === 10, String(WA.save.settings.timeLimit));
const levelButtons = elements['set-dict-level'].children;
levelButtons[2].click();
check('默写默认难度点击保存为 L3', WA.save.settings.dictationDefaultLevel === 3,
  String(WA.save.settings.dictationDefaultLevel));
const persisted = JSON.parse(store['word-adventure-save-v2']);
check('两项设置均写入本地存档', persisted.settings.timeLimit === 10 && persisted.settings.dictationDefaultLevel === 3);
WA.startDictation(1);
check('新默写训练应用默认 L3', elements['dictation-level'].textContent.indexOf('L3') === 0,
  elements['dictation-level'].textContent);
timeButtons[0].click(); // 后续闯关关闭倒计时，避免测试计时器干扰

/* 2. 星星：首通不重复进 bonusStars，之后每次复习均累计。 */
function finishQuizByCorrectAnswers() {
  for (let guard = 0; guard < 200; guard++) {
    if (!elements['result-screen'].classList.contains('hidden')) return;
    const q = WA.quiz && WA.quiz.current;
    if (!q) throw new Error('没有当前题目');
    const correct = q.options.find((o) => o.correct).text;
    const button = elements['q-options'].children.find((b) => b.textContent === correct);
    if (!button) throw new Error('找不到正确选项按钮');
    button.click();
  }
  throw new Error('闯关未在限定步数内完成');
}
const bonusBefore = WA.save.bonusStars || 0;
WA.startQuiz(WA.DOOR_BY_ID[1]);
finishQuizByCorrectAnswers();
check('首次通关不重复增加额外星星', (WA.save.bonusStars || 0) === bonusBefore,
  String(WA.save.bonusStars || 0));
WA.startQuiz(WA.DOOR_BY_ID[1]);
finishQuizByCorrectAnswers();
check('首次复习全对累计 +3 星', (WA.save.bonusStars || 0) === bonusBefore + 3,
  String(WA.save.bonusStars || 0));
check('复习结算显示星星奖励', elements['result-msg'].textContent.includes('+3') &&
  elements['result-stars'].textContent.includes('+3'), elements['result-msg'].textContent);
const hudAfterFirstReview = elements['hud-stars'].textContent;
WA.startQuiz(WA.DOOR_BY_ID[1]);
finishQuizByCorrectAnswers();
check('再次复习继续累计星星', (WA.save.bonusStars || 0) === bonusBefore + 6,
  String(WA.save.bonusStars || 0));
check('HUD 星星余额同步更新', elements['hud-stars'].textContent !== hudAfterFirstReview,
  hudAfterFirstReview + ' → ' + elements['hud-stars'].textContent);

/* 3. 语音：离开场景停止旧音频；过期 Promise 不得补播或触发合成语音。 */
elements['set-voice-test'].click();
const oldAudio = audioInstances[audioInstances.length - 1];
WA.showScreen('map-screen');
check('离开场景会暂停旧音频', oldAudio.pauseCount > 0, String(oldAudio.pauseCount));
const synthBefore = spoken.length;
const playBefore = audioInstances.reduce((n, a) => n + a.playCount, 0);
oldAudio.playReject({ name: 'NotAllowedError' });
(docListeners.pointerdown || []).forEach((fn) => fn({}));
const synthAfter = spoken.length;
const playAfter = audioInstances.reduce((n, a) => n + a.playCount, 0);
check('旧语音延迟回调不会重新播放', synthAfter === synthBefore && playAfter === playBefore,
  '合成 ' + synthBefore + '→' + synthAfter + '，音频 ' + playBefore + '→' + playAfter);

const src = fs.readFileSync('game.js', 'utf8');
check('切题与换页均显式停止旧语音', /function nextQuestion\(\) \{[\s\S]{0,100}stopSpeaking\(\)/.test(src) &&
  /function showScreen\(id\) \{[\s\S]{0,100}stopSpeaking\(\)/.test(src));
check('语音自愈重试带过期守卫', src.includes('if (currentUtterance !== u2) return;'));

if (failures) { console.log('\n三项功能回归测试失败 ' + failures + ' 项'); process.exit(1); }
console.log('\n设置、复习星星与语音回归测试全部通过 ✓');
