import Image from "next/image";
import Link from "next/link";
import styles from "./seo-education.module.css";

const courses = [
  { name: "IT & Web Programming Institutes", value: 65 },
  { name: "Business & Marketing Institutes", value: 51 },
  { name: "Finance & Accounting Institutes", value: 71 },
];

export default function SeoEducation() {
  return (
    <section aria-labelledby="seo-education-heading" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.visual}>
          <span className={styles.backdrop} aria-hidden="true" />
          <div className={styles.photo}><Image src="/images/services/seo-education-student.webp" alt="A student in a lavender sweatshirt studying with headphones" fill sizes="(max-width: 767px) 85vw, 46vw" className="object-cover" /></div>
          <div className={styles.rating} aria-label="Excellent rating, 4.7 out of 5"><p>Excellent</p><div className={styles.ratingBody}><span className={styles.stars} aria-hidden="true">★★★★★</span><strong>4.7</strong><span className={styles.ratingLabel}>Student Reviews</span></div></div>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>WHO WE ARE</p>
          <h2 id="seo-education-heading">Primary Instruction, Higher Department Of Education.</h2>
          <p className={styles.description}>Advance your knowledge with expert instruction made for you. Build practical skills, explore new opportunities, and take the next step towards your future.</p>
          <div className={styles.progressList}>{courses.map((course) => <div key={course.name}><div className={styles.progressLabel}><span>{course.name}</span><span>{course.value}%</span></div><div role="progressbar" aria-label={course.name} aria-valuemin={0} aria-valuemax={100} aria-valuenow={course.value} className={styles.track}><span style={{ width: `${course.value}%` }} /></div></div>)}</div>
          <Link href="/contact#contact-inquiry" className={styles.button}>Discover more</Link>
        </div>
      </div>
    </section>
  );
}
