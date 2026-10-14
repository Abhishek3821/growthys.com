import Image from "next/image";
import styles from "./ui-ux-benefits.module.css";

export default function UiUxBenefits() {
  return (
    <section aria-labelledby="ui-ux-benefits-heading" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="ui-ux-benefits-heading">Pre-tax benefits tailored<br className="hidden lg:block" /> to your workforce’s needs</h2>
          <p>Malloy Banks helps create and communicate the ideal pre-tax accounts strategy for you and your team</p>
        </header>
        <div className={styles.cards}>
          <div className={styles.column}>
            <div className={`${styles.photo} ${styles.team}`}><Image src="/images/ui-ux-design/benefits/team.webp" alt="Three colleagues smiling as they review a laptop together" fill sizes="(max-width:767px) 90vw, 31vw" className="object-cover" /></div>
            <article className={`${styles.stat} ${styles.dark}`}><h3><strong>99%</strong><span>Consumer readiness</span></h3><p>After enrolling in a Malloy Banks account, nearly every individual surveyed feels more informed about their pre-tax accounts</p></article>
          </div>
          <div className={styles.column}>
            <article className={`${styles.stat} ${styles.blue}`}><h3><strong>+91%</strong><span>Plan awareness</span></h3><p>9 out of 10 employers report increased plan awareness using Malloy Banks’ interactive engagement tools</p></article>
            <div className={`${styles.photo} ${styles.greeting}`}><Image src="/images/ui-ux-design/benefits/greeting.webp" alt="A woman in a yellow blouse greeting a colleague in the office" fill sizes="(max-width:767px) 90vw, 31vw" className="object-cover" /></div>
          </div>
          <div className={styles.column}>
            <div className={`${styles.photo} ${styles.illustration}`}><Image src="/images/ui-ux-design/benefits/chair.webp" alt="Illustration of a professional in a blue blazer seated in an office chair" fill sizes="(max-width:767px) 90vw, 31vw" className="object-cover" /></div>
            <article className={`${styles.stat} ${styles.yellow}`}><h3><strong>12</strong><span>Account options</span></h3><p>Up to twelve different pre-tax account options</p></article>
          </div>
        </div>
      </div>
    </section>
  );
}
