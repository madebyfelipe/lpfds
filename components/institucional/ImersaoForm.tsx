"use client";

import { useState } from "react";

// Formulário da imersão. Mantém o comportamento do protótipo: os três
// campos e a confirmação em texto após o envio.
export function ImersaoForm() {
  const [form, setForm] = useState({ nome: "", escritorio: "", whatsapp: "" });
  const [enviado, setEnviado] = useState(false);

  const set =
    (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement>) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));

  return (
    <form
      className="inst-form"
      onSubmit={(event) => {
        event.preventDefault();
        setEnviado(true);
      }}
    >
      <label className="inst-field">
        <span className="inst-field__label">Nome</span>
        <input
          type="text"
          value={form.nome}
          onChange={set("nome")}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">Escritório</span>
        <input
          type="text"
          value={form.escritorio}
          onChange={set("escritorio")}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">WhatsApp</span>
        <input
          type="tel"
          value={form.whatsapp}
          onChange={set("whatsapp")}
          className="inst-field__input"
        />
      </label>
      <button type="submit" className="inst-submit">
        Enviar →
      </button>
      <p className="inst-form__status" role="status">
        {enviado ? "Recebido. Retorno em até um dia útil." : ""}
      </p>
    </form>
  );
}
