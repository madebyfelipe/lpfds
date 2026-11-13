import Image from "next/image";
import Link from "next/link";
import type { Ad } from "@/lib/blog-ads";

/**
 * Banner de anúncio logo abaixo da autoria, como o display do layout de
 * referência (RD Station): visual à esquerda, chamada no meio, botão à
 * direita — e o banner inteiro é o link. Só anuncia o próprio estúdio, e o
 * rótulo "Publicidade" fica visível para não se passar por conteúdo.
 */
export function PostAd({ ad }: { ad: Ad }) {
  return (
    <aside className="inst-ad" aria-label="Publicidade do estúdio">
      <p className="inst-ad__label">Publicidade · Made by Felipe</p>
      <Link href={ad.href} className={`inst-ad__banner inst-ad__banner--${ad.slug}`}>
        <span className="inst-ad__visual" aria-hidden="true">
          <AdVisual slug={ad.slug} />
        </span>
        <span className="inst-ad__body">
          <span className="inst-ad__eyebrow">{ad.eyebrow}</span>
          <span className="inst-ad__title">{ad.title}</span>
          <span className="inst-ad__copy">{ad.copy}</span>
        </span>
        <span className="inst-ad__cta">
          {ad.cta}
          <span aria-hidden="true"> →</span>
        </span>
      </Link>
    </aside>
  );
}

function AdVisual({ slug }: { slug: Ad["slug"] }) {
  if (slug === "site") {
    // Esquema neutro de página, não captura de site real (Felipe não quer
    // exemplos de site nos anúncios).
    return (
      <span className="inst-ad__browser">
        <span className="inst-ad__browser-bar">
          <i />
          <i />
          <i />
        </span>
        <span className="inst-ad__wire">
          <span className="inst-ad__wire-line" />
          <span className="inst-ad__wire-line inst-ad__wire-line--short" />
          <span className="inst-ad__wire-btn" />
          <span className="inst-ad__wire-cards">
            <i />
            <i />
            <i />
          </span>
        </span>
      </span>
    );
  }

  if (slug === "ebook") {
    return (
      <span className="inst-ad__book">
        <span className="inst-ad__book-kicker">E-book</span>
        <span className="inst-ad__book-title">Construção de marca para psicólogos</span>
        <span className="inst-ad__book-brand">Made by Felipe</span>
      </span>
    );
  }

  return (
    <>
      <Image
        src="/institucional/home/gap-1.jpg"
        alt=""
        width={640}
        height={800}
        sizes="240px"
        className="inst-ad__photo"
      />
      <span className="inst-ad__stamp">
        <b>2</b> dias
        <span className="inst-ad__stamp-sep" />
        <b>45</b> no ar
      </span>
    </>
  );
}
