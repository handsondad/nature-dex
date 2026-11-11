/**
 * 首页的自然晾衣绳。按日子看时，图鉴按第一次遇见的日子从左往右夹在绳子上，换季的地方挂一面季节小旗；
 * 按分类看时的挂法在 tree.ts。
 * 绳子是一条二次贝塞尔曲线，两头高、中间垂下去；挂件的高度跟着绳子走。
 */
import type { DateString, Entry } from "../entry/types.ts";

export const LINE = {
  cardW: 172,
  flagW: 76,
  /** 按分类时：收起的分类牌、展开后的分类旗 */
  tagW: 156,
  bannerW: 112,
  gap: 28,
  /** 两头留给立杆 */
  pad: 64,
  /** 绳子中间垂下多少 */
  sag: 34,
  /** 绳子两头的高度 */
  top: 30,
} as const;

export type Season = "spring" | "summer" | "autumn" | "winter";

export const SEASONS: Record<Season, { readonly name: string; readonly icon: string; readonly color: string }> = {
  spring: { name: "春", icon: "🌱", color: "#7cbf6a" },
  summer: { name: "夏", icon: "☀️", color: "#e9a93c" },
  autumn: { name: "秋", icon: "🍂", color: "#d27a45" },
  winter: { name: "冬", icon: "❄️", color: "#6f9fd0" },
};

/** 1、2 月算前一年的冬天，免得一个冬天被年份劈成两半 */
export function seasonOf(date: DateString): { season: Season; year: number } {
  const [y, m] = date.split("-").map(Number);
  if (m >= 3 && m <= 5) return { season: "spring", year: y };
  if (m >= 6 && m <= 8) return { season: "summer", year: y };
  if (m >= 9 && m <= 11) return { season: "autumn", year: y };
  return { season: "winter", year: m === 12 ? y : y - 1 };
}

export type LineItem =
  | { readonly kind: "flag"; readonly season: Season; readonly year: number; readonly x: number; readonly y: number }
  | { readonly kind: "card"; readonly entry: Entry; readonly x: number; readonly y: number; readonly tilt: number };

const TILTS = [-3, 2.5, -1.5, 3, -2.5, 1.5];

/** 绳子在横坐标 x 处垂下多少（0 是两头的高度） */
export function sagAt(x: number, width: number): number {
  const t = Math.min(1, Math.max(0, (x - LINE.pad / 2) / (width - LINE.pad)));
  return 4 * LINE.sag * t * (1 - t);
}

/**
 * 给一排宽度不同的挂件排位置，返回每个挂件中心的 x、垂下的 y 和绳子总长。
 * minWidth：框比挂件宽时，把绳子拉满，多出来的地方平均分到挂件之间。
 */
export function placeSlots(widths: readonly number[], minWidth = 0): { xs: number[]; ys: number[]; width: number } {
  const content = widths.reduce((sum, w) => sum + w, 0) + LINE.gap * Math.max(0, widths.length - 1);
  const extra = Math.max(0, minWidth - content - LINE.pad * 2) / (widths.length + 1);
  const width = content + LINE.pad * 2 + extra * (widths.length + 1);
  let left = LINE.pad + extra;
  const xs = widths.map((w) => {
    const x = left + w / 2;
    left += w + LINE.gap + extra;
    return x;
  });
  return { xs, ys: xs.map((x) => sagAt(x, width)), width };
}

export const tiltAt = (i: number) => TILTS[i % TILTS.length];

export function layoutLine(entries: readonly Entry[], minWidth = 0): { items: LineItem[]; width: number } {
  const sorted = [...entries].sort((a, b) => a.when.date.localeCompare(b.when.date) || a.id.localeCompare(b.id));
  const slots: ({ kind: "flag"; season: Season; year: number } | { kind: "card"; entry: Entry })[] = [];
  let key = "";
  for (const entry of sorted) {
    const { season, year } = seasonOf(entry.when.date);
    if (`${year}-${season}` !== key) {
      key = `${year}-${season}`;
      slots.push({ kind: "flag", season, year });
    }
    slots.push({ kind: "card", entry });
  }
  const { xs, ys, width } = placeSlots(slots.map((s) => (s.kind === "flag" ? LINE.flagW : LINE.cardW)), minWidth);
  let n = 0;
  const items = slots.map((s, i): LineItem => {
    if (s.kind === "flag") return { kind: "flag", season: s.season, year: s.year, x: xs[i], y: ys[i] };
    return { kind: "card", entry: s.entry, x: xs[i], y: ys[i], tilt: tiltAt(n++) };
  });
  return { items, width };
}

/** 「2026年4月12日」 */
export function fullDate(date: DateString): string {
  const [y, m, d] = date.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

/** 「4月12日」 */
export function monthDay(date: DateString): string {
  const [, m, d] = date.split("-").map(Number);
  return `${m}月${d}日`;
}

/** 离今天多久：「就是今天」「3 天前」「5 个月前」「1 年零 5 个月前」 */
export function ago(date: DateString, today: Date): string {
  const [y, m, d] = date.split("-").map(Number);
  const days = Math.floor((Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(y, m - 1, d)) / 86400000);
  if (days < 0) return "还没到那天";
  if (days === 0) return "就是今天";
  if (days < 31) return `${days} 天前`;
  let months = (today.getFullYear() - y) * 12 + (today.getMonth() - (m - 1));
  if (today.getDate() < d) months -= 1;
  months = Math.max(1, months);
  if (months < 12) return `${months} 个月前`;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return rest ? `${years} 年零 ${rest} 个月前` : `${years} 年前`;
}
