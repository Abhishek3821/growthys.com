import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import growthHero from "../../public/images/insights/company-overview/hero-growth.webp";
import growthPlanning from "../../public/images/insights/company-overview/growth-planning.webp";
import styles from "./insights-hero.styles";

export default function InsightsHero() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>

        <Navbar onHomePage={false} currentPage="/insights" />
      </header>

      <section className={styles.hero} aria-labelledby="insights-heading">
        <div className={styles.intro}>
          <span className={styles.eyebrow}><i /> Company Overview</span>
          <h1 id="insights-heading" className={styles.heading}>
            <span>Built to Grow</span>
            <span className={styles.secondLine}>Businesses.</span>
            <span className={styles.thirdLine}>Focused on Results.</span>
          </h1>
          <div className={styles.symbols} aria-hidden="true"><span>✺</span><span>❃</span><span>✧</span></div>
          <div className={styles.introBottom}>
            <p>We offer a complete approach to digital growth — blending digital marketing, software development, and consulting to help businesses reach the right audience, build the right systems, and grow with confidence.</p>
            <div className={styles.actions}>
              <Link href="/contact#contact-inquiry" className={styles.primaryAction}>Get started</Link>
              <a href="#offerings" className={styles.secondaryAction}>Explore</a>
            </div>
          </div>
        </div>

        <div className={styles.featureCard}>
          <Image src={growthHero} quality={95} alt="A laptop with rising analytics on green glass steps, connected to a cloud and target, representing integrated business growth." fill preload placeholder="blur" sizes="(max-width: 650px) 100vw, 55vw" className={styles.photo} />
          <span className={styles.imageTag}>Digital Marketing</span>
          <span className={styles.moodTag}>Software Development</span>
          <div className={styles.imageChips}><span>IT Consulting</span><span>Business Growth</span></div>
        </div>

        <aside className={styles.offerings} id="offerings">
          <div className={styles.offeringCopy}>
            <h2>Where Growth<br />Begins</h2>
            <p>Whether you need better visibility, more leads, or stronger systems behind the scenes, our solutions are built around your business goals.</p>
          </div>
          <Link href="/contact#contact-inquiry" className={styles.communityCard} aria-label="Contact Growthys about your business goals">
            <Image src={growthPlanning} quality={95} alt="A compass, rising steps and connected technology tools representing a clear plan for business growth." fill placeholder="blur" sizes="(max-width: 650px) 100vw, 28vw" className={styles.photo} />
            <span className={styles.communityTag}>Grow With Us</span>
          </Link>
        </aside>
      </section>
    </div>
  );
}
