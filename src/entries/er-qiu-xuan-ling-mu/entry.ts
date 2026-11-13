import type { Entry } from "../../entry/types.ts";

// 草稿：知识部分都有出处；我们自己的照片和遇见记录还空着，等真的遇见它再补。
const entry: Entry = {
  id: "er-qiu-xuan-ling-mu",
  name: "二球悬铃木",
  scientific: "Platanus × hispanica",
  kind: "plant",
  // 行道树里偶有一球悬铃木或三球悬铃木：多看几根果枝确认大多2球一串、中央裂片宽长相近再改 sure
  certainty: "likely",
  taxonomy: ["植物界", "维管植物门", "木兰纲", "山龙眼目", "悬铃木科", "悬铃木属"],
  when: { date: "2026-11-13", label: "待遇见" },
  draft: true,
  cover: {
    photo: "cover",
    caption: "树干穿着「迷彩服」的高大二球悬铃木",
    shoot: "在行道旁或公园仰拍一整棵二球悬铃木：斑驳剥落的树干和宽大树冠都拍进去",
  },
  hello: "树干穿着灰白浅绿的「迷彩服」，枝头两个一组挂着毛绒球。",
  blocks: [
    { type: "record", encounters: [] },
    {
      type: "hotspots",
      title: "怎么认出它",
      shot: {
        photo: "leaf-ball",
        caption: "掌状大叶与成对悬挂的球形果序",
        shoot: "夏秋拍一根低垂的果枝：手掌一样裂开的大叶子和成对挂着的毛球果同框",
      },
      points: [
        {
          x: 0.48,
          y: 0.34,
          label: "手掌形大叶片",
          detail: "叶片很大，宽 10～24 厘米，通常裂成 5 个（有时 3 或 7 个）带粗齿的尖角，中间那瓣宽和长差不多。",
          cite: ["foc-eqxlm"],
        },
        {
          x: 0.38,
          y: 0.78,
          label: "常两个一串挂果",
          detail: "球形果序直径约 2.5 厘米，常常 2 个一组（偶尔 1 或 3 个）垂在细果梗上，像挂着小铃铛。",
          cite: ["foc-eqxlm", "wiki-en"],
        },
        {
          x: 0.62,
          y: 0.62,
          label: "藏在叶柄底下的芽",
          detail: "悬铃木的冬芽不露在外面，而是像戴小帽子一样被叶柄膨大的基部包在里面，落叶后才露出来。",
          cite: ["foc-platanaceae"],
        },
      ],
    },
    {
      type: "magnifier",
      title: "凑近看「迷彩服」树皮",
      shot: {
        photo: "bark-macro",
        caption: "大片剥落露出浅色内皮的树干",
        shoot: "走到树干近处拍一块正在脱皮的树皮，把深褐老皮和灰白、浅绿的新皮对比拍清楚",
      },
      text: "树干越长越粗，没有弹性的老树皮就会一块块大片剥落，露出底下光滑的灰白色、浅黄绿色内皮，拼成一身显眼的「迷彩服」。",
      zoom: 2.5,
      start: [0.48, 0.5],
      cite: ["foc-platanaceae", "wiki-en"],
    },
    {
      type: "lookalike",
      title: "「法国梧桐」和真梧桐是一回事吗？",
      quiz: true,
      items: [
        {
          name: "梧桐（中国梧桐）",
          scientific: "Firmiana simplex",
          shot: { photo: "look-wt", caption: "结小船形果荚的中国梧桐" },
          tells: [
            "锦葵目梧桐属原产中国的树，树皮平滑翠绿，又叫「青桐」，不穿斑驳迷彩服",
            "果子根本不是毛绒球，而是像小木船一样裂开的膜质果瓣，边上粘着圆种子",
            "古诗里「引来金凤凰」的梧桐说的就是它",
          ],
        },
        {
          name: "二球悬铃木",
          scientific: "Platanus × hispanica",
          self: true,
          shot: { photo: "look-eqxlm", caption: "叶片有粗齿的二球悬铃木" },
          tells: [
            "悬铃木科行道树，老树皮一块块剥落成灰白浅绿的迷彩花纹",
            "枝头挂着圆圆的球形果序，常 2 个一串挂一冬天",
            "俗称「法国梧桐」，其实和梧桐没有亲戚关系",
          ],
        },
      ],
      cite: ["foc-eqxlm", "foc-wt", "bj-wutong"],
    },
    {
      type: "year",
      title: "什么时候去看它",
      text: "二球悬铃木 3～5 月开花，6～10 月果球长成，挂在光秃秃的冬枝上特别好认；春天新叶展开时旧果球会慢慢散开。我们是哪个月遇见它的？",
      cite: ["foc-eqxlm", "wiki-en"],
    },
    {
      type: "facts",
      title: "你知道吗",
      cards: [
        {
          q: "它既不是梧桐，也不是法国来的？",
          a: "对！它是 17 世纪欧洲用原产欧亚的三球悬铃木和原产北美的一球悬铃木杂交培育出来的，后来因为早年引种在上海法租界当行道树，才被误叫成「法国梧桐」。",
          cite: ["bj-wutong", "wiki-en", "wiki-zh"],
        },
        {
          q: "为什么名字里叫「二球」？",
          a: "它的两个亲本里，美洲的一球悬铃木常 1 个果球单挂，欧亚的三球悬铃木常 3～6 个串成一串；杂交出来的它正好居中，最常 2 个果球挂成一对！",
          cite: ["foc-platanus", "wiki-en", "bj-wutong"],
        },
        {
          q: "春天路过树下为什么容易打喷嚏？",
          a: "一个果球里挤着许多长 2～3 毫米的小坚果，还带着细硬毛；加上春天嫩叶背面也有细绒毛脱落，随风飘进鼻子或眼睛里会让人发痒。",
          cite: ["foc-platanaceae", "wiki-en"],
        },
        {
          q: "为什么全世界大城市都爱种它？",
          a: "它最高能长到 30 米以上，树冠大、遮阴好，还特别耐城市尾气灰尘和被踩实的路边土壤，是出了名的城市行道树能手。",
          cite: ["foc-eqxlm", "wiki-en"],
        },
      ],
    },
  ],
  care: "春末果球散毛、嫩叶脱绒毛的时候，经过树下别抬头张嘴，毛絮飘到脸上千万别用手揉眼睛；地上掉的毛球果别拆散往人身上扬。",
  nextTime: "冬天树叶落光后抬头数一数：一棵二球悬铃木上，是挂 2 个球的多，还是 1 个球、3 个球的多？",
  sources: [
    {
      id: "foc-eqxlm",
      title: "Platanus acerifolia 二球悬铃木",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=200010587",
    },
    {
      id: "foc-platanus",
      title: "Platanus 悬铃木属",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=125747",
    },
    {
      id: "foc-platanaceae",
      title: "Platanaceae 悬铃木科",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=10703",
    },
    {
      id: "foc-wt",
      title: "Firmiana simplex 梧桐",
      by: "Flora of China",
      url: "http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=242322646",
    },
    {
      id: "bj-wutong",
      title: "【秋季常见观叶树（二）】中国梧桐与法国梧桐",
      by: "北京市园林绿化局",
      url: "https://yllhj.beijing.gov.cn/ztxx/bjhx/hhzs/202011/t20201116_2136343.shtml",
    },
    {
      id: "wiki-en",
      title: "London plane (Platanus × hispanica)",
      by: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/London_plane",
    },
    {
      id: "wiki-zh",
      title: "英桐（二球悬铃木）",
      by: "维基百科",
      url: "https://zh.wikipedia.org/wiki/%E8%8B%B1%E6%A1%90",
    },
  ],
  by: ["kid", "dad"],
};

export default entry;
