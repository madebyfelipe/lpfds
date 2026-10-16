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
               pesquisa → lê site/LinkedIn → escreve 1º e-mail + 3 follow-ups
               → POST /api/prospeccao/leads → Twenty (Person, origem PROSPECCAO, REVISAR)

até 9h         Felipe revisa em /painel/campanhas: edita, aprova (PRONTO) ou descarta.
               Modo automático: o que não for vetado sai 4h depois de chegar.

9h · 11h · 14h Vercel Cron → /api/prospeccao/disparo
               1. lê a caixa (IMAP): resposta ou bounce encerram a sequência
               2. follow-ups vencidos (+3, +4, +5 dias úteis, na mesma conversa)
               3. 1ºs e-mails, A → B → C, um por domínio, 14–26 s entre envios
               dentro do limite do dia (aquecimento: 5, 7, 9… até 30)
```

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
| `lib/prospeccao/config.ts` | status, cadência, rampa, regras de copy, rodapé — sem I/O, usado no painel também |
| `lib/prospeccao/twenty.ts` | Twenty como banco: leads (Person `prosp*`), execuções e pausa (Notes) |
| `lib/prospeccao/caixa.ts` | SMTP (envio, `List-Unsubscribe` RFC 8058), IMAP (cópia em Enviados, respostas, bounces) |
| `lib/prospeccao/operacao.ts` | a fila e o disparo |
| `lib/prospeccao/validacao.ts` | o que a rotina manda passa por aqui antes de virar lead |
| `lib/prospeccao/dominio.ts` | MX/SPF/DKIM/DMARC/Spamhaus por DNS-over-HTTPS |
| `lib/prospeccao/seguranca.ts` | tokens e assinatura do link de descadastro |
| `app/api/prospeccao/*` | `status` · `checar` · `leads` · `execucoes` (rotina) · `disparo` (cron) · `descadastro` (público) |
| `app/painel/*`, `components/painel/PainelCampanhas.tsx` | painel, atrás de HTTP Basic (`proxy.ts`) |

### Campos no Twenty (Person)

Criados pela Metadata API em 16/10/2026: `prospStatus`, `prospPrioridade`,
`prospScore`, `prospEtapa`, `prospEmpresa`, `prospCidade`, `prospFonte`,
`prospEvidencia`, `prospHipotese`, `prospLimite`, `prospAssunto`,
`prospMensagem`, `prospFollowup`, `prospFollowup2`, `prospFollowup3`,
`prospCampanha`, `prospMessageId`, `prospEnviadoEm`, `prospFollowupEm`,
`prospRespondeuEm`, `prospErro`, `prospLinkedinStatus`, `prospLinkedinNota`, e a
opção `PROSPECCAO` no `origem`.

## Ligar — checklist

1. **Vercel → Environment Variables** (ver `.env.example`): `PAINEL_SENHA`,
   `PROSPECCAO_TOKEN`, `PROSPECCAO_SECRET` (aleatórios; o SECRET nunca muda
   depois do 1º envio), `TWENTY_API_KEY` e `CRON_SECRET` (já usados pelo
   webinar), `PROSPECCAO_MODO=revisao`. Redeploy.
2. **Caixa de prospecção (recomendado).** Criar `felipe@madebyfelipe.agency` no
   hPanel e preencher `PROSPECCAO_SMTP_USER`/`PROSPECCAO_SMTP_PASSWORD`. O
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
8. Depois de 2–3 semanas com taxa de bounce < 2% e sem denúncias, considerar
   `PROSPECCAO_MODO=automatico` e DMARC `p=quarantine`.

## Operação

- **Pausar:** botão no topo do painel (vale no próximo lote, sem redeploy).
  `PROSPECCAO_PAUSADO=1` faz o mesmo pelo ambiente.
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

- **Classificação de resposta** (interessada / não agora / não): hoje qualquer
  resposta humana vira `RESPONDEU` e para a sequência; ler e responder é com o Felipe.
- **Várias caixas em rodízio** (o que o Explee faz para escalar volume): uma
  caixa por vez. Acima de ~30/dia, o caminho é uma 2ª caixa/domínio.
- **Enriquecimento pago** (Apollo, Hunter): fora — a rotina só usa e-mail
  publicado pela própria profissional.
- **Automação de LinkedIn:** fora, pelos termos de uso.
