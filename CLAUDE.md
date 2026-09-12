# Made by Felipe — Landing Page

## ⚠️ PRIORIDADE MÁXIMA — respeitar o design system

**Antes de escrever qualquer CSS ou componente novo, leia esta seção.** Nada
neste projeto entra fora do design system da marca — nem um banner de
consentimento, nem uma página de política, nem um aviso de erro. Uma peça
"funcional" desenhada por fora é regressão, mesmo que funcione.

**Os tokens são a fonte da verdade. Nunca escreva um valor cru** (`#333`,
`16px` de raio, uma sombra inventada) quando existe token. Se não existe
token para o que você precisa, **crie o token** junto dos outros, com um
comentário dizendo por que ele existe — não espalhe o literal pelo arquivo.

**Paleta** (`app/institucional.css`, declarada em `.inst, .inst-nav, .inst-footer`):
cream `#f6f6f6`, black `#151515`, red `#bc0319` / `--red-dark` `#8f0313`,
rampa `--gray-100…--gray-700`. São quatro cores. Não invente uma quinta.

**Três tokens de vermelho, e cada um tem um trabalho:**

| token | onde | por quê |
|---|---|---|
| `--red` | **preenchimento** (fundo de botão, faixa `.inst-red`, barra de progresso) | é o vermelho da marca |
| `--red-ink` | **tinta** (texto, traço de SVG, sublinhado, anel de foco) | `#bc0319` sobre preto rende 2.75:1; sobre superfície escura ele clareia para `#ef4358` |
| `--on-red` | **texto em cima do vermelho** | fixo `#f6f6f6` nos dois temas — o vermelho é a única cor que **não** inverte, então usar `--cream` aqui pinta texto preto sobre vermelho no tema escuro |

O hub tem o mesmo par: `--accent` (preenchimento) e `--accent-ink` (tinta,
`#f0566a` nos blocos escuros).

**Forma** — o site institucional é duro, não arredondado:
- raio **2px** em botões, campos e caixas. **Nunca pílula** (`999px`) e nunca 12/16px.
  (O `/hub` é a exceção declarada: ele tem estética própria, com `--radius-pill`.)
- botão: `padding: 16px 32px`, `14px / 700 / 0.04em`, **caixa alta**.
- kicker: `12px / 700 / 0.16em`, caixa alta, `--gray-500`, precedido de `— `.
- link de texto: `.inst-link` (cor + filete de 1px), não sublinhado do UA.
- CTA de seção: texto + `border-bottom: 2px solid var(--red-ink)`, sem caixa.

**Tipografia**: só **Neue Haas Grotesk Display**, dos TTFs em `public/fonts/`.
Só ficam no repositório os pesos que algum `@font-face` declara — não
adicione arquivo de fonte que ninguém usa (é tipografia licenciada exposta
publicamente à toa).

**Tema escuro**: a inversão troca os *papéis* de `--cream` e `--black`. Toda
cor nova precisa funcionar nos dois. Regra prática: se você escreveu
`rgba(246, 246, 246, …)` ou `rgba(21, 21, 21, …)` direto numa regra, provavelmente
deveria ser um token (`--line-inverse`, `--nav-bg`, `--on-red`) — senão não
inverte. Exceção: o que fica **sobre o vermelho**, que nunca inverte.

**Contraste é parte do design system, não um extra.** Mínimo 4.5:1 em texto e
3:1 em elemento gráfico, **nos dois temas**. O projeto está em zero violações
do axe-core (WCAG 2.1 AA) — mantenha assim. Para conferir, veja
"Verificação" mais abaixo.

**Componente novo, checklist:** usa token de cor? raio 2px? rótulo em caixa
alta com o tracking certo? funciona nos dois temas? passa contraste nos dois?
foco visível? Se qualquer resposta for "não", ainda não está pronto.

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
| `/metodologia` | `app/(institucional)/metodologia/page.tsx` | — (novo, sem paralelo no protótipo) |
| `/projetos` | `app/(institucional)/projetos/page.tsx` | `isProjetos` (hub de portfólio) |
| `/imersao` | `app/(institucional)/imersao/page.tsx` | `isContato` |

