"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { captureUtm, readUtm } from "@/lib/newsletter";
import { fieldLabels, requestWebinar, validateWebinar } from "@/lib/webinar";

type Estado = "idle" | "enviando" | "enviado" | "erro";

// Formulário de inscrição no webinar. Coleta contato (e-mail, WhatsApp) + o @
// do Instagram (canal onde o conteúdo roda) e o nome; CRP é opcional. O envio
// vai para /api/webinar, que grava no Twenty com `origem: WEBINAR` e avisa o
// Felipe por e-mail. Se o disparo falhar, o form diz — nunca mostra a
// confirmação sem ter enviado.
//
// O aceite da política é obrigatório e checado nos dois lados (LGPD art. 7º, I).
export function WebinarForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    instagram: "",
    crp: "",
    consentimento: false,
  });
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");
  const [campoInvalido, setCampoInvalido] = useState<string | null>(null);

  const uid = useId();
  const statusId = `${uid}-status`;
  const consentId = `${uid}-consent`;

  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const instagramRef = useRef<HTMLInputElement>(null);
  const crpRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const refs: Record<string, React.RefObject<HTMLInputElement | null>> = {
    nome: nomeRef,
    email: emailRef,
    whatsapp: whatsappRef,
    instagram: instagramRef,
    crp: crpRef,
    consentimento: consentRef,
  };

  // Retém a atribuição de campanha assim que a página carrega (o tráfego do
  // webinar vem da linha de conteúdo com UTM).
  useEffect(() => {
    captureUtm();
  }, []);

  const limparErro = () => {
    setEstado("idle");
    setErro("");
    setCampoInvalido(null);
  };

  const set =
    (key: "nome" | "email" | "whatsapp" | "instagram" | "crp") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
      if (estado === "erro") limparErro();
    };

  const enviar = async (event: React.FormEvent) => {
    event.preventDefault();
    if (estado === "enviando") return;

    const faltando = validateWebinar(form);
    if (faltando) {
      setErro(
        faltando === "consentimento"
          ? "Para se inscrever, é preciso aceitar a Política de Privacidade."
          : `Preencha o campo ${fieldLabels[faltando]}.`,
      );
      setCampoInvalido(faltando);
      setEstado("erro");
      // Leva o foco ao campo que faltou — teclado e leitor de tela precisam saber
      // para onde voltar.
      refs[faltando]?.current?.focus();
      return;
    }

    setEstado("enviando");
    try {
      await requestWebinar({ ...form, utm: readUtm() });
      setEstado("enviado");
      setForm({
        nome: "",
        email: "",
        whatsapp: "",
        instagram: "",
        crp: "",
        consentimento: false,
      });
    } catch {
      setErro("Não consegui inscrever agora. Tente de novo em instantes.");
      setCampoInvalido(null);
      setEstado("erro");
    }
  };

  const status =
    estado === "enviando"
      ? "Enviando…"
      : estado === "enviado"
        ? "Vaga confirmada. Os detalhes de acesso chegam por e-mail."
        : estado === "erro"
          ? erro
          : "";

  const invalido = (campo: string) =>
    estado === "erro" && campoInvalido === campo ? true : undefined;

  return (
    <form className="inst-form" onSubmit={enviar} noValidate>
      <label className="inst-field">
        <span className="inst-field__label">Nome</span>
        <input
          ref={nomeRef}
          type="text"
          name="nome"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={invalido("nome")}
          aria-describedby={statusId}
          value={form.nome}
          onChange={set("nome")}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">E-mail</span>
        <input
          ref={emailRef}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          required
          aria-required="true"
          aria-invalid={invalido("email")}
          aria-describedby={statusId}
          value={form.email}
          onChange={set("email")}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">WhatsApp</span>
        <input
          ref={whatsappRef}
          type="tel"
          name="whatsapp"
          autoComplete="tel"
          inputMode="tel"
          required
          aria-required="true"
          aria-invalid={invalido("whatsapp")}
          aria-describedby={statusId}
          value={form.whatsapp}
          onChange={set("whatsapp")}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">Instagram</span>
        <input
          ref={instagramRef}
          type="text"
          name="instagram"
          placeholder="@seu.perfil"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          required
          aria-required="true"
          aria-invalid={invalido("instagram")}
          aria-describedby={statusId}
          value={form.instagram}
          onChange={set("instagram")}
          className="inst-field__input"
        />
      </label>
      <label className="inst-field">
        <span className="inst-field__label">
          CRP <span className="inst-field__optional">(opcional)</span>
        </span>
        <input
          ref={crpRef}
          type="text"
          name="crp"
          aria-invalid={invalido("crp")}
          aria-describedby={statusId}
          value={form.crp}
          onChange={set("crp")}
          className="inst-field__input"
        />
      </label>

      <label className="inst-consent" htmlFor={consentId}>
        <input
          ref={consentRef}
          id={consentId}
          type="checkbox"
          name="consentimento"
          required
          aria-required="true"
          aria-invalid={invalido("consentimento")}
          checked={form.consentimento}
          onChange={(event) => {
            setForm((current) => ({ ...current, consentimento: event.target.checked }));
            if (estado === "erro") limparErro();
          }}
        />
        <span>
          Autorizo o contato por e-mail e WhatsApp sobre o webinar e o uso destes
          dados, nos termos da{" "}
          <Link href="/privacidade" className="inst-link">
            Política de Privacidade
          </Link>
          .
        </span>
      </label>

      <button type="submit" className="inst-submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando…" : "Garantir minha vaga →"}
      </button>

      {/* `alert` no erro (interrompe o leitor de tela) e `status` no resto. */}
      <p
        id={statusId}
        className="inst-form__status"
        role={estado === "erro" ? "alert" : "status"}
      >
        {status}
      </p>
    </form>
  );
}
