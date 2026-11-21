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
      shot: { photo: "on-wall", caption: "趴在白墙上的无蹼壁虎", shoot: "夏天夜里在亮着的灯旁边，从正面拍一只趴在墙上的壁虎：脚趾、背上的横斑、眼睛和尾巴都在画面里。和大人一起，不碰它" },
      points: [
        { x: 0.69, y: 0.36, label: "胖胖的趾头尖", detail: "每个指头、趾头的尖都鼓成一个小圆垫，下面有 5～9 道横着的攀瓣。", cite: ["sp2000-gs"] },
        { x: 0.39, y: 0.6, label: "趾头间没有蹼", detail: "五个趾头分得开开的，中间没有连着的皮（蹼），所以叫它无蹼壁虎。", cite: ["sp2000-gs"] },
        { x: 0.55, y: 0.54, label: "背上一道道横斑", detail: "灰棕色的背上，从脖子到身子有 6～7 道深色横斑。", cite: ["sp2000-gs"] },
        { x: 0.25, y: 0.39, label: "尾巴一圈圈", detail: "尾巴上的横斑更多，有 11～14 道。尾巴有点扁。", cite: ["sp2000-gs"] },
        { x: 0.76, y: 0.5, label: "眼睛不会眨", detail: "它的眼睛没有能活动的眼皮，没法像我们一样眨眼。", cite: ["sp2000-gs"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看脚底",
      shot: { photo: "toe-pads", caption: "趴在纱网上的壁虎，从下面能看到脚底", shoot: "壁虎趴在纱窗或玻璃窗外面时，从屋里隔着窗拍它的脚底，不开窗、不碰它" },
      text: "从下面看，每个趾头尖都有一道道横纹，这是攀瓣。攀瓣上长着几百万根看不见的细毛，能紧紧贴住墙；脚底还有一层很薄的油膜，帮它把水排开。",
      zoom: 2.8,
      start: [0.55, 0.17],
      cite: ["sp2000-gs", "imech-gecko"],
    },
    {
      type: "compare",
      title: "浅色的，深色的",
      before: { photo: "pale", label: "浅色的", caption: "浅得发白的一只，旁边还有一只小飞虫", shoot: "我们遇见的壁虎，从正上方远远拍背面" },
      after: { photo: "dark", label: "深色的", caption: "深褐色、带花斑的一只", shoot: "换个地方再遇见一只时，同样从正上方拍，比比颜色" },
      text: "都是无蹼壁虎，一只浅得发白，一只深褐带花斑。资料上说，它背上颜色的深浅，和住的地方、个子大小都有关系。",
      cite: ["sp2000-gs"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7～9 月拍到它最多，8 月是高峰。12 月和 1 月几乎拍不到：住在温带的蜥蜴，冬天要休眠。我们是哪个月遇见它的？",
      cite: ["kepu-lizard"],
    },
    {
      type: "lookalike",
      title: "北京的小蜥蜴，别认错",
      quiz: true,
      items: [
        {
          name: "丽斑麻蜥",
          scientific: "Eremias argus",
          shot: { photo: "look-ma-xi", caption: "丽斑麻蜥" },
          tells: ["白天在草地、沙地、石头上晒太阳", "背上有一圈圈「小眼睛」一样的斑，趾头细长带尖爪"],
        },
        {
          name: "无蹼壁虎",
          scientific: "Gekko swinhonis",
          self: true,
          shot: { photo: "look-bi-hu", caption: "无蹼壁虎" },
          tells: ["夏天夜里趴在墙上、灯旁边", "趾头尖胖胖的，眼睛不会眨"],
        },
        {
          name: "黄纹石龙子",
          scientific: "Plestiodon capito",
          shot: { photo: "look-shi-long-zi", caption: "黄纹石龙子" },
          tells: ["鳞片光滑发亮，一片压一片像瓦片", "背上和身体两侧有浅色的纵线"],
        },
      ],
      cite: ["sp2000-gs", "sp2000-ea", "sp2000-pc", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "壁虎为什么能趴在天花板上？", a: "每个脚趾上有几百万根细刚毛，每根刚毛尖上又分出 100～1000 根更细的小「铲子」。它们紧贴墙面，靠分子之间的引力粘住。", cite: ["imech-gecko"] },
        { q: "尾巴断了怎么办？", a: "遇到危险，它能自己断掉尾巴，断尾还会跳一阵，引开敌人。断处能长出新尾巴，但新尾巴里没有一节一节的尾椎骨。", cite: ["kepu-lizard"] },
        { q: "尾巴除了逃命，还有什么用？", a: "科学家让北京壁虎跳过障碍：有尾巴的，起跳前把尾巴往上一甩，跳得更高；没尾巴的跳得低，身子也更容易转圈。", cite: ["yuan-2023"] },
        { q: "它还有别的名字吗？", a: "有！俗名有守宫、蝎虎、爬墙虎、天龙。英文叫 Peking gecko，就是「北京壁虎」；学名纪念英国博物学家 Swinhoe。", cite: ["sp2000-gs", "rdb-gs"] },
        { q: "壁虎有毒吗？", a: "没有。很多人以为蜥蜴有毒，其实全世界约 6000 种蜥蜴里，已知只有两种有毒，都住在北美洲和中美洲。", cite: ["kepu-lizard"] },
        { q: "它出过国吗？", a: "出过。韩国仁川新发现了北京壁虎。科学家推测，它们是跟着进出口的货物，被不小心带过去的。", cite: ["kwon-2023", "park-2024"] },
      ],
    },
  ],
  care: "只看不抓，别拽它的尾巴；碰到了马上洗手。夜里看灯下的壁虎要和大人一起。",
  nextTime: "夏天夜里连着看几晚楼道灯：是不是总有同一只壁虎守在同一盏灯下？",
  sources: [
    { id: "sp2000-gs", title: "Gekko swinhonis 无蹼壁虎", by: "中国生物物种名录（Species 2000 中国节点，引《河北动物志》）", url: "http://www.sp2000.org.cn/Fauna/fauna/detil/6478" },
    { id: "sp2000-ea", title: "Eremias argus 丽斑麻蜥", by: "中国生物物种名录（Species 2000 中国节点，引《河北动物志》）", url: "http://www.sp2000.org.cn/Fauna/fauna/detil/6479" },
    { id: "sp2000-pc", title: "Eumeces capito 黄纹石龙子", by: "中国生物物种名录（Species 2000 中国节点，引《河北动物志》）", url: "http://www.sp2000.org.cn/Fauna/fauna/detil/6481" },
    { id: "rdb-gs", title: "Gekko swinhonis", by: "The Reptile Database", url: "https://reptile-database.reptarium.cz/species?genus=Gekko&species=swinhonis" },
    { id: "bj-list", title: "北京陆生野生动物名录—两栖爬行类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071636.shtml" },
    { id: "kepu-lizard", title: "蜥蜴亚目", by: "科普中国·科学百科", url: "https://www.kepuchina.cn/article/articleinfo?ar_id=356248&business_type=100" },
    { id: "imech-gecko", title: "人类从“飞檐走壁”的壁虎学到了什么？", by: "中国科学院力学研究所", url: "https://imech.cas.cn/science/lxyd/kp/202609/t20260910_8280617.html" },
    { id: "yuan-2023", title: "Pitch posture regulation in Peking geckos (Gekko swinhonis): assessing the role of tails before take-off in upward jumping", by: "Biological Journal of the Linnean Society, 2023", url: "https://doi.org/10.1093/biolinnean/blad065" },
    { id: "kwon-2023", title: "First record and origin of the non-native Peking gecko Gekko swinhonis Günther, 1864 (Squamata: Gekkonidae), newly discovered in Incheon Metropolitan City, South Korea", by: "BioInvasions Records, 2023", url: "https://doi.org/10.3391/bir.2023.12.4.27" },
    { id: "park-2024", title: "Establishment potential across South Korea for two gecko species, Gekko japonicus and G. swinhonis, adapted to different climates", by: "NeoBiota, 2024", url: "https://doi.org/10.3897/neobiota.93.118085" },
  ],
  by: ["kid", "dad"],
};

export default entry;
