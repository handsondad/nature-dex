import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 草丛里还有迷卡斗蟋、多伊棺头蟋等黑褐色蟋蟀，看圆脑袋上两眼间弯弯的浅黄眉纹与约 2.6～3.2 厘米的大体型确认。
const entry: Entry = {
  id: "huang-lian-you-hu-lu",
  name: "黄脸油葫芦",
  scientific: "Teleogryllus emma",
  kind: "animal",
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "直翅目", "蟋蟀科", "油葫芦属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "我们遇见的那只黄脸油葫芦",
    shoot: "夏秋傍晚在草丛或石砖边，顺着鸣叫声慢慢找，微距拍清黑亮圆头上的浅黄眉纹和细长触角；只拍不抓",
  },
  hello: "夏秋夜晚草丛里的歌唱家，油亮黑圆脑袋上画着一对弯弯的浅黄眉毛。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "female-side",
        caption: "从侧面看一只雌性黄脸油葫芦",
        shoot: "从侧上方微距拍：圆头上的浅黄眉纹、细长丝状触角、前翅和屁股后面的尾须都在画面里",
      },
      points: [
        {
          x: 0.77,
          y: 0.5,
          label: "油亮圆头配「黄眉」",
          detail: "黑亮的圆脑袋上，复眼上方连着一道浅色眉纹。成虫身长约 2.6～3.2 厘米，是常见蟋蟀里的大个子。",
          cite: ["wiki-ja"],
        },
        {
          x: 0.9,
          y: 0.5,
          label: "比身子还长的触角",
          detail: "两根丝状触角比身体还长，夜里在草根和石缝间钻行时，靠它们探路、感知动静。",
          cite: ["wiki-ja", "wiki-cricket"],
        },
        {
          x: 0.55,
          y: 0.44,
          label: "盖在背上的前翅",
          detail: "雄虫前翅上有锉一样的发音构造，两翅摩擦就能唱歌；这只雌虫前翅翅脉简单笔直，不会叫。",
          cite: ["wiki-ja", "wiki-cricket"],
        },
        {
          x: 0.2,
          y: 0.35,
          label: "长针一样的产卵管",
          detail: "尾巴后面两侧各有一根尾须；雌虫中间还多一根长针似的产卵管，用来插进泥土产卵。",
          cite: ["wiki-ja", "wiki-cricket"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看「阎王脸」",
      shot: {
        photo: "sex-male",
        caption: "正面斜看一只雄虫的脸",
        shoot: "在它停下不动时，从正前方稍高处微距拍脸：复眼、浅色眉纹和嘴边的触须都清楚；只拍不抓",
      },
      text: "把放大镜移到它的脸上：黑亮的大复眼上方，横着一道浅黄色的「眉毛」。日本人觉得它像怒目瞪眼的阎魔王，就叫它「阎魔蟋蟀」；中文名里的「黄脸」也是说这张脸。",
      zoom: 3,
      start: [0.67, 0.57],
      cite: ["wiki-ja"],
    },
    {
      type: "steps",
      title: "从土里的卵到夜里的歌手",
      steps: [
        {
          photo: "step-nymph",
          label: "小若虫",
          caption: "刚孵出不久的小若虫，全身黑，背上一道白环",
          shoot: "五六月在草根边找黑色小若虫，从上方拍出胸腹之间的白环",
          text: "秋天产进土里的卵（约 3 毫米，像小香肠）在土中过冬，第二年五六月孵出。小若虫全身黑，胸和腹之间有一道白环。",
        },
        {
          photo: "step-late",
          label: "大若虫",
          caption: "快长大的若虫，个头已接近成虫",
          shoot: "七月在同一片草地找个头更大、还没有完整翅膀的若虫",
          text: "若虫不经过蛹，一次次蜕皮长大，越来越像爸爸妈妈；到最后一龄，那道白环就消失了。",
        },
        {
          photo: "step-molt",
          label: "羽化",
          caption: "刚完成最后一次蜕皮、颜色还浅的新成虫",
          shoot: "夏末清晨在草丛下找刚蜕完皮、身体淡褐色的个体，只拍不碰",
          text: "最后一次蜕皮钻出来的成虫是淡褐色的，翅膀也软，过一阵身体才慢慢变黑变硬。",
        },
        {
          photo: "step-adult",
          label: "成虫",
          caption: "在石头边活动的成虫",
          shoot: "八到十一月傍晚，顺着叫声找到正在石缝或草根边活动的成虫",
          text: "8～11 月是成虫季，每只成虫大约只活一两个月。雄虫夜夜唱歌，雌虫再把卵产进土里，一年只过一代。",
        },
      ],
      cite: ["wiki-ja", "tanaka-arai-2026"],
    },
    {
      type: "compare",
      title: "会唱歌的雄虫 vs 带长针的雌虫",
      before: {
        photo: "sex-male",
        label: "雄虫",
        caption: "前翅有发音器、尾部只有两根尾须的雄虫",
        shoot: "横画幅微距拍一只正在草丛边活动或鸣叫的雄虫，拍清复杂前翅花纹和尾部",
      },
      after: {
        photo: "sex-female",
        label: "雌虫",
        caption: "前翅纹路平直、尾部多一根细长产卵管的雌虫",
        shoot: "同样横画幅拍一只尾部拖着长针状产卵管的雌虫",
      },
      text: "怎么分清油葫芦爸爸和妈妈？看翅膀和尾巴尖：雄虫前翅纹路弯弯绕绕，能摩擦发声，尾巴后只有两根尾须；雌虫前翅纹路笔直不会叫，两根尾须中间多出一根长长的产卵管。",
      cite: ["wiki-ja", "wiki-cricket"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，6～10 月都有人拍到它，8 月最多；1～4 月一张也没有，那时它还是埋在土里过冬的卵。我们是哪个月遇见它的？",
      cite: ["wiki-ja", "tanaka-arai-2026"],
    },
    {
      type: "lookalike",
      title: "草丛里的三种黑蟋蟀，哪只是它？",
      quiz: true,
      items: [
        {
          name: "迷卡斗蟋",
          scientific: "Velarifictorus micado",
          shot: { photo: "look-mkdx", caption: "迷卡斗蟋" },
          tells: [
            "个子小，身长只有约 1.3～1.9 厘米",
            "黄褐色头上有几道浅色细纹，两单眼之间一道浅横带",
          ],
        },
        {
          name: "黄脸油葫芦",
          scientific: "Teleogryllus emma",
          self: true,
          shot: { photo: "look-hlyhl", caption: "黄脸油葫芦" },
          tells: [
            "大个子，身长约 2.6～3.2 厘米",
            "黑亮的圆脑袋，复眼上方一道弯弯的浅色眉纹",
          ],
        },
        {
          name: "多伊棺头蟋",
          scientific: "Loxoblemmus doenitzi",
          shot: { photo: "look-dyg", caption: "多伊棺头蟋（雄虫）" },
          tells: [
            "身长约 1.5～2 厘米，喜欢较干的草地",
            "雄虫的脸又平又斜，两侧带三角形的角；雌虫没有角",
          ],
        },
      ],
      cite: ["wiki-ja", "sina-vm", "kuriwada-2016", "wiki-ja-mk"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "蟋蟀的「耳朵」长在哪儿？",
          a: "长在前腿的小腿上！实验发现，雌蟋蟀连只偏左或偏右 1 度的歌声都能分辨，再转身朝声音走去。",
          cite: ["schoneich-2010", "wiki-cricket"],
        },
        {
          q: "油葫芦的歌是怎么唱的？",
          a: "雄虫摩擦前翅，先唱一长串（最多约 12 个音），再接几声短鸣。雌虫要听到那串长音，才知道往哪儿找。",
          cite: ["jang-2010"],
        },
        {
          q: "盛夏和深秋，它唱歌的时间一样吗？",
          a: "不一样！盛夏天热，它只在夜里唱；到了深秋天凉，大白天也能听见它在草丛里叫。",
          cite: ["wiki-ja"],
        },
        {
          q: "越往南，油葫芦个子越大还是越小？",
          a: "在日本是越往南越大！南方暖和的日子长，若虫有更多时间吃和长，长成的成虫就更大。",
          cite: ["tanaka-arai-2026"],
        },
        {
          q: "冬天油葫芦去哪儿了？",
          a: "成虫秋末就死去了，只留下雌虫产进土里的卵。卵在土里过冬，第二年五六月才孵出小若虫。",
          cite: ["wiki-ja", "tanaka-arai-2026"],
        },
      ],
    },
  ],
  care: "循着叫声远远听、静静看，不抓也不关进小盒。它的大颚会咬人，手抓还容易碰断触角。",
  nextTime: "夏秋傍晚听见草丛里清脆的鸣叫，轻轻凑近找找看：唱歌的那只，尾巴后是两根尾须还是三根？",
  sources: [
    {
      id: "wiki-ja",
      title: "エンマコオロギ (Teleogryllus emma)",
      by: "Wikipedia (日本語)",
      url: "https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%B3%E3%83%9E%E3%82%B3%E3%82%AA%E3%83%AD%E3%82%AE",
    },
    {
      id: "wiki-cricket",
      title: "Cricket (insect)",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Cricket_(insect)",
    },
    {
      id: "jang-2010",
      title: "Calling song and phonotactic selectivity in the field cricket Teleogryllus emma (Orthoptera: Gryllidae)",
      by: "Journal of Ecology and Environment (2010)",
      url: "https://doi.org/10.5141/jefb.2010.33.4.307",
    },
    {
      id: "tanaka-arai-2026",
      title: "Geographic cline and body size reduction in the Emma field cricket (Teleogryllus emma) living on seasonally submerged reservoir slopes",
      by: "Tanaka & Arai, Journal of Orthoptera Research 35(1) (2026)",
      url: "https://doi.org/10.3897/jor.35.150472",
    },
    {
      id: "schoneich-2010",
      title: "Hyperacute Directional Hearing and Phonotactic Steering in the Cricket (Gryllus bimaculatus deGeer)",
      by: "Schöneich & Hedwig, PLoS ONE (2010)",
      url: "https://doi.org/10.1371/journal.pone.0015141",
    },
    {
      id: "sina-vm",
      title: "Japanese burrowing cricket, Velarifictorus micado",
      by: "Singing Insects of North America (University of Florida)",
      url: "https://sina.orthsoc.org/551a.htm",
    },
    {
      id: "kuriwada-2016",
      title: "Horn length is not correlated with calling efforts in the horn-headed cricket Loxoblemmus doenitzi (Orthoptera: Gryllidae)",
      by: "Kuriwada, Entomological Science (2016)",
      url: "https://doi.org/10.1111/ens.12190",
    },
    {
      id: "wiki-ja-mk",
      title: "ミツカドコオロギ (Loxoblemmus doenitzi)",
      by: "Wikipedia (日本語)",
      url: "https://ja.wikipedia.org/wiki/%E3%83%9F%E3%83%84%E3%82%AB%E3%83%89%E3%82%B3%E3%82%AA%E3%83%AD%E3%82%AE",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;