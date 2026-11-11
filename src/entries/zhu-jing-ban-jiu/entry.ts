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
      shot: { photo: "side", caption: "一只珠颈斑鸠的侧面", shoot: "侧身站着的一只，头朝左：头、脖子、翅膀和长尾巴都在画面里；全年都能拍，远拍别靠近" },
      points: [
        { x: 0.38, y: 0.36, label: "脖子上的珍珠项链", detail: "脖子后面和两侧是一片黑羽毛，每根羽毛尖分成两叉，两个尖上各有一个白点。", cite: ["bow-spodov", "wiki-en"] },
        { x: 0.24, y: 0.26, label: "灰灰的头", detail: "头是鸽子一样的灰色，身上是褐色，脖子到肚子带一点粉。", cite: ["yy-zjbj", "wiki-en"] },
        { x: 0.85, y: 0.62, label: "又长又宽的尾巴", detail: "尾巴比较长。外侧的尾羽尖是白色的，它飞起来的时候最容易看到。", cite: ["bow-spodov", "wiki-en"] },
      ],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，每个月都有很多人拍到它，1～5 月多一些，夏天少一些。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "珠颈斑鸠还是山斑鸠？",
      quiz: true,
      items: [
        {
          name: "山斑鸠", scientific: "Streptopelia orientalis",
          shot: { photo: "look-shan-ban-jiu", caption: "背上像鱼鳞的斑鸠" },
          tells: ["脖子两侧是一道道黑白相间的条纹", "背上的羽毛边缘颜色浅，看起来像鱼鳞"],
        },
        {
          name: "珠颈斑鸠", scientific: "Spilopelia chinensis", self: true,
          shot: { photo: "look-zhu-jing", caption: "脖子上戴着珍珠点的斑鸠" },
          tells: ["脖子上是黑底白点的「珍珠项链」，不是条纹", "小斑鸠还没有项链，要长大才有"],
        },
      ],
      cite: ["zy-stbj", "wiki-ortdov", "lz-zjbj"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它为什么叫「珠颈」？", a: "脖子上的黑羽毛尖上带着白点，像戴了一串珍珠。英文里它也有个名字叫「珍珠脖子鸽」。", cite: ["yy-zjbj", "bow-spodov"] },
        { q: "小斑鸠也戴项链吗？", a: "不戴。年轻的珠颈斑鸠脖子上没有珍珠点，长成大鸟以后才有。", cite: ["lz-zjbj", "wiki-en"] },
        { q: "它把窝搭在哪儿？", a: "常在小树杈和灌木丛里，有时还会搭在窗台、空调外机和花盆里。窝是细树枝堆的，薄薄一层，很简陋。", cite: ["yy-zjbj", "wiki-en"] },
        { q: "一窝有几个蛋？", a: "通常是两个白色的蛋。爸爸妈妈一起孵，大约 13 天孵出来，再过两个星期左右，小鸟就能离开窝。", cite: ["wiki-en"] },
        { q: "美国也有珠颈斑鸠吗？", a: "有。100 多年前，人们把它带到了夏威夷；1915 年前后又带到了美国加州。", cite: ["bow-spodov"] },
      ],
    },
  ],
  care: "远远看，不追、不喂。看到窗台或树上的斑鸠窝不去碰；捡到小鸟先告诉大人。",
  nextTime: "下次看它飞起来：翅膀会不会「啪啪」响？落下来的时候，尾巴是收着还是张开的？",
  sources: [
    { id: "bow-spodov", title: "Spotted Dove (Spilopelia chinensis)", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/spodov/cur/introduction" },
    { id: "wiki-en", title: "Spotted dove", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Spotted_dove" },
    { id: "wiki-ortdov", title: "Oriental turtle dove", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Oriental_turtle_dove" },
    { id: "zy-stbj", title: "每周一鸟||山斑鸠", by: "张掖黑河湿地国家级自然保护区管理局", url: "https://www.zhangye.gov.cn/sdj/ztzl/sdwyfgkp/202608/t20260814_1574833.html" },
    { id: "yy-zjbj", title: "二十四节气与鸟⑨芒种——代表鸟：珠颈斑鸠", by: "益阳市林业局", url: "http://www.yiyang.gov.cn/yyslyj/1792/1793/content_1776492.html" },
    { id: "lz-zjbj", title: "【动物园】脖戴珠链的鸟——珠颈斑鸠", by: "柳州市林业和园林局", url: "http://lyhylj.liuzhou.gov.cn/xwzx/stly/ysdw/202008/t20200818_1931259.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
