let ready: Promise<{
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
  SplitText: typeof import("gsap/SplitText").SplitText;
}> | null = null;

/** Carrega GSAP + plugins uma vez e registra as curvas do Monolog. */
export function loadGsap() {
  ready ??= (async () => {
    const [{ gsap }, { ScrollTrigger }, { SplitText }, { CustomEase }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/SplitText"),
      import("gsap/CustomEase")
    ]);
    gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
    CustomEase.create("ease-primary", "0.55, 0, 0.7, 0");
    CustomEase.create("ease-fade", "0.76, 0, 0.24, 1");
    CustomEase.create("ease-transition", "0.22, 1, 0.36, 1");
    return { gsap, ScrollTrigger, SplitText };
  })();
  return ready;
}

/** Durações do Monolog. */
export const T = { fast: 0.3, normal: 0.65, slow: 0.95, slower: 1.25 };
