import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京山上的野生黄栌，《Flora of China》里多归为变种灰毛黄栌 Cotinus coggygria var. cinerea；这里按 GBIF 写到种。
const entry: Entry = {
  id: "huang-lu",
  name: "黄栌",
  pinyin: "huáng lú",
  scientific: "Cotinus coggygria",
  kind: "plant",
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "无患子目", "漆树科", "黄栌属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛黄栌", shoot: "秋天叶子变红时拍一整丛或一整棵，红叶占满画面最好看" },
  hello: "秋天香山的红叶，一大片一大片就是它的叶子；初夏它还会“冒烟”。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf", caption: "山坡上的一丛黄栌", shoot: "拍一整丛，再凑近拍几片完整的叶子：形状、叶柄和叶尖都要清楚" },
      points: [
        { x: 0.5, y: 0.3, label: "一大丛", detail: "它多半长成灌木，从下面分出好多枝，一般 3～5 米高。", cite: ["foc-hl"] },
        { x: 0.435, y: 0.665, label: "叶子圆圆的", detail: "叶子宽椭圆到倒卵形，长大约 3～8 厘米，宽 2.5～6 厘米，整片叶子不裂开。", cite: ["foc-hl"] },
        { x: 0.39, y: 0.78, label: "叶边光光的", detail: "叶子边缘是全缘的，没有锯齿。叶尖圆圆的，有时中间微微凹进去一点。", cite: ["foc-hl"] },
        { x: 0.67, y: 0.52, label: "长长的叶柄", detail: "每片叶子都挂在一根细细的叶柄上，叶柄能长到大约 3.5 厘米。", cite: ["foc-hl", "foc-cotinus"] },
      ],
    },
    {
      type: "steps",
      title: "从小花到“一团烟”",
      steps: [
        { photo: "step-flower", label: "开花", text: "枝头散开一大把细细的花梗，挂着好多黄绿色的小花，每朵直径只有大约 3 毫米。", caption: "细枝上的黄绿色小花", shoot: "春天到初夏，靠近拍枝头的花序，小花要清楚" },
        { photo: "smoke-branch", label: "冒烟", text: "大多数花不结果。花谢以后，它们的花梗继续变长，长出细细的长毛，一团一团像粉色的烟。", caption: "枝头冒出一团粉色的“烟”", shoot: "花谢后再去同一枝，拍刚冒出来的“烟”" },
        { photo: "smoke", label: "满丛是烟", text: "一团接一团的“烟”冒出来，整丛黄栌远远看过去，像罩着一片粉色的云。", caption: "整丛罩着粉色的“烟”", shoot: "退远一点，拍整丛都冒“烟”的样子" },
        { photo: "fruit-smoke", label: "结小果", text: "少数花结了果。小小的绿果子就藏在毛茸茸的“烟”里。", caption: "“烟”里藏着的绿色小果", shoot: "夏天凑近一团“烟”，找里面绿色的小果子" },
        { photo: "step-fruit", label: "果子熟了", text: "到了秋天，“烟”变成干干的褐色，小果也熟了：暗红到褐色，扁扁的像个小腰子，大约 4.5 毫米长。", caption: "干掉的“烟”和褐色的小果", shoot: "秋天找一团变干的“烟”，近拍里面的小果" },
      ],
      cite: ["foc-hl", "foc-cotinus", "wiki-en"],
    },
    {
      type: "magnifier",
      title: "凑近看“烟”",
      shot: { photo: "smoke-close", caption: "一团粉色的“烟”", shoot: "初夏找一团粉色的“烟”，背景干净一点，靠近拍清楚一根根细毛" },
      text: "这团“烟”不是棉絮，是一根根没结果的花梗，每根上都长满了细长的毛。所以英文里它叫 smoke tree（烟树）。",
      zoom: 2.5,
      start: [0.5, 0.45],
      cite: ["foc-cotinus", "wiki-en"],
    },
    {
      type: "compare",
      title: "夏天和秋天",
      before: { photo: "same-summer", label: "夏天", caption: "满丛圆圆的绿叶子", shoot: "选一丛好找的黄栌，记住站的位置，夏天拍一张" },
      after: { photo: "same-autumn", label: "秋天", caption: "同样圆圆的叶子，变成了橙红色", shoot: "霜降前后回到同一个位置、同一个角度，再拍一张" },
      text: "春天和夏天，叶子里的叶绿素最多，叶子是绿的。秋天天冷了、早晚温差大，叶绿素慢慢消失，叶子里的胡萝卜素、花青素多起来，就变成了红色和橙色。",
      cite: ["bj-xiangshan"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 4、5 月拍到它最多，那时正开花、冒“烟”；10 月又多了一些，是去看红叶的时候。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "秋天山上的彩叶，哪个是黄栌？",
      quiz: true,
      items: [
        {
          name: "元宝枫", scientific: "Acer truncatum",
          shot: { photo: "look-yuan-bao-feng", caption: "元宝枫" },
          tells: ["叶子像手掌，常裂成 5 个尖尖的裂片", "叶子基部常是平平的一条线", "果子是一对带翅膀的翅果"],
        },
        {
          name: "黄栌", scientific: "Cotinus coggygria", self: true,
          shot: { photo: "look-huang-lu", caption: "黄栌" },
          tells: ["叶子圆圆的，一片一片，不裂开", "叶边光滑，没有锯齿", "果子很小，藏在一团“烟”里"],
        },
        {
          name: "火炬树", scientific: "Rhus typhina",
          shot: { photo: "look-huo-ju-shu", caption: "火炬树" },
          tells: ["一片大叶子由 13～27 片带锯齿的小叶排成", "小枝上有毛，像鹿角上的绒", "枝头竖着红色的果穗，像一支火炬"],
        },
      ],
      cite: ["foc-hl", "foc-acer-truncatum", "mbg-rhus", "bj-qiuye"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么叫“烟树”？", a: "大多数花不结果，花梗却越长越长，还长出细毛，远远看像一团粉色或灰白的烟。英文也叫 smoke tree。", cite: ["foc-cotinus", "wiki-en"] },
        { q: "香山红叶主要是谁？", a: "香山红叶有 14 种树、10 万多棵，其中面积最大的是黄栌，有近 10 万株。《Flora of China》里也写着：它的红叶在北京很有名。", cite: ["bj-xiangshan", "foc-cinerea"] },
        { q: "名字里为什么有个“黄”？", a: "黄栌的木头是黄色的。古时候的中国人用它的木头做黄色的染料。", cite: ["foc-cotinus", "foc-cinerea"] },
        { q: "红叶都是它吗？", a: "不全是。北京秋天变红的还有元宝枫、五角枫、火炬树；栾树、银杏的叶子则会变黄。", cite: ["bj-qiuye", "bj-xiangshan"] },
        { q: "它的果子有多大？", a: "很小，扁扁的像个小腰子，大约 4.5 毫米长、2.5 毫米宽，熟了是暗红到褐色。", cite: ["foc-hl", "foc-cotinus"] },
        { q: "折断会怎样？", a: "黄栌属植物会流出气味刺激的树脂。只看、拍照，不要折枝条。", cite: ["foc-cotinus"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘叶。它属于漆树科，别让汁液沾到皮肤。",
  nextTime: "霜降前后再去同一丛：叶子是整片一起红，还是有的红有的还绿？初夏再去一次，看看它冒不冒“烟”。",
  sources: [
    { id: "foc-hl", title: "Cotinus coggygria 黄栌", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Cotinus%20coggygria?t=foc" },
    { id: "foc-cotinus", title: "Cotinus 黄栌属", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Cotinus?t=foc" },
    { id: "foc-cinerea", title: "Cotinus coggygria var. cinerea 灰毛黄栌", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Cotinus%20coggygria%20var.%20cinereus?t=foc" },
    { id: "foc-acer-truncatum", title: "Acer truncatum 元宝枫", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Acer%20truncatum?t=foc" },
    { id: "mbg-rhus", title: "Rhus typhina（staghorn sumac）", by: "Missouri Botanical Garden Plant Finder", url: "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?kempercode=m100" },
    { id: "wiki-en", title: "Cotinus coggygria", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cotinus_coggygria" },
    { id: "bj-xiangshan", title: "金代已为诗人墨客所称道的香山红叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/whgy/whgy_wsgc/201912/t20191206_885638.html" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;