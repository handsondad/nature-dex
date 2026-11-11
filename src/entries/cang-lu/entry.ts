import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "cang-lu",
  name: "苍鹭",
  scientific: "Ardea cinerea",
  kind: "animal",
  // 灰背、白头黑眉纹拖成羽冠、粉黄长嘴，站着像一根灰柱子
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "鹈形目", "鹭科", "鹭属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只苍鹭", shoot: "浅水边或岸上站着的苍鹭，全身侧面：头上黑纹、长嘴、灰身子都清楚；远远拍，别靠近水边吓到它" },
  hello: "它常单脚站在浅水里，一动不动，像一根灰灰的长柱子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-stand", caption: "浅水边的一只苍鹭", shoot: "浅水或岸边站着的苍鹭，侧面全身：黑眉纹、羽冠、长嘴和灰背都在画面里。用长焦，站远" },
      points: [
        { x: 0.42, y: 0.12, label: "眼睛后面的黑纹", detail: "白头上有一道宽宽的黑纹，从眼睛往后拖，末端变成细细的黑羽冠。", cite: ["wiki-en"] },
        { x: 0.32, y: 0.28, label: "又长又尖的嘴", detail: "嘴巴粉黄色，又长又尖，像一把长矛。", cite: ["wiki-en"] },
        { x: 0.55, y: 0.45, label: "灰灰的背和翅膀", detail: "背上和翅膀是烟灰一样的灰色，肚子偏白。", cite: ["wiki-en"] },
        { x: 0.48, y: 0.35, label: "脖子前面的黑纹", detail: "白脖子前面有几道蓝黑色的细纹。", cite: ["wiki-en"] },
        { x: 0.55, y: 0.82, label: "又细又长的腿", detail: "腿又细又长，适合在浅水里慢慢走，或单脚站很久。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，1、2 月更多一些，6 月相对少。北京名录里它是「夏候鸟 / 旅鸟」。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "苍鹭怎么抓鱼？", a: "常在浅水边站着不动，或慢慢走。猎物靠近时，脖子像弹簧一样伸出去扎。", cite: ["wiki-en"] },
        { q: "它只吃鱼吗？", a: "不是。鱼、青蛙、虾蟹、水生昆虫都吃，有时也抓老鼠、小兔子，甚至小鸭子。", cite: ["wiki-en"] },
        { q: "飞的时候脖子伸直吗？", a: "不伸直。它把长脖子收成「S」形再飞，这是鹭类的记号。", cite: ["wiki-en"] },
        { q: "窝搭在哪儿？", a: "常常许多家一起，在高高的树上用树枝搭很大的窝，年年加厚。", cite: ["wiki-en"] },
        { q: "它有多高？", a: "站起来大约能到 1 米高，翅膀张开大约 1.5～2 米。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "远远看，不追不靠近。水边要和大人在一起，不下水，看见鸟窝别靠近。",
  nextTime: "下次看它站着：是两条腿都站着，还是常常单脚站？",
  sources: [
    { id: "wiki-en", title: "Grey heron", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grey_heron" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
