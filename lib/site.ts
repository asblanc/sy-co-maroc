const DEFAULT_URL = "https://sy-co-maroc.vercel.app";

/** Returns `value` only if it is a valid absolute http(s) URL, else null. */
function validUrl(value?: string | null): string | null {
  if (!value) return null;
  const candidate = value.startsWith("http") ? value : `https://${value}`;
  try {
    const u = new URL(candidate);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return u.origin;
  } catch {
    return null;
  }
}

/**
 * Resolves the public site URL robustly so a missing or malformed env var can
 * never crash the build:
 *   1. NEXT_PUBLIC_SITE_URL (if a valid absolute URL)
 *   2. Vercel production/preview URL (auto-injected at build time)
 *   3. a safe hardcoded default
 */
function resolveSiteUrl(): string {
  return (
    validUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
    validUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
    validUrl(process.env.VERCEL_URL) ||
    DEFAULT_URL
  );
}

/** Global site configuration — single source of truth for SEO metadata. */
export const siteConfig = {
  name: "SY&CO",
  legalName: "SY&CO SARL",
  slogan: "Event · Meet · Training",
  description:
    "SY&CO conçoit vos événements d'entreprise, séminaires et formations sur-mesure — au Maroc et partout dans le monde. Cohésion d'équipe, intelligence collective et transformation managériale au service de votre performance.",
  url: resolveSiteUrl(),
  locale: "fr_MA",
  lang: "fr",
  ogImage: "/images/hero-team1.jpg",
  keywords: [
    "événementiel d'entreprise Maroc",
    "agence séminaire Casablanca",
    "team building Maroc",
    "séminaire entreprise Maroc",
    "formation professionnelle sur-mesure",
    "convention d'entreprise",
    "cohésion d'équipe",
    "intelligence collective",
    "transformation managériale",
    "event meet training",
    "séminaire à l'international",
    "SY&CO",
  ],
  contact: {
    email: "contact@sy-co.ma",
    phone: "+212699820570",
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
