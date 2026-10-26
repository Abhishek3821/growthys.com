import { socialLinks } from "../data/social-links";

export const SITE_URL = "https://www.growthys.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const absoluteUrl = (pathname: string) => new URL(pathname, SITE_URL).href;

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const businessGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": ORGANIZATION_ID,
      name: "Growthys", url: `${SITE_URL}/`,
      description: "Digital marketing and IT solutions company in Gurugram, Haryana, India.",
      email: "growthysofficial@gmail.com", telephone: "+919625663269",
      address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
      sameAs: socialLinks.map(({ href }) => href),
    },
    { "@type": "WebSite", "@id": WEBSITE_ID, url: `${SITE_URL}/`, name: "Growthys", inLanguage: "en", publisher: { "@id": ORGANIZATION_ID } },
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })),
  };
}
