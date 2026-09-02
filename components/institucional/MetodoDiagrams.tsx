// Ilustrações do método NAVE, recriadas do deck-fonte (Modelo_Proposta_Comercial.pdf)
// como SVG na paleta da marca. São desenhos de linha em `currentColor`, então
// invertem junto com o tema (.inst-dark → cream sobre preto, como o deck). O
// vermelho da marca marca o acento. Sem estado — server components.

// Buquê de pontos de contato: satélites em torno do centro, a 45° cada.
const CONTACT_POINTS = [
  { angle: 270, label: "EMAILS" },
  { angle: 315, label: "PDV" },
  { angle: 0, label: "SITE" },
  { angle: 45, label: "ANÚNCIOS" },
  { angle: 90, label: "PAPELARIA" },
  { angle: 135, label: "MÍDIAS" },
  { angle: 180, label: "BLOG" },
  { angle: 225, label: "PRODUTOS" }
];

const CX = 1010;
const CY = 300;
const ORBIT = 118;

function pointOnOrbit(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + ORBIT * Math.cos(rad), y: CY + ORBIT * Math.sin(rad) };
}

// ─────────────────────────────────────────────────────────────────────────
// Diagrama 1 — Metodologia: Estratégia → Identidade → Comunicação
// (quadrado do posicionamento N-A-V-E · venn de identidade · pontos de contato)
// ─────────────────────────────────────────────────────────────────────────
export function MetodologiaFlow() {
  return (
    <div className="inst-diagram">
      <svg
        className="inst-diagram__svg"
        viewBox="0 0 1240 640"
        role="img"
        aria-label="Fluxo do método: da estratégia (posicionamento a partir de Negócio, Audiência, Valor e Estória) à identidade (visual e verbal) e à comunicação (pontos de contato)."
      >
        {/* ── Zona 1 — Posicionamento (N-A-V-E) ── */}
        <g className="inst-diagram__hatch">
          <circle cx="210" cy="132" r="58" />
          <circle cx="72" cy="300" r="58" />
          <circle cx="348" cy="300" r="58" />
          <circle cx="210" cy="468" r="58" />
        </g>
        <polygon
          className="inst-diagram__dotted"
          points="210,132 348,300 210,468 72,300"
        />
        <text className="inst-diagram__core" x="210" y="306">
          POSICIONAMENTO
        </text>
        <text className="inst-diagram__node-label" x="210" y="138">
          AUDIÊNCIA
        </text>
        <text className="inst-diagram__node-label" x="72" y="306">
          NEGÓCIO
        </text>
        <text className="inst-diagram__node-label" x="348" y="306">
          VALOR
        </text>
        <text className="inst-diagram__node-label" x="210" y="474">
          ESTÓRIA
        </text>

        {/* seta 1 → */}
        <g className="inst-diagram__arrow">
          <line x1="430" y1="300" x2="498" y2="300" />
          <polyline points="486,291 500,300 486,309" />
        </g>

        {/* ── Zona 2 — Identidade (venn) ── */}
        <circle className="inst-diagram__ring" cx="620" cy="240" r="92" />
        <circle className="inst-diagram__ring" cx="620" cy="372" r="92" />
        <text className="inst-diagram__node-label" x="620" y="196">
          IDENTIDADE
        </text>
        <text className="inst-diagram__node-label" x="620" y="214">
          VISUAL
        </text>
        <text className="inst-diagram__node-label" x="620" y="404">
          IDENTIDADE
        </text>
        <text className="inst-diagram__node-label" x="620" y="422">
          VERBAL
        </text>

        {/* seta 2 → */}
        <g className="inst-diagram__arrow">
          <line x1="762" y1="300" x2="830" y2="300" />
          <polyline points="818,291 832,300 818,309" />
        </g>

        {/* ── Zona 3 — Comunicação (pontos de contato) ── */}
        {CONTACT_POINTS.map((point) => {
          const { x, y } = pointOnOrbit(point.angle);
          return (
            <g key={point.label}>
              <line
                className="inst-diagram__spoke"
                x1={CX}
                y1={CY}
                x2={x}
                y2={y}
              />
              <circle className="inst-diagram__ring" cx={x} cy={y} r="42" />
              <text className="inst-diagram__sat-label" x={x} y={y + 4}>
                {point.label}
              </text>
            </g>
          );
        })}
        <circle className="inst-diagram__disc" cx={CX} cy={CY} r="64" />
        <text className="inst-diagram__disc-label" x={CX} y={CY - 4}>
          PONTOS
        </text>
        <text className="inst-diagram__disc-label" x={CX} y={CY + 14}>
          DE CONTATO
        </text>

        {/* ── Eixo inferior — Estratégia · Identidade · Comunicação ── */}
        <line className="inst-diagram__axis" x1="210" y1="582" x2="1010" y2="582" />
        {[
          { x: 210, label: "ESTRATÉGIA" },
          { x: 620, label: "IDENTIDADE" },
          { x: 1010, label: "COMUNICAÇÃO" }
        ].map((stage) => (
          <g key={stage.label}>
            <circle className="inst-diagram__axis-dot" cx={stage.x} cy="582" r="6" />
            <text className="inst-diagram__stage" x={stage.x} y="614">
              {stage.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Diagrama 2 — Linha do tempo: oito passos, duas etapas, quatro fases
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

// Fases (2 passos cada) → colunas com rótulo descritivo e etiqueta de baixo.
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
    <div className="inst-diagram">
      <svg
        className="inst-diagram__svg"
        viewBox="0 0 1240 500"
        role="img"
        aria-label="Linha do tempo do método: etapa de estratégia (entrevista, workshop, pesquisa, diagnóstico) e etapa de identidade (plataforma, keyword, keyvisual, guia da marca), agrupadas em quatro fases — coletando, explorando, criando e definindo."
      >
        {/* Etapas (brackets de cima) */}
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

        {/* Rótulos dos passos + setas entre eles */}
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

        {/* Linha e nós */}
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

        {/* Separadores tracejados entre fases */}
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

        {/* Rótulos descritivos + etiquetas de fase (brackets de baixo) */}
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

        {/* Acento no último nó: desce até a entrega */}
        <g className="inst-diagram__arrow inst-diagram__arrow--accent">
          <line x1="1140" y1="248" x2="1140" y2="278" />
          <polyline points="1131,268 1140,280 1149,268" />
        </g>
      </svg>
    </div>
  );
}
