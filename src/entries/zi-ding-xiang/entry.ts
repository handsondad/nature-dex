import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zi-ding-xiang",
  name: "紫丁香",
  pinyin: "zǐ dīng xiāng",
  scientific: "Syringa oblata",
  kind: "plant",
  // 城里也种欧丁香等别的丁香，要看叶子是不是宽过长、基部像心形
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "唇形目", "木樨科", "丁香属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛紫丁香", shoot: "我们遇见的那一丛：开花时拍整丛，一串串紫花和绿叶子都在画面里" },
  hello: "走过它身边，先闻到香味，再看见一串串紫色的小花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-macro", caption: "一丛紫丁香、一串花和叶子", shoot: "开花时拍三张：整丛、一串花、几片叶子的正面" },
      points: [
        { x: 0.62, y: 0.62, label: "一大串小花", detail: "很多小花挤成一串（圆锥花序），一串有 4～16 厘米长。", cite: ["foc-zdx"] },
        { x: 0.72, y: 0.31, label: "紫色的小花", detail: "花是紫色或淡紫色的，有时是白色。", cite: ["foc-zdx"] },
        { x: 0.22, y: 0.83, label: "宽宽的心形叶", detail: "叶子圆圆宽宽，常比长还宽一点，连着叶柄的地方像心形。叶边光滑，没有锯齿。", cite: ["foc-zdx", "foc-syringa"] },
        { x: 0.15, y: 0.2, label: "一大丛灌木", detail: "它是灌木或小乔木，最高能长到 5 米左右。", cite: ["foc-zdx"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一朵小花",
      shot: { photo: "cover", caption: "花苞和开了的小花", shoot: "凑近一串花微距拍，几朵小花的正面和细长的花冠筒都清楚" },
      text: "每朵小花都有一根细长的管子（花冠筒，0.6～1.7 厘米），顶上分成 4 片。黄色的花药就藏在管子口里面。",
      start: [0.82, 0.42],
      cite: ["foc-syringa", "foc-zdx"],
    },
    {
      type: "steps",
      title: "从丁香结到红叶子",
      steps: [
        { photo: "flower-branch", caption: "还没开的丁香结", label: "花苞", text: "春天，枝头先冒出一串串紫红色的花苞，这就是古诗里的“丁香结”。", shoot: "开花前一两周，去拍同一丛的花苞" },
        { photo: "step-bloom", caption: "一边是花苞，一边开了花", label: "开花", text: "花苞一朵朵打开，每朵分成 4 片。紫丁香 4～5 月开花。", shoot: "开得最多的时候拍同一串花" },
        { photo: "step-summer", caption: "夏天的大绿叶", label: "夏天", text: "花谢了，叶子长得又大又绿。枝头结出光滑的小蒴果，6～10 月慢慢成熟。", shoot: "夏天再去拍同一丛的叶子，找找有没有小果子" },
        { photo: "step-autumn", caption: "秋天变色的叶子", label: "秋天", text: "秋天，叶子常常变成红色，然后一片片落下，冬天只剩光枝条。", shoot: "10～11 月去拍同一丛变色的叶子" },
      ],
      cite: ["wiki-zh", "foc-zdx-sub", "foc-zdx", "wiki-en", "foc-syringa"],
    },    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，被拍到并确认的紫丁香只有几次，还看不出规律。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "都叫丁香，别认错",
      quiz: true,
      items: [
        {
          name: "暴马丁香", scientific: "Syringa reticulata",
          shot: { photo: "look-bmdx", caption: "暴马丁香" },
          tells: ["花是白色的，一大团", "花冠的管子很短，和花萼差不多长", "5～8 月才开花，比紫丁香晚"],
        },
        {
          name: "紫丁香", scientific: "Syringa oblata", self: true,
          shot: { photo: "step-bloom", caption: "紫丁香" },
          tells: ["叶子宽宽圆圆，常比长还宽", "花紫色或淡紫色，4～5 月开", "花冠的管子细长，0.6～1.7 厘米"],
        },
        {
          name: "欧丁香", scientific: "Syringa vulgaris",
          shot: { photo: "look-odx", caption: "欧丁香" },
          tells: ["叶子长比宽多，顶端尖", "一串花常有 8～18 厘米长", "开花比紫丁香晚一点"],
        },
      ],
      cite: ["foc-zdx", "foc-zdx-sub", "foc-bmdx", "wiki-odx", "wiki-en"],
    },    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "“丁香结”是什么？", a: "说的是枝条上一簇簇还没开的花苞。古时候的文人把它比作心里解不开的结。", cite: ["wiki-zh"] },
        { q: "它比别的丁香开得早吗？", a: "是的。它的英文名叫“早开丁香”，比别的丁香开得都早，花还很香。", cite: ["wiki-en"] },
        { q: "丁香的叶子秋天会变色吗？", a: "会。紫丁香的叶子到了秋天常常变成红色。", cite: ["wiki-en"] },
        { q: "开白花的也是紫丁香吗？", a: "紫丁香的花有时是白色的。开白花的叫白丁香，是紫丁香的一个变型。", cite: ["foc-zdx", "wiki-zh"] },
        { q: "学名 oblata 是什么意思？", a: "拉丁文 oblata 的意思是“有点扁的、椭圆的”。看看它宽宽圆圆的叶子，像不像？", cite: ["wiki-en"] },
        { q: "紫丁香有“混血”的后代吗？", a: "有。法国园艺家勒穆瓦纳把它和欧丁香杂交，培育出风信子丁香，在欧洲和美洲有很多品种。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "只看、闻、拍照，不折枝、不摘花。路边的植物可能打过药，花不放进嘴里。",
  nextTime: "找一串丁香数一数：能不能找到一朵不是 4 片花瓣的小花？",
  sources: [
    { id: "foc-zdx", title: "Syringa oblata 紫丁香", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017813" },
    { id: "foc-syringa", title: "Syringa 丁香属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=132143" },
    { id: "foc-zdx-sub", title: "Syringa oblata subsp. oblata 紫丁香（原亚种）", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=210002176" },
    { id: "foc-bmdx", title: "Syringa reticulata 暴马丁香", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017817" },
    { id: "wiki-odx", title: "Syringa vulgaris", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Syringa_vulgaris" },
    { id: "wiki-en", title: "Syringa oblata", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Syringa_oblata" },
    { id: "wiki-zh", title: "紫丁香", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E7%B4%AB%E4%B8%81%E9%A6%99" },
  ],
  by: ["kid", "dad"],
};

export default entry;
