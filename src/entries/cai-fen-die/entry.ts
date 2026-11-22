import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "cai-fen-die",
  name: "菜粉蝶",
  pinyin: "cài fěn dié",
  scientific: "Pieris rapae",
  kind: "animal",
  // 白色的粉蝶有好几种，拍到翅膀正面和反面再确认
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "鳞翅目", "粉蝶科", "粉蝶属"],
  when: { date: "2026-11-11", label: "待遇见" },
  draft: true,
  cover: { photo: "cover", caption: "我们遇见的那只菜粉蝶", shoot: "我们遇见的那一只：停在花上吸蜜时，从侧面或上方拍，翅尖的黑斑清楚；慢慢靠近，只拍不抓" },
  hello: "白翅膀尖上一块黑。它的毛毛虫绿绿的，爱啃白菜和甘蓝。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: { photo: "adult-open", caption: "张开翅膀的菜粉蝶（雌）", shoot: "春到秋晴天上午，等它停在花上张开翅膀，从正上方拍，头朝上，四片翅膀的正面都在画面里" },
      points: [
        { x: 0.86, y: 0.15, label: "翅尖的黑斑", detail: "前翅顶角是黑的。这只只有一点灰：天冷时长大的菜粉蝶，黑斑小，甚至没有。", cite: ["adw-pr", "bj-pr"] },
        { x: 0.18, y: 0.31, label: "数一数黑点", detail: "前翅中间的黑点：雌蝶有 2 个，雄蝶只有 1 个。这一只有 2 个。", cite: ["adw-pr", "wiki-en"] },
        { x: 0.82, y: 0.55, label: "后翅一个点", detail: "后翅白色，靠前边上有 1 个黑点。", cite: ["adw-pr"] },
        { x: 0.5, y: 0.6, label: "毛茸茸", detail: "身上盖着密密的毛：雌蝶的毛偏白，雄蝶的毛偏黄。", cite: ["adw-pr"] },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看它的头",
      shot: { photo: "head", caption: "菜粉蝶的头和复眼", shoot: "它停在花上吸蜜时，从侧面慢慢靠近，微距对准眼睛拍；别伸手碰" },
      text: "圆鼓鼓的是复眼，由许多小眼组成。菜粉蝶能看见紫外线——那是人眼看不见的光。",
      start: [0.43, 0.55],
      cite: ["adw-pr"],
    },
    {
      type: "steps",
      title: "从一粒卵到一只蝴蝶",
      steps: [
        { photo: "step-egg", label: "卵", text: "雌蝶把卵一粒一粒产在叶子背面。卵刚产下是白色，慢慢变黄，上面有 12 条竖棱。", caption: "一粒竖着的卵，看得见一道道竖棱", shoot: "春到秋，在白菜、甘蓝或野生十字花科植物的叶子背面找一粒小黄卵，微距拍，不摘叶子" },
        { photo: "step-larva", label: "毛毛虫", text: "毛毛虫绿绿的，像天鹅绒，背中间有一条黄线。它蜕 4 次皮、分 5 龄，最长约 35 毫米。", caption: "叶子上的绿色毛毛虫，旁边的叶子被啃出了洞", shoot: "菜叶上的绿色毛毛虫，侧面微距拍，背上的黄线清楚；只拍不碰" },
        { photo: "step-pupa", label: "蛹", text: "蛹附在菜叶或旁边的杂物上，长 19～20 毫米，有灰、绿、黄、褐几种颜色，常和周围差不多。", caption: "附在叶子上的绿色蛹", shoot: "菜地边的叶子、篱笆或墙上找一个蛹，旁边带一点背景，看出它和周围的颜色" },
        { photo: "step-adult", label: "蝴蝶", text: "过 11 天到几周，蝴蝶从蛹里钻出来；秋天化的蛹会在蛹里过冬。卵、幼虫、蛹、成虫，这叫完全变态。", caption: "飞出来的蝴蝶", shoot: "一只停在叶子或花上的成虫，和前面几张拍在同一片菜地更好" },
      ],
      cite: ["adw-pr", "wiki-en"],
    },
    {
      type: "lookalike",
      title: "白蝴蝶，别认错",
      quiz: true,
      items: [
        {
          name: "云粉蝶", scientific: "Pontia edusa",
          shot: { photo: "look-yfd", caption: "云粉蝶" },
          tells: ["后翅反面有一块块灰绿色的斑", "毛毛虫吃木犀草一类的植物"],
        },
        {
          name: "菜粉蝶", scientific: "Pieris rapae", self: true,
          shot: { photo: "look-cfd", caption: "菜粉蝶" },
          tells: ["后翅反面淡黄色，只稀稀地撒着一点灰黑色", "毛毛虫爱吃白菜、甘蓝这些菜"],
        },
      ],
      cite: ["wiki-pe", "wiki-en", "adw-pr"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年 12 个月都有人拍到它，5、6 月最多；12 月和 1 月很少。我们是哪个月遇见它的？",
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        { q: "一只雌蝶能产多少粒卵？", a: "一辈子能产 300～400 粒。可它一次只产一粒，产在叶子背面。", cite: ["adw-pr"] },
        { q: "毛毛虫刚出生先吃什么？", a: "先把自己的卵壳吃掉，再去啃叶子。", cite: ["wiki-en"] },
        { q: "它一秒钟扇几下翅膀？", a: "科学家用高速相机拍飞行的昆虫，菜粉蝶平均一秒钟扇 12.8 下。", cite: ["ha-2013"] },
        { q: "它能飞多远？", a: "有人看到过它一口气飞了 12 公里。不过平常一只雌蝶一天大约只飞 0.7 公里。", cite: ["wiki-en"] },
        { q: "春天和夏天的菜粉蝶一样吗？", a: "不太一样。天热时长大的，翅上的黑斑又黑又明显；天冷时长大的，黑斑小，有的几乎没有。", cite: ["bj-pr"] },
        { q: "欧洲和中国的菜粉蝶是一家吗？", a: "是亲戚。科学家比对 DNA 发现，大约 1200 年前它们分成了两支，那正是丝绸之路热闹、人们多种菜的年代。", cite: ["pnas-2019"] },
      ],
    },
  ],
  care: "只看不抓，不用手捏翅膀。菜叶上的绿毛毛虫也只看不碰，看完让它留在叶子上。",
  nextTime: "下次在花坛数一数：停下来的菜粉蝶，前翅中间有 1 个黑点还是 2 个？",
  sources: [
    { id: "adw-pr", title: "Pieris rapae", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Pieris_rapae/" },
    { id: "bj-pr", title: "菜粉蝶（昆虫类资源）", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/zygk/kclzy/201510/t20151013_120655.shtml" },
    { id: "pnas-2019", title: "Global invasion history of the agricultural pest butterfly Pieris rapae revealed with genomics and citizen science", by: "Ryan et al., PNAS, 2019", url: "https://doi.org/10.1073/pnas.1907492116" },
    { id: "ha-2013", title: "Relationship between wingbeat frequency and resonant frequency of the wing in insects", by: "Bioinspiration & Biomimetics, 2013", url: "https://doi.org/10.1088/1748-3182/8/4/046008" },
    { id: "wiki-en", title: "Pieris rapae", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pieris_rapae" },
    { id: "wiki-pe", title: "Pontia edusa", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pontia_edusa" },
  ],
  by: ["kid", "dad"],
};

export default entry;
