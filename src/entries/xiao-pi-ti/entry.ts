import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 名录与 iNaturalist 常用「小䴙䴘」；页面名保留「小鸊鷉」，和用户写法一致。
// 密云区园林绿化局的页面把它写成「雁形目」，那是笔误；只引它的形态和习性描述。
const entry: Entry = {
  id: "xiao-pi-ti",
  name: "小鸊鷉",
  pinyin: "xiǎo pì tī",
  scientific: "Tachybaptus ruficollis",
  kind: "animal",
  // 个子小、夏天红脖子+黄嘴角，冬天粉扑似的屁股；拍清头颈就能认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "䴙䴘目", "䴙䴘科", "小䴙䴘属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只小鸊鷉", shoot: "平静水面上的一只小鸊鷉，侧面：头、脖子和圆圆的屁股都清楚；岸上远拍，别下水" },
  hello: "小小一只，常「扑通」钻进水里；尾巴那一团毛，像一个小粉扑。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-water", caption: "繁殖季水面上的一只小鸊鷉", shoot: "湖面或水塘上一只小鸊鷉的侧面：嘴、头、脖子和后部都在画面里。岸上用长焦拍" },
      points: [
        { x: 0.6, y: 0.37, label: "嘴角一块黄", detail: "繁殖季嘴角有一块显眼的乳黄色斑，嘴巴又尖又短。", cite: ["myun", "wiki-en"] },
        { x: 0.51, y: 0.45, label: "栗红色的脖子", detail: "繁殖季喉部和脖子两侧是栗红色，像系了条红围脖。", cite: ["myun", "bjnews"] },
        { x: 0.39, y: 0.57, label: "黑褐色的背", detail: "背是黑褐色的，和栗红的脖子一比，颜色深多了。", cite: ["myun"] },
        { x: 0.25, y: 0.61, label: "粉扑似的屁股", detail: "尾巴特别短，后面一团蓬蓬的绒毛，像一个小粉扑。", cite: ["myun", "wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的脚",
      shot: { photo: "feet", caption: "一只小鸊鷉在水里把脚翻了上来", shoot: "小鸊鷉理羽时把脚翻出水面的一瞬间，脚趾上的瓣蹼要拍清楚；岸上用长焦" },
      text: "每个脚趾两边都长着一片片「瓣」，叫瓣蹼，和鸭子连成一片的蹼不一样。它的腿长在身体很靠后的地方，游泳潜水很厉害，上岸走路却很笨。",
      zoom: 2.5,
      start: [0.44, 0.56],
      cite: ["myun", "wiki-en"],
    },
    {
      type: "compare",
      title: "夏天和冬天，脖子变了色",
      before: { photo: "plumage-summer", label: "夏羽", caption: "红棕脖子配亮黄嘴角" },
      after: { photo: "plumage-winter", label: "冬羽", caption: "脖子换成浅浅的灰褐色" },
      text: "夏天繁殖季，脸颊和脖子是栗红色，嘴角一块亮黄；到了冬天，栗红褪成浅浅的灰褐色，背变成灰褐、肚子发白，蓬松的「小粉扑」还在。",
      cite: ["myun", "wiki-en"],
    },
    {
      type: "steps",
      title: "浮在水上的家",
      steps: [
        { photo: "step-nest", label: "搭浮巢", text: "爸爸妈妈衔来水草和枝条，在水面上搭一个浮巢。浮巢能跟着水位一起涨落，可风一大也容易散。", caption: "趴在浮巢上的小鸊鷉", shoot: "只用参考照片：看到浮巢要马上走开，不要靠近" },
        { photo: "step-back", label: "骑在背上", text: "一窝通常 6 颗蛋，爸爸妈妈一起孵。小雏鸟出壳后，常钻到大人背上的羽毛里。", caption: "趴在大人背上的两只小雏鸟", shoot: "只用参考照片：带娃的亲鸟很敏感，别靠近" },
        { photo: "step-young", label: "学潜水", text: "小雏鸟出壳不久就会游泳。头几天靠爸爸妈妈喂，再慢慢跟着学潜水、抓小鱼。", caption: "头上带条纹的小雏鸟", shoot: "夏天水面上毛茸茸的小雏鸟，岸上远远拍，别追" },
        { photo: "step-juv", label: "长大", text: "半大的小鸊鷉脸上有黑白条纹，嘴是黄的，嘴尖一点黑；长成大鸟后，嘴会变成黑色。", caption: "脸上带条纹的半大小鸊鷉", shoot: "夏末秋初水面上半大的小鸊鷉，岸上远拍" },
      ],
      cite: ["bjnews", "myun", "wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，1、2 月更多一些，8 月相对少。北京名录里它是「夏候鸟 / 旅鸟 / 留鸟」，还是市重点保护。我们是哪个月遇见它的？",
      cite: ["bj-list"],
    },
    {
      type: "lookalike",
      title: "冬天水面上的小个子，哪只是小鸊鷉？",
      quiz: true,
      items: [
        {
          name: "黑颈䴙䴘（冬羽）", scientific: "Podiceps nigricollis",
          shot: { photo: "look-hjpt", caption: "冬天的黑颈䴙䴘" },
          tells: ["红红的眼睛", "细细的嘴，微微往上翘", "头顶黑，脸颊后面和脖子发白发灰"],
        },
        {
          name: "小鸊鷉（冬羽）", scientific: "Tachybaptus ruficollis", self: true,
          shot: { photo: "look-self", caption: "冬天的小鸊鷉" },
          tells: ["个子最小，一身浅黄褐色", "背和头顶颜色深一些", "屁股一团蓬蓬的绒毛，像粉扑"],
        },
        {
          name: "凤头䴙䴘（冬羽）", scientific: "Podiceps cristatus",
          shot: { photo: "look-ftpt", caption: "冬天的凤头䴙䴘" },
          tells: ["个子大得多，有 46～61 厘米", "脖子又细又长，前面雪白", "头顶的黑羽冠一年四季都有"],
        },
      ],
      cite: ["wiki-hjpt", "wiki-en", "adw-gcg"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "大人离开窝时做什么？", a: "常衔水草把蛋盖起来。科学家做实验发现：盖住的蛋更不容易被偷吃，窝里也更暖和、更湿润。", cite: ["prokop-2011", "myun"] },
        { q: "小鸊鷉会在水上跑吗？", a: "会。繁殖季抢地盘、抢伴侣时，两只鸟会在水面上踩着水狂奔，快得像开了涡轮。", cite: ["bjnews"] },
        { q: "浮巢被风吹散了怎么办？", a: "故宫外筒子河上，小鸊鷉的浮巢连着三年被大风吹散。2026 年工作人员把巢托上竹筏，6 只小宝宝全孵出来了。", cite: ["bjnews"] },
        { q: "它的学名是什么意思？", a: "Tachybaptus 来自古希腊语，意思是「快」和「沉到水下」，说的就是它一眨眼就潜下去的本事。", cite: ["wiki-en"] },
        { q: "小鸊鷉吃什么？", a: "潜到水下抓小鱼、虾和水生昆虫。", cite: ["myun", "wiki-en"] },
        { q: "它的叫声像什么？", a: "繁殖期常发出一串「wee-wee-wee」，听起来有点像小马嘶鸣。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "在岸上远远看，不追不喂，看到浮巢马上走开。水边要和大人在一起，不下水。",
  nextTime: "下次盯着看半分钟：它钻进水里，大概过几秒才冒出来？",
  sources: [
    { id: "myun", title: "小䴙䴘（赏图识鸟）", by: "北京市密云区园林绿化局", url: "https://www.bjmy.gov.cn/zwgk/ztbd/myqswdyx/ysnl/202611/t20261104_556241.html" },
    { id: "bjnews", title: "鸊鷉浮巢毁三度 太庙巧计护雏安", by: "新京报，2026", url: "https://epaper.bjnews.com.cn/html/2026/20260727/20260727_A07/20260727_A07_01_9615_2081401859133673474.html" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "prokop-2011", title: "Why do grebes cover their nests? Laboratory and field tests of two alternative hypotheses", by: "Journal of Ethology, 2011", url: "https://doi.org/10.1007/s10164-010-0214-4" },
    { id: "adw-gcg", title: "Podiceps cristatus (great crested grebe)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Podiceps_cristatus/" },
    { id: "wiki-en", title: "Little grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Little_grebe" },
    { id: "wiki-hjpt", title: "Black-necked grebe", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Black-necked_grebe" },
  ],
  by: ["kid", "dad"],
};

export default entry;