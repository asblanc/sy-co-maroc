import { Reveal } from "@/components/ui/Reveal";

type Highlight = { title: string; description: string };

/** Couleurs de marque en rotation (identité SY&CO). */
const accents = ["#097D7A", "#FD8B15", "#ED0F7D", "#1076DA"];

/**
 * "Ce que nous vous apportons" — bénéfices présentés en cartes numérotées.
 * Pas d'icône : numéro en typo display + barre d'accent animée + bulle
 * organique décorative (signature SY&CO), pour rester cohérent avec les
 * sections Expertises / Méthode / Axes du leadership.
 */
export function Highlights({ items }: { items: Highlight[] }) {
  return (
    <section className="bg-peach/20 py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-12 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Notre valeur ajoutée
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            Ce que nous vous apportons
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const color = accents[i % accents.length];
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 0.08}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                {/* bulle organique décorative en coin (signature SY&CO) */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20"
                  style={{ backgroundColor: color }}
                />

                <span
                  aria-hidden
                  className="font-display text-5xl font-bold leading-none"
                  style={{ color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  aria-hidden
                  className="mt-5 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: color }}
                />

                <h3 className="mb-3 mt-5 font-heading text-lg font-bold text-teal">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
