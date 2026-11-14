import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 现代分类（APG / GBIF）将石榴属并入 Lythraceae，中文正式科名为千屈菜科（iNaturalist 中文库译作石榴科）。
const entry: Entry = {
  id: "zi-wei",
  name: "紫薇",
  scientific: "Lagerstroemia indica",
  kind: "plant",
  // 园林里还有矮生紫薇及杂交品种，看清6片皱边有长爪的花瓣、四棱小枝和光滑脱皮树干即可确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "桃金娘目", "千屈菜科", "紫薇属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "盛夏枝头热烈盛开的紫红色紫薇花序",
    shoot: "7～8 月在公园拍一整丛或一整枝开满绉纱花朵的紫薇，把光滑树干也拍进去更好",
  },
  hello: "大夏天别的树少花时它一开就是小半年，每片花瓣都像揉皱的彩色轻纱。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "flower-branch",
        caption: "圆珠形花蕾、六瓣皱边花朵与椭圆形叶片",
        shoot: "夏天靠近低枝拍一串紫薇花序：盛开的 6 瓣皱边花、圆球花苞和小枝上的叶片同框",
      },
      points: [
        {
          x: 0.42,
          y: 0.52,
          label: "6 片绉纱花瓣",
          detail: "每朵花有 6 片花瓣，紫、玫红、粉、白色都有，花瓣皱缩起伏，在花苞里就已经是叠皱着的。",
          cite: ["foc-zw", "foc-lyth"],
        },
        {
          x: 0.58,
          y: 0.35,
          label: "圆鼓鼓的六棱花苞",
          detail: "没开的花苞像一颗颗绿色或暗红色小圆珠，花萼筒长 7～11 毫米，常有 6 条棱，顶生圆锥花序长 7～20 厘米。",
          cite: ["foc-zw"],
        },
        {
          x: 0.78,
          y: 0.68,
          label: "几乎无柄的小椭圆叶",
          detail: "叶片椭圆形或倒卵形，长 2.5～7 厘米，叶柄极短（不到 2 毫米）或近无柄，嫩小枝常有 4 条细棱。",
          cite: ["foc-zw"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看「花爪」和长短两圈雄蕊",
      shot: {
        photo: "petal-macro",
        caption: "单朵紫薇花特写：细长的花爪与金黄花蕊",
        shoot: "正对一朵盛开的紫薇花拍微距，看清每片花瓣底下细长的花爪和中间的花蕊",
      },
      text: "仔细看花瓣连着花萼的地方：6 片圆圆的皱花瓣并不是直接贴在花心上，每片底下都举着一根 6～9 毫米长的细柄，植物学上叫「爪」！花心还有 36～42 根雄蕊，分成外长内短两种模样。",
      zoom: 2.5,
      start: [0.5, 0.5],
      cite: ["foc-zw"],
    },
    {
      type: "lookalike",
      title: "同科亲戚比一比：紫薇和千屈菜",
      quiz: true,
      items: [
        {
          name: "千屈菜",
          scientific: "Lythrum salicaria",
          shot: { photo: "look-qqc", caption: "水边成穗直立开紫红小花的草本千屈菜" },
          tells: [
            "多长在池塘和河岸浅水边的多年生草本，高约 1 米",
            "细长叶片对生，紫红色 6 瓣小花没有细长花爪，挤成直立长花穗",
          ],
        },
        {
          name: "紫薇",
          scientific: "Lagerstroemia indica",
          self: true,
          shot: { photo: "look-zw", caption: "树干光滑、枝头团簇开绉纱花的木本紫薇" },
          tells: [
            "能长到几米高的落叶灌木或小乔木，老树皮脱落后树干光溜溜的",
            "每片皱边花瓣底下都有一根细长的「花爪」，聚成蓬松的圆锥花序",
          ],
        },
      ],
      cite: ["foc-zw", "foc-lyth", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "紫薇 6～9 月开花、9～11 月结出椭圆蒴果；在中国，大家 6～9 月拍到它最多，8 月达到高峰，名副其实的「百日红」。我们是哪个月遇见它的？",
      cite: ["foc-zw", "bj-tiantan"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "为什么有人叫它「痒痒树」？它真的怕痒吗？",
          a: "树没有神经，不会觉得痒！紫薇老树皮每年脱落，树干光滑紧实、木质硬而传导震动强，加上上头树冠大、枝梢细软，手指轻摸树干的微小震动传到顶端，细枝就会轻轻晃动。",
          cite: ["cas-zw", "wiki-en"],
        },
        {
          q: "在北京公园夏天去哪儿赏紫薇？",
          a: "春天百花谢后，紫薇就是夏花主力！昌平霍营公园有「闲潭赏薇」一景，贺新公园种有红花紫薇，天坛公园百花园夏天也开满粉、紫、白各色紫薇。",
          cite: ["bj-huoying", "bj-hexin", "bj-tiantan"],
        },
        {
          q: "为什么它一会儿叫千屈菜科，一会儿叫石榴科？",
          a: "以前植物学家把石榴单列为「石榴科」；后来基因研究证实石榴和紫薇、千屈菜是一家人，就合并进了「千屈菜科」（Lythraceae），有些数据库中文名还保留着石榴科的叫法。",
          cite: ["foc-lyth", "wiki-lyth"],
        },
        {
          q: "为什么古人叫它「百日红」？",
          a: "它的圆锥花序是一朵接一朵往上开的无限花序，从 6 月一直开到 9～10 月；园林师傅在第一茬残花后及时修剪，新梢还能再开第二茬，整整热闹一夏天！",
          cite: ["bj-tiantan", "wiki-zh"],
        },
      ],
    },
  ],
  care: "只看、拍照，不摘花枝；如果想验证「痒痒树」传震动的现象，用指尖轻轻碰一下树干就好，千万别用力摇晃树身或抠刮光滑的树皮。",
  nextTime: "盛夏在公园遇见紫薇时，数一数一朵花是不是正好 6 片带细长「花爪」的皱花瓣？秋天再去看看有没有裂成 4～6 瓣的小蒴果。",
  sources: [
    {
      id: "foc-zw",
      title: "Lagerstroemia indica 紫薇",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014643",
    },
    {
      id: "foc-lyth",
      title: "Lythraceae 千屈菜科",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10529",
    },
    {
      id: "bj-hexin",
      title: "贺新公园植物配置分析与提升建议",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202304/t20230411_3003964.shtml",
    },
    {
      id: "bj-huoying",
      title: "将服务超100万位回天居民！霍营公园开园了",
      by: "北京日报客户端",
      url: "https://xinwen.bjd.com.cn/content/s60eef49be4b003a0f66af335.html",
    },
    {
      id: "bj-tiantan",
      title: "天坛公园植物科普｜紫薇",
      by: "北京市公园管理中心",
      url: "https://gygl.beijing.gov.cn/xxgk/xxgk_ywdt/202501/t20250106_3981076.html",
    },
    {
      id: "cas-zw",
      title: "“怕痒痒”的树——紫薇",
      by: "中国科学院武汉植物园",
      url: "https://wbg.cas.cn/KPPJ/zrjy/hbsjt/201309/t20130917_3932636.html",
    },
    {
      id: "wiki-en",
      title: "Lagerstroemia indica",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lagerstroemia_indica",
    },
    {
      id: "wiki-lyth",
      title: "Lythraceae",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Lythraceae",
    },
    {
      id: "wiki-zh",
      title: "紫薇",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E7%B4%AB%E8%96%87",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
