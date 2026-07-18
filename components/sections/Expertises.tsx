"use client";

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
          <h2 className="text-3xl font-bold text-teal sm:text-4xl">
            Quel défi allons-nous relever ensemble&nbsp;?
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertises.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
