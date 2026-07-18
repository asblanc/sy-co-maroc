import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { PageData } from "@/lib/pages";

/** Previous / next navigation between sibling pages. */
export function PageNav({
  prev,
  next,
}: {
  prev: PageData | null;
  next: PageData | null;
}) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Navigation entre les pages"
      className="border-t border-black/5 bg-white"
    >
      <div className="container-narrow grid gap-4 py-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/${prev.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-black/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
              <ArrowLeft className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-wide text-ink/40">
                Précédent
              </span>
              <span className="block truncate font-heading text-sm font-bold text-teal">
                {prev.h1}
              </span>
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={`/${next.slug}`}
            className="group flex items-center justify-end gap-4 rounded-2xl border border-black/5 p-5 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/30 hover:shadow-md"
          >
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-wide text-ink/40">
                Suivant
              </span>
              <span className="block truncate font-heading text-sm font-bold text-teal">
                {next.h1}
              </span>
            </span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
              <ArrowRight className="h-5 w-5" />
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
