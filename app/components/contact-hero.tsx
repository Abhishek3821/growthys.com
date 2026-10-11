import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import coffeeImage from "../../public/images/contact/coffee-moment.webp";
import productImage from "../../public/images/contact/espresso-maker.webp";
import styles from "./contact-hero.module.css";

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function ContactHero() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.homeLink} href="/" aria-label="Growthys home">growthys<span>®</span></Link>
        <Navbar onHomePage={false} />
      </header>
      <section className={styles.hero} aria-labelledby="contact-hero-heading">
        <Image src={coffeeImage} alt="A warm cup of coffee being poured outdoors, ready for a conversation" fill preload placeholder="blur" sizes="100vw" className={styles.scene} />
        <div className={styles.shade} />
        <div className={styles.panel}>
          <div className={styles.titleRow}>
            <h1 id="contact-hero-heading">growthys<span className={styles.srOnly}> — Contact us</span></h1>
            <p className={styles.contactLabel}>CONTACT<span>US</span></p>
          </div>
          <div className={styles.introRow}>
            <div className={styles.thumbnail}><Image src={coffeeImage} alt="" fill sizes="140px" className={styles.thumbnailImage} /></div>
            <div className={styles.intro}>
              <p>Good conversations lead to great things. Tell us what you have in mind—let&apos;s build it together.</p>
              <div className={styles.actions}>
                <a href="#contact-inquiry" className={styles.pill}>Let&apos;s talk</a>
                <Link href="/" className={styles.pill}>Back home</Link>
                <a href="#contact-inquiry" className={styles.arrowButton} aria-label="Start a conversation with Growthys"><Arrow /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productWedge} aria-hidden="true">
          <div className={styles.productBackground}>
            <svg className={styles.contours} viewBox="0 0 600 600" fill="none"><path d="M700 20C280-140 330 230 100 250S-30 650 280 650M700 60C320-80 370 270 140 290S10 690 320 690M700 100C360-20 410 310 180 330S50 730 360 730M700 140C400 40 450 350 220 370S90 770 400 770M700 180C440 100 490 390 260 410S130 810 440 810" stroke="currentColor" strokeWidth="1.5" /></svg>
            <Image src={productImage} alt="" fill sizes="(max-width: 700px) 55vw, 45vw" className={styles.product} />
          </div>
        </div>
        <p className={styles.caption}>Good things start with a conversation.</p>
      </section>
    </div>
  );
}
