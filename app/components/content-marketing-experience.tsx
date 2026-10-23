import { contentMarketingContent } from "../data/content-marketing-content";
import Image from "next/image";
import styles from "./content-marketing-experience.module.css";

const jobs = contentMarketingContent.process.steps.slice(0, 2);
const education = contentMarketingContent.process.steps.slice(2, 4);

function ExperienceCard({ title, place, description }: { title: string; place: string; description: string }) {
  return <article className={styles.card}><h3>{title}</h3><p className={styles.place}>{place}</p><p className={styles.description}>{description}</p></article>;
}

export default function ContentMarketingExperience() {
  return <section className={styles.section} aria-labelledby="content-experience-heading"><div className={styles.container}>
    <header className={styles.heading}><h2 id="content-experience-heading">A Clear Process for<br/><span>Content That Performs</span></h2><p>{contentMarketingContent.process.intro}</p></header>
    <div className={styles.layout}>
      <div className={styles.column}>{jobs.map(job=><ExperienceCard key={job.title} {...job}/>)}</div>
      <div className={styles.character}><Image quality={95} src="/images/content-marketing/graphics/workflow.webp" alt="A connected content workflow from research and planning to writing and performance tracking" fill sizes="(max-width:767px) 70vw, 30vw" className="object-contain object-bottom"/><p className={styles.badge}>{contentMarketingContent.process.eyebrow}</p></div>
      <div className={styles.column}>{education.map(item=><ExperienceCard key={item.title} {...item}/>)}</div>
    </div>
    <span className={`${styles.dot} ${styles.dotOne}`} aria-hidden="true"/><span className={`${styles.dot} ${styles.dotTwo}`} aria-hidden="true"/><span className={`${styles.dot} ${styles.dotThree}`} aria-hidden="true"/><span className={`${styles.dot} ${styles.dotFour}`} aria-hidden="true"/>
  </div></section>;
}
