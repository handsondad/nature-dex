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
  cover: { photo: "cover", caption: "毛茸茸的狗尾草穗子", shoot: "夏天到秋天，我们遇见的那一丛：毛茸茸的穗子和细长的叶子都拍进去" },
  hello: "毛茸茸的穗子像一条小狗尾巴，风一吹，一起轻轻点头。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一根狗尾草穗子和它的叶子", shoot: "从侧面拍一丛：穗子、叶子和茎下面包着的叶鞘都在画面里" },
      points: [
        { x: 0.51, y: 0.42, label: "圆柱形的毛穗子", detail: "穗子密密的，像一根圆柱，越往上越细，长的短的都有，1～24 厘米。", cite: ["foc-gwc"] },
        { x: 0.545, y: 0.26, label: "穗子上的刚毛", detail: "穗子上的“毛”叫刚毛，4～12 毫米长。有绿色的，也有棕色、紫色的，这一根就带点紫。", cite: ["foc-gwc"] },
        { x: 0.635, y: 0.5, label: "又细又长的叶子", detail: "叶子扁扁的，又细又长，前端尖尖的，叶边摸起来粗粗的。", cite: ["foc-gwc"] },
        { x: 0.5, y: 0.66, label: "叶鞘包着茎", detail: "叶子下半截包着茎（叶鞘），叶鞘的边上长着密密的细毛。", cite: ["foc-gwc"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一根穗子",
      shot: { photo: "spike-macro", caption: "一粒粒小穗和长长的刚毛", shoot: "微距拍一段穗子：一粒粒小穗和围着它们的刚毛都看得清，背景深一点" },
      text: "每粒小穗只有 2～2.5 毫米长，下面围着 3～7 根刚毛。一根穗子上，挤着很多很多粒。",
      zoom: 2.5,
      start: [0.52, 0.42],
      cite: ["foc-gwc"],
    },
    {
      type: "steps",
      title: "从小苗到满穗种子",
      steps: [
        { photo: "step-sprout", label: "小苗", text: "它是一年生的草。每年都从种子重新长起，先冒出细细的叶子。", caption: "一盆刚长出来的狗尾草小苗", shoot: "春天路边、花坛边刚冒出来的细叶小苗" },
        { photo: "step-young", label: "长穗", text: "茎顶上长出一根绿色的圆柱穗子，往上越来越细。", caption: "刚长出来的绿穗子", shoot: "夏天刚长出来、还很绿的穗子" },
        { photo: "step-bloom", label: "开花", text: "5～10 月，它一边开花一边结果。凑近看，小穗上挂着一点点黄色的小东西。", caption: "开花的穗子", shoot: "晴天上午凑近拍穗子，看看有没有黄色小点挂在外面" },
        { photo: "step-seed", label: "结籽", text: "种子熟了，穗子变得又干又黄。小穗一粒粒掉下去，刚毛还留在穗子上。", caption: "干黄的穗子", shoot: "秋天干黄的穗子，凑近拍一粒粒种子" },
      ],
      cite: ["foc-gwc", "foc-setaria"],
    },
    {
      type: "compare",
      title: "夏天绿，秋天黄",
      before: { photo: "same-summer", label: "7 月", caption: "夏天：绿油油的一丛", shoot: "选一丛好找的狗尾草，记住位置，夏天拍一张" },
      after: { photo: "same-autumn", label: "10 月", caption: "秋天：穗子发白发黄", shoot: "秋天回到同一个位置、同一个角度，再拍一张" },
      text: "这两张是在不同地方拍的：7 月的一丛还绿绿的，10 月的穗子已经发白发黄。狗尾草 5～10 月开花结果。",
      cite: ["foc-gwc"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 6 到 10 月常拍到它，7 月最多。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "毛穗子，别认错",
      quiz: true,
      items: [
        {
          name: "金色狗尾草", scientific: "Setaria pumila",
          shot: { photo: "look-jsgwc", caption: "金色狗尾草" },
          tells: ["刚毛金黄或棕金色", "小穗圆鼓鼓的，比狗尾草的大一点", "叶鞘光光的，没有毛"],
        },
        {
          name: "狗尾草", scientific: "Setaria viridis", self: true,
          shot: { photo: "look-gwc2", caption: "狗尾草" },
          tells: ["小穗小，只有 2～2.5 毫米", "刚毛多是绿色，有时带紫", "叶鞘边上有一圈细毛"],
        },
        {
          name: "大狗尾草", scientific: "Setaria faberi",
          shot: { photo: "look-dgwc", caption: "大狗尾草" },
          tells: ["个子更高，50～120 厘米", "穗子又长又粗，常常弯下头", "刚毛更长，10～15 毫米"],
        },
      ],
      cite: ["foc-gwc", "foc-jsgwc", "foc-dgwc"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "狗尾草和小米是亲戚吗？", a: "是很近的亲戚！科学家研究认为，狗尾草就是小米（粟）的野生祖先。", cite: ["fukunaga-2024"] },
        { q: "它和小米有什么不一样？", a: "狗尾草的种子熟了会自己掉落。小米的种子更大，熟了也留在穗子上，方便人收。", cite: ["fukunaga-2024"] },
        { q: "穗子上的毛是什么？", a: "这些刚毛其实是变了样的小枝条。种子掉光以后，它们还留在穗子上。", cite: ["foc-setaria"] },
        { q: "科学家为什么研究狗尾草？", a: "它个子小、好养、长得快。科学家拿它做实验，研究玉米、甘蔗那样的光合作用（植物用阳光造养分）。", cite: ["brutnell-2010"] },
        { q: "它和玉米有什么一样的本领？", a: "它们都用一种叫 C4 的办法造养分。这种办法更省水，也更省氮肥。", cite: ["brutnell-2010"] },
      ],
    },
  ],
  care: "只看、拍照，不拔。叶边粗糙，别用手捋叶子，也别把穗子放进嘴里。",
  nextTime: "秋天再去同一丛看看：穗子的颜色变了吗？摸摸叶鞘边上有没有毛？",
  sources: [
    { id: "foc-gwc", title: "Setaria viridis 狗尾草", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200026279" },
    { id: "foc-setaria", title: "Setaria 狗尾草属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=130214" },
    { id: "foc-jsgwc", title: "Setaria pumila 金色狗尾草", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242348799" },
    { id: "foc-dgwc", title: "Setaria faberi 大狗尾草", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Setaria%20faberi?t=foc" },
    { id: "brutnell-2010", title: "Setaria viridis: A Model for C4 Photosynthesis", by: "The Plant Cell, 2010", url: "https://doi.org/10.1105/tpc.110.075309" },
    { id: "fukunaga-2024", title: "Crop Evolution of Foxtail Millet", by: "Plants, 2024", url: "https://doi.org/10.3390/plants13020218" },
  ],
  by: ["kid", "dad"],
};

export default entry;
