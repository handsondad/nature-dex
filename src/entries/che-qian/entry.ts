import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "che-qian",
  name: "车前",
  scientific: "Plantago asiatica",
  kind: "plant",
  // 北方路边还有平车前（直根、4颗种子）和大车前：看清果穗疏密和盖果种子数再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "唇形目", "车前科", "车前属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "砖缝里贴地生长的车前",
    shoot: "在人行道砖缝或路边俯拍一棵车前：贴地围成一圈的宽叶子和竖起的花穗都拍进去",
  },
  hello: "砖缝里怎么踩都长得出，熟透的果盒还会像揭盖子一样打开。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "rosette-spike",
        caption: "莲座状叶片中央竖起几根细长花穗",
        shoot: "斜上方拍一整棵车前：贴地的宽卵形叶子、弧形叶脉和中央竖起的细长穗子都要清楚",
      },
      points: [
        {
          x: 0.6,
          y: 0.8,
          label: "叶子贴地围一圈",
          detail: "没有高高的茎，宽卵形的叶子全从根部长出来，一圈圈铺开（莲座状）。",
          cite: ["foc-cq", "frps-cq"],
        },
        {
          x: 0.25,
          y: 0.82,
          label: "弧形的叶脉",
          detail: "每片叶子有 3～7 条明显的叶脉，从叶柄弯弯地一直通到叶尖。",
          cite: ["foc-cq"],
        },
        {
          x: 0.43,
          y: 0.66,
          label: "长长的叶柄",
          detail: "叶柄长 2～15 厘米，底下变宽，像一个鞘包着中间。",
          cite: ["foc-cq", "frps-cq"],
        },
        {
          x: 0.545,
          y: 0.3,
          label: "细长的花穗",
          detail: "叶丛中间竖起 3～10 根细圆柱形的穗子，上面密密排着白色小花。",
          cite: ["foc-cq", "frps-cq"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花穗",
      shot: {
        photo: "spike-macro",
        caption: "花穗上半截伸出白花蕊，下半截结出青绿盖果",
        shoot: "微距竖拍一根正在开花的车前花穗，看清伸在外面的白色雄蕊和下部鼓起的小果子",
      },
      text: "白色的小花瓣只有 1～1.5 毫米长。雄蕊长长地伸到花外面，顶着白色的花药。穗子下半截的花已经谢了，鼓起一个个绿色的小果盒。",
      zoom: 2.6,
      start: [0.5, 0.36],
      cite: ["foc-cq"],
    },
    {
      type: "steps",
      title: "从一圈叶子到一把种子",
      steps: [
        {
          photo: "step-bud",
          label: "长叶子",
          text: "叶子从根部一片片长出来，贴着地面围成一圈。",
          caption: "还没抽穗的一圈叶子",
          shoot: "春天，从正上方拍一棵还没长穗子的车前",
        },
        {
          photo: "step-bloom",
          label: "开花",
          text: "穗子上的小花从下往上开，白色的雄蕊伸出来。两边的穗子下面已经开始结果。",
          caption: "开花的穗子和结果的穗子",
          shoot: "夏天，靠近拍开着白花的穗子",
        },
        {
          photo: "step-fruit",
          label: "结果",
          text: "花谢了，穗子上鼓起一个个小果盒（盖果），长 3～6 毫米。",
          caption: "挂满小果盒的果穗",
          shoot: "花谢后，拍一根挂满绿色小果子的穗子",
        },
        {
          photo: "step-seed",
          label: "撒种子",
          text: "秋天果穗变成褐色。小果盒在靠近底部的地方横着裂开一圈，像揭开盖子，掉出 5～15 颗黑褐色种子。",
          caption: "秋天变成褐色的果穗",
          shoot: "秋天，拍变成褐色的干果穗",
        },
      ],
      cite: ["foc-cq", "frps-cq"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "车前 4～8 月开花，6～9 月结果。在中国，大家 4、5 月和 8 月拍到它最多。我们是哪个月遇见它的？",
      cite: ["foc-cq"],
    },
    {
      type: "lookalike",
      title: "路边三种车前，怎么分？",
      quiz: true,
      items: [
        {
          name: "平车前",
          scientific: "Plantago depressa",
          shot: { photo: "look-pcq", caption: "叶片较窄长的平车前" },
          tells: ["叶子是长椭圆形，比车前窄", "地下有一根长长的直根", "一个小果盒里只有 4 颗种子"],
        },
        {
          name: "车前",
          scientific: "Plantago asiatica",
          self: true,
          shot: { photo: "look-cq", caption: "叶片宽卵形的车前" },
          tells: ["叶子宽卵形，像一把把小勺子", "地下是一大把须根，没有粗长的直根", "一个小果盒里有 5～15 颗种子"],
        },
        {
          name: "大车前",
          scientific: "Plantago major",
          shot: { photo: "look-dcq", caption: "叶片又大又宽的大车前" },
          tells: ["叶子能长得很大，最长约 30 厘米", "新鲜的花药常常是淡紫色", "一个果盒里种子更多更小，常有 12～24 颗"],
        },
      ],
      cite: ["foc-cq", "foc-pcq", "foc-dcq", "frps-cq"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它为什么叫「车前」？",
          a: "一千七百多年前，陆玑写道：它喜欢长在牛脚印里，所以叫「车前」「当道」。东北人还叫它「车轱辘菜」。",
          cite: ["luji-shu", "frps-cq"],
        },
        {
          q: "下过雨，种子会变黏？",
          a: "会！车前的种子吸了水，会裹上一层黏黏的胶。科学家雨后踩它 20 步，鞋上粘的种子大约是晴天的 4 倍。",
          cite: ["abe-2022"],
        },
        {
          q: "鞋子能把种子带多远？",
          a: "雨后粘上种子的鞋走了 1000 米，还有约两成种子粘着；晴天粘上的，只剩约 4%。",
          cite: ["abe-2022"],
        },
        {
          q: "学名也和「脚底板」有关？",
          a: "车前属的学名 Plantago 来自拉丁语 planta，意思是「脚底板」，因为它的叶子总是平平地贴着地面长。",
          cite: ["wiki-plantago"],
        },
        {
          q: "叶柄里面藏着什么？",
          a: "把叶柄切成薄片放在显微镜下：里面有几束粗大的维管束（运水和养料的管道），两边还有几层加厚的细胞撑着。",
          cite: ["smmu-cq"],
        },
        {
          q: "车前和大车前是一种吗？",
          a: "以前有人把它们算成一种。后来科学家比较了它们的 DNA，发现是两个不同的种。",
          cite: ["foc-cq"],
        },
      ],
    },
  ],
  care: "只看、拍照，不拔整棵。路边砖缝的植物可能打过药，摸完洗手，不放进嘴里。",
  nextTime: "下过雨后在车前旁边走一走，回家看看鞋底有没有粘上黑褐色的小种子？",
  sources: [
    {
      id: "foc-cq",
      title: "Plantago asiatica 车前",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200022046",
    },
    {
      id: "foc-pcq",
      title: "Plantago depressa 平车前",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200022047",
    },
    {
      id: "foc-dcq",
      title: "Plantago major 大车前",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200022050",
    },
    {
      id: "frps-cq",
      title: "车前（《中国植物志》第 70 卷）",
      by: "iPlant 植物智",
      url: "https://www.iplant.cn/info/Plantago%20asiatica",
    },
    {
      id: "abe-2022",
      title: "Seed Mucilage Promotes Dispersal of Plantago asiatica Seeds by Facilitating Attachment to Shoes",
      by: "Sustainability, 2022",
      url: "https://doi.org/10.3390/su14116909",
    },
    {
      id: "smmu-cq",
      title: "车前草不同居群药材的快速鉴别研究",
      by: "药学实践与服务",
      url: "https://yxsj.smmu.edu.cn/cn/article/doi/10.12206/j.issn.2097-2024.202402036",
    },
    {
      id: "luji-shu",
      title: "毛诗草木鸟兽虫鱼疏（陆玑）",
      by: "维基文库",
      url: "https://zh.wikisource.org/wiki/%E6%AF%9B%E8%A9%A9%E8%8D%89%E6%9C%A8%E9%B3%A5%E7%8D%B8%E8%9F%B2%E9%AD%9A%E7%96%8F",
    },
    {
      id: "wiki-plantago",
      title: "Plantago",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Plantago",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;