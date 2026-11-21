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
  cover: { photo: "cover", caption: "枝上挂着好几颗老球果的油松", shoot: "我们遇见的那一棵：整棵树拍进去，最好能看见树冠平平的样子" },
  hello: "针叶两根一捆，长大以后树冠常常顶得平平的。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "cover", caption: "针叶、老球果和粗粗的小枝", shoot: "靠近拍一枝：两根一束的针叶，和一颗还挂着的球果一起进画面" },
      points: [
        { x: 0.38, y: 0.17, label: "挂着不掉的球果", detail: "球果熟了也常常在树上挂好几年，所以一年四季都能看到。", cite: ["iplant-ys", "gdb-ys"] },
        { x: 0.4, y: 0.5, label: "鼓鼓的鳞片", detail: "球果每片鳞片的顶端又厚又鼓，中间还有一个带尖刺的小凸起。", cite: ["iplant-ys"] },
        { x: 0.68, y: 0.6, label: "针叶 2 根一束", detail: "针叶粗硬，2 根一束，长 6～15 厘米。捡一束掉在地上的数一数。", cite: ["iplant-ys", "gdb-ys"] },
        { x: 0.86, y: 0.45, label: "变黄的老针叶", detail: "一束针叶能在枝上待 2～3 年，老了才变黄掉下来，所以树一直是绿的。", cite: ["gdb-ys"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看树皮",
      shot: { photo: "bark", caption: "一棵老油松的树干，挂着古树牌", shoot: "正对树干近拍一段树皮，把一块块鳞片和裂缝拍清楚" },
      text: "老油松的树皮是灰褐色的，裂成一块块又厚又不规则的鳞片。看看裂缝里面，颜色是不是红褐色的？",
      zoom: 2.5,
      start: [0.35, 0.75],
      cite: ["iplant-ys", "gdb-ys"],
    },
    {
      type: "steps",
      title: "一颗球果要长两年",
      steps: [
        { photo: "step-female", label: "雌球花", text: "4～5 月是它传花粉的时候，新枝顶上冒出小小的雌球花，等着接花粉。", caption: "新枝顶上紫红色的小雌球花", shoot: "4～5 月近拍新枝顶上的小雌球花" },
        { photo: "step-green-cone", label: "青球果", text: "接到花粉的小球果要再长一年多。没成熟时是绿色的，鳞片合得紧紧的。", caption: "一颗绿色、鳞片还合着的球果", shoot: "夏天找一颗挂在低枝上的绿球果" },
        { photo: "cone-open", label: "张开了", text: "到第二年 10 月才成熟，变成淡黄褐色，鳞片张开，带翅膀的种子飞出来。", caption: "鳞片张开的成熟球果", shoot: "秋天找一颗鳞片张开的球果，原地拍" },
      ],
      cite: ["iplant-ys", "gdb-ys"],
    },
    {
      type: "compare",
      title: "小油松和大油松",
      before: { photo: "young-tree", label: "小油松", caption: "山坡上一棵年轻的油松", shoot: "找一棵小油松，拍下整棵树" },
      after: { photo: "big-tree", label: "大油松", caption: "长城边一棵枝条向四面伸开的油松", shoot: "在山里或公园找一棵大油松，从下往上拍树冠" },
      text: "油松长大后，枝条向四面平平地伸开，树冠变成圆顶或平顶，像一把撑开的大伞。",
      cite: ["gdb-ys", "bj-gushu"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "油松四季常绿，每个月都有人拍到它，4 月最多。4～5 月去看雌球花和撒花粉，10 月去找张开的球果。我们是哪个月遇见它的？",
      cite: ["iplant-ys"],
    },
    {
      type: "lookalike",
      title: "北京常见的松树，哪棵是油松？",
      quiz: true,
      items: [
        {
          name: "白皮松", scientific: "Pinus bungeana",
          shot: { photo: "look-bps", caption: "针叶三根一束的白皮松枝条" },
          tells: ["针叶 3 根一束", "老树皮一块块脱落，露出粉白色的斑"],
        },
        {
          name: "油松", scientific: "Pinus tabuliformis", self: true,
          shot: { photo: "look-you-song", caption: "两根一束的针叶中间挂着一颗球果" },
          tells: ["针叶 2 根一束，粗硬", "树皮灰褐色，裂成厚厚的鳞块，不会变白", "球果卵圆形，4～9 厘米，常在树上挂好几年"],
        },
        {
          name: "华山松", scientific: "Pinus armandii",
          shot: { photo: "look-hss", caption: "华山松的针叶和长长的球果" },
          tells: ["针叶 5 根一束，又细又长", "球果很长，有 10～20 厘米，熟了种子就掉光"],
        },
      ],
      cite: ["iplant-bps", "iplant-ys", "iplant-hss"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "皇帝给油松封过官吗？", a: "北海团城有一棵金代种下的油松，约 800 岁。乾隆皇帝在它的树荫下乘凉，封它叫「遮荫侯」。", cite: ["bj-gushu"] },
        { q: "油松能活多久？", a: "科学家数过树芯里的年轮，在甘肃小陇山找到过一棵 402 岁的油松（2009 年）。", cite: ["gdb-ys"] },
        { q: "学名 tabuliformis 是什么意思？", a: "来自拉丁文的「木板」和「制作」，说的是它是很重要的木材树。", cite: ["gdb-ys"] },
        { q: "油松的老家在哪儿？", a: "在中国北方。植物智说它是我国特有树种，是北方山区重要的造林树。北京也是它的老家之一。", cite: ["iplant-ys", "gdb-ys"] },
        { q: "油松开花吗？", a: "不开真正的花。它是裸子植物，4～5 月新枝下部长出一串串雄球花，撒出花粉。", cite: ["iplant-ys"] },
      ],
    },
  ],
  care: "只看、拍照，不折枝；松针尖硬，别戳到眼睛。树干上的松脂黏手，不要抠。",
  nextTime: "在油松树下捡一束掉落的针叶，数一数是不是正好 2 根？",
  sources: [
    { id: "iplant-ys", title: "油松 Pinus tabuliformis", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Pinus%20tabuliformis" },
    { id: "iplant-bps", title: "白皮松 Pinus bungeana", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Pinus%20bungeana" },
    { id: "iplant-hss", title: "华山松 Pinus armandii", by: "植物智（中国科学院植物研究所）", url: "https://www.iplant.cn/info/Pinus%20armandii" },
    { id: "gdb-ys", title: "Pinus tabuliformis (Chinese pine)", by: "The Gymnosperm Database", url: "https://www.conifers.org/pi/Pinus_tabuliformis.php" },
    { id: "bj-gushu", title: "让古树名木“活”起来（一）", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/lhysh/jj/201804/t20180404_108040.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;