# Made by Felipe — Landing Page (Beta / Design System)

## Project

Next.js 16 (App Router, Turbopack) + TypeScript landing page for **Made by Felipe**, a branding + social media service targeting Brazilian professionals (lawyers, nutritionists, psychologists, clinics).

Live domain: `madebyfelipe.com`  
Language: **Portuguese (pt-BR)** — all user-facing copy stays in Portuguese.

---

## Stack

- **Framework**: Next.js 16 App Router — `app/` directory only, no `pages/`
- **Styling**: Single global CSS file at `app/globals.css` — no CSS modules, no Tailwind, no CSS-in-JS
- **Fonts**: **Neue Haas Grotesk Display** loaded via `next/font/local` in `layout.tsx`. Weights: Light 300, Roman 400 (+italic), Medium 500, Bold 700 (+italic), Black 900. CSS variable `--font-sans`.
- **Animations**: `scrollreveal` library (initialized in `components/ScrollRevealInit.tsx`, a client component). Elements with class `sr`, `sr-left`, or `sr-right` start `visibility: hidden` and are revealed on scroll. Animations are subtle (120–180ms, ease-standard).
- **Images**: Next.js `<Image>` component. Logo files at `public/logo-white.png`, `public/logo-black.png`, `public/logo-mark*.svg`.

---

## Design System

This branch follows the **Made by Felipe Design System** (`/design system`). Key principles:

- **Light-first com tema escuro opcional**: modo claro é o padrão; um toggle no header (`ThemeToggle.tsx`) grava `theme` no localStorage e seta `data-theme="dark"` no `<html>`. Os tokens de superfície/texto/borda são sobrescritos em `[data-theme="dark"]` no `globals.css`; um script inline no `layout.tsx` evita FOUC. Use sempre tokens (`--bg-page`, `--surface-card`, `--text-primary`, `--border-subtle`) em vez de cores fixas para superfícies claras.
- **Paleta**: cream `#f6f6f6`, preto `#151515`, charcoal `#2b2d2b`, vermelho `#bc0319`
- **Vermelho em seções inteiras**: CTA final (full-bleed) e cards de destaque usam vermelho sólido. O Hero é claro (bg da página), com a palavra-chave em vermelho.
- **Espaçamento de dobras**: todo padding vertical de seção usa `--section-pad` (clamp 48–72px); o gap entre header da seção e conteúdo usa `--section-gap`. Não usar `--space-9` direto em seções.
- **Header**: links do topbar em serif (`--font-serif`, Times New Roman) sublinhados; fundo do topbar segue `--bg-page`; logo troca automaticamente por CSS conforme o tema.
- **Botões**: apenas variantes `.button--*` do DS, texto sem setas (`→`/`↗`). Setas diagonais ficam reservadas para links (footer, "Ver case ↗").
- **Sem filtro P&B**: imagens (retrato, capas de portfólio) sem grayscale.
- **Cantos vivos**: `--radius-sm 2px`, `--radius-md 4px`, `--radius-lg 8px`. Pill reservado para badges/CTAs
- **Sem glassmorphism**: Sem blur, sem backdrop-filter, sem gradientes radiais
- **Sombras mínimas**: `--shadow-sm/md/lg` apenas para elevação funcional
- **Tipografia**: Neue Haas Grotesk Display. Display 900/700, corpo 400, eyebrows bold + tracking wide
- **Eyebrows**: Caixa alta com `/` prefix: `/SERVIÇO`, `/CONTATO`
- **Títulos com accent**: `<em>` renderiza em `--title-accent` (vermelho), sem itálico
- **Corpo justificado** em colunas largas
- **Pouca animação**: 120–180ms, sem bounce, sem parallax

---

## Architecture

```
app/
  globals.css       — entire style system (DS tokens + components)
  layout.tsx        — Neue Haas Grotesk local font, metadata
  page.tsx          — composes all sections in order
  contato/          — standalone contact page
  portfolio/        — portfolio grid + [slug] case pages

components/
  Nav.tsx           — fixed black bar navbar
  Hero.tsx          — red background hero, no 3D/Spline
  MetricsBar.tsx    — animated counter cards (IntersectionObserver)
  TrustBar.tsx      — dark bar with client logos
  Services.tsx      — 3 editorial cards, no blobs/liquid
  ProblemSolution.tsx — problem (black) vs solution (red) cards
  Process.tsx       — 4-step grid
  Reviews.tsx       — review cards with bento layout
  FAQ.tsx           — accordion with hairline borders
  FinalCTA.tsx      — black box CTA, no GlobeCanvas
  Footer.tsx        — black footer with /CATEGORY headings and ↗ arrows
  CustomCursor.tsx  — red pointer cursor
  VisitorFloater.tsx — FOMO floater
  portfolio/        — PortfolioGrid, ProjectCard, Lightbox, etc.

lib/
  data.ts           — all copy/content as typed exports
  portfolio.ts      — project data
```

---

## CSS conventions

**Design tokens** are in `:root` in `globals.css`, following the DS token files.

**Class naming**: BEM-like. Block (`service-card`), element (`service-card__title`), modifier (`service-card--featured`).

**Button variants**:
- `.button--primary` → red background
- `.button--secondary` → outlined black
- `.button--ghost` → transparent, hover gray
- `.button--inverse` → cream on dark sections

**Section structure pattern**:
```html
<section id="anchor" className="section">
  <div className="site-shell">
    <div className="section-header">
      <span className="section-kicker sr">Label</span>
      <h2 className="section-title sr">Title with <em>accent</em></h2>
      <p className="section-copy sr">Optional subtitle</p>
    </div>
    <!-- content -->
  </div>
</section>
```

---

## Key decisions & constraints

- **Copy stays in Portuguese** — do not translate or change tone
- **No 3D backgrounds** — SplineBackground, GlobeCanvas, MotionTrailsBg removed
- **No emoji** — use typographic markers or Lucide icons
- **No glassmorphism** — solid backgrounds only
- **Off-white, never pure white** — surfaces use `--surface-card` (#f6f6f6)
- **Pricing section disabled** — commented out in page.tsx
- **ScrollRevealInit** must stay in `page.tsx` for `.sr` elements
- **Nav logo**: `logo-black.png` no tema claro, `logo-white.png` no escuro (as duas são renderizadas e o CSS mostra uma por vez; `.topbar--dark` força a branca)
