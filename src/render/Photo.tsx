import type { ReactNode } from "react";
import type { PhotoInfo, PhotoManifest, Shot } from "../entry/types.ts";
import { SNAP } from "./context.ts";

type Props = {
  shot: Shot;
  photos: PhotoManifest;
  thumb?: boolean;
  /** 照片上面叠的东西（观察点、放大镜……），只在真有照片时画 */
  overlay?: ReactNode;
  /** 照片下面要不要写说明和署名 */
  caption?: boolean;
  className?: string;
};

export function Photo({ shot, photos, thumb, overlay, caption = true, className = "" }: Props) {
  const info = photos[shot.photo];
  return (
    <figure className={`photo ${className}`}>
      {info ? (
        <div className="photo-frame" style={{ aspectRatio: `${info.w} / ${info.h}`, maxWidth: `calc(78vh * ${(info.w / info.h).toFixed(3)})` }}>
          <img src={thumb ? info.thumb : info.src} alt={shot.caption} loading={SNAP ? "eager" : "lazy"} draggable={false} />
          {overlay}
        </div>
      ) : (
        <div className="photo-frame photo-todo" role="img" aria-label={`待拍照片：${shot.shoot ?? shot.caption}`}>
          <span className="todo-icon" aria-hidden="true">📷</span>
          <span className="todo-title">待拍照片</span>
          <span className="todo-hint">{shot.shoot ?? shot.caption}</span>
        </div>
      )}
      {caption && (
        <figcaption>
          {shot.caption}
          {info && <Credit info={info} />}
        </figcaption>
      )}
    </figure>
  );
}

export function Credit({ info }: { info: PhotoInfo }) {
  if (info.credit === "ours") return null;
  const c = info.credit;
  return (
    <span className="credit">
      照片 <a href={c.url} target="_blank" rel="noreferrer">{c.author}</a> · {c.license.toUpperCase().replace("CC-", "CC ")} · {c.source}
    </span>
  );
}
