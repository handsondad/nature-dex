import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "hui-xi-que",
  name: "灰喜鹊",
  pinyin: "huī xǐ què",
  scientific: "Cyanopica cyanus",
  kind: "animal",
  // 黑帽子、灰身子、天蓝色长尾巴，北京没有长得像的鸟，拍到就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "鸦科", "灰喜鹊属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只灰喜鹊", shoot: "远远拍一只停在树枝上的灰喜鹊，黑帽子、灰身子和天蓝色的长尾巴都在画面里。它们常成群在公园树间穿行，站在原地等它们飞过来，别追" },
  hello: "黑帽子、灰身子、天蓝色的长尾巴，常常一大群在树间穿来穿去。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "停在细树枝上的灰喜鹊", shoot: "远拍一只侧身停在低枝上的灰喜鹊，头朝一边，整条尾巴都在画面里。秋冬叶子少时背景更干净。看到附近有鸟窝就换个地方拍" },
      points: [
        { x: 0.74, y: 0.15, label: "黑帽子", detail: "头顶是亮亮的黑色，像戴了一顶黑帽子。", cite: ["wiki-en", "cern-hxq"] },
        { x: 0.8, y: 0.26, label: "白喉咙", detail: "下巴和喉咙是白色的。", cite: ["wiki-en", "wiki-zh"] },
        { x: 0.56, y: 0.32, label: "灰色的背", detail: "背是灰色的，肚子颜色浅一些，接近白色。", cite: ["wiki-en", "wiki-zh"] },
        { x: 0.68, y: 0.46, label: "天蓝色的翅膀", detail: "翅膀是天蓝色的。它的英文名，意思就是「天蓝色翅膀的喜鹊」。", cite: ["wiki-en", "guokr-hxq"] },
        { x: 0.17, y: 0.84, label: "长尾巴，白尾尖", detail: "天蓝色的尾巴长 16～20 厘米，几乎和身子一样长，尾巴尖是白的。", cite: ["wiki-en", "wiki-zh"] },
      ],
    },
    {
      type: "steps",
      title: "小灰喜鹊长大了",
      steps: [
        { photo: "step-out", label: "刚出窝", text: "春末夏初，小灰喜鹊离开窝。它的尾巴还短短的，头顶也不是亮黑色。", caption: "停在树干上的小灰喜鹊", shoot: "6 月远远拍尾巴短短的小灰喜鹊。它不是被丢下的，大鸟就在附近，不要捡" },
        { photo: "step-young", label: "学本领", text: "它跟着大鸟在草地上找吃的。头顶黑里带白点，像刷了一层白灰。", caption: "在草地上走的小灰喜鹊", shoot: "夏天草地上头顶花花的灰喜鹊，蹲下来远远拍" },
        { photo: "group", label: "一大群", text: "长大后头顶变得黑亮。灰喜鹊爱成群，常常好几只一起在地上、树间找吃的。", caption: "一群灰喜鹊在草地上找吃的", shoot: "秋冬远拍一群在地上找吃的灰喜鹊，别跑过去把它们吓飞" },
      ],
      cite: ["kang-2022", "wiki-zh", "cern-hxq"],
    },
    {
      type: "magnifier",
      title: "凑近看小灰喜鹊的头顶",
      shot: { photo: "juv-cap", caption: "躲在摩托车边的小灰喜鹊", shoot: "夏天遇到小灰喜鹊，用长焦拍它的头，看清头顶的花点" },
      text: "大灰喜鹊的头顶是亮黑色。小灰喜鹊头顶的黑羽毛，尖上是白的，远看像刷了一层白灰。",
      zoom: 2.5,
      start: [0.48, 0.28],
      cite: ["wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有很多人拍到它：5、6 月最多，8 月少一些。在北京它是留鸟，一年四季都在。我们是哪个月遇见它的？",
      cite: ["bj-birds"],
    },
    {
      type: "lookalike",
      title: "长尾巴的鹊，别认错",
      quiz: true,
      items: [
        {
          name: "喜鹊", scientific: "Pica serica",
          shot: { photo: "look-xi-que", caption: "黑白两色，肩膀一块白" },
          tells: ["只有黑白两色，没有灰色的身子", "个子大一圈，身长 40～50 厘米", "常常两只一起活动"],
        },
        {
          name: "灰喜鹊", scientific: "Cyanopica cyanus", self: true,
          shot: { photo: "look-hui-xi-que", caption: "天蓝色的长尾巴，白尾尖" },
          tells: ["身子灰色，翅膀和尾巴天蓝色", "头顶黑色，喉咙白色", "常常一大群一起活动"],
        },
        {
          name: "红嘴蓝鹊", scientific: "Urocissa erythroryncha",
          shot: { photo: "look-hong-zui-lan-que", caption: "红嘴巴、红脚，头顶后面一块白" },
          tells: ["嘴和脚都是红色的", "头是黑的，头顶后面有一块白", "个子比灰喜鹊大，尾巴更长"],
        },
      ],
      cite: ["guokr-hxq", "cern-xq", "cern-hxq", "cern-hzlq", "bj-birds"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "灰喜鹊会帮邻居带宝宝吗？", a: "会！一群灰喜鹊住在一起，有的大鸟会去帮邻居喂小鸟，一个繁殖季还可能帮好几家。", cite: ["guokr-hxq"] },
        { q: "灰喜鹊会把吃的送给同伴吗？", a: "在实验里，一只灰喜鹊跳上机关，吃的就滑到同伴面前，它自己够不着。灰喜鹊常常这样送吃的，不用同伴先讨。", cite: ["horn-2016"] },
        { q: "你盯着它看，它知道吗？", a: "知道。科学家在野外走近灰喜鹊做实验：成年灰喜鹊不喜欢被人直直地盯着，小灰喜鹊却不太在乎。", cite: ["yu-2023"] },
        { q: "它认得猫吗？", a: "认得。看到猫或听到猫叫，灰喜鹊会盯着看更久、少吃一会儿、更快飞走。见到喜鹊就没那么紧张。", cite: ["zuo-2024"] },
        { q: "灰喜鹊的窝用什么搭？", a: "科学家拆开韩国的 27 个灰喜鹊窝：外面用泥土和树枝，泥土占了一半多；里面铺上软软的苔藓和纤维。", cite: ["kang-2022"] },
        { q: "杜鹃把蛋下在它窝里怎么办？", a: "灰喜鹊很会认蛋。科学家在它的窝里放进红色或蓝色的假蛋，几乎都被认了出来，不要了。", cite: ["zhou-2025", "wiki-zh"] },
      ],
    },
  ],
  care: "远远看，不追。春天它们在树上养宝宝，看到鸟窝就绕开走；捡到小鸟先告诉大人。",
  nextTime: "灰喜鹊飞的时候，是一直扇翅膀，还是扇几下就滑一段？下次抬头看看。",
  sources: [
    { id: "cern-hxq", title: "灰喜鹊", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%81%B0%E5%96%9C%E9%B9%8A" },
    { id: "cern-xq", title: "喜鹊", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E5%96%9C%E9%B9%8A" },
    { id: "guokr-hxq", title: "全世界最会社交的鸟儿，就在你身边", by: "果壳·物种日历，2019", url: "https://m.guokr.com/article/446078/" },
    { id: "cern-hzlq", title: "红嘴蓝鹊", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%BA%A2%E5%98%B4%E8%93%9D%E9%B9%8A" },
    { id: "bj-birds", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局，2025", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "kang-2022", title: "Nest characteristics and composition of the colonial nesting Azure-winged magpie Cyanopica cyanus in South Korea", by: "PeerJ, 2022", url: "https://doi.org/10.7717/peerj.13637" },
    { id: "horn-2016", title: "Proactive prosociality in a cooperatively breeding corvid, the azure-winged magpie (Cyanopica cyana)", by: "Biology Letters, 2016", url: "https://doi.org/10.1098/rsbl.2016.0649" },
    { id: "yu-2023", title: "Influence of age, breeding state and approach direction on sensitivity to human gaze: a field study on Azure-winged magpies", by: "Animal Cognition, 2023", url: "https://doi.org/10.1007/s10071-023-01786-x" },
    { id: "zuo-2024", title: "Recognition of Predator Type and Risk Level in Azure-Winged Magpies (Cyanopica cyanus) Through Visual and Auditory Cues", by: "Ecology and Evolution, 2024", url: "https://doi.org/10.1002/ece3.70749" },
    { id: "zhou-2025", title: "Geographical Variation in Egg Rejection by Azure-Winged Magpies (Cyanopica cyanus) Across China", by: "Ecology and Evolution, 2025", url: "https://doi.org/10.1002/ece3.71726" },
    { id: "wiki-en", title: "Azure-winged magpie", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Azure-winged_magpie" },
    { id: "wiki-zh", title: "灰喜鹊", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E7%81%B0%E5%96%9C%E9%B9%8A" },
  ],
  by: ["kid", "dad"],
};

export default entry;
