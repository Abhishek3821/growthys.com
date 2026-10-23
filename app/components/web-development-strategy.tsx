import { webDevelopmentContent } from "../data/web-development-content";
import styles from "./web-development-strategy.module.css";

export default function WebDevelopmentStrategy() {
  return (
    <section aria-labelledby="web-strategy-heading" className={styles.section}>
      <div className={styles.layout}>
        <h2 id="web-strategy-heading">Our Web<br />Development Strategy.</h2>
        <span className={styles.plus} aria-hidden="true">+</span>
        <article className={`${styles.card} ${styles.orange}`}>
          <h3>{webDevelopmentContent.strategy.items[0].title}</h3>
          <p>{webDevelopmentContent.strategy.items[0].description}{" "}{webDevelopmentContent.strategy.description}</p>
        </article>
        <article className={`${styles.card} ${styles.navy}`}>
          <h3>{webDevelopmentContent.strategy.items[1].title}</h3>
          <p>{webDevelopmentContent.strategy.items[1].description}</p>
        </article>
        <article className={`${styles.card} ${styles.blue}`}>
          <h3>{webDevelopmentContent.strategy.items[2].title}</h3>
          <p>{webDevelopmentContent.strategy.items[2].description}</p>
        </article>
        <div className={styles.highlight}>
          <span className={styles.icon} aria-hidden="true"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 9 31-3-11 29-7-13L5 9Zm13 13L36 6M18 22l-1 10 8-7" /></svg></span>
          <p>{webDevelopmentContent.strategy.intro}</p>
        </div>
      </div>
    </section>
  );
}
