import { contentMarketingContent } from "../data/content-marketing-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./content-marketing-about.module.css";

export default function ContentMarketingAbout() {
  return (
    <section className={styles.section} aria-labelledby="content-about-heading">
      <div className={styles.layout}>
        <div className={styles.visual}>
          <div className={styles.photo}><Image quality={95} src="/images/content-marketing/graphics/writer.webp" alt="A content writer researching and editing an original article" fill sizes="(max-width: 767px) 85vw, 38vw" className="object-cover" /></div>
          <div className={styles.badge} aria-label="Creative ideas, thoughtfully made"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="47" fill="#ffbf43" stroke="#fff8e8" strokeWidth="5" /><circle cx="50" cy="50" r="33" fill="none" stroke="#fff7d7" strokeWidth="2" strokeDasharray="2 5" /><path d="m50 34 4 12 12 4-12 4-4 12-4-12-12-4 12-4Z" fill="#fff5cf" /></svg></div>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>How We Work</p>
          <h2 id="content-about-heading">Know a Little Bit<br />About How We Work</h2>
          <p className={styles.description}>{contentMarketingContent.hero.description}<br/><br/>{contentMarketingContent.about.description}</p>
          <ul className={styles.points}>{contentMarketingContent.about.points.map(point => <li key={point}>{point}</li>)}</ul>
          <Link href="/contact#contact-inquiry" className={styles.button}>Contact Us <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
