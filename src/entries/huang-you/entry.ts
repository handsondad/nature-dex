import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 俗名黄鼠狼；北京名录里是市重点保护。
const entry: Entry = {
  id: "huang-you",
  name: "黄鼬",
  scientific: "Mustela sibirica",
  kind: "animal",
  // 一身橘黄或草黄、脸上咖啡褐色面罩、细长身子，北京小型鼬里最好认的一种
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "食肉目", "鼬科", "鼬属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只黄鼬", shoot: "清晨或傍晚，草地、墙根或灌木边远远出现的黄鼬。和大人一起，用长焦拍侧面：脸、身子和尾巴都进画面；不追、不喂、不摸" },
  hello: "身子细长像一条软绳子，毛是橘黄或草黄色，人们常叫它黄鼠狼。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "跑动中的黄鼬侧面", shoot: "和大人一起，远远拍一只侧面的黄鼬：脸、身子、短腿和尾巴都在画面里。用长焦，不靠近" },
      points: [
        { x: 0.28, y: 0.35, label: "咖啡褐色的面罩", detail: "脸上有一块咖啡褐色的「面罩」，嘴巴周围颜色更深一点。", cite: ["wiki-en"] },
        { x: 0.5, y: 0.45, label: "橘黄或草黄的身子", detail: "背上是亮亮的橘黄、草黄或偏桃的颜色，肚子更淡一些。", cite: ["wiki-en", "adw"] },
        { x: 0.22, y: 0.42, label: "又尖又小的头", detail: "头又窄又长，耳朵短短的，贴在头上。", cite: ["wiki-en"] },
        { x: 0.78, y: 0.55, label: "毛茸茸的长尾巴", detail: "尾巴大约有身子一半那么长，比好些亲戚的尾巴更蓬松。", cite: ["wiki-en", "adw"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 6～9 月拍到它多一些，12 月最少。它多在夜里和傍晚出来。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "黄鼬吃什么？", a: "主要抓老鼠、田鼠这类小兽。小兽少的时候，也会吃虫子、小鸟蛋。城里有时专门抓老鼠。", cite: ["wiki-en", "adw"] },
        { q: "它白天出来吗？", a: "多半在夜里和傍晚活动，大多独来独往，妈妈带孩子时会在一起。", cite: ["adw"] },
        { q: "窝在哪儿？", a: "倒木、树桩、柴堆、树根下的洞里。有时借用别的动物挖好的洞，再改大一点。", cite: ["wiki-en"] },
        { q: "宝宝出生时什么样？", a: "生下来看不见，毛很少。大约一个月睁眼，两个月左右断奶。", cite: ["wiki-en", "adw"] },
        { q: "北京保护它吗？", a: "保护。北京陆生野生动物名录里，黄鼬是「北京市重点」保护动物。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。它受惊会放出很臭的液体，别追。",
  nextTime: "下次和大人在傍晚静静看墙根或草地：它跑起来是一拱一拱的吗？",
  sources: [
    { id: "adw", title: "Mustela sibirica (Siberian weasel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Mustela_sibirica/" },
    { id: "wiki-en", title: "Siberian weasel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Siberian_weasel" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
