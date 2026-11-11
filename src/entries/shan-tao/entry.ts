import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "shan-tao",
  name: "山桃",
  scientific: "Prunus davidiana",
  kind: "plant",
  // 早春开粉白花的还有山杏、桃、榆叶梅，拍到树皮和花萼再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "李属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵山桃", shoot: "我们遇见的那一棵：3 月开满花时拍整棵树，紫红色的树干也拍进去" },
  hello: "3 月，枝上一片叶子还没有，粉色的花就先开满了。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-branch", caption: "一段开花的枝条", shoot: "3 月开花时，靠近拍一段开满花、还没长叶的枝条，能看清花瓣和花后面的花萼" },
      points: [
        { x: 0.5, y: 0.35, label: "五片粉色花瓣", detail: "花瓣粉色、圆圆的，一朵花有 2～3 厘米宽。", cite: ["foc-st", "foc-amygdalus"] },
        { x: 0.3, y: 0.6, label: "花贴着枝条开", detail: "花梗非常短，花几乎直接长在枝条上，一朵一朵单独开。", cite: ["foc-st"] },
        { x: 0.62, y: 0.55, label: "紫红色的花萼", detail: "花瓣后面托着紫红色的花萼，外面光光的，没有毛。", cite: ["foc-st"] },
        { x: 0.8, y: 0.2, label: "枝上还没有叶子", detail: "山桃先开花，开花的时候枝上还看不到叶子。", cite: ["foc-st"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看树皮",
      shot: { photo: "bark", caption: "山桃的树皮", shoot: "正对着树干拍一段树皮，光线柔和，树皮的颜色和光泽要清楚" },
      text: "山桃的树皮是深紫红色的，很光滑。和旁边别的树比一比，颜色一样吗？",
      start: [0.5, 0.5],
      cite: ["foc-st", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 3 月拍到它最多，开花的照片也几乎都在 3 月。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "早春的粉白花，别认错",
      quiz: true,
      items: [
        {
          name: "山杏", scientific: "Prunus sibirica",
          shot: { photo: "look-sx", caption: "山杏" },
          tells: ["开花时，花萼向后翻过去", "花瓣白色带粉色细纹，或淡粉色", "树皮是深灰色的"],
        },
        {
          name: "山桃", scientific: "Prunus davidiana", self: true,
          shot: { photo: "look-st", caption: "山桃" },
          tells: ["树皮深紫红色，很光滑", "花瓣是粉色的"],
        },
        {
          name: "榆叶梅", scientific: "Prunus triloba",
          shot: { photo: "look-yym", caption: "榆叶梅" },
          tells: ["矮矮的一丛灌木，常只有 2～3 米高", "4～5 月开花，比山桃晚一些", "后来长出的叶子，顶上常分成三个裂片"],
        },
      ],
      cite: ["foc-st", "foc-sx", "foc-yym"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "山桃的桃子能吃吗？", a: "它的果子圆圆的、毛茸茸，直径只有 2.5～3.5 厘米。果肉又薄又干，不好吃。", cite: ["foc-st", "wiki-zh"] },
        { q: "山桃的核长什么样？", a: "核圆圆的，表面有横的、竖的沟，还有一个个小坑。", cite: ["foc-st"] },
        { q: "山桃花和桃花怎么分？", a: "看花萼：山桃的花萼外面光光的，桃花的花萼外面有细毛。桃子的果肉又厚又多汁，山桃的又薄又干。", cite: ["foc-amygdalus"] },
        { q: "学名里的 davidiana 是谁？", a: "是在纪念法国传教士阿尔芒·大卫（Armand David），他在中国采集过很多植物。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘花。路边的树可能打过药，花和果子都不放进嘴里。",
  nextTime: "花谢以后过多久才长出叶子？下次去同一棵树，记下看到第一片叶子的日子。",
  sources: [
    { id: "foc-st", title: "Amygdalus davidiana 山桃", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010610" },
    { id: "foc-amygdalus", title: "Amygdalus 桃属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=101512" },
    { id: "foc-sx", title: "Armeniaca sibirica 山杏", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010634" },
    { id: "foc-yym", title: "Amygdalus triloba 榆叶梅", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010625" },
    { id: "wiki-en", title: "Prunus davidiana", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prunus_davidiana" },
    { id: "wiki-zh", title: "山桃", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%B1%B1%E6%A1%83" },
  ],
  by: ["kid", "dad"],
};

export default entry;
