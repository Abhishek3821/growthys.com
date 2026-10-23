import { seoContent } from "../data/seo-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./seo-education.module.css";

const courses = seoContent.about.progress;

export default function SeoEducation() {
  return (
    <section aria-labelledby="seo-education-heading" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.visual}>
          <span className={styles.backdrop} aria-hidden="true" />
          <div className={styles.photo}><Image quality={95} src="/images/seo/graphics/seo-team.webp" alt="An SEO analyst, content strategist and developer reviewing organic search performance together" fill sizes="(max-width: 767px) 85vw, 46vw" className="object-cover" /></div>
          <div className={styles.rating} aria-label="Excellent rating, 4.7 out of 5"><p>Excellent</p><div className={styles.ratingBody}><span className={styles.stars} aria-hidden="true">★★★★★</span><strong>4.7</strong><span className={styles.ratingLabel}>Client Reviews</span></div></div>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{seoContent.about.eyebrow}</p>
          <h2 id="seo-education-heading">{seoContent.about.title}</h2>
          <p className={styles.description}>{seoContent.about.paragraphs.join(" ")}</p>
          <div className={styles.progressList}>{courses.map((course) => <div key={course.name}><div className={styles.progressLabel}><span>{course.name}</span><span>{course.value}%</span></div><div role="progressbar" aria-label={course.name} aria-valuemin={0} aria-valuemax={100} aria-valuenow={course.value} className={styles.track}><span style={{ width: `${course.value}%` }} /></div></div>)}</div>
          <Link href="/contact#contact-inquiry" className={styles.button}>Discuss Your SEO Plan</Link>
        </div>
      </div>
    </section>
  );
}
