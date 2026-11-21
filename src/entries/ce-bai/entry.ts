import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "ce-bai",
  name: "侧柏",
  scientific: "Platycladus orientalis",
  kind: "plant",
  // 圆柏也常被叫作「柏树」：拍到扁平成片的小枝、带钩的球果再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "松柏纲", "松柏目", "柏科", "侧柏属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "一枝扁扁的侧柏小枝", shoot: "我们遇见的那一棵：整棵树连同树干拍进去，树皮一条一条的也要看得见" },
  hello: "小枝扁扁的，像一把把绿色的小扇子，一年四季都不落叶。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "branch-cones", caption: "扁平的小枝和一串蓝绿色的球果", shoot: "正对着一枝小枝拍，让它摊开占满画面；如果枝头有小球果，一起拍进去" },
      points: [
        { x: 0.82, y: 0.62, label: "小枝扁扁的", detail: "小枝是扁的，排在同一个平面上，像一把摊开的扇子。", cite: ["iplant-cb", "gdb-cb"] },
        { x: 0.66, y: 0.36, label: "叶子像小鳞片", detail: "叶子只有 1～3 毫米长，像小鳞片一样，一对一对交叉着贴在枝上。", cite: ["gdb-cb"] },
        { x: 0.47, y: 0.42, label: "蓝绿色的球果", detail: "没成熟的球果是蓝绿色的，一颗颗长在小枝顶上。", cite: ["gdb-cb"] },
        { x: 0.59, y: 0.5, label: "鳞片顶上的小钩", detail: "球果有 6 或 8 片厚鳞片，每片顶上有一个向后弯的尖钩。", cite: ["gdb-cb", "iplant-cb"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看小鳞片",
      shot: { photo: "scale-leaves", caption: "一枝侧柏小枝，叶子全是小鳞片", shoot: "对着一枝小枝近拍，把一片片鳞叶拍清楚" },
      text: "侧柏没有一根根的针叶。每片叶子只有 1～3 毫米，像鱼鳞一样一对一对交叉着，把小枝包得严严实实。",
      zoom: 2.8,
      start: [0.5, 0.3],
      cite: ["gdb-cb", "iplant-cb"],
    },
    {
      type: "steps",
      title: "从小球花到裂开的球果",
      steps: [
        { photo: "step-spring", label: "小球花", text: "3～4 月，枝头冒出一颗颗小球花，开始传花粉。", caption: "春天枝头的小球花", shoot: "3～4 月近拍枝头的小球花" },
        { photo: "step-green-cone", label: "青球果", text: "传过粉的球果慢慢长大，蓝绿色，鳞片顶上翘着小钩。", caption: "一串蓝绿色、带小钩的球果", shoot: "夏天找一串够得着看的球果，近拍" },
        { photo: "step-open-cone", label: "裂开了", text: "当年 10 月球果就成熟了，变成褐色，鳞片张开，种子掉出来。", caption: "成熟后裂开的褐色球果", shoot: "10 月以后在树下找一个裂开的球果，放在手心拍" },
      ],
      cite: ["iplant-cb", "gdb-cb"],
    },
    {
      type: "compare",
      title: "年轻的树和老树",
      before: { photo: "young-tree", label: "年轻的树", caption: "一棵年轻的侧柏，枝条往上长", shoot: "找一棵小侧柏，拍下整棵树" },
      after: { photo: "old-tree", label: "老树", caption: "一棵很老的侧柏，树干扭成一股一股", shoot: "在公园或坛庙找一棵老侧柏，拍它的树干和树冠" },
      text: "年轻的侧柏树冠像尖塔，枝条往上长。树老了，树冠变得宽宽圆圆的，树皮裂成一长条一长条。",
      cite: ["iplant-cb", "gdb-cb"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "它是常绿树，一年里每个月都有人拍到它，10 月最多。3～4 月去看小球花，10 月去捡裂开的球果。我们是哪个月遇见它的？",
      cite: ["iplant-cb"],
    },
    {
      type: "lookalike",
      title: "侧柏还是圆柏？",
      quiz: true,
      items: [
        {
          name: "圆柏", scientific: "Juniperus chinensis",
          shot: { photo: "look-yuan-bai", caption: "带白粉的小圆球和尖尖的刺叶" },
          tells: ["小树上常有尖尖扎手的刺叶", "小枝圆圆的或有四条棱，不是扁的", "球果像小圆珠，常带一层白粉，不裂开"],
        },
        {
          name: "侧柏", scientific: "Platycladus orientalis", self: true,
          shot: { photo: "look-ce-bai", caption: "摊开的一枝小枝" },
          tells: ["小枝扁扁的，排成一个平面", "叶子全是小鳞片，摸着不扎手", "球果鳞片顶上带小钩，熟了会裂开"],
        },
      ],
      cite: ["iplant-yb", "iplant-cb", "gdb-cb"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "北京的市树是什么？", a: "有两种：国槐和侧柏。1987 年 3 月 12 日，北京市人民代表大会通过决定，把它们定为北京的市树。", cite: ["bj-trees", "bj-en"] },
        { q: "北京最老的侧柏有多老？", a: "中山公园南门外有 7 棵古侧柏，叫「辽柏」，大约 1000 岁了。北京现存的古树里，侧柏的数量最多。", cite: ["bj-zs"] },
        { q: "柏树身上能长出槐树吗？", a: "能！中山公园有一棵约 600 岁的侧柏，树干裂缝里钻出一棵槐树，也有约 200 岁了，叫「槐柏合抱」。", cite: ["bj-zs"] },
        { q: "侧柏开花吗？", a: "不开花。它是裸子植物，3～4 月枝头长出小球花传花粉，种子藏在球果里。", cite: ["iplant-cb"] },
        { q: "它的种子长什么样？", a: "种子灰褐色，只有 4～6 毫米长，大多没有翅膀。一个球果里只有中间两对鳞片长种子。", cite: ["iplant-cb", "gdb-cb"] },
      ],
    },
  ],
  care: "只看、拍照，不折小枝。球果和种子不要放进嘴里。",
  nextTime: "扁扁的小枝是竖着立起来的，还是平着摊开的？下次站在树下看一看。",
  sources: [
    { id: "iplant-cb", title: "侧柏 Platycladus orientalis", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Platycladus%20orientalis" },
    { id: "iplant-yb", title: "圆柏 Juniperus chinensis", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Juniperus%20chinensis" },
    { id: "gdb-cb", title: "Platycladus orientalis (Chinese arborvitae)", by: "The Gymnosperm Database", url: "https://www.conifers.org/cu/Platycladus.php" },
    { id: "bj-trees", title: "穿越时空，说说30年前的市花市树评选", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hsdt/202106/t20210621_2417197.shtml" },
    { id: "bj-en", title: "City Trees and City Flowers", by: "北京市人民政府（英文网）", url: "https://english.beijing.gov.cn/beijinginfo/facts/citytreesandflowers/202005/t20200513_1895998.html" },
    { id: "bj-zs", title: "让古树名木“活”起来（四）", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/jj/201806/t20180615_108051.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;