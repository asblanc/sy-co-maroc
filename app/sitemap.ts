import type { MetadataRoute } from "next";
import { pages } from "@/lib/pages";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home: MetadataRoute.Sitemap[number] = {
    url: siteConfig.url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  };

  const rest: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${siteConfig.url}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p.type === "legal" ? 0.3 : 0.8,
  }));

  return [home, ...rest];
}
