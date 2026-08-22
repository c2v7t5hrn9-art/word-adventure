/* ============================================================
 * 单词冒险岛 · 云端同步层（sync.js）
 * 职责：
 *   1. 管理「冒险密码」（4 位数字，保存在本机 localStorage）
 *   2. 启动时：先和服务器对账（谁新用谁），再动态加载 game.js / flow.js
 *   3. 运行中：劫持 localStorage 写入，防抖推送到服务器；
 *      页面重新可见时拉取服务器最新进度
 *   4. 首次访问：弹出欢迎页 —— 新冒险 / 输入密码继续 / 仅本机
 * 不改动 game.js 任何逻辑，只在其加载前准备好存档。
 * ============================================================ */
(function () {
  'use strict';

  var SAVE_KEY = 'word-adventure-save-v2';
  var CODE_KEY = 'wa-sync-code';
  var MODE_KEY = 'wa-sync-mode';   // 'cloud' | 'local'
  var TS_KEY = 'wa-local-ts';      // 本机存档最后写入时间（毫秒）

  var syncing = false;
  var pushTimer = null;
  var dotEl = null;

  /* ---------------- 小工具 ---------------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { origSetItem.call(localStorage, k, v); } catch (e) {} }

  function hasProgress() {
    try {
      var s = JSON.parse(lsGet(SAVE_KEY));
      if (!s) return false;
      var doors = s.doors && Object.keys(s.doors).length;
      return !!(doors || s.bonusStars || (s.shards && s.shards.length));
    } catch (e) { return false; }
  }

  function api(path, opts) {
    return fetch(path, opts).then(function (r) {
      if (r.status === 404) return { status: 404 };
      if (!r.ok) throw new Error('http ' + r.status);
      return r.json().then(function (j) { j.status = r.status; return j; });
    });
  }

  /* ---------------- 状态指示灯 ---------------- */
  function setDot(state) {
    if (!dotEl) return;
    var map = {
      synced:  ['☁️', '已同步'],
      syncing: ['🔄', '同步中…'],
      offline: ['⚠️', '离线（进度先存本机）'],
      local:   ['📱', '仅本机模式']
    };
    var m = map[state] || map.local;
    dotEl.textContent = m[0];
    dotEl.title = m[1] + '（点击查看冒险密码）';
    dotEl.dataset.state = state;
  }

  function ensureDot() {
    if (dotEl) return;
    dotEl = document.createElement('button');
    dotEl.id = 'wa-sync-dot';
    dotEl.className = 'hud-btn wa-sync-dot';
    var host = document.querySelector('.hud-right') || document.querySelector('.hud-stats');
    if (host) host.appendChild(dotEl);
    dotEl.addEventListener('click', showCodePanel);
  }

  /* ---------------- 密码面板 ---------------- */
  function showCodePanel() {
    var old = document.getElementById('wa-code-panel');
    if (old) { old.remove(); return; }
    var code = lsGet(CODE_KEY) || '';
    var mode = lsGet(MODE_KEY) || 'local';
    var panel = document.createElement('div');
    panel.id = 'wa-code-panel';
    panel.className = 'wa-code-panel';
    panel.innerHTML =
      '<div class="wa-code-title">☁️ 进度同步</div>' +
      (mode === 'cloud'
        ? '<div class="wa-code-tip">在其他设备打开本站，选择「继续我的冒险」，输入：</div>' +
          '<div class="wa-code-num">' + code.split('').join(' ') + '</div>' +
          '<div class="wa-code-tip wa-dim">进度会自动在设备间同步（以最新一次为准）</div>'
        : '<div class="wa-code-tip">当前是「仅本机」模式，进度不会同步。</div>') +
      '<div class="wa-code-btns">' +
      (mode === 'cloud'
        ? '<button class="wa-btn wa-warn" data-act="leave">停止同步（留在本机）</button>'
        : '<button class="wa-btn wa-primary" data-act="join">开启同步</button>') +
      '<button class="wa-btn" data-act="close">关闭</button>' +
      '</div>';
    document.body.appendChild(panel);
    panel.addEventListener('click', function (e) {
      var act = e.target.dataset && e.target.dataset.act;
      if (act === 'close') panel.remove();
      if (act === 'leave') {
        localStorage.removeItem(CODE_KEY);
        lsSet(MODE_KEY, 'local');
        setDot('local');
        panel.remove();
      }
      if (act === 'join') {
        panel.remove();
        showSetup(true);
      }
    });
  }

  /* ---------------- 首次欢迎 / 绑定密码 ---------------- */
  function showSetup(reopen) {
    return new Promise(function (resolve) {
      var ov = document.getElementById('sync-setup');
      if (!ov) { resolve(); return; }
      ov.classList.remove('hidden');

      var stepMain = ov.querySelector('#ss-main');
      var stepCode = ov.querySelector('#ss-code');
      var stepNew = ov.querySelector('#ss-new');
      var err = ov.querySelector('#ss-error');

      function show(step) {
        [stepMain, stepCode, stepNew].forEach(function (s) { s.classList.add('hidden'); });
        step.classList.remove('hidden');
        err.textContent = '';
      }
      show(stepMain);

      function done() {
        ov.classList.add('hidden');
        ov.querySelectorAll('button').forEach(function (b) {
          b.replaceWith(b.cloneNode(true)); // 清空旧监听
        });
        resolve();
      }

      ov.querySelector('#ss-btn-new').addEventListener('click', function () {
        var code = String(1000 + Math.floor(Math.random() * 9000));
        lsSet(CODE_KEY, code);
        lsSet(MODE_KEY, 'cloud');
        ov.querySelector('#ss-new-code').textContent = code.split('').join(' ');
        ov.querySelector('#ss-new-note').textContent = hasProgress()
          ? '这台设备上已有的进度会上传到云端'
          : '把密码记下来，别的设备输入它就能接着玩';
        show(stepNew);
      });
      ov.querySelector('#ss-btn-have').addEventListener('click', function () { show(stepCode); });
      ov.querySelector('#ss-btn-local').addEventListener('click', function () {
        lsSet(MODE_KEY, 'local');
        done();
      });
      ov.querySelector('#ss-new-go').addEventListener('click', done);

      ov.querySelector('#ss-code-go').addEventListener('click', function () {
        var input = ov.querySelector('#ss-code-input');
        var code = (input.value || '').replace(/\D/g, '');
        if (code.length !== 4) { err.textContent = '请输入 4 位数字密码'; return; }
        err.textContent = '正在查找…';
        api('/api/progress/' + code).then(function (r) {
          if (r.status === 404) { err.textContent = '没找到这个冒险密码，检查一下？'; return; }
          var localHas = hasProgress();
          var apply = function () {
            lsSet(CODE_KEY, code);
            lsSet(MODE_KEY, 'cloud');
            lsSet(SAVE_KEY, JSON.stringify(r.save));
            lsSet(TS_KEY, String(r.updatedAt || Date.now()));
            done();
          };
          if (localHas && !reopen) {
            // 本机已有进度 + 云端也有 → 让孩子/家长选
            if (window.confirm('这台设备上已有一份进度。\n\n点「确定」使用云端进度（覆盖本机）；\n点「取消」保留本机进度并上传到云端。')) {
              apply();
            } else {
              lsSet(CODE_KEY, code);
              lsSet(MODE_KEY, 'cloud');
              pushNow();
              done();
            }
          } else {
            apply();
          }
        }).catch(function () {
          err.textContent = '连不上同步服务器，稍后再试（也可以选「仅本机」）';
        });
      });
    });
  }

  /* ---------------- 推送 / 拉取 ---------------- */
  function pushNow() {
    var code = lsGet(CODE_KEY);
    var mode = lsGet(MODE_KEY);
    if (!code || mode !== 'cloud') return;
    var raw = lsGet(SAVE_KEY);
    if (!raw) return;
    var saveObj;
    try { saveObj = JSON.parse(raw); } catch (e) { return; }
    syncing = true;
    setDot('syncing');
    api('/api/progress/' + code, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ save: saveObj })
    }).then(function () {
      syncing = false;
      setDot('synced');
    }).catch(function () {
      syncing = false;
      setDot('offline');
    });
  }

  function schedulePush() {
    if (pushTimer) clearTimeout(pushTimer);
    pushTimer = setTimeout(pushNow, 800);
  }

  function pullLatest() {
    var code = lsGet(CODE_KEY);
    var mode = lsGet(MODE_KEY);
    if (!code || mode !== 'cloud' || syncing) return Promise.resolve(false);
    return api('/api/progress/' + code).then(function (r) {
      if (r.status === 404) return false;
      var serverTs = r.updatedAt || 0;
      var localTs = Number(lsGet(TS_KEY) || 0);
      if (serverTs > localTs) {
        lsSet(SAVE_KEY, JSON.stringify(r.save));
        lsSet(TS_KEY, String(serverTs));
        return true;
      }
      return false;
    }).catch(function () {
      setDot('offline');
      return false;
    });
  }

  /* ---------------- 劫持存档写入（加时间戳 + 触发推送） ---------------- */
  var origSetItem = localStorage.setItem.bind(localStorage);
  localStorage.setItem = function (key, value) {
    origSetItem(key, value);
    if (key === SAVE_KEY) {
      origSetItem(TS_KEY, String(Date.now()));
      schedulePush();
    }
  };

  /* ---------------- API 可用性探测 ---------------- */
  // 静态托管（如 GitHub Pages）上没有 /api 接口：404 返回的是 HTML 而非 JSON。
  // 以此区分「接口存在但密码不存在」（JSON 404）和「根本没有接口」（HTML 404）。
  var apiAvailable = null; // null=未探测 / true / false
  function probeApi() {
    if (apiAvailable !== null) return Promise.resolve(apiAvailable);
    return fetch('/api/progress/0000').then(function (r) {
      var ct = r.headers.get('Content-Type') || '';
      // 只有「404 + JSON」才代表同步接口真实存在且工作正常：
      // 静态托管返回 HTML 404；Worker 未绑 KV 时返回 503 JSON
      apiAvailable = r.status === 404 && ct.indexOf('application/json') >= 0;
      return apiAvailable;
    }).catch(function () {
      apiAvailable = false;
      return false;
    });
  }

  /* ---------------- 动态加载游戏脚本 ---------------- */
  function inject(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  /* ---------------- 启动主流程 ---------------- */
  function boot() {
    ensureDot();
    var mode = lsGet(MODE_KEY);
    var code = lsGet(CODE_KEY);

    var ready;
    if (mode === 'cloud' && code) {
      setDot('syncing');
      ready = pullLatest().then(function (pulled) {
        setDot('synced');
        if (!pulled && !lsGet(TS_KEY)) pushNow(); // 云端还没有 → 把本机传上去
      });
    } else if (!mode) {
      // 完全首次：先探测同步接口是否可用
      ready = probeApi().then(function (ok) {
        if (ok) return showSetup(false); // 有接口 → 展示欢迎页选模式
        // 无接口（纯静态托管 / 离线）→ 直接进入仅本机模式，不打扰孩子
        lsSet(MODE_KEY, 'local');
        setDot('local');
      });
    } else {
      setDot('local');
      ready = Promise.resolve();
    }

    ready.then(function () {
      return inject('game.js?v=13');
    }).then(function () {
      return inject('minigames.js?v=1');
    }).then(function () {
      return inject('flow.js?v=1');
    }).then(function () {
      ensureDot();
      setDot(lsGet(MODE_KEY) === 'cloud' ? 'synced' : 'local');
    }).catch(function (e) {
      console.error('启动失败:', e);
      var world = document.getElementById('world');
      if (world) {
        world.innerHTML = '<div style="padding:30px;color:#c53030;font-size:16px;line-height:1.8;">' +
          '<h3>😅 游戏脚本加载失败</h3>' +
          '<p>请检查网络后刷新页面（Cmd+Shift+R / Ctrl+F5）。</p></div>';
      }
    });
  }

  // 页面重新可见时拉一次（iPad 上切换 App 回来的场景）
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) {
      pullLatest().then(function (pulled) {
        if (pulled && window.WA && WA.showScreen) WA.showScreen('map-screen'); // 重建地图
      });
    }
  });
  window.addEventListener('online', pushNow);

  window.WASync = { pushNow: pushNow, pullLatest: pullLatest, showSetup: showSetup };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
