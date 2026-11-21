import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 中国两栖类数据库里的东北蟾蜍 Bufo sachalinensis 只分布在东北三省，北京的是中华蟾蜍。
const entry: Entry = {
  id: "zhong-hua-chan-chu",
  name: "中华蟾蜍",
  scientific: "Bufo gargarizans",
  kind: "animal",
  // 北京还有花背蟾蜍：个子大、满身圆疙瘩、背上没有浅色脊纹的是中华蟾蜍
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "两栖纲", "无尾目", "蟾蜍科", "蟾蜍属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只蟾蜍", shoot: "我们遇见的那一只：夏天雨后或傍晚，在公园草丛、小路边。和大人一起远远拍，背上的疙瘩和眼睛后面的鼓包都拍进去；不抓不摸" },
  hello: "从水草上的一粒卵，到满身疙瘩的小蟾蜍，大约要 64 天。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "step-adult", caption: "趴在地砖上的中华蟾蜍", shoot: "傍晚在草地或小路边，从侧面拍一只蟾蜍：眼睛、眼睛后面的鼓包、背上的疙瘩和腿都在画面里。离远一点，不碰它" },
      points: [
        { x: 0.39, y: 0.42, label: "眼睛后面的鼓包", detail: "眼睛后面有一对鼓鼓的耳后腺，能分泌毒液，中药「蟾酥」主要就来自这里。", cite: ["ac-zh", "wang-2026"] },
        { x: 0.53, y: 0.33, label: "满身圆疙瘩", detail: "皮肤很粗糙，背上满是圆圆的疙瘩（瘰疣），连肚子上也有。", cite: ["ac-zh"] },
        { x: 0.27, y: 0.35, label: "眼皮上的大疙瘩", detail: "上眼皮内侧有 3～4 颗比较大的疣粒，前后连着吻棱和耳后腺。", cite: ["ac-zh"] },
        { x: 0.42, y: 0.62, label: "又长又壮的前腿", detail: "前腿又长又粗壮；后腿却粗粗短短的。", cite: ["ac-zh"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的眼睛",
      shot: { photo: "cover", caption: "爬过地砖的中华蟾蜍" },
      text: "它的瞳孔是黑色的，圆形或横着的椭圆形；外面一圈虹膜是土红色。眼睛上方和后面，全是一颗颗疙瘩。",
      zoom: 3,
      start: [0.335, 0.47],
      cite: ["ac-zh"],
    },
    {
      type: "steps",
      title: "从一串卵到小蟾蜍",
      steps: [
        { photo: "step-eggs", label: "卵带", text: "冬眠醒来后，卵产在静水塘的浅水里。卵排在长长的管状卵带里，缠在水草上，一条有几千粒。", caption: "缠在水草上的卵带", shoot: "早春在公园水塘边远远拍缠在水草上的长条卵带，只拍不捞；和大人一起，不靠近水边" },
        { photo: "step-tadpole", label: "蝌蚪", text: "黑黑的小蝌蚪住在静水塘里，主要吃植物，用鳃在水里呼吸。", caption: "水塘里一群黑色的小蝌蚪", shoot: "春天在水塘边远远拍一群黑色的小蝌蚪，只看不捞；和大人一起" },
        { photo: "step-toadlet", label: "小蟾蜍", text: "蝌蚪长出四条腿，尾巴被身体一点点消化吸收掉，就变成了小蟾蜍。从卵到这一步，大约要 64 天。", caption: "刚上岸不久的小蟾蜍", shoot: "初夏在水塘边的湿地上拍刚上岸的小蟾蜍，拍时放一片树叶比大小，不用手碰；和大人一起" },
        { photo: "side-view", label: "长大", text: "长大的蟾蜍多住在岸上潮湿的草丛里和石头下，冬眠和产卵时才回到水里。", caption: "夜里在树下的蟾蜍", shoot: "夏天傍晚在草丛或石头边拍一只长大的蟾蜍，远远拍，不抓不摸" },
      ],
      cite: ["ac-zh", "kp-meta"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7 月拍到它最多，4～9 月都常见。11 月到第二年 1 月很少，那时它多半在冬眠。我们是哪个月遇见它的？",
      cite: ["ac-zh"],
    },
    {
      type: "lookalike",
      title: "蛙和蟾蜍，别认错",
      quiz: true,
      items: [
        {
          name: "黑斑侧褶蛙", scientific: "Pelophylax nigromaculatus",
          shot: { photo: "look-hbw", caption: "黑斑侧褶蛙" },
          tells: ["背上两边各有一道凸起的长棱（背侧褶）", "身上有黑斑，背中间常有一条浅色线", "后脚趾间的蹼差不多连到趾尖"],
        },
        {
          name: "中华蟾蜍", scientific: "Bufo gargarizans", self: true,
          shot: { photo: "look-zh", caption: "中华蟾蜍" },
          tells: ["个子大，大的有 12 厘米长", "背上满是圆疙瘩", "眼睛后面有一对鼓鼓的耳后腺"],
        },
        {
          name: "花背蟾蜍", scientific: "Strauchbufo raddei",
          shot: { photo: "look-hb", caption: "花背蟾蜍" },
          tells: ["个子小，只有五六厘米长", "背上有深褐或黑色的斑", "背中间常有一条灰白或黄白色的脊纹", "北京也有，是北京的重点保护动物"],
        },
      ],
      cite: ["ac-hbw", "ac-zh", "ac-hb", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它的喉咙会鼓起来叫吗？", a: "中华蟾蜍没有声囊（叫的时候能鼓起来的气囊）。黑斑侧褶蛙就有声囊。", cite: ["ac-zh", "ac-hbw"] },
        { q: "冬天蟾蜍去哪儿了？", a: "九、十月它钻进水里或松软的泥沙里冬眠。第二年 1～4 月醒来，北方比南方晚。", cite: ["ac-zh"] },
        { q: "蟾蜍吃什么？", a: "天快黑时它出来找吃的，吃昆虫、蚂蚁、蜗牛、蚯蚓和别的小动物。", cite: ["ac-zh"] },
        { q: "它嘴里有牙吗？", a: "没有。中华蟾蜍的上颌没有牙齿，上腭也没有犁骨齿。", cite: ["ac-zh"] },
        { q: "一条卵带有多少粒卵？", a: "卵排成 2 行或 4 行，装在管子一样的卵带里，一条有 2700～8000 粒。", cite: ["ac-zh"] },
        { q: "它的卵也有毒吗？", a: "有。科学家从中华蟾蜍的卵里找到了 9 种蟾毒内酯，这是蟾蜍用来对付天敌的毒。", cite: ["zhou-2021"] },
      ],
    },
  ],
  care: "不抓不摸。眼睛后面的鼓包会分泌毒液，碰到了马上洗手，别揉眼睛。",
  nextTime: "下过雨的傍晚，和大人去小路边看看：蟾蜍是跳着走，还是爬着走？",
  sources: [
    { id: "ac-zh", title: "中华蟾蜍 Bufo gargarizans", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/289" },
    { id: "ac-hbw", title: "黑斑侧褶蛙 Pelophylax nigromaculatus", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/416" },
    { id: "ac-hb", title: "花背蟾蜍 Strauchbufo raddei", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/302" },
    { id: "bj-list", title: "北京陆生野生动物名录—两栖爬行类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071636.shtml" },
    { id: "kp-meta", title: "蝌蚪变成青蛙，除了去尾长腿，还要……", by: "科普中国", url: "https://www.kepuchina.cn/article/articleinfo?ar_id=269707&business_type=100" },
    { id: "wang-2026", title: "Integrated Lipidomic, Transcriptomic, and Metabolomic Analyses Reveal the Regulatory Mechanism Underlying Venom Synthesis in Parotoid Glands of Bufo gargarizans", by: "Journal of Proteome Research, 2026", url: "https://doi.org/10.1021/acs.jproteome.6c00133" },
    { id: "zhou-2021", title: "Bufadienolides from the Eggs of the Toad Bufo bufo gargarizans and Their Antimelanoma Activities", by: "Journal of Natural Products, 2021", url: "https://doi.org/10.1021/acs.jnatprod.0c00840" },
  ],
  by: ["kid", "dad"],
};

export default entry;