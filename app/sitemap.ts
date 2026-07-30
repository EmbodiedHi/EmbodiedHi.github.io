import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://embodied-human-intelligence.openai.site";
  return ["", "/research", "/team", "/publications", "/news"].map(route => ({ url: `${base}${route}`, lastModified: new Date() }));
}
