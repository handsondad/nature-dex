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
      shot: { photo: "side-view", caption: "蟾蜍的侧面", shoot: "傍晚在草地或小路边，从侧上方拍一只蟾蜍：眼睛、眼睛后面的鼓包、背上的疙瘩和腿都在画面里。离远一点，不碰它" },
      points: [
        { x: 0.32, y: 0.4, label: "眼睛后面的鼓包", detail: "眼睛后面有一对鼓鼓的耳后腺，会挤出有毒的白色浆液。只看，别碰。", cite: ["ac-zh", "hkbu-cs", "wiki-parotoid"] },
        { x: 0.58, y: 0.32, label: "满身圆疙瘩", detail: "皮肤很粗糙，背上满是圆圆的疙瘩（瘰疣），肚子上也有。", cite: ["ac-zh"] },
        { x: 0.2, y: 0.45, label: "土红色的眼睛", detail: "瞳孔是黑色的，外面一圈是土红色。", cite: ["ac-zh"] },
        { x: 0.75, y: 0.7, label: "粗粗短短的后腿", detail: "后腿粗粗短短的，前腿又长又壮。", cite: ["ac-zh"] },
      ],
    },
    {
      type: "steps",
      title: "从一串卵到小蟾蜍",
      steps: [
        { photo: "step-eggs", label: "卵带", text: "冬眠醒来后，卵产在静水塘的浅水里。卵排在长长的胶质管子里，缠在水草上，一条有几千粒。", caption: "缠在水草上的卵带", shoot: "早春在公园水塘边远远拍缠在水草上的长条卵带，只拍不捞；和大人一起，不靠近水边" },
        { photo: "step-tadpole", label: "蝌蚪", text: "黑黑的小蝌蚪住在静水塘里，主要吃植物。", caption: "黑色的小蝌蚪", shoot: "春天在水塘边远远拍一群黑色的小蝌蚪，只看不捞；和大人一起" },
        { photo: "step-legs", label: "长腿", text: "蝌蚪先长出后腿，再长出前腿，尾巴慢慢被身体吸收。", caption: "长出腿的蝌蚪", shoot: "过几周回到同一个水塘，拍已经长出后腿或四条腿的蝌蚪，只看不捞；和大人一起" },
        { photo: "step-toadlet", label: "小蟾蜍", text: "从卵到变成小蟾蜍，大约要 64 天。", caption: "刚变好的小蟾蜍", shoot: "初夏在水塘边的湿地上拍刚上岸的小蟾蜍，拍时放一片树叶比大小，不用手碰；和大人一起" },
        { photo: "step-adult", label: "长大", text: "长大的蟾蜍多住在岸上潮湿的草丛里和石头下，冬眠和产卵时才回到水里。", caption: "长大的蟾蜍", shoot: "夏天傍晚在草丛或石头边拍一只长大的蟾蜍，远远拍，不抓不摸" },
      ],
      cite: ["ac-zh", "wiki-tadpole"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5～7 月拍到它最多。11 月到第二年 1 月很少，那时它多半在冬眠。我们是哪个月遇见它的？",
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
          tells: ["个子小，只有五六厘米长", "背上有深褐或黑色的斑", "背中间常有一条灰白或黄白色的脊纹"],
        },
      ],
      cite: ["ac-hbw", "ac-zh", "ac-hb"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它的喉咙会鼓起来叫吗？", a: "中华蟾蜍没有声囊（叫的时候能鼓起来的气囊）。黑斑侧褶蛙就有声囊。", cite: ["ac-zh", "ac-hbw"] },
        { q: "冬天蟾蜍去哪儿了？", a: "九、十月它钻进水里或松软的泥沙里冬眠。第二年 1～4 月醒来，北方比南方晚。", cite: ["ac-zh"] },
        { q: "蟾蜍吃什么？", a: "天快黑时它出来找吃的，吃昆虫、蚂蚁、蜗牛、蚯蚓和别的小动物。", cite: ["ac-zh"] },
        { q: "蝌蚪的英文 tadpole 是什么意思？", a: "它来自中古英语，意思是「蟾蜍脑袋」：tad 是蟾蜍，pole 是脑袋。", cite: ["wiki-tadpole"] },
      ],
    },
  ],
  care: "不抓不摸。眼睛后面的鼓包会挤出有毒的白浆，碰到了马上洗手，别揉眼睛。",
  nextTime: "下过雨的傍晚，和大人去小路边看看：蟾蜍是跳着走，还是爬着走？",
  sources: [
    { id: "ac-zh", title: "中华蟾蜍 Bufo gargarizans", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/289" },
    { id: "ac-hbw", title: "黑斑侧褶蛙 Pelophylax nigromaculatus", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/416" },
    { id: "ac-hb", title: "花背蟾蜍 Strauchbufo raddei", by: "中国两栖类信息系统（中国科学院昆明动物研究所）", url: "https://www.amphibiachina.org/species/302" },
    { id: "hkbu-cs", title: "蟾酥 Chansu", by: "香港浸会大学 中药材图像数据库", url: "https://sys01.lib.hkbu.edu.hk/cmed/mmid/detail.php?pid=B00369" },
    { id: "wiki-parotoid", title: "Parotoid gland", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Parotoid_gland" },
    { id: "wiki-tadpole", title: "Tadpole", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tadpole" },
  ],
  by: ["kid", "dad"],
};

export default entry;
