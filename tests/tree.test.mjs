import assert from "node:assert/strict";
import { test } from "node:test";
import { buildTree, cardTaxa, findGroup, layoutTree, pathTo, toggleOpen, visibleSlots } from "../src/pages/tree.ts";

const entry = (id, taxonomy) => ({ id, name: id, taxonomy });
const bird = (id, order, family = "某科") => entry(id, ["动物界", "脊索动物门", "鸟纲", order, family, "某属"]);
const plant = (id, cls, order) => entry(id, ["植物界", "维管植物门", cls, order, "某科", "某属"]);
const toad = entry("蟾蜍", ["动物界", "脊索动物门", "两栖纲", "无尾目", "蟾蜍科", "蟾蜍属"]);

const ENTRIES = [
  bird("喜鹊", "雀形目"), bird("麻雀", "雀形目"), bird("鸳鸯", "雁形目"), toad,
  plant("银杏", "银杏纲", "银杏目"), plant("国槐", "木兰纲", "豆目"), plant("山桃", "木兰纲", "蔷薇目"),
];
const TREE = buildTree(ENTRIES);
const label = (s) => (s.kind === "card" ? s.entry.id : `${s.kind}:${s.group.name}`);

test("一开始只看到动物界和植物界，动物在前", () => {
  assert.deepEqual(visibleSlots(TREE, []).map(label), ["bundle:动物界", "bundle:植物界"]);
});

test("只有一个成员的类不成组，直接挂那一篇；大的类在前", () => {
  assert.deepEqual(visibleSlots(TREE, ["动物界"]).map(label), ["flag:动物界", "bundle:鸟纲", "蟾蜍", "bundle:植物界"]);
  assert.deepEqual(visibleSlots(TREE, ["动物界", "动物界/鸟纲"]).map(label),
    ["flag:动物界", "flag:鸟纲", "bundle:雀形目", "鸳鸯", "蟾蜍", "bundle:植物界"]);
});

test("一个类里只有一个小类时跳过这一层", () => {
  const tree = buildTree([bird("喜鹊", "雀形目"), bird("麻雀", "雀形目")]);
  assert.equal(tree.length, 1);
  assert.equal(tree[0].key, "动物界/鸟纲/雀形目");
  assert.equal(tree[0].rank, "order");
});

test("界和纲带图标和拉丁名，目的拉丁名从资料里取", () => {
  const tree = buildTree(ENTRIES, (e, rank) => (rank === "order" ? `${e.taxonomy[3]}-latin` : undefined));
  assert.equal(findGroup(tree, "动物界").latin, "Animalia");
  assert.equal(findGroup(tree, "动物界/鸟纲").icon, "🐦");
  const order = findGroup(tree, "动物界/鸟纲/雀形目");
  assert.equal(order.latin, "雀形目-latin");
  assert.equal(order.icon, "🐦");
});

test("同一层只开一个；收起时连同里面的一起收", () => {
  let open = toggleOpen([], "动物界");
  open = toggleOpen(open, "动物界/鸟纲");
  assert.deepEqual(open, ["动物界", "动物界/鸟纲"]);
  assert.deepEqual(toggleOpen(open, "植物界"), ["植物界"]);
  assert.deepEqual(toggleOpen(open, "动物界"), []);
  assert.deepEqual(toggleOpen(open, "动物界/鸟纲"), ["动物界"]);
});

test("pathTo 给出从界开始要展开的每一层", () => {
  assert.deepEqual(pathTo(TREE, "动物界/鸟纲/雀形目"), ["动物界", "动物界/鸟纲", "动物界/鸟纲/雀形目"]);
  assert.deepEqual(pathTo(TREE, "没有这类"), []);
});

test("直接挂在界下面的卡片把纲也写上", () => {
  const slots = visibleSlots(TREE, ["植物界"]);
  const card = (id) => slots.find((s) => s.kind === "card" && s.entry.id === id);
  assert.equal(cardTaxa(card("银杏").entry, card("银杏").parent), "银杏纲 · 某科");
  const birds = visibleSlots(TREE, ["动物界", "动物界/鸟纲"]);
  const duck = birds.find((s) => s.kind === "card" && s.entry.id === "鸳鸯");
  assert.equal(cardTaxa(duck.entry, duck.parent), "某科");
});

test("展开后旗子和成员从左到右排开，不重叠", () => {
  const slots = visibleSlots(TREE, ["动物界", "动物界/鸟纲"]);
  const { items, width } = layoutTree(slots);
  assert.ok(width > items[items.length - 1].x);
  for (let i = 1; i < items.length; i++) assert.ok(items[i].x > items[i - 1].x);
});
