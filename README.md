# Co'efficience³ — Homepage Recreation

A faithful, production-ready recreation of the [coefficience3.fr](https://coefficience3.fr)
homepage, rebuilt from the original Elementor/WordPress site into a modern
component-based stack.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3.4**
- **Framer Motion** — scroll reveals, entrance & hover animations
- **Lucide React** — icons
- **next/image** & **next/font** — optimized images and self-hosted Google Fonts (Arvo, Open Sans, Artifika)
- **ESLint** (flat config)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Project structure

```
app/
  layout.tsx          # fonts, metadata, <html> shell
  page.tsx            # homepage — composes every section
  globals.css         # Tailwind layers + design tokens
  icon.png            # favicon

components/
  layout/             # TopBar, Header (mega-menu + mobile drawer), Footer
  sections/           # one component per homepage section
    Hero, Expertises, Beliefs, Accompany, Team,
    Method, CaseStudies, Clients, Stats, ContactCTA
  ui/                 # reusable primitives: Button, Reveal

hooks/
  useCountUp.ts       # viewport-triggered number counter (Stats)

lib/
  data.ts             # all copy + asset references (single source of truth)
  utils.ts            # cn() class merge helper

public/images/        # extracted brand assets, client & case-study images
```

## Design tokens

Extracted from the reference site's Elementor global kit:

| Token   | Value     | Usage                    |
| ------- | --------- | ------------------------ |
| teal    | `#007873` | primary brand / headings |
| pink    | `#ED0F7D` | accent / CTAs            |
| blue    | `#1076DA` | expertise accent         |
| yellow  | `#FCD430` | figures / highlights     |
| peach   | `#FFBC7D` | soft section backgrounds |

Headings use **Arvo**; the oversized "Co'designons" display uses **Artifika**;
body copy uses **Open Sans** — matching the original typography.

## Sections reproduced

1. Top bar (phone + address) & sticky header with hover mega-menu
2. Hero — headline, tagline, HappyAtWork badge, team photo, "Co'designons votre réussite" banner
3. Expertises — 5 colour-coded "info +" cards
4. Beliefs — "nous croyons que…"
5. Accompany — "Vous accompagner vers demain" agility checklist
6. Team — "Une équipe à l'esprit collaboratif"
7. Method — IDDEA® 5-step approach
8. Case studies — scrollable carousel with arrow controls
9. Client logo marquee
10. Stats — animated counters + certifications
11. Contact CTA — "Parlons de votre projet"
12. Footer — expertises, coordinates, legal, certifications

## Notes

Images were extracted from the live site and stored under `public/images`.
Placeholder-free where assets were retrievable; all layout proportions match
the original.
