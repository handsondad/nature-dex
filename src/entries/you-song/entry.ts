import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "you-song",
  name: "油松",
  scientific: "Pinus tabuliformis",
  kind: "plant",
  // 北京还有白皮松、华山松：拍到两针一束、球果鳞盾鼓鼓的再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "松柏纲", "松柏目", "松科", "松属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那棵油松", shoot: "我们遇见的那一棵：整棵树拍进去，最好能看见树冠平平的样子" },
  hello: "针叶两根一捆，长大以后树冠常常顶得平平的。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "needles-cone", caption: "针叶和球果", shoot: "靠近拍一枝：两根一束的针叶，和一颗还挂着的球果一起进画面" },
      points: [
        { x: 0.35, y: 0.4, label: "两根针一束", detail: "针叶常常两根一捆（偶尔三根），深绿，粗粗硬硬的。", cite: ["foc-ys"] },
        { x: 0.45, y: 0.55, label: "针叶不太长", detail: "针叶长大约 6～15 厘米，基部还包着一层会留一阵子的鞘。", cite: ["foc-ys"] },
        { x: 0.7, y: 0.65, label: "鼓鼓的球果", detail: "球果卵形，成熟后黄褐到褐色，大约 4～9 厘米长，鳞盾鼓鼓的，鳞脐伸出小刺。", cite: ["foc-ys"] },
        { x: 0.2, y: 0.2, label: "树皮一块一块", detail: "树皮灰褐或深灰，裂成鳞片状一块一块的。", cite: ["foc-ys"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看球果",
      shot: { photo: "cone-macro", caption: "成熟的球果", shoot: "正对着一颗够得着的球果拍，能看清鼓起的鳞盾和尖尖的鳞脐" },
      text: "鳞片外面鼓起来，中间的鳞脐常常伸出一小根刺。种子带着薄薄的翅膀。",
      zoom: 2.5,
      start: [0.5, 0.5],
      cite: ["foc-ys"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "它是常绿树，一年里每个月都能看见。在中国，大家 4 月拍到它最多。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "油松开花吗？", a: "不开花。它是裸子植物，春天枝上长出花粉球，把花粉撒出去；种子长在球果里。", cite: ["foc-ys", "wiki-en"] },
        { q: "球果什么时候熟？", a: "大约 4～5 月授粉，种子要到第二年 10 月才成熟。球果常常挂在树上好几年。", cite: ["foc-ys"] },
        { q: "长大的树冠什么样？", a: "年轻时像圆锥，长大以后树冠常常变得平平的，像桌子一样。", cite: ["foc-ys"] },
        { q: "在北京它重要吗？", a: "油松是北京重要的乡土绿化树种，喜光、耐旱、抗风，山区造林常常用到它。", cite: ["bj-ys"] },
      ],
    },
  ],
  care: "只看、拍照，不折针叶和球果。掉在地上的球果可以捡起来看，不要放进嘴里。",
  nextTime: "数一数：一根小枝上的针叶，是不是两根一捆？有没有三根的？",
  sources: [
    { id: "foc-ys", title: "Pinus tabuliformis 油松", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=210001654" },
    { id: "wiki-en", title: "Pinus tabuliformis", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pinus_tabuliformis" },
    { id: "bj-ys", title: "浅谈密云地区油松大苗移植技术与管理", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/st/202302/t20230221_2920928.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
