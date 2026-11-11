import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "huang-lu",
  name: "黄栌",
  scientific: "Cotinus coggygria",
  kind: "plant",
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "无患子目", "漆树科", "黄栌属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛黄栌", shoot: "秋天叶子变红时拍一整丛或一整棵，红叶占满画面最好看" },
  hello: "秋天香山的红叶，一大片一大片就是它的叶子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf", caption: "黄栌的叶子", shoot: "拍几片完整的叶子：形状、叶柄和叶尖都要清楚；秋天红叶更好认" },
      points: [
        { x: 0.5, y: 0.45, label: "叶子圆圆的", detail: "叶子宽椭圆到倒卵形，长大约 3～8 厘米，宽 2.5～6 厘米，整片叶子不裂开。", cite: ["foc-hl"] },
        { x: 0.5, y: 0.2, label: "叶尖圆或微凹", detail: "叶子尖端圆圆的，有时中间微微凹进去一点。", cite: ["foc-hl"] },
        { x: 0.5, y: 0.85, label: "长长的叶柄", detail: "叶柄能长到大约 3.5 厘米。", cite: ["foc-hl"] },
        { x: 0.75, y: 0.5, label: "叶边光光的", detail: "叶子边缘几乎是光滑的，没有锯齿。", cite: ["foc-hl", "foc-cotinus"] },
      ],
    },
    {
      type: "compare",
      title: "同一丛，夏天和秋天",
      before: { photo: "same-green", label: "夏天", caption: "满树绿叶", shoot: "选一丛好找的黄栌，记住站的位置，夏天拍一张" },
      after: { photo: "same-red", label: "秋天", caption: "叶子变红", shoot: "霜降前后回到同一个位置、同一个角度，再拍一张" },
      text: "天冷了，叶子里的绿色慢慢退去，红色越来越多。香山的红叶，面积最大的就是黄栌。",
      cite: ["bj-xiangshan", "bj-qiuye"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 4、5 月拍到它最多；10 月又多了一些。秋天去看红叶最热闹。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么叫“烟树”？", a: "花谢以后，不结果的花梗上长出细细的毛，远远看像一团粉色或灰白的烟。英文也叫 smoke tree。", cite: ["foc-cotinus", "wiki-en"] },
        { q: "香山红叶主要是谁？", a: "香山红叶有好多种树，株数最多、面积最大的是黄栌，大约有近 10 万株。", cite: ["bj-xiangshan"] },
        { q: "它开什么样的花？", a: "花很小，直径大约只有 3 毫米，挤在圆锥花序里。花期大约从 2 月到 8 月。", cite: ["foc-hl"] },
        { q: "折断会怎样？", a: "黄栌属植物有刺激气味的树脂。只看、拍照，不要折枝条。", cite: ["foc-cotinus"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘叶。它属于漆树科，别让汁液沾到皮肤。",
  nextTime: "霜降前后再去同一丛：叶子是整片一起红，还是有的红有的还绿？",
  sources: [
    { id: "foc-hl", title: "Cotinus coggygria 黄栌", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200012683" },
    { id: "foc-cotinus", title: "Cotinus 黄栌属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=108168" },
    { id: "wiki-en", title: "Cotinus coggygria", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cotinus_coggygria" },
    { id: "wiki-zh", title: "黄栌", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E9%BB%84%E6%A0%8C" },
    { id: "bj-xiangshan", title: "金代已为诗人墨客所称道的香山红叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/whgy/whgy_wsgc/201912/t20191206_885638.html" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
