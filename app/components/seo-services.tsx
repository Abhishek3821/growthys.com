import Link from "next/link";
import styles from "./seo-services.module.css";

const services = [
  { title: "Google Ads", icon: "target", featured: true },
  { title: "Social media", icon: "social" },
  { title: "Human resources", icon: "people" },
  { title: "Project management", icon: "project" },
  { title: "Design", icon: "design" },
];
function ServiceIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "target" && <><circle cx="14" cy="14" r="10"/><circle cx="14" cy="14" r="5"/><path d="m14 14 9-9M20 5h3v3"/></>}
    {name === "social" && <><path d="m14 3 10 6v10l-10 6-10-6V9l10-6ZM4 9l10 6 10-6M14 15v10M9 6l10 6"/></>}
    {name === "people" && <><circle cx="10" cy="9" r="4"/><path d="M2 24v-4a8 8 0 0 1 16 0v4M20 5a4 4 0 0 1 0 8m1 4c4 0 5 3 5 7"/></>}
    {name === "project" && <><rect x="3" y="4" width="22" height="20" rx="2"/><path d="M3 10h22M9 10v14m5-9h6m-6 4h4"/></>}
    {name === "design" && <><path d="m5 20 13-13 4 4L9 24H5v-4ZM17 8l4-4 4 4-4 4M5 4l8 8m-3-8L5 9"/></>}
  </svg>;
}
export default function SeoServices() {
  return <section className={styles.section} aria-labelledby="seo-services-heading"><div className={styles.grid}>
    <header className={styles.intro}><h2 id="seo-services-heading">Amazing services</h2><p>Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. Nulla facilisi quis dolor.</p><Link href="/contact#contact-inquiry" className={styles.talk}>Let’s talk</Link></header>
    {services.map(service => <article key={service.title} className={`${styles.card} ${service.featured ? styles.featured : ""}`}><h3><ServiceIcon name={service.icon}/>{service.title}</h3><p>Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. Nulla facilisi quis dolor sit amet.</p><Link href="/contact#contact-inquiry" aria-label={`Read more about ${service.title}`}>Read more</Link></article>)}
  </div></section>;
}
