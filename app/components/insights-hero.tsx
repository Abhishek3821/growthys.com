import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import meditation from "../../public/images/insights/meditation.webp";
import community from "../../public/images/insights/community.webp";
import styles from "./insights-hero.styles";

export default function InsightsHero() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>

        <Navbar onHomePage={false} currentPage="/insights" />
      </header>

      <section className={styles.hero} aria-labelledby="insights-heading">
        <div className={styles.intro}>
          <span className={styles.eyebrow}><i /> meditation</span>
          <h1 id="insights-heading" className={styles.heading}>
            <span>Mindfulness</span>
            <span className={styles.secondLine}>More Calm</span>
            <span className={styles.thirdLine}>Meaningful</span>
          </h1>
          <div className={styles.symbols} aria-hidden="true"><span>✺</span><span>❃</span><span>✧</span></div>
          <div className={styles.introBottom}>
            <p>We offer a holistic approach to yoga and meditation, blending traditional practices with modern techniques to help you achieve harmony and inner peace.</p>
            <div className={styles.actions}>
              <Link href="/contact#contact-inquiry" className={styles.primaryAction}>Get started</Link>
              <a href="#offerings" className={styles.secondaryAction}>Explore</a>
            </div>
          </div>
        </div>

        <div className={styles.featureCard}>
          <Image src={meditation} alt="Woman meditating in a sunlit studio surrounded by plants" fill preload placeholder="blur" sizes="(max-width: 650px) 100vw, 55vw" className={styles.photo} />
          <span className={styles.imageTag}>Meditation</span>
          <span className={styles.moodTag}>Mental wellness</span>
          <div className={styles.imageChips}><span>Mental health</span><span>Mindfulness</span></div>
        </div>

        <aside className={styles.offerings} id="offerings">
          <div className={styles.offeringCopy}>
            <h2>Explore Our<br />Offerings</h2>
            <p>Whether you&apos;re a beginner or an experienced practitioner, our community is here to support your journey.</p>
          </div>
          <Link href="/contact#contact-inquiry" className={styles.communityCard} aria-label="Contact Growthys about the mindfulness community">
            <Image src={community} alt="Person meditating in a bright studio" fill placeholder="blur" sizes="(max-width: 650px) 100vw, 28vw" className={styles.photo} />
            <span className={styles.communityTag}>Community</span>
          </Link>
        </aside>
      </section>
    </div>
  );
}
