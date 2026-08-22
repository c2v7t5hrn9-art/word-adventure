// 自动生成自 content/ 目录，请勿手改。修改词库请编辑 content/ 后运行 tools/build-content.py
window.WORDS_DATA = {
  "version": 2,
  "updated": "2026-08-22",
  "description": "单词冒险岛词库。收录讲义全部内容：主词条 + 延伸词(派生/词转) + 短语搭配 + 例句。新增讲义时按 entries 结构追加，并更新 doors。",
  "schema": {
    "entry": {
      "id": "唯一ID(单元缩写-序号)",
      "no": "讲义原编号",
      "type": "word=单词 | phrase=短语/词组",
      "text": "词条英文",
      "phonetic": "音标(可空)",
      "pos": "词性",
      "meaning": "中文释义",
      "door": "所属关卡门编号",
      "extensions": "延伸词/派生词数组 [{text,phonetic?,pos,meaning,phrases?}]",
      "phrases": "短语搭配数组 [{text,meaning}]",
      "examples": "例句数组 [{en,zh}]",
      "notes": "补充说明(构词法、对比、订正记录等)"
    }
  },
  "doors": [
    {
      "id": 1,
      "name": "健康小站",
      "theme": "doctor",
      "entryRange": "u56-01 ~ u56-09"
    },
    {
      "id": 2,
      "name": "检查室",
      "theme": "doctor",
      "entryRange": "u56-10 ~ u56-17"
    },
    {
      "id": 3,
      "name": "勇气山峰",
      "theme": "challenge",
      "entryRange": "u56-18 ~ u56-26"
    },
    {
      "id": 4,
      "name": "植物丛林",
      "theme": "plants",
      "entryRange": "u34-01 ~ u34-08"
    },
    {
      "id": 5,
      "name": "花园小径",
      "theme": "plants",
      "entryRange": "u34-09 ~ u34-16"
    },
    {
      "id": 6,
      "name": "动物乐园",
      "theme": "animals",
      "entryRange": "u34-17 ~ u34-24"
    },
    {
      "id": 7,
      "name": "社团广场",
      "theme": "clubs",
      "entryRange": "u12-01 ~ u12-08"
    },
    {
      "id": 8,
      "name": "传统游戏场",
      "theme": "games",
      "entryRange": "u12-09 ~ u12-17"
    },
    {
      "id": 9,
      "name": "终点之门",
      "theme": "games",
      "entryRange": "u12-18 ~ u12-21"
    },
    {
      "id": 10,
      "name": "科学之门",
      "theme": "scientists",
      "entryRange": "u78-01 ~ u78-08"
    },
    {
      "id": 11,
      "name": "太空实验室",
      "theme": "scientists",
      "entryRange": "u78-09 ~ u78-16"
    },
    {
      "id": 12,
      "name": "发明工坊",
      "theme": "inventions",
      "entryRange": "u78-17 ~ u78-23"
    },
    {
      "id": 13,
      "name": "家电小屋",
      "theme": "inventions",
      "entryRange": "u78-24 ~ u78-29"
    },
    {
      "id": 14,
      "name": "电脑教室",
      "theme": "computers",
      "entryRange": "u910-01 ~ u910-08 (U9)"
    },
    {
      "id": 15,
      "name": "芯片世界",
      "theme": "computers",
      "entryRange": "u910-09 ~ u910-16 (U9)"
    },
    {
      "id": 16,
      "name": "绿色家园",
      "theme": "green",
      "entryRange": "u910-17 ~ u910-25 (U10)"
    },
    {
      "id": 17,
      "name": "海洋卫士",
      "theme": "green",
      "entryRange": "u910-26 ~ u910-30 (U10) + 语法"
    },
    {
      "id": 18,
      "name": "校园生活基础词",
      "theme": "school",
      "entryRange": "u01-01 ~ u01-09"
    },
    {
      "id": 19,
      "name": "校园活动与科技",
      "theme": "school",
      "entryRange": "u01-10 ~ u01-18"
    },
    {
      "id": 20,
      "name": "话题与通信",
      "theme": "school",
      "entryRange": "u01-19 ~ u01-28"
    },
    {
      "id": 21,
      "name": "家庭纽带",
      "theme": "family",
      "entryRange": "u02-01 ~ u02-10"
    },
    {
      "id": 22,
      "name": "家与学习",
      "theme": "family",
      "entryRange": "u02-11 ~ u02-20"
    },
    {
      "id": 23,
      "name": "周末时光",
      "theme": "family",
      "entryRange": "u02-21 ~ u02-29"
    },
    {
      "id": 24,
      "name": "家庭庆典",
      "theme": "family",
      "entryRange": "u02-30 ~ u02-39"
    },
    {
      "id": 25,
      "name": "词语辨析坊",
      "theme": "food",
      "entryRange": "u03-01 ~ u03-07"
    },
    {
      "id": 26,
      "name": "厨房行动",
      "theme": "food",
      "entryRange": "u03-08 ~ u03-14"
    },
    {
      "id": 27,
      "name": "健康饮食",
      "theme": "food",
      "entryRange": "u03-15 ~ u03-21"
    },
    {
      "id": 28,
      "name": "安全训练营",
      "theme": "sports",
      "entryRange": "u04-01 ~ u04-07"
    },
    {
      "id": 29,
      "name": "意外处理站",
      "theme": "sports",
      "entryRange": "u04-08 ~ u04-14"
    },
    {
      "id": 30,
      "name": "球场风云",
      "theme": "sports",
      "entryRange": "u04-15 ~ u04-21"
    },
    {
      "id": 31,
      "name": "赛事报道",
      "theme": "sports",
      "entryRange": "u04-22 ~ u04-29"
    },
    {
      "id": 32,
      "name": "惊奇动物园",
      "theme": "animals",
      "entryRange": "u05-01 ~ u05-08"
    },
    {
      "id": 33,
      "name": "萌宠相处道",
      "theme": "animals",
      "entryRange": "u05-09 ~ u05-15"
    },
    {
      "id": 34,
      "name": "词语辨析馆",
      "theme": "animals",
      "entryRange": "u05-16 ~ u05-23"
    },
    {
      "id": 35,
      "name": "友谊与信任",
      "theme": "animals",
      "entryRange": "u05-24 ~ u05-30"
    },
    {
      "id": 36,
      "name": "出发准备",
      "theme": "travel",
      "entryRange": "u06-01 ~ u06-07"
    },
    {
      "id": 37,
      "name": "山野徒步",
      "theme": "travel",
      "entryRange": "u06-08 ~ u06-14"
    },
    {
      "id": 38,
      "name": "冰雪之旅",
      "theme": "travel",
      "entryRange": "u06-15 ~ u06-21"
    },
    {
      "id": 39,
      "name": "购票出行",
      "theme": "travel",
      "entryRange": "u06-22 ~ u06-28"
    },
    {
      "id": 40,
      "name": "旅途感悟",
      "theme": "travel",
      "entryRange": "u06-29 ~ u06-35"
    }
  ],
  "units": [
    {
      "unitId": "u5u6-doctor-challenge",
      "title": "U5 Seeing a doctor & U6 Rise to the challenge 词汇讲义",
      "sourceImages": [
        "IMG_1222.JPG",
        "IMG_1223.JPG",
        "IMG_1224.JPG",
        "IMG_1225.JPG"
      ],
      "pageMap": {
        "IMG_1222.JPG": 1,
        "IMG_1223.JPG": 2,
        "IMG_1224.JPG": 3,
        "IMG_1225.JPG": 4
      },
      "missingPages": "",
      "dictationExtra": [
        {
          "text": "disappear",
          "phonetic": "/ˌdɪsəˈpɪə(r)/",
          "pos": "v.",
          "meaning": "消失（校内默写易错：dissoppear ✗）"
        }
      ],
      "entries": [
        {
          "id": "u56-01",
          "no": 1,
          "type": "word",
          "text": "treat",
          "phonetic": "/triːt/",
          "pos": "v.",
          "meaning": "治疗；对待；请客",
          "door": 1,
          "phrases": [
            {
              "text": "treat a patient",
              "meaning": "治疗病人"
            },
            {
              "text": "treat sb. with respect",
              "meaning": "以尊重的态度对待某人"
            },
            {
              "text": "treat sb. to dinner",
              "meaning": "请某人吃晚饭"
            }
          ],
          "examples": [
            {
              "en": "He treats the wound carefully.",
              "zh": "他仔细地处理伤口。"
            }
          ],
          "extensions": [
            {
              "text": "treatment",
              "pos": "n.",
              "meaning": "治疗；对待",
              "phrases": [
                {
                  "text": "medical treatment",
                  "meaning": "医疗"
                },
                {
                  "text": "get special treatment",
                  "meaning": "受到特殊对待"
                }
              ]
            },
            {
              "text": "treatable",
              "pos": "adj.",
              "meaning": "可治疗的"
            }
          ]
        },
        {
          "id": "u56-02",
          "no": 2,
          "type": "phrase",
          "text": "runny nose",
          "phonetic": "/ˈrʌni nəʊz/",
          "pos": "短语",
          "meaning": "流鼻涕",
          "door": 1,
          "examples": [
            {
              "en": "I have a runny nose.",
              "zh": "我正在流鼻涕。"
            }
          ],
          "extensions": [
            {
              "text": "runny",
              "pos": "adj.",
              "meaning": "流鼻涕的；水分过多的",
              "phrases": [
                {
                  "text": "runny eyes",
                  "meaning": "流泪的眼睛"
                },
                {
                  "text": "runny honey",
                  "meaning": "稀蜂蜜"
                }
              ]
            }
          ],
          "notes": "runny 由 run(v. 流动) + -y 构成形容词"
        },
        {
          "id": "u56-03",
          "no": 3,
          "type": "word",
          "text": "cough",
          "phonetic": "/kɒf/",
          "pos": "v. & n.",
          "meaning": "咳嗽；咳出",
          "door": 1,
          "phrases": [
            {
              "text": "cough badly",
              "meaning": "咳得厉害"
            },
            {
              "text": "have a bad cough",
              "meaning": "咳嗽得厉害"
            }
          ],
          "examples": [
            {
              "en": "My nose is runny and I cough badly.",
              "zh": "我流鼻涕，而且咳嗽得很厉害。"
            }
          ],
          "extensions": [
            {
              "text": "coughing",
              "pos": "n.",
              "meaning": "咳嗽"
            }
          ]
        },
        {
          "id": "u56-04",
          "no": 4,
          "type": "word",
          "text": "nurse",
          "phonetic": "/nɜːs/",
          "pos": "n. 护士；v. 看护；照料",
          "meaning": "护士；看护",
          "door": 1,
          "examples": [
            {
              "en": "The nurse takes care of the patients carefully every day.",
              "zh": "护士每天细心照料病人。"
            }
          ],
          "extensions": [
            {
              "text": "nursing",
              "pos": "n.",
              "meaning": "护理专业；看护工作",
              "phrases": [
                {
                  "text": "nursing home",
                  "meaning": "疗养院"
                }
              ]
            }
          ],
          "notes": "过去式：nursed - nursed"
        },
        {
          "id": "u56-05",
          "no": 5,
          "type": "word",
          "text": "temperature",
          "phonetic": "/ˈtemprətʃə(r)/",
          "pos": "n.",
          "meaning": "温度；体温；气温",
          "door": 1,
          "phrases": [
            {
              "text": "take one's temperature",
              "meaning": "给某人量体温"
            },
            {
              "text": "room temperature",
              "meaning": "室温"
            }
          ],
          "examples": [
            {
              "en": "A nurse takes my temperature.",
              "zh": "护士为我量了体温。"
            }
          ],
          "extensions": [
            {
              "text": "temperate",
              "pos": "adj.",
              "meaning": "气候温和的",
              "phrases": [
                {
                  "text": "temperate zone",
                  "meaning": "温带"
                }
              ]
            }
          ]
        },
        {
          "id": "u56-06",
          "no": 6,
          "type": "word",
          "text": "fever",
          "phonetic": "/ˈfiːvə(r)/",
          "pos": "n.",
          "meaning": "发烧；发热",
          "door": 1,
          "phrases": [
            {
              "text": "have a fever",
              "meaning": "发烧"
            }
          ],
          "extensions": [
            {
              "text": "feverish",
              "pos": "adj.",
              "meaning": "发烧的；狂热的",
              "phrases": [
                {
                  "text": "feverish excitement",
                  "meaning": "狂热的兴奋"
                }
              ]
            }
          ]
        },
        {
          "id": "u56-07",
          "no": 7,
          "type": "word",
          "text": "flu",
          "phonetic": "/fluː/",
          "pos": "n.（不可数）",
          "meaning": "流感",
          "door": 1,
          "phrases": [
            {
              "text": "have the flu",
              "meaning": "得了流感"
            },
            {
              "text": "catch the flu",
              "meaning": "传染上流感"
            },
            {
              "text": "flu season",
              "meaning": "流感季节"
            }
          ],
          "examples": [
            {
              "en": "You have a fever. And it's the flu.",
              "zh": "你发烧了，而且是流感。"
            }
          ],
          "extensions": [
            {
              "text": "influenza",
              "phonetic": "/ˌɪnfluˈenzə/",
              "pos": "n.",
              "meaning": "流感（完整拼写）"
            }
          ]
        },
        {
          "id": "u56-08",
          "no": 8,
          "type": "word",
          "text": "medicine",
          "phonetic": "/ˈmedsn/",
          "pos": "n.（不可数）",
          "meaning": "药；医学",
          "door": 1,
          "phrases": [
            {
              "text": "take medicine",
              "meaning": "吃药"
            },
            {
              "text": "cough medicine",
              "meaning": "止咳药"
            },
            {
              "text": "Chinese medicine",
              "meaning": "中药"
            }
          ],
          "examples": [
            {
              "en": "Take some medicine and have a good rest.",
              "zh": "吃点药，好好休息一下。"
            }
          ],
          "extensions": [
            {
              "text": "medical",
              "pos": "adj.",
              "meaning": "医学的；医疗的",
              "phrases": [
                {
                  "text": "medical care",
                  "meaning": "医疗护理"
                },
                {
                  "text": "a medical student",
                  "meaning": "医学生"
                },
                {
                  "text": "medical treatment",
                  "meaning": "医疗"
                }
              ]
            }
          ]
        },
        {
          "id": "u56-09",
          "no": 9,
          "type": "phrase",
          "text": "take it easy",
          "phonetic": "/teɪk ɪt ˈiːzi/",
          "pos": "口语短语",
          "meaning": "别急；放轻松；慢慢来",
          "door": 1,
          "phrases": [
            {
              "text": "take it easy on yourself",
              "meaning": "别太勉强自己"
            }
          ],
          "examples": [
            {
              "en": "Drink lots of water. And take it easy.",
              "zh": "多喝水，放轻松。"
            }
          ]
        },
        {
          "id": "u56-10",
          "no": 10,
          "type": "word",
          "text": "check",
          "phonetic": "/tʃek/",
          "pos": "v. 检查；核对；n. 支票",
          "meaning": "检查；核对；支票",
          "door": 2,
          "phrases": [
            {
              "text": "check in",
              "meaning": "登记入住"
            },
            {
              "text": "check out",
              "meaning": "退房/查看"
            }
          ],
          "examples": [
            {
              "en": "Let me check your eyes.",
              "zh": "让我检查一下你的眼睛。"
            }
          ],
          "extensions": [
            {
              "text": "checker",
              "pos": "n.",
              "meaning": "检查员"
            },
            {
              "text": "check-up",
              "pos": "n.",
              "meaning": "体检"
            }
          ]
        },
        {
          "id": "u56-11",
          "no": 11,
          "type": "word",
          "text": "cycling",
          "phonetic": "/ˈsaɪklɪŋ/",
          "pos": "n.",
          "meaning": "骑自行车运动",
          "door": 2,
          "phrases": [
            {
              "text": "go cycling",
              "meaning": "去骑车"
            }
          ],
          "examples": [
            {
              "en": "For example, you can go cycling or play football more.",
              "zh": "比如，你可以多去骑车或多踢足球。"
            }
          ],
          "extensions": [
            {
              "text": "cycle",
              "pos": "v.",
              "meaning": "骑自行车",
              "phrases": [
                {
                  "text": "cycle to work",
                  "meaning": "骑车上班"
                }
              ]
            },
            {
              "text": "cyclist",
              "pos": "n.",
              "meaning": "骑自行车的人"
            }
          ]
        },
        {
          "id": "u56-12",
          "no": 12,
          "type": "word",
          "text": "patient",
          "phonetic": "/ˈpeɪʃnt/",
          "pos": "n. 病人；adj. 有耐心的",
          "meaning": "病人；有耐心的",
          "door": 2,
          "phrases": [
            {
              "text": "be patient with sb.",
              "meaning": "对某人有耐心"
            }
          ],
          "examples": [
            {
              "en": "\"Ouch! Ouch!\" The patient cried loudly in the hospital bed.",
              "zh": "“哎哟！哎哟！”病人躺在病床上大声喊道。"
            }
          ],
          "extensions": [
            {
              "text": "patience",
              "pos": "n.",
              "meaning": "耐心；忍耐力"
            },
            {
              "text": "patiently",
              "pos": "adv.",
              "meaning": "耐心地"
            }
          ]
        },
        {
          "id": "u56-13",
          "no": 13,
          "type": "word",
          "text": "reduce",
          "phonetic": "/rɪˈdjuːs/",
          "pos": "v.",
          "meaning": "减少；降低",
          "door": 2,
          "phrases": [
            {
              "text": "reduce waste",
              "meaning": "减少浪费"
            },
            {
              "text": "reduce speed",
              "meaning": "减速"
            }
          ],
          "extensions": [
            {
              "text": "reduction",
              "pos": "n.",
              "meaning": "减少；降低",
              "phrases": [
                {
                  "text": "a 20% reduction in costs",
                  "meaning": "成本降低20%"
                }
              ]
            }
          ]
        },
        {
          "id": "u56-14",
          "no": 14,
          "type": "word",
          "text": "pain",
          "phonetic": "/peɪn/",
          "pos": "n.",
          "meaning": "疼痛；痛苦",
          "door": 2,
          "examples": [
            {
              "en": "How can I reduce his pain during the treatment?",
              "zh": "在治疗期间，我该如何减轻他的痛苦呢？"
            }
          ],
          "extensions": [
            {
              "text": "painful",
              "pos": "adj.",
              "meaning": "疼痛的；痛苦的",
              "phrases": [
                {
                  "text": "a painful knee",
                  "meaning": "疼痛的膝盖"
                },
                {
                  "text": "a painful memory",
                  "meaning": "痛苦的回忆"
                }
              ]
            },
            {
              "text": "painless",
              "pos": "adj.",
              "meaning": "无痛的"
            }
          ]
        },
        {
          "id": "u56-15",
          "no": 15,
          "type": "phrase",
          "text": "by mistake",
          "phonetic": "/baɪ mɪˈsteɪk/",
          "pos": "短语",
          "meaning": "错误地；无意中",
          "door": 2,
          "phrases": [
            {
              "text": "mistake... for...",
              "meaning": "把……错当成……"
            },
            {
              "text": "be mistaken about...",
              "meaning": "对……搞错了"
            }
          ],
          "examples": [
            {
              "en": "The child ate some white flowers by mistake.",
              "zh": "孩子误吃了一些白色的花。"
            },
            {
              "en": "I mistook him for his brother.",
              "zh": "我把他错当成他哥哥了。"
            }
          ],
          "extensions": [
            {
              "text": "mistake",
              "pos": "v.",
              "meaning": "弄错"
            },
            {
              "text": "mistaken",
              "pos": "adj.",
              "meaning": "弄错的"
            }
          ]
        },
        {
          "id": "u56-16",
          "no": 16,
          "type": "word",
          "text": "operation",
          "phonetic": "/ˌɒpəˈreɪʃn/",
          "pos": "n.",
          "meaning": "手术；操作",
          "door": 2,
          "phrases": [
            {
              "text": "have an operation (on sb.)",
              "meaning": "（给某人）做手术"
            },
            {
              "text": "operate a machine",
              "meaning": "操作机器"
            }
          ],
          "examples": [
            {
              "en": "It helped many patients in need of operation.",
              "zh": "它帮助了许多需要手术的病人。"
            }
          ],
          "extensions": [
            {
              "text": "operate",
              "pos": "v.",
              "meaning": "动手术；操作机器"
            },
            {
              "text": "operator",
              "pos": "n.",
              "meaning": "操作员"
            }
          ]
        },
        {
          "id": "u56-17",
          "no": 17,
          "type": "word",
          "text": "challenge",
          "phonetic": "/ˈtʃælɪndʒ/",
          "pos": "n. 挑战；v. 挑战；质疑",
          "meaning": "挑战；质疑",
          "door": 2,
          "phrases": [
            {
              "text": "challenge sb. to do",
              "meaning": "向某人挑战做某事"
            }
          ],
          "examples": [
            {
              "en": "Rise to the challenge.",
              "zh": "直面挑战，迎难而上。"
            },
            {
              "en": "She challenged his decision.",
              "zh": "她质疑了他的决定。"
            }
          ],
          "extensions": [
            {
              "text": "challenging",
              "pos": "adj.",
              "meaning": "具有挑战性的"
            },
            {
              "text": "challenger",
              "pos": "n.",
              "meaning": "挑战者"
            }
          ]
        },
        {
          "id": "u56-18",
          "no": 18,
          "type": "word",
          "text": "impossible",
          "phonetic": "/ɪmˈpɒsəbl/",
          "pos": "adj.",
          "meaning": "不可能的；办不到的",
          "door": 3,
          "examples": [
            {
              "en": "It's impossible to finish the work in one day.",
              "zh": "一天之内完成这项工作是不可能的。"
            }
          ],
          "extensions": [
            {
              "text": "possible",
              "pos": "adj.",
              "meaning": "可能的"
            },
            {
              "text": "possibly",
              "pos": "adv.",
              "meaning": "可能"
            },
            {
              "text": "possibility",
              "pos": "n.",
              "meaning": "可能性"
            },
            {
              "text": "impossibility",
              "pos": "n.",
              "meaning": "不可能性"
            }
          ]
        },
        {
          "id": "u56-19",
          "no": 19,
          "type": "word",
          "text": "willing",
          "phonetic": "/ˈwɪlɪŋ/",
          "pos": "adj.",
          "meaning": "积极肯干的；愿意的；乐意的",
          "door": 3,
          "phrases": [
            {
              "text": "be willing to do sth.",
              "meaning": "愿意做某事"
            },
            {
              "text": "a willing helper",
              "meaning": "乐于助人的人"
            }
          ],
          "examples": [
            {
              "en": "She is willing to help others in need.",
              "zh": "她愿意帮助有需要的人。"
            },
            {
              "en": "Nothing is impossible to a willing mind.",
              "zh": "世上无难事，只怕有心人。"
            },
            {
              "en": "He showed great willingness to learn.",
              "zh": "他表现出极大的学习意愿。"
            }
          ],
          "extensions": [
            {
              "text": "will",
              "pos": "n. 意志；v. 愿意",
              "meaning": "意志；愿意"
            },
            {
              "text": "willingness",
              "pos": "n.",
              "meaning": "乐意；意愿"
            },
            {
              "text": "unwilling",
              "pos": "adj.",
              "meaning": "不情愿的"
            }
          ]
        },
        {
          "id": "u56-20",
          "no": 20,
          "type": "word",
          "text": "will",
          "phonetic": "/wɪl/",
          "pos": "n. 意志；毅力；v. aux. 将（助动词）",
          "meaning": "意志；毅力；将",
          "door": 3,
          "phrases": [
            {
              "text": "a strong will",
              "meaning": "坚强的意志"
            }
          ],
          "examples": [
            {
              "en": "The will can move mountains.",
              "zh": "意志能移山。"
            },
            {
              "en": "Where there is a will, there is a way.",
              "zh": "有志者，事竟成。"
            }
          ]
        },
        {
          "id": "u56-21",
          "no": 21,
          "type": "word",
          "text": "succeed",
          "phonetic": "/səkˈsiːd/",
          "pos": "v.",
          "meaning": "成功；达成",
          "door": 3,
          "phrases": [
            {
              "text": "succeed in doing sth.",
              "meaning": "成功做成某事（= manage to do sth.）"
            },
            {
              "text": "be successful in doing",
              "meaning": "成功做某事"
            }
          ],
          "examples": [
            {
              "en": "Those who keep themselves strong will succeed.",
              "zh": "自强不息、始终保持强大的人终将取得成功。"
            },
            {
              "en": "He succeeded in passing the difficult final exam after months of hard work.",
              "zh": "经过数月的努力，他成功通过了这场难度很大的期末考试。"
            },
            {
              "en": "Failure is the mother of success.",
              "zh": "失败是成功之母。"
            }
          ],
          "extensions": [
            {
              "text": "success",
              "pos": "n.",
              "meaning": "成功"
            },
            {
              "text": "successful",
              "pos": "adj.",
              "meaning": "成功的"
            },
            {
              "text": "successfully",
              "pos": "adv.",
              "meaning": "成功地"
            }
          ]
        },
        {
          "id": "u56-22",
          "no": 22,
          "type": "word",
          "text": "confident",
          "phonetic": "/ˈkɒnfɪdənt/",
          "pos": "adj.",
          "meaning": "自信的；有信心的",
          "door": 3,
          "phrases": [
            {
              "text": "be confident of sth.",
              "meaning": "对某事有把握"
            },
            {
              "text": "be confident about sth.",
              "meaning": "对某事有信心"
            },
            {
              "text": "be confident in sb.",
              "meaning": "信任某人"
            }
          ],
          "examples": [
            {
              "en": "But you are so confident today.",
              "zh": "但是你今天看起来非常自信。"
            }
          ],
          "extensions": [
            {
              "text": "confidence",
              "pos": "n.",
              "meaning": "信心；信任"
            },
            {
              "text": "confidently",
              "pos": "adv.",
              "meaning": "自信地"
            }
          ]
        },
        {
          "id": "u56-23",
          "no": 23,
          "type": "word",
          "text": "front",
          "phonetic": "/frʌnt/",
          "pos": "n. 前面；前方；adj. 前面的；前部的",
          "meaning": "前面；前方；前面的",
          "door": 3,
          "phrases": [
            {
              "text": "in front of",
              "meaning": "在……前面（外部方位）"
            },
            {
              "text": "in the front of",
              "meaning": "在……前部（内部前方）"
            },
            {
              "text": "come to the front",
              "meaning": "到前面来"
            },
            {
              "text": "front door",
              "meaning": "前门"
            }
          ]
        },
        {
          "id": "u56-24",
          "no": 24,
          "type": "word",
          "text": "practice",
          "phonetic": "/ˈpræktɪs/",
          "pos": "n. 练习；实践；v.（美式）练习",
          "meaning": "练习；实践",
          "door": 3,
          "phrases": [
            {
              "text": "put into practice",
              "meaning": "付诸实践"
            },
            {
              "text": "practice doing sth.",
              "meaning": "练习做某事"
            }
          ],
          "examples": [
            {
              "en": "I learned from videos and did a lot of practice.",
              "zh": "我从视频中学习，并且做了大量的练习。"
            },
            {
              "en": "Practice makes perfect.",
              "zh": "熟能生巧。"
            }
          ],
          "extensions": [
            {
              "text": "practical",
              "pos": "adj.",
              "meaning": "实际的；实用的"
            },
            {
              "text": "practically",
              "pos": "adv.",
              "meaning": "实际上；几乎"
            }
          ],
          "notes": "动词英式拼写为 practise"
        },
        {
          "id": "u56-25",
          "no": 25,
          "type": "word",
          "text": "better",
          "phonetic": "/ˈbetə(r)/",
          "pos": "adj. 更好的；adv. 更好地；v. 改善；提高",
          "meaning": "更好的；改善",
          "door": 3,
          "phrases": [
            {
              "text": "had better do",
              "meaning": "最好做某事"
            }
          ],
          "examples": [
            {
              "en": "This book is better than that one.",
              "zh": "这本书比那本更好。"
            },
            {
              "en": "Love and practice make a better you.",
              "zh": "热爱和练习造就更好的你。"
            }
          ],
          "notes": "good/well - better - the best（原级-比较级-最高级）"
        },
        {
          "id": "u56-26",
          "no": 26,
          "type": "phrase",
          "text": "give up",
          "phonetic": "/ɡɪv ʌp/",
          "pos": "短语",
          "meaning": "放弃；认输",
          "door": 3,
          "phrases": [
            {
              "text": "give up doing sth.",
              "meaning": "放弃做某事"
            },
            {
              "text": "give up hope",
              "meaning": "放弃希望"
            },
            {
              "text": "give up one's dream",
              "meaning": "放弃梦想"
            }
          ],
          "examples": [
            {
              "en": "Don't give up. Draw like this!",
              "zh": "别放弃，像这样画！"
            }
          ]
        },
        {
          "id": "u56-27",
          "no": 27,
          "type": "phrase",
          "text": "love to do / love doing",
          "phonetic": "/lʌv tuː duː / lʌv ˈduːɪŋ/",
          "pos": "短语",
          "meaning": "喜欢做某事",
          "door": 1
        },
        {
          "id": "u56-28",
          "no": 28,
          "type": "phrase",
          "text": "spend some time (in) doing something",
          "phonetic": "/spend taɪm ˈduːɪŋ/",
          "pos": "短语",
          "meaning": "花费时间做某事",
          "door": 1
        },
        {
          "id": "u56-29",
          "no": 29,
          "type": "word",
          "text": "reply",
          "phonetic": "/rɪˈplaɪ/",
          "pos": "v. & n.",
          "meaning": "回复；答复",
          "door": 1
        },
        {
          "id": "u56-30",
          "no": 30,
          "type": "phrase",
          "text": "stand for",
          "phonetic": "/stænd fɔː(r)/",
          "pos": "短语",
          "meaning": "代表；象征",
          "door": 1
        },
        {
          "id": "u56-31",
          "no": 31,
          "type": "phrase",
          "text": "take over",
          "phonetic": "/teɪk ˈəʊvə(r)/",
          "pos": "短语",
          "meaning": "接管；接手",
          "door": 1
        },
        {
          "id": "u56-32",
          "no": 32,
          "type": "word",
          "text": "joined",
          "phonetic": "/dʒɔɪnd/",
          "pos": "adj.",
          "meaning": "团结在一起的；联合的",
          "door": 1
        },
        {
          "id": "u56-33",
          "no": 33,
          "type": "word",
          "text": "everywhere",
          "phonetic": "/ˈevriweə(r)/",
          "pos": "adv.",
          "meaning": "到处；处处",
          "door": 1
        },
        {
          "id": "u56-34",
          "no": 34,
          "type": "word",
          "text": "call",
          "phonetic": "/kɔːl/",
          "pos": "v.",
          "meaning": "把...叫做；称呼；打电话",
          "door": 2
        },
        {
          "id": "u56-35",
          "no": 35,
          "type": "word",
          "text": "million",
          "phonetic": "/ˈmɪljən/",
          "pos": "n.",
          "meaning": "百万",
          "door": 2
        },
        {
          "id": "u56-36",
          "no": 36,
          "type": "phrase",
          "text": "stuff one's face",
          "phonetic": "/stʌf wʌnz feɪs/",
          "pos": "短语",
          "meaning": "吃撑；塞满嘴巴",
          "door": 2
        },
        {
          "id": "u56-37",
          "no": 37,
          "type": "word",
          "text": "squirrel",
          "phonetic": "/ˈskwɪrəl/",
          "pos": "n.",
          "meaning": "松鼠",
          "door": 2
        },
        {
          "id": "u56-38",
          "no": 38,
          "type": "word",
          "text": "nutty",
          "phonetic": "/ˈnʌti/",
          "pos": "adj.",
          "meaning": "坚果的；疯狂的；古怪的",
          "door": 2
        },
        {
          "id": "u56-39",
          "no": 39,
          "type": "word",
          "text": "bar",
          "phonetic": "/bɑː(r)/",
          "pos": "n.",
          "meaning": "酒吧；条；棒",
          "door": 2
        },
        {
          "id": "u56-40",
          "no": 40,
          "type": "word",
          "text": "amateur",
          "phonetic": "/ˈæmətə(r)/",
          "pos": "adj./n.",
          "meaning": "业余的；业余爱好者",
          "door": 2
        },
        {
          "id": "u56-41",
          "no": 41,
          "type": "word",
          "text": "woodworker",
          "phonetic": "/ˈwʊdwɜːkə(r)/",
          "pos": "n.",
          "meaning": "木工；木匠",
          "door": 3
        },
        {
          "id": "u56-42",
          "no": 42,
          "type": "word",
          "text": "woodworking",
          "phonetic": "/ˈwʊdwɜːkɪŋ/",
          "pos": "n.",
          "meaning": "木工活；木工技艺",
          "door": 3
        },
        {
          "id": "u56-43",
          "no": 43,
          "type": "phrase",
          "text": "go nuts",
          "phonetic": "/ɡəʊ nʌts/",
          "pos": "短语",
          "meaning": "发疯；抓狂；狂热",
          "door": 3
        },
        {
          "id": "u56-44",
          "no": 44,
          "type": "phrase",
          "text": "start doing something",
          "phonetic": "/stɑːt ˈduːɪŋ/",
          "pos": "短语",
          "meaning": "开始做某事",
          "door": 3
        },
        {
          "id": "u56-45",
          "no": 45,
          "type": "word",
          "text": "Ohio",
          "phonetic": "/əʊˈhaɪəʊ/",
          "pos": "n.",
          "meaning": "俄亥俄州（美国）",
          "door": 3
        },
        {
          "id": "u56-46",
          "no": 46,
          "type": "word",
          "text": "skill",
          "phonetic": "/skɪl/",
          "pos": "n.",
          "meaning": "技能；技巧",
          "door": 3
        },
        {
          "id": "u56-47",
          "no": 47,
          "type": "word",
          "text": "offer",
          "phonetic": "/ˈɒfə(r)/",
          "pos": "v. & n.",
          "meaning": "提供；供应；提议",
          "door": 3
        },
        {
          "id": "u56-48",
          "no": 48,
          "type": "word",
          "text": "type",
          "phonetic": "/taɪp/",
          "pos": "n.",
          "meaning": "种类；类型",
          "door": 3
        },
        {
          "id": "u56-49",
          "no": 49,
          "type": "word",
          "text": "business",
          "phonetic": "/ˈbɪznəs/",
          "pos": "n.",
          "meaning": "商业；公司；生意",
          "door": 3
        }
      ]
    },
    {
      "unitId": "u3u4-plants-animals",
      "title": "Unit 3 Amazing plants & Unit 4 Together with animals 词汇讲义",
      "sourceImages": [
        "IMG_1226.JPG",
        "IMG_1227.JPG",
        "IMG_1228.JPG",
        "IMG_1229.JPG"
      ],
      "pageMap": {
        "IMG_1226.JPG": 1,
        "IMG_1227.JPG": 2,
        "IMG_1228.JPG": 3,
        "IMG_1229.JPG": 4
      },
      "missingPages": "",
      "dictationExtra": [
        {
          "text": "different",
          "phonetic": "/ˈdɪfrənt/",
          "pos": "adj.",
          "meaning": "不同的（校内默写易错：diffeent ✗）"
        },
        {
          "text": "be different from",
          "phonetic": "/bi ˈdɪfrənt frɒm/",
          "pos": "短语",
          "meaning": "与……不同"
        },
        {
          "text": "manage to do",
          "phonetic": "/ˈmænɪdʒ tə duː/",
          "pos": "短语",
          "meaning": "设法做成某事（校内默写易错：monger ✗）"
        },
        {
          "text": "stop sb. from doing sth.",
          "phonetic": "/stɒp frɒm/",
          "pos": "短语",
          "meaning": "阻止某人做某事"
        },
        {
          "text": "start doing sth.",
          "phonetic": "/stɑːt/",
          "pos": "短语",
          "meaning": "开始做某事"
        },
        {
          "text": "get in one's way",
          "phonetic": "/ɡet ɪn weɪ/",
          "pos": "短语",
          "meaning": "挡路；妨碍"
        },
        {
          "text": "going nuts",
          "phonetic": "/ˈɡəʊɪŋ nʌts/",
          "pos": "短语",
          "meaning": "发疯；抓狂"
        },
        {
          "text": "offer",
          "phonetic": "/ˈɒfə(r)/",
          "pos": "v.",
          "meaning": "主动提出；提供"
        },
        {
          "text": "amateur",
          "phonetic": "/ˈæmətə(r)/",
          "pos": "adj./n.",
          "meaning": "业余的；业余爱好者（注意：不是邻居）"
        }
      ],
      "entries": [
        {
          "id": "u34-01",
          "no": 1,
          "type": "word",
          "text": "root",
          "phonetic": "/ruːt/",
          "pos": "n. 根；根源；v. 生根；扎根",
          "meaning": "根；根源；扎根",
          "door": 4,
          "phrases": [
            {
              "text": "take root",
              "meaning": "扎根"
            }
          ],
          "examples": [
            {
              "en": "Roots take in water and keep the plant in the ground.",
              "zh": "根吸收水分，并使植物固定在土壤中。"
            }
          ],
          "extensions": [
            {
              "text": "rooted",
              "pos": "adj.",
              "meaning": "根深蒂固的"
            },
            {
              "text": "rootless",
              "pos": "adj.",
              "meaning": "无根的"
            }
          ]
        },
        {
          "id": "u34-02",
          "no": 2,
          "type": "phrase",
          "text": "take in",
          "phonetic": "/teɪk ɪn/",
          "pos": "短语",
          "meaning": "吸收；理解；收留",
          "door": 4,
          "phrases": [
            {
              "text": "take in water",
              "meaning": "吸收水分"
            },
            {
              "text": "take in carbon dioxide",
              "meaning": "吸收二氧化碳"
            },
            {
              "text": "take in information",
              "meaning": "（理解）信息"
            }
          ]
        },
        {
          "id": "u34-03",
          "no": 3,
          "type": "phrase",
          "text": "give out",
          "phonetic": "/ɡɪv aʊt/",
          "pos": "短语",
          "meaning": "释放；发出",
          "door": 4,
          "phrases": [
            {
              "text": "give out oxygen",
              "meaning": "释放氧气"
            },
            {
              "text": "give out heat",
              "meaning": "释放热量"
            }
          ],
          "examples": [
            {
              "en": "Plants take in carbon dioxide and give out oxygen.",
              "zh": "植物吸收二氧化碳并释放出氧气。"
            }
          ],
          "notes": "【对比】take in 吸收 ↔ give out 释放"
        },
        {
          "id": "u34-04",
          "no": 4,
          "type": "word",
          "text": "stem",
          "phonetic": "/stem/",
          "pos": "n. 茎；干；v. 阻止；起源于",
          "meaning": "茎；干；阻止；起源于",
          "door": 4,
          "phrases": [
            {
              "text": "stem from",
              "meaning": "源于"
            }
          ],
          "examples": [
            {
              "en": "The stem carries water from the roots to the leaves.",
              "zh": "植物的茎将水分从根部输送到叶片中。"
            },
            {
              "en": "The problem stems from lack of communication.",
              "zh": "问题源于缺乏沟通。"
            }
          ],
          "notes": "动词变化：stemmed - stemmed - stemming"
        },
        {
          "id": "u34-05",
          "no": 5,
          "type": "word",
          "text": "thick",
          "phonetic": "/θɪk/",
          "pos": "adj.",
          "meaning": "厚的；粗的；浓的",
          "door": 4,
          "phrases": [
            {
              "text": "a thick book",
              "meaning": "一本厚书"
            },
            {
              "text": "thick hair",
              "meaning": "浓密的头发"
            },
            {
              "text": "the thickness of the wall",
              "meaning": "墙的厚度"
            }
          ],
          "examples": [
            {
              "en": "The fog thickened as night fell.",
              "zh": "夜幕降临时雾变浓了。"
            }
          ],
          "extensions": [
            {
              "text": "thickness",
              "pos": "n.",
              "meaning": "厚度；浓度"
            },
            {
              "text": "thicken",
              "pos": "v.",
              "meaning": "变厚；变浓"
            },
            {
              "text": "thin",
              "pos": "adj.",
              "meaning": "薄的；细的；稀疏的（反义词）"
            }
          ]
        },
        {
          "id": "u34-06",
          "no": 6,
          "type": "word",
          "text": "water lily",
          "phonetic": "/ˈwɔːtə ˈlɪli/",
          "pos": "n.",
          "meaning": "睡莲",
          "door": 4,
          "phrases": [
            {
              "text": "lily pad",
              "meaning": "睡莲叶"
            }
          ],
          "examples": [
            {
              "en": "The stem of the water lily is thick.",
              "zh": "睡莲的茎很粗。"
            },
            {
              "en": "The water lily blooms in summer.",
              "zh": "睡莲在夏季开花。"
            }
          ],
          "notes": "【构词】water 水 + lily 百合/花"
        },
        {
          "id": "u34-07",
          "no": 7,
          "type": "word",
          "text": "react",
          "phonetic": "/riˈækt/",
          "pos": "v.",
          "meaning": "反应；作出反应",
          "door": 4,
          "phrases": [
            {
              "text": "react to",
              "meaning": "对……作出反应（固定介词 to）"
            },
            {
              "text": "chemical reaction",
              "meaning": "化学反应"
            },
            {
              "text": "positive reaction",
              "meaning": "积极反应"
            }
          ],
          "examples": [
            {
              "en": "How did he react to the news?",
              "zh": "他对这个消息有什么反应？"
            },
            {
              "en": "Plants react to light.",
              "zh": "植物会对光线产生反应。"
            },
            {
              "en": "Her reaction to the surprise was very funny.",
              "zh": "她对那个惊喜的反应非常有趣。"
            }
          ],
          "extensions": [
            {
              "text": "reaction",
              "pos": "n.",
              "meaning": "反应；回应"
            },
            {
              "text": "reactive",
              "pos": "adj.",
              "meaning": "反应性的"
            }
          ]
        },
        {
          "id": "u34-08",
          "no": 8,
          "type": "word",
          "text": "pine cone",
          "phonetic": "/paɪn kəʊn/",
          "pos": "n.",
          "meaning": "松果",
          "door": 4,
          "phrases": [
            {
              "text": "pine tree",
              "meaning": "松树"
            },
            {
              "text": "pine needle",
              "meaning": "松针"
            }
          ],
          "examples": [
            {
              "en": "A pine cone is the fruit of a pine tree.",
              "zh": "松果是松树的果实。"
            }
          ],
          "notes": "【构词】pine 松树 + cone 球果"
        },
        {
          "id": "u34-09",
          "no": 9,
          "type": "word",
          "text": "scale",
          "phonetic": "/skeɪl/",
          "pos": "n. 鳞；鳞片；规模；v. 去鳞；改变…大小",
          "meaning": "鳞；鳞片；规模",
          "door": 5,
          "phrases": [
            {
              "text": "fish scale",
              "meaning": "鱼鳞"
            },
            {
              "text": "on a large scale",
              "meaning": "大规模地"
            },
            {
              "text": "scale up",
              "meaning": "扩大规模"
            }
          ],
          "examples": [
            {
              "en": "The pine cone has many small scales.",
              "zh": "这个松果有很多细小的鳞片。"
            },
            {
              "en": "They are planting trees on a large scale.",
              "zh": "他们在大规模植树。"
            }
          ],
          "extensions": [
            {
              "text": "scaly",
              "pos": "adj.",
              "meaning": "有鳞片的；有皮屑的"
            }
          ]
        },
        {
          "id": "u34-10",
          "no": 10,
          "type": "word",
          "text": "morning glory",
          "phonetic": "/ˈmɔːnɪŋ ˈɡlɔːri/",
          "pos": "n.",
          "meaning": "牵牛花",
          "door": 5,
          "examples": [
            {
              "en": "The morning glory climbs up the fence.",
              "zh": "牵牛花沿着篱笆向上攀爬。"
            }
          ],
          "notes": "【构词】morning 早晨 + glory 荣耀/光辉"
        },
        {
          "id": "u34-11",
          "no": 11,
          "type": "word",
          "text": "safari park",
          "phonetic": "/səˈfɑːri pɑːk/",
          "pos": "n.",
          "meaning": "野生动物园（动物自由活动，游客在车辆中观看）",
          "door": 5,
          "phrases": [
            {
              "text": "wildlife park",
              "meaning": "野生动物园（有较大围栏）"
            }
          ],
          "examples": [
            {
              "en": "Welcome to the Safari Park.",
              "zh": "欢迎来到野生动物园。"
            }
          ],
          "notes": "【构词】safari 游猎 + park 公园"
        },
        {
          "id": "u34-12",
          "no": 12,
          "type": "word",
          "text": "tiger",
          "phonetic": "/ˈtaɪɡə(r)/",
          "pos": "n.",
          "meaning": "虎；老虎",
          "door": 5,
          "extensions": [
            {
              "text": "tigress",
              "phonetic": "/ˈtaɪɡrəs/",
              "pos": "n.",
              "meaning": "母虎"
            },
            {
              "text": "tigerish",
              "pos": "adj.",
              "meaning": "凶猛的；虎一般的"
            }
          ]
        },
        {
          "id": "u34-13",
          "no": 13,
          "type": "word",
          "text": "lion",
          "phonetic": "/ˈlaɪən/",
          "pos": "n.",
          "meaning": "狮子",
          "door": 5,
          "phrases": [
            {
              "text": "the lion's mane",
              "meaning": "狮子的鬃毛"
            }
          ],
          "examples": [
            {
              "en": "You can find out the interesting habits of animals like tigers, lions and elephants.",
              "zh": "你可以去探索老虎、狮子和大象这类动物有趣的生活习性。"
            }
          ],
          "extensions": [
            {
              "text": "lioness",
              "phonetic": "/ˈlaɪənes/",
              "pos": "n.",
              "meaning": "母狮"
            }
          ],
          "notes": "后缀 -ess 表雌性，如 actor → actress 女演员"
        },
        {
          "id": "u34-14",
          "no": 14,
          "type": "word",
          "text": "threat",
          "phonetic": "/θret/",
          "pos": "n.",
          "meaning": "威胁；构成威胁的人或事物",
          "door": 5,
          "phrases": [
            {
              "text": "a threat to",
              "meaning": "对……的威胁"
            },
            {
              "text": "threaten to do",
              "meaning": "威胁要做"
            },
            {
              "text": "be threatened",
              "meaning": "受到……的威胁"
            }
          ],
          "examples": [
            {
              "en": "Pollution is a threat to animals.",
              "zh": "污染对动物构成威胁。"
            },
            {
              "en": "The storm threatens our trip.",
              "zh": "暴风雨威胁着我们的行程。"
            },
            {
              "en": "Many species are threatened with extinction.",
              "zh": "许多物种面临灭绝的威胁。"
            }
          ],
          "extensions": [
            {
              "text": "threaten",
              "pos": "v.",
              "meaning": "威胁；恐吓"
            },
            {
              "text": "threatening",
              "pos": "adj.",
              "meaning": "威胁的"
            }
          ]
        },
        {
          "id": "u34-15",
          "no": 15,
          "type": "word",
          "text": "whale",
          "phonetic": "/weɪl/",
          "pos": "n.",
          "meaning": "鲸；鲸鱼",
          "door": 5,
          "phrases": [
            {
              "text": "a whaling ship",
              "meaning": "捕鲸船"
            },
            {
              "text": "whale watching",
              "meaning": "观赏鲸鱼"
            }
          ],
          "examples": [
            {
              "en": "The blue whale is the largest animal in the world.",
              "zh": "蓝鲸是世界上体型最大的动物。"
            },
            {
              "en": "You can learn about the threats to sea animals like whales and dolphins.",
              "zh": "你可以了解鲸鱼和海豚等海洋动物面临的威胁。"
            }
          ],
          "extensions": [
            {
              "text": "whaler",
              "pos": "n.",
              "meaning": "捕鲸者；捕鲸船"
            },
            {
              "text": "whaling",
              "pos": "n.",
              "meaning": "捕鲸业"
            }
          ]
        },
        {
          "id": "u34-16",
          "no": 16,
          "type": "word",
          "text": "toe",
          "phonetic": "/təʊ/",
          "pos": "n.",
          "meaning": "脚趾",
          "door": 5,
          "phrases": [
            {
              "text": "stand on one's toes",
              "meaning": "踮着脚尖"
            }
          ],
          "examples": [
            {
              "en": "He held the chalk tightly between the toes of his left foot.",
              "zh": "他用左脚的脚趾紧紧地攥着粉笔。"
            }
          ],
          "extensions": [
            {
              "text": "toenail",
              "pos": "n.",
              "meaning": "脚趾甲"
            }
          ]
        },
        {
          "id": "u34-17",
          "no": 17,
          "type": "word",
          "text": "protect",
          "phonetic": "/prəˈtekt/",
          "pos": "v.",
          "meaning": "保护；防护",
          "door": 6,
          "phrases": [
            {
              "text": "protect sb./sth. from/against sth.",
              "meaning": "保护……免受……的侵害"
            },
            {
              "text": "under the protection of",
              "meaning": "在……的保护下"
            },
            {
              "text": "protective clothing",
              "meaning": "防护服"
            },
            {
              "text": "be protective of sb. (sth.)",
              "meaning": "保护……"
            }
          ],
          "examples": [
            {
              "en": "Respect, care for and protect animals.",
              "zh": "尊重、关爱和保护动物。"
            },
            {
              "en": "We should protect whales from whalers.",
              "zh": "我们应该保护鲸鱼免受捕鲸者的伤害。"
            }
          ],
          "extensions": [
            {
              "text": "protection",
              "pos": "n.",
              "meaning": "保护；防护措施"
            },
            {
              "text": "protective",
              "pos": "adj.",
              "meaning": "保护的；防护的"
            }
          ]
        },
        {
          "id": "u34-18",
          "no": 18,
          "type": "word",
          "text": "truck tour",
          "phonetic": "/trʌk tʊə(r)/",
          "pos": "n.",
          "meaning": "卡车游览；观光车游览",
          "door": 6,
          "phrases": [
            {
              "text": "safari truck",
              "meaning": "观光卡车"
            },
            {
              "text": "tour guide",
              "meaning": "导游"
            }
          ],
          "examples": [
            {
              "en": "I love this safari truck tour. It's so exciting to see animals running free!",
              "zh": "我喜欢这次野生动物园观光车游览。看到动物自由奔跑真是太刺激了！"
            }
          ]
        },
        {
          "id": "u34-19",
          "no": 19,
          "type": "word",
          "text": "giraffe",
          "phonetic": "/dʒəˈrɑːf/",
          "pos": "n.",
          "meaning": "长颈鹿（pl. giraffes）",
          "door": 6,
          "examples": [
            {
              "en": "Look! Mommy giraffes are taking care of their babies.",
              "zh": "看！长颈鹿妈妈们正在照顾它们的宝宝。"
            }
          ]
        },
        {
          "id": "u34-20",
          "no": 20,
          "type": "word",
          "text": "keeper",
          "phonetic": "/ˈkiːpə(r)/",
          "pos": "n.",
          "meaning": "饲养员；看守人",
          "door": 6,
          "phrases": [
            {
              "text": "animal keeper",
              "meaning": "动物饲养员"
            },
            {
              "text": "zoo keeper",
              "meaning": "动物园管理员"
            },
            {
              "text": "gatekeeper",
              "meaning": "看门人"
            },
            {
              "text": "keep animals",
              "meaning": "饲养动物"
            },
            {
              "text": "keep a secret",
              "meaning": "守秘密"
            },
            {
              "text": "keep doing sth.",
              "meaning": "保持做某事"
            }
          ],
          "examples": [
            {
              "en": "Is that animal keeper trying to feed the giraffes?",
              "zh": "那个动物饲养员是在尝试喂长颈鹿吗？"
            }
          ],
          "extensions": [
            {
              "text": "keep",
              "pos": "v.",
              "meaning": "保持；饲养"
            }
          ]
        },
        {
          "id": "u34-21",
          "no": 21,
          "type": "phrase",
          "text": "get close to",
          "phonetic": "/ɡet kləʊz tuː/",
          "pos": "短语动词",
          "meaning": "靠近；接近；亲近",
          "door": 6,
          "phrases": [
            {
              "text": "close friend",
              "meaning": "亲密的朋友"
            }
          ],
          "examples": [
            {
              "en": "I feel so close to all the animals.",
              "zh": "我感到和所有动物如此亲近。"
            }
          ],
          "notes": "【对比】stay away from 远离"
        },
        {
          "id": "u34-22",
          "no": 22,
          "type": "word",
          "text": "hair",
          "phonetic": "/heə(r)/",
          "pos": "n.（不可数）",
          "meaning": "毛发；头发",
          "door": 6,
          "phrases": [
            {
              "text": "thick hair",
              "meaning": "浓密的头发"
            }
          ],
          "examples": [
            {
              "en": "She isn't black and white, but pink with a little bit of white hair.",
              "zh": "它不是黑白相间的，而是粉色的，还带着一点点白色的毛。"
            }
          ],
          "extensions": [
            {
              "text": "hairy",
              "pos": "adj.",
              "meaning": "多毛的"
            },
            {
              "text": "hairless",
              "pos": "adj.",
              "meaning": "无毛的"
            }
          ],
          "notes": "hairy 比较级 hairier → 最高级 hairiest"
        },
        {
          "id": "u34-23",
          "no": 23,
          "type": "word",
          "text": "hippo",
          "phonetic": "/ˈhɪpəʊ/",
          "pos": "n.",
          "meaning": "河马",
          "door": 6,
          "examples": [
            {
              "en": "Momo, the hippo is one month old.",
              "zh": "河马莫莫一个月大了。"
            }
          ],
          "extensions": [
            {
              "text": "hippopotamus",
              "phonetic": "/ˌhɪpəˈpɒtəməs/",
              "pos": "n.",
              "meaning": "河马（完整学术拼写）"
            }
          ]
        },
        {
          "id": "u34-24",
          "no": 24,
          "type": "word",
          "text": "dive",
          "phonetic": "/daɪv/",
          "pos": "v.",
          "meaning": "跳水；潜水",
          "door": 6,
          "examples": [
            {
              "en": "He can dive into the swimming pool.",
              "zh": "他能跳进游泳池里。"
            },
            {
              "en": "Momo is learning how to dive.",
              "zh": "莫莫正在学习如何潜水。"
            }
          ],
          "extensions": [
            {
              "text": "diver",
              "pos": "n.",
              "meaning": "潜水员；跳水运动员"
            },
            {
              "text": "diving",
              "pos": "n.",
              "meaning": "跳水运动；潜水活动"
            }
          ]
        }
      ]
    },
    {
      "unitId": "u1u2-clubs-games",
      "title": "Unit 1 Clubs in our school & Unit 2 Traditional games 词汇词组练习",
      "sourceImages": [
        "IMG_1230.JPG",
        "IMG_1231.JPG",
        "IMG_1232.JPG",
        "IMG_1233.JPG"
      ],
      "pageMap": {
        "IMG_1230.JPG": 1,
        "IMG_1231.JPG": 2,
        "IMG_1232.JPG": 3,
        "IMG_1233.JPG": 4
      },
      "unitNotes": "音标口诀：双元音有八个，前重后轻要滑动；/əʊ/ /aʊ/ 口形变，/eɪ/ /aɪ/ /ɔɪ/ 口合拢，/ɪə/ /eə/ /ʊə/ 集中式。学好音标走天下！",
      "exercises": [
        {
          "type": "fill",
          "prompt": "She is interested in ______ (garden) and grows many plants at home.",
          "answer": "gardening"
        },
        {
          "type": "fill",
          "prompt": "______ (tell) stories and often makes us laugh",
          "answer": "（句子在照片边缘被裁切，待补全）"
        }
      ],
      "entries": [
        {
          "id": "u12-01",
          "no": 1,
          "type": "word",
          "text": "gardening",
          "phonetic": "/ˈɡɑːdnɪŋ/",
          "pos": "n.(U)",
          "meaning": "园艺；园艺活动",
          "door": 7,
          "phrases": [
            {
              "text": "enjoy/love/like gardening",
              "meaning": "喜欢园艺"
            },
            {
              "text": "be into gardening",
              "meaning": "热衷于园艺"
            },
            {
              "text": "garden every morning",
              "meaning": "每天早上做园艺"
            },
            {
              "text": "work in the garden",
              "meaning": "在花园里干活"
            }
          ],
          "examples": [
            {
              "en": "She enjoys gardening in her free time.",
              "zh": "她空闲时喜欢园艺。"
            },
            {
              "en": "The Gardening Club is on Wednesday.",
              "zh": "园艺俱乐部在周三活动。"
            },
            {
              "en": "My grandma gardens every morning.",
              "zh": "我奶奶每天早上打理花园。"
            }
          ],
          "extensions": [
            {
              "text": "garden",
              "pos": "v. 从事园艺；n. 花园/菜园",
              "meaning": "从事园艺；花园"
            }
          ]
        },
        {
          "id": "u12-02",
          "no": 2,
          "type": "word",
          "text": "storytelling",
          "phonetic": "/ˈstɔːritelɪŋ/",
          "pos": "n.(U)",
          "meaning": "讲故事；说故事（行为/艺术）",
          "door": 7,
          "phrases": [
            {
              "text": "be good at storytelling",
              "meaning": "擅长讲故事"
            },
            {
              "text": "do well in storytelling",
              "meaning": "擅长讲故事"
            },
            {
              "text": "tell an interesting story",
              "meaning": "讲一个有趣的故事"
            }
          ],
          "examples": [
            {
              "en": "Lily is good at storytelling to her little brother.",
              "zh": "莉莉很会给弟弟讲故事。"
            },
            {
              "en": "He is a wonderful storyteller.",
              "zh": "他是个出色的故事讲述者。"
            }
          ],
          "extensions": [
            {
              "text": "storyteller",
              "pos": "n.",
              "meaning": "讲故事的人"
            }
          ]
        },
        {
          "id": "u12-03",
          "no": 3,
          "type": "word",
          "text": "photography",
          "phonetic": "/fəˈtɒɡrəfi/",
          "pos": "n.(U)",
          "meaning": "摄影；摄影术",
          "door": 7,
          "phrases": [
            {
              "text": "take up photography",
              "meaning": "开始学摄影"
            },
            {
              "text": "be interested in photography",
              "meaning": "对摄影感兴趣"
            },
            {
              "text": "take a photo",
              "meaning": "拍照"
            },
            {
              "text": "professional photographer",
              "meaning": "专业摄影师"
            }
          ],
          "examples": [
            {
              "en": "Photography is one of my favorite hobbies.",
              "zh": "摄影是我最喜欢的爱好之一。"
            }
          ],
          "extensions": [
            {
              "text": "photo(s)",
              "pos": "n.（可数）",
              "meaning": "照片"
            },
            {
              "text": "photographer",
              "pos": "n.",
              "meaning": "摄影师"
            },
            {
              "text": "photographic",
              "pos": "adj.",
              "meaning": "摄影的"
            }
          ],
          "notes": "讲义原句 be interesting in photography 已订正为 be interested in photography"
        },
        {
          "id": "u12-04",
          "no": 4,
          "type": "word",
          "text": "join",
          "phonetic": "/dʒɔɪn/",
          "pos": "v.",
          "meaning": "参加；加入（成为一员）",
          "door": 7,
          "phrases": [
            {
              "text": "join a club",
              "meaning": "加入俱乐部"
            },
            {
              "text": "join somebody",
              "meaning": "加入某人"
            },
            {
              "text": "join in",
              "meaning": "参加某项活动"
            }
          ],
          "examples": [
            {
              "en": "Can I join the Kung Fu Club?",
              "zh": "我能加入功夫俱乐部吗？"
            },
            {
              "en": "Can I join you?",
              "zh": "我能加入你们吗？"
            },
            {
              "en": "We all joined in the game.",
              "zh": "我们都参加了这个游戏。"
            }
          ]
        },
        {
          "id": "u12-05",
          "no": 5,
          "type": "word",
          "text": "view",
          "phonetic": "/vjuː/",
          "pos": "n.（可数）",
          "meaning": "景色；风景；视野",
          "door": 7,
          "phrases": [
            {
              "text": "a view of",
              "meaning": "……的景色"
            },
            {
              "text": "night view",
              "meaning": "夜景"
            },
            {
              "text": "review lesson",
              "meaning": "复习功课"
            },
            {
              "text": "a film review",
              "meaning": "影评"
            }
          ],
          "examples": [
            {
              "en": "The view from the mountain is beautiful.",
              "zh": "从山上看景色很美。"
            },
            {
              "en": "Wow, the night view of the Huangpu River.",
              "zh": "哇，黄浦江的夜景。"
            },
            {
              "en": "Let's review what we learned today.",
              "zh": "我们复习一下今天学的内容吧。"
            }
          ],
          "extensions": [
            {
              "text": "viewer",
              "pos": "n.",
              "meaning": "观看者"
            },
            {
              "text": "review",
              "pos": "v./n.",
              "meaning": "复习/评论"
            }
          ]
        },
        {
          "id": "u12-06",
          "no": 6,
          "type": "word",
          "text": "pottery",
          "phonetic": "/ˈpɒtəri/",
          "pos": "n.(U)",
          "meaning": "制陶手艺；陶器（集合名词）",
          "door": 7,
          "examples": [
            {
              "en": "Lily is learning pottery.",
              "zh": "莉莉正在学陶艺。"
            },
            {
              "en": "At the Pottery Club, we make brush pots.",
              "zh": "在陶艺社，我们制作笔筒。"
            }
          ],
          "extensions": [
            {
              "text": "potter",
              "pos": "n.",
              "meaning": "陶工/陶艺家"
            }
          ]
        },
        {
          "id": "u12-07",
          "no": 7,
          "type": "phrase",
          "text": "how about",
          "phonetic": "/haʊ əˈbaʊt/",
          "pos": "口语短语",
          "meaning": "……怎么样？（提建议或征求意见）",
          "door": 7,
          "examples": [
            {
              "en": "How about going for a walk?",
              "zh": "去散个步怎么样？"
            },
            {
              "en": "How about bamboo?",
              "zh": "那竹子呢？"
            },
            {
              "en": "How about trying again?",
              "zh": "再试一次怎么样？"
            },
            {
              "en": "What about your plan?",
              "zh": "你的计划呢？"
            }
          ],
          "notes": "常用结构 how about + n./pron./doing；【对比】what about 同样表建议，也可用于询问信息"
        },
        {
          "id": "u12-08",
          "no": 8,
          "type": "word",
          "text": "traditional",
          "phonetic": "/trəˈdɪʃənl/",
          "pos": "adj.",
          "meaning": "传统的；惯例的",
          "door": 7,
          "phrases": [
            {
              "text": "traditional food",
              "meaning": "传统美食"
            },
            {
              "text": "traditional culture",
              "meaning": "传统文化"
            },
            {
              "text": "follow a tradition",
              "meaning": "遵循传统"
            }
          ],
          "examples": [
            {
              "en": "There will be all kinds of interesting traditional games on the sports field.",
              "zh": "运动场上会有各种有趣的传统游戏。"
            },
            {
              "en": "Respecting the elderly is a Chinese tradition.",
              "zh": "尊老是中国人的传统。"
            },
            {
              "en": "Traditionally, we eat dumplings on New Year's Eve.",
              "zh": "按传统，我们除夕吃饺子。"
            }
          ],
          "extensions": [
            {
              "text": "tradition",
              "pos": "n.",
              "meaning": "传统；惯例"
            },
            {
              "text": "traditionally",
              "pos": "adv.",
              "meaning": "传统上"
            }
          ]
        },
        {
          "id": "u12-09",
          "no": 9,
          "type": "word",
          "text": "Chinese yo-yo",
          "phonetic": "/tʃaɪˈniːz ˈjəʊjəʊ/",
          "pos": "n.",
          "meaning": "空竹（亦称 diabolo）",
          "door": 8,
          "examples": [
            {
              "en": "I can play Chinese yo-yo.",
              "zh": "我会玩空竹。"
            },
            {
              "en": "Chinese yo-yo playing is one of the traditional games.",
              "zh": "玩空竹是传统游戏之一。"
            }
          ]
        },
        {
          "id": "u12-10",
          "no": 10,
          "type": "word",
          "text": "kite-flying",
          "phonetic": "/ˈkaɪtflaɪɪŋ/",
          "pos": "n.(U)",
          "meaning": "放风筝（活动）",
          "door": 8,
          "phrases": [
            {
              "text": "fly a kite",
              "meaning": "放风筝"
            }
          ],
          "examples": [
            {
              "en": "Kite-flying is my favourite sport.",
              "zh": "放风筝是我最喜欢的运动。"
            }
          ],
          "notes": "【构词】kite 风筝 + fly 放飞；讲义原句 I want to play kite-flying 已订正为 fly a kite"
        },
        {
          "id": "u12-11",
          "no": 11,
          "type": "word",
          "text": "dragon dance",
          "phonetic": "/ˈdræɡən dɑːns/",
          "pos": "n.",
          "meaning": "舞龙",
          "door": 8,
          "examples": [
            {
              "en": "The students in the dragon dance team are training hard.",
              "zh": "舞龙队的同学们正在刻苦训练。"
            }
          ],
          "notes": "【构词】dragon 龙 + dance 跳舞"
        },
        {
          "id": "u12-12",
          "no": 12,
          "type": "word",
          "text": "tug of war",
          "phonetic": "/ˌtʌɡ əv ˈwɔː(r)/",
          "pos": "n.",
          "meaning": "拔河",
          "door": 8,
          "examples": [
            {
              "en": "Let's have a tug of war.",
              "zh": "我们来拔河吧。"
            },
            {
              "en": "Tug of war is a popular game.",
              "zh": "拔河是一项很受欢迎的运动。"
            },
            {
              "en": "He tugged at the rope with all his might.",
              "zh": "他拼命地拉绳子。"
            }
          ],
          "notes": "【构词】tug 用力拉 + war 战争"
        },
        {
          "id": "u12-13",
          "no": 13,
          "type": "word",
          "text": "hopscotch",
          "phonetic": "/ˈhɒpskɒtʃ/",
          "pos": "n.（不可数）",
          "meaning": "跳房子（游戏）",
          "door": 8,
          "examples": [
            {
              "en": "The girls are playing hopscotch.",
              "zh": "女孩们正在玩跳房子。"
            }
          ]
        },
        {
          "id": "u12-14",
          "no": 14,
          "type": "word",
          "text": "stamp",
          "phonetic": "/stæmp/",
          "pos": "v. 盖章；盖印；n. 邮票；印章",
          "meaning": "盖章；邮票；印章",
          "door": 8,
          "phrases": [
            {
              "text": "collect stamps",
              "meaning": "集邮"
            }
          ],
          "examples": [
            {
              "en": "Please stamp your name on the paper.",
              "zh": "请在纸上盖上你的名字。"
            }
          ]
        },
        {
          "id": "u12-15",
          "no": 15,
          "type": "word",
          "text": "prize",
          "phonetic": "/praɪz/",
          "pos": "n.",
          "meaning": "奖励；奖品",
          "door": 8,
          "phrases": [
            {
              "text": "win a prize",
              "meaning": "获奖"
            },
            {
              "text": "get a prize",
              "meaning": "得到奖品"
            },
            {
              "text": "give a prize",
              "meaning": "颁奖"
            }
          ],
          "examples": [
            {
              "en": "You can win a prize if you try your best.",
              "zh": "如果你全力以赴，就有可能赢得奖品。"
            },
            {
              "en": "After playing each game, you can stamp your card and get a prize.",
              "zh": "玩完每个游戏后，你可以在卡片上盖章并获得奖品。"
            }
          ]
        },
        {
          "id": "u12-16",
          "no": 16,
          "type": "word",
          "text": "style",
          "phonetic": "/staɪl/",
          "pos": "n.",
          "meaning": "风格；方式；样式",
          "door": 8,
          "examples": [
            {
              "en": "This is a new style of dress.",
              "zh": "这是一种新款式的连衣裙。"
            },
            {
              "en": "It's the mother of many kung fu style.",
              "zh": "它是许多功夫流派的母拳。"
            },
            {
              "en": "She has a very stylish haircut.",
              "zh": "她剪了个很时髦的发型。"
            }
          ],
          "extensions": [
            {
              "text": "stylish",
              "pos": "adj.",
              "meaning": "时髦的；有格调的"
            }
          ]
        },
        {
          "id": "u12-17",
          "no": 17,
          "type": "word",
          "text": "action",
          "phonetic": "/ˈækʃn/",
          "pos": "n.",
          "meaning": "动作；行动",
          "door": 8,
          "phrases": [
            {
              "text": "take action",
              "meaning": "采取行动"
            },
            {
              "text": "act out",
              "meaning": "表演出来"
            },
            {
              "text": "be active in",
              "meaning": "在……方面活跃"
            }
          ],
          "examples": [
            {
              "en": "There are many kinds of actions in kung fu.",
              "zh": "功夫里有各种各样的动作。"
            },
            {
              "en": "He acts in a school play.",
              "zh": "他在学校话剧中扮演角色。"
            },
            {
              "en": "She is active in sports.",
              "zh": "她积极参加体育运动。"
            }
          ],
          "extensions": [
            {
              "text": "act",
              "pos": "v.",
              "meaning": "行动；扮演"
            },
            {
              "text": "active",
              "pos": "adj.",
              "meaning": "积极的；活跃的"
            },
            {
              "text": "actively",
              "pos": "adv.",
              "meaning": "积极地"
            }
          ]
        },
        {
          "id": "u12-18",
          "no": 18,
          "type": "word",
          "text": "straight",
          "phonetic": "/streɪt/",
          "pos": "adj. 直的；笔直的；adv. 笔直地；直接地",
          "meaning": "直的；笔直地",
          "door": 9,
          "phrases": [
            {
              "text": "a straight line",
              "meaning": "一条直线"
            },
            {
              "text": "go straight",
              "meaning": "直走"
            },
            {
              "text": "stand straight",
              "meaning": "站直"
            },
            {
              "text": "straighten your desk",
              "meaning": "整理书桌"
            },
            {
              "text": "straighten your back",
              "meaning": "把背挺直"
            },
            {
              "text": "straighten up",
              "meaning": "挺直"
            }
          ],
          "examples": [
            {
              "en": "Look at us. Three straight trees!",
              "zh": "看我们，三棵笔直的树！"
            }
          ],
          "extensions": [
            {
              "text": "straighten",
              "pos": "v.",
              "meaning": "使变直；整理"
            }
          ],
          "notes": "比较级 straighter → 最高级 straightest"
        },
        {
          "id": "u12-19",
          "no": 19,
          "type": "phrase",
          "text": "keep up with",
          "phonetic": "/kiːp ʌp wɪð/",
          "pos": "短语",
          "meaning": "跟上；赶上",
          "door": 9,
          "examples": [
            {
              "en": "I can't keep up with you.",
              "zh": "我跟不上你。"
            }
          ],
          "notes": "【对比】keep on 继续"
        },
        {
          "id": "u12-20",
          "no": 20,
          "type": "word",
          "text": "control",
          "phonetic": "/kənˈtrəʊl/",
          "pos": "n.(U) 控制；v. 控制",
          "meaning": "控制",
          "door": 9,
          "phrases": [
            {
              "text": "lose control of",
              "meaning": "失去对……的控制"
            },
            {
              "text": "be in control of",
              "meaning": "掌控"
            },
            {
              "text": "be under control",
              "meaning": "处于控制下"
            }
          ],
          "examples": [
            {
              "en": "The players at the tail of the dragon lose control of the sticks.",
              "zh": "舞龙队尾的队员常常控制不住棍子。"
            },
            {
              "en": "The police are now in control of the situation.",
              "zh": "现在警方控制了局势。"
            },
            {
              "en": "Don't worry, everything is under control.",
              "zh": "别担心，一切都控制住了。"
            },
            {
              "en": "He controlled his anger and spoke calmly.",
              "zh": "他控制住怒火，平静地说话。"
            }
          ],
          "extensions": [
            {
              "text": "controllable",
              "pos": "adj.",
              "meaning": "可控制的"
            },
            {
              "text": "controller",
              "pos": "n.",
              "meaning": "控制器"
            }
          ],
          "notes": "过去式 controlled - controlled（双写 l）"
        },
        {
          "id": "u12-21",
          "no": 21,
          "type": "word",
          "text": "pace",
          "phonetic": "/peɪs/",
          "pos": "n.",
          "meaning": "（移动的）速度；步速；节奏",
          "door": 9,
          "phrases": [
            {
              "text": "keep the same pace",
              "meaning": "保持同速"
            },
            {
              "text": "keep pace with",
              "meaning": "与……同步"
            },
            {
              "text": "set the pace",
              "meaning": "定节奏"
            }
          ],
          "examples": [
            {
              "en": "This time, all the players keep the same pace.",
              "zh": "这一次，所有队员都保持相同的速度。"
            },
            {
              "en": "He set a fast pace and soon left us behind.",
              "zh": "他定下快步调，很快把我们甩在后面。"
            }
          ]
        }
      ]
    },
    {
      "unitId": "u7u8-scientists-inventions",
      "title": "U7 Great scientists & U8 Useful inventions 词汇讲义",
      "sourceImages": [
        "IMG_1296.JPG"
      ],
      "unitNotes": "词汇讲义单元。收录主词条+延伸词+短语搭配+例句。",
      "entries": [
        {
          "id": "u78-01",
          "no": 1,
          "type": "word",
          "text": "scientist",
          "phonetic": "/ˈsaɪəntɪst/",
          "pos": "n.",
          "meaning": "科学家",
          "door": 10,
          "examples": [
            {
              "en": "It's really cool to be a scientist!",
              "zh": "成为一名科学家真的很酷！"
            },
            {
              "en": "Yuan Longping was a great scientist.",
              "zh": "袁隆平是一位伟大的科学家。"
            }
          ],
          "phrases": [
            {
              "text": "a rocket scientist",
              "meaning": "火箭科学家"
            }
          ],
          "extensions": [
            {
              "text": "science",
              "phonetic": "/ˈsaɪəns/",
              "pos": "n.",
              "meaning": "科学"
            },
            {
              "text": "scientific",
              "phonetic": "/ˌsaɪənˈtɪfɪk/",
              "pos": "adj.",
              "meaning": "科学的"
            },
            {
              "text": "scientifically",
              "phonetic": "/ˌsaɪənˈtɪfɪkli/",
              "pos": "adv.",
              "meaning": "科学地"
            }
          ]
        },
        {
          "id": "u78-02",
          "no": 2,
          "type": "word",
          "text": "human",
          "phonetic": "/ˈhjuːmən/",
          "pos": "n.",
          "meaning": "人；人类；adj. 人的；人类的",
          "door": 10,
          "examples": [
            {
              "en": "Science opens a window for humans.",
              "zh": "科学为人类打开了一扇窗。"
            }
          ],
          "phrases": [
            {
              "text": "human beings",
              "meaning": "人类"
            },
            {
              "text": "human rights",
              "meaning": "人权"
            }
          ]
        },
        {
          "id": "u78-03",
          "no": 3,
          "type": "word",
          "text": "humanity",
          "phonetic": "/hjuːˈmænəti/",
          "pos": "n.",
          "meaning": "人性",
          "door": 10,
          "extensions": [
            {
              "text": "humanize",
              "phonetic": "/ˈhjuːmənaɪz/",
              "pos": "v.",
              "meaning": "使人性化"
            },
            {
              "text": "humankind",
              "phonetic": "/ˌhjuːmənˈkaɪnd/",
              "pos": "n.",
              "meaning": "人类（总称）"
            },
            {
              "text": "explore",
              "phonetic": "/ɪkˈsplɔː(r)/",
              "pos": "v.",
              "meaning": "探索；探险"
            },
            {
              "text": "exploration",
              "phonetic": "/ˌekspləˈreɪʃn/",
              "pos": "n.",
              "meaning": "探索"
            },
            {
              "text": "explorer",
              "phonetic": "/ɪkˈsplɔːrə(r)/",
              "pos": "n.",
              "meaning": "探险家；探索者"
            }
          ],
          "phrases": [
            {
              "text": "explore the universe",
              "meaning": "探索宇宙"
            },
            {
              "text": "explore new ways",
              "meaning": "探索新方法"
            },
            {
              "text": "space exploration",
              "meaning": "太空探索"
            }
          ]
        },
        {
          "id": "u78-04",
          "no": 4,
          "type": "word",
          "text": "outer space",
          "phonetic": "/ˈaʊtə speɪs/",
          "pos": "n.",
          "meaning": "外层空间；太空（U）",
          "door": 10,
          "examples": [
            {
              "en": "Science helps us explore outer space.",
              "zh": "科学帮助我们探索外太空。"
            }
          ],
          "notes": "构词：outer 外面的 + space 空间",
          "phrases": [
            {
              "text": "space station",
              "meaning": "空间站"
            },
            {
              "text": "spacecraft",
              "meaning": "宇宙飞船"
            },
            {
              "text": "spacesuit",
              "meaning": "宇航服"
            }
          ]
        },
        {
          "id": "u78-05",
          "no": 5,
          "type": "word",
          "text": "discover",
          "phonetic": "/dɪˈskʌvə(r)/",
          "pos": "v.",
          "meaning": "发现（过去式/过去分词 discovered）",
          "door": 10,
          "examples": [
            {
              "en": "Columbus discovered America in 1492.",
              "zh": "哥伦布于1492年发现了美洲大陆。"
            }
          ],
          "phrases": [
            {
              "text": "make a discovery",
              "meaning": "作出发现"
            },
            {
              "text": "a great discovery",
              "meaning": "一个伟大的发现"
            }
          ],
          "extensions": [
            {
              "text": "discovery",
              "phonetic": "/dɪˈskʌvəri/",
              "pos": "n.",
              "meaning": "发现；发现物"
            },
            {
              "text": "discoverer",
              "phonetic": "/dɪˈskʌvərə(r)/",
              "pos": "n.",
              "meaning": "发现者"
            }
          ]
        },
        {
          "id": "u78-06",
          "no": 6,
          "type": "word",
          "text": "gravity",
          "phonetic": "/ˈɡrævəti/",
          "pos": "n.",
          "meaning": "重力；地球引力（不可数）",
          "door": 10,
          "examples": [
            {
              "en": "The apple falls to the ground because of gravity.",
              "zh": "苹果因为重力掉到地上。"
            },
            {
              "en": "And later he discovered the Law of Gravity.",
              "zh": "后来他发现了万有引力定律。"
            }
          ],
          "extensions": [
            {
              "text": "gravitational",
              "phonetic": "/ˌɡrævɪˈteɪʃənl/",
              "pos": "adj.",
              "meaning": "重力的；引力的"
            }
          ]
        },
        {
          "id": "u78-07",
          "no": 7,
          "type": "word",
          "text": "rocket",
          "phonetic": "/ˈrɒkɪt/",
          "pos": "n.",
          "meaning": "火箭；v. 飞速上升",
          "door": 10,
          "examples": [
            {
              "en": "Look, Qian Xuesen, a rocket scientist.",
              "zh": "看，钱学森，一位火箭科学家。"
            },
            {
              "en": "Prices rocketed overnight.",
              "zh": "价格一夜之间飞速上涨。"
            }
          ],
          "phrases": [
            {
              "text": "launch a rocket",
              "meaning": "发射火箭"
            }
          ]
        },
        {
          "id": "u78-08",
          "no": 8,
          "type": "word",
          "text": "fan",
          "phonetic": "/fæn/",
          "pos": "n.",
          "meaning": "迷；狂热爱好者（复数 fans）",
          "door": 10,
          "examples": [
            {
              "en": "I'm a big fan of him.",
              "zh": "我是他的超级粉丝。"
            }
          ],
          "phrases": [
            {
              "text": "a big fan of...",
              "meaning": "……的超级粉丝"
            },
            {
              "text": "a fan club",
              "meaning": "粉丝俱乐部"
            },
            {
              "text": "a fan letter",
              "meaning": "粉丝来信"
            }
          ],
          "extensions": [
            {
              "text": "fanatical",
              "phonetic": "/fəˈnætɪkl/",
              "pos": "adj.",
              "meaning": "狂热的"
            },
            {
              "text": "fanatic",
              "phonetic": "/fəˈnætɪk/",
              "pos": "n.",
              "meaning": "狂热者；入迷的"
            }
          ]
        },
        {
          "id": "u78-09",
          "no": 9,
          "type": "word",
          "text": "research",
          "phonetic": "/rɪˈsɜːtʃ/",
          "pos": "n.",
          "meaning": "研究；调查（U）；v. 研究；调查",
          "door": 11,
          "phrases": [
            {
              "text": "do research on...",
              "meaning": "对……进行研究"
            },
            {
              "text": "medical research",
              "meaning": "医学研究"
            },
            {
              "text": "research center",
              "meaning": "研究中心"
            }
          ],
          "extensions": [
            {
              "text": "researcher",
              "phonetic": "/rɪˈsɜːtʃə(r)/",
              "pos": "n.",
              "meaning": "研究者"
            },
            {
              "text": "researchable",
              "phonetic": "/rɪˈsɜːtʃəbl/",
              "pos": "adj.",
              "meaning": "可研究的"
            }
          ]
        },
        {
          "id": "u78-10",
          "no": 10,
          "type": "word",
          "text": "hybrid rice",
          "phonetic": "/ˈhaɪbrɪd raɪs/",
          "pos": "n.",
          "meaning": "杂交水稻（不可数）",
          "door": 11,
          "examples": [
            {
              "en": "Mr Yuan began to do research on hybrid rice.",
              "zh": "袁隆平爷爷开始研究杂交水稻。"
            }
          ],
          "phrases": [
            {
              "text": "grow hybrid rice",
              "meaning": "种植杂交水稻"
            },
            {
              "text": "the father of hybrid rice",
              "meaning": "杂交水稻之父"
            },
            {
              "text": "hybrid car",
              "meaning": "混合动力汽车"
            }
          ],
          "notes": "构词：hybrid n. 杂交种；adj. 混合的；rice n. 稻米"
        },
        {
          "id": "u78-11",
          "no": 11,
          "type": "word",
          "text": "creative",
          "phonetic": "/kriˈeɪtɪv/",
          "pos": "adj.",
          "meaning": "创造性的；有创造力的",
          "door": 11,
          "examples": [
            {
              "en": "The creation of the internet changed the world.",
              "zh": "互联网的创造改变了世界。"
            },
            {
              "en": "Children have strong creativity.",
              "zh": "孩子们有很强的创造力。"
            }
          ],
          "phrases": [
            {
              "text": "creative thinking",
              "meaning": "创造性思维"
            }
          ],
          "extensions": [
            {
              "text": "create",
              "phonetic": "/kriˈeɪt/",
              "pos": "v.",
              "meaning": "创造；制作"
            },
            {
              "text": "creation",
              "phonetic": "/kriˈeɪʃn/",
              "pos": "n.",
              "meaning": "创造；作品"
            },
            {
              "text": "creativity",
              "phonetic": "/ˌkriːeɪˈtɪvəti/",
              "pos": "n.",
              "meaning": "创造力；创意"
            },
            {
              "text": "creator",
              "phonetic": "/kriˈeɪtə(r)/",
              "pos": "n.",
              "meaning": "创造者"
            }
          ]
        },
        {
          "id": "u78-12",
          "no": 12,
          "type": "word",
          "text": "hard-working",
          "phonetic": "/ˌhɑːd ˈwɜːkɪŋ/",
          "pos": "adj.",
          "meaning": "勤勉的；努力工作的（常用于描述人）",
          "door": 11,
          "examples": [
            {
              "en": "He was creative and hard-working.",
              "zh": "他既有创造力又勤奋。"
            },
            {
              "en": "He works hard on his studies.",
              "zh": "他努力学习。"
            }
          ],
          "phrases": [
            {
              "text": "a hard-working student",
              "meaning": "勤奋的学生"
            }
          ],
          "notes": "构词：work hard 动词短语 努力工作/学习"
        },
        {
          "id": "u78-13",
          "no": 13,
          "type": "phrase",
          "text": "be known as",
          "phonetic": "/biː nəʊn æz/",
          "pos": "phr.",
          "meaning": "被认为是；被称为",
          "door": 11,
          "examples": [
            {
              "en": "Mr Yuan is known as the 'Father of Hybrid Rice'.",
              "zh": "袁先生被称为'杂交水稻之父'。"
            }
          ],
          "extensions": [
            {
              "text": "know",
              "phonetic": "/nəʊ/",
              "pos": "v.",
              "meaning": "知道"
            },
            {
              "text": "known",
              "phonetic": "/nəʊn/",
              "pos": "adj.",
              "meaning": "著名的（过去分词）"
            },
            {
              "text": "well-known",
              "phonetic": "/ˌwel ˈnəʊn/",
              "pos": "adj.",
              "meaning": "众所周知的"
            }
          ],
          "phrases": [
            {
              "text": "be known / well-known for...",
              "meaning": "因……而闻名"
            }
          ]
        },
        {
          "id": "u78-14",
          "no": 14,
          "type": "word",
          "text": "invent",
          "phonetic": "/ɪnˈvent/",
          "pos": "v.",
          "meaning": "发明；创造（过去式/过去分词 invented）",
          "door": 11,
          "examples": [
            {
              "en": "Edison invented the light bulb in 1879.",
              "zh": "爱迪生在1879年发明了电灯泡。"
            }
          ],
          "extensions": [
            {
              "text": "invention",
              "phonetic": "/ɪnˈvenʃn/",
              "pos": "n.",
              "meaning": "发明；发明物"
            },
            {
              "text": "inventor",
              "phonetic": "/ɪnˈventə(r)/",
              "pos": "n.",
              "meaning": "发明家；创造者"
            }
          ],
          "phrases": [
            {
              "text": "invent something",
              "meaning": "发明某物"
            }
          ]
        },
        {
          "id": "u78-15",
          "no": 15,
          "type": "word",
          "text": "practical",
          "phonetic": "/ˈpræktɪkl/",
          "pos": "adj.",
          "meaning": "有用的；实用的",
          "door": 11,
          "examples": [
            {
              "en": "This is a practical tool.",
              "zh": "这是一个实用的工具。"
            },
            {
              "en": "He and his assistant invented the first practical telephone.",
              "zh": "他和助手发明了世界上第一台实用电话。"
            }
          ],
          "phrases": [
            {
              "text": "practical skills",
              "meaning": "实用技能"
            },
            {
              "text": "practical experience",
              "meaning": "实践经验"
            },
            {
              "text": "put... into practice",
              "meaning": "付诸实践"
            }
          ],
          "extensions": [
            {
              "text": "practice",
              "phonetic": "/ˈpræktɪs/",
              "pos": "n./v.",
              "meaning": "练习；实践"
            },
            {
              "text": "practically",
              "phonetic": "/ˈpræktɪkli/",
              "pos": "adv.",
              "meaning": "实际上；几乎"
            }
          ]
        },
        {
          "id": "u78-16",
          "no": 16,
          "type": "phrase",
          "text": "the deaf",
          "phonetic": "/ðə def/",
          "pos": "n.",
          "meaning": "失聪的人（复数含义）",
          "door": 11,
          "examples": [
            {
              "en": "He invented a lot of techniques to help the deaf.",
              "zh": "他发明了很多技术来帮助失聪人士。"
            },
            {
              "en": "The deaf need special care.",
              "zh": "失聪人士需要特殊照顾。"
            }
          ],
          "notes": "the + 形容词 表示一类人，作主语时谓语动词用复数",
          "extensions": [
            {
              "text": "deaf",
              "phonetic": "/def/",
              "pos": "adj.",
              "meaning": "聋的"
            },
            {
              "text": "deafness",
              "phonetic": "/ˈdefnəs/",
              "pos": "n.",
              "meaning": "耳聋"
            },
            {
              "text": "deafen",
              "phonetic": "/ˈdefn/",
              "pos": "v.",
              "meaning": "使震聋"
            },
            {
              "text": "deafening",
              "phonetic": "/ˈdefnɪŋ/",
              "pos": "adj.",
              "meaning": "震耳欲聋的"
            }
          ]
        },
        {
          "id": "u78-17",
          "no": 17,
          "type": "word",
          "text": "invention",
          "phonetic": "/ɪnˈvenʃn/",
          "pos": "n.",
          "meaning": "发明；创造（可数名词）",
          "door": 12,
          "examples": [
            {
              "en": "The wheel is a great invention.",
              "zh": "轮子是一项伟大的发明。"
            },
            {
              "en": "Great inventions are everywhere around us.",
              "zh": "伟大的发明就在我们身边。"
            }
          ]
        },
        {
          "id": "u78-18",
          "no": 18,
          "type": "word",
          "text": "problem",
          "phonetic": "/ˈprɒbləm/",
          "pos": "n.",
          "meaning": "难题；问题",
          "door": 12,
          "examples": [
            {
              "en": "People invent things to solve problems.",
              "zh": "人们发明各种东西是为了解决生活中遇到的问题。"
            },
            {
              "en": "He has problems (in) remembering people's names.",
              "zh": "他很难记住别人的名字。"
            }
          ],
          "phrases": [
            {
              "text": "have problems (in) doing sth.",
              "meaning": "做某事有困难"
            },
            {
              "text": "no problem",
              "meaning": "没问题"
            }
          ],
          "extensions": [
            {
              "text": "problematic",
              "phonetic": "/ˌprɒbləˈmætɪk/",
              "pos": "adj.",
              "meaning": "有问题的；成问题的"
            }
          ]
        },
        {
          "id": "u78-19",
          "no": 19,
          "type": "word",
          "text": "wheel",
          "phonetic": "/wiːl/",
          "pos": "n.",
          "meaning": "轮子；车轮",
          "door": 12,
          "examples": [
            {
              "en": "The wheel is one of the most important inventions.",
              "zh": "轮子是人类历史上最重要的发明之一。"
            }
          ],
          "phrases": [
            {
              "text": "wheel a cart",
              "meaning": "推手推车"
            }
          ],
          "extensions": [
            {
              "text": "wheel",
              "phonetic": "/wiːl/",
              "pos": "v.",
              "meaning": "推（车）；拉（车）"
            },
            {
              "text": "wheeled",
              "phonetic": "/wiːld/",
              "pos": "adj.",
              "meaning": "装有轮子的"
            }
          ]
        },
        {
          "id": "u78-20",
          "no": 20,
          "type": "phrase",
          "text": "ancient times",
          "phonetic": "/ˈeɪnʃənt taɪmz/",
          "pos": "phr.",
          "meaning": "古代；古时候",
          "door": 12,
          "examples": [
            {
              "en": "In ancient times, people lived in caves.",
              "zh": "在古代，人们居住在洞穴中。"
            }
          ],
          "extensions": [
            {
              "text": "ancient",
              "phonetic": "/ˈeɪnʃənt/",
              "pos": "adj.",
              "meaning": "古代的；古老的"
            }
          ]
        },
        {
          "id": "u78-21",
          "no": 21,
          "type": "word",
          "text": "printing",
          "phonetic": "/ˈprɪntɪŋ/",
          "pos": "n.",
          "meaning": "印刷术；打印（不可数名词）",
          "door": 12,
          "examples": [
            {
              "en": "Around 1041, Bi Sheng invented movable-type printing.",
              "zh": "大约在1041年，毕昇发明了活字印刷术。"
            },
            {
              "en": "Can you print this for me?",
              "zh": "你能帮我打印这个吗？"
            },
            {
              "en": "The printer is out of ink.",
              "zh": "打印机没墨了。"
            }
          ],
          "extensions": [
            {
              "text": "print",
              "phonetic": "/prɪnt/",
              "pos": "v.",
              "meaning": "印刷；打印"
            },
            {
              "text": "printer",
              "phonetic": "/ˈprɪntə(r)/",
              "pos": "n.",
              "meaning": "打印机；印刷工"
            }
          ]
        },
        {
          "id": "u78-22",
          "no": 22,
          "type": "word",
          "text": "television",
          "phonetic": "/ˈtelɪvɪʒn/",
          "pos": "n.",
          "meaning": "电视机",
          "door": 12,
          "examples": [
            {
              "en": "The game was televised live.",
              "zh": "这场比赛被电视直播了。"
            }
          ],
          "phrases": [
            {
              "text": "watch television / TV",
              "meaning": "看电视"
            }
          ],
          "extensions": [
            {
              "text": "televise",
              "phonetic": "/ˈtelɪvaɪz/",
              "pos": "v.",
              "meaning": "用电视播放"
            }
          ]
        },
        {
          "id": "u78-23",
          "no": 23,
          "type": "word",
          "text": "robot",
          "phonetic": "/ˈrəʊbɒt/",
          "pos": "n.",
          "meaning": "机器人（可数名词）",
          "door": 12,
          "examples": [
            {
              "en": "There are many great inventions, such as televisions and robots.",
              "zh": "有许多伟大的发明，如电视机和机器人。"
            }
          ],
          "phrases": [
            {
              "text": "a cleaning robot",
              "meaning": "扫地机器人"
            },
            {
              "text": "robotic technology",
              "meaning": "机器人技术"
            },
            {
              "text": "robotic surgery",
              "meaning": "机器人手术"
            }
          ],
          "extensions": [
            {
              "text": "robotic",
              "phonetic": "/rəʊˈbɒtɪk/",
              "pos": "adj.",
              "meaning": "机器人的"
            },
            {
              "text": "robotics",
              "phonetic": "/rəʊˈbɒtɪks/",
              "pos": "n.",
              "meaning": "机器人技术"
            }
          ]
        },
        {
          "id": "u78-24",
          "no": 24,
          "type": "word",
          "text": "useful",
          "phonetic": "/ˈjuːsfl/",
          "pos": "adj.",
          "meaning": "有用的；有帮助的",
          "door": 13,
          "examples": [
            {
              "en": "This is a useful invention.",
              "zh": "这是一项有用的发明。"
            }
          ],
          "phrases": [
            {
              "text": "a useful invention",
              "meaning": "一项有用的发明"
            },
            {
              "text": "make use of",
              "meaning": "利用"
            }
          ],
          "extensions": [
            {
              "text": "use",
              "phonetic": "/juːz/",
              "pos": "n./v.",
              "meaning": "使用"
            },
            {
              "text": "useless",
              "phonetic": "/ˈjuːsləs/",
              "pos": "adj.",
              "meaning": "无用的"
            },
            {
              "text": "user",
              "phonetic": "/ˈjuːzə(r)/",
              "pos": "n.",
              "meaning": "使用者"
            }
          ]
        },
        {
          "id": "u78-25",
          "no": 25,
          "type": "phrase",
          "text": "fresh water",
          "phonetic": "/freʃ ˈwɔːtə(r)/",
          "pos": "n.",
          "meaning": "淡水（不可数名词）",
          "door": 13,
          "examples": [
            {
              "en": "Then you have clean fresh water!",
              "zh": "那你就有了干净的淡水！"
            }
          ],
          "extensions": [
            {
              "text": "fresh",
              "phonetic": "/freʃ/",
              "pos": "adj.",
              "meaning": "新鲜的；淡水的"
            }
          ],
          "phrases": [
            {
              "text": "fresh air",
              "meaning": "新鲜空气"
            }
          ]
        },
        {
          "id": "u78-26",
          "no": 26,
          "type": "phrase",
          "text": "electric fan",
          "phonetic": "/ɪˈlektrɪk fæn/",
          "pos": "n.",
          "meaning": "电风扇（可数名词）",
          "door": 13,
          "examples": [
            {
              "en": "The electric fan is on.",
              "zh": "电风扇开了。"
            }
          ],
          "phrases": [
            {
              "text": "turn on the electric fan",
              "meaning": "打开电风扇"
            }
          ],
          "notes": "构词：electric adj. 电的；用电的；fan n. 风扇；迷"
        },
        {
          "id": "u78-27",
          "no": 27,
          "type": "word",
          "text": "juicer",
          "phonetic": "/ˈdʒuːsə(r)/",
          "pos": "n.",
          "meaning": "榨汁机（可数名词）",
          "door": 13,
          "examples": [
            {
              "en": "We can find wheels in a juicer.",
              "zh": "我们能在榨汁机里找到轮子。"
            }
          ],
          "extensions": [
            {
              "text": "juice",
              "phonetic": "/dʒuːs/",
              "pos": "n.",
              "meaning": "果汁；蔬菜汁（U）"
            },
            {
              "text": "juicy",
              "phonetic": "/ˈdʒuːsi/",
              "pos": "adj.",
              "meaning": "多汁的"
            }
          ]
        },
        {
          "id": "u78-28",
          "no": 28,
          "type": "phrase",
          "text": "washing machine",
          "phonetic": "/ˈwɒʃɪŋ məˈʃiːn/",
          "pos": "n.",
          "meaning": "洗衣机（可数名词）",
          "door": 13,
          "examples": [
            {
              "en": "My mother uses a new washing machine to wash our dirty clothes every weekend.",
              "zh": "我妈妈每个周末都用新洗衣机洗我们的脏衣服。"
            }
          ],
          "extensions": [
            {
              "text": "wash",
              "phonetic": "/wɒʃ/",
              "pos": "v.",
              "meaning": "洗"
            },
            {
              "text": "washer",
              "phonetic": "/ˈwɒʃə(r)/",
              "pos": "n.",
              "meaning": "洗衣机；洗涤器"
            },
            {
              "text": "machine",
              "phonetic": "/məˈʃiːn/",
              "pos": "n.",
              "meaning": "机器"
            }
          ]
        },
        {
          "id": "u78-29",
          "no": 29,
          "type": "word",
          "text": "housework",
          "phonetic": "/ˈhaʊswɜːk/",
          "pos": "n.",
          "meaning": "家务劳动",
          "door": 13,
          "examples": [
            {
              "en": "Wheels make housework much easier.",
              "zh": "轮子让家务变得轻松多了。"
            }
          ],
          "phrases": [
            {
              "text": "do housework",
              "meaning": "做家务"
            }
          ],
          "notes": "构词：house n. 房子 + work n. 工作（合成词）",
          "extensions": [
            {
              "text": "housewife",
              "phonetic": "/ˈhaʊswaɪf/",
              "pos": "n.",
              "meaning": "家庭主妇"
            },
            {
              "text": "housekeeper",
              "phonetic": "/ˈhaʊskiːpə(r)/",
              "pos": "n.",
              "meaning": "管家"
            }
          ]
        },
        {
          "id": "u78-30",
          "no": null,
          "type": "word",
          "text": "technique",
          "phonetic": "/tekˈniːk/",
          "pos": "n.",
          "meaning": "技术；技巧",
          "door": 11,
          "examples": [
            {
              "en": "He invented a lot of techniques to help the deaf.",
              "zh": "他发明了很多技术来帮助失聪人士。"
            }
          ]
        },
        {
          "id": "u78-31",
          "no": null,
          "type": "word",
          "text": "comfortably",
          "phonetic": "/ˈkʌmftəbli/",
          "pos": "adv.",
          "meaning": "舒服地",
          "door": 13,
          "examples": [
            {
              "en": "We can live comfortably with these inventions.",
              "zh": "有了这些发明，我们可以过得很舒服。"
            }
          ]
        },
        {
          "id": "u78-32",
          "no": null,
          "type": "phrase",
          "text": "on one's own",
          "phonetic": "/ɒn wʌnz əʊn/",
          "pos": "phr.",
          "meaning": "独立地；独自",
          "door": 10,
          "examples": [
            {
              "en": "He finished the project on his own.",
              "zh": "他独自完成了这个项目。"
            }
          ]
        },
        {
          "id": "u78-33",
          "no": null,
          "type": "phrase",
          "text": "allow somebody to do something",
          "phonetic": "/əˈlaʊ ˈsʌmbədi tuː duː ˈsʌmθɪŋ/",
          "pos": "phr.",
          "meaning": "允许某人做某事",
          "door": 10,
          "examples": [
            {
              "en": "My parents allow me to watch TV after homework.",
              "zh": "我父母允许我做完作业后看电视。"
            }
          ]
        },
        {
          "id": "u78-34",
          "no": null,
          "type": "phrase",
          "text": "be able to do",
          "phonetic": "/biː ˈeɪbl tuː duː/",
          "pos": "phr.",
          "meaning": "能够做某事",
          "door": 11,
          "examples": [
            {
              "en": "I am able to solve this problem.",
              "zh": "我能够解决这个问题。"
            }
          ]
        },
        {
          "id": "u78-35",
          "no": null,
          "type": "phrase",
          "text": "by itself / yourself / myself",
          "phonetic": "/baɪ ɪtˈself jɔːˈself maɪˈself/",
          "pos": "phr.",
          "meaning": "独自；靠自己",
          "door": 11,
          "examples": [
            {
              "en": "The robot can work by itself.",
              "zh": "这个机器人可以独自工作。"
            }
          ]
        },
        {
          "id": "u78-36",
          "no": null,
          "type": "word",
          "text": "since",
          "phonetic": "/sɪns/",
          "pos": "conj./prep.",
          "meaning": "自从；因为；既然",
          "door": 12,
          "examples": [
            {
              "en": "I have lived here since 2010.",
              "zh": "我从2010年起就住在这里。"
            },
            {
              "en": "Since you are here, let's start.",
              "zh": "既然你来了，我们就开始吧。"
            }
          ]
        },
        {
          "id": "u78-37",
          "no": null,
          "type": "phrase",
          "text": "it takes somebody (time) to do something",
          "phonetic": "/ɪt teɪks ˈsʌmbədi taɪm tuː duː ˈsʌmθɪŋ/",
          "pos": "phr.",
          "meaning": "做某事花费某人多长时间",
          "door": 13,
          "examples": [
            {
              "en": "It takes me 30 minutes to walk to school.",
              "zh": "我走路去学校要花30分钟。"
            }
          ]
        }
      ]
    },
    {
      "unitId": "u9u10-computers-green",
      "title": "U9 Using computers & U10 A greener life 词汇讲义",
      "sourceImages": [
        "The dictionary.docx"
      ],
      "unitNotes": "词汇讲义单元。收录U9和U10主词条+延伸词+短语搭配+例句+比较级语法。",
      "entries": [
        {
          "id": "u910-01",
          "no": 1,
          "type": "word",
          "text": "enemy",
          "phonetic": "/ˈenəmi/",
          "pos": "n.",
          "meaning": "敌人；危害物；大敌",
          "door": 14,
          "examples": [
            {
              "en": "Heat is a computer's enemy.",
              "zh": "高温是电脑的大敌。"
            }
          ],
          "phrases": [
            {
              "text": "make enemies",
              "meaning": "树敌"
            },
            {
              "text": "make friends",
              "meaning": "交朋友"
            }
          ],
          "extensions": [
            {
              "text": "enemies",
              "phonetic": "/ˈenəmiz/",
              "pos": "n.",
              "meaning": "敌人（复数）"
            }
          ]
        },
        {
          "id": "u910-02",
          "no": 2,
          "type": "word",
          "text": "laptop",
          "phonetic": "/ˈlæptɒp/",
          "pos": "n.",
          "meaning": "笔记本电脑；便携式电脑",
          "door": 14,
          "examples": [
            {
              "en": "A laptop should be used on a person's lap.",
              "zh": "笔记本电脑本就该放在人的腿上使用。"
            }
          ]
        },
        {
          "id": "u910-03",
          "no": 3,
          "type": "word",
          "text": "password",
          "phonetic": "/ˈpɑːswɜːd/",
          "pos": "n.",
          "meaning": "口令；密码",
          "door": 14,
          "examples": [
            {
              "en": "It's safe to use your birth date to create your password.",
              "zh": "用你的生日来创建密码是安全的。"
            }
          ],
          "phrases": [
            {
              "text": "set a password",
              "meaning": "设置密码"
            },
            {
              "text": "enter a password",
              "meaning": "输入密码"
            }
          ],
          "notes": "构词：pass n. 通行证 + word n. 单词"
        },
        {
          "id": "u910-04",
          "no": 4,
          "type": "word",
          "text": "click",
          "phonetic": "/klɪk/",
          "pos": "v.",
          "meaning": "点击；n. 咔哒声",
          "door": 14,
          "examples": [
            {
              "en": "I heard a click from the machine.",
              "zh": "我听到机器发出咔哒声。"
            }
          ],
          "phrases": [
            {
              "text": "double-click",
              "meaning": "双击"
            },
            {
              "text": "click and drag",
              "meaning": "点击并拖动"
            }
          ],
          "extensions": [
            {
              "text": "clickable",
              "phonetic": "/ˈklɪkəbl/",
              "pos": "adj.",
              "meaning": "可点击的"
            }
          ]
        },
        {
          "id": "u910-05",
          "no": 5,
          "type": "word",
          "text": "mouse",
          "phonetic": "/maʊs/",
          "pos": "n.",
          "meaning": "鼠标；老鼠（复数 mice）",
          "door": 14,
          "examples": [
            {
              "en": "Click the mouse.",
              "zh": "点击鼠标。"
            }
          ],
          "phrases": [
            {
              "text": "mouse pad",
              "meaning": "鼠标垫"
            }
          ],
          "extensions": [
            {
              "text": "mice",
              "phonetic": "/maɪs/",
              "pos": "n.",
              "meaning": "老鼠（复数）"
            }
          ]
        },
        {
          "id": "u910-06",
          "no": 6,
          "type": "word",
          "text": "store",
          "phonetic": "/stɔː(r)/",
          "pos": "v.",
          "meaning": "储存；存储（stored - stored）；n. 商店；仓库",
          "door": 14,
          "examples": [
            {
              "en": "People click the right mouse button to store information.",
              "zh": "人们点击鼠标右键来储存信息。"
            }
          ],
          "phrases": [
            {
              "text": "store up",
              "meaning": "积攒"
            }
          ],
          "extensions": [
            {
              "text": "storage",
              "phonetic": "/ˈstɔːrɪdʒ/",
              "pos": "n.",
              "meaning": "储存空间"
            },
            {
              "text": "storehouse",
              "phonetic": "/ˈstɔːhaʊs/",
              "pos": "n.",
              "meaning": "仓库"
            },
            {
              "text": "bookstore",
              "phonetic": "/ˈbʊkstɔː(r)/",
              "pos": "n.",
              "meaning": "书店"
            }
          ]
        },
        {
          "id": "u910-07",
          "no": 7,
          "type": "word",
          "text": "delete",
          "phonetic": "/dɪˈliːt/",
          "pos": "v.",
          "meaning": "删去；删除（deleted - deleted；deleting）",
          "door": 14,
          "examples": [
            {
              "en": "The file was deleted by mistake.",
              "zh": "这个文件被误删了。"
            }
          ],
          "extensions": [
            {
              "text": "deletion",
              "phonetic": "/dɪˈliːʃn/",
              "pos": "n.",
              "meaning": "删除"
            },
            {
              "text": "deletable",
              "phonetic": "/dɪˈliːtəbl/",
              "pos": "adj.",
              "meaning": "可删除的"
            }
          ]
        },
        {
          "id": "u910-08",
          "no": 8,
          "type": "word",
          "text": "Recycle Bin",
          "phonetic": "/ˌriːˈsaɪkl bɪn/",
          "pos": "n.",
          "meaning": "回收站（可数名词，常大写首字母）",
          "door": 14,
          "examples": [
            {
              "en": "When you delete a file, it usually moves to the computer's Recycle Bin.",
              "zh": "当你删除一个文件时，它通常会被移动到电脑的回收站。"
            },
            {
              "en": "Don't worry! You can restore the important files from the Recycle Bin.",
              "zh": "别担心！你可以从回收站恢复重要文件。"
            }
          ],
          "phrases": [
            {
              "text": "empty the Recycle Bin",
              "meaning": "清空回收站"
            }
          ],
          "extensions": [
            {
              "text": "recycle",
              "phonetic": "/ˌriːˈsaɪkl/",
              "pos": "v.",
              "meaning": "回收利用"
            },
            {
              "text": "recyclable",
              "phonetic": "/ˌriːˈsaɪkləbl/",
              "pos": "adj.",
              "meaning": "可回收的"
            }
          ]
        },
        {
          "id": "u910-09",
          "no": 9,
          "type": "word",
          "text": "best-known",
          "phonetic": "/ˌbest ˈnəʊn/",
          "pos": "adj.",
          "meaning": "最有名的；最著名的（well-known 的最高级）",
          "door": 15,
          "examples": [
            {
              "en": "It is ENIAC, the best-known early computer.",
              "zh": "这是埃尼阿克，最著名的早期电脑。"
            }
          ],
          "extensions": [
            {
              "text": "well-known",
              "phonetic": "/ˌwel ˈnəʊn/",
              "pos": "adj.",
              "meaning": "著名的"
            }
          ],
          "phrases": [
            {
              "text": "be well-known for...",
              "meaning": "因……而闻名"
            },
            {
              "text": "be well-known as...",
              "meaning": "作为……而闻名"
            }
          ]
        },
        {
          "id": "u910-10",
          "no": 10,
          "type": "word",
          "text": "keyboard",
          "phonetic": "/ˈkiːbɔːd/",
          "pos": "n.",
          "meaning": "键盘（可数名词）",
          "door": 15,
          "examples": [
            {
              "en": "I can type fast on the keyboard.",
              "zh": "我能在键盘上快速打字。"
            },
            {
              "en": "But it has no mouse or keyboard?",
              "zh": "但它没有鼠标和键盘吗？"
            }
          ],
          "notes": "构词：key n. 键；钥匙 + board n. 板"
        },
        {
          "id": "u910-11",
          "no": 11,
          "type": "word",
          "text": "microchip",
          "phonetic": "/ˈmaɪkrəʊtʃɪp/",
          "pos": "n.",
          "meaning": "微芯片；集成电路片",
          "door": 15,
          "examples": [
            {
              "en": "Microchips are very important to computers.",
              "zh": "微芯片对电脑来说极其重要。"
            },
            {
              "en": "This new phone has a powerful microchip.",
              "zh": "这款新手机搭载了强劲的芯片。"
            }
          ],
          "notes": "构词：micro 前缀'微小的' + chip n. 芯片"
        },
        {
          "id": "u910-12",
          "no": 12,
          "type": "phrase",
          "text": "a grain of salt",
          "phonetic": "/ə ɡreɪn ɒv sɔːlt/",
          "pos": "phr.",
          "meaning": "一粒盐；持保留态度（习语）",
          "door": 15,
          "examples": [
            {
              "en": "They were as small as a grain of salt.",
              "zh": "它们和一粒盐一样微小。"
            },
            {
              "en": "You should take his advice with a grain of salt.",
              "zh": "你对他的建议应该持保留态度。"
            }
          ],
          "phrases": [
            {
              "text": "take sth. a grain of salt",
              "meaning": "对某事持保留态度（引申义）"
            }
          ],
          "extensions": [
            {
              "text": "grain",
              "phonetic": "/ɡreɪn/",
              "pos": "n.",
              "meaning": "颗粒"
            },
            {
              "text": "salt",
              "phonetic": "/sɔːlt/",
              "pos": "n.",
              "meaning": "盐"
            }
          ]
        },
        {
          "id": "u910-13",
          "no": 13,
          "type": "word",
          "text": "email",
          "phonetic": "/ˈiːmeɪl/",
          "pos": "n.",
          "meaning": "电子邮件（也可拼写为 e-mail）；v. 给……发邮件",
          "door": 15,
          "examples": [
            {
              "en": "I send an email to my friend every day.",
              "zh": "我每天给我的朋友发一封电子邮件。"
            },
            {
              "en": "We send emails to search for info.",
              "zh": "我们发邮件、查资料。"
            }
          ],
          "phrases": [
            {
              "text": "check email",
              "meaning": "查看邮件"
            },
            {
              "text": "an email address",
              "meaning": "电子邮件地址"
            },
            {
              "text": "email sb.",
              "meaning": "给某人发邮件"
            }
          ],
          "extensions": [
            {
              "text": "e-mail",
              "phonetic": "/ˈiː meɪl/",
              "pos": "n.",
              "meaning": "电子邮件（同 email）"
            }
          ]
        },
        {
          "id": "u910-14",
          "no": 14,
          "type": "phrase",
          "text": "search for information",
          "phonetic": "/sɜːtʃ fɔː(r) ˌɪnfəˈmeɪʃn/",
          "pos": "phr.",
          "meaning": "搜索信息",
          "door": 15,
          "examples": [
            {
              "en": "My classmates and I can send emails, search for information and do our homework better.",
              "zh": "我和同学们可以发邮件、搜索信息，更好地完成作业。"
            }
          ],
          "extensions": [
            {
              "text": "search",
              "phonetic": "/sɜːtʃ/",
              "pos": "v.",
              "meaning": "搜索"
            },
            {
              "text": "information",
              "phonetic": "/ˌɪnfəˈmeɪʃn/",
              "pos": "n.",
              "meaning": "信息（U）"
            }
          ],
          "phrases": [
            {
              "text": "search for answers",
              "meaning": "寻找答案"
            },
            {
              "text": "a piece of information",
              "meaning": "一条信息"
            }
          ]
        },
        {
          "id": "u910-15",
          "no": 15,
          "type": "word",
          "text": "symbol",
          "phonetic": "/ˈsɪmbl/",
          "pos": "n.",
          "meaning": "符号；象征",
          "door": 15,
          "examples": [
            {
              "en": "The dove is a symbol of peace.",
              "zh": "鸽子是和平的象征。"
            },
            {
              "en": "You can set a password by using eight different letters, numbers and symbols.",
              "zh": "你可以使用八个不同的字母、数字和符号来设置密码。"
            }
          ],
          "phrases": [
            {
              "text": "symbolic meaning",
              "meaning": "象征意义"
            }
          ],
          "extensions": [
            {
              "text": "symbolic",
              "phonetic": "/sɪmˈbɒlɪk/",
              "pos": "adj.",
              "meaning": "象征的；符号的"
            },
            {
              "text": "symbolism",
              "phonetic": "/ˈsɪmbəlɪzəm/",
              "pos": "n.",
              "meaning": "象征主义"
            }
          ]
        },
        {
          "id": "u910-16",
          "no": 16,
          "type": "word",
          "text": "desktop",
          "phonetic": "/ˈdesktɒp/",
          "pos": "n.",
          "meaning": "桌面；台式电脑",
          "door": 15,
          "examples": [
            {
              "en": "There are many icons on the desktop.",
              "zh": "电脑桌面上有很多软件图标。"
            },
            {
              "en": "Luckily, the desktop comes back.",
              "zh": "幸运的是，电脑桌面恢复正常了。"
            }
          ],
          "notes": "构词：desk n. 书桌 + top n. 上面（合成词）"
        },
        {
          "id": "u910-17",
          "no": 17,
          "type": "word",
          "text": "reuse",
          "phonetic": "/ˌriːˈjuːz/",
          "pos": "v.",
          "meaning": "再次使用；重复利用（reused - reused；reusing）",
          "door": 16,
          "examples": [
            {
              "en": "Do not throw the old toys away. Give them to little kids to play with. It's a great way to reuse.",
              "zh": "不要扔掉旧玩具，把它们送给小朋友继续玩耍，这是一种非常好的重复利用方式。"
            }
          ],
          "phrases": [
            {
              "text": "reuse water",
              "meaning": "重复利用水"
            },
            {
              "text": "reuse paper",
              "meaning": "重复利用纸张"
            }
          ],
          "extensions": [
            {
              "text": "reusable",
              "phonetic": "/ˌriːˈjuːzəbl/",
              "pos": "adj.",
              "meaning": "可重复使用的"
            }
          ]
        },
        {
          "id": "u910-18",
          "no": 18,
          "type": "word",
          "text": "recycle",
          "phonetic": "/ˌriːˈsaɪkl/",
          "pos": "v.",
          "meaning": "回收利用；循环利用（recycled - recycled）",
          "door": 16,
          "examples": [
            {
              "en": "We should recycle paper and plastic.",
              "zh": "我们应该回收利用纸张和塑料。"
            },
            {
              "en": "Do not use a plastic bag day after day... It's a great way to recycle.",
              "zh": "不要天天用塑料袋，这是践行回收利用的绝佳方式。"
            }
          ],
          "phrases": [
            {
              "text": "waste recycling",
              "meaning": "废物回收"
            },
            {
              "text": "recyclable bottles",
              "meaning": "可回收瓶子"
            }
          ],
          "extensions": [
            {
              "text": "recycling",
              "phonetic": "/ˌriːˈsaɪklɪŋ/",
              "pos": "n.",
              "meaning": "回收利用"
            },
            {
              "text": "recyclable",
              "phonetic": "/ˌriːˈsaɪkləbl/",
              "pos": "adj.",
              "meaning": "可回收的"
            }
          ]
        },
        {
          "id": "u910-19",
          "no": 19,
          "type": "phrase",
          "text": "throw away",
          "phonetic": "/θrəʊ əˈweɪ/",
          "pos": "phr.",
          "meaning": "扔掉；丢弃",
          "door": 16,
          "examples": [
            {
              "en": "throw away old books",
              "zh": "扔掉旧书"
            },
            {
              "en": "Do not throw the old toys away.",
              "zh": "不要扔掉旧玩具。"
            }
          ],
          "phrases": [
            {
              "text": "throw it away",
              "meaning": "把它扔掉"
            }
          ]
        },
        {
          "id": "u910-20",
          "no": 20,
          "type": "word",
          "text": "plastic",
          "phonetic": "/ˈplæstɪk/",
          "pos": "n.",
          "meaning": "塑料（U）；adj. 塑料制的",
          "door": 16,
          "examples": [
            {
              "en": "Baggie is a plastic bag.",
              "zh": "巴吉是一个塑料袋。"
            }
          ],
          "phrases": [
            {
              "text": "reuse plastic",
              "meaning": "可重复使用的塑料"
            },
            {
              "text": "a plastic bottle",
              "meaning": "一个塑料瓶"
            }
          ],
          "extensions": [
            {
              "text": "reuse",
              "phonetic": "/ˌriːˈjuːz/",
              "pos": "v.",
              "meaning": "再次使用"
            }
          ]
        },
        {
          "id": "u910-21",
          "no": 21,
          "type": "word",
          "text": "cloth",
          "phonetic": "/klɒθ/",
          "pos": "n.",
          "meaning": "布；布料（U）",
          "door": 16,
          "examples": [
            {
              "en": "A cloth bag or a paper one is also okay.",
              "zh": "布袋或纸袋也可以的。"
            }
          ],
          "phrases": [
            {
              "text": "a piece of cloth",
              "meaning": "一块布"
            }
          ],
          "extensions": [
            {
              "text": "clothes",
              "phonetic": "/kləʊðz/",
              "pos": "n.",
              "meaning": "衣服（复数，具体衣物）"
            },
            {
              "text": "clothing",
              "phonetic": "/ˈkləʊðɪŋ/",
              "pos": "n.",
              "meaning": "服装总称"
            }
          ]
        },
        {
          "id": "u910-22",
          "no": 22,
          "type": "phrase",
          "text": "turn off",
          "phonetic": "/tɜːn ɒf/",
          "pos": "phr.",
          "meaning": "掉；关闭",
          "door": 16,
          "examples": [
            {
              "en": "Turn off the lights when you leave the room.",
              "zh": "离开房间时关灯。"
            }
          ],
          "phrases": [
            {
              "text": "turn on",
              "meaning": "打开（反义短语）"
            }
          ]
        },
        {
          "id": "u910-23",
          "no": 23,
          "type": "word",
          "text": "tap",
          "phonetic": "/tæp/",
          "pos": "n.",
          "meaning": "水龙头；v. 轻敲；轻拍（tapped - tapped；tapping）",
          "door": 16,
          "examples": [
            {
              "en": "I turn off the tap when I brush my teeth.",
              "zh": "我刷牙的时候关掉水龙头。"
            }
          ],
          "phrases": [
            {
              "text": "tap at/on the door",
              "meaning": "轻敲门"
            },
            {
              "text": "tap someone on the shoulder",
              "meaning": "轻拍某人的肩膀"
            }
          ]
        },
        {
          "id": "u910-24",
          "no": 24,
          "type": "word",
          "text": "wood",
          "phonetic": "/wʊd/",
          "pos": "n.",
          "meaning": "木头；木材（U）",
          "door": 16,
          "examples": [
            {
              "en": "You see, paper is made from wood.",
              "zh": "你看，纸是用木头做的。"
            }
          ],
          "phrases": [
            {
              "text": "a piece of wood",
              "meaning": "一块木头"
            }
          ],
          "extensions": [
            {
              "text": "wooden",
              "phonetic": "/ˈwʊdn/",
              "pos": "adj.",
              "meaning": "木制的；木头的"
            },
            {
              "text": "woods",
              "phonetic": "/wʊdz/",
              "pos": "n.",
              "meaning": "树林/森林"
            }
          ],
          "notes": "易混辨析：wood（木材）→ woods（树林/森林）in the woods 在树林里"
        },
        {
          "id": "u910-25",
          "no": 25,
          "type": "word",
          "text": "unplug",
          "phonetic": "/ˌʌnˈplʌɡ/",
          "pos": "v.",
          "meaning": "拔掉……电源插头（unplugged - unplugged）",
          "door": 16,
          "examples": [
            {
              "en": "I remind my mum to unplug the TV from the wall.",
              "zh": "我提醒妈妈把电视从墙上的插座拔掉。"
            }
          ],
          "phrases": [
            {
              "text": "unplug the charger",
              "meaning": "拔掉充电器"
            }
          ],
          "extensions": [
            {
              "text": "plug",
              "phonetic": "/plʌɡ/",
              "pos": "v.",
              "meaning": "插上插头；n. 插头"
            },
            {
              "text": "unplugged",
              "phonetic": "/ˌʌnˈplʌɡd/",
              "pos": "adj.",
              "meaning": "不插电的（音乐）"
            }
          ]
        },
        {
          "id": "u910-26",
          "no": 26,
          "type": "word",
          "text": "pollution",
          "phonetic": "/pəˈluːʃn/",
          "pos": "n.",
          "meaning": "污染（不可数名词）",
          "door": 17,
          "examples": [
            {
              "en": "It is a good way to reduce air pollution.",
              "zh": "这是减少空气污染的好方法。"
            }
          ],
          "phrases": [
            {
              "text": "water pollution",
              "meaning": "水污染"
            },
            {
              "text": "reduce pollution",
              "meaning": "减少污染"
            },
            {
              "text": "noise pollution",
              "meaning": "噪音污染"
            },
            {
              "text": "pollute the environment",
              "meaning": "污染环境"
            },
            {
              "text": "polluted water",
              "meaning": "被污染的水"
            }
          ],
          "extensions": [
            {
              "text": "pollute",
              "phonetic": "/pəˈluːt/",
              "pos": "v.",
              "meaning": "污染"
            },
            {
              "text": "polluted",
              "phonetic": "/pəˈluːtɪd/",
              "pos": "adj.",
              "meaning": "被污染的"
            },
            {
              "text": "pollutant",
              "phonetic": "/pəˈluːtənt/",
              "pos": "n.",
              "meaning": "污染物"
            }
          ]
        },
        {
          "id": "u910-27",
          "no": 27,
          "type": "phrase",
          "text": "swim by",
          "phonetic": "/swɪm baɪ/",
          "pos": "phr.",
          "meaning": "游过；从旁边游过",
          "door": 17,
          "examples": [
            {
              "en": "A big whale swims by...",
              "zh": "一头大鲸鱼游了过来……"
            }
          ],
          "extensions": [
            {
              "text": "swim",
              "phonetic": "/swɪm/",
              "pos": "v.",
              "meaning": "游泳（swam - swum）"
            },
            {
              "text": "by",
              "phonetic": "/baɪ/",
              "pos": "prep./adv.",
              "meaning": "经过"
            }
          ]
        },
        {
          "id": "u910-28",
          "no": 28,
          "type": "word",
          "text": "swallow",
          "phonetic": "/ˈswɒləʊ/",
          "pos": "v.",
          "meaning": "吞下；咽下；n. 燕子",
          "door": 17,
          "examples": [
            {
              "en": "He swallowed the medicine with water.",
              "zh": "他用水把药片咽了下去。"
            },
            {
              "en": "...a sea turtle spots Baggie and swallows it.",
              "zh": "一只海龟发现了巴吉，把它吞了下去。"
            },
            {
              "en": "The waves swallowed up the small boat.",
              "zh": "海浪吞没了小船。"
            }
          ]
        },
        {
          "id": "u910-29",
          "no": 29,
          "type": "phrase",
          "text": "lie around",
          "phonetic": "/laɪ əˈraʊnd/",
          "pos": "phr.",
          "meaning": "到处乱放；乱扔",
          "door": 17,
          "examples": [
            {
              "en": "Plastic bags should not lie around.",
              "zh": "塑料袋不应该到处乱扔。"
            }
          ],
          "extensions": [
            {
              "text": "lie",
              "phonetic": "/laɪ/",
              "pos": "v.",
              "meaning": "躺/位于（lay - lain；lying）"
            },
            {
              "text": "around",
              "phonetic": "/əˈraʊnd/",
              "pos": "adv.",
              "meaning": "到处"
            }
          ]
        },
        {
          "id": "u910-30",
          "no": 30,
          "type": "phrase",
          "text": "pick up",
          "phonetic": "/pɪk ʌp/",
          "pos": "phr.",
          "meaning": "拿起；捡起",
          "door": 17,
          "examples": [
            {
              "en": "Pick up the rubbish and throw it into the bin.",
              "zh": "把垃圾捡起来扔进垃圾桶。"
            },
            {
              "en": "He picks Baggie up and makes it into a kite.",
              "zh": "他捡起巴吉，把它做成了一个风筝。"
            }
          ],
          "phrases": [
            {
              "text": "pick up a skill",
              "meaning": "学会一项技能"
            },
            {
              "text": "pick up children from school",
              "meaning": "从学校接孩子"
            },
            {
              "text": "pick up a language",
              "meaning": "学会一门语言"
            }
          ],
          "notes": "pick up 也可表示'接人/学得'"
        },
        {
          "id": "u910-31",
          "no": 31,
          "type": "phrase",
          "text": "small → smaller → smallest",
          "phonetic": "/smɔːl ˈsmɔːlə ˈsmɔːlɪst/",
          "pos": "比较级",
          "meaning": "小 → 更小 → 最小（单音节，直接加-er/-est）",
          "door": 14
        },
        {
          "id": "u910-32",
          "no": 32,
          "type": "phrase",
          "text": "strong → stronger → strongest",
          "phonetic": "/strɒŋ ˈstrɒŋɡə ˈstrɒŋɡɪst/",
          "pos": "比较级",
          "meaning": "强壮 → 更强壮 → 最强壮（单音节，直接加-er/-est）",
          "door": 14
        },
        {
          "id": "u910-33",
          "no": 33,
          "type": "phrase",
          "text": "nice → nicer → nicest",
          "phonetic": "/naɪs ˈnaɪsə ˈnaɪsɪst/",
          "pos": "比较级",
          "meaning": "美好 → 更美好 → 最美好（以-e结尾，加-r/-st）",
          "door": 14
        },
        {
          "id": "u910-34",
          "no": 34,
          "type": "phrase",
          "text": "late → later → latest",
          "phonetic": "/leɪt ˈleɪtə ˈleɪtɪst/",
          "pos": "比较级",
          "meaning": "晚 → 更晚 → 最晚（以-e结尾，加-r/-st）",
          "door": 14
        },
        {
          "id": "u910-35",
          "no": 35,
          "type": "phrase",
          "text": "heavy → heavier → heaviest",
          "phonetic": "/ˈhevi ˈheviə ˈheviɪst/",
          "pos": "比较级",
          "meaning": "重 → 更重 → 最重（辅音+y结尾，变y为i加-er/-est）",
          "door": 14
        },
        {
          "id": "u910-36",
          "no": 36,
          "type": "phrase",
          "text": "easy → easier → easiest",
          "phonetic": "/ˈiːzi ˈiːziə ˈiːziɪst/",
          "pos": "比较级",
          "meaning": "容易 → 更容易 → 最容易（辅音+y结尾，变y为i加-er/-est）",
          "door": 15
        },
        {
          "id": "u910-37",
          "no": 37,
          "type": "phrase",
          "text": "big → bigger → biggest",
          "phonetic": "/bɪɡ ˈbɪɡə ˈbɪɡɪst/",
          "pos": "比较级",
          "meaning": "大 → 更大 → 最大（重读闭音节，双写尾字母加-er/-est）",
          "door": 15
        },
        {
          "id": "u910-38",
          "no": 38,
          "type": "phrase",
          "text": "hot → hotter → hottest",
          "phonetic": "/hɒt ˈhɒtə ˈhɒtɪst/",
          "pos": "比较级",
          "meaning": "热 → 更热 → 最热（重读闭音节，双写尾字母加-er/-est）",
          "door": 15
        },
        {
          "id": "u910-39",
          "no": 39,
          "type": "phrase",
          "text": "fat → fatter → fattest",
          "phonetic": "/fæt ˈfætə ˈfætɪst/",
          "pos": "比较级",
          "meaning": "胖 → 更胖 → 最胖（重读闭音节，双写尾字母加-er/-est）",
          "door": 15
        },
        {
          "id": "u910-40",
          "no": 40,
          "type": "phrase",
          "text": "red → redder → reddest",
          "phonetic": "/red ˈredə ˈredɪst/",
          "pos": "比较级",
          "meaning": "红 → 更红 → 最红（重读闭音节，双写尾字母加-er/-est）",
          "door": 15
        },
        {
          "id": "u910-41",
          "no": 41,
          "type": "phrase",
          "text": "thin → thinner → thinnest",
          "phonetic": "/θɪn ˈθɪnə ˈθɪnɪst/",
          "pos": "比较级",
          "meaning": "瘦 → 更瘦 → 最瘦（重读闭音节，双写尾字母加-er/-est）",
          "door": 16
        },
        {
          "id": "u910-42",
          "no": 42,
          "type": "phrase",
          "text": "important → more important → most important",
          "phonetic": "/ɪmˈpɔːtnt mɔːr ɪmˈpɔːtnt məʊst ɪmˈpɔːtnt/",
          "pos": "比较级",
          "meaning": "重要 → 更重要 → 最重要（多音节，加more/most）",
          "door": 16
        },
        {
          "id": "u910-43",
          "no": 43,
          "type": "phrase",
          "text": "strongly → more strongly → most strongly",
          "phonetic": "/ˈstrɒŋli mɔːr ˈstrɒŋli məʊst ˈstrɒŋli/",
          "pos": "比较级",
          "meaning": "强烈地 → 更强烈地 → 最强烈地（副词，加more/most）",
          "door": 16
        },
        {
          "id": "u910-44",
          "no": 44,
          "type": "phrase",
          "text": "carefully → more carefully → most carefully",
          "phonetic": "/ˈkeəfəli mɔːr ˈkeəfəli məʊst ˈkeəfəli/",
          "pos": "比较级",
          "meaning": "仔细地 → 更仔细地 → 最仔细地（副词，加more/most）",
          "door": 16
        },
        {
          "id": "u910-45",
          "no": 45,
          "type": "phrase",
          "text": "good / well → better → best",
          "phonetic": "/ɡʊd wel ˈbetə best/",
          "pos": "比较级",
          "meaning": "好 → 更好 → 最好（不规则变化）",
          "door": 16
        },
        {
          "id": "u910-46",
          "no": 46,
          "type": "phrase",
          "text": "many / much → more → most",
          "phonetic": "/ˈmeni mʌtʃ mɔː(r) məʊst/",
          "pos": "比较级",
          "meaning": "多 → 更多 → 最多（不规则变化）",
          "door": 17
        },
        {
          "id": "u910-47",
          "no": 47,
          "type": "phrase",
          "text": "bad / badly / ill → worse → worst",
          "phonetic": "/bæd ˈbædli ɪl wɜːs wɜːst/",
          "pos": "比较级",
          "meaning": "坏 → 更坏 → 最坏（不规则变化）",
          "door": 17
        },
        {
          "id": "u910-48",
          "no": 48,
          "type": "phrase",
          "text": "little → less → least",
          "phonetic": "/ˈlɪtl les liːst/",
          "pos": "比较级",
          "meaning": "少 → 更少 → 最少（不规则变化）",
          "door": 17
        },
        {
          "id": "u910-49",
          "no": 49,
          "type": "phrase",
          "text": "far → further → furthest",
          "phonetic": "/fɑː(r) ˈfɜːðə ˈfɜːðɪst/",
          "pos": "比较级",
          "meaning": "远 → 更远 → 最远（不规则变化，表程度）",
          "door": 17
        },
        {
          "id": "u910-50",
          "no": 50,
          "type": "phrase",
          "text": "old → older / elder → oldest / eldest",
          "phonetic": "/əʊld ˈəʊldə ˈeldə ˈəʊldɪst ˈeldɪst/",
          "pos": "比较级",
          "meaning": "老 → 更老/年长 → 最老/最年长（older/oldest表年龄；elder/eldest表长幼）",
          "door": 17
        }
      ]
    },
    {
      "unitId": "u01-school-life",
      "title": "U1 School life 词汇讲义",
      "sourceImages": [],
      "pageMap": {},
      "missingPages": "",
      "dictationExtra": [],
      "entries": [
        {
          "id": "u01-01",
          "no": 1,
          "type": "word",
          "text": "life",
          "phonetic": "/laɪf/",
          "pos": "n.",
          "meaning": "生活；生命",
          "door": 18,
          "phrases": [
            {
              "text": "life and death",
              "meaning": "生与死"
            },
            {
              "text": "lose one's life",
              "meaning": "丧生"
            },
            {
              "text": "save one's life",
              "meaning": "挽救生命"
            },
            {
              "text": "country/city life",
              "meaning": "乡村/城市生活"
            },
            {
              "text": "an easy/a hard life",
              "meaning": "轻松的/艰难的生活"
            },
            {
              "text": "live on sth.",
              "meaning": "靠…为生"
            },
            {
              "text": "live a peaceful life",
              "meaning": "过着平静的生活"
            }
          ],
          "examples": [
            {
              "en": "What a colorful school life!",
              "zh": "多么丰富多彩的校园生活啊！"
            },
            {
              "en": "In spring the countryside bursts into life.",
              "zh": "春天，乡村焕发生机。"
            }
          ],
          "extensions": [
            {
              "text": "live",
              "pos": "v.",
              "meaning": "生活；居住 (lived-lived-living)",
              "phrases": [
                {
                  "text": "live on sth.",
                  "meaning": "靠…为生"
                }
              ]
            },
            {
              "text": "living",
              "pos": "adj.",
              "meaning": "活着的",
              "phrases": [
                {
                  "text": "all living things",
                  "meaning": "所有生物"
                }
              ]
            },
            {
              "text": "alive",
              "pos": "adj.",
              "meaning": "活着的（不用于名词前）"
            }
          ],
          "notes": "pl. lives；live adj. 现场直播的"
        },
        {
          "id": "u01-02",
          "no": 2,
          "type": "word",
          "text": "break",
          "phonetic": "/breɪk/",
          "pos": "n. 课间休息；v. 打破",
          "meaning": "课间休息；打破",
          "door": 18,
          "phrases": [
            {
              "text": "have/take a break",
              "meaning": "休息一下"
            },
            {
              "text": "at break",
              "meaning": "在课间"
            },
            {
              "text": "break down",
              "meaning": "出故障；分解"
            },
            {
              "text": "break into",
              "meaning": "闯入"
            }
          ],
          "examples": [
            {
              "en": "He denied breaking the vase.",
              "zh": "他否认打破了花瓶。"
            }
          ],
          "notes": "变位: broke-broken；deny doing sth. 否认做了某事"
        },
        {
          "id": "u01-03",
          "no": 3,
          "type": "word",
          "text": "history",
          "phonetic": "/ˈhɪstri/",
          "pos": "n.",
          "meaning": "历史；历史学",
          "door": 18,
          "examples": [
            {
              "en": "Miss Li is a history teacher.",
              "zh": "李老师是一位历史老师。"
            },
            {
              "en": "The book is based on historical events.",
              "zh": "这本书基于历史事件。"
            }
          ],
          "extensions": [
            {
              "text": "historical",
              "pos": "adj.",
              "meaning": "历史的"
            }
          ]
        },
        {
          "id": "u01-04",
          "no": 4,
          "type": "word",
          "text": "French",
          "phonetic": "/frentʃ/",
          "pos": "n. 法语；adj. 法国的",
          "meaning": "法语；法国的",
          "door": 18,
          "examples": [
            {
              "en": "Can you speak French?",
              "zh": "你会说法语吗？"
            },
            {
              "en": "French cars are not very popular in our city.",
              "zh": "法国车在我们城市不太受欢迎。"
            }
          ],
          "extensions": [
            {
              "text": "France",
              "phonetic": "/frɑːns/",
              "pos": "n.",
              "meaning": "法国"
            },
            {
              "text": "Frenchman",
              "pos": "n.",
              "meaning": "法国人（复数 Frenchmen）"
            }
          ]
        },
        {
          "id": "u01-05",
          "no": 5,
          "type": "word",
          "text": "more",
          "phonetic": "",
          "pos": "adj. 更多的；adv. 再；更",
          "meaning": "更多的；再；更",
          "door": 18,
          "examples": [
            {
              "en": "We have a lot more work to do.",
              "zh": "我们还有很多工作要做。"
            },
            {
              "en": "I only got three cards, I need more.",
              "zh": "我只拿到三张卡片，我还需要更多。"
            }
          ]
        },
        {
          "id": "u01-06",
          "no": 6,
          "type": "word",
          "text": "instruction",
          "phonetic": "/ɪnˈstrʌkʃn/",
          "pos": "n.",
          "meaning": "指示；命令；操作说明",
          "door": 18,
          "examples": [
            {
              "en": "I think you should listen to teachers' instructions.",
              "zh": "我认为你应该听从老师的指示。"
            },
            {
              "en": "Follow the instructions on the packet carefully.",
              "zh": "仔细按照包装上的说明操作。"
            }
          ]
        },
        {
          "id": "u01-07",
          "no": 7,
          "type": "word",
          "text": "experiment",
          "phonetic": "/ɪkˈsperɪmənt/",
          "pos": "n.",
          "meaning": "实验；试验",
          "door": 18,
          "phrases": [
            {
              "text": "do/conduct/perform an experiment",
              "meaning": "做实验"
            }
          ],
          "examples": [
            {
              "en": "We should stop experiments on animals.",
              "zh": "我们应该停止在动物身上做实验。"
            }
          ],
          "extensions": [
            {
              "text": "experimental",
              "pos": "adj.",
              "meaning": "实验性的"
            }
          ]
        },
        {
          "id": "u01-08",
          "no": 8,
          "type": "word",
          "text": "activity",
          "phonetic": "/ækˈtɪvəti/",
          "pos": "n. (pl. activities)",
          "meaning": "活动",
          "door": 18,
          "examples": [
            {
              "en": "Do you like indoor activities or outdoor activities?",
              "zh": "你喜欢室内活动还是户外活动？"
            }
          ],
          "extensions": [
            {
              "text": "act",
              "pos": "v.",
              "meaning": "行动",
              "phrases": [
                {
                  "text": "actor/actress",
                  "meaning": "男演员/女演员"
                }
              ]
            },
            {
              "text": "action",
              "pos": "n.",
              "meaning": "行动",
              "phrases": [
                {
                  "text": "take action",
                  "meaning": "采取行动"
                }
              ]
            },
            {
              "text": "active",
              "pos": "adj.",
              "meaning": "积极的",
              "phrases": [
                {
                  "text": "take an active part in",
                  "meaning": "积极参加"
                }
              ]
            }
          ]
        },
        {
          "id": "u01-09",
          "no": 9,
          "type": "word",
          "text": "club",
          "phonetic": "/klʌb/",
          "pos": "n.",
          "meaning": "俱乐部",
          "door": 18,
          "phrases": [
            {
              "text": "a tennis club",
              "meaning": "网球俱乐部"
            },
            {
              "text": "a health club",
              "meaning": "健身俱乐部"
            },
            {
              "text": "an English club",
              "meaning": "英语俱乐部"
            },
            {
              "text": "join a club",
              "meaning": "加入俱乐部"
            },
            {
              "text": "join the Party/army",
              "meaning": "入党/参军"
            },
            {
              "text": "join in + 活动 = take part in",
              "meaning": "参加活动"
            }
          ]
        },
        {
          "id": "u01-10",
          "no": 10,
          "type": "word",
          "text": "calligraphy",
          "phonetic": "/kəˈlɪɡrəfi/",
          "pos": "n.",
          "meaning": "书法",
          "door": 19,
          "extensions": [
            {
              "text": "calligrapher",
              "pos": "n.",
              "meaning": "书法家"
            }
          ]
        },
        {
          "id": "u01-11",
          "no": 11,
          "type": "word",
          "text": "technology",
          "phonetic": "/tekˈnɒlədʒi/",
          "pos": "n.",
          "meaning": "科技",
          "door": 19,
          "examples": [
            {
              "en": "Being an information technology worker is not an easy job.",
              "zh": "做一名信息技术工作者不是一件容易的事。"
            }
          ],
          "extensions": [
            {
              "text": "technological",
              "pos": "adj.",
              "meaning": "技术上的"
            }
          ]
        },
        {
          "id": "u01-12",
          "no": 12,
          "type": "word",
          "text": "everyone",
          "phonetic": "",
          "pos": "pron.",
          "meaning": "每个人 (= everybody)",
          "door": 19,
          "examples": [
            {
              "en": "Everyone/Everybody has a chance to win.",
              "zh": "每个人都有机会获胜。"
            }
          ],
          "notes": "everyone(代词,只指人) vs every one(短语,可指人或物,后常接of)"
        },
        {
          "id": "u01-13",
          "no": 13,
          "type": "word",
          "text": "lab",
          "phonetic": "/læb/",
          "pos": "n. (= laboratory /ləˈbɒrətri/)",
          "meaning": "实验室",
          "door": 19,
          "examples": [
            {
              "en": "Simon is doing experiments in a science lab.",
              "zh": "西蒙正在科学实验室里做实验。"
            }
          ]
        },
        {
          "id": "u01-14",
          "no": 14,
          "type": "word",
          "text": "field",
          "phonetic": "/fiːld/",
          "pos": "n.",
          "meaning": "场地；田地",
          "door": 19,
          "examples": [
            {
              "en": "Everyone goes to the sports field during the break.",
              "zh": "课间休息时大家都去了运动场。"
            }
          ]
        },
        {
          "id": "u01-15",
          "no": 15,
          "type": "word",
          "text": "grade",
          "phonetic": "/ɡreɪd/",
          "pos": "n.",
          "meaning": "年级",
          "door": 19,
          "examples": [
            {
              "en": "Which grade are you in? I'm in Grade 6.",
              "zh": "你在几年级？我在六年级。"
            }
          ],
          "notes": "英语表示\"六年级一班\"要将\"班\"置于\"年级\"前: Class 9 Grade 6"
        },
        {
          "id": "u01-16",
          "no": 16,
          "type": "word",
          "text": "excuse",
          "phonetic": "/ɪkˈskjuːz/",
          "pos": "v. 原谅；n. 借口",
          "meaning": "原谅；借口",
          "door": 19,
          "phrases": [
            {
              "text": "make excuses for sb.",
              "meaning": "为某人找借口"
            }
          ],
          "examples": [
            {
              "en": "Please excuse me for being so late.",
              "zh": "请原谅我迟到了这么久。"
            },
            {
              "en": "Excuse me, is this the way to the station?",
              "zh": "打扰一下，这是去车站的路吗？"
            }
          ]
        },
        {
          "id": "u01-17",
          "no": 17,
          "type": "word",
          "text": "project",
          "phonetic": "/ˈprɒdʒekt/",
          "pos": "n.",
          "meaning": "习作项目",
          "door": 19,
          "phrases": [
            {
              "text": "set up a project",
              "meaning": "设立一个项目"
            }
          ],
          "extensions": [
            {
              "text": "projector",
              "phonetic": "/prəˈdʒektə/",
              "pos": "n.",
              "meaning": "投影仪"
            }
          ]
        },
        {
          "id": "u01-18",
          "no": 18,
          "type": "phrase",
          "text": "of course",
          "phonetic": "",
          "pos": "短语",
          "meaning": "当然",
          "door": 19,
          "notes": "回答 Do you mind my doing sth.? 要用 of course not"
        },
        {
          "id": "u01-19",
          "no": 19,
          "type": "word",
          "text": "start",
          "phonetic": "/stɑːt/",
          "pos": "v.",
          "meaning": "开始",
          "door": 20,
          "phrases": [
            {
              "text": "start to do / start doing",
              "meaning": "开始做某事"
            }
          ],
          "examples": [
            {
              "en": "Shall we start the meeting now?",
              "zh": "我们现在开始开会好吗？"
            }
          ]
        },
        {
          "id": "u01-20",
          "no": 20,
          "type": "word",
          "text": "topic",
          "phonetic": "/ˈtɒpɪk/",
          "pos": "n.",
          "meaning": "话题；主题",
          "door": 20,
          "examples": [
            {
              "en": "Today, we are going to talk about the topic \"School life\".",
              "zh": "今天，我们要讨论的话题是\"校园生活\"。"
            }
          ]
        },
        {
          "id": "u01-21",
          "no": 21,
          "type": "word",
          "text": "online",
          "phonetic": "/ˌɒnˈlaɪn/",
          "pos": "adj. 在线的；adv. 在线",
          "meaning": "在线的；在线",
          "door": 20,
          "examples": [
            {
              "en": "Online shopping is easy and cheap.",
              "zh": "网购既方便又便宜。"
            },
            {
              "en": "It is easy and cheap to shop online.",
              "zh": "在网上购物既方便又便宜。"
            }
          ]
        },
        {
          "id": "u01-22",
          "no": 22,
          "type": "word",
          "text": "receive",
          "phonetic": "/rɪˈsiːv/",
          "pos": "v.",
          "meaning": "接到；收到",
          "door": 20,
          "phrases": [
            {
              "text": "receive one's letter",
              "meaning": "收到某人的来信 (= hear from)"
            }
          ],
          "examples": [
            {
              "en": "I received my aunt's letter the other day.",
              "zh": "前几天我收到了我姑姑的来信。"
            }
          ]
        },
        {
          "id": "u01-23",
          "no": 23,
          "type": "word",
          "text": "reply",
          "phonetic": "/rɪˈplaɪ/",
          "pos": "v. & n.",
          "meaning": "回答；答复 (replied-replied-replying)",
          "door": 20,
          "examples": [
            {
              "en": "Tom will receive my reply soon.",
              "zh": "汤姆很快就会收到我的回复。"
            },
            {
              "en": "He never replied to the letters.",
              "zh": "他从不回复信件。"
            }
          ]
        },
        {
          "id": "u01-24",
          "no": 24,
          "type": "word",
          "text": "a.m.",
          "phonetic": "/ˌeɪˈem/",
          "pos": "abbr.",
          "meaning": "上午 (AmE A.M.)",
          "door": 20,
          "notes": "a.m. = in the morning; p.m. = in the afternoon / at night / in the evening"
        },
        {
          "id": "u01-25",
          "no": 25,
          "type": "word",
          "text": "end",
          "phonetic": "/end/",
          "pos": "v. 结束；n. 末尾",
          "meaning": "结束；末尾",
          "door": 20,
          "phrases": [
            {
              "text": "at the end of +时间+地点",
              "meaning": "在……末尾"
            },
            {
              "text": "in the end = at last = finally",
              "meaning": "最后"
            }
          ],
          "extensions": [
            {
              "text": "ending",
              "pos": "n.",
              "meaning": "结局"
            },
            {
              "text": "endless",
              "pos": "adj.",
              "meaning": "无止尽的"
            }
          ]
        },
        {
          "id": "u01-26",
          "no": 26,
          "type": "word",
          "text": "difference",
          "phonetic": "/ˈdɪfrəns/",
          "pos": "n.",
          "meaning": "差别",
          "door": 20,
          "phrases": [
            {
              "text": "tell the difference",
              "meaning": "分辨出区别"
            },
            {
              "text": "be different from",
              "meaning": "与……不同"
            }
          ],
          "examples": [
            {
              "en": "I can never tell the difference between the twins.",
              "zh": "我永远分不清这对双胞胎。"
            }
          ],
          "extensions": [
            {
              "text": "different",
              "pos": "adj.",
              "meaning": "不同的"
            }
          ]
        },
        {
          "id": "u01-27",
          "no": 27,
          "type": "word",
          "text": "during",
          "phonetic": "/ˈdjʊərɪŋ/",
          "pos": "prep.",
          "meaning": "在……期间",
          "door": 20,
          "examples": [
            {
              "en": "Please remain seated during the performance.",
              "zh": "演出期间请保持就座。"
            }
          ],
          "extensions": [
            {
              "text": "duration",
              "pos": "n.",
              "meaning": "持续时间"
            }
          ]
        },
        {
          "id": "u01-28",
          "no": 28,
          "type": "word",
          "text": "outside",
          "phonetic": "/ˌaʊtˈsaɪd/",
          "pos": "adv. 在外面；prep. 在……外面",
          "meaning": "在外面；在……外面",
          "door": 20
        }
      ]
    },
    {
      "unitId": "u02-family-ties",
      "title": "U2 Family ties 词汇讲义",
      "sourceImages": [
        "assets/handouts/2026-08-22_0001.JPG",
        "assets/handouts/2026-08-22_0002.JPG",
        "assets/handouts/2026-08-22_0003.JPG",
        "assets/handouts/2026-08-22_0004.JPG",
        "assets/handouts/2026-08-22_0005.JPG",
        "assets/handouts/2026-08-22_0006.JPG"
      ],
      "pageMap": {},
      "missingPages": "",
      "dictationExtra": [],
      "entries": [
        {
          "id": "u02-01",
          "no": 1,
          "type": "word",
          "text": "tie",
          "phonetic": "/taɪ/",
          "pos": "n. 联系；关系；纽带；领带；v. 结；捆；绑",
          "meaning": "联系；关系；纽带；领带；结；捆；绑",
          "door": 21,
          "phrases": [
            {
              "text": "family ties",
              "meaning": "家庭关系"
            },
            {
              "text": "the ties of friendship",
              "meaning": "友谊的纽带"
            },
            {
              "text": "tie...to...",
              "meaning": "把…栓/绑在…（to 是介词）"
            }
          ],
          "examples": [
            {
              "en": "Which tie do you like best?",
              "zh": "你最喜欢哪条领带？"
            },
            {
              "en": "They tied him to a chair with a rope.",
              "zh": "他们用一根绳子把他绑在一把椅子上。"
            }
          ],
          "notes": "v. 变位 tied-tied-tying；同类型动词现在分词规律：die-dying, lie-lying"
        },
        {
          "id": "u02-02",
          "no": 2,
          "type": "word",
          "text": "relation",
          "phonetic": "/rɪˈleɪʃn/",
          "pos": "n.",
          "meaning": "关系；联系",
          "door": 21,
          "phrases": [
            {
              "text": "international relations",
              "meaning": "国际关系"
            }
          ],
          "extensions": [
            {
              "text": "relationship",
              "pos": "n.",
              "meaning": "关系",
              "phrases": [
                {
                  "text": "the relationship between A and B",
                  "meaning": "A 和 B 之间的关系"
                }
              ]
            },
            {
              "text": "relative",
              "pos": "n.",
              "meaning": "亲戚"
            },
            {
              "text": "relate",
              "pos": "v.",
              "meaning": "有关；涉及",
              "phrases": [
                {
                  "text": "be related to",
                  "meaning": "与…相关"
                }
              ]
            }
          ],
          "examples": [
            {
              "en": "Tom is her close relative.",
              "zh": "Tom 是她的近亲。"
            },
            {
              "en": "Wealth is seldom related to happiness.",
              "zh": "财富很少和幸福相关。"
            }
          ]
        },
        {
          "id": "u02-03",
          "no": 3,
          "type": "word",
          "text": "introduce",
          "phonetic": "/ˌɪntrəˈdjuːs/",
          "pos": "v.",
          "meaning": "介绍；引进 (introduced-introduced-introducing)",
          "door": 21,
          "phrases": [
            {
              "text": "introduce A to B",
              "meaning": "把 A 介绍给 B"
            }
          ],
          "examples": [
            {
              "en": "The company introduced a new car last year.",
              "zh": "去年这家公司引进了一种新型汽车。"
            }
          ],
          "extensions": [
            {
              "text": "introduction",
              "pos": "n.",
              "meaning": "介绍",
              "phrases": [
                {
                  "text": "self-introduction",
                  "meaning": "自我介绍"
                }
              ]
            }
          ]
        },
        {
          "id": "u02-04",
          "no": 4,
          "type": "word",
          "text": "classmate",
          "phonetic": "/ˈklɑːsmeɪt/",
          "pos": "n.",
          "meaning": "同班同学",
          "door": 21,
          "extensions": [
            {
              "text": "roommate",
              "pos": "n.",
              "meaning": "室友"
            },
            {
              "text": "deskmate",
              "pos": "n.",
              "meaning": "同桌"
            },
            {
              "text": "schoolmate",
              "pos": "n.",
              "meaning": "校友"
            },
            {
              "text": "teammate",
              "pos": "n.",
              "meaning": "队友"
            },
            {
              "text": "workmate",
              "pos": "n.",
              "meaning": "工友"
            },
            {
              "text": "soulmate",
              "pos": "n.",
              "meaning": "知音"
            }
          ],
          "notes": "-mate 后缀表示「同伴」"
        },
        {
          "id": "u02-05",
          "no": 5,
          "type": "word",
          "text": "only",
          "phonetic": "/ˈəʊnli/",
          "pos": "adj. 仅有的；唯一的；adv. 只；仅仅",
          "meaning": "仅有的；唯一的；只；仅仅",
          "door": 21,
          "phrases": [
            {
              "text": "only child",
              "meaning": "独生子（或女）"
            },
            {
              "text": "not only...but also...",
              "meaning": "不仅…而且…"
            }
          ],
          "examples": [
            {
              "en": "We only waited a few minutes, but it seemed like hours.",
              "zh": "我们只等了几分钟，但觉得像几小时。"
            },
            {
              "en": "Not only the students but also the teacher is enjoying the film.",
              "zh": "不仅学生们在欣赏这部影片，而且老师也在欣赏。"
            }
          ],
          "notes": "not only...but also... 连接主语时，谓语动词单复数用就近原则"
        },
        {
          "id": "u02-06",
          "no": 6,
          "type": "word",
          "text": "wife",
          "phonetic": "/waɪf/",
          "pos": "n.",
          "meaning": "妻子",
          "door": 21,
          "notes": "pl. wives；同类复数变化：life-lives, knife-knives"
        },
        {
          "id": "u02-07",
          "no": 7,
          "type": "word",
          "text": "other",
          "phonetic": "/ˈʌðə(r)/",
          "pos": "adj. 另外；其他；pron. 另外的人（或物）",
          "meaning": "另外；其他；另外的人（或物）",
          "door": 21,
          "phrases": [
            {
              "text": "one...the other...",
              "meaning": "一个…另一个…（两者之间）"
            }
          ],
          "examples": [
            {
              "en": "Kate has two uncles. One is a doctor, the other is a teacher.",
              "zh": "Kate 有两个叔叔。一个是医生，另一个是老师。"
            }
          ]
        },
        {
          "id": "u02-08",
          "no": 8,
          "type": "word",
          "text": "member",
          "phonetic": "/ˈmembə(r)/",
          "pos": "n.",
          "meaning": "成员",
          "door": 21,
          "phrases": [
            {
              "text": "a member of...",
              "meaning": "…的一员"
            },
            {
              "text": "family members",
              "meaning": "家庭成员"
            }
          ]
        },
        {
          "id": "u02-09",
          "no": 9,
          "type": "word",
          "text": "add",
          "phonetic": "/æd/",
          "pos": "v.",
          "meaning": "添加；增加",
          "door": 21,
          "phrases": [
            {
              "text": "add...to...",
              "meaning": "增加…到…（to 为介词）"
            }
          ],
          "examples": [
            {
              "en": "Add some words to the word web.",
              "zh": "增加一些词汇到词汇网。"
            },
            {
              "en": "In addition, many German children study a third language, such as French.",
              "zh": "此外，许多德国儿童学习第三语言，如法语。"
            }
          ],
          "extensions": [
            {
              "text": "addition",
              "pos": "n.",
              "meaning": "增加；加法",
              "phrases": [
                {
                  "text": "in addition",
                  "meaning": "此外（相当于 what's more / besides）"
                },
                {
                  "text": "in addition to...",
                  "meaning": "除…之外（还包括）"
                }
              ]
            },
            {
              "text": "additional",
              "pos": "adj.",
              "meaning": "另外的"
            },
            {
              "text": "additionally",
              "pos": "adv.",
              "meaning": "另外地"
            }
          ],
          "notes": "in addition to（包括）≠ except（排除）"
        },
        {
          "id": "u02-10",
          "no": 10,
          "type": "word",
          "text": "note",
          "phonetic": "/nəʊt/",
          "pos": "n. 笔记；便条；音符；钞票；v. 注意",
          "meaning": "笔记；便条；音符；钞票；注意",
          "door": 21,
          "phrases": [
            {
              "text": "take notes",
              "meaning": "记笔记"
            },
            {
              "text": "leave a note for sb.",
              "meaning": "给…留一张便条"
            }
          ]
        },
        {
          "id": "u02-11",
          "no": 11,
          "type": "word",
          "text": "album",
          "phonetic": "/ˈælbəm/",
          "pos": "n.",
          "meaning": "相册；影集",
          "door": 22,
          "notes": "不定冠词用 an：an album"
        },
        {
          "id": "u02-12",
          "no": 12,
          "type": "word",
          "text": "teach",
          "phonetic": "/tiːtʃ/",
          "pos": "v.",
          "meaning": "教（某人）；使（某人）明白或会做某事 (taught-taught-teaches)",
          "door": 22,
          "phrases": [
            {
              "text": "teach sb. sth.",
              "meaning": "教某人某事（sb 用人称代词宾格）"
            },
            {
              "text": "teach oneself",
              "meaning": "自学"
            }
          ],
          "examples": [
            {
              "en": "She teaches well.",
              "zh": "她教得好。"
            },
            {
              "en": "Mr Smith teaches us English.",
              "zh": "Smith 先生教我们英语。"
            }
          ],
          "extensions": [
            {
              "text": "teacher",
              "pos": "n.",
              "meaning": "老师",
              "phrases": [
                {
                  "text": "teachers' office",
                  "meaning": "老师办公室"
                },
                {
                  "text": "Teachers' Day",
                  "meaning": "教师节"
                }
              ]
            },
            {
              "text": "teaching",
              "pos": "n. 教学；adj. 教学的",
              "meaning": "教学；教学的",
              "phrases": [
                {
                  "text": "experimental teaching methods",
                  "meaning": "实验性教学方法"
                },
                {
                  "text": "teaching robot",
                  "meaning": "教学机器人"
                }
              ]
            }
          ]
        },
        {
          "id": "u02-13",
          "no": 13,
          "type": "word",
          "text": "homework",
          "phonetic": "/ˈhəʊmwɜːk/",
          "pos": "un.",
          "meaning": "（学生的）家庭作业",
          "door": 22,
          "phrases": [
            {
              "text": "do one's homework",
              "meaning": "做家庭作业"
            }
          ],
          "examples": [
            {
              "en": "I do my homework after dinner.",
              "zh": "我晚饭后做家庭作业。"
            }
          ],
          "notes": "不可数名词"
        },
        {
          "id": "u02-14",
          "no": 14,
          "type": "word",
          "text": "guitar",
          "phonetic": "/ɡɪˈtɑː(r)/",
          "pos": "n.",
          "meaning": "吉他",
          "door": 22,
          "phrases": [
            {
              "text": "play the guitar",
              "meaning": "弹吉他"
            },
            {
              "text": "play the piano/violin/cello",
              "meaning": "弹钢琴/拉小提琴/拉大提琴"
            }
          ],
          "notes": "乐器前要加 the"
        },
        {
          "id": "u02-15",
          "no": 15,
          "type": "word",
          "text": "chess",
          "phonetic": "/tʃes/",
          "pos": "n.",
          "meaning": "国际象棋",
          "door": 22,
          "phrases": [
            {
              "text": "play chess",
              "meaning": "下国际象棋（棋类前不加 the）"
            }
          ],
          "examples": [
            {
              "en": "My hobby is playing chess.",
              "zh": "我的爱好是下国际象棋。"
            }
          ],
          "notes": "句型：My hobby is doing sth."
        },
        {
          "id": "u02-16",
          "no": 16,
          "type": "word",
          "text": "elder",
          "phonetic": "/ˈeldə(r)/",
          "pos": "adj. 年长的；年龄较大的；n. 长辈，年长者",
          "meaning": "年长的；年龄较大的；长辈，年长者",
          "door": 22,
          "phrases": [
            {
              "text": "my elder brother/sister",
              "meaning": "我的哥哥/姐姐"
            },
            {
              "text": "the elderly",
              "meaning": "老年人（the + adj. 表示一类人）"
            }
          ],
          "examples": [
            {
              "en": "My grandfather is much older than my father.",
              "zh": "我爷爷比我爸爸年长得多。"
            },
            {
              "en": "As I get older, I know what I want.",
              "zh": "随着年龄增长，我知道自己想要什么。"
            }
          ],
          "extensions": [
            {
              "text": "elderly",
              "pos": "adj.",
              "meaning": "年老的"
            }
          ],
          "notes": "elder 只做定语、不与 than 连用、只修饰人（辈分比较）；older 可做定语/表语/补语、可与 than 连用。old-older-oldest；elder-eldest；反义词 younger"
        },
        {
          "id": "u02-17",
          "no": 17,
          "type": "word",
          "text": "sofa",
          "phonetic": "/ˈsəʊfə/",
          "pos": "n.",
          "meaning": "长沙发",
          "door": 22
        },
        {
          "id": "u02-18",
          "no": 18,
          "type": "word",
          "text": "round",
          "phonetic": "/raʊnd/",
          "pos": "adj. 圆形的；adv. 环绕地，在周围；prep. 围着",
          "meaning": "圆形的；环绕地，在周围；围着",
          "door": 22,
          "phrases": [
            {
              "text": "a round plate/window/table",
              "meaning": "圆盘/圆窗/圆桌"
            }
          ],
          "examples": [
            {
              "en": "A crowd soon gathered round.",
              "zh": "很快地围拢了一群人。"
            },
            {
              "en": "They are sitting round the kitchen table.",
              "zh": "他们正围坐在餐桌旁。"
            }
          ]
        },
        {
          "id": "u02-19",
          "no": 19,
          "type": "word",
          "text": "dark",
          "phonetic": "/dɑːk/",
          "pos": "adj.",
          "meaning": "乌黑的（of skin or hair）；深色的（of a colour）；黑暗的",
          "door": 22,
          "phrases": [
            {
              "text": "dark hair",
              "meaning": "乌黑的头发"
            },
            {
              "text": "dark green/red/grey",
              "meaning": "深绿色/深红色/深灰色"
            },
            {
              "text": "a dark room/street/corner",
              "meaning": "黑暗的房间/街道/角落"
            }
          ],
          "extensions": [
            {
              "text": "darkness",
              "pos": "n.",
              "meaning": "黑暗"
            }
          ]
        },
        {
          "id": "u02-20",
          "no": 20,
          "type": "word",
          "text": "duty",
          "phonetic": "/ˈdjuːti/",
          "pos": "n.",
          "meaning": "责任；义务；本分",
          "door": 22,
          "phrases": [
            {
              "text": "do one's duty",
              "meaning": "尽职"
            },
            {
              "text": "on/off duty",
              "meaning": "值班/不值班（护士、警察等）"
            }
          ]
        },
        {
          "id": "u02-21",
          "no": 21,
          "type": "word",
          "text": "born",
          "phonetic": "/bɔːn/",
          "pos": "v.（仅用于被动语态，不与 by 连用）",
          "meaning": "出生；出世",
          "door": 23,
          "phrases": [
            {
              "text": "be born",
              "meaning": "出生"
            },
            {
              "text": "be born to be/do",
              "meaning": "注定成为/做"
            }
          ],
          "examples": [
            {
              "en": "She was born in 1950.",
              "zh": "她生于 1950 年。"
            },
            {
              "en": "She was born on March 2nd, 1950.",
              "zh": "她生于 1950 年 3 月 2 日。"
            },
            {
              "en": "She was born to be a great writer.",
              "zh": "她出生就注定是个伟大的作家。"
            }
          ],
          "notes": "年份前用 in，具体日期前用 on"
        },
        {
          "id": "u02-22",
          "no": 22,
          "type": "word",
          "text": "weekend",
          "phonetic": "/ˌwiːkˈend/",
          "pos": "n.",
          "meaning": "周末",
          "door": 23,
          "phrases": [
            {
              "text": "on/at weekend",
              "meaning": "在周末"
            }
          ],
          "examples": [
            {
              "en": "Willy and his mom don't do any housework at weekend.",
              "zh": "Willy 和他妈妈在周末不做任何家务。"
            },
            {
              "en": "The library is open on weekdays only.",
              "zh": "这个图书馆只在工作日开放。"
            }
          ],
          "extensions": [
            {
              "text": "week",
              "pos": "n.",
              "meaning": "星期；周",
              "phrases": [
                {
                  "text": "last/next/this week",
                  "meaning": "上/下/本星期"
                }
              ]
            },
            {
              "text": "weekly",
              "pos": "adj.",
              "meaning": "每星期（的）；每周的",
              "phrases": [
                {
                  "text": "write a weekly journal",
                  "meaning": "写一篇周记"
                }
              ]
            },
            {
              "text": "weekday",
              "pos": "n.",
              "meaning": "工作日",
              "phrases": [
                {
                  "text": "on weekdays",
                  "meaning": "在工作日"
                }
              ]
            }
          ]
        },
        {
          "id": "u02-23",
          "no": 23,
          "type": "word",
          "text": "thing",
          "phonetic": "/θɪŋ/",
          "pos": "n.",
          "meaning": "事情；事件",
          "door": 23
        },
        {
          "id": "u02-24",
          "no": 24,
          "type": "word",
          "text": "enough",
          "phonetic": "/ɪˈnʌf/",
          "pos": "adj. 足够的；充分的；adv. 足够地；充分地",
          "meaning": "足够的；充分的；足够地；充分地",
          "door": 23,
          "phrases": [
            {
              "text": "enough money/time/food",
              "meaning": "足够的钱/时间/食物（放名词前）"
            },
            {
              "text": "old/big/tall enough",
              "meaning": "足够年长/大/高（放 adj./adv. 后）"
            },
            {
              "text": "adj./adv. + enough to do",
              "meaning": "足够…而能做某事"
            }
          ],
          "examples": [
            {
              "en": "My elder brother is old enough to help now.",
              "zh": "我哥哥现在足够大能帮忙了。"
            },
            {
              "en": "He is tall enough to reach the top shelf.",
              "zh": "他足够高而能够到顶层架子。"
            }
          ],
          "notes": "名前形后；enough to do = so + adj./adv. + that 从句（如此…以至于…）：He is so tall that he can reach the top shelf."
        },
        {
          "id": "u02-25",
          "no": 25,
          "type": "phrase",
          "text": "Well done",
          "phonetic": "",
          "pos": "短语",
          "meaning": "做得好！干得好！",
          "door": 23,
          "examples": [
            {
              "en": "— Daddy! I came second in history. — Well done, sweetheart.",
              "zh": "— 爸爸！我历史考了第二名。— 干得好，宝贝。"
            }
          ]
        },
        {
          "id": "u02-26",
          "no": 26,
          "type": "word",
          "text": "dish",
          "phonetic": "/dɪʃ/",
          "pos": "n.",
          "meaning": "碟子；一道菜",
          "door": 23,
          "examples": [
            {
              "en": "Which dish do most of the British people like best?",
              "zh": "大多数英国人最喜欢哪道菜？"
            }
          ],
          "notes": "pl. dishes"
        },
        {
          "id": "u02-27",
          "no": 27,
          "type": "word",
          "text": "usually",
          "phonetic": "/ˈjuːʒuəli/",
          "pos": "adv.",
          "meaning": "通常地",
          "door": 23,
          "phrases": [
            {
              "text": "as usual",
              "meaning": "和往常一样"
            }
          ],
          "examples": [
            {
              "en": "As usual, no one is there.",
              "zh": "跟平常那个时刻一样，没有人在那儿。"
            }
          ],
          "extensions": [
            {
              "text": "usual",
              "pos": "adj.",
              "meaning": "通常的"
            },
            {
              "text": "unusual",
              "pos": "adj.",
              "meaning": "与众不同的（反义词）"
            }
          ]
        },
        {
          "id": "u02-28",
          "no": 28,
          "type": "word",
          "text": "quick",
          "phonetic": "/kwɪk/",
          "pos": "adj.",
          "meaning": "快的；迅速的 (quicker-quickest)",
          "door": 23,
          "examples": [
            {
              "en": "They want to finish the meeting as quickly as possible.",
              "zh": "他们想尽快结束会议。"
            }
          ],
          "extensions": [
            {
              "text": "quickly",
              "pos": "adv.",
              "meaning": "迅速地 (more quickly-the most quickly)"
            }
          ],
          "notes": "as...as possible 尽可能地…"
        },
        {
          "id": "u02-29",
          "no": 29,
          "type": "word",
          "text": "together",
          "phonetic": "/təˈɡeðə(r)/",
          "pos": "adv.",
          "meaning": "在一起；共同",
          "door": 23,
          "phrases": [
            {
              "text": "together with",
              "meaning": "和…一起"
            }
          ],
          "examples": [
            {
              "en": "Dr. Jones, together with her husband, is going to visit Beijing this summer.",
              "zh": "琼博士和她的丈夫今年夏天要去北京。"
            }
          ],
          "notes": "就近原则：A, together with B + v.，谓语与 A 一致"
        },
        {
          "id": "u02-30",
          "no": 30,
          "type": "word",
          "text": "flat",
          "phonetic": "/flæt/",
          "pos": "n. 公寓；一套房间；adj. 平的，水平的",
          "meaning": "公寓；一套房间；平的，水平的",
          "door": 24,
          "examples": [
            {
              "en": "We found a large flat rock to sit on.",
              "zh": "我们找了一块可以坐的大而平滑的石头。"
            }
          ],
          "notes": "flat = apartment（公寓）"
        },
        {
          "id": "u02-31",
          "no": 31,
          "type": "word",
          "text": "fun",
          "phonetic": "/fʌn/",
          "pos": "n.",
          "meaning": "乐趣",
          "door": 24,
          "phrases": [
            {
              "text": "have fun",
              "meaning": "玩得开心"
            },
            {
              "text": "make fun of",
              "meaning": "取笑（= laugh at）"
            }
          ],
          "examples": [
            {
              "en": "What fun it is to jump into water on such a hot day!",
              "zh": "在这么热的一天跳进水里是多么有趣的事啊！"
            },
            {
              "en": "I think Qianlingshan Park is the best place to have fun on weekends.",
              "zh": "我认为千灵山公园是周末游玩的最好的地方。"
            },
            {
              "en": "It's impolite to stare at others or even make fun of them.",
              "zh": "盯着别人看，甚至取笑他们是不礼貌的。"
            }
          ],
          "extensions": [
            {
              "text": "funny",
              "pos": "adj.",
              "meaning": "滑稽的；可笑的"
            }
          ],
          "notes": "The clown is funny. 这个小丑很滑稽。"
        },
        {
          "id": "u02-32",
          "no": 32,
          "type": "word",
          "text": "celebration",
          "phonetic": "/ˌselɪˈbreɪʃn/",
          "pos": "n.",
          "meaning": "庆典；庆祝活动",
          "door": 24,
          "phrases": [
            {
              "text": "birthday/wedding celebrations",
              "meaning": "生日庆典/结婚庆典"
            }
          ],
          "extensions": [
            {
              "text": "celebrate",
              "pos": "v.",
              "meaning": "庆祝 (celebrated-celebrated-celebrating)"
            }
          ],
          "examples": [
            {
              "en": "How do people celebrate New Year in your country?",
              "zh": "你们国家的人怎样庆贺新年？"
            }
          ]
        },
        {
          "id": "u02-33",
          "no": 33,
          "type": "word",
          "text": "prepare",
          "phonetic": "/prɪˈpeə(r)/",
          "pos": "v.",
          "meaning": "使做好准备 (prepared-prepared-preparing)",
          "door": 24,
          "phrases": [
            {
              "text": "prepare for sth.",
              "meaning": "为…做准备"
            },
            {
              "text": "make preparations for",
              "meaning": "为…做准备（= prepare for）"
            }
          ],
          "examples": [
            {
              "en": "The whole class are preparing for the exams.",
              "zh": "全班都在准备考试。"
            },
            {
              "en": "The whole class are making preparations for the exams.",
              "zh": "全班都在为考试做准备。"
            }
          ],
          "extensions": [
            {
              "text": "preparation",
              "pos": "n.",
              "meaning": "准备"
            },
            {
              "text": "prepared",
              "pos": "adj.",
              "meaning": "准备好的"
            }
          ]
        },
        {
          "id": "u02-34",
          "no": 34,
          "type": "word",
          "text": "decorate",
          "phonetic": "/ˈdekəreɪt/",
          "pos": "v.",
          "meaning": "装饰 (decorated-decorated-decorating)",
          "door": 24,
          "phrases": [
            {
              "text": "decorate A with B",
              "meaning": "用 B 装饰 A"
            }
          ],
          "examples": [
            {
              "en": "She decorated the flat with balloons.",
              "zh": "她用气球装饰公寓。"
            }
          ],
          "extensions": [
            {
              "text": "decoration",
              "pos": "n.",
              "meaning": "装饰"
            }
          ]
        },
        {
          "id": "u02-35",
          "no": 35,
          "type": "word",
          "text": "living room",
          "phonetic": "/ˈlɪvɪŋ ruːm/",
          "pos": "n.",
          "meaning": "客厅；起居室",
          "door": 24,
          "notes": "living room = sitting room"
        },
        {
          "id": "u02-36",
          "no": 36,
          "type": "word",
          "text": "set",
          "phonetic": "/set/",
          "pos": "v.",
          "meaning": "放置；摆放 (set-set-setting)",
          "door": 24,
          "phrases": [
            {
              "text": "set the table",
              "meaning": "摆好餐具"
            },
            {
              "text": "set down",
              "meaning": "放下"
            },
            {
              "text": "set out/off",
              "meaning": "出发"
            },
            {
              "text": "set up",
              "meaning": "建立"
            }
          ],
          "examples": [
            {
              "en": "I set down my book, cleaned my glasses and went to bed.",
              "zh": "我放下书，擦眼镜，然后去睡觉了。"
            },
            {
              "en": "The company set up a new department to focus on innovation.",
              "zh": "这个公司建立了一个新的部门去关注改革。"
            }
          ]
        },
        {
          "id": "u02-37",
          "no": 37,
          "type": "word",
          "text": "surprised",
          "phonetic": "/səˈpraɪzd/",
          "pos": "adj.",
          "meaning": "惊奇的；惊讶的",
          "door": 24,
          "phrases": [
            {
              "text": "to one's surprise",
              "meaning": "令某人惊讶的是"
            }
          ],
          "examples": [
            {
              "en": "To his surprise, his teammates all nodded in agreement.",
              "zh": "令他惊讶的是，他的队友们都点头表示同意。"
            }
          ],
          "extensions": [
            {
              "text": "surprising",
              "pos": "adj.",
              "meaning": "令人惊讶的"
            },
            {
              "text": "surprise",
              "pos": "n. 惊讶；v. 使惊讶",
              "meaning": "惊讶；使惊讶"
            }
          ]
        },
        {
          "id": "u02-38",
          "no": 38,
          "type": "word",
          "text": "super-excited",
          "phonetic": "/ˌsuːpər ɪkˈsaɪtɪd/",
          "pos": "adj.",
          "meaning": "超级激动的",
          "door": 24,
          "examples": [
            {
              "en": "The kids were excited to see the toy rocket flying into the sky.",
              "zh": "看到玩具火箭飞上天，孩子们很兴奋。"
            }
          ],
          "extensions": [
            {
              "text": "excited",
              "pos": "adj.",
              "meaning": "兴奋的"
            },
            {
              "text": "exciting",
              "pos": "adj.",
              "meaning": "令人兴奋的"
            },
            {
              "text": "excite",
              "pos": "v.",
              "meaning": "使激动"
            },
            {
              "text": "excitement",
              "pos": "n. [U]",
              "meaning": "兴奋"
            }
          ]
        },
        {
          "id": "u02-39",
          "no": 39,
          "type": "word",
          "text": "joy",
          "phonetic": "/dʒɔɪ/",
          "pos": "n.",
          "meaning": "高兴；喜悦",
          "door": 24,
          "phrases": [
            {
              "text": "to one's joy",
              "meaning": "令某人高兴的是"
            },
            {
              "text": "jump for joy",
              "meaning": "欢呼雀跃"
            }
          ],
          "examples": [
            {
              "en": "To his joy, he received a promotion at work.",
              "zh": "令他高兴的是，他在工作中得到了晋升。"
            },
            {
              "en": "Mr. Green and Mrs. Green enjoy taking a walk along the beach.",
              "zh": "格林先生和格林太太喜欢沿着海滩散步。"
            }
          ],
          "extensions": [
            {
              "text": "enjoy",
              "pos": "v.",
              "meaning": "享受"
            },
            {
              "text": "joyful",
              "pos": "adj.",
              "meaning": "高兴的"
            }
          ]
        }
      ]
    },
    {
      "unitId": "u03-food",
      "title": "U3 Food 词汇讲义",
      "sourceImages": [
        "assets/handouts/2026-08-22b_0001.JPG",
        "assets/handouts/2026-08-22b_0002.JPG",
        "assets/handouts/2026-08-22b_0003.JPG",
        "assets/handouts/2026-08-22b_0004.JPG",
        "assets/handouts/2026-08-22b_0005.JPG",
        "assets/handouts/2026-08-22b_0006.JPG",
        "assets/handouts/2026-08-22b_0007.JPG",
        "assets/handouts/2026-08-22b_0008.JPG"
      ],
      "pageMap": {},
      "missingPages": "",
      "dictationExtra": [],
      "entries": [
        {
          "id": "u03-01",
          "no": 1,
          "type": "word",
          "text": "each",
          "phonetic": "/iːtʃ/",
          "pos": "det. & pron. & adv.",
          "meaning": "（两个或两个以上的人或物中）各自，各个，每个",
          "door": 25,
          "phrases": [
            {
              "text": "each other = one another",
              "meaning": "彼此；互相（相互代词）"
            },
            {
              "text": "each other's",
              "meaning": "彼此的；互相的（所有格）"
            },
            {
              "text": "each of + 复数名词",
              "meaning": "…中的每一个"
            }
          ],
          "examples": [
            {
              "en": "Each student studies English.",
              "zh": "每个同学都学英语。（det.）"
            },
            {
              "en": "Each of the students studies English.",
              "zh": "同学们每个人都学英语。（pron.）"
            },
            {
              "en": "We each have different interests.",
              "zh": "我们每个人都有不同的兴趣。（同位语）"
            },
            {
              "en": "The tickets cost 50 yuan each.",
              "zh": "票价为 50 元每张。（adv.）"
            },
            {
              "en": "We should care about each other.",
              "zh": "我们应该互相关心。"
            },
            {
              "en": "We need each other's care.",
              "zh": "我们需要彼此的关心。"
            }
          ],
          "notes": "each 和 every 辨析：① each+单数名词（≥2 人或物，强调个体）；every+单数名词（≥3 人或物，强调整体）——Each student has a new book. / Every girl has a dress. ② every 可与 almost/nearly/not 连用，each 不可——Not every child likes the idea. ③ each 作代词可单独使用、后可接 of；every 只能作限定词，须说 every one of——Each of the students = Every one of the students。另：everyone 只指人、不接 of；every one 可指人/物、可接 of。"
        },
        {
          "id": "u03-02",
          "no": 2,
          "type": "word",
          "text": "plenty",
          "phonetic": "/ˈplenti/",
          "pos": "pron.",
          "meaning": "大量；众多；充足",
          "door": 25,
          "phrases": [
            {
              "text": "plenty of + 不可数名词/可数名词复数",
              "meaning": "大量；很多的"
            }
          ],
          "examples": [
            {
              "en": "We have plenty to talk about.",
              "zh": "我们有说不完的话。"
            }
          ],
          "notes": "「大量」短语辨析：plenty of / a lot of / lots of（谓语动词根据 of 后的名词确定）；+不可数名词：a large amount of（谓语用单数）/ large amounts of（谓语用复数）；+可数名词复数：a number of（谓语用复数）。修饰可数：many, few, a few, a number of；修饰不可数：much, little, a little, an amount of；两者皆可：some, a lot of, lots of, plenty of。"
        },
        {
          "id": "u03-03",
          "no": 3,
          "type": "word",
          "text": "choice",
          "phonetic": "/tʃɔɪs/",
          "pos": "n.",
          "meaning": "选择；挑选；抉择",
          "door": 25,
          "phrases": [
            {
              "text": "make a choice between A and B",
              "meaning": "在 A 和 B 之间做出选择"
            },
            {
              "text": "have no choice but to do sth.",
              "meaning": "不得不做某事"
            }
          ],
          "examples": [
            {
              "en": "Students need to make a choice between French and German.",
              "zh": "学生们需要在法语和德语之间做出一个选择。"
            },
            {
              "en": "He has no choice but to leave.",
              "zh": "除了离开，他别无选择。"
            }
          ],
          "extensions": [
            {
              "text": "choose",
              "pos": "v.",
              "meaning": "选择；挑选；选取（chose-chosen-choosing）",
              "phrases": [
                {
                  "text": "choose to do sth.",
                  "meaning": "选择做某事"
                }
              ]
            }
          ]
        },
        {
          "id": "u03-04",
          "no": 4,
          "type": "word",
          "text": "list",
          "phonetic": "/lɪst/",
          "pos": "n.",
          "meaning": "一览表；名单；目录；清单",
          "door": 25,
          "phrases": [
            {
              "text": "a shopping list",
              "meaning": "一张购物清单"
            },
            {
              "text": "make a list",
              "meaning": "制作一张清单"
            }
          ]
        },
        {
          "id": "u03-05",
          "no": 5,
          "type": "word",
          "text": "few",
          "phonetic": "/fjuː/",
          "pos": "det. & adj.",
          "meaning": "不多；很少",
          "door": 25,
          "phrases": [
            {
              "text": "a few + 可数名词",
              "meaning": "有一些（肯定含义）"
            },
            {
              "text": "few + 可数名词",
              "meaning": "几乎没有（否定含义）"
            },
            {
              "text": "a little + 不可数名词",
              "meaning": "有一点（肯定含义）"
            },
            {
              "text": "little + 不可数名词",
              "meaning": "几乎没有（否定含义）"
            }
          ],
          "examples": [
            {
              "en": "I have a few friends.",
              "zh": "我有一些朋友。"
            },
            {
              "en": "I have few friends.",
              "zh": "我几乎没有朋友。"
            },
            {
              "en": "There is a little milk.",
              "zh": "有一点牛奶。"
            },
            {
              "en": "There is little milk.",
              "zh": "几乎没有牛奶。"
            }
          ],
          "notes": "常用修饰语：just/only/quite a few (a little)；so/too/very few (little)"
        },
        {
          "id": "u03-06",
          "no": 6,
          "type": "word",
          "text": "pleasure",
          "phonetic": "/ˈpleʒə(r)/",
          "pos": "n.",
          "meaning": "高兴；快乐；愉快",
          "door": 25,
          "phrases": [
            {
              "text": "My pleasure. / It's a pleasure.",
              "meaning": "不客气（回答感谢，做过之后）"
            },
            {
              "text": "With pleasure.",
              "meaning": "乐意效劳（回答请求，做之前）"
            }
          ],
          "extensions": [
            {
              "text": "please",
              "pos": "v.",
              "meaning": "使满意；使愉快（please sb. 取悦某人）"
            },
            {
              "text": "pleasant",
              "pos": "adj.",
              "meaning": "令人愉快的；宜人的（修饰 sth. = enjoyable）"
            },
            {
              "text": "pleased",
              "pos": "adj.",
              "meaning": "高兴；满意（修饰 sb.）",
              "phrases": [
                {
                  "text": "be pleased with sth.",
                  "meaning": "对某事满意"
                },
                {
                  "text": "be pleased to do sth.",
                  "meaning": "很高兴去做某事"
                }
              ]
            }
          ]
        },
        {
          "id": "u03-07",
          "no": 7,
          "type": "word",
          "text": "tasty",
          "phonetic": "/ˈteɪsti/",
          "pos": "adj.",
          "meaning": "美味的；可口的 (tastier-tastiest)",
          "door": 25,
          "phrases": [
            {
              "text": "something tasty to eat",
              "meaning": "好吃的东西"
            }
          ],
          "extensions": [
            {
              "text": "taste",
              "pos": "v.",
              "meaning": "品尝；尝起来",
              "phrases": [
                {
                  "text": "taste tasty",
                  "meaning": "尝起来美味"
                }
              ]
            }
          ]
        },
        {
          "id": "u03-08",
          "no": 8,
          "type": "word",
          "text": "need",
          "phonetic": "/niːd/",
          "pos": "v. & n. & 情态动词",
          "meaning": "需要；需求",
          "door": 26,
          "phrases": [
            {
              "text": "need to do sth.",
              "meaning": "需要做某事（行为动词）"
            },
            {
              "text": "need (not) do sth.",
              "meaning": "（不）需要做某事（情态动词，need not = needn't）"
            },
            {
              "text": "meet the needs of",
              "meaning": "满足…的需求"
            }
          ],
          "examples": [
            {
              "en": "You need to wash this shirt.",
              "zh": "你该洗这件衬衣了。"
            },
            {
              "en": "You needn't finish that work today.",
              "zh": "你不必今天做完这项工作。"
            }
          ],
          "extensions": [
            {
              "text": "necessary",
              "pos": "adj.",
              "meaning": "必需的；必要的（反义词 unnecessary）",
              "phrases": [
                {
                  "text": "It's necessary (for sb.) to do sth.",
                  "meaning": "某人有必要做某事"
                },
                {
                  "text": "if necessary",
                  "meaning": "必要的话"
                }
              ]
            }
          ],
          "notes": "n. 经济需求 financial needs；It's necessary for me to buy a new one. 我有必要买个新的了。（it 为形式主语）"
        },
        {
          "id": "u03-09",
          "no": 9,
          "type": "word",
          "text": "as",
          "phonetic": "/æz/",
          "pos": "prep. & adv. & conj.",
          "meaning": "作为；当作；如同；和…一样；照…方式；因为",
          "door": 26,
          "phrases": [
            {
              "text": "as soon as possible",
              "meaning": "越快越好；尽快"
            },
            {
              "text": "as always",
              "meaning": "一如既往"
            },
            {
              "text": "as for / as to",
              "meaning": "至于；关于"
            }
          ],
          "examples": [
            {
              "en": "Treat me as a friend.",
              "zh": "像朋友一样对我。（prep. 作为）"
            },
            {
              "en": "They did as I had asked.",
              "zh": "他们是按照我的要求做的。（conj. 照…方式）"
            },
            {
              "en": "She may need some help as she's new.",
              "zh": "她是新来的，可能需要一些帮助。（conj. 因为）"
            },
            {
              "en": "As for English, it's hard to me.",
              "zh": "至于英语，它对我来说很难。"
            }
          ]
        },
        {
          "id": "u03-10",
          "no": 10,
          "type": "word",
          "text": "piece",
          "phonetic": "/piːs/",
          "pos": "n.",
          "meaning": "碎片；碎块",
          "door": 26,
          "phrases": [
            {
              "text": "a piece of paper",
              "meaning": "一张纸"
            },
            {
              "text": "a piece of advice",
              "meaning": "一条建议"
            },
            {
              "text": "a piece of furniture",
              "meaning": "一件家具"
            },
            {
              "text": "in pieces",
              "meaning": "碎片状态"
            },
            {
              "text": "a bottle of water",
              "meaning": "一瓶水"
            },
            {
              "text": "a glass of water",
              "meaning": "一杯水（玻璃杯）"
            },
            {
              "text": "a cup of tea",
              "meaning": "一杯茶"
            },
            {
              "text": "a bowl of rice",
              "meaning": "一碗米饭"
            },
            {
              "text": "a grain of rice",
              "meaning": "一粒米"
            },
            {
              "text": "a can of cola",
              "meaning": "一听可乐"
            },
            {
              "text": "a piece of cake",
              "meaning": "一块蛋糕"
            },
            {
              "text": "a slice of cheese",
              "meaning": "一片奶酪"
            },
            {
              "text": "a bar of chocolate",
              "meaning": "一条巧克力"
            },
            {
              "text": "a basket of fruits",
              "meaning": "一篮子水果"
            },
            {
              "text": "a dozen eggs",
              "meaning": "一打鸡蛋（12 个）"
            },
            {
              "text": "a loaf of bread",
              "meaning": "一条面包"
            },
            {
              "text": "a jar of jam",
              "meaning": "一罐果酱"
            },
            {
              "text": "a bunch of bananas",
              "meaning": "一串香蕉"
            },
            {
              "text": "a pair of chopsticks",
              "meaning": "一双筷子"
            },
            {
              "text": "a bag of potato chips",
              "meaning": "一包薯片"
            }
          ],
          "notes": "a piece of + 不可数名词；后附讲义「量词小练习」全部量词搭配"
        },
        {
          "id": "u03-11",
          "no": 11,
          "type": "word",
          "text": "fry",
          "phonetic": "/fraɪ/",
          "pos": "v.",
          "meaning": "油煎；油炒 (fried-fried-frying，三单 fries)",
          "door": 26,
          "phrases": [
            {
              "text": "fried eggs",
              "meaning": "煎蛋"
            }
          ]
        },
        {
          "id": "u03-12",
          "no": 12,
          "type": "word",
          "text": "finally",
          "phonetic": "/ˈfaɪnəli/",
          "pos": "adv.",
          "meaning": "最后 (= at last = in the end)",
          "door": 26,
          "extensions": [
            {
              "text": "final",
              "pos": "adj.",
              "meaning": "最终的；期末的",
              "phrases": [
                {
                  "text": "final exam",
                  "meaning": "期末考试"
                }
              ]
            }
          ]
        },
        {
          "id": "u03-13",
          "no": 13,
          "type": "word",
          "text": "boil",
          "phonetic": "/bɔɪl/",
          "pos": "v.",
          "meaning": "煮沸；烧开",
          "door": 26,
          "phrases": [
            {
              "text": "boil an egg for sb. / boil sb. an egg",
              "meaning": "给某人煮个鸡蛋"
            },
            {
              "text": "boil sth. up",
              "meaning": "把……烧开"
            }
          ],
          "extensions": [
            {
              "text": "boiling",
              "pos": "adj.",
              "meaning": "沸腾的",
              "phrases": [
                {
                  "text": "boiling water",
                  "meaning": "沸水"
                }
              ]
            },
            {
              "text": "boiled",
              "pos": "adj.",
              "meaning": "煮熟的",
              "phrases": [
                {
                  "text": "boiled eggs",
                  "meaning": "煮熟的鸡蛋"
                }
              ]
            }
          ]
        },
        {
          "id": "u03-14",
          "no": 14,
          "type": "word",
          "text": "side",
          "phonetic": "/saɪd/",
          "pos": "n.",
          "meaning": "一边；侧面",
          "door": 26,
          "phrases": [
            {
              "text": "look on the bright side",
              "meaning": "（对坏情况）持乐观态度"
            },
            {
              "text": "on one's side",
              "meaning": "站在某人一边；和某人观点一致"
            }
          ],
          "examples": [
            {
              "en": "There are many trees on either side of the river.",
              "zh": "河的两边都有许多树。（= on both sides / each side）"
            }
          ]
        },
        {
          "id": "u03-15",
          "no": 15,
          "type": "word",
          "text": "beat",
          "phonetic": "/biːt/",
          "pos": "v.",
          "meaning": "搅拌，打；赢，打败（某人）；胜过；规律作响 (beat-beaten-beating)",
          "door": 27,
          "phrases": [
            {
              "text": "beat sth. (up)",
              "meaning": "搅拌（用叉等快速打）"
            },
            {
              "text": "beat A and B together",
              "meaning": "把 A 和 B 搅拌在一起"
            },
            {
              "text": "beat the world record",
              "meaning": "打破世界纪录"
            }
          ],
          "examples": [
            {
              "en": "He beat me at chess.",
              "zh": "他下棋赢了我。"
            },
            {
              "en": "Her heart is still beating.",
              "zh": "她的心脏还在跳动。"
            }
          ],
          "notes": "四个义项：①（用叉等）快速搅拌、打；②（比赛或竞争中）赢、打败某人；③比…更好、赛过、胜过；④（使）规律作响、作节奏运动"
        },
        {
          "id": "u03-16",
          "no": 16,
          "type": "word",
          "text": "menu",
          "phonetic": "/ˈmenjuː/",
          "pos": "n.",
          "meaning": "菜单",
          "door": 27,
          "phrases": [
            {
              "text": "ask for the menu",
              "meaning": "要菜单"
            },
            {
              "text": "read the menu",
              "meaning": "看菜单"
            }
          ],
          "examples": [
            {
              "en": "What's on the menu tonight?",
              "zh": "今晚有什么菜？"
            }
          ]
        },
        {
          "id": "u03-17",
          "no": 17,
          "type": "word",
          "text": "something",
          "phonetic": "/ˈsʌmθɪŋ/",
          "pos": "pron.",
          "meaning": "某事；某物",
          "door": 27,
          "phrases": [
            {
              "text": "cook something healthy",
              "meaning": "做些健康的食物"
            },
            {
              "text": "something else",
              "meaning": "别的东西"
            }
          ],
          "examples": [
            {
              "en": "He wants to cook something healthy for his mother on her birthday.",
              "zh": "他想在母亲生日那天为她做点健康的食物。"
            },
            {
              "en": "We can use the metal of the car to make something else.",
              "zh": "我们可以用汽车的金属来制造别的东西。"
            },
            {
              "en": "Something is bothering you, isn't it?",
              "zh": "某些事情困扰着你，不是吗？"
            },
            {
              "en": "My family means everything to me.",
              "zh": "对我来说家庭意味着一切。"
            },
            {
              "en": "He realized right away that there was something wrong.",
              "zh": "他马上意识到有地方不对劲。"
            },
            {
              "en": "Was there anything else you wanted to say?",
              "zh": "你还有什么要说的吗？"
            },
            {
              "en": "I consider nothing is more important than happiness in my life.",
              "zh": "我认为我的生活中没有什么比快乐更重要。"
            },
            {
              "en": "Have you seen anything unusual today?",
              "zh": "你今天看到什么不寻常的事了吗？"
            }
          ],
          "extensions": [
            {
              "text": "everything",
              "pos": "pron.",
              "meaning": "每件事；一切事（肯定/疑问/否定句均可用）"
            },
            {
              "text": "anything",
              "pos": "pron.",
              "meaning": "某事；任何事（一般用于否定句或疑问句）"
            },
            {
              "text": "nothing",
              "pos": "pron.",
              "meaning": "没有什么；没有东西"
            }
          ],
          "notes": "① something 作主语时，反义疑问句用 it。② everything/something/anything/nothing 作主语时，谓语动词用单数。③ something 常用于肯定句，也可用于征求对方意见的疑问句。④ 复合不定代词+adj.（anything unusual）；复合不定代词+to do——I'm worried that there isn't anybody to take care of the children while we are away. ⑤ 其他复合不定代词：somebody/someone、anybody/anyone、everybody/everyone、nobody/no one"
        },
        {
          "id": "u03-18",
          "no": 18,
          "type": "word",
          "text": "salt",
          "phonetic": "/sɔːlt/",
          "pos": "n. [U]",
          "meaning": "盐；食盐",
          "door": 27,
          "examples": [
            {
              "en": "Add a little salt to the sauce.",
              "zh": "往酱汁里加点儿盐。"
            }
          ],
          "extensions": [
            {
              "text": "salty",
              "pos": "adj.",
              "meaning": "咸的 (saltier-saltiest)"
            }
          ]
        },
        {
          "id": "u03-19",
          "no": 19,
          "type": "word",
          "text": "product",
          "phonetic": "/ˈprɒdʌkt/",
          "pos": "n. [C]",
          "meaning": "产品；制品",
          "door": 27,
          "phrases": [
            {
              "text": "dairy products",
              "meaning": "乳制品"
            },
            {
              "text": "product quality",
              "meaning": "产品质量"
            },
            {
              "text": "finished product",
              "meaning": "成品"
            }
          ],
          "examples": [
            {
              "en": "This product contains no animal fat.",
              "zh": "这种产品不含有动物油脂。"
            },
            {
              "en": "We are all products of our time.",
              "zh": "我们都是时代的产物。"
            },
            {
              "en": "The factory produced a large amount of modern furniture.",
              "zh": "这家工厂生产了大量的现代家具。"
            },
            {
              "en": "The new model will go into production next year.",
              "zh": "新车型将于明年投入生产。"
            }
          ],
          "extensions": [
            {
              "text": "produce",
              "pos": "v.",
              "meaning": "生产；制造；引起"
            },
            {
              "text": "production",
              "pos": "n.",
              "meaning": "生产；制作",
              "phrases": [
                {
                  "text": "production cost",
                  "meaning": "生产成本"
                },
                {
                  "text": "production line",
                  "meaning": "生产线"
                }
              ]
            }
          ]
        },
        {
          "id": "u03-20",
          "no": 20,
          "type": "word",
          "text": "balanced",
          "phonetic": "/ˈbælənst/",
          "pos": "adj.",
          "meaning": "保持平衡的",
          "door": 27,
          "phrases": [
            {
              "text": "a balanced diet",
              "meaning": "均衡的饮食"
            }
          ],
          "examples": [
            {
              "en": "It is essential that your diet is varied and balanced.",
              "zh": "重要的是你的饮食应当是多样而平衡的。"
            },
            {
              "en": "Nature is perfectly balanced.",
              "zh": "大自然是完美平衡的。"
            },
            {
              "en": "Larry has put on too much weight because of an unbalanced diet.",
              "zh": "Larry 因为饮食不均衡，体重增加了太多。"
            },
            {
              "en": "Try to keep a balance between work and play.",
              "zh": "要努力在工作和玩中间保持平衡。"
            }
          ],
          "extensions": [
            {
              "text": "unbalanced",
              "pos": "adj.",
              "meaning": "不平衡的；错乱的"
            },
            {
              "text": "balance",
              "pos": "n.",
              "meaning": "平衡"
            }
          ]
        },
        {
          "id": "u03-21",
          "no": 21,
          "type": "word",
          "text": "diet",
          "phonetic": "/ˈdaɪət/",
          "pos": "n.",
          "meaning": "日常饮食；日常食物",
          "door": 27,
          "phrases": [
            {
              "text": "be on a diet",
              "meaning": "节食；控制饮食"
            }
          ],
          "examples": [
            {
              "en": "Diets vary from country to country.",
              "zh": "世界各国的饮食各不相同。"
            },
            {
              "en": "The doctor told Tom to give up smoking and be on a diet.",
              "zh": "医生告诉汤姆要戒烟节食。"
            }
          ]
        }
      ]
    },
    {
      "unitId": "u04-sports",
      "title": "U4 Sports 词汇讲义",
      "sourceImages": [
        "assets/handouts/2026-08-22c_0001.JPG",
        "assets/handouts/2026-08-22c_0002.JPG",
        "assets/handouts/2026-08-22c_0003.JPG",
        "assets/handouts/2026-08-22c_0004.JPG",
        "assets/handouts/2026-08-22c_0005.JPG",
        "assets/handouts/2026-08-22c_0006.JPG",
        "assets/handouts/2026-08-22c_0007.JPG",
        "assets/handouts/2026-08-22c_0008.JPG",
        "assets/handouts/2026-08-22c_0009.JPG",
        "assets/handouts/2026-08-22c_0010.JPG"
      ],
      "pageMap": {},
      "missingPages": "",
      "dictationExtra": [],
      "entries": [
        {
          "id": "u04-01",
          "no": 1,
          "type": "word",
          "text": "date",
          "phonetic": "/deɪt/",
          "pos": "n.",
          "meaning": "日期；日子；约会",
          "door": 28,
          "examples": [
            {
              "en": "What's the date today?",
              "zh": "今天几号？"
            },
            {
              "en": "What day is it today?",
              "zh": "今天星期几？"
            }
          ],
          "notes": "问日期用 What's the date，问星期用 What day"
        },
        {
          "id": "u04-02",
          "no": 2,
          "type": "word",
          "text": "high",
          "phonetic": "/haɪ/",
          "pos": "adj. & adv.",
          "meaning": "高的；在高处；向高处 (higher-highest)",
          "door": 28,
          "phrases": [
            {
              "text": "high jump",
              "meaning": "跳高"
            },
            {
              "text": "long jump",
              "meaning": "跳远"
            }
          ],
          "examples": [
            {
              "en": "The Jin Mao Tower is one of the tallest buildings in Shanghai.",
              "zh": "金茂大厦是上海最高的建筑物之一。"
            },
            {
              "en": "I can't jump high.",
              "zh": "我跳不高。"
            },
            {
              "en": "She set a new world record for the high jump.",
              "zh": "她创造了新的跳高世界纪录。"
            }
          ],
          "extensions": [
            {
              "text": "height",
              "pos": "n.",
              "meaning": "高度"
            },
            {
              "text": "weight",
              "pos": "n.",
              "meaning": "体重"
            }
          ],
          "notes": "high 只修饰物；tall 一般修饰人或物。high jump 和 long jump 中的 jump 是名词「跳；跃」。问高度：What's the height of that mountain?"
        },
        {
          "id": "u04-03",
          "no": 3,
          "type": "word",
          "text": "climb",
          "phonetic": "/klaɪm/",
          "pos": "v.",
          "meaning": "攀登；爬（b 不发音）(climbed-climbed-climbing)",
          "door": 28,
          "phrases": [
            {
              "text": "climb a tree",
              "meaning": "爬树"
            },
            {
              "text": "climb up",
              "meaning": "向上爬；攀登"
            },
            {
              "text": "climb down",
              "meaning": "向下爬；爬下"
            },
            {
              "text": "rock climbing",
              "meaning": "攀岩"
            },
            {
              "text": "go rock climbing",
              "meaning": "去攀岩"
            }
          ],
          "examples": [
            {
              "en": "Shall we try rock climbing today?",
              "zh": "我们今天去试试攀岩好吗？"
            },
            {
              "en": "Climb down the ladder.",
              "zh": "爬下梯子。"
            }
          ]
        },
        {
          "id": "u04-04",
          "no": 4,
          "type": "word",
          "text": "safety",
          "phonetic": "/ˈseɪfti/",
          "pos": "n.",
          "meaning": "安全；平安；安全之处",
          "door": 28,
          "phrases": [
            {
              "text": "safety first",
              "meaning": "安全第一"
            },
            {
              "text": "be in safety",
              "meaning": "处于安全中"
            },
            {
              "text": "fasten your safety belt",
              "meaning": "系好你的安全带"
            }
          ],
          "examples": [
            {
              "en": "For your safety, please walk on the pavement.",
              "zh": "为了你的安全，请在人行道上行走。"
            },
            {
              "en": "The plane landed safely.",
              "zh": "飞机安全着陆了。"
            }
          ],
          "extensions": [
            {
              "text": "safe",
              "phonetic": "/seɪf/",
              "pos": "adj. 安全的 (safer-safest)；n. 保险柜 (pl. safes)",
              "meaning": "安全的；保险柜"
            },
            {
              "text": "safely",
              "pos": "adv.",
              "meaning": "安全地"
            },
            {
              "text": "save",
              "pos": "v.",
              "meaning": "救，挽救；节省",
              "phrases": [
                {
                  "text": "save one's life",
                  "meaning": "拯救某人生命"
                },
                {
                  "text": "save time/money",
                  "meaning": "节省时间/钱"
                }
              ]
            }
          ],
          "notes": "-f(e) 直接加 s 变复数的词：safe(s), roof(s), chief(s), chef(s), proof(s)"
        },
        {
          "id": "u04-05",
          "no": 5,
          "type": "word",
          "text": "match",
          "phonetic": "/mætʃ/",
          "pos": "n. & v.",
          "meaning": "比赛，竞赛；火柴 (pl. matches)；与…匹配",
          "door": 28,
          "phrases": [
            {
              "text": "a football match",
              "meaning": "一场足球比赛"
            },
            {
              "text": "win/lose a match",
              "meaning": "赢得/输掉比赛"
            },
            {
              "text": "meet your match",
              "meaning": "棋逢对手"
            }
          ],
          "examples": [
            {
              "en": "The doors were painted blue to match the walls.",
              "zh": "门漆成了蓝色与墙相配。"
            }
          ]
        },
        {
          "id": "u04-06",
          "no": 6,
          "type": "word",
          "text": "example",
          "phonetic": "/ɪɡˈzɑːmpl/",
          "pos": "n.",
          "meaning": "例子；实例；榜样",
          "door": 28,
          "phrases": [
            {
              "text": "for example",
              "meaning": "举个例子；例如"
            },
            {
              "text": "set an example to/for sb.",
              "meaning": "给某人树立一个榜样"
            }
          ],
          "examples": [
            {
              "en": "Can you give me an example to explain what you mean?",
              "zh": "你能给我举个实例来解释你的意思吗？"
            },
            {
              "en": "There are some easy ways for you to be healthier. For example, you can eat a balanced diet and do enough exercise.",
              "zh": "有一些简单的方法能让你更健康。例如，你可以均衡饮食并做足够的运动。"
            },
            {
              "en": "I visited many cities, such as Shanghai, Beijing and Guangzhou.",
              "zh": "我参观过许多城市，如上海、北京和广州。"
            }
          ],
          "notes": "for example & such as 辨析：for example 通常加句子，可放句首、句中或句末；such as 通常加名词及名词性短语，用于列举具体例子。"
        },
        {
          "id": "u04-07",
          "no": 7,
          "type": "phrase",
          "text": "watch out",
          "phonetic": "",
          "pos": "短语",
          "meaning": "小心；留神；注意 (= take care = be careful = look out)",
          "door": 28,
          "phrases": [
            {
              "text": "watch out for sth.",
              "meaning": "小心；注意；提防 (= be careful of sth.)"
            },
            {
              "text": "be careful of",
              "meaning": "小心某物（提醒注意潜在危险或风险）"
            },
            {
              "text": "be careful with sth.",
              "meaning": "小心使用（小心谨慎以免出错）"
            },
            {
              "text": "be careful not to do sth.",
              "meaning": "注意不要…"
            }
          ],
          "examples": [
            {
              "en": "Watch out! There's a car coming!",
              "zh": "小心！汽车来了！"
            },
            {
              "en": "Watch out for pedestrians!",
              "zh": "注意行人！(= Be careful of pedestrians!)"
            },
            {
              "en": "Be careful of the traffic.",
              "zh": "注意交通安全。"
            },
            {
              "en": "Be careful with my glasses.",
              "zh": "小心不要打碎了我的眼镜！"
            },
            {
              "en": "Be careful not to wake up the baby.",
              "zh": "注意别吵醒了宝宝。"
            }
          ]
        },
        {
          "id": "u04-08",
          "no": 8,
          "type": "word",
          "text": "matter",
          "phonetic": "/ˈmætə(r)/",
          "pos": "n. & v.",
          "meaning": "问题；事情；要紧事；麻烦事；要紧；有关系",
          "door": 29,
          "phrases": [
            {
              "text": "What's the matter (with...)?",
              "meaning": "（…）怎么了？"
            },
            {
              "text": "It doesn't matter.",
              "meaning": "不要紧；没关系"
            }
          ],
          "examples": [
            {
              "en": "They have some important matters to discuss.",
              "zh": "他们有些重要的问题要讨论。"
            },
            {
              "en": "What's the matter with your bicycle?",
              "zh": "你的自行车怎么了？"
            }
          ],
          "notes": "「What's the matter?」常用于询问某人或某事是否有问题或不适；对具体对象用 What's the matter with...?"
        },
        {
          "id": "u04-09",
          "no": 9,
          "type": "word",
          "text": "happen",
          "phonetic": "/ˈhæpən/",
          "pos": "v.（不及物）",
          "meaning": "（偶然）发生；碰巧 (happened-happened-happening)",
          "door": 29,
          "phrases": [
            {
              "text": "happen to do sth.",
              "meaning": "碰巧做某事"
            },
            {
              "text": "happen to sb./sth.",
              "meaning": "发生到某人/某事上"
            }
          ],
          "examples": [
            {
              "en": "Accidents like this happen all the time.",
              "zh": "此类事故经常发生。"
            },
            {
              "en": "I happened to see him on my way home yesterday.",
              "zh": "昨天我在回家路上碰巧见到他。"
            },
            {
              "en": "I hope nothing happens to them.",
              "zh": "我希望他们没出事。"
            },
            {
              "en": "What has happened to your car?",
              "zh": "你的车出什么毛病了？"
            },
            {
              "en": "The 2024 Olympic Games took place in Paris, France.",
              "zh": "2024 年奥运会在法国巴黎举行。"
            }
          ],
          "notes": "happen & take place 辨析：均为不及物、无被动、瞬间动词（不与时间段连用）。happen 指偶然的、没有预料的「发生」，常带来不幸或麻烦；take place 指必然性的「发生」或有计划、安排之内的「举行」——Great changes have taken place in China in recent years."
        },
        {
          "id": "u04-10",
          "no": 10,
          "type": "word",
          "text": "just",
          "phonetic": "/dʒʌst/",
          "pos": "adv.",
          "meaning": "仅仅是；只是；刚才",
          "door": 29,
          "phrases": [
            {
              "text": "just now",
              "meaning": "刚才（用于一般过去时）"
            }
          ],
          "examples": [
            {
              "en": "He just wants to win.",
              "zh": "他只是想要赢。"
            },
            {
              "en": "It is just a cat.",
              "zh": "它只是一只猫。"
            },
            {
              "en": "He finished his final task just now.",
              "zh": "他刚才完成了他的最后的任务。"
            }
          ],
          "notes": "位置：be 动词之后，行为动词之前。"
        },
        {
          "id": "u04-11",
          "no": 11,
          "type": "word",
          "text": "fall",
          "phonetic": "/fɔːl/",
          "pos": "v.",
          "meaning": "突然倒下；跌倒 (fell-fallen)",
          "door": 29,
          "examples": [
            {
              "en": "Several of the books fell onto the floor.",
              "zh": "这些书有几本掉到了地上。"
            }
          ],
          "extensions": [
            {
              "text": "fallen",
              "pos": "adj.",
              "meaning": "落在地上的",
              "phrases": [
                {
                  "text": "fallen leaves",
                  "meaning": "落叶"
                }
              ]
            }
          ]
        },
        {
          "id": "u04-12",
          "no": 12,
          "type": "word",
          "text": "cut",
          "phonetic": "/kʌt/",
          "pos": "v. 切；割；n. 伤口",
          "meaning": "切；割；伤口 (cut-cut-cutting)",
          "door": 29,
          "phrases": [
            {
              "text": "cut...into pieces",
              "meaning": "把…切成碎片"
            },
            {
              "text": "cut down",
              "meaning": "砍倒；削减"
            }
          ],
          "examples": [
            {
              "en": "We should stop cutting down trees.",
              "zh": "我们应该停止砍伐树木。"
            },
            {
              "en": "Be careful! Don't cut your finger.",
              "zh": "小心！不要切到你的手指。"
            }
          ]
        },
        {
          "id": "u04-13",
          "no": 13,
          "type": "word",
          "text": "seem",
          "phonetic": "/siːm/",
          "pos": "v.（系动词）",
          "meaning": "好像；似乎；看来",
          "door": 29,
          "phrases": [
            {
              "text": "seem + adj.",
              "meaning": "似乎…"
            },
            {
              "text": "seem like + n.",
              "meaning": "好像…"
            },
            {
              "text": "seem to do",
              "meaning": "好像做某事"
            }
          ],
          "examples": [
            {
              "en": "She seems very young although she is in her sixties.",
              "zh": "尽管六十多岁了，她似乎很年轻。"
            },
            {
              "en": "It seems like a good idea.",
              "zh": "这似乎是个好主意。"
            },
            {
              "en": "That baby seems to be asleep.",
              "zh": "那婴儿好像是睡着了。"
            }
          ],
          "notes": "in one's + 基数词复数 表示「在某人几十岁里」；fall asleep 入睡（asleep 表状态）"
        },
        {
          "id": "u04-14",
          "no": 14,
          "type": "word",
          "text": "problem",
          "phonetic": "/ˈprɒbləm/",
          "pos": "n.",
          "meaning": "问题；难题；习题",
          "door": 29,
          "phrases": [
            {
              "text": "solve/work out the problem",
              "meaning": "解决问题"
            },
            {
              "text": "the solution to the problem",
              "meaning": "问题的解决方法"
            },
            {
              "text": "have problems (in) doing sth.",
              "meaning": "做某事有困难 (= have difficulty (in) doing sth.)"
            }
          ],
          "examples": [
            {
              "en": "He has problems in playing badminton.",
              "zh": "他在打羽毛球方面有困难。"
            }
          ],
          "notes": "同类结构：the key to the door（门的钥匙），to 是介词"
        },
        {
          "id": "u04-15",
          "no": 15,
          "type": "word",
          "text": "score",
          "phonetic": "/skɔː(r)/",
          "pos": "v. & n.",
          "meaning": "得（分）；进（球）；分数",
          "door": 30,
          "phrases": [
            {
              "text": "score a goal",
              "meaning": "进一个球"
            },
            {
              "text": "score a point",
              "meaning": "得一分"
            },
            {
              "text": "get a high/low score",
              "meaning": "得到一个高分/低分"
            }
          ],
          "examples": [
            {
              "en": "He scored the winning goal.",
              "zh": "他踢进了致胜一球。"
            }
          ],
          "notes": "n. 分数的近义词：mark"
        },
        {
          "id": "u04-16",
          "no": 16,
          "type": "word",
          "text": "goal",
          "phonetic": "/ɡəʊl/",
          "pos": "n.",
          "meaning": "进球得分；球门；目标",
          "door": 30,
          "phrases": [
            {
              "text": "achieve the goal",
              "meaning": "实现目标"
            },
            {
              "text": "set a goal",
              "meaning": "设立目标"
            },
            {
              "text": "one's goal is to do",
              "meaning": "某人的目标是…"
            }
          ],
          "examples": [
            {
              "en": "We are down by one goal.",
              "zh": "我们落后一球。"
            },
            {
              "en": "You need to set yourself some long-term goals.",
              "zh": "你得为自己订一些长期目标。"
            }
          ],
          "extensions": [
            {
              "text": "goalkeeper",
              "phonetic": "/ˈɡəʊlkiːpə(r)/",
              "pos": "n.",
              "meaning": "守门员"
            }
          ],
          "notes": "「目标」的近义词：aim, purpose"
        },
        {
          "id": "u04-17",
          "no": 17,
          "type": "word",
          "text": "hold",
          "phonetic": "/həʊld/",
          "pos": "v.",
          "meaning": "使保持；拿着；举办；容纳 (held-held-holding)",
          "door": 30,
          "phrases": [
            {
              "text": "hold one's head up",
              "meaning": "把头抬起来"
            },
            {
              "text": "hold a class meeting",
              "meaning": "举行一个班会"
            },
            {
              "text": "hold on",
              "meaning": "等一等（别挂电话）"
            },
            {
              "text": "hold onto sth.",
              "meaning": "抓紧；不放开"
            },
            {
              "text": "hold one's breath",
              "meaning": "屏住呼吸"
            }
          ],
          "examples": [
            {
              "en": "The girl usually holds her father's hand when she goes out.",
              "zh": "这个小姑娘一出门就拉着她父亲的手。"
            },
            {
              "en": "This room can hold forty people.",
              "zh": "这个房间可以容纳 40 人。"
            }
          ]
        },
        {
          "id": "u04-18",
          "no": 18,
          "type": "word",
          "text": "throw",
          "phonetic": "/θrəʊ/",
          "pos": "v.",
          "meaning": "投；抛；掷 (threw-thrown-throwing)",
          "door": 30,
          "phrases": [
            {
              "text": "throw away",
              "meaning": "扔掉"
            },
            {
              "text": "throw the dice",
              "meaning": "掷色子"
            }
          ],
          "examples": [
            {
              "en": "Stop throwing stones at the window!",
              "zh": "别朝窗户扔石头了！"
            },
            {
              "en": "She threw the ball up and caught it again.",
              "zh": "她把球抛起来又接住。"
            },
            {
              "en": "It's your turn to throw the dice.",
              "zh": "轮到你掷色子了。"
            }
          ]
        },
        {
          "id": "u04-19",
          "no": 19,
          "type": "word",
          "text": "point",
          "phonetic": "/pɔɪnt/",
          "pos": "n. & v.",
          "meaning": "得分；点；观点；重点；用手指向",
          "door": 30,
          "phrases": [
            {
              "text": "score ten points",
              "meaning": "得十分"
            },
            {
              "text": "from my point of view",
              "meaning": "在我看来"
            },
            {
              "text": "make one's point",
              "meaning": "把话说清楚"
            },
            {
              "text": "point at/to/towards",
              "meaning": "指向"
            },
            {
              "text": "point out",
              "meaning": "指出"
            }
          ],
          "examples": [
            {
              "en": "Score ten points for your team!",
              "zh": "为你的队伍得十分！"
            },
            {
              "en": "I know it won't cost much, but that's not the point.",
              "zh": "我知道那花不了多少钱，但这不是重点。"
            },
            {
              "en": "The girl pointed at the moon excitedly.",
              "zh": "小女孩兴奋地用手指向月亮。"
            },
            {
              "en": "He pointed out the dangers of driving alone.",
              "zh": "他指出单独驾车的危险性。"
            }
          ]
        },
        {
          "id": "u04-20",
          "no": 20,
          "type": "word",
          "text": "control",
          "phonetic": "/kənˈtrəʊl/",
          "pos": "v. & n. [u]",
          "meaning": "控制 (controlled-controlled-controlling)",
          "door": 30,
          "phrases": [
            {
              "text": "have/lose control of",
              "meaning": "对…能掌控/失去掌控"
            },
            {
              "text": "under/in control",
              "meaning": "在控制之中"
            },
            {
              "text": "out of control",
              "meaning": "失控"
            }
          ],
          "examples": [
            {
              "en": "Control your mind and body!",
              "zh": "控制你的意志和身体！"
            },
            {
              "en": "He found it difficult to control his feelings.",
              "zh": "他觉得很难克制住自己的感情。"
            },
            {
              "en": "He got so angry that he lost control.",
              "zh": "他气得失去了自制。"
            },
            {
              "en": "Don't worry, everything's under control.",
              "zh": "别担心，一切都控制住了！"
            }
          ],
          "notes": "He found it difficult to... 中 it 为形式宾语"
        },
        {
          "id": "u04-21",
          "no": 21,
          "type": "word",
          "text": "mind",
          "phonetic": "/maɪnd/",
          "pos": "n. & v.",
          "meaning": "头脑；心智，思想；当心；注意；介意",
          "door": 30,
          "phrases": [
            {
              "text": "keep...in one's mind",
              "meaning": "一直记着…"
            },
            {
              "text": "make up one's mind to do",
              "meaning": "下定决心做某事"
            },
            {
              "text": "change one's mind",
              "meaning": "改变主意"
            },
            {
              "text": "mind one's doing sth.",
              "meaning": "介意（某人）做某事"
            },
            {
              "text": "Never mind.",
              "meaning": "没关系（用于回答对不起）"
            }
          ],
          "examples": [
            {
              "en": "All teachers think he has a clear and bright mind.",
              "zh": "所有的老师都认为他头脑清晰，思维敏捷。"
            },
            {
              "en": "Always keep these rules in your mind.",
              "zh": "一直记着这些规则。"
            },
            {
              "en": "Mind the wet floor!",
              "zh": "注意地面湿滑！"
            },
            {
              "en": "You should mind your language in public.",
              "zh": "在公共场合你需要注意自己的言语。"
            },
            {
              "en": "— Do you mind my turning off the light? — Of course not.",
              "zh": "— 你介意我关灯吗？— 当然不。"
            }
          ]
        },
        {
          "id": "u04-22",
          "no": 22,
          "type": "word",
          "text": "powerful",
          "phonetic": "/ˈpaʊəfl/",
          "pos": "adj.",
          "meaning": "强有力的；有权势的",
          "door": 31,
          "examples": [
            {
              "en": "The clean kung fu moves are powerful.",
              "zh": "干净利落的功夫招式是强有力的。"
            },
            {
              "en": "I will do everything in my power to help you.",
              "zh": "我将尽全力帮助你。"
            },
            {
              "en": "This electric car is powered by solar power.",
              "zh": "这个电车是由太阳能驱动的。"
            }
          ],
          "extensions": [
            {
              "text": "power",
              "pos": "n. [u]",
              "meaning": "电源；能源；力量；能力",
              "phrases": [
                {
                  "text": "a rich and powerful man",
                  "meaning": "一个有钱有势的人"
                },
                {
                  "text": "power station",
                  "meaning": "发电站"
                },
                {
                  "text": "solar power",
                  "meaning": "太阳能"
                },
                {
                  "text": "a power failure",
                  "meaning": "停电"
                }
              ]
            },
            {
              "text": "powerless",
              "pos": "adj.",
              "meaning": "无能为力的"
            },
            {
              "text": "power",
              "pos": "v.",
              "meaning": "给…提供动力；驱动…"
            }
          ]
        },
        {
          "id": "u04-23",
          "no": 23,
          "type": "word",
          "text": "moment",
          "phonetic": "/ˈməʊmənt/",
          "pos": "n.",
          "meaning": "片刻；瞬间",
          "door": 31,
          "phrases": [
            {
              "text": "wait a moment",
              "meaning": "稍等一下"
            },
            {
              "text": "at the moment",
              "meaning": "现在 (= at present = now = for the time being，常用于现在进行时)"
            },
            {
              "text": "at that moment",
              "meaning": "那时候；那一刻 (= at that time，常用于过去进行时)"
            }
          ],
          "examples": [
            {
              "en": "Could you wait a moment, please?",
              "zh": "请您稍等一下，好吗？"
            },
            {
              "en": "That was one of the happiest moments of my life.",
              "zh": "那是我一生中最快乐的一段时光。"
            },
            {
              "en": "At the moment, no one is talking to me.",
              "zh": "此刻没人跟我说话。"
            }
          ]
        },
        {
          "id": "u04-24",
          "no": 24,
          "type": "word",
          "text": "report",
          "phonetic": "/rɪˈpɔːt/",
          "pos": "v. & n.",
          "meaning": "汇报；报告；报道",
          "door": 31,
          "phrases": [
            {
              "text": "It is reported that + 句子",
              "meaning": "据报道…"
            },
            {
              "text": "book report",
              "meaning": "读书报告"
            },
            {
              "text": "news reports",
              "meaning": "新闻报道"
            }
          ],
          "examples": [
            {
              "en": "I reported the thief to the police.",
              "zh": "我向警方报告了小偷。"
            },
            {
              "en": "The local press reported the serious traffic accident.",
              "zh": "当地报刊报道了这起严重的交通事故。"
            },
            {
              "en": "It is reported that he has won the game.",
              "zh": "据报道，他赢得了比赛。"
            },
            {
              "en": "Do you like watching news reports?",
              "zh": "你喜欢看新闻报道吗？"
            }
          ],
          "extensions": [
            {
              "text": "reporter",
              "pos": "n.",
              "meaning": "记者 (= journalist)"
            }
          ]
        },
        {
          "id": "u04-25",
          "no": 25,
          "type": "word",
          "text": "newspaper",
          "phonetic": "/ˈnjuːzpeɪpə(r)/",
          "pos": "n. [C]",
          "meaning": "报纸",
          "door": 31,
          "phrases": [
            {
              "text": "a daily/weekly newspaper",
              "meaning": "日报/周报"
            }
          ],
          "examples": [
            {
              "en": "I read about it in the newspaper.",
              "zh": "我在报上看到了这件事。（read 为过去式）"
            }
          ],
          "notes": "合成词：news（新闻 [u]）+ paper（纸；纸张 [u]）= newspaper（报纸，可数）"
        },
        {
          "id": "u04-26",
          "no": 26,
          "type": "word",
          "text": "against",
          "phonetic": "/əˈɡenst/",
          "pos": "prep.",
          "meaning": "与…对阵；靠着；与…相反；反对",
          "door": 31,
          "phrases": [
            {
              "text": "play a game against",
              "meaning": "与…进行一场比赛"
            },
            {
              "text": "against the law",
              "meaning": "违法"
            },
            {
              "text": "lean against the wall",
              "meaning": "靠着墙"
            },
            {
              "text": "be against",
              "meaning": "反对（支持：be for / in favor of）"
            }
          ],
          "examples": [
            {
              "en": "On the basketball court, our class is playing a game against Class 4.",
              "zh": "篮球场上，我们班正在和 4 班进行一场比赛。"
            },
            {
              "en": "That's against the law.",
              "zh": "那是违法的。"
            },
            {
              "en": "When Emily told her decision to her parents, they were against it.",
              "zh": "当 Emily 把她的决定告诉她父母的时候，他们都反对她。"
            }
          ]
        },
        {
          "id": "u04-27",
          "no": 27,
          "type": "word",
          "text": "shoot",
          "phonetic": "/ʃuːt/",
          "pos": "v.",
          "meaning": "射门；投篮；射击；拍摄 (shot-shot-shooting)",
          "door": 31,
          "examples": [
            {
              "en": "He is jumping high into the air, shooting the ball at the basket.",
              "zh": "他正高高跳起，把球朝篮筐投去。"
            },
            {
              "en": "A man was shot in the leg.",
              "zh": "一个人被射中腿部。"
            },
            {
              "en": "Where was the movie shot?",
              "zh": "那部电影是在哪儿拍的？"
            }
          ]
        },
        {
          "id": "u04-28",
          "no": 28,
          "type": "word",
          "text": "tie",
          "phonetic": "/taɪ/",
          "pos": "v. & n.",
          "meaning": "（比赛或竞争中）得分相同；平局 (tied-tied-tying)",
          "door": 31,
          "examples": [
            {
              "en": "We tie the game. Bravo!",
              "zh": "我们打成平局了。万岁！"
            },
            {
              "en": "England tied 2-2 with Germany in the first round.",
              "zh": "在第一轮比赛中英格兰队与德国队以 2:2 打成平局。"
            },
            {
              "en": "The match ended in a tie.",
              "zh": "这场比赛以平局结束。"
            }
          ],
          "notes": "本单元义项为体育「平局」；U2 学过 tie n. 纽带/领带、v. 捆绑"
        },
        {
          "id": "u04-29",
          "no": 29,
          "type": "word",
          "text": "track",
          "phonetic": "/træk/",
          "pos": "n. & v.",
          "meaning": "（赛跑、赛车等的）跑道；足迹，踪迹；追踪",
          "door": 31,
          "phrases": [
            {
              "text": "on the running track",
              "meaning": "在跑道上"
            }
          ],
          "examples": [
            {
              "en": "We followed the bear's tracks in the snow.",
              "zh": "我们跟着熊在雪地上留下的足迹走。"
            },
            {
              "en": "The police were tracking a criminal.",
              "zh": "警方正在追踪一名罪犯。"
            }
          ]
        }
      ]
    },
    {
      "unitId": "u05-animals",
      "title": "U5 Animals and us 词汇讲义",
      "sourceImages": [
        "assets/handouts/2026-08-22d_0001.JPG",
        "assets/handouts/2026-08-22d_0002.JPG",
        "assets/handouts/2026-08-22d_0003.JPG",
        "assets/handouts/2026-08-22d_0004.JPG",
        "assets/handouts/2026-08-22d_0005.JPG",
        "assets/handouts/2026-08-22d_0006.JPG",
        "assets/handouts/2026-08-22d_0007.JPG",
        "assets/handouts/2026-08-22d_0008.JPG"
      ],
      "pageMap": {},
      "missingPages": "",
      "dictationExtra": [],
      "entries": [
        {
          "id": "u05-01",
          "no": 1,
          "type": "word",
          "text": "amazing",
          "phonetic": "/əˈmeɪzɪŋ/",
          "pos": "adj.",
          "meaning": "令人大为惊奇的；令人惊喜或惊叹的",
          "door": 32,
          "phrases": [
            {
              "text": "be amazed at",
              "meaning": "对…感到吃惊的"
            },
            {
              "text": "be amazed to do sth.",
              "meaning": "做某事感到惊讶"
            },
            {
              "text": "to one's amazement",
              "meaning": "令某人吃惊的是"
            }
          ],
          "examples": [
            {
              "en": "It is amazing for a 2-year-old child to dress himself.",
              "zh": "一个2岁的孩子自己能穿衣服真令人吃惊。"
            },
            {
              "en": "We are amazed at his learning ability.",
              "zh": "我们对于他的学习能力感到大为吃惊。"
            },
            {
              "en": "To our amazement, he passed the exam.",
              "zh": "令我们吃惊的是，他通过了这次考试。"
            }
          ],
          "notes": "词族：amaze v. 使惊奇（sth. amazes sb.）；amazed adj. 感到惊讶的（修饰人），amazing 修饰物；amazement n. 惊奇，诧异"
        },
        {
          "id": "u05-02",
          "no": 2,
          "type": "word",
          "text": "website",
          "phonetic": "/ˈwebsaɪt/",
          "pos": "n.",
          "meaning": "网站",
          "door": 32,
          "examples": [
            {
              "en": "For more information, please visit our website.",
              "zh": "更多信息，请访问我们的网站。"
            }
          ],
          "notes": "web n. 网；网状物；website = web（网）+ site（地点）"
        },
        {
          "id": "u05-03",
          "no": 3,
          "type": "word",
          "text": "feed",
          "phonetic": "/fiːd/",
          "pos": "v.",
          "meaning": "给（人或动物）食物；喂养 (fed-fed-feeding)",
          "door": 32,
          "examples": [
            {
              "en": "Feeding animals is not allowed in the zoo.",
              "zh": "动物园里禁止给动物喂食。"
            }
          ],
          "notes": "动名词作主语：Feeding animals 作主语时谓语用单数"
        },
        {
          "id": "u05-04",
          "no": 4,
          "type": "word",
          "text": "remember",
          "phonetic": "/rɪˈmembə(r)/",
          "pos": "v.",
          "meaning": "记得；记起",
          "door": 32,
          "phrases": [
            {
              "text": "remember to do sth.",
              "meaning": "记得要做某事（事情还未做）"
            },
            {
              "text": "remember doing sth.",
              "meaning": "记得曾做过某事（事情已做过）"
            },
            {
              "text": "forget to do sth.",
              "meaning": "忘记要去做某事（事情还未做）"
            },
            {
              "text": "forget doing sth.",
              "meaning": "忘记做过某事（事情已做过）"
            }
          ],
          "examples": [
            {
              "en": "Remember to turn off the lights when you leave.",
              "zh": "离开之前记得要关灯。"
            },
            {
              "en": "I remember turning off the lights when I left.",
              "zh": "我记得走的时候关了灯。"
            },
            {
              "en": "Did you remember to do the shopping?",
              "zh": "你记得要去购物吗？"
            },
            {
              "en": "I remember meeting her at a party once.",
              "zh": "我记得在一次聚会上见过她。"
            }
          ],
          "notes": "Remember to do sth. = Don't forget to do sth. 例：Remember to call your mother every day. = Don't forget to call your mother every day."
        },
        {
          "id": "u05-05",
          "no": 5,
          "type": "word",
          "text": "collect",
          "phonetic": "/kəˈlekt/",
          "pos": "v.",
          "meaning": "收集；采集",
          "door": 32,
          "phrases": [
            {
              "text": "collect stamps",
              "meaning": "收集邮票"
            },
            {
              "text": "collect shells",
              "meaning": "收集贝壳"
            },
            {
              "text": "collect sb. = pick sb. up",
              "meaning": "接某人（送某人：take sb. to sp.）"
            },
            {
              "text": "a collection of",
              "meaning": "一批；一系列"
            }
          ],
          "examples": [
            {
              "en": "My father collects me from school every day.",
              "zh": "我爸爸每天接我放学。"
            },
            {
              "en": "He has a collection of stamps from all over the world.",
              "zh": "他有一系列来自世界各地的邮票。"
            }
          ],
          "notes": "词族：collection n. 收集；收藏品；collector n. 收藏家；collective adj. 集体的；共有的（make a collective decision 做出集体的决定）"
        },
        {
          "id": "u05-06",
          "no": 6,
          "type": "word",
          "text": "recognise",
          "phonetic": "/ˈrekəɡnaɪz/",
          "pos": "v.",
          "meaning": "识别；认出（= recognize）",
          "door": 32,
          "phrases": [
            {
              "text": "facial recognition",
              "meaning": "面部识别"
            }
          ],
          "examples": [
            {
              "en": "He recognised me at first sight.",
              "zh": "他第一眼就认出了我。"
            },
            {
              "en": "She is a recognized expert in this field.",
              "zh": "她是这个领域公认的专家。"
            }
          ],
          "notes": "词族：recognition n. 认识；识别；recognized adj. 公认的"
        },
        {
          "id": "u05-07",
          "no": 7,
          "type": "word",
          "text": "care",
          "phonetic": "/keə(r)/",
          "pos": "n. & v.",
          "meaning": "照顾；照看；关心；在意",
          "door": 32,
          "phrases": [
            {
              "text": "take care of = look after",
              "meaning": "照顾"
            },
            {
              "text": "with care",
              "meaning": "小心"
            },
            {
              "text": "take care",
              "meaning": "当心；保重"
            },
            {
              "text": "care for",
              "meaning": "照顾"
            }
          ],
          "examples": [
            {
              "en": "Though she is only 7, she can take care of herself.",
              "zh": "虽然她只有7岁，但她能照顾自己。"
            },
            {
              "en": "You must use this instrument with great care.",
              "zh": "你必须非常小心地使用这个仪器。"
            },
            {
              "en": "Take care when you cross the road.",
              "zh": "过马路时要小心。"
            },
            {
              "en": "I care for my little sister when my parents are out.",
              "zh": "当我父母外出时，我照顾我的小妹妹。"
            }
          ],
          "notes": "词族：careful adj. 小心的；仔细的 ↔ careless adj. 粗心的；carefully adv. 仔细地 ↔ carelessly adv. 粗心地；carefulness n. 仔细；慎重 ↔ carelessness n. 粗心大意"
        },
        {
          "id": "u05-08",
          "no": 8,
          "type": "word",
          "text": "keeper",
          "phonetic": "/ˈkiːpə(r)/",
          "pos": "n.",
          "meaning": "饲养员",
          "door": 32,
          "phrases": [
            {
              "text": "a zoo keeper",
              "meaning": "一个动物管理员"
            },
            {
              "text": "keep healthy",
              "meaning": "保持健康"
            },
            {
              "text": "keep quiet",
              "meaning": "保持安静"
            },
            {
              "text": "keep away from",
              "meaning": "避开"
            },
            {
              "text": "keep off",
              "meaning": "不接近；勿踏"
            },
            {
              "text": "keep sb. from doing sth.",
              "meaning": "阻止某人做某事；免于做…"
            }
          ],
          "examples": [
            {
              "en": "My grandfather keeps some chickens in the yard.",
              "zh": "我祖父在院子里养了一些鸡。"
            },
            {
              "en": "The fence keeps the dog from running away.",
              "zh": "围栏阻止狗跑掉。"
            },
            {
              "en": "I'm sorry for keeping you waiting for a long time.",
              "zh": "很抱歉让你久等。"
            }
          ],
          "notes": "keep v. 保存；饲养；保持（保持类系动词还有 stay、remain）：keep + (n.) + adj.（keep the room clean 保持房间干净）；keep (sb.) doing"
        },
        {
          "id": "u05-09",
          "no": 9,
          "type": "word",
          "text": "prefer",
          "phonetic": "/prɪˈfɜː(r)/",
          "pos": "v.",
          "meaning": "较喜欢；喜欢…多于… (preferred-preferred-preferring)",
          "door": 33,
          "phrases": [
            {
              "text": "prefer A to B = like A better than B",
              "meaning": "喜欢A多于B"
            },
            {
              "text": "prefer doing A to doing B",
              "meaning": "比起做B更喜欢做A"
            },
            {
              "text": "prefer to do sth.",
              "meaning": "更偏爱做某事"
            }
          ],
          "examples": [
            {
              "en": "She prefers tea to coffee.",
              "zh": "比起咖啡，她更喜欢茶。"
            },
            {
              "en": "I prefer to work alone.",
              "zh": "我更喜欢独立工作。"
            }
          ],
          "notes": "preference n. 偏爱；注意双写 r：preferred, preferring"
        },
        {
          "id": "u05-10",
          "no": 10,
          "type": "phrase",
          "text": "get along with",
          "phonetic": "",
          "pos": "短语",
          "meaning": "（与某人）和睦相处；关系良好（= get on with sb.）；（某事物）进展",
          "door": 33,
          "examples": [
            {
              "en": "What are your neighbours like? Do you get along well with them?",
              "zh": "你的邻居们怎么样？你和他们相处融洽吗？"
            },
            {
              "en": "How do you get along with your English studies?",
              "zh": "你的英语学习进展如何？"
            }
          ],
          "notes": "接 sb. 表示相处；接 sth. 表示进展"
        },
        {
          "id": "u05-11",
          "no": 11,
          "type": "word",
          "text": "sign",
          "phonetic": "/saɪn/",
          "pos": "n. & v.",
          "meaning": "标牌；指示牌；在（文件等）上签（名）；签字",
          "door": 33,
          "phrases": [
            {
              "text": "warning signs",
              "meaning": "警告标志"
            }
          ],
          "examples": [
            {
              "en": "Please sign your name here.",
              "zh": "请在这儿签你的名字。"
            }
          ],
          "notes": "signature n. 签名；签字；署名"
        },
        {
          "id": "u05-12",
          "no": 12,
          "type": "word",
          "text": "bite",
          "phonetic": "/baɪt/",
          "pos": "v. & n.",
          "meaning": "咬 (bit-bitten-biting)；咬下的一口",
          "door": 33,
          "phrases": [
            {
              "text": "eat sth. in one bite",
              "meaning": "将某物一口吃下去"
            }
          ],
          "examples": [
            {
              "en": "That dog bit me in the leg just now.",
              "zh": "那条狗刚才咬了我的腿。"
            },
            {
              "en": "Stop biting your nails!",
              "zh": "别再咬指甲了！"
            }
          ]
        },
        {
          "id": "u05-13",
          "no": 13,
          "type": "word",
          "text": "pet",
          "phonetic": "/pet/",
          "pos": "n. & v.",
          "meaning": "宠物；抚摸；（爱抚地）摩挲 (petted-petted-petting)",
          "door": 33,
          "examples": [
            {
              "en": "I like to pet my cat gently.",
              "zh": "我喜欢轻轻地抚摸我的猫。"
            }
          ],
          "notes": "注意双写 t：petted, petting"
        },
        {
          "id": "u05-14",
          "no": 14,
          "type": "word",
          "text": "peck",
          "phonetic": "/pek/",
          "pos": "v.",
          "meaning": "啄 (pecked-pecked-pecking)",
          "door": 33,
          "examples": [
            {
              "en": "The birds are pecking at seeds on the ground.",
              "zh": "鸟儿正在地上啄食种子。"
            }
          ]
        },
        {
          "id": "u05-15",
          "no": 15,
          "type": "word",
          "text": "warning",
          "phonetic": "/ˈwɔːnɪŋ/",
          "pos": "n.",
          "meaning": "警告；警示",
          "door": 33,
          "phrases": [
            {
              "text": "warn sb. of/about sth.",
              "meaning": "提醒/警告某人某事（尤指可能有危险或有不良后果的事）"
            },
            {
              "text": "warn sb. not to do sth. = warn sb. against doing sth.",
              "meaning": "警告某人不要做某事"
            }
          ],
          "examples": [
            {
              "en": "The policemen warned us of possible thieves.",
              "zh": "警察提醒我们可能有小偷。"
            },
            {
              "en": "They were warned not to climb the mountain in such bad weather.",
              "zh": "已经劝过他们不要在那么坏的天气攀登那座山。"
            }
          ],
          "notes": "warn v. 警告，警示"
        },
        {
          "id": "u05-16",
          "no": 16,
          "type": "word",
          "text": "sweet",
          "phonetic": "/swiːt/",
          "pos": "adj. & n.",
          "meaning": "含糖的；甜的 (sweeter-sweetest)；糖果（常用复数 sweets）",
          "door": 34,
          "phrases": [
            {
              "text": "a packet of sweets",
              "meaning": "一袋糖果"
            }
          ],
          "examples": [
            {
              "en": "Mom bought me a packet of sweets.",
              "zh": "妈妈给我买了一袋糖果。"
            }
          ]
        },
        {
          "id": "u05-17",
          "no": 17,
          "type": "word",
          "text": "loud",
          "phonetic": "/laʊd/",
          "pos": "adj.",
          "meaning": "大声的；喧闹的 (louder-loudest)",
          "door": 34,
          "examples": [
            {
              "en": "That music is too loud; please turn it down.",
              "zh": "那音乐太吵了，请把音量调低些。"
            }
          ],
          "notes": "词族：loudly adv. 大声地，吵闹地；loudness n. 高声；响度，音量；loudspeaker n. 扩音器，扬声器"
        },
        {
          "id": "u05-18",
          "no": 18,
          "type": "word",
          "text": "noise",
          "phonetic": "/nɔɪz/",
          "pos": "n.",
          "meaning": "噪音；响声",
          "door": 34,
          "phrases": [
            {
              "text": "make (much) noise",
              "meaning": "发出（太多）噪音（不可数：a loud or unpleasant sound）"
            },
            {
              "text": "make a noise",
              "meaning": "发出一声响（可数：a sound）"
            }
          ],
          "examples": [
            {
              "en": "The neighbours said that we were making too much noise.",
              "zh": "邻居说我们发出了太多噪音。"
            },
            {
              "en": "I heard a loud noise and ran to the window.",
              "zh": "我听到一声巨响，跑到了窗户前。"
            }
          ],
          "notes": "词族：noisy adj. 吵闹的，发出噪声的（noisier-noisiest）；noisily adv. 吵闹地"
        },
        {
          "id": "u05-19",
          "no": 19,
          "type": "word",
          "text": "meaning",
          "phonetic": "/ˈmiːnɪŋ/",
          "pos": "n.",
          "meaning": "意义；意思",
          "door": 34,
          "phrases": [
            {
              "text": "What's the meaning of sth.? = What does sth. mean?",
              "meaning": "…的意思是什么？"
            },
            {
              "text": "mean (sth.) to sb.",
              "meaning": "对某人而言意味着什么"
            },
            {
              "text": "mean doing sth.",
              "meaning": "意味着做某事"
            },
            {
              "text": "mean to do sth.",
              "meaning": "打算做某事"
            }
          ],
          "examples": [
            {
              "en": "What do you mean by that strange look on your face?",
              "zh": "你脸上那种奇怪的表情是什么意思呀？"
            },
            {
              "en": "Money means nothing to him.",
              "zh": "金钱对他来说是无所谓的。"
            },
            {
              "en": "I had meant to go running this morning, but I overslept.",
              "zh": "我本打算今天早上去跑步，但我睡过头了。"
            },
            {
              "en": "Dieting also means being careful about which food you buy.",
              "zh": "节食也意味着要留意你买的食物。"
            }
          ],
          "notes": "mean v. 意思是；打算（meant-meant）；mean adj. 卑鄙的，刻薄的（Don't be so mean to your classmates. 不要总是对你的同学那么刻薄）；meaningful adj. 富有意义的；意味深长的（a meaningful debate / a meaningful look）；meaningless adj. 无意义的，无价值的"
        },
        {
          "id": "u05-20",
          "no": 20,
          "type": "word",
          "text": "shout",
          "phonetic": "/ʃaʊt/",
          "pos": "v.",
          "meaning": "大声说；叫（不用于被动语态）",
          "door": 34,
          "phrases": [
            {
              "text": "shout to/at sb.",
              "meaning": "向某人喊叫"
            }
          ],
          "examples": [
            {
              "en": "He shouted to me that the boat was sinking.",
              "zh": "他向我大声喊叫说船要沉了。"
            }
          ]
        },
        {
          "id": "u05-21",
          "no": 21,
          "type": "word",
          "text": "if",
          "phonetic": "/ɪf/",
          "pos": "conj.",
          "meaning": "如果",
          "door": 34,
          "examples": [
            {
              "en": "If it rains tomorrow, our sports meeting will be held next week.",
              "zh": "如果明天下雨，我们的运动会就下周举行。"
            },
            {
              "en": "If the car doesn't come, we will miss the plane.",
              "zh": "如果车还不来，我们就会错过飞机。"
            }
          ],
          "notes": "if 引导的条件状语从句：\"主将从现\"——主句用一般将来时，从句用一般现在时"
        },
        {
          "id": "u05-22",
          "no": 22,
          "type": "word",
          "text": "could",
          "phonetic": "/kʊd/",
          "pos": "modal v.",
          "meaning": "能；会（can 的过去式，表示过去的能力）；表示委婉语气",
          "door": 34,
          "examples": [
            {
              "en": "He could write poems when he was ten.",
              "zh": "他十岁时就会写诗了。"
            },
            {
              "en": "Could you do me a favor?",
              "zh": "你可以帮我一个忙吗？"
            }
          ],
          "notes": "could 在疑问句中表示委婉语气，此时没有过去式的意思"
        },
        {
          "id": "u05-23",
          "no": 23,
          "type": "word",
          "text": "diary",
          "phonetic": "/ˈdaɪəri/",
          "pos": "n.",
          "meaning": "日记；日记簿",
          "door": 34,
          "phrases": [
            {
              "text": "keep a diary",
              "meaning": "写日记"
            }
          ],
          "examples": [
            {
              "en": "I keep a diary every day.",
              "zh": "我每天写日记。"
            }
          ],
          "notes": "形近词辨析：dairy /ˈdeəri/ n. 奶制品——diary（日记）和 dairy（奶制品）只是字母顺序不同"
        },
        {
          "id": "u05-24",
          "no": 24,
          "type": "word",
          "text": "direct",
          "phonetic": "/dəˈrekt; daɪˈrekt/",
          "pos": "v. & adj.",
          "meaning": "指路；领路；指导；直接的",
          "door": 35,
          "phrases": [
            {
              "text": "direct sb. to sp.",
              "meaning": "把某人带到某地"
            },
            {
              "text": "in the direction of",
              "meaning": "朝着…的方向"
            }
          ],
          "examples": [
            {
              "en": "The teacher directs the students to the hall from the classroom.",
              "zh": "老师把学生从教室带到了礼堂。"
            },
            {
              "en": "He is walking in the direction of the bedroom.",
              "zh": "他朝着卧室的方向在走。"
            }
          ],
          "notes": "词族：direction n. 方向；direct adj. 直接的 ↔ indirect adj. 间接的"
        },
        {
          "id": "u05-25",
          "no": 25,
          "type": "word",
          "text": "glad",
          "phonetic": "/ɡlæd/",
          "pos": "adj.",
          "meaning": "高兴；愉快",
          "door": 35,
          "phrases": [
            {
              "text": "be glad to do sth.",
              "meaning": "高兴做某事"
            }
          ],
          "examples": [
            {
              "en": "Glad to see you!",
              "zh": "很高兴见到你！(= Nice to meet you.)"
            }
          ]
        },
        {
          "id": "u05-26",
          "no": 26,
          "type": "word",
          "text": "believe",
          "phonetic": "/bɪˈliːv/",
          "pos": "v.",
          "meaning": "相信",
          "door": 35,
          "phrases": [
            {
              "text": "believe sb.",
              "meaning": "相信某人（说的话）"
            },
            {
              "text": "believe in sb./sth.",
              "meaning": "信任某人/某事"
            },
            {
              "text": "believe it or not",
              "meaning": "信不信由你"
            },
            {
              "text": "It is believed that...",
              "meaning": "人们认为…"
            }
          ],
          "examples": [
            {
              "en": "I can hardly believe it.",
              "zh": "我几乎不敢相信。"
            },
            {
              "en": "They don't believe in marriage.",
              "zh": "他们不相信婚姻。"
            },
            {
              "en": "Believe it or not, pets are loyal to their owners.",
              "zh": "信不信由你，宠物是忠于它们的主人的。"
            },
            {
              "en": "It is believed that dogs are friendly to humans.",
              "zh": "人们认为狗狗对人类很友好。"
            }
          ],
          "notes": "词族：belief n. 相信；信念（复数 beliefs）；believable adj. 可信的；unbelievable adj. 不可信的，难以置信的"
        },
        {
          "id": "u05-27",
          "no": 27,
          "type": "word",
          "text": "unforgettable",
          "phonetic": "/ˌʌnfəˈɡetəbl/",
          "pos": "adj.",
          "meaning": "令人难忘的",
          "door": 35,
          "phrases": [
            {
              "text": "an unforgettable trip",
              "meaning": "一次令人难忘的旅行"
            }
          ],
          "examples": [
            {
              "en": "She has become forgetful these years.",
              "zh": "近年来她变得十分健忘。"
            }
          ],
          "notes": "反义词：forgettable adj. 易忘的；forgetful adj. 健忘的"
        },
        {
          "id": "u05-28",
          "no": 28,
          "type": "word",
          "text": "smooth",
          "phonetic": "/smuːð/",
          "pos": "adj.",
          "meaning": "光滑的；平坦的；平整的；平稳的",
          "door": 35,
          "examples": [
            {
              "en": "The silk scarf feels smooth.",
              "zh": "这块丝巾摸起来很光滑。"
            },
            {
              "en": "The plane made a smooth landing.",
              "zh": "飞机平稳降落。"
            }
          ],
          "notes": "smoothly adv. 平稳地；光滑地"
        },
        {
          "id": "u05-29",
          "no": 29,
          "type": "word",
          "text": "friendly",
          "phonetic": "/ˈfrendli/",
          "pos": "adj.",
          "meaning": "友爱的；友好的 (friendlier-friendliest)",
          "door": 35,
          "phrases": [
            {
              "text": "be friendly to sb.",
              "meaning": "对某人友好"
            },
            {
              "text": "make friends with sb.",
              "meaning": "和某人交朋友"
            }
          ],
          "examples": [
            {
              "en": "Dogs are friendly to humans.",
              "zh": "狗狗对人类很友好。"
            }
          ],
          "notes": "词族：friend n. 朋友；friendship n. 友谊"
        },
        {
          "id": "u05-30",
          "no": 30,
          "type": "word",
          "text": "ride",
          "phonetic": "/raɪd/",
          "pos": "v. & n.",
          "meaning": "骑马；驾驶；骑车 (rode-ridden-riding)；乘骑旅行；搭乘旅行",
          "door": 35,
          "phrases": [
            {
              "text": "ride a bike",
              "meaning": "骑自行车"
            },
            {
              "text": "give sb. a ride",
              "meaning": "让某人搭便车"
            }
          ],
          "examples": [
            {
              "en": "Can you give me a ride to the station?",
              "zh": "我可以搭你的便车去车站吗？"
            },
            {
              "en": "It's a 15-minute ride from my home to school.",
              "zh": "我从家到学校骑自行车15分钟。"
            }
          ],
          "notes": "对路程提问：How far is it from your home to school? 从你家到学校有多远？"
        }
      ]
    },
    {
      "unitId": "u06-travel",
      "title": "U6 Travelling around China 词汇讲义",
      "sourceImages": [
        "assets/handouts/2026-08-22e_0001.JPG",
        "assets/handouts/2026-08-22e_0002.JPG",
        "assets/handouts/2026-08-22e_0003.JPG",
        "assets/handouts/2026-08-22e_0004.JPG",
        "assets/handouts/2026-08-22e_0005.JPG",
        "assets/handouts/2026-08-22e_0006.JPG",
        "assets/handouts/2026-08-22e_0007.JPG",
        "assets/handouts/2026-08-22e_0008.JPG",
        "assets/handouts/2026-08-22e_0009.JPG",
        "assets/handouts/2026-08-22e_0010.JPG",
        "assets/handouts/2026-08-22e_0011.JPG",
        "assets/handouts/2026-08-22e_0012.JPG"
      ],
      "pageMap": {},
      "missingPages": "",
      "dictationExtra": [],
      "entries": [
        {
          "id": "u06-01",
          "no": 1,
          "type": "word",
          "text": "around",
          "phonetic": "/əˈraʊnd/",
          "pos": "prep. & adv.",
          "meaning": "在…周围；在周围；大约",
          "door": 36,
          "phrases": [
            {
              "text": "around the world = all over the world = across the world",
              "meaning": "全世界"
            },
            {
              "text": "show sb. around sp.",
              "meaning": "带领某人参观某地"
            }
          ],
          "examples": [
            {
              "en": "The Earth turns around the Sun.",
              "zh": "地球绕着太阳转。"
            },
            {
              "en": "Li Bailing is showing Harry around her school.",
              "zh": "李百灵正带着Harry参观她的学校。"
            },
            {
              "en": "The students are running around outside.",
              "zh": "学生们在外面到处跑。"
            }
          ],
          "notes": "作介词表示\"在…周围\"，作副词表示\"到处；大约\""
        },
        {
          "id": "u06-02",
          "no": 2,
          "type": "word",
          "text": "vacation",
          "phonetic": "/vəˈkeɪʃn/",
          "pos": "n.",
          "meaning": "假期",
          "door": 36,
          "phrases": [
            {
              "text": "take a vacation",
              "meaning": "休个假"
            },
            {
              "text": "be on vacation in sp.",
              "meaning": "在某地度假"
            },
            {
              "text": "summer vacation = summer holiday",
              "meaning": "暑假"
            }
          ],
          "examples": [
            {
              "en": "You look tired. I think you should take a vacation.",
              "zh": "你看上去有点累。我觉得你应该休个假。"
            },
            {
              "en": "They are on vacation in Germany.",
              "zh": "他们在德国度假。"
            }
          ]
        },
        {
          "id": "u06-03",
          "no": 3,
          "type": "word",
          "text": "trip",
          "phonetic": "/trɪp/",
          "pos": "n. & v.",
          "meaning": "（短途往返的）旅行；旅游；出行；绊；绊倒 (tripped-tripped)",
          "door": 36,
          "phrases": [
            {
              "text": "go on a trip to sp.",
              "meaning": "去某地旅行"
            },
            {
              "text": "a business trip",
              "meaning": "商务旅行"
            },
            {
              "text": "Have a nice trip!",
              "meaning": "旅途愉快！"
            }
          ],
          "examples": [
            {
              "en": "—I will visit Beijing next month. —Have a nice trip.",
              "zh": "——我下个月要去北京。——旅途愉快。"
            },
            {
              "en": "She tripped and fell.",
              "zh": "她绊了一下摔倒了。"
            }
          ],
          "notes": "辨析：trip 通常指往返旅行（a three-day trip 三日游）；journey 尤指长途旅行（the journey to the west 西天取经）；tour 指游览多地的旅行；outing 指集体远足（an autumn outing 秋游）。trip 作动词\"绊倒\"注意双写 p"
        },
        {
          "id": "u06-04",
          "no": 4,
          "type": "word",
          "text": "popular",
          "phonetic": "/ˈpɒpjələ(r)/",
          "pos": "adj.",
          "meaning": "大众喜爱的；广受欢迎的；当红的 (more popular-most popular)",
          "door": 36,
          "phrases": [
            {
              "text": "be popular with/among sb.",
              "meaning": "受某人的欢迎"
            },
            {
              "text": "popular music/culture",
              "meaning": "流行音乐/文化"
            }
          ],
          "examples": [
            {
              "en": "Keeping pets is becoming popular.",
              "zh": "养宠物正变得很流行。"
            },
            {
              "en": "Our PE teacher is very popular among his students.",
              "zh": "我们的体育老师很受学生欢迎。"
            },
            {
              "en": "Rock climbing is growing in popularity these days.",
              "zh": "攀岩这些天变得越来越受欢迎了。"
            }
          ],
          "notes": "词族：popularity n. 流行（gain popularity 越来越受欢迎）；unpopular adj. 不受欢迎的"
        },
        {
          "id": "u06-05",
          "no": 5,
          "type": "word",
          "text": "tour",
          "phonetic": "/tʊə(r)/",
          "pos": "n. & v.",
          "meaning": "旅行；旅游；在…旅游；在…巡回演出",
          "door": 36,
          "phrases": [
            {
              "text": "go on a tour to sp.",
              "meaning": "去某地旅游"
            },
            {
              "text": "a sightseeing tour",
              "meaning": "观光游"
            },
            {
              "text": "a tour guide",
              "meaning": "导游"
            }
          ],
          "examples": [
            {
              "en": "Shall we go on a tour to Europe this winter?",
              "zh": "我们今年冬天去欧洲旅游好吗？"
            },
            {
              "en": "We spent four weeks touring in Europe.",
              "zh": "我们花四个星期周游欧洲。"
            }
          ],
          "notes": "词族：tourist n. 游客；tourism n. 旅游业"
        },
        {
          "id": "u06-06",
          "no": 6,
          "type": "word",
          "text": "tip",
          "phonetic": "/tɪp/",
          "pos": "n.",
          "meaning": "指点，实用的提示；小费",
          "door": 36,
          "phrases": [
            {
              "text": "leave a tip",
              "meaning": "留小费"
            },
            {
              "text": "tips on how to do sth.",
              "meaning": "如何做某事的窍门"
            }
          ],
          "examples": [
            {
              "en": "Here are a few useful tips on how to save money.",
              "zh": "这里有几个省钱的窍门。"
            },
            {
              "en": "The book introduces many gardening tips.",
              "zh": "这本书介绍了很多园艺技巧。"
            }
          ],
          "notes": "近义词：suggestion（可数）、advice（不可数）。习语：on the tip of your tongue 话到嘴边（却一时想不起来）；the tip of the iceberg 冰山一角"
        },
        {
          "id": "u06-07",
          "no": 7,
          "type": "word",
          "text": "footprint",
          "phonetic": "/ˈfʊtprɪnt/",
          "pos": "n.",
          "meaning": "脚印，足迹",
          "door": 36,
          "examples": [
            {
              "en": "I left chains of footprints on the beach.",
              "zh": "我在沙滩上留下了串串脚印。"
            }
          ],
          "notes": "合成词：foot（脚）+ print（印迹）"
        },
        {
          "id": "u06-08",
          "no": 8,
          "type": "word",
          "text": "hike",
          "phonetic": "/haɪk/",
          "pos": "v.",
          "meaning": "徒步旅行",
          "door": 37,
          "phrases": [
            {
              "text": "go hiking",
              "meaning": "去远足；去徒步"
            }
          ],
          "examples": [
            {
              "en": "They hike on Mount Huangshan.",
              "zh": "他们在黄山徒步。"
            },
            {
              "en": "If the weather is fine, we will go hiking this weekend.",
              "zh": "如果天气好，我们这周末去远足。"
            }
          ],
          "notes": "hiker n. 徒步旅行者；hitchhiker n. 搭便车的人"
        },
        {
          "id": "u06-09",
          "no": 9,
          "type": "word",
          "text": "nature",
          "phonetic": "/ˈneɪtʃə(r)/",
          "pos": "n.",
          "meaning": "大自然",
          "door": 37,
          "phrases": [
            {
              "text": "enjoy nature on horseback",
              "meaning": "在马背上享受自然"
            }
          ],
          "examples": [
            {
              "en": "Water is one of the most important natural resources.",
              "zh": "水是最重要的自然资源之一。"
            },
            {
              "en": "Naturally, I get upset when I don't get along with my classmates.",
              "zh": "当我和同学合不来时，我当然会不开心。"
            }
          ],
          "notes": "词族：natural adj. 自然的 ↔ unnatural adj. 不自然的；naturally adv. 自然地；当然"
        },
        {
          "id": "u06-10",
          "no": 10,
          "type": "word",
          "text": "enjoy",
          "phonetic": "/ɪnˈdʒɔɪ/",
          "pos": "v.",
          "meaning": "享受；欣赏",
          "door": 37,
          "phrases": [
            {
              "text": "enjoy local snacks",
              "meaning": "享受当地小吃"
            },
            {
              "text": "enjoy doing sth.",
              "meaning": "喜欢做某事"
            },
            {
              "text": "enjoy oneself = have a good time = have fun",
              "meaning": "玩得开心"
            }
          ],
          "examples": [
            {
              "en": "I enjoy playing basketball and tennis.",
              "zh": "我喜欢打篮球和网球。"
            },
            {
              "en": "To our great joy, we won the football match.",
              "zh": "令我们大为高兴的是，我们赢得了足球比赛。"
            },
            {
              "en": "We live an enjoyable school life.",
              "zh": "我们过着愉快的学校生活。"
            }
          ],
          "notes": "词族：joy n. 乐趣（jump for joy 欢呼雀跃）；enjoyable adj. 令人愉快的"
        },
        {
          "id": "u06-11",
          "no": 11,
          "type": "word",
          "text": "local",
          "phonetic": "/ˈləʊkl/",
          "pos": "adj. & n.",
          "meaning": "当地的；当地人",
          "door": 37,
          "phrases": [
            {
              "text": "a local farmer",
              "meaning": "一个当地农民"
            },
            {
              "text": "a local newspaper",
              "meaning": "一家地方报纸"
            },
            {
              "text": "be located in",
              "meaning": "坐落于；位于…"
            }
          ],
          "examples": [
            {
              "en": "Shanghai is located in the east of China.",
              "zh": "上海位于中国的东部。"
            },
            {
              "en": "Can you tell me the location of the fire exit?",
              "zh": "你能告诉我消防出口的位置吗？"
            }
          ],
          "notes": "词族：locate v. 定位；location n. 位置；方位；local 作名词指\"当地人\""
        },
        {
          "id": "u06-12",
          "no": 12,
          "type": "word",
          "text": "lazy",
          "phonetic": "/ˈleɪzi/",
          "pos": "adj.",
          "meaning": "懒散的；悠闲的 (lazier-laziest)",
          "door": 37,
          "phrases": [
            {
              "text": "enjoy some lazy days on the beach",
              "meaning": "在海滩享受几天悠闲时光"
            }
          ],
          "examples": [
            {
              "en": "He woke up and stretched lazily.",
              "zh": "他醒来伸了个懒腰。"
            }
          ],
          "notes": "反义词：hardworking adj. 工作努力的。变 y 为 i 的词形变化：lazy→lazily/laziness；同类：easy→easily, busy→busily/business, heavy→heavily, happy→happily/happiness, noisy→noisily, lonely→loneliness"
        },
        {
          "id": "u06-13",
          "no": 13,
          "type": "word",
          "text": "horseback",
          "phonetic": "/ˈhɔːsbæk/",
          "pos": "n.",
          "meaning": "马背",
          "door": 37,
          "phrases": [
            {
              "text": "on horseback",
              "meaning": "在马背上；骑着马"
            }
          ],
          "examples": [
            {
              "en": "The kids pulled him off the horseback.",
              "zh": "孩子们把他从马背上拉了下来。"
            }
          ],
          "notes": "合成词：horse（马）+ back（背）"
        },
        {
          "id": "u06-14",
          "no": 14,
          "type": "word",
          "text": "roof",
          "phonetic": "/ruːf/",
          "pos": "n.",
          "meaning": "屋顶；顶部（复数 roofs）",
          "door": 37,
          "examples": [
            {
              "en": "Look at the red walls and yellow roofs.",
              "zh": "看那些红墙黄屋顶。"
            }
          ],
          "notes": "习语：hit the roof = become very angry 勃然大怒。以 f 结尾变复数直接 +s 的名词：roof→roofs 屋顶、proof→proofs 证据、belief→beliefs 信念、chief→chiefs 首领、cliff→cliffs 悬崖"
        },
        {
          "id": "u06-15",
          "no": 15,
          "type": "word",
          "text": "ski",
          "phonetic": "/skiː/",
          "pos": "v. & n.",
          "meaning": "滑雪 (skied-skied-skiing)；滑雪板",
          "door": 38,
          "phrases": [
            {
              "text": "go skiing",
              "meaning": "去滑雪"
            },
            {
              "text": "cross-country skiing",
              "meaning": "越野滑雪"
            },
            {
              "text": "a pair of skis",
              "meaning": "一副滑雪板"
            }
          ],
          "examples": [
            {
              "en": "Lu Yao went skiing with her family in France last February.",
              "zh": "陆瑶去年二月和家人去法国滑雪了。"
            },
            {
              "en": "I want to try skiing in Harbin.",
              "zh": "我想在哈尔滨试试滑雪。"
            },
            {
              "en": "It's easy to take up cross-country skiing.",
              "zh": "从事越野滑雪是容易的。"
            }
          ],
          "notes": "skier n. 滑雪者"
        },
        {
          "id": "u06-16",
          "no": 16,
          "type": "word",
          "text": "reason",
          "phonetic": "/ˈriːzn/",
          "pos": "n.",
          "meaning": "原因；理由",
          "door": 38,
          "phrases": [
            {
              "text": "for these reasons",
              "meaning": "由于这些原因"
            },
            {
              "text": "without giving a reason",
              "meaning": "没有说明理由"
            }
          ],
          "examples": [
            {
              "en": "He left without giving a reason.",
              "zh": "他没有说明理由就走了。"
            },
            {
              "en": "For these reasons, Lu Yao chose to go to Chengdu for a vacation.",
              "zh": "由于这些原因，陆瑶选择去成都度假。"
            }
          ],
          "notes": "词族：reasonable adj. 合理的 ↔ unreasonable adj. 不合理的；reasonably adv. 合理地。形容词前加 un 变反义词：happy→unhappy、lucky→unlucky、kind→unkind、important→unimportant、comfortable→uncomfortable、tidy→untidy、usual→unusual、necessary→unnecessary"
        },
        {
          "id": "u06-17",
          "no": 17,
          "type": "word",
          "text": "book",
          "phonetic": "/bʊk/",
          "pos": "v. & n.",
          "meaning": "预约；预定；书",
          "door": 38,
          "phrases": [
            {
              "text": "book a table for two",
              "meaning": "订一张二人餐桌"
            },
            {
              "text": "booking office",
              "meaning": "（车站、剧院等的）售票处"
            },
            {
              "text": "book in advance",
              "meaning": "提前预订"
            }
          ],
          "examples": [
            {
              "en": "I'd like to book a table for two tonight.",
              "zh": "我想订一张今晚的二人餐桌。"
            }
          ],
          "notes": "book 除了\"书\"，作动词常考\"预订\""
        },
        {
          "id": "u06-18",
          "no": 18,
          "type": "word",
          "text": "drive",
          "phonetic": "/draɪv/",
          "pos": "v. & n.",
          "meaning": "驾驶；开车 (drove-driven-driving)；车程",
          "door": 38,
          "phrases": [
            {
              "text": "a three-hour drive",
              "meaning": "三小时车程"
            },
            {
              "text": "driving licence (英式) / driver's licence (美式)",
              "meaning": "驾照"
            }
          ],
          "examples": [
            {
              "en": "Don't drive so fast!",
              "zh": "不要开那么快！"
            },
            {
              "en": "It's a three-hour drive to London.",
              "zh": "到伦敦要三小时车程。"
            }
          ],
          "notes": "driver n. 司机；drive 作名词表示\"车程\""
        },
        {
          "id": "u06-19",
          "no": 19,
          "type": "word",
          "text": "shall",
          "phonetic": "/ʃæl; ʃəl/",
          "pos": "modal v.",
          "meaning": "（同 I 和 we 连用，表示将来）将要；将会",
          "door": 38,
          "examples": [
            {
              "en": "—Shall I book a plane ticket for you? —That's kind of you.",
              "zh": "——要我为你订一张机票吗？——你真好。"
            },
            {
              "en": "—Shall we go to Chengdu by plane? —That's a good idea.",
              "zh": "——我们乘飞机去成都如何？——真是个好主意。"
            }
          ],
          "notes": "Shall 与 I/we 连用、用于疑问句，表示提供帮助或提出建议"
        },
        {
          "id": "u06-20",
          "no": 20,
          "type": "word",
          "text": "afraid",
          "phonetic": "/əˈfreɪd/",
          "pos": "adj.",
          "meaning": "害怕；畏惧",
          "door": 38,
          "phrases": [
            {
              "text": "be afraid of + n./doing",
              "meaning": "害怕；惧怕…"
            },
            {
              "text": "be afraid to do",
              "meaning": "不敢做…"
            },
            {
              "text": "I'm afraid (so/not).",
              "meaning": "我恐怕（是这样/不是这样）——礼貌地说出令人不快或遗憾的事"
            }
          ],
          "examples": [
            {
              "en": "I'm afraid it is a little too expensive.",
              "zh": "我恐怕有点太贵了。"
            },
            {
              "en": "—Does it hurt? —I'm afraid so.",
              "zh": "——痛不痛？——恐怕会痛。"
            },
            {
              "en": "Many people are afraid of spiders.",
              "zh": "很多人害怕蜘蛛。"
            },
            {
              "en": "I'm afraid of going out alone at night.",
              "zh": "我害怕夜间单独外出。"
            }
          ],
          "notes": "另外两个表示害怕的词：frightened、scared"
        },
        {
          "id": "u06-21",
          "no": 21,
          "type": "word",
          "text": "expensive",
          "phonetic": "/ɪkˈspensɪv/",
          "pos": "adj.",
          "meaning": "昂贵的；价格高的 (more expensive-most expensive)",
          "door": 38,
          "examples": [
            {
              "en": "Everything is so expensive now, isn't it?",
              "zh": "现在什么东西都那么贵，是不是？"
            }
          ],
          "notes": "近义词：dear；反义词：cheap（cheaper-cheapest）；expense n. 费用；开销（通常用复数：living/medical expenses 生活/医疗费用）"
        },
        {
          "id": "u06-22",
          "no": 22,
          "type": "word",
          "text": "price",
          "phonetic": "/praɪs/",
          "pos": "n.",
          "meaning": "价格；价钱",
          "door": 39,
          "phrases": [
            {
              "text": "at a high/low price",
              "meaning": "以高/低价"
            },
            {
              "text": "pay full price",
              "meaning": "买全价票；付全价"
            }
          ],
          "examples": [
            {
              "en": "The price of a one-way ticket is over 1300 yuan.",
              "zh": "单程票的价格是1300多元。"
            },
            {
              "en": "He sold his car at a high price.",
              "zh": "他以高价出售了他的小汽车。"
            }
          ],
          "notes": "问价格：How much does one cabbage cost? = What's the price of one cabbage? = How much is it? priceless adj. 无价的；极珍贵的（priceless information = valuable information）"
        },
        {
          "id": "u06-23",
          "no": 23,
          "type": "word",
          "text": "one-way",
          "phonetic": "/ˌwʌn ˈweɪ/",
          "pos": "adj.",
          "meaning": "单程的",
          "door": 39,
          "phrases": [
            {
              "text": "a one-way ticket",
              "meaning": "一张单程票"
            },
            {
              "text": "a return ticket",
              "meaning": "一张返程票"
            },
            {
              "text": "a round-trip ticket",
              "meaning": "一张往返票"
            }
          ],
          "examples": [
            {
              "en": "Don't enter. Here is the one-way traffic.",
              "zh": "不要进入。这里是单行道。"
            }
          ]
        },
        {
          "id": "u06-24",
          "no": 24,
          "type": "word",
          "text": "ticket",
          "phonetic": "/ˈtɪkɪt/",
          "pos": "n.",
          "meaning": "票；入场券",
          "door": 39,
          "phrases": [
            {
              "text": "a ticket for + 活动",
              "meaning": "…的票（two tickets for tonight's film 两张今晚的电影票）"
            },
            {
              "text": "a ticket to + 地点",
              "meaning": "去…的票（a plane ticket to Beijing 去北京的机票）"
            },
            {
              "text": "a parking/speeding ticket",
              "meaning": "违章停车/超速驾驶罚款单"
            }
          ],
          "examples": [
            {
              "en": "I have got two tickets for tonight's film.",
              "zh": "我有两张今晚的电影票。"
            },
            {
              "en": "Shall I book a plane ticket to Beijing for you?",
              "zh": "要我为你订一张去北京的机票吗？"
            }
          ]
        },
        {
          "id": "u06-25",
          "no": 25,
          "type": "word",
          "text": "better",
          "phonetic": "/ˈbetə(r)/",
          "pos": "adj. & adv.",
          "meaning": "（good 的比较级）较好的；更好的；（well 的比较级）更好",
          "door": 39,
          "phrases": [
            {
              "text": "had better (not) do sth.",
              "meaning": "最好（不要）做某事"
            },
            {
              "text": "better and better",
              "meaning": "越来越好"
            }
          ],
          "examples": [
            {
              "en": "We are hoping for better weather tomorrow.",
              "zh": "我们希望明天天气好转。"
            },
            {
              "en": "Her work is getting better and better.",
              "zh": "她的工作正变得越来越好。"
            },
            {
              "en": "Lu Yao sings much better than I do.",
              "zh": "陆瑶唱歌比我好得多。"
            },
            {
              "en": "You'd better go to the doctor at once if a dog or cat bites you.",
              "zh": "如果狗或猫咬了你，你最好立刻去看医生。"
            },
            {
              "en": "You'd better not go to bed too late, or you will feel sleepy in class.",
              "zh": "你最好不要睡得太晚，否则你会在课堂上打瞌睡。"
            }
          ],
          "notes": "不规则比较级表：good/well→better→best；many/much→more→most；little→less→least；bad/badly/ill→worse→worst；far→farther/further→farthest/furthest。You'd better = You had better"
        },
        {
          "id": "u06-26",
          "no": 26,
          "type": "word",
          "text": "convenient",
          "phonetic": "/kənˈviːnɪənt/",
          "pos": "adj.",
          "meaning": "方便的；便利的；省事的 (more convenient-most convenient)",
          "door": 39,
          "examples": [
            {
              "en": "It's convenient to travel by high-speed train in China.",
              "zh": "在中国，乘高铁出行是很方便的。"
            },
            {
              "en": "A bicycle is more convenient than a car in the town.",
              "zh": "在小镇上自行车常常比小汽车更方便。"
            }
          ],
          "notes": "词族：convenience n. 方便（convenience store 便利店）；inconvenient adj. 不方便的"
        },
        {
          "id": "u06-27",
          "no": 27,
          "type": "word",
          "text": "speed",
          "phonetic": "/spiːd/",
          "pos": "n. & v.",
          "meaning": "速度；快速前行；加速 (sped-sped 或 speeded-speeded)",
          "door": 39,
          "phrases": [
            {
              "text": "at a speed of",
              "meaning": "以…的速度"
            },
            {
              "text": "at high/low speed",
              "meaning": "以高速/低速"
            },
            {
              "text": "speed up",
              "meaning": "加速"
            }
          ],
          "examples": [
            {
              "en": "The car runs at a speed of 80 miles per hour.",
              "zh": "轿车以每小时八十英里的速度行驶。"
            },
            {
              "en": "The ambulance sped to the hospital.",
              "zh": "救护车快速开往医院。"
            },
            {
              "en": "We'd better speed up if we want to get there in time.",
              "zh": "如果我们想准时到达那里，我们最好加快速度。"
            }
          ],
          "notes": "high-speed adj. 高速的：They are planning to build a new high-speed railway line between the two cities. 他们计划在这两个城市之间建设一条新的高速铁路线。"
        },
        {
          "id": "u06-28",
          "no": 28,
          "type": "word",
          "text": "comfortable",
          "phonetic": "/ˈkʌmftəbl/",
          "pos": "adj.",
          "meaning": "使人舒服的；舒适的 (more comfortable-most comfortable)",
          "door": 39,
          "examples": [
            {
              "en": "I feel much more comfortable in my new clothes.",
              "zh": "我穿上新衣服感觉舒服多了。"
            },
            {
              "en": "They can sit comfortably in the large armchairs.",
              "zh": "他们可以舒服地坐在宽大的扶手椅上。"
            },
            {
              "en": "There's nothing like the comfort of a warm bed on a cold night.",
              "zh": "在寒冷的夜晚，没有什么比一张温暖的床更让人感到舒适的了。"
            },
            {
              "en": "I tried to comfort her with a packet of sweets.",
              "zh": "我试图用一包糖果去安慰她。"
            }
          ],
          "notes": "词族：comfortably adv. 舒服地；comfort n. 舒适；安慰，v. 安慰某人（comfort sb. = give sb. comfort）；uncomfortable adj. 不舒服的"
        },
        {
          "id": "u06-29",
          "no": 29,
          "type": "word",
          "text": "view",
          "phonetic": "/vjuː/",
          "pos": "n.",
          "meaning": "景色；（尤指）乡间美景；视野；（个人的）看法",
          "door": 40,
          "phrases": [
            {
              "text": "in view of",
              "meaning": "鉴于…；考虑到…"
            },
            {
              "text": "come into view",
              "meaning": "进入视线；看得见"
            },
            {
              "text": "out of view",
              "meaning": "看不见；在视线之外"
            },
            {
              "text": "from one's point of view",
              "meaning": "依据某人的看法"
            }
          ],
          "examples": [
            {
              "en": "We have a beautiful view of the lake from our hotel room.",
              "zh": "从我们的酒店房间可以看到湖的美丽景色。"
            },
            {
              "en": "In view of the recent accidents, safety tips should be taught at school.",
              "zh": "鉴于最近的事故，学校应该教授一些安全贴士。"
            },
            {
              "en": "The actress disappeared out of view into the crowd.",
              "zh": "这个女演员消失在人群中，看不见了。"
            }
          ]
        },
        {
          "id": "u06-30",
          "no": 30,
          "type": "word",
          "text": "carry",
          "phonetic": "/ˈkæri/",
          "pos": "v.",
          "meaning": "拿；提；搬运；运送；输送；传播 (carried-carried-carrying)",
          "door": 40,
          "phrases": [
            {
              "text": "carry out",
              "meaning": "执行；实施"
            },
            {
              "text": "carry on",
              "meaning": "继续进行"
            }
          ],
          "examples": [
            {
              "en": "She carried the heavy box up the stairs.",
              "zh": "她把沉重的箱子搬上了楼梯。"
            },
            {
              "en": "The train carries passengers from one city to another.",
              "zh": "火车把乘客从一个城市运送到另一个城市。"
            },
            {
              "en": "Mosquitoes can carry diseases.",
              "zh": "蚊子可以传播疾病。"
            },
            {
              "en": "They carried out the plan successfully.",
              "zh": "他们成功地执行了计划。"
            }
          ],
          "notes": "辨析：take 从说话者所在处带走；bring 带到说话者所在处；fetch 去某地取回（往返）；carry 侧重物理上的搬运/支撑，不强调方向"
        },
        {
          "id": "u06-31",
          "no": 31,
          "type": "word",
          "text": "plan",
          "phonetic": "/plæn/",
          "pos": "n. & v.",
          "meaning": "计划；方案；打算；计划；打算 (planned-planned-planning)",
          "door": 40,
          "phrases": [
            {
              "text": "a travel/business plan",
              "meaning": "一个旅行/商业计划"
            },
            {
              "text": "make a plan",
              "meaning": "制定计划"
            },
            {
              "text": "stick to the plan",
              "meaning": "坚持计划"
            },
            {
              "text": "change one's plan",
              "meaning": "改变计划"
            },
            {
              "text": "plan to do sth.",
              "meaning": "计划去做某事"
            }
          ],
          "examples": [
            {
              "en": "I plan to go to the movies tomorrow.",
              "zh": "我打算明天去看电影。"
            },
            {
              "en": "They planned a surprise party for her birthday.",
              "zh": "他们为她的生日计划了一个惊喜派对。"
            }
          ],
          "notes": "注意双写 n：planned, planning"
        },
        {
          "id": "u06-32",
          "no": 32,
          "type": "word",
          "text": "own",
          "phonetic": "/əʊn/",
          "pos": "adj. & pron.",
          "meaning": "（用于强调）自己的；本人的",
          "door": 40,
          "phrases": [
            {
              "text": "on one's own",
              "meaning": "独自地；独立地"
            },
            {
              "text": "sth. of one's own",
              "meaning": "属于某人自己的…"
            }
          ],
          "examples": [
            {
              "en": "She likes to work on her own.",
              "zh": "她喜欢独自工作。"
            },
            {
              "en": "He bought a house of his own.",
              "zh": "他买了一栋属于自己的房子。"
            },
            {
              "en": "The ownership of the company has changed hands several times.",
              "zh": "这家公司的所有权已经几次易手。"
            }
          ],
          "notes": "词族：owner n. 所有者；物主（a business owner 企业主）；ownership n. 所有权；物主身份"
        },
        {
          "id": "u06-33",
          "no": 33,
          "type": "word",
          "text": "national",
          "phonetic": "/ˈnæʃnəl/",
          "pos": "adj.",
          "meaning": "国家的；全国的",
          "door": 40,
          "examples": [
            {
              "en": "The national team is preparing for the World Cup.",
              "zh": "国家队正在为世界杯做准备。"
            },
            {
              "en": "English is an international language.",
              "zh": "英语是一门国际语言。"
            }
          ],
          "notes": "词族：nation n. 国家；nationally adv. 全国性地；nationality n. 国籍；international adj. 国际的"
        },
        {
          "id": "u06-34",
          "no": 34,
          "type": "word",
          "text": "volunteer",
          "phonetic": "/ˌvɒlənˈtɪə(r)/",
          "pos": "n. & v.",
          "meaning": "志愿者；义务工作者；自愿提供；自愿参加",
          "door": 40,
          "phrases": [
            {
              "text": "voluntary work",
              "meaning": "志愿工作"
            },
            {
              "text": "volunteer service",
              "meaning": "志愿服务"
            },
            {
              "text": "volunteer organization",
              "meaning": "志愿者组织"
            },
            {
              "text": "volunteer for sth.",
              "meaning": "自愿参加某事"
            }
          ],
          "examples": [
            {
              "en": "I volunteered for the project.",
              "zh": "我自愿参加了这个项目。"
            }
          ],
          "notes": "voluntary adj. 自愿的（voluntary donation 自愿捐赠）"
        },
        {
          "id": "u06-35",
          "no": 35,
          "type": "phrase",
          "text": "enjoy oneself",
          "phonetic": "",
          "pos": "短语",
          "meaning": "过得快乐；玩得高兴（= have a good time = have fun）",
          "door": 40,
          "phrases": [
            {
              "text": "help oneself (to sth.)",
              "meaning": "请自便；自取（食物、饮料等）"
            },
            {
              "text": "teach oneself",
              "meaning": "自学"
            },
            {
              "text": "dress oneself",
              "meaning": "自己穿衣服"
            },
            {
              "text": "look at oneself in the mirror",
              "meaning": "照镜子"
            }
          ],
          "examples": [
            {
              "en": "We are going to a concert tonight, and I am really looking forward to enjoying myself.",
              "zh": "我们今晚要去听音乐会，我非常期待玩得开心。"
            }
          ],
          "notes": "look forward to + doing（to 是介词）：looking forward to enjoying myself = looking forward to having fun / having a good time"
        }
      ]
    }
  ]
};
