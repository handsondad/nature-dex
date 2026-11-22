import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "pa-shan-hu",
  name: "爬山虎",

  pinyin: "pá shān hǔ",
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
  hello: "卷须尖上长着圆圆的小吸盘，石头墙、楼房墙都能一路爬上去。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "leaf-berry",
        caption: "叶子落光后，墙上的老藤和一串串蓝黑色浆果",
        shoot: "9～10 月在墙边拍一段爬山虎老藤：木质藤条、三裂叶片和蓝黑色小果子都在画面里",
      },
      points: [
        {
          x: 0.22,
          y: 0.74,
          label: "贴墙的木质老藤",
          detail: "它是会落叶的木质藤本，老藤又粗又硬；秋天叶子掉光后，满墙的藤条就露出来了。",
          cite: ["frps-dj", "ncsu"],
        },
        {
          x: 0.52,
          y: 0.64,
          label: "蓝黑色的小浆果",
          detail: "浆果圆球形，直径 1～1.5 厘米，里面有 1～3 粒种子，9～10 月成熟。",
          cite: ["foc-dj", "frps-dj"],
        },
        {
          x: 0.25,
          y: 0.26,
          label: "一分再分的果梗",
          detail: "花序长在短枝上，一分再分成好多叉，叫多歧聚伞花序，长 2.5～12.5 厘米；花谢后就成了这一串果。",
          cite: ["foc-dj", "frps-dj"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看卷须尖上的「小吸盘」",
      shot: {
        photo: "pad-macro",
        caption: "卷须尖端圆圆的吸盘，有的已经贴上了墙",
        shoot: "贴近墙面微距拍一根刚固定住的嫩卷须，把 5～9 个分枝尖端圆圆的小吸盘拍清楚",
      },
      text: "卷须有 5～9 根分枝，嫩尖本来就鼓成小圆珠，碰到墙就扩大成吸盘。科学家称过：一个吸盘只有约 0.0005 克，却能经得住约 13.7 牛的拉力，差不多是它自身重量的 280 万倍！",
      zoom: 2.8,
      start: [0.43, 0.81],
      cite: ["foc-dj", "frps-dj", "he-2010"],
    },
    {
      type: "compare",
      title: "绿墙到了秋天会变红",
      before: {
        photo: "same-green",
        label: "夏天",
        caption: "密密叠叠的绿叶",
        shoot: "夏天选一面爬满爬山虎的墙，记住站的位置竖拍一张",
      },
      after: {
        photo: "same-red",
        label: "秋天",
        caption: "叶子变红了",
        shoot: "10～11 月回到同一面墙、同一角度竖拍一张红叶",
      },
      text: "它的叶子春末才长出来，整个夏天都是绿的；到了秋天，叶子从绿色慢慢变成酒红色，然后一片片落下。",
      cite: ["ncsu"],
    },
    {
      type: "lookalike",
      title: "爬墙的两兄弟，数数小叶就分清",
      quiz: true,
      items: [
        {
          name: "五叶地锦",
          scientific: "Parthenocissus quinquefolia",
          shot: { photo: "look-wydj", caption: "5 片小叶的五叶地锦" },
          tells: [
            "掌状复叶：一根叶柄顶上长着 5 片分开的小叶",
            "嫩卷须尖端细细弯弯，后来才长出吸盘",
            "原产北美东部；北京的桥柱绿化常用它",
          ],
        },
        {
          name: "爬山虎（地锦）",
          scientific: "Parthenocissus tricuspidata",
          self: true,
          shot: { photo: "look-psh", caption: "多为 3 裂单叶的爬山虎" },
          tells: [
            "单叶：短枝上的叶子多裂成 3 个尖角，长枝上的叶子小、不分裂",
            "嫩卷须尖端早早鼓成小圆珠，碰到墙就扩大成吸盘",
            "中国本土植物，从吉林、辽宁到台湾都有野生的",
          ],
        },
      ],
      cite: ["foc-dj", "frps-dj", "foc-wydj", "bj-ltlh"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "植物志上说爬山虎 5～8 月开花、9～10 月结果；在中国，大家 4～10 月最常拍到它。我们是哪个月遇见它的？",
      cite: ["foc-dj"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "爬山虎的正式名字叫什么？",
          a: "《中国植物志》里叫「地锦」，《本草纲目》就这么叫；它还叫土鼓藤、红葡萄藤、趴墙虎。「爬山虎」这个名字出自《经济植物手册》。",
          cite: ["frps-dj"],
        },
        {
          q: "吸盘是怎么粘住墙的？",
          a: "科学家把它分成两步：先是吸盘紧紧贴合墙面的凹凸，再靠黏合作用粘牢。所以它能爬上石山和楼墙，大风暴雨也吹不下来。",
          cite: ["abs-pad"],
        },
        {
          q: "硬扯爬山虎会伤墙吗？",
          a: "会！吸盘粘得太牢，硬扯可能连墙上的油漆一起带下来。大人要清理时，会先在根部把藤剪断，等吸盘自己枯掉再拿下来。",
          cite: ["ncsu"],
        },
        {
          q: "满墙绿叶能帮房子降温吗？",
          a: "北京的立体绿化指南里，爬山虎是桥柱和背阴墙面的常用植物；给朝西的墙和阳台披上绿叶，能挡住午后的太阳，让屋里凉快些。",
          cite: ["bj-ltlh"],
        },
        {
          q: "爬山虎和葡萄是亲戚吗？",
          a: "是的，都属葡萄科。爬山虎也结一串串小浆果，每颗有 1～3 粒种子，难怪有个老名字叫「红葡萄藤」。秋冬鸟儿会来吃这些果子。",
          cite: ["foc-dj", "frps-dj", "ncsu"],
        },
        {
          q: "五叶地锦的老家在哪儿？",
          a: "爬山虎是中国、日本和朝鲜半岛的本地植物；五叶地锦老家在北美东部，现在中国各地都种，华北还把它种在路边保持水土。",
          cite: ["foc-dj", "foc-wydj"],
        },
      ],
    },
  ],
  care: "只看、轻轻摸摸叶子，不硬拽墙上的藤和吸盘；不认识的野果不放进嘴里。",
  nextTime: "在墙根找一根还没贴上墙的新卷须，看看它的尖端是不是已经鼓成小圆珠？",
  sources: [
    {
      id: "foc-dj",
      title: "Parthenocissus tricuspidata 地锦",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200013493",
    },
    {
      id: "frps-dj",
      title: "地锦 Parthenocissus tricuspidata（中国植物志 第 48(2) 卷）",
      by: "中国植物志 · 植物智",
      url: "https://www.iplant.cn/info/Parthenocissus%20tricuspidata?t=z",
    },
    {
      id: "foc-wydj",
      title: "Parthenocissus quinquefolia 五叶地锦",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=220009987",
    },
    {
      id: "abs-pad",
      title: "Biological adhesion of Parthenocissus tricuspidata",
      by: "Archives of Biological Sciences",
      url: "https://doi.org/10.2298/ABS1102393H",
    },
    {
      id: "he-2010",
      title: "Morphology and mechanics of the adhesive disc of liana Parthenocissus tricuspidata",
      by: "Pure and Applied Chemistry",
      url: "https://doi.org/10.1351/pac-con-08-12-06",
    },
    {
      id: "ncsu",
      title: "Parthenocissus tricuspidata (Boston Ivy)",
      by: "NC State Extension Gardener Plant Toolbox",
      url: "https://plants.ces.ncsu.edu/plants/parthenocissus-tricuspidata/",
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
