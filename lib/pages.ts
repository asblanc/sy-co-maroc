// AUTO-GENERATED from the reference site content. Edit with care.
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
  services?: { title: string; description: string; image?: string }[];
  highlights?: { title: string; description: string }[];
  paragraphs: string[];
};

export const pages: PageData[] = [
  {
    slug: "evenementiel-et-seminaires",
    type: "content",
    title: "Événementiel & séminaires d'entreprise au Maroc et à l'international",
    h1: "Événementiel & séminaires",
    category: "Événementiel",
    description:
      "SY&CO conçoit et orchestre vos événements d'entreprise : séminaires, conventions, kick-off, team building et soirées — au Maroc et partout dans le monde.",
    heroImage: "/images/pages/header-evenementiel.jpg",
    introHeading: "Des événements qui rassemblent",
    introSubheading: "et qui marquent les esprits",
    introImage: "/images/cases/parc-loisirs2.jpg",
    paragraphs: [
      "Un séminaire, une convention ou un team building n'est jamais une simple parenthèse : c'est un moment stratégique qui soude vos équipes, incarne votre culture et accélère vos projets. Chez SY&CO, l'événementiel d'entreprise est notre cœur de métier.",
      "Basés au Maroc et actifs à l'international, nous imaginons, produisons et animons des événements sur-mesure — de la première idée à la logistique, du contenu à la scénographie. Chaque format sert un objectif clair : fédérer, former, célébrer ou transformer.",
      "Notre signature : allier la rigueur d'un chef de projet, la créativité d'un studio et la puissance de l'intelligence collective, pour des expériences utiles, mesurables et mémorables.",
    ],
    services: [
      { title: "Séminaires de direction", description: "Alignez vos comités et équipes de direction autour d'une vision commune, dans un cadre propice à la réflexion et à la décision.", image: "/images/services/ev-seminaire.jpg" },
      { title: "Conventions & lancements (kick-off)", description: "Donnez le coup d'envoi de vos projets et années stratégiques avec des conventions qui embarquent et créent l'élan.", image: "/images/services/ev-convention.jpg" },
      { title: "Team building", description: "Renforcez la cohésion et la confiance par des activités collaboratives, ludiques et porteuses de sens.", image: "/images/services/ev-teambuilding.jpg" },
      { title: "Soirées & incentives", description: "Récompensez et célébrez vos équipes avec des soirées et voyages incentives qui laissent un souvenir durable.", image: "/images/services/ev-incentive.jpg" },
      { title: "Formations événementialisées", description: "Transformez vos formations en expériences immersives et engageantes qui ancrent durablement les apprentissages.", image: "/images/services/ev-formation.jpg" },
    ],
  },
  {
    slug: "transformation-des-organisations",
    needs: [
      "Fédérer vos équipes autour d'un cap commun",
      "Faire évoluer votre culture d'entreprise",
      "Accompagner une fusion, une réorganisation ou une forte croissance",
      "Lever les résistances au changement",
      "Ancrer de nouvelles façons de travailler",
      "Redonner du sens et de l'engagement à vos collaborateurs",
    ],
    services: [
      {
        title: "Transformation managériale",
        description: "Faire évoluer les pratiques et les postures managériales pour accompagner durablement le changement au sein de vos équipes.",
        image: "/images/services/transformation-manageriale.jpg",
      },
      {
        title: "Transformation culturelle et organisationnelle",
        description: "Faire évoluer votre culture et vos modes de fonctionnement vers plus d'agilité, de coopération et d'engagement.",
        image: "/images/services/transformation-culturelle-organisationnelle.jpg",
      },
      {
        title: "Transition sociétale et environnementale",
        description: "Intégrer les enjeux RSE au cœur de votre organisation pour conjuguer performance, sens et durabilité.",
        image: "/images/services/transition-societale-environnementale.jpg",
      },
      {
        title: "Diagnostic et data analyse",
        description: "Objectiver votre point de départ grâce à un diagnostic rigoureux et des données claires pour décider en confiance.",
        image: "/images/services/diagnostic-data-analyse.jpg",
      },
      {
        title: "Design de processus de transformation",
        description: "Concevoir et structurer, avec vos équipes, les processus qui rendent votre transformation concrète et opérationnelle.",
        image: "/images/services/Design-de-processus.jpg",
      },
      {
        title: "Pilotage de projet de transformation et conseil",
        description: "Planifier, piloter et sécuriser votre projet de transformation, de la feuille de route au suivi des indicateurs.",
        image: "/images/services/pilotage-projet.jpg",
      },
      {
        title: "Accompagnement et conduite du changement",
        description: "Sécuriser chaque étape du changement en embarquant les collaborateurs et en levant les résistances.",
        image: "/images/services/Accompagnement-et-conduite-du-changement.jpg",
      },
    ],
    heroImage: "/images/pages/header-strategie.jpg",
    introHeading: "Se transformer",
    introSubheading: "pour évoluer",
    introImage: "/images/pages/intro-transformation.jpg",
    type: "content",
    title: "Accompagnement en transformation des organisations | CO3",
    h1: "Transformation des organisations",
    category: "Stratégie",
    description:
      "Transformation des organisations au Maroc et à l'international : conduite du changement, culture d'entreprise et intelligence collective, orchestrées par SY&CO.",
    paragraphs: [
      "Le monde bouge vite, et vos organisations avec lui. SY&CO accompagne les entreprises, au Maroc comme à l'international, dans leurs transformations culturelles, organisationnelles et managériales — avec une conviction forte : un changement ne réussit que s'il est vécu collectivement.",
      "De la vision à l'action, nous concevons des dispositifs sur-mesure — séminaires, ateliers collaboratifs, parcours de conduite du changement — qui embarquent vos équipes, lèvent les résistances et donnent du sens à chaque étape.",
      "En mêlant événementiel, facilitation et intelligence collective, nous ancrons durablement les nouvelles façons de travailler et faisons de votre transformation une dynamique partagée.",
    ],
  },
  {
    slug: "strategie-et-gouvernance",
    needs: [
      "Clarifier et partager votre vision",
      "Aligner votre comité de direction",
      "Traduire votre stratégie en feuille de route",
      "Décider dans un contexte incertain",
      "Structurer une gouvernance claire",
      "Mobiliser vos équipes autour de vos priorités",
    ],
    services: [
      {
        title: "Business design",
        description: "Repenser votre modèle et vos offres pour créer de la valeur durable et vous différencier sur votre marché.",
        image: "/images/services/Business-design.jpg",
      },
      {
        title: "Gouvernance responsable",
        description: "Structurer une gouvernance claire et engageante qui aligne dirigeants, équipes et parties prenantes.",
        image: "/images/services/gouvernance-responsable.jpg",
      },
      {
        title: "Valeurs et raison d’être de l’entreprise",
        description: "Clarifier ce qui vous rend unique et traduire vos valeurs en repères concrets pour vos équipes.",
        image: "/images/services/valeurs-raison-etre-de-entreprise.jpg",
      },
      {
        title: "Elaboration de la feuille de route stratégique (roadmap)",
        description: "Traduire votre vision en une feuille de route claire, priorisée et actionnable.",
        image: "/images/services/elaboration-feuille-de-route.jpg",
      },
      {
        title: "Accompagnement au déploiement de la stratégie : méthode OKR",
        description: "Déployer votre stratégie sur le terrain grâce aux OKR : des objectifs alignés, mesurables et partagés.",
        image: "/images/services/methode-OKR.jpg",
      },
      {
        title: "Coaching de dirigeant et d’équipe",
        description: "Accompagner dirigeants et équipes dans le développement de leur leadership et de leur cohésion.",
        image: "/images/services/Coaching-de-dirigeant-et-dequipe-1.jpg",
      },
      {
        title: "Diagnostic stratégique",
        description: "Analyser votre environnement, vos forces et vos leviers de croissance pour éclairer vos décisions.",
        image: "/images/services/diagnostic-strategique.jpg",
      },
    ],
    heroImage: "/images/pages/header-strategie.jpg",
    introHeading: "Définir · Piloter · Grandir",
    introSubheading: "votre gouvernance",
    introImage: "/images/pages/intro-strategie.jpg",
    type: "content",
    title: "Stratégie et gouvernance : accompagnement par CO3",
    h1: "Stratégie et gouvernance",
    category: "Stratégie",
    description:
      "Séminaires stratégiques et gouvernance : clarifiez votre vision et alignez vos équipes de direction avec SY&CO, au Maroc et à l'international.",
    paragraphs: [
      "Définir un cap clair et le partager : voilà le point de départ de toute performance durable. SY&CO accompagne dirigeants et comités de direction dans leur réflexion stratégique et leur gouvernance, au Maroc et à l'international.",
      "À travers des séminaires stratégiques, des ateliers de vision et une facilitation experte, nous aidons vos équipes à décider, à s'aligner et à traduire la stratégie en feuille de route concrète.",
      "Parce qu'une stratégie ne vaut que par son exécution, nous restons à vos côtés pour déployer, mesurer et ajuster — dans la durée.",
    ],
  },
  {
    slug: "developpement-des-competences-manageriales",
    needs: [
      "Développer le leadership de vos managers",
      "Professionnaliser vos pratiques managériales",
      "Accompagner une prise de poste managériale",
      "Renforcer la cohésion de votre ligne managériale",
      "Outiller vos managers face au changement",
      "Ancrer une culture du feedback et de la reconnaissance",
    ],
    services: [
      {
        title: "Diagnostic de formation",
        description: "Identifier précisément les besoins en compétences pour concevoir des parcours réellement utiles.",
        image: "/images/services/diagnostic-de-formation.jpg",
      },
      {
        title: "Team learning",
        description: "Faire grandir vos équipes ensemble, par des dispositifs collectifs qui ancrent durablement les apprentissages.",
        image: "/images/services/team-learning.jpg",
      },
      {
        title: "Design de parcours de formation sur mesure",
        description: "Concevoir des parcours de formation taillés pour vos enjeux, engageants et immédiatement utiles.",
        image: "/images/services/Design-parcours-formation.jpg",
      },
      {
        title: "Pédagogie innovante",
        description: "Des modalités pédagogiques engageantes et ludiques qui ancrent durablement les apprentissages.",
        image: "/images/services/pedagogie-innovante.jpg",
      },
      {
        title: "Ingénierie de formation multimodale",
        description: "Combiner présentiel, distanciel et digital pour des dispositifs de formation flexibles et efficaces.",
        image: "/images/services/formation-multimodale.jpg",
      },
      {
        title: "Co-développement",
        description: "Miser sur l'intelligence du groupe : des pairs qui s'entraident pour résoudre leurs situations concrètes.",
        image: "/images/services/co-developpement.jpg",
      },
    ],
    heroImage: "/images/pages/header-management.jpg",
    introHeading: "Développer les compétences",
    introSubheading: "de vos managers",
    introImage: "/images/pages/intro-competences.jpg",
    type: "content",
    title: "Développement des compétences managériales | SY&CO",
    h1: "Développement des compétences managériales",
    category: "Management et Intelligence Collective",
    description:
      "Développement des compétences managériales : parcours de formation sur-mesure et concrets pour vos managers, au Maroc et à l'international, par SY&CO.",
    paragraphs: [
      "Vos managers sont les premiers relais de votre culture et de votre performance. SY&CO conçoit des parcours de développement des compétences managériales sur-mesure, ancrés dans la réalité de leur terrain.",
      "Postures de leadership, management d'équipe, communication, gestion du changement : nous privilégions des formats actifs, immédiatement transposables, et un accompagnement dans le temps.",
      "Notre objectif : donner à vos managers les clés concrètes — et la confiance — pour faire grandir leurs équipes.",
    ],
  },
  {
    slug: "innovation-et-codesign",
    needs: [
      "Stimuler la créativité de vos équipes",
      "Résoudre un problème complexe autrement",
      "Faire émerger de nouvelles offres ou de nouveaux services",
      "Impliquer vos collaborateurs dans l'innovation",
      "Accélérer un projet innovant",
      "Diffuser une culture de l'innovation",
    ],
    services: [
      {
        title: "Innovation managériale",
        description: "Expérimenter de nouveaux modes d'organisation et de management pour libérer l'engagement et la créativité.",
        image: "/images/services/innovation-manageriale.jpg",
      },
      {
        title: "Design thinking",
        description: "Placer l'utilisateur au centre pour imaginer, tester et déployer des solutions réellement pertinentes.",
        image: "/images/services/design-thinking.jpg",
      },
      {
        title: "Facilitation",
        description: "Animer vos ateliers et temps collectifs pour libérer la parole et faire émerger des décisions partagées.",
        image: "/images/services/facilitation.jpg",
      },
      {
        title: "Ateliers créatifs et codesign collaboratif",
        description: "Mobiliser l'intelligence collective pour générer des idées et co-construire des solutions concrètes.",
        image: "/images/services/ateliers-creatifs.jpg",
      },
      {
        title: "Management de l’innovation",
        description: "Structurer et piloter votre démarche d'innovation, de l'idée jusqu'à sa mise en œuvre.",
        image: "/images/services/management-innovation.jpg",
      },
      {
        title: "Accélération de projets innovants",
        description: "Passer de l'idée à la réalité plus vite, en structurant et en dynamisant vos projets d'innovation.",
        image: "/images/services/acceleration-projets.jpg",
      },
      {
        title: "Design de processus",
        description: "Cartographier et optimiser vos processus pour gagner en fluidité, en efficacité et en qualité.",
        image: "/images/services/design-processus-innov.jpg",
      },
      {
        title: "Design de services et d’organisation",
        description: "Concevoir des expériences et des organisations cohérentes, au service de vos clients et de vos équipes.",
        image: "/images/services/design-service.jpg",
      },
      {
        title: "Diagnostic de capacité d’innovation",
        description: "Évaluer la maturité de votre organisation en matière d'innovation et identifier vos axes de progrès.",
        image: "/images/services/diagnostic-innovation.jpg",
      },
    ],
    heroImage: "/images/pages/header-innovation.jpg",
    introHeading: "Construire",
    introSubheading: "le monde de demain",
    introImage: "/images/pages/intro-innovation.jpg",
    type: "content",
    title: "Innovation et CoDesign pour entreprises | SY&CO",
    h1: "Innovation et codesign",
    category: "Innovation",
    description:
      "Innovation & codesign : ateliers créatifs, design thinking et facilitation pour innover en équipe, au Maroc et à l'international, avec SY&CO.",
    paragraphs: [
      "Les organisations les plus résilientes sont celles qui savent innover en continu. SY&CO stimule la créativité de vos équipes et structure vos démarches d'innovation, du premier atelier à la mise en œuvre.",
      "Design thinking, codesign, facilitation d'ateliers créatifs : nous mobilisons l'intelligence collective pour faire émerger des idées neuves et résoudre vos problèmes complexes.",
      "Innover devient alors une aventure collective, concrète et durable — au service de vos clients comme de vos collaborateurs.",
    ],
  },
  {
    slug: "seminaires-de-cohesion-dequipe",
    highlights: [
      { title: "Renforcer les liens", description: "Des formats ludiques et immersifs qui rapprochent les équipes et installent une dynamique collective durable." },
      { title: "Libérer la parole", description: "Un cadre bienveillant qui favorise l'écoute, la confiance et la coopération entre collaborateurs." },
      { title: "100% sur-mesure", description: "Chaque séminaire est conçu autour de vos enjeux, de votre culture et de vos objectifs d'équipe." },
    ],
    heroImage: "/images/pages/header-cohesion.jpg",
    introHeading: "Un outil à fort impact",
    introSubheading: "de management",
    introImage: "/images/pages/intro-cohesion.jpg",
    type: "content",
    title: "Séminaires de cohésion d’équipe innovants | SY&CO",
    h1: "Le séminaire de cohésion d'équipe",
    category: "Management et Intelligence Collective",
    description:
      "Séminaires de cohésion d'équipe et team building au Maroc et à l'international : fédérez et engagez vos équipes avec SY&CO.",
    paragraphs: [
      "La cohésion ne se décrète pas, elle se vit. SY&CO conçoit des séminaires de cohésion et des team buildings qui rapprochent réellement vos équipes et créent une dynamique collective durable.",
      "Dans un cadre bienveillant et stimulant, nous favorisons l'écoute, la confiance et la coopération — les fondations d'une équipe engagée et performante.",
      "Chaque séminaire est construit autour de vos enjeux, de votre culture et de vos objectifs, au Maroc comme à l'international.",
    ],
  },
  {
    slug: "notre-methode-iddea",
    heroImage: "/images/pages/header-iddea.jpg",
    introHeading: "Designer des parcours",
    introSubheading: "engageants et innovants",
    introImage: "/images/pages/intro-iddea.jpg",
    type: "content",
    title: "Méthode IDDEA - Formation personnalisée et innovante | CO3",
    h1: "Notre méthode IDDEA®",
    category: "Notre méthode",
    description:
      "La méthode IDDEA® de SY&CO : une démarche de codesign en 5 étapes pour des accompagnements et formations sur-mesure, centrés sur vos besoins.",
    paragraphs: [
      "Pour garantir des accompagnements réellement utiles, SY&CO s'appuie sur une démarche éprouvée : la méthode IDDEA®. Inspirée du design thinking, elle place l'utilisateur et le besoin au cœur de chaque projet.",
      "Immersion, Design, Déploiement, Évaluation, Amélioration : cinq étapes pour comprendre, co-créer, expérimenter et améliorer en continu.",
      "Résultat : des séminaires, formations et dispositifs sur-mesure, mesurables et durablement efficaces.",
    ],
  },
  {
    slug: "parcours-de-formation-sur-mesure",
    highlights: [
      { title: "Ingénierie pédagogique", description: "Des parcours structurés à partir d'un diagnostic précis de vos besoins en compétences." },
      { title: "Approche multimodale", description: "Présentiel, distanciel, digital et social learning combinés pour un ancrage durable." },
      { title: "Mesure d'impact", description: "Une évaluation à chaque étape pour garantir le transfert des compétences sur le terrain." },
    ],
    heroImage: "/images/pages/header-pedagogie.jpg",
    introHeading: "Des modalités",
    introSubheading: "engageantes et innovantes",
    introImage: "/images/pages/intro-pedagogie.jpg",
    type: "content",
    title: "Parcours de formation sur mesure innovants | SY&CO",
    h1: "Notre ingénierie pédagogique sur mesure",
    category: "Formation",
    description:
      "Parcours de formation sur-mesure et multimodaux (présentiel, distanciel, digital) au Maroc et à l'international, conçus par SY&CO.",
    paragraphs: [
      "Une formation efficace part toujours d'un besoin précis. SY&CO conçoit des parcours de formation sur-mesure, bâtis à partir d'un diagnostic fin de vos compétences et de vos objectifs.",
      "Présentiel, distanciel, digital et social learning : nous combinons les modalités les plus engageantes pour un ancrage durable des apprentissages.",
      "À chaque étape, nous mesurons l'impact pour garantir le transfert des compétences sur le terrain.",
    ],
  },
  {
    slug: "lancer-son-projet-grace-au-seminaire-kick-off",
    highlights: [
      { title: "Aligner les équipes", description: "Un lancement qui fédère toutes les parties prenantes autour d'une vision et d'objectifs communs." },
      { title: "Cadrer le projet", description: "Rôles, jalons et modalités de collaboration clarifiés dès le départ." },
      { title: "Créer l'élan", description: "Un format participatif et motivant qui donne l'énergie nécessaire à la réussite." },
    ],
    heroImage: "/images/pages/header-kickoff.jpg",
    introHeading: "Réussir",
    introSubheading: "son lancement de projet",
    introImage: "/images/pages/intro-kickoff.jpg",
    type: "content",
    title: "Lancement de projet : réussir votre séminaire kick-off | CO3",
    h1: "Lancer son projet grâce au séminaire kick off",
    category: "Séminaire",
    description:
      "Séminaire kick-off : réussissez le lancement de vos projets et fédérez vos équipes dès le départ, au Maroc et à l'international, avec SY&CO.",
    paragraphs: [
      "La réussite d'un projet se joue souvent dès son lancement. SY&CO conçoit des séminaires kick-off qui alignent les parties prenantes et créent l'élan nécessaire à la réussite.",
      "Vision partagée, rôles clarifiés, jalons posés : un format participatif et motivant qui met tout le monde en mouvement dans la même direction.",
      "Un lancement réussi, c'est déjà une bonne partie du chemin parcouru.",
    ],
  },
  {
    slug: "everything-disc",
    highlights: [
      { title: "Mieux se connaître", description: "Un profil comportemental qui éclaire les préférences et les moteurs de chacun." },
      { title: "Mieux collaborer", description: "Un langage commun pour fluidifier les relations et prévenir les tensions." },
      { title: "Passer à l'action", description: "Des plans de progrès concrets, ancrés dans le quotidien professionnel." },
    ],
    heroImage: "/images/pages/header-innovation.jpg",
    introHeading: "Optimiser les interactions",
    introSubheading: "grâce à Everything DiSC®",
    introImage: "/images/pages/intro-disc.jpg",
    type: "content",
    title: "Everything DISC | SY&CO",
    h1: "Everything DiSC®",
    category: "Outils",
    description:
      "Everything DiSC® par SY&CO : mieux se connaître pour mieux collaborer. Profils comportementaux et ateliers d'équipe, au Maroc et à l'international.",
    paragraphs: [
      "Mieux se comprendre pour mieux travailler ensemble : c'est tout l'enjeu d'Everything DiSC®. SY&CO déploie cet outil de référence pour fluidifier les relations au sein de vos équipes.",
      "À travers un profil comportemental personnalisé et des ateliers collectifs, chacun découvre ses préférences, ses moteurs et ceux des autres.",
      "Un langage commun s'installe, les tensions s'apaisent, et la collaboration gagne en efficacité et en plaisir.",
    ],
  },
  {
    slug: "telechargez-notre-certificat-qualiopi",
    highlights: [
      { title: "Démarche qualité", description: "Nos actions de formation répondent aux exigences d'un référentiel qualité reconnu." },
      { title: "Amélioration continue", description: "Chaque intervention est évaluée et inscrite dans une logique de progrès permanent." },
      { title: "Transparence", description: "Consultez notre certificat et nos engagements qualité en toute confiance." },
    ],
    heroImage: "/images/pages/header-iddea.jpg",
    type: "content",
    title: "Téléchargez notre certificat Qualiopi - SY&CO 3",
    h1: "Téléchargez notre certificat Qualiopi",
    category: "Certification",
    description: "",
    paragraphs: [
      "Chez SY&CO, c’est simple : tout commence par un café ou un thé (même virtuel) !",
      "Cabinet de conseil en stratégie, management et innovation spécialisé dans la transformation organisationnelle, culturelle et managériale par l’intelligence collective et les démarches collaboratives.",
      "Siège social : 56 avenue Daumesnil 75012 Paris",
    ],
  },
  {
    slug: "nos-cas-clients",
    heroImage: "/images/pages/header-strategie.jpg",
    type: "cases-index",
    title: "Nos cas clients | SY&CO",
    h1: "Nos Cas Clients",
    category: "Cas clients",
    description: "Rien de mieux que des exemples concrets pour appréhender nos méthodes et nos modes opératoires. Découvrez comment SY&CO a permis a ses clients d’atteindre leur objectif",
    paragraphs: [
      "Rien de mieux que des exemples concrets pour appréhender nos méthodes et nos modes opératoires ! Découvrez comment SY&CO a permis à ses clients d’atteindre leur objectif dans les domaines suivants :",
      "Chez SY&CO, c’est simple : tout commence par un café ou un thé (même virtuel) !",
      "Cabinet de conseil en stratégie, management et innovation spécialisé dans la transformation organisationnelle, culturelle et managériale par l’intelligence collective et les démarches collaboratives.",
    ],
  },
  {
    slug: "qui-sommes-nous",
    heroImage: "/images/pages/header-cohesion.jpg",
    type: "about",
    title: "Qui sommes-nous | SY&CO",
    h1: "L'équipe SY&CO",
    category: "À propos",
    description: "Rencontrez notre équipe intergénérationnelle de formateurs, coachs, consultants et facilitateurs et notre solide réseau de partenaires pluridisciplinaires pour répondre à vos besoins spécifiques en stratégie, management et innovation.",
    paragraphs: [
      "Véritables “Designers de transformation”, nous créons avec vous et pour vous des dispositifs d’accompagnement pour fédérer et engager les individus dans une démarche de transformation et d’innovation durable.",
      "En mobilisant l’intelligence collective à tous les niveaux de l’organisation, notre ambition est de remettre l’humain au centre des transformations de nos organisations de travail et, plus largement, de notre société.",
      "En tant qu’organisation apprenante, notre mode de fonctionnement horizontal et collaboratif crée les conditions de l’innovation et vous permet de bénéficier d’un accompagnement sur-mesure toujours à la pointe des dispositifs.",
    ],
  },
  {
    slug: "nos-articles",
    type: "articles",
    title: "Nos Articles - SY&CO 3",
    h1: "Notre Blog",
    category: "Blog",
    description: "",
    paragraphs: [
      "Chez SY&CO, c’est simple : tout commence par un café ou un thé (même virtuel) !",
      "Cabinet de conseil en stratégie, management et innovation spécialisé dans la transformation organisationnelle, culturelle et managériale par l’intelligence collective et les démarches collaboratives.",
      "Siège social : 56 avenue Daumesnil 75012 Paris",
    ],
  },
  {
    slug: "contact",
    heroImage: "/images/pages/header-management.jpg",
    type: "contact",
    title: "Contact | SY&CO",
    h1: "Envie d'échanger avec notre équipe ?",
    category: "Contact",
    description: "Envie d'échanger avec notre équipe ? Chez SY&CO, c’est simple : tout commence par un café ou un thé (même virtuel). Alors choisissez votre format, et prenons rendez-vous !",
    paragraphs: [
      "Retrouvez les actualités de SY&CO, du secteur et nos témoignages clients sur notre page LinkedIn",
      "Cabinet de conseil en stratégie, management et innovation spécialisé dans la transformation organisationnelle, culturelle et managériale par l’intelligence collective et les démarches collaboratives.",
      "Nos agences sont basées à Paris, Toulouse, Montpellier, Lyon et Marseille.",
    ],
  },
  {
    slug: "comment-reussir-son-seminaire-a-distance",
    heroImage: "/images/pages/header-cohesion.jpg",
    type: "case-detail",
    title: "Comment réussir son séminaire à distance - SY&CO 3",
    h1: "Comment réussir son séminaire à distance",
    category: "Cohésion d'équipe et modes collaboratifs",
    description: "Découvrez dans ce cas client comment notre solution de coaching à distance My Perso Coach a favorisé la montée en compétences de managers.",
    image: "/images/cases/seminaire-distance2.jpg",
    paragraphs: [
      "Structure : PrivéSecteur : Habitat socialEffectif : 1 000 collaborateurs dont 120 managersMission : 2 mois",
      "En septembre 2020, la crise sanitaire met en lumière la nécessité, au sein de l’organisation, de recréer du lien entre les équipes.",
      "La période est difficile pour l’ensemble, et notamment pour les managers qui ressentent de la solitude et des difficultés à animer leurs équipes. Une transformation plus profonde de leurs pratiques de travail est en cours.",
    ],
  },
  {
    slug: "decouverte-de-lintelligence-emotionnelle",
    heroImage: "/images/pages/header-cohesion.jpg",
    type: "case-detail",
    title: "Méthodologie EQ-i 2.0 ou l'intelligence émotionnelle au service de la cohésion d'équipe - SY&CO 3",
    h1: "L'intelligence émotionnelle au service de la cohésion d'équipe",
    category: "Cohésion d'équipe et modes collaboratifs",
    description: "Découvrez comment la méthodologie EQ-i 2.0 permet renforcer les liens, la cohésion et le sentiment d’appartenance des équipes.",
    image: "/images/cases/intelligence-emotionnelle1.jpg",
    paragraphs: [
      "Structure : InstitutionSecteur : SantéEffectif : 15 000 dont 5 200 titulaires Mission : 2 jours",
      "Dans le cadre de l’élaboration du plan de formation des managers, notre client a souhaité sensibiliser sa filière RH nationale à l’intelligence émotionnelle à l’occasion de leur séminaire annuel. Sur les 3 journées de séminaire, une journée est consacrée à ce sujet.",
      "L’enjeu est d’emmener les 18 encadrants, dont la légitimité est à ce moment-là centrée sur la technicité de leur métier, à prendre conscience de l’aspect humain de leur rôle de manager.",
    ],
  },
  {
    slug: "ateliers-et-seminaires-au-service-de-lexperience-collaborateur",
    heroImage: "/images/pages/header-strategie.jpg",
    type: "case-detail",
    title: "Ateliers et séminaires au service de l’expérience collaborateur - SY&CO 3",
    h1: "Ateliers et séminaires au service de l'expérience collaborateur",
    category: "Transformation des organisations",
    description: "Découvrez dans ce cas client comment notre solution de coaching à distance My Perso Coach a favorisé la montée en compétences de managers.",
    image: "/images/cases/parc-loisirs2.jpg",
    paragraphs: [
      "Structure : PrivéeSecteur : Parc de loisirsEffectif : 2 500 collaborateurs Mission : 6 jours",
      "Comment identifier et mettre en place des nouvelles pratiques managériales pour améliorer l’expérience collaborateur ?",
      "Face aux évolutions sociétales comme la digitalisation, l’arrivée des nouvelles générations, ou encore la place des soft skills au travail, la Direction de ce parc de loisirs français a senti la nécessité de faire évoluer les modes de fonctionnement et pratiques managériales.",
    ],
  },
  {
    slug: "accompagner-a-distance-le-changement-de-posture-des-managers",
    heroImage: "/images/pages/header-management.jpg",
    type: "case-detail",
    title: "Accompagner à distance le changement de posture des managers - SY&CO 3",
    h1: "Accompagner à distance le changement de posture des managers",
    category: "Développement des compétences managériales",
    description: "Découvrez dans ce cas client comment notre solution de coaching à distance My Perso Coach a favorisé la montée en compétences de managers.",
    image: "/images/cases/conseil.jpg",
    paragraphs: [
      "Structure : Institution publiqueSecteur : AdministrationEffectif : 10 000 collaborateurs Mission : 3 ans",
      "Collectivité publique d’envergure, notre client évolue dans un contexte public de transformation et de modernisation, connaissant une diminution des ressources financières avec pour autant de nombreux projets à mettre en œuvre.",
      "Il doit alors chercher des moyens de renforcer la performance tant individuelle que collective des agents en poste. Les deux axes prioritaires identifiés pour réussir ce défi sont les suivants :",
    ],
  },
  {
    slug: "mentions-legales",
    type: "legal",
    title: "Mentions légales - SY&CO 3",
    h1: "Mentions légales",
    category: "Pages légales",
    description: "",
    paragraphs: [
      "En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site www.sy-co.ma l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :",
      "Propriétaire : SY&CO SARL – Siret 83491977100024 – Numéro TVA Intracommunautaire FR08834919771– Siège social : 56 avenue Daumesnil 75012Créateur : Bureau Chapeau MelonResponsable publication : Benjamin Pagliaï – contact@sy-co.maLe responsable publication est une personne physique ou une personne morale.Webmaster : Benjamin Pagliaï – contact@sy-co.maHébergeur : OVH – 2 rue Kellermann – 59100 Roubaix – FranceCrédits : Istock, CO’3",
      "L’utilisation du site www.sy-co.ma implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site www.sy-co.ma sont donc invités à les consulter de manière régulière.",
    ],
  },
  {
    slug: "politique-de-confidentialite",
    type: "legal",
    title: "Politique de confidentialité - SY&CO 3",
    h1: "Politique de confidentialité",
    category: "Pages légales",
    description: "",
    paragraphs: [
      "Conformément à la législation en vigueur concernant le RÈGLEMENT GÉNÉRAL EUROPÉEN SUR LA PROTECTION DES DONNÉES À CARACTÈRE PERSONNEL, dit « RGPD », entrée en vigueur le 25/05/2018, nous vous informons de ce qui suit :",
      "Afin d’assurer ses engagements contractuels vis-à-vis de ses clients, CO’3 collecte les données nécessaires à la mise en œuvre de ses prestations.",
      "Les informations recueillies par la Société CO’3 – SY&CO 3 dite “la Société” vous concernant font l’objet d’un traitement destiné notamment à la préparation, la mise en place, l’animation et le bilan des dossiers de formation, des ateliers, des séminaires et des séances de coaching ; la communication et l’information sur les services proposés.",
    ],
  },
  {
    slug: "conditions-generales-de-vente",
    type: "legal",
    title: "Conditions générales de vente - SY&CO 3",
    h1: "Conditions générales de vente",
    category: "Pages légales",
    description: "",
    paragraphs: [
      "Les présentes Conditions générales sont applicables aux ventes de prestations du cabinet CO’3.Les présentes Conditions générales sont adressées au client en même temps que le Devis / Bon de commande. La signature du Devis / bon de commande implique l’acceptation sans réserve par le client et son adhésion pleine et entière aux présentes Conditions générales, qui prévalent sur tout autre document du client.",
      "Toute commande de Prestations de Conseil par un client doit faire l’objet d’un Devis / Bon de commande signé par le client et validé par CO’3. Les commandes sont irrévocables pour le client, sauf acceptation écrite de la société CO’3.Les Prestations de Formation font l’objet d’une Convention de Formation qui précise l’ensemble des modalités d’intervention.La société CO’3 se réserve la faculté de refuser la commande du client en cas de retard ou de défaut de paiement de tout ou partie d’une somme due par ce dernier à la société CO’3, à quelque titre que ce soit.",
      "Toute demande de modification de la composition ou du volume d’une commande passée par un client ne pourra être prise en compte par la société CO’3 que si la demande est faite par écrit, y compris par courrier électronique avec avis de réception, et est parvenue à la société CO’3 au plus tard trente (30) jours avant la date de prestation prévue.Sauf disposition contraire entre les parties, en cas de modification de la commande par le client, la société CO’3 sera déliée des délais initialement convenus pour son exécution. Les modifications de dates de formations de la part du Client pourront se faire jusqu’à trois (3) semaines avant le début de la formation sans que la société CO’3 ne puisse prétendre à un dédommagement. La société CO’3 se réserve le droit de modifier la date de la formation jusqu’à deux (2) semaines avant le début de la formation. En cas de modification, la société CO’3 en informe le Client sans délai, par courrier électronique. Aucune indemnité ou rémunération n’est due.",
    ],
  },
];

