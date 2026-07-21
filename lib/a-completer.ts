/* =============================================================================
 *  CONTENUS À COMPLÉTER PAR SY&CO
 *  ---------------------------------------------------------------------------
 *  Ce fichier regroupe les 3 contenus en attente. Pour chacun :
 *   1. Retirez les « // » devant les lignes du modèle (ou dupliquez un bloc).
 *   2. Remplacez les valeurs entre guillemets par les vraies infos.
 *   3. Enregistrez : le contenu apparaît automatiquement sur le site.
 *
 *  Tant qu'une liste est vide, la page affiche un message d'attente propre
 *  (aucun contenu « placeholder » n'est visible publiquement).
 *
 *  ⚠️ Après avoir rempli le CALENDRIER ou les TÉMOIGNAGES, pensez à réactiver
 *  leur indexation Google : dans `lib/pages.ts`, retirez la ligne
 *  « noindex: true, » de la page concernée (calendrier-2027 / nos-cas-clients).
 * ========================================================================== */

/* -----------------------------------------------------------------------------
 * 1) GRILLE TARIFAIRE — Packs Form’Action (page « Nos offres »)
 * -------------------------------------------------------------------------- */
export type Pack = {
  name: string; // ex : "Pack Casablanca"
  destination: string; // ex : "Casablanca, Maroc"
  duration: string; // ex : "7 jours"
  price: string; // ex : "à partir de 25 000 MAD" (texte libre)
  note?: string; // optionnel, ex : "Visite médicale incluse"
  featured?: boolean; // true = pack mis en avant (bordure orange)
};

export const packs: Pack[] = [
  // { name: "Pack Casablanca", destination: "Casablanca, Maroc", duration: "7 jours", price: "à partir de 25 000 MAD", note: "Visite médicale incluse", featured: true },
  // { name: "Pack Marrakech", destination: "Marrakech, Maroc", duration: "8 jours", price: "à partir de 28 000 MAD" },
  // { name: "Pack Dakar", destination: "Dakar, Sénégal", duration: "10 jours", price: "à partir de 3 200 000 FCFA" },
  // { name: "Pack Abidjan", destination: "Abidjan, Côte d'Ivoire", duration: "10 jours", price: "à partir de 3 200 000 FCFA" },
];

/* -----------------------------------------------------------------------------
 * 2) CALENDRIER 2027 — Sessions (page « Calendrier 2027 »)
 * -------------------------------------------------------------------------- */
export type Session = {
  program: string; // ex : "Finance publique, verte & durable"
  pillar: string; // "Form’Action" ou "Meet & Share"
  dates: string; // ex : "12 – 18 mars 2027"
  city: string; // ex : "Casablanca"
  status?: "Ouvert" | "Bientôt" | "Complet"; // optionnel (défaut : "Ouvert")
};

export const sessions2027: Session[] = [
  // { program: "Finance publique, verte & durable", pillar: "Form’Action", dates: "12 – 18 mars 2027", city: "Casablanca", status: "Ouvert" },
  // { program: "Leadership & transformation digitale", pillar: "Form’Action", dates: "9 – 16 avril 2027", city: "Marrakech", status: "Ouvert" },
  // { program: "TOP MANAGER — Stratégie & Innovation", pillar: "Meet & Share", dates: "22 mai 2027", city: "Casablanca", status: "Bientôt" },
  // { program: "SHE TALK — Femmes Leaders", pillar: "Meet & Share", dates: "14 juin 2027", city: "Dakar", status: "Bientôt" },
];

/* -----------------------------------------------------------------------------
 * 3) TÉMOIGNAGES — page « Ils nous font confiance »
 *    (source : catalogue 2026). Laissez `avatar` vide : les initiales
 *    s'affichent automatiquement.
 * -------------------------------------------------------------------------- */
export type Testimonial = {
  quote: string; // le témoignage
  name: string; // ex : "M. Diallo" (ou "—" pour anonyme)
  role: string; // ex : "DAF, Groupe industriel — Dakar"
  avatar?: string; // optionnel : "/images/temoignages/xxx.jpg"
};

export const testimonials: Testimonial[] = [
  // { quote: "Une formation concrète, immédiatement applicable. Je suis reparti avec un plan d'action clair.", name: "M. Diallo", role: "DAF, Groupe industriel — Dakar" },
  // { quote: "Un accompagnement de bout en bout, réactif et engagé. Nous recommandons SY&CO sans hésiter.", name: "Mme Koné", role: "DRH, Administration publique — Abidjan" },
  // { quote: "Le format résidentiel change tout : on prend enfin le temps de travailler sa posture de dirigeant.", name: "M. El Amrani", role: "Directeur, Établissement financier — Casablanca" },
];
