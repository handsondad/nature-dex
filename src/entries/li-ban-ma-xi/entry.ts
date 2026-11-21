import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 北京还有山地麻蜥；背上眼斑（丽斑）和尾长（不到头体长 1.5 倍）是重要线索，拍清花纹再确认。
const entry: Entry = {
  id: "li-ban-ma-xi",
  name: "丽斑麻蜥",
  scientific: "Eremias argus",
  kind: "animal",
  // 背上眼状斑点（丽斑）；与山地麻蜥易混，确定性先标 likely
  certainty: "likely",
  taxonomy: ["动物界", "脊索动物门", "爬行纲", "有鳞目", "蜥蜴科", "麻蜥属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只丽斑麻蜥", shoot: "晴天上午，沙地、草地或灌丛边。和大人一起远远拍背面：身上的眼状斑点清楚；不抓不摸" },
  hello: "背上开着一圈圈小「眼睛」一样的斑，所以名字里有个「丽斑」。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "dorsal", caption: "沙地上的丽斑麻蜥", shoot: "沙地或草地上的麻蜥，从侧上方拍整只：眼状斑、头和尾巴都在画面里。不伸手抓" },
      points: [
        { x: 0.6, y: 0.63, label: "背上的「小眼睛」", detail: "黄白色的小点外面围着一圈黑褐色，像一只只小眼睛（眼斑），从背上排到身体两侧。", cite: ["sp2000-ea"] },
        { x: 0.8, y: 0.565, label: "眼睛后面的小圆片", detail: "眼睛后面那块黑色的小圆片是耳孔，它的鼓膜就露在外面。", cite: ["sp2000-ea"] },
        { x: 0.67, y: 0.71, label: "五个趾头带小爪", detail: "每只脚都有五个细长的趾头，趾尖带着小爪子。", cite: ["sp2000-ea"] },
        { x: 0.23, y: 0.57, label: "尾巴不算太长", detail: "尾巴比身子长一点，但不到身子的一倍半。尾巴特别长的，可能是山地麻蜥。", cite: ["sp2000-ea", "sp2000-eb"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看「小眼睛」",
      shot: { photo: "skin", caption: "丽斑麻蜥的头和背", shoot: "趴着晒太阳时，用长焦从侧面拍头和背的特写，不要靠太近" },
      text: "每只「小眼睛」中间是黄白色，外面围一圈黑褐色。背上的鳞是细细的小颗粒，头顶却盖着几块大鳞片。",
      zoom: 2.5,
      start: [0.7, 0.62],
      cite: ["sp2000-ea"],
    },
    {
      type: "compare",
      title: "同一种，两样花纹",
      before: { photo: "spots", label: "满身眼斑", caption: "韩国海边沙丘的一只：背上排满眼斑", shoot: "我们遇见的麻蜥，从正上方拍背上的花纹" },
      after: { photo: "stripes", label: "白色纵纹", caption: "蒙古草原的一只：白色纵纹很明显", shoot: "再遇见一只时，同样从正上方拍，比比花纹一样不一样" },
      text: "都是丽斑麻蜥，花纹也会不一样。小时候纵纹多，长大后纵纹变淡、眼斑更显眼；河北坝上的那一类，白纵纹之间还连着黑色短横纹。",
      cite: ["sp2000-ea"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 4～8 月和 10 月都拍到过它，7 月最多；冬天几乎拍不到，北方的蜥蜴冬天要休眠。我们是哪个月遇见它的？",
      cite: ["kepu-lizard"],
    },
    {
      type: "lookalike",
      title: "北京的小蜥蜴，别认错",
      quiz: true,
      items: [
        {
          name: "山地麻蜥", scientific: "Eremias brenchleyi",
          shot: { photo: "look-shan-di", caption: "山地麻蜥" },
          tells: ["尾巴特别长，至少是身子的一倍半", "身体两侧是两列眼斑，或连成浅色纵纹"],
        },
        {
          name: "丽斑麻蜥", scientific: "Eremias argus", self: true,
          shot: { photo: "cover", caption: "丽斑麻蜥" },
          tells: ["背上和身体两侧排满一圈圈眼斑", "尾巴不到身子的一倍半长"],
        },
        {
          name: "黄纹石龙子", scientific: "Plestiodon capito",
          shot: { photo: "look-shi-long-zi", caption: "黄纹石龙子" },
          tells: ["鳞片光滑发亮，一片压一片像瓦片", "背上和身体两侧是浅色纵线，没有眼斑"],
        },
      ],
      cite: ["sp2000-ea", "sp2000-eb", "sp2000-pc", "bj-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "名字里的 Argus 是谁？", a: "希腊神话里长着许多眼睛的巨人阿耳戈斯。这种蜥蜴背上的眼斑，让人想起他。", cite: ["rdb"] },
        { q: "它下蛋还是生宝宝？", a: "下蛋。在安徽滁州，它一年下两窝，每窝 2～5 个蛋。住在高处的妈妈下得少一点，但蛋更大。", cite: ["guo-2008", "rdb"] },
        { q: "尾巴断了会怎样？", a: "受惊时蜥蜴会断尾逃走，断下的尾巴还会跳。新尾巴能再长出来，韩国还见过长成两个叉的丽斑麻蜥尾巴。", cite: ["kepu-lizard", "kang-2025"] },
        { q: "北京有它吗？", a: "有。北京陆生野生动物名录里收录了丽斑麻蜥，同属的山地麻蜥也在名单上。", cite: ["bj-list"] },
        { q: "在别的国家，它过得好吗？", a: "在韩国它是濒危动物，只住在水边和林边的沙丘里。修复海边沙丘以后，那里的丽斑麻蜥多了一百多只。", cite: ["chang-2021"] },
        { q: "它能住多高？", a: "科学家在海拔约 80 米到 2600 米的地方都采到过它，住在高处的它们，身上有帮忙应付缺氧的基因变化。", cite: ["li-2023"] },
      ],
    },
  ],
  care: "不抓不摸，抓它可能会让它断尾；碰到了马上用肥皂洗手。在野外看蜥蜴要和大人一起。",
  nextTime: "下次数一数：它背上能数清几圈「小眼睛」一样的斑？尾巴有没有身子的一倍半长？",
  sources: [
    { id: "sp2000-ea", title: "Eremias argus 丽斑麻蜥", by: "中国生物物种名录（Species 2000 中国节点，引《河北动物志》）", url: "http://www.sp2000.org.cn/Fauna/fauna/detil/6479" },
    { id: "sp2000-eb", title: "Eremias brenchleyi 山地麻蜥", by: "中国生物物种名录（Species 2000 中国节点，引《河北动物志》）", url: "http://www.sp2000.org.cn/Fauna/fauna/detil/6480" },
    { id: "sp2000-pc", title: "Eumeces capito 黄纹石龙子", by: "中国生物物种名录（Species 2000 中国节点，引《河北动物志》）", url: "http://www.sp2000.org.cn/Fauna/fauna/detil/6481" },
    { id: "rdb", title: "Eremias argus", by: "The Reptile Database", url: "https://reptile-database.reptarium.cz/species?genus=Eremias&species=argus" },
    { id: "bj-list", title: "北京陆生野生动物名录—两栖爬行类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071636.shtml" },
    { id: "guo-2008", title: "安徽滁州雌性丽斑麻蜥繁殖特征", by: "动物学杂志，2008", url: "http://dwxzz.ioz.ac.cn/dwxb/article/abstract/20080224" },
    { id: "kepu-lizard", title: "蜥蜴亚目", by: "科普中国·科学百科", url: "https://www.kepuchina.cn/article/articleinfo?ar_id=356248&business_type=100" },
    { id: "kang-2025", title: "Cases of Tail Regeneration and Bifurcation in the Endangered Mongolian Racerunner (Eremias argus) from the Sindu Coastal Sand Dune, Republic of Korea", by: "Korea National Park Research Institute, 2025", url: "https://doi.org/10.54406/jnpr.2025.16.2.356" },
    { id: "chang-2021", title: "Effect of coastal dune restoration on the population of endangered Mongolian racerunner (Eremias argus) in the Republic of Korea", by: "Journal of Coastal Conservation, 2021", url: "https://doi.org/10.1007/s11852-021-00820-9" },
    { id: "li-2023", title: "Chromosome-level genome assembly and population genomics of Mongolian racerunner (Eremias argus) provide insights into high-altitude adaptation in lizards", by: "BMC Biology, 2023", url: "https://doi.org/10.1186/s12915-023-01535-z" },
  ],
  by: ["kid", "dad"],
};

export default entry;
