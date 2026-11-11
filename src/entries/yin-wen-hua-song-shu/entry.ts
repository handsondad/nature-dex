import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京名录里是市重点保护；和花鼠、岩松鼠都可能认错。
const entry: Entry = {
  id: "yin-wen-hua-song-shu",
  name: "隐纹花松鼠",
  scientific: "Tamiops swinhoei",
  kind: "animal",
  // 鼻到颈的浅黄条、背上较淡的条纹、耳尖白毛簇；条纹不如花鼠鲜明
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "啮齿目", "松鼠科", "花松鼠属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只隐纹花松鼠", shoot: "树上或灌木间的隐纹花松鼠。用长焦远远拍侧面：脸上条纹、背上条纹和耳尖白毛都清楚；不靠近、不投喂" },
  hello: "小小一只，脸上和背上都有浅浅的条纹，耳尖还点着一小撮白。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-branch", caption: "树枝上的隐纹花松鼠", shoot: "树上停着的一只，侧面微距或长焦：鼻到颈的条纹、背上条纹、耳尖和尾巴都在画面里" },
      points: [
        { x: 0.3, y: 0.38, label: "鼻到颈的浅黄条", detail: "从鼻子两侧到脖子，各有一条浅黄色的条纹。", cite: ["adw", "wiki-en"] },
        { x: 0.55, y: 0.45, label: "背上淡淡的条纹", detail: "背上有肉桂色到黄色的条纹，颜色比近亲淡一些，常常到肩就停，不和脸上的条连成一线。", cite: ["adw"] },
        { x: 0.42, y: 0.22, label: "耳尖一小撮白", detail: "耳朵后面尖上有一小撮白色的毛。", cite: ["adw", "wiki-en"] },
        { x: 0.7, y: 0.55, label: "小小的身子", detail: "身子大约只有 10 厘米左右，比岩松鼠、红松鼠都小一圈。", cite: ["adw"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5、6 月拍到它最多，3 月很少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "隐纹花松鼠吃什么？", a: "主要吃种子、坚果和植物的其他部分，也会喝花蜜。会把吃的藏起来以后再找。", cite: ["adw", "wiki-en"] },
        { q: "它白天出来还是夜里？", a: "白天出来。大多在树上活动：找吃的、做窝、交配都在树冠里。", cite: ["adw"] },
        { q: "一年生几次宝宝？", a: "大约一年两窝，平均一窝大约 3 只。", cite: ["adw", "wiki-en"] },
        { q: "为什么叫「隐纹」？", a: "背上的条纹比较淡，不像有的花松鼠那么鲜艳醒目，所以叫隐纹。", cite: ["adw"] },
        { q: "北京保护它吗？", a: "保护。北京陆生野生动物名录里，它是「北京市重点」保护动物。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。别用手去够树上的它。",
  nextTime: "下次数一数：它脸上有几条浅色纹？背上的纹是不是比花鼠淡？",
  sources: [
    { id: "adw", title: "Tamiops swinhoei (Swinhoe's striped squirrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Tamiops_swinhoei/" },
    { id: "wiki-en", title: "Swinhoe's striped squirrel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Swinhoe%27s_striped_squirrel" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
