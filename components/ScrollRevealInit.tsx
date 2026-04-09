"use client";

import { useEffect } from "react";

export function ScrollRevealInit() {
  useEffect(() => {
    let active = true;

    async function init() {
      const ScrollReveal = (await import("scrollreveal")).default;
      if (!active) {
        return;
      }

      const sr = ScrollReveal();
      sr.reveal(".sr", {
        distance: "30px",
        duration: 600,
        easing: "ease-out",
        origin: "bottom",
        interval: 100,
        reset: false,
        opacity: 0
      });
      sr.reveal(".sr-left", {
        distance: "40px",
        duration: 650,
        easing: "ease-out",
        origin: "left",
        reset: false,
        opacity: 0
      });
      sr.reveal(".sr-right", {
        distance: "40px",
        duration: 650,
        easing: "ease-out",
        origin: "right",
        reset: false,
        opacity: 0
      });
    }

    init();

    return () => {
      active = false;
    };
  }, []);

  return null;
}
