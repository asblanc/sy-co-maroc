/**
 * Galerie « Nos formations en action » (accueil + page « Ils nous font confiance »).
 * Sélection curatée de vraies photos d'événements SY&CO. Pour ajouter/retirer
 * une photo, éditez cette liste (fichiers dans public/images/evenements/).
 * Les gros plans de certificats (noms + infos légales) sont volontairement exclus.
 */
export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean; // tuile large (2 colonnes)
};

const E = "/images/evenements";
const AGRI = `${E}/agriculture-meknes/agriculture-meknes`;
const LEAD = `${E}/leadership-feminin-2025/leadership-feminin-2025`;
const GEST = `${E}/gestion-projet-2024/gestion-projet-2024`;
const EVAL = `${E}/evaluation-impact/evaluation-impact`;

export const galleryPhotos: GalleryPhoto[] = [
  { src: `${EVAL}-05.jpg`, alt: "Groupe de participants d'une formation SY&CO en extérieur", caption: "Cohésion & esprit de promotion", featured: true },
  { src: `${LEAD}-07.jpg`, alt: "Femmes leaders d'Afrique francophone en formation", caption: "Forum des femmes leaders" },
  { src: `${AGRI}-14.jpg`, alt: "Visite d'une plantation lors d'une formation agribusiness", caption: "Visite de plantation — agribusiness" },
  { src: `${GEST}-04.jpg`, alt: "Remise des certificats à un groupe de participants SY&CO", caption: "Remise des certificats" },
  { src: `${LEAD}-04.jpg`, alt: "Atelier leadership et influence", caption: "Atelier leadership & influence" },
  { src: `${AGRI}-15.jpg`, alt: "Visite de cultures sous serre à Meknès", caption: "Cultures sous serre — Meknès" },
  { src: `${EVAL}-01.jpg`, alt: "Participants souriants lors d'une formation SY&CO", caption: "Esprit d'équipe en formation" },
  { src: `${LEAD}-03.jpg`, alt: "Travail en petits groupes lors d'une session", caption: "Échanges en petits groupes" },
  { src: `${AGRI}-10.jpg`, alt: "Session de formation agriculture & agribusiness", caption: "Agriculture & agribusiness" },
  { src: `${GEST}-03.jpg`, alt: "Cocktail de réseautage SY&CO", caption: "Cocktail de réseautage" },
  { src: `${LEAD}-06.jpg`, alt: "Participante au forum des femmes leaders", caption: "Développer son influence" },
  { src: `${AGRI}-13.jpg`, alt: "Visite d'un domaine agricole partenaire", caption: "Benchmarking terrain" },
  { src: `${EVAL}-03.jpg`, alt: "Temps d'échange lors d'une formation", caption: "Temps d'échange" },
  { src: `${LEAD}-08.jpg`, alt: "Promotion du forum Leadership au féminin", caption: "Promotion Leadership au féminin" },
  { src: `${AGRI}-17.jpg`, alt: "Récolte lors d'une visite agricole", caption: "Micro-irrigation & récolte" },
  { src: `${GEST}-05.jpg`, alt: "Moment de convivialité entre participants", caption: "Moment de convivialité" },
  { src: `${LEAD}-05.jpg`, alt: "Session de formation Leadership au féminin", caption: "Session de formation" },
  { src: `${AGRI}-16.jpg`, alt: "Semis et techniques de culture sous serre", caption: "Techniques de culture sous serre" },
  { src: `${EVAL}-07.jpg`, alt: "Participants en fin de formation", caption: "Fin de formation" },
  { src: `${LEAD}-02.jpg`, alt: "Supports de facilitation graphique d'un atelier leadership", caption: "Facilitation graphique" },
  { src: `${AGRI}-03.jpg`, alt: "Formation en salle sur l'agriculture", caption: "Formation en salle" },
  { src: `${EVAL}-04.jpg`, alt: "Remise d'une attestation de formation", caption: "Attestation de formation" },
  { src: `${AGRI}-07.jpg`, alt: "Intervention d'un expert lors d'une formation", caption: "Apports d'experts" },
  { src: `${GEST}-02.jpg`, alt: "Remise de certificat à un participant", caption: "Remise de certificat" },
];
