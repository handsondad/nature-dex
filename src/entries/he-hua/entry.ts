import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "he-hua",
  name: "荷花",
  pinyin: "hé huā",
  scientific: "Nelumbo nucifera",
  kind: "plant",
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "山龙眼目", "莲科", "莲属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那朵荷花", shoot: "池塘里我们遇见的那一丛：圆叶子和一朵开着的花都拍进去" },
  hello: "夏天池塘里撑起一把把绿色大伞，水珠在伞面上滚来滚去。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf-flower", caption: "荷叶、荷花和花苞", shoot: "拍一张有圆叶子和一朵花的画面；能看见叶子出水、花高出叶子更好" },
      points: [
        { x: 0.86, y: 0.3, label: "圆圆的大叶子", detail: "叶子圆得像盘子，直径大约 25～90 厘米，边上没有缺口。", cite: ["foc-hh", "frps-hh"] },
        { x: 0.745, y: 0.5, label: "叶柄连在正中间", detail: "叶脉从叶子正中间向四周散开，叶柄就连在中间，像撑起一把伞。", cite: ["frps-hh"] },
        { x: 0.42, y: 0.33, label: "粉红色的大花", detail: "花大约 10～23 厘米宽，粉红或白色。花梗和叶柄差不多长，或者更长一点。", cite: ["foc-hh", "frps-hh"] },
        { x: 0.055, y: 0.55, label: "长长的叶柄", detail: "叶柄圆圆的，长 1～2 米，中间是空的，外面散生着小刺。", cite: ["frps-hh"] },
      ],
    },
    {
      type: "steps",
      title: "从花苞到莲子",
      steps: [
        { photo: "step-bud", label: "花苞", text: "尖尖的花苞立在长长的花梗上，花瓣还紧紧包着。", caption: "还没开的花苞", shoot: "靠近拍一个尖尖的花苞" },
        { photo: "step-bloom", label: "开花", text: "花瓣张开，粉红或白色。花心藏着一个黄绿色的“小喷头”，那是花托。", caption: "开得正好的花", shoot: "晴天上午开得最大的一朵" },
        { photo: "step-pod", label: "莲蓬", text: "花瓣一片片掉落，花托越长越大，变成绿色的莲蓬。", caption: "花谢后的绿莲蓬", shoot: "花瓣掉光后的绿色莲蓬" },
        { photo: "step-seed", label: "莲子", text: "莲蓬变干、变成褐色。每个小孔里有一颗硬硬的果子，里面就是莲子。", caption: "干莲蓬里的果子", shoot: "变成褐色的干莲蓬，能看清小孔里的果子（只拍不采）" },
      ],
      cite: ["foc-hh", "frps-hh"],
    },
    {
      type: "magnifier",
      title: "凑近看荷叶上的水珠",
      shot: { photo: "leaf-drop", caption: "荷叶中间的一颗水珠", shoot: "雨后，荷叶中间积着的水珠特写（站在岸上拍，不探身）" },
      text: "水在荷叶上缩成一颗亮晶晶的圆珠。叶面上长满极小的蜡质凸起，水珠只碰到凸起的尖尖；叶子稍微一斜，水珠就滚走了。",
      zoom: 2.5,
      start: [0.35, 0.6],
      cite: ["barthlott-1997"],
    },
    {
      type: "compare",
      title: "夏天的荷塘，冬天的荷塘",
      before: { photo: "same-summer", label: "夏天", caption: "荷叶铺满水面（北京圆明园）", shoot: "夏天在荷塘边找一个好记的位置，拍下整片荷叶" },
      after: { photo: "same-winter", label: "冬天", caption: "叶子和叶柄都枯黄了", shoot: "冬天回到同一个位置、同一个角度，再拍一张" },
      text: "天冷以后，荷叶和叶柄都枯了。可它是多年生的：泥里横着长的藕（根状茎）还活着，第二年又会长出新叶子。",
      cite: ["frps-hh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 6～8 月拍到它最多，开花也多在这几个月；8～10 月可以去看莲蓬。我们是哪个月遇见它的？",
      cite: ["frps-hh"],
    },
    {
      type: "lookalike",
      title: "池塘里的圆叶子，别认错",
      quiz: true,
      items: [
        {
          name: "睡莲", scientific: "Nymphaea tetragona",
          shot: { photo: "look-sl", caption: "睡莲" },
          tells: ["叶子平平地漂在水面上", "叶子有一道深深的缺口，像被切掉了一块", "花小一些，常漂在水面上"],
        },
        {
          name: "荷花", scientific: "Nelumbo nucifera", self: true,
          shot: { photo: "cover", caption: "荷花" },
          tells: ["叶子圆圆的、没有缺口，很多高高举出水面", "花心有一个像小喷头的莲蓬"],
        },
        {
          name: "荇菜", scientific: "Nymphoides peltata",
          shot: { photo: "look-xc", caption: "荇菜" },
          tells: ["小圆叶漂在水面，只有 1.5～8 厘米宽", "开金黄色的小花，花瓣边上有细细的流苏"],
        },
      ],
      cite: ["foc-hh", "foc-sl", "foc-xc"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "荷叶为什么总是干干净净的？", a: "叶面上有许多极小的蜡质凸起，水珠只碰到尖尖。叶子稍一斜，水珠就滚走，还把灰尘一起粘走了。", cite: ["barthlott-1997"] },
        { q: "荷花会给自己“保暖”吗？", a: "会！科学家测到：气温在 10～30℃ 之间变化时，开花的那 2～4 天里，花心一直保持在 30～35℃。", cite: ["seymour-1996"] },
        { q: "一千多岁的莲子还能发芽？", a: "辽宁普兰店一处古湖底挖出的莲子，测出大约 1288 岁，种下后真的发了芽。", cite: ["shen-miller-1995"] },
        { q: "藕上为什么有一个个小孔？", a: "藕是荷花横着长在泥里的茎（根状茎），里面有好多条纵向的通气孔道，所以切开就是一个个小孔。", cite: ["frps-hh"] },
        { q: "荷花还有哪些名字？", a: "也叫莲、莲花、芙蕖、芙蓉、菡萏。“菡萏”这个名字，在《诗经》里就有了。", cite: ["frps-hh"] },
        { q: "人种它做什么？", a: "藕可以当菜，也能做藕粉；莲子可以吃。中国除了内蒙古、青海、西藏，各地池塘里都有它。", cite: ["foc-hh", "frps-hh"] },
      ],
    },
  ],
  care: "只看、拍照，不采莲蓬、不折叶柄。水边要和大人一起，不下水，不探身够荷叶。",
  nextTime: "下雨后和大人去荷塘边看看：荷叶上的水是铺开，还是滚成一颗颗圆珠？",
  sources: [
    { id: "foc-hh", title: "Nelumbo nucifera 莲", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200007079" },
    { id: "frps-hh", title: "莲 Nelumbo nucifera（中国植物志 第 27 卷）", by: "中国植物志 · 植物智", url: "https://www.iplant.cn/info/Nelumbo%20nucifera?t=z" },
    { id: "foc-sl", title: "Nymphaea tetragona 睡莲", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200007090" },
    { id: "foc-xc", title: "Nymphoides peltata 荇菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=210001334" },
    { id: "barthlott-1997", title: "Purity of the sacred lotus, or escape from contamination in biological surfaces", by: "Planta, 1997", url: "https://doi.org/10.1007/s004250050096" },
    { id: "seymour-1996", title: "Thermoregulating lotus flowers", by: "Nature, 1996", url: "https://doi.org/10.1038/383305a0" },
    { id: "shen-miller-1995", title: "Exceptional seed longevity and robust growth: ancient Sacred Lotus from China", by: "American Journal of Botany, 1995", url: "https://www.jstor.org/stable/2445863" },
  ],
  by: ["kid", "dad"],
};

export default entry;
