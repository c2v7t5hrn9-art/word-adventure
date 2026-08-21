/* ============================================================
 * 单词冒险岛 · 今日首页动线（flow.js）
 * 在 game.js 之后加载，通过 window.WA 调用游戏能力。
 * 动线：打开网站 → 今日航海（复习 → 新课 → 薄弱词）→ 地图自由探索
 * ============================================================ */
(function () {
  'use strict';
  if (!window.WA) { console.error('flow.js: WA 桥接不存在'); return; }

  var screen = document.getElementById('today-screen');
  if (!screen) return;

  function islandOfDoor(doorId) {
    for (var i = 0; i < WA.ISLANDS.length; i++) {
      if (WA.ISLANDS[i].doorIds.indexOf(doorId) >= 0) return WA.ISLANDS[i];
    }
    return null;
  }

  function hide() {
    screen.classList.add('hidden');
  }

  function go(action) {
    hide();
    action();
  }

  /* ---------------- 渲染 ---------------- */
  function render() {
    var save = WA.save;
    var dp = save.dailyPlan || {};
    var h = new Date().getHours();
    var greet = h < 11 ? '早上好' : h < 14 ? '中午好' : h < 18 ? '下午好' : '晚上好';
    var streak = dp.streakDays || 0;
    var dateStr = new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' });

    var html = '';
    html += '<div class="today-card">';
    html += '<button class="today-close" id="today-close" title="去地图">✕</button>';
    html += '<div class="today-head">';
    html += '<div class="today-avatar">🧚‍♀️</div>';
    html += '<div class="today-head-text">';
    html += '<div class="today-greet">' + greet + '，小冒险家！</div>';
    html += '<div class="today-date">' + dateStr + (streak > 0 ? ' · 🔥 连续学习 ' + streak + ' 天' : '') + '</div>';
    html += '</div></div>';

    html += '<div class="today-tasks">';

    /* 任务一：今日复习 */
    var due = WA.dueDoors();
    html += '<div class="today-task">';
    html += '<div class="today-task-title">🔁 今日复习 <span class="today-task-sub">艾宾浩斯到期的门</span></div>';
    if (due.length) {
      html += '<div class="today-chips">';
      due.forEach(function (door) {
        var isl = islandOfDoor(door.id);
        html += '<button class="today-chip" data-act="review" data-door="' + door.id + '">' +
          '<span class="chip-no">' + door.id + '</span>' +
          '<span class="chip-name">' + WA.esc(door.name) + '</span>' +
          '<span class="chip-isl">' + (isl ? WA.esc(isl.short) : '') + '</span>' +
          '</button>';
      });
      html += '</div>';
    } else {
      html += '<div class="today-empty">✨ 今天没有到期的复习，太棒了！</div>';
    }
    html += '</div>';

    /* 任务二：新课之门 */
    html += '<div class="today-task">';
    html += '<div class="today-task-title">✨ 新课之门 <span class="today-task-sub">每天前进一扇门</span></div>';
    if (dp.newDoor && WA.DOOR_BY_ID[dp.newDoor]) {
      var door = WA.DOOR_BY_ID[dp.newDoor];
      var isl = islandOfDoor(door.id);
      html += '<button class="today-chip today-chip-new" data-act="new" data-door="' + door.id + '">' +
        '<span class="chip-no">' + door.id + '</span>' +
        '<span class="chip-name">' + WA.esc(door.name) + '</span>' +
        '<span class="chip-isl">' + (isl ? WA.esc(isl.short) : '') + ' · 出发 ➜</span>' +
        '</button>';
    } else {
      html += '<div class="today-empty">🎉 所有门都闯过了！去复习让它们更牢固吧</div>';
    }
    html += '</div>';

    /* 任务三：薄弱词特训 */
    var weakCount = (dp.weakWords || []).length;
    html += '<div class="today-task">';
    html += '<div class="today-task-title">💪 薄弱词特训 <span class="today-task-sub">默写常错的单词</span></div>';
    if (weakCount) {
      html += '<button class="today-chip today-chip-weak" data-act="weak">' +
        '<span class="chip-emoji">🃏</span>' +
        '<span class="chip-name">' + weakCount + ' 个单词等你攻克</span>' +
        '<span class="chip-isl">开始特训 ➜</span>' +
        '</button>';
    } else {
      html += '<div class="today-empty">👍 暂无薄弱词，保持住！</div>';
    }
    html += '</div>';

    html += '</div>'; /* today-tasks */

    /* 趣味挑战区 */
    html += '<div class="today-free">';
    html += '<div class="today-free-label">🎮 趣味挑战</div>';
    html += '<div class="today-free-btns">';
    html += '<button class="today-free-btn" data-act="landlord">🎴 单词斗地主</button>';
    html += '<button class="today-free-btn" data-act="rush">⚡ 单词抢答</button>';
    html += '<button class="today-free-btn" data-act="strike">🎯 单词射击</button>';
    html += '</div>';
    html += '</div>';

    /* 自由学习区 */
    html += '<div class="today-free">';
    html += '<div class="today-free-label">🎈 自由学习</div>';
    html += '<div class="today-free-btns">';
    html += '<button class="today-free-btn" data-act="flashcard">🃏 自由卡片</button>';
    html += '<button class="today-free-btn" data-act="map">🔗 连连看 / ✍️ 默写<br><small>点地图上的门</small></button>';
    html += '</div>';
    html += '<button class="today-map-btn" data-act="map">🗺️ 去地图自由探索</button>';
    html += '</div>';

    html += '</div>'; /* today-card */

    screen.innerHTML = html;
    screen.classList.remove('hidden');

    /* ---------------- 交互 ---------------- */
    document.getElementById('today-close').addEventListener('click', hide);
    screen.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act]');
      if (!btn) return;
      var act = btn.dataset.act;
      var doorId = Number(btn.dataset.door);
      var door = doorId && WA.DOOR_BY_ID[doorId];
      if (act === 'review' && door) go(function () { WA.startQuiz(door); });
      else if (act === 'new' && door) go(function () { WA.startQuiz(door); });
      else if (act === 'weak') go(function () { WA.startFlashcard(); });
      else if (act === 'flashcard') go(function () { WA.startFlashcard(); });
      else if (act === 'landlord') go(function () { WA.startLandlord && WA.startLandlord(); });
      else if (act === 'rush') go(function () { WA.startRush && WA.startRush(); });
      else if (act === 'strike') go(function () { WA.startStrike && WA.startStrike(); });
      else if (act === 'map') hide();
      else if (act === 'map') hide();
    });
  }

  /* ---------------- 入口 ---------------- */
  // 「今日任务」按钮（百宝箱 📋）：随时回到今日首页
  var btnDaily = document.getElementById('btn-daily-mission');
  if (btnDaily) btnDaily.addEventListener('click', render);

  // 页面打开（无调试 hash）→ 先看到今日首页
  if (!location.hash) render();

  window.WAFlow = { renderToday: render };
})();
