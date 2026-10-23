import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import coffeeImage from "../../public/images/contact/graphics/conversation.webp";
import productImage from "../../public/images/contact/graphics/communication.webp";
import styles from "./contact-hero.styles";

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function ContactHero() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>

        <Navbar onHomePage={false} />
      </header>
      <section className={styles.hero} aria-labelledby="contact-hero-heading">
        <Image quality={95} src={coffeeImage} alt="Conceptual agency team discussing a project over coffee in a bright office" fill preload placeholder="blur" sizes="100vw" className={styles.scene} />
        <div className={styles.shade} />
        <div className={styles.panel}>
          <div className={styles.titleRow}>
            <h1 id="contact-hero-heading" aria-label="Let’s Start Something Worth Building">growthys<span className={styles.srOnly}> — Contact us</span></h1>
            <p className={styles.contactLabel}>CONTACT<span>US</span></p>
          </div>
          <div className={styles.introRow}>
            <div className={styles.thumbnail}><Image quality={95} src={coffeeImage} alt="" fill sizes="140px" className={styles.thumbnailImage} /></div>
            <div className={styles.intro}>
              <p><strong>Let&apos;s Start Something Worth Building</strong><br/>Every project begins with a simple message. Tell us where you want your business to go, and we&apos;ll help you plan the route.</p>
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
            <Image quality={95} src={productImage} alt="" fill sizes="(max-width: 700px) 55vw, 45vw" className={styles.product} />
          </div>
        </div>
        <p className={styles.caption}>Big Results Begin With a Small Hello</p>
      </section>
    </div>
  );
}
