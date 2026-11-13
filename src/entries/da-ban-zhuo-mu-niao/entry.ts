import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "da-ban-zhuo-mu-niao",
  name: "大斑啄木鸟",
  scientific: "Dendrocopos major",
  kind: "animal",
  // 北京还有别的黑白花啄木鸟，拍到肩上的大白斑和尾巴下面的红色再改 sure
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "䴕形目", "啄木鸟科", "啄木鸟属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只大斑啄木鸟", shoot: "趴在树干上的一只，肩上的白斑和尾巴下面的红色都拍进去；秋冬叶子落了更好找，听到「笃笃笃」再顺着声音找，远拍，别靠近树洞" },
  hello: "它用嘴敲树干，一秒能敲十几下，「笃笃笃」的声音能传很远。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "on-trunk", caption: "趴在树干上的大斑啄木鸟", shoot: "一只趴在树干上的侧面，头朝上：后脑勺、肩上的白斑、尾巴和尾巴下面的红色都在画面里；远拍" },
      points: [
        { x: 0.5, y: 0.82, label: "尾巴下面红红的", detail: "肚子下半截和尾巴下面是鲜红色的。", cite: ["wiki-en"] },
        { x: 0.55, y: 0.42, label: "肩上一大块白", detail: "黑色的背两边，各有一大块白斑。翅膀上是一道道黑白相间的横纹。", cite: ["wiki-en"] },
        { x: 0.42, y: 0.14, label: "后脑勺有没有红？", detail: "雄鸟后脑勺有一块红，雌鸟没有。刚长大的小鸟是头顶红。", cite: ["wiki-en"] },
        { x: 0.6, y: 0.95, label: "撑着树的硬尾巴", detail: "尾羽又硬又直，爬树的时候顶在树干上，帮它稳住身子。", cite: ["wiki-en"] },
        { x: 0.38, y: 0.6, label: "脚趾两前两后", detail: "它的脚两个脚趾朝前、两个朝后，适合在竖直的树干上爬。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，7、8 月拍到的少很多。北京名录里它是「留鸟」：一年四季都住在北京。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "北京树干上的黑白啄木鸟",
      quiz: true,
      items: [
        {
          // 维基与 iNaturalist 归入 Yungipicus canicapillus，北京名录记作 Dendrocopos canicapillus
          name: "星头啄木鸟",
          scientific: "Yungipicus scintilliceps",
          shot: { photo: "look-xing-tou", caption: "星头啄木鸟" },
          tells: [
            "个子比大斑啄木鸟小一圈",
            "背上是一道道黑白横斑，肩部没有两大块白斑，尾巴下面也不红",
          ],
        },
        {
          name: "大斑啄木鸟",
          scientific: "Dendrocopos major",
          self: true,
          shot: { photo: "look-da-ban", caption: "大斑啄木鸟" },
          tells: [
            "黑色的背两边，肩上各有一大块醒目的白斑",
            "肚子下半截和尾巴下面是鲜红色的",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-gcpw", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "「笃笃笃」是在找虫子吗？", a: "不全是。有时它在凿洞找吃的；有时是在枯树上「打鼓」，让伴侣知道它在哪儿，也让别的啄木鸟知道这块地方有主了。", cite: ["wiki-en"] },
        { q: "以前人们以为打鼓声是什么？", a: "直到 100 多年前，还有人以为那是它叫出来的声音。1943 年才证明，那完全是用嘴敲出来的。", cite: ["wiki-en"] },
        { q: "它的舌头有多长？", a: "能伸到嘴巴外面 4 厘米，舌头上有小刺和黏黏的口水，能把木头里的虫子粘出来。", cite: ["wiki-en"] },
        { q: "天天敲树，脑袋受得了吗？", a: "它的头骨和嘴有好几处像「减震器」的构造，能吸收敲打的力量；鼻孔很窄，挡住飞溅的木屑。", cite: ["wiki-en"] },
        { q: "它的家是什么样的？", a: "夫妻俩在树干上凿一个洞，洞口 5～6 厘米宽，里面 25～35 厘米深。洞里不铺草，只有凿下来的木屑。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "远远看，不追。树干上看到圆圆的洞，别靠近、别去掏，那可能是它的窝。",
  nextTime: "下次去松树多的地方，找找树缝里有没有卡着被啄碎的松果？那可能是啄木鸟的「砧板」。",
  sources: [
    { id: "wiki-en", title: "Great spotted woodpecker", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Great_spotted_woodpecker" },
    { id: "wiki-gcpw", title: "Grey-capped pygmy woodpecker", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grey-capped_pygmy_woodpecker" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
