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
            Formateurs, coachs, consultants et facilitateurs&nbsp;: notre équipe
            intergénérationnelle réunit des profils complémentaires et un solide
            réseau de partenaires pluridisciplinaires. Du Maroc au Sénégal et à
            la Côte d’Ivoire, nous mettons la synergie des talents et des
            expertises au service de la performance de nos clients — en remettant
            l’humain au centre de chaque transformation.
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
