"use client";

import { useState, type FormEvent } from "react";
import styles from "./benefits-cta.styles";

export default function BenefitsCta() {
  const [showNotice, setShowNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Keep submissions local until a signup destination is configured.
    setShowNotice(true);
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="benefits-cta-heading">
      <div className={styles.card}>
        <h2 id="benefits-cta-heading">
          <span>Join teams around the world getting</span>{" "}
          <span><strong>90%+ engagement</strong> with their benefits</span>{" "}
          <span>programmes</span>
        </h2>
        <p className={styles.description}>Get any benefit, in any country, and make it flexible, all without the painful admin. Budget-friendly. No hidden fees. No surprises.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.emailField}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <label className={styles.srOnly} htmlFor="benefits-email">Your email address</label>
              <input id="benefits-email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required aria-describedby="benefits-privacy" onChange={() => setShowNotice(false)} />
            </div>
            <button className={styles.submitButton} type="submit">Get started</button>
          </div>
          <p className={styles.privacy} id="benefits-privacy">By submitting you agree to our privacy policy.</p>
          {showNotice && <p className={styles.notice} role="status">Online sign-up is coming soon.</p>}
        </form>
      </div>
    </section>
  );
}
