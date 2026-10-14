import Image from "next/image";
import Link from "next/link";
import styles from "./content-marketing-about.module.css";

export default function ContentMarketingAbout() {
  return (
    <section className={styles.section} aria-labelledby="content-about-heading">
      <div className={styles.layout}>
        <div className={styles.visual}>
          <div className={styles.photo}><Image src="/images/services/social-media-therapist.webp" alt="A smiling professional in a bright office" fill sizes="(max-width: 767px) 85vw, 38vw" className="object-cover" /></div>
          <div className={styles.badge} aria-label="Creative ideas, thoughtfully made"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="47" fill="#ffbf43" stroke="#fff8e8" strokeWidth="5" /><circle cx="50" cy="50" r="33" fill="none" stroke="#fff7d7" strokeWidth="2" strokeDasharray="2 5" /><path d="m50 34 4 12 12 4-12 4-4 12-4-12-12-4 12-4Z" fill="#fff5cf" /></svg></div>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>About Me</p>
          <h2 id="content-about-heading">Know About Little<br />Bit About Myself</h2>
          <p className={styles.description}>I have over 10 years’ experience in building brands and shaping compelling digital products. Learn more about my work, creative ideas, and approach to thoughtful design.</p>
          <ul className={styles.points}><li>High Quality Services</li><li>Affordable Prices In Marketplace</li><li>Creative Design &amp; Development</li></ul>
          <Link href="/contact#contact-inquiry" className={styles.button}>Contact Me <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
