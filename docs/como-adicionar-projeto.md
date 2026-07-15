# Como adicionar um projeto ao portfólio

Publicar um novo case é **um objeto no array + uma pasta de imagens**. Nenhum
componente precisa ser alterado.

A página de case (`app/portfolio/[slug]/page.tsx`) é **uma estrutura única de
dobras**: as obrigatórias existem em todo case, e as opcionais só aparecem
quando o campo correspondente está preenchido no objeto. Um cliente com linha
editorial + marca + site usa todas; um cliente só de conteúdo usa o mínimo.

| # | Dobra                | O que mostra                                   | Ativada por                       |
| - | -------------------- | ---------------------------------------------- | --------------------------------- |
| 1 | **Hero**             | Capa full-screen + nome gigante                | sempre (`images.cover`, `displayName`) |
| 2 | **Tagline**          | Frase-resumo do projeto                        | sempre (`tagline`)                |
| 3 | **Galeria**          | Faixa automática com as peças (marquee)        | sempre (`gallery` ou `detail`+`series`) |
| 4 | **Statement**        | Frase de efeito em tipografia display          | sempre (`statement`)              |
| 5 | **Escopo e Execução**| Duas colunas: entregas · como foi feito        | sempre (`scope`, `execution`)     |
| 6 | **Sobre o projeto**  | Narrativa em parágrafos + foto opcional        | opcional (`about`, `aboutImage`)  |
| 7 | **O site, ao vivo**  | Janela de navegador navegável com o site real  | opcional (`website`)              |
| 8 | **Apresentação**     | O projeto completo (prancha ou grid de peças)  | opcional (`presentation`)         |
| 9 | **Próximo projeto**  | Encadeamento para o case seguinte              | sempre (automático)               |

Exemplo real com todas as dobras: `alves-nabuco` (linha editorial + marca +
site institucional em um único case).

---

## 1. Preparar as imagens

Crie a pasta `public/portfolio/<slug>/` (o `<slug>` é o identificador da URL,
ex.: `alves-nabuco`) com:

| Arquivo               | Uso no case                                  | Recomendação        |
| --------------------- | -------------------------------------------- | ------------------- |
| `cover.jpg`           | Capa (grid + hero + "próximo projeto")       | 1400 × 900 (~3:2)   |
| `posts/post-01.jpg`…  | Peças da Galeria e/ou da Apresentação em grid | proporção livre     |
| `sobre.jpg`           | Foto da dobra "Sobre o projeto" (opcional)   | retrato ~3:4        |
| `apresentacao.jpg`    | Prancha única da Apresentação (opcional)     | largura 1600        |
| `pagina-*.png`        | Capturas full-page do site (opcional)        | largura ~1920, página inteira |

Notas:

- `.jpg` ou `.png` funcionam — o caminho completo fica no objeto (passo 2),
  então basta bater com o que você escreveu lá.
- As peças em `posts/` seguem a numeração `post-01`, `post-02`… — o helper
  `posts(slug, quantidade)` em `lib/portfolio.ts` gera os caminhos.
- As capturas `pagina-*.png` devem ser da **página inteira** (topo ao rodapé) —
  é a altura delas que cria a rolagem dentro da janela de navegador.
- As dimensões reais de todas as imagens são lidas em **build time**
  (`lib/image-size`) — não é preciso declarar largura/altura de nada.

---

## 2. Adicionar o projeto em `lib/portfolio.ts`

Copie o template, cole **no fim do array `projects`** e apague os campos
opcionais que o projeto não tem — a dobra correspondente simplesmente não
renderiza:

