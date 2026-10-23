import { seoContent } from "../data/seo-content";
import Link from "next/link";
import styles from "./seo-services.module.css";

const services = seoContent.services.items.map((item, index) => ({ ...item, icon: ["target", "social", "people", "project", "design"][index], featured: index === 0 }));
function ServiceIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "target" && <><rect x="3" y="4" width="22" height="20" rx="3"/><path d="M3 9h22m-14 5-3 3 3 3m6-6 3 3-3 3m-2-7-2 8"/></>}
    {name === "social" && <><rect x="4" y="3" width="20" height="22" rx="2"/><path d="M8 8h12M8 12h7M8 17h12M8 21h8m-5-6v9m5-9v9"/></>}
    {name === "people" && <><circle cx="12" cy="12" r="8"/><path d="m18 18 7 7M8 10h8m-8 4h5"/></>}
    {name === "project" && <><rect x="3" y="4" width="22" height="20" rx="2"/><path d="M3 10h22M9 10v14m5-9h6m-6 4h4"/></>}
    {name === "design" && <><path d="m11 17-2 2a5 5 0 0 1-7-7l5-5a5 5 0 0 1 7 0m3 4 2-2a5 5 0 0 1 7 7l-5 5a5 5 0 0 1-7 0M9 19 19 9"/></>}
  </svg>;
}
export default function SeoServices() {
  return <section className={styles.section} aria-labelledby="seo-services-heading"><div className={styles.grid}>
    <header className={styles.intro}><h2 id="seo-services-heading">{seoContent.services.title}</h2><p>{seoContent.services.intro}</p><Link href="/contact#contact-inquiry" className={styles.talk}>Let’s talk</Link></header>
    {services.map(service => <article key={service.title} className={`${styles.card} ${service.featured ? styles.featured : ""}`}><h3><ServiceIcon name={service.icon}/>{service.title}</h3><p>{service.description}</p><Link href="/contact#contact-inquiry" aria-label={`Read more about ${service.title}`}>Read more</Link></article>)}
  </div></section>;
}
