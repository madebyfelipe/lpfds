# Rotina noturna de prospecção — roteiro

Este é o roteiro que a sessão agendada do Claude segue toda madrugada
(seg–sex, 2h56, horário de Brasília). O agendamento só diz "leia e siga
`docs/prospeccao-rotina.md`", então **mudar o comportamento da rotina é editar
este arquivo** — a próxima noite já usa a versão nova.

A rotina **não envia e-mail**. Ela pesquisa, escreve e grava no CRM como
"aguardando revisão". Quem envia é o disparo (Vercel Cron, 9h/11h/14h), que
aplica limite diário, aquecimento, supressão e leitura de respostas.

---

## 0. Ambiente

- `PROSPECCAO_TOKEN` — variável de ambiente da sessão (configurada no ambiente
  do Claude Code). Vai em `Authorization: Bearer $PROSPECCAO_TOKEN`.
- Base: `https://www.madebyfelipe.com.br` — com `www`: o domínio sem `www` é o WordPress antigo e devolve 404 (ou `$PROSPECCAO_SITE_URL`, se existir).
- Ferramentas: WebSearch e WebFetch para pesquisar; `curl` para a API.

Se `PROSPECCAO_TOKEN` não existir ou a API não responder: **pare**. Não
pesquise, não invente, não grave em arquivo. Termine com uma linha dizendo o que
faltou (token ausente, host bloqueado pela rede, 401, 503…).

## 1. Pré-voo e pauta

```bash
curl -sS -H "Authorization: Bearer $PROSPECCAO_TOKEN" "$BASE/api/prospeccao/status"
```

- `ok: false` → pare e reporte o `error`.
- `pausado: true` → pare ("prospecção pausada no painel").
- A resposta traz a **pauta da noite**, nesta ordem de prioridade:
  1. `tarefas.responder` — respostas recebidas sem leitura (só aparece quando o
     painel não tem IA). Para cada uma: classifique e rascunhe a réplica (§ 8).
  2. `tarefas.reescrever` — o Felipe pediu mudança no texto (`instrucao`).
     Reescreva seguindo a instrução e as regras de copy (§ 5) e grave (§ 8).
  3. `tarefas.completar` — leads importados de planilha: abra o site, escreva
     evidência + sequência, ou descarte se não servir (§ 8).
  4. `campanhas` — pesquisa nova: cada campanha ativa traz o briefing (`icp`,
     `oferta`, `regioes`, `excluir`, `referencias`, `tom`) e **`pesquisar`**,
     quantos leads novos trazer para ela. A cota já foi dividida pelo
     desempenho de cada campanha — respeite-a, não redistribua.
- `bloqueios`: domínios/e-mails que **não** se contata. Nem pesquise.

Nunca traga mais que a cota. Menos é normal — **qualidade manda**: um lead
fraco ocupa a vaga de envio de um bom. Cota 0 em tudo e pauta vazia → pare
("nada a fazer esta noite").

## 2. Quem procurar (ICP)

> O briefing da **campanha** (vindo do pré-voo) manda sobre o texto abaixo.
> Este é o ICP da campanha `psico-neurodivergencia`, a primeira; campanhas
> novas trazem o próprio. `referencias` são sites de negócios parecidos com o
> que se procura (lookalike): busque perfis semelhantes a eles.

**Psicólogas que atendem pais de crianças e adolescentes autistas (TEA) e
neurodivergentes** (TDAH, dislexia, altas habilidades, atraso de
desenvolvimento) — em consultório próprio ou pequena clínica que ela conduz.

Sinais fortes de aderência:
- orientação parental / treino parental / "escola de pais" / grupo de mães e pais atípicos;
- intervenção precoce, ABA, Denver (ESDM), PRT, TCC infantil com foco em TEA/TDAH;
- avaliação neuropsicológica infantil com devolutiva aos pais;
- conteúdo próprio para pais (site, blog, Instagram, LinkedIn).

Prioridade:
- **A** — atende pais de forma explícita, prática própria, presença ativa e um
  sinal de momento (abriu agenda/unidade, lançou grupo, curso ou formação nova).
- **B** — atende o público, mas a oferta para os pais aparece pouco ou confusa.
- **C** — clínica multidisciplinar onde a psicologia é uma frente entre várias.

Descarte: redes/franquias, hospitais, órgão público, associações, quem só faz
pesquisa/docência, perfil sem e-mail profissional publicado.

Região: comece por Sorocaba, Itu, Campinas, Jundiaí, Piracicaba e capital de
SP. Quem atende **online** pode ser de qualquer lugar do Brasil.

Buscas que funcionam (varie a cidade e o termo, uma por vez):
- `psicóloga orientação parental autismo Sorocaba`
- `psicóloga infantil TEA TDAH consultório Campinas`
- `"treino parental" psicóloga TEA`
- `site:linkedin.com/in psicóloga "orientação parental" autismo`
- `psicóloga "mães atípicas" grupo`

## 3. De onde pode vir o e-mail

