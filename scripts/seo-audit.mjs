import fs from "node:fs";
import path from "node:path";

const base = process.env.SEO_AUDIT_BASE || "http://127.0.0.1:3000";
const reportPath = process.env.SEO_AUDIT_REPORT || "reports/seo-audit-2026-10-26.json";
try {
  await fetch(new URL("/", base), { signal: AbortSignal.timeout(45000) });
} catch (error) {
  throw new Error(`Cannot audit ${base}: local server unavailable (${error.cause?.message || error.message}). Start the server or set SEO_AUDIT_BASE.`);
}
const read = (file) => fs.readFileSync(file, "utf8");
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}
const decode = (value = "") => value.replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_, hex, dec) => String.fromCodePoint(parseInt(hex || dec, hex ? 16 : 10))).replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const text = (value = "") => decode(value.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
function attrs(tag) {
  const result = {};
  for (const item of tag.matchAll(/([^\s=<>/]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) result[item[1].toLowerCase()] = decode(item[2] ?? item[3] ?? item[4]);
  return result;
}
const tags = (html, name) => Array.from(html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi")), (m) => attrs(m[0]));
const routes = walk("app").filter((file) => path.basename(file) === "page.tsx" && !file.includes("[")).map((file) => "/" + path.dirname(file).split(path.sep).slice(1).join("/"));
for (const match of read("app/data/blog-posts.ts").matchAll(/\bid:\s*"([^"]+)"/g)) routes.push(`/blogs/${match[1]}`);
for (const match of read("app/portfolio/projects-data.ts").matchAll(/\bslug:\s*"([^"]+)"/g)) routes.push(`/portfolio/projects/${match[1]}`);
const rows = new Map();
const rawAssets = new Map();
async function inspect(route) {
  const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(45000), redirect: "follow" });
  const raw = await response.text();
  const schemas = [];
  for (const match of raw.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (attrs(match[1]).type === "application/ld+json") {
      try { schemas.push(JSON.parse(match[2])); } catch { schemas.push({ invalid: true }); }
    }
  }
  const html = raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "").replace(/<!--[\s\S]*?-->/g, "");
  const meta = tags(html, "meta");
  const links = tags(html, "link");
  const anchors = Array.from(html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi), (match) => {
    const attributes = attrs(match[1]);
    return { href: attributes.href, text: text(match[2]), ariaLabel: attributes["aria-label"], imageAlt: tags(match[2], "img")[0]?.alt };
  }).filter((anchor) => anchor.href);
  const images = tags(html, "img");
  const missingAssets = [];
  for (const image of images) {
    let source = image.src || "";
    if (source.startsWith("/_next/image")) source = new URL(source, base).searchParams.get("url") || source;
    if (source.startsWith("/images/")) {
      const localFile = path.join("public", decodeURIComponent(source.split("?")[0]));
      if (!fs.existsSync(localFile)) missingAssets.push(source);
      else rawAssets.set(source, { bytes: fs.statSync(localFile).size, source });
    }
  }
  const headings = (level) => Array.from(html.matchAll(new RegExp(`<h${level}\\b[^>]*>([\\s\\S]*?)<\\/h${level}>`, "gi")), (match) => text(match[1]));
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || html;
  return {
    route, status: response.status, title: text(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]),
    description: meta.find((item) => item.name?.toLowerCase() === "description")?.content || "",
    canonical: links.find((item) => item.rel === "canonical")?.href || "",
    robots: meta.find((item) => item.name?.toLowerCase() === "robots")?.content || "",
    xRobotsTag: response.headers.get("x-robots-tag"),
    openGraph: Object.fromEntries(meta.filter((item) => item.property?.startsWith("og:")).map((item) => [item.property, item.content])),
    twitter: Object.fromEntries(meta.filter((item) => item.name?.startsWith("twitter:")).map((item) => [item.name, item.content])),
    h1: headings(1), h2: headings(2), schemas, htmlBytes: Buffer.byteLength(raw),
    mainWordCount: text(main).split(/\s+/).filter(Boolean).length,
    imageCount: images.length, imagesMissingAlt: images.filter((image) => !("alt" in image)).length,
    emptyAltImages: images.filter((image) => image.alt === "").length,
    imagesMissingDimensions: images.filter((image) => !image.width || !image.height).map((image) => image.src),
    missingAssets: [...new Set(missingAssets)], anchors,
    emptyLinks: anchors.filter((anchor) => !anchor.text && !anchor.ariaLabel && !anchor.imageAlt),
    placeholderLinks: anchors.filter((anchor) => anchor.href === "#"),
    ids: Array.from(html.matchAll(/\bid="([^"]+)"/g), (match) => decode(match[1])),
    fontPreloadCount: links.filter((item) => item.rel === "preload" && item.as === "font").length,
  };
}
const queue = [...new Set(routes)].sort();
let complete = 0;
async function worker() {
  while (queue.length) {
    const route = queue.shift();
    try { rows.set(route, await inspect(route)); }
    catch (error) { rows.set(route, { route, error: error.message, cause: error.cause?.message }); }
    complete++;
    if (complete % 5 === 0) console.log(`Audited ${complete}/${routes.length} pages`);
  }
}
await Promise.all([worker(), worker()]);
const extra = new Set(["/robots.txt", "/sitemap.xml", "/not-a-real-page-seo-audit", "/blogs/not-a-real-article", "/portfolio/projects/not-a-real-project"]);
for (const row of rows.values()) {
  for (const anchor of row.anchors || []) {
    try {
      const target = new URL(anchor.href, new URL(row.route, base));
      if (target.origin !== new URL(base).origin || rows.has(target.pathname)) continue;
      if (fs.existsSync(path.join("public", decodeURIComponent(target.pathname)))) continue;
      if (!/\.(pdf|jpg|png|webp|svg|zip)$/i.test(target.pathname)) extra.add(target.pathname);
    } catch { /* Invalid URLs are reviewed separately. */ }
  }
}
for (const route of extra) {
  try { rows.set(route, await inspect(route)); }
  catch (error) { rows.set(route, { route, error: error.message }); }
}
const brokenLinks = [];
const brokenFragments = [];
const inbound = new Map(routes.map((route) => [route, new Set()]));
for (const row of rows.values()) {
  if (!routes.includes(row.route)) continue;
  for (const anchor of row.anchors || []) {
    try {
      const target = new URL(anchor.href, new URL(row.route, base));
      if (target.origin !== new URL(base).origin) continue;
      const destination = rows.get(target.pathname);
      if (row.route !== target.pathname) inbound.get(target.pathname)?.add(row.route);
      if (destination?.status >= 400) brokenLinks.push({ from: row.route, href: anchor.href, status: destination.status });
      else if (target.hash && target.hash !== "#" && destination?.ids && !destination.ids.includes(decodeURIComponent(target.hash.slice(1)))) brokenFragments.push({ from: row.route, href: anchor.href });
    } catch { brokenLinks.push({ from: row.route, href: anchor.href, error: "invalid URL" }); }
  }
}
const pages = routes.map((route) => rows.get(route));
const duplicates = (key) => Object.entries(Object.groupBy(pages.filter((row) => row[key]), (row) => row[key])).filter(([, group]) => group.length > 1).map(([value, group]) => ({ value, routes: group.map((row) => row.route) }));
const summary = {
  pages: pages.length, successful: pages.filter((row) => row.status === 200).length,
  missingTitles: pages.filter((row) => !row.title).map((row) => row.route),
  missingDescriptions: pages.filter((row) => !row.description).map((row) => row.route),
  missingCanonicals: pages.filter((row) => !row.canonical).length,
  missingOpenGraph: pages.filter((row) => !row.openGraph?.["og:title"]).length,
  missingStructuredData: pages.filter((row) => !row.schemas?.length).length,
  missingH1: pages.filter((row) => row.h1?.length === 0).map((row) => row.route),
  multipleH1: pages.filter((row) => row.h1?.length > 1).map((row) => ({ route: row.route, h1: row.h1 })),
  noindex: pages.filter((row) => /noindex/i.test((row.robots || "") + (row.xRobotsTag || ""))).map((row) => row.route),
  duplicateTitles: duplicates("title"), duplicateDescriptions: duplicates("description"),
  longDescriptions: pages.filter((row) => row.description?.length > 180).map((row) => ({ route: row.route, characters: row.description.length })),
  imageAltMissing: pages.reduce((sum, row) => sum + (row.imagesMissingAlt || 0), 0),
  missingImageFiles: pages.filter((row) => row.missingAssets?.length).map((row) => ({ route: row.route, assets: row.missingAssets })),
  orphanPages: [...inbound].filter(([, sources]) => sources.size === 0).map(([route]) => route),
  brokenLinks, brokenFragments,
};
const report = { date: "2026-10-26", base, method: "Source inventory plus server-response HTML checks; no JavaScript execution or real-user performance measurements.", summary, pages, extraResponses: [...extra].map((route) => rows.get(route)), largestReferencedOriginalImages: [...rawAssets.values()].sort((a, b) => b.bytes - a.bytes).slice(0, 20) };
fs.mkdirSync(path.dirname(reportPath), { recursive: true });
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify(summary, null, 2));
console.log(`Saved ${reportPath}`);
