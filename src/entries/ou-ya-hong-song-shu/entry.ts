import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京叫它「北松鼠」。北京常见的多是东北亚种，毛色灰褐到黑，并不怎么红。
const entry: Entry = {
  id: "ou-ya-hong-song-shu",
  name: "欧亚红松鼠",
  scientific: "Sciurus vulgaris",
  kind: "animal",
  // 冬天耳尖一簇竖起的毛、白肚皮、在高处的树上活动，对上就能和岩松鼠、花鼠分开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "啮齿目", "松鼠科", "松鼠属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只松鼠", shoot: "我们遇见的那一只：公园里在树上或树下活动的松鼠。用长焦远远拍，大尾巴和耳朵都拍进去；不走近、不投喂" },
  hello: "它在树枝间跳来跳去，秋天忙着把坚果一颗颗埋进土里。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "sitting", caption: "坐着吃东西的松鼠", shoot: "冬天（11 月到第二年 2 月）在公园远远拍一只坐着吃东西的松鼠的侧面：耳尖、白肚皮、背和大尾巴都在画面里。用长焦，不靠近、不投喂" },
      points: [
        { x: 0.42, y: 0.1, label: "耳尖一簇竖起的毛", detail: "冬天耳朵尖上有一簇向上的长毛，远看像头发竖了起来。", cite: ["bjd-gjzwy", "adw-sv"] },
        { x: 0.55, y: 0.38, label: "灰褐色的背", detail: "北京的多是灰褐、棕灰或黑色，不怎么红。夏天腿和身体两侧可能带点橙黄。", cite: ["bjd-gjzwy"] },
        { x: 0.42, y: 0.6, label: "白白的肚皮", detail: "不管背上是什么颜色，肚皮一年四季都是白色的。", cite: ["bjd-gjzwy", "adw-sv"] },
        { x: 0.82, y: 0.5, label: "毛茸茸的大尾巴", detail: "尾巴有 15～20 厘米长，蓬蓬松松的。", cite: ["wiki-zh", "adw-sv"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 9、10 月拍到它最多，1、2 月最少。它不冬眠，冬天也能见到。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "公园里的三种松鼠",
      quiz: true,
      items: [
        {
          name: "岩松鼠", scientific: "Sciurotamias davidianus",
          shot: { photo: "look-ys", caption: "岩松鼠" },
          tells: ["耳朵上没有长毛簇", "眼睛周围有一圈浅白色的眼圈", "多半在地上和石头上跑"],
        },
        {
          name: "欧亚红松鼠", scientific: "Sciurus vulgaris", self: true,
          shot: { photo: "look-sv", caption: "欧亚红松鼠" },
          tells: ["冬天耳尖有一簇竖起的毛", "肚皮是白色的", "多半在高高的树上"],
        },
        {
          name: "花鼠", scientific: "Eutamias sibiricus",
          shot: { photo: "look-hs", caption: "花鼠" },
          tells: ["个子比岩松鼠还小", "橙黄色，脸上和背上有深浅不一的条纹"],
        },
      ],
      cite: ["bjd-gjzwy", "wiki-en-ys"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "松鼠冬天要冬眠吗？", a: "欧亚红松鼠不冬眠。天气特别坏的时候，它会在窝里待上几天，天好了再出来找吃的。", cite: ["adw-sv", "wiki-en"] },
        { q: "埋起来的坚果，它都能找回来吗？", a: "找不全。一只松鼠一年能挖几百个浅洞藏吃的，靠记性只能找回四成到八成。", cite: ["bjd-gjzwy"] },
        { q: "忘掉的种子会怎么样？", a: "有的会发芽，长成小树。松鼠就这样帮森林种下了新树。", cite: ["adw-sv", "bjd-gjzwy"] },
        { q: "红松鼠一定是红色的吗？", a: "不一定。它的毛色从浅红到黑色都有。北京常见的多是灰褐、棕灰或黑色的。", cite: ["adw-sv", "bjd-gjzwy"] },
        { q: "刚出生的小松鼠什么样？", a: "身上光溜溜没有毛，眼睛也看不见。大约 30 天才睁开眼，45 天后第一次自己出窝。", cite: ["adw-sv"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。它的牙齿很锋利，别把手伸过去。",
  nextTime: "秋天远远看一只松鼠埋东西：它埋在哪儿？埋完会盖上落叶吗？",
  sources: [
    { id: "adw-sv", title: "Sciurus vulgaris (Eurasian red squirrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Sciurus_vulgaris/" },
    { id: "bjd-gjzwy", title: "在国家植物园邂逅松鼠", by: "国家植物园（北京日报客户端·北京号）", url: "https://xinwen.bjd.com.cn/content/s68fc35c2d5de24ab683d0de6.html" },
    { id: "wiki-en", title: "Red squirrel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Red_squirrel" },
    { id: "wiki-zh", title: "欧亚红松鼠", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%AD%90%E4%BA%9E%E7%B4%85%E6%9D%BE%E9%BC%A0" },
    { id: "wiki-en-ys", title: "Père David's rock squirrel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/P%C3%A8re_David%27s_rock_squirrel" },
  ],
  by: ["kid", "dad"],
};

export default entry;
