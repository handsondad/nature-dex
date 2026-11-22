import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "jin-huang-yin-er",
  name: "金黄银耳",
  pinyin: "jīn huáng yín ěr",
  scientific: "Tremella mesenterica",
  kind: "fungus",
  // 橙黄银耳（Naematelia aurantia）和花耳属（Dacrymyces）的黄色胶质菌肉眼极像，要看寄主和显微结构；标 likely
  certainty: "likely",
  taxonomy: ["真菌界", "担子菌门", "银耳纲", "银耳目", "银耳科", "银耳属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "雨后枯木上亮黄色的金黄银耳",
    shoot: "下雨后在带树皮的阔叶树枯枝上拍：亮黄色果冻般的脑状褶皱清楚，只拍不摸",
  },
  hello: "下雨后枯枝上冒出亮黄色的小果冻，天晴晒干缩成薄片，再下雨又能鼓起来。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "jelly-branch",
        caption: "从枯枝树皮裂缝里挤出来的金黄银耳",
        shoot: "找一根带树皮的阔叶树枯枝，近拍挤出树皮缝的黄色胶质菌团；只拍不碰",
      },
      points: [
        { x: 0.62, y: 0.6, label: "脑子一样的褶皱", detail: "一团弯弯绕绕的瓣片，像小脑仁；一团宽 2～5 厘米、高 1～3 厘米，没有菌盖、菌褶和菌柄。", cite: ["kuo"] },
        { x: 0.08, y: 0.12, label: "亮黄到橙黄", detail: "颜色从淡黄、亮黄到橙黄；湿的时候表面光滑、油亮亮的，像果冻却挺有韧性。", cite: ["kuo", "wiki-en"] },
        { x: 0.43, y: 0.35, label: "从树皮缝钻出来", detail: "它常常顶破枯枝的树皮，从裂缝里冒出来，所以看起来像挤出来的一条黄果冻。", cite: ["wiki-en"] },
        { x: 0.78, y: 0.3, label: "带树皮的阔叶枯枝", detail: "多长在橡树等阔叶树的细枯枝上，枝子常只有 1～4 厘米粗，树皮还没掉。", cite: ["kuo", "mdc"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看半透明的瓣片",
      shot: {
        photo: "wet-jelly",
        caption: "雨后吸饱水、半透明的金黄银耳",
        shoot: "雨后对着光微距拍一片薄瓣的边缘，拍出透光的感觉；只拍不碰",
      },
      text: "放大看：湿的时候瓣片薄薄的、半透明，光能透过去；表面光滑，没有菌褶也没有小孔，产孢子的细胞就埋在这层胶质里。",
      zoom: 2.4,
      start: [0.6, 0.5],
      cite: ["wiki-en", "volk"],
    },
    {
      type: "steps",
      title: "冒头、长大、褪色",
      steps: [
        {
          photo: "step-pop",
          label: "冒头",
          text: "下过雨，一粒粒黄色小疙瘩从枯枝的树皮缝里钻出来。",
          caption: "刚从树皮缝里冒头的小黄疙瘩",
          shoot: "雨后一两天，拍枯枝上刚冒出来的小黄点；只拍不碰",
        },
        {
          photo: "step-grow",
          label: "长大",
          text: "小疙瘩越长越大，变成一团弯弯绕绕的亮黄色“小脑仁”。",
          caption: "长成一大团脑状褶皱的金黄银耳",
          shoot: "隔几天回到同一根枯枝，同角度拍它长成一团的样子",
        },
        {
          photo: "step-fade",
          label: "褪色",
          text: "老了或泡在雨里太久，颜色会褪成淡黄，形状也变得软塌塌、看不清褶皱。",
          caption: "颜色褪淡、软塌塌的老金黄银耳",
          shoot: "过一阵再去看，拍它褪色变淡的样子",
        },
      ],
      cite: ["kuo", "wiki-en"],
    },
    {
      type: "compare",
      title: "下雨鼓起来，天晴缩回去",
      before: {
        photo: "wet-again",
        label: "吸饱水",
        caption: "吸饱水后又黄又软的金黄银耳",
        shoot: "刚下过雨时记住这根枯枝的位置，横构图拍它饱水鼓胀的样子",
      },
      after: {
        photo: "dry-crust",
        label: "干了",
        caption: "同一处的金黄银耳干了，缩成深橙色硬壳",
        shoot: "天晴几天后回到同一根枯枝，同角度拍它干缩成橘红色硬壳的样子",
      },
      text: "这是同一处的金黄银耳：吸饱水时又软又鼓、亮黄色；几天不下雨，就缩成一小片深橙红色的硬壳。等下一场雨，它又能吸水鼓回来。",
      cite: ["wiki-en", "kuo"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国境内的研究级记录还很少，只在 2、4、10、11 月各有人拍到过一次。它常在下雨后冒出来，冬天回暖的雨后也可能遇见。",
    },
    {
      type: "lookalike",
      title: "树枝上的“黄果冻”：光看长相，分不出能不能吃",
      quiz: true,
      items: [
        {
          name: "金孢花耳",
          scientific: "Dacrymyces chrysospermus",
          shot: { photo: "look-dc", caption: "金孢花耳" },
          tells: [
            "长在松、杉等针叶树的腐木上，常常是剥了皮的木头",
            "连着木头的地方突然收窄、颜色发白；和银耳是远亲，要用显微镜才分得清",
          ],
        },
        {
          name: "金黄银耳",
          scientific: "Tremella mesenterica",
          self: true,
          shot: { photo: "look-jhy", caption: "金黄银耳" },
          tells: [
            "多长在带树皮的阔叶树细枯枝上，湿时油亮、瓣片薄而半透明",
            "寄主革菌多藏在枯枝里或枝子下面，不容易看到",
          ],
        },
        {
          name: "橙黄银耳",
          scientific: "Naematelia aurantia",
          shot: { photo: "look-na", caption: "橙黄银耳（周围层层叠叠的是革菌）" },
          tells: [
            "寄生在毛韧革菌上，旁边常能看到一层层扇形的毛韧革菌",
            "表面偏哑光、不太油亮，瓣片更厚，个头也常更大",
          ],
        },
      ],
      cite: ["kuo", "mykoweb-dc", "mykoweb-na", "wiki-en"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它长在枯枝上，可为什么说它不“吃”木头？",
          a: "枯枝里住着分解木头的革菌，金黄银耳专门吸革菌菌丝的养分。革菌在“吃”树，它又在“吃”革菌，所以它是“寄生虫的寄生虫”！",
          cite: ["mdc", "kuo", "zugmaier-1994"],
        },
        {
          q: "甜品里的白银耳，和它是亲戚吗？",
          a: "是同一个银耳属的亲戚！人工种白银耳时，要先在木头里接上它的寄主真菌，再接银耳。野外的黄色胶质菌可不能采来吃。",
          cite: ["volk"],
        },
        {
          q: "还没变成“果冻”之前，它长什么样？",
          a: "它的孢子会像酵母一样出芽，变成一个个小单细胞。两种配得上的细胞互相放出化学“信号”，收到信号才伸出交配管连在一起。",
          cite: ["volk", "sakagami-1981", "wiki-en"],
        },
        {
          q: "它为什么又叫“女巫的黄油”？",
          a: "欧洲东部有个传说：家门口长出它，说明被女巫下了咒，得用针扎破它才能“解咒”。这当然只是传说，真看到它就让它好好待着吧。",
          cite: ["volk"],
        },
        {
          q: "它的拉丁种加词 mesenterica 是什么意思？",
          a: "来自古希腊语“肠系膜”，意思是“肚子中间的肠子”，形容它弯弯曲曲、叠在一起的褶皱。",
          cite: ["wiki-en"],
        },
      ],
    },
  ],
  care: "名字里有“银耳”，但野外的胶质菌很难分清；只看不碰、不采、不吃，也别用针扎它。",
  nextTime: "雨后如果在阔叶树落枝上看到它，记住是哪根树枝，等晴天再去看看它是不是缩成了一小片深橙色的硬壳？",
  sources: [
    { id: "kuo", title: "Tremella mesenterica", by: "Michael Kuo, MushroomExpert.Com", url: "https://www.mushroomexpert.com/tremella_mesenterica.html" },
    { id: "mdc", title: "Witches' Butter (Tremella mesenterica)", by: "Missouri Department of Conservation Field Guide", url: "https://mdc.mo.gov/discover-nature/field-guide/witches-butter" },
    { id: "volk", title: "Tremella mesenterica, witch's butter", by: "Tom Volk's Fungus of the Month, October 2000", url: "https://botit.botany.wisc.edu/toms_fungi/oct2000.html" },
    { id: "sakagami-1981", title: "Peptidal sex hormones inducing conjugation tube formation in compatible mating-type cells of Tremella mesenterica", by: "Sakagami et al., Science, 1981", url: "https://doi.org/10.1126/science.212.4502.1525" },
    { id: "zugmaier-1994", title: "Mycoparasitism of some Tremella species", by: "Zugmaier, Bauer & Oberwinkler, Mycologia, 1994", url: "https://doi.org/10.2307/3760718" },
    { id: "mykoweb-dc", title: "Dacrymyces chrysospermus", by: "California Fungi (MykoWeb)", url: "https://www.mykoweb.com/CAF/species/Dacrymyces_chrysospermus.html" },
    { id: "mykoweb-na", title: "Naematelia aurantia", by: "California Fungi (MykoWeb)", url: "https://www.mykoweb.com/CAF/species/Naematelia_aurantia.html" },
    { id: "wiki-en", title: "Tremella mesenterica", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Tremella_mesenterica" },
  ],
  by: ["kid", "dad"],
};

export default entry;