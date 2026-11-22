import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 粉黛乱子草（Muhlenbergia capillaris）原产北美，中国公园广泛引种栽培，Flora of China 未收录本种。
const entry: Entry = {
  id: "fen-dai-luan-zi-cao",
  name: "粉黛乱子草",
  pinyin: "fěn dài luàn zǐ cǎo",
  scientific: "Muhlenbergia capillaris",
  kind: "plant",
  // 园林里偶有近似的毛芒乱子草品种或紫穗狼尾草，看清散开如雾的发丝状圆锥花序分枝即可确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "百合纲", "禾本目", "禾本科", "乱子草属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "秋日阳光下像粉色棉花糖云雾一样的粉黛乱子草花序",
    shoot: "9～11 月站在公园步道边拍一片盛开的粉黛乱子草，逆光下粉色云雾感最好看",
  },
  hello: "春夏只是不起眼的绿草丛，一到秋天就抽出万千发丝，染出一片粉色云雾。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "clump-mist",
        caption: "一丛开花的粉黛乱子草：下面是细绿叶，上面浮着粉色花雾",
        shoot: "站在步道边拍一整丛粉黛乱子草：底下的细绿草叶和上半截蓬松粉雾都收进画面",
      },
      points: [
        {
          x: 0.45,
          y: 0.26,
          label: "云雾一样的粉色花序",
          detail: "秋天，又大又松的花枝浮在叶丛上面，一枝能有 30 厘米长，远看像一团粉雾。",
          cite: ["mobot-mc"],
        },
        {
          x: 0.2,
          y: 0.33,
          label: "发丝一样细的花枝",
          detail: "花枝和挂小花的细梗都像头发丝一样细，风一吹就轻轻晃。",
          cite: ["mobot-mc", "wiki-en"],
        },
        {
          x: 0.56,
          y: 0.58,
          label: "像铁丝一样的细叶",
          detail: "叶子又细又韧，宽只有 1.3～3.5 毫米。夏天深绿发亮，秋天慢慢变成铜色。",
          cite: ["usda-fs", "mobot-mc", "wiki-en"],
        },
        {
          x: 0.62,
          y: 0.8,
          label: "圆圆的一丛",
          detail: "它从一处长成圆圆的一大丛，不会伸出地上或地下的茎到处跑。",
          cite: ["usda-fs", "mobot-mc"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看头发丝上的小穗",
      shot: {
        photo: "panicle-macro",
        caption: "手指旁的发丝状花枝，顶上挂着一粒粒粉紫色小穗",
        shoot: "站在步道边把镜头凑近路缘探出来的一小枝花序微距拍，看清发丝分枝和米粒小穗",
      },
      text: "学名里的 capillaris 意思是「像头发一样细」。凑近看，没有大花瓣：每根发丝顶上挂着一粒小穗，里面通常只有 1 朵小花。",
      zoom: 2.6,
      start: [0.5, 0.42],
      cite: ["mobot-mc", "wiki-en"],
    },
    {
      type: "compare",
      title: "夏天的绿草丛，秋天的粉雾",
      before: {
        photo: "same-summer",
        label: "夏天",
        caption: "7 月，只有一丛细细的绿叶",
        shoot: "7 月在公园里找一丛粉黛乱子草，记住位置，从斜上方拍一整丛",
      },
      after: {
        photo: "same-autumn",
        label: "秋天",
        caption: "10 月，叶丛上浮起粉色花雾",
        shoot: "10 月回到同一丛、同一个角度再拍一张",
      },
      text: "夏天它的叶子绿油油、亮亮的，不太起眼。到了秋天，粉红、紫红的花枝从叶丛里长出来，叶子也慢慢变成铜色。",
      cite: ["usda-fs", "mobot-mc"],
    },
    {
      type: "steps",
      title: "从抽穗到米色种子穗",
      steps: [
        {
          photo: "step-heading",
          label: "抽穗",
          text: "夏末，绿草丛里冒出第一批细细的花枝，颜色还很浅。",
          caption: "绿叶丛里刚冒出的几枝花穗",
          shoot: "8、9 月拍刚从叶丛里抽出来的几枝花穗",
        },
        {
          photo: "step-bloom",
          label: "开花",
          text: "9～11 月，花枝全部张开，变成粉红、紫红的一大团。小花是从下往上一点点开熟的。",
          caption: "开成一团粉雾的粉黛乱子草",
          shoot: "盛花时同一丛再拍一张，整团粉雾都要进画面",
        },
        {
          photo: "step-seed",
          label: "结籽",
          text: "花谢以后，花枝褪成米黄色，挂着长圆形的小种子，冬天还立在那儿。",
          caption: "冬天褪成米黄色的种子穗",
          shoot: "12 月到第二年 1 月，再去拍同一丛褪色后的样子",
        },
      ],
      cite: ["mobot-mc", "usda-fs", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，它多是公园里种的，网上被拍到的记录还很少。它 9～11 月开花，秋天去看粉雾吧！我们是哪个月遇见它的？",
      cite: ["mobot-mc"],
    },
    {
      type: "lookalike",
      title: "公园里的毛穗子草，别认错",
      quiz: true,
      items: [
        {
          name: "狼尾草",
          scientific: "Cenchrus alopecuroides",
          shot: { photo: "look-lwc", caption: "穗子像一把把毛刷子的狼尾草" },
          tells: ["穗子是一根根直直的「毛刷子」，又密又粗", "刷子上的刚毛有 1.5～3 厘米长", "叶子比较宽，像普通的草叶"],
        },
        {
          name: "粉黛乱子草",
          scientific: "Muhlenbergia capillaris",
          self: true,
          shot: { photo: "look-fdlzc", caption: "花枝松松散开、像粉雾的粉黛乱子草" },
          tells: ["花枝像头发丝一样向四面散开，蓬松得像一团雾", "秋天整片变成粉红或紫红色"],
        },
        {
          name: "狗尾草",
          scientific: "Setaria viridis",
          shot: { photo: "look-gwc", caption: "小穗和刚毛紧紧挤成圆柱形的狗尾草" },
          tells: ["穗子挤成一根圆柱形「毛毛虫」", "路边野草，穗子多是绿色"],
        },
      ],
      cite: ["iplant-lwc", "foc-gwc", "mobot-mc"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它的学名在说什么？",
          a: "Muhlenbergia 是纪念一位爱研究植物的牧师穆伦伯格；capillaris 的意思是「像头发一样细」。",
          cite: ["mobot-mc"],
        },
        {
          q: "它原来住在哪里？",
          a: "北美洲东部和南部的草原、松林空地。在美国康涅狄格、印第安纳、马里兰和新泽西，它是濒危植物。",
          cite: ["mobot-mc", "usda-fs"],
        },
        {
          q: "在北京哪儿能看粉色花雾？",
          a: "奥北森林公园从 9 月起，粉黛乱子草「如云似雾」；天通苑生态休闲公园也补种了它。",
          cite: ["bj-shiyuan", "bj-aobei"],
        },
        {
          q: "一丛粉黛乱子草会到处乱窜吗？",
          a: "不会。它一丛一丛地长，不会伸出地上或地下的茎去占旁边的地方。",
          cite: ["usda-fs", "mobot-mc"],
        },
        {
          q: "粉雾里藏着小虫吗？",
          a: "种子刚开始长的时候，常有蚜虫来吸花穗的汁；瓢虫会被招来，吃掉蚜虫。",
          cite: ["usda-fs"],
        },
      ],
    },
  ],
  care: "站在步道上看、拍照，不走进草丛里踩、坐、躺；不摘花穗，也不把草放进嘴里。",
  nextTime: "深秋或初冬再路过同一片粉黛乱子草时看一看：原本粉紫色的花雾褪色后，变成了什么颜色？",
  sources: [
    {
      id: "mobot-mc",
      title: "Muhlenbergia capillaris - Plant Finder",
      by: "Missouri Botanical Garden",
      url: "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?taxonid=285282",
    },
    {
      id: "usda-fs",
      title: "Plant Fact Sheet: Hairawn Muhly (Muhlenbergia capillaris)",
      by: "USDA NRCS",
      url: "https://plants.usda.gov/DocumentLibrary/factsheet/pdf/fs_muca2.pdf",
    },
    {
      id: "bj-shiyuan",
      title: "“奥北十园”拼出森林公园",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/zwgk/zwxx/202411/t20241122_3947594.shtml",
    },
    {
      id: "bj-aobei",
      title: "千园之城提靓生态画卷",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202502/t20250227_4021049.shtml",
    },
    {
      id: "iplant-lwc",
      title: "Pennisetum alopecuroides 狼尾草（Flora of China）",
      by: "iPlant 植物智",
      url: "https://www.iplant.cn/info/Pennisetum%20alopecuroides?t=foc",
    },
    {
      id: "foc-gwc",
      title: "Setaria viridis 狗尾草",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200026279",
    },
    {
      id: "wiki-en",
      title: "Muhlenbergia capillaris",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Muhlenbergia_capillaris",
    },
    {
      id: "wiki-zh",
      title: "粉黛乱子草",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E7%B2%89%E9%BB%9B%E4%B9%B1%E5%AD%90%E8%8D%89",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;