"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { enviarComentario, MAX_NOME, MAX_TEXTO, validateComentario } from "@/lib/comentarios";

type Estado = "idle" | "enviando" | "enviado" | "erro";

// Formulário de comentário do blog. Mesmo padrão do ImersaoForm (classes
// .inst-form/.inst-field sobre superfície .inst-dark, erro com foco no campo,
// aceite obrigatório). O envio vai para moderação — nunca aparece na hora.
export function ComentarioForm({ slug }: { slug: string }) {
  const [form, setForm] = useState({ nome: "", texto: "", consentimento: false, site: "" });
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");
  const [campoInvalido, setCampoInvalido] = useState<string | null>(null);

  const uid = useId();
  const statusId = `${uid}-status`;
  const refs = {
    nome: useRef<HTMLInputElement>(null),
    texto: useRef<HTMLTextAreaElement>(null),
    consentimento: useRef<HTMLInputElement>(null)
  };

  const limparErro = () => {
    setEstado("idle");
    setErro("");
    setCampoInvalido(null);
  };

  const enviar = async (event: React.FormEvent) => {
    event.preventDefault();
    if (estado === "enviando") return;

    const faltando = validateComentario(form);
    if (faltando) {
      setErro(
        faltando === "consentimento"
          ? "Para enviar, é preciso aceitar a Política de Privacidade."
          : faltando === "nome"
            ? "Preencha o seu nome."
            : "Escreva o comentário."
      );
      setCampoInvalido(faltando);
      setEstado("erro");
      refs[faltando].current?.focus();
      return;
    }

    setEstado("enviando");
    try {
      await enviarComentario({ slug, ...form });
      setEstado("enviado");
      setForm({ nome: "", texto: "", consentimento: false, site: "" });
    } catch (e) {
      setErro(
        e instanceof Error && e.message === "429"
          ? "Muitos envios seguidos. Tente de novo daqui a alguns minutos."
          : "Não consegui enviar agora. Tente de novo mais tarde."
      );
      setCampoInvalido(null);
      setEstado("erro");
    }
  };

  const status =
    estado === "enviando"
      ? "Enviando…"
      : estado === "enviado"
        ? "Recebido. O comentário aparece aqui depois de aprovado."
        : estado === "erro"
          ? erro
          : "";

  const invalido = (campo: string) => (estado === "erro" && campoInvalido === campo ? true : undefined);

  return (
    <form className="inst-form" onSubmit={enviar} noValidate>
      <label className="inst-field">
        <span className="inst-field__label">Nome</span>
        <input
          ref={refs.nome}
          type="text"
          name="nome"
          autoComplete="given-name"
          maxLength={MAX_NOME}
          required
          aria-required="true"
          aria-invalid={invalido("nome")}
          aria-describedby={statusId}
          value={form.nome}
          onChange={(e) => {
            setForm((f) => ({ ...f, nome: e.target.value }));
            if (estado === "erro") limparErro();
          }}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">Comentário</span>
        <textarea
          ref={refs.texto}
          name="comentario"
          rows={4}
          maxLength={MAX_TEXTO}
          required
          aria-required="true"
          aria-invalid={invalido("texto")}
          aria-describedby={statusId}
          value={form.texto}
          onChange={(e) => {
            setForm((f) => ({ ...f, texto: e.target.value }));
            if (estado === "erro") limparErro();
          }}
          className="inst-field__input inst-field__input--area"
        />
      </label>

      {/* Honeypot: fora da tela, fora do Tab e escondido de leitor de tela. */}
      <input
        type="text"
        name="site"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="inst-hp"
        value={form.site}
        onChange={(e) => setForm((f) => ({ ...f, site: e.target.value }))}
      />

      <label className="inst-consent">
        <input
          ref={refs.consentimento}
          type="checkbox"
          name="consentimento"
          required
          aria-required="true"
          aria-invalid={invalido("consentimento")}
          checked={form.consentimento}
          onChange={(e) => {
            setForm((f) => ({ ...f, consentimento: e.target.checked }));
            if (estado === "erro") limparErro();
          }}
        />
        <span>
          Autorizo a publicação do meu nome e do comentário neste post, após
          moderação, nos termos da{" "}
          <Link href="/privacidade" className="inst-link">
            Política de Privacidade
          </Link>
          .
        </span>
      </label>

      <button type="submit" className="inst-submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando…" : "Enviar comentário →"}
      </button>

      <p id={statusId} className="inst-form__status" role={estado === "erro" ? "alert" : "status"}>
        {status}
      </p>
    </form>
  );
}
