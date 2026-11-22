import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "yuan-bao-feng",
  name: "元宝枫",
  pinyin: "yuán bǎo fēng",
  scientific: "Acer truncatum",
  kind: "plant",
  // 五角枫（Acer pictum）很像：拍到叶子基部是不是平的、果翅和小坚果差不多长，再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "无患子目", "无患子科", "槭树属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵元宝枫", shoot: "我们遇见的那一棵：整棵树拍进去，秋天叶子变红、变黄时最好看" },
  hello: "叶子像一只张开五指的小手，果子带着两片翅膀。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "leaf", caption: "一把元宝枫叶子", shoot: "5～9 月在低枝上找一片完整的叶子，摊开拍：五个尖角、叶子底边和叶柄都要在画面里" },
      points: [
        { x: 0.45, y: 0.73, label: "裂成 5 片", detail: "叶子多半裂成 5 片，偶尔 7 片。每片是尖尖的三角形，长 3～5 厘米。", cite: ["foc-ybf"] },
        { x: 0.57, y: 0.63, label: "叶子底边平平的", detail: "叶子挨着叶柄的那条边常常是平的，像用刀切过一样。", cite: ["foc-ybf"] },
        { x: 0.6, y: 0.54, label: "长长的叶柄", detail: "叶柄长 3～9 厘米，光溜溜的。折断会流出白色的汁，所以别去折。", cite: ["foc-ybf", "wiki-en"] },
        { x: 0.7, y: 0.67, label: "边上光光的", detail: "裂片的边缘是光滑的，没有锯齿，有时有点波浪形。", cite: ["foc-ybf", "wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看一对翅果",
      shot: { photo: "fruit-pair", caption: "挂在叶子前的一对翅果", shoot: "捡一对落下的翅果放在手心或白纸上，从正上方拍，翅膀和中间的小坚果都要清楚" },
      text: "两颗扁扁的小坚果背靠背连在一起，每颗长 1.3～1.8 厘米。各带一片绿白色的翅膀，常和小坚果差不多长，两片翅膀张开成直角或钝角。像不像一个小元宝？",
      zoom: 2.5,
      start: [0.63, 0.4],
      cite: ["foc-ybf"],
    },
    {
      type: "steps",
      title: "从花苞到翅果",
      steps: [
        { photo: "step-bud", label: "冒芽", text: "早春，冬芽打开，一簇簇小花苞和嫩叶一起冒出来，花序朝上直直地立着。", caption: "刚冒出来的花苞和嫩叶", shoot: "3～4 月去看低枝，拍刚打开的芽" },
        { photo: "step-flower", label: "开花", text: "4 月开花，满树黄绿色的小花。每朵有 5 片花瓣，长 5～7 毫米。", caption: "开满黄绿色小花的枝条", shoot: "4 月回到同一棵树，拍开花的枝条" },
        { photo: "fruit-green", label: "结翅果", text: "花谢了，结出一串串往下垂的翅果，一串有 3～10 个，翅膀是绿白色的。", caption: "一串串绿色的翅果", shoot: "5～7 月拍一串垂下来的绿翅果" },
        { photo: "step-ripe", label: "成熟", text: "8 月前后翅果成熟，颜色慢慢变黄、变干，等着被风吹下来。", caption: "开始变黄的翅果", shoot: "8～10 月再去拍同一串翅果，看颜色变了没有" },
      ],
      cite: ["foc-ybf", "wiki-en"],
    },
    {
      type: "compare",
      title: "同一棵树，夏天和秋天",
      before: { photo: "same-summer", label: "夏天", caption: "满树绿叶", shoot: "选一棵好找的元宝枫，记住站的位置，夏天拍一张全树" },
      after: { photo: "same-autumn", label: "秋天", caption: "满树金黄", shoot: "10～11 月回到同一个位置、同一个角度，再拍一张" },
      text: "秋天，元宝枫的叶子会变成砖红色、橙黄色，有的一半黄一半绿。我们这棵变成了什么颜色？",
      cite: ["bj-lihong"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "它 4 月开花，8 月前后果子成熟。在中国，大家 4 月拍到它最多，标注开花的也几乎都在 4 月；10 月看秋叶时又多了一些。我们是哪个月遇见它的？",
      cite: ["foc-ybf"],
    },
    {
      type: "lookalike",
      title: "元宝枫、五角枫还是鸡爪槭？",
      quiz: true,
      items: [
        {
          name: "五角枫",
          scientific: "Acer pictum subsp. mono",
          shot: { photo: "look-wjf", caption: "五角枫的叶子" },
          tells: ["叶子裂成 5 片或 7 片，常常裂得更浅", "小坚果更扁更小（1～1.3 厘米），翅膀长得多，连坚果有 3～3.5 厘米"],
        },
        {
          name: "元宝枫",
          scientific: "Acer truncatum",
          self: true,
          shot: { photo: "leaf-fruit", caption: "元宝枫的叶子和翅果" },
          tells: ["叶子底边常常平平的，5 个尖角边缘光滑", "翅膀和小坚果差不多长，小坚果厚实"],
        },
        {
          name: "鸡爪槭",
          scientific: "Acer palmatum",
          shot: { photo: "look-jzq", caption: "鸡爪槭的叶子" },
          tells: ["叶子小一些，深深裂成 5～7 片细长的尖角", "裂片边缘一圈都是细细的重锯齿"],
        },
      ],
      cite: ["foc-ybf", "foc-wjf", "foc-jzf", "wiki-en"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "秋天叶子为什么会变红？", a: "天冷了，叶子里的绿色（叶绿素）慢慢分解，红色的花青素越来越多，叶子就慢慢变红了。", cite: ["bj-qiuye"] },
        { q: "有没有特别红的元宝枫？", a: "有！北京市园林绿化科学研究院从普通元宝枫里选出了一个叫「丽红」的品种。普通元宝枫秋天是砖红、橙黄或黄绿参半，「丽红」到 11 月中旬会变成鲜亮的血红色。", cite: ["bj-lihong"] },
        { q: "在北京哪里能看到「丽红」？", a: "香山公园静翠湖边、西山国家森林公园、北京植物园、陶然亭公园、复兴门桥区绿地都种了。", cite: ["bj-lihong"] },
        { q: "叶柄断了会怎样？", a: "会流出白色的汁，像牛奶一样（乳汁）。可别为了看它去折叶子哦。", cite: ["wiki-en"] },
        { q: "它的种子有什么特别？", a: "比很像它的五角枫种子大，里面的油特别多。发芽时，它的两片子叶留在土里，很多槭树不是这样。", cite: ["foc-ybf", "wiki-en"] },
        { q: "种子里的油有多少？", a: "科学家测了中国 14 个地方的元宝枫种子：平均差不多三成是油，油里还有大约 6% 是一种叫「神经酸」的成分。", cite: ["gya-2018"] },
      ],
    },
  ],
  care: "只看、拍照，不折叶子和枝条。落下的翅果可以捡起来看，不要放进嘴里。",
  nextTime: "把一对翅果从高处放下，它是直直掉下去，还是转着圈落下？下次试一试。",
  sources: [
    { id: "foc-ybf", title: "Acer truncatum 元宝枫", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Acer%20truncatum?t=foc" },
    { id: "foc-wjf", title: "Acer pictum subsp. mono 五角枫", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Acer%20pictum%20subsp.%20mono?t=foc" },
    { id: "foc-jzf", title: "Acer palmatum 鸡爪枫", by: "Flora of China（植物智）", url: "https://www.iplant.cn/info/Acer%20palmatum?t=foc" },
    { id: "wiki-en", title: "Acer truncatum", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Acer_truncatum" },
    { id: "bj-lihong", title: "“丽红”元宝枫添彩北京城", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202302/t20230221_2920915.shtml" },
    { id: "bj-qiuye", title: "绚丽多彩的秋色叶", by: "北京市公园管理中心", url: "https://gygl.beijing.gov.cn/ylkj/ylkj_kjkp/202010/t20201030_2125907.html" },
    { id: "gya-2018", title: "Variability of seed oil content, fatty acid composition, and nervonic acid content in Acer truncatum, native to 14 regions of China", by: "Qiao, Xue & Feng, Grasas y Aceites 69(4), 2018", url: "https://doi.org/10.3989/gya.0465181" },
  ],
  by: ["kid", "dad"],
};

export default entry;