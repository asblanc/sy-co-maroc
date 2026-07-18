import { partners } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/** Infinite partner marquee — Moroccan companies rendered as styled wordmarks. */
export function Clients() {
  const loop = [...partners, ...partners];

  return (
    <section className="bg-white py-16 lg:py-20">
      <Reveal className="container-narrow mb-10 text-center">
        <p className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-orange">
          Ils nous font confiance
        </p>
        <h2 className="text-2xl font-bold text-teal sm:text-3xl">
          Nos partenaires au Maroc
        </h2>
      </Reveal>

      <div className="marquee-mask relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-6">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-16 shrink-0 items-center justify-center whitespace-nowrap rounded-2xl border border-teal/15 bg-teal/[0.04] px-7"
            >
              <span className="font-heading text-lg font-bold tracking-tight text-teal/80">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
