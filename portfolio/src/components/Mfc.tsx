"use client";

import { useEffect, useRef, useState } from "react";

type Step = { k: string; h: string; p: string };

const CIRCUIT = "M127 255 V312 H250 l5 -8 l10 16 l10 -16 l10 16 l10 -16 l10 16 l5 -8 H433 V255";
// [path, step at which it lights up]
const FLOWS: [string, number][] = [
  ["M175 80 V130", 0],
  ["M385 80 V130", 0],
  [CIRCUIT, 1],
  ["M280 312 V345", 2],
  ["M110 379 V450", 3],
  ["M190 490 H210", 4],
  ["M360 490 H380", 4],
];

// Scroll-driven system diagram of the MFC concept from the paper.
export function Pipeline({ steps }: { steps: readonly Step[] }) {
  const [cur, setCur] = useState(0);
  const [motion, setMotion] = useState(false);
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMotion(!matchMedia("(prefers-reduced-motion: reduce)").matches); // eslint-disable-line react-hooks/set-state-in-effect
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCur(Number((e.target as HTMLElement).dataset.i))),
      // Mobile: the sticky diagram covers the top half, so read steps lower down.
      { rootMargin: matchMedia("(max-width: 899px)").matches ? "-68% 0px -28% 0px" : "-45% 0px -45% 0px" }
    );
    list.current?.querySelectorAll<HTMLElement>(".step").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const node = (i: number) => `pl-node ${cur === i ? "now" : cur > i ? "on" : ""}`;

  return (
    <div className="pipeline">
      <div className="pipeline-stage" aria-hidden="true">
        <div className="pipeline-head">
          <span>fig. 1 — system flow</span>
          <b>0{cur + 1} / {steps[cur].k}</b>
        </div>
        <svg viewBox="0 0 560 560">
          {FLOWS.map(([d], i) => <path key={`w${i}`} d={d} className="pl-wire" />)}
          {FLOWS.map(([d, s], i) => (
            <path
              key={`f${i}`}
              d={d}
              className="pl-flow"
              pathLength={1}
              strokeDasharray="1"
              style={{ strokeDashoffset: cur >= s ? 0 : 1, transition: "stroke-dashoffset .9s cubic-bezier(.22,.61,.36,1)" }}
            />
          ))}

          {/* 0 · Feed */}
          <g className={node(0)}>
            <rect x="30" y="24" width="210" height="56" rx="14" />
            <text x="135" y="50" textAnchor="middle">Food waste</text>
            <text x="135" y="68" textAnchor="middle" className="sub">carbon source</text>
            <rect x="320" y="24" width="210" height="56" rx="14" />
            <text x="425" y="50" textAnchor="middle">Drilling mud</text>
            <text x="425" y="68" textAnchor="middle" className="sub">Cr⁶⁺ · Cu²⁺ · Pb²⁺</text>
          </g>

          {/* 1 · Dual-chamber cell */}
          <g className={node(1)}>
            <rect x="90" y="130" width="180" height="150" rx="12" />
            <rect x="290" y="130" width="180" height="150" rx="12" />
            <text x="180" y="156" textAnchor="middle">Anode</text>
            <text x="380" y="156" textAnchor="middle">Cathode</text>
            <text x="280" y="116" textAnchor="middle" className="sub">PEM</text>
          </g>
          <rect x="274" y="126" width="12" height="158" rx="3" className="pl-fill-ink" opacity=".85" />
          <rect x="120" y="170" width="14" height="85" rx="3" className="pl-fill-ink" />
          <rect x="426" y="170" width="14" height="85" rx="3" className="pl-fill-ink" />
          {[[165, 200], [205, 188], [185, 235], [228, 222], [160, 255], [240, 258]].map(([x, y], i) => (
            <ellipse key={i} cx={x} cy={y} rx="9" ry="5" transform={`rotate(${i * 37} ${x} ${y})`} className="pl-ink" />
          ))}
          {[[330, 195], [370, 230], [395, 190], [345, 255], [400, 262]].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="8" className="pl-ink" />
              <path d={`M${x - 4} ${y}h8M${x} ${y - 4}v8`} className="pl-ink" strokeWidth="1.5" />
            </g>
          ))}
          <text x="190" y="303" textAnchor="middle" className="pl-label">e⁻ →</text>
          <text x="280" y="336" textAnchor="middle" className="pl-label">load</text>
          {motion && cur >= 1 &&
            [0, 1, 2].map((i) => (
              <circle key={i} r="5" className="pl-electron">
                <animateMotion dur="3s" repeatCount="indefinite" begin={`${i}s`} path={CIRCUIT} />
              </circle>
            ))}

          {/* 2 · Stack: 16 cells in series */}
          <g className={node(2)}>
            {Array.from({ length: 16 }, (_, i) => (
              <rect key={i} x={40 + i * 30} y="345" width="24" height="34" rx="5" />
            ))}
          </g>
          <text x="280" y="402" textAnchor="middle" className="pl-label">16 × 0.255 V = 4.08 V</text>

          {/* 3 · Boost */}
          <g className={node(3)}>
            <rect x="30" y="450" width="160" height="80" rx="14" />
            <text x="110" y="484" textAnchor="middle">DC–DC boost</text>
            <text x="110" y="504" textAnchor="middle" className="sub">4.08 → 4.2 V · η≈90%</text>
          </g>

          {/* 4 · Store + use */}
          <g className={node(4)}>
            <rect x="210" y="450" width="150" height="80" rx="14" />
            <text x="285" y="484" textAnchor="middle">Na-ion 1.5 Ah</text>
            <text x="285" y="504" textAnchor="middle" className="sub">≈ 6 Wh</text>
            <rect x="380" y="450" width="150" height="80" rx="14" />
            <text x="455" y="484" textAnchor="middle">IoT sensors</text>
            <text x="455" y="504" textAnchor="middle" className="sub">0.3–0.5 W · 12–20 h</text>
          </g>
        </svg>
      </div>

      <div className="steps" ref={list}>
        {steps.map((s, i) => (
          <div className={`step ${cur === i ? "is-current" : ""}`} data-i={i} key={s.k}>
            <div className="step-card">
              <span className="step-k">0{i + 1} — {s.k}</span>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Series/parallel calculator using the paper's per-cell simulation values.
export function StackCalc({ cell, design }: { cell: { v: number; i: number }; design: { series: number; parallel: number } }) {
  const [s, setS] = useState(design.series);
  const [p, setP] = useState(design.parallel);
  const v = s * cell.v;
  const watts = s * p * cell.v * cell.i;
  const hours = 6 / (watts * 0.7); // 6 Wh battery, 70% total efficiency (paper's conservative case)
  const duty = 1 - v / 4.2;
  const fill = (val: number, min: number, max: number) => ({ "--fill": `${((val - min) / (max - min)) * 100}%` }) as React.CSSProperties;
  const fmtH = hours < 1 ? `${Math.round(hours * 60)} min` : hours < 100 ? `${hours.toFixed(1)} h` : `${Math.round(hours)} h`;

  return (
    <div className="calc" data-reveal>
      <div className="grid content-start gap-7">
        <div>
          <p className="section-num" style={{ marginBottom: ".5rem" }}>Try it</p>
          <h3 style={{ fontSize: "clamp(1.6rem, 1.2rem + 1.4vw, 2.4rem)" }}>Stack the cells yourself</h3>
          <p className="mt-3">
            One simulated cell gives {cell.v} V at {cell.i * 1000} mA. Wire them in series for voltage and in parallel for
            current — then see how long a 1.5 Ah sodium-ion battery takes to charge.
          </p>
        </div>
        <label className="range">
          <span className="range-head">Cells in series <output>{s}s</output></span>
          <input type="range" min={1} max={24} value={s} onChange={(e) => setS(+e.target.value)} style={fill(s, 1, 24)} />
        </label>
        <label className="range">
          <span className="range-head">Strings in parallel <output>{p}p</output></span>
          <input type="range" min={1} max={600} value={p} onChange={(e) => setP(+e.target.value)} style={fill(p, 1, 600)} />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="btn btn-sm" onClick={() => { setS(design.series); setP(design.parallel); }}>
            Paper&apos;s design · 16s416p
          </button>
        </div>
      </div>

      <div className="grid content-start gap-5">
        <div className="readouts" aria-live="polite">
          <div className="readout"><b>{v.toFixed(2)} V</b><span>string voltage</span></div>
          <div className="readout"><b>{(s * p).toLocaleString("en-US")}</b><span>cells total</span></div>
          <div className="readout"><b>{watts < 1 ? `${(watts * 1000).toFixed(0)} mW` : `${watts.toFixed(2)} W`}</b><span>stack power</span></div>
          <div className="readout"><b>{fmtH}</b><span>to charge 6 Wh @ 70%</span></div>
        </div>
        <div>
          <div className="range-head mb-2" style={{ fontSize: ".8rem" }}>
            <span>One string · {s} in series</span>
            <output>{duty > 0 ? `boost duty ${(duty * 100).toFixed(1)}%` : "≥ 4.2 V — no boost needed"}</output>
          </div>
          <div className="cells">
            {Array.from({ length: s }, (_, i) => <span className="cell" key={i} />)}
          </div>
        </div>
        <div>
          <div className="range-head mb-2" style={{ fontSize: ".8rem" }}>
            <span>vs. the 1-hour charge target</span>
            <output>{Math.min(100, Math.round(100 / hours))}%</output>
          </div>
          <div className="meter"><div style={{ width: `${Math.min(100, 100 / hours)}%` }} /></div>
        </div>
        <p className="fine-print" style={{ marginTop: 0 }}>
          P = N<sub>s</sub> × N<sub>p</sub> × 0.255 V × 5.05 mA · D = 1 − V<sub>in</sub>/4.2 V · values from the paper&apos;s appendix.
        </p>
      </div>
    </div>
  );
}
