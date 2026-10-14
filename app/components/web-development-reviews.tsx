import Image from "next/image";
import Link from "next/link";
import styles from "./web-development-reviews.module.css";

const reviewText = "Lorem ipsum dolor sit amet, vel atqui signiferumque, graece verear eu quo. In pri minim delectus, mea ad malis persius consequat.";

export default function WebDevelopmentReviews() {
  return (
    <section aria-labelledby="web-reviews-heading" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.bluePanel} aria-hidden="true" />
        <div className={styles.headingRow}>
          <h2 id="web-reviews-heading">Customer<br />Reviews.</h2>
          <p className={styles.count}>4,890 <span>+</span></p>
        </div>
        <div className={styles.reviews}>
          {[0, 1].map((index) => (
            <figure key={index} className={styles.review}>
              <div className={styles.avatar} style={{ backgroundPosition: index === 0 ? "66.667% 100%" : "0% 0%" }} role="img" aria-label="Customer portrait" />
              <span className={styles.quoteMark} aria-hidden="true">“</span>
              <blockquote>{reviewText}</blockquote>
            </figure>
          ))}
        </div>
        <div className={styles.portraitArea}>
          <span className={styles.circle} aria-hidden="true" />
          <div className={styles.portrait}>
            <Image src="/images/services/web-development-reviews.webp" alt="A smiling customer wearing glasses and a white shirt" fill sizes="(max-width: 767px) 85vw, 45vw" className="object-contain object-bottom" />
          </div>
        </div>
        <Link href="/contact#contact-inquiry" className={styles.contactLink}>LOREM IPSUM DOLOR SIT AMET !<span aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="m8 5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span></Link>
      </div>
    </section>
  );
}
