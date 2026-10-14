import Image from "next/image";
import styles from "./ecommerce-marketing-institution.module.css";

const subjects = [
  "List your main subjects",
  "Add the key expertise",
  "Keep the points concise",
  "Try to keep it short",
  "Give insight into the programme",
  "Include practical skills and tools",
  "Share your acquired abilities",
  "Focus on what you learned",
];

export default function EcommerceMarketingInstitution() {
  return (
    <section aria-labelledby="ecommerce-institution-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.portrait}>
          <Image src="/images/services/ecommerce-marketing-institution.webp" alt="A woman in a cream blazer standing beside a silver car in a city plaza" fill sizes="(max-width: 767px) 90vw, 28vw" className="object-cover" />
        </div>
        <div className={styles.content}>
          <div className={styles.institutionRow}>
            <h3>INSTITUTION NAME HERE</h3>
            <p>2023–2024</p>
          </div>
          <p className={styles.subjectLabel}>Principal subjects / occupational skills covered:</p>
          <div className={styles.details}>
            <div>
              <div className={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
              <div className={styles.thumbnails}>
                <div><Image src="/images/services/ecommerce-marketing-position.webp" alt="A monochrome fashion portrait in a sunlit studio" fill sizes="(max-width: 767px) 40vw, 19vw" className="object-cover" /></div>
                <div><Image src="/images/services/ecommerce-marketing-fashion.webp" alt="An editorial fashion portrait in a mint denim jacket" fill sizes="(max-width: 767px) 40vw, 19vw" className="object-cover" /></div>
              </div>
            </div>
            <ul className={styles.subjects}>{subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul>
          </div>
          <h2 id="ecommerce-institution-heading" className={styles.heading}>INSTITUTION</h2>
        </div>
        <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR BRAND<br />IMPOSSIBLE TO IGNORE</span><span>DESIGNED TO LEAVE A MARK</span><span>HASU — 04</span></div>
      </div>
    </section>
  );
}
