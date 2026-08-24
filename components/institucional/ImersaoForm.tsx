"use client";

import { useState } from "react";
import { fieldLabels, requestImersao, validateImersao } from "@/lib/imersao";

type Estado = "idle" | "enviando" | "enviado" | "erro";

// Formulário da imersão. Mantém o comportamento do protótipo: os três
// campos e a confirmação em texto após o envio. O campo CRP substituiu
// "Escritório": confirma registro profissional e sinaliza que o estúdio
// conhece a regra da categoria.
//
// O envio vai para /api/imersao, que manda o pedido por e-mail para o
// Felipe. Se o disparo falhar, o form diz — e oferece o WhatsApp — em vez
// de mostrar a confirmação como antes, quando ele não enviava nada.
export function ImersaoForm() {
  const [form, setForm] = useState({ nome: "", crp: "", whatsapp: "" });
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");

  const set =
    (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
      if (estado === "erro") setEstado("idle");
    };

  const enviar = async (event: React.FormEvent) => {
    event.preventDefault();
    if (estado === "enviando") return;

    const faltando = validateImersao(form);
    if (faltando) {
      setErro(`Preencha o campo ${fieldLabels[faltando]}.`);
      setEstado("erro");
      return;
    }

    setEstado("enviando");
    try {
      await requestImersao(form);
      setEstado("enviado");
      setForm({ nome: "", crp: "", whatsapp: "" });
    } catch {
      setErro("Não consegui enviar agora. Chama no WhatsApp que eu respondo.");
      setEstado("erro");
    }
  };

  const status =
    estado === "enviando"
      ? "Enviando…"
      : estado === "enviado"
        ? "Recebido. Retorno em até um dia útil."
        : estado === "erro"
          ? erro
          : "";

  return (
    <form className="inst-form" onSubmit={enviar} noValidate>
      <label className="inst-field">
        <span className="inst-field__label">Nome</span>
        <input
          type="text"
          name="nome"
          autoComplete="name"
          value={form.nome}
          onChange={set("nome")}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">CRP</span>
        <input
          type="text"
          name="crp"
          value={form.crp}
          onChange={set("crp")}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">WhatsApp</span>
        <input
          type="tel"
          name="whatsapp"
          autoComplete="tel"
          value={form.whatsapp}
          onChange={set("whatsapp")}
          className="inst-field__input"
        />
      </label>
      <button type="submit" className="inst-submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando…" : "Enviar →"}
      </button>
      <p className="inst-form__status" role="status">
        {status}
      </p>
    </form>
  );
}
