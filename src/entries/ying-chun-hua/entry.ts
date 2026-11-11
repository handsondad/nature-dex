import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ying-chun-hua",
  name: "迎春花",
  scientific: "Jasminum nudiflorum",
  kind: "plant",
  // 绿色四棱的枝条、5～6 片花瓣，和连翘分得开
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "唇形目", "木樨科", "素馨属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛迎春", shoot: "我们遇见的那一丛：开花时拍整丛，垂下来的绿枝条和黄花都在画面里" },
  hello: "冬天刚过，光秃秃的绿枝条上就冒出一朵朵小黄花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-branch", caption: "一段开花的枝条", shoot: "2～3 月开花时，靠近拍一段绿枝条：一两朵花的正面、花下面的绿色花萼和枝条的棱都要清楚" },
      points: [
        { x: 0.45, y: 0.35, label: "花瓣 5～6 片", detail: "黄色的花冠分成 5 片或 6 片，数一数，比连翘的 4 片多。", cite: ["foc-yc", "foc-forsythia"] },
        { x: 0.55, y: 0.55, label: "绿色的花萼", detail: "花下面托着绿色、细长的花萼，像一圈小叶子。", cite: ["foc-yc"] },
        { x: 0.3, y: 0.75, label: "绿枝条有四条棱", detail: "小枝是绿色的，方方的有四条棱，棱上还有窄窄的边。", cite: ["foc-yc", "wiki-en"] },
        { x: 0.7, y: 0.7, label: "花一朵一朵单独开", detail: "花常一朵一朵单独长在叶腋，就是叶子和枝条连着的地方。", cite: ["foc-yc", "wiki-zh"] },
      ],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 3 月拍到它最多，1、2 月也有不少。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "早春的小黄花，别认错",
      quiz: true,
      items: [
        {
          name: "连翘", scientific: "Forsythia suspensa",
          shot: { photo: "look-lq", caption: "连翘" },
          tells: ["花瓣 4 片", "枝条是黄褐色或灰褐色的", "枝条里面是空心的"],
        },
        {
          name: "迎春花", scientific: "Jasminum nudiflorum", self: true,
          shot: { photo: "look-yc", caption: "迎春花" },
          tells: ["花瓣 5～6 片", "枝条绿色，有四条棱"],
        },
      ],
      cite: ["foc-yc", "foc-lq", "foc-forsythia"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么叫它迎春？", a: "早春，叶子还没长出来，它就先开出黄色的小花，像在迎接春天，所以叫迎春。", cite: ["wiki-zh", "wiki-en"] },
        { q: "学名 nudiflorum 是什么意思？", a: "拉丁文的意思是“光着的花”：它的花常开在还没长叶子的光枝条上。", cite: ["wiki-en"] },
        { q: "迎春的叶子长什么样？", a: "叶子两两相对，常是三片小叶长在一起，每片小叶只有 1～3 厘米长。", cite: ["foc-yc"] },
        { q: "迎春和茉莉花是亲戚吗？", a: "是的！它们都是素馨属的。茉莉花开很香的白花，常用来做花茶；迎春开的是黄花。", cite: ["foc-jasminum", "foc-ml"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条、不摘花。路边的植物可能打过药，花不放进嘴里。",
  nextTime: "迎春开花的时候，旁边的连翘开了没有？下次一起去看看谁先开。",
  sources: [
    { id: "foc-yc", title: "Jasminum nudiflorum 迎春花", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017786" },
    { id: "foc-jasminum", title: "Jasminum 素馨属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=116771" },
    { id: "foc-ml", title: "Jasminum sambac 茉莉花", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017788" },
    { id: "foc-lq", title: "Forsythia suspensa 连翘", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017769" },
    { id: "foc-forsythia", title: "Forsythia 连翘属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=112951" },
    { id: "wiki-en", title: "Jasminum nudiflorum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jasminum_nudiflorum" },
    { id: "wiki-zh", title: "迎春花", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%BF%8E%E6%98%A5%E8%8A%B1" },
  ],
  by: ["kid", "dad"],
};

export default entry;
