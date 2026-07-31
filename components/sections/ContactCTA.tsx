import { Reveal } from "@/components/ui/Reveal";

/** Boutons de contact — jaune / rose / orange (repris du design fourni). */
const options = [
  { label: "Réserver une visio", href: "/contact", color: "#FCD430" },
  { label: "Me faire rappeler", href: "/contact", color: "#ED0F7D" },
  { label: "Nous écrire", href: "/contact", color: "#FD8B15" },
];

/** CTA de bas de page (présent sur toutes les pages) — « Parlons de votre projet ». */
export function ContactCTA() {
  return (
    <section id="contact" className="bg-peach/25 py-16 lg:py-24">
      <div className="container-narrow text-center">
        <Reveal>
          <h2 className="font-display text-4xl text-teal sm:text-5xl">
            Parlons de votre projet
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink/70">
            Chez SY&amp;CO, c&rsquo;est simple&nbsp;: tout commence par un café ou
            un thé (même virtuel)&nbsp;!
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              className="rounded-full px-8 py-4 text-center font-heading text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{ backgroundColor: opt.color }}
            >
              {opt.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