Só e-mail **profissional publicado pela própria psicóloga/clínica** — no site
dela, na página de contato, no rodapé, no link da bio. Anote a URL exata em
`fonte`: é a prova da origem do dado (LGPD).

Nunca:
- adivinhar padrão (`nome@dominio`) ou usar e-mail "provável";
- usar base comprada, agregador de contatos, vazamento, Doctoralia/diretórios
  que não mostram o e-mail;
- usar e-mail pessoal que ela não publicou para contato profissional;
- caixas que ninguém lê (`noreply@`, `financeiro@`, `rh@`, `lgpd@`) — o servidor recusa.

## 4. Pesquisa de cada lead

Abra o site (WebFetch) e, se público, o LinkedIn. Tire de lá **uma linha
específica** que só vale para ela — é o gancho. Bom: "Vi que você conduz um
grupo de orientação para mães de crianças com TEA às quintas." Ruim: "Vi que
você é psicóloga" / "adorei seu trabalho".

Registre também:
- `evidencia` — o que você viu e onde (1–2 frases);
- `hipotese` — onde a Made by Felipe poderia ajudar (marca, como o site e o
  Instagram falam com os pais, clareza da oferta) — é hipótese, não diagnóstico;
- `limite` — o que NÃO deu para confirmar (decisor, momento, se já tem agência).

## 5. O e-mail (o servidor recusa o que fugir disto)

**1º e-mail**
- Até **100 palavras**. Curto ganha.
- Abre com **por que ela**: a linha específica do item 4, na primeira frase.
- **Uma pergunta só**, sobre como ela faz algo hoje — não um pedido de reunião.
  "Você escreve sozinha o conteúdo para os pais ou alguém cuida disso?" rende
  mais resposta que "podemos marcar 15 minutos?". Sem "reunião", "call",
  "agendar", "X minutos", "bater um papo".
- Um parágrafo de quem é o Felipe, em uma frase: branding para psicólogas.
- Tom de colega, primeira pessoa, sem jargão de marketing, sem elogio vazio.
- Sem link (o rodapé já leva o site), sem anexo, sem emoji.
- **Não escreva assinatura nem rodapé** — o servidor anexa assinatura, "vi seu
  e-mail em …" e o link de descadastro em todo envio.

**Assunto** — como e-mail interno: até 7 palavras, minúsculas, sem exclamação,
sem emoji, sem "Re:"/"Fwd:". Em metade dos leads, mande também `assuntoB` (um
segundo assunto, com outro ângulo): o disparo sorteia qual sai e a aba
Resultados compara as taxas de resposta. Ex.: `grupo de pais em sorocaba`,
`pergunta sobre a orientação parental`, `o site da clínica`.

**Follow-ups (até 3, na mesma conversa)** — a maioria das respostas vem no 2º
ou 3º toque. Saem só se ela não respondeu, em +3, +4 e +5 dias úteis.
- Até 70 palavras cada, no máximo uma pergunta.
- Cada um traz **um ângulo novo** (uma observação a mais do site dela, um
  exemplo concreto do que pais procuram antes de marcar a 1ª consulta, uma
  pergunta diferente). Nunca "só passando para lembrar" / "subindo este e-mail".
- O 3º é a despedida: curto, sem pressão — "vou parar por aqui; se um dia fizer
  sentido, é só responder".

**Limites do nicho** (CFP, art. 20, e bom senso): não prometa agenda cheia,
pacientes ou faturamento; não mencione caso clínico, paciente específico ou
resultado de terapia; não sugira depoimento de paciente; não trate a profissão
como "nicho lucrativo".

Exemplo (81 palavras):

> Assunto: grupo de pais em sorocaba
>
> Oi, Marina — vi no seu site que você conduz um grupo de orientação para mães
> de crianças com TEA às quintas, além do atendimento individual.
>
> Sou o Felipe, trabalho com marca e comunicação para psicólogas que atendem
> famílias neurodivergentes.
>
> Fiquei curioso com uma coisa: os pais chegam até o grupo mais por indicação de
> escola e neuropediatra, ou pelo que encontram de você no Google e no
> Instagram?
>
> Pergunto porque é aí que costumo enxergar onde a comunicação ajuda ou atrapalha.

## 6. LinkedIn (opcional por lead)

