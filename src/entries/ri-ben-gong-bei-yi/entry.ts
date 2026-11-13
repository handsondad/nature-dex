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
  hello: "公园泥地上匆匆赶路的大黑蚂蚁，从侧面看，胸背弯成一道圆润的弓弧。",
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
          x: 0.54,
          y: 0.42,
          label: "弯成弧线的「弓背」",
          detail: "从侧面看，胸部背板连成一道平滑圆润的弧线，中间没有凹沟，「弓背蚁」就是这么得名的。",
          cite: ["wiki-gen", "antwiki-key"],
        },
        {
          x: 0.42,
          y: 0.46,
          label: "直立的腹柄结",
          detail: "胸部和圆肚子之间的细腰上，竖着一枚小片状的腹柄结。",
          cite: ["wiki-gen"],
        },
        {
          x: 0.25,
          y: 0.52,
          label: "哑光黑配细金毛",
          detail: "工蚁全身哑光黑色，长约 0.7～1.4 厘米，腹部一节节边缘长着细细的淡金色绒毛。",
          cite: ["wiki-zh"],
        },
        {
          x: 0.74,
          y: 0.38,
          label: "弯折触角与大颚",
          detail: "一对膝状弯折的触角不停轻点探路，嘴前长着钳子似的大颚，能搬猎物也能守卫巢口。",
          cite: ["wiki-gen", "ozaki-2005"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看大头工蚁的大颚",
      shot: {
        photo: "head-macro",
        caption: "大型工蚁宽宽的脑袋和一对大颚",
        shoot: "遇到停下来探路的大头工蚁时，隔开安全距离微距拍它的正面脑袋和触角；不伸手碰",
      },
      text: "凑近看大工蚁宽宽的黑色脑袋：两侧是复眼，前面张开一对厚实有齿的大颚，既能咬碎死昆虫搬回窝，守卫巢口时咬人也很疼，所以我们只看不抓。",
      zoom: 2.5,
      start: [0.5, 0.55],
      cite: ["wiki-zh", "wiki-gen"],
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
            "个子小一些（约 0.4～0.8 厘米），同一窝工蚁体型差不多大",
            "侧面看胸背中间有一道明显的凹沟，不是平滑的一整道圆弧",
          ],
        },
        {
          name: "日本弓背蚁",
          scientific: "Camponotus japonicus",
          self: true,
          shot: { photo: "look-rbgby", caption: "日本弓背蚁" },
          tells: [
            "个子大（工蚁约 0.7～1.4 厘米），同一窝有大头兵蚁和中小工蚁之分",
            "侧面看胸部背板连成平滑圆弧，腹部有细微金黄色毛环",
          ],
        },
      ],
      cite: ["wiki-zh", "wiki-gen", "wiki-formica", "antwiki-key"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4～9 月经常拍到它，5 月是高峰；5 月下旬到 7 月上旬雨后，长翅膀的雌蚁和雄蚁会飞出巢口「婚飞」。冬天躲在深土巢里越冬，12～2 月几乎见不到。我们是哪个月遇见它的？",
      cite: ["wiki-zh", "antwiki"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "同一窝蚂蚁，为什么有的头特别大？",
          a: "工蚁都是不长翅膀的雌蚁，但分大、中、小不同体型。大头工蚁也叫兵蚁，脑袋宽、大颚壮，专门负责守卫和咬开硬食物。",
          cite: ["wiki-zh", "wiki-gen"],
        },
        {
          q: "蚂蚁为什么总围着小蚜虫转？",
          a: "蚜虫吸植物汁液后，会从屁股排出甜甜的「蜜露」。日本弓背蚁用触角轻拍蚜虫接蜜露喝，还会帮蚜虫赶走天敌，像在放牧一样。",
          cite: ["wiki-zh", "wiki-gen", "antwiki"],
        },
        {
          q: "初夏雨后长翅膀的大黑蚂蚁是谁？",
          a: "那是准备「婚飞」的年轻雌蚁和雄蚁。飞到空中交配后，新蚁后会脱掉翅膀，钻进泥土筑新巢、产卵当妈妈。",
          cite: ["wiki-zh", "wiki-gen"],
        },
        {
          q: "两只蚂蚁碰一碰触角在说什么？",
          a: "它们的触角上有专门的气味感受器，轻轻一碰就能闻出对方表皮的气味密码，一秒钟分清是不是自己窝里的姐妹。",
          cite: ["ozaki-2005", "wiki-gen"],
        },
      ],
    },
  ],
  care: "蹲下来远远看，不要拿土块堵蚁洞、不要踩，也别用手抓。大工蚁的大颚咬人很疼，还会从腹部末端喷酸液。",
  nextTime: "下次在树干或草茎上找一找：同一窝大黑蚂蚁里，有没有脑袋特别宽的大工蚁？它们有没有围着蚜虫？",
  sources: [
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
      id: "antwiki",
      title: "Camponotus japonicus",
      by: "AntWiki",
      url: "https://www.antwiki.org/wiki/Camponotus_japonicus",
    },
    {
      id: "antwiki-key",
      title: "Key to North American Genera of Formicinae",
      by: "AntWiki",
      url: "https://antwiki.org/wiki/Key_to_North_American_Genera_of_Formicinae",
    },
    {
      id: "wiki-formica",
      title: "Formica",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Formica",
    },
    {
      id: "ozaki-2005",
      title: "Ant Nestmate and Non-Nestmate Discrimination by a Chemosensory Sensillum",
      by: "Science (2005)",
      url: "https://doi.org/10.1126/science.1105244",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
