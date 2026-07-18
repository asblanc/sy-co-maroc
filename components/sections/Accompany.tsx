import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const agilePoints = [
  "élaborer une vision partagée,",
  "développer vos talents pour mettre en oeuvre votre vision,",
  "motiver et engager vos équipes,",
  "générer de l'intelligence collective,",
  "piloter vos projets de transformation,",
  "mener à bien vos projets d'innovation.",
];

/** "Vous accompagner vers demain" — image + agility checklist. */
export function Accompany() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-narrow grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <span className="absolute -left-5 bottom-6 -z-10 h-28 w-28 rounded-3xl bg-orange/60" />
          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/demain1.jpg"
              alt="Vous accompagner vers demain"
              width={620}
              height={460}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-teal sm:text-4xl">
            Vous accompagner
            <br />
            <span className="text-pink">vers demain</span>
          </h2>
          <p className="mb-6 text-base leading-relaxed text-ink/80">
            Face à un monde qui bouge, les organisations sont amenées à être
            plus résilientes et agiles.
          </p>
          <p className="mb-6 font-heading text-sm font-bold uppercase tracking-wide text-ink">
            Envie d’être plus agile&nbsp;? SY&CO vous aide à&nbsp;:
          </p>
          <ul className="space-y-3">
            {agilePoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-base text-ink/80">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
