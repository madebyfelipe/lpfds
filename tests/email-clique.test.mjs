import test from "node:test";
import assert from "node:assert/strict";
import { gerarToken, lerToken, ehRobo, DESTINO_CLIQUE } from "../lib/prospeccao/clique.ts";
import { calcular, canal, MINIMO_POR_BRACO } from "../lib/prospeccao/email-metricas.ts";

const ID = "27751a76-1234-4abc-8def-0123456789ab";
const SEGREDO = "segredo-de-teste";
const h = (o) => new Headers(o);
const CHROME = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36";

test("token: ida e volta, opaco e diferente a cada geração", () => {
  const a = gerarToken(ID, SEGREDO);
  const b = gerarToken(ID, SEGREDO);
  assert.notEqual(a, b);
  assert.equal(lerToken(a, SEGREDO), ID);
  assert.equal(lerToken(b, SEGREDO), ID);
  assert.ok(!a.includes(ID.replace(/-/g, "")) && !a.includes(ID));
  assert.match(a, /^1[A-Za-z0-9_-]+$/);
  assert.ok(a.length < 80);
});

test("token: adulterado, de outro segredo ou lixo → null", () => {
  const t = gerarToken(ID, SEGREDO);
  const meio = Math.floor(t.length / 2);
  const trocado = t.slice(0, meio) + (t[meio] === "A" ? "B" : "A") + t.slice(meio + 1);
  assert.equal(lerToken(trocado, SEGREDO), null);
  assert.equal(lerToken(t, "outro"), null);
  assert.equal(lerToken(t, ""), null);
  assert.equal(lerToken("", SEGREDO), null);
  assert.equal(lerToken("2" + t.slice(1), SEGREDO), null);
  assert.equal(lerToken("1abc", SEGREDO), null);
  assert.throws(() => gerarToken("nao-e-uuid", SEGREDO));
  assert.throws(() => gerarToken(ID, ""));
});

test("robôs e pré-busca não contam; navegador conta", () => {
  assert.equal(ehRobo("GET", h({ "user-agent": CHROME })), false);
  assert.equal(ehRobo("HEAD", h({ "user-agent": CHROME })), true);
  assert.equal(ehRobo("GET", h({})), true);
  assert.equal(ehRobo("GET", h({ "user-agent": CHROME, "sec-purpose": "prefetch;prerender" })), true);
  assert.equal(ehRobo("GET", h({ "user-agent": CHROME, purpose: "prefetch" })), true);
  for (const ua of [
    "WhatsApp/2.23.20.0",
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
    "facebookexternalhit/1.1",
    "Slackbot-LinkExpanding 1.0",
    "curl/8.4.0",
    "python-requests/2.31",
    "Microsoft Office/16.0 (Windows NT 10.0; Microsoft Outlook 16.0)",
    "Mozilla/5.0 (compatible; proofpoint)",
    "Barracuda Sentinel (EE)",
    "Mozilla/5.0 (X11; Linux x86_64) HeadlessChrome/120.0"
  ]) assert.equal(ehRobo("GET", h({ "user-agent": ua })), true, ua);
  assert.equal(DESTINO_CLIQUE, "/exemplo/site-psicologa");
});

const p = (o) => ({ emails: { primaryEmail: "x@y.z" }, ...o });
const AGORA = new Date("2026-11-13T18:00:00Z");

test("contagem segue as definições do benchmark", () => {
  const pessoas = [
    p({ prospCaixa: "leonardo@madebyfelipe.com.br", prospEnviadoEm: "2026-11-13T12:00:00Z", prospStatus: "ENVIADO", prospVariante: "A1", prospEtapa: 0 }),
    p({ prospCaixa: "leonardo@madebyfelipe.com.br", prospEnviadoEm: "2026-11-12T12:00:00Z", prospStatus: "BOUNCE", prospVariante: "A2" }),
    p({ prospCaixa: "contato@madebyfelipe.agency", prospEnviadoEm: "2026-11-05T12:00:00Z", prospStatus: "RESPONDEU", prospRespondeuEm: "2026-11-06T10:00:00Z", prospEtapa: 1, prospCliques: 2 }),
    p({ prospCaixa: "contato@madebyfelipe.agency", prospEnviadoEm: "2026-11-05T12:00:00Z", prospStatus: "GANHO", prospEtapa: 2 }),
    p({ prospCaixa: "alo@madebyfelipe.com.br", prospEnviadoEm: "2026-11-01T12:00:00Z", prospStatus: "ENVIADO", optOut: true }),
    p({ prospCaixa: "whatsapp business do felipe", prospEnviadoEm: "2026-11-13T12:00:00Z", prospStatus: "ENVIADO" }),
    p({ prospStatus: "LISTA_FRIA" }),
    p({ prospStatus: "PRONTO" }),
    p({ prospStatus: "PRONTO", optOut: true }),
    p({ prospCaixa: "leonardo@madebyfelipe.com.br", prospEnviadoEm: "2026-11-06T12:00:00Z", prospStatus: "ENVIADO", prospEtapa: 0 })
  ];
  assert.equal(canal(pessoas[5]), "WhatsApp");
  const m = calcular(pessoas, AGORA);
  assert.equal(m.total.enviados, 6); // o de WhatsApp fica de fora
  assert.equal(m.total.bounces, 1);
  assert.equal(m.total.respostas, 2); // RESPONDEU + GANHO
  assert.equal(m.total.positivas, 1); // GANHO
  assert.equal(m.total.sair, 1);
  assert.equal(m.total.cliques, 2);
  assert.equal(m.cliques.disponivel, true);
  assert.equal(m.cliques.leadsComClique, 1);
  assert.equal(m.fila.elegiveis, 2);
  // devidos: ENVIADO sem resposta, etapa < 2, último envio há 3+ dias, sem SAIR → o de 06/11 só
  assert.equal(m.fila.followupsDevidos, 1);
  assert.deepEqual(m.funil.map((f) => f.valor), [6, 2, 1, 2, 1, 1, 1]);
  assert.equal(m.porDia.length, 14);
  assert.equal(m.porDia.at(-1).grupo, "2026-11-13");
  assert.equal(m.porDia.at(-1).enviados, 1);
  assert.equal(m.porVariante.vencedor, null);
  assert.match(m.porVariante.motivo, /60\+/);
  assert.equal(m.porCaixa[0].grupo, "leonardo@madebyfelipe.com.br");
  assert.equal(m.porCaixa[0].enviados, 3);
  assert.ok(m.alertas.some((a) => /bounce/i.test(a)));
  // nenhum dado pessoal no resultado
  assert.ok(!JSON.stringify(m).includes("x@y.z"));
});

test("vencedor de variante só com 60+ envios por braço", () => {
  const lote = (v, n, resp) =>
    Array.from({ length: n }, (_, i) =>
      p({ prospCaixa: "leonardo@madebyfelipe.com.br", prospEnviadoEm: "2026-11-10T12:00:00Z", prospStatus: i < resp ? "RESPONDEU" : "ENVIADO", prospVariante: v })
    );
  assert.equal(calcular([...lote("A1", 59, 10), ...lote("A2", 80, 1)], AGORA).porVariante.vencedor, null);
  const m = calcular([...lote("A1", MINIMO_POR_BRACO, 6), ...lote("A2", MINIMO_POR_BRACO, 2)], AGORA);
  assert.equal(m.porVariante.vencedor, "A1");
});
