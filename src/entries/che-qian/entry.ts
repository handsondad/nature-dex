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
          x: 0.48,
          y: 0.72,
          label: "贴地围成莲座",
          detail: "没有高高的地上茎，宽卵形的叶子全都从根部一圈圈平铺出来，不怕踩踏。",
          cite: ["foc-cq", "wiki-zh"],
        },
        {
          x: 0.34,
          y: 0.65,
          label: "弧形平行主脉",
          detail: "每片叶子有 3～7 条明显的弧形主脉，从叶柄一路弯弯地通向叶尖。",
          cite: ["foc-cq"],
        },
        {
          x: 0.56,
          y: 0.82,
          label: "藏着韧筋的叶柄",
          detail: "叶柄长 2～15 厘米，里面有 5～9 束结实的维管束，拉断落叶时能抽出一根根韧韧的「筋」。",
          cite: ["foc-cq", "smmu-cq"],
        },
        {
          x: 0.52,
          y: 0.25,
          label: "鼠尾一样的细花穗",
          detail: "从叶丛中央抽出好几根细圆柱形花穗，密密麻麻排着白色小花，结出带盖子的小果盒。",
          cite: ["foc-cq"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花穗上的小花与果盒",
      shot: {
        photo: "spike-macro",
        caption: "花穗上半截伸出白花蕊，下半截结出青绿盖果",
        shoot: "微距竖拍一根正在开花的车前花穗，看清伸在外面的白色雄蕊和下部鼓起的小果子",
      },
      text: "小花从下往上开，伸出细长的白色花药靠风传粉；下面结出的「盖果」长 3～6 毫米，熟了会在靠底下一圈横着裂开，像打开小盒子一样掉出 5～15 颗黑褐色种子。",
      zoom: 2.6,
      start: [0.5, 0.45],
      cite: ["foc-cq", "wiki-plantago"],
    },
    {
      type: "lookalike",
      title: "路边两种车前，怎么分？",
      quiz: true,
      items: [
        {
          name: "平车前",
          scientific: "Plantago depressa",
          shot: { photo: "look-pcq", caption: "叶片较窄长的平车前" },
          tells: [
            "北方路边也很常见，叶片偏长椭圆形，相对窄一些",
            "地下是一根长长的圆锥形直根",
            "每个盖果里通常只有 4 颗种子",
          ],
        },
        {
          name: "车前",
          scientific: "Plantago asiatica",
          self: true,
          shot: { photo: "look-cq", caption: "叶片宽卵形的车前" },
          tells: [
            "叶片宽卵形到宽椭圆形，像一把把小勺子",
            "地下是一大丛密密的须根，没有粗长直根",
            "每个盖果里有 5～15 颗黑褐色小种子",
          ],
        },
      ],
      cite: ["foc-cq", "foc-pcq"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "车前 4～8 月开花，6～9 月结果；在中国，大家 4～8 月拍到它最多，整个夏天路边都能看到它竖着小花穗。我们是哪个月遇见它的？",
      cite: ["foc-cq"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它为什么叫「车前」？",
          a: "早在《诗经》里它就叫「芣苢」。古书说它最爱长在道路边和牛马车轮经过的脚印里，不怕车轮碾、鞋子踩，所以得名「车前」「当道」「车轱辘菜」。",
          cite: ["wiki-zh", "scdfz-cq"],
        },
        {
          q: "它的种子碰到水会变魔术？",
          a: "车前子外壳含有丰富的多糖黏液质，一遇到雨水或露水就会吸水膨胀变得黏糊糊的，粘在路过的人鞋底、车轮和动物脚掌上搭便车。",
          cite: ["wiki-zh", "wiki-plantago"],
        },
        {
          q: "拉丁学名也和「脚底板」有关？",
          a: "车前属的学名 Plantago 来自拉丁语 planta，意思就是「脚底板」——因为它的宽叶子总是平平地贴在人们脚踩的地面上。",
          cite: ["wiki-plantago"],
        },
        {
          q: "叶柄里的「筋」是干什么的？",
          a: "那些拉不轻易扯断的细丝是输送水分和养料的维管束，周围还有厚角组织加固，所以行人踩过去叶片也不容易烂断。",
          cite: ["smmu-cq"],
        },
      ],
    },
  ],
  care: "观察叶脉和果穗时尽量找地上已经折断的老叶，不要把整棵连根拔掉。路边砖缝常有车轮灰尘和除草药水，摸完记得洗手，别采来吃。",
  nextTime: "夏末找一根变褐色的干果穗，轻轻碰一碰小果盒上半截的「盖子」，看看里面会掉出几颗黑褐色小种子？",
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
      id: "wiki-plantago",
      title: "Plantago",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Plantago",
    },
    {
      id: "wiki-zh",
      title: "车前",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E8%BD%A6%E5%89%8D",
    },
    {
      id: "smmu-cq",
      title: "车前草不同居群药材的快速鉴别研究",
      by: "药学实践与服务",
      url: "https://yxsj.smmu.edu.cn/cn/article/doi/10.12206/j.issn.2097-2024.202402036",
    },
    {
      id: "scdfz-cq",
      title: "绵竹车前子：《诗经》芣苢与《本草纲目》释名",
      by: "四川省情网",
      url: "http://scdfz.sc.gov.cn/scyx/sctc/content_186862",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
