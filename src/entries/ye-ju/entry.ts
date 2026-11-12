import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ye-ju",
  name: "野菊",
  scientific: "Chrysanthemum indicum",
  kind: "plant",
  // 路边黄花头还有小红菊等；和花坛里的栽培菊花对照花头大小与生长地点
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "菊目", "菊科", "菊属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛野菊", shoot: "我们遇见的那一丛：黄色小花头和裂开的叶子都拍进去" },
  hello: "秋天路边一簇簇小黄花，不用人种也会自己开。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "开花的野菊", shoot: "从斜上方拍一整丛：茎、裂叶和几朵黄色花头都在画面里" },
      points: [
        { x: 0.5, y: 0.25, label: "黄色的小花头", detail: "花头不太大，外围一圈舌状花是黄色的，花瓣长大约 1～1.3 厘米。", cite: ["foc-yeju"] },
        { x: 0.55, y: 0.35, label: "好多朵挤在一起", detail: "花头常常好几朵或很多朵，排成平顶的伞房状花序。", cite: ["foc-yeju"] },
        { x: 0.35, y: 0.6, label: "叶子裂成几片", detail: "茎中部的叶子卵形到椭圆卵形，常羽状浅裂或深裂，长大约 3～7 厘米。", cite: ["foc-yeju"] },
        { x: 0.7, y: 0.75, label: "有短短的叶柄", detail: "叶柄大约 1～2 厘米长。下面的叶子开花时常常已经枯了。", cite: ["foc-yeju"] },
      ],
    },
    {
      type: "lookalike",
      title: "野菊还是菊花？",
      quiz: true,
      items: [
        {
          name: "菊花", scientific: "Chrysanthemum × morifolium",
          shot: { photo: "look-ju-hua", caption: "菊花" },
          tells: ["多在花坛、花盆里被人种着", "花头更大，花瓣形状和颜色变化很多", "是野菊等菊属植物杂交出来的栽培种"],
        },
        {
          name: "野菊", scientific: "Chrysanthemum indicum", self: true,
          shot: { photo: "look-ye-ju", caption: "野菊" },
          tells: ["山坡、路边、田边自己长", "花头较小，舌状花黄色", "是栽培菊花的主要亲本之一"],
        },
      ],
      cite: ["foc-yeju", "foc-chrys", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "野菊大约 6～11 月开花结果。秋天路边最容易遇见它。我们是哪个月遇见它的？",
      cite: ["foc-yeju"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它和花坛里的菊花有关系吗？", a: "有！野菊是花卉菊花的主要亲本之一。我们在花坛里看见的大花头，很多都有它的血统。", cite: ["foc-yeju", "foc-chrys"] },
        { q: "它能长多高？", a: "大约 25 厘米到 1 米高，有长的或短的匍匐根状茎。", cite: ["foc-yeju"] },
        { q: "种子什么样？", a: "瘦果很小，大约 1.5～1.8 毫米长。", cite: ["foc-yeju"] },
        { q: "它喜欢长在哪儿？", a: "山坡草地、灌丛、河边潮湿处、田边、路边都有，海拔大约 100～2900 米。", cite: ["foc-yeju"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花。路边的植物可能打过药，不要放进嘴里。",
  nextTime: "数一数一簇上有几朵花头？花瓣尖端是平整的，还是有小缺口？",
  sources: [
    { id: "foc-yeju", title: "Chrysanthemum indicum 野菊", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=220002857" },
    { id: "foc-chrys", title: "Chrysanthemum 菊属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=106957" },
    { id: "wiki-zh", title: "野菊", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E9%87%8E%E8%8F%8A" },
  ],
  by: ["kid", "dad"],
};

export default entry;