```ts
{
  // ——— obrigatórios (dobras 1–5 e 9) ———
  slug: "novo-cliente",            // = nome da pasta e da URL (/portfolio/novo-cliente)
  client: "Novo Cliente",          // nome exibido no card, no floater e no case
  displayName: "NOVO\nCLIENTE",    // \n = quebra de linha no título gigante do hero
  category: "Marca",               // "Marca" ou "Conteúdo" (usado no filtro do grid)
  tagline: "Frase-resumo do projeto em uma linha.",
  statement: "Frase de efeito do case.",
  scope: ["Item 1", "Item 2", "Item 3"],   // exibidos unidos por " · "
  execution: "Descrição curta de como foi executado.",
  images: {
    cover: "/portfolio/novo-cliente/cover.jpg",
  },

  // ——— Galeria (dobra 3) ———
  gallery: posts("novo-cliente", 24),  // todas as peças da faixa automática

  // ——— Sobre o projeto (dobra 6, opcional) ———
  about:
    "Primeiro parágrafo da narrativa.\n\nSegundo parágrafo (\\n\\n separa).",
  aboutImage: "/portfolio/novo-cliente/sobre.jpg", // foto ao lado do texto

  // ——— O site, ao vivo (dobra 7, opcional — projetos que incluíram site) ———
  website: {
    url: "dominio-do-cliente.com.br", // barra de endereço, sem protocolo
    intro: "Copy da dobra: o que o site entrega e como navegar.",
    pages: [
      {
        label: "Início",   // nome da aba na janela
        path: "/",         // caminho exibido na barra de endereço
        description: "Card-índice abaixo da janela.",
        src: "/portfolio/novo-cliente/pagina-inicio.png", // captura FULL-PAGE
      },
      // …demais páginas, na ordem de navegação
    ],
  },

  // ——— Apresentação (dobra 8, opcional) ———
  // Formato A: prancha única (estilo Behance), dimensões reais do arquivo:
  presentation: {
    src: "/portfolio/novo-cliente/apresentacao.jpg",
    width: 1600,
    height: 12000,
    text: "Legenda da dobra.",
  },
  // Formato B: grid de peças individuais ("grid-4" ou "grid-1"). Se `images`
  // for omitido, reusa `gallery` — e a Galeria (dobra 3) vira uma amostra de
  // 10 peças para nada aparecer duas vezes na página:
  // presentation: { layout: "grid-4", text: "Legenda da dobra." },
},
```

> **Sempre pergunte ao Felipe** qual formato de Apresentação o case usa:
> prancha única, `grid-4` ou `grid-1`.

---

## 3. Regras importantes

- **Ordem do array = ordem do grid.** O **1º item é o destaque** (card grande
  no topo); os demais entram na grade de 2 colunas.
- **"Próximo projeto" é automático** — derivado da ordem do array (o último
  aponta para o primeiro). Não existe campo manual para isso.
- **Um cliente = um case.** Se o escopo cresce (ex.: o cliente de conteúdo
  ganhou um site), **acrescente as dobras ao case existente** em vez de criar
  um segundo slug — foi o que fizemos com a Alves & Nabuco. Se um slug antigo
  precisar morrer, adicione um redirect permanente em `next.config.ts`
  (ex.: `/portfolio/alves-nabuco-institucional` → `/portfolio/alves-nabuco`).
- **Categoria** deve ser `"Marca"` ou `"Conteúdo"`. Para criar uma categoria
  nova:
  1. adicione o valor ao type `ProjectCategory` em `lib/portfolio.ts`;
  2. adicione o mesmo valor ao array `FILTERS` em
     `components/portfolio/PortfolioGrid.tsx`.
- **Galeria**: se `gallery` for omitido, a faixa usa `images.detail` +
  `images.series` como fallback (formato antigo). Prefira `gallery`.
- **Mobile**: o card do grid mostra `client` + `category` na legenda
  (`project-card__caption`); no desktop essas infos vivem no cursor floater.

---

## 4. Conferência antes de publicar

```bash
npm run dev
```

1. Abra `/portfolio` — o novo projeto aparece no grid.
2. Teste o **filtro** `Todos / Marca / Conteúdo` (inclusive uma categoria sem
   projetos → deve mostrar "Nenhum projeto nesta categoria.").
3. Passe o mouse nos cards — o **cursor customizado** mostra o nome do projeto.
4. Abra o case novo e role até o fim conferindo as dobras na ordem:
   hero → tagline → galeria → statement → escopo → sobre → site →
   apresentação → próximo projeto (as opcionais só se preenchidas).
5. Se o case tem a dobra do site: **troque as abas** da janela, role dentro do
   viewport e confira os cards-índice.
6. Clique em **"Próximo projeto"** e confira o encadeamento.
7. Teste no **mobile (~390px)**: grids em 1 coluna, faixa da galeria vira
   scroll manual no touch.

Feche com um `npm run build` para garantir que não há erro de tipo/rota.
