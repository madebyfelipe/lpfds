# Plano — Página de Portfólio (madebyfelipe.com)

> **Para o agente implementador (Opus):** este documento é autossuficiente. Não é necessário
> acessar o Figma — toda a estrutura do protótipo já foi extraída e está mapeada abaixo.
> Siga o checklist da seção 9. Respeite o `CLAUDE.md` do projeto (BEM, tokens, pt-BR, dark theme).

---

## 1. Objetivo

Criar uma área de portfólio no site atual:

- **`/portfolio`** — página índice: grid de projetos com filtro por categoria.
- **`/portfolio/[slug]`** — página de case: hero, tagline, resultado antes/depois, imagens, statement, escopo, números e "próximo projeto".

Referência de layout: protótipo Figma Make (`9KYVKoGOfRWXCYLs6KeJWo`). A **estrutura e a hierarquia de informação** vêm do protótipo; a **estética inteira** (cores, fontes, containers, botões, cards) vem do site atual.

## 2. O que aproveitar × o que descartar do protótipo

### Aproveitar (estrutura/IA)
- Índice: título grande + subtítulo, régua divisória, **1 card destaque (featured) + grid 2 colunas** com os demais, filtro `Todos / Marca / Conteúdo`.
- Cards de projeto: imagem de capa com overlay no hover (número do índice, categoria em vermelho, nome do cliente, seta ↗), zoom sutil da imagem no hover.
- Case (ordem exata das seções):
  1. **Hero** — imagem de capa escurecida, categoria (kicker) + nome do cliente gigante.
  2. **Tagline** — parágrafo grande (frase-resumo do projeto).
  3. **Resultado** — bloco em painel: valor "antes" (apagado) → seta vermelha → valor "depois" (destacado), com labels.
  4. **Detalhe** — 1 imagem full-width (~60vh).
  5. **Série** — grid de 3 imagens aspect-ratio 4/5.
  6. **Aplicação** — grid 2 colunas: imagem + card escuro com legenda (mockup).
  7. **Statement** — seção de fundo claro invertido com frase de efeito gigante. *(adaptar: no nosso site pode ser painel `--panel` com título enorme, ou fundo claro mesmo — ver seção 6)*
  8. **Escopo** — duas colunas: "Escopo" (lista unida por " · ") e "Execução".
  9. **Números** — 3 métricas grandes lado a lado com divisórias verticais.
  10. **Próximo projeto** — banner clicável com imagem do próximo case.

