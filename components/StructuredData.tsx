import { EMAIL, social } from "@/lib/institucional";
import { SITE_URL } from "@/lib/site";

// Structured data (JSON-LD) do site inteiro. Estabelece a entidade
// "Made by Felipe" como estúdio de branding para psicólogos e consultórios
// de psicologia, sediado em Sorocaba (SP) — a base para busca de marca,
// pacote local do Google e resultados ricos. Renderizado no layout raiz,
// então vale para todas as rotas. Puxa social/e-mail de lib/institucional
// (fonte única) para não duplicar.

const SITE = SITE_URL;
const sameAs = social.map((s) => s.href);

// Serviços oferecidos — a oferta atual (imersão / método PSIQUE), nos
// termos que queremos disputar no orgânico. Sem preço, como no site.
const services: { name: string; description: string }[] = [
  {
    name: "Imersão de marca para consultório de psicologia",
    description:
      "Dois dias de imersão: posicionamento, identidade visual e verbal do consultório, no ar em 45 dias, dentro do artigo 20 do Código de Ética Profissional do Psicólogo."
  },
  {
    name: "Posicionamento de marca para psicólogos",
    description:
      "Método PSIQUE: Prática, Sujeito, Inquietação, Qualidade, Universo e Estória — o que distingue o consultório."
  },
  {
    name: "Identidade visual para psicólogos",
    description:
      "Assinatura com nome e CRP, cores, tipografia, grafismos e direção de imagem do consultório."
  },
  {
    name: "Identidade verbal para psicólogos",
    description:
      "Tom de voz e mensagens-chave do consultório, sem promessa de resultado terapêutico."
  }
];

const areaServed = [
  { "@type": "City", name: "Sorocaba", "@id": "https://www.wikidata.org/wiki/Q170532" },
  { "@type": "City", name: "São Paulo" },
  { "@type": "AdministrativeArea", name: "Região de Sorocaba" },
  { "@type": "State", name: "São Paulo" },
  { "@type": "Country", name: "Brasil" }
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${SITE}/#business`,
      name: "Made by Felipe",
      alternateName: "Made by Felipe — Branding para consultórios de psicologia",
      url: SITE,
      image: `${SITE}/logo-black.png`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/logo-black.png`
      },
      description:
        "Estúdio de branding para psicólogos e consultórios de psicologia, em Sorocaba (SP): posicionamento, identidade visual e verbal em dois dias de imersão, no ar em 45 dias, dentro do artigo 20 do Código de Ética Profissional do Psicólogo.",
      slogan: "Branding é tradução, não invenção.",
      email: EMAIL,
      audience: {
        "@type": "Audience",
        audienceType: "Psicólogos e consultórios de psicologia"
      },
      knowsAbout: [
        "Branding para psicólogos",
        "Marca para consultório de psicologia",
        "Posicionamento de marca",
        "Identidade visual",
        "Identidade verbal",
        "Publicidade profissional do psicólogo (artigo 20 do Código de Ética)"
      ],
      areaServed,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sorocaba",
        addressRegion: "SP",
        addressCountry: "BR"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -23.5015,
        longitude: -47.4526
      },
      founder: { "@id": `${SITE}/#felipe` },
      sameAs,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Branding para consultórios de psicologia",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: { "@id": `${SITE}/#business` },
            areaServed
          }
        }))
      }
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#felipe`,
      name: "Felipe",
      jobTitle: "Estrategista de marca",
      // Sem número de projetos: "mais de 150" não tem como ser conferido por
      // quem lê e conflitava com os "200+" de lib/data.ts. Alegação numérica
      // em dado estruturado é lida pelo Google como fato da entidade — só
      // entra de volta quando houver um número apurado e uma fonte.
      description:
        "Estrategista de marca, atuando com branding e social media desde 2019.",
      url: SITE,
      worksFor: { "@id": `${SITE}/#business` },
      sameAs
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Made by Felipe",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE}/#business` }
    }
  ]
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify já escapa aspas; o conteúdo é estático e confiável.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
