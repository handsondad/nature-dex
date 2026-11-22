import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yu-lan",
  name: "玉兰",
  pinyin: "yù lán",
  // 《中国植物志》和植物智用 Yulania denudata；GBIF 和 iNaturalist 接受的是 Magnolia denudata
  scientific: "Magnolia denudata",
  kind: "plant",
  // 城里还种望春玉兰和二乔玉兰，要数清 9 片花被片是不是一样长、都是白的
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "木兰目", "木兰科", "木兰属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵玉兰", shoot: "我们遇见的那一棵：开花时拍整棵树，满树白花、还没有叶子" },
  hello: "冬天枝头挂着毛茸茸的花苞，春天还没长叶，大白花就先开了。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "id-flower", caption: "光秃秃的枝头，白花和花苞挤在一起", shoot: "开花时拍一根枝：开着的白花、没开的毛花苞和还没长叶的枝条都在画面里" },
      points: [
        { x: 0.54, y: 0.3, label: "白色花被片", detail: "白色的「花瓣」叫花被片，一共 9 片，大小差不多，基部常带一点粉红。", cite: ["iplant-yl"] },
        { x: 0.42, y: 0.45, label: "毛茸茸的花苞", detail: "花苞和花梗上密密地长着淡灰黄色的长绢毛，摸起来像丝绒。", cite: ["iplant-yl"] },
        { x: 0.84, y: 0.27, label: "没有叶子的枝", detail: "玉兰先开花、后长叶：开花的时候，枝上还一片叶子都没有。", cite: ["iplant-yl"] },
        { x: 0.8, y: 0.66, label: "大大的花", detail: "花朝上直直地开，直径 10～16 厘米，比大人的手掌还宽，闻着香香的。", cite: ["iplant-yl"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花心",
      shot: { photo: "center-macro", caption: "满树开花的玉兰，看得见花心", shoot: "找一朵开得很大的花，从正上方稍斜一点拍花心" },
      text: "花心外面一圈是很多短短的雄蕊；中间那根小圆柱是雌蕊群，淡绿色，长 2～2.5 厘米，上面挤着许多小雌蕊。",
      zoom: 2.5,
      start: [0.59, 0.56],
      cite: ["iplant-yl"],
    },
    {
      type: "compare",
      title: "冬天的花苞，春天的花",
      before: { photo: "same-bud", label: "冬天", caption: "毛茸茸的花苞", shoot: "冬天在枝头找一个毛茸茸的花苞，记住是哪一根枝、站在哪儿拍" },
      after: { photo: "same-flower", label: "春天", caption: "花苞开成了大白花", shoot: "开花时回到同一根枝条、同一个角度再拍一张" },
      text: "冬天枝头的花苞裹着一层长毛，到春天才打开。拖动分界线比一比；等我们自己拍到同一个花苞，记下两次的日期，算算隔了多少天。",
      cite: ["iplant-yl", "bj-djs"],
    },
    {
      type: "steps",
      title: "从花苞到果壳",
      steps: [
        { photo: "step-bud", label: "毛苞", text: "花谢后，枝头又长出新花苞。它要穿着毛外套熬过整个冬天，第二年春天才开。", caption: "早春枝头毛茸茸的花苞", shoot: "冬天或早春拍一个毛花苞的特写", },
        { photo: "step-bloom", label: "开花", text: "早春叶子还没长出来，大白花就先开了。北京城里一般 3 月底到 4 月初开。", caption: "光枝上开着的一朵白花", shoot: "3～4 月拍一朵刚开的白花" },
        { photo: "step-green", label: "青果", text: "花谢以后长出大叶子，花心慢慢长成一根圆柱形的聚合果。", caption: "叶子间绿色的聚合果", shoot: "5～6 月在叶子间找绿色的果串" },
        { photo: "step-fruit", label: "弯果", text: "果串长到 12～15 厘米。种在园子里的常常是弯的：有些小格子没发育。", caption: "长大的、弯弯的果串", shoot: "8～9 月拍长大的果串" },
        { photo: "step-dry", label: "空壳", text: "果子熟了一格格裂开，露出红色的心形种子；冬天枝头还挂着褐色的木质果壳。", caption: "冬天挂在枝头的空果壳", shoot: "秋冬抬头找枝头挂着的褐色果壳" },
      ],
      cite: ["iplant-yl", "bj-djs"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "植物智记录它 2～3 月开花，北京城里一般 3 月底到 4 月初才开；在中国，大家 3 月拍到它最多。我们是哪个月遇见它的？",
      cite: ["iplant-yl", "bj-djs"],
    },
    {
      type: "lookalike",
      title: "玉兰家的花，别认错",
      quiz: true,
      items: [
        {
          name: "紫玉兰", scientific: "Magnolia liliiflora",
          shot: { photo: "look-zyl", caption: "紫玉兰" },
          tells: ["花被片外面是紫色或紫红色", "花和叶子差不多同时长出来", "一丛灌木，最高 3 米左右"],
        },
        {
          name: "玉兰", scientific: "Magnolia denudata", self: true,
          shot: { photo: "look-yl", caption: "玉兰" },
          tells: ["9 片花被片都是白的，大小差不多", "开花时枝上还没有叶子"],
        },
        {
          name: "二乔玉兰", scientific: "Magnolia × soulangeana",
          shot: { photo: "look-eq", caption: "二乔玉兰" },
          tells: ["花被片浅红到深红，有时近白色", "最外面 3 片明显短一些，只有里面的三分之二长"],
        },
      ],
      cite: ["iplant-zyl", "iplant-yl", "iplant-eq"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "花苞为什么要穿毛外套？", a: "科学家用红外热像仪测过：玉兰花苞上又密又长的毛，能让花苞里面比外面暖和。", cite: ["wang-2013"] },
        { q: "玉兰花会自己发热？", a: "会！开花时花心会升温两次：先是雌蕊准备好的时候热约 6 小时，一天后散花粉时再热约 4 小时。", cite: ["wang-2013"] },
        { q: "粉红色的「玉兰」是谁？", a: "常是二乔玉兰：它是玉兰和紫玉兰杂交生出来的，花被片浅红到深红色。", cite: ["iplant-eq"] },
        { q: "北京最老的玉兰在哪儿？", a: "在西山大觉寺的四宜堂，树龄已经超过 300 年。山里冷，它比城里的玉兰晚开半个月左右。", cite: ["bj-djs"] },
        { q: "哪座城市把它选成了市花？", a: "上海。1986 年，白玉兰经过公开评选，成了上海的市花。", cite: ["sh-shihua"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝、不摘花。落在地上的花瓣可以捡起来看，不放进嘴里。",
  nextTime: "冬天去找找玉兰枝头毛茸茸的花苞：一根枝上有几个？",
  sources: [
    { id: "iplant-yl", title: "玉兰 Yulania denudata", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Yulania%20denudata" },
    { id: "iplant-zyl", title: "紫玉兰 Yulania liliiflora", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Yulania%20liliiflora" },
    { id: "iplant-eq", title: "二乔玉兰 Yulania × soulangeana", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Yulania%20%C3%97%20soulangeana" },
    { id: "wang-2013", title: "Temperature regulation of floral buds and floral thermogenicity in Magnolia denudata (Magnoliaceae)", by: "Wang et al., Trees (2013)", url: "https://doi.org/10.1007/s00468-013-0921-x" },
    { id: "bj-djs", title: "大觉寺文化｜古寺兰香大觉寺的古玉兰", by: "北京市人民政府（首都之窗）", url: "https://www.beijing.gov.cn/renwen/sy/whkb/201804/t20180404_1863377.html" },
    { id: "sh-shihua", title: "市花白玉兰绽放春风里", by: "上海市人民政府（转载自解放日报）", url: "https://www.shanghai.gov.cn/nw4411/20260310/45a5c7139557407f87f9e9679fa4994d.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
