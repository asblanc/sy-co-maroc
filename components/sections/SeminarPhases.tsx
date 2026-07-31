import { Reveal } from "@/components/ui/Reveal";

type Phase = {
  n: string;
  title: string;
  tagline: string;
  description: string;
  color: string;
};

const phases: Phase[] = [
  {
    n: "1",
    title: "Diagnostic & cadrage",
    tagline: "Comprendre avant de concevoir.",
    description:
      "Cette phase permet de recueillir les besoins du client et de définir les objectifs pédagogiques, le format ainsi que le budget du séminaire.",
    color: "#097D7A",
  },
  {
    n: "2",
    title: "Conception",
    tagline: "Construire un dispositif sur mesure.",
    description:
      "Le programme est élaboré, les formateurs sont mobilisés, et les supports ainsi que la logistique sont préparés en conséquence.",
    color: "#ED0F7D",
  },
  {
    n: "3",
    title: "Animation",
    tagline: "Délivrer avec exigence.",
    description:
      "Les modules sont animés, le déroulement est suivi au quotidien, et une évaluation à chaud est réalisée à l'issue du séminaire.",
    color: "#FD8B15",
  },
  {
    n: "4",
    title: "Capitalisation",
    tagline: "Ancrer les acquis dans la durée.",
    description:
      "Les attestations sont remises, un bilan est établi, et les contenus sont valorisés pour les actions futures.",
    color: "#1076DA",
  },
];

/** « Les 4 phases d'un séminaire SY&CO » — 4 boîtes numérotées (2 colonnes). */
export function SeminarPhases() {
  return (
    <section id="methode">
      {/* Bande teal pleine largeur (comme la section « Une équipe… ») */}
      <div className="bg-teal py-16 text-white lg:py-20">
        <Reveal className="container-narrow text-center">
          <h2 className="font-display text-2xl uppercase leading-tight sm:text-4xl lg:text-[2.75rem]">
            Les <span className="text-orange">4 phases</span> d&rsquo;un séminaire
            SY&amp;CO
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85">
            De l&rsquo;écoute du besoin jusqu&rsquo;à l&rsquo;ancrage des acquis,
            une démarche rigoureuse en quatre temps.
          </p>
        </Reveal>
      </div>

      {/* Les 4 boîtes */}
      <div className="bg-peach/20 py-16 lg:py-24">
        <div className="container-narrow grid gap-6 md:grid-cols-2">
          {phases.map((p, i) => (
            <Reveal
              key={p.n}
              delay={(i % 2) * 0.1}
              className="flex overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div
                className="flex w-20 shrink-0 items-center justify-center rounded-r-[2rem] sm:w-24"
                style={{ backgroundColor: p.color }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-heading text-xl font-bold"
                  style={{ color: p.color }}
                >
                  {p.n}
                </span>
              </div>
              <div className="flex-1 p-6 sm:p-7">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-teal">
                  {p.title}
                </h3>
                <p className="mt-1 font-heading text-sm font-bold text-ink">
                  {p.tagline}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
