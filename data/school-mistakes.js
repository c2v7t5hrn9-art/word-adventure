/* ============================================================
 * 校内默写错词本（data/school-mistakes.js）
 * 根据校内默写/订正结果整理，登记在校默写中写错的词。
 * 用途：今日首页「校内默写加强 → 校内错词特训」只练这些词。
 * 维护：按默写批次登记（key 可以是词库单元 ID，也可以是批次名，
 *       如 "U1（9月10日）"），value 为该次写错的单词原文数组。
 *       词库没有的词会先补进对应单元的 dictationExtra。
 * ============================================================ */
window.SCHOOL_MISTAKES = {
  // 9月10日校内默写（五年级复习词为主，共 21 题）：
  // 第 8 题「日记」写成 gravity → diary；第 10 题 easy 写成 eazy → easy
  "U1（9月10日）": ["diary", "easy"],
  // 9月21日 Unit 2 校内默写订正页：4 个单词 + 2 个短语
  // exciting → excited；stength → strength；favorite → favourite；
  // come in life → come to life；as fast as the wind；interesting
  "U2（9月21日）": [
    "excited",
    "strength",
    "favourite",
    "come to life",
    "as fast as the wind",
    "interesting"
  ],
  // 10月12日 Unit 3 校内默写订正页：1 个单词 + 3 个短语
  // patato → tomato；sunny day → a sunny day；
  // “寻找”误写 find out → look for；botanical garden
  "U3（10月12日）": ["tomato", "a sunny day", "look for", "botanical garden"],
  // 10月29日 Unit 4 校内默写订正页：10 个订正词条、11 个错误点
  // 最后一题同时订正 join in → join、Kid → Kids
  "U4（10月29日）": [
    "habit",
    "flamingo",
    "injection",
    "birth",
    "minute",
    "a short film",
    "try to",
    "a panda cub",
    "a little bit of white hair",
    "I'd like to join the Safari Park Kids Club."
  ],
};
