// Ilustrações do método PSIQUE, recriadas do deck-fonte (Modelo_Proposta_Comercial.pdf)
// como SVG na paleta da marca. Desenhos de linha em `currentColor`, então
// invertem junto com o tema (.inst-dark → cream sobre preto, como o deck). O
// vermelho da marca é o acento. Sem estado — server components.

// Chevron reutilizado entre as três peças do fluxo (vira ↓ no mobile via CSS).
function FlowArrow() {
  return (
    <span className="inst-flow__arrow" aria-hidden="true">
      <svg viewBox="0 0 32 16" width="32" height="16">
        <line x1="0" y1="8" x2="28" y2="8" />
        <polyline points="20,2 30,8 20,14" />
      </svg>
    </span>
  );
}

// Buquê de pontos de contato: um anel de círculos que se encavalam (se
// sobrepõem) em torno do centro, como no deck. Sobreposição vem do raio (40)
// ser maior que a metade do passo angular na órbita (84).
const CX = 165;
const CY = 165;
const ORBIT = 84;
const CONTACT_POINTS = [
  { a: 0, label: "SITE" },
  { a: 30, label: "ANÚNCIOS" },
  { a: 60, label: "PROPOSTAS" },
  { a: 90, label: "SERVIÇOS" },
  { a: 120, label: "PRODUTOS" },
  { a: 150, label: "AMBIENTES" },
  { a: 180, label: "BLOG" },
  { a: 210, label: "EMAILS" },
  { a: 240, label: "PDV" },
  { a: 270, label: "EMBALAGEM" },
  { a: 300, label: "PAPELARIA" },
  { a: 330, label: "MÍDIAS" }
].map((p) => {
  const rad = (p.a * Math.PI) / 180;
  return { ...p, x: CX + ORBIT * Math.cos(rad), y: CY + ORBIT * Math.sin(rad) };
});

