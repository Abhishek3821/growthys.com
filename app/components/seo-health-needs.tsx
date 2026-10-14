"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./seo-health-needs.module.css";

const testimonials = [
  { quote: "The personal care was comprehensive, and the support I received from the doctors and staff was reassuring. Their focus was always on the wellbeing of their patients.", name: "Patient feedback" },
  { quote: "Every step was explained with care. Having a team that listened to my questions and understood my needs made all the difference.", name: "Patient experience" },
];

export default function SeoHealthNeeds() {
  const [active, setActive] = useState(0);
  return (
    <section className={styles.section} aria-labelledby="seo-health-heading">
      <div className={styles.layout}>
        <div className={styles.left}>
          <header><p className={styles.eyebrow}>Why Choose Our Care</p><h2 id="seo-health-heading">Unique Approach To Your<br className="hidden lg:block" /> Health Needs</h2></header>
          <div className={styles.testimonial}>
            <svg viewBox="0 0 42 35" className={styles.quoteIcon} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M17 5H5v13h6c0 6-2 8-5 11 9-2 12-8 12-15V5Zm20 0H25v13h6c0 6-2 8-5 11 9-2 12-8 12-15V5Z" /></svg>
            <div aria-live="polite" aria-atomic="true"><blockquote>{testimonials[active].quote}</blockquote><p className={styles.author}><span className={styles.avatar} aria-hidden="true"/><span>{testimonials[active].name}<small>Patient</small></span></p></div>
            <div className={styles.controls}><button type="button" onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">‹</button><button type="button" onClick={() => setActive((active + 1) % testimonials.length)} aria-label="Next testimonial">›</button></div>
          </div>
        </div>
        <div className={styles.mosaic}>
          <div className={styles.consultation}><Image src="/images/seo-health/consultation.webp" alt="A doctor and patient reviewing a tablet together" fill sizes="(max-width:767px) 43vw, 24vw" className="object-cover" /></div>
          <div className={styles.patients}><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="20" cy="20" r="15"/><path d="M13 24q7 9 14 0"/><circle cx="14" cy="15" r="1.5" fill="currentColor"/><circle cx="26" cy="15" r="1.5" fill="currentColor"/></svg><strong>25K+</strong><p>Happy Patients</p></div>
          <div className={styles.reviews}><span className={styles.google} aria-hidden="true">G</span><strong>4.9</strong><p>Google Ratings</p></div>
          <div className={styles.care}><Image src="/images/seo-health/patient-care.webp" alt="A nurse and doctor caring for an older patient" fill sizes="(max-width:767px) 43vw, 24vw" className="object-cover" /></div>
        </div>
      </div>
    </section>
  );
}
