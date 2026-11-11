import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zi-ding-xiang",
  name: "紫丁香",
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
      shot: { photo: "flower-branch", caption: "一串花和几片叶子", shoot: "开花时，把一串花和旁边几片叶子一起拍进去，叶子拍正面" },
      points: [
        { x: 0.5, y: 0.3, label: "一大串小花", detail: "很多小花挤成一串（圆锥花序），一串有 4～16 厘米长。", cite: ["foc-zdx"] },
        { x: 0.35, y: 0.45, label: "紫色的小花", detail: "花是紫色或淡紫色的，有时是白色。", cite: ["foc-zdx"] },
        { x: 0.25, y: 0.75, label: "宽宽的心形叶", detail: "叶子圆圆宽宽，常比长还宽一点，连着叶柄的地方像心形。", cite: ["foc-zdx"] },
        { x: 0.7, y: 0.8, label: "叶子两两相对", detail: "叶子一对一对长在枝条上，叶边光滑，没有锯齿。", cite: ["foc-syringa"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一朵小花",
      shot: { photo: "flower-macro", caption: "几朵小花", shoot: "凑近一串花微距拍，几朵小花的正面和细长的花冠筒都清楚" },
      text: "每朵小花都有一根细长的管子，顶上分成 4 片。黄色的花药藏在管子口里面。",
      start: [0.5, 0.45],
      cite: ["foc-syringa", "foc-zdx"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，被拍到并确认的紫丁香只有几次，还看不出规律。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "“丁香结”是什么？", a: "说的是枝条上一簇簇还没开的花苞。古时候的文人把它比作心里解不开的结。", cite: ["wiki-zh"] },
        { q: "它比别的丁香开得早吗？", a: "是的。它的英文名叫“早开丁香”，比别的丁香开得都早，花还很香。", cite: ["wiki-en"] },
        { q: "丁香的叶子秋天会变色吗？", a: "会。紫丁香的叶子到了秋天常常变成红色。", cite: ["wiki-en"] },
        { q: "开白花的也是紫丁香吗？", a: "紫丁香的花有时是白色的。开白花的叫白丁香，是紫丁香的一个变型。", cite: ["foc-zdx", "wiki-zh"] },
      ],
    },
  ],
  care: "只看、闻、拍照，不折枝、不摘花。路边的植物可能打过药，花不放进嘴里。",
  nextTime: "找一串丁香数一数：能不能找到一朵不是 4 片花瓣的小花？",
  sources: [
    { id: "foc-zdx", title: "Syringa oblata 紫丁香", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017813" },
    { id: "foc-syringa", title: "Syringa 丁香属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=132143" },
    { id: "wiki-en", title: "Syringa oblata", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Syringa_oblata" },
    { id: "wiki-zh", title: "紫丁香", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E7%B4%AB%E4%B8%81%E9%A6%99" },
  ],
  by: ["kid", "dad"],
};

export default entry;
