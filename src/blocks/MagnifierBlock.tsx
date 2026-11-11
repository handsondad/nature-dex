import { useEffect, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { Shot } from "../entry/types.ts";
import { Cite } from "../render/Cite.tsx";
import { useEntry } from "../render/context.ts";
import { Photo } from "../render/Photo.tsx";
import { useInView } from "../render/useInView.ts";

/** 放大镜直径占照片宽度的比例 */
const LENS = 0.36;

type Props = { shot: Shot; text: string; zoom?: number; start?: readonly [number, number]; cite?: readonly string[] };

export function MagnifierBlock({ shot, text, zoom = 2.5, start = [0.5, 0.5], cite }: Props) {
  const { photos } = useEntry();
  const info = photos[shot.photo];
  const [ref, seen] = useInView<HTMLDivElement>(0.5);
  const [at, setAt] = useState({ x: 0.12, y: 0.88 });
  const [sx, sy] = start;
  // 滚到这里时，放大镜自己从角上滑到要看的地方，让人知道它能动
  useEffect(() => { if (seen) setAt({ x: sx, y: sy }); }, [seen, sx, sy]);

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" && e.buttons === 0) return;
    const r = e.currentTarget.getBoundingClientRect();
    setAt({ x: clamp((e.clientX - r.left) / r.width), y: clamp((e.clientY - r.top) / r.height) });
  };
  const onKey = (e: KeyboardEvent) => {
    const d = { ArrowLeft: [-0.05, 0], ArrowRight: [0.05, 0], ArrowUp: [0, -0.05], ArrowDown: [0, 0.05] }[e.key];
    if (!d) return;
    e.preventDefault();
    setAt((p) => ({ x: clamp(p.x + d[0]), y: clamp(p.y + d[1]) }));
  };

  const overlay = info && (
    <div className="lens-area" onPointerMove={move} onPointerDown={move} tabIndex={0} onKeyDown={onKey}
      aria-label="放大镜：用鼠标或手指在照片上移动，也可以用方向键">
      <span className="lens" style={{ left: `${at.x * 100}%`, top: `${at.y * 100}%`, width: `${LENS * 100}%` }}>
        {/* 放大后的照片，以镜片宽度为单位摆放，让 (x, y) 正好落在镜片中心 */}
        <img src={info.src} alt="" draggable={false} style={{
          width: `${(zoom / LENS) * 100}%`,
          left: `${(0.5 - (at.x * zoom) / LENS) * 100}%`,
          top: `${(0.5 - ((at.y * zoom) / LENS) * (info.h / info.w)) * 100}%`,
        }} />
      </span>
    </div>
  );

  return (
    <div className="magnifier" ref={ref}>
      <Photo shot={shot} photos={photos} overlay={overlay} />
      <p className="block-text">{text}<Cite ids={cite} /></p>
      {info && <p className="hint">按住照片拖动放大镜，看看细节</p>}
    </div>
  );
}

const clamp = (v: number) => Math.min(1, Math.max(0, v));
