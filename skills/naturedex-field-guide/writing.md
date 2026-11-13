# 图鉴的文字

读者是 4～10 岁的孩子和陪他们的大人。

## 语气

- 短句，一句只讲一件事。能用「看得见、摸得着、数得清」的词就不用术语。
- 必须用术语时先说孩子话，再括号带一下：「每把小伞下面挂着一颗种子（瘦果）」。
- 比喻可以，但不能让孩子误会因果：
  - ✔ 「种子跟着小伞去旅行」
  - ✘ 「花朵故意把虫子骗过来」「它想让人类帮它传播」
- 用「我们」：我们遇见、我们拍到、我们还不知道。
- 不说「最」「唯一」「所有」，除非资料原话就这么说。
- 不确定就说不确定：「很像……，还要看……才能确认」。

## 事实从哪来

按可靠程度从高到低。正文里的每个知识点都用 `cite` 指到其中一条（`npm run taxon` 运行后会直接打印该物种对应的检索 URL）：

| 门类 / 用途 | 权威资料 | 网址与无验证抓取办法 |
|---|---|---|
| 学名与 6 级分类链 | GBIF Backbone + iNaturalist + 中国生物物种名录 | `npm run taxon` 自动查 GBIF（`https://www.gbif.org/species/<key>`）与 iNat；国内定名可查 `http://www.sp2000.org.cn/` |
| 植物形态、尺寸、花果期 | Flora of China（英文版中国植物志） | 先抓 `http://www.efloras.org/browse.aspx?flora_id=2&name_str=<Genus+species>` 拿 `taxon_id`，再抓 `http://www.efloras.org/florataxon.aspx?flora_id=2&taxon_id=<id>` |
| 植物中文描述 | 中国植物志 / iPlant | `https://www.iplant.cn/info/<学名>`（靠 JS 渲染，纯 `fetch` 取不到正文就改引 Flora of China） |
| 鸟类习性与识别 | Birds of the World | `https://birdsoftheworld.org/bow/species/<代码>/cur/introduction` |
| 兽类、鸟类、昆虫与无脊椎 | Animal Diversity Web / AntWiki 等专科库 | `https://animaldiversity.org/accounts/<Genus_species>/`（先确认页面有正文而非仅分类空壳）；蚂蚁可查 `https://www.antwiki.org/wiki/<Genus_species>` |
| 爬行类（蜥蜴、蛇、龟） | The Reptile Database | `https://reptile-database.reptarium.cz/species?genus=<Genus>&species=<species>` |
| 两栖类（蛙、蟾蜍） | 中国两栖类信息系统（昆明动物所） | `https://www.amphibiachina.org/`（搜索物种页，如 `/species/416`） |
| 真菌（蘑菇） | MycoBank / MushroomExpert / 真菌学论文 | `https://www.mycobank.org/`、`https://www.mushroomexpert.com/` 及 Crossref 检索的真菌学 DOI 论文 |
| 北京本地分布与保护级别 | 北京市园林绿化局 / 市公园管理中心 / 国家自然博物馆 | 鸟类 `t20250422_4071634.shtml`、兽类 `t20250422_4071627.shtml`、两爬 `t20250422_4071636.shtml`（均在 `https://yllhj.beijing.gov.cn/ztxx/ysdw/ml/202504/` 下），以及市树市花和公园科普原网页 |
| 「哇」的机制与实验数据 | 同行评审学术论文（Crossref 核对） | 用 `https://api.crossref.org/works?rows=5&query=<关键词+学名>` 查证真实标题、年份与 DOI，引用写 `https://doi.org/<DOI>` |
| 线索、词源、文献顺藤摸瓜 | 维基百科（中 / 英） | 英文用 `https://en.wikipedia.org/w/index.php?title=<Title>&action=raw` 取源码（遇 `#REDIRECT [[…]]` 换目标标题再取），优先顺着源码里的 `<ref>` 核实原始文献；中文摘要可查 `https://zh.wikipedia.org/api/rest_v1/page/summary/<词条>` |

查证的办法：用 Node `fetch` / `WebFetch` / `Invoke-WebRequest` 先取页面原文，找到对应句子和数字再写进 `entry.ts`。查不到就不写。注意 eBird、AmphibiaWeb 有人机验证，脚本直接抓不到。

**不要**：凭记忆写尺寸或数量；把维基摘要直接抄进图鉴；编造或猜测 `taxon_id` / `DOI` / 网址；留未在正文引用的 `sources`（`check` 会提醒）。

## 守护提醒（care）怎么写

说清楚做什么，不吓人。

| 情况 | 要点 |
|---|---|
| 所有植物 | 只看、拍照，不摘；路边可能打过药，不放进嘴里 |
| 蘑菇 | 不碰、不采、不吃；好看的、像能吃的都一样（check 会查） |
| 有刺、有毒汁的植物 | 说出具体部位：「茎上的白色汁液会让皮肤发痒，不要折断」 |
| 昆虫 | 只看不抓；会蜇、会咬的说出来，慢慢走开 |
| 鸟 | 远远看，不追；看到鸟窝不靠近；捡到雏鸟先告诉大人 |
| 蜘蛛 | 只看不碰，不弄破网 |
| 蛙、蟾蜍、蜥蜴 | 不抓不摸；碰到了马上洗手；有毒腺的说出部位 |
| 蜗牛、蛞蝓 | 只看不摸；野生螺类可能带寄生虫，碰到了务必用肥皂和流动水洗手 |
| 蚯蚓、鼠妇等土边小动物 | 不捏不踩；若和大人用树叶把困在烫路面的蚯蚓送回湿土，回家要洗手 |
| 松鼠、刺猬等野生小兽 | 远远看，不摸、不喂、不带回家 |
| 水边 | 和大人一起，不下水 |
| 流浪动物 | 不摸、不喂，远远看 |

## 孩子的话

- `said.text` 一字不改，包括说错的地方。科学上不对也可以保留，在 `note` 或 facts 里温和地补充真相。
- 只用称呼（小念、爸爸、妈妈），不写真名、学校、小区名。

## 孩子的问题

- 查到答案的：写成 facts 卡，`q` 尽量用孩子的原话。
- 查不到答案的：别硬写成 facts（facts 必须有出处）。写进 `nextTime`，变成下次出门一起找答案的任务；或者记在 record 的 `note` 里：「小念问：为什么有的蒲公英是白色的？我们还不知道。」
