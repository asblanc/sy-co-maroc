import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Service = { title: string; description: string; image?: string };

const accentColors = ["#097D7A", "#FD8B15", "#ED0F7D", "#1076DA"];

/** "Vous avez besoin de…" — needs presented as accent-bar cards (no markers). */
export function NeedsChecklist({ items }: { items: string[] }) {
  return (
    <section className="bg-peach/20 py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-12 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Vous avez
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            besoin de…
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

/** "Qu'allons-nous faire pour vous aujourd'hui ?" — services grid. */
export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-12 text-center">
          <h3 className="font-heading text-xl font-semibold text-ink/70">
            Qu&apos;allons-nous faire pour
          </h3>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            vous aujourd&apos;hui&nbsp;?
          </h2>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 0.08}
              className="group flex flex-col items-center rounded-3xl border border-black/5 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* photo dans une bulle */}
              <div
                className={`${i % 2 === 0 ? "blob-a" : "blob-b"} relative mb-6 h-40 w-40 overflow-hidden shadow-md`}
              >
                {s.image ? (
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal to-teal-dark p-3">
                    <span className="text-center font-heading text-sm font-bold text-white/90">
                      {s.title}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-teal">
                {s.title}
              </h3>
              {s.description && (
                <p className="text-sm leading-relaxed text-ink/70">
                  {s.description}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