Se achar o perfil público dela, mande `linkedin` (URL) e `linkedinNota` (até
300 caracteres, sem pitch: uma linha de por que ela + "gostaria de acompanhar
seu trabalho"). **Não tente conectar nem mandar mensagem** — automação viola os
termos do LinkedIn; o Felipe envia o convite à mão pelo painel.

## 7. Dedup e gravação

Antes de gravar, cheque os e-mails candidatos:

```bash
curl -sS -X POST -H "Authorization: Bearer $PROSPECCAO_TOKEN" -H "Content-Type: application/json" \
  -d '{"emails":["contato@clinica.com.br","fulana@gmail.com"]}' "$BASE/api/prospeccao/checar"
```

Descarte quem vier `conhecido: true`. Depois grave **um lote por campanha**
(máx. 25), com `campanha` = o `slug` que veio na pauta. A rota ainda confere
CRM, lista de bloqueio e MX do domínio — o que ela recusar volta em `ignorados`:

```bash
curl -sS -X POST -H "Authorization: Bearer $PROSPECCAO_TOKEN" -H "Content-Type: application/json" \
  -d @lote.json "$BASE/api/prospeccao/leads"
```

`lote.json`:

```json
{
  "campanha": "psico-neurodivergencia",
  "leads": [
    {
      "nome": "Marina Souza",
      "email": "contato@marinasouzapsi.com.br",
      "empresa": "Marina Souza Psicologia",
      "cidade": "Sorocaba · online",
      "prioridade": "A",
      "score": 8,
      "fonte": "https://marinasouzapsi.com.br/contato",
      "evidencia": "Página 'Grupos' anuncia grupo de orientação para mães de crianças com TEA às quintas.",
      "hipotese": "O site fala com a psicóloga, não com os pais que chegam ansiosos depois do laudo.",
      "limite": "Não sei se já tem agência; decisora é ela (consultório individual).",
      "assunto": "grupo de pais em sorocaba",
      "mensagem": "Oi, Marina — vi no seu site que …?",
      "followups": ["…", "…", "…"],
      "instagram": "@marinasouzapsi",
      "linkedin": "https://www.linkedin.com/in/…",
      "linkedinNota": "…"
    }
  ]
}
```

A resposta lista `criados` e `ignorados` (com `motivo`). Se um lead voltou por
regra de copy (`mensagem_mais_de_100_palavras`, `mensagem_com_mais_de_uma_pergunta`,
`mensagem_pede_reuniao`, `assunto_longo`…), corrija **só aquele** e reenvie uma
vez. Se voltar de novo, deixe de fora.

## 8. Tarefas sobre leads que já existem

Todas por `PATCH $BASE/api/prospeccao/leads/{id}` com o mesmo Bearer. As regras
de copy valem igual; se voltar recusado, corrija aquele lead uma vez.

```bash
# importado → pesquisado (vira "aguardando revisão")
curl -sS -X PATCH -H "Authorization: Bearer $PROSPECCAO_TOKEN" -H "Content-Type: application/json" \
  -d '{"acao":"completar","fonte":"https://site-dela.com.br/contato","evidencia":"…","hipotese":"…",
       "limite":"…","prioridade":"A","score":8,"assunto":"…","assuntoB":"","mensagem":"…?",
       "followups":["…","…","…"],"linkedinNota":""}' "$BASE/api/prospeccao/leads/ID"

# importado que não serve (site fora do ar, fora do ICP, sem e-mail publicado)
  -d '{"acao":"descartar","motivo":"site fora do ar"}'

# pedido de reescrita do Felipe (texto novo inteiro; volta para revisão)
  -d '{"acao":"reescrever","assunto":"…","assuntoB":"","mensagem":"…?","followups":["…","",""]}'

# resposta recebida: leitura + rascunho (NÃO envia; quem envia é o Felipe)
  -d '{"acao":"responder","classificacao":"INTERESSADA","sugestao":"…"}'
```

No `completar`, troque `fonte` pela página onde o e-mail aparece publicado, se
achar — o rodapé passa a dizer "vi seu e-mail em …". Se não achar o e-mail no
site, mantenha a `fonte` que veio (a origem da planilha).

**Classificações**: `INTERESSADA` (quer saber mais), `PERGUNTA` (perguntou algo
concreto), `NAO_AGORA`, `SEM_INTERESSE`, `INDICOU_OUTRA` (passou outro
contato), `OUTRO`. **Rascunho da réplica**: até 90 palavras, responde o que ela
disse; interessada → propõe uma conversa curta (pode citar dois horários);
pergunta → responde em poucas linhas e devolve uma pergunta; não agora →
agradece e pergunta se pode voltar em alguns meses; sem interesse → sugestão
vazia (não se insiste).

## 9. Relatório

Feche registrando a execução (aparece na aba Rotina do painel):

```bash
curl -sS -X POST -H "Authorization: Bearer $PROSPECCAO_TOKEN" -H "Content-Type: application/json" \
  -d '{"titulo":"rotina 2026-10-20","markdown":"…"}' "$BASE/api/prospeccao/execucoes"
```

No `markdown`: tarefas feitas (respostas lidas, reescritas, importados completados/descartados), buscas feitas por campanha, quantos perfis olhados, gravados, ignorados (com
motivo) e qualquer coisa estranha (site fora do ar, padrão de nicho novo). A
última mensagem da sessão é o mesmo resumo em 3–5 linhas.

## 10. Orçamento

- No máximo ~60 páginas abertas por noite.
- Não reprocesse o que já está no CRM (o `checar` existe para isso).
- Não grave arquivos no repositório, não faça commit, não abra PR.
