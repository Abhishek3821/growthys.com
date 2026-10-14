import Image from "next/image";
import Link from "next/link";
import styles from "./hrms-editorial-about.module.css";

export default function HrmsEditorialAbout() {
  return <section className={styles.section} aria-labelledby="hrms-editorial-heading"><div className={styles.layout}>
    <div className={styles.artwork}>
      <div className={styles.paper} aria-hidden="true"/>
      <div className={styles.photo}><Image src="/images/services/hrms-editorial-about.webp" alt="A creative director in a black suit seated thoughtfully in a studio" fill sizes="(max-width:767px) 85vw, 45vw" className="object-cover"/></div>
      <span className={styles.monogram} aria-hidden="true">NR</span>
      <svg viewBox="0 0 110 110" className={styles.ink} aria-hidden="true"><circle cx="37" cy="53" r="11"/><circle cx="65" cy="73" r="7"/><circle cx="76" cy="34" r="4"/><circle cx="20" cy="79" r="3"/><circle cx="55" cy="20" r="3"/><circle cx="81" cy="12" r="2"/><circle cx="14" cy="31" r="2"/><circle cx="91" cy="60" r="2"/></svg>
      <svg viewBox="0 0 230 85" preserveAspectRatio="none" className={styles.paint} aria-hidden="true"><path d="m0 7 224-3-4 8 10 5-7 9 6 8-8 7 7 8-6 10 5 8-7 11L0 82Z" fill="#f04a1d"/><path d="M4 19h214M0 34l224-4M1 56l218-4M3 71l219-6" stroke="#ff7c3d" strokeWidth="3" opacity=".55"/></svg>
    </div>
    <div className={styles.content}><p className={styles.eyebrow}>ABOUT ME</p><h2 id="hrms-editorial-heading">Strategy-minded.<br/>Design-driven.<br/>People-focused.</h2><p className={styles.description}>I’m Nova Reed, a creative director and brand builder. I partner with ambitious teams to turn big ideas into meaningful experiences.<br/>I believe great design is equal parts art and intention.<br/>It’s not just about how it looks — it’s about what it makes possible.</p><Link href="/contact#contact-inquiry" className={styles.button}>MORE ABOUT ME</Link></div>
  </div></section>;
}
