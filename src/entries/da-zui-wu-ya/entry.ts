import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京名录里它是留鸟；冬天城里也常见。大嘴是和近亲分开的关键特征。
const entry: Entry = {
  id: "da-zui-wu-ya",
  name: "大嘴乌鸦",
  scientific: "Corvus macrorhynchos",
  kind: "animal",
  // 又厚又拱的大嘴、全黑发亮的羽毛，和细嘴的小嘴乌鸦分得开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "鸦科", "鸦属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只大嘴乌鸦", shoot: "公园或路边树上、地上的一只大嘴乌鸦，侧身或正面，大嘴和全身都清楚；远远拍，别追" },
  hello: "一身乌黑发亮，嘴巴又厚又拱，像带了一把小铲子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-head", caption: "大嘴乌鸦的侧面", shoot: "手机长焦远远拍一只侧身站着的乌鸦：嘴、头、脖子和肩膀都在画面里。晴天上午光线好" },
      points: [
        { x: 0.28, y: 0.48, label: "又厚又拱的大嘴", detail: "嘴巴又长又厚，嘴梁向上拱起，像一把小铲子。学名里的 macrorhynchos 就是「长嘴」的意思。", cite: ["wiki-en"] },
        { x: 0.42, y: 0.36, label: "圆圆的额头", detail: "额头圆圆的，和那张大嘴连在一起，远看头显得很大。", cite: ["wiki-en"] },
        { x: 0.55, y: 0.52, label: "乌黑发紫的羽毛", detail: "全身乌黑，阳光下羽毛会闪一点紫色的光。", cite: ["wiki-en"] },
        { x: 0.48, y: 0.62, label: "脖子上细细的长毛", detail: "喉咙附近有一撮细长的羽毛，叫「羽缨」，轻轻晃一下能看见。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，10 月和 5 月更多一些。北京名录里它是「留鸟」：一年到头都住在北京。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "大嘴乌鸦吃什么？", a: "活的、死的、植物、动物，它几乎都敢试。地上捡，树上也找，城里还会翻垃圾袋。", cite: ["wiki-en"] },
        { q: "它的窝搭在哪儿？", a: "多半高高地搭在树上，爱选松树、冷杉这类高树。窝是树枝搭的平台。", cite: ["wiki-en"] },
        { q: "一次下几颗蛋？", a: "通常 3～5 颗。妈妈孵大约 17～19 天，小鸟大约 35 天会飞。", cite: ["wiki-en"] },
        { q: "晚上它们挤在一起吗？", a: "会。傍晚常有一大群飞到同一个过夜的地方，有时成千上万只。", cite: ["wiki-en"] },
        { q: "北京的大嘴乌鸦冬天走吗？", a: "不走。北京陆生野生动物名录里，它是「留鸟」。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "远远看，不追不喂。看见鸟窝别靠近，别捡走小鸟。",
  nextTime: "下次听一听：它叫起来是「啊——」还是更粗的「嘎——」？",
  sources: [
    { id: "wiki-en", title: "Large-billed crow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Large-billed_crow" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
