import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "pa-shan-hu",
  name: "爬山虎",
  scientific: "Parthenocissus tricuspidata",
  kind: "plant",
  // 墙面和立交桥柱上也常种五叶地锦（5片小叶）：看清多为3裂单叶、嫩卷须尖端膨大成球再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "葡萄目", "葡萄科", "地锦属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "贴着树干一路往上爬的爬山虎",
    shoot: "拍一面爬满爬山虎的老墙或树干，看清一片片三裂的叶子像绿毯一样铺满立面",
  },
  hello: "卷须尖上长满圆圆的小吸盘，再陡的光滑高墙也能稳稳爬上去。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "leaf-berry",
        caption: "贴墙攀援的藤蔓与蓝黑色浆果",
        shoot: "9～10 月在墙边拍一段爬山虎老藤：木质藤条、三裂叶片和蓝黑色小果子都在画面里",
      },
      points: [
        {
          x: 0.42,
          y: 0.72,
          label: "贴墙走的木质藤",
          detail: "它是葡萄科的落叶木质藤本，靠分枝卷须上的吸盘牢牢贴住墙面，能爬上 30 米高的地方。",
          cite: ["foc-dj", "wiki-en"],
        },
        {
          x: 0.56,
          y: 0.42,
          label: "红果梗与蓝黑果",
          detail: "9～10 月结出一串串圆圆的蓝黑色小浆果，看起来有点像迷你野葡萄，但人不能吃。",
          cite: ["foc-dj", "wiki-en"],
        },
        {
          x: 0.25,
          y: 0.55,
          label: "多为三裂单叶",
          detail: "短枝上的大叶子通常是浅裂或深裂成 3 个尖角的单叶，长枝上有时是不裂的心形小叶。",
          cite: ["foc-dj"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看卷须尖上的「小吸盘」",
      shot: {
        photo: "pad-macro",
        caption: "分枝卷须尖端长出一个个圆形吸盘",
        shoot: "贴近墙面微距拍一根刚固定住的嫩卷须，把 5～9 个分枝尖端圆圆的小吸盘拍清楚",
      },
      text: "它的卷须有 5～9 个分枝，嫩尖天生膨大成小球；一碰到墙壁就会长成圆盘，从微孔里分泌黏液变干粘牢，一只小吸盘能拉住自身重量几千倍的东西！",
      zoom: 2.8,
      start: [0.52, 0.55],
      cite: ["foc-dj", "wiki-en", "abs-pad"],
    },
    {
      type: "compare",
      title: "春夏季的绿墙与秋天的红锦",
      before: {
        photo: "same-green",
        label: "夏季绿叶",
        caption: "夏天密密叠叠的绿叶",
        shoot: "夏天选一面爬满爬山虎的墙，记住站的位置竖拍一张",
      },
      after: {
        photo: "same-red",
        label: "深秋变红",
        caption: "秋天变成鲜艳红叶",
        shoot: "10～11 月回到同一面墙、同一角度竖拍一张红叶",
      },
      text: "夏天满墙绿叶帮房子挡住烈日降温；到了深秋，叶片变成橙黄和鲜红色，像在墙上挂起彩色织锦——难怪它的正式中文名叫「地锦」！",
      cite: ["foc-dj", "wiki-en", "wiki-zh"],
    },
    {
      type: "lookalike",
      title: "爬墙的两兄弟，数数小叶就分清",
      quiz: true,
      items: [
        {
          name: "五叶地锦",
          scientific: "Parthenocissus quinquefolia",
          shot: { photo: "look-wydj", caption: "5 片独立小叶的五叶地锦" },
          tells: [
            "掌状复叶：一根长叶柄顶上分开长着 5 片独立的小叶",
            "嫩卷须尖端细细弯弯，碰到墙后才慢慢长成吸盘",
            "原产北美东部，北京立交桥柱和墙面也常种它",
          ],
        },
        {
          name: "爬山虎（地锦）",
          scientific: "Parthenocissus tricuspidata",
          self: true,
          shot: { photo: "look-psh", caption: "多为 3 裂单叶的爬山虎" },
          tells: [
            "大多是一整片裂成 3 个尖角的单叶，不是 5 片分开的小叶",
            "嫩卷须尖端还没贴墙时就已经鼓成小圆球",
            "中国华北、华东等地原产的本土攀援植物",
          ],
        },
      ],
      cite: ["foc-dj", "foc-wydj", "bj-ltlh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "爬山虎 5～8 月开黄绿色小花，9～10 月结果；在中国，大家 4～10 月最常拍到它，深秋落叶前满墙通红最醒目。我们是哪个月遇见它的？",
      cite: ["foc-dj"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它的正式名字为什么叫「地锦」？",
          a: "《中国植物志》里它的正式中文名叫「地锦」，意思是铺在大地和岩石上的彩色织锦；平时大家更爱叫它爬山虎或爬墙虎。",
          cite: ["foc-dj", "wiki-en"],
        },
        {
          q: "它的脚会把墙钻出洞来吗？",
          a: "不会钻进砖头里！吸盘只是分泌黏液牢牢粘在墙面表层。不过要是硬去撕扯藤条，吸盘太牢固，可能会把墙皮油漆一起拽下来。",
          cite: ["wiki-en", "abs-pad"],
        },
        {
          q: "满墙叶子真的能帮房子降温吗？",
          a: "真的！夏天茂密的叶片像给外墙撑了一把大绿伞，挡住阳光直射，能让屋里凉快不少，立交桥柱也常请它来垂直绿化。",
          cite: ["wiki-en", "wiki-zh", "bj-ltlh"],
        },
        {
          q: "爬山虎和葡萄是什么关系？",
          a: "它们都是葡萄科亲戚！爬山虎秋天结的蓝黑色小浆果长得就像迷你葡萄，但果肉不能吃，留给鸟儿就好。",
          cite: ["foc-dj", "wiki-en"],
        },
      ],
    },
  ],
  care: "只看、摸摸叶片就好，别硬拽墙上的藤条和吸盘（容易扯掉墙皮或摔跤）。秋天蓝黑色的小浆果不能吃，千万别摘来尝。",
  nextTime: "下次在墙根找一根还没贴上墙的新卷须，看看它的尖端是不是已经鼓起了一个个小圆头？",
  sources: [
    {
      id: "foc-dj",
      title: "Parthenocissus tricuspidata 地锦",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200013493",
    },
    {
      id: "foc-wydj",
      title: "Parthenocissus quinquefolia 五叶地锦",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=220009987",
    },
    {
      id: "wiki-en",
      title: "Parthenocissus tricuspidata",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Parthenocissus_tricuspidata",
    },
    {
      id: "wiki-zh",
      title: "爬墙虎（地锦）",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E7%88%AC%E5%A2%99%E8%99%8E",
    },
    {
      id: "abs-pad",
      title: "Biological adhesion of Parthenocissus tricuspidata",
      by: "Archives of Biological Sciences",
      url: "https://doi.org/10.2298/ABS1102393H",
    },
    {
      id: "bj-ltlh",
      title: "北京市花园城市建设立体绿化技术指南",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/zwgk/2024nzcwj/2024nqtwj/202410/P020241016377366750835.pdf",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
