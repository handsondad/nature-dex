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
  hello: "没有菌盖和菌褶的梨形小圆球，熟透后雨滴一砸，顶上的小孔就喷出一股孢子烟。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "pear-body",
        caption: "林地上单生的年轻网纹马勃",
        shoot: "林地或草地边找一颗完整的网纹马勃，侧面微距拍清梨形轮廓、小锥刺和基部；只拍不碰",
      },
      points: [
        { x: 0.49, y: 0.36, label: "圆鼓鼓的梨形球", detail: "没有伞盖也没有菌褶，整个子实体像倒放的小梨子，宽 1.5～6 厘米、高 3～9 厘米。", cite: ["wiki-en", "kuo"] },
        { x: 0.48, y: 0.49, label: "尖尖的小锥刺", detail: "年轻时表面密密长满约 1 毫米高的小圆锥刺，周围还围着一圈细颗粒。", cite: ["wiki-en", "kuo"] },
        { x: 0.50, y: 0.68, label: "收窄的不育基部", detail: "圆球往下收成一个粗短的柄状基部，小刺比头顶少。", cite: ["wiki-en", "kuo"] },
        { x: 0.48, y: 0.84, label: "长在泥土和苔藓间", detail: "通常散生或成群长在林下泥土、草地或路边，而不是直接长在树干上。", cite: ["wiki-en", "kuo"] },
      ],
    },
    {
      type: "steps",
      title: "从带刺白球到“小烟囱”",
      steps: [
        {
          photo: "step-spiny",
          label: "满身锥刺",
          text: "刚长出来时浑身奶白，外皮长满一颗颗宝珠似的小圆锥刺，肚子里面还是紧实的白色。",
          caption: "年轻时满身小锥刺的网纹马勃",
          shoot: "拍刚冒出来、白色小锥刺还完整的个体；只拍不碰",
        },
        {
          photo: "step-net",
          label: "留下网纹",
          text: "慢慢长大变褐后，表面的小锥刺一碰风吹雨打就脱落，在皮上留下一格一格的网状小印子。",
          caption: "小刺脱落后留下网状凹痕",
          shoot: "俯拍小刺脱落、表面露出网状小疤痕的个体；只拍不碰",
        },
        {
          photo: "step-pore",
          label: "顶开小孔",
          text: "完全成熟时里面变成橄榄褐色的孢子粉，头顶正中裂开一个小圆孔，雨滴一敲就往外喷烟。",
          caption: "成熟变褐、顶端开口的马勃簇",
          shoot: "远一点拍成熟变褐、顶端露出小孔的个体；千万别用手捏或用脚踩",
        },
      ],
      cite: ["wiki-en", "kuo"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，研究级记录还不算多，主要集中在夏秋雨季的 8～10 月。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "圆圆的“白球”，别认错",
      quiz: true,
      items: [
        {
          name: "橙黄硬皮马勃",
          scientific: "Scleroderma citrinum",
          shot: { photo: "look-sc", caption: "橙黄硬皮马勃（有毒）" },
          tells: [
            "外皮厚硬偏土黄色，表面是粗裂鳞片而不是易掉的小锥刺",
            "有毒！成熟后整个皮裂开，不会只在头顶开一个小圆孔",
          ],
        },
        {
          name: "网纹马勃",
          scientific: "Lycoperdon perlatum",
          self: true,
          shot: { photo: "look-wwmb", caption: "网纹马勃" },
          tells: [
            "长在泥土或苔藓地上，下部收成粗短基部",
            "年轻时满是小圆锥刺，刺掉了留下网状凹痕",
          ],
        },
        {
          name: "梨形马勃",
          scientific: "Apioperdon pyriforme",
          shot: { photo: "look-ap", caption: "梨形马勃" },
          tells: [
            "直接成群长在腐烂的木头和树桩上",
            "表面几乎光滑或只有极细颗粒，没有明显的小圆锥刺",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-sc", "wiki-ap"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "一滴雨砸下来，“孢子烟”喷得有多快？",
          a: "高速摄影发现，直径 1 毫米以上的雨滴敲在成熟马勃上，百分之一秒内就会从顶孔喷出每秒约 1 米高的孢子云，一次能放出一百多万颗孢子！",
          cite: ["gregory-1949", "wiki-en"],
        },
        {
          q: "为什么千万不能对着脸捏它、踩它？",
          a: "它的孢子表面长满微小的刺，一旦大量吸进肺里会引起剧烈咳嗽和肺部发炎（马勃孢子吸入症），连好奇去闻的小狗都会中招。",
          cite: ["wiki-en"],
        },
        {
          q: "草地上的小白球，为什么绝对不能捡来吃？",
          a: "剧毒鹅膏菌刚钻出地面时也裹在白色菌托里，外表就像一颗小白球；而且网纹马勃还会大量富集路边土壤里的铅、镉和汞等重金属。",
          cite: ["wiki-en"],
        },
        {
          q: "它的名字为什么叫“网纹”？",
          a: "年轻时它浑身缀满小圆锥刺，英文叫“宝石马勃”；等小刺脱落，刺底座周围的细颗粒就围成一圈圈网眼似的花纹。",
          cite: ["wiki-en", "kuo"],
        },
      ],
    },
  ],
  care: "只看不碰、不采也不吃！别用手挤或用脚踩成熟的马勃，更不要凑近闻，避免把大量孢子粉吸进肺里。",
  nextTime: "下雨天如果在林边看到褐色带顶孔的老马勃，站在上风处远远看：雨滴落上去时，能不能看到一小股褐色的“烟”冒出来？",
  sources: [
    { id: "wiki-en", title: "Lycoperdon perlatum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lycoperdon_perlatum" },
    { id: "kuo", title: "Lycoperdon perlatum", by: "MushroomExpert.Com", url: "https://www.mushroomexpert.com/lycoperdon_perlatum.html" },
    { id: "gregory-1949", title: "The operation of the puff-ball mechanism of Lycoperdon perlatum by raindrops shown by ultra-high-speed Schlieren cinematography", by: "Transactions of the British Mycological Society, 1949", url: "https://doi.org/10.1016/S0007-1536(49)80030-1" },
    { id: "wiki-sc", title: "Scleroderma citrinum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Scleroderma_citrinum" },
    { id: "wiki-ap", title: "Apioperdon pyriforme", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Apioperdon" },
  ],
  by: ["kid", "dad"],
};

export default entry;
