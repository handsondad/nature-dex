import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// GBIF 接受种名为 Prunus cerasifera（野生原种中文名樱桃李）；华北常见的紫叶李为紫叶类型 f. atropurpurea。
const entry: Entry = {
  id: "zi-ye-li",
  name: "紫叶李",
  scientific: "Prunus cerasifera",
  kind: "plant",
  // 北方公园还有美人梅（重瓣、紫叶）等相似的树，拍到单瓣 5 瓣长梗花和紫叶同框再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "蔷薇目", "蔷薇科", "李属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "满冠紫红色叶子的紫叶李",
    shoot: "在公园或路边拍一整棵紫叶李：紫红色的树冠和深色树干都拍进画面",
  },
  hello: "一身紫红叶子，春天花和新叶一起开，粉白的小花吊在细梗上。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "flower-leaf",
        caption: "开花的紫叶李枝条，花和紫红叶子一起长",
        shoot: "开花时靠近低枝拍一张：粉白小花、细花梗和刚长出的紫红嫩叶同框",
      },
      points: [
        {
          x: 0.43,
          y: 0.42,
          label: "单瓣小花",
          detail: "花是单瓣的，5 片花瓣，白色或淡粉色，直径 2～2.5 厘米，中间有一大把雄蕊。",
          cite: ["foc-ytl"],
        },
        {
          x: 0.6,
          y: 0.36,
          label: "花有细梗",
          detail: "每朵花下面有一根 1～2 厘米长的细梗，花不是贴在枝上开的。",
          cite: ["foc-ytl"],
        },
        {
          x: 0.19,
          y: 0.39,
          label: "花叶一起长",
          detail: "开花的时候，紫红色的新叶已经长出来了。山桃开花时，枝上还没有叶子。",
          cite: ["foc-ytl", "bjrb-guide"],
        },
        {
          x: 0.73,
          y: 0.53,
          label: "暗红小枝",
          detail: "小枝是暗红色的，光溜溜的，没有毛。",
          cite: ["foc-ytl"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看花梗和花心",
      shot: {
        photo: "flower-macro",
        caption: "紫叶李的花，每朵都吊在一根细梗上",
        shoot: "开花时靠近拍一小段花枝，让细花梗和花心的雄蕊都清楚",
      },
      text: "每朵花都吊在一根细细的小梗上。再看花心，有一大把雄蕊，书上说有 25～30 根，数数看有多少？",
      start: [0.32, 0.6],
      cite: ["foc-ytl"],
    },
    {
      type: "steps",
      title: "从小花到小李子",
      steps: [
        {
          photo: "step-flower",
          label: "开花",
          text: "4 月前后开花，花白里带粉，紫红的新叶也跟着冒出来。",
          caption: "一朵刚开的花，吊在细梗上",
          shoot: "开花时微距拍一朵花和它的花梗、花萼",
        },
        {
          photo: "step-leaf",
          label: "长满叶",
          text: "花谢以后，叶子越长越密。叶子椭圆形，边上有细细的圆齿。",
          caption: "紫红色的叶子，边上有小圆齿",
          shoot: "5～6 月拍一枝阳光下的紫红叶子",
        },
        {
          photo: "step-fruit",
          label: "结李子",
          text: "8 月果子熟了，圆圆的，直径 2～3 厘米，外面有一层薄薄的白粉。",
          caption: "挂在枝上的一颗红色小李子",
          shoot: "8 月前后拍挂在叶子间的果子",
        },
      ],
      cite: ["foc-ytl"],
    },
    {
      type: "compare",
      title: "开花时和夏天",
      before: {
        photo: "same-spring",
        label: "开花时",
        caption: "满树粉白的花",
        shoot: "开花时站在树前拍整个树冠",
      },
      after: {
        photo: "same-summer",
        label: "夏天",
        caption: "满树紫红的叶子",
        shoot: "夏天站在同一个地方，用同样的角度再拍一张",
      },
      text: "开花时它是一团粉白，到了夏天就成了一棵紫红色的树。这两张拍的不是同一棵树，下次我们自己在同一个地方拍两次。",
      cite: ["foc-ytl"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "书上说它 4 月开花，8 月果子熟。在中国，网上的观察记录还很少，3 月和 5 月多一点。北京天坛的春季赏花名单里也有它。",
      cite: ["foc-ytl", "bj-huahai"],
    },
    {
      type: "lookalike",
      title: "粉白的春花，是哪棵树？",
      quiz: true,
      items: [
        {
          name: "山桃",
          scientific: "Prunus davidiana",
          shot: { photo: "look-st", caption: "山桃：枝上没叶子，花贴着枝开" },
          tells: ["开花时枝上还没有叶子", "花几乎贴在枝上，看不到长梗", "树皮红褐色，亮亮的"],
        },
        {
          name: "紫叶李",
          scientific: "Prunus cerasifera",
          self: true,
          shot: { photo: "look-zyl", caption: "紫叶李：花和紫红叶子一起开" },
          tells: ["花和紫红色的叶子一起长出来", "花下面有一根细长的梗", "花小，单瓣，5 片花瓣"],
        },
        {
          name: "美人梅",
          scientific: "Prunus × blireana",
          shot: { photo: "look-mrm", caption: "美人梅：重瓣花，一层层的" },
          tells: ["花是重瓣的，一朵有好多层花瓣", "叶子也是紫红色，形状像杏叶"],
        },
      ],
      cite: ["foc-ytl", "foc-st", "bjrb-guide", "bj-yym"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它的祖先也是紫叶子吗？",
          a: "不是。野生的樱桃李叶子是绿的，我国新疆就有野生的。北方公园里种的紫叶李，是它的紫叶类型。",
          cite: ["foc-ytl"],
        },
        {
          q: "冬天叶子掉光了，还认得出吗？",
          a: "可以试试。它的小枝是暗红色的，光溜溜没有毛；冬天枝上的芽是紫红色的。",
          cite: ["foc-ytl"],
        },
        {
          q: "李花有味道吗？",
          a: "有。北京市园林绿化局的赏花指南说，李花小，有香味。下次可以凑近闻一闻，不摘花。",
          cite: ["bjrb-guide"],
        },
        {
          q: "它能长多高？",
          a: "它是灌木或小乔木，最高能长到 8 米左右，差不多两三层楼那么高。",
          cite: ["foc-ytl"],
        },
        {
          q: "北京哪儿能看到它？",
          a: "很多公园都种。昌平的贺新公园把它当成骨干树；天坛的春季赏花名单里也有紫叶李。",
          cite: ["bj-hexin", "bj-huahai"],
        },
      ],
    },
  ],
  care: "只看、拍照、闻一闻，不折花枝；路边和公园树上的果子可能打过药，不摘也不捡来吃。",
  nextTime: "春天看到开粉白花的树，先看枝上有没有紫红叶子，再找找花下面的细梗。",
  sources: [
    {
      id: "foc-ytl",
      title: "Prunus cerasifera 樱桃李",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200011156",
    },
    {
      id: "foc-st",
      title: "Amygdalus davidiana 山桃",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010610",
    },
    {
      id: "bjrb-guide",
      title: "早春桃李杏梅樱花，该如何分辨？市园林绿化局指南来了",
      by: "北京日报",
      url: "https://www.sohu.com/a/768507762_163278",
    },
    {
      id: "bj-yym",
      title: "【榆叶梅】榆叶梅与碧桃及美人梅的区别",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hhzs/201604/t20160415_118513.shtml",
    },
    {
      id: "bj-hexin",
      title: "贺新公园植物配置分析与提升建议",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml",
    },
    {
      id: "bj-huahai",
      title: "2024年春季全市公园赏花片区统计表",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ggfw/gyfjqyl/gyhd/202404/t20240430_3649525.shtml",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
