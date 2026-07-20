import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Service = { title: string; description: string; image?: string };

const accentColors = ["#097D7A", "#FD8B15", "#ED0F7D", "#1076DA"];

/** "Vos enjeux, nos réponses" — needs presented as accent-bar cards. */
export function NeedsChecklist({ items }: { items: string[] }) {
  return (
    <section className="bg-peach/20 py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-12 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Vos enjeux
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            nos réponses
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item}
              delay={(i % 3) * 0.06}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 pl-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span
                className="absolute left-0 top-0 h-full w-1.5 transition-all duration-300 group-hover:w-2.5"
                style={{ backgroundColor: accentColors[i % accentColors.length] }}
              />
              <p className="font-heading text-base font-semibold leading-snug text-ink/85">
                {item}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "Ce que nous mettons en œuvre" — services grid. */
export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-12 text-center">
          <h3 className="font-heading text-xl font-semibold text-ink/70">
            Ce que nous
          </h3>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            mettons en œuvre
          </h2>
        </Reveal>

        <div className="mx-auto max-w-5xl space-y-12 lg:space-y-16">
          {services.map((s, i) => {
            const imageRight = i % 2 === 1; // alterne gauche / droite
            return (
              <Reveal
                key={s.title}
                className="grid items-center gap-8 sm:grid-cols-2 lg:gap-14"
              >
                {/* photo dans une bulle (grossie) */}
                <div
                  className={`flex justify-center ${imageRight ? "sm:order-2" : "sm:order-1"}`}
                >
                  <div
                    className={`${i % 2 === 0 ? "blob-a" : "blob-b"} relative h-60 w-60 overflow-hidden shadow-xl sm:h-64 sm:w-64 lg:h-72 lg:w-72`}
                  >
                    {s.image ? (
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 640px) 240px, 288px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal to-teal-dark p-4">
                        <span className="text-center font-heading text-lg font-bold text-white/90">
                          {s.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* texte à côté (gauche/droite) */}
                <div
                  className={`text-center sm:text-left ${imageRight ? "sm:order-1 sm:text-right" : "sm:order-2"}`}
                >
                  <span className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-widest text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-4 font-heading text-2xl font-bold leading-tight text-teal sm:text-3xl">
                    {s.title}
                  </h3>
                  {s.description && (
                    <p className="text-base leading-relaxed text-ink/75 sm:text-lg">
                      {s.description}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
