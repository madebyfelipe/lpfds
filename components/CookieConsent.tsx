"use client";

import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  CONSENT_EVENT,
  clearConsent,
  getConsent,
  setConsent,
  type ConsentState
} from "@/lib/consent";

const PIXEL_ID = "1465893921656330";

/**
 * Hook compartilhado: devolve a decisão vigente e re-renderiza quando ela
 * muda. `undefined` significa "ainda não li o localStorage" — no primeiro
 * render (servidor e hidratação) todo mundo tem de concordar, senão o React
 * acusa mismatch.
 */
export function useConsent(): ConsentState | undefined {
  const [consent, setState] = useState<ConsentState | undefined>(undefined);

  useEffect(() => {
    setState(getConsent());

    const onChange = (event: Event) => {
      setState((event as CustomEvent<ConsentState>).detail ?? null);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    // Decisão tomada em outra aba vale nesta também.
    const onStorage = () => setState(getConsent());
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener(CONSENT_EVENT, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return consent;
}

/**
 * Meta Pixel. Antes ele estava inline no layout raiz e disparava no load —
 * ou seja, rastreava antes de perguntar. Agora o `<Script>` só é montado
 * quando há aceite, então sem aceite o fbevents.js nem chega a ser baixado.
 */
export function MetaPixel() {
  const consent = useConsent();
  if (consent !== "granted") return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
    </Script>
  );
}

/**
 * Banner de consentimento. Aparece só para quem ainda não decidiu (ou cuja
 * decisão caducou) e some assim que a escolha é feita.
 *
 * "Recusar" tem o mesmo peso visual de "Aceitar" de propósito: banner que
 * esconde a recusa não coleta consentimento livre.
 */
export function CookieConsent() {
  const consent = useConsent();
  const bannerRef = useRef<HTMLDivElement>(null);
  const jaFocou = useRef(false);

  const decidir = useCallback((value: "granted" | "denied") => {
    setConsent(value);
  }, []);

  // Leva o foco ao banner uma vez, para quem navega por teclado não ter de
  // varrer a página inteira até achá-lo. Só na primeira aparição.
  useEffect(() => {
    if (consent !== null || jaFocou.current) return;
    jaFocou.current = true;
    bannerRef.current?.focus();
  }, [consent]);

  // `undefined` = ainda lendo; `granted`/`denied` = já decidiu.
  if (consent !== null) return null;

  return (
    <div
      ref={bannerRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="mbf-consent-title"
      aria-describedby="mbf-consent-desc"
      className="mbf-consent"
    >
      <div className="mbf-consent__text">
        <h2 id="mbf-consent-title" className="mbf-consent__title">
          Cookies de medição
        </h2>
        <p id="mbf-consent-desc" className="mbf-consent__copy">
          O site funciona sem rastreamento. Só usamos cookies de medição da Meta
          — e carregamos publicações do Instagram e do TikTok — se você
          autorizar. Você pode mudar de ideia quando quiser na{" "}
          <Link href="/cookies" className="mbf-consent__link">
            Política de Cookies
          </Link>
          .
        </p>
      </div>
      <div className="mbf-consent__actions">
        <button
          type="button"
          className="mbf-consent__btn mbf-consent__btn--ghost"
          onClick={() => decidir("denied")}
        >
          Recusar cookies de medição
        </button>
        <button
          type="button"
          className="mbf-consent__btn mbf-consent__btn--solid"
          onClick={() => decidir("granted")}
        >
          Aceitar cookies de medição
        </button>
      </div>
    </div>
  );
}

/**
 * Painel de preferências da página /cookies — mostra a decisão atual e deixa
 * trocar. Recusar depois de aceitar recarrega a página: é o único jeito de
 * tirar da memória o script que já tinha sido carregado.
 */
export function CookiePreferencias() {
  const consent = useConsent();

  const situacao =
    consent === undefined
      ? "Carregando sua preferência…"
      : consent === "granted"
        ? "Situação atual: cookies de medição aceitos."
        : consent === "denied"
          ? "Situação atual: cookies de medição recusados."
          : "Situação atual: você ainda não escolheu — nada de terceiros está sendo carregado.";

  return (
    <div className="mbf-prefs">
      <p className="mbf-prefs__status" role="status">
        {situacao}
      </p>
      <div className="mbf-prefs__actions">
        <button
          type="button"
          className="mbf-consent__btn mbf-consent__btn--solid"
          disabled={consent === undefined || consent === "granted"}
          onClick={() => setConsent("granted")}
        >
          Aceitar cookies de medição
        </button>
        <button
          type="button"
          className="mbf-consent__btn mbf-consent__btn--ghost"
          disabled={consent === undefined || consent === "denied"}
          onClick={() => {
            setConsent("denied");
            window.location.reload();
          }}
        >
          Recusar cookies de medição
        </button>
        <button
          type="button"
          className="mbf-consent__btn mbf-consent__btn--ghost"
          disabled={consent === undefined || consent === null}
          onClick={() => {
            clearConsent();
            window.location.reload();
          }}
        >
          Apagar minha escolha
        </button>
      </div>
    </div>
  );
}
