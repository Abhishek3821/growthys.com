import { seoContent } from "../data/seo-content";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./seo-hero.module.css";

export default function SeoHero() {
  return <div className={styles.hero}>
    <header className={styles.header}><Navbar onHomePage={false} currentPage="/search-engine-optimization" /></header>
    <section className={styles.layout} aria-labelledby="seo-heading">
      <div className={styles.copy}><h1 id="seo-heading" aria-label={seoContent.hero.title}>Top Search Rankings,<br />Built on <span>Real Strategy.<svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 4Q150 16 297 2M4 10Q160 18 295 8" fill="none" stroke="currentColor" strokeWidth="2" /></svg></span></h1><p>{seoContent.hero.description}</p><div className={styles.actions}><Link href="/contact#contact-inquiry">Book a Free SEO Audit</Link><Link href="/contact#contact-inquiry">Discuss Your SEO Plan</Link></div></div>
      <div className={styles.artwork}>
        <svg viewBox="0 0 600 510" preserveAspectRatio="none" className={styles.path} aria-hidden="true"><path d="M600 10C490 40 500 128 350 145S100 150 95 235 10 260 20 350 180 420 330 380 570 400 580 290 560 180 500 190" fill="none" stroke="#73756d" strokeDasharray="6 7" /><circle cx="547" cy="35" r="4" /><circle cx="95" cy="235" r="4" /><circle cx="580" cy="290" r="4" /></svg>
        <div className={styles.man}><Image quality={95} src="/images/seo/graphics/search-rankings.webp" alt="Organic search results with a magnifying lens and rising ranking steps" fill preload sizes="(max-width:767px) 47vw, 25vw" className="object-cover" /></div>
        <div className={styles.woman}><Image quality={95} src="/images/seo/graphics/keyword-research.webp" alt="Keyword research cards connected to a target search landing page" fill preload sizes="(max-width:767px) 49vw, 27vw" className="object-cover" /></div>
        <div className={`${styles.card} ${styles.justin}`}><div className={styles.avatar}><Image quality={95} src="/images/seo/graphics/search-rankings.webp" alt="" fill sizes="40px" className="object-cover" /></div><div><strong>Growthys SEO</strong><p>SEO Team</p><small>Technical &amp; On-Page</small></div></div>
        <div className={`${styles.card} ${styles.contract}`}><p>Search Strategy</p><div className={styles.badges}><span>SEO Audit</span><span>▣ Monthly Reports</span></div></div>
        <div className={`${styles.card} ${styles.karen}`}><div className={styles.avatar}><Image quality={95} src="/images/seo/graphics/keyword-research.webp" alt="" fill sizes="40px" className="object-cover" /></div><div><strong>Content Strategy</strong><p>SEO Team</p><small>Search Intent &amp; Outreach</small></div><span className={styles.fulltime}>▣ Organic Growth</span></div>
        <div className={`${styles.card} ${styles.workLog}`}><div><strong>SEO Progress</strong><span>Monthly</span></div><p>⚑ <span>Rankings &amp; Traffic</span></p></div>
      </div>
    </section>
  </div>;
}
