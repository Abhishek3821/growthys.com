import Image from "next/image";
import styles from "./content-marketing-parent-trust.module.css";

const reasons = ["Board-certified pediatric specialists", "Warm, kid-friendly environment", "Open communication with parents", "Focus on preventive care", "Convenient location & flexible scheduling"];

export default function ContentMarketingParentTrust() {
  return <section className={styles.section} aria-labelledby="content-parent-trust-heading"><div className={styles.layout}>
    <div className={styles.introduction}><p className={styles.eyebrow}>WHY PARENTS TRUST US</p><h2 id="content-parent-trust-heading">Dedicated to Your<br/>Child’s Well-Being</h2><ul>{reasons.map(reason=><li key={reason}><span aria-hidden="true">✓</span>{reason}</li>)}</ul>
      <svg viewBox="0 0 95 65" className={styles.stethoscope} fill="none" stroke="#9ed6d5" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M12 4v14c0 21 27 24 28 0V4M12 5H6v17c0 29 41 31 41-1V5h-7M27 43v7c0 13 42 15 42-2V34"/><circle cx="69" cy="25" r="12" fill="#eefbfb"/><circle cx="69" cy="25" r="5"/><path d="M64 3c-6-8-18-1-10 8l10 10 10-10C82 2 70-5 64 3Z" stroke="#e7aebd" strokeWidth="2"/></svg>
    </div>
    <div className={styles.photo}><Image src="/images/services/content-marketing-parent-trust.webp" alt="Parents smiling as a pediatric doctor high-fives their daughter during a check-up" fill sizes="(max-width:767px) 90vw, 40vw" className="object-cover"/></div>
    <div className={styles.testimonial}><figure><span className={styles.quote} aria-hidden="true">“</span><blockquote>The doctors and staff are amazing with kids! My daughter actually looks forward to her appointments.</blockquote><p className={styles.stars} aria-label="5 out of 5 stars">★★★★★</p><figcaption><strong>Jessica M.</strong><span>Happy Parent</span></figcaption></figure><div className={styles.dots} aria-hidden="true"><i/><i/><i/></div></div>
  </div></section>;
}
