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
    title: "Conseil & transformation",
    children: [
      {
        label: "Transformation des organisations",
        href: "/transformation-des-organisations",
      },
      {
        label: "Stratégie et Gouvernance",
        href: "/strategie-et-gouvernance",
      },
    ],
  },
  {
    title: "Séminaires & cohésion",
    children: [
      {
        label: "Cohésion d’équipe et modes collaboratifs",
        href: "/seminaires-de-cohesion-dequipe",
      },
      {
        label: "Développement des compétences managériales",
        href: "/developpement-des-competences-manageriales",
      },
    ],
  },
  {
    title: "Innovation & créativité",
    children: [
      { label: "Innovation & créativité", href: "/innovation-et-codesign" },
    ],
  },
];

export const navLinks: NavChild[] = [
  { label: "Événementiel", href: "/evenementiel-et-seminaires" },
  { label: "Études de cas", href: "/nos-cas-clients" },
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
    title: "Transformation des organisations",
    description:
      "Accompagner vos évolutions culturelles et fédérer vos équipes autour de dispositifs qui donnent du sens au changement.",
    color: "#007873",
    href: "/transformation-des-organisations",
  },
  {
    title: "Stratégie et Gouvernance",
    description:
      "Clarifier votre vision et aligner vos équipes de direction grâce à des séminaires stratégiques et une facilitation sur-mesure.",
    color: "#ED0F7D",
    href: "/strategie-et-gouvernance",
  },
  {
    title: "Cohésion d’équipe et modes collaboratifs",
    description:
      "Renforcer les liens et l’engagement par le team building, les séminaires de cohésion et l’intelligence collective.",
    color: "#1076DA",
    href: "/seminaires-de-cohesion-dequipe",
  },
  {
    title: "Développement des compétences managériales",
    description:
      "Faire grandir vos managers avec des parcours de formation sur-mesure, concrets et immédiatement actionnables.",
    color: "#FCD430",
    href: "/developpement-des-competences-manageriales",
  },
  {
    title: "Innovation & créativité",
    description:
      "Stimuler la créativité de vos équipes par des ateliers créatifs, d’idéation et de résolution de problèmes complexes.",
    color: "#FFBC7D",
    href: "/innovation-et-codesign",
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

export type CaseStudy = {
  category: string;
  title: string;
  tag?: string;
  image: string;
  href: string;
};

export const caseStudies: CaseStudy[] = [
  {
    category: "Cohésion d'équipe et modes collaboratifs",
    title: "Comment réussir son séminaire à distance",
    image: "/images/cases/seminaire-distance2.jpg",
    href: "/comment-reussir-son-seminaire-a-distance",
  },
  {
    category: "Cohésion d'équipe et modes collaboratifs",
    title:
      "Méthodologie EQ-i 2.0 ou l’intelligence émotionnelle au service de la cohésion d’équipe",
    image: "/images/cases/intelligence-emotionnelle1.jpg",
    href: "/decouverte-de-lintelligence-emotionnelle",
  },
  {
    category: "Transformation des organisations",
    title: "Ateliers et séminaires au service de l’expérience collaborateur",
    tag: "PARC",
    image: "/images/cases/parc-loisirs2.jpg",
    href: "/ateliers-et-seminaires-au-service-de-lexperience-collaborateur",
  },
  {
    category: "Développement des compétences managériales",
    title: "Accompagner à distance le changement de posture des managers",
    tag: "CONSEIL",
    image: "/images/cases/conseil.jpg",
    href: "/accompagner-a-distance-le-changement-de-posture-des-managers",
  },
];

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 3500, suffix: "", label: "apprenants" },
  {
    value: 95,
    suffix: "%",
    label: "de taux de satisfaction pour nos accompagnements et formations",
  },
  { value: 92, suffix: "%", label: "de taux de recommandation" },
];

export type Partner = { name: string; logo?: string };

/**
 * Partenaires / clients marocains.
 * `logo` = fichier officiel déposé dans /public/images/clients/ (ex.
 * "/images/clients/ocp.png"). Sans `logo`, une tuile wordmark stylée est
 * affichée en repli — il suffit d'ajouter le fichier pour l'activer.
 */
export const partners: Partner[] = [
  { name: "Maroc Telecom" },
  { name: "OCP Group" },
  { name: "Attijariwafa Bank" },
  { name: "Bank of Africa" },
  { name: "Royal Air Maroc" },
  { name: "Marjane" },
  { name: "Inwi" },
  { name: "Orange Maroc" },
  { name: "Banque Populaire" },
  { name: "CIH Bank" },
  { name: "Lydec" },
  { name: "ONCF" },
  { name: "Managem" },
  { name: "Cosumar" },
  { name: "Label'Vie" },
  { name: "Wafa Assurance" },
  { name: "BMCI" },
  { name: "Lesieur Cristal" },
  { name: "LafargeHolcim Maroc" },
  { name: "Sonasid" },
];

export type Realization = {
  tag: string;
  title: string;
  location: string;
  image: string;
};

/** Formats d'événements produits par SY&CO (illustratif, sans nom de client). */
export const realizations: Realization[] = [
  {
    tag: "Convention",
    title: "Convention annuelle & plénière",
    location: "Casablanca",
    image: "/images/services/ev-convention.jpg",
  },
  {
    tag: "Séminaire",
    title: "Séminaire de direction au vert",
    location: "Marrakech",
    image: "/images/services/ev-seminaire.jpg",
  },
  {
    tag: "Team building",
    title: "Team building outdoor",
    location: "Agadir",
    image: "/images/services/ev-teambuilding.jpg",
  },
  {
    tag: "Incentive",
    title: "Soirée de gala & remise de trophées",
    location: "Rabat",
    image: "/images/services/ev-incentive.jpg",
  },
  {
    tag: "Kick-off",
    title: "Lancement de projet stratégique",
    location: "International",
    image: "/images/cases/conseil.jpg",
  },
  {
    tag: "Formation",
    title: "Parcours de formation immersif",
    location: "Tanger",
    image: "/images/services/ev-formation.jpg",
  },
];

export const contactInfo = {
  phone: "+212 699-820570",
  address: "Boulevard d'Anfa, Twin Center",
  city: "20100 Casablanca, Maroc",
  reach: "Casablanca, Rabat, Marrakech, Tanger",
};

export const footerExpertises: NavChild[] = [
  { label: "Événementiel & séminaires", href: "/evenementiel-et-seminaires" },
  { label: "Notre méthode ÉCLAT", href: "/notre-methode-eclat" },
  {
    label: "Séminaires de cohésion d'équipe",
    href: "/seminaires-de-cohesion-dequipe",
  },
  {
    label: "Parcours de formation sur mesure",
    href: "/parcours-de-formation-sur-mesure",
  },
  {
    label: "Lancer son projet grâce au séminaire kick off",
    href: "/lancer-son-projet-grace-au-seminaire-kick-off",
  },
  { label: "Everything DISC", href: "/everything-disc" },
];

export const legalLinks: NavChild[] = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
  { label: "CGV", href: "/conditions-generales-de-vente" },
];
