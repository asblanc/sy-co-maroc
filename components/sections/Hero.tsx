"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Above-the-fold hero: a full-color band in the SY&CO logo green, white
 * uppercase headline, certification badge and the team photo with an orange
 * accent circle (the logo's second colour).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Colored hero band */}
      <div className="relative bg-teal">
        {/* soft decorative accents */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="container-narrow relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          {/* Left */}
          <div className="text-center text-white lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-bold uppercase leading-[1.1] sm:text-5xl lg:text-6xl"
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
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* yellow accent circle peeking from behind the photo */}
            <span className="absolute -left-6 -top-8 -z-0 h-40 w-40 rounded-full bg-orange" />
            <span className="absolute -bottom-6 -right-4 -z-0 h-28 w-28 rounded-3xl bg-peach" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/hero-team1.jpg"
                alt="L'équipe SY&CO"
                width={600}
                height={600}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Co'designons banner */}
      <div className="relative bg-teal py-14 text-center text-white">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl text-orange sm:text-5xl lg:text-6xl"
          >
            Co-designons
            <br />
            <span className="text-white">votre réussite</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl font-heading text-lg text-white/90"
          >
            Quel défi allons-nous relever ensemble&nbsp;?
          </motion.p>
        </div>
      </div>
    </section>
  );
}
