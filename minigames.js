/* ============================================================
 * 单词冒险岛 · 趣味小游戏合集（minigames.js v2.1）
 * 包含：单词斗地主（加牌版）、单词抢答（三人对战）、单词射击（三角洲FPS）
 * 在 game.js 之后加载，通过 window.WA 调用游戏数据。
 * ============================================================ */
(function () {
  'use strict';
  if (!window.WA) { console.error('minigames.js: WA 桥接不存在'); return; }

  const $ = (id) => document.getElementById(id);
  const esc = window.WA.esc;
  const randPick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ============================================================
   * 工具：构建词池
   * ============================================================ */
  function buildWordPool(doorId, count) {
    let pool = [];
    if (doorId) {
      pool = window.WA.entriesOfDoor(doorId)
        .filter(e => e.text && e.meaning)
        .map(e => ({ text: e.text, meaning: e.meaning, pos: e.pos || '' }));
    }
    if (pool.length < count) {
      const all = window.WA.DATA.units.flatMap(u => u.entries)
        .filter(e => e.text && e.meaning)
        .map(e => ({ text: e.text, meaning: e.meaning, pos: e.pos || '' }));
      const seen = new Set(pool.map(p => p.text));
      for (const e of all) {
        if (!seen.has(e.text)) { pool.push(e); seen.add(e.text); }
        if (pool.length >= count * 2) break;
      }
    }
    return shuffle(pool);
  }

  function playSound(type) {
    if (window.beep) window.beep(type);
  }

  /* ============================================================
   * 游戏一：单词斗地主 (Word Landlord) v3 — 高关联发牌版
   * 手牌 18 张，题目池 16 张；发牌时优先把"关联词"分到手牌中。
   * ============================================================ */
  let landlord = null;

  function startLandlord(doorId) {
    const pool = buildWordPool(doorId, 80);
    if (pool.length < 40) {
      alert('词库单词太少，先去闯关解锁更多单词吧！');
      return;
    }
    // 先抽题目池 16 张，其余用于手牌
    const questionPool = shuffle(pool.slice(0, 16));
    const remaining = pool.slice(16);

    // 把剩余牌分成"关联牌"（能和题目池匹配）和"干扰牌"
    const related = [], unrelated = [];
    for (const card of remaining) {
      let rel = false;
      for (const q of questionPool) {
        if (isWordMatch(card, q) || scoreMatch(card, q) >= 0.15) { rel = true; break; }
      }
      (rel ? related : unrelated).push(card);
    }
    // 手牌优先用关联牌，再用干扰牌补足，确保 playable 牌足够多
    const allCards = shuffle(related.concat(unrelated)).slice(0, 54);
    const playerHand = shuffle(allCards.slice(0, 18));
    const ai1Hand   = shuffle(allCards.slice(18, 36));
    const ai2Hand   = shuffle(allCards.slice(36, 54));

    landlord = {
      doorId, playerHand, ai1Hand, ai2Hand, questionPool,
      currentQuestion: null,
      turn: 'player',
      score: { player: 0, ai1: 0, ai2: 0 },
      round: 1, maxRounds: 20,
      discard: [],
      started: true,
      redraws: 2,
      pool: pool
    };
    nextLandlordTurn();
    showScreen('landlord-screen');
  }

  function nextLandlordTurn() {
    if (!landlord || !landlord.started) return;
    const L = landlord;

    if (L.playerHand.length === 0) return endLandlord('player');
    if (L.ai1Hand.length === 0) return endLandlord('ai1');
    if (L.ai2Hand.length === 0) return endLandlord('ai2');
    if (L.round > L.maxRounds) return endLandlord(null);

    let qPool = L.questionPool.filter(q => !L.discard.some(d => d.text === q.text));
    if (!qPool.length) qPool = L.questionPool;
    L.currentQuestion = randPick(qPool);

    renderLandlord();

    if (L.turn !== 'player') {
      setTimeout(() => aiLandlordPlay(L.turn), 1000 + Math.random() * 800);
    }
  }


  function renderLandlord() {
    const L = landlord;
    const q = L.currentQuestion;
    const turnText = L.turn === 'player' ? '你的回合' : (L.turn === 'ai1' ? '泡泡一号' : '泡泡二号');
    const turnColor = L.turn === 'player' ? '#2c6e9e' : '#888';

    let html = '<div class="mg-landlord">';
    html += '<div class="ll-header">';
    html += '<div class="ll-turn" style="color:' + turnColor + '">🎴 ' + turnText + '</div>';
    html += '<div class="ll-scores">你 ' + L.score.player + ' · 泡泡① ' + L.score.ai1 + ' · 泡泡② ' + L.score.ai2 + '</div>';
    html += '<div class="ll-round">第 ' + L.round + '/' + L.maxRounds + ' 轮</div>';
    html += '</div>';

    html += '<div class="ll-ai-area">';
    html += '<div class="ll-ai-hand">泡泡① ' + '🂠'.repeat(L.ai1Hand.length) + '</div>';
    html += '<div class="ll-ai-hand">泡泡② ' + '🂠'.repeat(L.ai2Hand.length) + '</div>';
    html += '</div>';

    html += '<div class="ll-board">';
    if (q) {
      html += '<div class="ll-question">';
      html += '<div class="ll-q-label">📖 出牌规则：打出与题目<strong>意思相同</strong>、<strong>同一词族</strong>或<strong>相同单词</strong>的牌</div>';
      html += '<div class="ll-q-text">' + esc(q.meaning) + '</div>';
      html += '<div class="ll-q-hint">参考词：<b>' + esc(q.text) + '</b>（' + (q.pos || '未知词性') + '）<br><small style="color:#999">❌ 仅词性相同不能出牌（如"温度"和"木工活"都是名词，但不匹配）</small></div>';
      html += '</div>';
    }
    html += '<div class="ll-discard">已出：' + (L.discard.slice(-5).map(d => esc(d.text)).join(' · ') || '—') + '</div>';
    html += '</div>';

    html += '<div class="ll-player-area">';
    const playableCount = L.playerHand.filter(c => isWordMatch(c, q)).length;
    html += '<div class="ll-player-label">你的手牌（' + L.playerHand.length + '张 · 可出 ' + playableCount + ' 张）</div>';
    html += '<div class="ll-player-hand">';
    L.playerHand.forEach((card, i) => {
      const canPlay = isWordMatch(card, q);
      const matchClass = canPlay ? 'll-card-match' : '';
      html += '<button class="ll-card ' + matchClass + '" data-idx="' + i + '" ' + (L.turn !== 'player' ? 'disabled' : '') + '>' +
        '<span class="ll-card-word">' + esc(card.text) + '</span>' +
        '<span class="ll-card-mean">' + esc(card.meaning) + '</span>' +
        (canPlay ? '<span class="ll-card-badge">✓</span>' : '') +
        '</button>';
    });
    html += '</div>';
    if (L.turn === 'player') {
      html += '<div class="ll-actions">';
      html += '<button class="ll-pass-btn" id="ll-pass">🙅 要不起（过）</button>';
      if (L.redraws > 0) {
        html += '<button class="ll-redraw-btn" id="ll-redraw">🔄 换3张牌（剩' + L.redraws + '次）</button>';
      }
      html += '</div>';
    }
    html += '</div>';

    html += '</div>';
    $('landlord-body').innerHTML = html;

    if (L.turn === 'player') {
      $('landlord-body').querySelectorAll('.ll-card').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.dataset.idx);
          playLandlordCard(idx);
        });
      });
      const passBtn = $('landlord-body').querySelector('#ll-pass');
      if (passBtn) passBtn.addEventListener('click', () => landlordPass());
      const redrawBtn = $('landlord-body').querySelector('#ll-redraw');
      if (redrawBtn) redrawBtn.addEventListener('click', () => landlordRedraw());
    }
  }

  function playLandlordCard(idx) {
    const L = landlord;
    if (L.turn !== 'player' || idx < 0 || idx >= L.playerHand.length) return;
    const card = L.playerHand[idx];
    const q = L.currentQuestion;
    const isMatch = isWordMatch(card, q);
    if (isMatch) {
      L.score.player += 10;
      L.discard.push(card);
      L.playerHand.splice(idx, 1);
      playSound('correct');
      landlordToast('✅ 打出 ' + esc(card.text) + '！+10分');
      L.turn = 'ai1';
      L.round++;
    } else {
      playSound('wrong');
      landlordToast('❌ ' + esc(card.text) + ' 不匹配，罚5分');
      L.score.player = Math.max(0, L.score.player - 5);
      L.turn = 'ai1';
      L.round++;
    }
    nextLandlordTurn();
  }

  function landlordPass() {
    const L = landlord;
    if (L.turn !== 'player') return;
    landlordToast('🙅 你选择了过');
    L.turn = 'ai1';
    L.round++;
    nextLandlordTurn();
  }


  function landlordRedraw() {
    const L = landlord;
    if (L.turn !== 'player' || L.redraws <= 0) return;
    const poolRemaining = L.pool.filter(p =>
      !L.playerHand.some(h => h.text === p.text) &&
      !L.ai1Hand.some(h => h.text === p.text) &&
      !L.ai2Hand.some(h => h.text === p.text) &&
      !L.discard.some(d => d.text === p.text) &&
      !L.questionPool.some(q => q.text === p.text)
    );
    if (poolRemaining.length < 3) {
      landlordToast('牌池不够了，没法换牌');
      return;
    }
    const discardIdx = [0, 1, 2].filter(i => i < L.playerHand.length);
    const removed = [];
    for (let i = discardIdx.length - 1; i >= 0; i--) {
      removed.push(L.playerHand.splice(discardIdx[i], 1)[0]);
    }
    const newCards = shuffle(poolRemaining).slice(0, 3);
    L.playerHand.push(...newCards);
    L.discard.push(...removed);
    L.redraws--;
    landlordToast('🔄 换了3张新牌！');
    playSound('correct');
    renderLandlord();
  }
  function aiLandlordPlay(ai) {
    const L = landlord;
    const hand = ai === 'ai1' ? L.ai1Hand : L.ai2Hand;
    const q = L.currentQuestion;
    if (Math.random() < 0.65 && hand.length > 0) {
      let bestIdx = -1, bestScore = -1;
      hand.forEach((card, i) => {
        const s = scoreMatch(card, q);
        if (s > bestScore) { bestScore = s; bestIdx = i; }
      });
      if (bestScore > 0.25) {
        const card = hand[bestIdx];
        L.score[ai] += 10;
        L.discard.push(card);
        hand.splice(bestIdx, 1);
        landlordToast((ai === 'ai1' ? '泡泡①' : '泡泡②') + ' 打出 ' + esc(card.text) + ' +10分');
        playSound('correct');
        L.turn = ai === 'ai1' ? 'ai2' : 'player';
        L.round++;
        nextLandlordTurn();
        return;
      }
    }
    landlordToast((ai === 'ai1' ? '泡泡①' : '泡泡②') + ' 要不起');
    L.turn = ai === 'ai1' ? 'ai2' : 'player';
    if (L.turn === 'player') { L.round++; }
    nextLandlordTurn();
  }

  function isWordMatch(card, q) {
    if (!card || !q) return false;
    // 1. 完全相同的单词
    if (card.text.toLowerCase() === q.text.toLowerCase()) return true;
    // 2. 意思相同或包含（如 "温度" 匹配 "气温"）
    const cm = card.meaning || '', qm = q.meaning || '';
    if (cm && qm && (cm.includes(qm) || qm.includes(cm))) return true;
    // 3. 同一词根/词族（如 play → playing / player / playground）
    if (isSameWordFamily(card.text, q.text)) return true;
    // ❌ 不再仅凭词性相同就判定匹配（太宽松："温度"和"木工活"都是名词）
    return false;
  }

  // 判断是否为同一词族（放宽版：子串包含、前缀、近形词都算）
  function isSameWordFamily(a, b) {
    const la = a.toLowerCase(), lb = b.toLowerCase();
    if (la === lb) return true;
    if (la.length < 3 || lb.length < 3) return false;
    // 一个包含另一个（如 run/running, play/player）
    if (la.includes(lb) || lb.includes(la)) return true;
    // 一个是另一个的前缀（如 play/playing）
    if (la.startsWith(lb) || lb.startsWith(la)) return true;
    // 共享前3个字母（如 temperature/temperate）
    if (la.slice(0, 3) === lb.slice(0, 3)) return true;
    // 共享前2个字母且长度相近（如 cat/cut, big/bag）
    if (la.slice(0, 2) === lb.slice(0, 2) && Math.abs(la.length - lb.length) <= 2) return true;
    return false;
  }
  function isSameWordFamily(a, b) {
    const la = a.toLowerCase(), lb = b.toLowerCase();
    if (la === lb) return true;
    if (la.length < 4 || lb.length < 4) return false;
    // 一个是另一个的前缀（如 play/playing）
    if (la.startsWith(lb) || lb.startsWith(la)) return true;
    // 共享前3个字母且总长度差不超过3（如 temperature/temperate）
    if (la.slice(0, 3) === lb.slice(0, 3) && Math.abs(la.length - lb.length) <= 3) return true;
    return false;
  }

  function scoreMatch(card, q) {
    if (!card || !q) return 0;
    let s = 0;
    if (card.text.toLowerCase() === q.text.toLowerCase()) s += 1.0;
    const cm = card.meaning || '', qm = q.meaning || '';
    if (cm && qm && (cm.includes(qm) || qm.includes(cm))) s += 0.7;
    if (isSameWordFamily(card.text, q.text)) s += 0.5;
    // 词性相同仅作为微弱加分，不能单独判定匹配
    if (card.pos && q.pos && card.pos === q.pos) s += 0.15;
    return s;
  }

  function landlordToast(msg) {
    const t = $('landlord-toast');
    t.textContent = msg;
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 2000);
  }

  function endLandlord(winner) {
    landlord.started = false;
    let title, msg, stars = 0;
    const ps = landlord.score.player;
    const a1 = landlord.score.ai1;
    const a2 = landlord.score.ai2;
    if (winner === 'player' || ps > a1 && ps > a2) {
      title = '🎉 你赢了！';
      msg = '太棒了！你战胜了两位泡泡对手！';
      stars = ps >= 100 ? 3 : ps >= 60 ? 2 : 1;
    } else if (ps === a1 && ps === a2) {
      title = '🤝 平局！';
      msg = '势均力敌，再来一局吧！';
      stars = 1;
    } else {
      title = '😅 这次输了';
      msg = '别灰心，多背单词就能赢回来！';
      stars = ps >= 40 ? 1 : 0;
    }
    $('ll-result-title').textContent = title;
    $('ll-result-msg').textContent = msg + ' 你的得分：' + ps;
    $('ll-result-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    showScreen('landlord-result-screen');
  }

  /* ============================================================
   * 游戏二：单词抢答 (Word Rush) v2 — 三人对战版
   * 玩家 + 泡泡一号 + 泡泡二号 同时抢答，最先答对得分。
   * ============================================================ */
  let rush = null;
  let rushTimer = null;
  let rushAiTimers = [];

  function startRush(doorId) {
    const pool = buildWordPool(doorId, 50);
    if (pool.length < 10) {
      alert('词库单词太少，先去闯关解锁更多单词吧！');
      return;
    }
    rush = {
      doorId, pool,
      player: { score: 0, streak: 0, maxStreak: 0, correct: 0, wrong: 0 },
      ai1:    { score: 0, streak: 0, correct: 0, wrong: 0, name: '泡泡一号', reactionBase: 1.8, accuracy: 0.72 },
      ai2:    { score: 0, streak: 0, correct: 0, wrong: 0, name: '泡泡二号', reactionBase: 2.4, accuracy: 0.60 },
      timeLeft: 45,
      started: true,
      current: null,
      answered: false,
      history: []
    };
    showScreen('rush-screen');
    nextRushQuestion();
    startRushTimer();
  }

  function startRushTimer() {
    if (rushTimer) clearInterval(rushTimer);
    const bar = $('rush-timer-bar');
    rushTimer = setInterval(() => {
      if (!rush || !rush.started) { clearInterval(rushTimer); return; }
      rush.timeLeft -= 0.1;
      if (bar) bar.style.width = (rush.timeLeft / 45 * 100) + '%';
      $('rush-time-text').textContent = Math.ceil(rush.timeLeft) + '秒';
      if (rush.timeLeft <= 0) endRush();
    }, 100);
  }

  function clearRushAiTimers() {
    rushAiTimers.forEach(t => clearTimeout(t));
    rushAiTimers = [];
  }

  function nextRushQuestion() {
    if (!rush || !rush.started) return;
    clearRushAiTimers();
    rush.answered = false;
    const pool = rush.pool.filter(p => !p.used);
    if (!pool.length) { endRush(); return; }
    const q = randPick(pool);
    q.used = true;
    rush.current = q;

    const others = shuffle(rush.pool.filter(p => p.text !== q.text)).slice(0, 3);
    const options = shuffle([q, ...others]);
    rush.current.options = options;

    const isEnQuestion = Math.random() < 0.5;
    rush.current.isEnQuestion = isEnQuestion;

    let html = '<div class="mg-rush">';
    // 三人对战分数板
    html += '<div class="rush-scoreboard">';
    html += '<div class="rush-sb-player rush-sb-active"><span>👤 你</span><b>' + rush.player.score + '</b></div>';
    html += '<div class="rush-sb-ai"><span>🤖 泡泡①</span><b>' + rush.ai1.score + '</b></div>';
    html += '<div class="rush-sb-ai"><span>🤖 泡泡二号</span><b>' + rush.ai2.score + '</b></div>';
    html += '</div>';

    html += '<div class="rush-streak-bar">🔥 你的连击 ×' + (rush.player.streak > 1 ? rush.player.streak : 1) + '</div>';

    html += '<div class="rush-question">';
    if (isEnQuestion) {
      html += '<div class="rush-word">' + esc(q.text) + '</div>';
      html += '<div class="rush-hint">这个词是什么意思？</div>';
    } else {
      html += '<div class="rush-meaning">' + esc(q.meaning) + '</div>';
      html += '<div class="rush-hint">对应的英文单词是？</div>';
    }
    html += '</div>';

    html += '<div class="rush-options">';
    options.forEach((opt, i) => {
      const label = isEnQuestion ? esc(opt.meaning) : esc(opt.text);
      html += '<button class="rush-opt" data-idx="' + i + '" data-correct="' + (opt.text === q.text) + '">' + label + '</button>';
    });
    html += '</div>';

    // AI 思考状态
    html += '<div class="rush-ai-status">';
    html += '<span id="ai1-status">🤖 泡泡一号 思考中…</span>';
    html += '<span id="ai2-status">🤖 泡泡二号 思考中…</span>';
    html += '</div>';

    html += '</div>';
    $('rush-body').innerHTML = html;

    $('rush-body').querySelectorAll('.rush-opt').forEach(btn => {
      btn.addEventListener('click', () => onRushAnswer('player', btn));
    });

    // AI 答题逻辑
    scheduleAiAnswer('ai1', rush.ai1);
    scheduleAiAnswer('ai2', rush.ai2);
  }

  function scheduleAiAnswer(aiKey, ai) {
    if (!rush || !rush.started) return;
    // AI 反应时间 = base + 随机波动
    const reactionMs = (ai.reactionBase + (Math.random() - 0.5) * 1.2) * 1000;
    const t = setTimeout(() => {
      if (!rush || !rush.started || rush.answered) return;
      const opts = rush.current.options;
      const correctIdx = opts.findIndex(o => o.text === rush.current.text);
      // AI 有 accuracy 概率答对
      const isCorrect = Math.random() < ai.accuracy;
      const chosenIdx = isCorrect ? correctIdx : randPick(opts.map((_, i) => i).filter(i => i !== correctIdx));
      onRushAnswer(aiKey, null, chosenIdx, isCorrect);
    }, Math.max(500, reactionMs));
    rushAiTimers.push(t);
  }

  function onRushAnswer(who, btn, aiIdx, aiWasCorrect) {
    if (!rush || !rush.current) return;
    if (rush.answered && who !== 'player') return; // AI 已经落后了
    const opts = $('rush-body') ? $('rush-body').querySelectorAll('.rush-opt') : [];

    let isCorrect, chosenBtn;
    if (who === 'player') {
      if (rush.answered) return;
      isCorrect = btn.dataset.correct === 'true';
      chosenBtn = btn;
      opts.forEach(b => { b.disabled = true; });
    } else {
      // AI 答题
      isCorrect = aiWasCorrect;
      if (opts.length) {
        chosenBtn = opts[aiIdx];
        opts.forEach(b => { b.disabled = true; });
      }
      // 更新AI状态文字
      const statusEl = $(who === 'ai1' ? 'ai1-status' : 'ai2-status');
      if (statusEl) statusEl.textContent = (isCorrect ? '⚡ ' : '❌ ') + (who === 'ai1' ? '泡泡一号' : '泡泡二号') + (isCorrect ? ' 抢答成功！' : ' 答错了');
    }

    if (isCorrect) {
      if (who === 'player') {
        rush.player.streak++;
        if (rush.player.streak > rush.player.maxStreak) rush.player.maxStreak = rush.player.streak;
        const multiplier = Math.min(rush.player.streak, 5);
        const points = 10 * multiplier;
        rush.player.score += points;
        rush.player.correct++;
        playSound('correct');
        if (chosenBtn) chosenBtn.textContent += ' ✅ +' + points;
      } else {
        rush[who].streak++;
        const points = 10 * Math.min(rush[who].streak, 5);
        rush[who].score += points;
        rush[who].correct++;
      }
    } else {
      if (who === 'player') {
        rush.player.streak = 0;
        rush.player.wrong++;
        playSound('wrong');
      } else {
        rush[who].streak = 0;
        rush[who].wrong++;
      }
      if (chosenBtn) chosenBtn.classList.add('wrong');
    }

    if (chosenBtn) chosenBtn.classList.add(isCorrect ? 'correct' : 'wrong');
    // 高亮正确答案
    if (opts.length) {
      opts.forEach(b => { if (b.dataset.correct === 'true') b.classList.add('correct'); });
    }

    // 标记已有人答对，其他人不能再答
    if (isCorrect) {
      rush.answered = true;
      clearRushAiTimers();
    }

    // 更新分数板
    const sb = document.querySelector('.rush-scoreboard');
    if (sb) {
      sb.children[0].innerHTML = '<span>👤 你</span><b>' + rush.player.score + '</b>';
      sb.children[1].innerHTML = '<span>🤖 泡泡①</span><b>' + rush.ai1.score + '</b>';
      sb.children[2].innerHTML = '<span>🤖 泡泡二号</span><b>' + rush.ai2.score + '</b>';
    }

    const delay = isCorrect ? 1200 : 900;
    setTimeout(nextRushQuestion, delay);
  }

  function endRush() {
    if (rushTimer) clearInterval(rushTimer);
    rushTimer = null;
    clearRushAiTimers();
    if (!rush) return;
    rush.started = false;
    const p = rush.player;
    const total = p.correct + p.wrong;
    const accuracy = total > 0 ? Math.round(p.correct / total * 100) : 0;

    // 排名
    const scores = [
      { name: '你', score: p.score, key: 'player' },
      { name: '泡泡一号', score: rush.ai1.score, key: 'ai1' },
      { name: '泡泡二号', score: rush.ai2.score, key: 'ai2' }
    ].sort((a, b) => b.score - a.score);
    const myRank = scores.findIndex(s => s.key === 'player') + 1;

    let stars = 0;
    if (myRank === 1 && p.score >= 100) stars = 3;
    else if (myRank === 1 && p.score >= 50) stars = 2;
    else if (p.score >= 30) stars = 1;

    $('rush-result-title').textContent = '⚡ 抢答结束！';
    $('rush-result-msg').textContent = '排名 第' + myRank + '名 · 得分 ' + p.score + ' · 正确 ' + p.correct + '/' + total + ' · 最高连击 ×' + p.maxStreak;
    $('rush-result-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    showScreen('rush-result-screen');
  }

  /* ============================================================
   * 游戏三：单词射击 (Word Strike) v2 — 三角洲FPS风格
   * 第一人称视角，暗黑军事场景，障碍物，加大单词，无红绿色。
   * ============================================================ */
  let strike = null;
  let strikeRAF = null;
  let strikeTimer = null;
  let strikeCanvas = null;
  let strikeCtx = null;
  let strikeListenersAdded = false;

  function fakeWord(realWord) {
    const w = realWord.text;
    if (w.length <= 3) return w.slice(0, -1) + String.fromCharCode(97 + Math.floor(Math.random() * 26));
    const pos = Math.floor(Math.random() * (w.length - 2)) + 1;
    const chars = w.split('');
    chars[pos] = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return chars.join('');
  }

  function startStrike(doorId) {
    // 清理旧游戏资源（防止 timer/RAF/监听器累积）
    if (strikeRAF) { cancelAnimationFrame(strikeRAF); strikeRAF = null; }
    if (strikeTimer) { clearInterval(strikeTimer); strikeTimer = null; }
    strike = null;

    const pool = buildWordPool(doorId, 40);
    if (pool.length < 10) {
      alert('词库单词太少，先去闯关解锁更多单词吧！');
      return;
    }
    // 生成目标：70%真单词，30%假单词
    const targets = [];
    for (let i = 0; i < 24; i++) {
      const isReal = Math.random() < 0.7;
      const base = randPick(pool);
      targets.push({
        text: isReal ? base.text : fakeWord(base),
        meaning: base.meaning,
        isReal,
        x: 0, y: 0, z: 0, // z=depth 0..1
        vx: 0, vy: 0,
        spawned: false, hit: false,
        spawnTime: 0
      });
    }
    // 场景障碍物
    const obstacles = [];
    for (let i = 0; i < 5; i++) {
      obstacles.push({
        x: 0.15 + Math.random() * 0.7,
        y: 0.2 + Math.random() * 0.6,
        w: 0.08 + Math.random() * 0.12,
        h: 0.06 + Math.random() * 0.10
      });
    }
    strike = {
      doorId, targets, obstacles,
      score: 0, bullets: 20,
      timeLeft: 30,
      started: true,
      mouseX: 0, mouseY: 0,
      lastSpawn: 0, spawnInterval: 1400,
      screenShake: 0,
      muzzleFlash: 0,
      hits: [], // 命中记录（用于画弹痕）
      lastT: performance.now()
    };
    showScreen('strike-screen');
    initStrikeCanvas();
    startStrikeLoop();
  }

  function initStrikeCanvas() {
    strikeCanvas = $('strike-canvas');
    if (!strikeCanvas) return;
    const rect = strikeCanvas.parentElement.getBoundingClientRect();
    strikeCanvas.width = rect.width;
    strikeCanvas.height = rect.height;
    strikeCtx = strikeCanvas.getContext('2d');

    // 只添加一次监听器，防止重复累积
    if (strikeListenersAdded) return;
    strikeListenersAdded = true;

    strikeCanvas.addEventListener('mousemove', (e) => {
      const r = strikeCanvas.getBoundingClientRect();
      if (strike) {
        strike.mouseX = e.clientX - r.left;
        strike.mouseY = e.clientY - r.top;
      }
    });
    strikeCanvas.addEventListener('click', (e) => {
      if (!strike || !strike.started) return;
      if (strike.bullets <= 0) return;
      const r = strikeCanvas.getBoundingClientRect();
      const mx = e.clientX - r.left;
      const my = e.clientY - r.top;
      strike.bullets--;
      $('strike-bullets').textContent = '🔫 ' + strike.bullets;
      strike.muzzleFlash = 1;

      let hitAny = false;
      // 按 z 深度排序，先检测近的目标
      const sorted = [...strike.targets].filter(t => t.spawned && !t.hit).sort((a, b) => b.z - a.z);
      for (const t of sorted) {
        const tx = t.x * strikeCanvas.width;
        const ty = t.y * strikeCanvas.height;
        const radius = 30 + t.z * 35; // 近大远小
        const dx = mx - tx, dy = my - ty;
        if (dx * dx + dy * dy < radius * radius) {
          t.hit = true;
          hitAny = true;
          if (t.isReal) {
            strike.score += 20;
            playSound('correct');
            strike.screenShake = 8;
            spawnHitParticles(tx, ty, '#00e5ff', 12);
          } else {
            strike.score = Math.max(0, strike.score - 10);
            playSound('wrong');
            strike.screenShake = 4;
            spawnHitParticles(tx, ty, '#ff4757', 10);
          }
          break; // 一枪只打中一个
        }
      }
      if (!hitAny) {
        spawnHitParticles(mx, my, '#8899aa', 4);
        strike.hits.push({ x: mx, y: my, life: 1.5 });
      }
      $('strike-score').textContent = '🎯 ' + strike.score;
    });
  }

  let particles = [];
  function spawnHitParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      particles.push({
        x, y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 1, color,
        size: 2 + Math.random() * 3
      });
    }
  }

  function startStrikeLoop() {
    let lastT = performance.now();
    function loop(now) {
      if (!strike || !strike.started) return;
      const dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;
      updateStrike(dt);
      drawStrike();
      strikeRAF = requestAnimationFrame(loop);
    }
    strikeRAF = requestAnimationFrame(loop);

    if (strikeTimer) clearInterval(strikeTimer);
    strikeTimer = setInterval(() => {
      if (!strike || !strike.started) { clearInterval(strikeTimer); strikeTimer = null; return; }
      strike.timeLeft--;
      $('strike-time').textContent = '⏱️ ' + strike.timeLeft;
      if (strike.timeLeft <= 0 || strike.bullets <= 0) {
        clearInterval(strikeTimer);
        strikeTimer = null;
        endStrike();
      }
    }, 1000);
  }

  function updateStrike(dt) {
    const s = strike;
    const w = strikeCanvas.width, h = strikeCanvas.height;

    // 生成新目标
    s.lastSpawn += dt * 1000;
    if (s.lastSpawn >= s.spawnInterval) {
      s.lastSpawn = 0;
      const available = s.targets.filter(t => !t.spawned && !t.hit);
      if (available.length > 0) {
        const t = available[0];
        t.spawned = true;
        t.z = 0; // 从远处来
        // 从屏幕四周边缘生成
        const side = Math.floor(Math.random() * 4);
        const margin = 0.05;
        if (side === 0) { t.x = margin + Math.random() * (1 - margin * 2); t.y = -0.1; t.vx = (Math.random() - 0.5) * 0.15; t.vy = 0.12 + Math.random() * 0.08; }
        else if (side === 1) { t.x = 1.1; t.y = margin + Math.random() * (1 - margin * 2); t.vx = -(0.12 + Math.random() * 0.08); t.vy = (Math.random() - 0.5) * 0.15; }
        else if (side === 2) { t.x = margin + Math.random() * (1 - margin * 2); t.y = 1.1; t.vx = (Math.random() - 0.5) * 0.15; t.vy = -(0.12 + Math.random() * 0.08); }
        else { t.x = -0.1; t.y = margin + Math.random() * (1 - margin * 2); t.vx = 0.12 + Math.random() * 0.08; t.vy = (Math.random() - 0.5) * 0.15; }
      }
    }

    // 更新目标位置 & 深度
    for (const t of s.targets) {
      if (!t.spawned || t.hit) continue;
      t.x += t.vx * dt;
      t.y += t.vy * dt;
      // z 随时间增加（向玩家靠近）
      t.z = Math.min(1, t.z + dt * 0.08);
      // 轻微向中心吸引
      t.vx += (0.5 - t.x) * 0.008;
      t.vy += (0.5 - t.y) * 0.008;
      // 飞出屏幕太远则标记为漏掉
      if (t.x < -0.3 || t.x > 1.3 || t.y < -0.3 || t.y > 1.3) {
        t.hit = true;
        if (t.isReal) s.score = Math.max(0, s.score - 5);
      }
    }

    // 更新粒子
    particles = particles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.96;
      p.vy *= 0.96;
      p.life -= dt * 2.5;
      return p.life > 0;
    });

    // 更新弹痕
    s.hits = s.hits.filter(h => { h.life -= dt; return h.life > 0; });

    // 屏幕震动衰减
    if (s.screenShake > 0) s.screenShake *= 0.85;
    if (s.screenShake < 0.5) s.screenShake = 0;

    // 枪口火焰衰减
    if (s.muzzleFlash > 0) s.muzzleFlash -= dt * 8;
    if (s.muzzleFlash < 0) s.muzzleFlash = 0;
  }

  function drawStrike() {
    const ctx = strikeCtx;
    const w = strikeCanvas.width, h = strikeCanvas.height;
    const s = strike;
    const shakeX = (Math.random() - 0.5) * s.screenShake;
    const shakeY = (Math.random() - 0.5) * s.screenShake;

    ctx.save();
    ctx.translate(shakeX, shakeY);

    // ====== 背景：暗黑军事风格 ======
    ctx.fillStyle = '#0a0e14';
    ctx.fillRect(0, 0, w, h);

    // 远景渐变
    const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7);
    grad.addColorStop(0, 'rgba(20, 35, 50, 0.4)');
    grad.addColorStop(1, 'rgba(5, 8, 12, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // ====== 透视地板网格 ======
    ctx.strokeStyle = 'rgba(0, 180, 200, 0.08)';
    ctx.lineWidth = 1;
    const horizonY = h * 0.45;
    // 横向线
    for (let i = 0; i < 8; i++) {
      const y = horizonY + (h - horizonY) * (i / 8);
      const perspective = 1 - (y - horizonY) / (h - horizonY);
      ctx.beginPath();
      ctx.moveTo(w * 0.1 + (1 - perspective) * w * 0.4, y);
      ctx.lineTo(w * 0.9 - (1 - perspective) * w * 0.4, y);
      ctx.stroke();
    }
    // 纵向线（汇聚到中心）
    for (let i = -4; i <= 4; i++) {
      ctx.beginPath();
      ctx.moveTo(w / 2 + i * 30, horizonY);
      ctx.lineTo(w / 2 + i * 120, h);
      ctx.stroke();
    }

    // ====== 障碍物（场景化） ======
    for (const ob of s.obstacles) {
      const ox = ob.x * w, oy = ob.y * h;
      const ow = ob.w * w, oh = ob.h * h;
      // 障碍物本体
      ctx.fillStyle = '#1e2530';
      ctx.fillRect(ox - ow / 2, oy - oh / 2, ow, oh);
      // 边框
      ctx.strokeStyle = 'rgba(60, 80, 100, 0.5)';
      ctx.lineWidth = 2;
      ctx.strokeRect(ox - ow / 2, oy - oh / 2, ow, oh);
      // 警示条纹
      ctx.strokeStyle = 'rgba(180, 160, 80, 0.2)';
      ctx.lineWidth = 3;
      for (let i = -ow / 2; i < ow / 2; i += 20) {
        ctx.beginPath();
        ctx.moveTo(ox + i, oy - oh / 2);
        ctx.lineTo(ox + i + 10, oy + oh / 2);
        ctx.stroke();
      }
    }

    // ====== 绘制目标（单词）=======
    for (const t of s.targets) {
      if (!t.spawned || t.hit) continue;
      const tx = t.x * w;
      const ty = t.y * h;
      // 深度影响大小和透明度
      const scale = 0.6 + t.z * 0.8;
      const radius = (30 + t.z * 35) * scale;
      const alpha = 0.4 + t.z * 0.6;

      ctx.globalAlpha = alpha;

      if (t.isReal) {
        // 真单词：圆形目标 + 内圈
        ctx.beginPath();
        ctx.arc(tx, ty, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(10, 20, 35, 0.85)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(200, 220, 240, 0.7)';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        // 内圈
        ctx.beginPath();
        ctx.arc(tx, ty, radius * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(200, 220, 240, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // 目标标记
        ctx.fillStyle = 'rgba(200, 220, 240, 0.5)';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('◉', tx, ty - radius - 8);
      } else {
        // 假单词：菱形 + 警告感
        ctx.beginPath();
        ctx.moveTo(tx, ty - radius);
        ctx.lineTo(tx + radius * 0.85, ty);
        ctx.lineTo(tx, ty + radius);
        ctx.lineTo(tx - radius * 0.85, ty);
        ctx.closePath();
        ctx.fillStyle = 'rgba(35, 15, 15, 0.85)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(220, 180, 140, 0.6)';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        // 叉号
        ctx.beginPath();
        ctx.moveTo(tx - radius * 0.3, ty - radius * 0.3);
        ctx.lineTo(tx + radius * 0.3, ty + radius * 0.3);
        ctx.moveTo(tx + radius * 0.3, ty - radius * 0.3);
        ctx.lineTo(tx - radius * 0.3, ty + radius * 0.3);
        ctx.strokeStyle = 'rgba(220, 180, 140, 0.4)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // 单词文字（加大）
      ctx.fillStyle = '#ffffff';
      const fontSize = Math.round((14 + t.z * 10) * scale);
      ctx.font = 'bold ' + fontSize + 'px "PingFang SC", "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 6;
      ctx.fillText(t.text, tx, ty);
      ctx.shadowBlur = 0;

      ctx.globalAlpha = 1;
    }

    // ====== 弹痕 ======
    for (const hit of s.hits) {
      ctx.globalAlpha = Math.max(0, hit.life / 1.5) * 0.6;
      ctx.fillStyle = '#556677';
      ctx.beginPath();
      ctx.arc(hit.x, hit.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // ====== 枪口火焰 ======
    if (s.muzzleFlash > 0) {
      const flash = s.muzzleFlash;
      ctx.fillStyle = 'rgba(255, 220, 150, ' + (flash * 0.5) + ')';
      ctx.beginPath();
      ctx.arc(s.mouseX, s.mouseY, 20 + flash * 20, 0, Math.PI * 2);
      ctx.fill();
    }

    // ====== 准星 ======
    ctx.strokeStyle = 'rgba(200, 220, 240, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(s.mouseX - 10, s.mouseY);
    ctx.lineTo(s.mouseX + 10, s.mouseY);
    ctx.moveTo(s.mouseX, s.mouseY - 10);
    ctx.lineTo(s.mouseX, s.mouseY + 10);
    ctx.stroke();

    ctx.restore();
  }

  function endStrike() {
    if (strikeRAF) { cancelAnimationFrame(strikeRAF); strikeRAF = null; }
    if (strikeTimer) { clearInterval(strikeTimer); strikeTimer = null; }
    if (!strike) return;
    strike.started = false;
    let stars = 0;
    if (strike.score >= 200) stars = 3;
    else if (strike.score >= 100) stars = 2;
    else if (strike.score >= 50) stars = 1;
    $('strike-result-title').textContent = '🎯 射击结束！';
    $('strike-result-msg').textContent = '得分 ' + strike.score + ' · 剩余子弹 ' + strike.bullets;
    $('strike-result-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    showScreen('strike-result-screen');
  }
  /* ============================================================
   * 公用：切换屏幕
   * ============================================================ */
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');
  }

  /* ============================================================
   * 暴露接口（同时兼容 window.WA 和 window.WAMinigames）
   * ============================================================ */
  window.WA.startLandlord = startLandlord;
  window.WA.startRush = startRush;
  window.WA.startStrike = startStrike;
  // game.js 中使用 WAMinigames 调用，需同时暴露
  window.WAMinigames = {
    startLandlord: startLandlord,
    startRush: startRush,
    startStrike: startStrike
  };

})();
