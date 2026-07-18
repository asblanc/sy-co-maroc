/** Global site configuration — single source of truth for SEO metadata. */
export const siteConfig = {
  name: "SY&CO",
  legalName: "SY&CO SARL",
  slogan: "Event · Meet · Training",
  description:
    "SY&CO, cabinet de conseil au Maroc spécialisé en stratégie, management et innovation : transformation des organisations, intelligence collective, formation et cohésion d'équipe.",
  // Overridable at build/deploy time; falls back to the Vercel production URL.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://sy-co-maroc.vercel.app",
  locale: "fr_MA",
  lang: "fr",
  ogImage: "/images/hero-team1.jpg",
  keywords: [
    "conseil en management Maroc",
    "cabinet de conseil Casablanca",
    "transformation des organisations",
    "intelligence collective",
    "formation professionnelle Maroc",
    "cohésion d'équipe",
    "innovation managériale",
    "stratégie et gouvernance",
    "séminaire entreprise Maroc",
    "SY&CO",
  ],
  contact: {
    email: "contact@sy-co.ma",
    phone: "+212522220000",
    addressLocality: "Casablanca",
    country: "MA",
    streetAddress: "Boulevard d'Anfa, Twin Center",
    postalCode: "20100",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/sy-co-maroc",
  },
};

export type SiteConfig = typeof siteConfig;
