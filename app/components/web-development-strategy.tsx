import styles from "./web-development-strategy.module.css";

export default function WebDevelopmentStrategy() {
  return (
    <section aria-labelledby="web-strategy-heading" className={styles.section}>
      <div className={styles.layout}>
        <h2 id="web-strategy-heading">Marketing<br />Strategy Plan.</h2>
        <span className={styles.plus} aria-hidden="true">+</span>
        <article className={`${styles.card} ${styles.orange}`}>
          <h3>Lorem ipsum dolor sit amet, at vel utinam signiferumque, graece verear.</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>
        <article className={`${styles.card} ${styles.navy}`}>
          <h3>Lorem ipsum dolor</h3>
          <p>Lorem ipsum dolor sit amet, at vel utinam signiferumque, graece verear. In pri minim delectus, mea ad malis persius consequat.</p>
        </article>
        <article className={`${styles.card} ${styles.blue}`}>
          <h3>Lorem ipsum dolor</h3>
          <p>Lorem ipsum dolor sit amet, at vel utinam signiferumque, graece verear. In pri minim delectus, mea ad malis persius consequat.</p>
        </article>
        <div className={styles.highlight}>
          <span className={styles.icon} aria-hidden="true"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 9 31-3-11 29-7-13L5 9Zm13 13L36 6M18 22l-1 10 8-7" /></svg></span>
          <p>LOREM IPSUM DOLOR<br />SIT AMET, AT VEL<br />UTINAM!</p>
        </div>
      </div>
    </section>
  );
}
