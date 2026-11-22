import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "bai-tou-bei",
  name: "白头鹎",
  pinyin: "bái tóu bēi",
  scientific: "Pycnonotus sinensis",
  kind: "animal",
  // 后脑勺大片白、黑头顶、白脸，和红耳鹎等分得开；拍清头就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "鹎科", "鹎属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只白头鹎", shoot: "树上或灌木上的一只白头鹎，侧面或微侧：后脑的白、黑头顶都清楚；远远拍，别追" },
  hello: "后脑勺一片白，像戴了一顶小白帽，所以也叫白头翁。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "树枝上一只白头鹎的侧面", shoot: "树上停着的白头鹎，侧面拍：后脑白斑、脸、喉咙和翅膀都在画面里。用长焦，别靠近" },
      points: [
        { x: 0.635, y: 0.305, label: "后脑勺一片白", detail: "两只眼睛上面的白连到后脑勺，像戴了一顶小白帽。", cite: ["csdb-btb", "cern-btb"] },
        { x: 0.68, y: 0.42, label: "黑额头、黑脸", detail: "额头是黑的，脸颊和嘴边也是黑褐色，把白帽子衬得更显眼。", cite: ["csdb-btb"] },
        { x: 0.47, y: 0.47, label: "黄绿色的翅膀", detail: "翅膀和尾巴是暗褐色，羽毛边上镶着黄绿色。", cite: ["csdb-btb"] },
        { x: 0.3, y: 0.6, label: "身长约 19 厘米", detail: "从嘴尖到尾巴尖大约 19 厘米，比大山雀长一截；体重只有 35 克左右。", cite: ["csdb-btb", "cern-btb"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看「白帽子」",
      shot: { photo: "head", caption: "柳树上一只白头鹎的头", shoot: "白头鹎停在近处的枝头时，用手机放大拍它的头：白帽子、黑脸和白喉咙都要清楚" },
      text: "把放大镜移到头上：白帽子从眼睛上面一直连到后脑勺，后面还围着一圈黑褐色的边。再往下看，喉咙也是白的。",
      zoom: 2.6,
      start: [0.56, 0.18],
      cite: ["csdb-btb"],
    },
    {
      type: "compare",
      title: "小时候没有白帽子",
      before: { photo: "juvenile", label: "小白头鹎", caption: "头灰褐色、没有白斑的小白头鹎", shoot: "夏天枝头上头是灰褐色的小白头鹎，侧身远拍" },
      after: { photo: "adult", label: "长大的白头鹎", caption: "后脑勺一片白的成年白头鹎", shoot: "同样侧身站在枝头的成年白头鹎，远拍" },
      text: "刚离窝的小白头鹎，整个头是灰褐色的，还没有白帽子，胸口有灰色的横纹。长大以后，后脑勺才出现那片白。",
      cite: ["csdb-btb", "cern-btb"],
    },
    {
      type: "steps",
      title: "从小碗窝到出窝",
      steps: [
        { photo: "step-egg", label: "碗形窝", text: "窝像一只深深的小碗，用草茎、树叶和细根编成。一窝常有 4～5 个带斑点的蛋。", caption: "树杈上的碗形窝，里面有 3 个带斑点的蛋", shoot: "不要去找鸟窝拍，这一步用别人的照片就好" },
        { photo: "step-sit", label: "孵蛋", text: "大鸟趴在窝里，用身体给蛋保暖。窝常藏在灌木里，有的离地只有一两米。", caption: "趴在竹丛里小窝上的白头鹎", shoot: "不要去拍有鸟在孵蛋的窝，这一步用别人的照片就好" },
        { photo: "step-chick", label: "雏鸟", text: "小鸟出壳了，背上灰褐色，羽毛还没长全，肚子上是软软的绒毛。", caption: "窝里挤在一起、仰着头的雏鸟", shoot: "不要靠近鸟窝拍，这一步用别人的照片就好" },
        { photo: "step-fledge", label: "出窝了", text: "羽毛长好后，小鸟跳到窝边的树枝上。这时头还是灰褐色的，没有白帽子。", caption: "站在窝边树枝上的两只小白头鹎", shoot: "初夏枝头头是灰褐色的小白头鹎，远远拍，别去捡它" },
      ],
      cite: ["csdb-btb"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，4、5 月拍到的最多。北京名录里它是一年四季都在的「留鸟」。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "头上有白，别认错",
      quiz: true,
      items: [
        {
          name: "大山雀",
          scientific: "Parus cinereus minor",
          shot: { photo: "look-da-shan-que", caption: "黑脑袋、白脸颊的大山雀" },
          tells: ["白色在脸颊上：眼睛下面一大块白", "胸口到肚子中间有一条黑「领带」", "个子小，和麻雀差不多"],
        },
        {
          name: "白头鹎",
          scientific: "Pycnonotus sinensis",
          self: true,
          shot: { photo: "look-bai-tou-bei", caption: "后脑勺一片白的白头鹎" },
          tells: ["白色在头顶后面：眼睛上方连到后脑勺", "胸口没有黑领带，只有一条淡淡的灰褐带", "翅膀边上黄绿色"],
        },
        {
          name: "红耳鹎",
          scientific: "Pycnonotus jocosus",
          shot: { photo: "look-hong-er-bei", caption: "头顶竖着黑尖冠的红耳鹎" },
          tells: ["头顶竖着高高的黑色尖冠", "眼睛下面有一小块红，尾巴下面也是红的", "北京名录里它是放生或逃出来的鸟"],
        },
      ],
      cite: ["csdb-btb", "csdb-dsq", "cern-rwb", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "白头鹎的头都是白的吗？", a: "不一定！住在广东、广西一带的白头鹎，整个头顶是黑的。叫它「白头鹎」，对它们就不太准了。", cite: ["csdb-btb", "cern-btb"] },
        { q: "它一年到头吃一样的东西吗？", a: "不是。科学家看过长沙 280 只白头鹎的胃：冬天几乎全吃果子和种子，到 5 月几乎全吃虫子。", cite: ["csdb-btb"] },
        { q: "北京一直有白头鹎吗？", a: "以前它主要住在长江一带和更南的地方。近几十年它一路往北，住到了华北，现在北京一年四季都有。", cite: ["xing-2013", "bow-livbul1", "bj-list"] },
        { q: "搬到北方的白头鹎，唱歌一样吗？", a: "科学家比了 7000 多段歌声：新搬到北方的白头鹎，会唱的曲子种类比南方的少很多。", cite: ["xing-2013"] },
        { q: "北方的白头鹎怎么过冷冬天？", a: "科学家发现，住得越靠北的白头鹎，身体越重，安静时消耗的能量也越多，这样才能保持体温。", cite: ["wu-2023"] },
        { q: "白头鹎会学新本事吗？", a: "在南方城市里，有几只白头鹎像啄木鸟一样在树干上找虫吃，还有的晚上到灯下抓聚在一起的小虫。", cite: ["li-2026"] },
      ],
    },
  ],
  care: "远远看，不追。它的窝常藏在一人高的灌木里，看到窝就绕开；捡到小鸟先告诉大人。",
  nextTime: "冬天去看看：白头鹎是不是成群在树上吃果子？数数一群有几只。",
  sources: [
    { id: "csdb-btb", title: "白头鹎（据《中国动物志 鸟纲 第八卷》）", by: "中国动物主题数据库（中国科学院动物研究所）", url: "http://www.zoology.csdb.cn/taxon/%7B339B26AC-A17A-4CEA-AF47-7E1FC8E248C6%7D" },
    { id: "cern-btb", title: "白头鹎", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%99%BD%E5%A4%B4%E9%B9%8E" },
    { id: "bow-livbul1", title: "Light-vented Bulbul (Pycnonotus sinensis)", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/livbul1/cur/introduction" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "xing-2013", title: "Recent northward range expansion promotes song evolution in a passerine bird, the Light-vented Bulbul", by: "Journal of Evolutionary Biology, 2013", url: "https://doi.org/10.1111/jeb.12101" },
    { id: "wu-2023", title: "Metabolic and microbial changes in light-vented bulbul during recent northward range expansion", by: "Current Zoology, 2023", url: "https://doi.org/10.1093/cz/zoad005" },
    { id: "li-2026", title: "Novel Foraging Behaviors of an Urban Bird, the Light-Vented Bulbul (Pycnonotus sinensis)", by: "Ecology and Evolution, 2026", url: "https://doi.org/10.1002/ece3.72928" },
    { id: "csdb-dsq", title: "大山雀（据《中国动物志 鸟纲 第十三卷》）", by: "中国动物主题数据库（中国科学院动物研究所）", url: "http://www.zoology.csdb.cn/taxon/%7B615045ED-4731-4256-8B20-EDB603B4F120%7D" },
    { id: "cern-rwb", title: "红耳鹎", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%BA%A2%E8%80%B3%E9%B9%8E" },
  ],
  by: ["kid", "dad"],
};

export default entry;
