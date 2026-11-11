# AGENTS.md：给接手这个仓库的代码助手

## 这是什么

「小念的自然图鉴」：把一家人在身边真实遇见的植物和动物，做成一篇篇图文并茂、可以互动的图鉴，按第一次遇见的日子夹在首页的晾衣绳上。发布到 GitHub Pages。

没有后端，没有 AI 生图。图鉴是 `src/entries/` 里的 TypeScript 数据，页面由 `src/blocks/` 的组件按数据画出来；照片是我们自己拍的，知识有出处。和「小念家的漫画书」（storyverse）是同一个系列，结构也一样。

技术栈：React 18 + TypeScript（strict）+ Vite 5。Hash 路由，相对路径资源。工具脚本是 Node（.mjs），用 sharp 处理照片、exifr 读拍摄日期、puppeteer-core 截图，联网查 GBIF / iNaturalist / 维基百科。

**做图鉴之前，先读 `skills/naturedex-field-guide/SKILL.md`。**

## 怎么做一篇图鉴

人负责出门、拍照、说话和点头；代码助手照着 skill 写 `entry.ts`、跑工具。大致流程：

```bash
npm run entry:new -- pu-gong-ying 蒲公英 Taraxacum mongolicum
npm run taxon -- pu-gong-ying "Taraxacum mongolicum"
npm run photos -- pu-gong-ying raw/pu-gong-ying/                 # 自己的照片（压缩 webp、去定位）
npm run refphoto -- pu-gong-ying "Sonchus oleraceus" --as look-kjc --list
# 写 src/entries/pu-gong-ying/entry.ts
npm run check -- pu-gong-ying
npm run snapshot -- pu-gong-ying --mobile
```

照片规格见 `tools/lib.mjs` 的 `PHOTO`；改参数后 `npm run photos:recompress`。

## 图鉴里能放什么

| 块 | 做什么 |
|---|---|
| 我们的记录 | 哪天、在哪儿、看到了什么、孩子说了什么，配我们的照片 |
| 认识它 | 在照片上点出识别特征 |
| 凑近看 | 放大镜看细节 |
| 变化 | 拖动分界线对比同一个东西的两个时刻 |
| 一步一步 | 一组照片串起生长或变化的过程 |
| 它的一年 | 12 个月：在中国每月被拍到多少次，钉上我们遇见它的月份 |
| 容易认错 | 几个长得像的放一起，先猜哪张是它 |
| 你知道吗 | 翻面小卡，一个有出处的「哇」 |

块的详细用法见 `skills/naturedex-field-guide/blocks.md`。

## 命令

需要 Node.js 22+。测试直接用 Node 跑 `.ts` 文件。

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run entry:new -- <id> [中文名] [学名]` | 新建一篇图鉴 |
| `npm run taxon -- <id> "<学名或中文名>"` | 查分类、中文名、每月观察数，写 `research.json` |
| `npm run photos -- <id> <照片或文件夹> [--as 名字]` | 处理自己的照片：去 EXIF/定位、**压缩成小 webp**、缩略图，写 `photos.json` |
| `npm run photos:recompress [-- <id>]` | 按当前规格把 `public/photos/` 再压一遍 |
| `npm run refphoto -- <id> "<学名>" --as <名字> [--list \| --pick N]` | 找可转载的 iNaturalist 照片做对照 |
| `npm run check [-- <id>]` | 检查内容，列出待拍清单 |
| `npm run snapshot -- <id\|line> [--mobile]` | 截长图并切段，放 `snapshots/` |
| `npm run typecheck` / `npm test` / `npm run build` | 类型检查 / 测试 / 生产构建 |

交付前四个都要过：`npm run typecheck`、`npm test`、`npm run check`、`npm run build`。新图鉴还要 `npm run snapshot` 自己看一遍图。

## 地图

| 路由 | 页面 | 文件 |
|---|---|---|
| `#/` | 首页晾衣绳（位置在 `src/pages/line.ts`） | `src/pages/LinePage.tsx` |
| `#/entry/<id>` | 一篇图鉴 | `src/pages/EntryPage.tsx` |

- `src/entry/types.ts`：图鉴数据的类型（`Entry`、`Block`、`Shot`……），写图鉴前先读
- `src/entries/<id>/entry.ts`：一篇图鉴（agent 写这个）
- `src/entries/<id>/notes.md`：现场笔记和孩子原话，不进页面
- `src/entries/<id>/photos.json`：照片清单（工具生成，别手改）
- `src/entries/<id>/research.json`：taxon 查到的资料（工具生成，别手改）
- `src/entry/index.ts`：自动收集所有图鉴（不用手动登记）
- `src/blocks/`：每种块一个组件；`BlockView.tsx` 分发
- `src/render/`：照片、引用角标、滚动出现
- `public/photos/<id>/`：**只放工具压过的小 webp**（进仓库）；原图放 `raw/`（不进仓库）
- `tools/lib.mjs` 里的 `PHOTO`：长边、质量、缩略图尺寸的唯一来源
- `tools/rules.mjs`：内容规矩（纯函数，测试共用）
- `skills/naturedex-field-guide/`：做图鉴的流程（SKILL.md）、块的用法（blocks.md）、写法和资料来源（writing.md）

旧的 Python 后端（发现台、学习问答 API）在分支 `archive/python-backend`。

## 硬性规矩

- **真实**：封面和记录块只用自己拍的照片（check 会查）；不编遇见经历；不用 AI 生成图片。缺照片就 `draft: true` 留待拍位。
- **有出处**：知识点都要 `cite` 到 `sources` 里真实存在、查证过的资料。不凭记忆写数字，不编网址。
- **孩子的内容**：原话一字不改；只用称呼（小念、爸爸、妈妈），不写真名、学校、小区名；地点写模糊区域。
- **安全**：每篇都有 `care`；蘑菇必须写不采不吃；不鼓励抓、摘、喂、靠近鸟窝和水边。
- **转载照片**：只收 CC0 / CC BY / CC BY-SA，署名在 `photos.json` 里，页面自动显示。新的素材来源写进 `THIRD_PARTY_NOTICES.md`。草稿正文（除「我们的记录」）可用 `refphoto` 占位；正式篇封面和记录块仍只用自己拍的。
- **照片必须压缩**：GitHub / Pages 空间有限。进仓库的图只能经 `npm run photos` 或 `npm run refphoto` 写出（默认长边 ≤1200、webp 质量约 70，规格在 `tools/lib.mjs` 的 `PHOTO`）。**禁止**把手机原图、未压缩 JPG/PNG、大图直接拷进 `public/photos/`。改过压缩参数或发现体积偏大时跑 `npm run photos:recompress`。
- **代码风格**：照周围代码写。中文注释只写代码本身表达不了的约束；改动要小而完整。

## 已知的坑

- **`.ts` 扩展名**：Node 直接跑 `.ts`，被测试导入的文件相互导入时要写 `.ts` 扩展名。
- **HEIC**：sharp 预编译版读不了 iPhone 的 HEIC，先导出成 JPG。
- **截图要用本机 Edge/Chrome**：找不到时设 `BROWSER_PATH`。
- **字体**：霞鹜文楷屏幕阅读版（`lxgw-wenkai-screen-webfont`），按字符分片加载，不用手动截字。
