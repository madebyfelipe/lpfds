"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import {
  buscarDesafio,
  enviarComentario,
  MAX_NOME,
  MAX_TEXTO,
  MENSAGEM_BLOQUEIO,
  motivoBloqueio,
  resolverDesafio,
  validateComentario,
  type Comentario,
  type MotivoTexto,
  type SolucaoDesafio
} from "@/lib/comentarios";

type Estado = "idle" | "enviando" | "enviado" | "erro";

/** O servidor recusa resposta mais rápida que isso (robô de formulário). */
const ESPERA_MIN_MS = 3200;

// Formulário de comentário do blog. Mesmo padrão do ImersaoForm (classes
// .inst-form/.inst-field sobre superfície .inst-dark, erro com foco no campo,
// aceite obrigatório). Publica na hora; o captcha (prova de trabalho) roda em
// segundo plano a partir do primeiro foco, sem pedir clique nem imagem.
export function ComentarioForm({
  slug,
  onPublicado
}: {
  slug: string;
  onPublicado: (comentario: Comentario) => void;
}) {
  const [form, setForm] = useState({ nome: "", texto: "", consentimento: false, site: "" });
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");
  const [campoInvalido, setCampoInvalido] = useState<string | null>(null);

  // Cada desafio resolvido vale para um envio só: depois de usar, descarta.
  const desafio = useRef<{ promessa: Promise<SolucaoDesafio>; inicio: number } | null>(null);
  const prepararCaptcha = () => {
    if (desafio.current) return;
    const promessa = buscarDesafio().then(resolverDesafio);
    desafio.current = { promessa, inicio: Date.now() };
    promessa.catch(() => {
      desafio.current = null;
    });
  };

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

    const bloqueio = motivoBloqueio(`${form.nome} ${form.texto}`);
    if (bloqueio) {
      setErro(MENSAGEM_BLOQUEIO[bloqueio]);
      setCampoInvalido("texto");
      setEstado("erro");
      refs.texto.current?.focus();
      return;
    }

    setEstado("enviando");
    try {
      prepararCaptcha();
      const atual = desafio.current!;
      const captcha = await atual.promessa;
      const falta = ESPERA_MIN_MS - (Date.now() - atual.inicio);
      if (falta > 0) await new Promise((resolve) => setTimeout(resolve, falta));
      const publicado = await enviarComentario({ slug, ...form, captcha });
      desafio.current = null;
      onPublicado(publicado);
      setEstado("enviado");
      setForm({ nome: "", texto: "", consentimento: false, site: "" });
    } catch (e) {
      desafio.current = null;
      const codigo = e instanceof Error ? e.message : "";
      setErro(
        codigo === "429" || codigo === "rate_limited" || codigo === "busy"
          ? "Muitos envios seguidos. Tente de novo daqui a alguns minutos."
          : codigo === "unconfigured" || codigo === "503"
            ? "Os comentários estão indisponíveis no momento. Tente de novo mais tarde."
            : codigo.startsWith("blocked_content:")
              ? MENSAGEM_BLOQUEIO[codigo.split(":")[1] as MotivoTexto]
              : codigo === "captcha_failed" || codigo === "captcha_unsolved"
                ? "Não consegui confirmar que você não é um robô. Recarregue a página e tente de novo."
                : "Não consegui enviar agora. Tente de novo mais tarde."
      );
      setCampoInvalido(codigo.startsWith("blocked_content:") ? "texto" : null);
      setEstado("erro");
    }
  };

  const status =
    estado === "enviando"
      ? "Enviando…"
      : estado === "enviado"
        ? "Comentário publicado. Obrigado por participar."
        : estado === "erro"
          ? erro
          : "";

  const invalido = (campo: string) => (estado === "erro" && campoInvalido === campo ? true : undefined);

  return (
    <form className="inst-form" onSubmit={enviar} onFocus={prepararCaptcha} noValidate>
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
          Autorizo a publicação imediata do meu nome e do comentário neste post,
          nos termos da{" "}
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
