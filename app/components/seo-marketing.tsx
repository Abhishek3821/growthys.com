import Image from "next/image";
import Link from "next/link";
import styles from "./seo-marketing.module.css";

export default function SeoMarketing() {
  return <section className={styles.section} aria-labelledby="seo-marketing-heading"><div className={styles.panel}>
    <div className={styles.copy}><h2 id="seo-marketing-heading">Boost your<br/>business through<br/><span>online marketing</span></h2><p>Hey there! I’m Jessica Parker. Digital business consultant focused on online marketing and advertising.</p><div className={styles.actions}><Link href="/contact#contact-inquiry">Let’s talk</Link><Link href="/blogs">See case studies</Link></div></div>
    <div className={styles.photo}><Image src="/images/pending-sections/marketing-portrait.webp" alt="A smiling digital business consultant holding her phone at a cafe" fill sizes="(max-width:767px) 90vw, 42vw" className="object-cover"/><svg viewBox="0 0 400 250" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 220C45 170 63 90 135 105S195 40 260 60 320 0 420 35M-20 260C45 210 63 130 135 145S195 80 260 100 320 40 420 75" fill="none" stroke="#fffbed" strokeWidth="7" strokeLinecap="round"/></svg></div>
  </div></section>;
}
