import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "wu-dong",
  name: "乌鸫",
  scientific: "Turdus mandarinus",
  kind: "animal",
  // 雄鸟黑身子、橙黄嘴、黄眼圈很好认；雌鸟和小鸟偏褐色，拍到雌鸟时要和别的鸫比一比
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "鸫科", "鸫属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只乌鸫", shoot: "远远拍一只在草坪上走走停停的乌鸫，黄嘴和黑身子都清楚。蹲在草坪边等它走过来，别追；春天清早它常站在屋顶或树尖上唱歌，也可以拍" },
  hello: "黑衣服、橙黄色的嘴，还会学别的鸟叫，连猫叫都会学。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "一只雄乌鸫的侧面", shoot: "远拍一只侧身站着的雄乌鸫（全身黑的那种），嘴、眼睛和脚都看得清。草坪上光线好，手机放大拍；它飞走了就等下一只" },
      points: [
        { x: 0.82, y: 0.34, label: "橙黄色的嘴", detail: "雄鸟的嘴是亮亮的橙黄色。雌鸟的嘴偏褐色，小鸟的嘴发灰。", cite: ["wiki-zh", "bj-2017"] },
        { x: 0.74, y: 0.32, label: "黄色的眼圈", detail: "眼睛周围有一圈细细的黄边。", cite: ["wiki-zh"] },
        { x: 0.48, y: 0.5, label: "黑衣服", detail: "雄鸟全身是黑的。雌鸟是黑褐色，喉咙颜色浅一些。", cite: ["wiki-zh", "cern-wd"] },
        { x: 0.62, y: 0.72, label: "黑褐色的脚", detail: "脚是黑褐色的，常在地上蹦来蹦去。", cite: ["wiki-zh", "bj-2017"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它。3～6 月拍到的最多，5 月最多；8～11 月少很多。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "乌鸫还是乌鸦？",
      quiz: true,
      items: [
        {
          name: "大嘴乌鸦", scientific: "Corvus macrorhynchos",
          shot: { photo: "look-da-zui-wu-ya", caption: "黑嘴巴又粗又大" },
          tells: ["嘴是黑的，又粗又大", "个子大得多，身长 46～59 厘米", "黑羽毛上泛着紫色的光"],
        },
        {
          name: "乌鸫", scientific: "Turdus mandarinus", self: true,
          shot: { photo: "look-wu-dong", caption: "橙黄色的嘴，黄眼圈" },
          tells: ["嘴是橙黄色的，眼睛一圈黄边", "身长 28～29 厘米，比乌鸦小很多", "常在草地上低头找吃的"],
        },
      ],
      cite: ["wiki-lbc", "wiki-zh", "cern-wd"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "乌鸫会学别的声音吗？", a: "会！北京植物园的老师听到「喵喵」叫，一看没有猫，原来是乌鸫在学猫叫。它还会学麻雀和白头鹎。", cite: ["bj-2017"] },
        { q: "乌鸫学叫，是跟谁学的？", a: "科学家录下乌鸫学杜鹃叫，发现几种「学走样」的叫法只在同一片地方的几只乌鸫里有。说明它们也跟邻居学。", cite: ["fu-2024"] },
        { q: "乌鸫怎么找蚯蚓？", a: "它在草地上跑几步、停一下，听一听、看一看，然后突然把嘴扎进土里。蚯蚓和小虫子是它常吃的。", cite: ["wiki-zh"] },
        { q: "乌鸫的窝是什么样的？", a: "像一只杯子。它用泥土把干草和小树枝粘在一起，里面再铺上软软的草和羽毛。", cite: ["wiki-zh"] },
        { q: "冬天乌鸫会飞走吗？", a: "北京的不会。北京的野生动物名录里，乌鸫是「留鸟」：一年到头都住在北京。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "远远看，不追。春夏它在养宝宝，靠近窝会被它尖叫着赶，看到窝就绕开；捡到小鸟先告诉大人。",
  nextTime: "清早听一听：屋顶或树尖上，有没有一只黑鸟在唱歌？数数它唱了几种调子。",
  sources: [
    { id: "wiki-zh", title: "中国黑鸫（乌鸫）", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9C%8B%E9%BB%91%E9%B6%87" },
    { id: "cern-wd", title: "乌鸫", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E4%B9%8C%E9%B8%AB" },
    { id: "bj-2017", title: "北京观鸟地图", by: "北京市园林绿化局（转载北京晚报），2017", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/201704/t20170401_116269.shtml" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "fu-2024", title: "Learning mimetic cuckoo call innovations from neighbors in a Chinese songbird", by: "Scientific Reports, 2024", url: "https://doi.org/10.1038/s41598-024-74860-0" },
    { id: "wiki-lbc", title: "Large-billed crow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Large-billed_crow" },
  ],
  by: ["kid", "dad"],
};

export default entry;
