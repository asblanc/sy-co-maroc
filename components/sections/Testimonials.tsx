import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/a-completer";
import { Reveal } from "@/components/ui/Reveal";

/** Initiales à partir d'un nom, pour l'avatar de repli (ex : "M. Diallo" → "MD"). */
function initials(name: string) {
  const letters = name
    .replace(/[^\p{L}\s]/gu, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("");
  return (letters.slice(0, 2) || "SY").toUpperCase();
}

const avatarColors = ["#097D7A", "#ED0F7D", "#1076DA", "#FD8B15"];

/**
 * Témoignages clients (page « Ils nous font confiance »).
 * Ne s'affiche que si `testimonials` (lib/a-completer.ts) est renseigné —
 * sinon la page conserve son encart « témoignages à venir ».
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-white py-14">
      <div className="container-narrow grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={`${t.name}-${i}`}
            delay={(i % 3) * 0.08}
            className="flex flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
          >
            <Quote className="mb-4 h-8 w-8 text-orange/70" />
            <p className="flex-1 text-base leading-relaxed text-ink/80">
              « {t.quote} »
            </p>
            <div className="mt-6 flex items-center gap-4">
              {t.avatar ? (
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold text-white"
                  style={{
                    backgroundColor: avatarColors[i % avatarColors.length],
                  }}
                >
                  {initials(t.name)}
                </span>
              )}
              <div>
                <p className="font-heading text-sm font-bold text-teal">
                  {t.name}
                </p>
                <p className="text-xs text-ink/60">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
