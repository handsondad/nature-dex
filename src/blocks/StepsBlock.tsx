import { useEffect, useState } from "react";
import type { Shot } from "../entry/types.ts";
import { Cite } from "../render/Cite.tsx";
import { REDUCED_MOTION, useEntry } from "../render/context.ts";
import { Photo } from "../render/Photo.tsx";

type Step = Shot & { readonly label: string; readonly text: string };

const STEP_MS = 2600;

export function StepsBlock({ steps, cite }: { steps: readonly Step[]; cite?: readonly string[] }) {
  const { photos } = useEntry();
  const [on, setOn] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      if (on >= steps.length - 1) setPlaying(false);
      else setOn(on + 1);
    }, REDUCED_MOTION ? STEP_MS * 1.5 : STEP_MS);
    return () => clearTimeout(t);
  }, [playing, on, steps.length]);

  const step = steps[on];
  return (
    <div className="steps">
      <ol className="step-track" style={{ ["--progress" as string]: steps.length > 1 ? on / (steps.length - 1) : 1 }}>
        {steps.map((s, i) => (
          <li key={s.photo}>
            <button type="button" className={i === on ? "step on" : i < on ? "step done" : "step"}
              onClick={() => { setPlaying(false); setOn(i); }} aria-pressed={i === on}>
              <span className="n">{i + 1}</span>
              <span className="label">{s.label}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="step-view" key={on}>
        <Photo shot={step} photos={photos} />
        <div className="step-text">
          <h4>{on + 1}. {step.label}</h4>
          <p>{step.text}<Cite ids={on === steps.length - 1 ? cite : undefined} /></p>
          <button type="button" className="btn small" onClick={() => {
            if (!playing && on === steps.length - 1) setOn(0);
            setPlaying(!playing);
          }}>
            {playing ? "⏸ 停一下" : on === steps.length - 1 ? "↺ 从头再看" : "▶ 一步一步看"}
          </button>
        </div>
      </div>
    </div>
  );
}
