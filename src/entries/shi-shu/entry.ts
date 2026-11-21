import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "shi-shu",
  name: "柿树",
  scientific: "Diospyros kaki",
  kind: "plant",
  // 橙黄色的大果子顶着四瓣宿存的花萼，挂果时一看就能确认
  certainty: "sure",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "杜鹃花目", "柿科", "柿属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵柿树", shoot: "我们遇见的那一棵：整棵树拍进去，9～10 月挂满橙黄色果子时最好认" },
  hello: "秋天枝头挂满橙黄色的果子，每个果子都戴着一顶四瓣的「小帽子」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "branch-fruit", caption: "挂着果子的枝条", shoot: "9～10 月拍一根低处的枝条：一两个果子连着果蒂，旁边有几片完整的叶子" },
      points: [
        { x: 0.86, y: 0.42, label: "四瓣的果蒂", detail: "果子连着枝条的地方，有花萼留下来变大的「小帽子」，分成 4 瓣，宽 3～4 厘米。", cite: ["foc-shi", "foc-diospyros"] },
        { x: 0.42, y: 0.39, label: "橙黄色的圆果子", detail: "果子从黄色到橙色，多半是圆的，小的 2 厘米，大的 8 厘米多。", cite: ["foc-shi"] },
        { x: 0.17, y: 0.37, label: "叶子上的网", detail: "叶子每边有 5～7 条侧脉，侧脉之间细细的网纹看得很清楚。", cite: ["foc-shi"] },
      ],
    },
    {
      type: "steps",
      title: "从小铃铛到橙柿子",
      steps: [
        { photo: "step-flower", label: "开花", text: "5～6 月开花，黄白色，像一个个小铃铛。雄花三五朵挤在一起，雌花一朵一朵单独长。", caption: "一簇黄白色的小花", shoot: "5～6 月拍一簇开着的花，从侧面拍出铃铛的样子" },
        { photo: "step-green", label: "青果", text: "花谢以后，花萼留在果子顶上，跟着果子一起长大。夏天的果子是青绿色的。", caption: "夏天的青柿子", shoot: "7～8 月拍一个青果子，连着上面的果蒂" },
        { photo: "step-yellow", label: "变黄", text: "秋天，果子慢慢从绿色变成黄色。", caption: "开始变黄的果子", shoot: "9 月回来，拍同一根枝条上变黄的果子" },
        { photo: "step-bare", label: "橙红", text: "9～10 月果子熟了，变成黄色到橙色，顶上还戴着那顶「小帽子」。", caption: "挂在枝头的橙色果子", shoot: "10 月拍枝头的橙色果子，连着果蒂" },
      ],
      cite: ["foc-shi", "foc-diospyros"],
    },
    {
      type: "magnifier",
      title: "凑近看一朵雌花",
      shot: { photo: "flower-macro", caption: "一朵雌花", shoot: "5～6 月找一朵单独长的花，从正面拍，能看到四片绿色的大花萼" },
      text: "外面四片绿绿的大叶子是花萼，雌花的花萼张开有 3 厘米多宽。中间黄白色的小铃铛是花冠，只有 1～1.6 厘米。等花冠掉了，花萼会留下来，变成柿子的「小帽子」。",
      zoom: 2.5,
      start: [0.47, 0.42],
      cite: ["foc-shi", "foc-diospyros"],
    },
    {
      type: "compare",
      title: "夏天青，秋天橙",
      before: { photo: "same-green", label: "夏天", caption: "青青的果子", shoot: "7～8 月选一根好找的低枝，记住站的位置，拍上面的青果子" },
      after: { photo: "same-orange", label: "秋天", caption: "变成橙黄色", shoot: "9～10 月回到同一个位置、同一个角度，再拍一张" },
      text: "柿树 5～6 月开花，9～10 月果子成熟。拍的时候记下日期，看看果子是哪天开始变黄的。",
      cite: ["foc-shi"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "在中国，大家 10 月拍到它最多，一半是挂在枝头的果子；5、6 月也不少。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "柿子还是君迁子？",
      quiz: true,
      items: [
        {
          name: "君迁子", scientific: "Diospyros lotus",
          shot: { photo: "look-jqz", caption: "一簇簇小果子" },
          tells: ["果子很小，直径只有 1～2 厘米", "果子先是淡黄色，熟透了变成蓝黑色，外面蒙一层白粉", "叶子每边侧脉多一些，有 7～10 条"],
        },
        {
          name: "柿", scientific: "Diospyros kaki", self: true,
          shot: { photo: "look-shi", caption: "橙黄色的大果子" },
          tells: ["果子大，2～8.5 厘米，熟了是黄色到橙色", "叶子每边有 5～7 条侧脉"],
        },
      ],
      cite: ["foc-jqz", "foc-shi"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "一个柿子里有几个小房间？", a: "8 个！柿子里面分成 8 个小格，种子是深褐色的，就长在格子里。", cite: ["foc-shi"] },
        { q: "生柿子为什么涩嘴？", a: "里面有会溶进水里的柿单宁。把柿子闷在二氧化碳里，果子会产生乙醛，让单宁变成不溶的胶，就不涩了。", cite: ["matsuo-tannin"] },
        { q: "人们种柿子多久了？", a: "从秦汉时就开始种了，有 2000 多年。明清时它还被当成「木本粮食」，种在常闹饥荒的地方。", cite: ["ah-history"] },
        { q: "柿饼上的白霜是什么？", a: "叫柿霜。做柿饼时水分慢慢跑掉，果肉里的糖跟着跑到表皮，凝结成一层白粉。", cite: ["bj-shishuang"] },
        { q: "秋天柿树的叶子会变色吗？", a: "会变红。天冷了，叶子里的绿色慢慢分解，红色的花青素越来越多。", cite: ["bj-qiuye"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝条。路边的柿子可能打过药：树上的不摘，掉在地上的也别捡来吃。",
  nextTime: "柿子变成橙色的时候，树上的叶子还多吗？下次去看一看。",
  sources: [
    { id: "foc-shi", title: "Diospyros kaki 柿", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200017585" },
    { id: "foc-diospyros", title: "Diospyros 柿树属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=110299" },
    { id: "foc-jqz", title: "Diospyros lotus 君迁子", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Diospyros%20lotus?t=foc" },
    { id: "matsuo-tannin", title: "A Model Experiment for De-astringency of Persimmon Fruit with High Carbon Dioxide Treatment: in vitro Gelation of Kaki-tannin by Reacting with Acetaldehyde", by: "Matsuo & Itoo, Agricultural and Biological Chemistry 1982", url: "https://doi.org/10.1271/bbb1961.46.683" },
    { id: "ah-history", title: "Industry History and Culture of Persimmon (Diospyros kaki Thunb.) in China", by: "Wang, Yang & Ruan, Acta Horticulturae 2013", url: "https://doi.org/10.17660/ActaHortic.2013.996.3" },
    { id: "bj-shishuang", title: "柿饼上的白霜，洗还是不洗？答案藏在这儿", by: "北京市市场监督管理局", url: "https://scjgj.beijing.gov.cn/zwxx/scjgdt/202512/t20251222_4356989.html" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
