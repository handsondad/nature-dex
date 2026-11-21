import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 华北公园泥地上常见的大黑蚂蚁多是日本弓背蚁，但和同属近亲或日本山蚁远看相似，看弓形胸背、单枚腹柄结与腹端金毛环确认。
const entry: Entry = {
  id: "ri-ben-gong-bei-yi",
  name: "日本弓背蚁",
  scientific: "Camponotus japonicus",
  kind: "animal",
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "膜翅目", "蚁科", "弓背蚁属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "我们遇见的那只日本弓背蚁",
    shoot: "春夏在公园泥地或树干边，蹲下来从侧面微距拍一只大黑蚂蚁：弧形的弓背和腹柄结要清楚；远远拍，不抓不堵洞",
  },
  hello: "公园泥地上匆匆赶路的大黑蚂蚁，从侧面看，胸背弯成一道圆润的弓。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "worker-side",
        caption: "从侧面看一只日本弓背蚁工蚁",
        shoot: "贴近地面从正侧面微距拍工蚁，把头、弯成弧线的胸背、腹柄结和圆肚子都拍进画面",
      },
      points: [
        {
          x: 0.55,
          y: 0.36,
          label: "弯成弧线的「弓背」",
          detail: "从侧面看，胸部背面连成一道平滑的弧线，中间没有凹下去的沟，「弓背蚁」就是这么得名的。",
          cite: ["wiki-gen"],
        },
        {
          x: 0.61,
          y: 0.58,
          label: "细腰上一个小鳞片",
          detail: "胸部和圆肚子之间的细腰上，只竖着一枚小片状的「腹柄结」。",
          cite: ["wiki-gen"],
        },
        {
          x: 0.72,
          y: 0.67,
          label: "黑肚子带细金毛",
          detail: "工蚁全身是不反光的黑色，肚子一节一节的边上长着细细的淡金色毛，像一圈圈金环。",
          cite: ["wiki-zh"],
        },
        {
          x: 0.33,
          y: 0.2,
          label: "拐个弯的触角",
          detail: "一对触角在中间拐个弯，像胳膊肘。它不停地用触角轻点地面和同伴，靠闻气味认路、认朋友。",
          cite: ["adw-formicidae", "ozaki-2005"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看大工蚁的脑袋",
      shot: {
        photo: "head-macro",
        caption: "大工蚁宽宽的脑袋和一对大颚",
        shoot: "遇到停下来探路的大头工蚁时，隔开距离微距拍它的正面脑袋和触角；不伸手碰",
      },
      text: "两边各有一只复眼，中间伸出一对拐弯的触角，嘴前是一对带小齿的大颚。大工蚁的头宽约 3.5 毫米，比小工蚁宽一大截。",
      zoom: 2.5,
      start: [0.51, 0.47],
      cite: ["adw-formicidae", "insects-2023"],
    },
    {
      type: "compare",
      title: "婚飞季的两种有翅蚂蚁",
      before: {
        photo: "male",
        label: "雄蚁",
        caption: "细瘦的有翅雄蚁",
        shoot: "初夏雨后，在巢口附近找到长翅膀的小个子雄蚁，远远拍侧面",
      },
      after: {
        photo: "new-queen",
        label: "新蚁后",
        caption: "大个子的有翅新蚁后",
        shoot: "同一个季节，在巢口附近找到长翅膀的大个子新蚁后，从侧面拍",
      },
      text: "初夏，巢里会钻出两种长翅膀的蚂蚁。雄蚁身子细、脑袋小，约 1 厘米；新蚁后大得多，约 1.5 厘米，胸部鼓鼓的。",
      cite: ["insects-2023", "adw-formicidae"],
    },
    {
      type: "steps",
      title: "一窝大黑蚂蚁的开始",
      steps: [
        {
          photo: "step-dealate",
          label: "脱翅膀",
          text: "婚飞交配后，新蚁后的翅膀脱落，它去找新地方筑巢、产卵。",
          caption: "脱掉翅膀的新蚁后",
          shoot: "初夏地面上独自爬行、胸部有翅膀断痕的大个子蚁后，远远拍侧面",
        },
        {
          photo: "step-brood",
          label: "卵和茧",
          text: "黄色小颗粒是卵，卵变成没腿的幼虫。幼虫长大后吐丝做茧，在茧里化蛹。",
          caption: "工蚁照顾一堆卵和茧",
          shoot: "不要挖蚁巢。只在石头被翻开时（再轻轻放回）远远拍一眼",
        },
        {
          photo: "step-nest",
          label: "大家庭",
          text: "新工蚁从茧里出来，接着照顾弟弟妹妹、出门找吃的。土里的巢口常有好几个。",
          caption: "巢口进进出出的工蚁",
          shoot: "找到泥地上的巢口后，远远拍工蚁进进出出的样子，不堵洞",
        },
      ],
      cite: ["adw-formicidae", "wiki-gen", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4～9 月常拍到它，5 月最多；5 月下旬到 7 月上旬是它婚飞的季节。12～2 月很少有人拍到。我们是哪个月遇见它的？",
      cite: ["wiki-zh"],
    },
    {
      type: "lookalike",
      title: "路边的黑蚂蚁，弓背还是凹背？",
      quiz: true,
      items: [
        {
          name: "日本山蚁",
          scientific: "Formica japonica",
          shot: { photo: "look-fj", caption: "日本山蚁" },
          tells: [
            "个子小一些，身长不到 1 厘米",
            "侧面看胸背中间凹下去一块，不是一整道圆弧",
          ],
        },
        {
          name: "日本弓背蚁",
          scientific: "Camponotus japonicus",
          self: true,
          shot: { photo: "look-rbgby", caption: "日本弓背蚁" },
          tells: [
            "个子大，同一窝里有大头工蚁，也有小个子工蚁",
            "侧面看胸背连成平滑圆弧，肚子上有细细的金毛",
          ],
        },
      ],
      cite: ["wiki-gen", "wiki-formica", "insects-2023", "wiki-zh"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "同一窝蚂蚁，为什么有的头特别大？",
          a: "工蚁分大小不同的个子。科学家量过：小工蚁身长约 1 厘米，大工蚁约 1.3 厘米，脑袋却宽了一大截，大颚也更有劲。",
          cite: ["insects-2023"],
        },
        {
          q: "蚂蚁为什么总围着小蚜虫转？",
          a: "蚜虫会排出甜甜的「蜜露」。日本弓背蚁常爬到植物上喝蜜露，还会用触角轻拍蚜虫、帮它们赶走天敌。",
          cite: ["insects-2023", "wiki-gen"],
        },
        {
          q: "两只蚂蚁碰一碰触角在说什么？",
          a: "科学家在日本弓背蚁触角上找到一种小小的感受器：只有碰到别窝蚂蚁身上的气味时，它才会有反应。",
          cite: ["ozaki-2005"],
        },
        {
          q: "蚂蚁为什么老是「洗」触角？",
          a: "它前腿上长着专门的「触角梳」。科学家发现，触角不梳干净，蚂蚁就闻不太出报警气味，也更容易认错敌友。",
          cite: ["mizutani-2021"],
        },
        {
          q: "一窝日本弓背蚁有多少只？",
          a: "大的窝可以有 4000 多只工蚁，蚁后有 1～3 只。巢穴往土里能挖 1 米多深。",
          cite: ["insects-2025", "wiki-zh"],
        },
        {
          q: "每只工蚁都一样勤快吗？",
          a: "不一样！科学家天天记录每只工蚁出门几次，发现有的几乎天天出门找吃的，有的很少出门。",
          cite: ["goko-2023"],
        },
      ],
    },
  ],
  care: "蹲下来远远看，不堵蚁洞、不踩，也别用手抓。它会咬人，还会从肚子末端喷出蚁酸。",
  nextTime: "下次在树干或草茎上找一找：同一窝大黑蚂蚁里，有没有脑袋特别宽的大工蚁？它们有没有围着蚜虫？",
  sources: [
    {
      id: "insects-2023",
      title: "Chemical Components of Dufour's and Venom Glands in Camponotus japonicus (Hymenoptera, Formicidae)",
      by: "Insects (2023)",
      url: "https://doi.org/10.3390/insects14070664",
    },
    {
      id: "insects-2025",
      title: "Impact of Polystyrene Micro- and Nanoplastics on the Biological Traits of the Japanese Carpenter Ant, Camponotus japonicus",
      by: "Insects (2025)",
      url: "https://doi.org/10.3390/insects16030292",
    },
    {
      id: "ozaki-2005",
      title: "Ant Nestmate and Non-Nestmate Discrimination by a Chemosensory Sensillum",
      by: "Science (2005)",
      url: "https://doi.org/10.1126/science.1105244",
    },
    {
      id: "mizutani-2021",
      title: "Antenna Cleaning Is Essential for Precise Behavioral Response to Alarm Pheromone and Nestmate–Non-Nestmate Discrimination in Japanese Carpenter Ants (Camponotus japonicus)",
      by: "Insects (2021)",
      url: "https://doi.org/10.3390/insects12090773",
    },
    {
      id: "goko-2023",
      title: "Characteristics of daily foraging activity of Camponotus japonicus via time series analysis",
      by: "PLOS ONE (2023)",
      url: "https://doi.org/10.1371/journal.pone.0293455",
    },
    {
      id: "adw-formicidae",
      title: "Formicidae (ants)",
      by: "Animal Diversity Web",
      url: "https://animaldiversity.org/accounts/Formicidae/",
    },
    {
      id: "wiki-zh",
      title: "日本弓背蚁",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E5%BC%93%E8%83%8C%E8%9F%BB",
    },
    {
      id: "wiki-gen",
      title: "Carpenter ant (Camponotus)",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Carpenter_ant",
    },
    {
      id: "wiki-formica",
      title: "Formica",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Formica",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
