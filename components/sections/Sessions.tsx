import { sessions2027 } from "@/lib/a-completer";
import { Reveal } from "@/components/ui/Reveal";

const statusStyles: Record<string, string> = {
  Ouvert: "bg-teal/10 text-teal",
  Bientôt: "bg-orange/15 text-orange",
  Complet: "bg-ink/10 text-ink/60",
};

/**
 * Tableau des sessions 2027 (page « Calendrier 2027 »).
 * Ne s'affiche que si `sessions2027` (lib/a-completer.ts) contient au moins une
 * session — sinon la page conserve son message « en cours de finalisation ».
 */
export function Sessions() {
  if (sessions2027.length === 0) return null;

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="container-narrow">
        <Reveal className="overflow-x-auto rounded-3xl border border-black/5 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-teal text-white">
                <th className="px-6 py-4 font-heading font-bold">Programme</th>
                <th className="px-6 py-4 font-heading font-bold">Pilier</th>
                <th className="px-6 py-4 font-heading font-bold">Dates</th>
                <th className="px-6 py-4 font-heading font-bold">Ville</th>
                <th className="px-6 py-4 font-heading font-bold">Statut</th>
              </tr>
            </thead>
            <tbody>
              {sessions2027.map((s, i) => (
                <tr
                  key={`${s.program}-${s.dates}`}
                  className={i % 2 === 0 ? "bg-white" : "bg-peach/15"}
                >
                  <td className="px-6 py-4 font-semibold text-ink">
                    {s.program}
                  </td>
                  <td className="px-6 py-4 text-ink/70">{s.pillar}</td>
                  <td className="px-6 py-4 text-ink/70">{s.dates}</td>
                  <td className="px-6 py-4 text-ink/70">{s.city}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                        statusStyles[s.status ?? "Ouvert"] ?? statusStyles.Ouvert
                      }`}
                    >
                      {s.status ?? "Ouvert"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
