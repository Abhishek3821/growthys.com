import Image from "next/image";
import type { CSSProperties } from "react";
import portraits from "../../public/images/testimonial-portraits.webp";
import styles from "./testimonials-section.styles";

const columns = [
  { offset: 8.9, portraits: [0, 5] },
  { offset: 4.2, portraits: [1, 4] },
  { offset: 9.9, portraits: [2] },
  { offset: 4.8, portraits: [3] },
  { offset: 7.8, portraits: [4] },
  { offset: 4.5, portraits: [5] },
  { offset: 9.9, portraits: [6] },
  { offset: 4.2, portraits: [1, 2] },
  { offset: 8.9, portraits: [7, 6] },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testimonials-heading">
      <div className={styles.stage}>
        <div className={styles.portraitGrid} aria-hidden="true">
          {columns.map((column, columnIndex) => (
            <div className={styles.column} key={columnIndex} style={{ "--offset": `${column.offset}cqw` } as CSSProperties}>
              {column.portraits.map((portrait, portraitIndex) => (
                <div
                  key={portraitIndex}
                  className={`${styles.portrait} ${columnIndex === 7 && portraitIndex === 1 ? styles.featured : ""}`}
                >
                  <Image
                    src={portraits}
                    alt=""
                    className={styles.portraitImage}
                    sizes="(max-width: 700px) 80vw, (max-width: 1544px) 40vw, 576px"
                    style={{ left: `${(portrait % 4) * -100}%`, top: `${Math.floor(portrait / 4) * -100}%` }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <span className={styles.badge}>Testimonials</span>
          <h2 id="testimonials-heading">
            Trusted by leaders
            <span>from various industries</span>
          </h2>
          <p>{"Learn why professionals trust Growthys — a professional IT solutions provider in India and full-service digital marketing company — to complete their customer journeys."}</p>
          <button className={styles.button} type="button" disabled>
            Read Success Stories
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
