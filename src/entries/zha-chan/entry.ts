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
      shot: { photo: "adult-back", caption: "从背上看蚱蝉", shoot: "树干上头朝上趴着的蚱蝉，从它背后正对着拍：头、背和整对翅膀都在画面里" },
      points: [
        { x: 0.42, y: 0.44, label: "黑亮的身体", detail: "全身黑色或黑褐色，亮亮的，有金褐色的细毛。雄蝉身长 3.7～4 厘米。", cite: ["nutrients-2023", "gmw-2026"] },
        { x: 0.38, y: 0.51, label: "背上一个“X”", detail: "背中间靠后，有一个黄褐色的“X”形隆起。", cite: ["nutrients-2023"] },
        { x: 0.43, y: 0.32, label: "三只小眼睛", detail: "两只鼓鼓的大眼睛中间，还有三只小眼睛，排成一个三角形。", cite: ["nutrients-2023", "wiki-cicada"] },
        { x: 0.25, y: 0.76, label: "透明的翅膀", detail: "前翅、后翅都是透明的，却很硬实。", cite: ["nutrients-2023"] },
      ],
    },
    {
      type: "steps",
      title: "从土里爬上树",
      steps: [
        { photo: "step-nymph", label: "出土", text: "若虫在土里吸树根的汁液，住 3～5 年。长大的若虫黄褐色，前腿又粗又壮，夏天夜里或清早挖开土钻出来。", caption: "刚钻出土的若虫", shoot: "夏天傍晚在大树下的地面或树干根部，找一只正在爬的若虫，从上面拍；只看不抓" },
        { photo: "step-molt", label: "蜕皮", text: "它爬上草茎或树干抓牢，背上裂开一道缝，成虫从旧壳里一点一点钻出来。", caption: "正从旧壳里钻出来", shoot: "碰到正在蜕皮的蝉，站在旁边静静拍，不用手碰、不打强光" },
        { photo: "fresh-pale", label: "变黑", text: "刚钻出来的蝉颜色很浅，翅膀软软的。等身体慢慢变黑、变硬，它才能飞。", caption: "刚蜕完皮、还没变黑的蝉", shoot: "清早在蜕皮的地方附近找颜色还很浅的新蝉，拍它的背；不碰它的软翅膀" },
        { photo: "step-shell", label: "蝉蜕", text: "空壳还抓在树皮上。成虫只活几个星期：雄蝉唱歌，雌蝉在细树枝里产卵。", caption: "抓在树皮上的空壳", shoot: "树干上留下的空壳，拍清楚它抓着树皮的前腿" },
      ],
      cite: ["nutrients-2023", "gmw-2026", "zookeys-2014"],
    },
    {
      type: "magnifier",
      title: "凑近看它的脸",
      shot: { photo: "head", caption: "蝉的头和前腿", shoot: "蝉停着不动时，从侧前方凑近拍头部：大眼睛、脸上一道道横纹和嘴都要清楚；不抓它" },
      text: "两边是分得很开的大复眼。脸前面鼓起一块带横纹的“鼻子”，里面是吸水的肌肉。嘴是一根长长的尖管，插进树枝里吸汁液。",
      zoom: 2.5,
      start: [0.62, 0.32],
      cite: ["wiki-cicada", "nutrients-2023"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7 月拍到它最多，6 月和 8 月也不少；冬天几乎没有人拍到。我们是哪个月遇见它的？",
    },
    {
      type: "lookalike",
      title: "是哪一种知了？",
      quiz: true,
      items: [
        {
          name: "蟪蛄",
          scientific: "Platypleura kaempferi",
          shot: { photo: "look-hg", caption: "蟪蛄", shoot: "初夏在树干上找一只灰褐色的小蝉，拍它带花纹的翅膀" },
          tells: ["小，只有 2 厘米左右", "翅膀上有褐色花斑，不透明", "趴在树皮上像个小疙瘩"],
        },
        {
          name: "蚱蝉",
          scientific: "Cryptotympana atrata",
          self: true,
          shot: { photo: "cover", caption: "蚱蝉", shoot: "七月在树上找一只黑色大蝉，侧面拍全身" },
          tells: ["大，约 4 厘米", "全身黑亮，没有绿色花纹", "翅膀透明"],
        },
        {
          name: "鸣鸣蝉",
          scientific: "Hyalessa maculaticollis",
          shot: { photo: "look-mmc", caption: "鸣鸣蝉", shoot: "夏天在树上找一只身上有绿色花纹的蝉，从侧上方拍" },
          tells: ["比蚱蝉略小，3.3～3.6 厘米", "黑身体上有绿色或淡蓝色花纹", "胸和肚子交界处有白色"],
        },
      ],
      cite: ["ja-hg", "ja-mm", "wiki-zh"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "为什么有的知了不叫？", a: "只有雄蝉会发出响亮的叫声，雌蝉不叫。不过雄蝉、雌蝉都有听声音的“耳朵”（听器）。", cite: ["wiki-cicada"] },
        { q: "知了的叫声从哪儿来？", a: "雄蝉肚子前面两边各有一个像鼓面一样的发音器。雄蝉的肚子大半是空的，像个音箱。", cite: ["wiki-cicada"] },
        { q: "树下怎么会“下小雨”？", a: "蝉吸树枝里的汁液时会排出水来。有人数过：每次大约 0.2 毫升，每分钟 3～6 次。", cite: ["wiki-zh"] },
        { q: "为什么每年夏天都有知了叫？", a: "若虫在土里大多住 4 年左右，地下同时住着好几“届”，所以每年都有一批钻出来。", cite: ["gmw-2026"] },
        { q: "蝉卵在哪儿过冬？", a: "产过卵的细树枝会枯死掉到地上，卵就在枯枝里过冬，第二年夏天孵出来钻进土里。", cite: ["gmw-2026", "nutrients-2023"] },
        { q: "蝉的翅膀会自己洗干净吗？", a: "蝉的前翅上盖满极小的蜡质小尖，特别不沾水。雨水滚过去，顺便把灰尘带走。", cite: ["wiki-cicada"] },
      ],
    },
  ],
  care: "只看不抓。不挖地里的若虫，不摇树、不拿棍子打树；树上的空壳可以凑近看。",
  nextTime: "找一棵大树数一数：树干上的蝉蜕有几个？树下的小圆洞有几个？两个数对得上吗？",
  sources: [
    { id: "nutrients-2023", title: "Edible and Medicinal Progress of Cryptotympana atrata (Fabricius) in China", by: "Nutrients, 2023", url: "https://doi.org/10.3390/nu15194266" },
    { id: "gmw-2026", title: "蝌学零距离｜北京的蝉为啥三四年就能破土，而不是蛰伏17年？", by: "光明网·蝌蚪五线谱（北京市农林科学院审核），2026", url: "https://m.gmw.cn/toutiao/2026-08/10/content_1304546061.htm" },
    { id: "zookeys-2014", title: "Morphology and identification of the final instar nymphs of three cicadas (Hemiptera, Cicadidae) in Guanzhong Plain, China", by: "Hou, Li & Wei, ZooKeys, 2014", url: "https://doi.org/10.3897/zookeys.425.7897" },
    { id: "wiki-cicada", title: "Cicada", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cicada" },
    { id: "wiki-zh", title: "蚱蝉（紅脈熊蟬）", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E7%B4%85%E8%84%88%E7%86%8A%E8%9F%AC" },
    { id: "ja-hg", title: "ニイニイゼミ（蟪蛄）", by: "ウィキペディア日本語版", url: "https://ja.wikipedia.org/wiki/%E3%83%8B%E3%82%A4%E3%83%8B%E3%82%A4%E3%82%BC%E3%83%9F" },
    { id: "ja-mm", title: "ミンミンゼミ（鸣鸣蝉）", by: "ウィキペディア日本語版", url: "https://ja.wikipedia.org/wiki/%E3%83%9F%E3%83%B3%E3%83%9F%E3%83%B3%E3%82%BC%E3%83%9F" },
  ],
  by: ["kid", "dad"],
};

export default entry;