import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const agilePoints = [
  "un accompagnement complet, de l'inscription à la logistique sur place,",
  "une expertise internationale, académique et issue de l'entreprise,",
  "un impact mesuré : chaque participant repart avec un plan d'action concret,",
  "des formations résidentielles immersives (Form’Action),",
  "des rencontres entre pairs pour échanger sans filtre (Meet & Share),",
  "un ancrage panafricain : Maroc, Sénégal, Côte d'Ivoire.",
];

/** "Vous accompagner vers demain" — image + agility checklist. */
export function Accompany() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-narrow grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <span className="absolute -left-5 bottom-6 -z-10 h-28 w-28 rounded-3xl bg-orange/60" />
          <div className="blob-a overflow-hidden shadow-xl">
            <Image
              src="/images/evenements/evaluation-impact/evaluation-impact-03.jpg"
              alt="Participants d'un programme de formation SY&CO"
              width={620}
              height={520}
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
            Développer ses compétences change la trajectoire d’un dirigeant — et
            de toute son organisation. Nous concevons des parcours utiles,
            exigeants et alignés avec vos objectifs, du diagnostic au plan
            d’action.
          </p>
          <p className="mb-6 font-heading text-sm font-bold uppercase tracking-wide text-ink">
            Pourquoi SY&amp;CO&nbsp;:
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
