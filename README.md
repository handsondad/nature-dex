# 🌿 我们的自然图鉴

> 去外面走走，认真看一眼身边的生命，把它带回家做成一页图鉴。

一家人在身边真实遇见的植物和动物，每一种做成一篇图文并茂、可以互动的图鉴，按第一次遇见的日子夹在晾衣绳上。

- **真实**：照片是我们拍的，话是孩子说的；没拍到的地方留着「待拍照片位」，提醒下次去拍。
- **有出处**：每个知识点都能点到资料来源（中国植物志、GBIF、iNaturalist、论文……）。
- **会动，但不吵**：在照片上点出识别特征、放大镜看细节、拖动对比同一棵植物的不同日子、一步一步看它长大、看它一年里什么时候出现、猜猜哪张是它。

和 [小念家的漫画书](https://github.com/handsondad/storyverse) 是同一个系列。

## 本地运行

需要 Node.js 22+。

```bash
npm install
npm run dev
```

## 做一篇图鉴

图鉴由代码助手（Cursor / Copilot / Claude Code……）照着 [skills/naturedex-field-guide/SKILL.md](skills/naturedex-field-guide/SKILL.md) 来做，人负责出门、拍照、说话和点头。大致是：

```bash
npm run entry:new -- pu-gong-ying 蒲公英 Taraxacum mongolicum   # 新建
npm run taxon -- pu-gong-ying "Taraxacum mongolicum"           # 查分类、每月观察数
npm run photos -- pu-gong-ying raw/pu-gong-ying/               # 放自己的照片（压缩 webp、去定位）
npm run refphoto -- pu-gong-ying "Sonchus oleraceus" --as look-kjc --list   # 找对照照片（同样压缩）
# 照片规格见 tools/lib.mjs 的 PHOTO；改参数后 npm run photos:recompress
# 写 src/entries/pu-gong-ying/entry.ts
npm run check -- pu-gong-ying                                  # 检查，列出待拍清单
npm run snapshot -- pu-gong-ying --mobile                      # 截图自查
```

仓库里的「蒲公英」是示例篇：知识部分都查证过，我们自己的照片和遇见记录还空着，`npm run check` 会打印一份待拍清单。

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run check` | 检查所有图鉴 |
| `npm test` | 测试 |
| `npm run build` | 生产构建 |

更多见 [AGENTS.md](AGENTS.md)。

## 图鉴里能放什么

| 块 | 做什么 |
|---|---|
| 我们的记录 | 哪天、在哪儿、看到了什么、孩子说了什么，配我们的照片 |
| 认识它 | 在照片上点出识别特征 |
| 凑近看 | 放大镜看细节 |
| 变化 | 拖动分界线对比同一个东西的两个时刻 |
| 一步一步 | 一组照片串起生长或变化的过程，可自动播放 |
| 它的一年 | 12 个月环形图：在中国每月被拍到多少次、什么时候开花，钉上我们遇见它的月份 |
| 容易认错 | 几个长得像的放一起，先猜哪张是它 |
| 你知道吗 | 翻面小卡，一个有出处的「哇」 |

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会跑测试、检查、构建并发布到 GitHub Pages。仓库 Settings → Pages 的 Source 选 **GitHub Actions**。

## 旧版本

之前的 Python 后端（发现台、学习问答 API、SQLite 观察记录）保存在分支 `archive/python-backend`。

## 许可

代码 Apache-2.0。字体霞鹜文楷（OFL）。转载照片按各自的 CC 协议署名，见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。家庭和非商业使用。
