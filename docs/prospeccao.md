# Prospecção ativa — como funciona e como ligar

Sucessor do protótipo estático do Codex (`previews/campanhas/index.html`): o
mesmo painel de "revisar cada contato e cada mensagem antes do envio", agora
ligado ao CRM, a um disparo de verdade e a uma rotina noturna que pesquisa e
escreve os e-mails — no modelo das ferramentas de SDR com IA (Explee, Instantly,
Lemlist), mas rodando no site e no Twenty que já existem.

**Nicho (out/2026):** psicólogas que atendem pais de crianças e adolescentes
autistas e neurodivergentes. Critérios e buscas em `docs/prospeccao-rotina.md`.

## O fluxo

```
2h56 seg–sex   Rotina (sessão agendada do Claude, roteiro em docs/prospeccao-rotina.md)
               lê a pauta (GET /api/prospeccao/status):
                 respostas a ler (se não houver IA no painel) · reescritas pedidas ·
                 importados a completar · cota de pesquisa por campanha ativa
               pesquisa → lê site/LinkedIn → 1º e-mail (+ assunto B) + 3 follow-ups
               → POST /api/prospeccao/leads → Twenty (Person, origem PROSPECCAO, REVISAR)

até 9h         Felipe revisa em /painel/campanhas (aba Revisão): edita, pede
               reescrita (IA na hora ou rotina à noite), aprova ou descarta.
               Modo automático: o que não for vetado sai 4h depois de chegar.

9h · 11h · 14h Vercel Cron → /api/prospeccao/disparo
               1. lê TODAS as caixas (IMAP): resposta → Conversas; "não quero" →
                  descadastro na hora; bounce → supressão; férias não conta
               2. follow-ups vencidos (+3, +4, +5 dias úteis), pela caixa da conversa
               3. 1ºs e-mails, A → B → C, um por domínio, na caixa com mais folga
               4. saúde: caixa com bounce > 5% (20+ envios) sai do pool sozinha
               5. IA (se ligada): lê as respostas novas e rascunha a réplica

Conversas      Felipe lê, ajusta o rascunho e responde pelo painel — mesma caixa,
               mesma conversa. Marca reunião ou encerra.
```

## Paridade com o Explee

| Explee | Aqui |
|---|---|
| Busca em linguagem natural / ICP | Campanha com briefing (`icp`, `oferta`, `regioes`) lido pela rotina |
| Lookalike por domínio | Campo "Parecidas com" da campanha |
| Excluir geografias | Campo "Excluir" + lista "não contatar" global |
| Upload de CSV + validação | Aba Campanhas → Importar (triagem: CRM, bloqueios, MX) |
| E-mail personalizado por lead | Rotina escreve; regras de copy no servidor; reescrita com instrução |
| Revisar lista antes de lançar | Aba Revisão (modo revisão) / janela de veto (modo automático) |
| Pool de caixas aquecidas, uma caixa por conversa | `PROSPECCAO_CAIXAS`, rampa por caixa, lead preso à caixa |
| Limite diário e rampa | 5 → +2/dia útil → teto (30 por padrão, por caixa) |
| Tira caixa degradada do pool | Auto-pausa por bounce > 5% |
| Pausa por campanha e geral | Status da campanha + "Pausar tudo" |
| Caixa de respostas | Aba Conversas, com leitura e rascunho |
| Agente responde e leva para a call | IA rascunha com `PROSPECCAO_LINK_AGENDA`; **o Felipe envia** (de propósito) |
| Opt-out imediato | Palavra-chave na resposta + link + botão do Gmail (RFC 8058) |
| Resultados / leads quentes | Aba Resultados: funil, por campanha, etapa, A/B, caixas |
| "Aprende o que funciona" | Cota da pesquisa alocada pela taxa de positivas de cada campanha |
| Base própria de 100M+ empresas | **Não**: a rotina pesquisa a web aberta e só usa e-mail publicado pela própria profissional |
| Caixas pré-aquecidas do Explee | **Não**: as caixas são suas (Hostinger), aquecidas pela rampa |

## Regras de copy (o servidor recusa o que fugir)

`lib/prospeccao/config.ts → checarCopy()` vale para a rotina **e** para a edição
no painel:

- 1º e-mail com até **100 palavras**, **uma pergunta** só, nenhum pedido de
  reunião ("15 min", "call", "agendar"…). Abre com uma linha específica do
  site/LinkedIn dela.
- Assunto de e-mail interno: até 7 palavras, sem `!`, emoji, caixa alta ou
  `Re:` falso.
- Até 3 follow-ups de até 70 palavras, no máximo uma pergunta cada.
- Sem promessa de resultado nem caso clínico (`TERMOS_PROIBIDOS`).
- Rodapé é do servidor: assinatura, "vi seu e-mail em {fonte}" e descadastro.

