import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/** "Chez SY&CO nous croyons que…" belief statement. */
export function Beliefs() {
  return (
    <section className="relative overflow-hidden bg-peach/25 py-20 lg:py-28">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-pink">
            Chez SY&CO
          </p>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-teal sm:text-4xl">
            nous croyons que…
          </h2>
          <p className="text-base leading-relaxed text-ink/80">
            La transformation est une source d’opportunités. Depuis 2020, nous
            accompagnons cadres, dirigeants et organisations d’Afrique
            francophone dans le développement de leurs compétences en
            leadership, management stratégique et transformation
            organisationnelle. Chez SY&amp;CO, nous croyons qu’une pédagogie
            exigeante, incarnée et immédiatement actionnable réconcilie
            performance de l’entreprise, bien-être au travail et responsabilité
            sociétale — au service d’une Afrique qui construit elle-même les
            dirigeants de sa réussite.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <span className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-orange/20" />
          <div className="blob-a relative aspect-[5/4] w-full overflow-hidden shadow-xl">
            <Image
              src="/images/illustration-home.jpg"
              alt="Cadres et dirigeants en formation avec SY&CO"
              fill
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
