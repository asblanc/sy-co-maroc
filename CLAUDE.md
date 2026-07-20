# CLAUDE.md — Contexte projet SY&CO

> Ce fichier est chargé automatiquement par Claude Code. Il donne à toute nouvelle
> session le contexte complet du projet. Le **code reste la source de vérité** ;
> ce document en résume l'intention et les décisions.

## 1. Le projet en bref

Site vitrine de **SY&CO** — agence marocaine d'**événementiel d'entreprise** :
séminaires, conventions, team building et **formation** (baseline *Event · Meet · Training*),
au Maroc et à l'international. Basée à Casablanca.

- **Repo GitHub** : https://github.com/asblanc/sy-co-maroc (branche `main`)
- **Déploiement** : Vercel (équipe `zozo-sery-blanchards-projects`, via intégration Git)
- **Origine** : le projet est parti d'un clone de coefficience3.fr, puis **entièrement
  ré-identifié en SY&CO**. ⚠️ Règle d'or : **aucun élément de la référence** (image,
  texte, logo, tournure de phrase, méthode, mention légale, nom de personne) ne doit
  subsister. Tout le contenu doit être **original**.

## 2. Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind 3.4 · Framer Motion ·
Lucide React · Supabase (formulaire de devis) · ESLint (flat config). Déploiement Vercel.

## 3. Identité de marque

- **Vert (teal) `#097D7A`** (couleur principale, issue du logo) et **orange `#FD8B15`** (accent).
- Accents secondaires : rose `#ED0F7D`, bleu `#1076DA`, jaune `#FCD430`, pêche `#FFBC7D`.
- Polices : **Arvo** (titres), **Open Sans** (corps), **Artifika** (display).
- Logo : `public/images/logo2.png`. Favicon : `app/favicon.ico` + `icon.svg`/`icon.png`
  (marque « cible » : anneau blanc + point orange sur fond vert).
- Effet signature : bulles organiques animées (`.blob-a/.blob-b/.blob-arch` dans `globals.css`),
  text-reveal du hero (`components/ui/TextReveal.tsx`).

## 4. Architecture du contenu (où éditer quoi)

- `lib/data.ts` — nav, méga-menu, expertises (home), méthode ÉCLAT (`methodSteps`),
  études de cas, stats, partenaires, réalisations, coordonnées, liens footer/légaux.
- `lib/pages.ts` — **toutes les pages dynamiques** (`/[slug]`) : expertises, études de cas,
  agence, blog, contact, légales, événementiel. Un objet `PageData` par page.
- `lib/articles.ts` — articles de blog (contenu complet + auteurs).
- `lib/team.ts` — équipe (avatars générés + PDG).
- `lib/site.ts` — config SEO globale (URL auto-détectée depuis Vercel, mots-clés, OG).
- `lib/faq.ts` — FAQ (page Événementiel).
- Sections dans `components/sections/`, layout dans `components/layout/`, UI dans `components/ui/`.

## 5. Décisions structurantes (à respecter)

- **Méthode maison = ÉCLAT** (Écoute · Conception · Lancement · Animation · Traces).
  Ne PAS réintroduire « IDDEA » (méthode déposée de la référence).
- **Équipe** : noms fictifs + **avatars à initiales générés** (pas de vraies photos de
  personnes). PDG : **Mme Adjahi Sylviane**. À remplacer par les vrais noms/photos quand fournis.
- **Partenaires** (`partners` dans data.ts) : entreprises marocaines en **tuiles texte**
  (placeholders). Le composant `Clients` affiche un vrai logo si `logo` est renseigné
  (déposer les fichiers dans `public/images/clients/`). N'afficher que de **vrais** clients.
- **Réalisations** (`realizations`) : formats d'événements illustratifs, **sans nom de client réel**.
- **Menu / rubriques** volontairement distincts de la référence : « Nos prestations »,
  « Études de cas », « L'agence », « Le Blog », méga-menu « Conseil & transformation /
  Séminaires & cohésion / Innovation & créativité ».
- **Contenu 100% original** : ne pas recopier de textes/tournures de coefficience3.

## 6. Base de données (Supabase)

- Projet Supabase : `sy-co-maroc` (id `wmsfmmymiwddtmuqhxue`, région `eu-west-3`).
- Table `public.leads` (RLS : insert public uniquement) — colonnes :
  first_name, last_name, email, phone, message, event_type, participants, event_date, source.
- Le formulaire de devis poste sur `app/api/contact/route.ts` (dégrade proprement si non configuré).
- Clés/URL : voir `.env.example`. En prod : variables à définir dans Vercel.

## 7. SEO & a11y

- Metadata par page + `app/sitemap.ts`, `app/robots.ts`, JSON-LD (Organization, WebSite,
  BlogPosting, FAQPage), image OG dédiée (`public/images/og-sy-co.jpg`).
- Skip-link « Aller au contenu » + landmarks `<main id="main-content">`, `prefers-reduced-motion`.
- Images en `next/image`, optimisées ; total `public/images` ≈ 6–7 Mo.

## 8. Commandes

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de prod
npx eslint .     # lint
```

## 9. Reste à faire (côté client, non technique)

- Fournir **RC / ICE / IF** pour les mentions légales (placeholders `[à compléter]`).
- Fournir **vrais noms + photos** de l'équipe (remplacent les avatars).
- Fournir **logos de vrais clients** (mur de partenaires).
- Brancher le **nom de domaine `.ma`** et définir les variables Supabase dans Vercel.

## 10. Workflow attendu de Claude

- Toujours : `npm run build` + `npx eslint .` avant de committer.
- Committer/pusher sur `main` (déclenche le redéploiement Vercel). Attribuer les commits à Asblanc.
- Vérifier qu'aucun élément de la référence ne réapparaît (images, textes, tournures).
