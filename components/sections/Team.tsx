import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** "Une équipe à l'esprit collaboratif" + CTA. */
export function Team() {
  return (
    <section id="equipe" className="bg-teal py-20 text-white lg:py-28">
      <div className="container-narrow grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <span className="absolute -right-5 -top-5 -z-0 h-28 w-28 rounded-3xl bg-pink" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/equipe1.jpg"
              alt="Une équipe de spécialistes SY&CO"
              width={620}
              height={460}
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
            SY&CO est une équipe de spécialistes aux profils
            complémentaires et résolument orientés «&nbsp;résultat&nbsp;» qui
            vous aidera à codesigner le futur de votre organisation. Nous
            cultivons l’esprit collaboratif, l’intelligence collective et
            l’innovation. L’optimisme et le plaisir représentent, selon nous, de
            réels leviers de réussite pour les transformations culturelles,
            managériales et organisationnelles.
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
