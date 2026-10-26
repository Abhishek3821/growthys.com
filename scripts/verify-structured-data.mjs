import fs from "node:fs";
import assert from "node:assert/strict";

const baseline = JSON.parse(fs.readFileSync("reports/seo-audit-2026-10-26.json", "utf8"));
const results = [];
for (const page of baseline.pages) {
  const response = await fetch(`http://127.0.0.1:3000${page.route}`);
  assert.equal(response.status, 200, page.route);
  const html = await response.text();
  const payloads = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  assert.equal(payloads.length, 2, `${page.route}: business and page graphs`);
  const nodes = payloads.flatMap((payload) => {
    assert.equal(payload["@context"], "https://schema.org");
    return payload["@graph"];
  });
  const types = nodes.map((node) => node["@type"]);
  assert.ok(types.includes("Organization"));
  assert.ok(types.includes("WebSite"));
  assert.ok(nodes.some((node) => /Page$/.test(node["@type"])));
  if (page.route !== "/") assert.ok(types.includes("BreadcrumbList"));
  if (/^\/blogs\//.test(page.route)) {
    const article = nodes.find((node) => node["@type"] === "BlogPosting");
    assert.ok(article?.headline && article.image?.length && article.author && article.datePublished);
    assert.equal(article.url, new URL(page.route, "https://www.growthys.com").href);
  }
  if (/^\/portfolio\/projects\//.test(page.route)) {
    assert.ok(types.includes("CreativeWork"));
    assert.ok(!types.includes("SoftwareApplication"), "Concepts are not released apps");
  }
  const ids = nodes.map((node) => node["@id"]).filter(Boolean);
  assert.equal(new Set(ids).size, ids.length, "No duplicate entity definitions");
  for (const node of nodes) {
    assert.ok(!node.aggregateRating && !node.review && !node.offers);
    if (node["@type"] === "BreadcrumbList") {
      node.itemListElement.forEach((item, index) => {
        assert.equal(item.position, index + 1);
        assert.ok(item.name);
        assert.ok(item.item.startsWith("https://www.growthys.com"));
      });
    }
  }
  results.push({ route: page.route, types, valid: true });
}
assert.equal(results.filter((result) => result.types.includes("Service")).length, 15);
assert.equal(results.filter((result) => result.types.includes("BlogPosting")).length, 6);
assert.equal(results.filter((result) => result.types.includes("CreativeWork")).length, 4);
fs.writeFileSync("reports/schema-verification-2026-10-26.json", JSON.stringify({ passed: true, pages: results.length, results }, null, 2));
console.log(`PASS: ${results.length} pages; 15 services, 6 articles, 4 concept projects, 33 breadcrumbs, and business/site entities.`);
