import Image from "next/image";
import { partners } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Infinite partner marquee. Displays the official logo when a file is provided
 * in /public/images/clients/, otherwise a clean branded wordmark tile.
 */
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
          {loop.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-teal/10 bg-white px-6 shadow-sm"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={64}
                  className="max-h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              ) : (
                <span className="text-center font-heading text-base font-bold leading-tight tracking-tight text-teal/80">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
