import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yu-lan",
  name: "玉兰",
  // Flora of China 用 Yulania denudata；GBIF 和 iNaturalist 接受的是 Magnolia denudata
  scientific: "Magnolia denudata",
  kind: "plant",
  // 城里还种望春玉兰和二乔玉兰，要数清 9 片花被片是不是一样长、都是白的
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "木兰目", "木兰科", "木兰属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵玉兰", shoot: "我们遇见的那一棵：开花时拍整棵树，满树白花、还没有叶子" },
  hello: "冬天枝头挂着毛茸茸的花苞，春天还没长叶，大白花就先开了。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower", caption: "一朵正开的玉兰花", shoot: "开花时，从侧面稍低一点拍一朵花：花被片、花心和下面毛茸茸的花梗都在画面里" },
      points: [
        { x: 0.3, y: 0.3, label: "9 片白色花被片", detail: "白色的“花瓣”有 9 片，叫花被片，大小差不多，基部常带一点粉红。", cite: ["foc-yl"] },
        { x: 0.5, y: 0.45, label: "淡绿色的花心", detail: "花心是一根淡绿色的小圆柱，外面围着一圈雄蕊。", cite: ["foc-yl"] },
        { x: 0.5, y: 0.85, label: "毛茸茸的花梗", detail: "花下面的花梗很粗，长满淡黄色的长毛，亮亮的像丝绒。", cite: ["foc-yl"] },
        { x: 0.85, y: 0.2, label: "大大的花", detail: "一朵花有 10～16 厘米宽，比大人的手掌还宽。", cite: ["foc-yl"] },
      ],
    },
    {
      type: "compare",
      title: "同一个花苞，冬天和春天",
      before: { photo: "same-bud", label: "冬天", caption: "毛茸茸的花苞", shoot: "冬天在枝头找一个毛茸茸的花苞，记住是哪一根枝、站在哪儿拍" },
      after: { photo: "same-flower", label: "春天", caption: "同一个花苞开了", shoot: "开花时回到同一根枝条、同一个角度再拍一张" },
      text: "冬天，枝头的花苞裹着一层淡黄灰色的长毛。到了春天，花苞打开，变成一朵大白花。记下两次的日期，算算隔了多少天。",
      cite: ["foc-yl"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 3 月拍到它最多，别的月份很少。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "玉兰家的花，别认错",
      quiz: true,
      items: [
        {
          name: "紫玉兰", scientific: "Magnolia liliiflora",
          shot: { photo: "look-zyl", caption: "紫玉兰" },
          tells: ["花被片外面是紫色或紫红色的", "花和叶子差不多同时长出来", "一丛灌木，常不到 3 米高"],
        },
        {
          name: "玉兰", scientific: "Magnolia denudata", self: true,
          shot: { photo: "look-yl", caption: "玉兰" },
          tells: ["9 片花被片都是白色，一样长", "开花时枝上还没有叶子"],
        },
      ],
      cite: ["foc-zyl", "foc-yl", "foc-yulania"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "9 片花被片是怎么排的？", a: "每 3 片围成一圈，一共 3 圈。玉兰外圈的和里圈的一样长，数数看是不是。", cite: ["foc-yulania", "foc-yl"] },
        { q: "粉红色的“玉兰”是谁？", a: "常是二乔玉兰：它是玉兰和紫玉兰杂交生出来的，花被片是淡红到深红色。", cite: ["foc-eqyl", "foc-yulania"] },
        { q: "玉兰的种子是什么颜色？", a: "秋天的果子像一根常弯着的棒子，裂开后露出红色的种子，种子是心形的。", cite: ["foc-yl", "foc-yulania"] },
        { q: "玉兰能长多高？", a: "长在山林里的玉兰能长到 25 米高，树干能有 1 米粗。", cite: ["foc-yl"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘花。落在地上的花瓣可以捡起来看，不放进嘴里。",
  nextTime: "冬天去找找玉兰枝头毛茸茸的花苞：一根枝上有几个？",
  sources: [
    { id: "foc-yl", title: "Yulania denudata 玉兰", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=250090269" },
    { id: "foc-yulania", title: "Yulania 玉兰属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=135227" },
    { id: "foc-zyl", title: "Yulania liliiflora 紫玉兰", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=250090272" },
    { id: "foc-eqyl", title: "Yulania × soulangeana 二乔玉兰", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=250090263" },
  ],
  by: ["kid", "dad"],
};

export default entry;
