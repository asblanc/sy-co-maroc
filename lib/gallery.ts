/**
 * Galerie « Nos formations en action » (page « Ils nous font confiance »).
 * Sélection curatée de vraies photos d'événements SY&CO. Pour ajouter/retirer
 * une photo, éditez simplement cette liste (fichiers dans public/images/evenements/).
 */
export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean; // tuile large (2 colonnes)
};

const E = "/images/evenements";

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: `${E}/evaluation-impact/evaluation-impact-05.jpg`,
    alt: "Groupe de participants d'une formation SY&CO",
    caption: "Cohésion & esprit de promotion",
    featured: true,
  },
  {
    src: `${E}/leadership-feminin-2025/leadership-feminin-2025-06.jpg`,
    alt: "Participante lors du forum des femmes leaders",
    caption: "Forum des femmes leaders",
  },
  {
    src: `${E}/leadership-feminin-2025/leadership-feminin-2025-04.jpg`,
    alt: "Atelier leadership & influence",
    caption: "Atelier leadership & influence",
  },
  {
    src: `${E}/agriculture-meknes/agriculture-meknes-10.jpg`,
    alt: "Participant en formation agriculture & agribusiness à Meknès",
    caption: "Agriculture & agribusiness — Meknès",
  },
  {
    src: `${E}/leadership-feminin-2025/leadership-feminin-2025-07.jpg`,
    alt: "Femmes leaders d'Afrique francophone en formation",
    caption: "Leadership au féminin",
  },
  {
    src: `${E}/gestion-projet-2024/gestion-projet-2024-01.jpg`,
    alt: "Remise de certificat SY&CO",
    caption: "Remise des certificats",
  },
  {
    src: `${E}/leadership-feminin-2025/leadership-feminin-2025-03.jpg`,
    alt: "Travail en petits groupes lors d'une session SY&CO",
    caption: "Échanges en petits groupes",
  },
  {
    src: `${E}/evaluation-impact/evaluation-impact-03.jpg`,
    alt: "Temps d'échange lors d'une formation SY&CO",
    caption: "Temps d'échange en formation",
  },
  {
    src: `${E}/agriculture-meknes/agriculture-meknes-08.jpg`,
    alt: "Un participant à une formation résidentielle SY&CO",
    caption: "Un participant, un plan d'action",
  },
];
