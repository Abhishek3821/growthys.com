import { contentMarketingContent } from "../data/content-marketing-content";
import Image from "next/image";
import styles from "./content-marketing-parent-trust.module.css";

const reasons = contentMarketingContent.trust.reasons;

export default function ContentMarketingParentTrust() {
  return <section className={styles.section} aria-labelledby="content-parent-trust-heading"><div className={styles.layout}>
    <div className={styles.introduction}><p className={styles.eyebrow}>{contentMarketingContent.trust.eyebrow}</p><h2 id="content-parent-trust-heading">Dedicated to Your<br/>Content Growth</h2><ul>{reasons.map(reason=><li key={reason}><span aria-hidden="true">✓</span>{reason}</li>)}</ul>
      <svg viewBox="0 0 95 65" className={styles.stethoscope} fill="none" stroke="#9ed6d5" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><rect x="9" y="6" width="48" height="52" rx="6" fill="#eefbfb"/><path d="M20 18h25M20 27h17M20 46l8-9 8 5 10-14"/><circle cx="69" cy="28" r="14" fill="#eefbfb"/><path d="m79 39 10 13M63 28l4 4 8-9" stroke="#e7aebd" strokeWidth="2"/></svg>
    </div>
    <div className={styles.photo}><Image quality={95} src="/images/content-marketing/graphics/editorial-team.webp" alt="Writers, an editor and a client reviewing a content plan together" fill sizes="(max-width:767px) 90vw, 40vw" className="object-cover"/></div>
    <div className={styles.testimonial}><figure><span className={styles.quote} aria-hidden="true">“</span><blockquote>{contentMarketingContent.results.quote}</blockquote><p className={styles.stars} aria-label="5 out of 5 stars">★★★★★</p><figcaption><strong>Growthys Client</strong><span>Content Marketing</span></figcaption></figure><div className={styles.dots} aria-hidden="true"><i/><i/><i/></div></div>
  </div></section>;
}
