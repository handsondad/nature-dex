/** 一起做图鉴的人。只用称呼，不写真名 */
export const PEOPLE = {
  kid: "小念",
  dad: "爸爸",
  mom: "妈妈",
} as const;

export type CreatorId = keyof typeof PEOPLE;

export const CREATOR_IDS = Object.keys(PEOPLE) as CreatorId[];

export function byLine(ids: readonly CreatorId[]): string {
  const names = ids.map((id) => PEOPLE[id]);
  if (names.length <= 1) return `${names[0] ?? ""}做的图鉴`;
  return `${names.slice(0, -1).join("、")}和${names[names.length - 1]}一起做的图鉴`;
}
