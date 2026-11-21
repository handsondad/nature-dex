import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ji-cai",
  name: "荠菜",
  scientific: "Capsella bursa-pastoris",
  kind: "plant",
  // 倒三角形、顶上凹进去的扁果子很好认
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "十字花目", "十字花科", "荠属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵荠菜", shoot: "早春，我们遇见的那一棵：贴地的叶子、白色小花和三角形的小果子都拍进去" },
  hello: "小白花下面挂着一个个心形的小扁果，像牧羊人的小钱包。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "plant-side", caption: "墙根下一棵开花结果的荠菜", shoot: "春天从侧面拍一整棵：花茎、顶上的白花和下面的小果子都在画面里" },
      points: [
        { x: 0.65, y: 0.22, label: "4 片小白花瓣", detail: "花挤在茎顶上，很小，每片白色花瓣只有 2～4 毫米长。", cite: ["foc-jc", "frps-jc"] },
        { x: 0.66, y: 0.435, label: "倒三角形的扁果子", detail: "果子扁扁的，像倒过来的三角形或心形，顶上凹进去一点，5～8 毫米长。", cite: ["frps-jc", "foc-jc"] },
        { x: 0.565, y: 0.52, label: "越拉越长的花茎", detail: "上面一边开花，下面一边结果，花茎越长越长，结果时能有 20 厘米。", cite: ["frps-jc", "fona-capsella"] },
        { x: 0.527, y: 0.571, label: "茎上的叶子很小", detail: "茎上的叶子又少又窄，没有叶柄，基部像箭头一样抱住茎。", cite: ["foc-jc", "frps-jc"] },
      ],
    },
    {
      type: "steps",
      title: "从一圈叶子到挂满小钱包",
      steps: [
        { photo: "step-rosette", caption: "贴着地面的一圈叶子", shoot: "冬天或早春，从正上方拍贴地的一圈叶子", label: "莲座叶", text: "先长出一圈贴地的叶子，像一朵绿色的莲花座，边上常裂成一片一片。仔细看，正中间已经冒出一小团花蕾。" },
        { photo: "whole-plant", caption: "上面花蕾，中间开花，下面结果", shoot: "春天凑近拍花茎顶上：花蕾、白花和小果子都在一张里", label: "开花", text: "花茎从中间长出来。顶上是一团绿色花蕾，往下是开着的小白花，再往下花瓣掉了，已经长出小果子。" },
        { photo: "pod-macro", caption: "细细的花茎上挂着一串小果子", shoot: "春末再去拍同一棵：花茎拉长了，挂着一串小果子", label: "结果", text: "花茎一直往上长，下面的果子越挂越多。果子熟了裂成两半，撒出 1 毫米左右的小种子。" },
      ],
      cite: ["frps-jc", "foc-jc", "fona-capsella"],
    },
    {
      type: "magnifier",
      title: "凑近看小钱包",
      shot: { photo: "whole-plant", caption: "花茎顶上的花和果子", shoot: "微距拍花茎顶上：花蕾、小白花和三角形的小果子都看得清" },
      text: "开过花的地方，长出一个个扁扁的小果子（短角果），像一颗倒过来的心，顶上凹进去一点。里面分成两格，种子排成 2 行。",
      zoom: 3,
      start: [0.385, 0.84],
      cite: ["frps-jc", "foc-jc"],
    },
    {
      type: "lookalike",
      title: "路边的白花小草，看果子就知道",
      quiz: true,
      items: [
        {
          name: "菥蓂",
          scientific: "Thlaspi arvense",
          shot: { photo: "look-xm", caption: "挂满圆果子的菥蓂" },
          tells: ["果子圆圆的，有 1～2 厘米，四周一圈宽宽的“翅膀”", "顶上的缺口很深", "揉碎了有一股难闻的味道"],
        },
        {
          name: "荠菜",
          scientific: "Capsella bursa-pastoris",
          self: true,
          shot: { photo: "look-jc", caption: "荠菜" },
          tells: ["果子是倒三角形，像一颗倒过来的心", "4 片白色小花瓣", "果子不到 1 厘米，没有宽翅膀"],
        },
        {
          name: "独行菜",
          scientific: "Lepidium apetalum",
          shot: { photo: "look-dxc", caption: "一串小圆果子的独行菜" },
          tells: ["果子更小，只有 2～3 毫米，椭圆形", "花瓣没有，或者小得几乎看不见", "只有 2 根雄蕊"],
        },
      ],
      cite: ["foc-xm", "foc-jc", "foc-dxc"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 3、4 月拍到它开花最多。植物志上说它 4～6 月开花结果，秋冬也偶尔有人拍到。我们是哪个月遇见它的？",
      cite: ["frps-jc"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么说它像牧羊人的钱包？", a: "英文叫它“牧羊人的钱包”，因为小果子像中世纪人挂在腰上的小钱袋；属名 Capsella 来自拉丁文“小盒子”。", cite: ["fona-capsella"] },
        { q: "荠菜多不多？", a: "多极了！有人统计，它是地球上第二常见的杂草，只排在萹蓄后面。中国几乎到处都有。", cite: ["foc-jc", "fona-jc", "frps-jc"] },
        { q: "荠菜的种子会“抓虫子”？", a: "科学家发现，种子泡湿后，土里的小线虫一小时内就被粘在上面，很多三天后就死了；有线虫时，种子发芽更好。", cite: ["roberts-2018"] },
        { q: "古人也认识荠菜吗？", a: "《诗经》里就有一句“谁谓荼苦，其甘如荠”：谁说苦菜苦？它甜得像荠菜一样。", cite: ["shijing-gufeng"] },
        { q: "人们吃荠菜吗？", a: "吃。它的茎叶能当蔬菜，种子里有两三成是油。可是路边的可能打过药，不能随便挖来吃。", cite: ["frps-jc", "foc-jc"] },
        { q: "“荠”字怎么读？", a: "读 jì，就是植物志上的正式名字；“荠菜”是大家的通称，广州人还叫它“菱角菜”。", cite: ["frps-jc"] },
      ],
    },
  ],
  care: "路边的荠菜可能打过药。挖不挖、能不能吃，让大人判断，自己不要放进嘴里。",
  nextTime: "数一数：一根花茎上挂着几个小钱包？最下面的和最上面的，哪个大？",
  sources: [
    { id: "foc-jc", title: "Capsella bursa-pastoris 荠", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200009292" },
    { id: "frps-jc", title: "荠 Capsella bursa-pastoris（中国植物志 第 33 卷）", by: "中国植物志 · 植物智", url: "https://www.iplant.cn/info/Capsella%20bursa-pastoris?t=z" },
    { id: "fona-capsella", title: "Capsella", by: "Flora of North America", url: "http://www.efloras.org/florataxon.aspx?flora_id=1&taxon_id=105575" },
    { id: "fona-jc", title: "Capsella bursa-pastoris", by: "Flora of North America", url: "http://www.efloras.org/florataxon.aspx?flora_id=1&taxon_id=200009292" },
    { id: "roberts-2018", title: "Evidence for facultative protocarnivory in Capsella bursa-pastoris seeds", by: "Scientific Reports, 2018", url: "https://doi.org/10.1038/s41598-018-28564-x" },
    { id: "shijing-gufeng", title: "詩經·邶風·谷風", by: "维基文库", url: "https://zh.wikisource.org/zh/%E8%A9%A9%E7%B6%93/%E8%B0%B7%E9%A2%A8_(%E9%82%B6%E9%A2%A8)" },
    { id: "foc-xm", title: "Thlaspi arvense 菥蓂", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=241000042" },
    { id: "foc-dxc", title: "Lepidium apetalum 独行菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200009576" },
  ],
  by: ["kid", "dad"],
};

export default entry;
