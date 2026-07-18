import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Service = { title: string; description: string; image?: string };

/** "Vous avez besoin de…" — needs checklist band. */
export function NeedsChecklist({ items }: { items: string[] }) {
  return (
    <section className="bg-peach/20 py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-10 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Vous avez
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            besoin de…
          </h2>
        </Reveal>
        <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-base text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
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
