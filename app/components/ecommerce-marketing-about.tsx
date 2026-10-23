import { ecommerceMarketingContent } from "../data/ecommerce-marketing-content";
import Image from "next/image";
import styles from "./ecommerce-marketing-about.module.css";

export default function EcommerceMarketingAbout() {
  return (
    <section aria-labelledby="ecommerce-about-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.portrait}>
          <Image quality={95} src="/images/ecommerce-marketing/graphics/about.webp" alt="Ecommerce founder and marketing specialist reviewing a store and sales results" fill sizes="(max-width: 767px) 90vw, 47vw" className="object-cover" />
        </div>
        <div className={styles.content}>
          <p className={styles.introduction}>{ecommerceMarketingContent.about.title}</p>
          <div className={styles.description}>
            <p>{ecommerceMarketingContent.about.paragraphs[0]}</p>
            <p>{ecommerceMarketingContent.about.paragraphs[1]}</p>
          </div>
          <ul className={styles.tags} aria-label="Ecommerce growth goals">
            <li>Traffic</li><li>Conversion</li><li>Retention</li>
          </ul>
          <div className={styles.headingRow}>
            <h2 id="ecommerce-about-heading">YOUR<br />STORE</h2>
            <p className={styles.verticalCopy}>STORE DISCOVERY<br />BUYING BEHAVIOUR<br />GROWTHYS STUDIO — 2026</p>
          </div>
        </div>
        <div className={styles.footer} aria-hidden="true">
          <span>LET’S MAKE YOUR STORE<br />IMPOSSIBLE TO IGNORE</span>
          <span>BUILT FOR COMPLETED ORDERS</span>
          <span>GROWTHYS — 02</span>
        </div>
      </div>
    </section>
  );
}
