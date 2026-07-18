import Image from "next/image";
import { User } from "lucide-react";
import { team } from "@/lib/team";
import { Reveal } from "@/components/ui/Reveal";

/** "L'équipe SY&CO" — member cards with photo + role. */
export function TeamGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow">
        <Reveal className="mb-12 text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            L&apos;équipe
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            SY&amp;CO
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal
              key={member.name}
              delay={(i % 4) * 0.07}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-teal/10">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal to-teal-dark text-white">
                    <User className="h-16 w-16" strokeWidth={1.4} />
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold text-teal">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm leading-snug text-ink/70">
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
