import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "hei-shui-ji",
  name: "黑水鸡",
  pinyin: "hēi shuǐ jī",
  scientific: "Gallinula chloropus",
  kind: "animal",
  // 红额甲+黄嘴尖、身侧白线、白尾下，和白骨顶分得开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "鹤形目", "秧鸡科", "黑水鸡属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "枯草边的一只黑水鸡", shoot: "水边芦苇旁或浮叶上的黑水鸡，侧面：红额甲、黄嘴尖和身侧白线都清楚；岸上远拍，别下水" },
  hello: "额头一块红红的「小盾牌」，嘴尖还蘸了一点黄。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "look-hei-shui-ji", caption: "岸边走路的一只黑水鸡", shoot: "湖边或公园水塘边，侧面拍一只黑水鸡：额头红盾、嘴、身侧白线和脚都在画面里；岸上远拍" },
      points: [
        { x: 0.44, y: 0.385, label: "红额甲、黄嘴尖", detail: "额头有一块没长羽毛的红皮，叫额甲；红嘴的尖端是黄的。", cite: ["wiki-en"] },
        { x: 0.5, y: 0.462, label: "身子侧面的白线", detail: "深色的身子两侧，有一道道白色条纹。", cite: ["wiki-en"] },
        { x: 0.615, y: 0.462, label: "尾巴下面一块白", detail: "尾巴下面是白的，从后面看特别显眼。", cite: ["wiki-en"] },
        { x: 0.55, y: 0.665, label: "黄绿色的长脚", detail: "腿是黄绿色的，脚趾又细又长。", cite: ["adw", "wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的脚",
      shot: { photo: "feet", caption: "黑水鸡的腿和脚趾", shoot: "它在岸边走路时，用长焦拍脚：脚趾之间有没有蹼要看清楚；别靠近" },
      text: "黄绿色的脚趾又细又长，中间没有蹼。靠着这双长脚，它能在浮叶和水草上走，也会游泳、潜水。",
      zoom: 2.5,
      start: [0.7, 0.42],
      cite: ["wiki-en", "adw"],
    },
    {
      type: "compare",
      title: "小时候没有红额甲",
      before: { photo: "juv", label: "幼鸟", caption: "灰褐色，还没有红额甲" },
      after: { photo: "side-view", label: "成鸟", caption: "红额甲、黄嘴尖" },
      text: "小黑水鸡身上偏褐色，额头也没有红盾牌。长大后身子变成深黑灰色，额头和嘴变红，嘴尖是黄的。",
      cite: ["wiki-en"],
    },
    {
      type: "steps",
      title: "水草里的家",
      steps: [
        { photo: "step-eggs", label: "下蛋", caption: "水草里的一窝黑水鸡蛋", text: "它在密密的水草里搭一个篮子一样的窝，一窝常有 5～9 颗蛋。", shoot: "只用参考照片：看到窝要马上走开，不要靠近" },
        { photo: "step-nest", label: "孵蛋", caption: "趴在窝里孵蛋的黑水鸡", text: "孵 17～22 天。爸爸妈妈都孵，爸爸孵得更多，还会给孵蛋的妈妈送吃的。", shoot: "只用参考照片：孵蛋的大鸟很敏感，别靠近" },
        { photo: "step-chick", label: "小黑绒球", caption: "窝边一只毛茸茸的小黑水鸡", text: "刚出壳的小鸟像个黑绒球，很快就能离开窝，爸爸妈妈一起喂它、护着它。", shoot: "夏天水边的小黑绒球，岸上远远拍，别追" },
        { photo: "juv", label: "会飞了", caption: "灰褐色的半大黑水鸡", text: "半大的小鸟是灰褐色的，没有红额甲。出壳 40～50 天就会飞了。", shoot: "夏末秋初水面上灰褐色的半大小鸟，岸上远拍" },
      ],
      cite: ["adw", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国每个月都有人拍到它，5 月最多，8 月最少。北京名录里它是夏候鸟和旅鸟，北方的黑水鸡冬天大多往南飞。北京麋鹿苑等湿地都常能见到它。",
      cite: ["bj-list", "wiki-en", "bj-guanniao"],
    },
    {
      type: "lookalike",
      title: "红盾牌还是白盾牌？",
      quiz: true,
      items: [
        {
          name: "白骨顶",
          scientific: "Fulica atra",
          shot: { photo: "look-bai-gu-ding", caption: "白骨顶" },
          tells: ["额甲和嘴都是白的，全身石板黑", "长脚趾两边有一片片蹼，很会游泳"],
        },
        {
          name: "黑水鸡",
          scientific: "Gallinula chloropus",
          self: true,
          shot: { photo: "side-view", caption: "黑水鸡" },
          tells: ["红额甲配黄嘴尖，身子侧面有白线", "黄绿色的脚趾细长，中间没有蹼"],
        },
      ],
      cite: ["wiki-en", "wiki-coot"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "下大雨了，孵蛋的黑水鸡怎么办？", a: "有人看到它在大雨里一次次把一片塑料布披在身上，像穿雨衣；雨停了再拿掉。", cite: ["adw"] },
        { q: "它会把蛋下到别人窝里吗？", a: "会！它有时把蛋偷偷下到别的黑水鸡窝里，甚至别的鸟窝里，让别人帮忙孵。", cite: ["wiki-en", "gibbons-1986"] },
        { q: "小鸟遇到危险怎么办？", a: "小鸟会紧紧抓住爸爸妈妈的身体，大鸟就带着它们一起飞到安全的地方。", cite: ["wiki-en"] },
        { q: "哥哥姐姐会帮忙带娃吗？", a: "会！先出生的小黑水鸡长大些，有的会留下来当「帮手」，帮爸爸妈妈照顾后面出生的弟弟妹妹。", cite: ["eden-1987"] },
        { q: "学名是什么意思？", a: "Gallinula 是「小母鸡」，chloropus 是「绿色的脚」：像只小鸡，还长着一双黄绿色的脚。", cite: ["wiki-en"] },
        { q: "黑水鸡吃什么？", a: "有什么吃什么：水草、种子、果子，还有虫子和小鱼。在水面、浮叶和岸上都能找吃的。", cite: ["adw"] },
      ],
    },
  ],
  care: "在岸上远远看，不追不喂，别靠近水草里的窝。水边要和大人一起，不下水，也不进芦苇荡。",
  nextTime: "下次看它走路：尾巴是不是一翘一翘，露出下面的白？",
  sources: [
    { id: "adw", title: "Gallinula chloropus (common moorhen)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Gallinula_chloropus/" },
    { id: "gibbons-1986", title: "Brood parasitism and cooperative nesting in the moorhen, Gallinula chloropus", by: "Behavioral Ecology and Sociobiology, 1986", url: "https://doi.org/10.1007/bf00300863" },
    { id: "eden-1987", title: "When do helpers help? Food availability and helping in the moorhen, Gallinula chloropus", by: "Behavioral Ecology and Sociobiology, 1987", url: "https://doi.org/10.1007/bf00303210" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-guanniao", title: "观鸟季倒计时（一） 现在就出发！", by: "首都之窗（北京市人民政府门户网站），2026", url: "https://www.beijing.gov.cn/renwen/zt/bjgnzn/qszn/202603/t20260311_4554668.html" },
    { id: "wiki-en", title: "Common moorhen", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Common_moorhen" },
    { id: "wiki-coot", title: "Eurasian coot", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Eurasian_coot" },
  ],
  by: ["kid", "dad"],
};

export default entry;