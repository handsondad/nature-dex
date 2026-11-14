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
        photo: "perch-side",
        caption: "站在水边枝头低头盯水面的普通翠鸟",
        shoot: "远远拍一只停在水边枝头或石头上的普通翠鸟侧面：长直嘴、青绿带蓝点的头翅、橙栗色肚皮和白颈斑都在画面里",
      },
      points: [
        {
          x: 0.72,
          y: 0.56,
          label: "匕首一样的长直嘴",
          detail: "身长只有 15～18 厘米（只比麻雀大一点），嘴巴却长达约 4 厘米，又直又尖，专用来扎进水里夹小鱼。",
          cite: ["wiki-en", "wiki-zh", "adw-kf"],
        },
        {
          x: 0.48,
          y: 0.25,
          label: "青绿带蓝点的头和翅膀",
          detail: "头顶和翅膀是深青绿色，洒满亮蓝色小斑点；背正中央还有一道耀眼的翠蓝色光带。",
          cite: ["wiki-en", "wiki-zh"],
        },
        {
          x: 0.42,
          y: 0.36,
          label: "橙耳斑配白颈斑",
          detail: "眼睛后面有一块橙栗色耳羽，再往后紧挨着一抹醒目的白斑，喉咙也是白白的。",
          cite: ["wiki-en", "wiki-zh", "adw-kf"],
        },
        {
          x: 0.4,
          y: 0.55,
          label: "暖暖的橙栗色胸腹",
          detail: "胸口和肚皮全是暖洋洋的橙栗色，配着一双鲜红的小短脚，站在绿叶芦苇间格外漂亮。",
          cite: ["wiki-en", "adw-kf"],
        },
      ],
    },
    {
      type: "compare",
      title: "看下嘴：谁涂了橙红「口红」？",
      before: { photo: "male-bill", label: "雄鸟", caption: "上下嘴全是乌黑色的" },
      after: { photo: "female-bill", label: "雌鸟", caption: "下嘴基部是鲜亮的橙红色" },
      text: "普通翠鸟爸爸和妈妈的羽毛颜色几乎一模一样，秘密全藏在长嘴巴上：成年雄鸟上下嘴一片乌黑；成年雌鸟上嘴黑，下嘴大片涂上了鲜亮的橙红色，就像抹了口红一样好认！",
      cite: ["wiki-en", "wiki-zh", "adw-kf"],
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
          name: "普通翠鸟",
          scientific: "Alcedo atthis",
          self: true,
          shot: { photo: "look-cui-niao", caption: "青绿头翅配橙栗色肚皮的普通翠鸟" },
          tells: [
            "小巧玲珑（身长 15～18 厘米），雄鸟黑嘴、雌鸟只有下嘴带橙红",
            "头顶和翅膀青绿色带蓝点，胸口和肚皮全是橙栗色",
          ],
        },
      ],
      cite: ["wiki-en", "wiki-wtk", "bj-bird-list"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它猛扎进水里抓鱼时，眼睛不怕进水吗？",
          a: "不怕！入水瞬间，它眼睛上会拉过一层透明的「第三眼睑」（瞬膜），像戴上小护目镜；它的眼睛还能适应光线进水后的折射，看准小鱼的位置。",
          cite: ["wiki-en", "adw-kf"],
        },
        {
          q: "为什么它抓到鱼要先甩几下、再把鱼头朝前吞？",
          a: "它叼着小鱼飞回枝头，会先在树枝上啪啪摔打几下把鱼拍晕，再灵巧地转成鱼头朝嘴里顺着吞下去——这样鱼鳞和背鳍顺着滑，不会卡嗓子！",
          cite: ["wiki-en", "adw-kf"],
        },
        {
          q: "它闪闪发亮的蓝羽毛里，真的有蓝色颜料吗？",
          a: "没有蓝色色素！那是羽毛精细结构反射阳光变出来的「结构色」（彩虹色）。光线角度一变，它背上的羽毛就会在翠绿和宝石蓝之间变魔术。",
          cite: ["adw-kf", "wiki-zh"],
        },
        {
          q: "普通翠鸟把家安在哪儿？",
          a: "它不住树枝窝，而是夫妻俩轮流用长嘴在河岸陡直的泥土壁上挖一条深 60～90 厘米的地道，在尽头的小房间里生白白亮亮的蛋。因此留住自然土岸对它很重要！",
          cite: ["wiki-en", "adw-kf"],
        },
      ],
    },
  ],
  care: "北京市重点保护水鸟，很怕惊扰。看到它停在芦苇秆上请停步屏息远看，更不要靠近河岸陡土壁上的圆洞。水边牵好大人，不下水。",
  nextTime: "下次在水边遇到普通翠鸟，用望远镜瞄一眼它的下嘴：是全黑的翠鸟爸爸，还是涂了橙红「口红」的翠鸟妈妈？",
  sources: [
    { id: "wiki-en", title: "Common kingfisher", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/Common_kingfisher" },
    { id: "wiki-zh", title: "普通翠鸟", by: "维基百科", url: "https://zh.wikipedia.org/wiki/%E6%99%AE%E9%80%9A%E7%BF%A0%E9%B8%9F" },
    { id: "adw-kf", title: "Alcedo atthis (common kingfisher)", by: "Animal Diversity Web", url: "https://animaldiversity.org/accounts/Alcedo_atthis/" },
    { id: "wiki-wtk", title: "White-throated kingfisher", by: "Wikipedia", url: "https://en.wikipedia.org/wiki/White-throated_kingfisher" },
    { id: "bj-bird-list", title: "北京陆生野生动物名录—鸟类", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/t20250422_4071634.shtml" },
    { id: "bj-shahe-res", title: "北京水库湿地推荐观鸟地——沙河水库", by: "京报网", url: "https://news.bjd.com.cn/2024/05/06/10764985.shtml" },
    { id: "bj-shahe-park", title: "全龄乐活 观鸟寻趣！昌平这两个公园成为打卡新地标", by: "首都之窗（北京市人民政府门户网站）", url: "https://www.beijing.gov.cn/fuwu/bmfw/bmzt/bjgnzn/gqzn/202606/t20260622_4710246.html" },
    { id: "bj-aobei", title: "千园之城提靓生态画卷", by: "北京市园林绿化局", url: "https://yllhj.beijing.gov.cn/ztxx/mtjj/mtbd/202502/t20250227_4021049.shtml" },
  ],
  by: ["kid", "dad"],
};

export default entry;
