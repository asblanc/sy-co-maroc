import { Check } from "lucide-react";
import { packs } from "@/lib/a-completer";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * Grille tarifaire des packs Form’Action (page « Nos offres »).
 * Ne s'affiche que si `packs` (lib/a-completer.ts) contient au moins un pack —
 * sinon la page conserve sa mention « grille sur demande ».
 */
export function PricingGrid() {
  if (packs.length === 0) return null;

  return (
    <section className="bg-peach/20 py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-12 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Nos packs
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            Grille tarifaire Form’Action
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <Reveal
              key={pack.name}
              delay={(i % 3) * 0.08}
              className={`flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                pack.featured ? "ring-2 ring-orange" : "border border-black/5"
              }`}
            >
              {pack.featured && (
                <span className="mb-4 self-start rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Le plus demandé
                </span>
              )}
              <h3 className="font-heading text-xl font-bold text-teal">
                {pack.name}
              </h3>
              <p className="mt-1 text-sm text-ink/70">{pack.destination}</p>

              <p className="mt-6 font-heading text-2xl font-bold text-ink">
                {pack.price}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink/75">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-teal" strokeWidth={3} />
                  Durée : {pack.duration}
                </li>
                {pack.note && (
                  <li className="flex items-center gap-2">
                    <Check
                      className="h-4 w-4 shrink-0 text-teal"
                      strokeWidth={3}
                    />
                    {pack.note}
                  </li>
                )}
              </ul>

              <div className="mt-8 pt-2">
                <Button href="/contact" variant="pink" className="w-full justify-center">
                  Réserver ce pack
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink/60">
          Tarifs indicatifs — un devis personnalisé vous est remis sur demande.
        </p>
      </div>
    </section>
  );
}
