import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "cang-er",
  name: "苍耳",
  scientific: "Xanthium strumarium",
  kind: "plant",
  // 荒地还有意大利苍耳等近缘种：拍清总苞果大小、顶上两根喙的弯度再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "菊目", "菊科", "苍耳属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "荒地边结满刺球的苍耳",
    shoot: "8～10 月在路边荒地拍一整棵结果实的苍耳：粗糙的大叶子和一串串刺球都在画面里",
  },
  hello: "椭圆形的小刺球长满弯钩，衣角一擦过就跟着去旅行。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "leaf-bur",
        caption: "苍耳粗糙的叶片和叶腋里的刺球",
        shoot: "拍一根带叶和果实的枝条：左边摊开三角形大叶片，右边露出几颗带钩刺的总苞果",
      },
      points: [
        {
          x: 0.3,
          y: 0.48,
          label: "三角形粗糙大叶",
          detail: "茎中部的叶子呈卵状三角形，长 9～25 厘米，边上有不规则粗齿，两面摸起来都糙糙的。",
          cite: ["foc-ce"],
        },
        {
          x: 0.48,
          y: 0.68,
          label: "不带翼的长叶柄",
          detail: "叶柄长 3.5～10 厘米，常带紫褐色；叶腋附近没有细长硬刺。",
          cite: ["foc-ce"],
        },
        {
          x: 0.68,
          y: 0.56,
          label: "椭圆形小刺球",
          detail: "刺球其实是包住果实的木质总苞，长 1～1.8 厘米，浑身长满带弯钩的硬刺。",
          cite: ["foc-ce", "wiki-xanthium"],
        },
        {
          x: 0.72,
          y: 0.36,
          label: "顶上两根尖喙",
          detail: "每个刺球顶端都有 2 根尖尖的喙，像一对小犄角，里面并排藏着 2 颗瘦果。",
          cite: ["foc-ce", "wiki-en"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看刺尖上的小弯钩",
      shot: {
        photo: "hook-macro",
        caption: "总苞刺尖端弯成一个个小钩子",
        shoot: "微距凑近拍一颗苍耳刺球，让一根根刺尖端回弯的小钩子清晰可见",
      },
      text: "放大看，每根硬刺的尖端都弯成一个小钩子！动物毛发或毛衣纤维一擦过就会被勾住，把刺球带到很远的地方。",
      zoom: 2.8,
      start: [0.5, 0.48],
      cite: ["wiki-en", "wiki-xanthium"],
    },
    {
      type: "steps",
      title: "刺球从青绿到搭便车",
      steps: [
        {
          photo: "step-green",
          label: "青绿刺球",
          text: "7～8 月开花后，叶腋里的雌花序外面长出青绿色的软刺总苞，把两朵雌花严严实实包在里面。",
          caption: "茎上成串的青绿色嫩刺球",
          shoot: "8～9 月拍叶腋里刚长出来、还是青绿色的苍耳刺球",
        },
        {
          photo: "step-brown",
          label: "变硬出发",
          text: "9～10 月成熟变干后，刺球变成黄褐色，钩刺又硬又有弹性，挂上动物皮毛甚至顺着水流就能出发。",
          caption: "成熟变褐、钩刺坚硬的苍耳总苞果",
          shoot: "10 月以后拍变干变褐的成熟苍耳刺球",
        },
      ],
      cite: ["foc-ce", "wiki-en"],
    },
    {
      type: "lookalike",
      title: "会粘衣服的刺球，别认错",
      quiz: true,
      items: [
        {
          name: "牛蒡",
          scientific: "Arctium lappa",
          shot: { photo: "look-nb", caption: "开紫红花、圆球形的牛蒡" },
          tells: [
            "头状花序顶上开一簇紫红色管状小花",
            "刺球更圆，直径 1.5～2 厘米，钩刺是细密的总苞片，里面有许多颗瘦果",
            "1941 年启发瑞士工程师发明魔术贴的正是牛蒡刺球",
          ],
        },
        {
          name: "苍耳",
          scientific: "Xanthium strumarium",
          self: true,
          shot: { photo: "look-ce", caption: "椭圆形带双喙的苍耳" },
          tells: [
            "花很小、绿白色，不像牛蒡那样开紫红花",
            "刺球椭圆形，顶端有 2 根粗尖喙，里面只藏着 2 颗瘦果",
            "同样靠刺尖弯钩挂在皮毛和衣服上传播",
          ],
        },
      ],
      cite: ["foc-ce", "foc-nb", "wiki-velcro"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "苍耳 7～8 月开花，9～10 月结果；在中国，大家 8～10 月拍到它最多，秋天郊游最容易在裤脚上发现它。我们是哪个月遇见它的？",
      cite: ["foc-ce"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "一颗刺球里藏着几颗种子？",
          a: "2 颗，而且一大一小！大的一颗没有休眠期，第二年春天先发芽；小的一颗处于休眠状态，常等到更晚或第三年才发芽，留作后备。",
          cite: ["wiki-en", "cornell-ce"],
        },
        {
          q: "鞋上的魔术贴真是学刺球做的？",
          a: "1941 年，瑞士工程师乔治·德·梅斯特拉尔从狗毛上摘下牛蒡刺球，在显微镜下看到满身小弯钩，受启发发明了魔术贴；苍耳用的也是同样的钩刺原理。",
          cite: ["wiki-velcro", "wiki-zh"],
        },
        {
          q: "它和向日葵、蒲公英是亲戚？",
          a: "对，它们都是菊科！不过蒲公英靠绒毛小伞乘风飞，苍耳的总苞却变成硬刺球，改搭动物的「便车」，掉进河里还能浮在水面漂走。",
          cite: ["wiki-en", "wiki-xanthium"],
        },
        {
          q: "古人为什么叫它「羊负来」？",
          a: "因为放羊经过草丛时，苍耳刺球常常挂在羊毛上被羊背回家，所以古人给它起了「羊负来」「羊带来」这样有画面的别名。",
          cite: ["wiki-zh"],
        },
      ],
    },
  ],
  care: "千万别拿刺球往小朋友头发和眼睛扔，缠住很难摘还易划伤！全株尤其是果实和幼苗有毒，绝不能放进嘴里。",
  nextTime: "下次在裤脚上发现苍耳，拿放大镜数一数：刺球最顶端是不是正好有两根尖尖的小犄角？",
  sources: [
    {
      id: "foc-ce",
      title: "Xanthium strumarium 苍耳",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=220014370",
    },
    {
      id: "foc-nb",
      title: "Arctium lappa 牛蒡",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200023153",
    },
    {
      id: "wiki-en",
      title: "Xanthium strumarium",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Xanthium_strumarium",
    },
    {
      id: "wiki-xanthium",
      title: "Xanthium",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Xanthium",
    },
    {
      id: "wiki-zh",
      title: "苍耳",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E8%8B%8D%E8%80%B3",
    },
    {
      id: "wiki-velcro",
      title: "Velcro",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Velcro",
    },
    {
      id: "cornell-ce",
      title: "Common cocklebur (Xanthium strumarium)",
      by: "Cornell CALS Weed Science",
      url: "https://cals.cornell.edu/weed-science/weed-profiles/common-cocklebur",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
