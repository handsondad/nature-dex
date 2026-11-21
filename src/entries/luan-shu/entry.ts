import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "luan-shu",
  name: "栾树",
  scientific: "Koelreuteria paniculata",
  kind: "plant",
  // 复羽叶栾树很像：拍到叶子（一回还是二回羽状）和果子顶端（尖还是圆）再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "无患子目", "无患子科", "栾属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵栾树", shoot: "我们遇见的那一棵：整棵树拍进去，6～8 月满树黄花或秋天挂满果子时最好认" },
  hello: "夏天满树小黄花，秋天挂满三片薄皮围成的「小灯笼」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf-fruit", caption: "叶子和一串小灯笼", shoot: "9～10 月拍一根低处的枝条：一整片大叶子和一串「小灯笼」都要看得清" },
      points: [
        { x: 0.75, y: 0.3, label: "一片大叶子像羽毛", detail: "一片叶子最长能到 50 厘米，上面排着很多小叶，常有 11～18 片。", cite: ["foc-luan"] },
        { x: 0.88, y: 0.6, label: "小叶边上有粗齿", detail: "小叶边上是不整齐的圆钝锯齿，有的地方裂得更深。", cite: ["foc-luan"] },
        { x: 0.58, y: 0.66, label: "三条棱的小灯笼", detail: "果子是圆锥形的，长 4～6 厘米，有三条棱，顶端尖尖的。", cite: ["foc-luan"] },
        { x: 0.31, y: 0.58, label: "果皮薄得像纸", detail: "果皮像一层薄膜，上面有网一样的纹路，整个果子鼓鼓的。", cite: ["foc-koel", "wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一朵小黄花",
      shot: { photo: "flower-close", caption: "一小簇栾树花", shoot: "6～8 月，凑近拍一小簇花：看清向后翻的花瓣和花中间橙红色的一点" },
      text: "每朵小花有 4 片花瓣，开花时向后翻。花瓣底下有小鳞片，先是黄色，开花时变成橙红色。",
      zoom: 2.5,
      start: [0.6, 0.45],
      cite: ["foc-luan"],
    },
    {
      type: "steps",
      title: "从小黄花到小灯笼",
      steps: [
        { photo: "step-flower", label: "开花", text: "6～8 月，枝头冒出一大串小黄花，一串能有 25～40 厘米长。", caption: "一大串小黄花", shoot: "夏天拍一整串花序" },
        { photo: "step-green", label: "绿灯笼", text: "花谢了，结出一个个鼓鼓的绿色小灯笼。", caption: "满枝绿色的小灯笼", shoot: "花谢后去同一棵树，拍刚长出的绿果子" },
        { photo: "step-pink", label: "变颜色", text: "到了秋天，小灯笼从绿色慢慢变成橙色、粉红色。", caption: "开始变粉的小灯笼", shoot: "9 月再去拍同一串，看颜色变了没有" },
        { photo: "step-brown", label: "干成褐色", text: "再过一阵，果皮干了，变成褐色，薄得像纸，风一吹沙沙响。", caption: "干透的褐色小灯笼", shoot: "深秋拍挂在枝头的干果子" },
        { photo: "step-seed", label: "种子", text: "干果子裂成 3 片，里面是圆圆的黑种子，直径 6～8 毫米。", caption: "裂开的果皮和黑色种子", shoot: "捡一个落地裂开的果子放在手心，拍里面的种子" },
      ],
      cite: ["foc-luan", "foc-koel", "wiki-en"],
    },
    {
      type: "compare",
      title: "夏天和秋天",
      before: { photo: "same-summer", label: "夏天", caption: "满树小黄花", shoot: "选一棵好找的栾树，记住站的位置，开花时拍一张" },
      after: { photo: "same-autumn", label: "秋天", caption: "叶子变成了金黄色", shoot: "10 月底回到同一个位置、同一个角度，再拍一张" },
      text: "夏天它是满树的黄花，秋天轮到叶子变黄。天冷以后叶子里的叶绿素慢慢分解，黄色的类胡萝卜素和叶黄素多起来，叶子就黄了。",
      cite: ["foc-luan", "bj-qiuye"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 7、8 月拍到它最多；标注开花的集中在 6～8 月。冬天也有人拍到树上挂着果子。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "谁的「小灯笼」？",
      quiz: true,
      items: [
        {
          name: "复羽叶栾树", scientific: "Koelreuteria bipinnata",
          shot: { photo: "look-fu-yu-ye", caption: "复羽叶栾树" },
          tells: ["叶子是二回羽状的：小叶上还分小叶", "小灯笼是椭圆或圆球形，顶端圆圆的", "果子常是淡紫红色"],
        },
        {
          name: "栾树", scientific: "Koelreuteria paniculata", self: true,
          shot: { photo: "look-luan-shu", caption: "栾树" },
          tells: ["叶子多是一回羽状，有时只有一部分分成二回", "小灯笼是圆锥形，顶端尖尖的", "小叶边上是不整齐的钝锯齿"],
        },
        {
          name: "倒地铃", scientific: "Cardiospermum halicacabum",
          shot: { photo: "look-dao-di-ling", caption: "倒地铃" },
          tells: ["不是树，是爬藤的草，靠卷须往上爬", "小灯笼小一些，只有 1.5～3 厘米，上面有毛", "黑种子上有一块心形的斑"],
        },
      ],
      cite: ["foc-koel", "foc-luan", "foc-fuyu", "foc-daodiling"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "栾树的英文名叫什么？", a: "叫 goldenrain tree，意思是「金雨树」。夏天它开出一大串一大串的小黄花，一串能有 25～40 厘米长。", cite: ["wiki-en", "foc-luan"] },
        { q: "小灯笼里装着什么？", a: "小灯笼由 3 片薄果皮围成 3 个小格。熟了从中间裂开，露出圆圆的黑种子，直径 6～8 毫米。", cite: ["foc-koel", "foc-luan"] },
        { q: "栾树的老家在哪儿？", a: "在中国和朝鲜半岛。1747 年它被带到欧洲，1763 年到了北美洲，现在世界各地都有人种它。", cite: ["wiki-en"] },
        { q: "秋天它的叶子变成什么颜色？", a: "会变黄。北京秋天变黄的树里，除了银杏，还有栾树、洋白蜡、白桦。", cite: ["bj-qiuye"] },
        { q: "黑种子能吃吗？", a: "不能。科学家分析过栾树种子里的油，有四成多是一种含氰的特殊油脂。", cite: ["lipids-1970"] },
        { q: "它会「跑」到野外去吗？", a: "会。在美国东部一些地方，它从花园里跑到野外长了起来，被当成入侵植物。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条。落下的小灯笼可以捡起来看，但别放进嘴里，种子也不能吃；路边的树还可能打过药。",
  nextTime: "小黄花谢的时候，树下会铺上一层黄色吗？夏天去树下看看。",
  sources: [
    { id: "foc-luan", title: "Koelreuteria paniculata 栾树", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Koelreuteria%20paniculata?t=foc" },
    { id: "foc-koel", title: "Koelreuteria 栾树属", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Koelreuteria?t=foc" },
    { id: "foc-fuyu", title: "Koelreuteria bipinnata 复羽叶栾树", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Koelreuteria%20bipinnata?t=foc" },
    { id: "foc-daodiling", title: "Cardiospermum halicacabum 倒地铃", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Cardiospermum%20halicacabum?t=foc" },
    { id: "wiki-en", title: "Koelreuteria paniculata", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Koelreuteria_paniculata" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
    { id: "lipids-1970", title: "Cyanolipids of Koelreuteria paniculata Laxm. seed oil", by: "Lipids（1970）", url: "https://doi.org/10.1007/bf02531433" },
  ],
  by: ["kid", "dad"],
};

export default entry;