The prototype's contact view lives at **`/imersao`**, not `/contato` — `/contato` is a
satellite of `/hub` (shares `hub.css`, linked from `HubProducts`) and must not be touched.

The prototype's `isProjeto` view was **not** ported: by Felipe's call, a cover in
`/projetos` opens the existing rich case at `/portfolio/[slug]`. `/projetos` is the hub,
`/portfolio/[slug]` is the case — don't add a second case layout under `/projetos`.

**Case chrome**: `/portfolio/[slug]` keeps its old dark **body** but wears the new
`InstNav` + `InstFooter`. That's why `app/institucional.css` declares the design tokens on
`.inst, .inst-nav, .inst-footer` (not `.inst` alone) and keeps `background`/`min-height`
on `.inst` only — the nav and footer have to work standalone, outside the light wrapper,
without repainting the dark case. The case page imports `institucional.css` directly,
since it sits outside the `(institucional)` route group. Don't wrap the case in `.inst`:
sticky positioning would break and the dark body would turn cream.

**Styling**: `app/institucional.css`, everything scoped under `.inst`, so the dark
`globals.css` (still applied by the root layout) can't leak into it and vice-versa.
Tokens are the Made by Felipe design system: cream `#f6f6f6`, black `#151515`,
red `#bc0319`, gray ramp `#ececec…#454545`. Font is **Neue Haas Grotesk Display**,
`@font-face`-declared from the TTFs already in `public/fonts/`. Class naming is
`inst-block__element--modifier`. The prototype is desktop-only; the responsive rules
at the bottom of the file are additions, not part of the approved design.

**Content**: `lib/institucional.ts` holds the copy transcribed verbatim from the
approved copy doc (steps, deliverables, depoimentos, agenda, social). **Do not rewrite
it** — it is approved copy. The portfolio is *not* duplicated there: `/projetos` reads
`lib/portfolio.ts`, the single source of truth shared with the `/portfolio` case pages.

