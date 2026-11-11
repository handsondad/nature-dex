// 检查图鉴内容。用法：npm run check [-- <图鉴id>]
// 有 error 时退出码为 1；草稿里还没拍的照片列成「待拍清单」，可以直接拿去拍。
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { entryDir, readJson, root, today } from "./lib.mjs";
import { checkEntry } from "./rules.mjs";

export async function loadEntry(id) {
  const dir = entryDir(id);
  const entry = (await import(pathToFileURL(join(dir, "entry.ts")).href)).default;
  return {
    entry,
    manifest: readJson(join(dir, "photos.json"), {}),
    research: readJson(join(dir, "research.json"), undefined),
  };
}

export async function checkAll(only) {
  const base = join(root, "src/entries");
  const ids = only ? [only] : existsSync(base) ? readdirSync(base, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name) : [];
  const results = [];
  for (const id of ids) {
    if (!existsSync(join(entryDir(id), "entry.ts"))) {
      results.push({ id, errors: [`src/entries/${id}/ 里没有 entry.ts`], warnings: [], todo: [] });
      continue;
    }
    const { entry, manifest, research } = await loadEntry(id);
    const r = checkEntry({ entry, dir: id, manifest, research, today: today(), fileExists: (p) => existsSync(join(root, "public", p)) });
    results.push({ id, draft: Boolean(entry.draft), ...r });
  }
  return results;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const results = await checkAll(process.argv[2]);
  let bad = 0;
  for (const r of results) {
    const head = r.errors.length ? "✗" : "✓";
    console.log(`${head} ${r.id}${r.draft ? "（草稿）" : ""}`);
    for (const e of r.errors) console.log(`    错误：${e}`);
    for (const w of r.warnings) console.log(`    提醒：${w}`);
    if (r.todo.length) {
      console.log(`    待拍清单（${r.todo.length}）：`);
      for (const t of r.todo) console.log(`      □ ${t}`);
    }
    bad += r.errors.length;
  }
  if (!results.length) console.log("还没有图鉴。npm run entry:new -- <id> 开始第一篇。");
  process.exitCode = bad ? 1 : 0;
}
