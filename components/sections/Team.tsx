import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** "Une équipe à l'esprit collaboratif" + CTA. */
export function Team() {
  return (
    <section id="equipe" className="bg-teal py-20 text-white lg:py-28">
      <div className="container-narrow grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <span className="absolute -right-4 -top-6 z-0 h-28 w-28 rounded-full bg-orange" />
          <div className="blob-b relative overflow-hidden shadow-2xl">
            <Image
              src="/images/equipe1.jpg"
              alt="Une équipe de spécialistes SY&CO"
              width={620}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
            Une équipe à l’esprit
            <br />
            <span className="text-orange">collaboratif</span>
          </h2>
          <p className="mb-8 text-base leading-relaxed text-white/85">
            Chefs de projet événementiel, facilitateurs, formateurs et
            créatifs&nbsp;: notre équipe réunit des profils complémentaires,
            animés par une même exigence de résultat. De Casablanca à
            l’international, nous imaginons et orchestrons des expériences qui
            marquent les esprits et rapprochent les équipes. L’écoute,
            l’énergie et le plaisir sont, pour nous, les meilleurs ingrédients
            d’un événement réussi et d’une collaboration qui dure.
          </p>
          <p className="mb-5 font-heading text-lg font-bold">
            Envie d&apos;en savoir plus&nbsp;?
          </p>
          <Button href="/contact" variant="white" size="lg">
            Contactez-nous
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
