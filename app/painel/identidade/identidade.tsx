"use client";

import { useState } from "react";

const pessoas = [
  { slug: "leonardo-rodrigues", nome: "Leonardo Rodrigues", cargo: "Head do Comercial", email: "leonardo@madebyfelipe.com.br", telefone: "" },
  { slug: "felipe-silva", nome: "Felipe Silva", cargo: "Head de operação", email: "alo@madebyfelipe.com.br", telefone: "+55 (15) 99283-5226" }
];
const dominio = "https://www.madebyfelipe.com.br";
function assinatura(pessoa: typeof pessoas[number]) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td><a href="${dominio}" style="text-decoration:none"><img src="${dominio}/identidade/${pessoa.slug}.gif" width="600" height="180" alt="${pessoa.nome} — ${pessoa.cargo} | ${pessoa.email} ${pessoa.telefone} | Made by Felipe | madebyfelipe.com.br" style="display:block;border:0;max-width:100%;height:auto"></a></td></tr><tr><td style="padding-top:8px;font:12px Arial,sans-serif"><a href="mailto:${pessoa.email}" style="color:#151515">${pessoa.email}</a>${pessoa.telefone ? ' · <a href="tel:+5515992835226" style="color:#151515">+55 (15) 99283-5226</a>' : ""}</td></tr></table>`;
}
export function Identidade() {
  const [status, setStatus] = useState("");
  const [animar, setAnimar] = useState(false);
  async function copiar(pessoa: typeof pessoas[number]) {
    try {
      await navigator.clipboard.write([new ClipboardItem({
        "text/html": new Blob([assinatura(pessoa)], { type: "text/html" }),
        "text/plain": new Blob([`${pessoa.nome}\n${pessoa.cargo}\n${pessoa.email}\n${pessoa.telefone}\n${dominio}`], { type: "text/plain" })
      })]);
      setStatus(`Assinatura de ${pessoa.nome} copiada. Cole nas configurações de assinatura do seu e-mail.`);
    } catch { setStatus("Seu navegador não permitiu copiar. Baixe o HTML, abra no navegador e copie a assinatura exibida."); }
  }
  function baixar(pessoa: typeof pessoas[number]) {
    const url = URL.createObjectURL(new Blob([`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Assinatura — ${pessoa.nome}</title><body>${assinatura(pessoa)}</body></html>`], { type: "text/html;charset=utf-8" }));
    const a = document.createElement("a"); a.href = url; a.download = `assinatura-${pessoa.slug}.html`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <main className="identidade">
    <header className="identidade-header"><a href="/painel/campanhas">← Painel comercial</a><span>MADE BY FELIPE</span></header>
    <p className="identidade-kicker">— RECURSOS DA MARCA / 01</p>
    <h1>Uma marca.<br />Em cada contato.</h1>
    <p className="identidade-intro">Assinaturas da equipe e capa para o WhatsApp Business. A mesma presença, do primeiro e-mail à próxima conversa.</p>
    <section aria-labelledby="assinaturas"><div className="identidade-section"><h2 id="assinaturas">01 / Assinaturas de e-mail</h2><button type="button" onClick={() => setAnimar(!animar)} aria-pressed={animar}>{animar ? "Pausar prévias" : "Ver animação"}</button></div>
      <div className="identidade-grid">{pessoas.map(p => <article key={p.slug} className="identidade-card"><h3>{p.nome}</h3><p>{p.cargo}</p><img src={`/identidade/${p.slug}.${animar ? "gif" : "png"}`} width="1200" height="360" alt={`Assinatura de ${p.nome}, ${p.cargo}`} /><div className="identidade-actions"><button type="button" onClick={() => copiar(p)}>Copiar assinatura</button><button type="button" onClick={() => baixar(p)}>Baixar HTML</button><a href={`/identidade/${p.slug}.gif`} download>GIF animado ↓</a><a href={`/identidade/${p.slug}.png`} download>PNG estático ↓</a></div></article>)}</div>
      <p role="status" aria-live="polite">{status}</p>
      <aside className="identidade-note"><h3>Como usar</h3><p>Clique em “Copiar assinatura” e cole no campo de assinatura do Gmail ou Outlook. Se preferir, baixe o HTML, abra no navegador e copie a peça exibida. Envie um e-mail de teste para conferir o resultado.</p><p>Alguns clientes exibem apenas o primeiro quadro do GIF, que já contém todos os dados. As imagens precisam estar publicadas neste domínio para aparecerem nos e-mails. Use o PNG para uma versão sem movimento.</p></aside>
    </section>
    <section aria-labelledby="whatsapp"><h2 id="whatsapp">02 / WhatsApp Business</h2><div className="identidade-cover"><img src="/identidade/whatsapp-business.png" width="1211" height="681" alt="Capa Made by Felipe: Marcas com presença. Estratégia. Identidade. Conexão." /></div><div className="identidade-actions"><a href="/identidade/whatsapp-business.png" download>Baixar capa PNG ↓</a><span>1211 × 681 px</span></div><p className="identidade-intro">No WhatsApp Business, abra seu perfil comercial e altere a foto de capa. Ajuste o enquadramento na prévia do aplicativo antes de salvar.</p></section>
    <footer>MADE BY FELIPE / IDENTIDADE EM MOVIMENTO</footer>
  </main>;
}
