"use client";

import { motion } from "framer-motion";
import { Video, PhoneCall, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const options = [
  {
    icon: Video,
    label: "Réserver une visio",
    href: "/contact",
    color: "#007873",
  },
  {
    icon: PhoneCall,
    label: "Me faire rappeler",
    href: "/contact",
    color: "#ED0F7D",
  },
  {
    icon: Mail,
    label: "Nous écrire",
    href: "/contact",
    color: "#1076DA",
  },
];

/** Final CTA — three ways to get in touch. */
export function ContactCTA() {
  return (
    <section id="contact" className="bg-peach/25 py-20 lg:py-28">
      <div className="container-narrow text-center">
        <Reveal>
          <h2 className="mb-5 text-3xl font-bold text-teal sm:text-4xl">
            Envie de transformer vos équipes&nbsp;?
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-base text-ink/80">
            Formation résidentielle, rencontre entre pairs ou programme sur
            mesure&nbsp;: parlez-nous de votre besoin, nous construisons le
            parcours qui fera grandir vos cadres et dirigeants.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.a
                key={opt.label}
                href={opt.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center gap-5 rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span
                  className="flex h-20 w-20 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: opt.color }}
                >
                  <Icon className="h-9 w-9" strokeWidth={1.8} />
                </span>
                <span className="font-heading text-lg font-bold text-ink">
                  {opt.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
