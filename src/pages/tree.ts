/**
 * 首页「按分类」的晾衣绳：界 → 纲 → 目 → 一篇篇图鉴，点一层展开一层。
 * 分类来自每篇的 taxonomy（界、门、纲、目、科、属）。门和科不单独成层：门在路径里显示，科写在卡片上。
 * 只有一个成员的类不成组，直接挂那一篇；一个类里只有一个小类时跳过这一层，免得点开只看到一个牌子。
 */
import type { Entry } from "../entry/types.ts";
import { LINE, placeSlots, tiltAt } from "./line.ts";

export type Rank = "kingdom" | "class" | "order";

const LEVELS: readonly { readonly rank: Rank; readonly at: number }[] = [
  { rank: "kingdom", at: 0 },
  { rank: "class", at: 2 },
  { rank: "order", at: 3 },
];

export const RANK_NAME: Record<Rank, string> = { kingdom: "界", class: "纲", order: "目" };

const KINGDOM_ORDER = ["动物界", "植物界", "真菌界"];

/** 界和纲的图标、拉丁名和一句话；目用 GBIF 的拉丁名，图标跟着上一层 */
export const GROUP_LOOK: Record<string, { readonly icon: string; readonly latin: string; readonly note: string }> = {
  动物界: { icon: "🐾", latin: "Animalia", note: "要吃别的生物才能长大，大多能自己走、游或者飞。" },
  植物界: { icon: "🌿", latin: "Plantae", note: "大多是绿色的，靠阳光自己做养分。" },
  真菌界: { icon: "🍄", latin: "Fungi", note: "不是植物：没有叶绿素，从别的东西里吸收养分。" },
  鸟纲: { icon: "🐦", latin: "Aves", note: "全身长着羽毛，有嘴没有牙，生蛋。" },
  昆虫纲: { icon: "🐞", latin: "Insecta", note: "身体分成头、胸、腹三段，有六条腿。" },
  蛛形纲: { icon: "🕷️", latin: "Arachnida", note: "有八条腿，没有触角。" },
  哺乳纲: { icon: "🐿️", latin: "Mammalia", note: "身上有毛，小时候喝妈妈的奶。" },
  两栖纲: { icon: "🐸", latin: "Amphibia", note: "小时候在水里，长大后多数到岸上生活。" },
  爬行纲: { icon: "🦎", latin: "Reptilia", note: "皮肤干干的，身上有鳞片。" },
  木兰纲: { icon: "🌸", latin: "Magnoliopsida", note: "会开花结果，种子大多有两片子叶。" },
  百合纲: { icon: "🌾", latin: "Liliopsida", note: "会开花结果，种子只有一片子叶，叶脉多是平行的。" },
  银杏纲: { icon: "🍂", latin: "Ginkgoopsida", note: "不开花，种子露在外面，没有果皮包着。" },
  松柏纲: { icon: "🌲", latin: "Pinopsida", note: "不开花，种子长在球果里，叶子像针或鳞片。" },
};

export type Group = {
  readonly kind: "group";
  /** 从界开始的名字，用 / 连起来：「动物界/鸟纲/雀形目」 */
  readonly key: string;
  readonly rank: Rank;
  readonly name: string;
  readonly latin?: string;
  readonly icon: string;
  readonly entries: readonly Entry[];
  readonly children: readonly TreeNode[];
};
export type Leaf = { readonly kind: "leaf"; readonly entry: Entry };
export type TreeNode = Group | Leaf;

type LatinOf = (entry: Entry, rank: Rank) => string | undefined;

const nameOf = (e: Entry, at: number) => e.taxonomy?.[at] ?? "还没分类";

export function buildTree(entries: readonly Entry[], latinOf: LatinOf = () => undefined): TreeNode[] {
  const build = (members: readonly Entry[], level: number, prefix: string, icon: string): TreeNode[] => {
    if (level >= LEVELS.length) return sortNodes(members.map((entry) => ({ kind: "leaf", entry })), level);
    const { rank, at } = LEVELS[level];
    const buckets = new Map<string, Entry[]>();
    for (const e of members) buckets.set(nameOf(e, at), [...(buckets.get(nameOf(e, at)) ?? []), e]);
    const nodes = [...buckets].map(([name, inside]): TreeNode => {
      if (inside.length === 1) return { kind: "leaf", entry: inside[0] };
      const key = prefix ? `${prefix}/${name}` : name;
      const look = GROUP_LOOK[name];
      const children = build(inside, level + 1, key, look?.icon ?? icon);
      if (children.length === 1 && children[0].kind === "group") return children[0];
      return { kind: "group", key, rank, name, latin: look?.latin ?? latinOf(inside[0], rank), icon: look?.icon ?? icon, entries: inside, children };
    });
    return sortNodes(nodes, level);
  };
  return build(entries, 0, "", "🔖");
}

