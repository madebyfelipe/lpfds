"use client";

import { useId, useRef, useState } from "react";
import { LP_ORIGEM_PREVIEW_EN, validateLpPreview } from "@/lib/lp";

type Estado = "idle" | "enviando" | "enviado" | "erro";

const rotulos = { nome: "your name", email: "your email", link: "a valid link (starting with https://)", consentimento: "" };

/**
 * Formulário da prévia grátis (/en/lp) → /api/lp-lead, origem "preview-en".
 * Usa os campos do institucional (inst-form). "Thanks" só depois de ok:true.
 */
export function LpPreviewForm() {
  const [form, setForm] = useState({ nome: "", email: "", link: "", consentimento: false });
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");
  const [invalido, setInvalido] = useState<string | null>(null);
  const uid = useId();
  const statusId = `${uid}-status`;
  const refs = {
    nome: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    link: useRef<HTMLInputElement>(null),
    consentimento: useRef<HTMLInputElement>(null)
  };

  const set = (k: "nome" | "email" | "link") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((c) => ({ ...c, [k]: e.target.value }));
    if (estado === "erro") {
      setEstado("idle");
      setErro("");
      setInvalido(null);
    }
  };

  const enviar = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (estado === "enviando") return;
    const honeypot = (new FormData(event.currentTarget).get("site") as string) ?? "";
    const faltando = validateLpPreview(form);
    if (faltando) {
      setErro(
        faltando === "consentimento"
          ? "To send this, please tick the box to agree."
          : `Please check ${rotulos[faltando]}.`
      );
      setInvalido(faltando);
      setEstado("erro");
      refs[faltando].current?.focus();
      return;
    }
    setEstado("enviando");
    try {
      const res = await fetch("/api/lp-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ origem: LP_ORIGEM_PREVIEW_EN, ...form, site: honeypot })
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !json?.ok) throw new Error("falhou");
      setEstado("enviado");
      setForm({ nome: "", email: "", link: "", consentimento: false });
    } catch {
      setErro("We couldn't send that just now. Please try again, or email us.");
      setInvalido(null);
      setEstado("erro");
    }
  };

  if (estado === "enviado") {
    return (
      <div className="lpx-thanks" role="status" tabIndex={-1}>
        <h3 className="lpx-thanks__title">Thanks. Your request is in.</h3>
        <p>We&apos;ll start on your homepage preview and reply by email.</p>
      </div>
    );
  }

  const inv = (c: string) => (estado === "erro" && invalido === c ? true : undefined);

  return (
    <form className="inst-form" onSubmit={enviar} noValidate>
      <label className="inst-field">
        <span className="inst-field__label">Your name</span>
        <input ref={refs.nome} type="text" name="nome" autoComplete="name" required aria-required="true"
          aria-invalid={inv("nome")} aria-describedby={statusId} value={form.nome} onChange={set("nome")}
          className="inst-field__input" placeholder="Dr. Jane Doe" />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">Email</span>
        <input ref={refs.email} type="email" name="email" autoComplete="email" required aria-required="true"
          aria-invalid={inv("email")} aria-describedby={statusId} value={form.email} onChange={set("email")}
          className="inst-field__input" placeholder="you@yourpractice.com" />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">
          Link to your current site or profile <span className="inst-field__optional">(optional)</span>
        </span>
        <input ref={refs.link} type="url" name="link" inputMode="url" aria-invalid={inv("link")}
          aria-describedby={statusId} value={form.link} onChange={set("link")}
          className="inst-field__input" placeholder="https://" />
      </label>
      <div className="lpx-hp" aria-hidden="true">
        <label>Leave this field empty <input type="text" name="site" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <label className="inst-consent">
        <input ref={refs.consentimento} type="checkbox" name="consentimento" required aria-required="true"
          aria-invalid={inv("consentimento")} checked={form.consentimento}
          onChange={(e) => {
            setForm((c) => ({ ...c, consentimento: e.target.checked }));
            if (estado === "erro") { setEstado("idle"); setErro(""); setInvalido(null); }
          }} />
        <span>
          I agree that Made by Felipe may use my details to prepare my free preview and contact me by email about it.
        </span>
      </label>
      <button type="submit" className="inst-submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Sending…" : "See my free preview →"}
      </button>
      <p id={statusId} className="inst-form__status" role={estado === "erro" ? "alert" : "status"}>
        {estado === "erro" ? erro : ""}
      </p>
      <p className="lpx-fine">Nothing is published or charged without your written approval.</p>
    </form>
  );
}
