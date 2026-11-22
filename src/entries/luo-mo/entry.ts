import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// Flora of China 里它叫 Metaplexis japonica（萝藦科）；GBIF 现在接受的名字是 Cynanchum rostellatum（夹竹桃科）。
const entry: Entry = {
  id: "luo-mo",
  name: "萝藦",
  pinyin: "luó mó",
  scientific: "Cynanchum rostellatum",
  kind: "plant",
  // 心形叶对生、基部两只圆耳朵、纺锤形的果，对上就能确认
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "龙胆目", "夹竹桃科", "鹅绒藤属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛萝藦", shoot: "我们遇见的那一丛：缠在灌木或栏杆上的藤，心形叶子和花（7～8 月）或挂着的果子（秋天）都拍进去" },
  hello: "藤上挂着纺锤形的果子，里面的种子都顶着一撮白色丝毛。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "vine-flower", caption: "一段开花的藤", shoot: "7～8 月拍一段开花的藤：一对叶子连着叶柄、叶子基部的缺口和一串花都在画面里" },
      points: [
        { x: 0.3, y: 0.45, label: "叶子一对一对", detail: "心形的叶子两两相对长在藤上。叶背颜色比正面浅，是粉绿色的。", cite: ["foc-lm", "foc-metaplexis"] },
        { x: 0.45, y: 0.33, label: "叶基两只圆耳朵", detail: "叶子基部有两只圆圆的“耳朵”，中间的缺口又深又窄，耳朵有时叠在一起。", cite: ["foc-lm"] },
        { x: 0.57, y: 0.27, label: "毛茸茸的花", detail: "花白色，常带淡紫色条纹；花瓣尖往后翻，里面长满了毛。", cite: ["foc-lm"] },
        { x: 0.65, y: 0.2, label: "尖尖的花苞", detail: "还没开的花苞像一顶圆锥形的小尖帽，花瓣在里面朝左拧着叠好。", cite: ["foc-lm", "foc-metaplexis"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花瓣",
      shot: { photo: "flower-hairy", caption: "一串萝藦花", shoot: "找一串刚开的花，从侧面靠近拍，花瓣里面的毛要拍清楚" },
      text: "花瓣里面长满了白色的长毛，尖上往后卷。旁边还挤着一颗颗尖尖的花苞。你能找到花上爬着的小蚂蚁吗？",
      zoom: 2.5,
      start: [0.62, 0.42],
      cite: ["foc-lm"],
    },
    {
      type: "steps",
      title: "从一串花到白丝毛",
      steps: [
        { photo: "step-flower", label: "开花", text: "七八月，叶子旁边长出一串花，一串常有 13～20 朵。", caption: "一串萝藦花", shoot: "7～8 月，一整串开着的花，靠近拍" },
        { photo: "step-fruit", label: "结果", text: "花谢以后结出纺锤形的大果子，有 8～9 厘米长、约 2 厘米粗。", caption: "秋天挂在枝上的果子", shoot: "挂在藤上的果子，旁边放一片叶子比大小" },
        { photo: "step-open", label: "裂开", text: "果子熟了，沿着一条缝裂开，露出里面一片片叠着的种子。", caption: "裂开的果子", shoot: "秋天裂开的果子，拍清楚裂缝和里面露出的种子（不用手掰）" },
        { photo: "step-seed", label: "白丝毛", text: "种子扁扁的，边上有一圈薄膜，顶着一撮约 1.5 厘米长的白色丝毛。", caption: "带白毛的种子", shoot: "从裂开的果子里露出来的种子和白毛，微距拍" },
      ],
      cite: ["foc-lm", "foc-asclepiadaceae"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "萝藦七八月开花，在中国大家 8 月拍到它开花最多。果子从秋天挂到冬天，裂开以后，有人到第二年春天还能拍到。我们是哪个月遇见它的？",
      cite: ["foc-lm"],
    },
    {
      type: "lookalike",
      title: "哪个是萝藦？",
      quiz: true,
      items: [
        {
          name: "鹅绒藤", scientific: "Cynanchum chinense",
          shot: { photo: "look-ert", caption: "鹅绒藤" },
          tells: ["叶子像宽宽的三角形心", "花白色，花瓣里面光光的，没有毛", "果子细长，只有 5～8 毫米粗"],
        },
        {
          name: "萝藦", scientific: "Cynanchum rostellatum", self: true,
          shot: { photo: "look-luo-mo", caption: "萝藦" },
          tells: ["叶子心形，基部两只圆耳朵挨得很近", "花瓣里面长满了毛", "果子纺锤形，约 2 厘米粗"],
        },
        {
          name: "杠柳", scientific: "Periploca sepium",
          shot: { photo: "look-gl", caption: "杠柳" },
          tells: ["是灌木，叶子窄长，不是心形", "花多是紫色的，花瓣往后翻", "两个细长的果子，尖上常连在一起"],
        },
      ],
      cite: ["foc-ert", "foc-lm", "foc-gl"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "萝藦能爬多高？", a: "它是一种藤，最长能长到 8 米，比两层楼还高。", cite: ["foc-lm"] },
        { q: "萝藦的花苞为什么尖尖的？", a: "花瓣在花苞里朝左拧着叠在一起，像一顶拧紧的圆锥小帽。开花时再一片片松开。", cite: ["foc-metaplexis", "foc-lm"] },
        { q: "萝藦和夹竹桃是亲戚吗？", a: "是的。老书把它放在萝藦科；科学家读了它的 DNA，现在把它归进夹竹桃科的鹅绒藤属，和白首乌是近亲。", cite: ["foc-asclepiadaceae", "gbif-lm", "mdna-2022"] },
        { q: "种子上的白丝毛能做什么？", a: "科学家把萝藦种子的白丝毛烧成炭，得到一根根空心的小炭管，拿来试着做电池的材料。", cite: ["langmuir-2025"] },
        { q: "为什么不能随便尝萝藦？", a: "萝藦家族的植物大多带白色乳汁，全身常常有毒，种子和乳汁尤其要小心。", cite: ["foc-asclepiadaceae"] },
      ],
    },
  ],
  care: "萝藦家族常带白色乳汁，种子和乳汁常有毒：不折、不摘、不放进嘴里，摸过要洗手。",
  nextTime: "秋天去看看裂开的果子：风一吹，带白毛的种子会飘起来吗？能飘多远？",
  sources: [
    { id: "foc-lm", title: "Metaplexis japonica 萝藦", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200018685" },
    { id: "foc-metaplexis", title: "Metaplexis 萝藦属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=120385" },
    { id: "foc-asclepiadaceae", title: "Asclepiadaceae 萝藦科", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10066" },
    { id: "foc-ert", title: "Cynanchum chinense 鹅绒藤", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200018544" },
    { id: "foc-gl", title: "Periploca sepium 杠柳", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200018693" },
    { id: "gbif-lm", title: "Cynanchum rostellatum", by: "GBIF", url: "https://www.gbif.org/species/9500699" },
    { id: "mdna-2022", title: "Complete sequence of Cynanchum rostellatum (Apocynaceae: Asclepiadoideae) chloroplast genome and its phylogenetic analysis", by: "Mitochondrial DNA Part B, 2022", url: "https://doi.org/10.1080/23802359.2022.2102444" },
    { id: "langmuir-2025", title: "Hard Carbon Microtubes Made from Metaplexis japonica Seed Hair Fibers as High-Performance Anode Material for Sodium-Ion Batteries", by: "Langmuir, 2025", url: "https://doi.org/10.1021/acs.langmuir.5c03219" },
  ],
  by: ["kid", "dad"],
};

export default entry;
