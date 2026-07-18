"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

const makeVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

/**
 * Scroll-reveal wrapper. Fades and slides content into view — mirrors the
 * Elementor `fadeIn` entrance animations used across the reference site.
 */
export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={makeVariants(y)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
