import test from "node:test";
import assert from "node:assert/strict";
import {
  validarLead,
  validarLigacao,
  validarConfig,
  CONFIG_PADRAO,
  telefoneBr,
  metricas,
  ordenarFila,
  pontuar,
  statusResultado,
  roteiro,
} from "../lib/cold-call/model.ts";
const raw = {
  empresa: "Clínica de teste",
  telefone: "(15) 3333-4444",
  fonteTelefone: "https://clinica.example/contato",
  cidade: "Sorocaba",
  segmento: "Psicologia infantil",
  pesquisa: {
    resumo: "Atendimento infantil",
    gancho: "Orientação parental publicada",
    oportunidade: "Clareza da oferta",
    limite: "Decisor a confirmar",
    fontes: [{ url: "https://clinica.example/servicos", fato: "Atende TEA" }],
  },
};
const base = () => ({
  ...validarLead(raw),
  id: "lead-123456",
  criadoEm: "2026-10-15T12:00:00Z",
  status: "PRONTO",
  historico: [],
  score: 75,
  prioridade: "B",
  retornoEm: null,
  proximaAcao: "",
  ultimaLigacao: null,
});
test("normaliza DDD/55 sem duplicar empresas e recusa telefone incompleto", () => {
  assert.equal(telefoneBr("(15) 3333-4444"), "551533334444");
  assert.equal(telefoneBr("+55 (15) 3333-4444"), "551533334444");
  assert.throws(() => telefoneBr("3333-4444"));
});
test("rotina exige evidência e URLs seguras; manual permite pesquisa pendente", () => {
  assert.equal(validarLead(raw, true).pesquisa.fontes.length, 1);
  assert.throws(() => validarLead({ ...raw, pesquisa: {} }, true));
  assert.doesNotThrow(() => validarLead({ ...raw, pesquisa: {} }));
  assert.throws(() =>
    validarLead({ ...raw, fonteTelefone: "javascript:alert(1)" }),
  );
  assert.throws(() =>
    validarLead({ ...raw, fonteTelefone: "https://user:pass@host.example" }),
  );
});
test("retorno e reunião requerem horário futuro e combinado; terminal não admite agenda", () => {
  const c = {
    id: "call-123456",
    leadId: "lead-123456",
    resultado: "REUNIAO",
    duracao: 32,
    notas: "Conversou",
    responsavel: "Leonardo",
    proximaAcao: "Reunião com Felipe",
    retornoEm: "2026-10-20T13:00:00-03:00",
  };
  assert.equal(
    validarLigacao(c, new Date("2026-10-18")).retornoEm,
    "2026-10-20T16:00:00.000Z",
  );
  assert.throws(() => validarLigacao({ ...c, retornoEm: null }));
  assert.throws(() => validarLigacao({ ...c, retornoEm: "2020-01-01" }));
  assert.throws(() =>
    validarLigacao({ ...c, resultado: "NAO_CONTATAR" }, new Date("2026-10-18")),
  );
  assert.throws(() =>
    validarLigacao({ ...c, duracao: -1 }, new Date("2026-10-18")),
  );
  assert.equal(statusResultado("NAO_CONTATAR"), "NAO_CONTATAR");
});
test("contagem diária usa Brasília e contabiliza contatos atendidos", () => {
  const l = base();
  l.historico = [
    { resultado: "REUNIAO", criadoEm: "2026-10-19T01:00:00Z" },
    { resultado: "RECEPCAO", criadoEm: "2026-10-18T14:00:00Z" },
    { resultado: "CONVERSOU", criadoEm: "2026-10-19T04:00:00Z" },
  ];
  const m = metricas([l], new Date("2026-10-18T18:00:00Z"));
  assert.equal(m.ligacoes, 2);
  assert.equal(m.conversas, 2);
  assert.equal(m.reunioes, 1);
  assert.equal(m.taxa, 100);
});
test("retorno vencido vem antes do score de pesquisa", () => {
  const a = { ...base(), id: "alta", score: 100 };
  const b = {
    ...base(),
    id: "vencida",
    score: 20,
    retornoEm: "2026-10-16T12:00:00Z",
  };
  assert.equal(ordenarFila([a, b], new Date("2026-10-18"))[0].id, "vencida");
});
test("score é limitado e roteiro não inventa evidência ausente", () => {
  assert.ok(pontuar(validarLead(raw)) <= 100);
  const l = base();
  l.pesquisa.gancho = "";
  assert.match(roteiro(l, "Leonardo", "Oferta")[1].texto, /Ainda não temos/);
});
test("configuração valida limites e preserva ICP escolhido", () => {
  assert.equal(validarConfig(CONFIG_PADRAO).metaDiaria, 20);
  assert.throws(() => validarConfig({ ...CONFIG_PADRAO, tamanhoFila: 1000 }));
  assert.match(CONFIG_PADRAO.icp, /crianças autistas/);
});
