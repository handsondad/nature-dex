import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "wang-wen-ma-bo",
  name: "网纹马勃",
  scientific: "Lycoperdon perlatum",
  kind: "fungus",
  // 马勃属近似种多，鹅膏菌幼体和硬皮马勃也呈球形；先标 likely，绝不切采触碰
  certainty: "likely",
  taxonomy: ["真菌界", "担子菌门", "伞菌纲", "伞菌目", "马勃科", "马勃属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "满身小锥刺的网纹马勃",
    shoot: "林下地面蹲下来斜拍：梨形圆球和表面的小锥刺清楚，保持距离不挤不碰",
  },
  hello: "没有菌盖也没有菌褶的小梨球，老了以后雨滴一砸，头顶就冒出一股“烟”。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "pear-body",
        caption: "苔藓里一颗年轻的网纹马勃",
        shoot: "林地或草地边找一颗完整的网纹马勃，侧面微距拍清梨形轮廓、小锥刺和基部；只拍不碰",
      },
      points: [
        { x: 0.49, y: 0.33, label: "倒放的小梨子", detail: "没有菌盖也没有菌褶，整个像一颗倒放的梨，宽 2～7 厘米、高 3～8 厘米。", cite: ["kuo"] },
        { x: 0.47, y: 0.47, label: "尖尖的小锥刺", detail: "年轻时盖满约 1 毫米高的硬锥刺，大刺周围还围着一圈小刺和细颗粒，头顶最密。", cite: ["kuo", "mdc"] },
        { x: 0.52, y: 0.66, label: "收窄的基部", detail: "圆球往下收成一段粗短的基部，这一段不长孢子。", cite: ["kuo"] },
        { x: 0.40, y: 0.84, label: "长在地上", detail: "一颗颗长在林下土里、苔藓间和路边，不长在木头上。", cite: ["kuo", "mdc"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看网纹和小孔",
      shot: {
        photo: "zoom-pore",
        caption: "小刺开始脱落、头顶裂开小孔的网纹马勃",
        shoot: "找一颗头顶刚裂开小孔的，从上方微距拍顶孔和周围的网纹；不碰不压，别对着它呼气",
      },
      text: "放大看：小锥刺掉了的地方留下一个个小坑，连成一张网；头顶正中裂开一个小孔，里面的孢子粉就从这里冒出去。",
      zoom: 2.4,
      start: [0.32, 0.6],
      cite: ["kuo", "mdc"],
    },
    {
      type: "steps",
      title: "从带刺白球到“小烟囱”",
      steps: [
        {
          photo: "step-spiny",
          label: "满身刺",
          text: "刚长出来时奶白色，满身小锥刺。它的肚子里是一整块白色的肉，像棉花糖。",
          caption: "年轻时满身小锥刺的网纹马勃",
          shoot: "拍刚冒出来、白色小锥刺还完整的个体；只拍不碰",
        },
        {
          photo: "step-net",
          label: "留网纹",
          text: "小锥刺很容易掉，掉了的地方留下小坑，连起来像一张网，这就是“网纹”。",
          caption: "小刺掉落后留下网状小坑（白色缺口是被小动物啃的）",
          shoot: "俯拍小刺脱落、表面露出网状小坑的个体；只拍不碰",
        },
        {
          photo: "step-old",
          label: "开小孔",
          text: "老了以后外皮变成褐色的薄纸，肚子里变成橄榄褐色的孢子粉，头顶裂开一个小孔。",
          caption: "变褐变薄、头顶开了小孔的老马勃",
          shoot: "远一点拍变褐、头顶开孔的老马勃；千万别用手捏或用脚踩",
        },
      ],
      cite: ["kuo", "mdc"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，它的研究级记录还不多，8 月最多，9、10 月也有一些；冬春几个月几乎没有。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "地上的“小白球”：长得像，不代表能吃",
      quiz: true,
      items: [
        {
          name: "橙黄硬皮马勃",
          scientific: "Scleroderma citrinum",
          shot: { photo: "look-sc", caption: "橙黄硬皮马勃（有毒）" },
          tells: [
            "外皮又厚又硬、偏土黄色，表面是一块块大裂鳞，没有小锥刺",
            "有毒！肚子里很早就变成紫黑色，误食会胃痛、恶心、呕吐",
          ],
        },
        {
          name: "网纹马勃",
          scientific: "Lycoperdon perlatum",
          self: true,
          shot: { photo: "look-wwmb", caption: "网纹马勃" },
          tells: [
            "长在地上，下部收成粗短基部，年轻时肚子里雪白",
            "满身小锥刺，刺掉了留下网状小坑",
          ],
        },
        {
          name: "梨形马勃",
          scientific: "Apioperdon pyriforme",
          shot: { photo: "look-ap", caption: "梨形马勃" },
          tells: [
            "一大片挤在烂木头、树桩上，而不是长在土里",
            "表面只有很细的小刺，长大后几乎掉光，看起来比较光滑",
          ],
        },
        {
          name: "双孢鹅膏的“蛋”",
          scientific: "Amanita bisporigera",
          shot: { photo: "look-egg", caption: "剧毒鹅膏刚破土的“蛋”" },
          tells: [
            "外面是光溜溜的白色包膜，没有小锥刺；里面藏着一朵正在长的小蘑菇",
            "剧毒、会致命！白球只看外表根本分不清，所以野外的白球一个都不能吃",
          ],
        },
      ],
      cite: ["kuo-sc", "mdc-sc", "kuo-ap", "mdc", "wiki-en"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "一滴雨能让它喷出多少孢子？",
          a: "科学家用超高速摄影发现：1 毫米以上的雨滴一砸，千分之三秒后就开始冒烟。一滴水能喷出约一百万颗孢子，一颗 2 厘米的马勃里还藏着约 45 亿颗。",
          cite: ["gregory-1949"],
        },
        {
          q: "它的拉丁属名是什么意思？",
          a: "Lycoperdon 来自希腊语，lyco 是“狼”，perdon 是“放屁”，合起来就是“狼放屁”！",
          cite: ["mdc"],
        },
        {
          q: "为什么不能捏它、踩它、凑近闻？",
          a: "孢子又小又多，吸进肺里会让肺发炎。兽医就遇到过小狗在长马勃的地方玩耍、刨土后呼吸困难。",
          cite: ["alenghat-2010", "wiki-en"],
        },
        {
          q: "草地上的小白球，为什么不能捡来吃？",
          a: "致命的鹅膏菌小时候也是一颗白球；路边的马勃还会吸收土里的镉、铅等重金属。",
          cite: ["mdc", "wiki-en"],
        },
        {
          q: "被雨淋湿了还能冒烟吗？",
          a: "能！它的内皮防水，孢子在里面一直是干的。实验里把马勃泡在水里（只露出小孔）三天，拿出来照样能冒烟。",
          cite: ["gregory-1949"],
        },
      ],
    },
  ],
  care: "只看不碰、不采、不吃！别捏、别踩老马勃，更不要凑近闻，免得把孢子粉吸进肺里；也看好小狗。",
  nextTime: "下雨天在林边看到头顶开孔的老马勃，站远一点看：雨滴落上去时，有没有冒出一小股褐色的“烟”？",
  sources: [
    { id: "kuo", title: "Lycoperdon perlatum", by: "Michael Kuo, MushroomExpert.Com", url: "https://www.mushroomexpert.com/lycoperdon_perlatum.html" },
    { id: "mdc", title: "Gem-Studded Puffball (Lycoperdon perlatum)", by: "Missouri Department of Conservation Field Guide", url: "https://mdc.mo.gov/discover-nature/field-guide/gem-studded-puffball" },
    { id: "gregory-1949", title: "The operation of the puff-ball mechanism of Lycoperdon perlatum by raindrops shown by ultra-high-speed Schlieren cinematography", by: "P. H. Gregory, Transactions of the British Mycological Society, 1949", url: "https://doi.org/10.1016/S0007-1536(49)80030-1" },
    { id: "alenghat-2010", title: "Lycoperdonosis in two dogs", by: "Alenghat et al., Journal of Veterinary Diagnostic Investigation, 2010", url: "https://doi.org/10.1177/104063871002200629" },
    { id: "kuo-sc", title: "Scleroderma citrinum", by: "Michael Kuo, MushroomExpert.Com", url: "https://www.mushroomexpert.com/scleroderma_citrinum.html" },
    { id: "mdc-sc", title: "Pigskin Puffball (Common Earthball)", by: "Missouri Department of Conservation Field Guide", url: "https://mdc.mo.gov/discover-nature/field-guide/pigskin-puffball-common-earthball" },
    { id: "kuo-ap", title: "Lycoperdon pyriforme", by: "Michael Kuo, MushroomExpert.Com", url: "https://www.mushroomexpert.com/lycoperdon_pyriforme.html" },
    { id: "wiki-en", title: "Lycoperdon perlatum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lycoperdon_perlatum" },
  ],
  by: ["kid", "dad"],
};

export default entry;