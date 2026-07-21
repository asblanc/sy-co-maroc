export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  quote?: string;
};

export type Article = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string; // ISO
  dateLabel: string;
  readingTime: string;
  content: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "seminaire-entreprise-reussi-7-cles",
    title:
      "Séminaire d'entreprise réussi : les 7 clés d'un événement qui fédère vraiment",
    image: "/images/articles/art-iddea.jpg",
    excerpt:
      "Un séminaire n'est pas une récompense, c'est un outil de management. Voici comment en faire un véritable levier de cohésion et de performance.",
    category: "Séminaires & conventions",
    author: "Youssef Amrani",
    authorRole: "Directeur associé, Développement & partenariats",
    date: "2026-05-14",
    dateLabel: "14 mai 2026",
    readingTime: "5 min",
    content: [
      {
        paragraphs: [
          "Chaque année, les entreprises investissent des budgets importants dans leurs séminaires. Pourtant, beaucoup en ressortent avec un simple souvenir agréable, sans effet durable sur les équipes. La différence entre un moment sympathique et un séminaire véritablement transformateur ne tient pas au lieu ou au budget : elle tient à la méthode.",
        ],
      },
      {
        heading: "1. Partir d'un objectif clair, pas d'une date",
        paragraphs: [
          "Un séminaire réussi répond à une intention précise : aligner une vision, lancer un projet, renforcer la cohésion, célébrer un cap. Formuler cet objectif en une phrase avant toute chose oriente l'ensemble des choix — contenu, format, animation, lieu.",
        ],
      },
      {
        heading: "2. à 6. Concevoir une expérience, pas une suite de réunions",
        paragraphs: [
          "Les séminaires qui marquent respectent quelques principes simples que nous appliquons systématiquement chez SY&CO :",
        ],
        list: [
          "Alterner les temps : plénières courtes, ateliers en sous-groupes, moments informels — l'attention se régénère par la variété.",
          "Faire participer plutôt que subir : un collaborateur qui contribue retient et s'engage davantage qu'un spectateur.",
          "Soigner la scénographie et le fil narratif : un événement se raconte comme une histoire, avec un début, des temps forts et une chute.",
          "Prévoir des livrables concrets : décisions, plan d'action, engagements — pour que le lundi suivant, quelque chose ait changé.",
          "Confier l'animation à un facilitateur : un regard extérieur libère la parole et garde le cap sur les objectifs.",
        ],
      },
      {
        heading: "7. Mesurer et prolonger l'impact",
        paragraphs: [
          "Le séminaire ne s'arrête pas quand les lumières s'éteignent. Un questionnaire à chaud, un suivi des engagements pris et une communication interne bien pensée transforment l'énergie du moment en dynamique durable.",
          "C'est cette exigence de résultat — de l'idée à l'après-événement — qui distingue un prestataire d'un véritable partenaire.",
        ],
      },
    ],
  },
  {
    slug: "intelligence-collective-animer-atelier-participatif",
    title:
      "Intelligence collective : animer un atelier participatif qui libère les idées",
    image: "/images/articles/art-forum.jpg",
    excerpt:
      "L'intelligence collective ne s'improvise pas. Elle se conçoit, se cadre et s'anime. Retour sur les ingrédients d'un atelier qui fait réellement émerger les idées.",
    category: "Intelligence collective",
    author: "Nadia Chraibi",
    authorRole: "Coach en leadership & intelligence émotionnelle",
    date: "2026-04-03",
    dateLabel: "3 avril 2026",
    readingTime: "6 min",
    content: [
      {
        paragraphs: [
          "« Réunissons tout le monde, les bonnes idées finiront bien par sortir. » Cette croyance a la vie dure — et elle est fausse. Sans cadre ni facilitation, un groupe reproduit surtout ses rapports de pouvoir : les plus à l'aise monopolisent la parole, les autres se taisent. L'intelligence collective, elle, se construit avec méthode.",
        ],
      },
      {
        heading: "Créer la sécurité psychologique",
        paragraphs: [
          "Les travaux d'Amy Edmondson, chercheuse à Harvard, l'ont montré : la performance d'une équipe dépend d'abord de sa sécurité psychologique, c'est-à-dire de la conviction que l'on peut s'exprimer, questionner ou se tromper sans crainte. C'est le premier travail du facilitateur : instaurer un cadre de confiance et des règles du jeu explicites.",
        ],
      },
      {
        heading: "Diverger avant de converger",
        paragraphs: [
          "Un atelier efficace sépare clairement deux temps. La divergence, d'abord : on produit un maximum d'idées sans juger, pour élargir le champ des possibles. La convergence, ensuite : on trie, on regroupe et on priorise. Mélanger les deux — critiquer une idée à peine née — tue la créativité du groupe.",
        ],
      },
      {
        heading: "Donner un cadre… et des outils",
        paragraphs: [
          "Post-it, matrices de priorisation, tours de table structurés, vote par gommettes : ces outils ne sont pas des gadgets. Ils garantissent que chacun contribue, rendent le raisonnement visible et accélèrent la décision.",
        ],
        quote:
          "Un bon atelier ne cherche pas le consensus mou, mais une décision partagée que chacun a contribué à construire.",
      },
      {
        heading: "Transformer l'énergie en action",
        paragraphs: [
          "L'atelier le plus riche est inutile s'il ne débouche sur rien. Chaque session doit se conclure par des décisions claires, des responsables et des échéances. C'est à cette condition que l'intelligence collective devient un véritable moteur de performance.",
        ],
      },
    ],
  },
  {
    slug: "facilitation-visuelle-post-it-reunions",
    title:
      "Facilitation graphique et post-it : pourquoi les outils visuels dynamisent vos réunions",
    image: "/images/articles/art-postit.jpg",
    excerpt:
      "Rendre les idées visibles, c'est déjà commencer à mieux penser ensemble. Petit éloge des outils visuels au service de réunions plus vivantes et plus efficaces.",
    category: "Formation & pédagogie",
    author: "Hamza Benjelloun",
    authorRole: "Formateur & facilitateur certifié",
    date: "2026-02-18",
    dateLabel: "18 février 2026",
    readingTime: "4 min",
    content: [
      {
        paragraphs: [
          "Un carré de papier coloré et repositionnable : le post-it est sans doute l'outil le plus sous-estimé du monde de l'entreprise. Derrière son apparente banalité, il transforme pourtant la manière dont un groupe réfléchit et décide.",
        ],
      },
      {
        heading: "Penser avec les yeux",
        paragraphs: [
          "Notre cerveau traite l'information visuelle bien plus vite que le texte. Rendre les idées visibles — sur un mur, un paperboard, une fresque — permet à un groupe de garder une vision d'ensemble, de repérer les liens et de mémoriser durablement. La facilitation graphique s'appuie sur ce principe simple mais puissant.",
        ],
      },
      {
        heading: "Égaliser la parole",
        paragraphs: [
          "Quand chacun écrit ses idées sur des post-it avant de les partager, on évite l'effet « premier qui parle impose le sujet ». Les introvertis contribuent autant que les extravertis, et l'on récolte la diversité réelle du groupe plutôt que l'avis du plus bavard.",
        ],
      },
      {
        heading: "Rendre le raisonnement manipulable",
        paragraphs: [
          "Déplacer, regrouper, hiérarchiser des idées physiquement aide à structurer la pensée collective. On passe d'une discussion abstraite à un objet commun que l'on façonne ensemble — ce qui accélère l'alignement et la décision.",
          "Chez SY&CO, ces outils visuels sont au cœur de nos ateliers : ils ne remplacent pas la réflexion, ils la rendent simplement plus collective et plus lisible.",
        ],
      },
    ],
  },
  {
    slug: "manager-le-collectif-sentiment-impuissance",
    title:
      "Manager le collectif : en finir avec le sentiment d'impuissance des managers",
    image: "/images/articles/art-collaboratif.jpg",
    excerpt:
      "Pris entre les injonctions du haut et les attentes du terrain, de nombreux managers se sentent démunis. Le collaboratif offre une voie de sortie concrète.",
    category: "Management & leadership",
    author: "Omar Sqalli",
    authorRole: "Consultant en transformation organisationnelle",
    date: "2025-12-09",
    dateLabel: "9 décembre 2025",
    readingTime: "5 min",
    content: [
      {
        paragraphs: [
          "Le manager de proximité est aujourd'hui l'un des maillons les plus exposés de l'entreprise. Il porte les décisions qu'il n'a pas prises, absorbe les tensions du terrain et doit maintenir l'engagement… souvent sans levier réel. Ce sentiment d'impuissance a un coût, pour lui comme pour son équipe.",
        ],
      },
      {
        heading: "Du manager héros au manager facilitateur",
        paragraphs: [
          "Longtemps, on a attendu du manager qu'il ait réponse à tout. Ce modèle est épuisant et dépassé. Dans un environnement complexe, le rôle du manager n'est plus de tout savoir, mais de créer les conditions pour que son équipe trouve, ensemble, les meilleures solutions.",
        ],
      },
      {
        heading: "Redonner du pouvoir d'agir",
        paragraphs: [
          "Les approches collaboratives — codéveloppement, ateliers de résolution de problèmes, rituels d'équipe — redonnent au manager un pouvoir d'agir concret :",
        ],
        list: [
          "Le codéveloppement : un groupe de pairs aide un manager à traiter une situation réelle, en quelques étapes structurées.",
          "Les rituels d'équipe : des temps courts et réguliers qui font remonter les irritants et fluidifient la coopération.",
          "La délégation responsabilisante : confier non pas des tâches, mais des objectifs, avec l'autonomie qui va avec.",
        ],
      },
      {
        heading: "Un apprentissage qui se cultive dans le temps",
        paragraphs: [
          "Changer de posture ne se décrète pas en une formation d'une journée. C'est un cheminement, qui s'ancre par la pratique et le soutien entre pairs. Accompagner les managers dans la durée, c'est leur redonner confiance — et à l'organisation, de la performance.",
        ],
      },
    ],
  },
  {
    slug: "team-building-maroc-cohesion-performance",
    title:
      "Team building au Maroc : transformer la cohésion d'équipe en performance durable",
    image: "/images/articles/art-pratiques.jpg",
    excerpt:
      "Entre désert, montagne et médinas, le Maroc offre un terrain de jeu exceptionnel pour le team building. À condition d'en faire un vrai levier managérial.",
    category: "Team building",
    author: "Sylviane KOFFI AMA",
    authorRole: "Directrice Générale",
    date: "2025-11-20",
    dateLabel: "20 novembre 2025",
    readingTime: "5 min",
    content: [
      {
        paragraphs: [
          "Une journée de rafting, un dîner dans le désert, un atelier cuisine : le team building fait rêver. Mais pour qu'il produise plus qu'un bon souvenir, il doit être pensé comme un dispositif de développement de l'équipe, pas seulement comme une sortie.",
        ],
      },
      {
        heading: "Pourquoi la cohésion est un actif stratégique",
        paragraphs: [
          "Une équipe soudée communique mieux, coopère plus vite et traverse les tensions sans se briser. La qualité des relations est l'un des meilleurs prédicteurs de la performance collective — bien avant les compétences individuelles prises séparément.",
        ],
      },
      {
        heading: "Le Maroc, un terrain d'expérience unique",
        paragraphs: [
          "De Marrakech à Agadir, du désert d'Agafay aux vallées de l'Atlas, le pays offre une diversité de décors qui sort les équipes de leur quotidien. Ce dépaysement est un puissant accélérateur : il crée des souvenirs communs forts et abaisse les barrières hiérarchiques.",
        ],
      },
      {
        heading: "Faire le lien avec le quotidien",
        paragraphs: [
          "La clé d'un team building utile tient dans le débriefing : que retenons-nous de cette expérience pour notre façon de travailler ensemble ? Sans ce temps de sens, l'activité reste une parenthèse. Avec lui, elle devient un point d'appui durable.",
          "C'est cette alliance entre émotion et intention qui fait, selon nous, la différence entre un divertissement et un véritable investissement.",
        ],
      },
    ],
  },
  {
    slug: "convention-annuelle-levier-de-culture",
    title:
      "Convention annuelle : faire de votre événement corporate un levier de culture",
    image: "/images/articles/art-axa.jpg",
    excerpt:
      "La convention réunit toute l'entreprise une fois par an. Trop rare pour être gâchée : voici comment en faire un moment fondateur de votre culture.",
    category: "Séminaires & conventions",
    author: "Youssef Amrani",
    authorRole: "Directeur associé, Développement & partenariats",
    date: "2025-10-07",
    dateLabel: "7 octobre 2025",
    readingTime: "5 min",
    content: [
      {
        paragraphs: [
          "La convention annuelle est souvent le seul moment où l'ensemble des collaborateurs se retrouvent physiquement réunis. C'est une occasion unique — et coûteuse — qui mérite bien plus qu'une succession de discours de direction.",
        ],
      },
      {
        heading: "Un moment qui dit qui vous êtes",
        paragraphs: [
          "Tout, dans une convention, parle de la culture de l'entreprise : la manière dont on prend la parole, la place laissée aux équipes, le soin apporté aux détails. Consciemment ou non, chaque collaborateur y lit les valeurs réelles de l'organisation.",
        ],
      },
      {
        heading: "Informer, embarquer, célébrer",
        paragraphs: [
          "Une convention réussie articule trois intentions : partager le cap et les résultats, embarquer les équipes dans les projets à venir, et célébrer les réussites et les personnes. L'équilibre entre ces trois temps évite l'écueil du monologue descendant.",
        ],
      },
      {
        heading: "Faire vivre, pas seulement écouter",
        paragraphs: [
          "Les conventions les plus mémorables font vivre le message plutôt que de l'énoncer : ateliers, mises en situation, prises de parole de collaborateurs, formats interactifs. Ce qui est vécu se retient et s'incarne bien mieux que ce qui est simplement entendu.",
        ],
      },
    ],
  },
  {
    slug: "conduite-du-changement-embarquer-les-equipes",
    title:
      "Conduite du changement : embarquer vos équipes de direction dans la transformation",
    image: "/images/articles/art-fresque.jpg",
    excerpt:
      "70 % des transformations n'atteignent pas leurs objectifs. La cause est rarement technique : elle est humaine. Comment embarquer réellement les équipes.",
    category: "Conduite du changement",
    author: "Omar Sqalli",
    authorRole: "Consultant en transformation organisationnelle",
    date: "2025-09-15",
    dateLabel: "15 septembre 2025",
    readingTime: "6 min",
    content: [
      {
        paragraphs: [
          "Les études sur le sujet convergent depuis des années : une majorité des projets de transformation déçoivent, non pas à cause de la stratégie ou de la technologie, mais parce que les personnes n'ont pas suivi. Conduire le changement, c'est d'abord un travail sur l'humain.",
        ],
      },
      {
        heading: "Comprendre les résistances plutôt que les combattre",
        paragraphs: [
          "La résistance au changement n'est pas de la mauvaise volonté : c'est un signal. Elle exprime une peur, une perte anticipée ou un manque de sens. L'écouter, plutôt que la forcer, permet de lever les vrais freins et de transformer les opposants en contributeurs.",
        ],
      },
      {
        heading: "Donner du sens, encore et encore",
        paragraphs: [
          "Un changement s'accepte quand on en comprend le pourquoi. Le rôle des dirigeants est de raconter inlassablement le sens de la transformation : d'où l'on part, où l'on va, et pourquoi cela vaut l'effort. Le sens ne se communique pas une fois, il se rappelle en continu.",
        ],
        quote:
          "On ne décrète pas l'adhésion : on la construit, en associant les équipes à la définition même du changement.",
      },
      {
        heading: "Associer pour engager",
        paragraphs: [
          "Les personnes soutiennent ce qu'elles ont contribué à bâtir. Impliquer les équipes de direction et le terrain dans la conception des solutions — via des ateliers, des groupes de travail, des expérimentations — est le plus sûr chemin vers une transformation réellement adoptée.",
        ],
      },
    ],
  },
  {
    slug: "culture-entreprise-storytelling-au-vecu",
    title:
      "Culture d'entreprise : du storytelling au vécu, construire une identité forte et engageante",
    image: "/images/articles/art-culture.jpg",
    excerpt:
      "Une culture d'entreprise ne se proclame pas sur un mur : elle se vit au quotidien. Comment passer des valeurs affichées aux comportements réels.",
    category: "Management & leadership",
    author: "Sylviane KOFFI AMA",
    authorRole: "Directrice Générale",
    date: "2025-07-22",
    dateLabel: "22 juillet 2025",
    readingTime: "5 min",
    content: [
      {
        paragraphs: [
          "« Bienveillance », « excellence », « esprit d'équipe » : ces mots ornent les halls d'accueil de nombreuses entreprises. Mais une culture ne se mesure pas à ce qui est affiché — elle se mesure à ce qui est vécu, dans les décisions et les comportements de tous les jours.",
        ],
      },
      {
        heading: "La culture, c'est ce que l'on fait, pas ce que l'on dit",
        paragraphs: [
          "Comme le résume une formule bien connue du management, « la culture, c'est la manière dont les choses se font ici ». Elle se lit dans les détails : qui est promu, ce qui est célébré, ce qui est toléré. L'écart entre les valeurs affichées et la réalité vécue est le premier destructeur d'engagement.",
        ],
      },
      {
        heading: "Le récit, un point de départ… pas une fin",
        paragraphs: [
          "Le storytelling — raconter l'histoire, la raison d'être et la vision de l'entreprise — donne du sens et fédère. Mais un beau récit démenti par les faits devient contre-productif. Le récit doit ouvrir la voie au vécu, pas le remplacer.",
        ],
      },
      {
        heading: "Faire vivre la culture par l'expérience",
        paragraphs: [
          "Séminaires, rituels, symboles, moments partagés : la culture se transmet par l'expérience collective bien plus que par la communication. C'est là que l'événementiel prend tout son sens — en donnant à ressentir, concrètement, l'identité de l'entreprise.",
        ],
      },
    ],
  },
  {
    slug: "methode-disc-mieux-se-connaitre-collaborer",
    title: "Méthode DISC : mieux se connaître pour mieux collaborer en équipe",
    image: "/images/articles/art-disc.jpg",
    excerpt:
      "Rouge, jaune, vert, bleu : le modèle DISC offre un langage simple pour comprendre les différences de comportement et fluidifier la coopération.",
    category: "Formation & pédagogie",
    author: "Hamza Benjelloun",
    authorRole: "Formateur & facilitateur certifié",
    date: "2025-06-11",
    dateLabel: "11 juin 2025",
    readingTime: "5 min",
    content: [
      {
        paragraphs: [
          "Pourquoi certaines personnes vont droit au but quand d'autres prennent le temps de tisser du lien ? Pourquoi tel collègue veut des faits quand tel autre veut de l'enthousiasme ? Le modèle DISC propose une grille de lecture simple et éclairante de ces différences.",
        ],
      },
      {
        heading: "Quatre grandes tendances comportementales",
        paragraphs: [
          "Popularisé à partir des travaux du psychologue William Moulton Marston, le modèle DISC décrit quatre grands styles, souvent représentés par des couleurs :",
        ],
        list: [
          "Dominance (rouge) : orienté résultats, direct, décidé.",
          "Influence (jaune) : orienté relations, enthousiaste, communicant.",
          "Stabilité (vert) : orienté harmonie, à l'écoute, fiable.",
          "Conformité (bleu) : orienté qualité, précis, analytique.",
        ],
      },
      {
        heading: "Un outil de dialogue, pas une étiquette",
        paragraphs: [
          "Attention au piège : le DISC ne sert pas à ranger les gens dans des cases, ni à juger. Chacun combine les quatre styles à des degrés divers. L'intérêt est ailleurs : disposer d'un langage commun pour parler des différences sans se braquer, et adapter sa communication à son interlocuteur.",
        ],
      },
      {
        heading: "Des équipes qui se comprennent mieux",
        paragraphs: [
          "En atelier, la découverte des profils DISC provoque souvent des prises de conscience libératrices : « voilà pourquoi nous ne nous comprenions pas ! ». Les tensions s'apaisent, la coopération gagne en fluidité, et l'équipe transforme sa diversité en force.",
        ],
      },
    ],
  },
];

export const articleTopics: string[] = [
  "Événementiel corporate",
  "Séminaires & conventions",
  "Team building",
  "Formation & pédagogie",
  "Intelligence collective",
  "Conduite du changement",
  "Management & leadership",
  "Actualités SY&CO",
  "Le Maroc qui bouge",
];

export const articleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
