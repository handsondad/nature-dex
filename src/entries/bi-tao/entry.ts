import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bi-tao",
  name: "碧桃",
  scientific: "Prunus persica",
  kind: "plant",
  // 碧桃是桃的观赏栽培类型（常重瓣），品种很多；拍到重瓣花、花萼有毛，并和山桃对照
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "李属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵碧桃", shoot: "3～4 月开花时拍整棵树：满树的花要拍进去，树干也看得见" },
  hello: "春天公园里粉红的重瓣花云，常常是它开的。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-branch", caption: "一段开花的枝条", shoot: "开花时靠近拍一段枝条：能看清花瓣层数、花萼和还没长出的叶子" },
      points: [
        { x: 0.5, y: 0.35, label: "花常常是重瓣", detail: "碧桃是观赏用的桃，花瓣常常半重瓣或重瓣，粉、红、白都有。", cite: ["wiki-zh"] },
        { x: 0.45, y: 0.55, label: "花贴着枝条开", detail: "花梗极短，花几乎直接长在枝上，常常在长叶之前就开了。", cite: ["foc-tao"] },
        { x: 0.65, y: 0.6, label: "花萼外面有毛", detail: "花瓣后面的花萼外面常有细毛。山桃的花萼外面是光光的。", cite: ["foc-tao", "foc-st"] },
        { x: 0.3, y: 0.75, label: "叶子窄长有锯齿", detail: "叶子长椭圆到披针形，长大约 7～15 厘米，边缘有锯齿。", cite: ["foc-tao"] },
      ],
    },
    {
      type: "lookalike",
      title: "早春的粉红花，别认错",
      quiz: true,
      items: [
        {
          name: "山桃", scientific: "Prunus davidiana",
          shot: { photo: "look-shan-tao", caption: "山桃" },
          tells: ["花多是单瓣", "花萼外面光光的，没有毛", "树皮深紫红色，很光滑"],
        },
        {
          name: "碧桃", scientific: "Prunus persica", self: true,
          shot: { photo: "look-bi-tao", caption: "碧桃" },
          tells: ["多是公园里种的观赏桃", "花常常半重瓣或重瓣，颜色更艳", "花萼外面常有细毛"],
        },
      ],
      cite: ["foc-tao", "foc-st", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 3 月拍到桃最多，开花也多在 3～4 月。碧桃赏花正是这时候。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "碧桃和桃是两种吗？", a: "碧桃是桃的观赏栽培类型，专门看花。维基百科说它有多种花瓣形式，北京植物园还有很多品种。", cite: ["wiki-zh"] },
        { q: "它会结果子吗？", a: "桃会结又大又多汁的果子。有些观赏品种主要开花，果子少或不好吃。", cite: ["foc-tao", "wiki-zh"] },
        { q: "花有多大？", a: "普通桃花大约 2～3.5 厘米宽。碧桃的重瓣花看起来会更蓬松一些。", cite: ["foc-tao"] },
        { q: "学名为什么叫 persica？", a: "种加词 persica 和波斯有关，可遗传学研究表明桃起源于中国。", cite: ["wiki-zh", "wiki-en"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘花。路边的树可能打过药，花和果子都不放进嘴里。",
  nextTime: "花是单瓣还是重瓣？数一数最外层能看见几圈花瓣。",
  sources: [
    { id: "foc-tao", title: "Amygdalus persica 桃", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010618" },
    { id: "foc-st", title: "Amygdalus davidiana 山桃", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010610" },
    { id: "wiki-zh", title: "桃", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%A1%83" },
    { id: "wiki-en", title: "Prunus persica", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prunus_persica" },
  ],
  by: ["kid", "dad"],
};

export default entry;
