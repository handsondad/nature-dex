import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yuan-ye-qian-niu",
  name: "圆叶牵牛",
  pinyin: "yuán yè qiān niú",
  scientific: "Ipomoea purpurea",
  kind: "plant",
  // 牵牛（Ipomoea nil）的叶子也可能不裂，拍到花下面的萼片再确认是哪一种
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "茄目", "旋花科", "牵牛属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛圆叶牵牛", shoot: "我们遇见的那一丛：爬在栏杆或篱笆上的藤，心形叶子和开着的花都拍进去（夏末到秋天，趁花开着）" },
  hello: "绕着栏杆往上爬的藤，开出紫红、蓝紫的小喇叭，喇叭心是白的。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "vine", caption: "一段开着花的藤", shoot: "一段藤的特写：两三片心形叶子、一朵开着的花，花下面的绿色萼片要拍清楚" },
      points: [
        { x: 0.38, y: 0.2, label: "心形的叶子", detail: "叶子圆圆的，基部凹进去，像一颗心；也有的叶子裂成三片。", cite: ["foc-yyqn"] },
        { x: 0.8, y: 0.19, label: "白心的小喇叭", detail: "花像个漏斗，4～6 厘米长。紫红、红或蓝紫色，越往中间越淡，变成白色。", cite: ["foc-yyqn"] },
        { x: 0.31, y: 0.42, label: "花下的萼片", detail: "花下面有 5 片绿色萼片，外面 3 片是长圆形，下半截长着张开的毛。", cite: ["foc-yyqn"] },
        { x: 0.5, y: 0.58, label: "缠绕的藤", detail: "藤会绕着东西往上爬。凑近看，上面有一层短毛，还有朝下长的长硬毛。", cite: ["foc-yyqn"] },
      ],
    },
    {
      type: "steps",
      title: "从爬藤到结果",
      steps: [
        { photo: "step-climb", label: "爬藤", text: "它是一年生的缠绕草本，藤能长到 2～3 米，绕着篱笆、铁网往上爬。", caption: "爬满铁网的藤", shoot: "夏天拍一整片爬在栏杆或篱笆上的藤，看出它爬了多高" },
        { photo: "step-bud", label: "花苞", text: "叶腋里伸出花序，一次开 1～5 朵花。开花前，花梗是弯下去的。", caption: "心形叶子间的花苞", shoot: "清早拍一个还没打开的花苞，连着下面的花梗" },
        { photo: "step-bloom", label: "开花", text: "花冠张开像漏斗，4～6 厘米长。紫红、红或蓝紫色，中间渐渐变白。", caption: "一朵白心的紫红花", shoot: "同一天上午再拍那朵花开着的样子，从正面拍出白色的花心" },
        { photo: "capsule", label: "结果", text: "花谢以后，花梗又弯下去，结出一个圆圆的小果子，里面分成 3 个小室。", caption: "萼片托着的小圆果", shoot: "秋天回来找花谢掉的地方，拍下萼片托着的果子" },
      ],
      cite: ["foc-yyqn"],
    },
    {
      type: "magnifier",
      title: "凑近看一个小果子",
      shot: { photo: "capsule", caption: "萼片托着的小圆果", shoot: "秋天找一个还没裂开的果子，从侧面拍，萼片和上面的毛都要清楚" },
      text: "果子圆圆的，直径只有 9～10 毫米。下面托着 5 片萼片，萼片下半截长着张开的毛。果子熟了会裂成 3 瓣，种子是黑色或草黄色的，有三条棱。",
      zoom: 2.5,
      start: [0.7, 0.57],
      cite: ["foc-yyqn"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 8～10 月拍到它开花最多。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "都叫牵牛花，别认错",
      quiz: true,
      items: [
        {
          name: "牵牛", scientific: "Ipomoea nil",
          shot: { photo: "look-qian-niu", caption: "牵牛" },
          tells: ["萼片细长，可达 2.5 厘米，顶上拖着一条细细的尖", "花多是浅蓝到亮蓝色，开久了会变粉", "花梗很短，不到 1 厘米"],
        },
        {
          name: "圆叶牵牛", scientific: "Ipomoea purpurea", self: true,
          shot: { photo: "look-yuan-ye", caption: "圆叶牵牛" },
          tells: ["萼片短一些，1 厘米多，外面 3 片是长圆形", "花梗 1 厘米多，开花前后会弯下去"],
        },
        {
          name: "打碗花", scientific: "Calystegia hederacea",
          shot: { photo: "look-da-wan-hua", caption: "打碗花" },
          tells: ["全身光溜溜的，没有毛", "叶子像箭头，基部两边各伸出尖角", "花浅粉色，只有 2～3.5 厘米"],
        },
      ],
      cite: ["foc-qn", "foc-yyqn", "foc-dwh"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它的种子能吃吗？", a: "不能！它的种子是一味中药，叫“牵牛子”，资料上写着“有毒”。看看就好，别放进嘴里。", cite: ["sioc-qnz"] },
        { q: "它一直长在中国吗？", a: "不是哦。它的老家在美洲。人们把它种到各地，它又从花园里跑出来，长到了路边和篱笆上。", cite: ["foc-yyqn"] },
        { q: "学名里的 purpurea 是什么意思？", a: "意思是“紫色的”，说的就是它紫色的花。", cite: ["wiki-zh"] },
        { q: "它的花色为什么会不一样？", a: "科学家研究它的花色发现：几乎每一种花色的变化，都是因为一小段会“跳”的 DNA，跳进了管颜色的基因里。", cite: ["pnas-clegg"] },
        { q: "虫子喜欢白色的花吗？", a: "白花很少的时候，来传粉的虫子会少去白花，更常去有颜色的花。", cite: ["pnas-clegg"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花。种子有毒，不剥、不放进嘴里；路边的植物可能打过药。",
  nextTime: "它的藤绕着栏杆往上爬，是朝哪个方向转圈的？下次凑近看看。",
  sources: [
    { id: "foc-yyqn", title: "Ipomoea purpurea 圆叶牵牛", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=210000743" },
    { id: "foc-qn", title: "Ipomoea nil 牵牛", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=210000742" },
    { id: "foc-dwh", title: "Calystegia hederacea 打碗花", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200018796" },
    { id: "sioc-qnz", title: "牵牛子", by: "中国科学院上海有机化学研究所", url: "https://sioc.cas.cn/science/kpzy/qtzy/tryw/202401/t20240105_6951418.html" },
    { id: "pnas-clegg", title: "Flower color variation: A model for the experimental study of evolution", by: "Clegg & Durbin, PNAS 2000", url: "https://doi.org/10.1073/pnas.97.13.7016" },
    { id: "wiki-zh", title: "圆叶牵牛", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%9C%86%E5%8F%B6%E7%89%B5%E7%89%9B" },
  ],
  by: ["kid", "dad"],
};

export default entry;
