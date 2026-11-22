import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 《中国植物志》用 Platanus acerifolia（二球悬铃木），GBIF 接受名为 Platanus × hispanica。
const entry: Entry = {
  id: "er-qiu-xuan-ling-mu",
  name: "二球悬铃木",
  pinyin: "èr qiú xuán líng mù",
  scientific: "Platanus × hispanica",
  kind: "plant",
  // 行道树里偶有一球悬铃木或三球悬铃木：多看几根果枝确认大多2球一串、中央裂片宽长相近再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "山龙眼目", "悬铃木科", "悬铃木属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "树干穿着「迷彩服」的高大二球悬铃木",
    shoot: "在行道旁或公园仰拍一整棵二球悬铃木：斑驳剥落的树干和宽大树冠都拍进去",
  },
  hello: "树干穿着灰白浅绿的「迷彩服」，枝头两个一组挂着毛绒球。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "leaf-ball",
        caption: "大叶子下面，一根长柄串着两个毛球",
        shoot: "夏秋拍一根低垂的果枝：手掌一样裂开的大叶子和成串挂着的毛球同框",
      },
      points: [
        {
          x: 0.62,
          y: 0.14,
          label: "手掌形大叶子",
          detail: "叶子宽 10～24 厘米，常裂成 5 个尖角（有时 3 或 7 个），像一只张开的大手。",
          cite: ["foc-platanus"],
        },
        {
          x: 0.6,
          y: 0.36,
          label: "三角形的尖角",
          detail: "中间那个尖角是宽宽的三角形，宽和长差不多；尖角边上有时带一两个大齿。",
          cite: ["foc-platanus", "bj-xuanlingmu"],
        },
        {
          x: 0.43,
          y: 0.5,
          label: "毛刺刺的圆球",
          detail: "果球直径约 2.5 厘米，由许多小坚果挤成；一根根小刺是每颗小坚果头上留下的花柱。",
          cite: ["foc-platanus"],
        },
        {
          x: 0.345,
          y: 0.66,
          label: "一根柄串两个球",
          detail: "长长的果柄垂下来，上面常串着 2 个球，有时只有 1 个或有 3 个。",
          cite: ["foc-platanus", "bj-xuanlingmu"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看「迷彩服」树皮",
      shot: {
        photo: "bark-macro",
        caption: "正在一片片脱落的树皮",
        shoot: "走到树干近处拍一块正在脱皮的树皮，把深褐老皮和灰白、浅绿的新皮拍清楚",
      },
      text: "老树皮一片一片地剥落，露出下面光滑的灰绿、灰白、浅黄色新皮。新旧颜色拼在一起，就成了一身「迷彩服」。",
      zoom: 2.5,
      start: [0.52, 0.5],
      cite: ["foc-platanus", "bj-xuanlingmu"],
    },
    {
      type: "steps",
      title: "从红花球到毛果球",
      steps: [
        {
          photo: "step-flower",
          label: "开花",
          text: "春天新叶刚冒出来，枝头挂着红红的小圆球。每个圆球都是很多小花挤在一起。",
          caption: "春天枝头的红色花球",
          shoot: "3～5 月新叶刚展开时，拍枝头红色或黄绿色的小花球",
        },
        {
          photo: "step-green",
          label: "青果球",
          text: "花谢以后，小球慢慢长大，变成黄绿色的果球，挂在长长的柄上。",
          caption: "夏天长大的黄绿色果球",
          shoot: "夏天抬头拍还是黄绿色的果球，连着长果柄",
        },
        {
          photo: "step-brown",
          label: "褐果球",
          text: "到秋天果球变成褐色。叶子落光了，它们还挂在枝头。",
          caption: "冬天枝头的褐色果球",
          shoot: "冬天落叶后，拍挂在枝头的两个褐色果球",
        },
        {
          photo: "step-break",
          label: "散开了",
          text: "冬天到春天，果球一点点散开，带着绒毛的小坚果随风飘走。",
          caption: "散开的果球和飘出来的小坚果",
          shoot: "地上找一个正在散开的果球，把旁边带毛的小坚果一起拍进去",
        },
      ],
      cite: ["foc-platanus", "wiki-en"],
    },
    {
      type: "compare",
      title: "夏天和冬天，抬头看",
      before: {
        photo: "same-summer",
        label: "夏天",
        caption: "满树大叶子",
        shoot: "选一棵好找的悬铃木，记住站的位置，夏天站在树下抬头拍树冠",
      },
      after: {
        photo: "same-winter",
        label: "冬天",
        caption: "叶子落光，枝头挂满小球",
        shoot: "冬天回到同一个位置、同一个角度，再抬头拍一张",
      },
      text: "夏天大叶子把果球都挡住了。冬天叶子落光，满枝的小圆球一下子全露出来，它们能挂一整个冬天。",
      cite: ["wiki-en"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家在 iNaturalist 上拍到它的次数还不多，大多是秋天。它 3～5 月开花，6～10 月结果，果球能一直挂过冬天。我们是哪个月遇见它的？",
      cite: ["foc-platanus", "wiki-en"],
    },
    {
      type: "lookalike",
      title: "「法国梧桐」和真梧桐，别认错",
      quiz: true,
      items: [
        {
          name: "梧桐（青桐）",
          scientific: "Firmiana simplex",
          shot: { photo: "look-wt", caption: "结小船形果瓣的梧桐" },
          tells: [
            "树皮绿绿的、光滑，不会一片片脱皮",
            "果子像一片片小船形的叶子，边上粘着圆豆子一样的种子",
            "没有毛绒绒的圆果球",
          ],
        },
        {
          name: "二球悬铃木",
          scientific: "Platanus × hispanica",
          self: true,
          shot: { photo: "look-eqxlm", caption: "二球悬铃木的叶子" },
          tells: ["树皮一片片剥落成迷彩花纹", "一根柄上常挂 2 个毛球", "叶子中间那个尖角，宽和长差不多"],
        },
        {
          name: "三球悬铃木",
          scientific: "Platanus orientalis",
          shot: { photo: "look-sqxlm", caption: "三球悬铃木裂得很深的叶子" },
          tells: ["叶子裂得更深，中间那个尖角明显比宽更长", "一根柄上常挂 3～5 个毛球"],
        },
      ],
      cite: ["foc-platanus", "foc-firmiana", "bj-wutong"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它是从法国来的梧桐吗？",
          a: "都不是！它是 17 世纪人们用美洲和东方两种悬铃木杂交出来的。后来种在上海霞飞路当行道树，才被叫成「法国梧桐」。",
          cite: ["bj-wutong"],
        },
        {
          q: "为什么叫「二球」？",
          a: "一根果柄上，一球悬铃木多半挂 1 个球，三球悬铃木挂 3～5 个；它大多挂 2 个，正好在中间。",
          cite: ["foc-platanus", "bj-xuanlingmu"],
        },
        {
          q: "一个毛球里装着什么？",
          a: "满满一球小坚果！每颗只有 2～3 毫米长，头上留着一根小刺。果球要长大约半年才成熟。",
          cite: ["foc-platanus", "wiki-en"],
        },
        {
          q: "春天在树下，为什么容易打喷嚏？",
          a: "嫩叶上有细细的硬毛，散开的种子也带毛。它们飘进鼻子会刺激人，有哮喘的人会更难受。",
          cite: ["wiki-en"],
        },
        {
          q: "北京街边常见它吗？",
          a: "北京约有 200 万株行道树。国槐、白蜡、银杏、悬铃木、毛白杨、栾树、垂柳这 7 种，加起来占了 79.2%。",
          cite: ["bj-xingdaoshu"],
        },
      ],
    },
  ],
  care: "只看、拍照，不折树枝。春天毛絮飘到脸上，别用手揉眼睛；捡到的毛球别拆散往人身上扬。",
  nextTime: "冬天树叶落光后抬头数一数：一棵二球悬铃木上，是挂 2 个球的多，还是 1 个球、3 个球的多？",
  sources: [
    {
      id: "foc-platanus",
      title: "Platanaceae 悬铃木科（含 Platanus acerifolia 二球悬铃木、P. orientalis 三球悬铃木）",
      by: "Flora of China Vol. 9（植物智 iPlant 存档 PDF）",
      url: "https://www.iplant.cn/foc/pdf/Platanaceae.pdf",
    },
    {
      id: "foc-firmiana",
      title: "Firmiana 梧桐属（含 Firmiana simplex 梧桐）",
      by: "Flora of China Vol. 12（植物智 iPlant 存档 PDF）",
      url: "https://www.iplant.cn/foc/pdf/Firmiana.pdf",
    },
    {
      id: "bj-wutong",
      title: "【秋季常见观叶树（二）】中国梧桐与法国梧桐",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hhzs/202011/t20201116_2136343.shtml",
    },
    {
      id: "bj-xuanlingmu",
      title: "秋季常见观叶树（二）：悬铃木",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/bzhz/202011/t20201116_2136334.shtml",
    },
    {
      id: "bj-xingdaoshu",
      title: "发挥行道树遮阴功能 提升道路空间舒适度",
      by: "北京市园林绿化局（北京市园林绿化科学研究院）",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202308/t20230814_3221817.shtml",
    },
    {
      id: "wiki-en",
      title: "London plane (Platanus × hispanica)",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/London_plane",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
