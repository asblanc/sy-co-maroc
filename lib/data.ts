/**
 * Central content model for the SY&CO homepage.
 * Keeping copy and asset references here keeps the section
 * components presentational and reusable.
 */

export type NavChild = { label: string; href: string };

export type NavColumn = {
  title: string;
  children: NavChild[];
};

export const megaMenu: NavColumn[] = [
  {
    title: "Form’Action",
    children: [
      { label: "Formations résidentielles", href: "/form-action" },
      { label: "Nos thématiques d’expertise", href: "/form-action" },
      { label: "Leadership & transformation digitale", href: "/form-action" },
    ],
  },
  {
    title: "Meet & Share",
    children: [
      { label: "TOP MANAGER — Stratégie & Innovation", href: "/meet-and-share" },
      { label: "SHE TALK — Femmes Leaders", href: "/meet-and-share" },
      { label: "Rencontres métiers (DAF · DRH · RAF)", href: "/meet-and-share" },
    ],
  },
  {
    title: "Formation sur mesure",
    children: [
      { label: "Formation intra-entreprise", href: "/formation-sur-mesure" },
      { label: "Programme personnalisé", href: "/formation-sur-mesure" },
    ],
  },
];

export const navLinks: NavChild[] = [
  { label: "Nos offres", href: "/nos-offres" },
  { label: "Calendrier 2027", href: "/calendrier-2027" },
  { label: "L’agence", href: "/qui-sommes-nous" },
  { label: "Le Blog", href: "/nos-articles" },
];

export type Expertise = {
  title: string;
  description: string;
  color: string;
  href: string;
};

export const expertises: Expertise[] = [
  {
    title: "Form’Action",
    description:
      "Des formations résidentielles immersives, conçues avec des experts internationaux, pour un impact opérationnel immédiat sur vos cadres et dirigeants.",
    color: "#097D7A",
    href: "/form-action",
  },
  {
    title: "Meet & Share",
    description:
      "Des rencontres professionnelles entre pairs — tables rondes, témoignages, réseautage — pour échanger sans filtre sur les vrais enjeux du métier.",
    color: "#ED0F7D",
    href: "/meet-and-share",
  },
  {
    title: "Formation sur mesure",
    description:
      "À partir de 5 personnes, un formateur intervient dans vos locaux ou en classe virtuelle : un programme personnalisé, toujours adapté à votre besoin réel.",
    color: "#FD8B15",
    href: "/formation-sur-mesure",
  },
];

export type Step = {
  letter: string;
  title: string;
  description: string;
  color: string;
};

export const methodSteps: Step[] = [
  {
    letter: "É",
    title: "Écoute",
    description:
      "Immersion dans vos enjeux, votre culture et vos objectifs : audit, entretiens et cadrage précis du besoin.",
    color: "#097D7A",
  },
  {
    letter: "C",
    title: "Conception",
    description:
      "Co-création d'une expérience sur-mesure : contenu, format, fil narratif et scénographie.",
    color: "#ED0F7D",
  },
  {
    letter: "L",
    title: "Lancement",
    description:
      "Production et orchestration : logistique, coordination et préparation des intervenants, jusqu'au moindre détail.",
    color: "#1076DA",
  },
  {
    letter: "A",
    title: "Animation",
    description:
      "Le jour J : facilitation, énergie et interactivité pour une expérience réellement mémorable.",
    color: "#FD8B15",
  },
  {
    letter: "T",
    title: "Traces",
    description:
      "Mesure de l'impact, bilan et actions concrètes pour prolonger les effets dans la durée.",
    color: "#FCD430",
  },
];

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  {
    value: 5,
    suffix: " ans",
    label: "d'accompagnement des cadres et dirigeants africains",
  },
  {
    value: 500,
    suffix: "+",
    label: "participants formés au fil de nos programmes",
  },
  {
    value: 6,
    suffix: "",
    label: "pays de déploiement : Maroc, Sénégal, Côte d'Ivoire, et au-delà",
  },
];

export type Partner = { name: string; logo?: string };

/**
 * Secteurs accompagnés par SY&CO (tuiles texte). Ce mur remplace un mur de
 * "clients" nommés tant que nous n'affichons pas de VRAIS logos autorisés :
 * n'afficher que des clients réels avec leur accord. Pour passer aux logos,
 * déposer les fichiers dans /public/images/clients/ et renseigner `logo`.
 */
export const partners: Partner[] = [
  { name: "Finance publique" },
  { name: "Banque & Assurance" },
  { name: "Administration publique" },
  { name: "Énergie & Mines" },
  { name: "Agro-industrie" },
  { name: "Télécoms & Digital" },
  { name: "Santé" },
  { name: "Éducation & Formation" },
  { name: "Collectivités territoriales" },
  { name: "Grande distribution" },
  { name: "Industrie & BTP" },
  { name: "Organisations internationales" },
];

export type Realization = {
  tag: string;
  title: string;
  location: string;
  image: string;
};

/** Programmes phares de SY&CO — formations résidentielles & rencontres entre pairs. */
export const realizations: Realization[] = [
  {
    tag: "Form’Action",
    title: "Finance publique, verte & durable",
    location: "Casablanca",
    image: "/images/services/ev-convention.jpg",
  },
  {
    tag: "Form’Action",
    title: "Leadership & transformation digitale",
    location: "Marrakech",
    image: "/images/services/ev-seminaire.jpg",
  },
  {
    tag: "Meet & Share",
    title: "TOP MANAGER — Stratégie & Innovation",
    location: "Casablanca",
    image: "/images/services/ev-incentive.jpg",
  },
  {
    tag: "Meet & Share",
    title: "SHE TALK — Forum des Femmes Leaders",
    location: "Dakar",
    image: "/images/services/ev-teambuilding.jpg",
  },
  {
    tag: "Form’Action",
    title: "Gouvernance, audit & conformité",
    location: "Abidjan",
    image: "/images/cases/conseil.jpg",
  },
  {
    tag: "Sur mesure",
    title: "Formation intra-entreprise personnalisée",
    location: "Tanger",
    image: "/images/services/ev-formation.jpg",
  },
];

export const contactInfo = {
  phone: "+212 699-820570",
  email: "seminairesyco@gmail.com",
  address: "Boulevard d'Anfa, Twin Center",
  city: "20100 Casablanca, Maroc",
  reach: "Maroc · Sénégal · Côte d'Ivoire",
};

export const footerExpertises: NavChild[] = [
  { label: "Form’Action — Formations résidentielles", href: "/form-action" },
  { label: "Meet & Share — Nos rencontres", href: "/meet-and-share" },
  { label: "Formation sur mesure", href: "/formation-sur-mesure" },
  { label: "Nos offres", href: "/nos-offres" },
  { label: "Calendrier 2027", href: "/calendrier-2027" },
  { label: "Ils nous font confiance", href: "/nos-cas-clients" },
];

export const legalLinks: NavChild[] = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "CGV", href: "/conditions-generales-de-vente" },
];
