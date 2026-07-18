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
    title: "Stratégie",
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
    title: "Management et Intelligence Collective",
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
    title: "Innovation",
    children: [
      { label: "Innovation et co-design", href: "/innovation-et-codesign" },
    ],
  },
];

export const navLinks: NavChild[] = [
  { label: "Nos Cas Clients", href: "/nos-cas-clients" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
  { label: "Nos Articles", href: "/nos-articles" },
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
      "Accompagner les évolutions culturelles des entreprises et fédérer les équipes dans le changement.",
    color: "#007873",
    href: "/transformation-des-organisations",
  },
  {
    title: "Stratégie et Gouvernance",
    description:
      "Accompagner les dirigeants dans la définition de la vision et dans leur réflexion stratégique.",
    color: "#ED0F7D",
    href: "/strategie-et-gouvernance",
  },
  {
    title: "Cohésion d’équipe et modes collaboratifs",
    description:
      "Favoriser l’Intelligence Collective et développer l’engagement et la motivation.",
    color: "#1076DA",
    href: "/seminaires-de-cohesion-dequipe",
  },
  {
    title: "Développement des compétences managériales",
    description:
      "Accompagner le développement des potentiels et concevoir des parcours de formation.",
    color: "#FCD430",
    href: "/developpement-des-competences-manageriales",
  },
  {
    title: "Innovation et codesign",
    description:
      "Stimuler les dynamiques créatives, anticiper demain et faciliter les processus de résolution de problèmes complexes.",
    color: "#FFBC7D",
    href: "/innovation-et-codesign",
  },
];

export type Step = {
  index: string;
  title: string;
  description: string;
  color: string;
};

export const iddeaSteps: Step[] = [
  {
    index: "Step 1",
    title: "IMMERSION",
    description:
      "Mise en empathie et en écoute active pour identifier les besoins profonds de votre organisation (audit, diagnostic, interviews...).",
    color: "#007873",
  },
  {
    index: "Step 2",
    title: "DESIGN",
    description:
      "En collaboration avec vous et vos équipes, codesign de l'accompagnement ou de la formation spécifique qu'il vous faut.",
    color: "#ED0F7D",
  },
  {
    index: "Step 3",
    title: "DÉPLOIEMENT",
    description:
      "Intervention de nos facilitateurs, consultants, coachs et formateurs via des modalités innovantes, ludiques et participatives, adaptées à vos besoins.",
    color: "#1076DA",
  },
  {
    index: "Step 4",
    title: "ÉVALUATION",
    description:
      "Monitoring en temps réel de l'impact de nos actions, à chaque étape puis des retombées à moyen-long terme.",
    color: "#FCD430",
  },
  {
    index: "Step 5",
    title: "AMÉLIORATION",
    description:
      "Bilan de chaque action et inscription dans un processus d’amélioration continue.",
    color: "#FFBC7D",
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

export const contactInfo = {
  phone: "+212 522 22 00 00",
  address: "Boulevard d'Anfa, Twin Center",
  city: "20100 Casablanca, Maroc",
  reach: "Casablanca, Rabat, Marrakech, Tanger",
};

export const footerExpertises: NavChild[] = [
  { label: "Notre méthode IDDEA", href: "/notre-methode-iddea" },
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
