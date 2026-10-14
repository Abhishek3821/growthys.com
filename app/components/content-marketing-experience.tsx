import Image from "next/image";
import styles from "./content-marketing-experience.module.css";

const jobs = [
  { title: "Senior Full Stack Developer", place: "Tech Innovations Inc." },
  { title: "Frontend Developer", place: "Digital Solutions Ltd." },
];
const education = [
  { title: "Computer Science Degree", place: "University of Technology" },
  { title: "Full Stack Certification", place: "Coding Academy" },
];

function ExperienceCard({ title, place }: { title: string; place: string }) {
  return <article className={styles.card}><h3>{title}</h3><p className={styles.place}>{place}</p><p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facere.</p></article>;
}

export default function ContentMarketingExperience() {
  return <section className={styles.section} aria-labelledby="content-experience-heading"><div className={styles.container}>
    <header className={styles.heading}><h2 id="content-experience-heading">My <span>Experience</span></h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odio.</p></header>
    <div className={styles.layout}>
      <div className={styles.column}>{jobs.map(job=><ExperienceCard key={job.title} {...job}/>)}</div>
      <div className={styles.character}><Image src="/images/services/content-marketing-experience.webp" alt="A smiling 3D professional in glasses and a black suit with welcoming open hands" fill sizes="(max-width:767px) 70vw, 30vw" className="object-contain object-bottom"/><p className={styles.badge}>6+ Years Journey</p></div>
      <div className={styles.column}>{education.map(item=><ExperienceCard key={item.title} {...item}/>)}</div>
    </div>
    <span className={`${styles.dot} ${styles.dotOne}`} aria-hidden="true"/><span className={`${styles.dot} ${styles.dotTwo}`} aria-hidden="true"/><span className={`${styles.dot} ${styles.dotThree}`} aria-hidden="true"/><span className={`${styles.dot} ${styles.dotFour}`} aria-hidden="true"/>
  </div></section>;
}
