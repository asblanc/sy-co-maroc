import type { Metadata } from "next";
import { Arvo, Open_Sans, Artifika } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/lib/site";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arvo",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const artifika = Artifika({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-artifika",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Cabinet de formation & de conseil pour cadres et dirigeants d'Afrique`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Formation & conseil pour cadres et dirigeants d'Afrique`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  category: "business",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  areaServed: [
    { "@type": "Country", name: "Maroc" },
    { "@type": "Country", name: "Sénégal" },
    { "@type": "Country", name: "Côte d'Ivoire" },
  ],
  knowsLanguage: "fr",
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.streetAddress,
    addressLocality: siteConfig.contact.addressLocality,
    postalCode: siteConfig.contact.postalCode,
    addressCountry: siteConfig.contact.country,
  },
  sameAs: [siteConfig.social.linkedin],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "fr-MA",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-MA" suppressHydrationWarning>
      <body
        className={`${arvo.variable} ${openSans.variable} ${artifika.variable}`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Aller au contenu
        </a>
        <ScrollProgress />
        {children}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
