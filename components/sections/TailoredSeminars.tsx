import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** « Séminaires personnalisés clés en main » — bulle-photo + texte. */
export function TailoredSeminars() {
  return (
    <section className="bg-peach/20 py-20 lg:py-28">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2">
        {/* image dans une bulle organique */}
        <Reveal className="relative order-1">
          <span className="absolute -left-6 -top-6 -z-10 h-32 w-32 rounded-full bg-orange/20" />
          <span className="absolute -bottom-6 right-2 -z-10 h-24 w-24 rounded-full bg-teal/10" />
          <div className="blob-b relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden shadow-xl">
            <Image
              src="/images/illustration-home.jpg"
              alt="Séminaire personnalisé conçu par SY&CO"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal/30 via-transparent to-orange/30" />
          </div>
        </Reveal>

        {/* texte */}
        <Reveal delay={0.1} className="order-2">
          <h2 className="text-3xl font-bold leading-tight text-teal sm:text-4xl">
            Séminaires personnalisés
            <br />
            clés en main
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
            <p>
              Plus qu&rsquo;un séminaire de cohésion d&rsquo;équipe, nous
              concevons avec vous une nouvelle dynamique collaborative pérenne.
            </p>
            <p>
              En fonction de vos besoins, nous vous proposons des ateliers
              créatifs, une démarche Kaizen, des méthodes d&rsquo;intelligence
              collective ou de facilitation de la communication interpersonnelle,
              des ateliers de définition des valeurs de l&rsquo;équipe, de gestion
              de conflit ou un programme d&rsquo;accélération de projet innovant.
            </p>
            <p>
              Et toujours avec notre touche&nbsp;: de l&rsquo;humain, du
              collaboratif, du plaisir, de la créativité, de la réussite&nbsp;!
            </p>
          </div>
          <div className="mt-8">
            <Button href="/contact" variant="orange" size="lg">
              Parlons-en&nbsp;!
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
