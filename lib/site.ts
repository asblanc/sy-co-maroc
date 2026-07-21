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
  legalName: "SY&CO — Synergie & Compétences",
  slogan: "FormAction · Meet & Share · Event",
  description:
    "SY&CO (Synergie & Compétences) — cabinet de formation et de conseil qui transforme cadres et dirigeants d'Afrique francophone en leaders de demain. Formations résidentielles, rencontres entre pairs et formation sur mesure, au Maroc et à l'international.",
  url: resolveSiteUrl(),
  locale: "fr_MA",
  lang: "fr",
  ogImage: "/images/og-sy-co.jpg",
  keywords: [
    "cabinet de formation Maroc",
    "formation dirigeants Afrique",
    "leadership et management stratégique",
    "formation résidentielle Casablanca",
    "transformation organisationnelle",
    "coaching de dirigeant",
    "finance publique et finance verte",
    "gouvernance audit et conformité",
    "RH stratégique",
    "formation cadres Afrique francophone",
    "formation sur mesure entreprise",
    "SY&CO Synergie & Compétences",
  ],
  contact: {
    email: "seminairesyco@gmail.com",
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
