import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yuan-yang",
  name: "鸳鸯",
  pinyin: "yuān yāng",
  scientific: "Aix galericulata",
  kind: "animal",
  // 雄鸟背上的橙色帆羽没有别的鸭子有，拍到雄鸟就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雁形目", "鸭科", "鸳鸯属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那对鸳鸯", shoot: "公园湖面上的一对鸳鸯，雄鸟和雌鸟都在画面里；站在岸上用长焦远拍，别追、别靠太近，3～5 月最好找" },
  hello: "雄鸳鸯背上竖着两片橙色的「小帆」，雌鸳鸯一身灰褐色。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出雄鸳鸯",
      shot: { photo: "male-side", caption: "水面上的一只雄鸳鸯", shoot: "水面上一只雄鸳鸯的侧面，头朝左：红嘴、眼睛后面的白条、胸口和背上的帆都看得清；岸上远拍" },
      points: [
        { x: 0.24, y: 0.48, label: "小小的红嘴巴", detail: "雄鸟的嘴是鲜红色的，小小的一个。", cite: ["wiki-en", "yl-yy2020"] },
        { x: 0.35, y: 0.38, label: "眼睛后面一大片白", detail: "眼睛上方往后有一道很宽的白色条纹，像一弯白月牙。", cite: ["wiki-en", "adw"] },
        { x: 0.37, y: 0.54, label: "橙色的「小胡子」", detail: "脸颊两边长着一根根橙色的细长羽毛，像翘起来的胡子。", cite: ["wiki-en"] },
        { x: 0.41, y: 0.63, label: "紫色胸口两道白", detail: "胸口是紫色的，旁边有两道竖着的白条。", cite: ["wiki-en"] },
        { x: 0.62, y: 0.47, label: "背上两片橙色的帆", detail: "这是翅膀上的羽毛，长得又宽又翘，竖在背上，像小船的帆。", cite: ["adw", "yl-yy2020", "tang-2025"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看背上的「帆」",
      shot: { photo: "sail", caption: "雄鸳鸯背上竖起的橙色帆羽", shoot: "雄鸳鸯侧面近景，背上那片橙色的帆要拍清楚；岸上用长焦，别靠近" },
      text: "帆是翅膀上的一根飞羽变成的：羽毛一边长得又宽又大，竖起来像一把橙色小扇子。雌鸟同一根羽毛小小的，没有帆。",
      zoom: 2.5,
      start: [0.38, 0.5],
      cite: ["tang-2025", "wiki-en"],
    },
    {
      type: "compare",
      title: "雄鸟和雌鸟",
      before: { photo: "same-male", label: "雄鸟·鸳", caption: "颜色鲜艳", shoot: "同一对鸳鸯：站在同一个地方、同样的角度，先拍雄鸟" },
      after: { photo: "same-female", label: "雌鸟·鸯", caption: "一身灰褐", shoot: "不换位置、不换角度，再拍它身边的雌鸟" },
      text: "雌鸟背上没有帆，一身灰褐色，嘴是黑的。眼睛周围一圈白，往后拖出一条细细的白线。",
      cite: ["wiki-en", "yl-yy2020"],
    },
    {
      type: "steps",
      title: "从树洞里跳出来的小鸳鸯",
      steps: [
        { photo: "step-pair", label: "找伴儿", text: "冬天和春天，雄鸟穿上最鲜艳的羽毛，竖起帆，到雌鸟身边比美。", caption: "两只雄鸳鸯围着一只雌鸟", shoot: "春天岸边几只鸳鸯凑在一起，岸上远拍" },
        { photo: "step-duckling", label: "出壳", text: "妈妈在大树的树洞里下 9～12 颗白蛋，自己孵 28～30 天，小鸳鸯就出壳了。", caption: "毛茸茸的小鸳鸯", shoot: "只用参考照片：不要去找、不要靠近鸳鸯的树洞和巢箱" },
        { photo: "step-follow", label: "跳下来", text: "妈妈在树下叫，小鸳鸯爬到洞口，一只只跳下来，摔不坏，再跟着妈妈去水边。", caption: "鸳鸯妈妈带着一群小鸳鸯", shoot: "鸳鸯妈妈带着小鸳鸯，岸上远远拍，别追" },
        { photo: "step-young", label: "会飞", text: "小鸳鸯一天天长大，大约 40～45 天就会飞了。", caption: "半大的小鸳鸯在水里游", shoot: "夏天湖面上半大的小鸳鸯，岸上远拍" },
      ],
      cite: ["adw", "tang-2025"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，3～5 月最多，8 月最少。北京名录里它是「旅鸟 / 留鸟」，还是国家二级保护动物。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "灰褐色的鸭子，哪只是鸳鸯妈妈？",
      quiz: true,
      items: [
        {
          name: "绿头鸭（雌）", scientific: "Anas platyrhynchos",
          shot: { photo: "look-lty", caption: "雌绿头鸭" },
          tells: ["橙色的嘴，中间有一块黑斑", "一身带黑斑点的褐色", "个子比鸳鸯大一圈"],
        },
        {
          name: "鸳鸯（雌）", scientific: "Aix galericulata", self: true,
          shot: { photo: "look-self", caption: "雌鸳鸯" },
          tells: ["灰色的头，白眼圈往后拖出一条白线", "嘴是黑色的"],
        },
        {
          name: "斑嘴鸭", scientific: "Anas zonorhyncha",
          shot: { photo: "look-bzy", caption: "斑嘴鸭" },
          tells: ["黑嘴巴，嘴尖有一块亮黄色", "公鸭母鸭长得差不多", "头和脖子比身子颜色浅"],
        },
      ],
      cite: ["adw-lty", "wiki-lty", "yl-yy2020", "wiki-bzy"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "帆是什么羽毛变的？", a: "是翅膀上的第 12 根飞羽。雄鸟的这根羽毛长得又宽又大；雌鸟同一根羽毛小小的，两边对称。", cite: ["tang-2025"] },
        { q: "夏天的雄鸳鸯去哪儿了？", a: "没走。夏天和秋天，雄鸟换上一身灰褐色的羽毛，看起来很像雌鸟，不过嘴还是红的。", cite: ["tang-2025", "wiki-en"] },
        { q: "鸳鸯怕人吗？", a: "野生鸳鸯很警觉。北京观鸟会调查时发现，人走到离它不到 20 米，它就会马上飞走。", cite: ["yl-yy2020"] },
        { q: "北京的鸳鸯，雄的多还是雌的多？", a: "2021 年初，北京数到 657 只鸳鸯：雄鸟 419 只，雌鸟 231 只，雄鸟多得多。", cite: ["yl-yy2021"] },
        { q: "鸳鸯住人做的房子吗？", a: "住。北京动物园给鸳鸯挂了 11 个人工巢箱，有 8 个被它们用上了。", cite: ["yl-yy2020"] },
        { q: "鸳鸯吃什么？", a: "生宝宝的季节素的、荤的都吃；冬天主要吃青草、树叶、草籽和稻谷。面包不是它的食物。", cite: ["yl-yy2021"] },
      ],
    },
  ],
  care: "在岸上远远看，不投喂、不追赶，不靠近树洞和巢箱。水边要和大人在一起，不下水，也不走上冰面。",
  nextTime: "下次去湖边数一数：一群鸳鸯里，雄鸟多还是雌鸟多？",
  sources: [
    { id: "adw", title: "Aix galericulata (Mandarin duck)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Aix_galericulata/" },
    { id: "adw-lty", title: "Anas platyrhynchos (mallard)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Anas_platyrhynchos/" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "tang-2025", title: "Sexually dimorphic sail feathers in the Mandarin duck as a model for lifelong developmental modulation", by: "Scientific Reports, 2025", url: "https://doi.org/10.1038/s41598-025-20446-3" },
    { id: "yl-yy2020", title: "鸳鸯成为时下动物园、玉渊潭公园、农展馆后湖、龙潭公园等地“明星”", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202011/t20201118_2139472.shtml" },
    { id: "yl-yy2021", title: "再创新高 657只鸳鸯“落户”京城", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202101/t20210121_2228756.shtml" },
    { id: "wiki-en", title: "Mandarin duck", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mandarin_duck" },
    { id: "wiki-lty", title: "Mallard", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mallard" },
    { id: "wiki-bzy", title: "Eastern spot-billed duck", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eastern_spot-billed_duck" },
  ],
  by: ["kid", "dad"],
};

export default entry;