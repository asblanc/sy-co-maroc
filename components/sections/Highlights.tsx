import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Highlight = { title: string; description: string };

/** "Ce que nous vous apportons" — curated benefit cards for content pages. */
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
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.08}
              className="flex flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-white">
                <Sparkles className="h-6 w-6" />
              </span>
              <h3 className="mb-3 font-heading text-lg font-bold text-teal">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/70">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
