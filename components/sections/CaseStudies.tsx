"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** "Études de cas" — horizontally scrollable case-study carousel. */
export function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="cas-clients" className="bg-white py-20 lg:py-28">
      <div className="container-narrow">
        <Reveal className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-teal sm:text-4xl">
              Études de cas
            </h2>
            <p className="mt-3 max-w-xl text-base text-ink/70">
              Vous aimeriez être accompagné·e dans votre management.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal text-teal transition-colors hover:bg-teal hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal text-teal transition-colors hover:bg-teal hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((cs) => (
            <article
              key={cs.title}
              data-card
              className="group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:w-[45%] lg:w-[31%]"
            >
              <Link href={cs.href} className="relative block h-52 overflow-hidden">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {cs.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-pink px-3 py-1 text-xs font-bold uppercase text-white">
                    {cs.tag}
                  </span>
                )}
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-teal">
                  {cs.category}
                </p>
                <h3 className="mb-6 flex-1 font-heading text-lg font-bold leading-snug text-ink">
                  {cs.title}
                </h3>
                <Link
                  href={cs.href}
                  className="inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-wide text-pink transition-colors hover:text-teal"
                >
                  En savoir <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <Button href="/nos-cas-clients" variant="outline">
            Toutes nos études de cas
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
