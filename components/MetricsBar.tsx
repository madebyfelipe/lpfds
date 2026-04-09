"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/data";

function MetricValue({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) {
          return;
        }

        animatedRef.current = true;
        const duration = 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
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
  return (
    <section className="metrics">
      <div className="site-shell">
        <div className="metrics__grid">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card sr">
              <MetricValue value={metric.value} suffix={metric.suffix} />
              <p className="metric-card__label">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
