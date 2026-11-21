import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ye-ju",
  name: "野菊",
  scientific: "Chrysanthemum indicum",
  kind: "plant",
  // 路边黄花头还有甘菊、小红菊等；和花坛里的栽培菊花对照花头大小与生长地点
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
      shot: { photo: "whole-plant", caption: "开花的野菊", shoot: "从斜上方拍一小丛：裂开的叶子、几朵黄色花头和花苞都在画面里" },
      points: [
        { x: 0.62, y: 0.33, label: "黄色的“花瓣”", detail: "外圈的舌状花是黄色的，“花瓣”长约 1～1.3 厘米，尖上平整或有 3 个小齿。", cite: ["foc-yeju"] },
        { x: 0.55, y: 0.4, label: "中间一粒粒的小花", detail: "中间挤着许多黄色的管状花。一个花头就是一大家子小花。", cite: ["foc-chrys"] },
        { x: 0.84, y: 0.76, label: "圆圆的花苞", detail: "花苞外面包着 5 层总苞片，边上是白色或褐色的薄边。", cite: ["foc-yeju"] },
        { x: 0.44, y: 0.2, label: "叶子裂成几片", detail: "叶子卵形，边上羽毛一样浅裂或深裂，长约 3～7 厘米。", cite: ["foc-yeju"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一朵",
      shot: { photo: "flower-macro", caption: "一朵野菊的花头", shoot: "找一朵刚开的野菊，从正面靠近拍，花心和“花瓣”尖都拍清楚" },
      text: "中间一粒粒圆头，每一粒都是一朵管状花，有的已经伸出黄色的花粉。再看外圈的“花瓣”尖，是平平的，还是有小齿？",
      zoom: 2.5,
      start: [0.48, 0.48],
      cite: ["foc-chrys", "foc-yeju"],
    },
    {
      type: "steps",
      title: "从叶子到花谢",
      steps: [
        { photo: "leaves", label: "长叶子", text: "还没开花的时候，只看得见一丛裂开的绿叶子。", caption: "还没开花的野菊", shoot: "夏天去同一个地方，拍那丛还没开花的叶子" },
        { photo: "step-bud", label: "结花苞", text: "枝头冒出一颗颗圆圆的花苞，外面包着一层层总苞片。", caption: "满枝的花苞", shoot: "快开花时，靠近拍枝头的一团花苞" },
        { photo: "cover", label: "开花", text: "花苞一个接一个打开，路边变成一片小黄花。", caption: "开了一大片", shoot: "开得最多的那几天，拍一整丛" },
        { photo: "step-wilt", label: "花谢了", text: "开过的花头“花瓣”卷起来、蔫下去，之后会结出小小的瘦果。", caption: "左边刚开，右边已经谢了", shoot: "找一朵刚开的和一朵谢了的挨在一起，拍下来对比" },
      ],
      cite: ["foc-yeju", "foc-chrys"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，野菊在 10 月和 11 月被拍到得最多，开花的记录也几乎都在这两个月。秋天去路边、山坡找它吧！我们是哪个月遇见它的？",
      cite: ["foc-yeju"],
    },
    {
      type: "lookalike",
      title: "哪个是野菊？",
      quiz: true,
      items: [
        {
          name: "菊花", scientific: "Chrysanthemum × morifolium",
          shot: { photo: "look-ju-hua", caption: "菊花" },
          tells: ["多在花坛、花盆里被人种着", "花头更大，颜色、形状变化很多", "是野菊等好几种菊杂交出来的"],
        },
        {
          name: "甘菊", scientific: "Chrysanthemum lavandulifolium",
          shot: { photo: "look-gj", caption: "甘菊" },
          tells: ["叶子裂得更细，裂了一回又一回", "花头更小，直径只有 1～1.5 厘米", "“花瓣”短，长 1～7.5 毫米"],
        },
        {
          name: "野菊", scientific: "Chrysanthemum indicum", self: true,
          shot: { photo: "look-ye-ju", caption: "野菊" },
          tells: ["山坡、路边、田边自己长", "叶子只裂一回，裂片宽宽的", "“花瓣”长约 1～1.3 厘米"],
        },
      ],
      cite: ["foc-chrys", "foc-gj", "foc-yeju"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它和花坛里的菊花有关系吗？", a: "有！野菊是栽培菊花最主要的祖先之一。花坛里的大菊花，很多都有它的血统。", cite: ["foc-chrys", "bmc-2018"] },
        { q: "为什么说不清野菊原本长在哪儿？", a: "因为它和人种的菊花太像，又常常混在一起，所以在中国它原本的分布到现在还说不清。", cite: ["foc-yeju"] },
        { q: "野菊身上为什么有一股香味？", a: "它的花、叶里有许多会飘散的香味物质。科学家在野菊里找到了 52 种萜类香味物质。", cite: ["plaphy-2023"] },
        { q: "野菊都是一样的吗？", a: "不一样！有的野菊细胞里有 2 套染色体，有的有 4 套。它们闻起来的香味成分也不一样。", cite: ["plaphy-2023", "bmc-2018"] },
        { q: "它的种子会飞吗？", a: "不会。野菊的瘦果只有 1.5～1.8 毫米长，没有蒲公英那样的小伞。", cite: ["foc-yeju", "foc-chrys"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花。路边的植物可能打过药，不要放进嘴里。",
  nextTime: "数一数一簇上有几朵花头？花瓣尖端是平整的，还是有小缺口？",
  sources: [
    { id: "foc-yeju", title: "Chrysanthemum indicum 野菊", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=220002857" },
    { id: "foc-chrys", title: "Chrysanthemum 菊属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=106957" },
    { id: "foc-gj", title: "Chrysanthemum lavandulifolium 甘菊", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242312651" },
    { id: "plaphy-2023", title: "Terpenoid VOC profiles and functional characterization of terpene synthases in diploid and tetraploid cytotypes of Chrysanthemum indicum L.", by: "Plant Physiology and Biochemistry, 2023", url: "https://doi.org/10.1016/j.plaphy.2023.107766" },
    { id: "bmc-2018", title: "SSR marker development and intraspecific genetic divergence exploration of Chrysanthemum indicum based on transcriptome analysis", by: "BMC Genomics, 2018", url: "https://doi.org/10.1186/s12864-018-4702-1" },
  ],
  by: ["kid", "dad"],
};

export default entry;