export const pageBySlug = (slug: string) =>
  pages.find((p) => p.slug === slug);

/** Ordered sequences for previous/next in-page navigation. */
export const expertiseNavOrder = [
  "evenementiel-et-seminaires",
  "transformation-des-organisations",
  "strategie-et-gouvernance",
  "seminaires-de-cohesion-dequipe",
  "developpement-des-competences-manageriales",
  "innovation-et-codesign",
  "notre-methode-iddea",
  "parcours-de-formation-sur-mesure",
  "lancer-son-projet-grace-au-seminaire-kick-off",
  "everything-disc",
];

export const caseNavOrder = [
  "comment-reussir-son-seminaire-a-distance",
  "decouverte-de-lintelligence-emotionnelle",
  "ateliers-et-seminaires-au-service-de-lexperience-collaborateur",
  "accompagner-a-distance-le-changement-de-posture-des-managers",
];

export function getSiblings(slug: string) {
  const order = expertiseNavOrder.includes(slug)
    ? expertiseNavOrder
    : caseNavOrder.includes(slug)
      ? caseNavOrder
      : null;
  if (!order) return { prev: null, next: null };
  const i = order.indexOf(slug);
  const prev = i > 0 ? pageBySlug(order[i - 1]) ?? null : null;
  const next =
    i < order.length - 1 ? pageBySlug(order[i + 1]) ?? null : null;
  return { prev, next };
}
