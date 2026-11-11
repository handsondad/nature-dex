import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yuan-yang",
  name: "鸳鸯",
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
        { x: 0.16, y: 0.42, label: "小小的红嘴巴", detail: "雄鸟的嘴是鲜红色的，小小的一个。", cite: ["wiki-en", "yl-yy2020"] },
        { x: 0.26, y: 0.28, label: "眼睛后面一大片白", detail: "眼睛上方往后有一道很宽的白色条纹，像一弯白月牙。", cite: ["wiki-en", "adw"] },
        { x: 0.58, y: 0.3, label: "背上两片橙色的帆", detail: "这是两根翅膀上的羽毛，长得又宽又翘，竖在背上，像小船的帆。", cite: ["adw", "yl-yy2020", "wiki-en"] },
        { x: 0.34, y: 0.62, label: "紫色胸口两道白", detail: "胸口是紫色的，上面有两道竖着的白条。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "compare",
      title: "雄鸟和雌鸟",
      before: { photo: "same-male", label: "雄鸟·鸳", caption: "颜色鲜艳", shoot: "同一对鸳鸯：站在同一个地方、同样的角度，先拍雄鸟" },
      after: { photo: "same-female", label: "雌鸟·鸯", caption: "一身灰褐", shoot: "不换位置、不换角度，再拍它身边的雌鸟" },
      text: "雌鸟背上没有帆，一身灰褐色。眼睛周围有一圈细细的白，往后拖出一条白线，嘴尖颜色浅。",
      cite: ["wiki-en", "adw"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，3～5 月最多，8 月最少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "鸳鸯把家安在哪儿？", a: "安在水边大树的树洞里，有的离地面有好几米高。北京有些公园还给它们挂了人工巢箱。", cite: ["adw", "yl-yy2021"] },
        { q: "小鸳鸯怎么从树洞里下来？", a: "出壳以后，妈妈在地上叫它们。小鸭子一只只爬到洞口，自己跳下去，再跟着妈妈去水边。", cite: ["adw", "wiki-en"] },
        { q: "鸳鸯怕人吗？", a: "野生鸳鸯很警觉。北京观鸟会调查时发现，人走到离它不到 20 米，它就会马上飞走。", cite: ["yl-yy2020"] },
        { q: "北京的鸳鸯冬天去哪儿？", a: "过去它们冬天飞去南方。现在北京的鸳鸯有的冬天也不走，有的春天飞来、秋天再飞走。", cite: ["yl-yy2020"] },
        { q: "鸳鸯吃什么？", a: "生宝宝的季节素的、荤的都吃；冬天主要吃青草、树叶、草籽和稻谷。面包不是它的食物。", cite: ["yl-yy2021"] },
      ],
    },
  ],
  care: "在岸上远远看，不投喂、不追赶。水边要和大人在一起，不下水，也不走上冰面。",
  nextTime: "下次去湖边数一数：一群鸳鸯里，雄鸟多还是雌鸟多？",
  sources: [
    { id: "adw", title: "Aix galericulata (Mandarin duck)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Aix_galericulata/" },
    { id: "wiki-en", title: "Mandarin duck", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mandarin_duck" },
    { id: "yl-yy2020", title: "鸳鸯成为时下动物园、玉渊潭公园、农展馆后湖、龙潭公园等地“明星”", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202011/t20201118_2139472.shtml" },
    { id: "yl-yy2021", title: "再创新高 657只鸳鸯“落户”京城", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202101/t20210121_2228756.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
