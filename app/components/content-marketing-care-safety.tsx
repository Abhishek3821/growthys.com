import Image from "next/image";
import styles from "./content-marketing-care-safety.module.css";

function CurvedArrow() {
  return <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 27C9-2 42 1 34 26c-5 15-24-3-9-12 12-8 27 11 46 4m-11-8 12 8-15 7"/></svg>;
}

export default function ContentMarketingCareSafety() {
  return <section className={styles.section} aria-labelledby="content-care-safety-heading"><div className={styles.container}>
    <header className={styles.heading}><h2 id="content-care-safety-heading">Very Good Caring and <span>Safety!</span></h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s<br className="hidden lg:block"/> standard dummy text ever since.</p></header>
    <div className={styles.grid}>
      <article className={`${styles.card} ${styles.records}`}><CurvedArrow/><h3>Review<br/>Your Medical<br/>Records</h3></article>
      <article className={`${styles.card} ${styles.checkups}`}><CurvedArrow/><h3>Monthly<br/>Checkups<br/>Available</h3></article>
      <div className={`${styles.photo} ${styles.consultation}`}><Image src="/images/content-marketing/care-safety/consultation.webp" alt="A doctor explaining medical documents to an older couple" fill sizes="(max-width:767px) 90vw, 45vw" className="object-cover"/></div>
      <div className={`${styles.photo} ${styles.examination}`}><Image src="/images/content-marketing/care-safety/examination.webp" alt="Medical professionals checking a patient's arm in a clinic" fill sizes="(max-width:767px) 90vw, 30vw" className="object-cover"/></div>
      <article className={`${styles.card} ${styles.pressure}`}><svg viewBox="0 0 90 50" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M2 26h10l4-10 6 24 7-34 5 20h8M52 4v15c0 16 22 16 22 0V4m-22 0h-5v17c0 23 32 23 32 0V4h-5M63 34v4c0 11 22 11 22 0V25"/><circle cx="84" cy="20" r="5"/></svg><h3>Check Blood<br/>Pressures</h3></article>
      <article className={`${styles.card} ${styles.doctors}`}><svg viewBox="0 0 45 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M22 8C11-2 3 5 6 18l4 23c1 7 7 7 8 0l2-12c1-4 4-4 5 0l2 12c1 7 7 7 8 0l4-23C42 5 33-2 22 8Z"/><path d="M14 13q4 3 8 0m10-2v11m-5-5h10"/></svg><h3>Well Qualified<br/>Doctors</h3></article>
      <div className={`${styles.photo} ${styles.doctor}`}><Image src="/images/content-marketing/care-safety/doctor.webp" alt="A smiling doctor holding a clipboard" fill sizes="(max-width:767px) 60vw, 16vw" className="object-cover"/><span>24/7</span></div>
    </div>
    <svg viewBox="0 0 100 100" className={styles.spark} aria-hidden="true">{Array.from({length:12},(_,i)=><g key={i} transform={`rotate(${i*30} 50 50)`}><path d="M50 50V14" stroke="#8053b6" strokeWidth="2"/><circle cx="50" cy="9" r="3" fill="#8053b6"/></g>)}<circle cx="50" cy="50" r="5" fill="#8053b6"/></svg>
  </div></section>;
}
