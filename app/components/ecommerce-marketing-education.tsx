import { ecommerceMarketingContent } from "../data/ecommerce-marketing-content";
import Image from "next/image";
import styles from "./ecommerce-marketing-education.module.css";

const timeline = ecommerceMarketingContent.growth.phases;

export default function EcommerceMarketingEducation() {
  return (
    <section aria-labelledby="ecommerce-education-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.timeline}>
          {timeline.map((step) => (
            <article key={step.label} className={styles.step} aria-labelledby={`education-${step.label.toLowerCase()}`}>
              <h3 id={`education-${step.label.toLowerCase()}`} className={styles.circle}>{step.label}</h3>
              <p className={styles.months}>{step.months}</p>
              <p className={styles.description}>{step.description}</p>
              <ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <span className={styles.pill}>{step.title}</span>
            </article>
          ))}
        </div>
        <div className={styles.visual}>
          <div className={styles.portrait}>
            <Image quality={95} src="/images/ecommerce-marketing/graphics/growth-plan.webp" alt="Four phases of store growth: audit, optimization, acquisition and retention" fill sizes="(max-width: 767px) 70vw, 24vw" className="object-cover" />
          </div>
          <p className={styles.verticalCopy}>AUDIT, OPTIMIZE, SCALE<br />RETAIN AND GROW<br />GROWTHYS — VOL. 06</p>
        </div>
        <p className={styles.summary}>{ecommerceMarketingContent.growth.intro}</p>
        <h2 id="ecommerce-education-heading" className={styles.heading} aria-label={ecommerceMarketingContent.growth.title}>GROWTH PLAN</h2>
        <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR STORE<br />IMPOSSIBLE TO IGNORE</span><span>BUILT FOR COMPLETED ORDERS</span><span>GROWTHYS — 06</span></div>
      </div>
    </section>
  );
}
