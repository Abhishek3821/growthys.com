import { contentMarketingContent } from "../data/content-marketing-content";
import Image from "next/image";
import styles from "./content-marketing-care-safety.module.css";

function CurvedArrow() {
  return <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 27C9-2 42 1 34 26c-5 15-24-3-9-12 12-8 27 11 46 4m-11-8 12 8-15 7"/></svg>;
}

export default function ContentMarketingCareSafety() {
  return <section className={styles.section} aria-labelledby="content-care-safety-heading"><div className={styles.container}>
    <header className={styles.heading}><h2 id="content-care-safety-heading">Very Good Content,<br/><span>Real Results!</span></h2><p>{contentMarketingContent.results.items.map((item, index) => <span key={item.title}>{index > 0 && " "}{item.title} — {item.description}</span>)}<br className="hidden lg:block"/>{contentMarketingContent.results.support.title} — {contentMarketingContent.results.support.description}</p></header>
    <div className={styles.grid}>
      <article className={`${styles.card} ${styles.records}`}><CurvedArrow/><h3>Review<br/>Content<br/>Audits</h3></article>
      <article className={`${styles.card} ${styles.checkups}`}><CurvedArrow/><h3>Monthly<br/>Content<br/>Calendar</h3></article>
      <div className={`${styles.photo} ${styles.consultation}`}><Image quality={95} src="/images/content-marketing/graphics/editorial-team.webp" alt="An editorial team reviewing article outlines and a publishing calendar" fill sizes="(max-width:767px) 90vw, 45vw" className="object-cover"/></div>
      <div className={`${styles.photo} ${styles.examination}`}><Image quality={95} src="/images/content-marketing/graphics/content-audit.webp" alt="A content audit with article inventory, search trends and performance reports" fill sizes="(max-width:767px) 90vw, 30vw" className="object-cover"/></div>
      <article className={`${styles.card} ${styles.pressure}`}><svg viewBox="0 0 90 50" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="4" width="79" height="42" rx="5"/><path d="M14 38V27h9v11m9 0V20h9v18m9 0V13h9v25m9 0V9h9v29M14 18l18-7 18 3 24-9"/></svg><h3>Check<br/>Performance Tracking</h3></article>
      <article className={`${styles.card} ${styles.doctors}`}><svg viewBox="0 0 45 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M8 5h22l7 7v31H8V5Zm22 0v9h7M14 21h15m-15 7h10m-10 7h7"/><path d="m20 41 15-19 5 4-16 18-6 2 2-5Z"/></svg><h3>Well-Qualified<br/>Writers &amp; Editors</h3></article>
      <div className={`${styles.photo} ${styles.doctor}`}><Image quality={95} src="/images/content-marketing/graphics/writer.webp" alt="A content writer reviewing an article draft" fill sizes="(max-width:767px) 60vw, 16vw" className="object-cover"/><span>24/7</span></div>
    </div>
    <svg viewBox="0 0 100 100" className={styles.spark} aria-hidden="true">{Array.from({length:12},(_,i)=><g key={i} transform={`rotate(${i*30} 50 50)`}><path d="M50 50V14" stroke="#8053b6" strokeWidth="2"/><circle cx="50" cy="9" r="3" fill="#8053b6"/></g>)}<circle cx="50" cy="50" r="5" fill="#8053b6"/></svg>
  </div></section>;
}
