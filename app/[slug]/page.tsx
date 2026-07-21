import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/layout/PageHero";
import { PageNav } from "@/components/layout/PageNav";
import { Prose } from "@/components/ui/Prose";
import { Button } from "@/components/ui/Button";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Clients } from "@/components/sections/Clients";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  NeedsChecklist,
  ServicesGrid,
} from "@/components/sections/ExpertiseSections";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { ArticlesGrid } from "@/components/sections/ArticlesGrid";
import { Highlights } from "@/components/sections/Highlights";
import { Faq } from "@/components/sections/Faq";
import { Parallax } from "@/components/ui/Parallax";
import { pages, pageBySlug, getSiblings, type PageData } from "@/lib/pages";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) return {};
  const ogImage = page.heroImage || page.introImage || page.image;
  return {
    title: page.h1,
    description: page.description || undefined,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "article",
      title: page.h1,
      description: page.description || undefined,
      url: `/${page.slug}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) notFound();

  const { prev, next } = getSiblings(page.slug);
  const categoryHref =
    page.type === "case-detail"
      ? "/nos-cas-clients"
      : page.type === "content"
        ? "/#expertises"
        : undefined;

  return (
    <>
      <Header />
      <PageHero
        title={page.h1}
        category={page.category}
        categoryHref={categoryHref}
        image={page.heroImage}
      />
      <main id="main-content">{renderBody(page)}</main>
      <PageNav prev={prev} next={next} />
      <Footer />
    </>
  );
}

/* ---------- body templates by page type ---------- */

function renderBody(page: PageData) {
  switch (page.type) {
    case "cases-index":
      return <CasesIndexBody page={page} />;
    case "case-detail":
      return <CaseDetailBody page={page} />;
    case "about":
      return <AboutBody page={page} />;
    case "articles":
      return <ArticlesBody />;
    case "contact":
      return <ContactBody page={page} />;
    case "legal":
      return <LegalBody page={page} />;
    default:
      return <ContentBody page={page} />;
  }
}

function ContactCta() {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-4 rounded-3xl bg-peach/25 p-8">
      <p className="flex-1 font-heading text-lg font-bold text-teal">
        Un projet en tête pour vos équipes&nbsp;?
      </p>
      <Button href="/contact" variant="pink" size="lg">
        Contactez-nous
      </Button>
    </div>
  );
}

function IntroBlock({ page }: { page: PageData }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2">
        {/* colored square with circular image */}
        <div className="relative order-2 lg:order-1">
          <Parallax offset={28}>
            <div className="relative mx-auto aspect-square w-full max-w-[440px] rounded-[2rem] bg-orange/90">
              <div className="absolute inset-6 overflow-hidden rounded-full shadow-xl">
                <Image
                  src={page.introImage!}
                  alt={page.h1}
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                />
              </div>
            </div>
          </Parallax>
        </div>

        {/* colorful heading + subheading + text */}
        <div className="order-1 lg:order-2">
          <h2 className="bg-gradient-to-r from-pink via-orange to-teal bg-clip-text text-3xl font-bold uppercase leading-tight text-transparent sm:text-4xl">
            {page.introHeading}
          </h2>
          {page.introSubheading && (
            <p className="mt-1 font-heading text-2xl font-bold text-teal sm:text-3xl">
              {page.introSubheading}
            </p>
          )}
          <div className="mt-6">
            <Prose paragraphs={page.paragraphs} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentBody({ page }: { page: PageData }) {
  const hasIntro = Boolean(page.introHeading && page.introImage);
  const hasRichBody = Boolean(
    (page.services && page.services.length) ||
      (page.highlights && page.highlights.length)
  );

  return (
    <>
      {hasIntro ? (
        <IntroBlock page={page} />
      ) : (
        <section className="bg-white py-16 lg:py-24">
          <div className="container-narrow max-w-3xl">
            <Prose paragraphs={page.paragraphs} />
          </div>
        </section>
      )}

      {page.needs && page.needs.length > 0 && (
        <NeedsChecklist
          items={page.needs}
          eyebrow={page.needsEyebrow}
          title={page.needsTitle}
        />
      )}
      {page.services && page.services.length > 0 && (
        <ServicesGrid
          services={page.services}
          eyebrow={page.servicesEyebrow}
          title={page.servicesTitle}
        />
      )}
      {page.highlights && page.highlights.length > 0 && (
        <Highlights items={page.highlights} />
      )}
      {page.slug === "form-action" && <Faq />}

      {hasRichBody ? (
        <>
          {page.services && page.services.length > 0 && <CaseStudies />}
          <ContactCTA />
        </>
      ) : (
        <section className="bg-white pb-16 lg:pb-24">
          <div className="container-narrow max-w-4xl">
            <ContactCta />
          </div>
        </section>
      )}
    </>
  );
}

function LegalBody({ page }: { page: PageData }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow max-w-3xl">
        {page.paragraphs.map((p, i) =>
          p.startsWith("## ") ? (
            <h2
              key={i}
              className="mb-3 mt-8 font-heading text-xl font-bold text-teal first:mt-0"
            >
              {p.slice(3)}
            </h2>
          ) : (
            <p key={i} className="mb-4 text-sm leading-relaxed text-ink/75">
              {p}
            </p>
          )
        )}
      </div>
    </section>
  );
}

function AboutBody({ page }: { page: PageData }) {
  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="container-narrow grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-heading text-2xl font-bold text-teal sm:text-3xl">
              Notre histoire, notre mission
            </h2>
            <Prose paragraphs={page.paragraphs} />
          </div>
          <div className="relative">
            <span className="absolute -right-5 -top-5 z-0 h-28 w-28 rounded-full bg-orange/70" />
            <div className="blob-a relative overflow-hidden shadow-xl">
              <Image
                src="/images/equipe1.jpg"
                alt="L'équipe SY&CO"
                width={620}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <LeadershipAxes />
      <PdgSpotlight />
      <TeamGrid />
      <Clients />
    </>
  );
}

const leadershipAxes = [
  {
    n: "01",
    title: "Le leadership de soi",
    description:
      "Self leadership, intelligence émotionnelle et connaissance de soi : la première marche pour inspirer les autres.",
    color: "#097D7A",
  },
  {
    n: "02",
    title: "Le leadership interpersonnel",
    description:
      "Animer des équipes, gérer la transformation et adopter une posture de coach au service du collectif.",
    color: "#ED0F7D",
  },
  {
    n: "03",
    title: "Le leadership business",
    description:
      "Management stratégique, innovation et transformation organisationnelle pour conduire vers l'excellence.",
    color: "#FD8B15",
  },
];

function LeadershipAxes() {
  return (
    <section className="bg-peach/20 py-16 lg:py-24">
      <div className="container-narrow">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Notre approche
          </p>
          <h2 className="mt-1 text-3xl font-bold text-teal sm:text-4xl">
            Les 3 axes du leadership SY&amp;CO
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {leadershipAxes.map((axe) => (
            <div
              key={axe.n}
              className="flex flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <span
                className="mb-5 font-display text-4xl font-bold"
                style={{ color: axe.color }}
              >
                {axe.n}
              </span>
              <h3 className="mb-3 font-heading text-lg font-bold text-teal">
                {axe.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/70">
                {axe.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PdgSpotlight() {
  return (
    <section className="bg-teal py-16 text-white lg:py-24">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-[380px]">
          <span className="absolute -left-5 -top-5 z-0 h-28 w-28 rounded-full bg-orange" />
          <div className="blob-b relative aspect-square overflow-hidden shadow-2xl">
            <Image
              src="/images/team/pdg.jpg"
              alt="Directrice Générale de SY&CO"
              fill
              sizes="(max-width: 1024px) 90vw, 380px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-orange">
            Le mot de la Directrice Générale
          </p>
          <blockquote className="text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">
            «&nbsp;Notre mission va au-delà de la formation : nous portons
            l’ambition d’une transformation panafricaine, portée par des cadres
            et dirigeants capables d’impulser le changement dans leurs
            organisations et, plus largement, dans leurs pays. Chaque programme
            que nous concevons est pensé pour ancrer des compétences durables,
            au service d’une Afrique qui construit elle-même les dirigeants de
            sa réussite.&nbsp;»
          </blockquote>
          <p className="mt-6 font-heading text-lg font-bold">
            Sylviane KOFFI AMA
            <span className="mt-0.5 block text-sm font-normal text-white/70">
              Directrice Générale · SY&amp;CO
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ArticlesBody() {
  return <ArticlesGrid />;
}

function ContactBody({ page }: { page: PageData }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-narrow">
        <ContactForm />
        {page.paragraphs.length > 1 && (
          <p className="mt-10 text-center text-sm text-ink/60">
            {page.paragraphs[0]}
          </p>
        )}
      </div>
    </section>
  );
}

function CasesIndexBody({ page }: { page: PageData }) {
  return (
    <>
      <section className="bg-white pt-16 lg:pt-24">
        <div className="container-narrow max-w-3xl">
          <Prose paragraphs={page.paragraphs.slice(0, 1)} />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-narrow grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {caseStudies.map((cs) => (
            <article
              key={cs.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <Link
                href={cs.href}
                className="relative block h-56 overflow-hidden"
              >
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {cs.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-pink px-3 py-1 text-xs font-bold uppercase text-white">
                    {cs.tag}
                  </span>
                )}
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-wide text-teal">
                  {cs.category}
                </p>
                <h3 className="mb-6 flex-1 font-heading text-lg font-bold leading-snug text-ink">
                  {cs.title}
                </h3>
                <Link
                  href={cs.href}
                  className="inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-wide text-pink transition-colors hover:text-teal"
                >
                  En savoir <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Clients />
    </>
  );
}

function CaseDetailBody({ page }: { page: PageData }) {
  const [metaPara, ...rest] = page.paragraphs;
  const meta = parseMeta(metaPara ?? "");
  const body = meta.length ? rest : page.paragraphs;

  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="container-narrow grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {page.image && (
              <div className="mb-10 overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src={page.image}
                  alt={page.h1}
                  width={860}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            <Prose paragraphs={body} />
            <div className="mt-10">
              <Button href="/nos-cas-clients" variant="outline">
                <ArrowLeft className="h-4 w-4" /> Tous les cas clients
              </Button>
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-teal p-8 text-white lg:sticky lg:top-28">
            <h3 className="mb-6 font-heading text-lg font-bold">
              Le projet en bref
            </h3>
            <dl className="space-y-4 text-sm">
              {meta.length ? (
                meta.map((m) => (
                  <div key={m.label}>
                    <dt className="font-bold text-orange">{m.label}</dt>
                    <dd className="text-white/90">{m.value}</dd>
                  </div>
                ))
              ) : (
                <p className="text-white/90">{page.category}</p>
              )}
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}

/* Parse "Structure : … Secteur : … Effectif : … Mission : …" into pairs. */
function parseMeta(text: string): { label: string; value: string }[] {
  const labels = ["Structure", "Secteur", "Effectif", "Mission"];
  const found: { label: string; value: string }[] = [];
  const positions = labels
    .map((l) => ({ l, i: text.indexOf(l + " :") }))
    .filter((p) => p.i >= 0)
    .sort((a, b) => a.i - b.i);

  positions.forEach((p, idx) => {
    const start = p.i + (p.l + " :").length;
    const end =
      idx + 1 < positions.length ? positions[idx + 1].i : text.length;
    found.push({ label: p.l, value: text.slice(start, end).trim() });
  });
  return found;
}
