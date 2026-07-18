import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageHeroBg } from "./PageHeroBg";

type PageHeroProps = {
  title: string;
  category?: string;
  categoryHref?: string;
  breadcrumb?: string;
  image?: string;
};

/** Colored page header band with breadcrumb, background image, two-tone title
 *  and a rotating category badge — matching the reference inner pages. */
export function PageHero({
  title,
  category,
  categoryHref,
  breadcrumb,
  image,
}: PageHeroProps) {
  const [firstWord, ...restWords] = title.split(" ");
  const rest = restWords.join(" ");

  return (
    <section className="relative overflow-hidden bg-teal text-white">
      {image && <PageHeroBg image={image} />}

      <div className="container-narrow relative z-10 flex items-center gap-6 py-16 lg:py-24">
        <div className="flex-1">
          <nav
            aria-label="Fil d'Ariane"
            className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/75"
          >
            <Link href="/" className="transition-colors hover:text-orange">
              Accueil
            </Link>
            {category && (
              <>
                <ChevronRight className="h-4 w-4" />
                {categoryHref ? (
                  <Link
                    href={categoryHref}
                    className="transition-colors hover:text-orange"
                  >
                    {category}
                  </Link>
                ) : (
                  <span>{category}</span>
                )}
              </>
            )}
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{breadcrumb ?? title}</span>
          </nav>

          {category &&
            (categoryHref ? (
              <Link
                href={categoryHref}
                className="mb-3 inline-block font-heading text-sm font-bold uppercase tracking-widest text-orange transition-opacity hover:opacity-80"
              >
                {category}
              </Link>
            ) : (
              <p className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-orange">
                {category}
              </p>
            ))}
          <h1 className="max-w-3xl text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-orange">{firstWord} </span>
            {rest}
          </h1>
        </div>

        {category && <CategoryBadge label={category} />}
      </div>
    </section>
  );
}

/** Rotating circular "· CATEGORY ·" badge with a centered dot. */
function CategoryBadge({ label }: { label: string }) {
  const text = `${label} · ${label} · `;
  return (
    <div className="relative hidden h-32 w-32 shrink-0 lg:block">
      <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_18s_linear_infinite]">
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-white/90 text-[11px] font-bold uppercase tracking-[0.18em]">
          <textPath href="#badge-circle" startOffset="0%">
            {text.toUpperCase()}
          </textPath>
        </text>
      </svg>
      <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange" />
    </div>
  );
}