// ─────────────────────────────────────────────────────────────────────────
// Diagrama 1 — Metodologia: Estratégia → Identidade → Comunicação.
// Três peças SVG (quadrado N-A-V-E · venn · buquê) num flex: linha no desktop,
// coluna no mobile — sem scroll horizontal.
// ─────────────────────────────────────────────────────────────────────────
export function MetodologiaFlow() {
  return (
    <div className="inst-flow">
      {/* Estratégia — o hexágono do posicionamento (P-S-I-Q-U-E) */}
      <figure className="inst-flow__fig inst-flow__fig--hex">
        <svg
          className="inst-flow__svg"
          viewBox="0 0 300 300"
          role="img"
          aria-label="Posicionamento a partir de seis áreas: Prática, Sujeito, Inquietação, Qualidade, Universo e Estória."
        >
          <g className="inst-flow__ring">
            <circle cx="150" cy="50" r="44" />
            <circle cx="237" cy="100" r="44" />
            <circle cx="237" cy="200" r="44" />
            <circle cx="150" cy="250" r="44" />
            <circle cx="63" cy="200" r="44" />
            <circle cx="63" cy="100" r="44" />
          </g>
          <polygon
            className="inst-flow__dotted"
            points="150,50 237,100 237,200 150,250 63,200 63,100"
          />
          <text className="inst-flow__core" x="150" y="146">
            POSICIO
          </text>
          <text className="inst-flow__core" x="150" y="164">
            NAMENTO
          </text>
          <text className="inst-flow__label" x="150" y="54">
            PRÁTICA
          </text>
          <text className="inst-flow__label" x="237" y="104">
            SUJEITO
          </text>
          <text className="inst-flow__label inst-flow__label--sm" x="237" y="204">
            INQUIETAÇÃO
          </text>
          <text className="inst-flow__label" x="150" y="254">
            QUALIDADE
          </text>
          <text className="inst-flow__label" x="63" y="204">
            UNIVERSO
          </text>
          <text className="inst-flow__label" x="63" y="104">
            ESTÓRIA
          </text>
        </svg>
        <figcaption className="inst-flow__cap">Estratégia</figcaption>
      </figure>

      <FlowArrow />

      {/* Identidade — os dois círculos encavalados (visual + verbal) */}
      <figure className="inst-flow__fig inst-flow__fig--venn">
        <svg
          className="inst-flow__svg"
          viewBox="0 0 200 300"
          role="img"
          aria-label="Identidade visual e verbal, sobrepostas."
        >
          <circle className="inst-flow__ring" cx="100" cy="112" r="78" />
          <circle className="inst-flow__ring" cx="100" cy="196" r="78" />
          <text className="inst-flow__label" x="100" y="80">
            IDENTIDADE
          </text>
          <text className="inst-flow__label" x="100" y="97">
            VISUAL
          </text>
          <text className="inst-flow__label" x="100" y="222">
            IDENTIDADE
          </text>
          <text className="inst-flow__label" x="100" y="239">
            VERBAL
          </text>
        </svg>
        <figcaption className="inst-flow__cap">Identidade</figcaption>
      </figure>

      <FlowArrow />

      {/* Comunicação — o buquê de pontos de contato encavalados */}
      <figure className="inst-flow__fig inst-flow__fig--bouquet">
        <svg
          className="inst-flow__svg"
          viewBox="0 0 330 330"
          role="img"
          aria-label="Pontos de contato acumulados em torno da marca: site, anúncios, propostas, produtos, e-mails, PDV, embalagem, papelaria, mídias e mais."
        >
          <g className="inst-flow__ring">
            {CONTACT_POINTS.map((p) => (
              <circle key={p.label} cx={p.x} cy={p.y} r="40" />
            ))}
          </g>
          <circle className="inst-flow__disc" cx={CX} cy={CY} r="52" />
          {CONTACT_POINTS.map((p) => (
            <text
              key={p.label}
              className="inst-flow__sat"
              x={p.x}
              y={p.y + 3}
            >
              {p.label}
            </text>
          ))}
          <text className="inst-flow__disc-label" x={CX} y={CY - 3}>
            PONTOS
          </text>
          <text className="inst-flow__disc-label" x={CX} y={CY + 13}>
            DE CONTATO
          </text>
        </svg>
        <figcaption className="inst-flow__cap">Comunicação</figcaption>
      </figure>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Diagrama 2 — Linha do tempo: oito passos, duas etapas, quatro fases.
// Some no mobile (a lista numerada `.inst-proc` logo abaixo carrega o mesmo).
// ─────────────────────────────────────────────────────────────────────────
const NODES = [
  "ENTREVISTA",
  "WORKSHOP",
  "PESQUISA",
  "DIAGNÓSTICO",
  "PLATAFORMA",
  "KEYWORD",
  "KEYVISUAL",
  "GUIA DA MARCA"
];
const NODE_X = [90, 240, 390, 540, 690, 840, 990, 1140];
const LINE_Y = 236;

const PHASES = [
  { from: 90, to: 240, desc: ["Diagnóstico"], tag: "COLETANDO" },
  {
    from: 390,
    to: 540,
    desc: ["Direção estratégica", "& criativa"],
    tag: "EXPLORANDO"
  },
  {
    from: 690,
    to: 840,
    desc: ["Posicionamento,", "verbal & visual"],
    tag: "CRIANDO"
  },
  { from: 990, to: 1140, desc: ["Guia da marca"], tag: "DEFININDO", accent: true }
];

export function LinhaTempo() {
  return (
    <div className="inst-diagram inst-diagram--timeline">
      <svg
        className="inst-diagram__svg"
        viewBox="0 0 1240 500"
        role="img"
        aria-label="Linha do tempo do método: etapa de estratégia (entrevista, workshop, pesquisa, diagnóstico) e etapa de identidade (plataforma, keyword, keyvisual, guia da marca), agrupadas em quatro fases — coletando, explorando, criando e definindo."
      >
        <g className="inst-diagram__bracket">
          <path d="M90 108 V96 H540 V108" />
          <path d="M690 108 V96 H1140 V108" />
        </g>
        <text className="inst-diagram__etapa" x="315" y="78">
          Estratégia de marca
        </text>
        <text className="inst-diagram__etapa" x="915" y="78">
          Identidade de marca
        </text>

        {NODES.map((label, i) => (
          <text
            key={label}
            className="inst-diagram__step-label"
            x={NODE_X[i]}
            y="176"
          >
            {label}
          </text>
        ))}
        {NODE_X.slice(0, -1).map((x, i) => {
          const mid = (x + NODE_X[i + 1]) / 2;
          return (
            <polyline
              key={x}
              className="inst-diagram__chevron"
              points={`${mid - 5},192 ${mid + 3},198 ${mid - 5},204`}
            />
          );
        })}

        <line
          className="inst-diagram__axis"
          x1="90"
          y1={LINE_Y}
          x2="1140"
          y2={LINE_Y}
        />
        {NODE_X.map((x, i) => (
          <circle
            key={x}
            className={
              i === NODE_X.length - 1
                ? "inst-diagram__node inst-diagram__node--accent"
                : "inst-diagram__node"
            }
            cx={x}
            cy={LINE_Y}
            r={i === NODE_X.length - 1 ? 9 : 7}
          />
        ))}

        {[315, 615, 915].map((x) => (
          <line
            key={x}
            className="inst-diagram__divider"
            x1={x}
            y1="220"
            x2={x}
            y2="392"
          />
        ))}

        {PHASES.map((phase) => {
          const center = (phase.from + phase.to) / 2;
          return (
            <g key={phase.tag}>
              {phase.desc.map((line, li) => (
                <text
                  key={line}
                  className={
                    phase.accent
                      ? "inst-diagram__desc inst-diagram__desc--accent"
                      : "inst-diagram__desc"
                  }
                  x={center}
                  y={296 + li * 24}
                >
                  {line}
                </text>
              ))}
              <path
                className={
                  phase.accent
                    ? "inst-diagram__bracket inst-diagram__bracket--accent"
                    : "inst-diagram__bracket"
                }
                d={`M${phase.from} 396 V408 H${phase.to} V396`}
              />
              <text
                className={
                  phase.accent
                    ? "inst-diagram__phase inst-diagram__phase--accent"
                    : "inst-diagram__phase"
                }
                x={center}
                y="440"
              >
                {phase.tag}
              </text>
            </g>
          );
        })}

        <g className="inst-diagram__arrow inst-diagram__arrow--accent">
          <line x1="1140" y1="248" x2="1140" y2="278" />
          <polyline points="1131,268 1140,280 1149,268" />
        </g>
      </svg>
    </div>
  );
}
