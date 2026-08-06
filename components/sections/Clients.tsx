import Image from "next/image";
import { partners } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Infinite partner marquee. Displays the official logo when a file is provided
 * in /public/images/clients/, otherwise a clean branded wordmark tile.
 */
export function Clients() {
  const loop = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-white py-16 lg:py-20">
      <Reveal className="container-narrow mb-10 text-center">
        <p className="mb-2 font-heading text-sm font-bold uppercase tracking-widest text-orange">
          Ils nous font confiance
        </p>
        <h2 className="text-2xl font-bold text-teal sm:text-3xl">
          Des cadres &amp; dirigeants de tous secteurs
        </h2>
      </Reveal>

      <div className="marquee-mask relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-6">
          {loop.map((partner, i) => (
            <div
              key={`${partner.logo}-${i}`}
              className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-teal/10 bg-white p-3 shadow-sm transition-all duration-300 hover:border-orange/30 hover:shadow-md"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
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
