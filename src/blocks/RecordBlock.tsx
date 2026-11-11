import type { Encounter } from "../entry/types.ts";
import { PEOPLE } from "../entry/people.ts";
import { fullDate } from "../pages/line.ts";
import { useEntry } from "../render/context.ts";
import { Photo } from "../render/Photo.tsx";

export function RecordBlock({ encounters }: { encounters: readonly Encounter[] }) {
  const { photos } = useEntry();
  if (!encounters.length) {
    return <p className="record-empty">这里会写我们第一次遇见它的那天：在哪儿、看到了什么、当时说了什么。</p>;
  }
  return (
    <ol className="record">
      {encounters.map((e, i) => (
        <li key={`${e.date}-${i}`} className="encounter" style={{ ["--i" as string]: i }}>
          <span className="dot" aria-hidden="true" />
          <p className="meta">
            <span className="date">{fullDate(e.date)}</span>
            <span className="chip">📍 {e.where}</span>
            {e.weather && <span className="chip">{e.weather}</span>}
          </p>
          <p className="note">{e.note}</p>
          {e.said && (
            <blockquote className="said">
              <span className="who">{PEOPLE[e.said.who]}说</span>
              「{e.said.text}」
            </blockquote>
          )}
          {e.shots && e.shots.length > 0 && (
            <div className={e.shots.length === 1 ? "shots one" : "shots"}>
              {e.shots.map((s) => <Photo key={s.photo} shot={s} photos={photos} />)}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
