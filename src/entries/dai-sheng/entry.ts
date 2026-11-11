import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "dai-sheng",
  name: "戴胜",
  scientific: "Upupa epops",
  kind: "animal",
  // 头上能立起的花冠、又长又弯的嘴，北京几乎没有第二种鸟长这样
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "犀鸟目", "戴胜科", "戴胜属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只戴胜", shoot: "草地上或矮树上的一只戴胜，侧面最好：花冠、长嘴和翅膀条纹都清楚；站远一点拍，别追" },
  hello: "头上竖着一排「小扇子」，嘴巴又长又弯，像一把小镊子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-crest", caption: "戴胜的侧面", shoot: "草地上找吃的或停在矮枝上的戴胜，侧面拍：花冠竖起最好，长嘴、脖子和翅膀条纹都在画面里" },
      points: [
        { x: 0.42, y: 0.18, label: "头上的花冠", detail: "头顶有一排能竖起来的羽毛，像一把小扇子。平常趴着，受惊或兴奋时会立起来。", cite: ["wiki-en"] },
        { x: 0.22, y: 0.42, label: "又长又弯的嘴", detail: "嘴巴细长，微微向下弯，像一把小镊子，用来扎进土里找虫子。", cite: ["wiki-en"] },
        { x: 0.55, y: 0.52, label: "翅膀上的黑白条", detail: "翅膀和尾巴上有黑白相间的条纹，飞起来特别显眼。", cite: ["wiki-en"] },
        { x: 0.48, y: 0.38, label: "橘粉色的身子", detail: "头和身子是粉橘色或淡棕色，和黑白翅膀配在一起很好认。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，4、5 月更多一些。北京名录里它是「夏候鸟 / 留鸟」。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "戴胜吃什么？", a: "主要吃昆虫：蟋蟀、甲虫、蚂蚁，还有土里的幼虫。偶尔也吃小蜥蜴、青蛙和一点点种子。", cite: ["wiki-en"] },
        { q: "它怎么找虫子？", a: "在光秃秃或草很少的地上走，停下来把长嘴整根扎进土里，把虫子掏出来。", cite: ["wiki-en"] },
        { q: "窝在哪儿？", a: "树洞、墙缝、石头缝里都行，入口常常窄窄的。有时洞里几乎不垫东西。", cite: ["wiki-en"] },
        { q: "小戴胜用什么保护自己？", a: "妈妈和小鸟尾脂腺会分泌臭臭的液体，闻起来像烂肉，用来吓跑敌人，也能赶虫子。", cite: ["wiki-en"] },
        { q: "戴胜的名字从哪来？", a: "拉丁名 Upupa 和 epops，还有英文 hoopoe，都是学它「呼——噗、呼——噗」的叫声。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "远远看，不追不抓。看见树洞鸟窝别靠近，别伸手进去。",
  nextTime: "下次看它找吃的：它是把嘴扎进土里，还是只啄地面上的虫子？",
  sources: [
    { id: "wiki-en", title: "Hoopoe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hoopoe" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
