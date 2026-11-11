import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "lian-qiao",
  name: "连翘",
  scientific: "Forsythia suspensa",
  kind: "plant",
  // 城里也种金钟花和杂交连翘，要看枝条是不是空心、向外伸展或垂下来
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "唇形目", "木樨科", "连翘属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛连翘", shoot: "我们遇见的那一丛：3～4 月开满花时拍整丛，伸展、下垂的枝条都在画面里" },
  hello: "还没长叶子的枝条上，挤满了四片花瓣的小黄钟。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-branch", caption: "一段开花的枝条", shoot: "3～4 月开花时，靠近拍一段开满花的枝条：花瓣数得清，枝条的颜色看得见" },
      points: [
        { x: 0.45, y: 0.35, label: "四片黄花瓣", detail: "黄色的花冠深深地分成 4 片，下面连成一个小钟。", cite: ["foc-forsythia"] },
        { x: 0.65, y: 0.55, label: "先开花，后长叶", detail: "花开在叶子长出来之前，一个叶腋里常有一朵或几朵。", cite: ["foc-forsythia", "foc-lq"] },
        { x: 0.25, y: 0.75, label: "黄褐色的枝条", detail: "小枝是黄褐色或灰褐色的，向外伸展，或者垂下来。", cite: ["foc-lq"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花心",
      shot: { photo: "flower-center", caption: "一朵花的花心", shoot: "正对着一朵花的花心微距拍，中间的柱头和两根雄蕊都要清楚" },
      text: "连翘有两种花：一种柱头长、雄蕊短，另一种柱头短、雄蕊长。凑近看看，你找到的是哪一种？",
      zoom: 3,
      start: [0.5, 0.5],
      cite: ["foc-lq", "foc-forsythia"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，被拍到并确认的连翘不多，4 月和 8 月最多。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "早春的黄花，别认错",
      quiz: true,
      items: [
        {
          name: "迎春花", scientific: "Jasminum nudiflorum",
          shot: { photo: "look-yc", caption: "迎春花" },
          tells: ["花瓣 5～6 片", "枝条绿色，有四条棱"],
        },
        {
          name: "连翘", scientific: "Forsythia suspensa", self: true,
          shot: { photo: "look-lq", caption: "连翘" },
          tells: ["花瓣 4 片", "枝条黄褐色，向外伸展或垂下来"],
        },
        {
          name: "金钟花", scientific: "Forsythia viridissima",
          shot: { photo: "look-jzh", caption: "金钟花" },
          tells: ["枝条直直地向上长，小枝是绿色的", "花瓣窄窄长长，边向外卷"],
        },
      ],
      cite: ["foc-yc", "foc-lq", "foc-jzh"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "连翘的枝条里面是什么？", a: "两个节中间是空心的。金钟花和它很像，可枝条里是一片片薄薄的隔板。", cite: ["foc-forsythia", "foc-lq", "foc-jzh"] },
        { q: "一朵连翘有几根雄蕊？", a: "只有 2 根，长在花冠筒的底部，几乎不伸出来。", cite: ["foc-forsythia"] },
        { q: "连翘的果子是什么样的？", a: "是 1.2～2.5 厘米长的小蒴果，表面有一个个小点点（皮孔）。熟了裂成两半，里面的种子带着小翅膀。", cite: ["foc-lq", "foc-forsythia", "wiki-zh"] },
        { q: "Forsythia 这个名字从哪来？", a: "纪念苏格兰的植物学家威廉·福西斯（William Forsyth），他做过英国王室的总园艺师。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条、不摘花。路边的植物可能打过药，花和果子都不放进嘴里。",
  nextTime: "下雨天去看看：连翘的花是向上开，还是垂下来了？",
  sources: [
    { id: "foc-lq", title: "Forsythia suspensa 连翘", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017769" },
    { id: "foc-forsythia", title: "Forsythia 连翘属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=112951" },
    { id: "foc-jzh", title: "Forsythia viridissima 金钟花", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017770" },
    { id: "foc-yc", title: "Jasminum nudiflorum 迎春花", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017786" },
    { id: "wiki-en", title: "Forsythia", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Forsythia" },
    { id: "wiki-zh", title: "连翘", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%BF%9E%E7%BF%98" },
  ],
  by: ["kid", "dad"],
};

export default entry;
