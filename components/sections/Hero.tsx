"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
            className="mt-8 flex justify-center lg:justify-start"
          >
            <div className="rounded-xl bg-white p-3 shadow-lg">
              <Image
                src="/images/happyatwork.png"
                alt="Certification HappyAtWork 2025"
                width={280}
                height={140}
                className="h-auto w-[220px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-full max-w-[480px]"
        >
          {/* decorative "bubble" shapes behind the photo */}
          <span className="blob-arch absolute -right-8 -top-10 z-0 hidden h-52 w-52 bg-pink/90 sm:block" />
          <span className="absolute -left-8 bottom-4 z-0 h-40 w-40 rounded-full bg-orange" />
          <div className="relative h-[360px] overflow-hidden rounded-[2.25rem] shadow-2xl sm:h-[440px]">
            <Image
              src="/images/hero-team1.jpg"
              alt="L'équipe SY&CO"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
