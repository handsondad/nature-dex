import assert from "node:assert/strict";
import { test } from "node:test";
import { ago, layoutLine, LINE, sagAt, seasonOf } from "../src/pages/line.ts";

const entry = (id, date) => ({ id, when: { date } });

test("1、2 月算前一年的冬天", () => {
  assert.deepEqual(seasonOf("2026-01-15"), { season: "winter", year: 2025 });
  assert.deepEqual(seasonOf("2025-12-01"), { season: "winter", year: 2025 });
  assert.deepEqual(seasonOf("2026-03-01"), { season: "spring", year: 2026 });
  assert.deepEqual(seasonOf("2026-11-30"), { season: "autumn", year: 2026 });
});

test("按日子排，换季的地方插一面旗", () => {
  const { items } = layoutLine([entry("b", "2026-04-20"), entry("a", "2026-04-02"), entry("c", "2026-07-01")]);
  assert.deepEqual(items.map((it) => (it.kind === "flag" ? `${it.year}${it.season}` : it.entry.id)), ["2026spring", "a", "b", "2026summer", "c"]);
});

test("跨年的冬天只挂一面旗", () => {
  const { items } = layoutLine([entry("a", "2025-12-20"), entry("b", "2026-01-05")]);
  assert.equal(items.filter((it) => it.kind === "flag").length, 1);
});

test("框比内容宽时绳子拉满，挂件不重叠", () => {
  const { items, width } = layoutLine([entry("a", "2026-04-02"), entry("b", "2026-04-20")], 1200);
  assert.equal(Math.round(width), 1200);
  const cards = items.filter((it) => it.kind === "card");
  assert.ok(cards[1].x - cards[0].x >= LINE.cardW);
});

test("绳子两头最高、中间最低", () => {
  assert.equal(sagAt(LINE.pad / 2, 1000), 0);
  assert.equal(Math.round(sagAt(500, 1000)), LINE.sag);
});

test("离今天多久", () => {
  const today = new Date(2026, 10, 11);
  assert.equal(ago("2026-11-11", today), "就是今天");
  assert.equal(ago("2026-11-01", today), "10 天前");
  assert.equal(ago("2026-04-12", today), "6 个月前");
  assert.equal(ago("2025-04-12", today), "1 年零 6 个月前");
  assert.equal(ago("2026-12-01", today), "还没到那天");
});
