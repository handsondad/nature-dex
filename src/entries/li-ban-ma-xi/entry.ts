import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京还有山地麻蜥；背上眼斑（丽斑）是重要线索，拍清花纹再确认。
const entry: Entry = {
  id: "li-ban-ma-xi",
  name: "丽斑麻蜥",
  scientific: "Eremias argus",
  kind: "animal",
  // 背上眼状斑点（丽斑）；与山地麻蜥易混，确定性先标 likely
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "爬行纲", "有鳞目", "蜥蜴科", "麻蜥属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只丽斑麻蜥", shoot: "晴天上午，沙地、草地或灌丛边。和大人一起远远拍背面：身上的眼状斑点清楚；不抓不摸" },
  hello: "背上开着一圈圈小「眼睛」一样的斑，所以名字里有个「丽斑」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "dorsal", caption: "丽斑麻蜥的背面", shoot: "沙地或草地上的麻蜥，从斜上方拍背面：眼状斑、头和尾巴都在画面里。不伸手抓" },
      points: [
        { x: 0.5, y: 0.45, label: "背上的丽斑", detail: "背上有许多一圈圈的眼状斑点（眼斑）。学名 argus 就来自神话里长了许多眼睛的阿耳戈斯。", cite: ["wiki-en", "rdb"] },
        { x: 0.48, y: 0.22, label: "尖尖的小头", detail: "头不大，吻尖尖的，属于蜥蜴科麻蜥属。", cite: ["rdb", "wiki-en"] },
        { x: 0.55, y: 0.7, label: "细长的尾巴", detail: "尾巴细长。受惊时有的蜥蜴会断尾逃走，只看不抓。", cite: ["wiki-en"] },
        { x: 0.4, y: 0.55, label: "短短的四肢", detail: "四条腿短短的，跑起来很快，喜欢晒太阳的开阔地。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7、8 月拍到它相对多一些；冬天几乎拍不到。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "丽斑麻蜥住在哪儿？", a: "沙漠、草地、灌丛、岩石地，甚至湿地边都可能见到，海拔从很低到 3400 米都有记录。", cite: ["wiki-en"] },
        { q: "它下蛋还是生宝宝？", a: "下蛋（卵生）。住得越高的妈妈，常常下得少一点，但蛋更大一点。", cite: ["rdb"] },
        { q: "名字里的 Argus 是谁？", a: "希腊神话里有许多眼睛的巨人。这种蜥蜴背上的眼斑，让人想起他。", cite: ["rdb", "wiki-en"] },
        { q: "北京有它吗？", a: "有。北京陆生野生动物名录—两栖爬行类里收录了丽斑麻蜥；同属还有山地麻蜥。", cite: ["bj-list"] },
        { q: "它分布广吗？", a: "中国、朝鲜半岛、蒙古和俄罗斯都有。模式产地在中国山东烟台一带。", cite: ["rdb", "wiki-zh"] },
      ],
    },
  ],
  care: "不抓不摸；碰到了马上洗手。夏天在野外看蜥蜴要和大人一起。",
  nextTime: "下次数一数：它背上能数清几圈「小眼睛」一样的斑？",
  sources: [
    { id: "rdb", title: "Eremias argus", by: "The Reptile Database", url: "https://reptile-database.reptarium.cz/species?genus=Eremias&species=argus" },
    { id: "wiki-en", title: "Eremias argus", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eremias_argus" },
    { id: "wiki-zh", title: "丽斑麻蜥", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E4%B8%BD%E6%96%91%E9%BA%BB%E8%9C%A5" },
    { id: "bj-list", title: "北京陆生野生动物名录—两栖爬行类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071636.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
