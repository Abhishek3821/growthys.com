import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./web-development-hero.module.css";

export default function WebDevelopmentHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.creamPanel} aria-hidden="true" />
      <header className={styles.header}>
        <Link href="/" aria-label="Growthys home" className={styles.brand}>Growthys<span>®</span></Link>
        <Navbar onHomePage={false} currentPage="/web-development" />
      </header>
      <section aria-labelledby="web-development-heading" className={styles.content}>
        <div className={styles.copy}>
          <h1 id="web-development-heading">Marketing for<br />your Brand.</h1>
          <div className={styles.description}>
            <p className={styles.descriptionTitle}>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, at vel utinam signiferumque, graece verear.</p>
          </div>
        </div>
        <div className={styles.artwork}>
          <span className={`${styles.circle} ${styles.orange}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.navy}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.yellow}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.pale}`} aria-hidden="true" />
          <span className={styles.plus} aria-hidden="true">+</span>
          <div className={styles.portrait}>
            <Image src="/images/services/web-development-laptop.webp" alt="A smiling man in a blue denim shirt working on a laptop" fill preload sizes="(max-width: 767px) 100vw, 65vw" className="object-contain object-bottom" />
          </div>
        </div>
        <Link href="/contact#contact-inquiry" className={styles.startButton}>START WITH US<span aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="m8 5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span></Link>
      </section>
    </div>
  );
}
