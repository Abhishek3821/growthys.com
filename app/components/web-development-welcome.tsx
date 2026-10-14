import Image from "next/image";
import styles from "./web-development-welcome.module.css";

export default function WebDevelopmentWelcome() {
  return (
    <section aria-labelledby="web-development-welcome-heading" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <h2 id="web-development-welcome-heading">Welcome to<br />Our Company.</h2>
          <div className={styles.stat}>
            <p className={styles.number}>2.9M</p>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum adipiscing sem, eu feugiat magna consectetur. Nam maximus nunc sit amet orci tincidunt, nec viverra sapien pellentesque.</p>
          </div>
        </div>
        <div className={styles.photo}>
          <Image src="/images/crm-management/team/creative.webp" alt="A creative team collaborating around a laptop in their office" fill sizes="(max-width: 767px) 90vw, 50vw" className="object-cover" />
        </div>
        <div className={styles.supportDecoration} aria-hidden="true">
          <span className={styles.largeCircle} />
          <span className={styles.smallCircle} />
          <div className={styles.supportLabel}>
            <svg viewBox="0 0 32 32" fill="none"><path d="M16 2v4m0 20v4M2 16h4m20 0h4M6 6l3 3m14 14 3 3M6 26l3-3M23 9l3-3" stroke="#f6cf8b" strokeWidth="2" strokeLinecap="round" /><circle cx="16" cy="16" r="7" fill="#dfa24e" /></svg>
            <span>MARKETING SUPPORT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
