"use client";

import { TrustSeal } from "@/components/ui/TrustSeal";
import { stats } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";
import { Reveal } from "@/components/ui/Reveal";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const { value: current, ref } = useCountUp(value);
  return (
    <div className="text-center">
      <p className="font-heading text-5xl font-bold text-orange sm:text-6xl">
        <span ref={ref}>{current.toLocaleString("fr-FR")}</span>
        {suffix}
      </p>
      <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-white/85">
        {label}
      </p>
    </div>
  );
}

/** Key-figures band with animated counters. */
export function Stats() {
  return (
    <section className="relative overflow-hidden bg-teal py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/5" />

      <div className="container-narrow relative">
        <Reveal className="mb-14 text-center">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Depuis 2020, SY&CO en quelques chiffres
          </h2>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="rounded-full bg-white/95 p-3">
            <TrustSeal variant="confiance" className="w-24" />
          </div>
          <div className="rounded-full bg-white/95 p-3">
            <TrustSeal variant="qualite" className="w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