Só texto puro: sem pixel de abertura (contato frio não consentiu, e o Apple Mail
infla a métrica), sem link rastreado. A métrica que importa é **resposta**.

## Peças

| arquivo | papel |
|---|---|
| `lib/prospeccao/config.ts` | status, cadência, rampa, saúde, regras de copy, rodapé, leitura de resposta, métricas — sem I/O, usado no painel também |
| `lib/prospeccao/twenty.ts` | Twenty como banco: leads, campanhas e as Notes de execução, pausa, caixas pausadas e bloqueios |
| `lib/prospeccao/caixas.ts` | pool de caixas: SMTP (envio, `List-Unsubscribe`), resposta na conversa, IMAP (Enviados, respostas com texto, bounces) |
| `lib/prospeccao/operacao.ts` | fila, distribuição pelas caixas, disparo, saúde |
| `lib/prospeccao/ia.ts` | Claude API (opcional): reescrever, ler resposta e rascunhar |
| `lib/prospeccao/validacao.ts` · `triagem.ts` | o que entra (rotina, importação) e a triagem (CRM, bloqueios, MX) |
| `lib/prospeccao/dominio.ts` | MX/SPF/DKIM/DMARC/Spamhaus por DNS-over-HTTPS; MX do destinatário |
| `lib/prospeccao/seguranca.ts` | tokens e assinatura do link de descadastro |
| `app/api/prospeccao/*` | `status` · `checar` · `leads` · `leads/[id]` · `execucoes` (rotina) · `disparo` (cron) · `descadastro` (público) |
| `app/painel/*`, `components/painel/*` | painel (Conversas, Revisão, Campanhas, Leads, Resultados, Caixas, Rotina, Meta), atrás de HTTP Basic (`proxy.ts`) |

### No Twenty

- **Person** (lead): `prospStatus` (PESQUISAR, REVISAR, PRONTO, ENVIADO,
  FOLLOWUP_ENVIADO, RESPONDEU, REUNIAO, DESCADASTRADO, BOUNCE, DESCARTADO),
  `prospPrioridade`, `prospScore`, `prospEtapa`, `prospEmpresa`, `prospCidade`,
  `prospFonte`, `prospEvidencia`, `prospHipotese`, `prospLimite`,
  `prospAssunto`, `prospAssuntoB`, `prospVariante`, `prospMensagem`,
  `prospFollowup`/`2`/`3`, `prospCampanha` (slug), `prospCaixa`,
  `prospMessageId`, `prospEnviadoEm`, `prospFollowupEm`, `prospRespondeuEm`,
  `prospEtapaResposta`, `prospClassificacao`, `prospResposta`,
  `prospRespostaMessageId`, `prospRespostaSugerida`, `prospRespondidoEm`,
  `prospInstrucao`, `prospErro`, `prospLinkedinStatus`, `prospLinkedinNota`, e a
  opção `PROSPECCAO` no `origem`.
- **Campanha de prospecção** (`campanhaProspeccao`): `name`, `slug` (único),
  `status` (ATIVA/PAUSADA/ARQUIVADA), `icp`, `oferta`, `regioes`, `excluir`,
  `referencias`, `tom`.
- **Notes** com título fixo: `Prospecção · PAUSADA`, `Prospecção · caixa
  pausada · <email>`, `Prospecção · bloqueios`, `Prospecção · execução · …`.

## Ligar — checklist

1. **Vercel → Environment Variables** (ver `.env.example`): `PAINEL_SENHA`,
   `PROSPECCAO_TOKEN`, `PROSPECCAO_SECRET` (aleatórios; o SECRET nunca muda
   depois do 1º envio), `TWENTY_API_KEY` e `CRON_SECRET` (já usados pelo
   webinar), `PROSPECCAO_MODO=revisao`. Redeploy.
2. **Caixa(s) de prospecção (recomendado).** Criar `felipe@madebyfelipe.agency` no
   hPanel e listar em `PROSPECCAO_CAIXAS` (JSON: `[{"email":"…","senha":"…","inicio":"YYYY-MM-DD"}]`,
   uma entrada por caixa — cada uma com rampa própria; `teto` opcional). Para uma
   caixa só, `PROSPECCAO_SMTP_USER`/`PROSPECCAO_SMTP_PASSWORD` também servem. O
   `.agency` já tem MX, SPF, DKIM e DMARC com relatório. Sem isso, a prospecção
   sai de `alo@madebyfelipe.com.br` — o mesmo domínio do webinar, da imersão e
   do e-book; uma onda de denúncias de spam derruba tudo junto.
