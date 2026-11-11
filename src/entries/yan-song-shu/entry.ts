import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 中国特有；模式产地在北京附近山地。和树上的欧亚红松鼠比，它更爱在石头和地上跑。
const entry: Entry = {
  id: "yan-song-shu",
  name: "岩松鼠",
  scientific: "Sciurotamias davidianus",
  kind: "animal",
  // 浅色眼圈、脸颊暗斑、耳朵没有长毛簇、多在石头上跑，和红松鼠、花鼠分开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "啮齿目", "松鼠科", "岩松鼠属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只岩松鼠", shoot: "山上或公园石头、矮墙上的岩松鼠。用长焦远远拍侧面：眼圈、身子和尾巴都清楚；不靠近、不投喂" },
  hello: "它更爱在石头缝和矮墙上跑，眼睛周围有一圈浅浅的白。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-rock", caption: "石头上的岩松鼠", shoot: "山石或矮墙上的岩松鼠侧面：眼睛、脸颊、背和尾巴都在画面里。用长焦，不投喂" },
      points: [
        { x: 0.4, y: 0.32, label: "浅浅的眼圈", detail: "眼睛周围有一圈浅白色，远看像戴了小眼镜。", cite: ["wiki-en"] },
        { x: 0.35, y: 0.4, label: "脸颊上的暗斑", detail: "脸颊有一块深色的斑，和浅眼圈配在一起很好认。", cite: ["wiki-en"] },
        { x: 0.48, y: 0.22, label: "耳朵没有毛簇", detail: "耳朵短短的，尖上没有冬天红松鼠那种竖起来的长毛。", cite: ["wiki-en", "wiki-sv"] },
        { x: 0.55, y: 0.48, label: "灰橄榄色的背", detail: "身子是偏暗的橄榄灰，肚子颜色更浅。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "lookalike",
      title: "北京常见的三种松鼠",
      quiz: true,
      items: [
        {
          name: "欧亚红松鼠", scientific: "Sciurus vulgaris",
          shot: { photo: "look-sv", caption: "欧亚红松鼠" },
          tells: ["冬天耳尖有一簇竖起的毛", "肚皮是白色的", "多半在高高的树上"],
        },
        {
          name: "岩松鼠", scientific: "Sciurotamias davidianus", self: true,
          shot: { photo: "look-ys", caption: "岩松鼠" },
          tells: ["耳朵上没有长毛簇", "眼睛周围有浅色眼圈", "多半在地上和石头上跑"],
        },
        {
          name: "隐纹花松鼠", scientific: "Tamiops swinhoei",
          shot: { photo: "look-hw", caption: "隐纹花松鼠" },
          tells: ["个子更小", "背上有浅黄到肉桂色的条纹", "耳朵尖有一小撮白毛"],
        },
      ],
      cite: ["wiki-en", "adw-ts", "wiki-sv"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5、6 月拍到它最多，12 月最少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "岩松鼠只住在中国吗？", a: "是。它是中国特有的物种，东部和中部多岩石的地方能见到。", cite: ["wiki-en", "wiki-zh"] },
        { q: "模式标本是在哪儿发现的？", a: "模式产地就在北京附近的山地。", cite: ["wiki-zh"] },
        { q: "它和红松鼠哪里最不像？", a: "岩松鼠耳朵没有长毛簇，更常在地面和石头上活动；红松鼠更常待在高树上。", cite: ["wiki-en", "wiki-sv"] },
        { q: "北京名录里有它吗？", a: "有。北京陆生野生动物名录—哺乳类里收录了岩松鼠。", cite: ["bj-list"] },
        { q: "为什么英文名里有 Père David？", a: "以法国传教士兼博物学家谭卫道（Père David）命名，他曾在中国采集许多动植物标本。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。它的牙齿很锋利，别把手伸过去。",
  nextTime: "下次看它逃走：是钻进石头缝，还是爬上高高的树？",
  sources: [
    { id: "wiki-en", title: "Père David's rock squirrel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/P%C3%A8re_David%27s_rock_squirrel" },
    { id: "wiki-zh", title: "岩松鼠", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%B2%A9%E6%9D%BE%E9%BC%A0" },
    { id: "wiki-sv", title: "Red squirrel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Red_squirrel" },
    { id: "adw-ts", title: "Tamiops swinhoei (Swinhoe's striped squirrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Tamiops_swinhoei/" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