/** 界按固定顺序；其余大的类在前，同样大小按名字的拼音 */
function sortNodes(nodes: TreeNode[], level: number): TreeNode[] {
  const size = (n: TreeNode) => (n.kind === "group" ? n.entries.length : 1);
  const label = (n: TreeNode) => (n.kind === "group" ? n.name : n.entry.name);
  const kingdom = (n: TreeNode) => {
    const i = KINGDOM_ORDER.indexOf(n.kind === "group" ? n.name : nameOf(n.entry, 0));
    return i < 0 ? KINGDOM_ORDER.length : i;
  };
  return [...nodes].sort((a, b) =>
    (level === 0 ? kingdom(a) - kingdom(b) : 0) || size(b) - size(a) || label(a).localeCompare(label(b), "zh-CN"));
}

export type TreeSlot =
  | { readonly kind: "bundle"; readonly group: Group; readonly depth: number }
  | { readonly kind: "flag"; readonly group: Group; readonly depth: number }
  | { readonly kind: "card"; readonly entry: Entry; readonly depth: number; readonly parent?: Group };

/** 按展开的路径把树摊平成绳子上从左到右的挂件：展开的类挂一面旗，后面跟着它的成员 */
export function visibleSlots(nodes: readonly TreeNode[], open: readonly string[], depth = 0, parent?: Group): TreeSlot[] {
  return nodes.flatMap((n): TreeSlot[] => {
    if (n.kind === "leaf") return [{ kind: "card", entry: n.entry, depth, parent }];
    if (!open.includes(n.key)) return [{ kind: "bundle", group: n, depth }];
    return [{ kind: "flag", group: n, depth }, ...visibleSlots(n.children, open, depth + 1, n)];
  });
}

/**
 * 卡片上写的分类：科总是写；直接挂在界下面的（这一纲只有它一种），把纲也写上，
 * 不然狗尾草是单子叶、银杏是裸子植物这些就看不出来了。
 */
export function cardTaxa(entry: Entry, parent?: Group): string {
  const tax = entry.taxonomy;
  if (!tax) return "";
  return (parent && parent.rank === "kingdom" ? [tax[2], tax[4]] : [tax[4]]).filter(Boolean).join(" · ");
}

const slotW = (s: TreeSlot) => (s.kind === "card" ? LINE.cardW : s.kind === "bundle" ? LINE.tagW : LINE.bannerW);

/** 排位置：分类牌、旗子、卡片从左到右挂在绳子上 */
export function layoutTree(slots: readonly TreeSlot[], minWidth = 0) {
  const { xs, ys, width } = placeSlots(slots.map(slotW), minWidth);
  return { items: slots.map((s, i) => ({ slot: s, x: xs[i], y: ys[i], tilt: tiltAt(i) })), width };
}

const within = (key: string, parent: string) => key === parent || key.startsWith(`${parent}/`);

/** 同一层只展开一个：点开一个类，收起它的兄弟；点已经展开的类，连同里面的一起收起 */
export function toggleOpen(open: readonly string[], key: string): string[] {
  if (open.includes(key)) return open.filter((k) => !within(k, key));
  return [...open.filter((k) => within(key, k)), key];
}

export function findGroup(nodes: readonly TreeNode[], key: string): Group | undefined {
  for (const n of nodes) {
    if (n.kind !== "group" || !within(key, n.key)) continue;
    return n.key === key ? n : findGroup(n.children, key);
  }
  return undefined;
}

/** 要看到这个类，从界开始需要展开哪些类（含它自己） */
export function pathTo(nodes: readonly TreeNode[], key: string): string[] {
  for (const n of nodes) {
    if (n.kind !== "group" || !within(key, n.key)) continue;
    return n.key === key ? [key] : [n.key, ...pathTo(n.children, key)];
  }
  return [];
}

/** 从界到这个类的完整路径（含门），给预览用 */
export function lineageOf(group: Group): string[] {
  const tax = group.entries[0]?.taxonomy ?? [];
  const at = LEVELS.find((l) => l.rank === group.rank)?.at ?? 0;
  return tax.slice(0, at + 1);
}
