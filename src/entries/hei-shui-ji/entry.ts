import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "hei-shui-ji",
  name: "黑水鸡",
  scientific: "Gallinula chloropus",
  kind: "animal",
  // 红额甲+黄嘴尖、身侧白线、白尾下，和白骨顶分得开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "鹤形目", "秧鸡科", "黑水鸡属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只黑水鸡", shoot: "水边芦苇旁或浮叶上的黑水鸡，侧面：红额甲、黄嘴尖和身侧白线都清楚；岸上远拍，别下水" },
  hello: "额头一块红红的「小盾牌」，嘴尖还蘸了一点黄。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "水边的一只黑水鸡", shoot: "湖边或公园水塘边，侧面拍一只黑水鸡：额头红盾、嘴、身侧白线和脚都在画面里；岸上远拍" },
      points: [
        { x: 0.32, y: 0.28, label: "红红的额甲", detail: "额头有一块没有羽毛的红皮，像一面小盾牌，叫额甲。", cite: ["wiki-en"] },
        { x: 0.28, y: 0.38, label: "红嘴黄嘴尖", detail: "嘴巴是红色的，尖端一点黄。繁殖季颜色更鲜。", cite: ["wiki-en"] },
        { x: 0.55, y: 0.48, label: "身子侧面的白线", detail: "深色身子的两侧有一道道白色条纹。", cite: ["wiki-en"] },
        { x: 0.72, y: 0.62, label: "尾巴下面一块白", detail: "尾巴下面是白色的，走路或游水时一翘一翘很显眼。", cite: ["wiki-en"] },
        { x: 0.48, y: 0.78, label: "黄绿色的长脚", detail: "腿是黄绿色的，脚趾很长，适合在浮叶和浅水里走。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，5 月和 2 月更多一些。北京名录里它是「夏候鸟 / 旅鸟」。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "红盾牌还是白盾牌？",
      quiz: true,
      items: [
        {
          name: "白骨顶",
          scientific: "Fulica atra",
          shot: { photo: "look-bai-gu-ding", caption: "白骨顶" },
          tells: [
            "额甲和嘴巴都是雪白色的，全身石板黑",
            "脚趾两侧长着荷叶边一样的瓣蹼，很会游水和潜水",
          ],
        },
        {
          name: "黑水鸡",
          scientific: "Gallinula chloropus",
          self: true,
          shot: { photo: "look-hei-shui-ji", caption: "黑水鸡" },
          tells: [
            "红红的额甲配黄嘴尖，身子侧面有一道白纹",
            "黄绿色的脚趾细长，两侧没有瓣蹼",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-coot"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "黑水鸡住在哪儿？", a: "沼泽、长满水草的湖边、河边，甚至城里公园的水塘里也能见到。", cite: ["wiki-en"] },
        { q: "窝搭在哪儿？", a: "在密密的水草里，在地上编一个篮子一样的窝。", cite: ["wiki-en"] },
        { q: "爸爸妈妈一起带孩子吗？", a: "会。孵蛋大约三周，爸爸妈妈一起孵、一起喂。小鸟大约 40～50 天会飞。", cite: ["wiki-en"] },
        { q: "小黑水鸡害怕了怎么办？", a: "有时会紧紧抓住爸爸或妈妈的身体，大人带着它飞到安全的地方。", cite: ["wiki-en"] },
        { q: "它会把蛋下到别人窝里吗？", a: "会。窝位不够时，它有时把蛋下到别的黑水鸡窝里，甚至鸭子、白骨顶的窝里。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "在岸上远远看，不追不喂。水边要和大人在一起，不下水，也不走进芦苇荡。",
  nextTime: "下次看它走路：尾巴是不是一翘一翘，露出下面的白？",
  sources: [
    { id: "wiki-en", title: "Common moorhen", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Common_moorhen" },
    { id: "wiki-coot", title: "Eurasian coot", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eurasian_coot" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
