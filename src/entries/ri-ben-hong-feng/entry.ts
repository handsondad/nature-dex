import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 植物学正式中文名为鸡爪槭（Flora of China 写作鸡爪枫），园林常栽的红叶品种俗称「日本红枫」。
const entry: Entry = {
  id: "ri-ben-hong-feng",
  name: "日本红枫",
  pinyin: "rì běn hóng fēng",
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
        caption: "春天的鸡爪槭：掌状叶和刚开的小红花",
        shoot: "4～5 月靠近低枝拍一张：像小鸡爪一样张开的叶片、细叶柄和小花序都在画面里",
      },
      points: [
        {
          x: 0.24,
          y: 0.36,
          label: "5～9 片尖裂片",
          detail: "叶片像张开的小手掌或小鸡爪，深深裂成 5 片、7 片（偶尔 9 片）前端尖尖的长裂片。",
          cite: ["foc-jzf", "wiki-en"],
        },
        {
          x: 0.6,
          y: 0.2,
          label: "叶边有细重锯齿",
          detail: "每一片裂片的边缘都不光滑，长着密密的不规则细重锯齿（大齿上还套着小齿）。",
          cite: ["foc-jzf"],
        },
        {
          x: 0.655,
          y: 0.54,
          label: "裂片从这里散开",
          detail: "所有裂片都从叶片底部这一点散开，大约裂到叶片中间；下面连着一根 2～6 厘米长的细叶柄。",
          cite: ["foc-jzf"],
        },
        {
          x: 0.39,
          y: 0.5,
          label: "和新叶一起开的小花",
          detail: "4～5 月新叶展开时，枝头挂出半下垂的小花序，一串 10～20 朵紫红色的小花。",
          cite: ["foc-jzf"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一朵小花",
      shot: {
        photo: "flower-close",
        caption: "一朵鸡爪槭小花",
        shoot: "4～5 月凑近低枝，拍一朵小花的侧面：看清红色萼片、浅色花瓣和卷起的柱头",
      },
      text: "小花只有指甲盖大：外面 5 片紫红色的萼片，里面是比萼片还小的淡黄到粉白色花瓣。花下面伸出长长的花柱，顶上分成两条，弯弯地卷起来，那就是柱头。",
      zoom: 2.5,
      start: [0.6, 0.62],
      cite: ["foc-jzf"],
    },
    {
      type: "steps",
      title: "从小嫩芽到满树红叶",
      steps: [
        {
          photo: "step-bud",
          label: "发芽",
          text: "春天，紫红色的小冬芽打开，嫩叶一边展开一边长大；刚出来时带着黄褐色的细毛，很快就掉光了。",
          caption: "刚展开的小嫩叶",
          shoot: "3～4 月去看低枝，拍刚从芽里钻出来的小嫩叶",
        },
        {
          photo: "step-flower",
          label: "开花",
          text: "4～5 月，花和叶子一起出来，一串串小红花半垂在枝头。",
          caption: "嫩叶间挂着的小花串",
          shoot: "4～5 月回到同一棵树，拍新叶中间垂下来的小花串",
        },
        {
          photo: "samara",
          label: "结翅果",
          text: "花谢后结出成对的小翅果，两片「翅膀」张开成钝角，9 月成熟。",
          caption: "一对张开的小翅果",
          shoot: "夏天找挂在叶子上方的一对小翅果，拍清两片翅膀张开的角度",
        },
        {
          photo: "step-autumn",
          label: "红叶",
          text: "深秋天气变冷，叶子里的叶绿素慢慢分解，红色的花青素多起来，整棵树就红了。",
          caption: "深秋满树红叶",
          shoot: "11 月回到同一棵树，从同一个位置拍满树红叶",
        },
      ],
      cite: ["foc-jzf", "wiki-en", "bj-qiuye"],
    },
    {
      type: "compare",
      title: "绿叶原种和红叶品种",
      before: {
        photo: "green-leaf",
        label: "绿叶鸡爪槭",
        caption: "春夏翠绿的掌状叶",
        shoot: "春夏在公园找一棵绿叶鸡爪槭，拍一张摊开的掌状绿叶",
      },
      after: {
        photo: "red-leaf",
        label: "红叶品种",
        caption: "整片叶子都是酒红色",
        shoot: "同一季节再找一棵常年紫红叶的日本红枫，用同样的横幅角度拍一张叶片对比",
      },
      text: "野生的鸡爪槭春夏是绿叶，深秋才变红；而公园常种的「日本红枫」选育品种，春天新叶一冒出来就是酒红或紫红色的！",
      cite: ["wiki-en"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "它 4～5 月边展叶边开花，9 月翅果成熟；在中国，大家 4～5 月看新叶和 11 月赏秋叶时拍到它最多。我们是哪个月遇见它的？",
      cite: ["foc-jzf"],
    },
    {
      type: "lookalike",
      title: "日本红枫、元宝枫还是三角枫？",
      quiz: true,
      items: [
        {
          name: "元宝枫",
          scientific: "Acer truncatum",
          shot: { photo: "look-ybf", caption: "裂片全缘无锯齿的元宝枫" },
          tells: [
            "叶片通常 5 裂，裂片边缘光溜溜的全缘、没有锯齿",
            "叶片底边常常平平的，像用刀切过一样",
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
        {
          name: "三角枫",
          scientific: "Acer buergerianum",
          shot: { photo: "look-sjf", caption: "秋天变红的三角枫叶片" },
          tells: [
            "叶片只裂成 3 片，中间一片像个三角形，有时干脆不裂",
            "裂片边缘多半光滑，很少有锯齿；叶背发白",
          ],
        },
      ],
      cite: ["foc-jzf", "foc-ybf", "foc-sjf"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "「日本红枫」和「鸡爪槭」是同一种树吗？",
          a: "是同一个物种！植物学正式名叫鸡爪槭（又叫鸡爪枫），园艺师从它里面选出了 1000 多个品种，春天就红叶的品种常被叫作日本红枫。",
          cite: ["foc-jzf", "wiki-en", "wiki-zh"],
        },
        {
          q: "北京的公园里能找到它吗？",
          a: "能！昌平贺新公园的植物调查共记录了 122 种植物，秋色叶树里就有鸡爪槭，和元宝枫、黄栌、银杏一起把秋天染得五彩缤纷。",
          cite: ["bj-hexin"],
        },
        {
          q: "香山红叶里也有它吗？",
          a: "有！香山的红叶树有 8 科 14 种、10 万多株，最多的是黄栌，里面也有鸡爪枫、五角枫、三角枫这些「枫」。",
          cite: ["bj-xiangshan"],
        },
        {
          q: "学名里的 palmatum 是什么意思？",
          a: "意思是「手掌一样的」。18 世纪瑞典植物学家通贝里在日本看到它的叶片像张开的小手掌，就给它起了这个拉丁名字。",
          cite: ["wiki-en"],
        },
        {
          q: "日本人叫它什么？",
          a: "日本人叫它「kaede」，据说是从「青蛙的手」变来的——叶子张开的样子，真像一只小青蛙的手！",
          cite: ["wiki-en"],
        },
        {
          q: "小翅果落地就能发芽吗？",
          a: "不行。它的种子要先经过一段又冷又湿的日子（像过了一个冬天），才肯发芽。",
          cite: ["wiki-en"],
        },
      ],
    },
  ],
  care: "只看、拍照，不折枝条也不揪红叶；地上落下的干红叶和成对小翅果可以捡起来观察，看完了别放进嘴里。",
  nextTime: "数一数同一棵日本红枫上的叶子：是 7 个尖角的多，还是 5 个、9 个尖角的多？摸摸叶边有没有细锯齿。",
  sources: [
    { id: "foc-jzf", title: "Acer palmatum 鸡爪枫", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Acer%20palmatum?t=foc" },
    { id: "foc-ybf", title: "Acer truncatum 元宝枫", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Acer%20truncatum?t=foc" },
    { id: "foc-sjf", title: "Acer buergerianum 三角枫", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Acer%20buergerianum?t=foc" },
    { id: "bj-hexin", title: "贺新公园植物配置分析与提升建议", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml" },
    { id: "bj-xiangshan", title: "金代已为诗人墨客所称道的香山红叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/whgy/whgy_wsgc/201912/t20191206_885638.html" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
    { id: "wiki-en", title: "Acer palmatum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Acer_palmatum" },
    { id: "wiki-zh", title: "鸡爪槭", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E9%B8%A1%E7%88%AA%E6%A7%AD" },
  ],
  by: ["kid", "dad"],
};

export default entry;