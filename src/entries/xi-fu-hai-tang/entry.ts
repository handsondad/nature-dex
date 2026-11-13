import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// GBIF 与 iNaturalist 接受名为 Malus × kaido；Flora of China 写作异名 Malus × micromalus。
const entry: Entry = {
  id: "xi-fu-hai-tang",
  name: "西府海棠",
  scientific: "Malus × kaido",
  kind: "plant",
  // 华北常见海棠还有海棠花、垂丝海棠，拍到花序和果再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "苹果属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵西府海棠", shoot: "4～5 月开花时拍整棵树：粉红的花和树形都拍进去" },
  hello: "春天一树粉红小花，秋天又挂起一串红果子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-branch", caption: "一段开花的枝条", shoot: "开花时靠近拍一段枝条：几朵粉红花和几片叶子都在画面里" },
      points: [
        { x: 0.45, y: 0.3, label: "粉红的花瓣", detail: "花瓣粉红色，近圆形或窄椭圆，大约 1.5 厘米长，基部有短爪。", cite: ["foc-xfht"] },
        { x: 0.55, y: 0.45, label: "几朵挤成一簇", detail: "花序像一把小伞，大约 4～7 朵花，花梗长大约 2～3 厘米。", cite: ["foc-xfht"] },
        { x: 0.3, y: 0.65, label: "叶子有锯齿", detail: "叶子窄椭圆或椭圆，长大约 5～10 厘米，边缘有锐锯齿，基部楔形。", cite: ["foc-xfht"] },
        { x: 0.7, y: 0.7, label: "叶柄比较长", detail: "叶柄长大约 2～3.5 厘米，幼时有毛，后来会变光。", cite: ["foc-xfht"] },
      ],
    },
    {
      type: "compare",
      title: "同一棵，开花和结果",
      before: { photo: "same-flower", label: "春花", caption: "粉红的花", shoot: "4～5 月选一棵好找的西府海棠，记住位置，先拍开花的样子" },
      after: { photo: "same-fruit", label: "夏秋果", caption: "圆圆的小果", shoot: "8～9 月回到同一棵、同一个角度，再拍一张" },
      text: "春天开粉红花，秋天结红色小果，直径大约只有 1～1.5 厘米。",
      cite: ["foc-xfht"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "大约 4～5 月开花，8～9 月结果。春天去公园看花最合适。我们是哪个月遇见它的？",
      cite: ["foc-xfht"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它是野生的吗？", a: "西府海棠常见于北方园林栽培。有资料认为它可能是海棠花和山荆子的杂交。", cite: ["foc-xfht", "wiki-zh"] },
        { q: "果子能吃吗？", a: "果子很小，红色，北方有时也当小小的水果看。路边的果子可能打过药，不要放进嘴里。", cite: ["foc-xfht"] },
        { q: "树有多高？", a: "是比较矮的小乔木，大约 2.5～5 米高。", cite: ["foc-xfht"] },
        { q: "名字从哪儿来？", a: "据说因生长在“西府”（今陕西宝鸡一带）而得名；宝鸡还曾选它作市花。", cite: ["wiki-zh"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘花和果子。路边的果子不要放进嘴里。",
  nextTime: "花谢以后过几个月再来：枝上有没有挂起红色的小果子？",
  sources: [
    { id: "foc-xfht", title: "Malus × micromalus 西府海棠", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242411229" },
    { id: "wiki-zh", title: "西府海棠", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%A5%BF%E5%BA%9C%E6%B5%B7%E6%A3%A0" },
  ],
  by: ["kid", "dad"],
};

export default entry;
