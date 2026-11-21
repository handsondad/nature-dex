import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "di-huang",
  name: "地黄",
  scientific: "Rehmannia glutinosa",
  kind: "plant",
  // 浑身软毛、贴地的叶子和外紫红内黄的筒状花一起看就能确认
  certainty: "sure",
  // Flora of China 把地黄属放在玄参科，GBIF 现在放在地黄科（Rehmanniaceae）；这里照 iNaturalist 写列当科
  taxonomy: ["植物界", "维管植物门", "木兰纲", "唇形目", "列当科", "地黄属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛地黄", shoot: "4～5 月，我们遇见的那一丛：紫红色的花和贴地的毛茸茸的叶子都拍进去" },
  hello: "浑身长满软毛，开着外面紫红、里面带黄的小喇叭花。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一棵开花的地黄", shoot: "从斜上方拍一整棵：贴地的一圈叶子、紫红色的茎和花都在画面里" },
      points: [
        { x: 0.6, y: 0.86, label: "叶子贴地围一圈", detail: "下面的叶子常常贴着地面围成一圈，整棵不高，只有 10～30 厘米。", cite: ["foc-dh"] },
        { x: 0.8, y: 0.68, label: "叶边圆圆的钝齿", detail: "叶子边上是一个个圆圆钝钝、大小不齐的齿。", cite: ["foc-dh"] },
        { x: 0.31, y: 0.3, label: "紫红色的茎", detail: "从叶子中间抽出紫红色的茎，花开在茎上。", cite: ["foc-dh"] },
        { x: 0.53, y: 0.52, label: "小喇叭一样的花", detail: "花 3～4.5 厘米长，像一个小喇叭，外面紫红色，里面带着黄色和紫色。", cite: ["foc-dh"] },
        { x: 0.4, y: 0.17, label: "浑身是软毛", detail: "叶子、茎、花苞和花的外面，都密密地长着长长的软毛。", cite: ["foc-dh"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的毛",
      shot: { photo: "hair-macro", caption: "花苞和茎上的毛", shoot: "微距拍花苞或一段茎，一根根毛清楚地立着，背景深一点" },
      text: "凑近看，花苞和茎上立着一根根长毛。有普通的软毛，也有会分泌东西的腺毛。它的学名 glutinosa，意思就是“黏黏的”。",
      zoom: 3,
      start: [0.58, 0.14],
      cite: ["foc-dh", "wiki-en"],
    },
    {
      type: "steps",
      title: "从一圈叶子到小果子",
      steps: [
        { photo: "step-leaves", label: "长叶子", text: "早春，毛茸茸的叶子贴着地面铺开，中间冒出一簇花苞。", caption: "贴地的叶子中间冒出花苞", shoot: "3～4 月，从正上方拍一圈贴地的叶子和中间的花苞" },
        { photo: "step-bud", label: "花苞", text: "一簇花苞挤在茎顶，外面裹着长长的软毛。", caption: "毛茸茸的一簇花苞", shoot: "靠近拍茎顶还没开的一簇花苞" },
        { photo: "step-bloom", label: "开花", text: "花一朵朵张开，外面紫红，里面黄里带紫。", caption: "开得正好的几朵花", shoot: "4 月开花时，正对着花口拍一朵，能看见里面的黄色" },
        { photo: "step-fruit", label: "结果", text: "花谢以后结出 1～1.5 厘米长的小果子（蒴果）。熟了裂开，里面是很多很小的种子。", caption: "左边棕色的是裂开的果子", shoot: "6～7 月回到同一丛，拍花谢以后留下的果子" },
      ],
      cite: ["foc-dh", "foc-rehmannia"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家最常在 4 月拍到它开花，5 月也不少。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "紫红色的小喇叭，别认错",
      quiz: true,
      items: [
        {
          name: "毛泡桐", scientific: "Paulownia tomentosa",
          shot: { photo: "look-pt", caption: "毛泡桐的一朵花" },
          tells: ["花开在高高的大树上，不是从地上长出来的", "一朵花 5～7.5 厘米长，比地黄的花大不少"],
        },
        {
          name: "地黄", scientific: "Rehmannia glutinosa", self: true,
          shot: { photo: "cover", caption: "地黄" },
          tells: ["矮矮的，叶子大多贴着地面围成一圈", "花外面紫红，里面带黄色"],
        },
        {
          name: "宝盖草", scientific: "Lamium amplexicaule",
          shot: { photo: "look-bgc", caption: "宝盖草" },
          tells: ["圆圆的小叶子一对一对抱着茎", "花细细长长，只有 1.7 厘米左右，分成上下两片“嘴唇”"],
        },
      ],
      cite: ["foc-dh", "foc-pt", "foc-bgc"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "地下藏着什么？", a: "一段肉乎乎的根茎，最长约 5.5 厘米。很多地方专门种地黄，就是为了把这段根茎做成中药。", cite: ["foc-dh"] },
        { q: "一朵花里有几根雄蕊？", a: "4 根，两根长、两根短，都藏在花筒里面。", cite: ["foc-dh", "foc-rehmannia"] },
        { q: "地黄家族有多少种？", a: "地黄属一共 6 种，全都只长在中国。", cite: ["foc-rehmannia"] },
        { q: "同一块地能年年种地黄吗？", a: "不行。连着种，地黄会越长越差。科学家发现，它的根流出的东西让土里的坏真菌变多、好细菌变少。", cite: ["wu-2015"] },
        { q: "Rehmannia 是谁？", a: "是一位叫约瑟夫·雷曼的医生，大约 200 年前在俄国圣彼得堡行医。地黄属的学名就是用他的名字起的。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花，也不要把花放进嘴里吸。路边的植物可能打过药。",
  nextTime: "一根茎上的花，是下面的先开，还是上面的先开？下次数一数。",
  sources: [
    { id: "foc-dh", title: "Rehmannia glutinosa 地黄", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200021237" },
    { id: "foc-rehmannia", title: "Rehmannia 地黄属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=128084" },
    { id: "foc-pt", title: "Paulownia tomentosa 毛泡桐", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200020800" },
    { id: "foc-bgc", title: "Lamium amplexicaule 宝盖草", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200019750" },
    { id: "wu-2015", title: "Plant-microbe rhizosphere interactions mediated by Rehmannia glutinosa root exudates under consecutive monoculture", by: "Scientific Reports, 2015", url: "https://doi.org/10.1038/srep15871" },
    { id: "wiki-en", title: "Rehmannia glutinosa", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rehmannia_glutinosa" },
  ],
  by: ["kid", "dad"],
};

export default entry;
