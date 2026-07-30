FICHES TECHNIQUES DES THÉMATIQUES (à fournir)
=============================================

Déposez ici les fiches techniques PDF de chaque thématique d'expertise,
puis renseignez le chemin dans lib/pages.ts (tableau `thematicSpecs`) :

  {
    slug: "finance-publique-verte-durable",
    ...
    datasheet: "/fiches/finance-publique-verte-durable.pdf",   <-- ajoutez cette ligne
  },

Tant que `datasheet` est absent (ou vide), la page affiche un bouton
« Demander la fiche » (vers /contact). Dès qu'un PDF est renseigné, le
bouton devient « Télécharger la fiche (PDF) ».

Nom de fichier conseillé = le slug de la thématique :
- finance-publique-verte-durable.pdf
- leadership-transformation-digitale.pdf
- gouvernance-audit-conformite.pdf
- rh-strategique-data-rh.pdf
- gestion-projet-suivi-evaluation.pdf
- rse-developpement-durable.pdf
- agriculture-agribusiness.pdf
