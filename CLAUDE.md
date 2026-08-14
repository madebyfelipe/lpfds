# Made by Felipe — Landing Page

## Project

Next.js 16 (App Router, Turbopack) + TypeScript landing page for **Made by Felipe**, a branding + social media service targeting Brazilian professionals (lawyers, nutritionists, psychologists, clinics).

Live domain: `madebyfelipe.com`  
Language: **Portuguese (pt-BR)** — all user-facing copy stays in Portuguese.

> **Branch `beta` only:** the home is no longer the dark landing page — it is the
> new institutional site (light/editorial). See "Site institucional (branch beta)"
> at the bottom of this file. Everything else in this document still describes the
> dark theme, which keeps serving `/hub`, `/contato` and `/portfolio` unchanged.

---

## Stack

- **Framework**: Next.js 16 App Router — `app/` directory only, no `pages/`
- **Styling**: Single global CSS file at `app/globals.css` — no CSS modules, no Tailwind, no CSS-in-JS
- **Fonts**: Only **Poppins** (400/500/600/700/800) is loaded via `next/font/google` in `layout.tsx`. The CSS references `var(--font-cormorant)` (falls back to Georgia) and `var(--font-outfit)` (falls back to system-ui) — these variables are **never set**, so Georgia and system-ui are what actually renders.
- **Animations**: `scrollreveal` library (initialized in `components/ScrollRevealInit.tsx`, a client component). Elements with class `sr`, `sr-left`, or `sr-right` start `visibility: hidden` and are revealed on scroll.
- **Images**: Next.js `<Image>` component. Logo files live at the project root: `LOGO WHITE.png`, `LOGO RED.png`, etc. Public-served copies (lowercase): `public/logo-white.png`, `public/logo-red.png`.

---

## Architecture

```
app/
  globals.css       — entire style system, one file
  layout.tsx        — Poppins font, metadata, html/body
  page.tsx          — composes all sections in order

components/
  Nav.tsx           — fixed pill navbar, uses logo-white.png on dark bg
  Hero.tsx          — headline + FloatingProof cards + VideoPlayer
  MetricsBar.tsx    — animated counter cards (IntersectionObserver)
  TrustBar.tsx      — dark bar listing professional niches served
  Services.tsx      — 2×2 grid of dark service cards
  ProblemSolution.tsx — side-by-side compare cards
  Process.tsx       — 4-step numbered process grid
  Pricing.tsx       — 2 cards top + 1 premium wide card bottom
  Reviews.tsx       — stack of 2 + 1 featured dark card
  FAQ.tsx           — accordion, client component (useState)
  FinalCTA.tsx      — dark CTA box + ScrollingTags marquee
  Footer.tsx        — 3-column grid, dark background
  FloatingProof.tsx — floating social proof cards in hero aside
  VideoPlayer.tsx   — dark video card with play button
  ScrollingTags.tsx — CSS marquee animation
  ScrollRevealInit.tsx — client component, initializes scrollreveal

lib/
  data.ts           — all copy/content as typed exports (no CMS)
```

---

## CSS conventions

