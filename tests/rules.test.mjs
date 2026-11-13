import assert from "node:assert/strict";
import { test } from "node:test";
import { checkEntry } from "../tools/rules.mjs";

const TODAY = "2026-11-11";
const ours = { src: "photos/x/a.webp", thumb: "photos/x/a.thumb.webp", w: 4, h: 3, credit: "ours" };
const borrowed = { ...ours, credit: { author: "某人", license: "cc-by", url: "https://example.org", source: "iNaturalist" } };

function base(over = {}) {
  return {
    id: "x", name: "测试", scientific: "Testus testus", kind: "plant", certainty: "sure",
    when: { date: "2026-04-12" },
    cover: { photo: "cover", caption: "封面" },
    hello: "一句话。",
    blocks: [{ type: "record", encounters: [{ date: "2026-04-12", where: "花坛", note: "看到了。" }] }],
    care: "只看不摘。", nextTime: "下次看看？",
    sources: [], by: ["kid"],
    ...over,
  };
}

const run = (entry, manifest = { cover: ours }, research) =>
  checkEntry({ entry, dir: "x", manifest, research, today: TODAY, fileExists: () => true });

test("完整的一篇没有错误", () => {
  assert.deepEqual(run(base()).errors, []);
});

test("封面和记录只能用自己拍的照片；草稿封面可以先用可署名的对照照", () => {
  assert.match(run(base(), { cover: borrowed }).errors.join(), /只能用我们自己拍的照片/);
  assert.deepEqual(run(base({ draft: true }), { cover: borrowed }).errors, []);
});

test("不是草稿就不能缺照片；草稿缺的照片进待拍清单", () => {
  const entry = base({ cover: { photo: "cover", caption: "封面", shoot: "拍一张" } });
  assert.match(run(entry, {}).errors.join(), /draft: true/);
  const draft = run({ ...entry, draft: true }, {});
  assert.deepEqual(draft.errors, []);
  assert.equal(draft.todo.length, 1);
});

test("缺照片又没写 shoot 是错误", () => {
  assert.match(run({ ...base(), draft: true }, {}).errors.join(), /要写 shoot/);
});

test("引用必须指向存在的资料，事实卡必须有出处", () => {
  const entry = base({ blocks: [...base().blocks, { type: "facts", title: "你知道吗", cards: [{ q: "问", a: "答", cite: ["nope"] }, { q: "问2", a: "答2", cite: [] }] }] });
  const errors = run(entry).errors.join("\n");
  assert.match(errors, /不存在的资料：nope/);
  assert.match(errors, /要有出处/);
});

test("转载照片的授权要能用", () => {
  const entry = base({ blocks: [...base().blocks, { type: "magnifier", title: "看", shot: { photo: "m", caption: "细节" }, text: "看。" }] });
  const bad = { ...borrowed, credit: { ...borrowed.credit, license: "cc-by-nc" } };
  assert.match(run(entry, { cover: ours, m: bad }).errors.join(), /不能用/);
  assert.deepEqual(run(entry, { cover: ours, m: borrowed }).errors, []);
});

test("不是草稿就要有真实遇见记录", () => {
  assert.match(run(base({ blocks: [] })).errors.join(), /至少要有一次/);
});

test("日期不能在未来", () => {
  assert.match(run(base({ when: { date: "2027-01-01" } })).errors.join(), /在未来/);
});

test("「它的一年」需要先查资料", () => {
  const entry = base({ blocks: [...base().blocks, { type: "year", title: "一年", text: "。" }] });
  assert.match(run(entry).errors.join(), /npm run taxon/);
  assert.deepEqual(run(entry, { cover: ours }, { months: { all: {} } }).errors, []);
});

test("蘑菇必须提醒不采不吃", () => {
  assert.match(run(base({ kind: "fungus", care: "好好看。" })).errors.join(), /不采、不吃/);
  assert.deepEqual(run(base({ kind: "fungus", care: "只看，不要采也不要吃。" })).errors, []);
});

test("容易认错要有且只有一个主角", () => {
  const item = (name, self) => ({ name, shot: { photo: "cover", caption: name }, tells: ["区别"], ...(self && { self }) });
  const entry = base({ blocks: [...base().blocks, { type: "lookalike", title: "别认错", items: [item("甲"), item("乙")] }] });
  assert.match(run(entry).errors.join(), /self: true/);
});

test("说生物「故意」会被提醒", () => {
  assert.match(run(base({ hello: "花朵故意把虫子骗过来。" })).warnings.join(), /故意/);
});

test("分类链必须是 6 级且界名与 kind 一致；学名与 GBIF 不一致会提醒", () => {
  assert.match(run(base({ taxonomy: ["植物界", "维管植物门", "木兰纲"] })).errors.join(), /6 级中文分类链/);
  assert.match(run(base({ kind: "fungus", care: "只看不碰，不采也不吃。", taxonomy: ["植物界", "担子菌门", "伞菌纲", "伞菌目", "鬼伞科", "鬼伞属"] })).errors.join(), /真菌界/);
  const gbif = { key: 1, scientificName: "Otherus nameus L.", rank: "SPECIES", status: "ACCEPTED", path: [{ rank: "species", name: "Otherus nameus" }] };
  assert.match(run(base(), { cover: ours }, { gbif }).warnings.join(), /GBIF 接受种名/);
});
