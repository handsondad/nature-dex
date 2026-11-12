import { useEffect, useState } from "react";
import type { Shot } from "../entry/types.ts";
import { Cite } from "../render/Cite.tsx";
import { useEntry } from "../render/context.ts";
import { Credit, Photo } from "../render/Photo.tsx";
import { useInView } from "../render/useInView.ts";

type Side = Shot & { readonly label: string };

export function CompareBlock({ before, after, text, cite }: { before: Side; after: Side; text: string; cite?: readonly string[] }) {
  const { photos } = useEntry();
  const b = photos[before.photo];
  const a = photos[after.photo];
  const [ref, seen] = useInView<HTMLDivElement>(0.5);
  const [pos, setPos] = useState(85);
  // 滚到这里时，分界线自己滑到中间，让人知道能拖
  useEffect(() => { if (seen) setPos(50); }, [seen]);

  if (!b || !a) {
    return (
      <div className="compare" ref={ref}>
        <div className="compare-pair">
          <Photo shot={{ ...before, caption: `${before.label}：${before.caption}` }} photos={photos} />
          <Photo shot={{ ...after, caption: `${after.label}：${after.caption}` }} photos={photos} />
        </div>
        <p className="block-text">{text}<Cite ids={cite} /></p>
      </div>
    );
  }

  return (
    <div className="compare" ref={ref}>
      <div className="compare-stage" style={{
        aspectRatio: `${a.w} / ${a.h}`,
        maxWidth: `calc(78vh * ${(a.w / a.h).toFixed(3)})`,
        ["--pos" as string]: `${pos}%`,
      }}>
        <img src={b.src} alt={before.caption} draggable={false} />
        <img className="after" src={a.src} alt={after.caption} draggable={false} />
        <span className="compare-tag left">{before.label}</span>
        <span className="compare-tag right">{after.label}</span>
        <span className="divider" aria-hidden="true"><span className="knob">⇆</span></span>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`左边是${before.label}，右边是${after.label}，拖动对比`} />
      </div>
      <div className="caption-row">
        <span>{before.label}：{before.caption}<Credit info={b} /></span>
        <span>{after.label}：{after.caption}<Credit info={a} /></span>
      </div>
      <p className="block-text">{text}<Cite ids={cite} /></p>
    </div>
  );
}
