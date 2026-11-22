import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 花盆底和湿石头下常见：能严丝合缝团成球的是卷甲虫属鼠妇；扁平粗糙、不会团成球的多是粗糙鼠妇等。
const entry: Entry = {
  id: "shu-fu",
  name: "鼠妇",
  pinyin: "shǔ fù",
  scientific: "Armadillidium vulgare",
  kind: "animal",
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "软甲纲", "等足目", "卷甲虫科", "卷甲虫属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "我们遇见的那只鼠妇",
    shoot: "雨后或傍晚，轻轻翻开花坛边的石头或花盆底，微距拍一只正在爬行或团成小球的鼠妇；拍完把石头轻轻放回原位",
  },
  hello: "大家常叫它西瓜虫：受惊就卷成严丝合缝的小圆球，其实是陆地上的甲壳动物。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "adult-top",
        caption: "伸展开爬行的鼠妇",
        shoot: "等它放松伸展开时，从斜上方微距拍清一节节背甲、头上的触角和两侧伸出的小短腿",
      },
      points: [
        {
          x: 0.5,
          y: 0.17,
          label: "探路的一对触角",
          detail: "头上伸出一对带细毛的触角，用来摸路和闻同伴留下的气味；另一对触角退化得很小。",
          cite: ["adw"],
        },
        {
          x: 0.5,
          y: 0.45,
          label: "一节节钙质背甲",
          detail: "灰褐色的硬壳像一排排小瓦片，里面含有碳酸钙。成体平均约 1 厘米长，大的能到 1.8 厘米。",
          cite: ["adw", "hild-2008"],
        },
        {
          x: 0.64,
          y: 0.51,
          label: "7 对走路的短腿",
          detail: "胸部 7 节每节长一对步足，一共 14 条腿！昆虫只有 6 条腿，它不是昆虫，而是软甲纲的甲壳动物。",
          cite: ["adw"],
        },
        {
          x: 0.42,
          y: 0.69,
          label: "圆润平齐的尾巴",
          detail: "尾部末端拼成圆弧边，没有伸出长长的小叉尾，团起来才能合得严严实实。",
          cite: ["adw", "wiki-en"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看小圆球",
      shot: {
        photo: "state-ball",
        caption: "团成小球的鼠妇，正对着镜头",
        shoot: "它团成球后别再碰它，从正前方微距拍，把头和一圈圈背甲的接缝拍清楚",
      },
      text: "把放大镜移到球的正面：头缩在当中，两边露出一对小眼睛；一节节背甲一圈圈扣紧，把软软的肚子和腿都藏在里面。",
      zoom: 2.5,
      start: [0.5, 0.36],
      cite: ["adw"],
    },
    {
      type: "steps",
      title: "从妈妈的育儿袋到一身硬甲",
      steps: [
        {
          photo: "step-brood",
          label: "出袋",
          caption: "肚皮朝上的妈妈身边，挤满刚爬出来的浅色小宝宝",
          shoot: "春夏翻开花盆底时，若看到成群的浅色小鼠妇，就原地拍一张，然后把花盆轻轻放回",
          text: "妈妈胸部下面有个装着液体的育儿袋，卵在里面待 2～3 个月才孵化；孵出的小宝宝再待三四天，才爬出袋子。",
        },
        {
          photo: "step-young",
          label: "小鼠妇",
          caption: "颜色还很浅的小鼠妇",
          shoot: "在同一个花盆底找一只浅色的小鼠妇，从侧面微距拍出它的腿",
          text: "刚出袋的小鼠妇颜色浅，像缩小的爸爸妈妈，只有 6 对腿；蜕几次皮后长出第 7 对腿，就能自己生活了。",
        },
        {
          photo: "look-sf",
          label: "成体",
          caption: "背甲变硬、颜色变深的成体",
          shoot: "在石头边找一只深色的大个子，从正上方拍出一节节背甲",
          text: "长大后它大约每 29 天蜕一次皮；刚蜕完的两天壳还软，不能动也不吃东西。它平均能活一年半左右。",
        },
      ],
      cite: ["adw"],
    },
    {
      type: "compare",
      title: "伸展开爬行 vs 团成小圆球",
      before: {
        photo: "cover",
        label: "伸展爬行",
        caption: "放松时迈着 7 对小短腿爬行",
        shoot: "同一只鼠妇伸展开走路时拍一张",
      },
      after: {
        photo: "state-ball",
        label: "团成圆球",
        caption: "受惊时卷成严丝合缝的小圆球",
        shoot: "它受惊卷成圆球时，在同样角度再拍一张（横竖方向一致）",
      },
      text: "平时它伸展开一节节背甲，迈着 14 条小短腿慢慢爬；一旦感觉到强烈的震动或挤压，就会把身体往里一卷，扣成一颗没有缝隙的小圆球，把柔软的肚子和腿都护在里面，还能减少水分蒸发。",
      cite: ["adw", "smigel-2008"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 3～10 月经常拍到它，4～7 月温暖湿润时拍到的次数多；天冷结冰的 12～2 月很少露面。我们是哪个月遇见它的？",
      cite: ["adw"],
    },
    {
      type: "lookalike",
      title: "都能叫潮虫，谁会滚成球？",
      quiz: true,
      items: [
        {
          name: "粗糙鼠妇",
          scientific: "Porcellio scaber",
          shot: { photo: "look-ps", caption: "粗糙鼠妇" },
          tells: [
            "受惊时不会滚成圆球，只会贴紧地面不动或快跑",
            "背上更扁平，布满细小的颗粒疙瘩",
            "屁股末端伸出两根短短的尾肢",
          ],
        },
        {
          name: "鼠妇",
          scientific: "Armadillidium vulgare",
          self: true,
          shot: { photo: "look-sf", caption: "鼠妇（西瓜虫）" },
          tells: [
            "受惊能卷成严丝合缝的小圆球，俗称「西瓜虫」",
            "背部高高拱起，壳面比较光滑",
            "屁股末端圆钝齐平，没有突出叉尾",
          ],
        },
      ],
      cite: ["adw", "adw-ps", "wiki-en"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它和虾、螃蟹真是亲戚吗？",
          a: "真的！它属于软甲纲，和海里的虾、螃蟹同一纲，是搬到陆地上生活的甲壳动物。",
          cite: ["adw", "wiki-en"],
        },
        {
          q: "为什么总躲在潮湿的石头和花盆底？",
          a: "它肚子下面的腹肢里有白色海绵状的「伪气管」，靠它呼吸空气，可这些「小肺」合不上，在干的地方很快就会失水。",
          cite: ["adw", "adw-ps"],
        },
        {
          q: "团成球除了防身，还有什么用？",
          a: "能保水！科学家在干燥空气里测量，鼠妇团成球时，身体失水的速度比伸展开时少了三成多。",
          cite: ["smigel-2008"],
        },
        {
          q: "它的硬壳是什么做的？",
          a: "壳里含有两种碳酸钙：外层是排得整整齐齐的方解石小晶体，里层是没有晶体形状的碳酸钙，像给盔甲加了钙。",
          cite: ["hild-2008", "adw"],
        },
        {
          q: "西瓜虫在泥土里吃什么？",
          a: "它主要吃腐烂的落叶，也会啃胡萝卜根和水果，把植物残体分解掉，像花坛里的「清洁工」。",
          cite: ["adw"],
        },
        {
          q: "有了盔甲，就没有天敌了吗？",
          a: "硬壳、团成球、背上还能放出难闻的液体，让很多小虫拿它没办法；可椋鸟这样的大鸟照样能吃它。",
          cite: ["adw"],
        },
      ],
    },
  ],
  care: "翻开石头或花盆看完后，记得轻轻把石头按原样放回去，别让它暴露在干太阳下缺水。",
  nextTime: "下次翻开花盆底座看一看：它爬开时是不是有 7 对腿？轻轻碰一下会不会团成球？",
  sources: [
    {
      id: "adw",
      title: "Armadillidium vulgare",
      by: "Animal Diversity Web",
      url: "https://animaldiversity.org/accounts/Armadillidium_vulgare/",
    },
    {
      id: "adw-ps",
      title: "Porcellio scaber",
      by: "Animal Diversity Web",
      url: "https://animaldiversity.org/accounts/Porcellio_scaber/",
    },
    {
      id: "smigel-2008",
      title: "Conglobation in the pill bug, Armadillidium vulgare, as a water conservation mechanism",
      by: "Journal of Insect Science 8: 44 (2008)",
      url: "https://doi.org/10.1673/031.008.4401",
    },
    {
      id: "hild-2008",
      title: "Spatial distribution of calcite and amorphous calcium carbonate in the cuticle of the terrestrial crustaceans Porcellio scaber and Armadillidium vulgare",
      by: "Journal of Structural Biology 163: 100–108 (2008)",
      url: "https://doi.org/10.1016/j.jsb.2008.04.010",
    },
    {
      id: "wiki-en",
      title: "Armadillidium vulgare",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Armadillidium_vulgare",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;