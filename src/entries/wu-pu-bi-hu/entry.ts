import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "wu-pu-bi-hu",
  name: "无蹼壁虎",
  scientific: "Gekko swinhonis",
  kind: "animal",
  // 北京陆生野生动物名录里的壁虎只有这一种；再看脚趾间没有蹼就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "爬行纲", "有鳞目", "壁虎科", "壁虎属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只壁虎", shoot: "我们遇见的那一只：夏天夜里，楼道灯或路灯旁的墙上。和大人一起远远拍，脚趾和尾巴都拍进去；不抓不摸" },
  hello: "夏天夜里，它趴在亮着的灯旁边，等飞来的小虫。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "on-wall", caption: "趴在墙上的壁虎", shoot: "夏天夜里在亮着的灯旁边，从正面拍一只趴在墙上的壁虎：脚趾、背上的横斑、眼睛和尾巴都在画面里。和大人一起，不碰它" },
      points: [
        { x: 0.25, y: 0.3, label: "胖胖的脚趾头", detail: "每个指头、趾头的尖都是膨大的，下面有 5～9 道横着的攀瓣。", cite: ["sp2000-gs"] },
        { x: 0.3, y: 0.42, label: "脚趾间没有蹼", detail: "指头和趾头之间是分开的，没有连着的皮（蹼），所以叫它无蹼壁虎。", cite: ["sp2000-gs", "sy-gs"] },
        { x: 0.5, y: 0.5, label: "背上一道道横斑", detail: "灰棕色的背上有 6～7 道深色横斑，尾巴上还有 11～14 道。", cite: ["sp2000-gs"] },
        { x: 0.52, y: 0.14, label: "没有能动的眼皮", detail: "它的眼睛没有能活动的眼皮，没法像我们一样眨眼。", cite: ["sp2000-gs"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7、8 月拍到它最多。12 月和 1 月几乎拍不到，那时它在冬眠。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "壁虎为什么能趴在天花板上？", a: "每个脚趾上有几百万根细细的刚毛，刚毛尖上还有更细的小“铲子”。它们紧贴墙面，靠分子之间的引力粘住。", cite: ["imech-gecko", "sy-gs"] },
        { q: "壁虎为什么会断尾巴？", a: "遇到危险时，它的尾巴会自己断掉。断下的尾巴还会跳一阵，引开敌人的注意，它趁机逃走。", cite: ["kepu-lizard", "sy-gs"] },
        { q: "长出来的新尾巴和原来一样吗？", a: "不完全一样。新尾巴里没有一节一节的尾椎骨，只有一根连续的骨棱，鳞片的排列也不一样。", cite: ["kepu-lizard"] },
        { q: "它还有别的名字吗？", a: "有！俗名有爬墙虎、守宫、天龙、蝎虎。英文叫 Peking gecko，就是「北京壁虎」。", cite: ["sp2000-gs", "rdb-gs"] },
        { q: "壁虎有毒吗？", a: "没有。很多人以为蜥蜴有毒，其实全世界已知只有两种有毒的蜥蜴，都住在北美洲和中美洲。", cite: ["kepu-lizard"] },
      ],
    },
  ],
  care: "只看不抓，别拽它的尾巴；碰到了马上洗手。夜里看灯下的壁虎要和大人一起。",
  nextTime: "夏天夜里连着看几晚楼道灯：是不是总有同一只壁虎守在同一盏灯下？",
  sources: [
    { id: "sp2000-gs", title: "Gekko swinhonis 无蹼壁虎", by: "中国生物物种名录（Species 2000 中国节点，引《河北动物志》）", url: "http://www.sp2000.org.cn/Fauna/fauna/detil/6478" },
    { id: "sy-gs", title: "身边的多样生物⑬丨拥有两项“超能力”的无蹼壁虎", by: "顺义区融媒体中心、顺义区生态环境局", url: "http://web.sydst.chinamcloud.com/sydst_html/sy/tj/492076.shtml" },
    { id: "kepu-lizard", title: "蜥蜴亚目", by: "科普中国·科学百科", url: "https://www.kepuchina.cn/article/articleinfo?ar_id=356248&business_type=100" },
    { id: "imech-gecko", title: "人类从“飞檐走壁”的壁虎学到了什么？", by: "中国科学院力学研究所", url: "https://imech.cas.cn/science/lxyd/kp/202609/t20260910_8280617.html" },
    { id: "rdb-gs", title: "Gekko swinhonis", by: "The Reptile Database", url: "https://reptile-database.reptarium.cz/species?genus=Gekko&species=swinhonis" },
  ],
  by: ["kid", "dad"],
};

export default entry;
