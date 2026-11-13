import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 花盆底和湿石头下常见：能严丝合缝团成球的是卷甲虫属鼠妇；扁平粗糙、不会团成球的多是粗糙鼠妇等。
const entry: Entry = {
  id: "shu-fu",
  name: "鼠妇",
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
          x: 0.27,
          y: 0.27,
          label: "探路的一对触角",
          detail: "头上伸出一对带细毛的触角，用来摸路和闻同伴留下的气味；另一对触角退化得很小。",
          cite: ["adw"],
        },
        {
          x: 0.52,
          y: 0.46,
          label: "一节节钙质背甲",
          detail: "灰褐色的硬壳像一排排小瓦片，里面含有碳酸钙。成体大约 1～1.8 厘米长。",
          cite: ["adw", "hild-2008"],
        },
        {
          x: 0.43,
          y: 0.62,
          label: "7 对走路的短腿",
          detail: "胸部 7 节每节长一对步足，一共 14 条腿！昆虫只有 6 条腿，它不是昆虫，而是软甲纲的甲壳动物。",
          cite: ["adw"],
        },
        {
          x: 0.72,
          y: 0.69,
          label: "圆润平齐的尾巴",
          detail: "尾部末端拼成圆弧边，没有伸出长长的小叉尾，团起来才能合得严严实实。",
          cite: ["adw", "wiki-en"],
        },
      ],
    },
    {
      type: "compare",
      title: "伸展开爬行 vs 团成小圆球",
      before: {
        photo: "state-walk",
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
      text: "平时它伸展开一节节背甲，迈着 14 条小短腿慢慢爬；一旦感觉到震动或触碰，就会把身体往里一卷，扣成一颗没有缝隙的小圆球，把柔软的肚子和腿都护在里面，还能减少水分蒸发。",
      cite: ["adw", "wiki-en"],
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
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 3～10 月经常拍到它，4～7 月温暖湿润时记录最多；天冷结冰的 12～2 月很少露面。我们是哪个月遇见它的？",
      cite: ["adw"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它和虾、螃蟹真是亲戚吗？",
          a: "真的！它属于软甲纲，和海里的虾、螃蟹同一纲，是搬到陆地上生活的甲壳动物。刚孵出的小鼠妇只有 6 对腿，蜕皮后才长出第 7 对。",
          cite: ["adw", "wiki-en"],
        },
        {
          q: "鼠妇妈妈怎么带宝宝？",
          a: "妈妈胸部下面有一只装满液体的「育儿袋」，能把几十到上百颗卵抱在袋里孵化。小鼠妇孵出后，还会在袋里再待三四天才爬出来。",
          cite: ["adw", "wiki-en"],
        },
        {
          q: "为什么总躲在潮湿的石头和花盆底？",
          a: "它肚子下面前两对腹肢里有白色海绵状的「伪气管」，像鳃一样必须保持湿润才能呼吸空气。太阳一晒干，它很快就会失水。",
          cite: ["adw", "wiki-en"],
        },
        {
          q: "西瓜虫在泥土里吃什么？",
          a: "它主要啃食腐烂的落叶、枯草和真菌，像花坛里的「清洁工」，帮土壤把植物残体分解成养分。",
          cite: ["adw", "wiki-en"],
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
      id: "wiki-en",
      title: "Armadillidium vulgare",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Armadillidium_vulgare",
    },
    {
      id: "hild-2008",
      title: "Spatial distribution of calcite and amorphous calcium carbonate in the cuticle of the terrestrial crustaceans Porcellio scaber and Armadillidium vulgare",
      by: "Journal of Structural Biology (2008)",
      url: "https://doi.org/10.1016/j.jsb.2008.04.010",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
