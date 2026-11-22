import { useEffect, type RefObject } from "react";

/** 按住鼠标左右拖着滚；拖过再松手不算点击。手指在触屏上本来就能滑 */
export function useDragScroll(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start: { x: number; left: number; id: number } | null = null;
    let dragged = false;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      start = { x: e.clientX, left: el.scrollLeft, id: e.pointerId };
      dragged = false;
    };
    const move = (e: PointerEvent) => {
      if (!start) return;
      const dx = e.clientX - start.x;
      if (!dragged && Math.abs(dx) > 6) {
        dragged = true;
        el.setPointerCapture(start.id);
        el.classList.add("dragging");
      }
      if (dragged) el.scrollLeft = start.left - dx;
    };
    const up = () => { start = null; el.classList.remove("dragging"); };
    const click = (e: MouseEvent) => {
      if (!dragged) return;
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    };
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("click", click, true);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("click", click, true);
    };
  }, [ref]);
}
