import Image from "next/image";
import styles from "./ecommerce-marketing-education.module.css";

const timeline = [
  { label: "ONE", months: "JAN – FEB" },
  { label: "TWO", months: "FEB – MAR" },
  { label: "THREE", months: "MAR – APR" },
  { label: "FOUR", months: "APR – MAY" },
];

export default function EcommerceMarketingEducation() {
  return (
    <section aria-labelledby="ecommerce-education-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.timeline}>
          {timeline.map((step) => (
            <article key={step.label} className={styles.step} aria-labelledby={`education-${step.label.toLowerCase()}`}>
              <h3 id={`education-${step.label.toLowerCase()}`} className={styles.circle}>{step.label}</h3>
              <p className={styles.months}>{step.months}</p>
              <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul><li>Build a strong foundation</li><li>Explore new perspectives</li><li>Develop practical skills</li></ul>
              <span className={styles.pill}>LEARN MORE</span>
            </article>
          ))}
        </div>
        <div className={styles.visual}>
          <div className={styles.portrait}>
            <Image src="/images/ecommerce-marketing/hobbies/exploring.webp" alt="An editorial portrait of a woman in a summer dress outdoors" fill sizes="(max-width: 767px) 70vw, 24vw" className="object-cover" />
          </div>
          <p className={styles.verticalCopy}>LEARNING AND DEVELOPMENT<br />CREATIVE PERSPECTIVE<br />HASU — VOL. 06</p>
        </div>
        <p className={styles.summary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h2 id="ecommerce-education-heading" className={styles.heading}>EDUCATION</h2>
        <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR BRAND<br />IMPOSSIBLE TO IGNORE</span><span>DESIGNED TO LEAVE A MARK</span><span>HASU — 06</span></div>
      </div>
    </section>
  );
}
