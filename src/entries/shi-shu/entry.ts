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
        { x: 0.55, y: 0.35, label: "四瓣的果蒂", detail: "果子连着枝条的地方，有花萼留下来变大的「小帽子」，分成 4 瓣，宽 3～4 厘米。", cite: ["foc-shi", "foc-diospyros"] },
        { x: 0.55, y: 0.6, label: "橙黄色的圆果子", detail: "果子从黄色到橙色，多半是圆的，小的 2 厘米，大的 8 厘米多。", cite: ["foc-shi"] },
        { x: 0.22, y: 0.3, label: "叶子上的网", detail: "叶子每边有 5～7 条侧脉，侧脉之间细细的网纹看得很清楚。", cite: ["foc-shi"] },
      ],
    },
    {
      type: "compare",
      title: "同一根枝条，夏天和秋天",
      before: { photo: "same-green", label: "夏天", caption: "青青的小果子", shoot: "7～8 月选一根好找的低枝，记住站的位置，拍上面的青果子" },
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
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "柿树的花长什么样？", a: "5～6 月开，黄白色，像个小铃铛。雌花一朵一朵单独长，雄花三五朵挤在一起。", cite: ["foc-shi"] },
        { q: "一个柿子里有几个小房间？", a: "8 个！柿子里面分成 8 个小格，种子是深褐色的，就长在格子里。", cite: ["foc-shi"] },
        { q: "人们种柿子多久了？", a: "在中国已经种了 2000 多年。后来它被带到日本、朝鲜半岛，又传到了欧洲和美洲。", cite: ["wiki-en"] },
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
    { id: "wiki-en", title: "Diospyros kaki", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Diospyros_kaki" },
    { id: "bj-shishuang", title: "柿饼上的白霜，洗还是不洗？答案藏在这儿", by: "北京市市场监督管理局", url: "https://scjgj.beijing.gov.cn/zwxx/scjgdt/202512/t20251222_4356989.html" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
  ],
  by: ["kid", "dad"],
};

export default entry;
