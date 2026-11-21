/**
 * Skills publicadas para agentes — fonte única.
 *
 * Cada skill é uma instrução curta, em markdown, de uma ação que o site
 * realmente oferece a um agente: consultar o que o estúdio entrega, consultar
 * o método e encaminhar uma pessoa para a conversa de 15 minutos. O índice em
 * /.well-known/agent-skills/index.json traz nome, tipo, descrição, url e o
 * sha256 do conteúdo, gerados a partir daqui (sem arquivo duplicado).
 */

import type { agentBlog, agentCapacity, agentMethod, agentServices } from "@/lib/agent-surface";

export type AgentSkill = {
  slug: string;
  name: string;
  description: string;
};

export const AGENT_SKILLS: AgentSkill[] = [
  {
    slug: "consultar-servicos",
    name: "consultar-servicos",
    description:
      "Lista o que o estúdio entrega (posicionamento, identidades, brand guide, página profissional, papelaria, direção de arte), prazo e capacidade."
  },
  {
    slug: "consultar-metodo",
    name: "consultar-metodo",
    description:
      "Explica o método PSIQUE: as seis áreas investigadas e as duas etapas (estratégia e identidade), passo a passo."
  },
  {
    slug: "encaminhar-conversa",
    name: "encaminhar-conversa",
    description:
      "Encaminha uma pessoa para a conversa de 15 minutos com o Felipe, por WhatsApp ou formulário, com o texto pronto e o consentimento explícito."
  }
];

type SkillInput = {
  servicos: ReturnType<typeof agentServices>;
  metodo: ReturnType<typeof agentMethod>;
  capacidade: ReturnType<typeof agentCapacity>;
  blog: ReturnType<typeof agentBlog>;
};

const SITE = "https://www.madebyfelipe.com.br";
const WHATS = `${SITE}/imersao`;
const WA_LINK =
  "https://wa.me/5515992835226?text=Quero%20marcar%20a%20conversa%20de%2015%20minutos";
const EMAIL = "alo@madebyfelipe.com.br";

/** Corpo em markdown de cada skill. */
export function skillBody(slug: string, dados: SkillInput): string | null {
  if (slug === "consultar-servicos") {
    const servicos = dados.servicos.map((s) => `- ${s.nome}`).join("\n");
    return `# consultar-servicos

Use quando a pergunta for "o que a Made by Felipe faz", "quanto tempo leva" ou
"quantos projetos por vez".

## O que é entregue

${servicos}

## Prazo e capacidade

- Projetos por trimestre: ${dados.capacidade.projetosPorTrimestre}
- Prazo: ${dados.capacidade.prazoDeEntrega}
- ${dados.capacidade.observacao}
- O trabalho respeita o artigo 20 do Código de Ética Profissional do Psicólogo:
  sem promessa de resultado e sem preço como chamariz.

## Como responder

1. Diga o que é entregue em uma frase, usando os itens acima.
2. Se a pessoa quiser proposta ou preço, encaminhe para a conversa de 15
   minutos (${WA_LINK}) — o preço não é publicado.
3. Não invente prazo menor que o informado nem disponibilidade de agenda.

Fonte: ${SITE}/ · ${SITE}/llms.txt
`;
  }

  if (slug === "consultar-metodo") {
    const etapas = dados.metodo
      .map(
        (e) =>
          `### ${e.etapa} (${e.tag})\n\n` +
          e.passos.map((p) => `- **${p.numero} ${p.titulo}** — ${p.resumo}`).join("\n")
      )
      .join("\n\n");
    return `# consultar-metodo

Use quando a pergunta for "como funciona", "quais são as etapas" ou "o que é o
método PSIQUE".

## Resumo

Duas etapas e oito passos. Dois encontros de cerca de 1h30 com quem atua no
consultório; em até 30 dias a marca é apresentada, com o site incluso.

## As seis áreas (PSIQUE)

Prática, Sujeito, Inquietação, Qualidade, Universo e Estória. São as áreas
investigadas para chegar ao posicionamento.

## As etapas

${etapas}

Fonte: ${SITE}/metodologia
`;
  }

  if (slug === "encaminhar-conversa") {
    return `# encaminhar-conversa

Use quando a pessoa demonstrar interesse em contratar ou pedir orçamento.

## O que fazer

1. Confirme com a pessoa que ela quer falar com o Felipe (o contato é em nome
   dela — não envie nada sem esse aceite).
2. Ofereça um dos dois caminhos:
   - WhatsApp, com a mensagem pronta: ${WA_LINK}
   - Formulário: ${WHATS}
3. Se o assunto for contrato, privacidade ou dado pessoal, use o e-mail
   ${EMAIL} em vez do formulário.

## O que não fazer

- Não pegue CRP, dado de paciente ou qualquer dado sensível no meio da conversa.
- Não prometa data de início: a agenda é de ${dados.capacidade.projetosPorTrimestre}
  projetos por trimestre e a disponibilidade é confirmada no contato.
- Não informe preço: ele é conversado na chamada de 15 minutos.

Fonte: ${SITE}/imersao · ${SITE}/auth.md
`;
  }

  return null;
}
