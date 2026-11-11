import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yuan-bao-feng",
  name: "元宝枫",
  scientific: "Acer truncatum",
  kind: "plant",
  // 五角枫（Acer pictum）很像：拍到叶子基部是不是平的、果翅和小坚果差不多长，再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "无患子目", "无患子科", "槭树属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵元宝枫", shoot: "我们遇见的那一棵：整棵树拍进去，秋天叶子变红、变黄时最好看" },
  hello: "叶子像一只张开五指的小手，果子带着两片翅膀。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf-fruit", caption: "叶子和一串翅果", shoot: "5～8 月拍一根低处的枝条：一片完整的叶子摊开在画面上半边，下面垂着一串带翅膀的果子" },
      points: [
        { x: 0.5, y: 0.2, label: "裂成 5 片", detail: "叶子多半裂成 5 片，偶尔 7 片。每片是尖尖的三角形，边上光光的。", cite: ["foc-ybf"] },
        { x: 0.5, y: 0.5, label: "叶子底边平平的", detail: "叶子挨着叶柄的那条边常常是平的，像用刀切过一样。", cite: ["foc-ybf"] },
        { x: 0.3, y: 0.62, label: "长长的叶柄", detail: "叶柄长 3～9 厘米，光溜溜的。", cite: ["foc-ybf"] },
        { x: 0.65, y: 0.82, label: "一对小翅膀", detail: "两颗扁扁的果子连在一起，各带一片翅膀，张开成直角或更大的角。", cite: ["foc-ybf"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一对翅果",
      shot: { photo: "fruit-macro", caption: "一对翅果", shoot: "捡一对落下的翅果放在手心或白纸上，从正上方拍，翅膀和中间的小坚果都要清楚" },
      text: "中间鼓起来的是小坚果，长 1.3～1.8 厘米。翅膀是浅绿白色的，常和小坚果差不多长。",
      zoom: 2.5,
      start: [0.5, 0.5],
      cite: ["foc-ybf"],
    },
    {
      type: "compare",
      title: "同一棵树，夏天和秋天",
      before: { photo: "same-green", label: "夏天", caption: "满树绿叶", shoot: "选一棵好找的元宝枫，记住站的位置，夏天拍一张全树" },
      after: { photo: "same-red", label: "秋天", caption: "叶子变色", shoot: "10～11 月回到同一个位置、同一个角度，再拍一张" },
      text: "秋天，元宝枫的叶子会变成砖红色、橙黄色，有的一半黄一半绿。我们这棵变成了什么颜色？",
      cite: ["bj-lihong"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 4 月拍到它最多，标注开花的也几乎都在 4 月；10 月又多了一些。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "元宝枫开花吗？", a: "开！4 月开黄绿色的小花，每朵有 5 片花瓣，一簇一簇朝上长着。", cite: ["foc-ybf", "wiki-en"] },
        { q: "秋天叶子为什么会变红？", a: "天冷了，叶子里的绿色（叶绿素）慢慢分解，红色的花青素越来越多，叶子就慢慢变红了。", cite: ["bj-qiuye"] },
        { q: "叶柄断了会怎样？", a: "会流出白色的汁，像牛奶一样（乳汁）。可别为了看它去折叶子哦。", cite: ["wiki-en"] },
        { q: "它的种子有什么特别？", a: "比很像它的五角枫种子大，里面的油特别多。发芽时，它的两片子叶留在土里，很多槭树不是这样。", cite: ["foc-ybf", "wiki-en"] },
      ],
    },
  ],
  care: "只看、拍照，不折叶子和枝条。落下的翅果可以捡起来看，不要放进嘴里。",
  nextTime: "把一对翅果从高处放下，它是直直掉下去，还是转着圈落下？下次试一试。",
  sources: [
    { id: "foc-ybf", title: "Acer truncatum 元宝枫", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200013134" },
    { id: "wiki-en", title: "Acer truncatum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Acer_truncatum" },
    { id: "bj-lihong", title: "“丽红”元宝枫添彩北京城", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202302/t20230221_2920915.shtml" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
