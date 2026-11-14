import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 植物学正式中文名为鸡爪槭（Flora of China 写作鸡爪枫），园林常栽的红叶品种俗称「日本红枫」。
const entry: Entry = {
  id: "ri-ben-hong-feng",
  name: "日本红枫",
  scientific: "Acer palmatum",
  kind: "plant",
  // 红叶鸡爪槭与羽毛枫等品种众多，还有五角枫、元宝枫近似，拍到深裂细重锯齿叶与钝角翅果再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "无患子目", "无患子科", "槭树属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "满树火红叶片的日本红枫",
    shoot: "在公园草坪或庭院里拍一整棵红叶满枝的日本红枫，树形和红叶都要清楚",
  },
  hello: "不用等秋天霜降，红叶品种春天刚展开的新叶就是紫红色的。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "leaf-samara",
        caption: "掌状深裂叶片与枝间垂挂的红色小花果",
        shoot: "4～5 月靠近低枝拍一张：像小鸡爪一样张开的叶片、细叶柄和成对小翅果都在画面里",
      },
      points: [
        {
          x: 0.25,
          y: 0.35,
          label: "5～9 片尖裂片",
          detail: "叶片像张开的小手掌或小鸡爪，深深裂成 5、7 或 9 片前端尖尖的长裂片。",
          cite: ["foc-jzf", "wiki-en"],
        },
        {
          x: 0.45,
          y: 0.68,
          label: "叶边有细重锯齿",
          detail: "每一片裂片的边缘都不光滑，长着密密的不规则细重锯齿（大齿上还套着小齿）。",
          cite: ["foc-jzf"],
        },
        {
          x: 0.58,
          y: 0.42,
          label: "细细的叶柄",
          detail: "细长的叶柄长 2～6 厘米，在阳光下常常带着红褐色或紫红色。",
          cite: ["foc-jzf", "wiki-en"],
        },
        {
          x: 0.65,
          y: 0.55,
          label: "钝角张开的小翅果",
          detail: "紫红色小花谢后结出成对的小翅果，连翅膀长约 1.5～3 厘米，两片果翅张开成钝角。",
          cite: ["foc-jzf", "wiki-en"],
        },
      ],
    },
    {
      type: "compare",
      title: "绿叶原种和红叶品种",
      before: {
        photo: "green-leaf",
        label: "绿叶鸡爪槭",
        caption: "春夏翠绿的鸡爪槭叶片",
        shoot: "春夏在公园找一棵绿叶鸡爪槭，拍一张摊开的掌状绿叶",
      },
      after: {
        photo: "red-leaf",
        label: "红叶品种",
        caption: "春天新叶就是紫红色的日本红枫品种",
        shoot: "同一季节再找一棵常年紫红叶的日本红枫，用同样的横幅角度拍一张叶片对比",
      },
      text: "野生的鸡爪槭春夏是绿叶，深秋才变红；而公园常种的「日本红枫」选育品种，春天新叶一冒出来就是酒红或紫红色的！",
      cite: ["wiki-en"],
    },
    {
      type: "lookalike",
      title: "日本红枫还是元宝枫？",
      quiz: true,
      items: [
        {
          name: "元宝枫",
          scientific: "Acer truncatum",
          shot: { photo: "look-ybf", caption: "裂片全缘无锯齿的元宝枫" },
          tells: [
            "叶片通常 5 裂，裂片边缘光溜溜的全缘、没有锯齿",
            "叶片底边平平的，像用刀切过一样，春夏是绿叶",
          ],
        },
        {
          name: "日本红枫（鸡爪槭）",
          scientific: "Acer palmatum",
          self: true,
          shot: { photo: "look-rbhf", caption: "深裂带细重锯齿的日本红枫叶片" },
          tells: [
            "叶片深裂成 5～9 片细尖角，叶缘一圈全是细重锯齿",
            "红叶品种不用等入秋，春夏也是紫红或酒红色的",
          ],
        },
      ],
      cite: ["foc-jzf", "foc-ybf", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "它 4～5 月边展叶边开花，9 月翅果成熟；在中国，大家 4～5 月看新叶和 11 月赏秋叶时拍到它最多。我们是哪个月遇见它的？",
      cite: ["foc-jzf"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "「日本红枫」和「鸡爪槭」是同一种树吗？",
          a: "是同一个物种！植物学正式名叫鸡爪槭（又叫鸡爪枫），园艺师从它里面选育出上千个品种，春天就红叶的品种常被叫作日本红枫。",
          cite: ["foc-jzf", "wiki-en", "wiki-zh"],
        },
        {
          q: "北京北边的公园里能找到它吗？",
          a: "能！昌平贺新公园的植物调查共记录了 122 种植物，其中秋色叶树里就有鸡爪槭，和元宝枫、黄栌、银杏一起把秋天染得五彩缤纷。",
          cite: ["bj-hexin"],
        },
        {
          q: "它也会开花吗？",
          a: "会！4～5 月新叶展开时，枝梢会挂出半下垂的小花序，每朵小花有 5 片紫红色萼片和 5 片淡黄白色花瓣，只是个头很小容易被忽略。",
          cite: ["foc-jzf"],
        },
        {
          q: "学名里的 palmatum 是什么意思？",
          a: "意思是「手掌一样的」。18 世纪植物学家图恩伯格看到它的叶片像张开的小手掌，就给它起了这个拉丁名字。",
          cite: ["wiki-en"],
        },
      ],
    },
  ],
  care: "只看、拍照，不折枝条也不揪红叶；地上落下的干红叶和成对小翅果可以捡起来观察，看完了别放进嘴里。",
  nextTime: "数一数同一棵日本红枫上的叶子：是 7 个尖角的多，还是 5 个、9 个尖角的多？摸摸叶边有没有细锯齿。",
  sources: [
    {
      id: "foc-jzf",
      title: "Acer palmatum 鸡爪枫",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200013064",
    },
    {
      id: "foc-ybf",
      title: "Acer truncatum 元宝枫",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200013134",
    },
    {
      id: "bj-hexin",
      title: "贺新公园植物配置分析与提升建议",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml",
    },
    {
      id: "wiki-en",
      title: "Acer palmatum",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Acer_palmatum",
    },
    {
      id: "wiki-zh",
      title: "鸡爪槭",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E9%B8%A1%E7%88%AA%E6%A7%AD",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
