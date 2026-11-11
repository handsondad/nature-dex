import assert from "node:assert/strict";
import { test } from "node:test";
import { checkAll } from "../tools/check.mjs";

test("仓库里每一篇图鉴都通过内容检查", async () => {
  const results = await checkAll();
  assert.ok(results.length > 0, "至少要有一篇图鉴");
  for (const r of results) assert.deepEqual(r.errors, [], `${r.id} 有错误`);
});
