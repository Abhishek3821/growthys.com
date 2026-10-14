import Image from "next/image";
import styles from "./ecommerce-marketing-position.module.css";

const responsibilities = [
  "List your responsibilities for this job",
  "Lead the key work areas",
  "Try to keep it short",
  "Give insight to the goal",
  "Don’t need long-winded information",
];

export default function EcommerceMarketingPosition() {
  return (
    <section aria-labelledby="ecommerce-position-heading" className={styles.section}>
      <div className={styles.poster}>
        <header className={styles.header}>
          <h2 id="ecommerce-position-heading">JOB POSITION</h2>
          <p className={styles.headerNote}>CAREER HISTORY<br />CREATIVE EXPERIENCE<span>HASU — VOL. 03</span></p>
        </header>
        <div className={styles.layout}>
          <div className={styles.portrait}>
            <Image src="/images/services/ecommerce-marketing-position.webp" alt="Black-and-white editorial portrait of a woman seated in a sunlit studio" fill sizes="(max-width: 767px) 90vw, 26vw" className="object-cover" />
          </div>
          <article className={styles.experience} aria-labelledby="ecommerce-position-company">
            <div className={styles.companyRow}>
              <h3 id="ecommerce-position-company">COMPANY NAME HERE</h3>
              <p>2023–2024</p>
            </div>
            <p className={styles.jobTitle}>JOB / POSITION TITLE HERE</p>
            <div className={styles.details}>
              <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <ul>{responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        </div>
      </div>
      <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR BRAND<br />IMPOSSIBLE TO IGNORE</span><span>DESIGNED TO LEAVE A MARK</span><span>HASU — 03</span></div>
    </section>
  );
}
