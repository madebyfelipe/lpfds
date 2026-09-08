"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
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
//
// O aceite da política é obrigatório e checado nos dois lados: sem ele não
// há base legal para o contato (LGPD art. 7º, I).
export function ImersaoForm() {
  const [form, setForm] = useState({
    nome: "",
    crp: "",
    whatsapp: "",
    consentimento: false
  });
  const [estado, setEstado] = useState<Estado>("idle");
  const [erro, setErro] = useState("");
  const [campoInvalido, setCampoInvalido] = useState<string | null>(null);

  // Um id por instância: os `aria-describedby` precisam ser únicos na página.
  const uid = useId();
  const statusId = `${uid}-status`;
  const consentId = `${uid}-consent`;

  const nomeRef = useRef<HTMLInputElement>(null);
  const crpRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  const refs: Record<string, React.RefObject<HTMLInputElement | null>> = {
    nome: nomeRef,
    crp: crpRef,
    whatsapp: whatsappRef,
    consentimento: consentRef
  };

  const set =
    (key: "nome" | "crp" | "whatsapp") =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((current) => ({ ...current, [key]: event.target.value }));
      if (estado === "erro") limparErro();
    };

  const limparErro = () => {
    setEstado("idle");
    setErro("");
    setCampoInvalido(null);
  };

  const enviar = async (event: React.FormEvent) => {
    event.preventDefault();
    if (estado === "enviando") return;

    const faltando = validateImersao(form);
    if (faltando) {
      setErro(
        faltando === "consentimento"
          ? "Para enviar, é preciso aceitar a Política de Privacidade."
          : `Preencha o campo ${fieldLabels[faltando]}.`
      );
      setCampoInvalido(faltando);
      setEstado("erro");
      // Leva o foco ao campo que faltou — sem isso quem usa teclado ou
      // leitor de tela ouve o erro e não sabe para onde voltar.
      refs[faltando]?.current?.focus();
      return;
    }

    setEstado("enviando");
    try {
      await requestImersao(form);
      setEstado("enviado");
      setForm({ nome: "", crp: "", whatsapp: "", consentimento: false });
    } catch {
      setErro("Não consegui enviar agora. Chama no WhatsApp que eu respondo.");
      setCampoInvalido(null);
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
        <span className="inst-field__label">CRP</span>
        <input
          ref={crpRef}
          type="text"
          name="crp"
          required
          aria-required="true"
          aria-invalid={invalido("crp")}
          aria-describedby={statusId}
          value={form.crp}
          onChange={set("crp")}
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
          required
          aria-required="true"
          aria-invalid={invalido("whatsapp")}
          aria-describedby={statusId}
          value={form.whatsapp}
          onChange={set("whatsapp")}
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
            setForm((current) => ({
              ...current,
              consentimento: event.target.checked
            }));
            if (estado === "erro") limparErro();
          }}
        />
        <span>
          Autorizo o contato pelo WhatsApp e o uso destes dados para responder
          ao pedido, nos termos da{" "}
          <Link href="/privacidade" className="inst-link">
            Política de Privacidade
          </Link>
          .
        </span>
      </label>

      <button type="submit" className="inst-submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando…" : "Enviar pedido de imersão →"}
      </button>

      {/* `alert` no erro (interrompe o leitor de tela) e `status` no resto
          (espera a pausa) — anunciar "Enviando…" na marra seria ruído. */}
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
