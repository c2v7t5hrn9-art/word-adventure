/* 单词冒险岛 — 游戏逻辑（v2 岛屿制大版本） */
(function () {
  'use strict';

  // 防护：确保词库数据已加载
  if (!window.WORDS_DATA) {
    document.body.innerHTML = '<div style="padding:40px;text-align:center;font-size:18px;color:#c53030">' +
      '<h2>😅 词库数据加载失败</h2>' +
      '<p>请按 <b>Cmd+Shift+R</b> (Mac) 或 <b>Ctrl+F5</b> (Windows) 强制刷新。</p>' +
      '<p>如果还是不行，请检查网络连接或联系开发者。</p></div>';
    console.error('WORDS_DATA 不存在：words-data.js 可能未加载');
    return;
  }

  const DATA = window.WORDS_DATA;
  const SAVE_KEY = 'word-adventure-save-v2';
  const SAVE_KEY_V1 = 'word-adventure-save-v1'; // 旧版存档键（仅用于迁移）
  const MIN_QUESTIONS = 8;          // 每关最少题数
  const MATCH_PAIRS_PER_ROUND = 6;  // 连连看每轮对数
  // 艾宾浩斯遗忘曲线复习间隔（天）：第 stage 次完成闯关后，过 OFFSETS[stage] 天再复习
  const OFFSETS = [1, 2, 4, 7, 15, 30];
  const DICTATION_WORDS_PER_ROUND = 8; // 每轮默写词数
  const DICTATION_LEVELS = { 1: "补全字母", 2: "字母块拼词", 3: "听音默写" };

  /* 岛屿元信息：1 个 unit = 1 座岛。若 DATA.units 多于本表，
     多出的单元会自动兜底成岛（短名取 unit.title，图标 🏝️），无需改代码。 */
  const ISLAND_META = [
    { id: 'u5u6-doctor-challenge', short: '健康岛', icon: '🩺' },
    { id: 'u3u4-plants-animals', short: '自然岛', icon: '🌿' },
    { id: 'u1u2-clubs-games', short: '社团岛', icon: '🎭' },
    { id: 'u7u8-scientists-inventions', short: '科学岛', icon: '🔬' },
    { id: 'u9u10-computers-green', short: '未来岛', icon: '💻' },
    { id: 'u01-school-life', short: '校园岛', icon: '🏫' }
  ];

  /* 英语对话脚本：每座岛一场主题对话
     大量编织该岛词库词汇与短语（每个目标词至少出现一次）。
     step 类型：
       say    { type:'say', en, zh }        泡泡说一句（自动朗读，中文默认折叠，点气泡展开）
       choice { type:'choice', options }    孩子选英文回应；选对进下一步，选错提示重选不扣分
       ask    { type:'ask', en, zh, accept, hints, sample } 孩子回答问句（语音/打字），accept为多组keyword，命中任一组全部即通过
       repeat { type:'repeat', en, zh }     跟读任务（优先用词库 examples 原句），自动播放一次示范 */
  const DIALOGUES = {
    /* 健康岛：诊所小助手。目标词：runny nose, cough, fever, flu, medicine,
       take it easy, temperature, check, patient, give up */
    'u5u6-doctor-challenge': {
      title: '诊所小助手', icon: '🩺',
      steps: [
        { type: 'say', en: "Hello! I\'m Dr. Bubble. Welcome to my clinic!", zh: '你好！我是泡泡医生。欢迎来到我的诊所！' },
        { type: 'ask', en: 'How are you feeling today?', zh: '你今天感觉怎么样？',
          accept: [['fine', 'good'], ['not', 'good'], ['bad', 'sick']],
          hints: ['You can say: I am fine.', 'Or: I am not good.'],
          sample: 'I am not feeling good.' },
        { type: 'say', en: 'This little bear is my new patient. He has a runny nose and he coughs badly.', zh: '这只小熊是我的新病人。他流鼻涕，还咳嗽得很厉害。' },
        { type: 'choice', options: [
          { en: 'Does he have a fever?', zh: '他发烧吗？', correct: true },
          { en: 'Is he a giraffe?', zh: '他是长颈鹿吗？', correct: false }
        ] },
        { type: 'say', en: 'Let me check his temperature. Oh! He has a fever. It is the flu.', zh: '让我检查一下他的体温。哦！他发烧了，是流感。' },
        { type: 'ask', en: 'Do you have a runny nose?', zh: '你流鼻涕吗？',
          accept: [['yes', 'nose'], ['no', 'fine']],
          hints: ['You can say: Yes, I have a runny nose.', 'Or: No, I am fine.'],
          sample: 'I have a runny nose.' },
        { type: 'repeat', en: 'Take some medicine and have a good rest.', zh: '吃点药，好好休息一下。' },
        { type: 'say', en: 'Take it easy, little bear. You will be better soon!', zh: '放轻松，小熊。你很快就会好起来的！' },
        { type: 'repeat', en: 'Drink lots of water. And take it easy.', zh: '多喝水，放轻松。' },
        { type: 'say', en: 'The bear is better now. Being a doctor is hard, but never give up!', zh: '小熊好多了。当医生很辛苦，但永远不要放弃！' },
        { type: 'choice', options: [
          { en: 'I will never give up!', zh: '我永远不会放弃！', correct: true },
          { en: 'I give up. Bye!', zh: '我放弃了，拜拜！', correct: false }
        ] },
        { type: 'say', en: 'You are a wonderful helper! Here are two stars for you!', zh: '你真是个出色的小助手！奖励你两颗星星！' }
      ]
    },
    /* 自然岛：野生动物园一日游。目标词：safari park, tiger, lion, giraffe, hippo,
       whale, protect, get close to, dive, root, stem, thick */
    'u3u4-plants-animals': {
      title: '野生动物园一日游', icon: '🦁',
      steps: [
        { type: 'say', en: "Hi! Welcome to the Safari Park! I\'m your guide, Bubble.", zh: '嗨！欢迎来到野生动物园！我是你们的导游，泡泡。' },
        { type: 'ask', en: 'What animals do you like?', zh: '你喜欢什么动物？',
          accept: [['like', 'tiger'], ['like', 'lion'], ['like', 'giraffe'], ['like', 'whale']],
          hints: ['You can say: I like tigers.', 'Or: I like giraffes.'],
          sample: 'I like giraffes.' },
        { type: 'say', en: 'Look! A tiger and a lion are playing over there. And see the giraffe? Its neck is so long!', zh: '看！一只老虎和一头狮子在那边玩耍。看到长颈鹿了吗？它的脖子好长啊！' },
        { type: 'choice', options: [
          { en: 'Can we get close to the giraffe?', zh: '我们能靠近长颈鹿吗？', correct: true },
          { en: 'Can we eat the giraffe?', zh: '我们能吃掉长颈鹿吗？', correct: false }
        ] },
        { type: 'say', en: 'Yes, but please be quiet. We can get close to the animals, but we must protect them.', zh: '可以，但请安静。我们可以靠近动物，但我们必须保护它们。' },
        { type: 'say', en: 'Look at the hippo! Her name is Momo. She is learning how to dive.', zh: '看那只河马！她叫莫莫，正在学潜水呢。' },
        { type: 'repeat', en: 'Momo is learning how to dive.', zh: '莫莫正在学习如何潜水。' },
        { type: 'ask', en: 'Can you dive?', zh: '你会潜水吗？',
          accept: [['yes', 'can'], ['no', 'can']],
          hints: ['You can say: Yes, I can dive.', 'Or: No, I cannot dive.'],
          sample: 'Yes, I can dive.' },
        { type: 'say', en: 'The blue whale is the largest animal in the world. It lives in the sea.', zh: '蓝鲸是世界上最大的动物，住在大海里。' },
        { type: 'say', en: 'Now look at this big tree. Its roots take in water, and its stem is very thick.', zh: '现在看这棵大树。它的根吸收水分，茎非常粗。' },
        { type: 'repeat', en: 'Roots take in water and keep the plant in the ground.', zh: '根吸收水分，并使植物固定在土壤中。' },
        { type: 'choice', options: [
          { en: 'We should protect whales from whalers.', zh: '我们应该保护鲸鱼免受捕鲸者的伤害。', correct: true },
          { en: 'We should throw rubbish at animals.', zh: '我们应该朝动物扔垃圾。', correct: false }
        ] },
        { type: 'say', en: 'You are a great little keeper! Here are two stars for you!', zh: '你是个很棒的小小饲养员！奖励你两颗星星！' }
      ]
    },
    /* 社团岛：放学后报名社团。目标词：join, gardening, storytelling, photography,
       pottery, how about, traditional, Chinese yo-yo, kite-flying, tug of war, prize */
    'u1u2-clubs-games': {
      title: '放学后报名社团', icon: '🎭',
      steps: [
        { type: 'say', en: 'School is over! Many clubs are waiting for you. Which club do you want to join?', zh: '放学啦！好多社团在等你。你想加入哪个社团呢？' },
        { type: 'choice', options: [
          { en: 'Can I join the Gardening Club?', zh: '我能加入园艺社吗？', correct: true },
          { en: 'Go away, clubs!', zh: '走开，社团！', correct: false }
        ] },
        { type: 'say', en: 'The Gardening Club is on Wednesday. You can grow beautiful flowers!', zh: '园艺社在周三活动，你可以种漂亮的花！' },
        { type: 'say', en: 'How about the Storytelling Club? Lily is good at storytelling there.', zh: '讲故事社怎么样？莉莉在那里很擅长讲故事。' },
        { type: 'ask', en: 'How about you? Are you good at storytelling?', zh: '你呢？你擅长讲故事吗？',
          accept: [['yes', 'good'], ['no', 'not']],
          hints: ['You can say: Yes, I am good at storytelling.', 'Or: No, I am not.'],
          sample: 'Yes, I am good at storytelling.' },
        { type: 'say', en: 'Photography is fun! And at the Pottery Club, we make brush pots.', zh: '摄影很有趣！在陶艺社，我们做笔筒。' },
        { type: 'say', en: 'There are also traditional games on the sports field!', zh: '运动场上还有各种有趣的传统游戏！' },
        { type: 'say', en: 'You can play Chinese yo-yo, and kite-flying is fun with friends.', zh: '你可以玩空竹，和朋友们一起放风筝也很好玩。' },
        { type: 'choice', options: [
          { en: "Let\'s have a tug of war!", zh: '我们来拔河吧！', correct: true },
          { en: "Let\'s have a tug of sleep!", zh: '我们来拔"睡觉"吧！', correct: false }
        ] },
        { type: 'repeat', en: 'You can win a prize if you try your best.', zh: '如果你全力以赴，就有可能赢得奖品。' },
        { type: 'say', en: 'Yes! After each game, you can stamp your card and get a prize!', zh: '没错！玩完每个游戏，你可以盖章并获得奖品！' },
        { type: 'say', en: 'You are the star of the clubs! Here are two stars for you!', zh: '你是社团之星！奖励你两颗星星！' }
      ]
    },
    /* 科学岛：小小发明家。目标词：scientist, invent, invention, discover, gravity,
       rocket, outer space, hybrid rice, be known as, wheel, useful */
    'u7u8-scientists-inventions': {
      title: '小小发明家', icon: '🔬',
      steps: [
        { type: 'say', en: 'Hi, little scientist! Welcome to my invention lab!', zh: '嗨，小科学家！欢迎来到我的发明实验室！' },
        { type: 'choice', options: [
          { en: 'Wow! Can I be a scientist too?', zh: '哇！我也能当科学家吗？', correct: true },
          { en: 'Science is boring. Bye!', zh: '科学好无聊，拜拜！', correct: false }
        ] },
        { type: 'say', en: 'Of course! Great scientists discover new things. Newton discovered gravity.', zh: '当然可以！伟大的科学家发现新事物。牛顿发现了万有引力。' },
        { type: 'say', en: 'Yuan Longping is known as the father of hybrid rice.', zh: '袁隆平被誉为杂交水稻之父。' },
        { type: 'repeat', en: 'Yuan Longping is known as the father of hybrid rice.', zh: '袁隆平被誉为杂交水稻之父。' },
        { type: 'say', en: 'Scientists also invent useful things. The wheel is a great invention.', zh: '科学家还发明有用的东西。轮子是一项伟大的发明。' },
        { type: 'ask', en: 'What do you want to invent?', zh: '你想发明什么？',
          accept: [['rocket'], ['flying', 'bike'], ['robot'], ['wheel']],
          hints: ['You can say: I want to invent a rocket.', 'Or: I want to invent a flying bike.'],
          sample: 'I want to invent a rocket.' },
        { type: 'say', en: 'The rocket can fly into outer space! How cool is that!', zh: '火箭能飞进外太空！太酷了吧！' },
        { type: 'repeat', en: 'The rocket flies into outer space.', zh: '火箭飞入外太空。' },
        { type: 'choice', options: [
          { en: 'I want to invent a flying bike!', zh: '我想发明一辆会飞的自行车！', correct: true },
          { en: 'I want to invent nothing.', zh: '我什么都不想发明。', correct: false }
        ] },
        { type: 'say', en: 'Great idea! Work hard, and your invention will be useful one day.', zh: '好主意！努力学习，有一天你的发明会派上用场。' },
        { type: 'say', en: 'You are a super little inventor! Here are two stars for you!', zh: '你是超级小发明家！奖励你两颗星星！' }
      ]
    },
    /* 未来岛：绿色电脑课。目标词：laptop, password, click, mouse, keyboard, email,
       reuse, recycle, unplug, turn off, pollution, pick up */
    'u9u10-computers-green': {
      title: '绿色电脑课', icon: '💻',
      steps: [
        { type: 'say', en: 'Hi! Today we have a green computer class. Let me start my laptop.', zh: '嗨！今天我们上绿色电脑课。我先打开笔记本电脑。' },
        { type: 'say', en: 'First, I type my password on the keyboard. It is a secret!', zh: '首先，我在键盘上输入密码。这可是秘密哦！' },
        { type: 'ask', en: 'Do you have a laptop?', zh: '你有笔记本电脑吗？',
          accept: [['yes', 'have'], ['no', 'do', 'not']],
          hints: ['You can say: Yes, I have a laptop.', 'Or: No, I do not.'],
          sample: 'Yes, I have a laptop.' },
        { type: 'say', en: 'Great! I got an email from Miss Green. She says: save energy, save the Earth!', zh: '太好了！我收到格林老师的一封电子邮件。她说：节约能源，拯救地球！' },
        { type: 'say', en: 'We can reuse old things and recycle paper and plastic bags.', zh: '我们可以再次利用旧物，回收纸张和塑料袋。' },
        { type: 'choice', options: [
          { en: 'We should turn off the lights.', zh: '我们应该随手关灯。', correct: true },
          { en: 'We should keep the lights on all night.', zh: '我们应该整夜开着灯。', correct: false }
        ] },
        { type: 'say', en: 'Yes! And unplug the computer when we are not using it.', zh: '对！不用电脑的时候，还要拔掉电源插头。' },
        { type: 'repeat', en: 'Please turn off the computer and unplug it.', zh: '请关掉电脑并拔掉电源插头。' },
        { type: 'say', en: "Pollution makes the Earth sick. Let\'s pick up rubbish in the park!", zh: '污染让地球生病。我们去公园捡垃圾吧！' },
        { type: 'ask', en: 'Will you pick up rubbish?', zh: '你会捡垃圾吗？',
          accept: [['yes', 'will'], ['yes', 'pick'], ['no']],
          hints: ['You can say: Yes, I will pick up rubbish.', 'Or: Yes, I will.'],
          sample: 'Yes, I will pick up rubbish.' },
        { type: 'repeat', en: 'We should pick up the rubbish and keep the park clean.', zh: '我们应该捡起垃圾，保持公园干净。' },
        { type: 'say', en: 'You are a green superhero! Here are two stars for you!', zh: '你是环保小超人！奖励你两颗星星！' }
      ]
    }
  };

  /* 星星商店商品表（纯装扮，emoji + CSS 实现，不影响闯关数值） */
  const SHOP_ITEMS = [
    { id: 'acc-bow',       type: 'acc',  icon: '🎀', name: '蝴蝶结',     price: 10 },
    { id: 'acc-hat',       type: 'acc',  icon: '🎩', name: '礼帽',       price: 15 },
    { id: 'acc-glasses',   type: 'acc',  icon: '🕶️', name: '酷酷墨镜',   price: 20 },
    { id: 'acc-wand',      type: 'acc',  icon: '🪄', name: '魔法棒',     price: 25 },
    { id: 'pet-rabbit',    type: 'pet',  icon: '🐰', name: '小兔跟班',   price: 15 },
    { id: 'pet-cat',       type: 'pet',  icon: '🐱', name: '小猫跟班',   price: 20 },
    { id: 'pet-fox',       type: 'pet',  icon: '🦊', name: '小狐狸跟班', price: 30 },
    { id: 'deco-rainbow',  type: 'deco', icon: '🌈', name: '彩虹',       price: 25 },
    { id: 'deco-fountain', type: 'deco', icon: '⛲', name: '许愿喷泉',   price: 20 },
    { id: 'deco-castle',   type: 'deco', icon: '🏰', name: '小城堡',     price: 40 }
  ];
  const SHOP_SECTIONS = [
    { type: 'acc',  title: '🎀 泡泡饰品（同时只能戴 1 个）' },
    { type: 'pet',  title: '🐾 宠物跟班（同时只能带 1 只）' },
    { type: 'deco', title: '🏝️ 岛屿装饰（可以叠加摆放多个）' }
  ];

  /* ---------------- 工具函数 ---------------- */
  const $ = (id) => document.getElementById(id);
  /* 安全事件绑定：元素缺失时只在控制台报警，绝不中断后续绑定与启动流程。
     （教训：曾因子页面缺少某个按钮元素，addEventListener 抛错导致整个脚本中断，
     首页不渲染、WA 桥接未导出。所有启动期绑定必须走 on/onAll。） */
  function on(id, ev, fn) {
    const el = $(id);
    if (!el) { console.error('[单词冒险岛] 绑定失败：页面缺少元素 #' + id); return; }
    el.addEventListener(ev, fn);
  }
  function onAll(id, selector, ev, fn) {
    const root = $(id);
    if (!root) { console.error('[单词冒险岛] 绑定失败：页面缺少元素 #' + id); return; }
    root.querySelectorAll(selector).forEach((el) => el.addEventListener(ev, fn));
  }
  function todayStr() {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
  function addDays(dateStr, n) {
    const parts = dateStr.split('-').map(Number);
    const dt = new Date(parts[0], parts[1] - 1, parts[2]);
    dt.setDate(dt.getDate() + n);
    const p = (x) => String(x).padStart(2, '0');
    return `${dt.getFullYear()}-${p(dt.getMonth() + 1)}-${p(dt.getDate())}`;
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const randPick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------------- 词条索引 ---------------- */
  const allEntries = [];
  DATA.units.forEach((u) => u.entries.forEach((e) => allEntries.push(e)));
  function entriesOfDoor(doorId) {
    return allEntries.filter((e) => e.door === doorId);
  }
  const phrasePool = [];
  allEntries.forEach((e) => {
    (e.phrases || []).forEach((p) => phrasePool.push(p));
    (e.extensions || []).forEach((x) => (x.phrases || []).forEach((p) => phrasePool.push(p)));
  });
  const DOOR_BY_ID = {};
  DATA.doors.forEach((d) => { DOOR_BY_ID[d.id] = d; });

  /* ---------------- 岛屿构建（1 unit = 1 岛） ---------------- */
  function shortName(title, i) {
    const t = String(title || '').replace(/\s*词汇.*/, '').trim();
    return (t || ('第 ' + (i + 1) + ' 岛')).slice(0, 10);
  }
  const ISLANDS = DATA.units.map((u, i) => {
    const meta = ISLAND_META[i] || {};
    const doorIds = [];
    u.entries.forEach((e) => {
      if (e.door && doorIds.indexOf(e.door) < 0) doorIds.push(e.door);
    });
    doorIds.sort((a, b) => a - b);
    return {
      idx: i,
      id: meta.id || ('unit-' + (i + 1)), // 存档用的岛屿 ID
      short: meta.short || shortName(u.title, i),
      icon: meta.icon || '🏝️',
      title: u.title,
      doorIds: doorIds
    };
  });
  function islandOfDoor(doorId) {
    for (let i = 0; i < ISLANDS.length; i++) {
      if (ISLANDS[i].doorIds.indexOf(doorId) >= 0) return ISLANDS[i];
    }
    return null;
  }

  /* ---------------- 存档 ---------------- */
  function defaultSave() {
    return {
      doors: {},            // doors[门id] = { stars, clearedAt, lastAt, stage, nextDue }
      shards: [],           // 已获得的精灵碎片（存岛屿 unitId，不重复）
      seenIntros: [],       // 已播放开场白的岛屿（unitId）
      islandClearedAt: {},  // unitId -> 首次全岛通关日期（YYYY-MM-DD）
      lastVisit: null,      // 上次打开地图日期（用于每日复习提醒）
      bonusStars: 0,        // 额外奖励星星（英语对话每日奖励等）
      starSpent: 0,         // 星星商店已累计消费的星星
      ownedItems: [],       // 商店已购买的商品 id 列表
      equipped: { acc: null, pet: null, decos: [] }, // 当前装备：饰品/宠物各 1 个，岛屿装饰可多个
      chatRewards: {},      // chatRewards[unitId] = 'YYYY-MM-DD'，每场对话每天只发一次奖励
      settings: {
        sound: true,
        voiceURI: null,     // 朗读嗓音（null = 智能默认）
        rate: 0.9,          // 语速 0.7~1.1
        timeLimit: 0,       // 答题限时：0=不限 / 5 / 10 秒
        parentUnlockAll: false, // 家长选项：解锁全部岛屿
        dictationDefaultLevel: 1, // 默认默写难度 1|2|3
        dictationAutoLevel: true  // 是否启用难度自动升级
      },
      spellStats: {},       // 默写统计：{ entryKey: { correct, wrong, lastWrong } }
      dictationMastery: {}, // 默写掌握度：{ doorId: maxLevel }
      dictationConsecutivePerfect: {}, // 默写连续全对次数：{ doorId: count }
      freeChatHistory: []   // 自由聊天历史（最近6轮）
    };
  }
  let save = load();
  function load() {
    // 优先读取 v2 存档
    try {
      const s = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (s && s.doors) {
        const d = defaultSave();
        return {
          doors: s.doors || {},
          shards: Array.isArray(s.shards) ? s.shards : [],
          seenIntros: Array.isArray(s.seenIntros) ? s.seenIntros : [],
          islandClearedAt: s.islandClearedAt || {},
          lastVisit: s.lastVisit || null,
          bonusStars: s.bonusStars || 0,
          starSpent: s.starSpent || 0,
          ownedItems: Array.isArray(s.ownedItems) ? s.ownedItems : [],
          equipped: (function () { // 用 defaultSave() 兜底合并，缺字段自动补默认
            const eq = Object.assign(d.equipped, s.equipped || {});
            if (!Array.isArray(eq.decos)) eq.decos = [];
            return eq;
          })(),
          chatRewards: s.chatRewards || {},
          settings: Object.assign(d.settings, s.settings || {}),
          spellStats: s.spellStats || {},
          dictationMastery: s.dictationMastery || {},
          dictationConsecutivePerfect: s.dictationConsecutivePerfect || {},
          freeChatHistory: Array.isArray(s.freeChatHistory) ? s.freeChatHistory : []
        };
      }
    } catch (e) { /* 存档损坏则尝试迁移/重来 */ }
    // 旧版 v1 存档迁移（含 cleared 字段）
    try {
      const old = JSON.parse(localStorage.getItem(SAVE_KEY_V1));
      if (old && old.cleared) return migrateV1(old);
    } catch (e) { /* 忽略 */ }
    return defaultSave();
  }
  // v1 -> v2 迁移：cleared[id].stars → doors[id].stars，clearedAt=at，
  // stage=0，nextDue=通关日+1天；转换后立即按新键名保存（旧键保留作备份）。
  function migrateV1(old) {
    const s = defaultSave();
    Object.keys(old.cleared || {}).forEach((id) => {
      const c = old.cleared[id] || {};
      const at = c.at || todayStr();
      s.doors[id] = { stars: c.stars || 1, clearedAt: at, lastAt: at, stage: 0, nextDue: addDays(at, 1) };
    });
    if (old.sound === false) s.settings.sound = false;
    // 旧存档中已全岛通关的岛屿，静默补发碎片与通关日期
    ISLANDS.forEach((isl) => {
      if (isl.doorIds.length && isl.doorIds.every((d) => s.doors[d])) {
        const dates = isl.doorIds.map((d) => s.doors[d].clearedAt).sort();
        s.islandClearedAt[isl.id] = dates[dates.length - 1];
        if (s.shards.indexOf(isl.id) < 0) s.shards.push(isl.id);
      }
    });
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch (e) {}
    return s;
  }
  function persist() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {}
  }

  /* ---------------- 默写训练营辅助函数 ---------------- */
  // entryKey 用 text 字段（去空格小写）
  function getSpellKey(text) {
    return String(text || '').toLowerCase().replace(/\s+/g, '');
  }

  // 构建默写词池：entries + 同 unit 的 dictationExtra
  function buildDictationPool(doorId) {
    const entries = entriesOfDoor(doorId);
    const isl = islandOfDoor(doorId);
    const extra = [];
    if (isl) {
      const unit = DATA.units.find((u) => u.unitId === isl.id);
      if (unit && unit.dictationExtra) {
        unit.dictationExtra.forEach((e) => {
          extra.push(Object.assign({}, e, { door: doorId, _fromExtra: true }));
        });
      }
    }
    return entries.concat(extra);
  }

  // 薄弱词排序：取 wrong>correct 或 wrong>=2 的词，按错误次数降序
  function pickWeakWords(pool, maxCount) {
    const weak = pool.filter((e) => {
      const key = getSpellKey(e.text);
      const s = save.spellStats[key];
      return s && (s.wrong > s.correct || s.wrong >= 2);
    });
    weak.sort((a, b) => {
      const sa = save.spellStats[getSpellKey(a.text)] || {};
      const sb = save.spellStats[getSpellKey(b.text)] || {};
      return (sb.wrong || 0) - (sa.wrong || 0);
    });
    return weak.slice(0, maxCount);
  }

  // 更新 spellStats 存档
  function recordSpellStats(text, isCorrect) {
    const key = getSpellKey(text);
    if (!save.spellStats[key]) save.spellStats[key] = { correct: 0, wrong: 0, lastWrong: null };
    if (isCorrect) {
      save.spellStats[key].correct++;
    } else {
      save.spellStats[key].wrong++;
      save.spellStats[key].lastWrong = todayStr();
    }
    persist();
  }

  function totalStars() {
    return Object.values(save.doors).reduce((s, r) => s + (r.stars || 0), 0);
  }

  /* ---------------- 解锁与复习规则 ---------------- */
  // 岛屿解锁规则：
  // ① 第 1 座岛（idx=0）初始开放；
  // ② 第 N 座岛需「第 N-1 座岛全部通关」且当前日期晚于上一座岛的通关日期（即次日）才开放；
  // ③ 家长选项「解锁全部岛屿」开启时，全部直接开放。
  function islandUnlocked(idx) {
    if (save.settings.parentUnlockAll) return true;
    if (idx <= 0) return true;
    const prev = ISLANDS[idx - 1];
    const clearedDate = save.islandClearedAt[prev.id];
    return !!clearedDate && todayStr() > clearedDate;
  }
  function islandFullyCleared(isl) {
    return isl.doorIds.length > 0 && isl.doorIds.every((d) => !!save.doors[d]);
  }
  // 门状态：已通关 / 可闯 / 未解锁（岛内顺序解锁，无每日上限）
  function doorState(doorId, isl) {
    if (save.doors[doorId]) return 'cleared';
    if (!islandUnlocked(isl.idx)) return 'locked';
    const i = isl.doorIds.indexOf(doorId);
    if (i <= 0) return 'open';
    return save.doors[isl.doorIds[i - 1]] ? 'open' : 'locked';
  }
  // 艾宾浩斯：今日日期 >= nextDue 视为"需复习"
  function doorDue(doorId) {
    const rec = save.doors[doorId];
    return !!(rec && rec.nextDue && todayStr() >= rec.nextDue);
  }
  function dueDoors() {
    return DATA.doors.filter((d) => doorDue(d.id));
  }

  /* ---------------- 地图渲染（世界地图） ---------------- */
  // 岛内简化小径布局：门从左下开始 zigzag 向上，终点是岛顶宝藏
  function miniPositions(n) {
    const pts = [];
    for (let i = 0; i < n; i++) {
      pts.push({
        x: i % 2 === 0 ? 28 : 72,
        y: n === 1 ? 62 : 80 - i * (54 / (n - 1))
      });
    }
    return pts;
  }

  function buildMap() {
    const world = $('world');
    world.innerHTML = '';
    ISLANDS.forEach((isl) => {
      const unlocked = islandUnlocked(isl.idx);
      const card = document.createElement('div');
      card.className = 'island-card island-' + isl.idx + (unlocked ? '' : ' island-locked');

      const hasShard = save.shards.indexOf(isl.id) >= 0;
      const title = document.createElement('div');
      title.className = 'island-title';
      title.innerHTML = isl.icon + ' ' + esc(isl.short) +
        ' <span class="title-shard ' + (hasShard ? 'on' : 'off') + '">💠</span>';
      card.appendChild(title);

      const inner = document.createElement('div');
      inner.className = 'island-inner';

      const doors = isl.doorIds.map((id) => DOOR_BY_ID[id]).filter(Boolean);
      const pts = miniPositions(doors.length);

      // 岛内小径
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'mini-path-svg');
      svg.setAttribute('viewBox', '0 0 100 100');
      svg.setAttribute('preserveAspectRatio', 'none');
      const dAttr = pts.map((p, i) => (i ? 'L' : 'M') + p.x + ' ' + p.y).join(' ');
      svg.innerHTML =
        '<path d="' + dAttr + '" fill="none" stroke="#caa46a" stroke-width="5" ' +
        'stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.1 9" ' +
        'vector-effect="non-scaling-stroke" opacity="0.85"/>';
      inner.appendChild(svg);

      // 岛顶宝藏：全岛通关后点亮
      const tre = document.createElement('div');
      tre.className = 'island-treasure' + (islandFullyCleared(isl) ? ' won' : '');
      tre.textContent = '🏆';
      inner.appendChild(tre);

      doors.forEach((door, i) => {
        const st = doorState(door.id, isl);
        const rec = save.doors[door.id];
        const stars = rec ? rec.stars : 0;
        const el = document.createElement('button');
        el.className = 'door door-mini door-' + st;
        el.style.left = pts[i].x + '%';
        el.style.top = pts[i].y + '%';
        el.innerHTML =
          (doorDue(door.id) ? '<div class="door-due">🔁</div>' : '') +
          '<div class="door-stars">' + '⭐'.repeat(stars) + '</div>' +
          '<div class="door-arch">' + (st === 'locked' ? '🔒' : (st === 'cleared' ? '✨' : '')) + '</div>' +
          '<div class="door-label">' + door.id + '. ' + esc(door.name) + '</div>';
        el.addEventListener('click', (e) => { e.stopPropagation(); onDoorClick(door, isl, el); });
        inner.appendChild(el);
      });

      card.appendChild(inner);

      if (!unlocked) {
        const lock = document.createElement('div');
        lock.className = 'island-lock-overlay';
        lock.innerHTML =
          '<div class="lock-icon">🔒</div>' +
          '<div class="lock-text">闯过上一座岛后，<br>明天开放</div>';
        card.appendChild(lock);
      }
      world.appendChild(card);
    });
    renderGuideGear();
    renderMapDecos();
    updateHud();
  }

  function updateHud() {
    $('hud-stars').textContent = '⭐ ' + availableStars(); // HUD 显示可用余额
    $('hud-shards').textContent = '💠 ' + save.shards.length + '/' + ISLANDS.length;
    $('btn-sound').textContent = save.settings.sound ? '🔊' : '🔇';
  }

  /* ---------------- 向导气泡（短提示） ---------------- */
  let guideTimer = null;
  function say(text, sticky) {
    const b = $('guide-bubble');
    b.textContent = text;
    b.classList.add('show');
    if (guideTimer) clearTimeout(guideTimer);
    if (!sticky) {
      guideTimer = setTimeout(() => b.classList.remove('show'), 5000);
    }
  }
  function quizSay(text) { $('quiz-guide-text').textContent = text; }
  function matchSay(text) { $('match-guide-text').textContent = text; }

  const LINES = {
    greet: [
      '欢迎来到单词冒险岛！我是向导泡泡 🧚‍♀️ 点开发光的门，开始冒险吧！',
      '泡泡等你好久啦！选一座岛，推开小门出发吧～'
    ],
    correct: ['答对啦！🌟', '太棒了，继续！', '你真聪明！💡', '完全正确！👏', '哇，好厉害！'],
    wrong: ['别灰心，看正确答案记住它～', '差一点点！下次一定行 💪', '没关系，我们再来一次！'],
    timeout: ['时间到啦！记住正确答案，下次快一点 ⏰', '时间到～别慌，我们再来一次！']
  };

  /* ---------------- 对话系统（真正的对话） ---------------- */
  // 各岛主题开场白（首次进入该岛可玩的门前播放，save.seenIntros 记录不重复）
  const INTROS = [
    [ // 健康岛：医生诊所主题
      '欢迎来到健康岛！这里有岛上最温暖的小诊所 🩺',
      '生病不用怕，医生叔叔和护士阿姨会用温柔的魔法治好你。',
      '学会这些看病的单词，你也能当小小医生哦！',
      '准备好了吗？推开第一扇门，出发！'
    ],
    [ // 自然岛：植物动物主题
      '哇～是自然岛！这里有会跳舞的花朵和调皮的小动物 🌿',
      '单词就像小种子，种进心里就会慢慢发芽长大。',
      '跟着泡泡穿过丛林和花园，去认识它们吧！',
      '小动物们都在等你呢，出发！'
    ],
    [ // 社团岛：学校社团 + 传统游戏主题
      '社团岛到啦！这里有一整座热热闹闹的校园 🎭',
      '音乐社、戏剧社、运动队都在招新，你想加入哪一个？',
      '还有爷爷奶奶小时候玩的传统游戏，可有意思了！',
      '学会这些单词，你就是最闪亮的社团之星！出发～'
    ],
    [ // 科学岛：科学家与发明主题
      '欢迎来到科学岛！这里是小小发明家的实验室 🔬',
      '牛顿发现了万有引力，袁隆平爷爷发明了杂交水稻……',
      '科学家用好奇心和双手改变世界，你也能成为小小发明家！',
      '准备好了吗？推开科学之门，出发！'
    ],
    [ // 未来岛：电脑与环保主题
      '欢迎来到未来岛！这里有一座神奇的绿色电脑教室 💻',
      '学会用电脑，也要学会保护地球——节约能源、垃圾分类！',
      '未来的世界在你的手中，每一个环保小举动都很重要哦～',
      '准备好了吗？推开未来之门，出发！'
    ],
    [ // 校园岛：学校生活主题
      '欢迎来到校园岛！这里有一整座闪闪发光的学校 🏫',
      '上课、做实验、参加社团……校园生活真是丰富多彩！',
      '学会这些校园单词，你就能和外国同学聊天啦～',
      '准备好了吗？推开第一扇门，出发！'
    ]
  ];
  function introFor(isl) {
    return INTROS[isl.idx] || [
      '欢迎来到' + isl.short + '！' + isl.icon,
      '泡泡会陪你一起闯过这里的每一扇门，加油！',
      '准备好了吗？出发！'
    ];
  }
  function shardLines(isl) {
    return [
      '太棒了！' + isl.short + '的所有大门都被你闯过啦！🎉',
      '这片 ' + isl.icon + ' 精灵碎片送给你，要好好收藏哦～',
      '集齐所有碎片，就能召唤守护冒险岛的大精灵！'
    ];
  }
  const FINAL_LINES = [
    '哇！你集齐了所有的精灵碎片！💠✨',
    '大精灵出现啦～她说：谢谢你守护了冒险岛上的每一个单词！',
    '你就是真正的单词冒险王！🏆 继续复习，让星星一直闪亮吧！'
  ];

  let dlg = null;
  const pendingDialogues = []; // 回地图后排队的对话（碎片庆祝 → 集齐庆祝）
  function playDialogue(pages, onDone) {
    dlg = { pages: pages, idx: 0, onDone: onDone || null };
    $('dialogue-overlay').classList.remove('hidden');
    renderDlg();
  }
  function renderDlg() {
    $('dlg-text').textContent = dlg.pages[dlg.idx];
    $('dlg-next').textContent = dlg.idx >= dlg.pages.length - 1 ? '出发！' : '继续 ▶';
  }
  function advanceDlg() {
    if (!dlg) return;
    dlg.idx++;
    if (dlg.idx < dlg.pages.length) { renderDlg(); return; }
    $('dialogue-overlay').classList.add('hidden');
    const cb = dlg.onDone;
    dlg = null;
    if (cb) cb();
    processPendingDialogues();
  }
  function processPendingDialogues() {
    if (dlg || !pendingDialogues.length) return;
    const next = pendingDialogues.shift();
    playDialogue(next.pages, next.onDone);
  }

  /* ---------------- 英语对话（chat-screen：和泡泡聊天） ---------------- */
  // 语音识别已永久禁用：Chrome 的语音识别依赖 Google 服务器，在中国大陆不可用。
  // 麦克风按钮已移除，所有互动改为打字输入 + 手动通过。
  const CHAT_PRAISE = ['Great answer!', 'Well done!', 'Perfect!', 'You got it!', 'Brilliant!'];
  const CHAT_RETRY = ['Hmm, try again!', 'Almost! Try again!', 'Not quite. One more try!'];

  let chat = null; // { unitId, script, idx, recog }

  function startChat(unitId) {
    const script = DIALOGUES[unitId];
    if (!script) return;
    stopChatRecog();
    chat = { unitId: unitId, script: script, idx: -1, recog: null };
    showScreen('chat-screen');
    $('chat-title').textContent = script.icon + ' ' + script.title;
    $('chat-body').innerHTML = '';
    $('chat-input').innerHTML = '';
    nextChatStep();
  }

  // 追加一条聊天消息（left=泡泡带头像 / right=孩子），新消息淡入并滚到底部
  function appendChatMsg(side, en, opts) {
    opts = opts || {};
    const row = document.createElement('div');
    row.className = 'chat-row ' + side;
    let inner = '';
    if (side === 'left') inner += '<div class="chat-avatar">🧚‍♀️</div>';
    inner += '<div class="chat-bubble' + (opts.zhOpen ? ' zh-open' : '') + '">' +
      (opts.label ? '<div class="chat-rep-label">' + esc(opts.label) + '</div>' : '') +
      '<span class="chat-en">' + esc(en) + '</span>' +
      (opts.listen ? '<button class="chat-listen" title="再听一遍">🔊</button>' : '') +
      (opts.zh ? '<div class="chat-zh">' + esc(opts.zh) + '</div>' : '') +
      (opts.zh && !opts.zhOpen ? '<span class="chat-zh-tip">点我看中文 💡</span>' : '') +
      '</div>';
    row.innerHTML = inner;
    const bubble = row.querySelector('.chat-bubble');
    // 中文默认折叠，点气泡展开/收起
    if (side === 'left' && opts.zh) {
      bubble.addEventListener('click', () => bubble.classList.toggle('zh-open'));
    }
    const lb = row.querySelector('.chat-listen');
    if (lb) lb.addEventListener('click', (e) => { e.stopPropagation(); speak(en); });
    $('chat-body').appendChild(row);
    const body = $('chat-body');
    body.scrollTop = body.scrollHeight;
    return row;
  }

  function chatHint(html) {
    const h = $('chat-hint');
    if (h) { h.innerHTML = html; }
  }

  function nextChatStep() {
    if (!chat) return;
    chat.idx++;
    if (chat.idx >= chat.script.steps.length) return finishChat();
    const step = chat.script.steps[chat.idx];
    if (step.type === 'say') {
      appendChatMsg('left', step.en, { zh: step.zh, listen: true });
      speak(step.en);
      $('chat-input').innerHTML =
        '<div class="chat-hint" id="chat-hint"></div>' +
        '<div class="chat-btns"><button class="chat-btn primary" id="chat-next">继续 ▶</button></div>';
      const nb = $('chat-next');
      nb.addEventListener('click', () => { nb.disabled = true; nextChatStep(); });
    } else if (step.type === 'choice') {
      renderChatChoice(step);
    } else if (step.type === 'ask') {
      renderChatAsk(step);
    } else if (step.type === 'repeat') {
      renderChatRepeat(step);
    }
  }

  function renderChatChoice(step) {
    const btns = step.options.map((o, i) =>
      '<button class="chat-btn chat-opt" data-i="' + i + '">' + esc(o.en) +
      '<small>' + esc(o.zh) + '</small></button>').join('');
    $('chat-input').innerHTML =
      '<div class="chat-hint" id="chat-hint">轮到你说啦！选一句英文回应泡泡 💬</div>' +
      '<div class="chat-btns">' + btns + '</div>';
    $('chat-input').querySelectorAll('.chat-opt').forEach((b) => {
      b.addEventListener('click', () => onChatChoice(step, Number(b.dataset.i), b));
    });
  }

  function onChatChoice(step, i, btn) {
    const opt = step.options[i];
    if (opt.correct) {
      beep('correct');
      appendChatMsg('right', opt.en);
      // 选对：泡泡即时反应——在选项区上方显示一句英文夸奖，然后自动进下一步
      chatHint('🌟 ' + randPick(CHAT_PRAISE));
      const h = $('chat-hint');
      if (h) h.classList.add('good');
      $('chat-input').querySelectorAll('.chat-opt').forEach((b) => { b.disabled = true; });
      setTimeout(nextChatStep, 1000);
    } else {
      // 选错：错误音效 + 提示重选，不扣分不阻塞（只禁用这个错选项）
      beep('wrong');
      btn.classList.add('wrong-pick');
      btn.disabled = true;
      chatHint(randPick(CHAT_RETRY) + ' 🤔');
    }
  }

  function renderChatRepeat(step) {
    appendChatMsg('left', step.en, {
      zh: step.zh, zhOpen: true, listen: true, label: '🎤 跟读时间：跟我读一遍'
    });
    speak(step.en); // 自动播放一次示范
    $('chat-input').innerHTML =
      '<div class="chat-hint" id="chat-hint">听一听，然后大声读出来！点「✋ 我读过了」继续</div>' +
      '<div class="chat-btns">' +
      '<button class="chat-btn" id="chat-rel">🔊 再听一遍</button>' +
      '<button class="chat-btn primary" id="chat-pass">✋ 我读过了</button></div>';
    on('chat-rel', 'click', () => speak(step.en));
    on('chat-pass', 'click', () => passChatRepeat(step, step.en, '✋'));
  }

  // 跟读通过（识别通过或孩子自觉点 ✋）：音效 + 星星动画 + 自动下一步
  function passChatRepeat(step, saidText, mark) {
    stopChatRecog();
    beep('correct');
    const row = appendChatMsg('right', saidText + (mark ? ' ' + mark : ''));
    const bubble = row.querySelector('.chat-bubble');
    if (bubble) burst(bubble);
    chatHint('🌟 ' + randPick(CHAT_PRAISE));
    const h = $('chat-hint');
    if (h) h.classList.add('good');
    $('chat-input').querySelectorAll('button').forEach((b) => { b.disabled = true; });
    setTimeout(nextChatStep, 1200);
  }

  // 语音识别已禁用（Google 服务器在中国大陆不可用）


  function stopChatRecog() { /* 语音识别已禁用，此函数为空 */ }

  /* ask 步骤：语音或打字输入，accept 是多组 keyword 数组 */
  function renderChatAsk(step) {
    appendChatMsg('left', step.en, { zh: step.zh, listen: true });
    speak(step.en);
    chat.askStep = { step: step, tries: 0 };
    const hints = (step.hints || []).join('<br>');
    $('chat-input').innerHTML =
      '<div class="chat-hint" id="chat-hint">' + (hints ? hints : '轮到你说啦！打字回答 💬') + '</div>' +
      '<div class="chat-input-wrap">' +
      '<input type="text" class="chat-text-input" id="chat-text-input" placeholder="输入你的回答...">' +
      '<button class="chat-btn primary" id="chat-ask-submit">提交</button></div>';
    const input = $('chat-text-input');
    input.focus();
    input.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') submitChatAsk(); });
    on('chat-ask-submit', 'click', submitChatAsk);
  }

  // 语音识别已禁用（Google 服务器在中国大陆不可用）


  function submitChatAsk() {
    if (!chat || !chat.askStep) return;
    const step = chat.askStep.step;
    const input = $('chat-text-input');
    const text = input ? input.value.trim() : '';
    if (!text) return;
    checkChatAsk(step, text);
  }

  // accept 是多组 keyword 数组，只要命中任一组全部 keywords（不区分大小写、容忍常见简写）即判通过
  function checkChatAsk(step, text) {
    const normalized = normalizeAskText(text);
    const accept = step.accept || [];
    let passed = false;
    for (const group of accept) {
      if (group.every((kw) => normalized.includes(kw.toLowerCase()))) {
        passed = true; break;
      }
    }
    if (passed) {
      // 通过：Bubble 表扬并自动进下一步
      appendChatMsg('right', text);
      const reply = 'Great! ' + (step.sample || 'Good answer!') + ' ' + randPick(CHAT_PRAISE);
      appendChatMsg('left', reply);
      chat.askStep = null;
      beep('correct');
      $('chat-input').innerHTML = '<div class="chat-hint good" id="chat-hint">🌟 ' + randPick(CHAT_PRAISE) + '</div>';
      setTimeout(nextChatStep, 1200);
      return true;
    } else {
      // 不通过
      chat.askStep.tries++;
      beep('wrong');
      if (chat.askStep.tries >= 2) {
        // 连续 2 次不通过：给 sample 答案并继续
        appendChatMsg('right', text);
        const hint = 'Almost! Here is a good answer: "' + (step.sample || '') + '"';
        appendChatMsg('left', hint);
        chat.askStep = null;
        $('chat-input').innerHTML = '<div class="chat-hint" id="chat-hint">继续加油！</div>';
        setTimeout(nextChatStep, 2000);
        return true;
      }
      chatHint('Hmm, try again! ' + randPick(CHAT_RETRY) + ' 💡');
      const input = $('chat-text-input');
      if (input) input.value = '';
      return false;
    }
  }

  // 回答文本归一化：小写、常见简写展开
  function normalizeAskText(text) {
    return String(text).toLowerCase()
      .replace(/i\'m/g, 'i am')
      .replace(/you\'re/g, 'you are')
      .replace(/he\'s/g, 'he is')
      .replace(/she\'s/g, 'she is')
      .replace(/it\'s/g, 'it is')
      .replace(/don\'t/g, 'do not')
      .replace(/can\'t/g, 'can not')
      .replace(/won\'t/g, 'will not')
      .replace(/\./g, ' ')
      .replace(/,/g, ' ');
  }


  function finishChat() {
    stopChatRecog();
    const t = todayStr();
    // 对话每日奖励规则：每场对话每天只发一次 +2⭐（计入 save.bonusStars），
    // 当天重玩不再发奖，只提示「复习也很棒！」
    let starsText;
    let msg;
    if (save.chatRewards[chat.unitId] === t) {
      starsText = '⭐ 复习也很棒！';
      msg = '今天的奖励已经领过啦，但多说英语会越来越流利！';
    } else {
      save.chatRewards[chat.unitId] = t;
      save.bonusStars = (save.bonusStars || 0) + 2;
      persist();
      starsText = '+2 ⭐';
      msg = '和泡泡完成了一场英语对话，太棒了！奖励两颗星星～';
    }
    updateHud();
    showScreen('chat-result-screen');
    $('chat-result-stars').textContent = starsText;
    $('chat-result-msg').textContent = msg;
    beep('complete');
  }


  /* ---------------- 泡泡聊天室（freechat-screen） ---------------- */
  // 离线关键词意图引擎（无需联网，纯 JS）
  // 每个 intent 有 3~5 条中文/英文/混合关键词 + 5~8 条回复模板
  const FREECHAT_INTENTS = {
    greeting: {
      keywords: ['hello', 'hi', 'hey', '你好', '嗨', '早上好', '晚上好', 'good morning', 'good evening'],
      replies: [
        'Hi there! 👋 Welcome to Word Adventure Island!',
        'Hello! I am Bubble 🧚‍♀️ Nice to meet you!',
        'Hey! Ready to learn some new words today?',
        '你好呀！泡泡很高兴见到你～',
        'Hi! Do you know how to spell "giraffe"? 🦒'
      ]
    },
    howareyou: {
      keywords: ['how are you', 'how do you do', '你好吗', '你怎么样', '最近好吗', '你还好'],
      replies: [
        'I am great! Thanks for asking 😊 How are you?',
        'I am feeling wonderful! Just learned a new word: "protect"! 🛡️',
        'Pretty good! I am busy helping kids learn English words 🧚‍♀️',
        '我很好！你呢？今天有复习单词吗？',
        'I am fine! Do you know what "recycle" means? ♻️'
      ]
    },
    name: {
      keywords: ['name', '叫什么名字', '你叫什么', 'who are you', '你是谁', 'your name'],
      replies: [
        'My name is Bubble! 🧚‍♀️ I am your guide on Word Adventure Island!',
        'I am Bubble! I love helping kids learn English words like "invention" and "discovery"! 🔬',
        '我叫泡泡！我是单词冒险岛的向导～',
        'Call me Bubble! Can you spell "bubble"? B-U-B-B-L-E! 🫧'
      ]
    },
    age: {
      keywords: ['old', 'age', '多大', '几岁', '你多大了', 'how old'],
      replies: [
        'I am as old as the first word ever spoken! 🌟',
        'Age is just a number! What matters is learning words like "patient" and "temperature"! 🩺',
        '我一百岁啦！开玩笑的～我其实和单词一样古老！',
        'I am 100 years old in fairy years! 🧚‍♀️✨'
      ]
    },
    like_love: {
      keywords: ['like', 'love', '喜欢', '爱', 'favorite', 'favourite', '最爱', '最喜欢'],
      replies: [
        'I love giraffes! Do you know how to spell giraffe? 🦒',
        'I like "hybrid rice"! Yuan Longping invented it. Can you say "hybrid rice"? 🌾',
        'I love the word "adventure"! It means 冒险！A-D-V-E-N-T-U-R-E!',
        '我最喜欢 "safari park"！你呢？',
        'I love learning! Do you like studying English words too? 📚'
      ]
    },
    dislike: {
      keywords: ['dislike', 'hate', '讨厌', '不喜欢', '不好', 'bad', 'not like'],
      replies: [
        'Oh, what don\'t you like? Maybe I can cheer you up with a fun word! 🌈',
        'Sometimes learning can be hard, but never give up! 💪',
        '没关系！我们可以一起找到你喜欢的东西～',
        'Don\'t worry! Let\'s try a word challenge to make it fun! 🎯'
      ]
    },
    school: {
      keywords: ['school', 'schools', '学校', '上课', 'teacher', '老师', 'class', 'classroom', 'study', '学习', 'student'],
      replies: [
        'School is great! You can join the Gardening Club! 🌱 Do you know "gardening"?',
        'I love school! At the Storytelling Club, we practice storytelling! 📖',
        '学校真好！你有没有加入社团？',
        'Study hard, and you will be a scientist one day! Can you say "scientist"? 🔬'
      ]
    },
    animal: {
      keywords: ['animal', 'animals', '动物', 'tiger', 'lion', 'giraffe', 'hippo', 'whale', 'cat', 'dog', 'rabbit', 'fox', 'bird', 'fish', 'bear', 'monkey', 'panda', 'elephant'],
      replies: [
        'Animals are wonderful! The tiger is so strong! 🐯 Can you spell "tiger"?',
        'I love the giraffe! Its neck is very long. G-I-R-A-F-F-E! 🦒',
        '河马叫 hippo! Do you want to see how it dives? 🦛',
        '蓝鲸是 blue whale! It is the biggest animal in the world! 🐋',
        '动物们都很有趣！你最喜欢什么动物？'
      ]
    },
    food: {
      keywords: ['food', 'eat', 'hungry', 'rice', 'noodles', 'bread', 'cake', 'fruit', 'apple', 'banana', 'fish', 'meat', 'vegetable', '好吃', '饿', '吃', '食物'],
      replies: [
        'Food is yummy! Do you know "fresh water"? We need it to cook! 💧',
        'I love bread! Wheat is an amazing plant. 🌾',
        '你饿了吗？吃饱才能背单词哦！',
        'Eat healthy food and take medicine when you are sick! 🩺'
      ]
    },
    feeling_good: {
      keywords: ['happy', 'good', 'great', 'wonderful', 'excited', '开心', '高兴', '快乐', '棒', '很好', '不错', '爽'],
      replies: [
        'Yay! I am happy too! Let\'s learn a happy word: "prize"! 🏆',
        'Great! You can be confident! C-O-N-F-I-D-E-N-T! 😊',
        '太棒了！开心学习最有效！',
        'Wonderful! Practice makes perfect! ✨'
      ]
    },
    feeling_bad: {
      keywords: ['sad', 'tired', 'sick', 'unhappy', '难过', '累', '难受', '不舒服', '生病', '不开心', 'bad'],
      replies: [
        'Oh no! Are you sick? Remember: take medicine and have a good rest! 🩺',
        'Don\'t be sad! Take it easy! T-A-K-E I-T E-A-S-Y! 💪',
        'Take it easy! 放轻松！一切都会好起来的！',
        'Oh! Do you have a fever? Let me check your temperature! 🌡️',
        'I am sorry to hear that. Drink lots of water! 💧'
      ]
    },
    goodbye: {
      keywords: ['bye', 'goodbye', 'see you', '再见', '拜拜', '回头见', '下次见', 'later'],
      replies: [
        'Goodbye! Remember to review your words! 👋',
        'See you! Never give up! G-I-V-E U-P! 💪',
        '拜拜！记得回来继续冒险哦！',
        'Bye! Work hard, and your invention will be useful one day! 🌟'
      ]
    },
    weather: {
      keywords: ['weather', 'rain', 'rainy', 'sunny', 'snow', 'hot', 'cold', 'warm', '天气', '下雨', '晴天', '冷', '热', '雪'],
      replies: [
        'What\'s the weather like? It is sunny here on the island! ☀️',
        'If it rains, stay inside and practice spelling! ☔',
        '天气真好！适合出去背单词！',
        'Rainy day? Perfect time to learn words like "temperature"! 🌡️'
      ]
    },
    thanks: {
      keywords: ['thank', 'thanks', '谢谢', '感谢', '谢', 'thank you', 'thx'],
      replies: [
        'You are welcome! 😊',
        '不用谢！泡泡很高兴帮你！',
        'Thank you for talking with me! Here is a word: "reuse"! ♻️',
        'You are welcome! Let\'s recycle more! R-E-C-Y-C-L-E! 🌍'
      ]
    },
    challenge: {
      keywords: ['challenge', 'test', 'quiz', '考我', '考验', '测试', '考', '考考', '考考你', 'question', '单词', 'word'],
      replies: [
        'Great! Let\'s do a quick challenge! 🎯',
        'I love challenges! Are you ready? 💪',
        '考考你！准备好了吗？'
      ]
    }
  };

  let freechat = null; // { unitId, history, fallbackCount, lastChallenge }

  function startFreeChat(unitId) {
    freechat = {
      unitId: unitId || null,
      history: (save.freeChatHistory || []).slice(-6),
      fallbackCount: 0,
      lastChallenge: null
    };
    showScreen('freechat-screen');
    $('freechat-title').textContent = '💬 泡泡自由聊天室';
    $('freechat-body').innerHTML = '';
    // 恢复历史
    freechat.history.forEach((h) => {
      if (h.from === 'bubble') appendFreeChatMsg('left', h.text);
      else appendFreeChatMsg('right', h.text);
    });
    // 开场白
    if (!freechat.history.length) {
      const greeting = 'Hello! I am Bubble 🧚‍♀️ Let\'s chat! You can ask me anything, or I can teach you some words!';
      appendFreeChatMsg('left', greeting);
      addFreeChatHistory('bubble', greeting);
    }
    renderFreeChatInput();
  }

  function appendFreeChatMsg(side, text) {
    const row = document.createElement('div');
    row.className = 'chat-row ' + side;
    let inner = '';
    if (side === 'left') inner += '<div class="chat-avatar">🧚‍♀️</div>';
    inner += '<div class="chat-bubble">' + esc(text) + '</div>';
    row.innerHTML = inner;
    $('freechat-body').appendChild(row);
    $('freechat-body').scrollTop = $('freechat-body').scrollHeight;
  }

  function addFreeChatHistory(from, text) {
    freechat.history.push({ from: from, text: text });
    if (freechat.history.length > 6) freechat.history.shift();
    save.freeChatHistory = freechat.history;
    persist();
  }

  function renderFreeChatInput() {
    $('freechat-input').innerHTML =
      '<div class="fc-input-wrap">' +
      '<input type="text" class="fc-text" id="fc-text" placeholder="输入英文或中文..." autocomplete="off">' +
      '<button class="chat-btn primary" id="fc-send">发送</button>' +
      '</div>';
    const input = $('fc-text');
    input.focus();
    input.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') sendFreeChat(); });
    on('fc-send', 'click', sendFreeChat);
  }

  // 匹配意图：关键词命中（不区分大小写）
  function matchFreeChatIntent(text) {
    const t = String(text).toLowerCase();
    for (const key in FREECHAT_INTENTS) {
      const intent = FREECHAT_INTENTS[key];
      if (intent.keywords.some((k) => t.includes(k.toLowerCase()))) return key;
    }
    return null;
  }

  function getFreeChatReply(intentKey) {
    const intent = FREECHAT_INTENTS[intentKey];
    if (!intent) return null;
    return randPick(intent.replies);
  }

  // fallback：3 轮没命中 intent，主动发起单词小挑战
  function getFreeChatChallenge() {
    // 从词库中随机选一个词考拼写
    const pool = allEntries.filter((e) => e.type === 'word' && e.text.length <= 10);
    const e = randPick(pool);
    freechat.lastChallenge = { text: e.text, meaning: e.meaning };
    return '考考你：「' + e.meaning + '」用英语怎么说？';
  }

  function sendFreeChat() {
    const input = $('fc-text');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    appendFreeChatMsg('right', text);
    addFreeChatHistory('kid', text);
    input.value = '';

    // 检查是否是回答单词挑战
    if (freechat.lastChallenge) {
      const ans = text.toLowerCase().replace(/\s+/g, '');
      const target = freechat.lastChallenge.text.toLowerCase().replace(/\s+/g, '');
      if (ans === target || ans.includes(target)) {
        const praise = 'Correct! 🎉 ' + freechat.lastChallenge.text + ' is right! You are so smart!';
        appendFreeChatMsg('left', praise);
        addFreeChatHistory('bubble', praise);
        freechat.lastChallenge = null;
        freechat.fallbackCount = 0;
        beep('correct');
        return;
      } else {
        const wrong = 'Not quite! The right answer is "' + freechat.lastChallenge.text + '". Keep trying!';
        appendFreeChatMsg('left', wrong);
        addFreeChatHistory('bubble', wrong);
        freechat.lastChallenge = null;
        freechat.fallbackCount = 0;
        beep('wrong');
        return;
      }
    }

    const intent = matchFreeChatIntent(text);
    if (intent) {
      freechat.fallbackCount = 0;
      const reply = getFreeChatReply(intent);
      if (reply) {
        appendFreeChatMsg('left', reply);
        addFreeChatHistory('bubble', reply);
        speak(reply);
      }
    } else {
      freechat.fallbackCount++;
      if (freechat.fallbackCount >= 3) {
        freechat.fallbackCount = 0;
        const challenge = getFreeChatChallenge();
        appendFreeChatMsg('left', challenge);
        addFreeChatHistory('bubble', challenge);
        speak(challenge);
      } else {
        const fallback = 'Hmm, I am not sure what you mean. Let\'s talk about words! Do you like animals or school? 🐯📚';
        appendFreeChatMsg('left', fallback);
        addFreeChatHistory('bubble', fallback);
      }
    }
  }

  // 语音识别已禁用（Google 服务器在中国大陆不可用）


  /* ---------------- 对话话题选择菜单

  /* ---------------- 默写训练营（dictation-screen） ---------------- */
  let dictation = null; // { doorId, pool, level, idx, wrong, wrongEntries, current }

  function startDictation(doorId) {
    const door = DOOR_BY_ID[doorId];
    if (!door) return;
    const poolAll = buildDictationPool(doorId);
    const weak = pickWeakWords(poolAll, 3);
    const weakSet = new Set(weak.map((e) => getSpellKey(e.text)));
    const normal = poolAll.filter((e) => !weakSet.has(getSpellKey(e.text)));
    // 队列 = 薄弱词优先 + 随机正常词，凑够 8 个
    const queue = shuffle(weak).concat(shuffle(normal)).slice(0, DICTATION_WORDS_PER_ROUND);
    const level = save.dictationMastery[doorId] || save.settings.dictationDefaultLevel || 1;
    dictation = {
      doorId: doorId, pool: queue, level: level,
      idx: 0, wrong: 0, wrongEntries: []
    };
    showScreen('dictation-screen');
    $('dictation-door-name').textContent = door.id + '. ' + door.name + ' · 默写训练营';
    renderDictation();
  }

  function renderDictation() {
    if (dictation.idx >= dictation.pool.length) return finishDictation();
    const e = dictation.pool[dictation.idx];
    dictation.current = e;
    $('dictation-level').textContent = 'L' + dictation.level + ' ' + DICTATION_LEVELS[dictation.level];
    $('dictation-progress').textContent = (dictation.idx + 1) + '/' + dictation.pool.length;
    $('dictation-meaning').textContent = e.meaning;
    $('dictation-input-area').innerHTML = '';
    $('dictation-feedback').textContent = '';
    $('dictation-feedback').className = 'dictation-feedback';
    if (dictation.level === 1) renderDictL1(e);
    else if (dictation.level === 2) renderDictL2(e);
    else renderDictL3(e);
  }

  /* L1 补全字母：单词显示 2~3 个空缺 */
  function renderDictL1(e) {
    const text = e.text;
    const letters = [];
    for (let i = 0; i < text.length; i++) {
      if (/[a-zA-Z]/.test(text[i])) letters.push(i);
    }
    // 长词多空，短词少空；phrase 每个词分别补全
    const words = text.split(/\s+/);
    const isPhrase = words.length > 1;
    let blanks = [];
    if (isPhrase) {
      // phrase：每个词分别补全，每个词最多1空
      let offset = 0;
      words.forEach((w) => {
        const wLetters = [];
        for (let i = 0; i < w.length; i++) {
          if (/[a-zA-Z]/.test(w[i])) wLetters.push(offset + i);
        }
        if (wLetters.length >= 3) {
          blanks.push(wLetters[Math.floor(Math.random() * wLetters.length)]);
        }
        offset += w.length + 1; // +1 for space
      });
    } else {
      const n = text.length >= 7 ? 2 : 1;
      const used = new Set();
      while (blanks.length < n && used.size < letters.length) {
        const idx = letters[Math.floor(Math.random() * letters.length)];
        if (used.has(idx)) continue;
        used.add(idx);
        blanks.push(idx);
      }
    }
    blanks.sort((a, b) => a - b);
    dictation.l1Blanks = blanks;
    dictation.l1Filled = new Array(blanks.length).fill('');

    // 渲染单词
    let html = '<div class="dict-word">';
    for (let i = 0; i < text.length; i++) {
      const bi = blanks.indexOf(i);
      if (bi >= 0) {
        html += '<span class="dict-blank" data-bi="' + bi + '">＿</span>';
      } else {
        html += '<span class="dict-char">' + esc(text[i]) + '</span>';
      }
    }
    html += '</div>';
    // 字母按钮行 A-Z
    html += '<div class="dict-alpha">';
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((c) => {
      html += '<button class="dict-alpha-btn">' + c + '</button>';
    });
    html += '</div>';
    $('dictation-input-area').innerHTML = html;
    $('dictation-input-area').querySelectorAll('.dict-alpha-btn').forEach((b) => {
      b.addEventListener('click', () => onDictL1Letter(b.textContent));
    });
  }

  function onDictL1Letter(letter) {
    const blanks = dictation.l1Blanks;
    const filled = dictation.l1Filled;
    // 找到第一个空着的空位
    let target = -1;
    for (let i = 0; i < filled.length; i++) {
      if (!filled[i]) { target = i; break; }
    }
    if (target < 0) return; // 全满了
    filled[target] = letter.toLowerCase();
    const blankEl = $('dictation-input-area').querySelector('.dict-blank[data-bi="' + target + '"]');
    if (blankEl) blankEl.textContent = letter;
    // 每个空独立判定（视觉反馈，但不阻塞）
    const correctLetter = dictation.current.text[blanks[target]].toLowerCase();
    if (blankEl) {
      blankEl.classList.add(filled[target] === correctLetter ? 'blank-ok' : 'blank-wrong');
    }
    // 点完最后一个字母时整词判定
    if (filled.every((c) => c)) {
      const allCorrect = filled.every((c, i) => c === dictation.current.text[blanks[i]].toLowerCase());
      judgeDictation(allCorrect);
    }
  }

  /* L2 字母块拼词 */
  function renderDictL2(e) {
    const text = e.text;
    const words = text.split(/\s+/);
    const isPhrase = words.length > 1;
    let html = '';
    if (isPhrase) {
      // phrase 同理逐词拼
      words.forEach((w, wi) => {
        const tiles = shuffle(w.split(''));
        html += '<div class="dict-tile-row" data-wi="' + wi + '">';
        tiles.forEach((c) => {
          html += '<button class="dict-tile">' + esc(c) + '</button>';
        });
        html += '</div><div class="dict-tile-answer" data-wi="' + wi + '"></div>';
      });
    } else {
      const tiles = shuffle(text.split(''));
      html += '<div class="dict-tile-row">';
      tiles.forEach((c) => {
        html += '<button class="dict-tile">' + esc(c) + '</button>';
      });
      html += '</div><div class="dict-tile-answer"></div>';
    }
    $('dictation-input-area').innerHTML = html;
    dictation.l2Answer = isPhrase ? words.map(() => '') : [''];
    dictation.l2IsPhrase = isPhrase;
    $('dictation-input-area').querySelectorAll('.dict-tile').forEach((b) => {
      b.addEventListener('click', () => onDictL2Tile(b, isPhrase));
    });
  }

  function onDictL2Tile(btn, isPhrase) {
    if (btn.disabled) return;
    const text = dictation.current.text;
    const words = text.split(/\s+/);
    if (isPhrase) {
      // 逐词拼：找到当前正在拼的词
      const rows = $('dictation-input-area').querySelectorAll('.dict-tile-row');
      const answers = $('dictation-input-area').querySelectorAll('.dict-tile-answer');
      for (let wi = 0; wi < words.length; wi++) {
        const ans = dictation.l2Answer[wi] || '';
        if (ans.length < words[wi].length) {
          const nextChar = words[wi][ans.length];
          if (btn.textContent === nextChar) {
            dictation.l2Answer[wi] = ans + nextChar;
            answers[wi].textContent = dictation.l2Answer[wi];
            btn.classList.add('tile-used');
            btn.disabled = true;
            // 检查该词是否完成
            if (dictation.l2Answer[wi] === words[wi]) {
              answers[wi].classList.add('answer-ok');
              speak(words[wi]);
            }
            // 检查全部是否完成
            if (dictation.l2Answer.every((a, i) => a === words[i])) {
              judgeDictation(true);
            }
            return;
          } else {
            // 点错 tile 抖动+音效
            btn.classList.add('tile-shake');
            beep('wrong');
            setTimeout(() => btn.classList.remove('tile-shake'), 400);
            return;
          }
        }
      }
    } else {
      const ans = dictation.l2Answer[0];
      const nextChar = text[ans.length];
      if (btn.textContent === nextChar) {
        dictation.l2Answer[0] = ans + nextChar;
        const answerEl = $('dictation-input-area').querySelector('.dict-tile-answer');
        answerEl.textContent = dictation.l2Answer[0];
        btn.classList.add('tile-used');
        btn.disabled = true;
        if (dictation.l2Answer[0] === text) {
          answerEl.classList.add('answer-ok');
          speak(text);
          judgeDictation(true);
        }
      } else {
        btn.classList.add('tile-shake');
        beep('wrong');
        setTimeout(() => btn.classList.remove('tile-shake'), 400);
      }
    }
  }

  /* L3 听音默写 */
  function renderDictL3(e) {
    const html =
      '<div class="dict-l3-top">' +
      '<button class="speak-btn" id="dict-speak">🔊 朗读</button>' +
      '<span class="dict-l3-mean">' + esc(e.meaning) + '</span>' +
      '</div>' +
      '<input type="text" class="dict-input" id="dict-input" autocomplete="off" spellcheck="false">' +
      '<button class="btn-primary dict-submit" id="dict-submit">提交</button>';
    $('dictation-input-area').innerHTML = html;
    const input = $('dict-input');
    input.focus();
    input.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') submitDictL3(); });
    on('dict-speak', 'click', () => speak(e.text));
    on('dict-submit', 'click', submitDictL3);
    // 自动播放一次
    setTimeout(() => speak(e.text), 300);
  }

  function submitDictL3() {
    const input = $('dict-input');
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;
    const target = dictation.current.text.toLowerCase().replace(/\s+/g, '');
    const given = val.toLowerCase().replace(/\s+/g, '');
    const correct = target === given;
    judgeDictation(correct, val);
  }

  /* 默写判定统一入口 */
  function judgeDictation(correct, userAnswer) {
    const e = dictation.current;
    if (correct) {
      beep('correct');
      $('dictation-feedback').textContent = '✅ 正确！';
      $('dictation-feedback').className = 'dictation-feedback feedback-ok';
      recordSpellStats(e.text, true);
    } else {
      beep('wrong');
      dictation.wrong++;
      dictation.wrongEntries.push({ text: e.text, meaning: e.meaning, userAnswer: userAnswer || '' });
      recordSpellStats(e.text, false);
      // L3：显示正确拼写对照
      if (dictation.level === 3 && userAnswer) {
        const fb = $('dictation-feedback');
        const target = e.text;
        const given = userAnswer;
        let compareHTML = '<div class="dict-compare">';
        for (let i = 0; i < Math.max(target.length, given.length); i++) {
          const tc = target[i] || '';
          const gc = given[i] || '';
          if (tc && gc && tc.toLowerCase() === gc.toLowerCase()) {
            compareHTML += '<span class="cmp-same">' + esc(tc) + '</span>';
          } else {
            compareHTML += '<span class="cmp-wrong">' + (gc ? esc(gc) : '·') + '</span>' +
              '<span class="cmp-right">' + (tc ? esc(tc) : '') + '</span>';
          }
        }
        compareHTML += '</div>';
        fb.innerHTML = '❌ 再看看正确拼写：<br>' + compareHTML;
        fb.className = 'dictation-feedback feedback-wrong';
      } else {
        $('dictation-feedback').textContent = '❌ 正确拼写：' + e.text;
        $('dictation-feedback').className = 'dictation-feedback feedback-wrong';
      }
      // 禁用输入
      $('dictation-input-area').querySelectorAll('button, input').forEach((b) => { b.disabled = true; });
    }
    const delay = dictation.level === 3 ? 1800 : 1500;
    setTimeout(() => {
      dictation.idx++;
      renderDictation();
    }, delay);
  }

  /* 默写结算 */
  function finishDictation() {
    const wrong = dictation.wrong;
    const stars = wrong === 0 ? 3 : (wrong <= 2 ? 2 : 1);
    const perfect = wrong === 0;
    const doorId = dictation.doorId;

    // 难度自动升级（持久化连胜计数）
    if (perfect) {
      save.dictationConsecutivePerfect[doorId] = (save.dictationConsecutivePerfect[doorId] || 0) + 1;
      if (save.settings.dictationAutoLevel && save.dictationConsecutivePerfect[doorId] >= 2) {
        const curLevel = save.dictationMastery[doorId] || save.settings.dictationDefaultLevel || 1;
        if (curLevel < 3) {
          save.dictationMastery[doorId] = curLevel + 1;
          persist();
        }
      }
    } else {
      save.dictationConsecutivePerfect[doorId] = 0;
    }

    // bonusStars
    if (perfect) {
      save.bonusStars = (save.bonusStars || 0) + 2;
      persist();
    }

    showScreen('dictation-result-screen');
    const door = DOOR_BY_ID[doorId];
    $('dict-result-door').textContent = door ? (door.id + '. ' + door.name) : '';
    $('dict-result-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    $('dict-result-level').textContent = 'L' + dictation.level + ' ' + DICTATION_LEVELS[dictation.level];
    let msg = perfect ? '太棒了！全对！⭐⭐⭐' : (wrong <= 2 ? '不错哦，只错了 ' + wrong + ' 个～' : '继续加油，错了 ' + wrong + ' 个，下次一定行！');
    $('dict-result-msg').textContent = msg;

    // 列出全对词和错词
    let listHTML = '';
    const correctEntries = dictation.pool.filter((e) => {
      return !dictation.wrongEntries.find((w) => w.text === e.text);
    });
    if (correctEntries.length) {
      listHTML += '<div class="dict-result-sec"><div class="dict-result-label">✅ 全对</div>' +
        correctEntries.map((e) => '<span class="dict-result-tag dict-result-ok">' + esc(e.text) + '</span>').join('') +
        '</div>';
    }
    if (dictation.wrongEntries.length) {
      listHTML += '<div class="dict-result-sec"><div class="dict-result-label">❌ 错词对照</div>' +
        dictation.wrongEntries.map((w) =>
          '<div class="dict-result-wrong-row">' +
          '<span class="dict-result-w">' + esc(w.text) + '</span>' +
          '<span class="dict-result-m">' + esc(w.meaning) + '</span>' +
          (w.userAnswer ? '<span class="dict-result-u">你写了：' + esc(w.userAnswer) + '</span>' : '') +
          '</div>').join('') +
        '</div>';
    }
    $('dict-result-list').innerHTML = listHTML;
    updateHud();
    beep('complete');
  }
  function showChatMenu() {
    const menu = $('chat-menu');
    let html = '<div class="dm-title">💬 和泡泡英语对话</div>' +
      '<button class="dm-btn chat-topic chat-free" data-free="1">💬 自由聊天室</button>';
    ISLANDS.forEach((isl) => {
      const d = DIALOGUES[isl.id];
      if (!d) return; // 兜底岛没有对话脚本就跳过
      const un = islandUnlocked(isl.idx); // 未解锁岛的对话灰显
      const doneToday = save.chatRewards[isl.id] === todayStr();
      html += '<button class="dm-btn chat-topic' + (un ? '' : ' topic-locked') + '"' +
        (un ? ' data-unit="' + isl.id + '"' : ' disabled') + '>' +
        isl.icon + ' ' + esc(isl.short) + ' · ' + esc(d.title) +
        (doneToday ? ' ✅' : '') + (un ? '' : ' 🔒') + '</button>';
    });
    menu.innerHTML = html;
    menu.classList.remove('hidden');
    const r = document.querySelector('.guide-avatar').getBoundingClientRect();
    menu.style.left = Math.max(8, Math.min(r.left, window.innerWidth - menu.offsetWidth - 8)) + 'px';
    menu.style.top = Math.max(8, r.top - menu.offsetHeight - 10) + 'px';
    menu.querySelectorAll('[data-unit]').forEach((b) => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        hideChatMenu();
        startChat(b.dataset.unit);
      });
    });
    const freeBtn = menu.querySelector('[data-free]');
    if (freeBtn) freeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideChatMenu();
      startFreeChat();
    });
  }
  function hideChatMenu() { $('chat-menu').classList.add('hidden'); }

  /* ---------------- 星星商店（shop-screen） ---------------- */
  // 星星余额公式：可用⭐ = 闯关星星 totalStars() + 额外奖励 bonusStars − 商店已花 starSpent
  function availableStars() {
    return totalStars() + (save.bonusStars || 0) - (save.starSpent || 0);
  }
  function shopItemById(id) {
    return SHOP_ITEMS.find((it) => it.id === id) || null;
  }
  function itemEquipped(item) {
    if (item.type === 'deco') return save.equipped.decos.indexOf(item.id) >= 0;
    return save.equipped[item.type] === item.id;
  }

  function buildShop() {
    const bal = availableStars();
    $('shop-balance').textContent = '⭐ ' + bal;
    const body = $('shop-body');
    let html = '';
    SHOP_SECTIONS.forEach((sec) => {
      html += '<div class="shop-sec-title">' + esc(sec.title) + '</div><div class="shop-grid">';
      SHOP_ITEMS.filter((it) => it.type === sec.type).forEach((it) => {
        const owned = save.ownedItems.indexOf(it.id) >= 0;
        const equipped = itemEquipped(it);
        let btn;
        if (!owned) {
          btn = bal >= it.price
            ? '<button class="shop-btn" data-buy="' + it.id + '">购买</button>'
            : '<button class="shop-btn" disabled>还差 ' + (it.price - bal) + '⭐</button>';
        } else if (equipped) {
          btn = '<button class="shop-btn unequip" data-equip="' + it.id + '">卸下</button>';
        } else {
          btn = '<button class="shop-btn equip" data-equip="' + it.id + '">装备</button>';
        }
        html += '<div class="shop-card' + (equipped ? ' equipped' : '') + '">' +
          (equipped ? '<div class="shop-badge">已装备</div>' : '') +
          '<div class="shop-icon">' + it.icon + '</div>' +
          '<div class="shop-name">' + esc(it.name) + '</div>' +
          '<div class="shop-price' + (owned ? ' owned' : '') + '">' +
            (owned ? '✅ 已拥有' : '⭐ ' + it.price) + '</div>' + btn + '</div>';
      });
      html += '</div>';
    });
    body.innerHTML = html;
    body.querySelectorAll('[data-buy]').forEach((b) => {
      b.addEventListener('click', () => buyItem(b.dataset.buy, b));
    });
    body.querySelectorAll('[data-equip]').forEach((b) => {
      b.addEventListener('click', () => toggleEquip(b.dataset.equip));
    });
  }

  function buyItem(id, btn) {
    const it = shopItemById(id);
    if (!it) return;
    if (availableStars() < it.price) return; // 余额不足（按钮本已禁用，双保险）
    save.starSpent = (save.starSpent || 0) + it.price;
    save.ownedItems.push(it.id);
    persist();
    beep('correct');
    if (btn) burst(btn);
    shopToast('买到「' + it.name + '」啦！快装备上看看吧～');
    buildShop();
  }

  function toggleEquip(id) {
    const it = shopItemById(id);
    if (!it || save.ownedItems.indexOf(id) < 0) return;
    if (it.type === 'deco') {
      // 装饰类：可叠加装备多个，点击切换装备/卸下
      const i = save.equipped.decos.indexOf(id);
      if (i >= 0) save.equipped.decos.splice(i, 1);
      else save.equipped.decos.push(id);
    } else {
      // 饰品/宠物同时只装备 1 个：点同一件=卸下，点另一件=替换
      save.equipped[it.type] = save.equipped[it.type] === id ? null : id;
    }
    persist();
    beep('correct');
    renderGuideGear();
    shopToast(itemEquipped(it) ? '装备好啦！回地图看看新造型～' : '已经卸下来啦～');
    buildShop();
  }

  let shopToastTimer = null;
  function shopToast(text) {
    const t = $('shop-toast');
    t.textContent = text;
    t.classList.add('show');
    if (shopToastTimer) clearTimeout(shopToastTimer);
    shopToastTimer = setTimeout(() => t.classList.remove('show'), 2400);
  }

  // 把装备的饰品（头像右上角标）和宠物（泡泡旁边浮动）同步到地图向导
  function renderGuideGear() {
    const acc = save.equipped.acc ? shopItemById(save.equipped.acc) : null;
    const pet = save.equipped.pet ? shopItemById(save.equipped.pet) : null;
    $('guide-acc').textContent = acc ? acc.icon : '';
    $('guide-acc').classList.toggle('hidden', !acc);
    $('guide-pet').textContent = pet ? pet.icon : '';
    $('guide-pet').classList.toggle('hidden', !pet);
  }

  // 把装备的岛屿装饰渲染到世界地图上层（固定位置，pointer-events:none 不遮门）
  function renderMapDecos() {
    const layer = $('map-decos');
    layer.innerHTML = '';
    save.equipped.decos.forEach((id) => {
      const it = shopItemById(id);
      if (!it) return;
      const d = document.createElement('div');
      d.className = 'map-deco ' + id;
      d.textContent = it.icon;
      layer.appendChild(d);
    });
  }

  /* ---------------- 门的行动菜单 ---------------- */
  function onDoorClick(door, isl, el) {
    const st = doorState(door.id, isl);
    if (st === 'locked') {
      if (!islandUnlocked(isl.idx)) {
        say('这座岛还锁着哦～闯过上一座岛后，明天就会开放！🔒');
      } else {
        const prevId = isl.doorIds[isl.doorIds.indexOf(door.id) - 1];
        const prev = DOOR_BY_ID[prevId];
        say('这扇门还锁着哦～ 先闯过「' + (prev ? prev.name : '上一扇门') + '」吧！🔑');
      }
      return;
    }
    hideDoorMenu();
    const openMenu = () => showDoorMenu(door, isl, el);
    // 首次进入该岛：先播放主题开场白，再开门菜单
    if (save.seenIntros.indexOf(isl.id) < 0) {
      save.seenIntros.push(isl.id);
      persist();
      playDialogue(introFor(isl), openMenu);
    } else {
      openMenu();
    }
  }

  function showDoorMenu(door, isl, el) {
    const menu = $('door-menu');
    const due = doorDue(door.id);
    menu.innerHTML =
      (due ? '<div class="dm-badge">🔁 今日需复习</div>' : '') +
      '<div class="dm-title">' + door.id + '. ' + esc(door.name) + '</div>' +
      '<div class="dm-group-label">📖 复习与巩固</div>' +
      '<button class="dm-btn dm-quiz">🎯 ' + (due ? '复习闯关' : '闯关答题') + '</button>' +
      '<button class="dm-btn dm-dict">✍️ 默写训练</button>' +
      '<button class="dm-btn dm-card">🃏 卡片速览</button>' +
      '<div class="dm-group-label">🎮 趣味挑战</div>' +
      '<button class="dm-btn dm-landlord">🎴 单词斗地主</button>' +
      '<button class="dm-btn dm-rush">⚡ 单词抢答</button>' +
      '<button class="dm-btn dm-strike">🎯 单词射击</button>' +
      '<div class="dm-group-label">🎈 自由练习</div>' +
      '<button class="dm-btn dm-match">🔗 连连看</button>';
    menu.classList.remove('hidden');
    const r = el.getBoundingClientRect();
    const mw = menu.offsetWidth;
    const mh = menu.offsetHeight;
    let left = r.left + r.width / 2 - mw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - mw - 8));
    let top = r.bottom + 8;
    if (top + mh > window.innerHeight - 8) top = Math.max(8, r.top - mh - 8);
    menu.style.left = left + 'px';
    menu.style.top = top + 'px';
    menu.querySelector('.dm-quiz').addEventListener('click', () => { hideDoorMenu(); startQuiz(door); });
    menu.querySelector('.dm-match').addEventListener('click', () => { hideDoorMenu(); startMatch(door); });
    menu.querySelector('.dm-dict').addEventListener('click', () => { hideDoorMenu(); startDictation(door.id); });
    menu.querySelector('.dm-card').addEventListener('click', () => { hideDoorMenu(); startFlashcard(door.id); });
    menu.querySelector('.dm-landlord').addEventListener('click', () => { hideDoorMenu(); window.WAMinigames.startLandlord(door.id); });
    menu.querySelector('.dm-rush').addEventListener('click', () => { hideDoorMenu(); window.WAMinigames.startRush(door.id); });
    menu.querySelector('.dm-strike').addEventListener('click', () => { hideDoorMenu(); window.WAMinigames.startStrike(door.id); });
  }
  function hideDoorMenu() { $('door-menu').classList.add('hidden'); }

  /* ---------------- 出题 ---------------- */
  function mcOptions(correct, pool, n) {
    const ds = shuffle(pool.filter((t) => t !== correct));
    const picked = [];
    for (const t of ds) {
      if (picked.length >= (n || 3)) break;
      if (!picked.includes(t)) picked.push(t);
    }
    return shuffle([correct].concat(picked)).map((t) => ({ text: t, correct: t === correct }));
  }

  function makeQuestion(e, mode, pool) {
    if (mode === 'zh2en') {
      return {
        kind: 'zh2en', typeLabel: '选出正确的英文',
        promptHTML: esc(e.meaning), speak: e.text,
        entryText: e.text, entryMeaning: e.meaning,
        options: mcOptions(e.text, pool.textsWord)
      };
    }
    if (mode === 'listen') {
      return {
        kind: 'listen', typeLabel: '听单词，选出正确的意思',
        promptHTML: '🔊', speak: e.text, speakAuto: true,
        entryText: e.text, entryMeaning: e.meaning,
        options: mcOptions(e.meaning, pool.meanings)
      };
    }
    if (mode === 'spell') {
      // phrase 类题目不生成 spell 题（让 dictation 模块负责短语拼写）
      if (e.type === 'phrase' || e.text.indexOf(' ') >= 0) return null;
      const letters = [];
      for (let i = 0; i < e.text.length; i++) {
        if (/[a-zA-Z]/.test(e.text[i])) letters.push(i);
      }
      if (letters.length < 5) return null;
      // 拼写补全：挖 1 个空；多空拼写留给默写训练营（L1/L2/L3）负责
      const blanks = 1;
      const pick = [];
      const used = new Set();
      while (pick.length < blanks && pick.length < letters.length) {
        const idx = letters[Math.floor(Math.random() * letters.length)];
        if (used.has(idx)) continue;
        let ok = true;
        for (const p of pick) { if (Math.abs(p - idx) < 2) { ok = false; break; } }
        if (!ok) continue;
        used.add(idx);
        pick.push(idx);
      }
      pick.sort((a, b) => a - b);
      const corrects = pick.map((ti) => e.text[ti].toLowerCase());
      const display = e.text.split('').map((c, i) => (pick.indexOf(i) >= 0 ? '＿' : c)).join('');
      // 每空4选1：从字母池出选项（去掉正确字母）
      const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
      const options = [];
      for (let bi = 0; bi < pick.length; bi++) {
        const cor = corrects[bi];
        const others = shuffle(alpha.filter((l) => l !== cor)).slice(0, 3);
        const opts = shuffle([cor].concat(others)).map((t) => ({ text: t, blank: bi, correct: t === cor }));
        options.push({ blank: bi, options: opts });
      }
      return {
        kind: 'spell', typeLabel: '拼写补全：缺少哪个字母？',
        promptHTML: '<span class="spell-word">' + esc(display) + '</span><span class="spell-hint">' + esc(e.meaning) + '</span>',
        speak: e.text, isSpell: true, blanks: pick.length, corrects: corrects,
        entryText: e.text, entryMeaning: e.meaning,
        options: options.flatMap((o) => o.options)
      };
    }
    if (mode === 'phrase') {
      const own = (e.phrases || []).filter((p) => p.meaning);
      if (!own.length || phrasePool.length < 4) return null;
      const p = randPick(own);
      return {
        kind: 'phrase', typeLabel: '选出正确的英文短语',
        promptHTML: esc(p.meaning), speak: p.text,
        entryText: p.text, entryMeaning: p.meaning,
        options: mcOptions(p.text, phrasePool.map((x) => x.text))
      };
    }
    // en2zh
    return {
      kind: 'en2zh', typeLabel: '选出正确的中文意思',
      promptHTML: esc(e.text) + (e.phonetic ? '<span class="phonetic">' + esc(e.phonetic) + '</span>' : ''),
      speak: e.text, speakAuto: true,
        entryText: e.text, entryMeaning: e.meaning,
      options: mcOptions(e.meaning, pool.meanings)
    };
  }

  function buildQuestions(door) {
    const entries = entriesOfDoor(door.id);
    const pool = {
      textsWord: allEntries.map((e) => e.text),
      meanings: allEntries.map((e) => e.meaning)
    };
    const modes = ['zh2en', 'listen', 'spell', 'phrase', 'en2zh'];
    const qs = [];
    entries.forEach((e, i) => {
      const q = makeQuestion(e, modes[i % modes.length], pool) || makeQuestion(e, 'en2zh', pool);
      qs.push(q);
    });
    // 词条少的门补足题量（换题型再出一轮）
    let guard = 0;
    while (qs.length < MIN_QUESTIONS && guard++ < 40) {
      const e = randPick(entries);
      const q = makeQuestion(e, randPick(modes), pool);
      if (q) qs.push(q);
    }
    return shuffle(qs);
  }

  /* ---------------- 闯关流程 ---------------- */
  let quiz = null;

  function startQuiz(door) {
    const qs = buildQuestions(door);
    quiz = { door: door, queue: qs.slice(), total: qs.length, done: 0, wrong: 0, locked: false, current: null };
    showScreen('quiz-screen');
    $('quiz-door-name').textContent = door.id + '. ' + door.name;
    renderDots();
    quizSay('闯关开始！泡泡给你加油 💪');
    nextQuestion();
  }

  function renderDots() {
    const box = $('quiz-dots');
    box.innerHTML = '';
    for (let i = 0; i < quiz.total; i++) {
      const d = document.createElement('div');
      d.className = 'quiz-dot' + (i < quiz.done ? ' done' : '');
      box.appendChild(d);
    }
  }

  function nextQuestion() {
    if (quiz.done >= quiz.total) return finishQuiz();
    const q = quiz.queue.shift();
    quiz.current = q;
    renderQuestion(q);
    startTimer(); // 切题时重置倒计时
  }

  function renderQuestion(q) {
    $('q-type').textContent = q.typeLabel;
    const prompt = $('q-prompt');
    prompt.className = 'q-prompt' + (q.isSpell ? ' spell' : '');
    prompt.innerHTML = q.promptHTML;
    const speakBtn = $('q-speak');
    // zh2en / phrase 题朗读会直接报出答案，不显示朗读按钮（答对后才读）
    const allowSpeakBtn = q.speak && q.kind !== 'zh2en' && q.kind !== 'phrase';
    speakBtn.classList.toggle('hidden', !allowSpeakBtn);
    speakBtn.onclick = () => speak(q.speak);
    if (q.speakAuto) speak(q.speak);

    const box = $('q-options');
    box.innerHTML = '';
    q.options.forEach((opt) => {
      const b = document.createElement('button');
      b.className = 'opt-btn';
      b.textContent = opt.text;
      b.addEventListener('click', () => onAnswer(q, opt, b, box));
      box.appendChild(b);
    });
  }

  /* ---- 限时答题倒计时 ---- */
  let timerRAF = null;
  function startTimer() {
    stopTimer();
    const limit = Number(save.settings.timeLimit) || 0;
    const bar = $('q-timer');
    if (!limit) { bar.classList.add('hidden'); return; }
    bar.classList.remove('hidden');
    const fill = $('q-timer-fill');
    const t0 = performance.now();
    const dur = limit * 1000;
    function frame(now) {
      const p = Math.max(0, 1 - (now - t0) / dur);
      fill.style.width = (p * 100) + '%';
      fill.classList.toggle('danger', p <= 0.3); // 剩 30% 变红
      if (p <= 0) { timerRAF = null; onTimeout(); return; }
      timerRAF = requestAnimationFrame(frame);
    }
    timerRAF = requestAnimationFrame(frame);
  }
  function stopTimer() {
    if (timerRAF) cancelAnimationFrame(timerRAF);
    timerRAF = null;
  }
  // 超时 = 答错处理：标出正确答案、插回队列、计 wrong，1.9 秒后自动下一题
  function onTimeout() {
    if (!quiz || quiz.locked) return;
    quiz.locked = true;
    quiz.wrong++;
        if (quiz.current && quiz.current.entryText) { recordSpellStats(quiz.current.entryText, false); }
    beep('wrong');
    quizSay(randPick(LINES.timeout));
    const box = $('q-options');
    const correctText = quiz.current.options.find((o) => o.correct).text;
    Array.from(box.querySelectorAll('.opt-btn')).forEach((b) => {
      if (b.textContent === correctText) b.classList.add('opt-correct');
    });
    const pos = Math.min(2, quiz.queue.length);
    quiz.queue.splice(pos, 0, quiz.current);
    setTimeout(() => { quiz.locked = false; nextQuestion(); }, 1900);
  }

  function onAnswer(q, opt, btn, box) {
    if (quiz.locked) return;
    quiz.locked = true;
    stopTimer(); // 答题锁定期间清除计时器，防重复触发
    const buttons = Array.from(box.querySelectorAll('.opt-btn'));
    if (opt.correct) {
      btn.classList.add('opt-correct');
      quiz.done++;
      beep('correct');
      burst(btn);
      quizSay(randPick(LINES.correct));
      if (q.speak && !q.speakAuto) speak(q.speak);
      renderDots();
      setTimeout(() => { quiz.locked = false; nextQuestion(); }, 1050);
    } else {
      btn.classList.add('opt-wrong');
      quiz.wrong++;
      if (q.entryText) recordSpellStats(q.entryText, false);
      beep('wrong');
      quizSay(randPick(LINES.wrong));
      const correctText = q.options.find((o) => o.correct).text;
      buttons.forEach((b) => { if (b.textContent === correctText) b.classList.add('opt-correct'); });
      // 答错的题插回队列稍后重练
      const pos = Math.min(2, quiz.queue.length);
      quiz.queue.splice(pos, 0, q);
      setTimeout(() => { quiz.locked = false; nextQuestion(); }, 1900);
    }
  }

  // 艾宾浩斯复习曲线：每次完成闯关（首通或重玩）推进一个阶段
  // 首次通关 stage=0、nextDue=通关日+1天；之后 stage+1（封顶5）、nextDue=完成日+OFFSETS[stage]
  function recordCompletion(doorId, stars) {
    const t = todayStr();
    let rec = save.doors[doorId];
    if (!rec) {
      rec = save.doors[doorId] = {
        stars: stars, clearedAt: t, lastAt: t, stage: 0, nextDue: addDays(t, OFFSETS[0])
      };
      return true;
    }
    if ((rec.stars || 0) < stars) rec.stars = stars;
    rec.lastAt = t;
    rec.stage = Math.min((rec.stage || 0) + 1, OFFSETS.length - 1);
    rec.nextDue = addDays(t, OFFSETS[rec.stage]);
    return false;
  }

  function finishQuiz() {
    stopTimer();
    const stars = quiz.wrong === 0 ? 3 : (quiz.wrong <= 2 ? 2 : 1);
    const id = quiz.door.id;
    const firstClear = recordCompletion(id, stars);

    const isl = islandOfDoor(id);
    let msg;
    let shardGained = false;
    let allShards = false;

    if (firstClear) {
      msg = '下一扇小门已经打开啦，继续冒险吧！🚪';
      // 全岛首次通关 → 记录通关日期（用于次日解锁下一岛）+ 发精灵碎片
      if (isl && islandFullyCleared(isl) && !save.islandClearedAt[isl.id]) {
        save.islandClearedAt[isl.id] = todayStr();
        if (save.shards.indexOf(isl.id) < 0) {
          save.shards.push(isl.id);
          shardGained = true;
          const nextIsl = ISLANDS[isl.idx + 1];
          msg = isl.short + '全部通关！获得一枚精灵碎片 💠' +
            (nextIsl ? ' 明天「' + nextIsl.short + '」就会开放啦！' : '');
        }
        if (save.shards.length >= ISLANDS.length) {
          allShards = true;
          msg = '你集齐了所有精灵碎片，大精灵要出现啦！✨';
        }
      }
    } else {
      msg = '这次答错了 ' + quiz.wrong + ' 次。下次复习：' +
        save.doors[id].nextDue + '，记得回来哦～';
    }
    persist();

    // 碎片庆祝对话排入队列，回到地图后依次播放
    if (shardGained) pendingDialogues.push({ pages: shardLines(isl), onDone: flyShard });
    if (allShards) pendingDialogues.push({ pages: FINAL_LINES, onDone: null });

    showScreen('result-screen');
    $('result-emoji').textContent = shardGained ? '💠' : '🎉';
    $('result-title').textContent = firstClear ? '闯关成功！' : '复习完成！';
    $('result-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    $('result-msg').textContent = msg;
    $('btn-replay').classList.remove('hidden');
    beep('complete');
  }

  /* ---------------- 连连看（词族记忆） ---------------- */
  let match = null;

  // 构建配对卡：英文 text ↔ 中文 meaning，来源 = 词条本体 + 有 meaning 的 extensions；
  // 不足 6 对时先从同岛其它门借，再从全局词库兜底
  function buildPairs(door) {
    const seen = {};
    const pairs = [];
    function add(en, zh) {
      en = String(en || '').trim();
      zh = String(zh || '').trim();
      if (!en || !zh || seen[en]) return;
      seen[en] = true;
      pairs.push({ en: en, zh: zh });
    }
    function harvest(entries) {
      entries.forEach((e) => {
        add(e.text, e.meaning);
        (e.extensions || []).forEach((x) => { if (x.meaning) add(x.text, x.meaning); });
      });
    }
    harvest(entriesOfDoor(door.id));
    if (pairs.length < MATCH_PAIRS_PER_ROUND) {
      const isl = islandOfDoor(door.id);
      if (isl) {
        isl.doorIds.forEach((did) => {
          if (did !== door.id) harvest(entriesOfDoor(did));
        });
      }
    }
    if (pairs.length < MATCH_PAIRS_PER_ROUND) harvest(allEntries);
    return shuffle(pairs);
  }

  function startMatch(door) {
    const pairs = buildPairs(door);
    const rounds = [];
    for (let i = 0; i < pairs.length; i += MATCH_PAIRS_PER_ROUND) {
      rounds.push(pairs.slice(i, i + MATCH_PAIRS_PER_ROUND));
    }
    match = { door: door, rounds: rounds, roundIdx: 0, matched: 0, selLeft: null, locked: false };
    showScreen('match-screen');
    $('match-door-name').textContent = door.id + '. ' + door.name;
    renderRound();
  }

  function renderRound() {
    const round = match.rounds[match.roundIdx];
    match.matched = 0;
    match.selLeft = null;
    $('match-round').textContent = '第 ' + (match.roundIdx + 1) + '/' + match.rounds.length + ' 轮';
    const leftCol = $('match-left');
    const rightCol = $('match-right');
    leftCol.innerHTML = '';
    rightCol.innerHTML = '';
    shuffle(round).forEach((p) => leftCol.appendChild(matchCard(p, 'left')));
    shuffle(round).forEach((p) => rightCol.appendChild(matchCard(p, 'right')));
    matchSay('先点左边的英文，再点右边的中文，配成一对！');
  }

  function matchCard(p, side) {
    const b = document.createElement('button');
    b.className = 'match-card';
    b.textContent = side === 'left' ? p.en : p.zh;
    b.addEventListener('click', () => onMatchCard(side, p, b));
    return b;
  }

  function onMatchCard(side, p, el) {
    if (match.locked || el.classList.contains('matched')) return;
    if (side === 'left') {
      if (match.selLeft) match.selLeft.el.classList.remove('sel');
      if (match.selLeft && match.selLeft.p === p) { match.selLeft = null; return; }
      match.selLeft = { p: p, el: el };
      el.classList.add('sel');
      return;
    }
    // 右侧卡片
    if (!match.selLeft) {
      el.classList.add('shake');
      setTimeout(() => el.classList.remove('shake'), 420);
      matchSay('先点左边的英文卡片哦～');
      return;
    }
    const sel = match.selLeft;
    if (sel.p === p) {
      // 配对正确：连线高亮 → 两卡淡出
      match.locked = true;
      drawMatchLine(sel.el, el);
      beep('correct');
      matchSay(randPick(LINES.correct));
      setTimeout(() => {
        sel.el.classList.remove('sel');
        sel.el.classList.add('matched');
        el.classList.add('matched');
        match.selLeft = null;
        match.locked = false;
        match.matched++;
        if (match.matched >= match.rounds[match.roundIdx].length) {
          setTimeout(nextRoundOrFinish, 700);
        }
      }, 480);
    } else {
      // 配对错误：抖动
      sel.el.classList.add('shake');
      el.classList.add('shake');
      beep('wrong');
      matchSay(randPick(LINES.wrong));
      setTimeout(() => {
        sel.el.classList.remove('shake', 'sel');
        el.classList.remove('shake');
        match.selLeft = null;
      }, 420);
    }
  }

  function drawMatchLine(leftEl, rightEl) {
    const svg = $('match-lines');
    const base = $('match-body').getBoundingClientRect();
    const a = leftEl.getBoundingClientRect();
    const b = rightEl.getBoundingClientRect();
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', a.right - base.left);
    line.setAttribute('y1', a.top + a.height / 2 - base.top);
    line.setAttribute('x2', b.left - base.left);
    line.setAttribute('y2', b.top + b.height / 2 - base.top);
    line.setAttribute('class', 'match-line');
    svg.appendChild(line);
    setTimeout(() => line.remove(), 560);
  }

  function nextRoundOrFinish() {
    match.roundIdx++;
    if (match.roundIdx >= match.rounds.length) finishMatch();
    else renderRound();
  }

  // 词族树：把有 extensions 的 headword 按家族分组（treat → treatment → treatable）
  function familyTreeHTML(door) {
    const fams = [];
    entriesOfDoor(door.id).forEach((e) => {
      const members = (e.extensions || []).filter((x) => x.text);
      if (members.length) fams.push({ head: e, members: members });
    });
    if (!fams.length) {
      return '<div class="family"><div class="fam-head">这扇门的单词都是独立的冒险家，单独记住它们吧！💪</div></div>';
    }
    return fams.map((f) => {
      const h = f.head;
      let s = '<div class="family"><div class="fam-head"><b>' + esc(h.text) + '</b>' +
        (h.phonetic ? ' <span class="phonetic">' + esc(h.phonetic) + '</span>' : '') +
        (h.pos ? ' <span class="fam-pos">' + esc(h.pos) + '</span>' : '') +
        ' ' + esc(h.meaning || '') + '</div><div class="fam-members">';
      f.members.forEach((x, i) => {
        s += '<span class="fam-arrow">→</span>' +
          '<span class="fam-member"><b>' + esc(x.text) + '</b>' +
          (x.pos ? ' <i>' + esc(x.pos) + '</i>' : '') +
          (x.meaning ? ' ' + esc(x.meaning) : '') + '</span>';
      });
      return s + '</div></div>';
    }).join('');
  }

  function finishMatch() {
    showScreen('match-result-screen');
    const box = $('family-tree');
    box.innerHTML = familyTreeHTML(match.door);
    beep('complete');
    // 一次性的星星奖励动画（不影响通关/评星状态）
    const card = box.closest('.result-card');
    setTimeout(() => { if (card) burst(card); }, 350);
  }

  /* ---------------- 总览 ---------------- */
  function buildOverview() {
    const body = $('ov-body');
    const t = todayStr();
    const due = dueDoors();
    let html = '<div class="ov-summary">' +
      ovSumCard('⭐ ' + totalStars(), '总星星') +
      ovSumCard('💠 ' + save.shards.length + '/' + ISLANDS.length, '精灵碎片') +
      ovSumCard('🔁 ' + due.length, '今日需复习') +
      '</div>';

    ISLANDS.forEach((isl) => {
      const doors = isl.doorIds.map((id) => DOOR_BY_ID[id]).filter(Boolean);
      const clearedN = isl.doorIds.filter((id) => save.doors[id]).length;
      const starsSum = isl.doorIds.reduce((s, id) => s + (save.doors[id] ? save.doors[id].stars : 0), 0);
      const hasShard = save.shards.indexOf(isl.id) >= 0;
      html += '<div class="ov-island">' +
        '<div class="ov-island-head">' + isl.icon + ' ' + esc(isl.short) +
          ' <span class="ov-shard ' + (hasShard ? '' : 'off') + '" title="' +
          (hasShard ? '碎片已获得' : '碎片未获得') + '">💠</span></div>' +
        '<div class="ov-island-prog">大门 ' + clearedN + '/' + doors.length +
          ' ｜ 星星 ' + starsSum + '/' + (doors.length * 3) + '</div>';
      doors.forEach((door, i) => {
        const rec = save.doors[door.id];
        const starStr = rec ? '⭐'.repeat(rec.stars) + '☆'.repeat(3 - rec.stars) : '未闯关';
        const lastStr = rec ? rec.lastAt : '—';
        let nextStr = '—';
        if (rec) {
          nextStr = (t >= rec.nextDue)
            ? '<span class="ov-due">今日需复习</span>'
            : esc(rec.nextDue);
        }
        html += '<div class="ov-door-row' + (i % 2 ? ' alt' : '') + '">' +
          '<span class="ov-door-name">' + door.id + '. ' + esc(door.name) + '</span>' +
          '<span class="ov-door-stars">' + starStr + '</span>' +
          '<span class="ov-door-date">上次 ' + lastStr + '</span>' +
          '<span class="ov-door-next">' + nextStr + '</span></div>';
      });
      html += '</div>';
    });

    // 默写薄弱词板块：取 wrong>correct 或 wrong>=2 的 top 8，按错误次数排序
    const weakList = Object.entries(save.spellStats || {})
      .filter(([k, s]) => s.wrong > s.correct || s.wrong >= 2)
      .sort((a, b) => b[1].wrong - a[1].wrong)
      .slice(0, 8);
    if (weakList.length) {
      html += '<div class="ov-island">' +
        '<div class="ov-island-head">📋 默写薄弱词（按错误次数排序）</div>' +
        '<div class="ov-weak-list">';
      weakList.forEach(([key, stat], i) => {
        // 找到这个词对应的 entry
        let entry = null, doorId = null;
        for (const e of allEntries) {
          if (getSpellKey(e.text) === key) { entry = e; doorId = e.door; break; }
        }
        if (!entry) {
          // 可能在 dictationExtra 中
          for (const u of DATA.units) {
            if (u.dictationExtra) {
              for (const e of u.dictationExtra) {
                if (getSpellKey(e.text) === key) { entry = e; doorId = e.door; break; }
              }
            }
            if (entry) break;
          }
        }
        const isl = doorId ? islandOfDoor(doorId) : null;
        html += '<div class="ov-weak-row' + (i % 2 ? ' alt' : '') + '" data-door="' + (doorId != null ? doorId : '') + '">' +
          '<span class="ov-weak-text">' + esc(entry ? entry.text : key) + '</span>' +
          '<span class="ov-weak-mean">' + esc(entry ? entry.meaning : '') + '</span>' +
          '<span class="ov-weak-count">❌ ' + stat.wrong + '</span>' +
          '<span class="ov-weak-island">' + (isl ? (isl.icon + ' ' + esc(isl.short)) : '') + '</span></div>';
      });
      html += '</div></div>';
      // 延迟绑定点击事件
      setTimeout(() => {
        document.querySelectorAll('.ov-weak-row[data-door]').forEach((row) => {
          row.addEventListener('click', () => {
            const did = Number(row.dataset.door);
            if (did) { location.hash = '#dictation-' + did; location.reload(); }
          });
        });
      }, 0);
    }

    html += '<div class="ov-foot">词库：' + DATA.units.length + ' 个单元 ｜ ' +
      allEntries.length + ' 个词条 ｜ ' + phrasePool.length + ' 条短语</div>';
    body.innerHTML = html;
  }
  function ovSumCard(num, label) {
    return '<div class="ov-sum-card"><div class="ov-sum-num">' + num +
      '</div><div class="ov-sum-label">' + label + '</div></div>';
  }

  /* ---------------- 错题本 ---------------- */
  function buildErrorBook() {
    const body = $('eb-body');
    const entries = [];
    for (const key in (save.spellStats || {})) {
      const s = save.spellStats[key];
      if (s && (s.wrong > s.correct || s.wrong >= 2)) {
        let entry = null, doorId = null;
        for (const e of allEntries) {
          if (getSpellKey(e.text) === key) { entry = e; doorId = e.door; break; }
        }
        if (!entry) {
          for (const u of DATA.units) {
            if (u.dictationExtra) {
              for (const e of u.dictationExtra) {
                if (getSpellKey(e.text) === key) { entry = e; doorId = e.door; break; }
              }
            }
            if (entry) break;
          }
        }
        entries.push({ key, wrong: s.wrong, correct: s.correct, lastWrong: s.lastWrong, entry, doorId });
      }
    }
    entries.sort((a, b) => b.wrong - a.wrong);
    if (!entries.length) {
      body.innerHTML = '<div class="eb-empty">🎉 还没有错题记录！继续保持哦～</div>';
      return;
    }
    let html = '<div class="eb-list">';
    entries.forEach((item, i) => {
      const e = item.entry;
      const isl = item.doorId ? islandOfDoor(item.doorId) : null;
      html += '<div class="eb-item' + (i % 2 ? ' alt' : '') + '" data-door="' + (item.doorId != null ? item.doorId : '') + '">' +
        '<div class="eb-word">' + esc(e ? e.text : item.key) + '</div>' +
        '<div class="eb-mean">' + esc(e ? e.meaning : '') + '</div>' +
        '<div class="eb-meta">' +
          '<span class="eb-wrong">❌ ' + item.wrong + '</span>' +
          '<span class="eb-correct">✅ ' + item.correct + '</span>' +
          (item.lastWrong ? '<span class="eb-date">最近错于 ' + item.lastWrong + '</span>' : '') +
          (isl ? '<span class="eb-island">' + isl.icon + ' ' + esc(isl.short) + '</span>' : '') +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    body.innerHTML = html;
    setTimeout(() => {
      document.querySelectorAll('.eb-item[data-door]').forEach((row) => {
        row.addEventListener('click', () => {
          const did = Number(row.dataset.door);
          if (did) { location.hash = '#dictation-' + did; location.reload(); }
        });
      });
    }, 0);
  }


  /* ---------------- 翻转卡片背诵模式 ---------------- */
  let flashcard = null;

  function startFlashcard(doorId) {
    let entries = [];
    if (doorId) {
      entries = entriesOfDoor(doorId);
    } else {
      const weak = [];
      for (const key in (save.spellStats || {})) {
        const s = save.spellStats[key];
        if (s && (s.wrong > s.correct || s.wrong >= 2)) {
          for (const e of allEntries) {
            if (getSpellKey(e.text) === key) { weak.push(e); break; }
          }
        }
      }
      if (weak.length >= 5) {
        entries = shuffle(weak).slice(0, 10);
      } else {
        const clearedIds = Object.keys(save.doors).map(Number);
        const pool = [];
        for (const id of clearedIds) {
          pool.push(...entriesOfDoor(id));
        }
        entries = shuffle(pool).slice(0, 10);
      }
    }
    if (!entries.length) {
      say('还没有可以背诵的单词，先去闯几扇门吧！');
      return;
    }
    flashcard = {
      entries: shuffle(entries),
      idx: 0,
      flipped: false,
      hardCount: 0,
      easyCount: 0
    };
    showScreen('flashcard-screen');
    renderFlashcard();
  }

  function renderFlashcard() {
    if (!flashcard || flashcard.idx >= flashcard.entries.length) {
      finishFlashcard();
      return;
    }
    const e = flashcard.entries[flashcard.idx];
    flashcard.flipped = false;
    $('fc-card').classList.remove('flipped');
    $('fc-word').textContent = e.text;
    $('fc-phonetic').textContent = e.phonetic || '';
    $('fc-meaning').textContent = e.meaning;
    $('fc-pos').textContent = e.pos || '';
    $('fc-progress').textContent = (flashcard.idx + 1) + '/' + flashcard.entries.length;
    const ex = (e.examples || [])[0];
    $('fc-example').innerHTML = ex ? '<div>' + esc(ex.en) + '</div><div style="color:#718096;font-size:13px;margin-top:4px;">' + esc(ex.zh) + '</div>' : '';
    const phrases = (e.phrases || []).slice(0, 2);
    $('fc-phrases').innerHTML = phrases.length ? phrases.map((p) => '<div>• ' + esc(p.text) + ' — ' + esc(p.meaning) + '</div>').join('') : '';
  }

  function flipCard() {
    if (!flashcard) return;
    flashcard.flipped = !flashcard.flipped;
    $('fc-card').classList.toggle('flipped', flashcard.flipped);
    if (flashcard.flipped && save.settings.sound) {
      const e = flashcard.entries[flashcard.idx];
      speak(e.text);
    }
  }

  function nextCard(isEasy) {
    if (!flashcard) return;
    if (isEasy) flashcard.easyCount++;
    else flashcard.hardCount++;
    flashcard.idx++;
    renderFlashcard();
  }

  function finishFlashcard() {
    if (!flashcard) return;
    const total = flashcard.entries.length;
    const easy = flashcard.easyCount;
    const hard = flashcard.hardCount;
    showScreen('flashcard-result-screen');
    $('fc-result-stats').innerHTML =
      '<div style="display:flex;gap:20px;justify-content:center;margin:12px 0;">' +
      '<div style="text-align:center;"><div style="font-size:32px;font-weight:800;color:#22543d;">' + easy + '</div><div style="font-size:13px;color:#718096;">记住了</div></div>' +
      '<div style="text-align:center;"><div style="font-size:32px;font-weight:800;color:#c53030;">' + hard + '</div><div style="font-size:13px;color:#718096;">需加强</div></div>' +
      '<div style="text-align:center;"><div style="font-size:32px;font-weight:800;color:#4a5568;">' + total + '</div><div style="font-size:13px;color:#718096;">总词数</div></div>' +
      '</div>';
    $('fc-result-msg').textContent = easy >= total * 0.8 ? '太棒了！大部分单词都记住了！🌟' : '继续加油，多复习就能全部记住！💪';
    flashcard = null;
  }

  /* ---------------- 家长报告（含5阶段进度） ---------------- */
  const PHASES = [
    { title: '基础奠基期', desc: '第1-2个月：掌握基础词汇，熟悉游戏机制', months: [1, 2] },
    { title: '能力拓展期', desc: '第3-4个月：攻克中等难度词汇，开始默写训练', months: [3, 4] },
    { title: '强化提升期', desc: '第5-6个月：挑战高难度词汇，提升拼写准确率', months: [5, 6] },
    { title: '综合应用期', desc: '第7-8个月：词汇综合运用，对话练习', months: [7, 8] },
    { title: '冲刺备考期', desc: '第9-10个月：全面复习，模拟测试，迎接考试', months: [9, 10] }
  ];

  function showParentReport() {
    showScreen('parent-report-screen');
    buildParentReport();
  }

  function buildParentReport() {
    const totalWords = allEntries.length;
    const mastered = countMasteredWords();
    const clearedDoors = Object.keys(save.doors).length;
    const totalDoors = DATA.doors.length;
    const weakCount = Object.values(save.spellStats || {}).filter((s) => s.wrong > s.correct || s.wrong >= 2).length;
    const streak = (save.dailyPlan && save.dailyPlan.streakDays) || 0;
    const startMonth = 7;
    const currentMonth = new Date().getMonth() + 1;
    const monthDiff = currentMonth >= startMonth ? currentMonth - startMonth + 1 : currentMonth + 12 - startMonth + 1;
    const currentPhase = Math.min(Math.ceil(monthDiff / 2), 5);
    let html = '';
    html += '<div class="pr-section">';
    html += '<div class="pr-section-title">📈 学习概况</div>';
    html += '<div class="pr-grid">';
    html += '<div class="pr-card"><div class="pr-card-value">' + mastered + '</div><div class="pr-card-label">已掌握单词</div></div>';
    html += '<div class="pr-card"><div class="pr-card-value">' + totalWords + '</div><div class="pr-card-label">总单词数</div></div>';
    html += '<div class="pr-card"><div class="pr-card-value">' + clearedDoors + '/' + totalDoors + '</div><div class="pr-card-label">通关进度</div></div>';
    html += '<div class="pr-card"><div class="pr-card-value">' + weakCount + '</div><div class="pr-card-label">薄弱词数</div></div>';
    html += '</div></div>';
    html += '<div class="pr-section">';
    html += '<div class="pr-section-title">🎯 整体进度</div>';
    html += '<div style="display:flex;justify-content:space-between;font-size:14px;color:#4a5568;margin-bottom:4px;"><span>已掌握 ' + mastered + ' 词</span><span>目标 ' + totalWords + ' 词</span></div>';
    html += '<div class="pr-progress-bar"><div class="pr-progress-fill" style="width:' + (totalWords ? Math.round(mastered / totalWords * 100) : 0) + '%"></div></div>';
    html += '<div style="text-align:center;margin-top:8px;font-size:13px;color:#718096;">已完成 ' + (totalWords ? Math.round(mastered / totalWords * 100) : 0) + '%</div>';
    html += '</div>';
    html += '<div class="pr-section">';
    html += '<div class="pr-section-title">🔥 学习习惯</div>';
    html += '<div class="pr-streak">🔥 连续学习 ' + streak + ' 天</div>';
    html += '</div>';
    html += '<div class="pr-section">';
    html += '<div class="pr-section-title">🗓️ 10个月学习计划（当前第 ' + currentPhase + ' 阶段）</div>';
    html += '<div class="pr-phase-list">';
    PHASES.forEach((phase, i) => {
      const isActive = i + 1 === currentPhase;
      html += '<div class="pr-phase-item ' + (isActive ? 'active' : '') + '">';
      html += '<div class="pr-phase-num">' + (i + 1) + '</div>';
      html += '<div class="pr-phase-info">';
      html += '<div class="pr-phase-title">' + phase.title + '</div>';
      html += '<div class="pr-phase-desc">' + phase.desc + '</div>';
      html += '</div>';
      html += '<div style="font-size:13px;color:#718096;white-space:nowrap;">第' + phase.months[0] + '-' + phase.months[1] + '个月</div>';
      html += '</div>';
    });
    html += '</div></div>';
    if (weakCount > 0) {
      html += '<div class="pr-section">';
      html += '<div class="pr-section-title">⚠️ 需要加强的单词</div>';
      html += '<div class="pr-weak-list">';
      const weakList = [];
      for (const key in (save.spellStats || {})) {
        const s = save.spellStats[key];
        if (s && (s.wrong > s.correct || s.wrong >= 2)) {
          for (const e of allEntries) {
            if (getSpellKey(e.text) === key) {
              weakList.push({ text: e.text, wrong: s.wrong });
              break;
            }
          }
        }
      }
      weakList.sort((a, b) => b.wrong - a.wrong);
      weakList.slice(0, 8).forEach((w) => {
        html += '<div class="pr-weak-item"><span class="pr-weak-word">' + esc(w.text) + '</span><span class="pr-weak-count">错 ' + w.wrong + ' 次</span></div>';
      });
      html += '</div></div>';
    }
    $('pr-body').innerHTML = html;
  }

  function countMasteredWords() {
    let count = 0;
    for (const doorId in save.doors) {
      count += entriesOfDoor(Number(doorId)).length;
    }
    return count;
  }

  function generateDailyPlan() {
    const t = todayStr();
    if (!save.dailyPlan) save.dailyPlan = { date: null, streakDays: 0, lastStudyDate: null, reviewDoors: [], newDoor: null, weakWords: [], done: { review: [], new: false, weak: false } };
    const dp = save.dailyPlan;
    if (dp.date === t) return;
    dp.reviewDoors = dueDoors().map((d) => d.id);
    dp.newDoor = null;
    for (const isl of ISLANDS) {
      if (!islandUnlocked(isl.idx)) continue;
      for (const did of isl.doorIds) {
        if (!save.doors[did]) {
          dp.newDoor = did;
          break;
        }
      }
      if (dp.newDoor) break;
    }
    const weak = [];
    for (const key in (save.spellStats || {})) {
      const s = save.spellStats[key];
      if (s && (s.wrong > s.correct || s.wrong >= 2)) {
        let entry = null;
        for (const e of allEntries) {
          if (getSpellKey(e.text) === key) { entry = e; break; }
        }
        if (!entry) {
          for (const u of DATA.units) {
            if (u.dictationExtra) {
              for (const e of u.dictationExtra) {
                if (getSpellKey(e.text) === key) { entry = e; break; }
              }
            }
            if (entry) break;
          }
        }
        if (entry) weak.push({ entry: entry, wrong: s.wrong });
      }
    }
    weak.sort((a, b) => b.wrong - a.wrong);
    dp.weakWords = weak.slice(0, 5).map((w) => w.entry.text);
    const yesterday = addDays(t, -1);
    if (dp.lastStudyDate === yesterday) {
      dp.streakDays = (dp.streakDays || 0) + 1;
    } else if (dp.lastStudyDate !== t) {
      dp.streakDays = 1;
    }
    dp.done = { review: [], new: false, weak: false };
    dp.date = t;
    persist();
  }
  /* ---------------- 设置面板 ---------------- */
  function openSettings() {
    refreshVoiceSelect();
    refreshSettingsUI();
    $('settings-screen').classList.remove('hidden');
  }
  function closeSettings() {
    $('settings-screen').classList.add('hidden');
    if (!$('map-screen').classList.contains('hidden')) buildMap();
  }
  function refreshVoiceSelect() {
    const sel = $('set-voice');
    const cur = save.settings.voiceURI || '';
    sel.innerHTML = '<option value="">自动选择（推荐）</option>';
    enVoices.forEach((v) => {
      const o = document.createElement('option');
      o.value = v.voiceURI;
      o.textContent = v.name + '（' + v.lang + '）';
      sel.appendChild(o);
    });
    sel.value = cur;
    if (sel.value !== cur) { // 已选嗓音不可用 → 回到自动
      sel.value = '';
      save.settings.voiceURI = null;
      persist();
    }
  }
  function refreshSettingsUI() {
    const s = save.settings;
    $('set-sound').textContent = s.sound ? '开 🔊' : '关 🔇';
    $('set-sound').classList.toggle('off', !s.sound);
    $('set-rate').value = s.rate;
    $('set-rate-val').textContent = Number(s.rate).toFixed(2) + 'x';
    $('set-timelimit').querySelectorAll('button').forEach((b) => {
      b.classList.toggle('active', Number(b.dataset.v) === Number(s.timeLimit));
    });
    const dl = s.dictationDefaultLevel || 1;
    $('set-dict-level').querySelectorAll('button').forEach((b) => {
      b.classList.toggle('active', Number(b.dataset.v) === Number(dl));
    });
    $('set-auto-level').textContent = (s.dictationAutoLevel !== false) ? '开' : '关';
    $('set-auto-level').classList.toggle('off', s.dictationAutoLevel === false);
    $('set-unlock').textContent = s.parentUnlockAll ? '开 ✅' : '关';
    $('set-unlock').classList.toggle('off', !s.parentUnlockAll);
  }

  /* ---------------- 语音与音效 ---------------- */
  let enVoices = [];
  function loadVoices() {
    if (!window.speechSynthesis) return;
    enVoices = speechSynthesis.getVoices().filter((v) => /^en/i.test(v.lang));
  }
  // 智能选嗓音：排除搞怪音色，优先自然 / 高品质英文嗓音
  function pickVoice() {
    const uri = save.settings.voiceURI;
    if (uri) {
      const v = enVoices.find((x) => x.voiceURI === uri);
      if (v) return v;
    }
    const PREF = /(Samantha|Victoria|Serena|Google US English|Microsoft (Aria|Jenny|Michelle)|Natural|Enhanced|Premium)/i;
    const BAD = /(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Deranged|Good News|Hysterical|Pipe Organ|Trinoids|Whisper|Zarvox)/i;
    const good = enVoices.filter((v) => !BAD.test(v.name));
    return good.find((v) => PREF.test(v.name)) || good[0] || enVoices[0] || null;
  }
  function speak(text, force) {
    if (!window.speechSynthesis) return;
    if (!force && !save.settings.sound) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(String(text).replace(/…|\.{3}/g, ' '));
      u.lang = 'en-US';
      const v = pickVoice();
      if (v) u.voice = v;
      u.rate = Number(save.settings.rate) || 0.9;
      speechSynthesis.speak(u);
    } catch (e) { /* 忽略语音失败 */ }
  }

  let audioCtx = null;
  function tone(freq, start, dur, type, vol) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol || 0.14, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(start); osc.stop(start + dur + 0.02);
  }
  function beep(kind) {
    if (!save.settings.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const t = audioCtx.currentTime;
      if (kind === 'correct') { tone(660, t, 0.12); tone(880, t + 0.12, 0.2); }
      else if (kind === 'wrong') { tone(220, t, 0.22, 'sawtooth', 0.09); }
      else if (kind === 'complete') {
        [523, 659, 784, 1046].forEach((f, i) => tone(f, t + i * 0.16, 0.3, 'triangle', 0.16));
      }
    } catch (e) { /* 忽略音频失败 */ }
  }

  function burst(el) {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < 7; i++) {
      const s = document.createElement('div');
      s.className = 'star-burst';
      s.textContent = '✨';
      s.style.left = (r.left + r.width / 2) + 'px';
      s.style.top = (r.top + r.height / 2) + 'px';
      s.style.setProperty('--dx', (Math.random() * 170 - 85) + 'px');
      s.style.setProperty('--dy', (Math.random() * -150 - 20) + 'px');
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 950);
    }
  }

  // 精灵碎片飞入 HUD 💠 的动画
  function flyShard() {
    updateHud();
    const pill = $('hud-shards').getBoundingClientRect();
    const s = document.createElement('div');
    s.className = 'shard-fly';
    s.textContent = '💠';
    s.style.left = (window.innerWidth / 2 - 24) + 'px';
    s.style.top = (window.innerHeight / 2 - 24) + 'px';
    s.style.setProperty('--tx', (pill.left + pill.width / 2 - window.innerWidth / 2) + 'px');
    s.style.setProperty('--ty', (pill.top + pill.height / 2 - window.innerHeight / 2) + 'px');
    document.body.appendChild(s);
    beep('complete');
    setTimeout(() => s.remove(), 1250);
  }

  /* ---------------- 每日复习提醒 ---------------- */
  function dailyReviewReminder() {
    const t = todayStr();
    if (save.lastVisit === t) {
      setTimeout(() => say(randPick(LINES.greet)), 600);
      return;
    }
    save.lastVisit = t;
    persist();
    const n = dueDoors().length;
    setTimeout(() => {
      if (n > 0) say('今天有 ' + n + ' 扇门需要复习哦，先去温习一下吧！');
      else say(randPick(LINES.greet));
    }, 600);
  }

  /* ---------------- 场景切换 ---------------- */
  const ALL_SCREENS = [
    'map-screen', 'quiz-screen', 'result-screen',
    'match-screen', 'match-result-screen', 'overview-screen',
    'settings-screen', 'dialogue-overlay',
    'chat-screen', 'chat-result-screen', 'shop-screen',
    'dictation-screen', 'dictation-result-screen', 'freechat-screen',
    'flashcard-screen', 'flashcard-result-screen', 'parent-report-screen',
    'errorbook-screen',
    'landlord-screen', 'landlord-result-screen',
    'rush-screen', 'rush-result-screen',
    'strike-screen', 'strike-result-screen'
  ];
  function showScreen(id) {
    ALL_SCREENS.forEach((s) => $(s).classList.toggle('hidden', s !== id));
    hideDoorMenu();
    hideChatMenu();
    if (id === 'map-screen') buildMap();
    if (id === 'overview-screen') buildOverview();
    if (id === 'shop-screen') buildShop();
  }

  /* ---------------- 事件绑定 ---------------- */
  on('btn-quiz-back', 'click', () => {
    stopTimer();
    if (window.speechSynthesis) speechSynthesis.cancel();
    showScreen('map-screen');
    say('下次再来挑战这扇门吧～');
  });
  on('btn-back-map', 'click', () => {
    showScreen('map-screen');
    if (pendingDialogues.length) processPendingDialogues();
    else say(randPick(LINES.greet));
  });
  on('btn-replay', 'click', () => {
    if (quiz && quiz.door) startQuiz(quiz.door);
  });
  on('btn-match-back', 'click', () => {
    showScreen('map-screen');
    say('下次再来玩连连看吧～');
  });
  on('btn-match-replay', 'click', () => {
    if (match && match.door) startMatch(match.door);
  });
  on('btn-match-map', 'click', () => {
    showScreen('map-screen');
    say(randPick(LINES.greet));
  });
  on('btn-overview', 'click', () => showScreen('overview-screen'));
  on('btn-ov-back', 'click', () => showScreen('map-screen'));

  // 翻转卡片
  on('btn-flashcard', 'click', () => startFlashcard());
  on('btn-fc-back', 'click', () => {
    showScreen('map-screen');
    say('下次再来背诵吧～');
  });
  on('fc-card', 'click', flipCard);
  on('btn-fc-speak', 'click', (e) => {
    e.stopPropagation();
    if (flashcard && flashcard.entries[flashcard.idx]) {
      speak(flashcard.entries[flashcard.idx].text);
    }
  });
  on('btn-fc-hard', 'click', () => nextCard(false));
  on('btn-fc-easy', 'click', () => nextCard(true));
  on('btn-fc-again', 'click', () => startFlashcard());
  on('btn-fc-map', 'click', () => showScreen('map-screen'));

  // 趣味小游戏
  on('btn-landlord-back', 'click', () => showScreen('map-screen'));
  on('btn-ll-map', 'click', () => showScreen('map-screen'));
  on('btn-ll-again', 'click', () => {
    if (window.landlord && window.landlord.doorId) window.WAMinigames.startLandlord(window.landlord.doorId);
    else window.WAMinigames.startLandlord(null);
  });
  on('btn-rush-back', 'click', () => showScreen('map-screen'));
  on('btn-rush-map', 'click', () => showScreen('map-screen'));
  on('btn-rush-again', 'click', () => {
    if (window.rush && window.rush.doorId) window.WAMinigames.startRush(window.rush.doorId);
    else window.WAMinigames.startRush(null);
  });
  on('btn-strike-back', 'click', () => showScreen('map-screen'));
  on('btn-strike-map', 'click', () => showScreen('map-screen'));
  on('btn-strike-again', 'click', () => {
    if (window.strike && window.strike.doorId) window.WAMinigames.startStrike(window.strike.doorId);
    else window.WAMinigames.startStrike(null);
  });

  // 家长报告
  on('btn-parent-report', 'click', showParentReport);
  on('btn-pr-back', 'click', () => showScreen('map-screen'));

  // 错题本
  on('btn-errorbook', 'click', () => {
    showScreen('errorbook-screen');
    buildErrorBook();
  });
  on('btn-eb-back', 'click', () => showScreen('map-screen'));
  on('btn-sound', 'click', () => {
    save.settings.sound = !save.settings.sound;
    persist();
    updateHud();
    if (save.settings.sound) beep('correct');
  });
  on('btn-settings', 'click', openSettings);

  // 商店与英语对话：入口按钮
  on('btn-shop', 'click', () => showScreen('shop-screen'));
  on('btn-shop-back', 'click', () => {
    showScreen('map-screen');
    say('继续冒险赚星星，再来商店逛逛吧！🛒');
  });
  on('btn-chat-back', 'click', () => {
    stopChatRecog();
    if (window.speechSynthesis) speechSynthesis.cancel();
    chat = null;
    showScreen('map-screen');
    say('下次再和泡泡聊天吧～💬');
  });
  on('btn-chat-map', 'click', () => {
    showScreen('map-screen');
    say(randPick(LINES.greet));
  });
  on('btn-chat-again', 'click', () => {
    if (chat && chat.unitId) startChat(chat.unitId);
  });
  // 点地图上的泡泡头像 → 弹出对话话题选择
  const guideAvatarEl = document.querySelector('.guide-avatar');
  if (!guideAvatarEl) console.error('[单词冒险岛] 绑定失败：页面缺少元素 .guide-avatar');
  if (guideAvatarEl) guideAvatarEl.addEventListener('click', (e) => {
    e.stopPropagation();
    hideDoorMenu();
    if ($('chat-menu').classList.contains('hidden')) showChatMenu();
    else hideChatMenu();
  });

  // 对话翻页：点任意位置 / 空格 / 回车
  on('dialogue-overlay', 'click', () => advanceDlg());
  document.addEventListener('keydown', (e) => {
    if (!$('dialogue-overlay').classList.contains('hidden') &&
        (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      advanceDlg();
    }
  });

  // 设置面板
  on('set-sound', 'click', () => {
    save.settings.sound = !save.settings.sound;
    persist();
    refreshSettingsUI();
    updateHud();
    if (save.settings.sound) beep('correct');
  });
  on('set-voice', 'change', () => {
    save.settings.voiceURI = $('set-voice').value || null;
    persist();
  });
  on('set-voice-test', 'click', () => {
    speak("Hello! Let\'s go on an adventure!", true); // 试听不受静音开关影响
  });
  on('set-rate', 'input', () => {
    save.settings.rate = Number($('set-rate').value);
    persist();
    $('set-rate-val').textContent = save.settings.rate.toFixed(2) + 'x';
  });
  onAll('set-timelimit', 'button', 'click', (b) => {
      save.settings.timeLimit = Number(b.dataset.v);
      persist();
      refreshSettingsUI();
  });
  onAll('set-dict-level', 'button', 'click', (b) => {
      save.settings.dictationDefaultLevel = Number(b.dataset.v);
      persist();
      refreshSettingsUI();
  });
  on('set-auto-level', 'click', () => {
    save.settings.dictationAutoLevel = !(save.settings.dictationAutoLevel !== false);
    persist();
    refreshSettingsUI();
  });
  on('set-unlock', 'click', () => {
    save.settings.parentUnlockAll = !save.settings.parentUnlockAll;
    persist();
    refreshSettingsUI();
    buildMap();
  });
  on('set-reset', 'click', () => {
    if (confirm('确定要清空所有闯关记录，重新开始冒险吗？')) {
      try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
      save = defaultSave();
      save.spellStats = {};
      save.dictationMastery = {};
      save.dictationConsecutivePerfect = {};
      save.freeChatHistory = [];
      persist();
      closeSettings();
      showScreen('map-screen');
      say('冒险重新开始啦！加油！');
    }
  });
  on('set-close', 'click', closeSettings);

  // 默写训练营按钮
  on('btn-dict-back', 'click', () => {
    showScreen('map-screen');
    say('下次再来默写吧～');
  });
  on('btn-dict-replay', 'click', () => {
    if (dictation && dictation.doorId) startDictation(dictation.doorId);
  });
  on('btn-dict-map', 'click', () => {
    showScreen('map-screen');
    say(randPick(LINES.greet));
  });
  // 自由聊天按钮
  on('btn-fc-back', 'click', () => {
    showScreen('map-screen');
    say('下次再聊吧～💬');
  });
  // 点击空白处 / 窗口变化时收起门菜单和对话话题菜单
  document.addEventListener('click', () => { hideDoorMenu(); hideChatMenu(); });
  window.addEventListener('resize', () => { hideDoorMenu(); hideChatMenu(); });

  // 存档导出/导入事件
  on('set-export', 'click', exportSave);
  on('set-import', 'change', (e) => { if (e.target.files[0]) importSave(e.target.files[0]); });

  // 嗓音列表异步加载
  if (window.speechSynthesis) {
    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', () => {
      loadVoices();
      if (!$('settings-screen').classList.contains('hidden')) refreshVoiceSelect();
    });
  }

  /* ---------------- 存档导出/导入 ---------------- */
  function exportSave() {
    try {
      const data = localStorage.getItem(SAVE_KEY);
      if (!data) { alert('暂无存档可导出'); return; }
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = '单词冒险岛-存档-' + todayStr() + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      beep('complete');
    } catch (e) {
      alert('导出失败：' + e.message);
    }
  }

  function importSave(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const data = JSON.parse(e.target.result);
        if (!data || !data.doors) {
          alert('存档文件格式不正确');
          return;
        }
        if (!confirm('导入存档会覆盖当前进度，确定要继续吗？')) return;
        localStorage.setItem(SAVE_KEY, JSON.stringify(data));
        save = load();
        buildMap();
        updateHud();
        beep('complete');
        alert('✅ 存档导入成功！');
        showScreen('map-screen');
      } catch (err) {
        alert('导入失败：' + err.message);
      }
    };
    reader.readAsText(file);
  }

  /* ---------------- 对外桥接（供今日首页 flow.js / 同步层 sync.js 调用） ---------------- */
  window.WA = {
    get save() { return save; },
    DATA: DATA,
    ISLANDS: ISLANDS,
    DOOR_BY_ID: DOOR_BY_ID,
    dueDoors: dueDoors,
    doorDue: doorDue,
    islandUnlocked: islandUnlocked,
    entriesOfDoor: entriesOfDoor,
    todayStr: todayStr,
    startQuiz: startQuiz,
    startMatch: startMatch,
    startDictation: startDictation,
    startFlashcard: startFlashcard,
    startLandlord: function(doorId) { if(window.WAMinigames) window.WAMinigames.startLandlord(doorId); },
    startRush: function(doorId) { if(window.WAMinigames) window.WAMinigames.startRush(doorId); },
    startStrike: function(doorId) { if(window.WAMinigames) window.WAMinigames.startStrike(doorId); },
    showScreen: showScreen,
    say: say,
    esc: esc
  };

  /* ---------------- 启动 ---------------- */
  try {
    generateDailyPlan();
    buildMap();
  } catch (err) {
    console.error('启动错误:', err);
    const world = document.getElementById('world');
    if (world) {
      world.innerHTML = '<div style="padding:30px;color:#c53030;font-size:16px;line-height:1.8;">' +
        '<h3>😅 页面启动时遇到了问题</h3>' +
        '<p><b>错误信息：</b>' + String(err && err.message || err).replace(/</g, '&lt;') + '</p>' +
        '<p><b>建议：</b>按 <b>Ctrl+F5</b> (Windows) 或 <b>Cmd+Shift+R</b> (Mac) 强制刷新试试。<br>' +
        '如果还是不行，请截图此页面发给开发者。</p>' +
        '</div>';
    }
  }
  // 调试入口：
  //   #play-N 进第 N 门闯关；#match-N 进第 N 门连连看；#overview 总览；
  //   #settings 打开设置；#dialogue-test 播放健康岛开场白；
  //   #shop 进星星商店；#chat-<unitId> 直接进该岛英语对话
  (function () {
    const hash = location.hash;
    let m;
    if ((m = hash.match(/^#play-(\d+)$/))) {
      const d = DOOR_BY_ID[Number(m[1])];
      if (d) startQuiz(d);
    } else if ((m = hash.match(/^#match-(\d+)$/))) {
      const d = DOOR_BY_ID[Number(m[1])];
      if (d) startMatch(d);
    } else if (hash === '#overview') {
      showScreen('overview-screen');
    } else if (hash === '#settings') {
      openSettings();
    } else if (hash === '#dialogue-test') {
      playDialogue(INTROS[0]);
    } else if (hash === '#shop') {
      showScreen('shop-screen');
    } else if ((m = hash.match(/^#chat-([a-z0-9-]+)$/))) {
      startChat(m[1]); // 如 #chat-u5u6-doctor-challenge
    } else if ((m = hash.match(/^#dictation-(\d+)$/))) {
      const d = DOOR_BY_ID[Number(m[1])];
      if (d) startDictation(d.id);
    } else if (hash === '#freechat') {
      startFreeChat();
    } else {
      showScreen('map-screen');
      dailyReviewReminder();
    }
  })();
})();
