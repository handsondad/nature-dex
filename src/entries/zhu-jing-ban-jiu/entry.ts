import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zhu-jing-ban-jiu",
  name: "珠颈斑鸠",
  scientific: "Spilopelia chinensis",
  kind: "animal",
  // 山斑鸠也常在北京城里，拍清楚脖子上是白点（珠颈）还是条纹（山斑鸠）再改 sure
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "鸽形目", "鸠鸽科", "珠颈斑鸠属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只珠颈斑鸠", shoot: "草地上或树枝上的一只，侧身，脖子后面的珍珠点要清楚；离远一点用长焦拍，别追它" },
  hello: "脖子后面戴着一串「珍珠项链」，常在草地上低头找草籽吃。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "body", caption: "草地上散步的珠颈斑鸠", shoot: "侧身站着的一只：头、脖子、翅膀、长尾巴和脚都在画面里；全年都能拍，远拍别靠近" },
      points: [
        { x: 0.6, y: 0.42, label: "脖子上的珍珠项链", detail: "脖子两侧和后面一片黑，上面密密麻麻全是白点。这些羽毛的尖端分成两叉，像一串珍珠。", cite: ["cern-zj", "bow-spodov"] },
        { x: 0.655, y: 0.3, label: "灰脑袋、橙眼睛", detail: "头是鸽子一样的灰色，眼睛是橙色的。", cite: ["yy-zjbj", "cern-zj"] },
        { x: 0.47, y: 0.52, label: "粉褐色的身体", detail: "身长 27.5～30 厘米，和家鸽差不多大。身上褐色，脖子到肚子带一点粉。", cite: ["cern-zj", "yy-zjbj"] },
        { x: 0.2, y: 0.67, label: "又长又宽的尾巴", detail: "尾巴比较长。外侧尾羽的尖端是一大块白色，它飞起来张开尾巴时最显眼。", cite: ["cern-zj", "bow-spodov"] },
        { x: 0.5, y: 0.71, label: "红色的脚", detail: "脚是红色的。它多在地上找吃的，一受惊就立刻飞到附近的树上。", cite: ["cern-zj", "yy-zjbj"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看看珍珠项链",
      shot: { photo: "side", caption: "一只珠颈斑鸠的脖子特写" },
      text: "放大看，项链里的每根黑羽毛尖上都有白点，一颗挨一颗，像缝上去的小珍珠。",
      start: [0.52, 0.58],
      zoom: 2.2,
      cite: ["bow-spodov", "yy-zjbj"],
    },
    {
      type: "compare",
      title: "小斑鸠还没有项链",
      before: { photo: "juvenile", label: "小斑鸠", caption: "脖子上还空空的小斑鸠" },
      after: { photo: "adult", label: "成鸟", caption: "戴着珍珠项链的成鸟" },
      text: "珍珠项链只长在成鸟身上。小斑鸠脖子上没有白点，要等换上成鸟的羽毛才「戴」上它。",
      cite: ["lz-zjbj", "bow-spodov"],
    },
    {
      type: "steps",
      title: "一窝小斑鸠",
      steps: [
        { photo: "step-egg", label: "简陋的窝", caption: "细树枝搭的窝里躺着一枚白蛋", text: "窝是细树枝堆成的平盘，又松又简陋。一窝 2 枚蛋，爸爸妈妈轮流孵，大约 18 天孵出来。" },
        { photo: "step-chick", label: "喝鸽乳长大", caption: "刚长出羽毛的小斑鸠", text: "爸爸妈妈轮流照顾雏鸟，从嗉囊里吐出「鸽乳」，嘴对嘴喂给它。" },
        { photo: "step-fledge", label: "离开窝", caption: "身上还带着绒毛、在地上走的小斑鸠", text: "照顾大约两周后，小斑鸠就要离开窝，自己去生活了。" },
      ],
      cite: ["yy-zjbj", "horseman-1995"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有很多人拍到它，1～5 月多一些，夏天少一些。北京名录里它是留鸟，一年四季都住在这儿。我们是哪个月遇见它的？",
      cite: ["bj-bird-list"],
    },
    {
      type: "lookalike",
      title: "这是哪一种斑鸠？",
      quiz: true,
      items: [
        {
          name: "山斑鸠", scientific: "Streptopelia orientalis",
          shot: { photo: "look-shan-ban-jiu", caption: "背上像鱼鳞的斑鸠" },
          tells: ["脖子两侧是一道道黑白相间的条纹", "背上有深色的扇贝状花纹，像鱼鳞；个子稍大（28～36 厘米）"],
        },
        {
          name: "珠颈斑鸠", scientific: "Spilopelia chinensis", self: true,
          shot: { photo: "look-zhu-jing", caption: "脖子上戴着珍珠点的斑鸠" },
          tells: ["脖子上是黑底白点的「珍珠项链」，不是条纹", "身体粉褐色，背上没有明显的鱼鳞花纹"],
        },
        {
          name: "灰斑鸠", scientific: "Streptopelia decaocto",
          shot: { photo: "look-hui-ban-jiu", caption: "后脖子上有一道黑领圈的灰斑鸠" },
          tells: ["全身浅浅的灰褐色", "后脖子上只有一道黑白色的「半个领圈」，没有白点"],
        },
      ],
      cite: ["cern-sbj", "cern-zj", "cern-hbj"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它为什么叫「珠颈」？", a: "脖子上的黑羽毛布满白点，像戴了一条「珍珠围巾」。英文里也有人叫它「珍珠脖子鸽」（Pearl-necked Dove）。", cite: ["yy-zjbj", "bow-spodov"] },
        { q: "鸟也会「喂奶」吗？", a: "鸽子和斑鸠会！它们的嗉囊能分泌一种「鸽乳」，爸妈把它吐出来，喂给刚出壳的宝宝。", cite: ["horseman-1995"] },
        { q: "它把窝搭在哪儿？", a: "一点也不挑：树杈、灌木丛、岩石缝，甚至窗台、空调外机和花盆里，都可能有它的窝。", cite: ["yy-zjbj"] },
        { q: "它怎么「谈恋爱」？", a: "雄鸟把身子压得很低，绕圈飞时张开翅膀和尾巴；对上眼以后，两只鸟互相点头、咕咕叫。", cite: ["yy-zjbj"] },
        { q: "美国也有珠颈斑鸠吗？", a: "有。19 世纪末，人们把它从东南亚带到夏威夷；1915 年前后又带到了美国加州。", cite: ["bow-spodov"] },
        { q: "古人为什么喜欢斑鸠？", a: "传说在汉代，70 岁以上的老人会收到一根「鸠杖」：手杖顶上做成斑鸠的样子，表示尊敬老人。", cite: ["yy-zjbj"] },
      ],
    },
  ],
  care: "远远看，不追、不喂。窗台或树上的斑鸠窝别去碰；捡到小鸟先告诉大人。",
  nextTime: "下次看它飞起来：翅膀会不会「啪啪」响？落下来的时候，尾巴是收着还是张开的？",
  sources: [
    { id: "cern-zj", title: "珠颈斑鸠", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%8F%A0%E9%A2%88%E6%96%91%E9%B8%A0" },
    { id: "cern-sbj", title: "山斑鸠", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E5%B1%B1%E6%96%91%E9%B8%A0" },
    { id: "cern-hbj", title: "灰斑鸠", by: "生物多样性知识平台", url: "https://wiki.biodiversity.cern.ac.cn/index.php/%E7%81%B0%E6%96%91%E9%B8%A0" },
    { id: "bow-spodov", title: "Spotted Dove (Spilopelia chinensis)", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/spodov/cur/introduction" },
    { id: "yy-zjbj", title: "二十四节气与鸟⑨芒种——代表鸟：珠颈斑鸠", by: "益阳市林业局", url: "http://www.yiyang.gov.cn/yyslyj/1792/1793/content_1776492.html" },
    { id: "lz-zjbj", title: "【动物园】脖戴珠链的鸟——珠颈斑鸠", by: "柳州市林业和园林局", url: "http://lyhylj.liuzhou.gov.cn/xwzx/stly/ysdw/202008/t20200818_1931259.shtml" },
    { id: "horseman-1995", title: "Regulation of Pigeon Cropmilk Secretion and Parental Behaviors by Prolactin", by: "Annual Review of Nutrition, 1995", url: "https://doi.org/10.1146/annurev.nu.15.070195.001241" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;