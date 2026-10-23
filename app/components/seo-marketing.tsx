import { seoContent } from "../data/seo-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./seo-marketing.module.css";

export default function SeoMarketing() {
  return <section className={styles.section} aria-labelledby="seo-marketing-heading"><div className={styles.panel}>
    <div className={styles.copy}><h2 id="seo-marketing-heading" aria-label={seoContent.marketing.title}>Grow Your Business<br/>Through <span>Search</span></h2><p>{seoContent.marketing.paragraphs.join(" ")}</p><div className={styles.actions}><Link href="/contact#contact-inquiry">Let’s talk</Link><Link href="/contact#contact-inquiry">Discuss your strategy</Link></div></div>
    <div className={styles.photo}><Image quality={95} src="/images/seo/graphics/strategy.webp" alt="An SEO strategist reviewing keyword and organic search performance reports" fill sizes="(max-width:767px) 90vw, 42vw" className="object-cover"/><svg viewBox="0 0 400 250" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 220C45 170 63 90 135 105S195 40 260 60 320 0 420 35M-20 260C45 210 63 130 135 145S195 80 260 100 320 40 420 75" fill="none" stroke="#fffbed" strokeWidth="7" strokeLinecap="round"/></svg></div>
  </div></section>;
}
