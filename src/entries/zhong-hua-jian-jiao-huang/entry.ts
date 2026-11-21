import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
// 草地里还有同样尖头的短额负蝗，看扁宽剑状触角、修长大体型和无色后翅来区分。
// 英文维基说它没有发声器官，与国家自然博物馆和 Japan Times 的描述相反，发声一事不引维基。
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
          x: 0.54,
          y: 0.5,
          label: "往前尖伸的圆锥头",
          detail: "脑袋往前斜斜尖出去，复眼长在尖头靠前的位置，脸面斜斜向后收，是草地里很好认的「尖头蚂蚱」。",
          cite: ["nnhm", "wiki-acridinae"],
        },
        {
          x: 0.61,
          y: 0.35,
          label: "像小宝剑的扁触角",
          detail: "头顶伸出两根又短又扁、基部宽尖端细的触角，像两把小宝剑，「剑角蝗」的名字就从这儿来。",
          cite: ["wiki-acridinae", "nnhm"],
        },
        {
          x: 0.32,
          y: 0.59,
          label: "修长身子与长翅膀",
          detail: "身子细长像小扁担，成虫长着窄长的翅膀盖过肚子；雌虫体长约 7～8 厘米，比 4～5 厘米的雄虫大一截。",
          cite: ["wiki-en", "jt-2005", "nnhm"],
        },
        {
          x: 0.29,
          y: 0.43,
          label: "像弹弓的长后腿",
          detail: "后腿又细又长，起跳前先折拢，把力气存在腿里像压紧的弹簧，一松开就猛蹬地面，蹦出老远。",
          cite: ["jt-2005", "nnhm"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "草丛里藏着谁？",
      shot: {
        photo: "head",
        caption: "一片草叶间，藏着一只头朝上的中华剑角蝗",
        shoot: "在草地边站定，先别走近，竖着拍下它停在草叶间的样子，看能不能一眼找到它",
      },
      text: "这片草里藏着一只中华剑角蝗。移动放大镜找找它：尖脑袋朝上，细长的身子和草叶一样绿、一样直，一动不动时很难被发现。",
      zoom: 2.5,
      start: [0.55, 0.5],
      cite: ["nnhm"],
    },
    {
      type: "steps",
      title: "从土里的卵块到会飞的成虫",
      steps: [
        {
          photo: "step-nymph",
          label: "跳蝻",
          caption: "春夏叶片上的小若虫，还没有翅膀",
          shoot: "五六月在草地和低矮叶片上找绿色小若虫，从侧面拍出没有翅膀的身子",
          text: "秋天雌虫把一大块包在泡沫里的卵产进土里。卵在土中过冬，第二年春天孵出没翅膀、只会蹦的小若虫，叫「跳蝻」。",
        },
        {
          photo: "step-late",
          label: "大若虫",
          caption: "个头已经很长、背上只有短翅芽的大若虫",
          shoot: "七月在同一片草地找身子已很长、翅膀还短的若虫，从上方拍出背上的翅芽",
          text: "它不经过蛹，跳蝻一次次蜕皮长大，背上的翅芽越来越长；一共蜕皮 5 次才长齐翅膀。",
        },
        {
          photo: "step-adult",
          label: "成虫",
          caption: "翅膀长齐的成虫，头顶两根扁扁的「剑」",
          shoot: "八九月找翅膀盖过肚子的成虫，从侧面拍下扁触角和长翅膀",
          text: "最后一次蜕皮后翅膀长齐，成了能飞的成虫。在北京它一年只有一代，秋天又把卵产进土里。",
        },
      ],
      cite: ["nnhm", "jt-2005"],
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
      cite: ["nnhm", "jt-2005", "tanaka-2000"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，大家 7、8 月拍到它最多，9、10 月秋草地里也常见；秋天雌虫把卵产进土里过冬，1～3 月没有成虫记录。我们是哪个月遇见它的？",
      cite: ["nnhm"],
    },
    {
      type: "lookalike",
      title: "三种草地蚂蚱，哪只是它？",
      quiz: true,
      items: [
        {
          name: "短额负蝗",
          scientific: "Atractomorpha sinensis",
          shot: { photo: "look-defh", caption: "短额负蝗" },
          tells: [
            "个头比中华剑角蝗小一圈，身子更短一些",
            "成虫飞起时，后翅基部会露出一片漂亮的红色，俗称「红姑娘儿」",
          ],
        },
        {
          name: "中华剑角蝗",
          scientific: "Acrida cinerea",
          self: true,
          shot: { photo: "step-adult", caption: "中华剑角蝗" },
          tells: [
            "身材修长，脑袋往前尖尖地伸出去",
            "两根触角又扁又宽像小宝剑，后翅近乎无色透明",
          ],
        },
        {
          name: "棉蝗",
          scientific: "Chondracris rosea",
          shot: { photo: "look-mh", caption: "棉蝗" },
          tells: [
            "又大又粗壮，雌虫体长可达 9 厘米多，脑袋不往前尖",
            "身上有长毛和黑色小刻点，后翅基部是玫瑰红色",
          ],
        },
      ],
      cite: ["nnhm", "wiki-en", "wiki-acridinae"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "老北京为什么叫它「呱嗒扁儿」？",
          a: "它身材细长像小扁担；雄虫起跳飞翔时用腿和翅膀摩擦，会发出一串「呱嗒、呱嗒」的响声，雌虫不会出声。",
          cite: ["nnhm"],
        },
        {
          q: "小蚂蚱刚孵出来有翅膀吗？",
          a: "没有！它一生只有卵、若虫、成虫三步，没有蛹。小若虫叫「跳蝻」，只会蹦，蜕皮 5 次才长齐翅膀。",
          cite: ["nnhm"],
        },
        {
          q: "大只和小只在一起，是妈妈带宝宝吗？",
          a: "翅膀长齐的都是成虫！雌虫体长 7～8 厘米，雄虫只有 4～5 厘米，大个子是雌虫，小个子是雄虫。",
          cite: ["wiki-en", "jt-2005"],
        },
        {
          q: "它的后腿为什么那么能跳？",
          a: "后腿能像弹簧一样先存好力气再一下放出。可最后一次蜕皮前后约两周，这个「弹簧」还不能用，只能靠肌肉蹬。",
          cite: ["jt-2005"],
        },
        {
          q: "它的颜色会变深吗？",
          a: "科学家给若虫注射一种叫 corazonin 的激素，它和好几种蝗虫蜕皮后身体都变成了深色。",
          cite: ["tanaka-2000"],
        },
        {
          q: "为什么千万别拽它的一条后腿？",
          a: "要是一条后腿被死死捏住，它会猛地发力把这条腿挣断逃命。少一条腿还能活，但跳起来就不利索了。",
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
      id: "jt-2005",
      title: "Oriental long-headed locust",
      by: "Rowan Hooper，The Japan Times（2005）",
      url: "https://www.japantimes.co.jp/life/2005/07/28/environment/oriental-long-headed-locust/",
    },
    {
      id: "tanaka-2000",
      title: "Induction of darkening by corazonins in several species of Orthoptera and their possible presence in ten insect orders",
      by: "Applied Entomology and Zoology (2000)",
      url: "https://doi.org/10.1303/aez.2000.509",
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
  ],
  by: ["kid", "dad"],
};

export default entry;