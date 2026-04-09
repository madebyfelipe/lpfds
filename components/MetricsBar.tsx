"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/data";

function MetricValue({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="metric-card__value">
      <span>{displayValue}</span>
      <span className="metric-card__valueAccent">{suffix}</span>
    </div>
  );
}

export function MetricsBar() {
  const [m0, m1, m2, m3] = metrics;

  return (
    <section className="metrics">
      <div className="site-shell">
        <div className="metrics__bento">

          {/* Featured large card — left, spans all rows */}
          <div className="metric-card metric-card--featured sr">
            <p className="metric-card__desc">{m0.description}</p>
            <div className="metric-card__bottom">
              <MetricValue value={m0.value} suffix={m0.suffix} />
              <p className="metric-card__label">{m0.label}</p>
            </div>
          </div>

          {/* Top right */}
          <div className="metric-card sr">
            <MetricValue value={m1.value} suffix={m1.suffix} />
            <p className="metric-card__label">{m1.label}</p>
          </div>

          {/* Mid right */}
          <div className="metric-card metric-card--described sr">
            <p className="metric-card__desc">{m2.description}</p>
            <div className="metric-card__bottom">
              <MetricValue value={m2.value} suffix={m2.suffix} />
              <p className="metric-card__label">{m2.label}</p>
            </div>
          </div>

          {/* Bottom right — status pill */}
          <div className="metric-card metric-card--status sr">
            <span className="metric-card__pill">
              <span className="metric-card__dot" />
              {m3.value}{m3.suffix} {m3.label}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
