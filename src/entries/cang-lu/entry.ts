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
  cover: { photo: "cover", caption: "站在河边石头上的苍鹭", shoot: "浅水边或岸上站着的苍鹭，全身侧面：头上黑纹、长嘴、灰身子都清楚；远远拍，别靠近水边吓到它" },
  hello: "它能在水边一动不动站很久，等鱼游近了，长嘴猛地一扎！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side", caption: "在浅水里慢慢走的一只苍鹭", shoot: "浅水或岸边站着的苍鹭，侧面全身：黑眉纹、羽冠、长嘴和灰背都在画面里。用长焦，站远" },
      points: [
        { x: 0.505, y: 0.265, label: "眼睛后面的黑纹", detail: "白头上有一道宽宽的黑纹，从眼睛上方往后拖，末端变成细细的黑羽冠。", cite: ["bow-graher", "wiki-en"] },
        { x: 0.62, y: 0.28, label: "又长又尖的嘴", detail: "嘴又长又尖，像一把匕首，平时是黄色的。", cite: ["bow-graher"] },
        { x: 0.552, y: 0.44, label: "脖子前面的黑纹", detail: "白脖子前面有几道蓝黑色的细纹。", cite: ["wiki-en"] },
        { x: 0.4, y: 0.62, label: "灰灰的背和翅膀", detail: "背上是石板一样的灰色，肚子那面浅一些，偏白。", cite: ["bow-graher", "adw-heron"] },
        { x: 0.445, y: 0.78, label: "又细又长的腿", detail: "腿又细又长，颜色从黄色到粉褐色都有，适合在浅水里慢慢走。", cite: ["bow-graher"] },
      ],
    },
    {
      type: "compare",
      title: "小苍鹭和大苍鹭",
      before: { photo: "young", label: "第一年的幼鸟", caption: "头顶灰灰的幼鸟，还没有黑羽冠", shoot: "夏秋远远拍一只头顶发灰、没有黑眉纹的年轻苍鹭，侧面" },
      after: { photo: "adult", label: "成鸟", caption: "白头黑眉纹的成年苍鹭", shoot: "远远拍一只白头、黑眉纹清楚的成年苍鹭，侧面" },
      text: "第一年的小苍鹭头顶是灰色的，还没有黑眉纹和长羽冠。过了第一个冬天，额头才慢慢变白，长出黑色的羽冠。",
      cite: ["adw-heron"],
    },
    {
      type: "steps",
      title: "苍鹭宝宝长大了",
      steps: [
        {
          photo: "step-nest",
          label: "搭窝",
          text: "早春，许多苍鹭聚在一起，在高高的树上用树枝搭大窝。旧窝第二年还会接着用，越垒越厚。",
          caption: "站在高树上树枝大窝里的苍鹭",
          shoot: "只用长焦远远拍树上的苍鹭窝；不靠近鸟窝，不在树下久留",
        },
        {
          photo: "step-egg",
          label: "下蛋",
          text: "一窝通常有 3～5 枚蛋，蛋是淡淡的蓝绿色。孵大约 25～26 天，小苍鹭就出壳了。",
          caption: "博物馆收藏的 5 枚苍鹭蛋",
          shoot: "不拍蛋：鸟窝里的蛋只看转载照片，我们不靠近鸟窝",
        },
        {
          photo: "step-chick",
          label: "出壳",
          text: "爸爸妈妈把鱼吐在窝里，雏鸟们抢着吃。头上的羽毛乱蓬蓬地竖着。",
          caption: "挤在树枝窝里的两只苍鹭雏鸟",
          shoot: "不拍雏鸟：只看转载照片，我们不靠近鸟窝",
        },
        {
          photo: "step-fledge",
          label: "离巢",
          text: "大约 50 天，小苍鹭会飞了，离开窝。可到 9～10 周大，它才真正自己过日子。",
          caption: "在树枝间张开翅膀的年轻苍鹭",
          shoot: "夏天远远拍在树上或水边练习飞的年轻苍鹭",
        },
      ],
      cite: ["adw-heron", "bow-graher"],
    },
    {
      type: "magnifier",
      title: "凑近看它的头",
      shot: { photo: "look-cang-lu", caption: "单脚站在木桩上的苍鹭，头和嘴很清楚", shoot: "用长焦拍一张停着的苍鹭侧脸：黄眼睛、长嘴和黑羽冠要清楚" },
      text: "眼睛是黄色的，眼后的黑纹一直拖到后脑勺。长嘴平时是黄色的，到了繁殖的季节会带上一点橙色。",
      zoom: 2.5,
      start: [0.66, 0.23],
      cite: ["bow-graher", "adw-heron"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，1、2 月更多一些，6 月相对少。北京名录里它是「夏候鸟 / 旅鸟」。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "长脖子的大鹭，别认错",
      quiz: true,
      items: [
        {
          name: "草鹭",
          scientific: "Ardea purpurea",
          shot: { photo: "look-cao-lu", caption: "草鹭" },
          tells: ["脖子是棕红色的，两边各有一道黑色长纹", "个子小一点，身体颜色更深，看起来更瘦"],
        },
        {
          name: "苍鹭",
          scientific: "Ardea cinerea",
          self: true,
          shot: { photo: "cover", caption: "苍鹭" },
          tells: ["脖子白色，背和翅膀是灰色的", "白头上一道黑眉纹，向后拖成细细的黑羽冠"],
        },
        {
          name: "大白鹭",
          scientific: "Ardea alba",
          shot: { photo: "look-da-bai-lu", caption: "大白鹭" },
          tells: ["全身羽毛雪白", "嘴是黄色的，腿是黑色的，头上没有黑眉纹"],
        },
      ],
      cite: ["bow-graher", "adw-purple", "adw-egret", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "苍鹭怎么抓鱼？", a: "它常在水边一动不动地等，猎物游近了，就用长嘴飞快一扎。有时也慢慢走着找，偶尔还会快跑着追。", cite: ["bow-graher"] },
        { q: "它只吃鱼吗？", a: "主要吃鱼和蛙，也吃小野鸭、田鼠。有人见过它抓小兔子和黄鼠狼！在动物园里，它还常偷吃给别的动物准备的饭。", cite: ["bow-graher"] },
        { q: "飞的时候脖子伸直吗？", a: "不伸直。它把长脖子缩成「S」形，腿伸在身后。鹤飞的时候脖子是伸直的，看脖子就能把它们分开。", cite: ["adw-heron", "wiki-en"] },
        { q: "苍鹭宝宝长什么样？", a: "雏鸟样子很像小恐龙。一位鸟类学家说，它们是「鸟类世界里最奇怪的家伙之一」。", cite: ["bow-graher"] },
        { q: "苍鹭能活多久？", a: "平均大约 5 年。野外最长寿的一只活了 23 岁多，比平均寿命的四倍还长！", cite: ["adw-heron"] },
        { q: "它有多高？", a: "站直了能有 1 米高，身长 84～102 厘米，翅膀张开有 1.5 米多宽。", cite: ["adw-heron", "wiki-en"] },
      ],
    },
  ],
  care: "远远看，不追不靠近。水边要和大人在一起，不下水，看见鸟窝别靠近。",
  nextTime: "下次看它站着：是两条腿都站着，还是常常单脚站？",
  sources: [
    { id: "bow-graher", title: "Gray Heron (Ardea cinerea), Introduction", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/graher1/cur/introduction" },
    { id: "adw-heron", title: "Ardea cinerea (grey heron)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Ardea_cinerea/" },
    { id: "adw-purple", title: "Ardea purpurea (purple heron)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Ardea_purpurea/" },
    { id: "adw-egret", title: "Ardea alba (great egret)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Ardea_alba/" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "wiki-en", title: "Grey heron", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grey_heron" },
  ],
  by: ["kid", "dad"],
};

export default entry;
