import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "hui-xi-que",
  name: "灰喜鹊",
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
      shot: { photo: "side-view", caption: "停在树枝上的灰喜鹊", shoot: "远拍一只侧身停在低枝上的灰喜鹊，头朝一边，整条尾巴都在画面里。秋冬叶子少时背景更干净。看到附近有鸟窝就换个地方拍" },
      points: [
        { x: 0.68, y: 0.25, label: "黑帽子", detail: "头顶是亮亮的黑色，像戴了一顶黑帽子。", cite: ["wiki-en", "cern-hxq"] },
        { x: 0.72, y: 0.4, label: "白喉咙", detail: "下巴和喉咙是白色的。", cite: ["wiki-en", "wiki-zh"] },
        { x: 0.52, y: 0.45, label: "灰色的背", detail: "背是灰色的，肚子颜色浅一些，接近白色。", cite: ["wiki-en", "wiki-zh"] },
        { x: 0.42, y: 0.55, label: "天蓝色的翅膀", detail: "翅膀是天蓝色的。它的英文名，意思就是「天蓝色翅膀的喜鹊」。", cite: ["wiki-en", "guokr-hxq"] },
        { x: 0.18, y: 0.75, label: "长尾巴，白尾尖", detail: "天蓝色的尾巴长 16～20 厘米，几乎和身子一样长，尾巴尖是白的。", cite: ["wiki-en", "wiki-zh"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有很多人拍到它：5、6 月最多，8 月少一些。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "灰喜鹊还是喜鹊？",
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
      ],
      cite: ["guokr-hxq", "cern-xq", "cern-hxq"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "灰喜鹊会帮邻居带宝宝吗？", a: "会！一群灰喜鹊住在一起，有的大鸟会去帮邻居喂小鸟，一个繁殖季还可能帮好几家。", cite: ["guokr-hxq"] },
        { q: "灰喜鹊会把吃的送给同伴吗？", a: "在实验里，一只灰喜鹊跳上机关，吃的就滑到同伴面前，它自己够不着。灰喜鹊常常这样送吃的，不用同伴先讨。", cite: ["horn-2016"] },
        { q: "你盯着它看，它知道吗？", a: "知道。科学家在野外走近灰喜鹊做实验：成年灰喜鹊不喜欢被人直直地盯着，小灰喜鹊却不太在乎。", cite: ["yu-2023"] },
        { q: "它认得猫吗？", a: "认得。看到猫或听到猫叫，灰喜鹊会盯着看更久、少吃一会儿、更快飞走。见到喜鹊就没那么紧张。", cite: ["zuo-2024"] },
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
