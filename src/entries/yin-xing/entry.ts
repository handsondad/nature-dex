import type { Entry } from "../../entry/types.ts";

// 示例篇：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yin-xing",
  name: "银杏",
  scientific: "Ginkgo biloba",
  kind: "plant",
  // 扇形、叶脉一路二分的叶子没有别的树有，看到叶子就能确认
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "银杏纲", "银杏目", "银杏科", "银杏属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵银杏", shoot: "我们遇见的那一棵：整棵树和树下的黄叶都拍进去" },
  hello: "满树的小扇子，到了秋天会一起变成亮黄色。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "short-shoot", caption: "老枝上的一簇叶子", shoot: "老枝上一个短枝连同它长出的一簇叶子，叶柄和叶子顶上的缺口都看得清" },
      points: [
        { x: 0.55, y: 0.3, label: "扇子形的叶子", detail: "叶子像一把打开的小扇子，叶边光光的，没有锯齿。", cite: ["foc-ginkgoaceae"] },
        { x: 0.5, y: 0.12, label: "顶上一道缺口", detail: "有的叶子顶上有一道深深的缺口，把叶子分成两半；有的只凹进去一点点。", cite: ["foc-yx"] },
        { x: 0.4, y: 0.6, label: "长长的叶柄", detail: "叶柄常有 5～8 厘米，差不多和大人的手指一样长。", cite: ["foc-yx"] },
        { x: 0.3, y: 0.85, label: "一簇一簇长出来", detail: "老枝上有一个个短短的小枝，叶子从这里一簇一簇长出来。", cite: ["foc-ginkgoaceae"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看叶脉",
      shot: { photo: "leaf-veins", caption: "对着亮处看一片叶子", shoot: "捡一片落叶对着天空逆光拍，叶脉占满画面" },
      text: "叶脉从叶柄出发，一根分成两根，两根再分成四根，细细密密地铺满整片叶子。",
      start: [0.5, 0.45],
      cite: ["foc-ginkgoaceae"],
    },
    {
      type: "compare",
      title: "同一棵树，夏天和秋天",
      before: { photo: "same-green", label: "夏天", caption: "满树浅绿", shoot: "选一棵好找的银杏，记住站的位置，夏天拍一张" },
      after: { photo: "same-yellow", label: "秋天", caption: "满树金黄", shoot: "秋天回到同一个位置、同一个角度，再拍一张" },
      text: "夏天的叶子是浅绿色，到了秋天变成亮黄色。拍的时候记下日期，看看它是哪天开始变黄的。",
      cite: ["foc-yx"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 5、6 月和 10 月拍到它最多。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "银杏有多老？", a: "1 亿 7 千万年前的岩石里，就有和今天的银杏很像的化石。它的亲戚都灭绝了，只剩下它这一种。", cite: ["wiki-en", "foc-ginkgoaceae"] },
        { q: "为什么有的银杏树下臭臭的？", a: "那是成熟的种子掉在地上。种子黄色的软皮里有丁酸，闻起来像变坏的黄油。", cite: ["foc-yx", "wiki-en"] },
        { q: "为什么有的银杏树下没有种子？", a: "银杏分雄树和雌树。只有雌树会结种子，雄树只长花粉。", cite: ["foc-ginkgoaceae", "wiki-en"] },
        { q: "白果是什么？", a: "就是银杏的种子。剥掉黄色的软皮，里面是白色的硬壳，壳上有两三条棱。", cite: ["wiki-zh", "foc-yx"] },
        { q: "银杏的精子会游泳？", a: "会！它的精子能自己游动，和蕨类、苔藓一样。1896 年，日本植物学家平濑作五郎第一次看到它们。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "地上的种子不捡、不吃：黄色软皮会让有的人皮肤过敏，种子里也有毒素。落叶可以捡起来看。",
  nextTime: "叶子是一夜之间全变黄，还是一片一片慢慢变黄？下次去同一棵树看看。",
  sources: [
    { id: "foc-yx", title: "Ginkgo biloba 银杏", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200005235" },
    { id: "foc-ginkgoaceae", title: "Ginkgoaceae 银杏科", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10370" },
    { id: "wiki-en", title: "Ginkgo biloba", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ginkgo_biloba" },
    { id: "wiki-zh", title: "银杏", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E9%93%B6%E6%9D%8F" },
  ],
  by: ["kid", "dad"],
};

export default entry;
