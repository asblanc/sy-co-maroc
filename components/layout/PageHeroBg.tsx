"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Parallax + overlay background image for the page hero band. */
export function PageHeroBg({ image }: { image: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* teal overlays so the title stays readable over the photo */}
      <div className="absolute inset-0 bg-teal/85 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal via-teal/80 to-teal/40" />
    </div>
  );
}
