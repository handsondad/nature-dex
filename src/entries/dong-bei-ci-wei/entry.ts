import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "dong-bei-ci-wei",
  name: "东北刺猬",
  scientific: "Erinaceus amurensis",
  kind: "animal",
  // 北京陆生野生动物名录里的刺猬只有这一种，看到背上满是刺的小兽就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "劳亚食虫目", "猬科", "猬属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只刺猬", shoot: "我们遇见的那一只：夏天傍晚或夜里，在公园草丛边、灌木下。和大人一起，远远用手机拍，尽量不用闪光灯；不追、不碰、不挡它的路" },
  hello: "白天它躲起来，夜里出来找虫子和蚯蚓；冬天就冬眠了。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "在草地上找吃的刺猬", shoot: "夏天夜里和大人一起，远远拍一只正在草地上找吃的刺猬的侧面：尖嘴、小眼睛、背上的刺和脸都在画面里。不靠近、不碰" },
      points: [
        { x: 0.4, y: 0.3, label: "背上密密的短刺", detail: "背上和身体两侧长满短而密的刺。有的刺全白，有的中间一段是褐色，远看灰褐色。", cite: ["bjd-sy-cw", "wiki-en"] },
        { x: 0.665, y: 0.72, label: "又尖又长的嘴", detail: "嘴巴尖尖长长的，找吃的时候一直贴着地面闻。", cite: ["bjd-sy-cw", "wiki-en"] },
        { x: 0.565, y: 0.63, label: "黑溜溜的小眼睛", detail: "一双小眼睛黑溜溜的。它夜里找吃的，主要靠鼻子闻、耳朵听。", cite: ["bjd-sy-cw", "wiki-en"] },
        { x: 0.445, y: 0.58, label: "小小的耳朵", detail: "耳朵又小又圆，藏在刺和软毛之间，不仔细看很难发现。", cite: ["bjd-sy-cw"] },
        { x: 0.3, y: 0.74, label: "没有刺的软毛", detail: "脸上和肚子上没有刺，是浅色的软毛。四条腿和尾巴都短短的。", cite: ["wiki-en", "bjd-sy-cw"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的刺",
      shot: { photo: "spines", caption: "刺猬的脸和背上的刺", shoot: "刺猬停下不动时，用手机放大远远拍背上的刺：能看清每根刺的颜色。不靠近、不碰" },
      text: "刺一根挨一根，尖尖朝后。有的刺全白，有的两头浅、中间一段是褐色。脸上没有刺，是软软的浅色毛。",
      zoom: 2.5,
      start: [0.7, 0.22],
      cite: ["wiki-en", "adw-ee"],
    },
    {
      type: "steps",
      title: "害怕时，一步一步变成刺球",
      steps: [
        { photo: "step-forage", label: "找吃的", text: "夜里它低着头，用鼻子在草里闻来闻去，找虫子和蚯蚓。", caption: "在草地上找吃的刺猬", shoot: "夜里远远拍一只正在草地上走、低头找吃的刺猬" },
        { photo: "step-hunch", label: "缩起来", text: "听到动静，它把头往下缩，背上的刺一根根竖起来。", caption: "缩着头、刺竖起来的刺猬", shoot: "刺猬停下缩着头时，远远拍一张；别去碰它、吓它" },
        { photo: "step-ball", label: "团成球", text: "再害怕，它就把脸、脚和肚子都卷进去，变成一个刺球，只露出一点点鼻子。", caption: "团成刺球的刺猬，只露出鼻子", shoot: "如果看到团成球的刺猬，远远拍一张就走开，让它安心" },
      ],
      cite: ["bjd-sy-cw", "adw-ee"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5、6 月拍到它最多。12 月到第二年 2 月几乎拍不到，那时它在冬眠。我们是哪个月遇见它的？",
      cite: ["bjd-sy-cw", "wiki-en"],
    },
    {
      type: "lookalike",
      title: "刺猬、宠物刺猬和豪猪",
      quiz: true,
      items: [
        {
          name: "四趾刺猬（宠物刺猬）", scientific: "Atelerix albiventris",
          shot: { photo: "look-pet", caption: "四趾刺猬" },
          tells: ["脸、腿和肚皮是雪白的软毛", "老家在非洲，常被人当宠物卖"],
        },
        {
          name: "东北刺猬", scientific: "Erinaceus amurensis", self: true,
          shot: { photo: "cover", caption: "东北刺猬" },
          tells: ["刺白褐相间，远看灰褐色", "脸是浅灰褐色的软毛", "夜里在北京的公园草丛里出没"],
        },
        {
          name: "东亚豪猪", scientific: "Hystrix brachyura",
          shot: { photo: "look-hz", caption: "东亚豪猪" },
          tells: ["个子大得多，有 10 多公斤重", "刺又长又粗，黑白一节一节的", "它是老鼠、松鼠的亲戚，和刺猬不是一家"],
        },
      ],
      cite: ["adw-aa", "wiki-en", "wiki-hz", "vincent-1986"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "刺猬的刺是什么？", a: "是变硬的空心毛，里面是角蛋白。刺没有毒，也不像豪猪的刺那样容易掉下来。", cite: ["wiki-hedgehog", "adw-ee"] },
        { q: "刺猬从高处掉下来会怎么样？", a: "科学家研究发现，刺猬的刺短短的、能弯，里面还有一格格的支撑。从高处掉下来时，刺可能像弹簧垫一样帮它缓冲。", cite: ["vincent-1986"] },
        { q: "刚出生的刺猬宝宝有刺吗？", a: "近亲欧洲刺猬的宝宝刚出生时，刺藏在鼓鼓的皮肤下面。大约一天后，白色的软刺才冒出来。", cite: ["adw-ee"] },
        { q: "刺猬冬眠时身体会变凉吗？", a: "会。平时体温 30～35℃，冬眠时降到 2～5℃。近亲欧洲刺猬冬眠时，每隔一两周还会醒来一两天。", cite: ["wiki-hedgehog", "adw-ee"] },
        { q: "东北刺猬只住在东北吗？", a: "不是。华北和长江中下游也常能见到它。北京顺义的几个公园里就发现过它，它还是北京市重点保护野生动物。", cite: ["bjd-sy-cw", "bj-list"] },
        { q: "它的英文名为什么叫 hedgehog？", a: "hedge 是树篱，hog 是猪。它常在树篱里活动，鼻子又像小猪。", cite: ["wiki-hedgehog"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。看到受伤的刺猬，请大人联系动物救助站。",
  nextTime: "夏天傍晚和大人在草丛边静静听：刺猬找吃的时候，会发出什么声音？",
  sources: [
    { id: "bjd-sy-cw", title: "身边的多样生物②丨东北刺猬不止在东北", by: "北京顺义官方发布（北京日报客户端·北京号）", url: "https://xinwen.bjd.com.cn/content/s652275dce4b0237986fadbf3.html" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
    { id: "adw-ee", title: "Erinaceus europaeus (European hedgehog)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Erinaceus_europaeus/" },
    { id: "adw-aa", title: "Atelerix albiventris (African pygmy hedgehog)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Atelerix_albiventris/" },
    { id: "vincent-1986", title: "Mechanical design of hedgehog spines and porcupine quills", by: "Journal of Zoology, 1986", url: "https://doi.org/10.1111/j.1469-7998.1986.tb03620.x" },
    { id: "wiki-en", title: "Amur hedgehog", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Amur_hedgehog" },
    { id: "wiki-hedgehog", title: "Hedgehog", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hedgehog" },
    { id: "wiki-hz", title: "Malayan porcupine", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Malayan_porcupine" },
  ],
  by: ["kid", "dad"],
};

export default entry;
