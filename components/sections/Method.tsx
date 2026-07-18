"use client";

import { motion } from "framer-motion";
import { iddeaSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

/** "Notre méthode IDDEA" — 5-step approach timeline. */
export function Method() {
  return (
    <section id="methode" className="bg-peach/20 py-20 lg:py-28">
      <div className="container-narrow">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-pink">
            Notre méthode
          </p>
          <h2 className="mb-6 text-4xl font-bold text-teal sm:text-5xl">
            IDDEA<sup className="text-lg">®</sup>
          </h2>
          <p className="text-base leading-relaxed text-ink/80">
            Pour accompagner nos clients, nous avons élaboré la démarche
            IDDEA®. Inspirée du Design Thinking, cette démarche garantit des
            accompagnements sur-mesure centrés utilisateur, basés sur la
            compréhension du besoin, la créativité, la co-création, l’itération
            et l’amélioration continue.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {iddeaSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl font-heading text-xl font-bold text-white shadow-md"
                style={{ backgroundColor: step.color }}
              >
                {i + 1}
              </div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ink/40">
                {step.index}
              </p>
              <h3
                className="mb-3 font-heading text-lg font-bold"
                style={{ color: step.color }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
