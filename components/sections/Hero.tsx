"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrustSeal } from "@/components/ui/TrustSeal";
import { TextReveal } from "@/components/ui/TextReveal";

/**
 * Hero « split » : bande teal, gros titre blanc à gauche, photo occupant toute
 * la hauteur de la colonne de droite (proportions calquées sur la maquette).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-narrow grid items-stretch gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
        {/* Left — texte */}
        <div className="flex flex-col justify-center text-center text-white lg:text-left">
          <TextReveal
            as="h1"
            text={"Un séminaire.\nUn déclic.\nUne équipe\ntransformée."}
            delay={0.15}
            stagger={0.08}
            className="text-4xl font-bold uppercase leading-[1.04] sm:text-5xl lg:text-6xl"
          />

          <TextReveal
            as="p"
            text={
              "Développer les compétences pour bâtir des équipes plus fortes."
            }
            delay={0.6}
            stagger={0.03}
            className="mx-auto mt-6 max-w-md font-heading text-lg text-white/90 lg:mx-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center justify-center gap-4 lg:justify-start"
          >
            <div className="rounded-full bg-white p-2 shadow-lg">
              <TrustSeal variant="confiance" className="w-[104px]" />
            </div>
            <p className="max-w-[180px] text-left text-sm font-semibold text-white/90">
              La confiance de nos clients, notre meilleure référence.
            </p>
          </motion.div>
        </div>

        {/* Right — photo pleine hauteur */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto min-h-[340px] w-full max-w-[560px] lg:mx-0 lg:min-h-[500px] lg:max-w-none"
        >
          {/* accents décoratifs qui débordent derrière la photo */}
          <span
            aria-hidden
            className="absolute -left-8 -top-8 z-0 h-28 w-28 rounded-full bg-orange shadow-lg sm:h-36 sm:w-36"
          />
          <span
            aria-hidden
            className="blob-arch absolute -bottom-8 -right-6 z-0 h-28 w-28 bg-pink/90 shadow-lg sm:h-36 sm:w-36"
          />
          <div className="absolute inset-0 z-10 overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/hero-team1.jpeg"
              alt="Équipe en formation avec SY&CO"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