3. **DNS do madebyfelipe.com.br:** o DMARC (`v=DMARC1; p=none`) não tem `rua`,
   então ninguém recebe relatório. Trocar por
   `v=DMARC1; p=none; rua=mailto:alo@madebyfelipe.com.br; fo=1` (o painel →
   Domínio mostra e copia o valor certo para o domínio que estiver em uso).
4. **Abrir `/painel/campanhas` → Domínio**: tudo OK, SMTP e IMAP autenticando.
5. **Teste real:** aba Revisão → Enviar teste para um Gmail pessoal. Caiu na
   entrada? "Mostrar original" com SPF/DKIM/DMARC = PASS?
6. **Ambiente do Claude Code** (onde a rotina roda): adicionar a variável
   `PROSPECCAO_TOKEN` (o mesmo valor da Vercel) e liberar
   `madebyfelipe.com.br` no acesso de rede, se o nível não for o completo.
7. **Definir `PROSPECCAO_INICIO`** (YYYY-MM-DD) na Vercel — só aí algo sai.
   Começa com 5/dia e sobe sozinho.
8. **Opcional:** `ANTHROPIC_API_KEY` (IA no painel: reescrita na hora, leitura e
   rascunho das respostas) e `PROSPECCAO_LINK_AGENDA` (link que entra na réplica
   para quem demonstrou interesse). Sem a chave, a rotina noturna faz o mesmo.
9. Depois de 2–3 semanas com taxa de bounce < 2% e sem denúncias, considerar
   `PROSPECCAO_MODO=automatico` e DMARC `p=quarantine`.

## Operação

- **Pausar:** "Pausar tudo" no topo do painel; uma campanha (aba Campanhas); ou
  uma caixa (aba Caixas). Vale no próximo lote, sem redeploy.
  `PROSPECCAO_PAUSADO=1` pausa tudo pelo ambiente.
- **Conversas:** a aba abre sozinha quando há resposta esperando. A réplica sai
  da caixa que conduz o lead, na mesma conversa, sem rodapé de descadastro.
- **Importar lista:** aba Campanhas. "De onde veio a lista" é obrigatório — vai
  para o rodapé do e-mail (LGPD art. 9º). A rotina completa a pesquisa à noite.
- **Não contatar:** aba Campanhas → um e-mail ou domínio por linha.
- **Disparo manual / prévia da fila:** painel → Rotina.
- **Descadastro:** link no rodapé + botão "Cancelar inscrição" do Gmail/Yahoo
  (headers `List-Unsubscribe`). Responder "não" também para a sequência (é
  resposta). **Não apague** o Person de quem saiu: o registro `DESCADASTRADO` é
  a lista de supressão. Pedido de eliminação (LGPD art. 18) → apague os campos
  `prosp*` de texto e mantenha só e-mail + status (art. 16, I).
- **LinkedIn:** a rotina sugere perfil e nota do convite; o convite é enviado à
  mão (automação viola os termos do LinkedIn e derruba a conta). Marque o passo
  no painel.

## LGPD, em uma linha cada

- Base legal: legítimo interesse (art. 7º, IX) sobre e-mail profissional
  publicado pela própria titular, para oferta B2B relacionada à atividade dela.
- Origem do dado sempre registrada (`prospFonte`) e informada no rodapé.
- Oposição a um clique, honrada para sempre (supressão).
- Sem compra de base, sem e-mail adivinhado, sem rastreio.

## Teste local

`npm run build && npm run start` com `TWENTY_BASE_URL` apontando para um mock
e `PROSPECCAO_SMTP_HOST` para um SMTP de teste. Endpoints:

```bash
curl -H "Authorization: Bearer $PROSPECCAO_TOKEN" localhost:3000/api/prospeccao/status
curl -H "Authorization: Bearer $CRON_SECRET" "localhost:3000/api/prospeccao/disparo?dry=1"
```

## O que ainda não existe (de propósito ou por fazer)

- **Resposta automática pelo agente**: a IA só rascunha; quem envia é o
  Felipe. Conversa com uma possível cliente não sai sem leitura humana.
- **Base de dados própria / enriquecimento pago** (Apollo, Hunter): fora — a
  rotina só usa e-mail publicado pela própria profissional.
- **Verificação SMTP do destinatário** (RCPT probe): a Vercel não abre a porta
  25; a checagem é de MX, e bounce real tira o lead e pode pausar a caixa.
- **Rastreio de abertura/clique**: fora de propósito (consentimento e entregabilidade).
- **Automação de LinkedIn:** fora, pelos termos de uso.
- **IA testada com chave real:** o código segue o SDK oficial, mas foi testado
  só sem a chave (cai para a rotina). Na 1ª vez com `ANTHROPIC_API_KEY`, teste
  "Reescrever agora" e "Sugerir com IA" num lead antes de confiar.
