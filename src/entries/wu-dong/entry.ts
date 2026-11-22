import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "wu-dong",
  name: "乌鸫",
  pinyin: "wū dōng",
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
      shot: { photo: "side-view", caption: "草坪上一只雄乌鸫的侧面", shoot: "远拍一只侧身站着的雄乌鸫（全身黑的那种），嘴、眼睛和脚都看得清。草坪上光线好，手机放大拍；它飞走了就等下一只" },
      points: [
        { x: 0.463, y: 0.338, label: "橙黄色的嘴", detail: "雄鸟的嘴是亮亮的橙黄色。雌鸟的嘴颜色暗一些，小鸟的嘴发灰。", cite: ["cern-wd", "bj-2017"] },
        { x: 0.54, y: 0.47, label: "全身黑衣服", detail: "雄鸟从头到尾都是黑的。雌鸟背上黑褐色，肚子深褐色。", cite: ["cern-wd"] },
        { x: 0.74, y: 0.59, label: "比麻雀大很多", detail: "从嘴尖到尾巴尖有 28～29 厘米长，比麻雀大很多。", cite: ["cern-wd", "bj-2017"] },
        { x: 0.59, y: 0.635, label: "黑褐色的脚", detail: "脚是黑褐色的。它常在草地上跑几步、停一下。", cite: ["csdb-wd", "wiki-zh"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看黄眼圈",
      shot: { photo: "head", caption: "树枝上一只雄乌鸫的头", shoot: "雄乌鸫停在光秃秃的树枝上时，用手机放大拍它的头：嘴和眼圈都要清楚" },
      text: "把放大镜移到它的头上：橙黄色的嘴旁边，眼睛外面还有一圈细细的黄边，在黑脑袋上特别显眼。",
      zoom: 2.8,
      start: [0.37, 0.23],
      cite: ["cern-wd", "wiki-zh"],
    },
    {
      type: "compare",
      title: "小时候身上有斑点",
      before: { photo: "juvenile", label: "小乌鸫", caption: "胸前满是褐色斑点的小乌鸫", shoot: "夏天草地或树上胸前有斑点、嘴发暗的小乌鸫，侧身远拍" },
      after: { photo: "adult-male", label: "长大的雄鸟", caption: "全身黑、嘴橙黄的雄乌鸫", shoot: "同样侧身站在树枝上的雄乌鸫，远拍" },
      text: "刚离窝的小乌鸫背上棕褐色，胸前布满褐色斑点，嘴也发暗。长大后的雄鸟全身黑，嘴变成橙黄色。",
      cite: ["csdb-wd", "wiki-zh", "bj-2017"],
    },
    {
      type: "steps",
      title: "从搭窝到出窝",
      steps: [
        { photo: "step-build", label: "衔泥草", text: "春天，乌鸫妈妈叼来湿泥和草。窝全靠妈妈来搭，要搭七到九天。", caption: "水边叼着一团湿泥草的雌乌鸫", shoot: "春天远远拍叼着泥或草的乌鸫，别跟着它找窝" },
        { photo: "step-nest", label: "碗形窝", text: "窝像一只碗，草和稀泥糊在一起，干了以后非常结实，常搭在树杈上。", caption: "树杈上的乌鸫窝", shoot: "只在路边远远拍高处的鸟窝，不靠近、不爬树" },
        { photo: "step-sit", label: "孵蛋", text: "窝里有 4～6 个淡蓝灰色、带褐色斑点的蛋。孵 14～15 天，小鸟就出壳了。", caption: "趴在窝上的乌鸫", shoot: "不要去拍有鸟在孵蛋的窝，这一步用别人的照片就好" },
        { photo: "step-chick", label: "喂宝宝", text: "爸爸妈妈一起喂宝宝，叼来蚯蚓、毛毛虫和小虫子。", caption: "给窝里小鸟喂食的乌鸫妈妈", shoot: "不要靠近鸟窝拍，这一步用别人的照片就好" },
        { photo: "step-leave", label: "出窝了", text: "小鸟出窝后就不再回窝，还要爸爸妈妈照顾喂几天，才能自己生活。", caption: "刚出窝不久、胸前有斑点的小乌鸫", shoot: "初夏草地上胸前有斑点的小乌鸫，远远拍，别去捡它" },
      ],
      cite: ["csdb-wd"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它。3～6 月拍到的最多，5 月最多；8～11 月少很多。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "黑黑的鸟，别认错",
      quiz: true,
      items: [
        {
          name: "大嘴乌鸦", scientific: "Corvus macrorhynchos",
          shot: { photo: "look-da-zui-wu-ya", caption: "黑嘴巴又粗又大的大嘴乌鸦" },
          tells: ["嘴是黑的，又粗又厚", "个子大得多，身长 45～57 厘米", "叫声是粗哑的「啊、啊」"],
        },
        {
          name: "乌鸫", scientific: "Turdus mandarinus", self: true,
          shot: { photo: "look-wu-dong", caption: "橙黄色的嘴，黄眼圈" },
          tells: ["嘴是橙黄色的，眼睛一圈黄边", "身长 28～29 厘米，全身黑", "常在草地上跑几步、停一下"],
        },
        {
          name: "灰椋鸟", scientific: "Spodiopsar cineraceus",
          shot: { photo: "look-hui-liang-niao", caption: "脸上有白斑的灰椋鸟" },
          tells: ["黑脑袋两边有白色的斑", "嘴是橙黄色，嘴尖却是黑的", "身上灰褐色，脚是橙色，常一大群一起找吃的"],
        },
      ],
      cite: ["cern-crow", "cern-wd", "cern-hln", "csdb-hln"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "乌鸫会学别的声音吗？", a: "会！北京植物园的老师听到「喵喵」叫，一看没有猫，原来是乌鸫在学猫叫。它还会学麻雀和白头鹎。", cite: ["bj-2017"] },
        { q: "乌鸫学叫，是跟谁学的？", a: "科学家录下乌鸫学杜鹃叫，发现几种「学走样」的叫法只在同一片地方的几只乌鸫里有。说明它们也跟邻居学。", cite: ["fu-2024"] },
        { q: "乌鸫一顿能吃多少虫子？", a: "科学家检查过乌鸫的胃，有一只一次吃下了 100 条蝇蛆！它还爱吃蚯蚓、蝼蛄，秋冬也吃樟树果。", cite: ["csdb-wd"] },
        { q: "乌鸫一直住在北京吗？", a: "1995 年的《中国动物志》写它主要住在秦岭以南。现在它北到北京都有，在北京还是一年四季都在的留鸟。", cite: ["csdb-wd", "bow-chibla1", "bj-list"] },
        { q: "孵蛋的时候，乌鸫爸爸干什么？", a: "妈妈孵蛋，爸爸在旁边站岗。有人或大鸟靠近，它就「呷呷呷」急叫，还会冲上去赶走大鸟。", cite: ["csdb-wd"] },
        { q: "北京的乌鸫受保护吗？", a: "受保护。北京的野生动物名录里，乌鸫被列为北京市重点保护的鸟。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "远远看，不追。春夏它在养宝宝，靠近窝会被它尖叫着赶，看到窝就绕开；捡到小鸟先告诉大人。",
  nextTime: "清早听一听：屋顶或树尖上，有没有一只黑鸟在唱歌？数数它唱了几种调子。",
  sources: [
    { id: "csdb-wd", title: "乌鸫（据《中国动物志 鸟纲 第十卷》）", by: "中国动物主题数据库（中国科学院动物研究所）", url: "http://www.zoology.csdb.cn/taxon/%7BBB94DEAD-271C-41BE-98DE-678F279462B5%7D" },
    { id: "cern-wd", title: "乌鸫", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E4%B9%8C%E9%B8%AB" },
    { id: "bow-chibla1", title: "Chinese Blackbird (Turdus mandarinus)", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/chibla1/cur/introduction" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-2017", title: "北京观鸟地图", by: "北京市园林绿化局（转载北京晚报），2017", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/201704/t20170401_116269.shtml" },
    { id: "fu-2024", title: "Learning mimetic cuckoo call innovations from neighbors in a Chinese songbird", by: "Scientific Reports, 2024", url: "https://doi.org/10.1038/s41598-024-74860-0" },
    { id: "cern-crow", title: "大嘴乌鸦", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E5%A4%A7%E5%98%B4%E4%B9%8C%E9%B8%A6" },
    { id: "cern-hln", title: "灰椋鸟", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%81%B0%E6%A4%8B%E9%B8%9F" },
    { id: "csdb-hln", title: "灰椋鸟（据《中国动物图谱 鸟类》）", by: "中国动物主题数据库（中国科学院动物研究所）", url: "http://www.zoology.csdb.cn/taxon/%7B0946371F-E63F-46CC-B7BB-AED4DC44FF26%7D" },
    { id: "wiki-zh", title: "中国黑鸫（乌鸫）", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%9C%8B%E9%BB%91%E9%B6%87" },
  ],
  by: ["kid", "dad"],
};

export default entry;