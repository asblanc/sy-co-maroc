import type { MetadataRoute } from "next";
import { pages } from "@/lib/pages";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  };

  const rest: MetadataRoute.Sitemap = pages
    .filter((p) => !p.noindex)
    .map((p) => ({
      url: `${siteConfig.url}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: p.type === "legal" ? 0.3 : 0.8,
    }));

  const posts: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteConfig.url}/articles/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [home, ...rest, ...posts];
}
