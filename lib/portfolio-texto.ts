/**
 * English copy for the portfolio (/en/portfolio and the cases).
 *
 * The images, paths and page screenshots are the same in both languages — this
 * file only carries text. It mirrors lib/portfolio.ts one slug at a time; if a
 * project is added there without a block here, the page falls back to the
 * Portuguese copy and `tests/portfolio-en.test.mjs` fails.
 *
 * Written for an English-speaking reader who is being shown the work, not
 * translated line by line. Same facts, same order, no promises of results.
 */

import type { Locale } from "./i18n";
import type { Project } from "./portfolio";

export type TextoProjeto = {
  category: string;
  tagline: string;
  statement: string;
  scope: string[];
  execution: string;
  about?: string;
  presentationText?: string;
  website?: {
    intro: string;
    pages: Array<{ label: string; description: string }>;
  };
};

/** ProjectCategory (pt) → the label shown on the English page. */
export const categoriaEn: Record<string, string> = {
  Marca: "Brand",
  Conteúdo: "Content",
  "Landing Page": "Landing page",
  "Produto digital": "Digital product"
};

/** Ordem dos filtros na página em inglês (a mesma do array em português). */
export const ordemCategoriasEn = ["Brand", "Content", "Landing page", "Digital product"];

export const textosEn: Record<string, TextoProjeto> = {
  "v4-oliveira": {
    category: "Landing page",
    tagline:
      "Website for the Sorocaba branch of V4 Company, with the V4 Method laid out in navigable panels.",
    statement: "Marketing that ends at the register.",
    scope: [
      "Institutional website",
      "Art direction",
      "Copywriting",
      "Interactive method panel",
      "Blog and FAQ"
    ],
    execution:
      "Built the branch website: a bold opening, who we are with the network's numbers, the V4 Method in a navigable panel, detailed solutions, blog, FAQ and a direct line to the Sorocaba team.",
    about:
      "V4 Sorocaba is V4 Company's branch in the city: the same structure, method and tools as the network, with its own team and office. The website had to hold that double reading — the weight of an operation with more than 260 franchises and the closeness of a team that serves companies in the region — without turning into a generic institutional catalogue.\n\nThe structure starts with the promise and moves down to the proof: a dark opening with the brand in the foreground, the network's numbers right below and, next, the V4 Method in an interactive panel where the visitor picks a pillar and sees what sits inside it. The solutions follow the same reading logic, with the acquisition funnel panel, and the rest of the page alternates content, blog posts, FAQ and the path to talk to the team.",
    website: {
      intro:
        "The branch website in full: positioning, the network's numbers, the V4 Method in an interactive panel, solutions, blog and FAQ. Scroll inside the window to go through the page.",
      pages: [
        {
          label: "Home",
          description:
            "Opening, who we are, network numbers, the V4 Method in an interactive panel, solutions, blog, FAQ and contact."
        }
      ]
    }
  },

  "grupo-carnevali": {
    category: "Landing page",
    tagline:
      "Website for a company working in engineering, steel structures, metalwork and glass in Santos, Brazil.",
    statement: "Every stage of the build is trust.",
    scope: [
      "Institutional website",
      "Art direction",
      "Copywriting",
      "Project gallery",
      "Quote form"
    ],
    execution:
      "Structured the site around the company's service lines, a project portfolio with before, during and after photos, boilerwork services and a step-by-step quote journey adapted to each type of job.",
    about:
      "Grupo Carnevali works with engineering projects, steel structures, renovations, metalwork, window frames and glass solutions. These are technical services that visitors usually have a hard time comparing, because most companies in the field never show what they have already delivered. The website exists to fix that imbalance: instead of promising, it presents job by job.\n\nThe page opens with the proposition and goes straight to the six service lines, each with its own quote path. The portfolio shows before, during and after on the projects that went through refurbishment, and every card opens a photo gallery. Then come the differentiators, the sectors served, the steps of a first contact, the FAQ and a form that asks for the type of service, location and stage of the build before sending the request.",
    website: {
      intro:
        "The group's website in full: service lines, projects with photo galleries, boilerwork services, differentiators, sectors and the quote form. Scroll inside the window to go through the page.",
      pages: [
        {
          label: "Home",
          description:
            "Opening, solutions by service line, project portfolio, boilerwork, differentiators, sectors, how it works, FAQ and quote."
        }
      ]
    }
  },

  "sdr-de-ia": {
    category: "Landing page",
    tagline:
      "Launch landing page for Oliveira & Co's AI SDR, from the offer to the comparison with human reps.",
    statement: "No lead waits five minutes.",
    scope: ["Landing page", "Art direction", "Offer copy", "Plans and pricing", "Demo"],
    execution:
      "Built the product launch page: a bold opening, operation numbers, the components of the AI SDR, a seven-day rollout, a side-by-side with human reps, plans by sales stage and a demo capture.",
    about:
      "The AI SDR is Oliveira & Co's product that answers every lead within seconds, qualifies the conversation and hands the contact over ready for the CRM. The landing page had to sell software the visitor has never seen to owners who have already been let down by generic automation. The answer was to show the product working before talking about plans.\n\nThe page opens with the promise and a slice of the interface, followed by the numbers behind the operation. Then come the four blocks that make up the solution, the seven-day rollout plan, a testimonial from a team already running it and a table that puts a human SDR and an AI SDR side by side, without hiding what each one does best. The plans close the read by sales stage, and the demo is the only conversion path on the page.",
    website: {
      intro:
        "The product landing page in full: promise, numbers, the AI SDR components, rollout, comparison, plans and demo. Scroll inside the window to go through the page.",
      pages: [
        {
          label: "Home",
          description:
            "Opening with the product on screen, operation numbers, AI SDR components, rollout, testimonial, comparison, plans, FAQ and demo."
        }
      ]
    }
  },

  estruturart: {
    category: "Landing page",
    tagline:
      "Institutional website and performance ads for a group offering corporate financial solutions.",
    statement: "Financial strength has to be communicated too.",
    scope: ["Institutional website", "Art direction", "Ads for paid media"],
    execution:
      "Developed the institutional website and created the ads that present Home Equity, a digital account and capital solutions with clarity and a consistent visual system.",
    about:
      "Estruturart brings together different financial fronts for companies, from receivables anticipation to Home Equity. The institutional website organises that portfolio into clear navigation, presenting each solution, the group's differentiators and the contact paths without losing the sense of solidity the sector demands.\n\nThe communication carries on into the performance ads. The pieces turn complex topics into direct messages, combining pain and solution copy, high-impact images and the identity in orange, black and white. The result is a system that stays consistent between the campaign destination and the ads that bring the audience to it.",
    website: {
      intro:
        "The institutional page presents the group's solutions, its history and the contact channels in one complete experience. Scroll inside the window to go through the site from top to bottom.",
      pages: [
        {
          label: "Home",
          description:
            "Group introduction, financial products, history, contact form and FAQ."
        }
      ]
    },
    presentationText:
      "The three ads delivered for the Home Equity and financial solutions campaigns."
  },

  "arflam-engenharia": {
    category: "Landing page",
    tagline:
      "Lead generation landing page for 2D and 3D structural design, with qualification of every quote request.",
    statement: "Confidence to build starts before construction.",
    scope: [
      "Landing page",
      "Conversion copy",
      "Qualification form",
      "3D visualisation"
    ],
    execution:
      "Structured the page, presented the services and built a quote journey connected to WhatsApp, with an interactive 3D view of the structure.",
    about:
      "Arflam needed to explain a technical service without pushing away the people who are still starting to plan their build. The page leads the visitor from problem to solution: the architectural design sent by the client becomes structural calculations, drawings and a 3D model, with a responsible engineer and a deliverable ready for construction and city hall.\n\nThe experience includes a 3D view that switches between new build and extension, blocks that answer the main questions and a six-question form. The answers qualify the type and stage of the build before the WhatsApp conversation opens, which makes the first contact more objective for both client and engineering team.",
    website: {
      intro:
        "A landing page built to turn an engineering service into a simple decision: understand the process, clear the doubts and request a quote. Scroll inside the window to see the whole page.",
      pages: [
        {
          label: "Home",
          description:
            "Value proposition, 3D structure, process, deliverables, FAQ and quote form."
        }
      ]
    }
  },

  prismapay: {
    category: "Landing page",
    tagline:
      "Landing page and performance ads for business-to-business currency exchange and global payments.",
    statement: "Global operations call for a message without borders.",
    scope: ["Landing page", "Art direction", "Ads for paid media"],
    execution:
      "Developed the presentation and conversion page with a savings simulator and product demos, plus a series of six ads for the digital campaigns.",
    about:
      "PrismaPay offers currency exchange, international payments and financial infrastructure for companies that buy and sell across borders. The landing page organises that ecosystem into a conversion-driven narrative, starting with paying suppliers abroad and moving on to how the platform works, the audiences it serves and the other services.\n\nProduct elements make the proposition tangible: exchange simulations, transfer tracking, a spread comparison and multi-currency account dashboards. In the ads, the same visual and verbal language adapts to messages of freedom, strategy and simplicity, keeping the brand recognisable from the ad to the landing page.",
    website: {
      intro:
        "The page brings together the product explanation, an interactive simulator, the services and calls to the exchange desk. Scroll inside the window to go through the whole experience.",
      pages: [
        {
          label: "Home",
          description:
            "B2B currency exchange, how the platform works, savings simulator, financial services and sales contact."
        }
      ]
    },
    presentationText:
      "The full series of ads that positioned PrismaPay across the digital campaigns."
  },

  "rei-das-barras": {
    category: "Brand",
    tagline:
      "Visual system and brand applications for a company working in accessibility solutions.",
    statement: "Accessibility gains presence in every detail.",
    scope: ["Identity applications", "Packaging", "Catalogue", "Signage", "Uniforms"],
    execution:
      "Art direction and application of the identity to packaging, catalogue, uniforms, fleet, signage and storefront, creating a consistent system across the brand's touchpoints.",
    about:
      "The project translates Rei das Barras' work into a recognisable and functional visual presence. Deep blue carries the sense of safety, while orange creates contrast and highlights the signature across materials, always with clear reading and a close tie to the world of construction and accessibility.\n\nThe applications cover the full path of the product and the company: packaging, sales catalogue, point-of-sale communication, uniforms, vehicle and storefront. Every piece follows the same system of colour, typography and composition, which keeps the brand consistent both when presenting to a client and in the daily work of installation and service.",
    presentationText:
      "The seven applications delivered, from the product packaging to the storefront."
  },

  "alves-nabuco": {
    category: "Brand",
    tagline:
      "Strategy, content, design and performance for a law firm focused on tax and labour law.",
    statement: "Authority is built by publishing.",
    scope: [
      "Content strategy",
      "Google Ads",
      "Institutional website",
      "Applied identity",
      "Sales presentations",
      "Photo and video"
    ],
    execution:
      "Content strategy, media management, the institutional website and audiovisual production run as one operation across a 12-month partnership.",
    about:
      "The project started with content. We built an editorial line for LinkedIn and Instagram, turning tax and labour law topics into clear posts, with a steady publishing rhythm and language tuned to each channel. The operation covers topics, writing, design and distribution, alongside Google Ads campaigns aimed at qualified client acquisition.\n\nOver time the scope grew to the firm's whole presence. We developed the new website, the brand applications and the presentation templates used in meetings and proposals. Audiovisual production started feeding the channels with video recordings and photo sessions of the partners and the office, which guarantees original, consistent material at every touchpoint.",
    website: {
      intro:
        "The firm's new website in full: a preventive positioning right at the opening, individual partner pages, practice areas and a legal news channel that reinforces authority on every visit. Switch pages in the tabs and scroll inside the window to go through each screen.",
      pages: [
        {
          label: "Home",
          description:
            "Preventive positioning, practice areas and a three-step method — the firm's front door."
        },
        {
          label: "About",
          description:
            "Mission, vision, values and the founding partners who lead every case."
        },
        {
          label: "Lawyers",
          description:
            "Individual profile for each partner, with practice areas and direct contact channels."
        },
        {
          label: "Blog",
          description:
            "Legal news channel: articles signed by the partners sustain the brand's authority."
        }
      ]
    },
    presentationText:
      "The full editorial line — every post produced during the partnership, in chronological order."
  },

  "doce-afeto": {
    category: "Brand",
    tagline:
      "Identity, visual universe and support materials for a dark kitchen bakery in Sorocaba.",
    statement: "Without a storefront, the brand sells.",
    scope: ["Visual identity", "Illustration", "Packaging", "Social media"],
    execution:
      "Created the logo, an original illustrated universe, graphic patterns, packaging and menu pieces for social media.",
    about:
      "Doce & Afeto runs as a dark kitchen, with no dining room and no counter. Every purchase decision happens on screen, which hands the brand the job a physical store would do at the point of sale. We built the identity system from that requirement: visual signature, palette, typography and a graphic universe able to communicate flavour, care and a standard of quality before the client sees the product.\n\nThe delivery extended to the materials that keep the operation running day to day. We developed the digital menu, with reading hierarchy and product presentation designed for conversion, the packaging, letterhead and the Instagram highlights, which organise the profile as a navigable storefront: product line, ordering options, delivery area and social proof. The result is a coherent visual repertoire, applicable in any channel and reusable by the team itself.",
    presentationText:
      "The brand's universe as a whole — from the illustrated pattern to the menu and the point of sale."
  },

  "liz-helena": {
    category: "Content",
    tagline: "Visual identity and personal positioning for a student still in training.",
    statement: "A personal brand starts before the diploma.",
    scope: ["Visual identity", "Art direction", "Editorial content"],
    execution:
      "Built the visual identity, the art direction and the editorial post system with its own language for Instagram.",
    about:
      "The project came from the need to give shape to a professional presence still under construction. Liz Helena is in training and needed a brand able to follow that path, holding the communication up in the first steps of her career without looking improvised. We developed the complete identity system: visual signature, palette, typography and a set of applications designed for immediate use on her CV, portfolio and social channels.\n\nThe delivery included presentation templates, post models for LinkedIn and Instagram and the tone-of-voice guidelines that steer each publication. The result is a coherent visual repertoire, usable right away and ready to grow with her career.",
    presentationText: "The brand as a whole — from the symbol to the applications, as delivered."
  },

  "know-how-experience": {
    category: "Content",
    tagline:
      "Creative direction and full production of the communication materials for the 15th edition.",
    statement: "An event sells itself before it happens.",
    scope: ["Scripts", "Copy", "TV spot", "Institutional content"],
    execution:
      "Developed the scripts, copywriting and TV spot production for the event's communication.",
    about:
      "The 15th edition of Know How Experience brought business owners, executives and investors together in Campo Grande on 22 and 23 May, at Palazzo Murano, under the theme “The 4 Pillars of Profitable Networking”. We took on every communication material for the edition, from the announcement to the event itself. The scope included the speakers' presentation scripts, the TV spot script, the paid media pieces and the tier-closing copy that kept the sales rhythm through the whole cycle.\n\nThe operation followed the logic of a launch. Each phase of the campaign called for its own package of creatives, messages and video cuts, adjusted to the sales stage and to the audience of each channel. We also ran the promotional cycle with partners, including the activation with Café com Negócios, and kept the event's visual consistency at every touchpoint: social channels, paid media, stage materials and behind-the-scenes communication.",
    presentationText:
      "From check-in to the stage — behind the scenes and creatives of the 15th edition, end to end."
  },

  "fila-zero": {
    category: "Content",
    tagline:
      "Strategic Instagram carousels that pair education and conversion in every piece.",
    statement: "Zero queue starts with the right content.",
    scope: ["Social media content", "Art direction", "Carousels"],
    execution:
      "Produced educational and sales carousels for Instagram, with consistent art direction piece by piece.",
    presentationText:
      "Every carousel in full, slide by slide, in the order they were delivered."
  },

  ivoei: {
    category: "Brand",
    tagline:
      "A complete brand guide for an airline ticket agency — from the symbol to the application rules.",
    statement: "Think travel, think iVoei.",
    scope: ["Visual identity", "Brand guide", "Typography", "Photography direction"],
    execution:
      "Documented the brand system in full — logo, colour palette, typography and photography guidelines — gathered in an application guide for the team's internal use.",
    about:
      "iVoei needed a clear visual repertoire to hold up its presence as an airline ticket agency. We built a brand guide that starts from the symbol — the wings that point to the freedom of travelling — and unfolds into objective usage rules: how to apply the logo on light and dark backgrounds, which colour combinations are allowed and what should never be done with it.\n\nThe guide also sets the type family, the colour palette in its monochrome variations and the photography line that follows the brand in any channel. The result is a single reference document that anyone on the team can consult to keep the brand consistent across every application.",
    presentationText:
      "The complete guide, chapter by chapter — from the symbol to the photography guidelines."
  },

  dazz: {
    category: "Brand",
    tagline:
      "Brand platform and visual identity for Dazz, a 360° marketing studio for small and mid-sized businesses.",
    statement: "A marketing studio finally got a real brand.",
    scope: [
      "Visual identity",
      "Copy manual",
      "Positioning",
      "UI components",
      "Feed posts"
    ],
    execution:
      "Dazz's brand end to end: positioning, visual identity, copy manual, UI components and feed posts. Because it is the studio's own brand, it ran as an internal project, with no contract deadline.",
    about:
      "Dazz is Felipe Silva's 360° marketing studio, bringing content, video production, media, landing pages and visual identity into one team — something the local market usually outsources or simply does not offer. The studio already delivered a complete service, but the essential part was missing: the brand. It operated with no consolidated public name, no defined voice and no visual system of its own. The challenge was to give brand shape to a service that was already strong.\n\nThe project began with a positioning discovery using the logic of branding's 3 Waves and grew into a full brand platform in the Ana Couto method: purpose, a Guide archetype that takes care, and a personality that is close, strategic and direct. From there came the tone of voice in three rules — inquisitive, consultative and confident — and a visual system with a brutalist feel in red, black and off-white, with condensed uppercase typography. Finally, the brand got real application: copy for the institutional page, the sales page and a launch feed with twelve posts ready to go to market.",
    presentationText:
      "The complete brand manual, chapter by chapter — from tone of voice and logo to palette and typography."
  }
};

