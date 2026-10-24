import Image from "next/image";
import Link from "next/link";
import styles from "./hrms-editorial-about.module.css";
import { hrmsContent } from "../data/hrms-content";

export default function HrmsEditorialAbout() {
  return <section className={styles.section} aria-labelledby="hrms-editorial-heading"><div className={styles.layout}>
    <div className={styles.artwork}>
      <div className={styles.paper} aria-hidden="true"/>
      <div className={styles.photo}><Image src="/images/hrms/graphics/hr-technology-experts.webp" quality={95} alt="An HR consultant and software engineer collaborating on a workflow, representing practical and scalable HRMS development." fill sizes="(max-width:767px) 85vw, 45vw" className="object-cover"/></div>
      <span className={styles.monogram} aria-hidden="true">GH</span>
      <svg viewBox="0 0 110 110" className={styles.ink} aria-hidden="true"><circle cx="37" cy="53" r="11"/><circle cx="65" cy="73" r="7"/><circle cx="76" cy="34" r="4"/><circle cx="20" cy="79" r="3"/><circle cx="55" cy="20" r="3"/><circle cx="81" cy="12" r="2"/><circle cx="14" cy="31" r="2"/><circle cx="91" cy="60" r="2"/></svg>
      <svg viewBox="0 0 230 85" preserveAspectRatio="none" className={styles.paint} aria-hidden="true"><path d="m0 7 224-3-4 8 10 5-7 9 6 8-8 7 7 8-6 10 5 8-7 11L0 82Z" fill="#f04a1d"/><path d="M4 19h214M0 34l224-4M1 56l218-4M3 71l219-6" stroke="#ff7c3d" strokeWidth="3" opacity=".55"/></svg>
    </div>
    <div className={styles.content}><p className={styles.eyebrow}>OUR APPROACH</p><h2 id="hrms-editorial-heading">Practical.<br/>Scalable.<br/>People-Focused.</h2><p className={styles.description}>{hrmsContent.approach.paragraphs[0]}<br/>{hrmsContent.approach.paragraphs[1]}</p><Link href="/contact#contact-inquiry" className={styles.button}>EXPLORE GROWTHYS HRMS</Link></div>
  </div></section>;
}
