import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { realizations } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** "Nos réalisations" — showcase of event formats produced by SY&CO. */
export function Portfolio() {
  return (
    <section id="realisations" className="bg-white py-20 lg:py-28">
      <div className="container-narrow">
        <Reveal className="mb-14 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Nos réalisations
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            Des événements qui marquent les esprits
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink/70">
            Du séminaire de direction au team building outdoor, découvrez les
            formats que nous concevons et produisons, au Maroc et à
            l’international.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {realizations.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.08}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="mb-3 inline-block rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  {item.tag}
                </span>
                <h3 className="font-heading text-xl font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                  <MapPin className="h-4 w-4" /> {item.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button href="/evenementiel-et-seminaires" variant="outline">
            Découvrir notre offre événementielle <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
