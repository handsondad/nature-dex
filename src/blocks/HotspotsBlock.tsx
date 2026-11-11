import { useState } from "react";
import type { Hotspot, Shot } from "../entry/types.ts";
import { Cite } from "../render/Cite.tsx";
import { useEntry } from "../render/context.ts";
import { Photo } from "../render/Photo.tsx";

export function HotspotsBlock({ shot, points }: { shot: Shot; points: readonly Hotspot[] }) {
  const { photos } = useEntry();
  const [on, setOn] = useState(0);
  const overlay = points.map((p, i) => (
    <button key={i} type="button" className={i === on ? "spot on" : "spot"}
      style={{ left: `${p.x * 100}%`, top: `${p.y * 100}%`, ["--i" as string]: i }}
      aria-label={`${i + 1}. ${p.label}`} aria-pressed={i === on} onClick={() => setOn(i)}>
      {i + 1}
    </button>
  ));
  return (
    <div className="hotspots">
      <Photo shot={shot} photos={photos} overlay={overlay} />
      <ol className="spot-list">
        {points.map((p, i) => (
          <li key={i} className={i === on ? "spot-card on" : "spot-card"}>
            <button type="button" onClick={() => setOn(i)} aria-pressed={i === on}>
              <span className="n">{i + 1}</span>
              <strong>{p.label}</strong>
            </button>
            {i === on && <p className="detail">{p.detail}<Cite ids={p.cite} /></p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
