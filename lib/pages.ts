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
    slug: "transformation-des-organisations",
    needs: [
      "Améliorer les performances de votre organisation",
      "Répondre aux nouveaux besoins de vos clients et collaborateurs",
      "Redéfinir une vision partagée",
      "Définir une nouvelle stratégie d’entreprise",
      "Vous adapter à un nouveau marché",
      "Accompagner vos équipes dans une phase de transformation",
      "Faciliter l’implantation de nouveaux process",
    ],
    services: [
      {
        title: "Transformation managériale",
        description: "Faire évoluer les pratiques et les postures managériales pour accompagner durablement le changement au sein de vos équipes.",
        image: "/images/services/transformation-manageriale.jpg",
      },
      {
        title: "Transformation culturelle et organisationnelle",
        description: "Créez un environnement de travail plus favorable à l’Innovation et à la coopération pour développer l’agilité de vos équipes et la performance de votre organisation à long terme !SY&CO accompagne les organisations dans leurs transformations culturelle et organisationnelle en les aidant à bâtir culture d’entreprise alignée sur leurs objectifs stratégiques. Nos méthodes stimulent l’implication, la prise d’initiative et l’engagement des collaborateurs et renforce ainsi la capacité de l’organisation à grandir.",
        image: "/images/services/transformation-culturelle-organisationnelle.jpg",
      },
      {
        title: "Transition sociétale et environnementale",
        description: "Partout dans le monde, les crises se succèdent et ne se ressemblent pas. Financières, sanitaires, démographiques, alimentaires… Elles font surtout l’objet d’une montée en puissance des préoccupations sociales et environnementales.Chez SY&CO, nous sommes convaincus qu’en prenant en compte les enjeux environnementaux et sociaux, une démarche RSE peut contribuer à la préservation de votre écosystème et à l’amélioration des relations avec vos parties prenantes. En favorisant l’engagement des collaborateurs dans un environnement de travail positif axé sur des valeurs éthiques, ces démarches entraînent une augmentation de la performance de l’organisation pour finalement soutenir la pérennité de cette dernière.",
        image: "/images/services/transition-societale-environnementale.jpg",
      },
      {
        title: "Diagnostic et data analyse",
        description: "Garantie de la réussite de votre transformation, la réalisation d’un diagnostic pertinent va permettre de comprendre le contexte de l’organisation, d’évaluer ses besoins ainsi que les défis à relever. Le diagnostic va apporter des données mesurables, qualitatives et quantitatives nécessaires au processus de changement : il permet d’analyser de façon juste et objective la situation de départ pour identifier les domaines clés à adresser, pouvoir décider du chemin stratégique à suivre, et du processus à mettre en œuvre pour réussir votre transformation.",
        image: "/images/services/diagnostic-data-analyse.jpg",
      },
      {
        title: "Design de processus de transformation",
        description: "Concevoir et structurer, avec vos équipes, les processus qui rendent votre transformation concrète et opérationnelle.",
        image: "/images/services/Design-de-processus.jpg",
      },
      {
        title: "Pilotage de projet de transformation et conseil",
        description: "Pour faciliter la transformation de votre organisation, nous vous accompagnons dans la planification, l’exécution et la gestion des étape décisives : définition des KPI de transformation et suivi, mobilisation des ressources nécessaires, mise en œuvre des changements et gestion du processus de manière itérative. Tout au long du processus, les consultants de SY&CO sont présents pour impliquer les parties prenantes, communiquer de manière efficace, réadapter le dispositif au besoin et évaluer régulièrement avec vous les progrès réalisés.",
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
    description: "Nous offrons un accompagnement sur mesure pour votre transformation : stratégies innovantes, adaptabilité et soutien pour une évolution réussie.",
    paragraphs: [
      "Chez SY&CO, nous pensons que les sociétés de demain sont les défis d’aujourd’hui*, afin d’agir tous les jours dans un processus d’adaptation continue. En d’autres mots, « Ce n’est pas la plus forte espèce qui survit, ni la plus intelligente, mais celle qui sait le mieux s’adapter aux changements » comme le disait Charles Darwin.",
      "Nous accompagnons les organisations dans leurs transformations, en questionnant tous les paramètres de réussite du changement, de la stratégie au management. Nous nous appuyons sur notre approche innovante, collaborative et holistique.",
      "Pour ce faire, nous vous aidons à acquérir l’agilité, la flexibilité, la confiance et les compétences nécessaires aux ajustements et ré-ajustements permanents dans un contexte fluctuant.",
    ],
  },
  {
    slug: "strategie-et-gouvernance",
    needs: [
      "Formuler votre raison d’être d’entreprise",
      "Définir une vision d’entreprise claire",
      "Élaborer une gouvernance responsable (RSE)",
      "Affiner ou repenser votre business design",
      "Élaborer une feuille de route stratégique",
      "Définir vos objectifs stratégiques et leur déclinaison au plus près du terrain",
      "Impliquer les équipes dans la stratégie de l’organisation",
      "Mettre en place un pilotage efficace des actions",
      "Renforcer votre leadership interne",
      "Coacher vos équipes pour les rendre plus efficientes",
    ],
    services: [
      {
        title: "Business design",
        description: "Repenser votre modèle et vos offres pour créer de la valeur durable et vous différencier sur votre marché.",
        image: "/images/services/Business-design.jpg",
      },
      {
        title: "Gouvernance responsable",
        description: "Selon la norme internationale Iso 26000, le périmètre de la RSE inclut 7 thématiques, dont une centrale : la gouvernance de l’organisation. Une gouvernance responsable implique d’appliquer la démarche RSE de façon globale à la stratégie, mais aussi aux process ou au management au sein de l’organisation. Améliorez l’impact sociétal et environnemental de votre organisation grâce à une gouvernance responsable et renforcez la cohérence des actions de votre organisation, afin d’en améliorer sa performance et sa rentabilité de manière durable.",
        image: "/images/services/gouvernance-responsable.jpg",
      },
      {
        title: "Valeurs et raison d’être de l’entreprise",
        description: "Vous savez ce que vous faites. Mais savez-vous pour quoi (en deux mots !) vous le faites ? Collaborateurs et clients sont de plus en plus attentifs aux valeurs humaines, et aux engagements sociétaux et environnementaux des organisations avec qui ils interagissent. Identifier et porter la vision, la mission et les valeurs de votre organisation permet de créer une ligne directrice claire et de rassembler vos équipes autour d’un projet qui dépasse les seules tâches opérationnelles. SY&CO vous accompagne dans la formalisation collaborative de votre raison d’être et dans sa mise en œuvre.",
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
        description: "Développez vos compétences de dirigeant ou celles de votre équipe grâce au coaching de dirigeant et au coaching d’équipe. L’accompagnement par nos coachs certifiés vous permet de renforcer votre capacité à questionner vos perceptions et à développer une vision claire de la situation. Développez votre leadership, l’esprit d’équipe, la motivation pour renforcer votre capacité et celle de vos équipes à vous adapter dans un environnement instable et complexe. La réussite d’un collectif repose sur le développement des compétences techniques et relationnelles de ses membres.",
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
    description: "Expertise en stratégie et gouvernance d'entreprise : définissez et pilotez votre vision avec nos consultants pour un développement durable et responsable.",
    paragraphs: [
      "La gouvernance des organisations est en pleine évolution. Les organisations qui récoltent un fort taux d’engagement sont celles qui ont su impliquer les collaborateurs dans les prises de décisions… et au sein desquelles équipes et dirigeants partagent d’une vision commune*. Chez SY&CO, nous sommes totalement en accord avec le théoricien en management Peter Druker, qui disait : “La meilleure façon de prédire l’avenir, c’est de le créer”. C’est pourquoi nous vous accompagnons :",
      "Au-delà des organisations, ce sont les équipes et les dirigeants que nous accompagnons car, que serait une organisation sans son capital humain ?",
      "Découvrez l’étude 2023 de ChooseMyCompany ici",
    ],
  },
  {
    slug: "developpement-des-competences-manageriales",
    needs: [
      "Accompagner les primo managers dans leur prise de poste",
      "Restructurer ou asseoir les rôles et responsabilités des managers",
      "Favoriser le partage de bonnes pratiques et aligner la culture managériale",
      "Identifier vos besoins en termes de compétences à développer",
      "Construire un plan de développement des compétences",
      "Faire monter les managers en compétences",
      "Développer une culture de l’apprentissage entre pairs",
      "Développer les nouvelles postures managériales",
    ],
    services: [
      {
        title: "Diagnostic de formation",
        description: "Identifier précisément les besoins en compétences pour concevoir des parcours réellement utiles.",
        image: "/images/services/diagnostic-de-formation.jpg",
      },
      {
        title: "Team learning",
        description: "Embarquez vos équipes dans un apprentissage collectif et actif, permettant de développer des compétences directement liées au contexte qu’elles rencontrent. À mi-chemin entre coaching d’équipe et formation active, le team learning est un dispositif de plus en plus sollicité et s’adresse à une équipe de travail. En créant un environnement d’apprentissage dynamique et stimulant où ils peuvent s’engager activement, cette méthode collaborative favorise la motivation intrinsèque des apprenants, l’intelligence collective et facilite les prises de décision dans la résolution de problèmes.Nos facilitateurs en Team Learning co-construisent avec vous les séquences de ce dispositif pour aboutir à un process gagnant.",
        image: "/images/services/team-learning.jpg",
      },
      {
        title: "Design de parcours de formation sur mesure",
        description: "Notre méthode IDDEA® garantit à vos équipes de bénéficier d’un parcours de formation parfaitement adapté à leur quotidien et à votre culture d’entreprise. Avec vous, et après une phase d’immersion, nous définissons les besoins en acquisition de compétences et développons un parcours spécifique.Que ce soit en présentiel, en distanciel, en synchrone ou asynchrone, nos parcours Blended Learning s’appuient sur une ingénierie multimodale et sur des formateurs expérimentés. Tout au long de la démarche, notre ingénieur pédagogique co-construit avec vous le parcours qui vous ressemble jusqu’à la personnalisation graphique des supports et capsules de digital learning.",
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
        description: "Misez sur la somme des savoirs, savoir-faire et savoir-être de vos équipes ! Le Co-développement est une méthode d’apprentissage collaboratif qui favorise l’échange et le partage entre pairs. Il est utilisé pour promouvoir l’apprentissage mutuel, l’émulation et le développement des compétences de manière três opérationnelle.Nos facilitateurs certifiés créent cet espace sécurisé, au sein duquel les participants peuvent exposer leur problématique, réfléchir ensemble, trouver des solutions créatives et se soutenir mutuellement dans leur développement professionnel. Grâce à notre plateforme collaborative, nous avons développé une solution pour déployer ces sessions de co-développement à distance tout en conservant une approche collaborative engageante.",
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
    description: "Découvrez nos formations innovantes en développement de compétences managériales pour renforcer l'efficacité et la confiance de vos managers.",
    paragraphs: [
      "NOS EXPERTISES | Management et Intelligence Collective",
      "Selon l’étude ChooseMyCompany 2023*, les attentes des collaborateurs sont grandes et nombre d’entre eux sont volontaires pour acquérir de nouvelles compétences, de nouveaux savoir-faire… Suivant la devise aristotélicienne qui dit que « Ce que nous devons apprendre à faire, nous l’apprendrons en le faisant», SY&CO crée des parcours de formation et de développement des compétences au plus près des réalités du terrain de vos managers. Nous misons sur le transfert de compétences et d’outils immédiatement transposables au sein de leurs équipes, mais surtout, nous leur donnons des clés pour progresser et renforcer leur confiance professionnelle. Et parce que progresser dans sa posture ne se fait pas en un jour, nous accompagnons les équipes dans le temps .",
      "Associée, Formatrice et Consultante en transformation des organisations, Spécialiste en management et développement des ressources humaines.",
    ],
  },
  {
    slug: "innovation-et-codesign",
    needs: [
      "Développer de nouveaux produits ou services",
      "Améliorer les processus et l’efficacité opérationnelle",
      "Développer votre marque employeur",
      "Faciliter la transformation de votre organisation",
      "Résoudre des problématiques complexes",
      "Anticiper les besoins du marché de demain pour y répondre de manière responsable et engagée (RSE)",
      "Impliquer des équipes transdisciplinaires dans une démarche collaborative",
      "Centrer votre démarche sur les besoins de vos utilisateurs et/ou clients",
    ],
    services: [
      {
        title: "Innovation managériale",
        description: "Expérimenter de nouveaux modes d'organisation et de management pour libérer l'engagement et la créativité.",
        image: "/images/services/innovation-manageriale.jpg",
      },
      {
        title: "Design thinking",
        description: "La parfaite combinaison entre la pensée design créative et la pensée rationnelle ! Le design thinking est un état d’esprit, une approche centrée sur l’humain qui vise à résoudre les problèmes complexes et à favoriser l’innovation de produits, de services ou un process.Nos facilitateurs certifiés favorisent la collaboration interdisciplinaire, l’empathie envers les utilisateurs et une approche itérative d’apprentissage et de développement de solutions.Ainsi, vous pourrez identifier et comprendre les besoins et les attentes des utilisateurs, générer des idées créatives et les tester rapidement afin de créer des solutions adaptées et une expérience utilisateur optimale.",
        image: "/images/services/design-thinking.jpg",
      },
      {
        title: "Facilitation",
        description: "C’est le rôle de nos experts facilitateurs et facilitateurs graphiques : rendre facile ! Fluidifier les échanges lors des réunions, favoriser les phases d’émergence d’idées et la convergence vers des solutions partagées, être les garants du processus pour atteindre l’objectif visé. Nous intervenons pour créer un espace de collaboration où les idées de chacun seront valorisées, facilitant ainsi la résolution de problèmes et l’émergence de nouvelles solutions.",
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
        description: "L’innovation peut paraître paradoxale : comment aller vite en s’assurant que l’innovation sera adoptée ? Comment aller vers l’inconnu tout en sécurisant chacune des briques du projet ? L’innovation permet à vos équipes de « faire le pas de côté », penser autrement, se décentrer de leur projet (dans lesquelles elles sont parfois -trop- expertes), pour aller vers une démarche plus transversale, en intégrant des méthodes innovantes.L’objectif est de favoriser la collaboration entre services habituellement « silotés », débloquer les situations et décentrer les zones d’influence en permettant à l’équipe projet de se concentrer sur l’avenir…",
        image: "/images/services/acceleration-projets.jpg",
      },
      {
        title: "Design de processus",
        description: "Cartographier et optimiser vos processus pour gagner en fluidité, en efficacité et en qualité.",
        image: "/images/services/design-processus-innov.jpg",
      },
      {
        title: "Design de services et d’organisation",
        description: "Créez des expériences cohérentes pour les usagers en repensant les services auxquels ils font appel. En s’intéressant aux besoins des usagers, à leurs attentes et aux points de rencontre, nos consultants en design de services vous aident à construire des parcours et des expériences utilisateurs de qualité, en interne comme en externe.",
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
    description: "Explorez nos services d'innovation et de CoDesign : solutions créatives, facilitation de projet, et stratégies personnalisées pour vous propulser vers l'avenir.",
    paragraphs: [
      "Plusieurs études* montrent que les organisations qui intègrent les processus d’innovation à leur fonctionnement sont plus résilientes face aux chocs économiques et aux perturbations du marché. Ces organisations sont mieux préparées à faire face à l’incertitude, à saisir de nouvelles opportunités et à rebondir plus rapidement après des crises.Leur secret : l’utilisation de modes de pensée divers, la sécurité psychologique pour pourvoir parler et penser librement et l’envie de participer à un projet qui les dépasse. Comme le dit le théoricien du management Peter Drucker : « Rien ne sert de défendre le monde d’hier quand on peut construire le monde de demain« .Vous aussi avez envie d’aller plus loin avec vos équipes et d’anticiper l’avenir ? Nos facilitateurs et consultant·es certifié·es en Design Thinking et Intelligence collective sont là pour vous y mener !",
      "*Pérennité, innovation et résilience des entreprises : Panorama mondial des entreprises historiques innovantes, Marc Giget & Véronique Hillen, European Institute for Creative Strategies & Innovation, 2021. À consulter ici",
      "Coach professionnel consultant, Facilitateur certifié en démarches collaboratives.",
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
    description: "Découvrez nos séminaires de cohésion d'équipe : des expériences sur-mesure pour renforcer l'intelligence collective, la coopération, et l'esprit d'équipe.",
    paragraphs: [
      "Améliorer les relations pour fluidifier la collaboration.",
      "Redéfinir une identité collective forte en remobilisant les individus et en relançant les dynamiques collectives constitue une priorité pour retrouver la motivation, la cohésion et la positivité des équipes.",
      "Co‘SY&CO élabore des séminaires innovants, sur-mesure, avec une réelle valeur ajoutée : un moment impactant avec des effets positifs de longue traîne.",
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
    description: "Explorez notre méthode IDDEA pour des formations personnalisées : parcours individualisés, pédagogie adaptative, et expérience apprenante optimale.",
    paragraphs: [
      "Designer des parcours de formation innovants.",
      "La digitalisation et le besoin d’individualisation ont entraîné un changement global dans nos modes de consommation. La formation est bien sûr impactée, avec des attentes spécifiques de la part des apprenants en termes de rythme et de modalités d’apprentissage.",
      "La personnalisation et l’individualisation des formations, l’adaptation des rythmes d’apprentissage, la création de parcours hybrides mêlant distanciel et présentiel permettent d’optimiser les taux de complétion des parcours et de satisfaction de la part des apprenants.",
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
    description: "Découvrez nos parcours de formation sur mesure : pédagogie innovante, supports multimodaux, et approche collaborative pour un résultat optimal.",
    paragraphs: [
      "Des parcours de formation au plus près des besoins des apprenants.",
      "Notre approche très collaborative de l’apprentissage s’inscrit dans la création de synergies et d’entraide mutuelle entre les participants afin de prolonger les acquis au-delà du seul temps d’apprentissage.",
      "Sur la base de notre méthode IDDEA, SY&CO crée des parcours adaptés aux besoins de votre organisation et de vos apprenants, dans une optique d’appropriation optimale, que ce soit lors de formations synchrones/asynchrones, en présentiel, à distance, par le biais de e-learning, de podcasts, de classes virtuelles collaboratives ou de ludo-pédagogie.",
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
    description: "Transformez vos réunions de lancement en moteurs de succès grâce au séminaire kick-off de SY&CO 3.",
    paragraphs: [
      "Lancer son projet grâce au séminaire kick off",
      "Créez de l’émulation grâce à une vision partagée.",
      "Le kick-off meeting, ou réunion de lancement, est une étape incontournable pour créer une dynamique positive autour d’un projet.",
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
    description: "L’outil de référence, pour améliorer la communication interpersonnelle et la performance.",
    paragraphs: [
      "Améliorez l’échange et la coopération, en offrant un référentiel commun à vos équipes. À travers l’objectivation des comportements, nous accompagnons vos équipes vers une meilleure compréhension des schémas d’interactions.",
      "La comparaison de ces grilles souples sert de support d’échange pour aborder les interactions professionnelles, favoriser la prise de conscience et poser des bases concrètes au changement.",
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
