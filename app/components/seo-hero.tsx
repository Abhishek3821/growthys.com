import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./seo-hero.module.css";

export default function SeoHero() {
  return <div className={styles.hero}>
    <header className={styles.header}><Link href="/" aria-label="Growthys home" className={styles.brand}>Growthys<span>®</span></Link><Navbar onHomePage={false} currentPage="/search-engine-optimization" /></header>
    <section className={styles.layout} aria-labelledby="seo-heading">
      <div className={styles.copy}><h1 id="seo-heading">Top legal talent,<br />on <span>demand.<svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 4Q150 16 297 2M4 10Q160 18 295 8" fill="none" stroke="currentColor" strokeWidth="2" /></svg></span></h1><p>Legal departments of all sizes — from startups to Fortune 500s — use Lawtrades’ tech-enabled platform to hire world-class flexible legal talent and scale their outside counsel work.</p><div className={styles.actions}><Link href="/contact#contact-inquiry">Hire Talent</Link><Link href="/contact#contact-inquiry">Join the Network</Link></div></div>
      <div className={styles.artwork}>
        <svg viewBox="0 0 600 510" preserveAspectRatio="none" className={styles.path} aria-hidden="true"><path d="M600 10C490 40 500 128 350 145S100 150 95 235 10 260 20 350 180 420 330 380 570 400 580 290 560 180 500 190" fill="none" stroke="#73756d" strokeDasharray="6 7" /><circle cx="547" cy="35" r="4" /><circle cx="95" cy="235" r="4" /><circle cx="580" cy="290" r="4" /></svg>
        <div className={styles.man}><Image src="/images/pending-sections/attorney-man.webp" alt="A smiling attorney with a full beard" fill preload sizes="(max-width:767px) 47vw, 25vw" className="object-cover" /></div>
        <div className={styles.woman}><Image src="/images/pending-sections/attorney-woman.webp" alt="A legal professional with long dark hair" fill preload sizes="(max-width:767px) 49vw, 27vw" className="object-cover" /></div>
        <div className={`${styles.card} ${styles.justin}`}><div className={styles.avatar}><Image src="/images/pending-sections/attorney-man.webp" alt="" fill sizes="40px" className="object-cover" /></div><div><strong>Justin Higgs</strong><p>Attorney</p><small>Labor &amp; Employment</small></div></div>
        <div className={`${styles.card} ${styles.contract}`}><p>Contract Negotiations</p><div className={styles.badges}><span>$130/hr</span><span>▣ Part-Time</span></div></div>
        <div className={`${styles.card} ${styles.karen}`}><div className={styles.avatar}><Image src="/images/pending-sections/attorney-woman.webp" alt="" fill sizes="40px" className="object-cover" /></div><div><strong>Karen Frame</strong><p>Attorney</p><small>Corporate Law</small></div><span className={styles.fulltime}>▣ Full-Time</span></div>
        <div className={`${styles.card} ${styles.workLog}`}><div><strong>New Work Log</strong><span>6:42</span></div><p>⚑ <span>Litigation</span></p></div>
      </div>
    </section>
  </div>;
}
