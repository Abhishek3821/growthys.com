import Link from "next/link";
import styles from "./portfolio.module.css";

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

const services = [
  { title: "Performance Marketing", description: "Google and Meta ad campaigns focused on reaching the right audience and generating leads.", href: "/performance-marketing", icon: "target" },
  { title: "Web Development", description: "Custom websites and web applications built around your business needs.", href: "/web-development", icon: "code" },
  { title: "Website Design", description: "Responsive website designs that bring your brand to life across every screen.", href: "/website-design", icon: "design" },
  { title: "App Development", description: "Web and mobile app experiences with intuitive interfaces and practical features.", href: "/app-development", icon: "phone" },
  { title: "Digital Marketing", description: "Connected digital strategies across search, social media, content, and paid campaigns.", href: "/digital-marketing", icon: "growth" },
  { title: "Search Engine Optimization (SEO)", description: "Technical, on-page, and content optimization to improve your search visibility.", href: "/search-engine-optimization", icon: "search" },
  { title: "E-Commerce Solutions", description: "Online stores with product catalogues, shopping carts, and checkout experiences.", href: "/e-commerce-solutions", icon: "cart" },
  { title: "HRMS Software", description: "HR software for attendance, payroll, leave management, and employee records.", href: "/hrms-software", icon: "people" },
  { title: "CRM & Management Software", description: "Custom systems to manage leads, customer relationships, and business workflows.", href: "/crm-management-software", icon: "workflow" },
  { title: "Social Media Marketing", description: "Social strategies, creative content, and campaigns to connect with your audience.", href: "/social-media-marketing", icon: "message" },
  { title: "Graphic Designing", description: "Brand identities, marketing creatives, and visual assets that tell your story.", href: "/graphic-designing", icon: "pen" },
  { title: "UI/UX Design", description: "User-focused interfaces and thoughtful experiences for websites and applications.", href: "/ui-ux-design", icon: "grid" },
  { title: "CMS Design", description: "Flexible, easy-to-manage websites that make publishing and updating content simpler.", href: "/cms-design", icon: "design" },
  { title: "Content Marketing", description: "Audience-focused articles, website copy, and content strategies for your brand.", href: "/content-marketing", icon: "pen" },
  { title: "Ecommerce Marketing", description: "Marketing campaigns and store optimization to support your online business.", href: "/ecommerce-marketing", icon: "growth" },
] satisfies Array<{ title: string; description: string; href: string; icon: keyof typeof icons }>;

const colors = [styles.lavender, styles.pink, styles.yellow, styles.green];

export default function PortfolioServices() {
  return (
    <section id="portfolio-services" className={styles.services} aria-labelledby="services-heading">
      <div className={styles.servicesInner}>
        <div className={styles.servicesIntro}>
          <div>
            <p className={styles.servicesEyebrow}>What we do</p>
            <h2 id="services-heading" className={styles.servicesHeading}>Services we provide <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3 1 26M4 10l24 12M5 24 27 7" /></svg></h2>
          </div>
          <p className={styles.servicesDescription}>From design and development to marketing and business software, we help your business build, connect, and grow.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => (
            <article className={styles.serviceCard} key={service.href}>
              <div className={`${styles.serviceIcon} ${colors[index % colors.length]}`} aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">{icons[service.icon]}</svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href={service.href} className={styles.serviceLink} aria-label={`Read more about ${service.title}`}>
                Read more <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <svg className={styles.bottomWave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 42C180-5 240 78 430 40S660 8 850 39 1100 4 1280 30 1400 38 1440 30V60H0Z" fill="#fffaf7" /></svg>
    </section>
  );
}
