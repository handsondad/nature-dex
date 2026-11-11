// 新建一篇图鉴的骨架。
//   npm run entry:new -- <id> [中文名] [学名]
//   npm run entry:new -- pu-gong-ying 蒲公英 "Taraxacum mongolicum"
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { entryDir, fail, ID_RE, today } from "./lib.mjs";

// 学名不加引号时会被拆成几段
const [id, name = "待定名字", ...sciParts] = process.argv.slice(2);
const scientific = sciParts.join(" ") || "待查学名";
if (!id || !ID_RE.test(id)) fail("用法：npm run entry:new -- <id> [中文名] [学名]（id 用小写字母、数字、短横线，比如拼音 pu-gong-ying）");
const dir = entryDir(id);
if (existsSync(dir)) fail(`已存在：src/entries/${id}`);
mkdirSync(dir, { recursive: true });

writeFileSync(join(dir, "notes.md"), `# ${name} · 现场笔记

> 这里记真实发生的事和孩子的原话，一字不改。写图鉴时从这里取材，不进页面。

## 遇见

- 日期：
- 地点（模糊）：
- 天气：
- 看到了什么、它在干什么：

## 孩子说的话

- 

## 孩子问的问题（可以变成「你知道吗」）

- 

## 照片

原图放 raw/${id}/，然后 \`npm run photos -- ${id} raw/${id}/\`
`);

writeFileSync(join(dir, "photos.json"), "{}\n");

writeFileSync(join(dir, "entry.ts"), `import type { Entry } from "../../entry/types.ts";

// 写法见 skills/naturedex-field-guide/SKILL.md，各种块见 blocks.md
const entry: Entry = {
  id: "${id}",
  name: "${name}",
  scientific: "${scientific}",
  kind: "plant",
  certainty: "likely",
  when: { date: "${today()}" },
  draft: true,
  cover: { photo: "cover", caption: "${name}", shoot: "它最好认的样子，占满画面，背景干净" },
  hello: "待写：一句让人想认识它的真事。",
  blocks: [
    { type: "record", encounters: [] },
  ],
  care: "待写：守护提醒。",
  nextTime: "待写：下次可以看什么。",
  sources: [],
  by: ["kid", "dad"],
};

export default entry;
`);

console.log(`已创建 src/entries/${id}/（entry.ts、notes.md、photos.json）`);
console.log(`下一步：npm run taxon -- ${id} "${scientific === "待查学名" ? name : scientific}" → 放照片 npm run photos → 写 entry.ts → npm run check -- ${id}`);
