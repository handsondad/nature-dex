import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京名录里是市重点保护；和花鼠、岩松鼠都可能认错。
const entry: Entry = {
  id: "yin-wen-hua-song-shu",
  name: "隐纹花松鼠",
  scientific: "Tamiops swinhoei",
  kind: "animal",
  // 鼻到颈的浅黄条、背上较淡的条纹、耳尖白毛簇；条纹不如花鼠鲜明
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "哺乳纲", "啮齿目", "松鼠科", "花松鼠属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只隐纹花松鼠", shoot: "树上或灌木间的隐纹花松鼠。用长焦远远拍侧面：脸上条纹、背上条纹和耳尖白毛都清楚；不靠近、不投喂" },
  hello: "小小一只，脸上和背上都有浅浅的条纹，耳尖还点着一小撮白。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-branch", caption: "树枝上的隐纹花松鼠", shoot: "树上停着的一只，侧面微距或长焦：鼻到颈的条纹、背上条纹、耳尖和尾巴都在画面里" },
      points: [
        { x: 0.69, y: 0.47, label: "鼻到颈的浅黄条", detail: "从鼻子两侧到脖子，各有一条浅黄色的条纹。", cite: ["adw"] },
        { x: 0.67, y: 0.33, label: "耳尖一小撮白", detail: "耳朵后面尖上有一小撮白色的毛。", cite: ["adw"] },
        { x: 0.48, y: 0.4, label: "背上淡淡的条纹", detail: "背上有肉桂色到黄色的条纹，颜色比近亲淡一些，到肩膀就停，不和脸上的条连成一线。", cite: ["adw"] },
        { x: 0.45, y: 0.6, label: "小小的身子", detail: "身子大约只有 10 厘米左右，体重约 60 克，比岩松鼠、红松鼠都小一圈。", cite: ["adw"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的条纹",
      shot: { photo: "stripes", caption: "回头张望的隐纹花松鼠", shoot: "它停下来张望时，用长焦从侧后方拍：脸上的浅条、耳尖和背上的条纹都清楚；不靠近、不投喂" },
      text: "先把放大镜移到耳朵上，找那一小撮白毛；再顺着眼睛下面那条浅色的纹往后看，它到脖子就断了，和背上的条纹接不上。",
      zoom: 2.5,
      start: [0.59, 0.47],
      cite: ["adw"],
    },
    {
      type: "steps",
      title: "它在树上怎么过一天",
      steps: [
        { photo: "step-climb", label: "爬树", text: "它白天出来，大多待在树上：找吃的、做窝都在树冠里。", caption: "爬在树干上的隐纹花松鼠", shoot: "白天在林子里抬头找，远远拍树干上爬的小松鼠" },
        { photo: "step-down", label: "头朝下", text: "它的身体很会爬树。这只头朝下趴在树干上，一点也不会滑下去。", caption: "头朝下趴在树干上的隐纹花松鼠", shoot: "它在树干上换方向时远远拍；不拍打树干、不吓它" },
        { photo: "step-eat", label: "捧着吃", text: "找到种子，它坐下来用前爪捧着吃，吃不完的还会藏起来。", caption: "坐着捧住食物吃的隐纹花松鼠", shoot: "它停下来吃东西时远远拍，看它的前爪怎么捧；不投喂" },
      ],
      cite: ["adw"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5、6 月拍到它最多，3 月很少。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "三只带条纹或不带条纹的小松鼠",
      quiz: true,
      items: [
        {
          name: "花鼠", scientific: "Tamias sibiricus",
          shot: { photo: "look-hs", caption: "花鼠" },
          tells: ["背上五道深色条纹又粗又清楚", "脸颊里有能装吃的颊囊", "常在地上跑，在地下打洞做窝"],
        },
        {
          name: "隐纹花松鼠", scientific: "Tamiops swinhoei", self: true,
          shot: { photo: "look-self", caption: "隐纹花松鼠" },
          tells: ["背上的条纹淡，到肩膀就停", "耳尖有一小撮白毛", "多在树上"],
        },
        {
          name: "岩松鼠", scientific: "Sciurotamias davidianus",
          shot: { photo: "look-ys", caption: "岩松鼠" },
          tells: ["个子大得多，身子 20 厘米以上", "背是青灰色的，没有条纹", "多在石头上跑"],
        },
      ],
      cite: ["adw", "bj-sq"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "隐纹花松鼠吃什么？", a: "主要吃种子、坚果和植物的其他部分，也会喝花蜜。它会把吃的藏在各处，以后再来找。", cite: ["adw"] },
        { q: "松鼠也会偷花蜜吗？", a: "会。在云南的热带森林里，有人看到它钻到山姜的花里喝蜜。被它弄伤的花，结的果子变少了。", cite: ["deng-2004"] },
        { q: "为什么叫「隐纹」？", a: "它背上的条纹比较淡，不像近亲那么鲜艳醒目，好像藏起来了一样。", cite: ["adw"] },
        { q: "北京的山里常见吗？", a: "不太常见。门头沟用红外相机调查时，拍到的 4 种松鼠里它最少，岩松鼠最多。", cite: ["ji-2020"] },
        { q: "四种松鼠住一起，不打架吗？", a: "门头沟的四种松鼠有的住在同一片山里，但它们出来活动的时间各不相同，彼此争抢就少了。", cite: ["ji-2020"] },
        { q: "北京保护它吗？", a: "保护。北京陆生野生动物名录里，它是「北京市重点」保护动物。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。别用手去够树上的它。",
  nextTime: "下次数一数：它脸上有几条浅色纹？背上的纹是不是比花鼠淡？",
  sources: [
    { id: "adw", title: "Tamiops swinhoei (Swinhoe's striped squirrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Tamiops_swinhoei/" },
    { id: "ji-2020", title: "北京市门头沟区松鼠亚科物种监测", by: "吉晟男 等，《动物学杂志》2020, 55(3)", url: "https://doi.org/10.13859/j.cjz.202003002" },
    { id: "deng-2004", title: "The Striped Squirrel (Tamiops swinhoei hainanus) as a Nectar Robber of Ginger (Alpinia kwangsiensis)", by: "Deng 等，Biotropica 2004", url: "https://doi.org/10.1111/j.1744-7429.2004.tb00357.x" },
    { id: "bj-sq", title: "北京松鼠知多少？", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202110/t20211012_2511036.shtml" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
