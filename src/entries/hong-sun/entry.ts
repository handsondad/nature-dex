import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "hong-sun",
  name: "红隼",
  pinyin: "hóng sǔn",
  scientific: "Falco tinnunculus",
  kind: "animal",
  // 半空迎风悬停、扇形长尾、眼下黑泪纹的小型猛禽在北京城郊最常见；远看逆光偶与阿穆尔隼等相近，拍清背羽后更稳妥
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "隼形目", "隼科", "隼属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "抓着小蜥蜴飞过草地的雄性红隼",
    shoot: "在开阔草地或水库岸边仰头远拍：它悬停在半空或停在高枝、电线上时，用长焦拍清尖翅膀、扇形尾巴或眼下黑纹，千万别靠近它的落脚处",
  },
  hello: "迎着风快速扇翅、把尾巴张成小扇子，它能像钉在半空中一样低头找田鼠！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "hover-sky",
        caption: "在蓝天里张开翅膀和尾巴的雄性红隼",
        shoot: "站在地面远远仰拍半空悬停的红隼：张开的双翅、扇子一样的尾巴和浅色带斑点的肚皮都在画面里",
      },
      points: [
        {
          x: 0.15,
          y: 0.27,
          label: "又长又尖的翅膀",
          detail: "两只翅膀展开有 65～82 厘米宽，翅尖是深色的。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          x: 0.47,
          y: 0.71,
          label: "尾巴末端一道黑边",
          detail: "尾巴长长的，末端有一道黑色宽带，最外面还镶着一条窄窄的白边。",
          cite: ["wiki-en", "bow-eurkes"],
        },
        {
          x: 0.495,
          y: 0.47,
          label: "浅黄肚皮带黑纹",
          detail: "胸和肚子是浅黄色的，上面有一条条细细的深色纵纹。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          x: 0.545,
          y: 0.33,
          label: "灰脑袋",
          detail: "成年雄鸟的头和尾巴是蓝灰色的；雌鸟的头是棕色的。",
          cite: ["bow-eurkes", "adw-kestrel"],
        },
      ],
    },
    {
      type: "compare",
      title: "红隼爸爸和妈妈，羽毛不一样",
      before: { photo: "male", label: "雄鸟", caption: "蓝灰色的头，砖红色的背上有黑点", shoot: "远远拍一只停着的雄红隼，侧面，头和背都在画面里" },
      after: { photo: "female", label: "雌鸟", caption: "棕色的头，背上布满深色横斑", shoot: "远远拍一只停着的雌红隼，侧面，头和背都在画面里" },
      text: "很多猛禽公母长得差不多，红隼却能看羽毛分公母。雄鸟头和尾巴是蓝灰色，砖红色的背上点着黑点；雌鸟从头到尾都是棕色，横斑更密，个子只比雄鸟大一点点。",
      cite: ["bow-eurkes", "adw-kestrel", "wiki-en"],
    },
    {
      type: "steps",
      title: "红隼宝宝长大了",
      steps: [
        {
          photo: "step-nest",
          label: "借个窝",
          text: "红隼自己不搭窝。它住崖洞、树洞、楼房的缝隙，也常借乌鸦、喜鹊这类鸟的旧树枝窝。",
          caption: "楼房墙角的旧树枝窝里，露出一截红隼的尾巴",
          shoot: "只用长焦远拍；看到它在楼缝或旧窝进出，不靠近、不探头",
        },
        {
          photo: "step-egg",
          label: "下蛋",
          text: "一窝有 3～7 枚蛋，蛋上布满红褐色的斑点。",
          caption: "巢箱里的 6 枚红隼蛋",
          shoot: "不拍蛋：鸟窝里的蛋只看转载照片，我们不靠近鸟窝",
        },
        {
          photo: "step-chick",
          label: "出壳",
          text: "孵大约一个月，小红隼出壳了，全身是白色的绒毛。爸爸负责抓食物回来。",
          caption: "挤在巢箱里的一窝白绒毛小红隼",
          shoot: "不拍雏鸟：只看转载照片，我们不靠近鸟窝",
        },
        {
          photo: "step-fledge",
          label: "离巢",
          text: "出壳后大约一个月，小红隼长出像妈妈的棕色羽毛，就能飞出窝了。之后爸爸妈妈还要再喂它一阵子。",
          caption: "站在楼房旧窝边上的几只小红隼",
          shoot: "夏天远远拍站在楼边或电线上、羽毛还有点蓬松的小红隼",
        },
      ],
      cite: ["adw-kestrel", "wiki-en"],
    },
    {
      type: "magnifier",
      title: "凑近看它的脸",
      shot: {
        photo: "face",
        caption: "趴在蛋上的红隼妈妈，正面看得清眼睛和嘴",
        shoot: "用长焦拍一张停着的红隼正脸或侧脸：眼睛、黄色的嘴基和眼下的黑纹要清楚",
      },
      text: "每只眼睛下面都有一道黑色的竖纹，像流下的一道眼泪。嘴的根部、眼睛周围一圈和脚都是亮黄色的。",
      zoom: 2.5,
      start: [0.42, 0.5],
      cite: ["wiki-en", "adw-kestrel"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年 12 个月都有人拍到它，10 月最多。在北京，它既是留鸟，也是夏候鸟，一年四季都能找找看。我们会在哪个月遇见它？",
      cite: ["bj-bird-list"],
    },
    {
      type: "lookalike",
      title: "都是小隼，别认错",
      quiz: true,
      items: [
        {
          name: "红脚隼",
          scientific: "Falco amurensis",
          shot: { photo: "look-hjs", caption: "红脚隼雄鸟" },
          tells: ["雄鸟全身深灰，背上没有砖红色", "大腿和尾巴下面是锈红色", "飞起来翅膀下面是白的"],
        },
        {
          name: "红隼",
          scientific: "Falco tinnunculus",
          self: true,
          shot: { photo: "cover", caption: "红隼雄鸟" },
          tells: ["背是砖红色，带黑色斑点", "尾巴长，末端一道黑边", "常在半空迎风悬停"],
        },
        {
          name: "燕隼",
          scientific: "Falco subbuteo",
          shot: { photo: "look-ys", caption: "燕隼" },
          tells: ["背是蓝灰色，没有红色", "白脸颊上一道粗黑的“胡子”", "大腿和尾巴下面是红色"],
        },
      ],
      cite: ["wiki-amur", "bow-eurhob", "bow-eurkes", "bj-bird-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它为什么能“钉”在半空？",
          a: "它迎着风飞、快速扇翅，停在离地 10～20 米的地方盯着草丛。所以它有个英文外号叫 windhover，意思是“迎风悬停者”。",
          cite: ["wiki-en", "bow-eurkes", "adw-kestrel"],
        },
        {
          q: "一只红隼一天要吃多少？",
          a: "大约相当于 4～8 只田鼠。老鼠多的时候，它会把吃不完的藏起来，留着以后吃。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          q: "红隼看得见田鼠的“尿迹”吗？",
          a: "1995 年的实验说，红隼能看见紫外光下的田鼠尿迹。2013 年又有科学家测量后认为不太可能。科学家还在继续研究！",
          cite: ["viitala-1995", "lind-2013"],
        },
        {
          q: "为什么城里的楼上会有红隼的家？",
          a: "红隼自己不搭窝，喜欢住在洞里和高处的平台上。在城市里，它常把家安在楼房上，也会用乌鸦的旧窝。",
          cite: ["wiki-en", "adw-kestrel"],
        },
        {
          q: "红隼是受保护的鸟吗？",
          a: "是的，它是国家二级重点保护野生动物。北京的名录里，它既是全年都在的留鸟，也是在北京繁殖的夏候鸟。",
          cite: ["bj-bird-list"],
        },
      ],
    },
  ],
  care: "它是国家二级保护鸟，只远远看，不追不喂。看到它在楼上安家，不靠近、不打扰；捡到小鸟先告诉大人。",
  nextTime: "下次看到天上悬停的红隼，在心里默默数秒：它能在同一个地方稳稳停住多少秒才换位置？",
  sources: [
    { id: "bow-eurkes", title: "Eurasian Kestrel (Falco tinnunculus), Introduction", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/eurkes/cur/introduction" },
    { id: "adw-kestrel", title: "Falco tinnunculus (common kestrel)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Falco_tinnunculus/" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "viitala-1995", title: "Attraction of kestrels to vole scent marks visible in ultraviolet light", by: "Nature, 1995", url: "https://doi.org/10.1038/373425a0" },
    { id: "lind-2013", title: "Ultraviolet sensitivity and colour vision in raptor foraging", by: "Journal of Experimental Biology, 2013", url: "https://doi.org/10.1242/jeb.082834" },
    { id: "bow-eurhob", title: "Eurasian Hobby (Falco subbuteo), Introduction", by: "Birds of the World", url: "https://birdsoftheworld.org/bow/species/eurhob/cur/introduction" },
    { id: "wiki-amur", title: "Amur falcon", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Amur_falcon" },
    { id: "wiki-en", title: "Common kestrel", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Common_kestrel" },
  ],
  by: ["kid", "dad"],
};

export default entry;
