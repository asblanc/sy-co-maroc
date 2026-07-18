import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { Reveal } from "@/components/ui/Reveal";
import { articles, articleBySlug, type Article } from "@/lib/articles";
import { team } from "@/lib/team";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/articles/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      url: `/articles/${a.slug}`,
      images: [{ url: a.image }],
      authors: [a.author],
      publishedTime: a.date,
    },
  };
}

function authorPhoto(name: string) {
  return team.find((m) => m.name === name)?.image;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const url = `${siteConfig.url}/articles/${article.slug}`;
  const photo = authorPhoto(article.author);
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.image}`,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-teal text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-orange/20 blur-3xl" />
        <div className="container-narrow relative py-14 lg:py-20">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/75">
            <Link href="/" className="hover:text-orange">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/nos-articles" className="hover:text-orange">
              Nos Articles
            </Link>
          </nav>
          <span className="inline-block rounded-full bg-orange px-4 py-1.5 text-xs font-bold uppercase tracking-wide">
            {article.category}
          </span>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <span className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full bg-white/20">
                {photo ? (
                  <Image
                    src={photo}
                    alt={article.author}
                    fill
                    sizes="44px"
                    className="object-cover object-top"
                  />
                ) : (
                  <User className="absolute inset-0 m-auto h-6 w-6" />
                )}
              </span>
              <span>
                <span className="block font-heading font-bold">
                  {article.author}
                </span>
                <span className="block text-xs text-white/70">
                  {article.authorRole}
                </span>
              </span>
            </span>
            <span className="text-white/80">{article.dateLabel}</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock className="h-4 w-4" /> {article.readingTime} de lecture
            </span>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <div className="bg-white">
        <div className="container-narrow -mt-8 lg:-mt-12">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1140px) 100vw, 1140px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <article className="bg-white py-12 lg:py-16">
        <div className="container-narrow max-w-3xl">
          <p className="mb-10 border-l-4 border-orange pl-5 text-lg font-medium leading-relaxed text-ink/80">
            {article.excerpt}
          </p>

          {article.content.map((section, i) => (
            <Reveal key={i} className="mb-8">
              {section.heading && (
                <h2 className="mb-4 font-heading text-2xl font-bold text-teal">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs?.map((p, j) => (
                <p key={j} className="mb-4 text-base leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="my-5 space-y-3">
                  {section.list.map((item, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                      <span className="text-base leading-relaxed text-ink/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {section.quote && (
                <blockquote className="my-6 rounded-2xl bg-peach/25 p-6 font-heading text-lg font-semibold italic leading-relaxed text-teal">
                  «&nbsp;{section.quote}&nbsp;»
                </blockquote>
              )}
            </Reveal>
          ))}

          {/* Author + share */}
          <div className="mt-12 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="relative h-14 w-14 overflow-hidden rounded-full bg-teal/10">
                {photo ? (
                  <Image
                    src={photo}
                    alt={article.author}
                    fill
                    sizes="56px"
                    className="object-cover object-top"
                  />
                ) : (
                  <User className="absolute inset-0 m-auto h-7 w-7 text-teal" />
                )}
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-wide text-ink/50">
                  Rédigé par
                </span>
                <span className="block font-heading font-bold text-teal">
                  {article.author}
                </span>
                <span className="block text-sm text-ink/60">
                  {article.authorRole}
                </span>
              </span>
            </div>
            <ShareButtons url={url} title={article.title} />
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-peach/20 py-16 lg:py-20">
        <div className="container-narrow">
          <h2 className="mb-10 text-center text-2xl font-bold text-teal sm:text-3xl">
            À lire également
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <RelatedCard key={a.slug} article={a} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/nos-articles"
              className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-teal hover:text-pink"
            >
              <ArrowLeft className="h-4 w-4" /> Tous les articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function RelatedCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 text-xs font-bold uppercase tracking-wide text-orange">
          {article.category}
        </span>
        <h3 className="mb-4 flex-1 font-heading text-base font-bold leading-snug text-ink">
          {article.title}
        </h3>
        <span className="inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-wide text-pink transition-colors group-hover:text-teal">
          Lire <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
