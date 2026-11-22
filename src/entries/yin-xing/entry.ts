import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yin-xing",
  name: "银杏",
  pinyin: "yín xìng",
  scientific: "Ginkgo biloba",
  kind: "plant",
  // 扇形、叶脉像扇骨一样散开的叶子没有别的树有，看到叶子就能确认
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "银杏纲", "银杏目", "银杏科", "银杏属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "山坡上一棵满树金黄的银杏", shoot: "我们遇见的那一棵：整棵树和树下的黄叶都拍进去" },
  hello: "满树的小扇子，到了秋天会一起变成金黄色。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "short-shoot", caption: "秋天，雌树枝上的黄叶和种子", shoot: "老枝上一个短枝连同它长出的一簇叶子，叶柄看得清" },
      points: [
        { x: 0.73, y: 0.14, label: "扇子形的叶子", detail: "叶子像一把打开的小扇子，上边有浅浅的波浪缺口，有时中间裂得很深。", cite: ["iplant-yx", "gdb-yx"] },
        { x: 0.2, y: 0.61, label: "细长的叶柄", detail: "每片叶子都连着一根细长的叶柄，扇面就挂在柄的一头。", cite: ["iplant-yx"] },
        { x: 0.33, y: 0.51, label: "短枝上一簇叶", detail: "老枝上有一个个短短的小疙瘩，叫短枝，3～8 片叶子从这里一簇长出来。", cite: ["iplant-yx", "gdb-yx"] },
        { x: 0.5, y: 0.51, label: "挂着的种子", detail: "只有雌树结种子。种子挂在长柄上，9～10 月熟，黄色，外面有一层白粉。", cite: ["iplant-yx", "gdb-yx"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看叶脉",
      shot: { photo: "fallen-leaves", caption: "几片秋天的落叶，对着亮处拍", shoot: "捡一片落叶对着天空逆光拍，叶脉占满画面" },
      text: "叶脉从叶柄那里出发，像扇骨一样一根根散开，一直伸到叶边。别的树的叶子都没有这样的叶脉。",
      zoom: 3,
      start: [0.36, 0.55],
      cite: ["gdb-yx"],
    },
    {
      type: "compare",
      title: "春天的雄树和雌树",
      before: { photo: "male-cones", label: "雄树", caption: "短枝上垂下一串串雄球花", shoot: "3～4 月在雄树的短枝上找一串串的雄球花" },
      after: { photo: "step-ovule", label: "雌树", caption: "叶丛里伸出顶着小胚珠的细柄", shoot: "3～4 月在雌树的叶丛里找顶着小绿珠子的细柄" },
      text: "银杏分雄树和雌树。春天，雄树的短枝上垂下一串串雄球花，风把花粉吹走；雌树的叶丛里伸出细柄，顶上是小小的胚珠，等着接花粉。",
      cite: ["iplant-yx", "gdb-yx"],
    },
    {
      type: "steps",
      title: "从种子到小苗",
      steps: [
        { photo: "step-green-seed", label: "青种子", text: "接到花粉的胚珠慢慢长成种子，夏天还是绿色的，挂在长柄上。", caption: "夏天枝上的青种子", shoot: "夏天在雌树低枝上找青绿色的种子" },
        { photo: "step-seed", label: "黄种子", text: "当年 9～10 月种子就熟了，变成黄色或橙黄色，外面有一层白粉。", caption: "一根短枝上挂着两颗熟了的种子", shoot: "秋天近拍枝上黄色的种子，别用手碰" },
        { photo: "step-sprout", label: "发芽", text: "种子里白色的硬壳裂开一道缝，先钻出一根小根。", caption: "硬壳裂开，钻出一根小根" },
        { photo: "step-seedling", label: "小苗", text: "小根往下扎，茎往上长，顶上展开几片小小的扇子叶。", caption: "带着种子壳的银杏小苗" },
      ],
      cite: ["iplant-yx", "gdb-yx"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 10 月拍到它最多，那时满树金黄；5、6 月也不少，1 月一张也没有。3 月底到 4 月中去看雄球花和胚珠，9～10 月去看种子。我们是哪个月遇见它的？",
      cite: ["iplant-yx"],
    },
    {
      type: "lookalike",
      title: "扇子形的叶子，哪个是银杏？",
      quiz: true,
      items: [
        {
          name: "铁线蕨", scientific: "Adiantum capillus-veneris",
          shot: { photo: "look-tie-xian-jue", caption: "石壁上的铁线蕨，小叶一片片排在黑柄两边" },
          tells: ["矮矮的蕨，只有 10～30 厘米高", "叶柄又细又黑，像铁丝", "小叶也是扇子形，所以又叫「银杏蕨」"],
        },
        {
          name: "银杏", scientific: "Ginkgo biloba", self: true,
          shot: { photo: "green-leaves", caption: "夏天一枝浅绿色的扇子叶" },
          tells: ["是大树，叶子一簇簇长在短枝上", "一片叶子就是一把扇子，叶脉像扇骨散开", "秋天整棵树变成金黄色"],
        },
        {
          name: "鹅掌楸", scientific: "Liriodendron chinense",
          shot: { photo: "look-e-zhang-qiu", caption: "像一件小马褂的鹅掌楸叶子" },
          tells: ["叶子像一件马褂，两边各伸出一个大裂片", "叶尖不是圆的，有两个浅浅的裂口", "5 月开杯子形的花"],
        },
      ],
      cite: ["iplant-txj", "iplant-yx", "iplant-ezq"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "银杏有多老？", a: "银杏这一属是种子植物里最古老的，约 2 亿年前的侏罗纪早期就有了。", cite: ["gdb-yx"] },
        { q: "皇帝封的「帝王树」是什么树？", a: "潭柘寺一棵唐代银杏，约 1300 岁，乾隆封它「帝王树」。旁边配了一棵「配王树」，可两棵都是雄树——配错了！", cite: ["bj-gs"] },
        { q: "为什么有的银杏树下臭臭的？", a: "那是雌树熟透掉下的种子，黄色外皮变软后会发出臭味，所以人们不太爱种雌树。", cite: ["iplant-yx", "gdb-yx"] },
        { q: "「银杏」这个名字怎么来的？", a: "种子外面有层白粉，像银白色的杏子，就叫「银杏」。学名 biloba 是「两裂」，说的是叶子常分成两半。", cite: ["gdb-yx", "iplant-yx"] },
        { q: "银杏的精子会游泳？", a: "会！种子植物里，只有银杏和苏铁的精子能自己游动。", cite: ["gdb-yx"] },
        { q: "野生的银杏多吗？", a: "很少。它是国家一级保护植物，野生的被评为极危。街上的银杏都是人种的，它不怕空气污染，常被种成行道树。", cite: ["iplant-yx", "gdb-yx"] },
      ],
    },
  ],
  care: "地上的种子不捡、不吃：吃多了会中毒，外皮的汁会让皮肤过敏。落叶可以捡起来看。",
  nextTime: "去银杏树下找一找：地上有种子的是雌树。再看看叶子是哪天开始变黄的。",
  sources: [
    { id: "iplant-yx", title: "银杏 Ginkgo biloba", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Ginkgo%20biloba" },
    { id: "gdb-yx", title: "Ginkgo biloba (ginkgo)", by: "The Gymnosperm Database", url: "https://www.conifers.org/gi/" },
    { id: "bj-gs", title: "它们，站成千年风景", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/sh/202112/t20211214_2560949.shtml" },
    { id: "iplant-txj", title: "铁线蕨 Adiantum capillus-veneris", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Adiantum%20capillus-veneris" },
    { id: "iplant-ezq", title: "鹅掌楸 Liriodendron chinense", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Liriodendron%20chinense" },
  ],
  by: ["kid", "dad"],
};

export default entry;