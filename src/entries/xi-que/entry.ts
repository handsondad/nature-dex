import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "xi-que",
  name: "喜鹊",
  // 东亚的喜鹊 2018 年后从 Pica pica 拆成独立的种，GBIF 接受 Pica serica；北京市陆生野生动物名录还写作 Pica pica
  scientific: "Pica serica",
  kind: "animal",
  // 北京城里黑白两色、长尾巴的大鸟只有它，拍到就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "鸦科", "喜鹊属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只喜鹊", shoot: "远远拍一只站在树枝或草地上的喜鹊，黑白身子和长尾巴都在画面里。手机放大或用长焦，别走近，不追它" },
  hello: "黑白两色的大鸟，长尾巴在太阳下会闪出蓝紫色和绿色的光。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "站在石柱上的喜鹊", shoot: "晴天远拍一只站着的喜鹊，侧面对着我们，头、肩膀、翅膀和整条尾巴都在画面里。等它自己停下，别靠近" },
      points: [
        { x: 0.46, y: 0.48, label: "黑白两色", detail: "远远看去只有黑和白两种颜色。身长 40～50 厘米，是个大个子。", cite: ["bow-xq", "cern-xq"] },
        { x: 0.45, y: 0.35, label: "肩膀上一块白", detail: "翅膀靠近肩膀的地方，有一大块白色。", cite: ["wiki-en"] },
        { x: 0.37, y: 0.42, label: "翅膀闪蓝绿光", detail: "黑色的翅膀在太阳下会泛出蓝色或绿色的光。", cite: ["bow-xq"] },
        { x: 0.3, y: 0.57, label: "长长的尾巴", detail: "尾巴又黑又长。中间的羽毛最长，往两边一根比一根短。", cite: ["bow-xq", "cern-xq"] },
      ],
    },
    {
      type: "steps",
      title: "一个喜鹊家的春天",
      steps: [
        { photo: "step-build", label: "衔材料", text: "冬天到春天，喜鹊叼着细树枝和干草，来来回回忙着搭窝。", caption: "嘴里叼着干草的喜鹊", shoot: "1～3 月远远拍一只叼着树枝的喜鹊。别跟着它去找窝" },
        { photo: "step-nest", label: "搭好窝", text: "窝用一根根树枝搭成，又大又结实，常常搭在高高的大树顶上。", caption: "树顶上一个大大的喜鹊窝", shoot: "冬天叶子落光时，站在路边远远拍树顶的喜鹊窝，不走到树下" },
        { photo: "step-guard", label: "孵蛋喂食", text: "爸爸妈妈一起照顾宝宝：孵蛋大约 21 天，再喂宝宝大约 30 天。", caption: "灯杆上的大窝，窝边站着一只喜鹊", shoot: "4～5 月在远处用长焦拍窝边的大喜鹊，拍一张就走，不在窝下停留" },
        { photo: "step-young", label: "出窝", text: "小喜鹊离开窝，跟着爸爸妈妈学本领。看，它的尾巴还短短的。", caption: "刚出窝不久的小喜鹊", shoot: "初夏草地上尾巴短短的小喜鹊，远远拍。它不是被丢下的，不要捡回家" },
      ],
      cite: ["kim-2026", "cern-xq", "guokr-hxq"],
    },
    {
      type: "magnifier",
      title: "凑近看喜鹊窝",
      shot: { photo: "nest-wire", caption: "搭在电线杆上的喜鹊窝", shoot: "看到电线杆或铁塔上的喜鹊窝时，站远一点用长焦拍，能看清窝里夹着什么" },
      text: "这个窝搭在电线杆上。凑近看，树枝中间还夹着一段段红色的细电线。喜鹊会用树枝，甚至铁丝搭窝。",
      zoom: 2.5,
      start: [0.28, 0.32],
      cite: ["cern-xq"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有很多人拍到它：5 月和 10 月最多，8 月少一些。在北京它是留鸟，一年四季都在。我们是哪个月遇见它的？",
      cite: ["bj-birds"],
    },
    {
      type: "lookalike",
      title: "长尾巴的鹊，别认错",
      quiz: true,
      items: [
        {
          name: "灰喜鹊", scientific: "Cyanopica cyanus",
          shot: { photo: "look-hui-xi-que", caption: "天蓝色的长尾巴" },
          tells: ["身子是灰色的，翅膀和尾巴是天蓝色", "头顶黑黑的，尾巴尖是白的", "比喜鹊小一圈，常常一大群一起活动"],
        },
        {
          name: "喜鹊", scientific: "Pica serica", self: true,
          shot: { photo: "look-xi-que", caption: "黑白两色，肩膀一块白" },
          tells: ["只有黑白两色，翅膀闪着蓝绿光", "个子大，身长 40～50 厘米", "常常两只一起活动"],
        },
        {
          name: "红嘴蓝鹊", scientific: "Urocissa erythroryncha",
          shot: { photo: "look-hong-zui-lan-que", caption: "红嘴巴、蓝灰色的长尾巴" },
          tells: ["嘴和脚都是红色的", "头是黑的，头顶后面有一块白", "尾巴特别长，是蓝色的，尾尖白色"],
        },
      ],
      cite: ["guokr-hxq", "cern-xq", "cern-hxq", "cern-hzlq", "bj-birds"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "喜鹊会动脑筋吗？", a: "科学家把吃的拴在绳子一头。11 只喜鹊里，有 8 只学会了拉绳子把吃的拉过来。题目太难时，它们就挑简单的办法一个个试。", cite: ["wang-2020"] },
        { q: "尾巴的颜色为什么会变？", a: "那不是颜料的颜色。羽毛里有很多排成格子的小颗粒（黑色素体），把光反射出来。换个角度看，蓝、紫、绿就变来变去。", cite: ["park-2023"] },
        { q: "喜鹊什么时候开始搭窝？", a: "冬天就开始了！在韩国研究喜鹊的科学家发现，它们 12 月就开始准备，1 月底最忙。从搭窝到小鸟出窝，大约要 4 个半月。", cite: ["kim-2026"] },
        { q: "喜鹊的窝用什么搭？", a: "用树枝，有时候还用铁丝！窝常搭在高高的大树或输电线塔上。", cite: ["cern-xq"] },
        { q: "北京的喜鹊和欧洲的喜鹊是一种吗？", a: "以前大家以为是。2018 年，科学家比较了各地喜鹊的 DNA，发现东亚的喜鹊是单独的一种。", cite: ["song-2018", "bow-xq"] },
        { q: "为什么叫「喜」鹊？", a: "在中国，喜鹊被当作好运的象征。七夕的故事里，喜鹊搭起鹊桥，让牛郎和织女见面。", cite: ["cern-xq", "wiki-en", "wiki-zh"] },
      ],
    },
  ],
  care: "远远看，不追它。看到树上的喜鹊窝不靠近；捡到小鸟先告诉大人。",
  nextTime: "喜鹊在地上是一步一步走，还是两只脚一起跳？下次看看它怎么走路。",
  sources: [
    { id: "bow-xq", title: "Oriental Magpie (Pica serica)", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/orimag1/cur/introduction" },
    { id: "cern-xq", title: "喜鹊", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E5%96%9C%E9%B9%8A" },
    { id: "cern-hxq", title: "灰喜鹊", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%81%B0%E5%96%9C%E9%B9%8A" },
    { id: "cern-hzlq", title: "红嘴蓝鹊", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%BA%A2%E5%98%B4%E8%93%9D%E9%B9%8A" },
    { id: "bj-birds", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局，2025", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "guokr-hxq", title: "全世界最会社交的鸟儿，就在你身边", by: "果壳·物种日历，2019", url: "https://m.guokr.com/article/446078/" },
    { id: "kim-2026", title: "Habitat urbanization, nest defense and breeding success in the Oriental Magpie (Pica serica)", by: "Frontiers in Ecology and Evolution, 2026", url: "https://doi.org/10.3389/fevo.2026.1842756" },
    { id: "wang-2020", title: "The ability of oriental magpies (Pica serica) to solve baited multiple-string problems", by: "PeerJ, 2020", url: "https://doi.org/10.7717/peerj.9200" },
    { id: "park-2023", title: "Effect of nanostructural irregularities on structural color in the tail feathers of the Oriental magpie Pica serica", by: "PLOS ONE, 2023", url: "https://doi.org/10.1371/journal.pone.0282053" },
    { id: "song-2018", title: "Complete taxon sampling of the avian genus Pica (magpies) reveals ancient relictual populations and synchronous Late-Pleistocene demographic expansion across the Northern Hemisphere", by: "Journal of Avian Biology, 2018", url: "https://doi.org/10.1111/jav.01612" },
    { id: "wiki-en", title: "Oriental magpie", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oriental_magpie" },
    { id: "wiki-zh", title: "普通喜鹊", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%99%AE%E9%80%9A%E5%96%9C%E9%B9%8A" },
  ],
  by: ["kid", "dad"],
};

export default entry;