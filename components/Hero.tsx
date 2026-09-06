"use client";

import { useRef, useState, useCallback } from "react";

function RevealSlider() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const setFromX = useCallback((clientX: number) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const p = Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100));
    setPct(p);
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative aspect-[4/5] select-none overflow-hidden rounded border border-line bg-[#0e1012]"
      onMouseMove={(e) => dragging.current && setFromX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => dragging.current && setFromX(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
      onClick={(e) => setFromX(e.clientX)}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#2b2e31,#1a1c1f_70%)] p-6 text-center font-mono text-[#6b6f74]">
        <div>
          <div className="mx-auto mb-3 h-28 w-28 rounded-full bg-[conic-gradient(#3a3d42,#23262a,#46494e,#23262a)] brightness-75 saturate-50" />
          <p className="text-xs uppercase tracking-[0.2em]">Before — Road Film</p>
        </div>
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_70%_30%,#3a2c1c,#191a1c_70%)] p-6 text-center font-mono text-amber"
        style={{ clipPath: `inset(0 0 0 ${pct}%)` }}
      >
        <div>
          <div className="mx-auto mb-3 h-28 w-28 rounded-full bg-[conic-gradient(#e8a33d,#f2c98a,#b8791f,#e8a33d)] shadow-[0_0_40px_rgba(232,163,61,0.35)]" />
          <p className="text-xs uppercase tracking-[0.2em]">After — Torque &amp; Shine</p>
        </div>
      </div>

      <div
        role="slider"
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        tabIndex={0}
        className="absolute bottom-0 top-0 w-[3px] cursor-ew-resize bg-chalk"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPct((p) => Math.max(4, p - 5));
          if (e.key === "ArrowRight") setPct((p) => Math.min(96, p + 5));
        }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-chalk text-lg font-bold text-asphalt">
          ⇔
        </span>
      </div>

      <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4 font-mono text-xs text-chalk-dim">
        Drag to compare · same panel, one visit
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 [background:linear-gradient(180deg,rgba(21,23,26,0.55)_0%,rgba(21,23,26,0.92)_78%,#15171a_100%),radial-gradient(ellipse_at_70%_30%,#34302a_0%,#15171a_65%)]"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Mobile Detailing · Windsor–Essex</p>
          <h1 className="font-display max-w-xl text-5xl font-semibold md:text-7xl">
            We bring the <em className="not-italic text-amber">shop-floor shine</em> to your driveway.
          </h1>
          <p className="mb-8 mt-6 max-w-md text-lg text-chalk-dim">
            Hand wash, paint correction, and ceramic coating — done on-site by a
            two-person crew that treats every panel like it&apos;s leaving a showroom.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#book"
              className="rounded bg-amber px-7 py-4 font-semibold text-asphalt transition-all hover:-translate-y-0.5 hover:bg-amber-light"
            >
              Book an appointment
            </a>
            <a
              href="#pricing"
              className="rounded border border-line px-7 py-4 font-semibold text-chalk transition-all hover:-translate-y-0.5 hover:border-chalk-dim"
            >
              View packages
            </a>
          </div>
          <dl className="mt-12 flex flex-wrap gap-9 font-mono">
            {[
              ["1,400+", "Cars detailed"],
              ["4.9 / 5", "Avg. rating"],
              ["45 min", "Avg. arrival"],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-bold text-amber">{stat}</dd>
                <dd className="text-xs tracking-wider text-chalk-dim">{label.toUpperCase()}</dd>
              </div>
            ))}
          </dl>
        </div>
        <RevealSlider />
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-2.5 [background:repeating-linear-gradient(135deg,#e8a33d_0_26px,#15171a_26px_52px)]"
      />
    </section>
  );
}
