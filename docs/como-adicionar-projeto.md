# Como adicionar um projeto ao portfólio

Publicar um novo case é **um objeto no array + uma pasta de imagens**. Nenhum
componente precisa ser alterado.

---

## 1. Preparar as imagens

Crie a pasta `public/portfolio/<slug>/` (o `<slug>` é o identificador da URL, ex.:
`alves-nabuco`) e coloque as imagens com **exatamente** estes nomes:

| Arquivo         | Uso no case                        | Dimensão recomendada | Proporção |
| --------------- | ---------------------------------- | -------------------- | --------- |
| `cover.jpg`     | Capa (grid + hero + próximo)       | 1400 × 900           | ~3:2      |
| `detail.jpg`    | Imagem full-width de detalhe       | 1400 × 800           | ~7:4      |
| `serie-1.jpg`   | Série (1ª peça)                    | 600 × 750            | 4:5       |
| `serie-2.jpg`   | Série (2ª peça)                    | 600 × 750            | 4:5       |
| `serie-3.jpg`   | Série (3ª peça)                    | 600 × 750            | 4:5       |
| `aplicacao.jpg` | Bloco "Aplicação" (opcional)       | 800 × 600            | 4:3       |

Notas:

- `.jpg` ou `.png` funcionam — o caminho completo fica no array (passo 2), então
  basta bater com o que você escreveu lá. Manter os nomes acima permite **trocar o
  placeholder pelo definitivo só sobrescrevendo o arquivo**.
- Se não houver imagem de aplicação, omita `application` no objeto: o case reusa
  `detail.jpg` automaticamente.
- As imagens do seed atual (`alves-nabuco`, `know-how-experience`,
  `turrex-midia-digital`) são **placeholders gerados** — substitua
  pelas peças reais quando o Felipe entregar.

---

## 2. Adicionar o projeto em `lib/portfolio.ts`

Copie o template abaixo, cole **no fim do array `projects`** e preencha:

```ts
{
  slug: "novo-cliente",            // = nome da pasta e da URL (/portfolio/novo-cliente)
  client: "Novo Cliente",          // nome exibido no card e no case
  displayName: "NOVO\nCLIENTE",    // \n = quebra de linha no título gigante do hero
  category: "Marca",               // "Marca" ou "Conteúdo" (usado no filtro)
  tagline: "Frase-resumo do projeto em uma linha.",
  statement: "Frase de efeito do case.",
  scope: ["Item 1", "Item 2", "Item 3"],   // exibidos unidos por " · "
  execution: "Descrição curta de como foi executado.",
  result: { before: "12K", after: "1.8M", label: "Alcance" },
  numbers: [                       // exatamente 3 itens
    { value: "1.8M", label: "Impressões" },
    { value: "+180%", label: "Engajamento" },
    { value: "12", label: "Meses" },
  ],
  images: {
    cover: "/portfolio/novo-cliente/cover.jpg",
    detail: "/portfolio/novo-cliente/detail.jpg",
    series: [
      "/portfolio/novo-cliente/serie-1.jpg",
      "/portfolio/novo-cliente/serie-2.jpg",
      "/portfolio/novo-cliente/serie-3.jpg",
    ],
    application: "/portfolio/novo-cliente/aplicacao.jpg", // opcional
  },
  applicationCaption: {
    kicker: "Aplicação",
    text: "Legenda do card ao lado da imagem de aplicação.",
  },
},
```

---

## 2b. Case de **site institucional** (layout próprio)

Para projetos de site, existe um segundo formato de case: em vez da estrutura
padrão (hero de capa → galeria → apresentação), a página renderiza uma
**janela de navegador navegável** — as capturas full-page das páginas do site
rolam dentro do viewport, com abas e cards-índice para trocar de página —
seguida de narrativa em capítulos e ficha de entrega.

Para usar, basta preencher o campo `website` no objeto do projeto (a presença
dele troca o layout automaticamente — ver `components/portfolio/WebsiteCase.tsx`
e `components/portfolio/SiteFrame.tsx`):

```ts
{
  slug: "cliente-institucional",
  // client, displayName, category, tagline, statement e scope como no padrão.
  // statement vira o título do hero (última palavra ganha o vermelho);
  // tagline vira o subtítulo; scope vira a ficha "O que entregamos".
  images: {
    cover: "/portfolio/cliente-institucional/cover.png", // só o cover: o grid usa
  },
  website: {
    url: "dominio-do-cliente.com.br", // barra de endereço, sem protocolo
    sector: "Setor do cliente",
    year: "2026",
    intro: "Parágrafo-lede da narrativa.",
    chapters: [{ title: "Capítulo", text: "Texto do capítulo." }], // 4 funciona bem (grid 2×2)
    pages: [
      {
        label: "Início", // nome da aba
        path: "/", // caminho na barra de endereço
        description: "Card-índice abaixo da janela.",
        src: "/portfolio/cliente-institucional/pagina-inicio.png", // captura FULL-PAGE
      },
      // …demais páginas
    ],
  },
},
```

As capturas devem ser da **página inteira** (topo ao rodapé, ex.: 1920 de
largura) — é a altura delas que cria a rolagem dentro da janela. Exemplo real:
`alves-nabuco-institucional`.

---

## 3. Regras importantes

- **Ordem do array = ordem do grid.** O **1º item é o destaque** (card grande no
  topo); os demais entram na grade de 2 colunas.
- **"Próximo projeto" é automático** — derivado da ordem do array (o último aponta
  para o primeiro). Não existe campo manual para isso.
- **Categoria** deve ser `"Marca"` ou `"Conteúdo"`. Para criar uma categoria nova:
  1. adicione o valor ao type `ProjectCategory` em `lib/portfolio.ts`;
  2. adicione o mesmo valor ao array `FILTERS` em
     `components/portfolio/PortfolioGrid.tsx`.
- `numbers` deve ter **3 itens** (o layout usa 3 colunas com divisórias).

---

## 4. Conferência antes de publicar

```bash
npm run dev
```

1. Abra `/portfolio` — o novo projeto aparece no grid.
2. Teste o **filtro** `Todos / Marca / Conteúdo` (inclusive uma categoria sem
   projetos → deve mostrar "Nenhum projeto nesta categoria.").
3. Passe o mouse nos cards — o **cursor customizado** mostra o nome do projeto.
4. Abra o case novo e role até o fim: hero → tagline → resultado → detalhe →
   série → aplicação → statement → escopo → números → próximo projeto.
5. Clique em **"Próximo projeto"** e confira o encadeamento.
6. Teste no **mobile (~390px)**: grids em 1 coluna, números empilhados.

Feche com um `npm run build` para garantir que não há erro de tipo/rota.
