import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zi-hua-di-ding",
  name: "紫花地丁",
  pinyin: "zǐ huā dì dīng",
  scientific: "Viola philippica",
  kind: "plant",
  // 北京早春还有早开堇菜等紫色堇菜：对照叶形、叶柄长短和花期再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "金虎尾目", "堇菜科", "堇菜属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛紫花地丁", shoot: "4～5 月，我们遇见的那一丛：紫色的花和贴地的窄叶子都拍进去" },
  hello: "草地上探出紫色小脸，花后面还拖着一条小尾巴。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "flower-macro", caption: "一丛开花的紫花地丁", shoot: "从正上方拍一整丛：窄叶子、花梗和侧面的花都在画面里" },
      points: [
        { x: 0.5, y: 0.58, label: "看不到地上茎", detail: "地面上看不到茎，叶子和花梗都从根上直接长出来，围成一丛。", cite: ["foc-zhdd"] },
        { x: 0.69, y: 0.34, label: "叶子窄窄长长", detail: "开花时叶子多是长圆形或窄卵状披针形，大约 1.5～4 厘米长、0.5～1 厘米宽。", cite: ["foc-zhdd"] },
        { x: 0.37, y: 0.71, label: "细细的花梗", detail: "花梗又细又长，和叶子差不多高或更高，中间有两片线形的小苞片。", cite: ["foc-zhdd"] },
        { x: 0.46, y: 0.84, label: "花背后的萼片", detail: "从背后看，花被几片尖尖的绿色萼片托着，每片 3～7 毫米长。", cite: ["foc-zhdd"] },
      ],
    },
    {
      type: "steps",
      title: "从开花到裂果",
      steps: [
        { photo: "step-flower", label: "开花", text: "4～5 月开花，细细的花梗从叶丛里伸出来，和叶子一样高或更高。", caption: "春天开的花", shoot: "4 月拍一丛正在开花的紫花地丁，花和叶子都拍进去" },
        { photo: "step-fruit", label: "结果", text: "花谢后结出椭圆形的果子，5～12 毫米长。5～9 月都能看到果子，叶子也越长越大。", caption: "绿色的果子", shoot: "5～6 月回到同一丛，在叶丛里找一个还没裂开的绿果子" },
        { photo: "step-open", label: "裂开", text: "果子熟了裂成 3 瓣，里面排着浅黄色的小种子，每颗约 1.8 毫米。", caption: "裂开的果子和种子", shoot: "夏天找一个刚裂开的果子，拍清楚果瓣和里面的种子，只拍不摘" },
      ],
      cite: ["foc-zhdd", "foc-viola"],
    },
    {
      type: "magnifier",
      title: "凑近看一朵花",
      shot: { photo: "whole-plant", caption: "开满花的一丛", shoot: "蹲下来，对着一朵正面朝你的花拍，能看清花心的条纹" },
      text: "花心颜色浅，带一道道紫色条纹；最下面那片花瓣里面有紫色的脉纹，还往后伸出一个管子样的距，3～8 毫米长。",
      zoom: 2.5,
      start: [0.44, 0.3],
      cite: ["foc-zhdd"],
    },
    {
      type: "compare",
      title: "开花时小叶，结果时大叶",
      before: { photo: "same-spring", label: "开花时", caption: "叶子窄窄小小", shoot: "4 月选一丛好找的，记住它在哪儿，拍下开花时的叶子" },
      after: { photo: "same-summer", label: "结果时", caption: "叶子又长又宽", shoot: "7～8 月回到同一丛，用同样的角度再拍一张" },
      text: "开花时叶片只有 1.5～4 厘米长；到结果时能长到 10 厘米长、4 厘米宽，叶柄也长到 10 厘米，上部的翅变宽。",
      cite: ["foc-zhdd"],
    },
    {
      type: "lookalike",
      title: "紫色小花，别认错",
      quiz: true,
      items: [
        {
          name: "早开堇菜", scientific: "Viola prionantha",
          shot: { photo: "look-zkjc", caption: "早开堇菜" },
          tells: ["开花更早，3～4 月就开", "叶子宽一些，基部有时微微凹进去", "花大一些，直径大约 1.2～2 厘米"],
        },
        {
          name: "紫花地丁", scientific: "Viola philippica", self: true,
          shot: { photo: "look-zhdd", caption: "紫花地丁" },
          tells: ["开花稍晚，多在 4～5 月", "叶子窄窄长长，开花时叶柄比叶片还长", "花中等大小，紫色或紫堇色"],
        },
      ],
      cite: ["foc-zhdd", "foc-zkjc", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 3、4 月拍到它最多，标注开花的也多在 3～4 月。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "夏天它还开花吗？", a: "开，可花不张开！白天超过 14 小时，它就开出没有花瓣、只有 2 枚雄蕊的闭锁花，比春天张开的花晚。", cite: ["li2016", "foc-viola"] },
        { q: "种子是怎么出门的？", a: "果子裂成 3 瓣，果瓣收紧把种子弹出去。大多数堇菜还有第二程：蚂蚁把落地的种子搬走。", cite: ["beattie1975", "foc-viola"] },
        { q: "它和早开堇菜的种子一样吗？", a: "不一样。紫花地丁的种子浅黄色，约 1.8 毫米；早开堇菜的种子深褐色，约 2 毫米，常有褐色小点。", cite: ["foc-zhdd", "foc-zkjc"] },
        { q: "紫花地丁都开紫花吗？", a: "大多是紫色或淡紫色，偶尔也能遇到开白花的。", cite: ["foc-zhdd"] },
        { q: "它喜欢长在哪儿？", a: "田边、山坡草地、林缘、路边都常见，海拔大约 1700 米以下。", cite: ["foc-zhdd"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花、不挖根。路边的植物可能打过药，不要放进嘴里。",
  nextTime: "量一量：叶柄是不是比叶片还长？和早开堇菜的叶子比一比谁更窄。",
  sources: [
    { id: "foc-zhdd", title: "Viola philippica 紫花地丁", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014402" },
    { id: "foc-zkjc", title: "Viola prionantha 早开堇菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014407" },
    { id: "foc-viola", title: "Viola 堇菜属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=134607" },
    { id: "li2016", title: "Expression of B-class MADS-box genes in response to variations in photoperiod is associated with chasmogamous and cleistogamous flower development in Viola philippica", by: "Li et al., BMC Plant Biology 2016", url: "https://doi.org/10.1186/s12870-016-0832-2" },
    { id: "beattie1975", title: "Seed dispersal in Viola (Violaceae): adaptations and strategies", by: "Beattie & Lyons, American Journal of Botany 1975", url: "https://doi.org/10.1002/j.1537-2197.1975.tb14104.x" },
    { id: "wiki-zh", title: "光瓣堇菜（紫花地丁）", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%85%89%E7%93%A3%E5%A0%87%E8%8F%9C" },
  ],
  by: ["kid", "dad"],
};

export default entry;
