import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "he-hua",
  name: "荷花",
  scientific: "Nelumbo nucifera",
  kind: "plant",
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "山龙眼目", "莲科", "莲属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那朵荷花", shoot: "池塘里我们遇见的那一丛：圆叶子和一朵开着的花都拍进去" },
  hello: "夏天池塘里立起圆圆的绿盘子，粉白的花从盘子中间钻出来。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf-flower", caption: "荷叶和荷花", shoot: "拍一张有圆叶子和一朵花的画面；能看见叶子出水、花高出叶子更好" },
      points: [
        { x: 0.35, y: 0.55, label: "圆圆的大叶子", detail: "叶子圆得像盘子，直径大约 25～90 厘米，边上没有缺口。", cite: ["foc-hh"] },
        { x: 0.4, y: 0.4, label: "叶子会滚水珠", detail: "叶子表面有粉，水滴会滚来滚去，不容易湿透。", cite: ["foc-hh"] },
        { x: 0.7, y: 0.3, label: "又大又香的花", detail: "花大约 10～23 厘米宽，粉红或白色，花梗比叶柄还高。", cite: ["foc-hh"] },
        { x: 0.65, y: 0.7, label: "中间的莲蓬", detail: "花心有一个倒圆锥形的花托，后来会长成有小孔的莲蓬。", cite: ["foc-hh"] },
      ],
    },
    {
      type: "steps",
      title: "从花到莲蓬",
      steps: [
        { photo: "step-bud", label: "花苞", text: "尖尖的花苞立在水面上方，还紧紧包着。", caption: "还没开的花苞", shoot: "靠近拍一个尖尖的花苞" },
        { photo: "step-bloom", label: "开花", text: "花瓣张开，粉红或白色，中间露出花蕊和花托。", caption: "开得正好的花", shoot: "晴天上午开得最大的一朵" },
        { photo: "step-pod", label: "莲蓬", text: "花瓣落后，花托长大变成莲蓬，上面有一个个小孔。", caption: "长大的莲蓬", shoot: "花谢后的莲蓬，能看清孔洞" },
        { photo: "step-seed", label: "莲子", text: "小孔里装着莲子。成熟的果实椭圆形到卵形，外壳变硬。", caption: "莲蓬和莲子", shoot: "能看见莲子的莲蓬（不要采，只拍）" },
      ],
      cite: ["foc-hh", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 6～8 月拍到它最多，开花也多在这时候。花期大约 6～8 月。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "荷花和睡莲一样吗？", a: "不一样。荷花的叶子和花都高出水面；很多睡莲的叶子是平贴在水面上的。", cite: ["wiki-en", "wiki-zh"] },
        { q: "叶柄为什么有刺？", a: "叶柄又长又中空，上面常有硬硬的小突起。只看、拍照，不要用手去摸折。", cite: ["foc-hh"] },
        { q: "人种它做什么？", a: "藕和莲子都可以吃。中国除了内蒙古、青海、西藏，很多地方的池塘都在种。", cite: ["foc-hh"] },
        { q: "它还有别的名字吗？", a: "也叫莲、莲花；古时候还有芙蓉、菡萏这些名字。", cite: ["wiki-zh"] },
      ],
    },
  ],
  care: "只看、拍照，不采莲蓬、不折叶柄。水边和大人一起，不要下水。",
  nextTime: "往荷叶上轻轻滴一点水（别踩进池塘）：水珠是铺开，还是滚成圆球？",
  sources: [
    { id: "foc-hh", title: "Nelumbo nucifera 莲", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200007079" },
    { id: "wiki-zh", title: "莲", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%8E%B2" },
    { id: "wiki-en", title: "Nelumbo nucifera", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nelumbo_nucifera" },
  ],
  by: ["kid", "dad"],
};

export default entry;
