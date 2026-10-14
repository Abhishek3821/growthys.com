import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./ecommerce-marketing-hero.module.css";

export default function EcommerceMarketingHero() {
  return (
    <div className={styles.hero}>
      <header className={styles.header}>
        <Link href="/" aria-label="Growthys home" className={styles.brand}>Growthys<span>®</span></Link>
        <Navbar onHomePage={false} currentPage="/ecommerce-marketing" />
      </header>
      <section aria-labelledby="ecommerce-marketing-heading" className={styles.poster}>
        <div className={styles.topRow}>
          <h1 id="ecommerce-marketing-heading" className={styles.title}>HASU<span className="sr-only"> — Ecommerce Marketing</span></h1>
          <span className={styles.registered} aria-hidden="true">®</span>
          <div className={styles.edition}>
            <p className={styles.verticalCopy}>CREATIVE DIRECTION<br />ECOMMERCE MARKETING<br />GROWTHYS STUDIO — 2026</p>
            <div className={styles.catalogue}>
              <div className={styles.symbols} aria-hidden="true">◎ ◎ ◎ <span>2026</span></div>
              <p>THE ART OF STANDING OUT</p>
              <svg viewBox="0 0 180 36" preserveAspectRatio="none" className={styles.barcode} aria-hidden="true">{Array.from({ length: 42 }, (_, index) => <rect key={index} x={index * 4.3} y="0" width={index % 3 === 0 ? 3 : 1.3} height={index % 5 === 0 ? 36 : 29} fill="currentColor" />)}</svg>
            </div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.resume}>
            <h2>RESUME</h2>
            <p className={styles.subtitle}>PRESENTATION TEMPLATE</p>
            <Link href="/contact#contact-inquiry" className={styles.projectLink}>LET’S MAKE YOUR BRAND<br />IMPOSSIBLE TO IGNORE <span aria-hidden="true">↗</span></Link>
          </div>
          <div className={styles.portrait}>
            <Image src="/images/services/ecommerce-marketing-fashion.webp" alt="A smiling woman wearing a mint denim jacket with one arm raised" fill preload sizes="(max-width: 600px) 100vw, 60vw" className="object-cover" />
            <span className={styles.photoLabel} aria-hidden="true">HASU — VOL. 01</span>
          </div>
        </div>
      </section>
    </div>
  );
}
