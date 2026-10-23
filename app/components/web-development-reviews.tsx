import { webDevelopmentContent } from "../data/web-development-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./web-development-reviews.module.css";

const reviews = webDevelopmentContent.reviews.items;

export default function WebDevelopmentReviews() {
  return (
    <section aria-labelledby="web-reviews-heading" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.bluePanel} aria-hidden="true" />
        <div className={styles.headingRow}>
          <h2 id="web-reviews-heading">Customer<br />Reviews.</h2>
          <p className={styles.count}>02 <span aria-hidden="true">“</span></p>
        </div>
        <div className={styles.reviews}>
          {reviews.map((review, index) => (
            <figure key={index} className={styles.review}>
              <div className={styles.avatar} style={{ backgroundPosition: index === 0 ? "66.667% 100%" : "0% 0%" }} role="img" aria-label={review.author.replace(/^— /, "")} />
              <span className={styles.quoteMark} aria-hidden="true">“</span>
              <blockquote>{review.quote}<br /><span>{review.author}</span></blockquote>
            </figure>
          ))}
        </div>
        <div className={styles.portraitArea}>
          <span className={styles.circle} aria-hidden="true" />
          <div className={styles.portrait}>
            <Image quality={95} src="/images/web-development/graphics/customer-experience.webp" alt="Illustration of a fast mobile website, successful enquiry and secure customer experience" fill sizes="(max-width: 767px) 85vw, 45vw" className="object-contain object-bottom" />
          </div>
        </div>
        <Link href="/contact#contact-inquiry" className={styles.contactLink}>{webDevelopmentContent.reviews.intro}<span aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="m8 5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span></Link>
      </div>
    </section>
  );
}
