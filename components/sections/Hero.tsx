"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrustSeal } from "@/components/ui/TrustSeal";

/**
 * Above-the-fold hero: a full-color band in the SY&CO logo green, white
 * uppercase headline, certification badge and the team photo framed with the
 * reference's decorative "bubble" shapes (orange circle + pink arch).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal">
      {/* soft decorative accent */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-narrow relative grid items-center gap-10 py-12 lg:min-h-[600px] lg:grid-cols-2 lg:gap-8 lg:py-16">
        {/* Left */}
        <div className="text-center text-white lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold uppercase leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Le monde change,
            <br />
            le management aussi&nbsp;!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-6 max-w-md font-heading text-lg text-white/90 lg:mx-0"
          >
            Formation, Accompagnement,
            <br className="hidden sm:block" /> Intelligence Collective
          </motion.p>

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

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-[86%] max-w-[440px]"
        >
          {/* decorative shapes — sit clearly outside the photo */}
          <motion.span
            aria-hidden
            className="absolute -right-10 -top-12 z-0 h-32 w-32 rounded-full bg-orange shadow-lg sm:h-40 sm:w-40"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="blob-arch absolute -bottom-12 -left-12 z-0 h-36 w-36 bg-pink/90 shadow-lg sm:h-44 sm:w-44"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <span
            aria-hidden
            className="absolute -bottom-4 right-6 z-0 h-8 w-8 rounded-full border-4 border-white/70"
          />
          <div className="relative z-10 h-[340px] overflow-hidden rounded-[2.25rem] shadow-2xl sm:h-[440px]">
            <Image
              src="/images/hero-team1.jpg"
              alt="L'équipe SY&CO"
              fill
              priority
              sizes="(max-width: 1024px) 86vw, 440px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
