/** Exercita o Next real contra um Twenty local em memória. Nenhum contato externo. */
const http = require("node:http");
const { spawn } = require("node:child_process");
const { randomUUID, randomBytes } = require("node:crypto");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { chromium } = require("playwright");
const notes = new Map();
let count = 0;
const token = randomBytes(20).toString("hex"),
  password = randomBytes(20).toString("hex");
const mock = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const send = (status, data) => {
    res.writeHead(status);
    res.end(JSON.stringify(data));
  };
  if (req.headers.authorization !== `Bearer ${token}`) return send(401, {});
  const url = new URL(req.url, "http://localhost");
  if (url.pathname === "/rest/people")
    return send(200, {
      data: {
        people: [
          { id: "known", emails: { primaryEmail: "contato@existing.example" } },
        ],
      },
      pageInfo: { hasNextPage: false },
    });
  if (url.pathname === "/rest/notes" && req.method === "POST") {
    let raw = "";
    for await (const c of req) raw += c;
    const data = JSON.parse(raw);
    if (notes.has(data.id)) return send(409, {});
    const n = {
      ...data,
      createdAt: new Date(Date.now() + count++).toISOString(),
    };
    notes.set(n.id, n);
    return send(201, { data: { createNote: n } });
  }
  if (url.pathname === "/rest/notes" && req.method === "GET") {
    assert.match(url.searchParams.get("filter"), /Cold call/);
    const rows = [...notes.values()].sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt),
    );
    const start = url.searchParams.get("starting_after");
    const i = start ? rows.findIndex((n) => n.id === start) + 1 : 0;
    const page = rows.slice(i, i + 3);
    return send(200, {
      data: { notes: page },
      pageInfo: {
        hasNextPage: i + 3 < rows.length,
        endCursor: page.at(-1)?.id,
      },
    });
  }
  if (url.pathname.startsWith("/rest/notes/")) {
    const n = notes.get(url.pathname.split("/").at(-1));
    return send(n ? 200 : 404, { data: { note: n } });
  }
  return send(404, {});
});
const formLead = (n = 0) => ({
  empresa:
    [
      "Clínica Horizonte · teste",
      "Espaço Crescer · teste",
      "Psicologia Acolher · teste",
    ][n] || `Clínica teste ${n}`,
  contato: "Dra. Marina · exemplo",
  telefone: `55159912345${String(n).padStart(2, "0")}`,
  fonteTelefone: "https://clinica.example/contato",
  cidade: "Sorocaba · SP",
  segmento: "Psicologia infantil · TEA",
  site: "https://clinica.example",
  responsavel: "Leonardo",
  pesquisa: {
    resumo:
      "Clínica de psicologia infantil com atendimento a crianças autistas e orientação parental. Dados fictícios exclusivos deste teste.",
    gancho:
      "O site apresenta um grupo de orientação parental para famílias de crianças autistas.",
    oportunidade:
      "Entender se a proposta do grupo está clara para os pais que chegam pelo site.",
    limite: "Decisor e parceiro atual de comunicação ainda não confirmados.",
    fontes: [
      {
        url: "https://clinica.example/servicos",
        fato: "Página de serviços descreve orientação parental.",
      },
      {
        url: "https://clinica.example/sobre",
        fato: "Equipe especializada em psicologia infantil.",
      },
    ],
  },
});
(async () => {
  await new Promise((r) => mock.listen(0, "127.0.0.1", r));
  const port = Number(process.env.COLD_CALL_TEST_PORT || 3210);
  const base = `http://127.0.0.1:${port}`;
  const log = fs.openSync("/tmp/cold-call-integration-next.log", "w");
  const child = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      process.env.COLD_CALL_TEST_DEV ? "dev" : "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    {
      cwd: process.cwd(),
      env: {
        ...process.env,
        PAINEL_SENHA: password,
        PAINEL_USUARIO: "teste",
        PROSPECCAO_TOKEN: token,
        TWENTY_API_KEY: token,
        TWENTY_BASE_URL: `http://127.0.0.1:${mock.address().port}`,
      },
      stdio: ["ignore", log, log],
      detached: true,
    },
  );
  const basic = `Basic ${Buffer.from(`teste:${password}`).toString("base64")}`;
  let browser;
  const req = async (path, body, auth = basic, headers = {}) => {
    const r = await fetch(base + path, {
      method: body ? "POST" : "GET",
      headers: {
        Authorization: auth,
        ...(body ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const raw = await r.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      data = raw;
    }
    return { status: r.status, data };
  };
  const panel = (b) => req("/painel/api/cold-call", b);
  const routine = (b) => req("/api/cold-call/rotina", b, `Bearer ${token}`);
  try {
    for (let n = 0; n < 60; n++) {
      try {
        const r = await fetch(base + "/painel/cold-call");
        if (r.status === 401) break;
      } catch {}
      await new Promise((r) => setTimeout(r, 500));
      if (n === 59) throw Error("Next did not start");
    }
    assert.equal(
      (await req("/painel/api/cold-call", undefined, "")).status,
      401,
    );
    assert.equal(
      (await req("/api/cold-call/rotina", undefined, "")).status,
      401,
    );
    assert.equal(
      (
        await req(
          "/painel/api/cold-call",
          { acao: "pedido", id: randomUUID() },
          basic,
          { Origin: "https://other.example" },
        )
      ).status,
      403,
    );
    assert.equal((await panel()).data.leads.length, 0);
    let imported = await routine({
      acao: "importar",
      leads: [formLead(0), formLead(1), formLead(2)],
    });
    assert.equal(imported.status, 200);
    assert.equal(imported.data.criados.length, 3);
    const [one, two, three] = imported.data.criados;
    imported = await routine({
      acao: "importar",
      leads: [
        formLead(0),
        { ...formLead(4), site: "https://existing.example" },
      ],
    });
    assert.equal(imported.data.criados.length, 0);
    assert.equal(imported.data.ignorados.length, 2);
    const before = {
      acao: "ligacao",
      ligacao: {
        id: randomUUID(),
        leadId: one,
        resultado: "NAO_ATENDEU",
        notas: "Sem resposta",
        duracao: 20,
        responsavel: "Leonardo",
        retornoEm: null,
        proximaAcao: "",
      },
    };
    assert.equal((await panel(before)).status, 409);
    assert.equal(
      (await panel({ acao: "aprovar", id: randomUUID(), leadId: one })).status,
      200,
    );
    assert.equal(
      (await panel({ acao: "aprovar", id: randomUUID(), leadId: two })).status,
      200,
    );
    const approval = { acao: "aprovar", id: randomUUID(), leadId: three };
    assert.equal((await panel(approval)).status, 200);
    assert.equal((await panel(approval)).status, 200);
    const call = {
      acao: "ligacao",
      ligacao: {
        ...before.ligacao,
        id: randomUUID(),
        resultado: "RETORNO",
        notas: "Decisora pediu retorno. Registro de teste.",
        retornoEm: new Date(Date.now() + 86400000).toISOString(),
        proximaAcao: "Conversar sobre posicionamento",
      },
    };
    assert.equal((await panel(call)).status, 200);
    assert.equal((await panel(call)).status, 200);
    let s = (await panel()).data;
    assert.equal(s.leads.find((l) => l.id === one).historico.length, 1);
    assert.equal(s.leads.find((l) => l.id === one).status, "RETORNO");
    assert.equal(
      (
        await panel({
          acao: "ligacao",
          ligacao: { ...call.ligacao, notas: "Mudou" },
        })
      ).status,
      409,
    );
    const terminal = {
      acao: "ligacao",
      ligacao: {
        ...before.ligacao,
        id: randomUUID(),
        leadId: two,
        resultado: "NAO_CONTATAR",
        notas: "Pediu para não receber contato.",
      },
    };
    assert.equal((await panel(terminal)).status, 200);
    assert.equal(
      (
        await panel({
          ...before,
          ligacao: { ...before.ligacao, id: randomUUID(), leadId: two },
        })
      ).status,
      409,
    );
    const config = (await panel()).data.config;
    assert.equal(
      (
        await panel({
          acao: "config",
          id: randomUUID(),
          config: { ...config, pausada: true },
        })
      ).status,
      200,
    );
    assert.equal((await routine()).data.pesquisarAte, 0);
    assert.equal(
      (await routine({ acao: "importar", leads: [formLead(4)] })).status,
      409,
    );
    assert.equal(
      (await panel({ acao: "config", id: randomUUID(), config })).status,
      200,
    );
    const pedido = await panel({
      acao: "pedido",
      id: randomUUID(),
      observacao: "Priorizar Sorocaba",
    });
    assert.equal(pedido.status, 200);
    const report = {
      acao: "relatorio",
      id: randomUUID(),
      resumo: "Execução fictícia do teste local.",
      pesquisados: 4,
      importados: 3,
      descartados: 1,
      requestIds: [pedido.data.resultado],
    };
    assert.equal((await routine(report)).status, 200);
    assert.equal((await routine(report)).status, 200);
    assert.equal((await routine()).data.pedidos.length, 0);
    console.log(
      "API: autenticação, origem, importação, deduplicação, revisão, retry, supressão, pausa, paginação e relatório passaram.",
    );
    browser = await chromium.launch({
      executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
      args: ["--no-sandbox"],
    });
    const context = await browser.newContext({
      httpCredentials: { username: "teste", password },
      viewport: { width: 1550, height: 1080 },
    });
    await context.addInitScript(() =>
      localStorage.setItem(
        "mbf-consent",
        JSON.stringify({ value: "denied", at: new Date().toISOString() }),
      ),
    );
    const p = await context.newPage();
    const errors = [];
    p.on("pageerror", (e) => errors.push(e.message));
    await p.goto(base + "/painel/cold-call", { waitUntil: "networkidle" });
    const deny = p.getByRole("button", { name: "Recusar cookies de medição" });
    if (await deny.count()) await deny.click();
    await p.getByRole("heading", { name: "Boas conversas." }).waitFor();
    await p.getByRole("button", { name: /Clínica Horizonte/ }).click();
    await p.screenshot({ path: "/tmp/cold-call-desktop.png", fullPage: true });
    await p.getByRole("button", { name: /Psicologia Acolher/ }).click();
    await p
      .getByRole("button", { name: "Iniciar ligação", exact: true })
      .click();
    await p
      .getByLabel("O que você ouviu?")
      .fill("Teste de rascunho e persistência no histórico.");
    await p.reload({ waitUntil: "networkidle" });
    await p.getByRole("button", { name: /Psicologia Acolher/ }).click();
    await p
      .getByText("Rascunho recuperado desta sessão.", { exact: false })
      .waitFor();
    assert.equal(
      await p.getByLabel("O que você ouviu?").inputValue(),
      "Teste de rascunho e persistência no histórico.",
    );
    await p
      .getByLabel("Resultado da ligação", { exact: true })
      .selectOption("REUNIAO");
    const tomorrow = new Date(Date.now() + 86400000);
    const local = new Date(tomorrow.getTime() - 3 * 3600000)
      .toISOString()
      .slice(0, 16);
    await p.getByLabel("Próximo contato · Brasília").fill(local);
    await p
      .getByLabel("Próximo passo", { exact: true })
      .fill("Conversa de 20 minutos com Felipe.");
    await p
      .getByRole("button", { name: "Salvar resultado", exact: true })
      .click();
    await p
      .getByText("Ligação salva no histórico e próximo passo atualizado.", {
        exact: true,
      })
      .waitFor();
    await p.getByRole("button", { name: "Agenda", exact: false }).click();
    assert.ok(
      (await p.getByRole("button", { name: "Calendário ↓" }).count()) === 2,
    );
    const downloadPromise = p.waitForEvent("download");
    await p.getByRole("button", { name: "Calendário ↓" }).first().click();
    const dl = await downloadPromise;
    assert.ok(dl.suggestedFilename().endsWith(".ics"));
    await p.getByRole("button", { name: "Rotina Codex", exact: true }).click();
    await p.getByRole("heading", { name: "Perfil da próxima busca" }).waitFor();
    await p.screenshot({ path: "/tmp/cold-call-rotina.png", fullPage: true });
    const axePath = process.env.AXE_CORE_PATH;
    if (axePath) {
      for (const tema of ["light", "dark"]) {
        await p.evaluate((t) => {
          document.documentElement.dataset.instTheme = t;
        }, tema);
        await p.evaluate(async () => {
          await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          await Promise.all(document.getAnimations().filter(a => a.effect?.getTiming().iterations !== Infinity).map(a => a.finished.catch(() => {})));
        });
        await p.addScriptTag({ path: axePath });
        const result = await p.evaluate(
          async () =>
            await window.axe.run(document.querySelector(".cc-shell"), {
              runOnly: {
                type: "tag",
                values: ["wcag2a", "wcag2aa", "wcag21aa"],
              },
            }),
        );
        if (result.violations.length)
          console.log(
            JSON.stringify(
              result.violations.map((v) => ({
                id: v.id,
                nodes: v.nodes.map((n) => ({
                  target: n.target,
                  summary: n.failureSummary,
                })),
              })),
              null,
              2,
            ),
          );
        assert.equal(result.violations.length, 0, `axe ${tema}`);
      }
    }
    await p
      .getByRole("button", { name: "Mesa de ligação", exact: true })
      .click();
    await p.setViewportSize({ width: 390, height: 844 });
    await p.screenshot({ path: "/tmp/cold-call-mobile.png", fullPage: true });
    assert.ok(
      await p.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      "Sem overflow no celular",
    );
    if (axePath) {
      for (const tema of ["light", "dark"]) {
        await p.evaluate(t => { document.documentElement.dataset.instTheme = t; }, tema);
        await p.evaluate(async () => {
          await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          await Promise.all(document.getAnimations().filter(a => a.effect?.getTiming().iterations !== Infinity).map(a => a.finished.catch(() => {})));
        });
        const audit = await p.evaluate(async () => window.axe.run(document.querySelector(".cc-shell"), { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa"] } }));
        assert.deepEqual(audit.violations.map(v => ({id:v.id, nodes:v.nodes.map(n=>n.target)})), [], `Mesa mobile ${tema}`);
      }
    }
    await p.getByRole("button", { name: "+ Nova empresa" }).click();
    await p.getByRole("dialog", { name: "Nova empresa" }).waitFor();
    if (axePath) {
      const audit = await p.evaluate(async () => window.axe.run(document.querySelector(".cc-dialog"), {runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21aa"]}}));
      assert.deepEqual(audit.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)})),[],"Cadastro acessível");
    }
    await p.getByLabel("Empresa *", {exact:true}).fill("Consultório manual · teste");
    await p.getByLabel("Telefone com DDD *", {exact:true}).fill("(15) 3333-1234");
    await p.getByLabel("Cidade *", {exact:true}).fill("Sorocaba");
    await p.getByLabel("Onde o telefone profissional está publicado? *", {exact:true}).fill("https://manual.example/contato");
    await p.getByRole("button",{name:"Adicionar à revisão",exact:true}).click();
    await p.getByRole("dialog",{name:"Nova empresa"}).waitFor({state:"hidden"});
    await p.getByRole("button",{name:/Consultório manual/}).click();
    await p.getByRole("button",{name:"Fora do perfil",exact:true}).click();
    await p.getByText("Contato descartado por estar fora do perfil.",{exact:true}).waitFor();
    assert.deepEqual(errors, []);
    console.log(
      "Browser: roteiro, rascunho recuperado, reunião, agenda, calendário, rotina, mobile e console passaram.",
    );
  } finally {
    if (browser) await browser.close();
    process.kill(-child.pid, "SIGTERM");
    await new Promise((r) => child.once("exit", r));
    mock.close();
    fs.closeSync(log);
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
  mock.close();
});