**Design token variables** are in `:root` in `globals.css`. The theme is **dark**:
- `--bg` / `--bg-soft`: near-black page backgrounds
- `--panel` / `--panel-soft`: card backgrounds (#181818 / #202020)
- `--text` / `--muted` / `--soft`: light text hierarchy
- `--accent` / `--accent-dark` / `--accent-soft` / `--accent-glow`: red (#d42b2b)
- `--line` / `--line-strong`: white-alpha borders for dark surfaces

**Class naming**: BEM-like. Block (`service-card`), element (`service-card__title`), modifier (`service-card--featured`). No utility classes.

**Button variants**:
- `.button--primary` → red background with red glow shadow (not dark panel)
- `.button--ghost` → dark glass, red hover tint

**Section structure pattern**:
```html
<section id="anchor" className="section">
  <div className="site-shell">
    <div className="section-header [section-header--left]">
      <span className="section-kicker sr">Label</span>
      <h2 className="section-title sr">Title with <em>accent</em></h2>
      <p className="section-copy sr">Optional subtitle</p>
    </div>
    <!-- content -->
  </div>
</section>
```

**Visual polish pattern** used on dark cards:
```css
.card {
  position: relative;
  overflow: hidden;
}
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 0% 0%, rgba(212, 43, 43, 0.07), transparent 55%);
  pointer-events: none;
}
```

---

## Content / data layer

All copy lives in `lib/data.ts` as typed exports. To change any text, prices, FAQs, reviews, or service descriptions — edit `data.ts` only. No component file needs to change for content updates.

Key exports: `metrics`, `services`, `problemItems`, `solutionItems`, `processSteps`, `pricingTiers`, `reviews`, `faqs`, `finalTags`, `floatingProofs`, `navigationLinks`, `trustedMarks`.

`pricingTiers` has a nested structure (`branding[]` + `social[]` feature arrays). The `Pricing` component merges them with spread.

---

## Key decisions & constraints

- **No new files unless necessary** — extend existing components and data.ts
- **Copy stays in Portuguese** — do not translate or change tone
- **Pricing is monthly subscription** (`/mês`), trimestral commitment (3-month minimum) — this is explained in FAQ
- **3 pricing tiers**: Essencial (R$ 1.200), Estratégico (R$ 1.800, highlighted), Premium (R$ 2.500)
- The `section-kicker::before` pseudo-element adds a red decorative line — don't add actual `<hr>` or decorative elements before kickers
- `ScrollRevealInit` must stay in `page.tsx` (above all sections) to initialize before any `.sr` elements are encountered
- The `pricing-premium__button` needs both `button` and `button--primary` classes to get red styling
- Nav logo must be `logo-white.png` (not red) because the topbar is dark glassmorphism

## Portfolio conventions (/portfolio, /portfolio/[slug])

- **Display type**: big case titles (`case-hero__title`, `case-statement__text`, `case-next__client`, etc.) use `var(--font-outfit), system-ui, sans-serif` — same family as the home `hero__title`. Never let them fall back to the body stack.
- **Case kickers**: all kicker/label classes in cases use `0.72rem / letter-spacing 0.24em / weight 700 / uppercase / var(--accent)`, without the `::before` red dash (that dash belongs to `.section-kicker` on the home only).
- **Card radius**: always via tokens (`--radius-lg` desktop / `--radius-md` mobile) — no hardcoded px.
- **Mobile card caption**: `project-card__caption` (client + category) renders only at ≤768px; on desktop the cursor floater shows the name. Keep both in sync when adding fields.
- **Gallery vs Apresentação**: when a case's `presentation` is grid mode without explicit `images` (it reuses `gallery`), the Galeria strip renders only the first 10 pieces as a sample — the Apresentação grid is the complete listing. Cases with a single-board presentation keep the full strip.
- **One client = one case, folded structure**: `[slug]/page.tsx` is a single case layout with mandatory folds (hero, tagline, gallery, statement, scope) and optional ones that render only when their field is set — `about`/`aboutImage` (Sobre), `website` (O site, ao vivo — `SiteFrame`), `presentation` (Apresentação). Don't create a second slug when scope grows; add the fold to the existing case and redirect the dead slug in `next.config.ts`. The old standalone `WebsiteCase.tsx` was removed — the browser-window fold now lives inline in the standard case.
- **Nav**: portfolio pages (grid and cases) always use `<Nav collapsible />`.
- On touch (`hover: none`) and reduced motion, the Galeria marquee becomes a manual horizontal scroll and the duplicated loop copy (`case-gallery__item--dup`) is hidden.

---

## Site institucional (branch `beta`)

Port of the approved prototype `Site institucional para Felipe/Site Institucional.dc.html`
(a Claude design-canvas SPA). It replaces the old dark home on `beta`; `main` stays as is.

**Routes** — all inside the `app/(institucional)/` route group, which supplies the
shared shell (`InstNav` + `InstFooter` + the `.inst` wrapper):

| Route | File | Prototype view |
|---|---|---|
| `/` | `app/(institucional)/page.tsx` | `isHome` |
| `/projetos` | `app/(institucional)/projetos/page.tsx` | `isProjetos` (hub de portfólio) |
| `/imersao` | `app/(institucional)/imersao/page.tsx` | `isContato` |

The prototype's contact view lives at **`/imersao`**, not `/contato` — `/contato` is a
satellite of `/hub` (shares `hub.css`, linked from `HubProducts`) and must not be touched.

The prototype's `isProjeto` view was **not** ported: by Felipe's call, a cover in
`/projetos` opens the existing rich case at `/portfolio/[slug]`. `/projetos` is the hub,
`/portfolio/[slug]` is the case — don't add a second case layout under `/projetos`.

**Styling**: `app/institucional.css`, everything scoped under `.inst`, so the dark
`globals.css` (still applied by the root layout) can't leak into it and vice-versa.
Tokens are the Made by Felipe design system: cream `#f6f6f6`, black `#151515`,
red `#bc0319`, gray ramp `#ececec…#454545`. Font is **Neue Haas Grotesk Display**,
`@font-face`-declared from the TTFs already in `public/fonts/`. Class naming is
`inst-block__element--modifier`. The prototype is desktop-only; the responsive rules
at the bottom of the file are additions, not part of the approved design.

**Content**: `lib/institucional.ts` holds the copy transcribed verbatim from the
prototype (steps, deliverables, depoimentos, agenda, social). **Do not rewrite it** —
it is approved copy. The portfolio is *not* duplicated there: `/projetos` reads
`lib/portfolio.ts`, the single source of truth shared with the `/portfolio` case pages.

**Hero strip**: `heroStrip` in `lib/institucional.ts` → `public/institucional/hero/0N.jpg`,
five real photos of Felipe (the prototype drew eight cells; five is what exists).
Optimized with sharp from the gitignored `fotos Felipe/` — `.rotate()` matters, one
source carries EXIF orientation 6.

**Clientes**: not the prototype's 5-cell grid — the white client PNGs vanished on the
cream background, so it uses `InstTrustBar`, the red marquee band inherited from the old
dark home's `TrustBar` (`filter: brightness(0) invert(1)` over `--red`).

**Anchors the home must keep**: `/hub`'s product cards link to `/#servicos` (Entregas)
and `/#processo` (Como funciona). Those ids live on the institutional home — removing
them breaks the hub. `lib/data.ts`'s `navigationLinks` was likewise repointed at the new
routes, since the old home's section anchors no longer exist.

**Untouched by this port**: `/contato`, `/portfolio`, `/portfolio/[slug]` and every
component they use. `/hub` keeps its content; only its desktop footer/deck full-bleed
padding was fixed (the content used to stretch to 100vw instead of the hub column).
The institutional footer carries a backlink to `/hub`.
