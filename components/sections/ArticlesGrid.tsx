"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Clock } from "lucide-react";
import { articles } from "@/lib/articles";
import { cn } from "@/lib/utils";

const ALL = "Tous les articles";
const PAGE_SIZE = 6;

/** "Notre Blog" — article grid with a thematic filter and "load more". */
export function ArticlesGrid() {
  const [active, setActive] = useState(ALL);
  const [count, setCount] = useState(PAGE_SIZE);

  // filter chips derived from the categories that actually have articles
  const categories = useMemo(() => {
    const set = Array.from(new Set(articles.map((a) => a.category)));
    return [ALL, ...set];
  }, []);

  const filtered = useMemo(
    () =>
      active === ALL
        ? articles
        : articles.filter((a) => a.category === active),
    [active]
  );

  const visible = filtered.slice(0, count);
  const remaining = filtered.length - visible.length;

  const selectCategory = (topic: string) => {
    setActive(topic);
    setCount(PAGE_SIZE); // reset paging when the filter changes
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow">
        {/* filter chips */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((topic) => {
            const isActive = active === topic;
            return (
              <button
                key={topic}
                onClick={() => selectCategory(topic)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-teal bg-teal text-white shadow-sm"
                    : "border-teal/30 bg-teal/5 text-teal hover:bg-teal/10"
                )}
              >
                {topic}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((article) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 font-heading text-base font-bold leading-snug text-ink">
                      {article.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-ink/70">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-pink transition-colors group-hover:text-teal">
                        Lire l&apos;article <ArrowRight className="h-4 w-4" />
                      </span>
                      <span className="flex items-center gap-1 text-xs text-ink/50">
                        <Clock className="h-3.5 w-3.5" /> {article.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="py-10 text-center text-ink/60">
            Aucun article dans cette thématique pour le moment.
          </p>
        )}

        {remaining > 0 && (
          <div className="mt-12 flex flex-col items-center gap-3">
            <button
              onClick={() => setCount((c) => c + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 font-heading text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink hover:shadow-md"
            >
              Voir plus d&apos;articles
              <ChevronDown className="h-4 w-4" />
            </button>
            <span className="text-xs text-ink/50">
              {visible.length} sur {filtered.length} articles
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
