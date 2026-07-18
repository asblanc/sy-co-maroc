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
            Un événement d’entreprise n’est jamais qu’un moment&nbsp;: c’est un
            levier de culture, de cohésion et de performance. Basés au Maroc et
            présents partout dans le monde, nous concevons des séminaires, des
            conventions et des formations qui rassemblent vos équipes, libèrent
            l’intelligence collective et transforment durablement vos façons de
            travailler. Chez SY&amp;CO, nous croyons qu’en réunissant les bonnes
            personnes, au bon endroit, avec la bonne énergie, on fait grandir les
            organisations — et les femmes et les hommes qui les composent.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <span className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full bg-teal/15" />
          <Image
            src="/images/illustration-home.png"
            alt="Illustration collaboration SY&CO"
            width={620}
            height={420}
            className="h-auto w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
