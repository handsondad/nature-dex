import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 中国特有；模式产地在北京附近山地。和树上的欧亚红松鼠比，它更爱在石头和地上跑。
const entry: Entry = {
  id: "yan-song-shu",
  name: "岩松鼠",
  scientific: "Sciurotamias davidianus",
  kind: "animal",
  // 浅色眼圈、耳朵没有长毛簇、多在石头上跑，和红松鼠、花鼠分开
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
      shot: { photo: "side-rock", caption: "土坡石头间的岩松鼠", shoot: "山石或矮墙上的岩松鼠侧面：眼睛、耳朵、背、脚和尾巴都在画面里。用长焦，不投喂" },
      points: [
        { x: 0.62, y: 0.4, label: "浅浅的眼圈", detail: "眼睛周围有一圈浅白色，远看像戴了小眼镜，是认它最好的记号。", cite: ["adw-sd", "bjd-gjzwy"] },
        { x: 0.61, y: 0.3, label: "耳朵没有毛簇", detail: "耳朵大而明显，但尖上没有红松鼠冬天那种竖起的长毛。", cite: ["bjd-gjzwy", "bj-sq"] },
        { x: 0.44, y: 0.44, label: "青灰色的背", detail: "背是偏灰的橄榄色，带一点黄；肚子颜色浅一些。", cite: ["adw-sd", "bj-sq"] },
        { x: 0.5, y: 0.71, label: "毛乎乎的脚底", detail: "脚掌底下长着很多毛，在石头上跑、爬陡坡都很稳。", cite: ["adw-sd"] },
        { x: 0.13, y: 0.55, label: "蓬松的尾巴", detail: "身子大约 20 到 25 厘米，尾巴 15 厘米左右，比身子短。", cite: ["bj-sq"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的脸",
      shot: { photo: "face", caption: "地上的岩松鼠", shoot: "等它停下来时，用长焦拍侧脸：眼圈、脸颊和胡须都清楚；不靠近、不投喂" },
      text: "把放大镜移到眼睛上：一圈浅色的毛围着黑亮的眼睛。再看看嘴边，它的脸颊里藏着颊囊，能把种子塞进去带走。",
      zoom: 2.5,
      start: [0.85, 0.62],
      cite: ["adw-sd", "bjd-gjzwy"],
    },
    {
      type: "steps",
      title: "它在石头间怎么过日子",
      steps: [
        { photo: "step-hole", label: "石缝里", text: "它的家常在灌丛下的石缝、石洞里，种子也藏在石头底下。", caption: "从石缝里探出头的岩松鼠", shoot: "山里石堆边远远等一等，看有没有小脑袋从石缝里探出来；不翻石头" },
        { photo: "step-wall", label: "爬石墙", text: "钻出来以后，它能在几乎竖直的石壁、石墙上跑来跑去。", caption: "趴在石墙上的岩松鼠", shoot: "公园或山路的石墙、护坡上，远远拍正在爬的岩松鼠" },
        { photo: "step-tree", label: "上树", text: "树上结果子的时候，它也会爬上树去吃，再把种子带回石头边。", caption: "爬上斜树干的岩松鼠", shoot: "秋天核桃、杏树结果时，远远看树上有没有岩松鼠" },
      ],
      cite: ["bj-sq", "bjd-gjzwy", "adw-sd"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 5、6 月拍到它最多，12 月最少。它不冬眠，冬天也可能见到。我们是哪个月遇见它的？",
      cite: ["adw-sd"],
    },
    {
      type: "lookalike",
      title: "北京常见的四种松鼠",
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
          name: "花鼠", scientific: "Tamias sibiricus",
          shot: { photo: "look-hs", caption: "花鼠" },
          tells: ["个子比岩松鼠小很多", "背上有五道深色条纹"],
        },
        {
          name: "隐纹花松鼠", scientific: "Tamiops swinhoei",
          shot: { photo: "look-hw", caption: "隐纹花松鼠" },
          tells: ["个子最小", "背上的条纹淡，脸上也有浅黄条纹", "耳朵尖有一小撮白毛"],
        },
      ],
      cite: ["bj-list", "adw-sd", "adw-sv", "adw-ts", "bj-sq", "bjd-gjzwy"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "岩松鼠只住在中国吗？", a: "是。它是中国特有的物种，住在东部和中部多岩石的山地，常在悬崖和峡谷的石壁边。", cite: ["adw-sd", "bj-sq"] },
        { q: "它最早是在哪儿被发现的？", a: "给它定名用的标本，产地就在北京附近的山地。", cite: ["wiki-zh"] },
        { q: "它的嘴里有口袋吗？", a: "有。它的脸颊里有颊囊，像花鼠一样，能把种子塞满一嘴带走。", cite: ["adw-sd", "bjd-gjzwy"] },
        { q: "它怎么藏种子？", a: "先在找到吃的地方附近飞快地藏好，过些日子再一点点搬到离家更近的地方。忘掉的种子可能长成新树。", cite: ["adw-sd", "bjd-gjzwy"] },
        { q: "一天里什么时候最好找它？", a: "它白天活动。夏天早上 6 点和下午 4 点左右最活跃，中午就少出来了。", cite: ["bj-sq"] },
        { q: "学名里的 davidianus 是谁？", a: "它纪念法国博物学家谭卫道（Père David），他曾在中国采集许多动植物标本。", cite: ["wiki-en"] },
      ],
    },
  ],
  care: "远远看，不摸、不喂、不带回家。它的牙齿很锋利，逗它容易被抓咬。",
  nextTime: "下次看它逃走：是钻进石头缝，还是爬上高高的树？",
  sources: [
    { id: "adw-sd", title: "Sciurotamias davidianus (Père David's rock squirrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Sciurotamias_davidianus/" },
    { id: "bj-sq", title: "北京松鼠知多少？", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202110/t20211012_2511036.shtml" },
    { id: "bjd-gjzwy", title: "在国家植物园邂逅松鼠", by: "国家植物园（北京日报客户端·北京号）", url: "https://xinwen.bjd.com.cn/content/s68fc35c2d5de24ab683d0de6.html" },
    { id: "bj-list", title: "北京陆生野生动物名录—哺乳类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071627.shtml" },
    { id: "adw-sv", title: "Sciurus vulgaris (Eurasian red squirrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Sciurus_vulgaris/" },
    { id: "adw-ts", title: "Tamiops swinhoei (Swinhoe's striped squirrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Tamiops_swinhoei/" },
    { id: "wiki-zh", title: "岩松鼠", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E5%B2%A9%E6%9D%BE%E9%BC%A0" },
    { id: "wiki-en", title: "Père David's rock squirrel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/P%C3%A8re_David%27s_rock_squirrel" },
  ],
  by: ["kid", "dad"],
};

export default entry;
