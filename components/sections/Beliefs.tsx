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
            L’entreprise joue un rôle essentiel dans la transformation de nos
            écosystèmes économiques, sociaux et environnementaux. Nous croyons
            que demain se bâtit dès aujourd’hui avec des collectifs engagés dans
            des organisations porteuses de sens pour créer durablement de la
            valeur. Pour accompagner les entreprises dans ce monde en perpétuel
            changement, nous facilitons leur évolution stratégique,
            organisationnelle et managériale, et cultivons l’Intelligence
            collective. Chez SY&CO, nous croyons en l’organisation
            responsable, collaborative et durable.
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
