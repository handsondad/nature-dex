import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "pu-tong-cui-niao",
  name: "普通翠鸟",
  scientific: "Alcedo atthis",
  kind: "animal",
  // 北京唯一体型如麻雀大小、蓝绿背配橙栗肚皮的小翠鸟，拍到就能确认
  certainty: "sure",
  taxonomy: ["动物界", "脊索动物门", "鸟纲", "佛法僧目", "翠鸟科", "翠鸟属"],
  when: { date: "2026-11-14", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "停在水边木桩上叼着小鱼的普通翠鸟",
    shoot: "在公园水塘、温榆河或沙河水库岸边安静站定，顺着贴水飞过的蓝光找到它停落的芦苇秆或木桩，用长焦远拍；和大人在岸上，别下水",
  },
  hello: "像一支闪着蓝宝石光的小飞箭掠过水面，抓到小鱼还会先把鱼头朝前顺过来再吞！",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "side",
        caption: "站在枝头的普通翠鸟，长嘴、蓝背、橙肚皮一样不少",
        shoot: "远远拍一只停在水边枝头或石头上的普通翠鸟侧面：长直嘴、蓝点脑袋、橙栗色肚皮和白颈斑都在画面里",
      },
      points: [
        {
          x: 0.52,
          y: 0.43,
          label: "又长又直的尖嘴",
          detail: "身长只有约 16～17 厘米，比麻雀大不了多少，嘴巴却又长又直又尖，像一把小匕首，专门扎进水里夹小鱼。",
          cite: ["wiki-en", "adw-kf"],
        },
        {
          x: 0.69,
          y: 0.37,
          label: "撒满亮点的蓝脑袋",
          detail: "头顶和翅膀是蓝绿色，上面撒满亮蓝色的小点点，背中间还有一道更亮的天蓝色。",
          cite: ["wiki-en", "adw-kf"],
        },
        {
          x: 0.73,
          y: 0.45,
          label: "橙耳斑和白颈斑",
          detail: "眼睛后面有一块橙栗色的耳朵羽毛，再往后是一抹醒目的白斑，喉咙也是白的。",
          cite: ["wiki-en"],
        },
        {
          x: 0.67,
          y: 0.6,
          label: "橙栗色的肚皮",
          detail: "胸口和肚皮是暖暖的橙栗色，和蓝背配在一起，在水边特别显眼。",
          cite: ["wiki-en", "adw-kf"],
        },
        {
          x: 0.72,
          y: 0.79,
          label: "鲜红的小短脚",
          detail: "腿和脚都是鲜红色的，又小又短，正好牢牢抓住水边的细树枝和芦苇秆。",
          cite: ["wiki-en"],
        },
      ],
    },
    {
      type: "compare",
      title: "看下嘴：谁涂了橙红「口红」？",
      before: { photo: "male-bill", label: "雄鸟", caption: "上下嘴全是乌黑色的" },
      after: { photo: "female-bill", label: "雌鸟", caption: "下嘴是鲜亮的橙红色，只有嘴尖是黑的" },
      text: "普通翠鸟爸爸和妈妈的羽毛几乎一模一样，秘密藏在嘴巴上：雄鸟上下嘴一片乌黑；雌鸟的下嘴是橙红色的，只有尖尖是黑的，像抹了口红。把分界线往右拖，看看翠鸟妈妈的嘴！",
      cite: ["wiki-en", "adw-kf"],
    },
    {
      type: "steps",
      title: "翠鸟宝宝是怎么长大的",
      steps: [
        {
          photo: "step-burrow",
          label: "挖地道",
          caption: "飞向河边土壁的普通翠鸟，土壁上方有个洞口",
          shoot: "隔着河远远拍水边陡土壁上的圆洞口和进出的翠鸟，不要走近土壁",
          text: "春天，翠鸟夫妻一起用嘴在水边陡直的土壁上挖一条笔直、微微往上斜的地道，尽头是一间圆圆的小产房。",
        },
        {
          photo: "step-egg",
          label: "孵蛋",
          caption: "博物馆里收藏的一窝普通翠鸟蛋（旁边的刻度是 1 厘米）",
          text: "一窝通常 5～7 枚亮白色的圆蛋，每枚约 2.2 厘米长。爸爸妈妈一起孵，大约 20 天宝宝出壳。",
        },
        {
          photo: "step-fledge",
          label: "离窝",
          caption: "刚离窝不久的小翠鸟",
          shoot: "夏天在水边枝头找颜色偏暗、偏绿的小翠鸟，远远拍，不要靠近",
          text: "宝宝在地道里再长 3 个多星期才飞出来；离窝约 4 天就开始自己学扎水抓鱼，头几周最危险。",
        },
      ],
      cite: ["wiki-en", "adw-kf", "bto"],
    },
    {
      type: "magnifier",
      title: "蓝色是从哪儿来的",
      shot: {
        photo: "feather",
        caption: "阳光下的普通翠鸟，背和尾巴蓝得发亮",
        shoot: "晴天顺光远拍翠鸟的背和尾巴，看羽毛在不同角度下的颜色",
      },
      text: "凑近看它的背：这种翠蓝色不是颜料！羽毛里有像海绵一样的纳米小孔，把蓝光反射出来，角度一变颜色就会变；肚子的橙色才是真的色素颗粒。",
      zoom: 2.5,
      start: [0.6, 0.47],
      cite: ["stavenga-2011", "adw-kf"],
    },
    {
      type: "year",
      title: "什么时候能见到它",
      text: "在中国，一年十二个月都有人拍到它。北京名录里它是北京市重点保护野生动物，属于「夏候鸟 / 留鸟」，在沙河水库、沙河园、温榆河以及奥北森林公园的清澈水面边都能寻到它的身影。我们会在哪个月遇见它？",
      cite: ["bj-bird-list", "bj-shahe-res", "bj-shahe-park", "bj-aobei"],
    },
    {
      type: "lookalike",
      title: "大翡翠还是小翠鸟？",
      quiz: true,
      items: [
        {
          name: "白胸翡翠",
          scientific: "Halcyon smyrnensis",
          shot: { photo: "look-bai-xiong-fei-cui", caption: "大红嘴、棕栗头腹配白胸脯的白胸翡翠" },
          tells: [
            "个子大得多（身长 27～28 厘米），整张大厚嘴都是鲜红色的",
            "脑袋和肚子是深栗棕色，喉咙到胸前有一大片醒目的白胸脯",
          ],
        },
        {
          name: "蓝翡翠",
          scientific: "Halcyon pileata",
          shot: { photo: "look-lan-fei-cui", caption: "黑帽子、白领子、红嘴巴的蓝翡翠" },
          tells: [
            "也是大个子（约 28 厘米），大嘴和腿都是鲜红色的",
            "戴一顶黑帽子，脖子一圈白领，翅膀和背是紫蓝色",
          ],
        },
        {
          name: "普通翠鸟",
          scientific: "Alcedo atthis",
          self: true,
          shot: { photo: "look-cui-niao", caption: "蓝绿头翅配橙栗色肚皮的普通翠鸟" },
          tells: [
            "小巧（约 16～17 厘米），雄鸟黑嘴，雌鸟下嘴橙红",
            "头顶和翅膀蓝绿色带亮点，胸口和肚皮是橙栗色",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-wtk", "wiki-bck", "bj-bird-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它猛扎进水里抓鱼时，眼睛不怕进水吗？",
          a: "不怕！入水时一层透明的「第三眼睑」盖住眼睛，像戴上护目镜；到了水下，它还会换用眼睛里另一块看得最清楚的地方来瞄准。",
          cite: ["wiki-en"],
        },
        {
          q: "它一头扎下去，会潜得很深吗？",
          a: "不深。它常站在离水面 1～2 米的枝头，看准了一头扎下去，通常只到水下 25 厘米以内，抓浅水里的小鱼。",
          cite: ["wiki-en"],
        },
        {
          q: "抓到鱼以后，它怎么吃？",
          a: "飞回枝头，先把鱼在树枝上啪啪摔打几下，等鱼不动了，再顺过来鱼头朝前，一口吞下去。",
          cite: ["wiki-en"],
        },
        {
          q: "鱼骨头吞下去怎么办？",
          a: "消化不了的鱼骨头会在肚子里团成灰色的小团子，它每天吐出来几次。",
          cite: ["wiki-en"],
        },
        {
          q: "它一天要吃多少？",
          a: "每天要吃掉差不多自己体重六成的食物！所以它要守住一段河，不让别的翠鸟来抢鱼。",
          cite: ["wiki-en"],
        },
        {
          q: "普通翠鸟把家安在哪儿？",
          a: "不在树上，而在河边陡直的土壁里：地道短的十几厘米，长的超过 1 米。所以留住天然的土岸对它很重要！",
          cite: ["wiki-en", "adw-kf"],
        },
      ],
    },
  ],
  care: "北京市重点保护水鸟，很怕惊扰。看到它停在芦苇秆上请停步屏息远看，更不要靠近河岸陡土壁上的圆洞。水边牵好大人，不下水。",
  nextTime: "下次在水边遇到普通翠鸟，用望远镜瞄一眼它的下嘴：是全黑的翠鸟爸爸，还是涂了橙红「口红」的翠鸟妈妈？",
  sources: [
    { id: "wiki-en", title: "Common kingfisher", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Common_kingfisher" },
    { id: "adw-kf", title: "Alcedo atthis (common kingfisher)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Alcedo_atthis/" },
    { id: "wiki-wtk", title: "White-throated kingfisher", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/White-throated_kingfisher" },
    { id: "wiki-bck", title: "Black-capped kingfisher", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Black-capped_kingfisher" },
    { id: "bto", title: "Kingfisher | BirdFacts", by: "British Trust for Ornithology", url: "https://www.bto.org/learn/about-birds/birdfacts/kingfisher" },
    { id: "stavenga-2011", title: "Kingfisher feathers – colouration by pigments, spongy nanostructures and thin films", by: "Stavenga et al., Journal of Experimental Biology, 2011", url: "https://doi.org/10.1242/jeb.062620" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-shahe-res", title: "北京水库湿地推荐观鸟地——沙河水库", by: "京报网", url: "https://news.bjd.com.cn/2024/05/06/10764985.shtml" },
    { id: "bj-shahe-park", title: "全龄乐活 观鸟寻趣！昌平这两个公园成为打卡新地标", by: "首都之窗（北京市人民政府门户网站）", url: "https://www.beijing.gov.cn/fuwu/bmfw/bmzt/bjgnzn/gqzn/202606/t20260622_4710246.html" },
    { id: "bj-aobei", title: "千园之城提靓生态画卷", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202502/t20250227_4021049.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
