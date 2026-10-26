import Link from "next/link";
import styles from "./portfolio.module.css";
import { growthysShowcaseContent as content } from "../data/growthys-showcase-content";

const icons = {
  target: <><circle cx="20" cy="20" r="15" /><circle cx="20" cy="20" r="9" /><circle cx="20" cy="20" r="3" /><path d="m22 18 13-13m-7 0h7v7" /></>,
  code: <><rect x="3" y="6" width="34" height="28" rx="4" /><path d="M3 13h34M8 10h1m4 0h1m0 9-5 5 5 5m12-10 5 5-5 5m-4-11-4 12" /></>,
  design: <><rect x="4" y="5" width="32" height="30" rx="4" /><path d="M4 13h32M8 9h1m4 0h1M11 20h11m-11 6h7m10-9 5 5-8 8-6 1 1-6Z" /></>,
  phone: <><rect x="10" y="3" width="20" height="34" rx="4" /><path d="M16 7h8M10 30h20m-28-9 4-3-4-3m36 6-4-3 4-3" /><circle cx="20" cy="19" r="5" /><path d="M19 34h2" /></>,
  growth: <><path d="M5 5v30h30M11 27l8-9 6 4 10-14m-8 0h8v8" /></>,
  search: <><circle cx="17" cy="17" r="12" /><path d="m26 26 10 10M11 21v-4m6 4V11m6 10v-7" /></>,
  cart: <><path d="M3 5h5l5 23h19l5-16H10M15 18h18m-16 5h14" /><circle cx="16" cy="34" r="2" /><circle cx="30" cy="34" r="2" /></>,
  people: <><circle cx="16" cy="12" r="6" /><path d="M4 35v-4a12 12 0 0 1 24 0v4H4Zm22-28a6 6 0 0 1 0 12m5 5a12 12 0 0 1 5 10v1h-4" /></>,
  workflow: <><rect x="14" y="3" width="12" height="10" rx="2" /><rect x="3" y="27" width="12" height="10" rx="2" /><rect x="25" y="27" width="12" height="10" rx="2" /><path d="M20 13v8M9 27v-6h22v6" /></>,
  message: <><path d="M8 5h24a4 4 0 0 1 4 4v17a4 4 0 0 1-4 4H18l-9 7v-7H8a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z" /><path d="M11 13h18M11 20h12" /></>,
  pen: <><path d="m8 28 18-18 6 6-18 18-9 2 3-8Zm15-15 6 6M27 9l3-3a3 3 0 0 1 4 0l1 1a3 3 0 0 1 0 4l-3 3M8 28l6 6" /></>,
  grid: <><rect x="5" y="5" width="12" height="12" rx="3" /><rect x="23" y="5" width="12" height="12" rx="3" /><rect x="5" y="23" width="12" height="12" rx="3" /><rect x="23" y="23" width="12" height="12" rx="3" /></>,
};

const serviceIcons: Record<string, keyof typeof icons> = {
  "/performance-marketing": "target", "/web-development": "code", "/website-design": "design", "/app-development": "phone",
  "/digital-marketing": "growth", "/search-engine-optimization": "search", "/e-commerce-solutions": "cart", "/hrms-software": "people",
  "/crm-management-software": "workflow", "/social-media-marketing": "message", "/graphic-designing": "pen", "/ui-ux-design": "grid",
  "/cms-design": "design", "/content-marketing": "pen", "/ecommerce-marketing": "growth",
};
const services = content.services.items;

const colors = [styles.lavender, styles.pink, styles.yellow, styles.green];

export default function PortfolioServices() {
  return (
    <section id="portfolio-services" className={styles.services} aria-labelledby="services-heading">
      <div className={styles.servicesInner}>
        <div className={styles.servicesIntro}>
          <div>
            <p className={styles.servicesEyebrow}>{content.services.eyebrow}</p>
            <h2 id="services-heading" className={styles.servicesHeading}>{content.services.title} <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3 1 26M4 10l24 12M5 24 27 7" /></svg></h2>
          </div>
          <p className={styles.servicesDescription}>{content.services.description}</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <article className={styles.serviceCard} key={service.href}>
              <div className={`${styles.serviceIcon} ${colors[index % colors.length]}`} aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">{icons[serviceIcons[service.href]]}</svg>
              </div>
              <h3>{service.title}</h3>
              <p className={styles.serviceTagline}>{service.tagline}</p>
              <p>{service.description}</p>
              <Link href={service.href} className={styles.serviceLink} aria-label={`Read more about ${service.title}`}>
                {service.action} <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </article>
          ))}
        </div>
        <div className={styles.servicesBottom}><div><p>{content.services.cta.eyebrow}</p><h3>{content.services.cta.title}</h3><p>{content.services.cta.description}</p></div><Link href="/contact#contact-inquiry">{content.services.cta.action} <span aria-hidden="true">↗</span></Link></div>
      </div>
      <svg className={styles.bottomWave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 42C180-5 240 78 430 40S660 8 850 39 1100 4 1280 30 1400 38 1440 30V60H0Z" fill="#fff0f5" /></svg>
    </section>
  );
}
