import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "zao-kai-jin-cai",
  name: "早开堇菜",
  pinyin: "zǎo kāi jǐn cài",
  scientific: "Viola prionantha",
  kind: "plant",
  // 北京还有紫花地丁等好几种紫色堇菜，要对照花期、叶形和花的大小再确认
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "金虎尾目", "堇菜科", "堇菜属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那丛早开堇菜", shoot: "3 月初，我们遇见的那一丛：紫色的花和贴着地面的叶子都拍进去" },
  hello: "早春贴着地面开出紫色小花，每朵花后面拖着一条小尾巴。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "whole-plant", caption: "一丛开花的早开堇菜", shoot: "从斜上方拍一整丛：叶子、花梗和侧面的花都在画面里，能看清叶子的形状和花后面的距" },
      points: [
        { x: 0.82, y: 0.2, label: "叶边一圈小圆齿", detail: "开花时叶子是长卵形，边上有密密的小圆齿，像一圈小波浪。", cite: ["foc-zkjc"] },
        { x: 0.415, y: 0.13, label: "花梗比叶子高", detail: "细细的花梗从叶丛里伸出来，比叶子高，一根只顶一朵花。", cite: ["foc-zkjc", "foc-viola"] },
        { x: 0.64, y: 0.23, label: "花后面的小尾巴", detail: "最下面那片花瓣往后伸出一个小口袋（距），5～9 毫米长，尖儿向上翘。", cite: ["foc-zkjc", "foc-viola"] },
        { x: 0.36, y: 0.5, label: "花心的紫条纹", detail: "花是紫色的，直径 1.2～2 厘米。越往花心颜色越浅，还有一道道紫色条纹。", cite: ["foc-zkjc"] },
      ],
    },
    {
      type: "steps",
      title: "从开花到裂果",
      steps: [
        { photo: "step-flower", label: "开花", text: "3～4 月，叶子还小小的，花梗就从叶丛里伸出来开花了。", caption: "早春开的花", shoot: "3 月拍一丛刚开花的早开堇菜，叶子和花都拍进去" },
        { photo: "step-summer", label: "叶大", text: "花谢以后叶子越长越大，变成三角状卵形，最长到 10 厘米。5～9 月是它结果的时候。", caption: "夏天的大叶子", shoot: "6 月回到同一丛，从正上方拍它长大的叶子" },
        { photo: "step-open", label: "裂开", text: "果子是窄窄的椭圆形，5～12 毫米长。熟了会裂成 3 瓣，露出里面的种子。", caption: "裂开的果子", shoot: "夏天在叶丛里找一个刚裂开的果子，拍清楚三片果瓣" },
      ],
      cite: ["foc-zkjc", "foc-viola"],
    },
    {
      type: "magnifier",
      title: "凑近看裂开的果子",
      shot: { photo: "seeds", caption: "三片果瓣和种子", shoot: "夏天找一个裂开的果子，从正上方拍，能看清每片果瓣里的种子" },
      text: "果子裂成 3 瓣，每瓣像一只小船，种子一颗颗排在里面。种子深棕色，约 2 毫米，上面常有褐色小点。种子走光了，就只剩下空空的果瓣。",
      zoom: 2.5,
      start: [0.63, 0.42],
      cite: ["foc-zkjc", "foc-viola"],
    },
    {
      type: "compare",
      title: "春天小叶，夏天大叶",
      before: { photo: "same-spring", label: "开花时", caption: "叶子小小的", shoot: "3 月选一丛好找的，记住它在哪儿，拍下开花时的叶子" },
      after: { photo: "same-summer", label: "结果时", caption: "叶子又大又宽", shoot: "6～7 月回到同一丛，用同样的角度再拍一张" },
      text: "开花时叶柄只有 1～5 厘米，叶片 1～4.5 厘米；到结果时叶柄能长到 13 厘米，叶片长到 10 厘米长、4 厘米宽，基部变成心形。",
      cite: ["foc-zkjc"],
    },
    {
      type: "lookalike",
      title: "紫色小花，别认错",
      quiz: true,
      items: [
        {
          name: "紫花地丁", scientific: "Viola philippica",
          shot: { photo: "look-zhdd", caption: "紫花地丁" },
          tells: ["开花晚一些，多在 4～5 月", "叶子窄窄长长，开花时叶柄比叶片还长"],
        },
        {
          name: "早开堇菜", scientific: "Viola prionantha", self: true,
          shot: { photo: "look-zkjc", caption: "早开堇菜" },
          tells: ["开花早，3～4 月就开", "叶子宽一些，基部有时微微凹进去，像心形", "花大一些，直径 1.2～2 厘米"],
        },
      ],
      cite: ["foc-zkjc", "foc-zhdd", "wiki-zh"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 3 月拍到它开花最多，10 月又有一小拨。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "它一年开几次花？", a: "能开两回！3～4 月开一回，到了 10 月还会再开一回。", cite: ["foc-zkjc"] },
        { q: "花后面的小尾巴是干什么的？", a: "那是距，像一个小口袋。前面两枚雄蕊各长着一根带花蜜的小附属物，一直伸进距里。", cite: ["foc-zkjc", "foc-viola"] },
        { q: "它还会开不张开的花吗？", a: "会。白天短时它开张开的紫花；白天变长，就改开一种不张开的小花，叫闭锁花，没有蜜腺，花瓣也没长开。", cite: ["li2022", "foc-viola"] },
        { q: "种子是怎么出门的？", a: "多数堇菜分两步：果子裂开时把种子弹出去；种子落地后，再被蚂蚁搬走。", cite: ["beattie1975", "foc-viola"] },
      ],
    },
  ],
  care: "只看、拍照，不摘花、不挖根。路边的植物可能打过药，不要放进嘴里。",
  nextTime: "10 月再回到同一丛看看：它是不是又开花了？",
  sources: [
    { id: "foc-zkjc", title: "Viola prionantha 早开堇菜", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014407" },
    { id: "foc-viola", title: "Viola 堇菜属", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=134607" },
    { id: "foc-zhdd", title: "Viola philippica 紫花地丁", by: "Flora of China", url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200014402" },
    { id: "li2022", title: "Transcriptomic comparison sheds new light on regulatory networks for dimorphic flower development in response to photoperiod in Viola prionantha", by: "Li et al., BMC Plant Biology 2022", url: "https://doi.org/10.1186/s12870-022-03732-4" },
    { id: "beattie1975", title: "Seed dispersal in Viola (Violaceae): adaptations and strategies", by: "Beattie & Lyons, American Journal of Botany 1975", url: "https://doi.org/10.1002/j.1537-2197.1975.tb14104.x" },
    { id: "wiki-zh", title: "早开堇菜", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%97%A9%E5%BC%80%E5%A0%87%E8%8F%9C" },
  ],
  by: ["kid", "dad"],
};

export default entry;
