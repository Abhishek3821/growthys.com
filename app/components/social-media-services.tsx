import Link from "next/link";
import styles from "./social-media-services.module.css";

const services = [
  { title: "Social Media Strategy", secondLine: "& Implementation", icon: "🎯", position: "33.333% 0%", color: "#a2b8ee" },
  { title: "Content", secondLine: "Creation", icon: "📊", position: "100% 100%", color: "#e99956" },
  { title: "Influencer &", secondLine: "Collaboration Marketing", icon: "📣", position: "33.333% 100%", color: "#6ab57e" },
  { title: "Design", secondLine: "", icon: "🖼️", position: "0% 100%", color: "#efd051" },
  { title: "Social Media", secondLine: "Analysis", icon: "🖥️", position: "66.667% 0%", color: "#9759d2" },
  { title: "Social Media", secondLine: "Advertising", icon: "📱", position: "66.667% 100%", color: "#cc4f5a" },
];

export default function SocialMediaServices() {
  return (
    <section aria-labelledby="social-media-services-heading" className={styles.section}>
      <h2 id="social-media-services-heading" className="sr-only">Our social media marketing services</h2>
      <ul className={styles.list}>
        {services.map((service, index) => (
          <li key={service.title + service.secondLine} className={styles.row}>
            <div className={`${styles.portrait} ${styles[`portrait${index}`]}`} style={{ backgroundColor: service.color }} aria-hidden="true"><span style={{ backgroundPosition: service.position }} /></div>
            <Link href="/contact#contact-inquiry" className={styles.link} aria-label={`Enquire about ${service.title} ${service.secondLine}`}>
              <span className={styles.icon} aria-hidden="true">{service.icon}</span>
              <h3>{service.title}{service.secondLine && <><br />{service.secondLine}</>}</h3>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
