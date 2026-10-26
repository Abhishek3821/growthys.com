import type { Metadata } from "next";
import { growthysShowcaseContent } from "../data/growthys-showcase-content";
import { absoluteUrl, breadcrumbSchema, ORGANIZATION_ID, serializeJsonLd, WEBSITE_ID } from "../lib/structured-data";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}

export function PageStructuredData({ path, metadata }: { path: string; metadata: Metadata }) {
  const title = typeof metadata.title === "string" ? metadata.title : "Growthys";
  const name = title.replace(/\s*\| Growthys.*$/, "");
  const url = absoluteUrl(path);
  const service = growthysShowcaseContent.services.items.find((item) => item.href === path);
  const type = path === "/contact" ? "ContactPage" : path === "/insights" ? "AboutPage" : ["/blogs", "/portfolio", "/portfolio/projects"].includes(path) ? "CollectionPage" : "WebPage";
  const graph: Record<string, unknown>[] = [{
    "@type": type, "@id": `${url}#webpage`, url, name, description: metadata.description,
    inLanguage: "en", isPartOf: { "@id": WEBSITE_ID }, about: { "@id": ORGANIZATION_ID },
    ...(service ? { mainEntity: { "@id": `${url}#service` } } : {}),
  }];
  if (path !== "/") {
    const items = [{ name: "Home", path: "/" }];
    if (path === "/portfolio/projects") items.push({ name: "Portfolio", path: "/portfolio" });
    items.push({ name, path });
    graph.push(breadcrumbSchema(items));
  }
  if (service) graph.push({ "@type": "Service", "@id": `${url}#service`, url, name: service.title, serviceType: service.title, description: metadata.description, provider: { "@id": ORGANIZATION_ID } });
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
