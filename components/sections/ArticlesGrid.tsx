import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { articles, articleTopics } from "@/lib/articles";
import { Reveal } from "@/components/ui/Reveal";

/** "Notre Blog" — article cards grid with thematic filters. */
export function ArticlesGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow">
        {/* thematic chips */}
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {articleTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-teal/30 bg-teal/5 px-4 py-2 text-sm font-semibold text-teal transition-colors hover:bg-teal hover:text-white"
            >
              {topic}
            </span>
          ))}
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <Reveal
              key={article.title}
              delay={(i % 3) * 0.08}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-4 flex-1 font-heading text-base font-bold leading-snug text-ink">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-wide text-pink transition-colors group-hover:text-teal">
                  Lire l&apos;article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
