import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-tou-bei",
  name: "白头鹎",
  scientific: "Pycnonotus sinensis",
  kind: "animal",
  // 后脑勺大片白、黑头顶、白脸，和红耳鹎等分得开；拍清头就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "鹎科", "鹎属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只白头鹎", shoot: "树上或灌木上的一只白头鹎，侧面或微侧：后脑的白、黑头顶都清楚；远远拍，别追" },
  hello: "后脑勺一片白，像戴了一顶小白帽，所以也叫白头翁。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-head", caption: "白头鹎的侧脸", shoot: "树上停着的白头鹎，侧脸拍：头顶、后脑白斑、脸颊和胸口都在画面里。用长焦，别靠近" },
      points: [
        { x: 0.48, y: 0.22, label: "黑黑的头顶", detail: "头顶到眼睛上面是黑色的，像扣了一顶小黑帽。", cite: ["wiki-en"] },
        { x: 0.58, y: 0.28, label: "后脑勺一片白", detail: "脖子后面到后脑有一大片白色，远看特别显眼。", cite: ["wiki-en"] },
        { x: 0.4, y: 0.36, label: "脸上的黑须纹", detail: "从嘴角往后有一条黑纹，像画了一撇小胡子。", cite: ["wiki-en"] },
        { x: 0.45, y: 0.55, label: "浅褐的胸口", detail: "肚子偏白，胸口有一条淡淡的褐色横带。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，5 月最多。北京名录里它是「留鸟」。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "白头鹎爱住哪儿？", a: "喜欢树木不太密的地方：疏林、公园、城郊绿化带，城里也能见到。", cite: ["wiki-en"] },
        { q: "它有多长？", a: "大约 19 厘米长，算小型鸣禽。", cite: ["wiki-en"] },
        { q: "它怎么叫？", a: "叫声又亮又多变，常听成「cha-ko-lee、cha-ko-lee」。", cite: ["wiki-en"] },
        { q: "北京的白头鹎冬天走吗？", a: "不走。北京陆生野生动物名录里，它是「留鸟」。", cite: ["bj-list"] },
        { q: "别处的白头鹎也一样常见吗？", a: "在上海，它常被算进城里最常见的几种鸟之一；在香港，疏林和灌丛里也很多。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "远远看，不追不抓。看见鸟窝别靠近，别捡走小鸟。",
  nextTime: "下次数一数：一棵树上同时能停几只白头鹎？它们会不会互相追？",
  sources: [
    { id: "wiki-en", title: "Light-vented bulbul", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Light-vented_bulbul" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
