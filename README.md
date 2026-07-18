# SY&CO — Cabinet de conseil en management & innovation (Maroc)

Site vitrine de **SY&CO** (Event · Meet · Training), cabinet marocain spécialisé
en stratégie, management, transformation des organisations, intelligence
collective et formation.

Repo : https://github.com/asblanc/sy-co-maroc

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion** — reveals au scroll, parallax, barre de progression
- **Lucide React**, **next/image**, **next/font**
- **Supabase** — capture des leads du formulaire de contact
- **ESLint** (flat config)

## Démarrage

```bash
npm install
cp .env.example .env.local   # renseigner les variables
npm run dev                  # http://localhost:3000
npm run build && npm run start
```

## Variables d'environnement

| Variable | Rôle |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL publique (canonical, sitemap, Open Graph) |
| `NEXT_PUBLIC_SUPABASE_URL` | URL du projet Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé publishable/anon Supabase |

Sans les variables Supabase, le formulaire fonctionne quand même (dégradation
gracieuse) mais n'enregistre pas les messages.

## Base de données (Supabase)

Table `public.leads` (RLS activée — **insert public uniquement**, lecture
réservée au propriétaire via le dashboard) :

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  message text not null,
  source text default 'contact_form'
);
alter table public.leads enable row level security;
create policy "public_contact_insert" on public.leads
  for insert to anon, authenticated with check (true);
```

Le formulaire poste sur `app/api/contact/route.ts`, qui valide puis insère via
la clé anon (protégée par la policy RLS).

## Déploiement Vercel (intégration Git — recommandé)

1. Vercel → **Add New → Project → Import Git Repository** → `asblanc/sy-co-maroc`.
2. Framework détecté : **Next.js** (aucune config à changer).
3. **Environment Variables** : ajouter les 3 variables ci-dessus.
4. **Deploy**. Chaque `git push` sur `main` redéploie automatiquement.

## Structure

```
app/
  layout.tsx            # fonts, metadata SEO, JSON-LD, barre de progression
  page.tsx              # page d'accueil
  [slug]/page.tsx       # 21 pages dynamiques (SSG) — expertises, cas, équipe, articles…
  api/contact/route.ts  # endpoint du formulaire (Supabase)
  sitemap.ts, robots.ts # SEO
components/
  layout/  sections/  ui/
lib/
  data.ts pages.ts team.ts articles.ts site.ts supabase.ts utils.ts
public/images/          # visuels optimisés
```

## SEO

- Metadata par page (title/description/canonical/OpenGraph/Twitter)
- `sitemap.xml` + `robots.txt` générés
- JSON-LD `ProfessionalService` + `WebSite`
- `lang="fr-MA"`, mots-clés Maroc, images optimisées (LCP)

## Identité

Charte alignée sur le logo **SY&CO** : vert `#097D7A` + orange `#FD8B15`.
