"use client";

import { useEffect } from "react";

export function ScrollRevealInit() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // ── Hero: staggered fade-in (immediate, no scroll trigger) ──
        gsap.fromTo(
          ".hero__eyebrow",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );
        gsap.fromTo(
          ".hero__titleLine",
          { opacity: 0, y: 45 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: "power3.out", delay: 0.15 }
        );
        gsap.fromTo(
          ".hero__text",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power2.out", delay: 0.5 }
        );
        gsap.fromTo(
          ".hero__actions",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", delay: 0.7 }
        );
        gsap.fromTo(
          ".hero__meta",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.9 }
        );
        gsap.fromTo(
          ".hero__aside",
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.85, ease: "power2.out", delay: 0.4 }
        );

        // ── Service cards: slide-in from left with stagger ──
        gsap.fromTo(
          ".service-card",
          { opacity: 0, y: 25 },
          {
            opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "power2.out",
            scrollTrigger: { trigger: ".services__grid", start: "top 82%" }
          }
        );

        // ── Process steps: staggered bottom fade ──
        gsap.fromTo(
          ".process-card",
          { opacity: 0, y: 35 },
          {
            opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: "power2.out",
            scrollTrigger: { trigger: ".process__grid", start: "top 82%" }
          }
        );

        // ── Pricing cards: scale-up entrance ──
        gsap.fromTo(
          ".pricing-card",
          { opacity: 0, scale: 0.93, y: 25 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "back.out(1.4)",
            scrollTrigger: { trigger: ".pricing-showcase", start: "top 80%" }
          }
        );
        gsap.fromTo(
          ".pricing-premium",
          { opacity: 0, scale: 0.95, y: 20 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.75, ease: "back.out(1.3)",
            scrollTrigger: { trigger: ".pricing-premium", start: "top 85%" }
          }
        );

        // ── Video block: scale-up dashboard effect ──
        gsap.fromTo(
          ".video-block",
          { opacity: 0, scale: 0.94, y: 30 },
          {
            opacity: 1, scale: 1, y: 0, duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: ".video-block", start: "top 85%" }
          }
        );

        // ── Generic .sr (excluding hero + specially handled elements) ──
        document.querySelectorAll(".sr").forEach((el) => {
          if (el.closest(".hero")) return;
          if (el.matches(".service-card, .process-card, .pricing-card, .pricing-premium, .video-block")) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.65, ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 88%" }
            }
          );
        });

        // ── .sr-left: slide from left ──
        document.querySelectorAll(".sr-left").forEach((el) => {
          if (el.closest(".hero")) return;
          gsap.fromTo(
            el,
            { opacity: 0, x: -45 },
            {
              opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 86%" }
            }
          );
        });

        // ── .sr-right: slide from right ──
        document.querySelectorAll(".sr-right").forEach((el) => {
          if (el.closest(".hero")) return;
          gsap.fromTo(
            el,
            { opacity: 0, x: 45 },
            {
              opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 86%" }
            }
          );
        });
      });
    }

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return null;
}
