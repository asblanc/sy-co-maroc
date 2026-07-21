import Image from "next/image";
import Link from "next/link";
import { Linkedin, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrustSeal } from "@/components/ui/TrustSeal";
import {
  contactInfo,
  footerExpertises,
  legalLinks,
} from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="container-narrow grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-5 inline-block rounded-xl bg-white p-3">
            <Image
              src="/images/logo2.png"
              alt="SY&CO"
              width={170}
              height={56}
              className="h-11 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed text-white/80">
            SY&CO — Synergie &amp; Compétences : cabinet de formation et de
            conseil qui transforme cadres et dirigeants d&apos;Afrique
            francophone en leaders de demain. FormAction · Meet &amp; Share ·
            Event.
          </p>
        </div>

        {/* Expertises */}
        <div>
          <h4 className="mb-5 font-heading text-lg font-bold">
            Nos programmes
          </h4>
          <ul className="space-y-3">
            {footerExpertises.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/80 transition-colors hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coordonnées */}
        <div>
          <h4 className="mb-5 font-heading text-lg font-bold">Coordonnées</h4>
          <div className="space-y-4 text-sm text-white/80">
            <p>
              <span className="mb-1 flex items-center gap-2 font-semibold text-white">
                <MapPin className="h-4 w-4" /> Siège social :
              </span>
              {contactInfo.address}
              <br />
              {contactInfo.city}
            </p>
            <p>
              <span className="mb-1 block font-semibold text-white">
                Rayonnement :
              </span>
              {contactInfo.reach}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> Tel : {contactInfo.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors hover:text-orange"
              >
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>

        {/* Contact / social */}
        <div>
          <h4 className="mb-5 font-heading text-lg font-bold">Nous contacter</h4>
          <div className="flex flex-col items-start gap-4">
            <Button href="/contact" variant="white" size="sm">
              Contact
            </Button>
            <a
              href="https://www.linkedin.com/company/sy-co-maroc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-orange"
            >
              <Linkedin className="h-5 w-5" /> Linkedin
            </a>
            <div className="mt-2 flex gap-3">
              <TrustSeal variant="confiance" className="w-16" />
              <TrustSeal variant="qualite" className="w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/15">
        <div className="container-narrow flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/70 md:flex-row">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-semibold text-white">Pages légales</span>
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-orange"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p>
            ©2026 SY&CO — Synergie &amp; Compétences | Réalisé par Asblanc
          </p>
        </div>
      </div>
    </footer>
  );
}
