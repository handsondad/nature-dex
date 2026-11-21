import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 《中国植物志》用异名 Xanthium sibiricum，GBIF 接受名为 Xanthium strumarium。
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
    caption: "路边开花的一大丛苍耳",
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
        caption: "苍耳的大叶子、枝头的小白球和带刺的小球",
        shoot: "拍一根带叶和果实的枝条：左边摊开三角形大叶片，右边露出几颗带钩刺的刺球",
      },
      points: [
        {
          x: 0.33,
          y: 0.5,
          label: "三角形的糙叶子",
          detail: "叶子像三角形或心形，边上有不整齐的粗齿。两面都有短硬毛，摸起来糙糙的。",
          cite: ["foc-ce", "frps-ce"],
        },
        {
          x: 0.63,
          y: 0.34,
          label: "长长的叶柄",
          detail: "叶柄有 3～11 厘米长，上面没有翅。叶腋里没有硬刺，这点和刺苍耳不一样。",
          cite: ["foc-ce", "frps-ce"],
        },
        {
          x: 0.79,
          y: 0.57,
          label: "枝头的小白球",
          detail: "这是雄花，许多小花挤成一个小球，只有 4～6 毫米宽，花粉撒完就掉了。",
          cite: ["frps-ce", "cornell-ce"],
        },
        {
          x: 0.72,
          y: 0.66,
          label: "长软刺的小球",
          detail: "雌花藏在这个绿色小刺球里。种子熟了，刺球会变硬，长 1～1.8 厘米。",
          cite: ["foc-ce", "frps-ce"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看刺尖上的小弯钩",
      shot: {
        photo: "hook-macro",
        caption: "四颗熟透的苍耳刺球，左下角的线是 1 厘米",
        shoot: "微距凑近拍一颗干透的苍耳刺球，让刺尖的小钩子和顶上两根尖嘴都清楚",
      },
      text: "放大看，每根刺的尖端都弯成一个小钩子，碰到毛和线头就挂住。刺球顶上那两根更粗更长的，是它的两张「尖嘴」（喙）。",
      zoom: 2.6,
      start: [0.36, 0.17],
      cite: ["frps-ce", "foc-ce", "cornell-ce"],
    },
    {
      type: "steps",
      title: "一颗刺球的一年",
      steps: [
        {
          photo: "step-sprout",
          label: "发芽",
          text: "春末夏初，刺球里的一颗种子发芽，小苗常常顶着空刺球钻出地面。",
          caption: "顶着旧刺球钻出沙地的小苗",
          shoot: "5～6 月在去年有苍耳的地方找刚出土的小苗，看看它是不是从刺球里长出来的",
        },
        {
          photo: "step-flower",
          label: "开花",
          text: "夏天白天变短，它开始开花。枝头一团团小球是雄花，下面带软刺的小球里藏着雌花。",
          caption: "枝头的雄花小球和下面的青刺球",
          shoot: "7～8 月拍枝头一团团小白球（雄花）和下面带软刺的小绿球",
        },
        {
          photo: "step-green",
          label: "青刺球",
          text: "雌花结束后，绿色刺球越长越大，里面的种子慢慢变成熟。",
          caption: "茎上成串的青绿色刺球",
          shoot: "8～9 月拍叶腋里还是青绿色的苍耳刺球",
        },
        {
          photo: "step-brown",
          label: "变硬",
          text: "9～10 月，刺球变成褐色，又干又硬，弯钩随时准备挂住路过的动物。",
          caption: "熟透变褐、刺又硬又尖的刺球",
          shoot: "10 月以后拍变干变褐的成熟苍耳刺球",
        },
      ],
      cite: ["frps-ce", "cornell-ce", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "苍耳 7～8 月开花，9～10 月结果。在中国，大家 9 月拍到它最多，10 月其次，秋天出门最容易在裤脚上发现它。我们是哪个月遇见它的？",
      cite: ["frps-ce", "foc-ce"],
    },
    {
      type: "lookalike",
      title: "会粘衣服的「小刺头」，别认错",
      quiz: true,
      items: [
        {
          name: "牛蒡",
          scientific: "Arctium lappa",
          shot: { photo: "look-nb", caption: "开紫红花的牛蒡" },
          tells: ["顶上开一团紫红色的花", "刺球圆圆的，1.5～2 厘米宽，每根刺尖都带钩", "下面的叶子很大，能有 30 厘米长"],
        },
        {
          name: "苍耳",
          scientific: "Xanthium strumarium",
          self: true,
          shot: { photo: "look-ce", caption: "一串椭圆形的苍耳刺球" },
          tells: ["刺球椭圆形，顶上有 2 根尖嘴", "花是不起眼的绿白色小球", "叶子三角形，边上有粗齿"],
        },
        {
          name: "婆婆针",
          scientific: "Bidens bipinnata",
          shot: { photo: "look-ppz", caption: "散成星星的婆婆针种子" },
          tells: ["没有刺球，种子是一根根细长的「针」", "针尖上有 3～4 根带倒刺的芒", "叶子裂成好多细小的片"],
        },
      ],
      cite: ["foc-ce", "foc-nb", "foc-ppz", "cornell-ce"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "一颗刺球里藏着几颗种子？",
          a: "通常是 2 颗，一大一小！大的那颗第二年春天先发芽；小的常常睡得更久，到夏天甚至再过一年才醒来。",
          cite: ["cornell-ce", "frps-ce"],
        },
        {
          q: "一棵苍耳能结多少个刺球？",
          a: "长在空地上的大苍耳，一棵能结 500～5400 个刺球，每个刺球里一般有 2 颗种子。",
          cite: ["cornell-ce"],
        },
        {
          q: "刺球掉进河里会沉下去吗？",
          a: "不会！刺球能浮在水上，顺着小河、水沟漂到别的地方安家。",
          cite: ["cornell-ce", "wiki-en"],
        },
        {
          q: "鞋上的魔术贴真是学刺球做的？",
          a: "1941 年，瑞士工程师德·梅斯特拉尔用显微镜看粘在狗毛上的牛蒡刺球，发现满是小钩子，后来发明了魔术贴。苍耳刺球也靠小钩子挂住毛。",
          cite: ["wiki-velcro", "frps-ce"],
        },
        {
          q: "它为什么还叫「羊负来」？",
          a: "苍耳子还有「羊负来」「羊带来」这样的名字。科学家也发现，刺球特别容易缠进羊毛，跟着羊走很远。",
          cite: ["wiki-zh", "cornell-ce"],
        },
      ],
    },
  ],
  care: "只看、拍照，不往别人身上和头发上扔刺球。种子和小苗有毒，不放进嘴里，摸完洗手。",
  nextTime: "下次在裤脚上发现苍耳，用放大镜看看：刺尖是不是弯成小钩子？顶上有几根尖嘴？",
  sources: [
    {
      id: "foc-ce",
      title: "Xanthium strumarium 苍耳",
      by: "Flora of China（植物智收录）",
      url: "https://www.iplant.cn/info/Xanthium%20strumarium?t=foc",
    },
    {
      id: "frps-ce",
      title: "苍耳 Xanthium sibiricum（第 75 卷）",
      by: "中国植物志（植物智）",
      url: "https://www.iplant.cn/info/Xanthium%20strumarium?t=z",
    },
    {
      id: "foc-nb",
      title: "Arctium lappa 牛蒡",
      by: "Flora of China（植物智收录）",
      url: "https://www.iplant.cn/info/Arctium%20lappa?t=foc",
    },
    {
      id: "foc-ppz",
      title: "Bidens bipinnata 婆婆针",
      by: "Flora of China（植物智收录）",
      url: "https://www.iplant.cn/info/Bidens%20bipinnata?t=foc",
    },
    {
      id: "cornell-ce",
      title: "Common cocklebur (Xanthium strumarium)",
      by: "Cornell CALS Weed Science",
      url: "https://cals.cornell.edu/weed-science/weed-profiles/common-cocklebur",
    },
    {
      id: "wiki-en",
      title: "Xanthium strumarium",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Xanthium_strumarium",
    },
    {
      id: "wiki-velcro",
      title: "Velcro",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Velcro",
    },
    {
      id: "wiki-zh",
      title: "苍耳",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E8%8B%8D%E8%80%B3",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
