import { uiUxContent } from "../data/ui-ux-content";
import Image from "next/image";
import styles from "./ui-ux-benefits.module.css";

export default function UiUxBenefits() {
  return (
    <section aria-labelledby="ui-ux-benefits-heading" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="ui-ux-benefits-heading">Design Decisions Backed<br className="hidden lg:block" /> by Real Numbers</h2>
          <p>{uiUxContent.showcase.intro}</p>
        </header>
        <div className={styles.cards}>
          <div className={styles.column}>
            <div className={`${styles.photo} ${styles.team}`}><Image quality={95} src="/images/ui-ux-design/graphics/checkout.webp" alt="A simplified e-commerce checkout journey shown across tablet and mobile" fill sizes="(max-width:767px) 90vw, 31vw" className="object-cover" /></div>
            <article className={`${styles.stat} ${styles.dark}`}><h3><strong>99%</strong><span>{uiUxContent.stats[0].label}</span></h3><p>{uiUxContent.stats[0].description}{uiUxContent.showcase.items.slice(0, 2).map(item => <span key={item.title}><br/><br/>{item.title} — {item.description}</span>)}</p></article>
          </div>
          <div className={styles.column}>
            <article className={`${styles.stat} ${styles.blue}`}><h3><strong>+91%</strong><span>{uiUxContent.stats[1].label}</span></h3><p>{uiUxContent.stats[1].description}{uiUxContent.showcase.items.slice(2, 4).map(item => <span key={item.title}><br/><br/>{item.title} — {item.description}</span>)}</p></article>
            <div className={`${styles.photo} ${styles.greeting}`}><Image quality={95} src="/images/ui-ux-design/graphics/healthcare-booking.webp" alt="A healthcare portal with clear doctor, date and appointment slot selection" fill sizes="(max-width:767px) 90vw, 31vw" className="object-cover" /></div>
          </div>
          <div className={styles.column}>
            <div className={`${styles.photo} ${styles.illustration}`}><Image quality={95} src="/images/ui-ux-design/graphics/travel-food.webp" alt="Travel booking and food delivery tracking interfaces with clear next steps" fill sizes="(max-width:767px) 90vw, 31vw" className="object-cover" /></div>
            <article className={`${styles.stat} ${styles.yellow}`}><h3><strong>12</strong><span>{uiUxContent.stats[2].label}</span></h3><p>{uiUxContent.stats[2].description}{uiUxContent.showcase.items.slice(4, 6).map(item => <span key={item.title}><br/><br/>{item.title} — {item.description}</span>)}</p></article>
          </div>
        </div>
      </div>
    </section>
  );
}
