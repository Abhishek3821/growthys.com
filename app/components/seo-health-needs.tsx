"use client";

import { seoContent } from "../data/seo-content";

import Image from "next/image";
import { useState } from "react";
import styles from "./seo-health-needs.module.css";

const steps = seoContent.process.steps;

export default function SeoHealthNeeds() {
  const [active, setActive] = useState(0);
  return (
    <section className={styles.section} aria-labelledby="seo-health-heading">
      <div className={styles.layout}>
        <div className={styles.left}>
          <header><p className={styles.eyebrow}>{seoContent.process.eyebrow}</p><h2 id="seo-health-heading" aria-label={seoContent.process.title}>A Clear SEO Process Built for<br className="hidden lg:block" /> Long-Term Results</h2></header>
          <div className={styles.testimonial}>
            <svg viewBox="0 0 42 35" className={styles.quoteIcon} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M17 5H5v13h6c0 6-2 8-5 11 9-2 12-8 12-15V5Zm20 0H25v13h6c0 6-2 8-5 11 9-2 12-8 12-15V5Z" /></svg>
            <div aria-live="polite" aria-atomic="true"><blockquote>{steps[active].quote}</blockquote><p className={styles.author}><span className={styles.avatar} aria-hidden="true"/><span>{steps[active].name}<small>SEO process</small></span></p></div>
            <div className={styles.controls}><button type="button" onClick={() => setActive((active + steps.length - 1) % steps.length)} aria-label="Previous SEO step">‹</button><button type="button" onClick={() => setActive((active + 1) % steps.length)} aria-label="Next SEO step">›</button></div>
          </div>
        </div>
        <div className={styles.mosaic}>
          <div className={styles.consultation}><Image quality={95} src="/images/seo/graphics/technical-audit.webp" alt="Technical SEO specialists reviewing site speed, crawl structure and audit findings" fill sizes="(max-width:767px) 43vw, 24vw" className="object-cover" /></div>
          <div className={styles.patients}><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="20" cy="20" r="15"/><path d="M13 24q7 9 14 0"/><circle cx="14" cy="15" r="1.5" fill="currentColor"/><circle cx="26" cy="15" r="1.5" fill="currentColor"/></svg><strong>5</strong><p>Clear SEO Steps</p></div>
          <div className={styles.reviews}><span className={styles.google} aria-hidden="true">G</span><strong>SEO</strong><p>Monthly Progress Reports</p></div>
          <div className={styles.care}><Image quality={95} src="/images/seo/graphics/authority-content.webp" alt="Content strategists planning editorial content and ethical outreach" fill sizes="(max-width:767px) 43vw, 24vw" className="object-cover" /></div>
        </div>
      </div>
    </section>
  );
}
