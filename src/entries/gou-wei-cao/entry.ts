import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "gou-wei-cao",
  name: "狗尾草",
  scientific: "Setaria viridis",
  kind: "plant",
  // 金色狗尾草、大狗尾草也有毛穗子，要看刚毛颜色、小穗大小和叶鞘的毛再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "百合纲", "禾本目", "禾本科", "狗尾草属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛狗尾草", shoot: "夏天到秋天，我们遇见的那一丛：毛茸茸的穗子和细长的叶子都拍进去" },
  hello: "毛茸茸的穗子像一条小狗尾巴，风一吹，一起轻轻点头。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一丛狗尾草", shoot: "从侧面拍一丛：穗子、叶子和茎下面包着的叶鞘都在画面里" },
      points: [
        { x: 0.5, y: 0.14, label: "圆柱形的毛穗子", detail: "穗子密密的，像一根圆柱，越往上越细，长的短的都有，1～24 厘米。", cite: ["foc-gwc"] },
        { x: 0.62, y: 0.24, label: "绿色的刚毛", detail: "穗子上的“毛”叫刚毛，4～12 毫米长，多是绿色，也有棕色、紫色的。", cite: ["foc-gwc"] },
        { x: 0.3, y: 0.55, label: "又细又长的叶子", detail: "叶子扁扁的，又细又长，前端尖尖的，叶边粗糙。", cite: ["foc-gwc"] },
        { x: 0.5, y: 0.78, label: "叶鞘边上一圈毛", detail: "叶子下半截包着茎（叶鞘），叶鞘的边上长着密密的细毛。", cite: ["foc-gwc"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一根穗子",
      shot: { photo: "spike-macro", caption: "穗子的细节", shoot: "微距拍一段穗子：一粒粒小穗和围着它们的刚毛都看得清，背景深一点" },
      text: "每粒小穗只有 2～2.5 毫米长，下面围着 3～7 根刚毛。一根穗子上，挤着很多很多粒。",
      zoom: 3,
      start: [0.5, 0.5],
      cite: ["foc-gwc"],
    },
    {
      type: "lookalike",
      title: "毛穗子，别认错",
      quiz: true,
      items: [
        {
          name: "金色狗尾草", scientific: "Setaria pumila",
          shot: { photo: "look-jsgwc", caption: "金色狗尾草" },
          tells: ["小穗圆鼓鼓的，比狗尾草的大一点", "刚毛金黄或棕金色，有时带紫色", "叶鞘光光的，没有毛"],
        },
        {
          name: "狗尾草", scientific: "Setaria viridis", self: true,
          shot: { photo: "look-gwc", caption: "狗尾草" },
          tells: ["小穗小，只有 2～2.5 毫米", "刚毛多是绿色", "叶鞘边上有一圈细毛"],
        },
      ],
      cite: ["foc-gwc", "foc-jsgwc", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 6 到 10 月常拍到它，7 月最多。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "狗尾草和小米是亲戚吗？", a: "是很近的亲戚！科学家确认，狗尾草就是小米（粟）的野生祖先。", cite: ["wiki-foxtail-millet"] },
        { q: "它和小米有什么不一样？", a: "一个主要的区别是：狗尾草的种子熟了会自己散落，小米的种子会留在穗子上。", cite: ["wiki-foxtail-millet"] },
        { q: "穗子上的毛是什么？", a: "这些刚毛其实是变了样的小枝条。种子掉光以后，它们还留在穗子上。", cite: ["foc-setaria"] },
        { q: "科学家为什么研究狗尾草？", a: "它个子小、好养、长得快。科学家拿它做实验，研究玉米、甘蔗那样的光合作用（植物用阳光造养分）。", cite: ["brutnell-2010"] },
      ],
    },
  ],
  care: "只看、拍照，不拔。叶边粗糙，别用手捋叶子，也别把穗子放进嘴里。",
  nextTime: "秋天再去同一丛看看：穗子的颜色变了吗？",
  sources: [
    { id: "foc-gwc", title: "Setaria viridis 狗尾草", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200026279" },
    { id: "foc-setaria", title: "Setaria 狗尾草属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=130214" },
    { id: "foc-jsgwc", title: "Setaria pumila 金色狗尾草", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242348799" },
    { id: "brutnell-2010", title: "Setaria viridis: A Model for C4 Photosynthesis", by: "The Plant Cell, 2010", url: "https://doi.org/10.1105/tpc.110.075309" },
    { id: "wiki-en", title: "Setaria viridis", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Setaria_viridis" },
    { id: "wiki-foxtail-millet", title: "Foxtail millet", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Foxtail_millet" },
  ],
  by: ["kid", "dad"],
};

export default entry;
