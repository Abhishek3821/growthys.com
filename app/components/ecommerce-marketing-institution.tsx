import { ecommerceMarketingContent } from "../data/ecommerce-marketing-content";
import Image from "next/image";
import styles from "./ecommerce-marketing-institution.module.css";

const subjects = ecommerceMarketingContent.platforms.items;

export default function EcommerceMarketingInstitution() {
  return (
    <section aria-labelledby="ecommerce-institution-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.portrait}>
          <Image quality={95} src="/images/ecommerce-marketing/graphics/platforms.webp" alt="Storefront connected to advertising, email, analytics and marketing integrations" fill sizes="(max-width: 767px) 90vw, 28vw" className="object-cover" />
        </div>
        <div className={styles.content}>
          <div className={styles.institutionRow}>
            <h3>PLATFORMS & TOOLS</h3>
            <p>YOUR STACK</p>
          </div>
          <p className={styles.subjectLabel}>{ecommerceMarketingContent.platforms.label}</p>
          <div className={styles.details}>
            <div>
              <div className={styles.description}>
            <p>{ecommerceMarketingContent.platforms.description}</p>
            <p>{ecommerceMarketingContent.platforms.custom}</p>
            <p>{ecommerceMarketingContent.perspective.title}</p>
            <p>{ecommerceMarketingContent.perspective.paragraphs[0]}</p>
            <p>{ecommerceMarketingContent.perspective.paragraphs[1]}</p>
            <p>{ecommerceMarketingContent.perspective.paragraphs[2]}</p>
          </div>
              <div className={styles.thumbnails}>
                <div><Image quality={95} src="/images/ecommerce-marketing/graphics/performance.webp" alt="Store conversion and revenue illustration" fill sizes="(max-width: 767px) 40vw, 19vw" className="object-cover" /></div>
                <div><Image quality={95} src="/images/ecommerce-marketing/graphics/hero.webp" alt="Online store with advertising and revenue growth tools" fill sizes="(max-width: 767px) 40vw, 19vw" className="object-cover" /></div>
              </div>
            </div>
            <ul className={styles.subjects}>{subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul>
          </div>
          <h2 id="ecommerce-institution-heading" className={styles.heading} aria-label={ecommerceMarketingContent.platforms.title}>PLATFORMS</h2>
        </div>
        <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR STORE<br />IMPOSSIBLE TO IGNORE</span><span>BUILT FOR COMPLETED ORDERS</span><span>GROWTHYS — 04</span></div>
      </div>
    </section>
  );
}
