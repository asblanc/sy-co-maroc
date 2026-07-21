// Content model for all dynamic (/[slug]) pages of the SY&CO site.
export type PageType =
  | "content"
  | "cases-index"
  | "case-detail"
  | "about"
  | "articles"
  | "contact"
  | "legal";

export type PageData = {
  slug: string;
  type: PageType;
  title: string;
  h1: string;
  category: string;
  description: string;
  image?: string;
  heroImage?: string;
  introHeading?: string;
  introSubheading?: string;
  introImage?: string;
  needs?: string[];
  needsEyebrow?: string;
  needsTitle?: string;
  services?: { title: string; description: string; image?: string }[];
  servicesEyebrow?: string;
  servicesTitle?: string;
  highlights?: { title: string; description: string }[];
  /** Exclut la page de l'indexation (contenu placeholder en attente). */
  noindex?: boolean;
  paragraphs: string[];
};

export const pages: PageData[] = [
  /* ---------- Pilier 1 : FormAction ---------- */
  {
    slug: "form-action",
    type: "content",
    title: "FormAction — Formations résidentielles immersives | SY&CO",
    h1: "FormAction",
    category: "FormAction",
    description:
      "FormAction : des formations résidentielles immersives de 7 à 10 jours, conçues avec des experts internationaux, pour un impact opérationnel immédiat sur vos cadres et dirigeants.",
    heroImage: "/images/pages/header-pedagogie.jpg",
    introHeading: "Des formations",
    introSubheading: "résidentielles immersives",
    introImage: "/images/pages/intro-pedagogie.jpg",
    needsEyebrow: "Nos domaines",
    needsTitle: "Thématiques d'expertise",
    needs: [
      "Finance publique, finance verte & finance durable",
      "Leadership et transformation digitale",
      "Gouvernance, audit et conformité",
      "RH stratégique et data RH",
      "Gestion de projet et suivi-évaluation",
      "RSE et développement durable",
      "Agriculture et agribusiness",
    ],
    highlights: [
      {
        title: "Format résidentiel immersif",
        description:
          "Des séminaires de 7 à 10 jours qui coupent du quotidien pour un apprentissage intense, concret et durable.",
      },
      {
        title: "Expertise internationale",
        description:
          "Des programmes conçus et animés par des experts issus du monde académique et de l'entreprise.",
      },
      {
        title: "Plan d'action concret",
        description:
          "Chaque participant repart avec un plan d'action personnel, directement transposable dans son organisation.",
      },
    ],
    paragraphs: [
      "FormAction, c'est le cœur de SY&CO : des formations résidentielles immersives qui transforment durablement les pratiques de vos cadres et dirigeants.",
      "Conçus avec des experts internationaux, nos programmes allient apports de haut niveau, études de cas réels et mise en pratique immédiate — pour un impact opérationnel dès le retour au bureau.",
      "Du diagnostic du besoin à la logistique sur place, nous nous occupons de tout : vous n'avez qu'à vous concentrer sur l'essentiel, apprendre et progresser.",
    ],
  },

  /* ---------- Pilier 2 : Meet & Share ---------- */
  {
    slug: "meet-and-share",
    type: "content",
    title: "Meet & Share — Rencontres professionnelles entre pairs | SY&CO",
    h1: "Meet & Share",
    category: "Meet & Share",
    description:
      "Meet & Share : des rencontres professionnelles entre pairs — tables rondes, témoignages, réseautage — pour échanger sans filtre sur les vrais enjeux du métier.",
    heroImage: "/images/pages/header-strategie.jpg",
    introHeading: "Rencontrer",
    introSubheading: "et partager entre pairs",
    introImage: "/images/pages/intro-strategie.jpg",
    servicesEyebrow: "Nos formats",
    servicesTitle: "Les rencontres SY&CO",
    services: [
      {
        title: "TOP MANAGER — Forum Stratégie & Innovation Digitale",
        description:
          "Innover, transformer et créer une valeur durable entre décideurs.",
        image: "/images/services/diagnostic-strategique.jpg",
      },
      {
        title: "SHE TALK — Forum des Femmes Leaders",
        description:
          "Développer son influence, partager des expériences et élargir son réseau lors d'un cocktail de réseautage.",
        image: "/images/services/Coaching-de-dirigeant-et-dequipe-1.jpg",
      },
      {
        title: "Rencontre des DAF",
        description:
          "Décrypter les enjeux financiers, partager les meilleures pratiques et anticiper les évolutions de la fonction Finance.",
        image: "/images/services/Business-design.jpg",
      },
      {
        title: "Rencontre des DRH",
        description:
          "Échanger sur les défis du capital humain, du leadership et de la transformation des organisations.",
        image: "/images/services/team-learning.jpg",
      },
      {
        title: "Rencontre des RAF",
        description:
          "Renforcer le pilotage de la performance, optimiser les processus et partager des solutions opérationnelles.",
        image: "/images/services/pilotage-projet.jpg",
      },
      {
        title: "Rencontre des Assistantes de Direction & Secrétaires Exécutives",
        description:
          "Développer les compétences stratégiques, maîtriser les nouveaux outils et valoriser le rôle de partenaire de la direction.",
        image: "/images/services/co-developpement.jpg",
      },
    ],
    paragraphs: [
      "Meet & Share réunit des professionnels d'un même métier pour échanger, sans filtre, sur leurs vrais enjeux.",
      "Tables rondes, témoignages d'acteurs précurseurs et temps de réseautage : chaque rencontre est un espace privilégié pour prendre du recul, s'inspirer et élargir son réseau.",
      "Décideurs, femmes leaders, directions financières, RH ou assistantes de direction : chacun trouve son forum pour grandir avec ses pairs.",
    ],
  },

  /* ---------- Pilier 3 : Formation sur mesure ---------- */
  {
    slug: "formation-sur-mesure",
    type: "content",
    title: "Formation sur mesure — Intra-entreprise | SY&CO",
    h1: "Formation sur mesure",
    category: "Formation sur mesure",
    description:
      "Un projet de formation pour votre équipe ? À partir de 5 personnes, un formateur SY&CO intervient dans vos locaux ou en classe virtuelle, avec un programme personnalisé adapté à votre besoin réel.",
    heroImage: "/images/pages/header-management.jpg",
    introHeading: "Une formation",
    introSubheading: "conçue pour votre équipe",
    introImage: "/images/pages/intro-competences.jpg",
    highlights: [
      {
        title: "À partir de 5 personnes",
        description:
          "Dès 5 participants, nous mobilisons un formateur dédié pour votre équipe.",
      },
      {
        title: "Chez vous ou à distance",
        description:
          "Le formateur intervient dans vos locaux ou en classe virtuelle, selon votre organisation.",
      },
      {
        title: "Programme personnalisé",
        description:
          "Contenu sur mesure ou issu de notre catalogue existant, toujours adapté à votre besoin réel.",
      },
    ],
    paragraphs: [
      "Un projet de formation pour votre équipe ? SY&CO conçoit des dispositifs intra-entreprise taillés pour vos enjeux.",
      "À partir de 5 personnes, un formateur intervient dans vos locaux ou en classe virtuelle. Programme personnalisé ou issu de notre catalogue, il est toujours adapté à votre réalité de terrain.",
      "Contact dédié : +212 699 820 570 · seminairesyco@gmail.com",
    ],
  },

  /* ---------- Nos offres (packs FormAction) ---------- */
  {
    slug: "nos-offres",
    type: "content",
    title: "Nos offres — Packs FormAction | SY&CO",
    h1: "Nos offres",
    category: "Nos offres",
    description:
      "FormAction : des séminaires résidentiels immersifs de 7 à 10 jours à Casablanca, Agadir, Tanger, Marrakech, Dakar et Abidjan, tout inclus, de l'inscription au retour à l'aéroport.",
    heroImage: "/images/pages/header-innovation.jpg",
    introHeading: "FormAction",
    introSubheading: "nos formations résidentielles",
    introImage: "/images/pages/intro-innovation.jpg",
    needsEyebrow: "Votre pack",
    needsTitle: "Ce que chaque pack inclut",
    needs: [
      "Formation dispensée par des experts de haut niveau",
      "Hébergement et restauration",
      "Visite médicale (Casablanca) ou visite touristique selon la destination",
      "Accompagnement logistique complet, de l'inscription au retour à l'aéroport",
      "Visites d'entreprises partenaires (benchmarking terrain)",
    ],
    highlights: [
      {
        title: "6 destinations",
        description:
          "Casablanca, Agadir, Tanger, Marrakech, Dakar et Abidjan — au plus près de vos réalités.",
      },
      {
        title: "7 à 10 jours",
        description:
          "Des séminaires immersifs pensés pour un apprentissage intense et un vrai changement de posture.",
      },
      {
        title: "Tout inclus",
        description:
          "Formation, hébergement, restauration et logistique : un seul interlocuteur, l'esprit tranquille.",
      },
    ],
    paragraphs: [
      "Nos formations résidentielles FormAction se déroulent sous forme de séminaires immersifs de 7 à 10 jours, dans des destinations propices à la concentration et à l'ouverture : Casablanca, Agadir, Tanger, Marrakech, Dakar et Abidjan.",
      "Chaque pack est pensé « tout inclus » : formation, hébergement, restauration, logistique et visites d'entreprises partenaires pour un benchmarking de terrain.",
      "La grille tarifaire détaillée des packs est disponible sur demande — contactez-nous pour recevoir l'offre adaptée à votre projet.",
    ],
  },

  /* ---------- Calendrier 2027 ---------- */
  {
    slug: "calendrier-2027",
    type: "content",
    title: "Calendrier 2027 des formations & rencontres | SY&CO",
    h1: "Calendrier 2027",
    category: "Calendrier",
    description:
      "Le calendrier 2027 des formations résidentielles FormAction et des rencontres Meet & Share de SY&CO.",
    heroImage: "/images/pages/header-kickoff.jpg",
    noindex: true,
    paragraphs: [
      "Le calendrier 2027 de nos formations résidentielles FormAction et de nos rencontres Meet & Share est en cours de finalisation.",
      "Dates, thématiques et destinations seront publiées ici prochainement. Pour être informé en avant-première ou réserver votre place, écrivez-nous à seminairesyco@gmail.com.",
      "Vous préparez déjà votre plan de formation 2027 ? Contactez-nous pour construire ensemble le parcours de vos cadres et dirigeants.",
    ],
  },

  /* ---------- Ils nous font confiance ---------- */
  {
    slug: "nos-cas-clients",
    heroImage: "/images/pages/header-cohesion.jpg",
    type: "cases-index",
    title: "Ils nous font confiance | SY&CO",
    h1: "Ils nous font confiance",
    category: "Références",
    noindex: true,
    description:
      "Nos clients apprécient notre souci de développer des formations concrètes et pertinentes, et la qualité de notre pilotage projet — réactif, agile et engagé à leurs côtés.",
    paragraphs: [
      "Nos clients font confiance à notre souci de développer des formations concrètes et pertinentes, qui allient renforcement des compétences managériales et développement des valeurs humaines de l'entreprise. Ils apprécient notre approche conseil tout au long du parcours et la qualité de notre pilotage projet — réactif, agile et engagé à leurs côtés.",
    ],
  },

  /* ---------- Qui sommes-nous ---------- */
  {
    slug: "qui-sommes-nous",
    heroImage: "/images/pages/header-cohesion.jpg",
    type: "about",
    title: "Qui sommes-nous | SY&CO",
    h1: "Qui sommes-nous",
    category: "L'agence",
    description:
      "SY&CO (Synergie & Compétences), cabinet de formation et de conseil créé en 2020, filiale du Groupe VISION & STRATÉGIE, développe les compétences des cadres, dirigeants et organisations d'Afrique francophone.",
    paragraphs: [
      "Créé en 2020, SY&CO (Synergie & Compétences) est un cabinet spécialisé dans le développement des compétences des cadres, dirigeants et organisations. Filiale du Groupe VISION & STRATÉGIE, spécialisé dans l'innovation durable et le business consulting, nous mettons la synergie des talents et des expertises au service de la performance de nos clients.",
      "Notre mission : accompagner les professionnels d'Afrique francophone dans le renforcement de leurs capacités en leadership, management stratégique, communication et transformation organisationnelle — en croyant fermement que la transformation réconcilie performance de l'entreprise, bien-être au travail et responsabilité sociétale.",
      "Notre vision : être un acteur de référence en Afrique et à l'international pour la formation et le coaching de leaders capables d'impulser le changement et de conduire leurs équipes vers l'excellence.",
      "Concrètement, nous concevons des formations sur mesure, fournissons coaching et accompagnement stratégique, déployons des programmes innovants fondés sur les meilleures pratiques internationales et les exigences locales, et promouvons une culture d'amélioration continue et de performance durable.",
      "Notre pédagogie est exigeante, innovante et incarnée : ateliers collaboratifs, études de cas réels, mise en pratique immédiate et, pour chaque participant, l'élaboration d'un plan d'action personnel immédiatement actionnable.",
    ],
  },

  /* ---------- Blog ---------- */
  {
    slug: "nos-articles",
    type: "articles",
    title: "Nos articles | SY&CO",
    h1: "Notre Blog",
    category: "Blog",
    description: "",
    paragraphs: [
      "Le blog de SY&CO : conseils, retours d'expérience et tendances sur le leadership, le management stratégique, la transformation des organisations et la formation des dirigeants.",
    ],
  },

  /* ---------- Contact ---------- */
  {
    slug: "contact",
    heroImage: "/images/pages/header-management.jpg",
    type: "contact",
    title: "Contact | SY&CO",
    h1: "Envie d'échanger avec notre équipe ?",
    category: "Contact",
    description:
      "Un projet de formation, une place à réserver, une simple question ? Écrivez-nous, nous vous recontactons rapidement.",
    paragraphs: [
      "Retrouvez les actualités de SY&CO, du secteur et nos témoignages sur notre page LinkedIn.",
      "SY&CO — Synergie & Compétences : cabinet de formation et de conseil pour cadres et dirigeants d'Afrique francophone.",
      "Nous déployons nos programmes au Maroc, au Sénégal et en Côte d'Ivoire, et intervenons à l'international.",
    ],
  },

  /* ---------- Pages légales ---------- */
  {
    slug: "mentions-legales",
    type: "legal",
    title: "Mentions légales | SY&CO",
    h1: "Mentions légales",
    category: "Pages légales",
    description:
      "Mentions légales du site SY&CO — éditeur, hébergeur et propriété intellectuelle.",
    paragraphs: [
      "## Éditeur du site",
      "Le présent site est édité par SY&CO (Synergie & Compétences), cabinet marocain de formation et de conseil, filiale du Groupe VISION & STRATÉGIE.",
      "Siège social : Boulevard d'Anfa, Twin Center, 20100 Casablanca, Maroc. Téléphone : +212 699-820570. E-mail : seminairesyco@gmail.com.",
      "Registre du Commerce (RC) : [à compléter] — Identifiant Commun de l'Entreprise (ICE) : [à compléter] — Identifiant Fiscal (IF) : [à compléter] — Taxe Professionnelle : [à compléter]. Représentante légale et directrice de la publication : Sylviane KOFFI AMA, Directrice Générale.",
      "## Hébergement",
      "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis (vercel.com).",
      "## Propriété intellectuelle",
      "L'ensemble des éléments du site (structure, textes, identité visuelle, logo, illustrations) est la propriété exclusive de SY&CO, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
      "## Crédits & photographies",
      "Les photographies d'illustration sont issues de banques d'images libres de droits. La marque et le logo SY&CO sont la propriété de SY&CO.",
      "## Responsabilité",
      "SY&CO s'efforce d'assurer l'exactitude des informations publiées mais ne saurait être tenue responsable des erreurs, omissions ou de l'indisponibilité temporaire du site. Les liens vers des sites tiers n'engagent pas la responsabilité de SY&CO.",
    ],
  },
  {
    slug: "politique-de-confidentialite",
    type: "legal",
    title: "Politique de confidentialité | SY&CO",
    h1: "Politique de confidentialité",
    category: "Pages légales",
    description:
      "Politique de confidentialité SY&CO — traitement des données personnelles conformément à la loi 09-08.",
    paragraphs: [
      "SY&CO accorde une grande importance à la protection de vos données personnelles. La présente politique décrit la manière dont nous collectons et traitons vos informations, conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.",
      "## Données collectées",
      "Nous collectons uniquement les données que vous nous transmettez volontairement via notre formulaire de contact ou d'inscription : nom, prénom, adresse e-mail, numéro de téléphone, ainsi que les informations relatives à votre projet (type de formation, nombre de participants, dates, message).",
      "## Finalités du traitement",
      "Ces données sont utilisées exclusivement pour répondre à votre demande, organiser votre formation et assurer le suivi de la relation. Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales.",
      "## Durée de conservation",
      "Vos données sont conservées pour la durée nécessaire au traitement de votre demande et à la relation, puis archivées ou supprimées conformément à la réglementation en vigueur.",
      "## Vos droits",
      "Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Pour l'exercer, écrivez-nous à seminairesyco@gmail.com. Vous pouvez également saisir la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP).",
      "## Cookies",
      "Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement et, le cas échéant, des cookies de mesure d'audience. Vous pouvez configurer votre navigateur pour les refuser.",
    ],
  },
  {
    slug: "conditions-generales-de-vente",
    type: "legal",
    title: "Conditions générales de vente | SY&CO",
    h1: "Conditions générales de vente",
    category: "Pages légales",
    description:
      "Conditions générales de vente de SY&CO — formations résidentielles, rencontres professionnelles et accompagnement conseil.",
    paragraphs: [
      "Les présentes conditions générales de vente (CGV) régissent les prestations proposées par SY&CO (Synergie & Compétences) : formations résidentielles, formations sur mesure, rencontres professionnelles et accompagnement conseil. Toute commande implique l'acceptation sans réserve des présentes CGV.",
      "## Devis, inscription et commande",
      "Chaque prestation fait l'objet d'un devis ou d'un bulletin d'inscription détaillé. La commande est ferme à réception du document daté, signé et revêtu de la mention « bon pour accord », accompagné le cas échéant de l'acompte prévu.",
      "## Prix et modalités de paiement",
      "Les prix sont exprimés en dirhams marocains (MAD), hors taxes le cas échéant. Les modalités de paiement (acompte, échéancier, solde) sont précisées sur le devis. Tout retard de paiement pourra donner lieu à des pénalités conformément à la législation marocaine.",
      "## Modification et annulation",
      "Toute demande de modification doit être formulée par écrit. En cas d'annulation par le client, les sommes engagées et les frais déjà exposés restent dus, selon les conditions précisées au devis.",
      "## Obligations des parties",
      "SY&CO s'engage à mettre en œuvre les moyens nécessaires à la bonne exécution de la prestation. Le client s'engage à fournir en temps utile les informations et validations nécessaires à sa réalisation.",
      "## Propriété intellectuelle",
      "Les concepts, contenus et supports pédagogiques créés par SY&CO restent sa propriété et ne peuvent être reproduits ou réutilisés sans autorisation écrite préalable.",
      "## Droit applicable et litiges",
      "Les présentes CGV sont soumises au droit marocain. En cas de litige, et à défaut de résolution amiable, compétence est attribuée aux tribunaux compétents de Casablanca.",
    ],
  },
];

export const pageBySlug = (slug: string) => pages.find((p) => p.slug === slug);

/** Ordered sequences for previous/next in-page navigation. */
export const expertiseNavOrder = [
  "form-action",
  "meet-and-share",
  "formation-sur-mesure",
  "nos-offres",
  "calendrier-2027",
];

export const caseNavOrder: string[] = [];

export function getSiblings(slug: string) {
  const order = expertiseNavOrder.includes(slug)
    ? expertiseNavOrder
    : caseNavOrder.includes(slug)
      ? caseNavOrder
      : null;
  if (!order) return { prev: null, next: null };
  const i = order.indexOf(slug);
  const prev = i > 0 ? pageBySlug(order[i - 1]) ?? null : null;
  const next = i < order.length - 1 ? pageBySlug(order[i + 1]) ?? null : null;
  return { prev, next };
}
