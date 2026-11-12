"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll suave (Lenis) sincronizado com o ScrollTrigger do GSAP, como no
 * Monolog. Desligado com prefers-reduced-motion e em telas de toque, onde o
 * scroll nativo é o esperado. Âncoras internas passam pelo Lenis para manter
 * a mesma curva.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      matchMedia("(hover: none)").matches
    ) {
      return;
    }

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ duration: 0.5 });
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      (window as unknown as { __lenis?: typeof lenis }).__lenis = lenis;

      const onClick = (event: MouseEvent) => {
        const link = (event.target as Element | null)?.closest?.('a[href^="#"]');
        const hash = link?.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.querySelector(hash);
        if (!target) return;
        event.preventDefault();
        lenis.scrollTo(target as HTMLElement, { duration: 1.2, offset: 20 });
      };
      document.addEventListener("click", onClick);

      cleanup = () => {
        document.removeEventListener("click", onClick);
        gsap.ticker.remove(tick);
        lenis.destroy();
        delete (window as unknown as { __lenis?: unknown }).__lenis;
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [pathname]);

  return null;
}
