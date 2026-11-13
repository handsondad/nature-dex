import { useState } from "react";
import type { Entry } from "../entry/types.ts";
import { Cite } from "../render/Cite.tsx";
import { useEntry } from "../render/context.ts";
import { useInView } from "../render/useInView.ts";
import { SEASONS, type Season } from "../pages/line.ts";

const SIZE = 340;
const C = SIZE / 2;
const R_IN = 62;
const R_BAR = 118;
const R_SEASON = 150;
const MONTH_SEASON: Season[] = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn", "autumn", "autumn", "winter"];

/** 第 m 月（1～12）中线的角度：1 月在正上方，顺时针 */
const angleOf = (m: number) => ((m - 1) / 12) * Math.PI * 2 - Math.PI / 2 + Math.PI / 12;
const point = (a: number, r: number) => [C + Math.cos(a) * r, C + Math.sin(a) * r] as const;

function arc(m: number, r0: number, r1: number): string {
  const a0 = angleOf(m) - Math.PI / 12 + 0.02;
  const a1 = angleOf(m) + Math.PI / 12 - 0.02;
  const [x0, y0] = point(a0, r1);
  const [x1, y1] = point(a1, r1);
  const [x2, y2] = point(a1, r0);
  const [x3, y3] = point(a0, r0);
  return `M ${x0} ${y0} A ${r1} ${r1} 0 0 1 ${x1} ${y1} L ${x2} ${y2} A ${r0} ${r0} 0 0 0 ${x3} ${y3} Z`;
}

/** 我们遇见它的月份：取自记录块和 when.date */
export function ourMonths(entry: Entry): Set<number> {
  const dates = [entry.when.date];
  for (const b of entry.blocks) if (b.type === "record") dates.push(...b.encounters.map((e) => e.date));
  return new Set(entry.draft ? [] : dates.map((d) => Number(d.slice(5, 7))));
}

export function YearBlock({ text, cite }: { text: string; cite?: readonly string[] }) {
  const { entry, research } = useEntry();
  const [ref, seen] = useInView<HTMLDivElement>(0.4);
  const [pick, setPick] = useState(() => new Date().getMonth() + 1);
  const months = research?.months;
  const ours = ourMonths(entry);
  const max = months ? Math.max(1, ...Object.values(months.all)) : 1;
  const total = months ? Object.values(months.all).reduce((s, v) => s + v, 0) : 0;
  const bloomLabel = entry.kind === "plant" ? "开花" : null;

  return (
    <div className="year" ref={ref}>
      <div className="year-ring">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="group" aria-label="它的一年：12 个月的记录">
          {Array.from({ length: 12 }, (_, i) => {
            const m = i + 1;
            const all = months?.all[m] ?? 0;
            const flower = months?.flowering?.[m] ?? 0;
            const len = (all / max) * (R_BAR - R_IN);
            const fLen = (flower / max) * (R_BAR - R_IN);
            const [lx, ly] = point(angleOf(m), R_SEASON + 18);
            return (
              <g key={m} className={m === pick ? "month on" : "month"} onClick={() => setPick(m)} onMouseEnter={() => setPick(m)}
                role="button" tabIndex={0} aria-label={`${m}月`} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setPick(m); }}>
                <path className="hit" d={arc(m, R_IN - 6, R_SEASON + 30)} />
                <path className="season" d={arc(m, R_BAR + 10, R_SEASON)} fill={SEASONS[MONTH_SEASON[i]].color} />
                <g className={seen ? "bars grown" : "bars"} style={{ transitionDelay: `${i * 70}ms` }}>
                  <path className="bar" d={arc(m, R_IN, R_IN + Math.max(len, 2))} />
                  {fLen > 0 && <path className="bar flower" d={arc(m, R_IN, R_IN + fLen)} />}
                </g>
                {ours.has(m) && (() => { const [px, py] = point(angleOf(m), (R_BAR + 10 + R_SEASON) / 2); return <circle className="ours" cx={px} cy={py} r={9} />; })()}
                <text x={lx} y={ly} className="mlabel">{m}</text>
              </g>
            );
          })}
          <text x={C} y={C - 8} className="center-big">{pick}月</text>
          <text x={C} y={C + 18} className="center-small">{SEASONS[MONTH_SEASON[pick - 1]].icon} {SEASONS[MONTH_SEASON[pick - 1]].name}</text>
        </svg>
      </div>
      <div className="year-side">
        {months ? (
          total > 0 ? (
            <p className="year-pick">
              <strong>{pick}月</strong>：中国的自然观察者拍到它 <b>{months.all[pick] ?? 0}</b> 次
              {bloomLabel && months.flowering && ((months.flowering[pick] ?? 0) > 0
                ? <>，其中 <b className="flower">{months.flowering[pick]}</b> 次标注了正在{bloomLabel}</>
                : <>，还没有人标注它在{bloomLabel}</>)}
              。{ours.has(pick) && <span className="ours-chip">我们这个月见过它</span>}
            </p>
          ) : (
            <p className="year-pick">
              {entry.kind === "plant"
                ? "它在公园和路边多是人工栽种的，iNaturalist 上还没有中国境内的野生研究级记录。等我们遇见它，就把那个月钉在环上！"
                : "iNaturalist 上目前还没有中国境内的研究级观察记录。等我们遇见它，就把那个月钉在环上！"}
            </p>
          )
        ) : (
          <p className="year-pick todo">还没查资料：运行 <code>npm run taxon -- {entry.id} "{entry.scientific}"</code></p>
        )}
        <p className="block-text">{text}{cite && <Cite ids={cite} />}</p>
        <ul className="legend">
          <li><span className="sw bar" />每月被拍到的次数</li>
          {bloomLabel && months?.flowering && <li><span className="sw flower" />标注正在{bloomLabel}</li>}
          <li><span className="sw ours" />我们遇见它的月份{ours.size === 0 && <span className="muted">（待遇见）</span>}</li>
        </ul>
        {months && (
          <p className="data-note">
            数据：<a href={months.url} target="_blank" rel="noreferrer">iNaturalist</a> {months.place}研究级观察共 {total} 条（{research?.fetchedAt} 查询）。
            {total > 0 && "拍到的次数多，也和那个月出门观察的人多有关。"}
          </p>
        )}
      </div>
    </div>
  );
}
