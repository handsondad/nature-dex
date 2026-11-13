import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 草地里还有同样尖头的短额负蝗，看扁宽剑状触角、修长大体型和无色后翅来区分。
const entry: Entry = {
  id: "zhong-hua-jian-jiao-huang",
  name: "中华剑角蝗",
  scientific: "Acrida cinerea",
  kind: "animal",
  certainty: "likely",
  taxonomy: ["动物界", "节肢动物门", "昆虫纲", "直翅目", "蝗科", "剑角蝗属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "我们遇见的那只中华剑角蝗",
    shoot: "夏秋在公园草地边慢慢走近，从侧面拍一整只：尖尖的头、扁宽的剑状触角和细长后腿都拍进去；只拍不抓",
  },
  hello: "尖尖的脑袋顶着两把扁扁的「小宝剑」，长后腿一蹬就能从草丛蹦出老远。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "adult-side",
        caption: "从侧面看一只成虫",
        shoot: "夏秋在草地上找一只停稳的成虫，从侧面拍清尖脑袋、两根扁触角、长翅膀和细长后腿",
      },
      points: [
        {
          x: 0.72,
          y: 0.43,
          label: "往前尖伸的圆锥头",
          detail: "脑袋往前斜斜尖出去，复眼长在尖头靠前的位置，脸面斜斜向后收，是草地里很好认的「尖头蚂蚱」。",
          cite: ["nnhm", "wiki-acridinae"],
        },
        {
          x: 0.85,
          y: 0.36,
          label: "像小宝剑的扁触角",
          detail: "头顶伸出两根又短又扁、基部宽尖端细的触角，像两把小宝剑，「剑角蝗」的名字就从这儿来。",
          cite: ["wiki-acridinae", "nnhm"],
        },
        {
          x: 0.44,
          y: 0.5,
          label: "修长身子与长翅膀",
          detail: "身子细长像小扁担，成虫长着窄长的翅膀盖过肚子；雌虫体长约 7～8 厘米，比 4～5 厘米的雄虫大一截。",
          cite: ["wiki-en", "nnhm"],
        },
        {
          x: 0.25,
          y: 0.35,
          label: "像弹弓的长后腿",
          detail: "一对后腿特别细长有力，起跳前先折拢蓄力，像松开弹弓一样猛蹬地面，一下就能蹦出老远。",
          cite: ["nnhm", "wiki-gh"],
        },
      ],
    },
    {
      type: "compare",
      title: "翠绿衣裳 vs 枯草衣裳",
      before: {
        photo: "morph-green",
        label: "绿色型",
        caption: "藏在青草叶上的翠绿色个体",
        shoot: "在绿草地里横拍一只翠绿色的中华剑角蝗",
      },
      after: {
        photo: "morph-brown",
        label: "褐色型",
        caption: "像一根干草茎的枯草褐色个体",
        shoot: "在秋草或干草边用同样横画幅拍一只枯草褐色的中华剑角蝗",
      },
      text: "都是中华剑角蝗，却常有翠绿色和枯草褐色两种色型：绿色的藏在鲜嫩青草里，褐色的混在干枯草茎间，站在草丛里一动不动时都很难被天敌发现。",
      cite: ["nnhm", "wiki-en", "tanaka-2000"],
    },
    {
      type: "lookalike",
      title: "两种「尖头蚂蚱」，别认错",
      quiz: true,
      items: [
        {
          name: "短额负蝗",
          scientific: "Atractomorpha sinensis",
          shot: { photo: "look-defh", caption: "短额负蝗" },
          tells: [
            "个头比中华剑角蝗小一圈，身子更短一些",
            "成虫飞起时，后翅基部会露出一片漂亮的玫瑰红色，俗称「红姑娘儿」",
          ],
        },
        {
          name: "中华剑角蝗",
          scientific: "Acrida cinerea",
          self: true,
          shot: { photo: "look-zhjjh", caption: "中华剑角蝗" },
          tells: [
            "身材修长大得多，雌虫体长可达 7～8 厘米",
            "两根触角又扁又宽像小宝剑，后翅近乎无色透明",
          ],
        },
      ],
      cite: ["nnhm", "wiki-en", "wiki-acridinae"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7、8 月拍到它最多，9、10 月秋草地里也常见；秋天雌虫把卵产进土里过冬，1～3 月没有成虫记录。我们是哪个月遇见它的？",
      cite: ["nnhm"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "小蚂蚱刚孵出来有翅膀吗？",
          a: "没有！它是不完全变态的昆虫，一生只经过卵、若虫、成虫三步，没有蛹。春天破土而出的小若虫没翅膀只会蹦，叫「跳蝻」，蜕皮 5 次才长齐翅膀。",
          cite: ["nnhm", "wiki-gh"],
        },
        {
          q: "老北京为什么叫它「呱嗒扁儿」？",
          a: "它身材细长像小扁担，雄虫起跳飞翔时翅和后腿摩擦拍击，会发出一串「呱嗒、呱嗒」的响声；雌虫则不会发声。",
          cite: ["nnhm"],
        },
        {
          q: "大只和小只在一起，是妈妈带宝宝吗？",
          a: "只要翅膀都长齐了，就都是成虫！雌虫肚子大、体长 7～8 厘米，雄虫只有 4～5 厘米，大个子其实是雌虫，小个子是雄虫。",
          cite: ["wiki-en", "nnhm"],
        },
        {
          q: "为什么千万别拽它的一条后腿？",
          a: "要是只被死死捏住一条后腿，它会猛地发力直接断掉这条腿逃命。虽然少一条腿还能活着，但跳起来就不利索了。",
          cite: ["nnhm"],
        },
      ],
    },
  ],
  care: "只看、拍照，不要去捏它的长后腿。要是只被拽住一条后腿，它挣脱时可能会把那条腿直接挣断。",
  nextTime: "下次在草地遇见尖头蚂蚱，先别惊动它：看看它是穿翠绿衣裳还是枯草衣裳？翅膀盖过肚子了吗？",
  sources: [
    {
      id: "nnhm",
      title: "说说北京的蚂蚱",
      by: "国家自然博物馆（《大自然》）",
      url: "https://www.nnhm.org.cn/kxyj/bwgyj/wap_4028c10888210097018824ce7045016a.shtml",
    },
    {
      id: "wiki-en",
      title: "Acrida cinerea",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Acrida_cinerea",
    },
    {
      id: "wiki-acridinae",
      title: "Acridinae",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Acridinae",
    },
    {
      id: "wiki-gh",
      title: "Grasshopper",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Grasshopper",
    },
    {
      id: "tanaka-2000",
      title: "Induction of darkening by corazonins in several species of Orthoptera and their possible presence in ten insect orders",
      by: "Applied Entomology and Zoology (2000)",
      url: "https://doi.org/10.1303/aez.2000.509",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