**ICP (agosto/2026)**: the site no longer speaks to law firms — it speaks to
**consultórios de psicologia**. Headline is "dois dias de imersão", compliance line is
the *artigo 20 do Código de Ética Profissional do Psicólogo* (it replaced "Provimento
205 da OAB"), the studio block reads receita/carteira/valor de sessão/ocupação de
agenda, and the `/imersao` form asks **Nome · CRP · WhatsApp** (CRP replaced
"Escritório"). `Naming` was removed from `deliverables` on purpose: artigo 20 requires
the divulgação to carry nome completo, título and CRP, and nome fantasia depends on a
registered PJ — naming is an optional, case-by-case item, not a listed deliverable.
O `/hub` fala a mesma oferta, nesta ordem: a primeira dobra é o `HubHero` (`/A IMERSÃO`,
"Dois dias com você. Quarenta e cinco dias no ar.") e o bloco de
fechamento é o `HubBio` (`/QUEM FAZ`, bio em terceira pessoa: estrategista de marca,
7 anos de mercado, 150+ projetos, hoje atende psicólogos e clínicas). Os dois já foram
o inverso disso; não trocar de volta nem voltar para a copy genérica de branding.

**Oferta e método (setembro/2026)**: a oferta passou de "meio dia / 30 dias" para
**dois dias de imersão / 45 dias no ar** — Felipe adaptou os números ao escopo real do
método PSIQUE. Trocar esses números em qualquer superfície é regressão; eles vivem no hero
e na metadata da home, na metadata do `/imersao`, no `HubHero` e nas referências
numéricas dos `depoimentos`. **Preço continua fora do site** (a decisão de segurar o
preço, abaixo, segue valendo). A antiga dobra "Como funciona" da home (3 passos: Imersão
→ Território → Sistema) foi **substituída** por um **teaser gráfico** do método PSIQUE
(ainda em `id="processo"`, que o `/hub` linka): `methodIntro` + o diagrama
`MetodologiaFlow` + link "Ver o método completo →" para **`/metodologia`**.

**Método PSIQUE** (o nome era NAVE; virou PSIQUE por ressoar com o ICP de psicologia —
a tese "branding é tradução, não invenção" e a hipótese "o posicionamento nasce de
investigar áreas" continuam). São **seis áreas** (export `positioning`, `.inst-nave` em
3 colunas): **P**rática (o negócio), **S**ujeito (audiência), **I**nquietação (a
necessidade por trás da busca), **Q**ualidade (proposta de valor vs concorrência),
**U**niverso (contexto/canais), **E**stória (origem/crenças/personalidade). No diagrama
`MetodologiaFlow` elas viram um **hexágono** (não mais o quadrado de 4).

**`/metodologia`** (página dedicada, na `InstNav`) — três blocos com tratamentos visuais
**distintos de propósito** (uma versão empilhava dois grids de cards e confundia):
(1) `MetodologiaFlow` — o fluxo Estratégia → Identidade → Comunicação; (2) **O
posicionamento** numa seção `.inst-dark` — as seis áreas P-S-I-Q-U-E como cards de letra
grande (`.inst-nave`); (3) **O processo** numa seção cream — o diagrama `LinhaTempo` + os
**oito passos** como **lista numerada** (`.inst-proc`, nº · passo · descrição, agrupada
nas duas etapas Estratégia/Identidade, export `process`), **não** outro grid de cards.
Copy adaptada ao ICP de psicologia e ao escopo de 45 dias — **não** é a copy genérica B2B
do deck-fonte (`Modelo_Proposta_Comercial.pdf`).

**Diagramas** (`components/institucional/MetodoDiagrams.tsx` — server components):
`MetodologiaFlow` são **três peças SVG** (hexágono do posicionamento · venn de identidade ·
buquê de pontos de contato) num flex — **linha no desktop, coluna no mobile** (`.inst-flow`),
cada `<svg>` cabe na coluna, então **não há scroll lateral**. O buquê tem os círculos
**encavalados** (sobrepostos), fiel ao deck — não espaçados. `LinhaTempo` é a timeline
larga (`.inst-diagram--timeline`): **some no mobile** (a lista `.inst-proc` logo abaixo já
carrega os oito passos na vertical); no desktop rola em `overflow-x:auto` se faltar espaço.
São SVG de linha em `currentColor` + `var(--red)`, então **invertem com o tema**; o disco
central (`.inst-flow__disc`) tem override sob `.inst-dark`. Se editar coordenadas, dá para
rasterizar o SVG com `sharp` (já é dep) e conferir o layout antes de subir.
`depoimentos` are studio clients talking about the *design service*; never write one
that mentions atendimento, caso clínico or resultado de terapia. Same rule for the hero
strip: no image suggesting a session, a patient, or a couch. The copy doc's
"Investimento" block (preço na página) and its dark `#0d0d0d`/`#e30613` palette note
were **not** applied — Felipe held the price until it is defined, and the design system
(cream/black/`--red` + theme toggle) stays as is.

**Hero strip**: `heroStrip` in `lib/institucional.ts` → `public/institucional/hero/0N.jpg`,
seis fotos reais do Felipe (o protótipo desenhou oito células estáticas).
Optimized with sharp from the gitignored `fotos Felipe/` — `.rotate()` matters, one
source carries EXIF orientation 6. They render **in full colour** (the prototype's
grayscale filter was removed on request) at `quality={90}`, which is why
`next.config.ts` has to allowlist it in `images.qualities`. Cells 1 and 3 are capped by
their originals (693px and 1080px wide) — no re-export will sharpen them.

A faixa é um **carrossel contínuo**, não um grid: `.inst-strip__track` roda até
`translateX(-50%)` em loop, e por isso `page.tsx` renderiza a lista **duas vezes** (a 2ª
cópia é `inst-strip__cell--dup`, `alt=""` + `aria-hidden`). O loop só fecha sem salto
porque a célula tem **largura fixa** (`25vw`, `45vw` no mobile) — trocar por `flex: 1`
quebra a conta. As imagens são **`loading="eager"`**: as células nascem fora da viewport
e só entram nela pelo `transform` do trilho, que o lazy-load nativo não enxerga — no
lazy, a última foto ficava em branco para sempre. Hover pausa; `prefers-reduced-motion`
desliga a animação, esconde a 2ª cópia e devolve o scroll manual. Diferente da galeria
dos cases, **o touch não desliga a animação**: lá os itens abrem o lightbox e sem hover
não há como pausar antes de mirar, aqui são fotos decorativas, sem alvo de clique.

**Theme toggle**: `InstThemeToggle` in the nav writes `data-inst-theme="dark"` on
`<html>` (not on a wrapper — the nav also renders on case pages, outside `.inst`) and
persists to `localStorage["inst-theme"]`. The root layout carries an inline `<script>`
that applies it before paint; without it the page flashes light. Dark mode swaps the
*roles* of the four brand colours (`--cream` becomes the ink, `--black` the surface), so
`.inst-dark` sections flip to light and the alternating rhythm survives. Any new
hardcoded `rgba(246,246,246,…)` on a `.inst-dark` surface must become a token
(`--line-inverse`, `--line-inverse-strong`, `--nav-bg`) or it won't invert. Values sitting
on `.inst-red` stay hardcoded — the red never inverts.

**Nav (padronizada em todo o site)**: `InstNav` is the single header — home,
`/metodologia`, `/projetos`, `/imersao`, `/portfolio/[slug]` **and `/hub`**. The old `HubHeader` was
deleted; `/hub` imports `institucional.css` alongside `hub.css` and renders `<InstNav />`
**outside** the `.hub` wrapper (that wrapper has `overflow-x: clip` for the deck's
full-bleed, which would scope the nav's `position: sticky`). Because the nav's toggle
writes `data-inst-theme` on `<html>`, `hub.css`'s dark block answers to **both**
`.hub[data-theme="dark"]` (still set by `/contato`'s own inline header, the last user of
`components/hub/ThemeToggle.tsx` and of the `.hub-header*` rules) and
`:root[data-inst-theme="dark"] .hub`.

**Nav no mobile (≤720px)**: the links leave the bar and become a panel opened by a
burger (`inst-nav__burger`, three bars that cross into an X). `InstNav` is stateful —
`data-open="true"` on the `<nav>` drives the panel, Esc closes it, and a route change or
a link click resets it. The theme toggle stays visible in the bar (`inst-nav__end`),
never inside the panel. On desktop the burger is `display: none` and
`inst-nav__links { margin-left: auto }` keeps links + toggle flush right — the nav has
three children now, so `justify-content: space-between` would centre the links.
`--inst-pad: 24px` at ≤900px is declared on `.inst, .inst-nav, .inst-footer` because the
nav and footer also render outside `.inst`.

**Clientes**: the prototype's client-logo section was **dropped from the home** at
Felipe's request. Don't reinstate it.

**`/projetos` layout** follows the manifesto-branding reference Felipe supplied, not the
prototype's full-bleed stack: a small "Projetos" label, cards inside the 1200px column
with a 12px gap and `aspect-ratio: 3 / 1`, and on hover the whole card becomes a solid
`--red` panel with scope → client → tagline → "Ver projeto →" pinned to the bottom.
Touch devices (`hover: none`) get `inst-project__caption` instead, since the panel would
never appear — keep both in sync when adding fields.

**Anchors the home must keep**: `/hub`'s "Como trabalho" card links to `/#processo`
(Como funciona), and `/#servicos` (Entregas) is still linked from bios/externos. Those
ids live on the institutional home — removing them breaks those links. `lib/data.ts`'s
`navigationLinks` was likewise repointed at the new routes, since the old home's section
anchors no longer exist.

**Untouched by this port**: `/contato` and `/portfolio` (the old dark grid, still linked
from `/hub`'s "Trabalhos" card — `components/Nav.tsx` and `components/Footer.tsx` now
exist only for it). `/hub` keeps its content and its own body/footer; only its desktop
footer/deck full-bleed padding was fixed (the content used to stretch to 100vw instead of
the hub column) and its header was swapped for `InstNav` (see "Nav" above).
The institutional footer carries a backlink to `/hub`.

---

## Newsletter + e-book (portão de download)

O antigo produto **"Social Kit"** do deck do `/hub` virou o **e-book de construção de
marca para psicólogos** (card `/E-BOOK`, `href="#ebook"` → seção `HubMedia`). O download
é **gated**: só quem assina a newsletter recebe o link.

- **`lib/newsletter.ts`** — fonte única: `ebook` (título, `id` mandado ao CRM e a URL do
  mirror, hoje `file.madebyfelipe.agency/api/shares/ebook/files/…`) e o helper cliente
  `subscribe()`. A URL do mirror **nunca** é renderizada antes do opt-in — ela chega na
  resposta da API, então não vaza no HTML do `/hub`.
- **`app/api/newsletter/route.ts`** — rota de servidor (a única do projeto). Valida o
  e-mail e dispara em paralelo para **Twenty** (`crm.madebyfelipe.agency/webhooks/workflows/…`)
  e **Make** (automação antiga de e-mail). Basta **um** dos dois aceitar para o cadastro
  valer e o `download` voltar. Motivo: o webhook do Twenty responde
  `400 INVALID_WORKFLOW_STATUS` enquanto o workflow não estiver **ativado** no workspace —
  sem esse fallback, um workflow desativado derrubaria o e-book inteiro. O workflow no
  Twenty é o `email_listing_hub`; quando ativo, responde
  `{"success":true,"workflowRunId":…}`. O trigger de webhook do Twenty **não** tem
  "escuta" como o Make: o schema se define à mão em *Define expected body* (colar o JSON
  de exemplo e salvar), e os campos viram `{{trigger.body.email}}` nos passos seguintes.
- **Dois workflows no Twenty, escolhidos pelo `source`**: `hub-ebook` vai para o webhook
  de **entrega** (e-mail com o link) e qualquer outra origem vai para o de
  **confirmação** (só o “você está na lista”). O payload do caminho de confirmação não
  carrega `product`/`productTitle`/`downloadUrl`, e a rota só devolve `download` no
  caminho do e-book — o mirror não vaza para quem só assinou a newsletter. A origem é
  validada contra `newsletterSources` (`isNewsletterSource`): string livre vinda do
  cliente não consegue pedir o e-book. A URL do trigger é
  `/webhooks/workflows/{workspaceId}/{workflowId}`: o **primeiro** UUID é o workspace e
  é o mesmo em todos os workflows daqui — quem identifica o workflow é o **segundo**.
- O **Make** recebe os dois caminhos (ele é o fallback que segura o cadastro quando o
  workflow do Twenty está desativado). Se o cenário do Make ainda mandar o e-book, ele
  precisa ramificar no `source` — senão quem assina a newsletter recebe o e-book por lá.
- **`components/hub/EbookModal.tsx`** — o portão é um **modal**, e é a única superfície do
  hub com formulário. O card `/E-BOOK` do deck e o botão da seção `HubMedia` só chamam
  `openEbookModal()` (evento `mbf:ebook-open` no `window`, para não passar estado entre
  componentes irmãos). `/hub#ebook` também abre o modal, para os links externos antigos.
  Quem já assinou tem o link guardado em `localStorage["mbf-ebook-download"]` e reabre
  direto no download.
- O card do e-book é o único do deck com `href: null` — ele renderiza `<button>` no lugar
  do `<Link>`, por isso o reset `button.hub-card-ref__pill-btn` no `hub.css`.
- O modal pede **nome e e-mail**; a rota parte o nome em `firstName`/`lastName` no
  payload (o *People* do Twenty tem os dois campos separados). O nome é opcional na rota
  porque o `EmailPopup` da landing só pede e-mail.
- Os componentes (`HubMedia`, `EmailPopup`) não conhecem mais nenhuma URL de webhook —
  chamam `subscribe({ email, name, source })`. Ao adicionar um novo formulário, use o mesmo helper e
  registre a origem em `NewsletterSource`.
- `EmailPopup` não está montado em nenhuma página hoje (código dormente), mas já usa a rota.

---

## Form da imersão (`/imersao`) — disparo por e-mail

O `ImersaoForm` (Nome · CRP · WhatsApp) era decorativo: o submit só trocava o texto de
status. Hoje ele envia de verdade.

- **`lib/imersao.ts`** — fonte única: destinatários (`IMERSAO_TO` = `alo@madebyfelipe.com.br`,
  `IMERSAO_BCC` = cópia oculta), a validação `validateImersao()` compartilhada pelos dois
  lados e o helper cliente `requestImersao()`.
- **`app/api/imersao/route.ts`** — segunda rota de servidor do projeto. Manda o e-mail por
  **SMTP do próprio domínio** (`smtp.hostinger.com:465`, o e-mail é Hostinger — MX
  `mx1/mx2.hostinger.com`), autenticado como a **mesma caixa que recebe**: por isso o
  `From` é legítimo e não esbarra em SPF/DKIM. O CCO vai no campo `bcc` do nodemailer, que
  não escreve cabeçalho — o destinatário do `To` não vê a cópia. O corpo tem versão texto e
  HTML (paleta do site) com botão "Responder no WhatsApp" montado a partir dos dígitos do
  telefone (assume `+55` quando vier sem DDI). Todo valor digitado passa por `escapeHtml`.
- **Credenciais** ficam em `.env.local` (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
  `SMTP_PASSWORD`), com molde em `.env.example`. O `.gitignore` não ignorava `.env*` —
  passou a ignorar. **Replicar as variáveis no painel da hospedagem**, senão a rota responde
  `500 smtp_unconfigured` em produção.
- Sem SMTP configurado ou com falha de envio, o form mostra erro e manda para o WhatsApp —
  **nunca** exibe a confirmação sem ter enviado. Esse era o comportamento antigo e é
  exatamente o que não pode voltar.
- O form **não pede e-mail**, então não há `replyTo`: o retorno é pelo WhatsApp. Se um dia
  entrar campo de e-mail, ligue-o ao `replyTo` da rota.

---

## Conformidade legal, consentimento e acessibilidade

Passagem feita sobre o site inteiro cobrindo privacidade, cookies, direitos do
consumidor e WCAG. O que está aqui não é opcional — é o que segura o site
dentro da LGPD, do CDC e do WCAG 2.1 AA. Mexer em qualquer um destes pontos
sem entender o porquê reintroduz um problema legal.

### Páginas legais

Quatro rotas em `app/(institucional)/`, todas usando a casca
`components/institucional/LegalPage.tsx`:

| rota | o que cobre |
|---|---|
| `/privacidade` | LGPD: o que é coletado em **cada um dos três formulários**, base legal, operadores, prazos, direitos do art. 18 |
| `/cookies` | inventário de cookies + o painel `CookiePreferencias`, que troca a decisão |
| `/termos` | uso do site, propriedade intelectual do portfólio, como o contrato nasce |
| `/reembolso` | arrependimento do art. 49 do CDC, cancelamento pró-rata por etapa, art. 20 |

**`lib/legal.ts` é a fonte única** dos dados de identificação (razão social,
CNPJ, endereço, e-mail, data de atualização) e da lista de rotas legais, que os
dois rodapés e o `sitemap.ts` consomem. `identificacaoLinhas()` **omite a linha
do campo vazio** em vez de imprimir rótulo sem valor — por isso um dado que
falta não vaza como "CNPJ: " na página.

> **PENDENTE:** `empresa.razaoSocial`, `empresa.endereco.logradouro`, `.numero`
> e `.cep` estão vazios. O CNPJ (`68.121.518/0001-17`, Dazz Marketing, Curitiba)
> foi confirmado pelo Felipe e tem dígito verificador válido; o resto não foi
> possível consultar. Preencher em `lib/legal.ts` — as páginas passam a exibir
> sozinhas.

### Consentimento de cookies (o ponto mais delicado)

**Antes: o Meta Pixel disparava no `load`, direto no `layout.tsx`.** Rastreava
sem perguntar, o que a LGPD não permite (art. 7º, I). Hoje:

- **`lib/consent.ts`** — fonte única. `getConsent()` devolve `null` para quem
  não decidiu **e para decisão vencida** (TTL de 365 dias). O padrão é **recusa,
  nunca aceite tácito**.
- **`components/CookieConsent.tsx`** — exporta `useConsent()` (o hook que os
  outros componentes usam), `MetaPixel` (só monta o `<Script>` com aceite, então
  sem aceite o `fbevents.js` **nem é baixado**), `CookieConsent` (o banner) e
  `CookiePreferencias` (o painel da `/cookies`).
- **`HubSocial`** — os embeds de TikTok e Instagram também estão atrás do
  aceite; sem ele entra `EmbedBloqueado`, com link para a plataforma.
- **Recusar tem o mesmo peso visual de aceitar.** Banner que esconde a recusa
  não colhe consentimento livre. Não "simplifique" isso para um botão só.

Verificado: com `denied` ou sem decisão, **zero** requisições para
facebook/tiktok/instagram; com `granted`, as três aparecem.

### Consentimento nos formulários

Os quatro formulários pedem aceite explícito, **validado também no servidor**
(o cliente pode ser contornado):

- `ImersaoForm` → `validateImersao()` exige `consentimento === true`; a rota
  registra o aceite no corpo do e-mail (prova do art. 8º, § 2º).
- `EbookModal`, `HubMedia`, `EmailPopup` → `SubscribeInput.consent` é
  **obrigatório no tipo**, e `/api/newsletter` responde `400 consent_required`
  sem ele. Formulário novo que chame `subscribe()` não compila sem passar por
  uma caixa de seleção — que é exatamente a intenção.
- `DiagnosticoForm` já tinha o aceite; ganhou o link para a política (aceite
  sem saber a que se refere não é informado).

### Provas sociais e alegações

- **Depoimentos anonimizados**: nome e CRP saíram de `lib/institucional.ts`.
  Registro profissional é identificação direta e não precisa aparecer num
  anúncio. Para voltar a nomear, é preciso autorização escrita da titular.
- **`metrics` e `floatingProofs` (`lib/data.ts`) foram esvaziados** — "200+
  projetos", "1M+ impressões" e falas atribuídas a @ de Instagram não tinham
  origem verificável. Os componentes que os consumiam são código dormente. Ler
  o comentário no arquivo antes de repovoar.
- O JSON-LD não afirma mais "mais de 150 projetos": dado estruturado é lido
  pelo Google como fato da entidade.

### Acessibilidade

- **Contraste**: `--gray-500` (claro) e `--gray-300` (escuro) subiram para
  `#696969`; `--soft` do `globals.css`/`hub.css` foi reforçado; nasceram
  `--red-ink`, `--on-red` e `--accent-ink` (ver a seção de design system).
  **Bug corrigido:** no tema escuro a faixa de depoimentos, o botão de envio e
  o painel de hover dos projetos ficavam com texto preto sobre vermelho
  (2.75:1), porque `--cream` invertia e o vermelho não.
- **Bug corrigido:** os filtros do `/portfolio` vinham com o cromo padrão do
  navegador (fundo `buttonface`, cinza `#6b6b6b` sob `color-scheme: dark`) — o
  reset global de `button` só ajusta `font` e `cursor`.
- **Bug corrigido:** o campo da newsletter do hub tinha `color: var(--text)`
  sobre fundo branco fixo — texto invisível (1.1:1) no tema escuro.
- **Teclado**: os grupos de opção do diagnóstico viraram `role="radiogroup"`
  com **roving tabindex** (um ponto de Tab, setas navegam, Home/End). O CSS
  casa com `[aria-checked="true"]`, não mais `aria-pressed`.
- Link "pular para o conteúdo" no `InstNav` (todo `<main>` tem `id="conteudo"`);
  foco preso no modal do e-book e no lightbox; erro de formulário com
  `role="alert"` e foco no campo que faltou; rótulos de botão que se bastam
  fora do contexto visual.

### Verificação

Não confie na leitura do diff — estas coisas quebram em silêncio. Com o site
rodando (`npm run build && npm run start`):

- **axe-core** (WCAG 2.1 AA) nas 10 rotas × 2 temas, mais os estados que não
  aparecem no carregamento (banner aberto, modal, erro de validação):
  **estava em 0 violações**. Qualquer número acima disso é regressão.
- **Consentimento**: carregar `/hub` com `mbf-consent` em `denied` e conferir
  que nenhuma requisição sai para facebook/tiktok/instagram.
- O `pkill` do servidor e o `npm run start` precisam ir em chamadas separadas
  neste ambiente, senão o processo novo morre junto.
