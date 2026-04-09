"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const animated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;
        const duration = 1400;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="proof-num__value">
      {display}
      <span className="proof-num__suffix">{suffix}</span>
    </span>
  );
}

export function MetricsBar() {
  return (
    <section className="about-section">
      <div className="site-shell">

        <div className="about-section__header sr">
          <span className="section-kicker">Sobre</span>
          <h2 className="about-section__headline">
            Sua marca vai parecer no nível que ela realmente opera{" "}
            <em>e começar a atrair os clientes certos.</em>
          </h2>
        </div>

        <div className="proof-nums__row sr">
          {metrics.map((m) => (
            <div key={m.label} className="proof-num">
              <Counter value={m.value} suffix={m.suffix} />
              <p className="proof-num__label">{m.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
