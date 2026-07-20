"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType } from "react";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "p" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/**
 * Word-by-word reveal (fade + rise + de-blur), staggered.
 * `\n` in `text` becomes a line break. Respects reduced-motion.
 */
export function TextReveal({
  text,
  as = "div",
  className,
  delay = 0,
  stagger = 0.07,
  once = true,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");

  if (reduce) {
    const Tag = as as ElementType;
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {lines.map((line, li) => {
        const words = line.split(" ");
        return (
          <span key={li} className="block">
            {words.map((w, wi) => (
              <motion.span
                key={`${li}-${wi}`}
                variants={word}
                className="inline-block whitespace-pre"
                style={{ willChange: "transform, filter, opacity" }}
              >
                {w}
                {wi < words.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </span>
        );
      })}
    </MotionTag>
  );
}
