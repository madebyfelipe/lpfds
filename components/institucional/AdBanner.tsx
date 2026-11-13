"use client";

import Link from "next/link";
import { openEbookModal } from "@/components/hub/EbookModal";
import { ebook } from "@/lib/newsletter";
import type { PostAd } from "@/lib/blog";

type Item = { kicker: string; title: string; copy: string; cta: string; href?: string };

// Conteúdo das três ofertas que o banner pode anunciar — qual delas aparece
// em cada post é `postAd()`, em lib/blog.ts. Nenhum preço do /lp/marca ou da
// imersão aqui: o site não cita preço fora do /lp/site (ver CLAUDE.md).
const content: Record<PostAd, Item> = {
  marca: {
    kicker: "Para você",
    title: "Sua marca ainda não parece com o que você entrega?",
    copy: "Imersão de marca para consultórios de psicologia: dois dias, no ar em 45.",
    cta: "Quero minha marca →",
    href: "/lp/marca"
  },
  site: {
    kicker: "Para você",
    title: "Seu consultório ainda não tem site?",
    copy: "Sites para psicólogos a partir de R$ 440, parcelado no cartão.",
    cta: "Ver planos de site →",
    href: "/lp/site"
  },
  ebook: {
    kicker: "Material gratuito",
    title: ebook.title,
    copy: "Baixe grátis assinando a newsletter — o link chega na sua caixa de entrada.",
    cta: "Quero o e-book →"
  }
};

/** Banner de anúncio do próprio estúdio, embutido no corpo do post. */
export function AdBanner({ ad }: { ad: PostAd }) {
  const item = content[ad];

  return (
    <aside className="inst-blog__ad inst-red" aria-label="Publicidade">
      <div className="inst-blog__ad-copy">
        <p className="inst-kicker inst-kicker--on-red inst-kicker--tight">{item.kicker}</p>
        <p className="inst-blog__ad-title">{item.title}</p>
        <p className="inst-blog__ad-text">{item.copy}</p>
      </div>
      {item.href ? (
        <Link href={item.href} className="inst-blog__ad-cta">
          {item.cta}
        </Link>
      ) : (
        <button type="button" className="inst-blog__ad-cta" onClick={openEbookModal}>
          {item.cta}
        </button>
      )}
    </aside>
  );
}
