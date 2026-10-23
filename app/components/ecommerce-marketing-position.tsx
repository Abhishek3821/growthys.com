import { ecommerceMarketingContent } from "../data/ecommerce-marketing-content";
import Image from "next/image";
import styles from "./ecommerce-marketing-position.module.css";

const responsibilities = ecommerceMarketingContent.track.services;

export default function EcommerceMarketingPosition() {
  return (
    <section aria-labelledby="ecommerce-position-heading" className={styles.section}>
      <div className={styles.poster}>
        <header className={styles.header}>
          <h2 id="ecommerce-position-heading" aria-label={ecommerceMarketingContent.track.title}>TRACK RECORD</h2>
          <p className={styles.headerNote}>ECOMMERCE BRANDS<br />REVENUE-FOCUSED WORK<span>GROWTHYS — VOL. 03</span></p>
        </header>
        <div className={styles.layout}>
          <div className={styles.portrait}>
            <Image quality={95} src="/images/ecommerce-marketing/graphics/performance.webp" alt="Monochrome illustration connecting storefront improvements, secure checkout and revenue" fill sizes="(max-width: 767px) 90vw, 26vw" className="object-cover" />
          </div>
          <article className={styles.experience} aria-labelledby="ecommerce-position-company">
            <div className={styles.companyRow}>
              <h3 id="ecommerce-position-company">BUILT ON CARTS,</h3>
              <p>NOT CLICKS</p>
            </div>
            <p className={styles.jobTitle}>Performance marketing, conversion-focused design & technical execution</p>
            <div className={styles.details}>
              <div className={styles.description}>
            <p>{ecommerceMarketingContent.track.paragraphs[0]}</p>
            <p>{ecommerceMarketingContent.track.paragraphs[1]}</p>
            <p>{ecommerceMarketingContent.track.paragraphs[2]}</p>
          </div>
              <ul>{responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        </div>
      </div>
      <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR STORE<br />IMPOSSIBLE TO IGNORE</span><span>BUILT FOR COMPLETED ORDERS</span><span>GROWTHYS — 03</span></div>
    </section>
  );
}
