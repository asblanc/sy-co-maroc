import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { thematics } from "@/lib/pages";
import { Reveal } from "@/components/ui/Reveal";

/**
 * « Nos programmes — Des parcours qui transforment », par thématique.
 * 7 domaines d'expertise Form’Action ; chaque boîte renvoie vers sa page
 * (description + fiche technique téléchargeable).
 */
export function Thematics() {
  return (
    <section id="thematiques" className="bg-white py-20 lg:py-28">
      <div className="container-narrow">
        <Reveal className="mb-14 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Nos programmes
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            Des parcours qui transforment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink/70">
            Nos formations Form&rsquo;Action, organisées par thématique
            d&rsquo;expertise — 7 domaines au service des cadres et dirigeants
            d&rsquo;Afrique francophone.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {thematics.map((t, i) => (
            <Reveal key={t.href} delay={(i % 3) * 0.08}>
              <Link
                href={t.href}
                aria-label={`Voir plus : ${t.title}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
              >
                <span
                  aria-hidden
                  className="mb-6 h-1.5 w-14 rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: t.color }}
                />
                <h3 className="mb-4 font-heading text-lg font-bold leading-snug text-ink">
                  {t.title}
                </h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-ink/70">
                  {t.short}
                </p>
                <span className="inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-wide text-teal transition-all duration-300 group-hover:gap-3">
                  Voir plus <ArrowRight className="h-4 w-4" strokeWidth={3} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
