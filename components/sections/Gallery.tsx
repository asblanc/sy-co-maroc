import Image from "next/image";
import { galleryPhotos } from "@/lib/gallery";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Galerie « Nos formations en action » — grille de vraies photos d'événements.
 * Tuile `featured` = 2 colonnes. Rend null si la sélection est vide.
 */
export function Gallery() {
  if (galleryPhotos.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-10 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            En images
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            Nos formations en action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ink/70">
            Retour sur nos programmes Form&rsquo;Action et nos rencontres Meet
            &amp; Share — au Maroc, au Sénégal, en Côte d&rsquo;Ivoire et au-delà.
          </p>
        </Reveal>

        <div className="grid auto-rows-[1fr] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryPhotos.map((p, i) => (
            <Reveal
              key={p.src}
              delay={(i % 3) * 0.06}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                p.featured ? "col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${
                  p.featured ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {p.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
