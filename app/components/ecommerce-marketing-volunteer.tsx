import { ecommerceMarketingContent } from "../data/ecommerce-marketing-content";
import Image from "next/image";
import styles from "./ecommerce-marketing-volunteer.module.css";

const works = ecommerceMarketingContent.work.items.map((work, index) => ({ ...work, alt: ["Concept illustration of a full-funnel store rebuild and improved checkout", "Concept illustration of marketplace catalogue expansion across sales channels", "Concept illustration of email and SMS retention driving repeat purchases"][index] }));

export default function EcommerceMarketingVolunteer() {
  return (
    <section aria-labelledby="ecommerce-volunteer-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.content}>
          <p className={styles.introduction}>{ecommerceMarketingContent.reporting.title}</p>
          <div className={styles.description}>
            <p>{ecommerceMarketingContent.reporting.paragraphs[0]}</p>
            <p>{ecommerceMarketingContent.reporting.paragraphs[1]}</p>
          </div>
          <ul className={styles.tags} aria-label="Marketing reporting and client support">{ecommerceMarketingContent.reporting.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <h2 id="ecommerce-volunteer-heading">REAL<br />WORK</h2>
        </div>
        <div className={styles.works}>
          {works.map((work, index) => (
            <article key={work.title} className={styles.work} aria-labelledby={`volunteer-work-${index}`}>
              <p className={styles.verticalCopy}>REAL WORK, REAL OUTCOMES<br />ECOMMERCE PROJECTS<br />BUILD, EXPAND &amp; RETAIN</p>
              <div className={styles.photo}>
                <div className={styles.photoSheet} style={{ top: `${index * -100}%` }}>
                  <Image quality={95} src="/images/ecommerce-marketing/graphics/case-studies-sheet.webp" alt={work.alt} fill sizes="(max-width: 767px) 45vw, 25vw" className="object-cover" />
                </div>
              </div>
              <div className={styles.workDetails}>
                <p className={styles.year}>{work.year}</p>
                <h3 id={`volunteer-work-${index}`}>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR STORE<br />IMPOSSIBLE TO IGNORE</span><span>BUILT FOR COMPLETED ORDERS</span><span>GROWTHYS — 07</span></div>
      </div>
    </section>
  );
}
