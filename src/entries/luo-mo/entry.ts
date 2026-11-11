import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// Flora of China 里它叫 Metaplexis japonica（萝藦科）；GBIF 现在接受的名字是 Cynanchum rostellatum（夹竹桃科）。
const entry: Entry = {
  id: "luo-mo",
  name: "萝藦",
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
      shot: { photo: "vine-flower", caption: "一段开花的藤", shoot: "7～8 月拍一段开花的藤：一对叶子连着叶柄、叶子基部的缺口和一串小白花都在画面里" },
      points: [
        { x: 0.3, y: 0.55, label: "叶子一对一对", detail: "心形的叶子两两相对长在藤上。叶背颜色比正面浅，是粉绿色的。", cite: ["foc-lm", "foc-metaplexis"] },
        { x: 0.3, y: 0.32, label: "叶基两只圆耳朵", detail: "叶子基部有两只圆圆的“耳朵”，中间的缺口又深又窄，耳朵有时叠在一起。", cite: ["foc-lm", "foc-metaplexis"] },
        { x: 0.68, y: 0.35, label: "毛茸茸的小白花", detail: "花是白色的，有时带紫色条纹；花瓣里面长满了毛。", cite: ["foc-lm"] },
        { x: 0.7, y: 0.22, label: "伸出来的长“嘴”", detail: "花心伸出一根细长的“嘴”（柱头），尖上分成两叉。", cite: ["foc-lm", "hkbu-lm"] },
      ],
    },
    {
      type: "steps",
      title: "从小白花到白丝毛",
      steps: [
        { photo: "step-flower", label: "开花", text: "七八月，叶子旁边长出一串小花，一串常有 13～20 朵。", caption: "一串小白花", shoot: "7～8 月，一整串开着的花，靠近拍" },
        { photo: "step-fruit", label: "结果", text: "花谢以后结出纺锤形的果子，8～9 厘米长，表面光溜溜的。", caption: "绿色的果子", shoot: "挂在藤上的绿色果子，旁边放一片叶子比大小" },
        { photo: "step-open", label: "裂开", text: "秋天，果子沿着一条缝裂开。", caption: "裂开的果子", shoot: "秋天裂开的果子，拍清楚裂缝和里面露出的白毛（不用手掰）" },
        { photo: "step-seed", label: "白丝毛", text: "里面是许多扁扁的种子，每颗都顶着一撮约 1.5 厘米长的白色丝毛。", caption: "带白毛的种子", shoot: "从裂开的果子里露出来的种子和白毛，微距拍" },
      ],
      cite: ["foc-lm", "foc-asclepiadaceae", "wiki-follicle"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 8 月拍到它开花最多。9 月以后直到第二年春天，也有人拍到它的果子。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么有人叫它“奶浆藤”？", a: "萝藦全身都有白色的乳汁，茎叶断开的地方会冒出白浆。它的别名里有好几个带“奶”和“浆”字。", cite: ["hkbu-lm", "wiki-zh"] },
        { q: "谁是“婆婆针线包”？", a: "就是萝藦！这是河北人对它的叫法。秋天看看它鼓鼓的果子，里面装满了带白色丝毛的种子。", cite: ["wiki-zh", "foc-lm"] },
        { q: "萝藦能爬多高？", a: "它是一种藤，最长能长到 8 米，比两层楼还高。", cite: ["foc-lm"] },
        { q: "萝藦和夹竹桃是亲戚吗？", a: "是的。现在它被分在夹竹桃科。老一些的书把它放在萝藦科，也写着有学者主张把萝藦科并进夹竹桃科。", cite: ["gbif-lm", "foc-asclepiadaceae"] },
      ],
    },
  ],
  care: "茎叶断开会流白色乳汁，不折、不摘；果子和种子不放进嘴里，摸过植物要洗手。",
  nextTime: "秋天去看看裂开的果子：风一吹，带白毛的种子会飘起来吗？能飘多远？",
  sources: [
    { id: "foc-lm", title: "Metaplexis japonica 萝藦", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200018685" },
    { id: "foc-metaplexis", title: "Metaplexis 萝藦属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=120385" },
    { id: "foc-asclepiadaceae", title: "Asclepiadaceae 萝藦科", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10066" },
    { id: "hkbu-lm", title: "蘿藦 Luomo", by: "香港浸会大学 药用植物图像数据库", url: "https://sys01.lib.hkbu.edu.hk/cmed/mpid/detail.php?herb_id=D00728" },
    { id: "gbif-lm", title: "Cynanchum rostellatum", by: "GBIF", url: "https://www.gbif.org/species/9500699" },
    { id: "wiki-follicle", title: "Follicle (fruit)", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Follicle_(fruit)" },
    { id: "wiki-zh", title: "萝藦", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E8%90%9D%E8%97%A6" },
  ],
  by: ["kid", "dad"],
};

export default entry;
