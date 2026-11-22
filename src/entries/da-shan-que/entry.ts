import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// iNaturalist 与《北京陆生野生动物名录》将大山雀并入苍背山雀，GBIF 对应接受名为 Parus cinereus（或三名法 Parus cinereus minor）；《中国鸟类分类与分布名录》称 Parus minor。
const entry: Entry = {
  id: "da-shan-que",
  name: "大山雀",
  pinyin: "dà shān què",
  scientific: "Parus cinereus minor",
  kind: "animal",
  // 北京林间黑头白脸、白肚皮正中一条黑领带的小鸟就是它，拍清脸和肚皮就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "山雀科", "山雀属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "枝头探头张望的大山雀",
    shoot: "晴天在公园或树下停住等一会儿，手机放大远拍一只停在枝头的大山雀：黑头、白脸蛋和白肚皮上的黑领带都拍清楚，别追它",
  },
  hello: "黑脑袋配两块大白脸蛋，白肚皮正中间还系着一条帅气的黑领带！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "front",
        caption: "停在细枝上的大山雀",
        shoot: "远远拍一只侧身停在枝头的大山雀，把黑头白脸、黄绿色上背和翅膀收进画面",
      },
      points: [
        { x: 0.56, y: 0.35, label: "黑头配大白脸蛋", detail: "头顶到后脖子是带蓝光的黑色，眼睛下面到脸颊、耳朵是一大块三角形的白斑。", cite: ["csdb-dsq"] },
        { x: 0.47, y: 0.4, label: "黄绿色的上背", detail: "后脖子下面的上背是黄绿色的，再往后到尾巴根变成蓝灰色。", cite: ["csdb-dsq"] },
        { x: 0.46, y: 0.52, label: "翅膀上的白横杠", detail: "深色的翅膀上有一道白色的横杠，飞羽边上也镶着浅色的边。", cite: ["csdb-dsq"] },
        { x: 0.43, y: 0.72, label: "和麻雀差不多大", detail: "从嘴尖到尾巴尖大约 13 厘米，体重只有 13～16 克，个子和麻雀差不多。", cite: ["csdb-dsq"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看「黑领带」",
      shot: { photo: "tie", caption: "仰头站在枝头、露出肚皮的大山雀", shoot: "大山雀正对着你停在枝头时，用手机放大拍它的胸口和肚皮" },
      text: "把放大镜移到肚皮上：从喉咙开始，一条宽宽的黑带一直拉到尾巴下面。领带这么宽，多半是一只雄鸟。",
      zoom: 2.4,
      start: [0.38, 0.55],
      cite: ["csdb-dsq"],
    },
    {
      type: "compare",
      title: "小时候还没系领带",
      before: { photo: "juvenile", label: "刚出窝的小鸟", caption: "张着黄嘴角、头是灰褐色的小大山雀", shoot: "初夏枝头上张嘴要吃的小大山雀，远远拍，别去捡它" },
      after: { photo: "adult", label: "长大的大山雀", caption: "黑头白脸、胸口系着黑领带的成鸟", shoot: "同样侧身站在枝头的成年大山雀，远拍" },
      text: "刚出窝的小鸟，头不是亮黑色而是灰褐色，脸蛋带点黄绿，肚子上几乎看不出黑领带。长大以后，黑色才变得又黑又亮。",
      cite: ["csdb-dsq"],
    },
    {
      type: "steps",
      title: "从一团苔藓到出窝",
      steps: [
        { photo: "step-nest", label: "衔苔藓做窝", text: "春天，大山雀把窝做在树洞、石缝或墙洞里，外层用苔藓砌，里面垫上兽毛和羽毛，做一个窝要 5～6 天。", caption: "嘴里衔着一大团苔藓的大山雀", shoot: "不要去找鸟窝拍，远远看到衔东西的大山雀就拍一张" },
        { photo: "step-chick", label: "窝里的雏鸟", text: "蛋孵 15 天左右出壳。小鸟刚出来光溜溜的，眼睛闭着，第 6 天才睁开。爸爸妈妈每天要喂 85～105 次。", caption: "人工巢箱里挤成一团的雏鸟", shoot: "不要打开巢箱看，这一步用别人的照片就好" },
        { photo: "step-fledge", label: "出窝了", text: "喂上 14～16 天，小鸟就飞出窝了。头几天还在窝附近等爸爸妈妈喂，之后自己找虫吃。", caption: "抓着铁丝网、羽毛还毛茸茸的小鸟", shoot: "初夏看到毛茸茸的小大山雀，远远拍，别去捡它" },
      ],
      cite: ["csdb-dsq"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年十二个月都有人拍到它，冬天到早春拍到的最多，8 月最少。北京名录里它是一年四季都在的「留鸟」。我们会在哪个月遇见它？",
      cite: ["bj-bird-list"],
    },
    {
      type: "lookalike",
      title: "黑头白脸的小鸟，别认错",
      quiz: true,
      items: [
        {
          name: "煤山雀",
          scientific: "Periparus ater",
          shot: { photo: "look-mei-shan-que", caption: "后脑勺有白斑、胸口没有领带的煤山雀" },
          tells: ["更小，只有 9～12 厘米", "后脑勺有一大块白斑，头顶常有一撮小尖冠", "胸口和肚子上没有黑领带"],
        },
        {
          name: "大山雀",
          scientific: "Parus cinereus minor",
          self: true,
          shot: { photo: "look-da-shan-que", caption: "黑头白脸的大山雀" },
          tells: ["头顶乌黑发亮，大白脸蛋上没有黑斑", "白肚皮正中间从喉咙到尾巴下面系着一条黑领带", "上背黄绿色"],
        },
        {
          name: "麻雀（树麻雀）",
          scientific: "Passer montanus",
          shot: { photo: "look-ma-que", caption: "栗色头顶、白脸上有黑点的麻雀" },
          tells: ["头顶和后脑勺是褐色的", "白脸蛋上有一块明显的黑点", "肚皮灰扑扑的，没有黑领带"],
        },
      ],
      cite: ["csdb-dsq", "cern-mei", "cern-ma-que", "bj-bird-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "怎么分出大山雀爸爸和妈妈？", a: "看肚皮中间的黑领带：雄鸟的又宽又长，雌鸟的稍细一些。刚出窝的小鸟，肚子上几乎看不出领带。", cite: ["csdb-dsq"] },
        { q: "大山雀一窝能下几个蛋？", a: "平均 8 个左右，也有多到 12、13 个的。蛋是白色微带粉红，上面撒满红褐色的小斑点。", cite: ["csdb-dsq"] },
        { q: "大山雀妈妈出门前要做什么？", a: "给蛋盖被子！雌鸟每天下完蛋才出窝，出去前会用松松的羊毛把蛋盖住。", cite: ["csdb-dsq"] },
        { q: "大山雀是森林的好帮手吗？", a: "是。山东泰安的观察发现，一窝小鸟一天要喂 67～114 次，喂的虫子里六成是危害松树的松毛虫。", cite: ["csdb-dsq"] },
        { q: "大山雀说话也讲「先后顺序」吗？", a: "讲！「先小心四周、再飞过来」的叫声组合，同伴会照做；把顺序倒过来放录音，同伴就很少理会了。", cite: ["suzuki-2016"] },
        { q: "它会喊「有蛇！」吗？", a: "会。实验发现，听到专门报告蛇的叫声后，大山雀会特别留意像蛇一样扭动的小树枝。", cite: ["suzuki-2018"] },
      ],
    },
  ],
  care: "在树下安静看，不追、不摇树枝。看到巢箱或树洞别敲、别探头；捡到毛茸茸的小鸟先告诉大人，它爸妈多半就在附近。",
  nextTime: "下次遇见大山雀，先瞄一眼它的白肚皮：这条「黑领带」是宽宽的，还是细细的？",
  sources: [
    { id: "csdb-dsq", title: "大山雀（据《中国动物志 鸟纲 第十三卷》）", by: "中国动物主题数据库（中国科学院动物研究所）", url: "http://www.zoology.csdb.cn/taxon/%7B615045ED-4731-4256-8B20-EDB603B4F120%7D" },
    { id: "cern-mei", title: "煤山雀", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%85%A4%E5%B1%B1%E9%9B%80" },
    { id: "cern-ma-que", title: "麻雀", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E9%BA%BB%E9%9B%80" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "suzuki-2016", title: "Experimental evidence for compositional syntax in bird calls", by: "Nature Communications, 2016", url: "https://doi.org/10.1038/ncomms10986" },
    { id: "suzuki-2018", title: "Alarm calls evoke a visual search image of a predator in birds", by: "PNAS, 2018", url: "https://doi.org/10.1073/pnas.1718884115" },
  ],
  by: ["kid", "dad"],
};

export default entry;