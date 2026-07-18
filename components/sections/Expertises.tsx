"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { expertises } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/** "Quel défi allons-nous relever ensemble ?" — grid of expertise cards. */
export function Expertises() {
  return (
    <section id="expertises" className="bg-white py-20 lg:py-28">
      <div className="container-narrow">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-4xl leading-tight text-teal sm:text-5xl lg:text-6xl">
            Co-construisons
            <br />
            <span className="text-orange">votre réussite</span>
          </h2>
          <p className="mt-6 font-heading text-lg font-bold text-ink/70">
            Quel défi allons-nous relever ensemble&nbsp;?
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertises.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={item.href}
                aria-label={`En savoir plus : ${item.title}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
              >
                <span
                  className="mb-6 h-1.5 w-14 rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: item.color }}
                />
                <h3 className="mb-4 font-heading text-xl font-bold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-ink/70">
                  {item.description}
                </p>
                <span
                  className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition-transform duration-300 group-hover:translate-x-1"
                  style={{ backgroundColor: item.color }}
                >
                  info <Plus className="h-4 w-4" strokeWidth={3} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
