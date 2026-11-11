import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ju-hua",
  name: "菊花",
  scientific: "Chrysanthemum × morifolium",
  kind: "plant",
  // 栽培菊花是巨大的杂交复合体，学名仍有争议；公园里的要和野菊对照叶形与花头大小
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "菊目", "菊科", "菊属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛菊花", shoot: "公园或花坛里我们遇见的那一丛：整株或开得正好的花头，颜色清楚" },
  hello: "秋天花坛里一层层的花球，常常是它在过节。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-head", caption: "一朵菊花的花头", shoot: "从正面或斜上方拍一个开得正好的花头，能看清外围的“花瓣”和中间" },
      points: [
        { x: 0.5, y: 0.35, label: "一个花头很多小花", detail: "看起来像一朵大花，其实是很多小花挤在一起。外围一圈常常是长条形的舌状花。", cite: ["foc-chrys", "wiki-zh"] },
        { x: 0.5, y: 0.55, label: "颜色和形状很多", detail: "栽培菊花品种特别多：黄、白、粉、紫都有，花瓣有的平展，有的卷曲。", cite: ["foc-chrys", "wiki-zh"] },
        { x: 0.3, y: 0.75, label: "叶子裂成几片", detail: "茎上的叶子常常裂成几片，像手掌张开，边缘有锯齿。", cite: ["foc-chrys"] },
        { x: 0.7, y: 0.8, label: "秋天开得热闹", detail: "传统上菊花多在秋天盛开，公园花坛这时候最容易遇见它。", cite: ["wiki-zh", "bj-trees"] },
      ],
    },
    {
      type: "lookalike",
      title: "菊花还是野菊？",
      quiz: true,
      items: [
        {
          name: "野菊", scientific: "Chrysanthemum indicum",
          shot: { photo: "look-ye-ju", caption: "野菊" },
          tells: ["多在山坡、路边自己长，花头比较小", "舌状花黄色，大约 1～1.3 厘米长", "常常好多朵挤成平顶的一簇"],
        },
        {
          name: "菊花", scientific: "Chrysanthemum × morifolium", self: true,
          shot: { photo: "look-ju-hua", caption: "菊花" },
          tells: ["多在花坛、花盆里被人种着", "花头更大、花瓣形状和颜色变化很多", "是野菊等菊属植物杂交出来的栽培种"],
        },
      ],
      cite: ["foc-yeju", "foc-chrys", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "栽培菊花多在秋天开得最热闹。北京的公园和花坛，秋冬之交常能看到它。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "北京的市花是什么？", a: "有两种：月季和菊花。1987 年，北京市人民代表大会通过决定，把它们定为北京的市花。", cite: ["bj-trees"] },
        { q: "菊花是野生的吗？", a: "我们在花坛里看见的，多半是栽培种。它主要的亲本之一是野菊，别的亲本现在已经不太清楚了。", cite: ["foc-chrys", "wiki-zh"] },
        { q: "一朵菊花真的是一朵花吗？", a: "不是哦！它是很多小花挤成的“花头”。菊科植物常常这样。", cite: ["foc-chrys", "wiki-en"] },
        { q: "古人喜欢菊花吗？", a: "很喜欢。菊花和梅、兰、竹合称“四君子”，诗人陶渊明特别爱菊。", cite: ["wiki-zh"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花。花坛里的花是大家一起看的，不要用手摸。",
  nextTime: "数一数花坛里有几种颜色的菊花？把颜色记在本子上。",
  sources: [
    { id: "foc-chrys", title: "Chrysanthemum 菊属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=106957" },
    { id: "foc-yeju", title: "Chrysanthemum indicum 野菊", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=220002857" },
    { id: "wiki-zh", title: "菊花", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%8F%8A%E8%8A%B1" },
    { id: "wiki-en", title: "Chrysanthemum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chrysanthemum" },
    { id: "bj-trees", title: "穿越时空，说说30年前的市花市树评选", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hsdt/202106/t20210621_2417197.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
