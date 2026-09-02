import { EMAIL, social } from "@/lib/institucional";

// Structured data (JSON-LD) do site inteiro. Estabelece a entidade
// "Made by Felipe" como estúdio de branding/social media em Sorocaba (SP),
// atendendo Sorocaba, São Paulo e região — a base para busca de marca,
// pacote local do Google e resultados ricos. Renderizado no layout raiz,
// então vale para todas as rotas. Puxa social/e-mail de lib/institucional
// (fonte única) para não duplicar.

const SITE = "https://madebyfelipe.com";
const sameAs = social.map((s) => s.href);

// Serviços oferecidos — os termos que queremos disputar no orgânico.
const services: { name: string; description: string }[] = [
  {
    name: "Construção de marca (branding)",
    description:
      "Estratégia e construção de marca: posicionamento, identidade visual e verbal a partir da leitura do negócio."
  },
  {
    name: "Posicionamento de marca",
    description:
      "Definição do território de marca — o que torna o negócio único diante da concorrência local."
  },
  {
    name: "Identidade visual",
    description:
      "Identidade visual completa: cores, tipografia, grafismos e direção de arte da marca."
  },
  {
    name: "Identidade verbal",
    description:
      "Identidade verbal e discurso de marca: tom de voz, mensagens-chave e naming."
  },
  {
    name: "Social media estratégico",
    description:
      "Gestão e conteúdo estratégico de social media para presença digital consistente."
  },
  {
    name: "Página profissional / landing page",
    description:
      "Página profissional e landing page alinhadas à marca, prontas para converter."
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
      alternateName: "Made by Felipe — Branding & Social Media",
      url: SITE,
      image: `${SITE}/logo-black.png`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/logo-black.png`
      },
      description:
        "Estúdio de branding e social media estratégico em Sorocaba (SP): construção de marca, posicionamento, identidade visual e verbal para profissionais, clínicas e negócios em Sorocaba, São Paulo e região.",
      slogan: "Branding é tradução, não invenção.",
      email: EMAIL,
      knowsAbout: [
        "Branding",
        "Construção de marca",
        "Posicionamento de marca",
        "Identidade visual",
        "Identidade verbal",
        "Design de marca",
        "Social media estratégico",
        "Marketing",
        "Naming"
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
        name: "Serviços de branding e social media",
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
      description:
        "Estrategista de marca com 7 anos de mercado e mais de 150 projetos de branding e social media.",
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
