import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京名录里它是留鸟；冬天城里也常见。大嘴是和近亲分开的关键特征。
// 正文用的照片是 iNaturalist 上可转载的对照照片（日本、印度），学名同为 Corvus macrorhynchos。
const entry: Entry = {
  id: "da-zui-wu-ya",
  name: "大嘴乌鸦",
  pinyin: "dà zuǐ wū yā",
  scientific: "Corvus macrorhynchos",
  kind: "animal",
  // 又厚又拱的大嘴、全黑发亮的羽毛，和细嘴的小嘴乌鸦分得开
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "雀形目", "鸦科", "鸦属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只大嘴乌鸦", shoot: "公园或路边树上、地上的一只大嘴乌鸦，侧身或正面，大嘴和全身都清楚；远远拍，别追" },
  hello: "一身乌黑发亮，嘴巴又厚又拱，像带了一把小铲子。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "side-view", caption: "站在木桩上的大嘴乌鸦", shoot: "手机长焦远远拍一只侧身站着的乌鸦：嘴、头、脖子和肩膀都在画面里。晴天上午光线好" },
      points: [
        { x: 0.69, y: 0.14, label: "又粗又拱的大嘴", detail: "嘴又粗又厚，上嘴拱成弧形，像一把小铲子。学名 macrorhynchos 在古希腊语里就是「长嘴」。", cite: ["cern-dzwy", "wiki-en"] },
        { x: 0.58, y: 0.1, label: "高高的额头", detail: "额头高高隆起，和大嘴连成一道陡坡。小嘴乌鸦的额头要低一些。", cite: ["cern-dzwy"] },
        { x: 0.64, y: 0.22, label: "喉咙上的长羽毛", detail: "喉咙那儿有一撮细长的羽毛，叫「羽缨」。凑近时能看见。", cite: ["wiki-en"] },
        { x: 0.42, y: 0.34, label: "黑得发紫", detail: "全身乌黑，阳光照着时，羽毛会闪一点紫色的光。", cite: ["wiki-en"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看看那张嘴",
      shot: { photo: "head", caption: "两只大嘴乌鸦的头" },
      text: "嘴又粗又厚，上嘴一路拱下来；嘴根盖着一层黑色的短硬毛，叫「鼻须」。和小嘴乌鸦比，它的额头更高，鼻须那儿还有一个小凹口。",
      zoom: 2.5,
      start: [0.62, 0.48],
      cite: ["cern-dzwy", "wiki-en"],
    },
    {
      type: "steps",
      title: "从小乌鸦到大乌鸦",
      steps: [
        { photo: "step-out", caption: "刚离窝不久的小大嘴乌鸦", label: "刚离窝", text: "小乌鸦大约 35 天就能离开窝。刚离窝时羽毛蓬蓬的，没有大鸟那么亮。" },
        { photo: "juv-eye", caption: "一只年轻的大嘴乌鸦", label: "蓝眼睛", text: "凑近看它的眼睛：年轻的大嘴乌鸦，眼睛是烟蓝色的，不是褐色。" },
        { photo: "head", caption: "两只大嘴乌鸦成鸟", label: "长大了", text: "长成大鸟后，眼睛变成深褐色，羽毛黑得发紫。" },
      ],
      cite: ["wiki-en"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有人拍到它，10 月和 5 月更多一些。北京名录里它是「留鸟」：一年到头都住在北京。我们是哪个月遇见它的？",
      cite: ["bj-list", "cern-dzwy"],
    },
    {
      type: "lookalike",
      title: "北京的乌鸦，谁是谁？",
      quiz: true,
      items: [
        {
          name: "小嘴乌鸦",
          scientific: "Corvus corone",
          shot: { photo: "look-xiao-zui", caption: "小嘴乌鸦" },
          tells: [
            "嘴更细长，额头比较低平，没有那道陡坡",
            "叫声「哇哇」，比大嘴乌鸦圆润",
            "在北京是冬候鸟；冬天城里成群过夜的乌鸦，多半是它",
          ],
        },
        {
          name: "大嘴乌鸦",
          scientific: "Corvus macrorhynchos",
          self: true,
          shot: { photo: "look-da-zui", caption: "大嘴乌鸦" },
          tells: [
            "嘴又粗又拱，额头高高隆起，嘴根盖着黑色鼻须",
            "叫声「啊啊」，比较粗哑",
            "在北京是留鸟，一年四季都在",
          ],
        },
        {
          name: "秃鼻乌鸦",
          scientific: "Corvus frugilegus",
          shot: { photo: "look-tu-bi", caption: "成鸟嘴基露白皮的秃鼻乌鸦" },
          tells: [
            "成鸟嘴基有一圈灰白色的裸皮，嘴巴更细更尖",
            "小秃鼻乌鸦脸上还有羽毛，容易和小嘴乌鸦弄混",
            "在北京是冬候鸟和旅鸟，冬天常成群来",
          ],
        },
      ],
      cite: ["cern-dzwy", "cern-xzwy", "cern-tbwy", "wiki-rook", "bj-list", "feng-2025"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "大嘴乌鸦吃什么？", a: "几乎什么都吃：动物的尸体、小动物、虫子，还有果子。树林里、城市里，它都能找到吃的。", cite: ["bow-dzwy"] },
        { q: "它认得自己的同伴吗？", a: "认得。实验里先放同伴的叫声，再给它看一张脸；脸和声音对不上时，它会多看一会儿。", cite: ["kondo-2012"] },
        { q: "它为什么这么黑？", a: "科学家发现，它身上一个管黑色素的「开关」（MC1R）一直开着。这可能是它这么黑的原因之一。", cite: ["nakano-2026"] },
        { q: "一次下几颗蛋？", a: "通常 3～5 颗。妈妈孵大约 17～19 天，小鸟大约 35 天会飞。", cite: ["wiki-en"] },
        { q: "养大一窝小乌鸦要多久？", a: "在日本北海道的研究里，从搭窝到小鸟离窝，大约要 100 天。", cite: ["tamada-1993"] },
        { q: "北京的大嘴乌鸦冬天走吗？", a: "不走。北京陆生野生动物名录里，它是「留鸟」。", cite: ["bj-list"] },
      ],
    },
  ],
  care: "远远看，不追不喂。看见鸟窝别靠近，捡到小鸟先告诉大人。",
  nextTime: "下次听一听：它叫起来是粗哑的「啊啊」，还是圆润的「哇哇」？",
  sources: [
    { id: "wiki-en", title: "Large-billed crow", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Large-billed_crow" },
    { id: "wiki-rook", title: "Rook (bird)", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Rook_(bird)" },
    { id: "bj-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "cern-dzwy", title: "大嘴乌鸦", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E5%A4%A7%E5%98%B4%E4%B9%8C%E9%B8%A6" },
    { id: "cern-xzwy", title: "小嘴乌鸦", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E5%B0%8F%E5%98%B4%E4%B9%8C%E9%B8%A6" },
    { id: "cern-tbwy", title: "秃鼻乌鸦", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%A7%83%E9%BC%BB%E4%B9%8C%E9%B8%A6" },
    { id: "bow-dzwy", title: "Large-billed Crow (Corvus macrorhynchos)", by: "Birds of the World, Cornell Lab of Ornithology", url: "https://birdsoftheworld.org/bow/species/labcro1/cur/introduction" },
    { id: "kondo-2012", title: "Crows cross-modally recognize group members but not non-group members", by: "Proceedings of the Royal Society B, 2012", url: "https://doi.org/10.1098/rspb.2011.2419" },
    { id: "nakano-2026", title: "Constitutive activation of MC1R in the large-billed crow (Corvus macrorhynchos) and its potential role in black plumage", by: "General and Comparative Endocrinology, 2026", url: "https://doi.org/10.1016/j.ygcen.2026.114924" },
    { id: "tamada-1993", title: "Breeding Biology of Corvus corone and C. macrorhynchos in central Hokkaido", by: "Japanese Journal of Ornithology, 1993", url: "https://doi.org/10.3838/jjo.42.9" },
    { id: "feng-2025", title: "Winter Roost Preferences of Crows in Beijing City", by: "Ecology and Evolution, 2025", url: "https://doi.org/10.1002/ece3.70931" },
  ],
  by: ["kid", "dad"],
};

export default entry;