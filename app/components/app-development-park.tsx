import { appDevelopmentContent } from "../data/app-development-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./app-development-park.module.css";

const attractions = appDevelopmentContent.benefits.items.map((item, index) => ({
  ...item,
  image: ["payments", "offline", "accounts"][index],
  alt: ["A fast mobile checkout with secure payment confirmation", "Offline app data and reliable cloud synchronisation", "Secure mobile sign-in protected by a shield and lock"][index],
  color: ["#ffa5aa", "#9bb9cd", "#e884b2"][index],
}));

export default function AppDevelopmentPark() {
  return (
    <section aria-labelledby="app-park-heading" className={styles.section} lang="en">
      <div className={styles.container}>
        <h2 id="app-park-heading">{appDevelopmentContent.benefits.title}</h2>
        <p className={styles.description}>{appDevelopmentContent.benefits.paragraphs[0]}<br className="hidden lg:block" />{appDevelopmentContent.benefits.paragraphs[1]}<br className="hidden lg:block" />{appDevelopmentContent.benefits.label}</p>
        <div className={styles.cards}>
          {attractions.map((attraction) => (
            <article key={attraction.image} className={styles.card} style={{ backgroundColor: attraction.color }}>
              <h3>{attraction.title}</h3>
              <Link href="/contact#contact-inquiry" className={styles.viewLink} aria-label={`Discuss ${attraction.title.toLowerCase()} app development`}>{attraction.description}</Link>
              <div className={styles.imageArea}>
                <span className={styles.arch} aria-hidden="true" />
                <Image quality={95} src={`/images/app-development/graphics/${attraction.image}.webp`} alt={attraction.alt} fill sizes="(max-width: 767px) 85vw, 31vw" className="object-contain object-bottom" />
              </div>
            </article>
          ))}
        </div>
        <Link href="/contact#contact-inquiry" className={styles.allLink}>Discuss Your App</Link>
      </div>
    </section>
  );
}
