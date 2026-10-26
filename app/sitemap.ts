import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog-posts";
import { growthysShowcaseContent } from "./data/growthys-showcase-content";
import { absoluteUrl } from "./lib/structured-data";
import { projects } from "./portfolio/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/insights", "/blogs", "/contact", "/portfolio", "/portfolio/projects",
    "/help-support", "/privacy-policy", "/terms-conditions",
    ...growthysShowcaseContent.services.items.map(({ href }) => href),
    ...blogPosts.map(({ id }) => `/blogs/${id}`),
    ...projects.map(({ slug }) => `/portfolio/projects/${slug}`),
  ];

  // Omit lastModified until actual content revision dates are tracked.
  return [...new Set(paths)].map((path) => ({ url: absoluteUrl(path) }));
}
