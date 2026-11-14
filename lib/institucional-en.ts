/**
 * English copy for /en (nov/2026). Mirrors lib/institucional.ts — same facts,
 * written for US therapists in private practice, not a literal translation.
 *
 * Rules (Felipe via Tyler):
 * - No Brazilian council (CFP) or "Article 20" claims; where PT cites them, EN
 *   says "built with professional ethics guidelines in mind" and never claims
 *   compliance with APA or state licensing boards.
 * - No promised clients, full calendars or Google rankings.
 * - No prices (USD not defined): "Get a quote" instead.
 * - Testimonials are the same real PT quotes, translated and labeled as such.
 *
 * PSIQUE keeps its six letters: Practice, Subject, Inner need, Quality,
 * Universe, Ethos (PT: Prática, Sujeito, Inquietação, Qualidade, Universo, Estória).
 */

export const methodIntroEn =
  "Branding is translation, not invention. Your practice's brand isn't made up — it's translated from six areas we explore until we find what only exists in you.";

export const positioningEn = [
  {
    letter: "P",
    title: "Practice",
    copy: "How your practice actually runs: revenue, caseload, session fee and how full your schedule is. There's no brand before the business."
  },
  {
    letter: "S",
    title: "Subject",
    copy: "Who you work with best, and who actually reaches out to you. Your real clients, not an idealized profile."
  },
  {
    letter: "I",
    title: "Inner need",
    copy: "What moves people to look for you: the need behind the search, which your brand has to recognize."
  },
  {
    letter: "Q",
    title: "Quality",
    copy: "What you offer compared with what other local practices already do — to find where you're genuinely different."
  },
  {
    letter: "U",
    title: "Universe",
    copy: "The context you work in: your city, its culture and the channels where your brand will live."
  },
  {
    letter: "E",
    title: "Ethos",
    copy: "Where you come from, what you believe and the personality your brand will carry. The origin no one can copy."
  }
];

export const processEn = [
  {
    etapa: "Brand strategy",
    tag: "Gathering · Exploring",
    steps: [
      { num: "01", title: "Interview", copy: "A one-on-one conversation with you — and with anyone else who works in your practice." },
      { num: "02", title: "Workshop", copy: "Two days of guided online immersion, in English with Felipe, where the six areas become strategy." },
      { num: "03", title: "Research", copy: "We validate what came up and look closely at the other practices in your area." },
      { num: "04", title: "Diagnosis", copy: "Everything we gathered, documented and approved with you before we move on." }
    ]
  },
  {
    etapa: "Brand identity",
    tag: "Creating · Defining",
    steps: [
      { num: "05", title: "Platform", copy: "The strategy distilled — the document that guides your whole brand identity." },
      { num: "06", title: "Keyword", copy: "A proposal for positioning and brand voice: how your practice speaks." },
      { num: "07", title: "Keyvisual", copy: "A proposal for visual identity: colors, graphic elements and typography." },
      { num: "08", title: "Brand guide", copy: "Strategy, positioning and identity brought together, applied and live in 45 days." }
    ]
  }
];

/** Same order as `deliverables` in lib/institucional.ts (photos are matched by index). */
export const deliverablesEn = [
  "Positioning",
  "Visual Identity",
  "Brand Voice",
  "Brand Guide",
  "Practice Web Page",
  "Practice Stationery",
  "Art Direction"
];

/** Same three client quotes as lib/institucional.ts, translated from Portuguese. */
export const depoimentosEn = [
  {
    texto:
      "I came in expecting to leave with a logo, and I left with a clear read of my own practice. Over the two-day immersion we talked about my caseload, my session fee and the kind of client I work with best. The materials came after that, and they were consistent with it. Today the people who reach out already know what I work with, and the first message starts much further along.",
    titulo: "Psychologist",
    cidade: "Sorocaba, Brazil"
  },
  {
    texto:
      "What changed wasn't the look, it was the first conversation. I used to have to explain my entire background; now the brand does part of that before I say a word. The project was run in a focused way, the deadline was met, and every piece was checked against our professional code of ethics before it went out. For someone whose schedule is taken up by sessions, that was worth more than any visual deliverable.",
    titulo: "Psychologist",
    cidade: "Itu, Brazil"
  },
  {
    texto:
      "I always treated branding as an afterthought, something for once my schedule was full. The immersion turned that around in two days, because it started from numbers that were already mine. The positioning was approved before any design, which avoided the back-and-forth over personal taste. Forty-five days later everything was live, from the practice web page to the office stationery.",
    titulo: "Psychologist",
    cidade: "Campinas, Brazil"
  }
];