/** Projeto com o texto do idioma pedido e as mídias do arquivo em português. */
export type ProjetoLocalizado = Omit<
  Project,
  "category" | "tagline" | "statement" | "scope" | "execution" | "about" | "website"
> & {
  category: string;
  tagline: string;
  statement: string;
  scope: string[];
  execution: string;
  about?: string;
  website?: Project["website"];
};

/**
 * Mesmo projeto, texto no idioma pedido. Em português devolve o original; em
 * inglês troca só o texto e mantém imagens, capturas e ordem intactas — as
 * páginas do site do case continuam apontando para os screenshots em /public.
 */
export function localizarProjeto(project: Project, locale: Locale): ProjetoLocalizado {
  if (locale === "pt") return project;

  const copy = textosEn[project.slug];

  // Sem bloco em inglês: mantém o português em vez de mostrar página vazia.
  // tests/portfolio-en.test.mjs cobra o bloco de todo case publicado.
  if (!copy) {
    return { ...project, category: categoriaEn[project.category] ?? project.category };
  }

  const website = project.website
    ? {
        ...project.website,
        intro: copy.website?.intro ?? project.website.intro,
        pages: project.website.pages.map((page, index) => ({
          ...page,
          label: copy.website?.pages[index]?.label ?? page.label,
          description: copy.website?.pages[index]?.description ?? page.description
        }))
      }
    : undefined;

  const presentation = project.presentation
    ? { ...project.presentation, text: copy.presentationText ?? project.presentation.text }
    : undefined;

  return {
    ...project,
    category: copy.category,
    tagline: copy.tagline,
    statement: copy.statement,
    scope: copy.scope,
    execution: copy.execution,
    about: copy.about ?? project.about,
    presentation,
    website
  };
}

/** Slugs na ordem do portfólio (a ordem define o grid e o "próximo projeto"). */
export function proximoSlug(slugs: string[], slug: string): string {
  const index = slugs.indexOf(slug);
  return slugs[(index + 1) % slugs.length];
}
