import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 粉黛乱子草（Muhlenbergia capillaris）原产北美，中国公园广泛引种栽培，Flora of China 未收录本种。
const entry: Entry = {
  id: "fen-dai-luan-zi-cao",
  name: "粉黛乱子草",
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
        caption: "单丛粉黛乱子草：下层细绿叶丛与上层散开的粉紫花雾",
        shoot: "站在步道边拍一整丛粉黛乱子草：底下的细绿草叶和上半截蓬松粉雾都收进画面",
      },
      points: [
        {
          x: 0.5,
          y: 0.3,
          label: "云雾状粉紫花序",
          detail: "秋天抽出的圆锥花序又宽又蓬松，长达三四十厘米，高高浮在绿叶上方，远看像一团粉色轻雾。",
          cite: ["wiki-en", "mobot-mc"],
        },
        {
          x: 0.35,
          y: 0.45,
          label: "发丝一样细的分枝",
          detail: "花序的每一根小分枝和花梗都像头发丝一样纤细，风一吹就轻轻晃动。",
          cite: ["wiki-en", "mobot-mc"],
        },
        {
          x: 0.52,
          y: 0.78,
          label: "一丛丛细亮绿叶",
          detail: "植株成丛生长，高约 30～90 厘米，细长叶片宽仅 1.3～3.5 毫米，春夏深绿光亮，入秋渐渐带古铜色。",
          cite: ["wiki-en", "wiki-zh"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看头发丝上的迷你小穗",
      shot: {
        photo: "panicle-macro",
        caption: "比手指细得多的发丝状花序分枝与粉紫色单花小穗",
        shoot: "站在步道边把镜头凑近路缘探出来的一小枝花序微距拍，看清发丝分枝和米粒小穗",
      },
      text: "它的拉丁种加词 capillaris 就是「像头发一样细」的意思！凑近看，根本没有大花瓣——是成千上万根发丝般的花梗顶端，各挂着一粒极小的粉紫色小穗（通常只含 1 朵小花），聚在一起才折射出粉色雾气。",
      zoom: 2.6,
      start: [0.45, 0.5],
      cite: ["wiki-en", "wiki-zh", "mobot-mc"],
    },
    {
      type: "lookalike",
      title: "同是禾本科草穗：粉黛乱子草还是狗尾草？",
      quiz: true,
      items: [
        {
          name: "狗尾草",
          scientific: "Setaria viridis",
          shot: { photo: "look-gwc", caption: "小穗与刚毛紧紧挤成圆柱形的狗尾草" },
          tells: [
            "小穗和绿刚毛紧紧挤成一根圆柱形「毛毛虫」穗子，分枝缩得很短",
            "一年生野草，夏秋穗子多是绿色或黄褐色",
          ],
        },
        {
          name: "粉黛乱子草",
          scientific: "Muhlenbergia capillaris",
          self: true,
          shot: { photo: "look-fdlzc", caption: "圆锥花序松散张开如粉雾的粉黛乱子草" },
          tells: [
            "圆锥花序的发丝状分枝向四面大大张开，蓬松得像粉色烟雾",
            "多年生丛生观赏草，9～11 月染成大片粉红或紫红色",
          ],
        },
      ],
      cite: ["foc-gwc", "wiki-en", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "它是暖季型多年生禾草，夏天长绿叶，9～11 月迎来盛花期，深冬褪成浅米色麦秆色。秋天去公园看粉雾最美！我们是哪个月遇见它的？",
      cite: ["wiki-en", "wiki-zh", "mobot-mc"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "在北京北边去哪儿能看粉色云雾花海？",
          a: "不用跑远！昌平区的奥北森林公园和天通苑生态休闲公园都种有成片的粉黛乱子草，每年 9 月起如粉雾浮动，是超受欢迎的秋日风景。",
          cite: ["bj-aobei", "bj-shiyuan"],
        },
        {
          q: "它原来住在哪里？",
          a: "它的老家在北美洲东部和南部的松林空地与草原上，耐旱又耐贫瘠，后来因为秋天的粉色花雾太梦幻，被世界各地的城市公园引种。",
          cite: ["wiki-en", "mobot-mc"],
        },
        {
          q: "一丛粉黛乱子草会到处乱窜长满地吗？",
          a: "不会靠地下根茎乱窜！它是乖巧的「丛生型」禾草，一丛一丛抱团长大，不会伸出走茎去抢占旁边的地盘。",
          cite: ["wiki-en", "mobot-mc"],
        },
        {
          q: "为什么公园总立牌子请大家千万别踩进去拍照？",
          a: "因为托起粉色花雾的草秆又细又脆，一旦被脚踩断或坐卧压倒，这一整季都再也站不起来了，还会伤到丛生基部影响来年发芽。",
          cite: ["wiki-en", "wiki-zh"],
        },
      ],
    },
  ],
  care: "一定要站在步道边观赏拍照，绝对不要跨进草丛里踩踏或坐卧——它纤细的茎秆一旦被踩断压倒，整整一季都站不起来了！",
  nextTime: "深秋或初冬再路过同一片粉黛乱子草时看一看：原本粉紫色的花雾褪色后，变成了什么颜色？",
  sources: [
    {
      id: "bj-aobei",
      title: "千园之城提靓生态画卷",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202502/t20250227_4021049.shtml",
    },
    {
      id: "bj-shiyuan",
      title: "“奥北十园”拼出森林公园",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/zwgk/zwxx/202411/t20241122_3947594.shtml",
    },
    {
      id: "mobot-mc",
      title: "Muhlenbergia capillaris - Plant Finder",
      by: "Missouri Botanical Garden",
      url: "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?isprofile=0&pt=11&taxonid=443536&tt=1",
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
