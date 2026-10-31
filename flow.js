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
        '<span class="chip-emoji">✍️</span>' +
        '<span class="chip-name">' + weakCount + ' 个单词等你攻克</span>' +
        '<span class="chip-isl">开始特训 ➜</span>' +
        '</button>';
    } else {
      html += '<div class="today-empty">👍 暂无薄弱词，保持住！</div>';
    }
    html += '</div>';

    html += '</div>'; /* today-tasks */

    /* 校内默写加强 */
    html += '<div class="today-free">';
    html += '<div class="today-free-label">🏫 校内默写加强 <span class="today-task-sub">按单元整卷默写，每轮 10 词</span></div>';
    html += '<div class="today-free-btns">';
    var SCHOOL_UNITS = [
      ['u01-school-life', 'U1 校园生活'],
      ['u02-family-ties', 'U2 家庭纽带'],
      ['u03-food', 'U3 美食厨房'],
      ['u04-sports', 'U4 运动赛场']
    ];
    SCHOOL_UNITS.forEach(function (u) {
      html += '<button class="today-free-btn" data-act="school" data-unit="' + u[0] + '">✍️ ' + u[1] + '</button>';
    });
    var schoolWrongN = WA.schoolMistakeCount ? WA.schoolMistakeCount() : 0;
    html += '<button class="today-free-btn" data-act="school-weak">📒 校内错词特训' +
      (schoolWrongN ? '（' + schoolWrongN + ' 词）' : '') + '</button>';
    html += '</div>';
    html += '<details class="school-plan">';
    html += '<summary>📊 错因分析 · 7 天提高计划</summary>';
    html += '<div class="school-plan-body">';
    html += '<p class="school-plan-lead">根据 4 次校内默写整理的 <b>' + schoolWrongN + ' 个订正词条</b>，每天训练 8–10 分钟，先解决高频错误，再做混合验收。</p>';
    html += '<div class="school-analysis">';
    html += '<div class="school-analysis-row"><b>① 拼写细节不稳</b><span>easy、strength、tomato、flamingo、injection、minute、film</span><small>重点核对元音、字母顺序和双写字母，用“听读音 → 分音节 → 遮盖默写”练习。</small></div>';
    html += '<div class="school-analysis-row"><b>② 词义与词性混淆</b><span>exciting / excited，find out / look for，born / birth，have a try / try to</span><small>先辨中文意思和词性，再记固定搭配，避免只背英文外形。</small></div>';
    html += '<div class="school-analysis-row"><b>③ 短语与句子不完整</b><span>a sunny day、a short film、a panda cub 容易漏 a；长句注意 join 后不加 in，Kids 用复数。</span><small>短语要整块朗读、整块默写，写完后专项检查冠词、介词和单复数。</small></div>';
    html += '</div>';
    html += '<ol class="school-plan-days">';
    html += '<li><b>第 1 天｜诊断</b> 校内错词特训 1 轮，圈出仍然出错的词。</li>';
    html += '<li><b>第 2 天｜拼写</b> 练 7 个拼写易错词，每个词听音、分音节、默写各 1 次。</li>';
    html += '<li><b>第 3 天｜词义词性</b> 练 4 组易混词，口头对比造句后再默写。</li>';
    html += '<li><b>第 4 天｜短语</b> 重点检查 a、to、of，把所有易错短语整块默写 1 次。</li>';
    html += '<li><b>第 5 天｜句子</b> 练 join / Kids 句和 a little bit of white hair，朗读 2 遍后遮盖默写。</li>';
    html += '<li><b>第 6 天｜混合复习</b> 校内错词特训 2 轮，每轮结束后只重练错词。</li>';
    html += '<li><b>第 7 天｜模拟验收</b> 最薄弱单元整卷 10 词＋校内错词特训 10 词。</li>';
    html += '</ol>';
    html += '<div class="school-plan-goal"><b>过关标准：</b>同一批错词连续 2 轮全对；第 7 天正确率达到 90%。未达标的词保留到下周，不追求一次刷完全部。</div>';
    html += '<button class="today-free-btn school-plan-start" data-act="school-weak">✍️ 开始今天：校内错词特训</button>';
    html += '</div></details>';
    html += '</div>';

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
      else if (act === 'weak') go(function () { WA.startWeakDictation && WA.startWeakDictation(); });
      else if (act === 'school') go(function () { WA.startSchoolDictation && WA.startSchoolDictation(btn.dataset.unit); });
      else if (act === 'school-weak') go(function () { WA.startSchoolMistakes && WA.startSchoolMistakes(); });
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