### Descartar (estética do protótipo — NÃO trazer)
- Fonte `Inter Tight` → usar **Poppins** (já carregada) e as classes/escala tipográfica existentes.
- Vermelho `#e30613` → usar `var(--accent)` (#d42b2b) e variações.
- Fundo `#0d0d0d` / bloco `#222` → usar `var(--bg)`, `var(--panel)`, `var(--panel-soft)`.
- **Cursor customizado** (`cursor: none` + dot) → Implementar.
- Monograma "MF" no nav/footer → usar `Nav.tsx` e `Footer.tsx` existentes com `logo-white.png`.
- Scrollbar escondida, `body { cursor: none }`, estilos inline → tudo via `globals.css` com BEM.
- Navegação por estado SPA (`useState` view index/case) → usar rotas reais do App Router.
- Filtro **fixo no rodapé da tela** → conflita com o `whatsapp-fab` existente. Colocar os pills de filtro **inline, logo abaixo do header da seção** (alinhado ao padrão do site).
- Hooks próprios `useInView`/`RevealSection` → usar as classes `.sr` do `ScrollRevealInit` existente (GSAP + ScrollTrigger; o caso genérico `.sr` já cobre elementos novos).

## 3. Rotas e arquivos

```
app/
  portfolio/
    page.tsx            — índice (server component; grid com filtro é client)
    [slug]/
      page.tsx          — case (server component, generateStaticParams + generateMetadata)

components/
  portfolio/
    PortfolioGrid.tsx   — "use client": filtro (useState) + featured + grid de ProjectCard
    ProjectCard.tsx     — card com <Link> para /portfolio/[slug] (hover via CSS, sem JS)
    CaseSections.tsx    — (opcional) seções do case; se ficarem simples, deixar inline no page.tsx

lib/
  portfolio.ts          — tipos + array `projects` (fonte única de conteúdo)

public/
  portfolio/
    <slug>/cover.jpg, detail.jpg, serie-1.jpg, serie-2.jpg, serie-3.jpg, aplicacao.jpg

docs/
  como-adicionar-projeto.md  — guia de publicação (entregável obrigatório, ver seção 8)
```

Ambas as páginas renderizam: `<ScrollRevealInit />` + `<Nav />` + `<main>…</main>` + `<Footer />` (mesma composição de `app/page.tsx`).

`generateStaticParams` retorna os slugs de `lib/portfolio.ts`; slug inexistente → `notFound()`.

## 4. Modelo de dados (`lib/portfolio.ts`)

```ts
export type ProjectCategory = "Marca" | "Conteúdo";

export type Project = {
  slug: string;              // ex.: "alves-nabuco" — vira a URL
  client: string;            // "Alves & Nabuco"
  displayName: string;       // "ALVES\n& NABUCO" (quebra de linha do hero)
  category: ProjectCategory;
  tagline: string;           // frase-resumo (seção 2 do case)
  statement: string;         // frase de efeito (seção 7)
  scope: string[];           // ["Produção de conteúdo", "Google Ads", ...]
  result: { before: string; after: string; label: string }; // ex.: label "Alcance"
  numbers: { value: string; label: string }[];              // 3 itens
  images: {
    cover: string;           // /portfolio/<slug>/cover.jpg
    detail: string;
    series: [string, string, string];
    application?: string;    // se ausente, reusa detail
  };
  applicationCaption?: { kicker: string; text: string };    // card da seção Aplicação
};

export const projects: Project[] = [ /* ... */ ];
```

**Decisões:**
- **Sem `nextKey` manual** (o protótipo tinha): o "próximo projeto" é derivado da ordem do array (`projects[(i + 1) % projects.length]`). Adicionar projeto novo = 1 entrada no array + imagens, nada mais.
- A **ordem do array define a ordem do grid** — o primeiro item é o featured.
- Não misturar com `lib/data.ts` (que é da landing); arquivo próprio mantém o conteúdo isolado.

### Conteúdo inicial (copiar do protótipo — textos reais, imagens placeholder)

| slug | client | cat | tagline | statement | result | numbers |
|---|---|---|---|---|---|---|
| `alves-nabuco` | Alves & Nabuco | Marca | "Conteúdo jurídico e Google Ads para uma banca de direito tributário e trabalhista." | "Autoridade se constrói publicando." | 48K → 3.2M (Alcance) | 3.2M Impressões · +180% Leads qualificados · 12 Meses de parceria |
| `know-how-experience` | Know How Experience | Conteúdo | "Roteiros, copy e spot de TV para um evento de alto impacto." | "Evento memorável começa no roteiro." | 800 → 2.400 (Participantes) | 2.400 Participantes · 98% Satisfação · 4 Spots de TV |
| `turrex-midia-digital` | Turrex Mídia Digital | Conteúdo | "Conteúdo DOOH e educacional para LinkedIn." | "Dados falam. Conteúdo convence." | 12K → 1.8M (Alcance) | 1.8M Impressões DOOH · +340% Engajamento LinkedIn · 24 Peças produzidas |
| `apple-sale-br` | Apple Sale BR | Marca | "Social e campanha para varejo de eletrônicos." | "Produto premium exige campanha precisa." | 380K → 4.1M (Alcance) | 4.1M Alcance · +220% Vendas online · 6 Campanhas |

Escopos: alves = Produção de conteúdo · Google Ads · Posicionamento; knowhow = Roteiros · Copy · Spot de TV · Conteúdo institucional; turrex = Conteúdo DOOH · LinkedIn · Educacional; apple = Social media · Campanha.

**Imagens:** o protótipo usa Unsplash. **Não configurar `remotePatterns`** — criar `public/portfolio/<slug>/` e usar imagens locais. Se o Felipe ainda não forneceu as peças reais, gerar placeholders locais escuros simples (ou copiar temporariamente qualquer imagem já existente no repo) e deixar `TODO` claro no commit/resumo. Usar `next/image` com `fill` + `sizes` nos cards.

## 5. Integração com o site existente (mudanças em arquivos atuais)

1. **`lib/data.ts` — `navigationLinks`**: hoje os hrefs são âncoras puras (`#servicos`), que **quebram fora da home**. Alterar para `/#servicos`, `/#processo`, `/#planos`, `/#resultados`, `/#faq` e adicionar `{ href: "/portfolio", label: "Portfólio" }` (sugestão: entre "Resultados" e "FAQ"). Isso conserta Nav e Footer de uma vez, nas duas páginas novas e na home (na home, `/#x` continua funcionando como âncora).
2. **`components/Nav.tsx`**: `topbar__brand` tem `href="#"` — trocar para `href="/"` para voltar à home a partir do portfólio.
3. **`app/contato/page.tsx`**: o footer aponta para `https://madebyfelipe.com.br/cases` — atualizar para `/portfolio`. Adicionar em `next.config` um redirect permanente `/cases → /portfolio` (o link antigo pode estar publicado em bios/links externos).
4. **`globals.css`**: adicionar os novos blocos no fim do arquivo (ver seção 6). Não tocar nos tokens.

## 6. CSS — mapeamento protótipo → sistema do site

Tudo em `globals.css`, BEM, usando tokens existentes. Blocos novos: `portfolio-*` (índice) e `case-*` (case).

| Protótipo | Usar no site |
|---|---|
| `#e30613` | `var(--accent)` / `var(--accent-glow)` |
| `#0d0d0d` fundo | `var(--bg)` (já é o body) |
| `#222` blocos | `var(--panel)` / `var(--panel-soft)` |
| `rgba(245,244,240,0.4)` texto apagado | `var(--muted)` / `var(--soft)` |
| `rgba(245,244,240,0.08)` réguas | `var(--line)` |
| Inter Tight 900, tracking -0.04em | Poppins 800 (peso máximo carregado), `letter-spacing: -0.03em` |
| labels uppercase 0.65rem | padrão `.section-kicker` existente (tem a linha vermelha via `::before`) |
| border-radius 3px | usar o radius padrão dos cards do site (verificar valor usado em `.service-card` e repetir) |
| animações `revealUp/fadeIn` próprias | classes `.sr`, `.sr-left`, `.sr-right` + `ScrollRevealInit` |

**Diretrizes por bloco:**
- **Índice** (`portfolio-hero`, `portfolio-filter`, `portfolio-grid`, `project-card`): seguir o pattern de seção do site (`.section` > `.site-shell` > `.section-header`). Título do hero pode ser maior que `.section-title` (clamp até ~7rem) — é a identidade da página. Filtro: pills reutilizando a base visual de `.button--ghost` com estado ativo `--accent` (novo modificador, ex.: `portfolio-filter__pill--active`).
- **`project-card`**: `position: relative; overflow: hidden` + o **polish pattern** do CLAUDE.md (`::before` com radial-gradient vermelho). Hover 100% em CSS (`:hover` escala a imagem via `transform`, revela overlay via `opacity`) — sem estado React.
- **Case**: alturas de hero/imagens iguais às do protótipo (hero ~85–90vh, detalhe ~60vh, próximo ~55vh). Para a seção **Statement** (fundo claro no protótipo): implementar com fundo claro (`var(--text)` como bg, `var(--bg)` como cor do texto) — é o único bloco claro do site e cria o contraste intencional do protótipo. Se destoar demais visualmente, alternativa aprovada: `--panel` + texto enorme com `em` em `--accent`.
- **Responsivo**: grids viram 1 coluna e a linha de números empilha em `max-width: 768px` (seguir os breakpoints já usados no arquivo).

## 7. Animações

- Incluir `<ScrollRevealInit />` no topo das duas páginas novas (é `"use client"`, roda por montagem de rota — funciona igual à home; o seletor genérico `.sr` cobre os elementos novos, e os seletores específicos da landing simplesmente não encontram nada).
- Marcar com `.sr` os headers, cards e seções do case; `.sr-left`/`.sr-right` onde fizer sentido (ex.: antes/depois do resultado).
- O hero do case pode ganhar animação de entrada só com CSS (`@keyframes` já que roda no load, sem scroll) — evitar mexer no `ScrollRevealInit`.

## 8. Documentação de publicação (entregável obrigatório)

Criar **`docs/como-adicionar-projeto.md`** com o passo a passo:

1. Criar a pasta `public/portfolio/<slug>/` com as imagens nos nomes/formatos esperados (listar dimensões recomendadas: cover 1400×900, detail 1400×800, série 600×750 [4:5], aplicação 800×600 [4:3]).
2. Adicionar 1 objeto ao array `projects` em `lib/portfolio.ts` — incluir um **template comentado copiável** com todos os campos.
3. Explicar: ordem do array = ordem do grid (1º = destaque); "próximo projeto" é automático; categoria deve ser `"Marca"` ou `"Conteúdo"` (adicionar categoria nova = editar o type + array de opções do filtro).
4. Checklist de conferência: `npm run dev`, abrir `/portfolio`, testar filtro, abrir o case novo, conferir mobile.

## 9. Checklist de implementação (ordem sugerida)

1. [ ] `lib/portfolio.ts` — tipos + 4 projetos seed (dados da tabela acima).
2. [ ] Placeholders de imagem em `public/portfolio/<slug>/`.
3. [ ] Ajustes em arquivos existentes (seção 5): `navigationLinks`, `Nav.tsx` brand, contato, redirect `/cases`.
4. [ ] CSS do índice em `globals.css` (`portfolio-*`, `project-card`).
5. [ ] `components/portfolio/ProjectCard.tsx` + `PortfolioGrid.tsx` + `app/portfolio/page.tsx` (com `metadata`).
6. [ ] CSS do case (`case-*`).
7. [ ] `app/portfolio/[slug]/page.tsx` com todas as 10 seções, `generateStaticParams`, `generateMetadata` (título: `"<Cliente> | Portfólio — Made by Felipe"`), `notFound()`.
8. [ ] `docs/como-adicionar-projeto.md`.
9. [ ] Verificação: `npm run build` sem erros; navegar home → portfólio → case → próximo projeto → voltar; testar filtro (inclusive categoria vazia — manter o estado "Nenhum projeto nesta categoria."); testar âncoras do nav a partir de `/portfolio`; conferir mobile (~390px).

## 10. Fora de escopo (não fazer agora)

- CMS ou markdown por projeto — o array tipado basta e segue o padrão do `data.ts`.
- Vídeos nos cases (o protótipo menciona "vídeo disponível no portfólio completo" — manter como card de legenda).
- Tracking/pixel nos cards (avaliar depois; a landing já tem `fbq` no Nav como referência se for pedido).
- Alterar qualquer coisa da landing além dos 3 ajustes da seção 5.
