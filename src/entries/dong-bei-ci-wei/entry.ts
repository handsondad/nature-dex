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
      shot: { photo: "side-view", caption: "在草地上找吃的刺猬", shoot: "夏天夜里和大人一起，远远拍一只正在草地上找吃的刺猬的侧面：尖嘴、小眼睛、背上的刺和短腿都在画面里。不靠近、不碰" },
      points: [
        { x: 0.58, y: 0.3, label: "背上密密的短刺", detail: "背上和身体两侧长满短而密的刺。有的刺全白，有的中间一段是褐色，远看灰褐色。", cite: ["bjd-sy-cw", "wiki-en"] },
        { x: 0.1, y: 0.6, label: "又尖又长的嘴", detail: "嘴巴尖尖长长的，耳朵小小的。", cite: ["bjd-sy-cw"] },
        { x: 0.22, y: 0.45, label: "黑溜溜的小眼睛", detail: "一双小眼睛黑溜溜的，藏在脸上的软毛里。", cite: ["bjd-sy-cw", "wiki-en"] },
        { x: 0.35, y: 0.82, label: "软毛和短腿", detail: "脸上和肚子上没有刺，是浅色的软毛。四条腿短短的，尾巴也很短。", cite: ["wiki-en", "bjd-sy-cw"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5、6 月拍到它最多。12 月到第二年 2 月几乎拍不到，那时它在冬眠。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "刺猬的刺是什么？", a: "是空心的毛，里面的角蛋白让它变得硬硬的。刺没有毒，也不像豪猪的刺那样容易掉下来。", cite: ["wiki-hedgehog"] },
        { q: "刺猬害怕了会怎么样？", a: "它把身体团成一个刺球，把有毛的脸、脚和肚子都藏在里面，刺朝外竖起来。", cite: ["wiki-hedgehog", "bjd-sy-cw"] },
        { q: "刺猬冬眠时身体会变凉吗？", a: "会。刺猬平时体温 30～35℃，冬眠时降到 2～5℃。东北刺猬大约 10 月开始冬眠，一直睡到春天。", cite: ["wiki-hedgehog", "wiki-en"] },
        { q: "东北刺猬只住在东北吗？", a: "不是。华北和长江中下游也常能见到它。北京顺义的几个公园里，调查人员就发现过它。", cite: ["bjd-sy-cw"] },
        { q: "它的英文名为什么叫 hedgehog？", a: "hedge 是树篱，hog 是猪。它常在树篱里活动，鼻子又像小猪。", cite: ["wiki-hedgehog"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。看到受伤的刺猬，请大人联系动物救助站。",
  nextTime: "夏天傍晚和大人在草丛边静静听：刺猬找吃的时候，会发出什么声音？",
  sources: [
    { id: "bjd-sy-cw", title: "身边的多样生物②丨东北刺猬不止在东北", by: "北京顺义官方发布（北京日报客户端·北京号）", url: "https://xinwen.bjd.com.cn/content/s652275dce4b0237986fadbf3.html" },
    { id: "wiki-en", title: "Amur hedgehog", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Amur_hedgehog" },
    { id: "wiki-hedgehog", title: "Hedgehog", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hedgehog" },
  ],
  by: ["kid", "dad"],
};

export default entry;
