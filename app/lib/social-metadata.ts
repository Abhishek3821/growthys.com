import type { Metadata } from "next";
import { absoluteUrl } from "./structured-data";
import { seoDescriptions } from "../data/seo-descriptions";

type Options = { image?: string; imageAlt?: string; publishedTime?: string; author?: string };

export function withSocialMetadata(metadata: Metadata, path: string, options: Options = {}): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : "Growthys";
  const description = seoDescriptions[path] ?? metadata.description ?? "Digital marketing and IT solutions by Growthys.";
  const image = absoluteUrl(options.image ?? "/share-image");
  const alt = options.imageAlt ?? "Growthys — Digital marketing, design and technology. Built to grow.";
  return {
    ...metadata,
    description,
    openGraph: {
      title, description, url: absoluteUrl(path), siteName: "Growthys", locale: "en_IN",
      ...(options.publishedTime ? { type: "article" as const, publishedTime: options.publishedTime, authors: [options.author ?? "Growthys"] } : { type: "website" as const }),
      images: [{ url: image, alt, ...(!options.image ? { width: 1200, height: 630 } : {}) }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: image, alt }] },
  };
}
