import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ma-que",
  // 正式名是树麻雀；北京城里的「麻雀」就是它，用孩子熟悉的叫法
  name: "麻雀",
  scientific: "Passer montanus",
  kind: "animal",
  // 白脸蛋上一块黑斑，和山麻雀、家麻雀都分得开，拍清脸就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "雀科", "麻雀属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只麻雀", shoot: "远远拍一只在地上找吃的或停在矮枝上的麻雀，脸和身子都清楚。蹲下来、慢慢等，别冲过去把它们吓飞" },
  hello: "白白的脸蛋上一块小黑斑，麻雀爸爸和麻雀妈妈都有。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "face", caption: "一只麻雀的侧脸", shoot: "手机放大，拍一只侧身站着的麻雀：头顶、脸蛋、下巴和翅膀都看得清。晴天上午光线好，站远一点等它不动的时候拍" },
      points: [
        { x: 0.62, y: 0.2, label: "栗色的头顶", detail: "头顶到后脖子是栗子一样的棕色。", cite: ["wiki-en", "cern-mq"] },
        { x: 0.6, y: 0.36, label: "脸蛋上的黑斑", detail: "白白的脸蛋上，两边各有一块黑斑，形状像一颗芸豆。", cite: ["wiki-en", "cern-mq"] },
        { x: 0.7, y: 0.46, label: "黑下巴", detail: "下巴和喉咙有一小块黑色。", cite: ["wiki-en", "cern-mq"] },
        { x: 0.5, y: 0.38, label: "白领圈", detail: "脖子后面有一圈灰白色，像围了一条小围巾。", cite: ["cern-mq"] },
        { x: 0.38, y: 0.56, label: "翅膀上两道白线", detail: "棕色的翅膀上，有两道细细的白条。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有很多人拍到它，5 月最多。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "树麻雀还是家麻雀？",
      quiz: true,
      items: [
        {
          name: "家麻雀",
          scientific: "Passer domesticus",
          shot: { photo: "look-jia-ma-que", caption: "雄性家麻雀" },
          tells: [
            "雄鸟头顶是灰色的，白脸蛋上没有黑斑",
            "公鸟和母鸟羽毛差别很大，母鸟全身朴素的灰褐色",
          ],
        },
        {
          name: "麻雀（树麻雀）",
          scientific: "Passer montanus",
          self: true,
          shot: { photo: "look-ma-que", caption: "树麻雀" },
          tells: [
            "栗棕色的头顶，白脸蛋上有一块醒目的黑斑",
            "雌雄同色，麻雀爸爸和麻雀妈妈长得一样",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-hs", "cern-mq"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "哪只是麻雀爸爸，哪只是麻雀妈妈？", a: "看不出来！麻雀的公鸟和母鸟羽毛长得一样，这在它的亲戚里很少见。小麻雀的颜色淡一些。", cite: ["wiki-en", "cern-mq"] },
        { q: "麻雀吃什么？", a: "主要吃草籽和谷粒。养宝宝的时候，它会抓小虫子、蜘蛛来喂小鸟。", cite: ["wiki-en"] },
        { q: "麻雀的家在哪儿？", a: "在树洞、石头缝或房子的缝隙里。窝做得乱乱的，里面垫着羽毛。", cite: ["wiki-en"] },
        { q: "欧洲的城里也到处是它吗？", a: "不是。在欧洲，它多住在乡下，城里多是它的亲戚家麻雀。在中国东部，城里的麻雀就是它。", cite: ["wiki-en", "cern-mq"] },
        { q: "冬天麻雀会飞去南方吗？", a: "不会。北京的野生动物名录里，麻雀是「留鸟」：一年到头都住在北京。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "远远看，不追不抓。春夏捡到不会飞的小麻雀，先别带走，告诉大人。",
  nextTime: "麻雀的嘴是什么颜色？冬天和夏天各看一次，比一比有没有变。",
  sources: [
    { id: "cern-mq", title: "麻雀", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E9%BA%BB%E9%9B%80" },
    { id: "wiki-en", title: "Eurasian tree sparrow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eurasian_tree_sparrow" },
    { id: "wiki-hs", title: "House sparrow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/House_sparrow" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
