import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zha-chan",
  name: "蚱蝉",
  scientific: "Cryptotympana atrata",
  kind: "animal",
  // 北京夏天叫得最响的大黑蝉多半是它；拍清背上的 X 形隆起和透明翅膀再确认
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "半翅目", "蝉科", "蚱蝉属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只知了", shoot: "七月在公园或小区的柳树、杨树干上，找一只趴着的黑色大蝉，从正面或侧面拍全身；只拍不抓、不摇树" },
  hello: "它在土里吸树根的汁液，一住就是好几年，到了夏天才爬上树。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "back-view", caption: "趴在树干上的蚱蝉", shoot: "树干上头朝上趴着的蚱蝉，从它背后正对着拍：头、背和整对翅膀都在画面里" },
      points: [
        { x: 0.5, y: 0.45, label: "黑亮的身体", detail: "全身黑色或黑褐色，亮亮的，有金褐色的细毛。身体大约 4 厘米长。", cite: ["nutrients-2023", "wiki-zh"] },
        { x: 0.5, y: 0.32, label: "背上一个“X”", detail: "背中间有一个黄褐色的“X”形隆起。", cite: ["nutrients-2023"] },
        { x: 0.5, y: 0.14, label: "三只小眼睛", detail: "两只鼓鼓的大眼睛中间，还有三只小眼睛，排成一个三角形。", cite: ["nutrients-2023"] },
        { x: 0.3, y: 0.7, label: "透明的翅膀", detail: "前翅、后翅都是透明的，却很硬实。", cite: ["nutrients-2023"] },
      ],
    },
    {
      type: "steps",
      title: "从树枝到土里，再回到树上",
      steps: [
        { photo: "step-eggs", label: "产卵", text: "七八月，雌蝉用产卵器在细树枝梢上扎出一排斜斜的小洞，每个洞里产 6～8 粒卵。", caption: "树枝梢上的产卵痕", shoot: "夏末在柳树、杨树的细枝梢上找一排斜斜的小刻痕，靠近拍清楚；只拍不折枝" },
        { photo: "step-hole", label: "土里几年", text: "第二年五六月卵孵化，小若虫掉到地上，用前腿挖洞钻进土里，吸树根的汁液，一般要住 3～5 年。", caption: "树下的小圆洞", shoot: "夏天大树下地面上一个个圆圆的小洞，旁边放一片树叶比大小" },
        { photo: "step-climb", label: "爬上树", text: "长大的若虫黄褐色，前腿又粗又壮。它从土里钻出来，爬上附近的草和树。", caption: "正往上爬的若虫", shoot: "夏天在树干或草茎上找一只正往上爬的若虫，侧面拍；只看不抓" },
        { photo: "step-molt", label: "蜕皮", text: "若虫停在树皮或枝叶上，最后蜕一次皮，变成长着翅膀的成虫。", caption: "正在蜕皮的蝉", shoot: "碰到正在蜕皮的蝉，站在旁边静静拍，不用手碰、不打强光" },
        { photo: "step-shell", label: "蝉蜕", text: "成虫飞走了，蜕下的空壳还抓在树皮上，这就是蝉蜕。", caption: "抓在树皮上的空壳", shoot: "树干上留下的空壳，拍清楚它抓着树皮的前腿" },
      ],
      cite: ["nutrients-2023", "wiki-cicada"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7 月拍到它最多，6 月和 8 月也不少；冬天几乎没有人拍到。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么有的知了不叫？", a: "只有雄蝉会发出响亮的叫声，雌蝉不叫。不过雄蝉、雌蝉都有听声音的“耳朵”（听器）。", cite: ["wiki-cicada"] },
        { q: "知了的叫声从哪儿来？", a: "雄蝉肚子前面两边各有一个像鼓面一样的发音器，肌肉一拉一松，它就响起来。雄蝉的肚子大半是空的，像个音箱。", cite: ["wiki-cicada"] },
        { q: "树下怎么会“下小雨”？", a: "蝉吸树枝里的汁液时会排出水来。有人数过：每次大约 0.2 毫升，每分钟 3～6 次。", cite: ["wiki-zh"] },
        { q: "知了钻出土以后能活多久？", a: "蝉钻出土、变成成虫以后，一般过几个星期就会死去。比起在土里的那几年，短多了。", cite: ["wiki-cicada", "nutrients-2023"] },
      ],
    },
  ],
  care: "只看不抓。不挖地里的若虫，不摇树、不拿棍子打树；树上的空壳可以凑近看。",
  nextTime: "找一棵大树数一数：树干上的蝉蜕有几个？树下的小圆洞有几个？两个数对得上吗？",
  sources: [
    { id: "nutrients-2023", title: "Edible and Medicinal Progress of Cryptotympana atrata (Fabricius) in China", by: "Nutrients, 2023", url: "https://doi.org/10.3390/nu15194266" },
    { id: "wiki-cicada", title: "Cicada", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cicada" },
    { id: "wiki-zh", title: "蚱蝉（紅脈熊蟬）", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E7%B4%85%E8%84%88%E7%86%8A%E8%9F%AC" },
  ],
  by: ["kid", "dad"],
};

export default entry;
