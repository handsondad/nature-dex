import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 名录与 iNaturalist 常用「小䴙䴘」；页面名保留「小鸊鷉」，和用户写法一致。
const entry: Entry = {
  id: "xiao-pi-ti",
  name: "小鸊鷉",
  scientific: "Tachybaptus ruficollis",
  kind: "animal",
  // 个子小、夏天红脖子+黄嘴角，冬天粉扑似的屁股；拍清头颈就能认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "䴙䴘目", "䴙䴘科", "小䴙䴘属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只小鸊鷉", shoot: "平静水面上的一只小鸊鷉，侧面：头、脖子和圆圆的屁股都清楚；岸上远拍，别下水" },
  hello: "小小一只，常「扑通」钻进水里；尾巴那一团毛，像一个小粉扑。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-water", caption: "水面上的一只小鸊鷉", shoot: "湖面或水塘上一只小鸊鷉的侧面：嘴、头、脖子和后部都在画面里。岸上用长焦拍" },
      points: [
        { x: 0.3, y: 0.42, label: "尖尖的小嘴", detail: "嘴巴又尖又短。夏天嘴角有一块亮黄色的皮肤。", cite: ["wiki-en"] },
        { x: 0.42, y: 0.38, label: "夏天的红脖子", detail: "夏天脸颊、脖子两侧是红棕色的；冬天变成灰褐色。", cite: ["wiki-en"] },
        { x: 0.7, y: 0.55, label: "粉扑似的屁股", detail: "后面一蓬蓬的绒毛，像一个小粉扑，是认它的好记号。", cite: ["wiki-en"] },
        { x: 0.5, y: 0.5, label: "小小的个子", detail: "大约 23～29 厘米长，是欧亚非地区䴙䴘里最小的一种。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，1、2 月更多一些，8 月相对少。北京名录里它是「夏候鸟 / 旅鸟 / 留鸟」，还是市重点保护。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "小鸊鷉吃什么？", a: "潜入水里抓小鱼、水生昆虫、蝌蚪和甲壳小动物。", cite: ["wiki-en", "wiki-zh"] },
        { q: "为什么窝要搭在水边？", a: "它的腿长在身体很后面，上岸走路很笨。窝多半搭在水边的水草里。", cite: ["wiki-en"] },
        { q: "大人离开窝时做什么？", a: "常用水草把蛋盖起来，让敌人更难发现。", cite: ["wiki-en"] },
        { q: "小鸡会骑在爸爸妈妈背上吗？", a: "会。出壳不久就会游泳，也常趴在游水的大人背上。", cite: ["wiki-en"] },
        { q: "它的叫声像什么？", a: "繁殖期常发出一串「wee-wee-wee」，听起来有点像小马嘶鸣。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "在岸上远远看，不追不喂。水边要和大人在一起，不下水。",
  nextTime: "下次盯着看半分钟：它钻进水里，大概过几秒才冒出来？",
  sources: [
    { id: "wiki-en", title: "Little grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Little_grebe" },
    { id: "wiki-zh", title: "小鸊鷉", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%B0%8F%E9%B8%8A%E9%B7%89" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
