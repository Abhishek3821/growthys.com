import Image from "next/image";
import styles from "./social-media-curriculum.module.css";

const lessons = [
  { title: "Our Influential Curriculum", description: "Build a foundation for your creative journey." },
  { title: "Our Influential Curriculum", description: "Discover fresh ideas and practical techniques." },
  { title: "Our Influential Curriculum", description: "Develop your skills through hands-on learning." },
  { title: "Our Influential Curriculum", description: "Bring your knowledge into the real world." },
];

export default function SocialMediaCurriculum() {
  return <section className={styles.section} aria-labelledby="social-curriculum-heading"><div className={styles.layout}>
    <div className={styles.collage}>
      <span className={styles.frame} aria-hidden="true"/>
      <div className={styles.mainPhoto}><Image src="/images/services/seo-education-student.webp" alt="A student learning at her desk with headphones" fill sizes="(max-width:767px) 85vw, 34vw" className="object-cover"/></div>
      <div className={styles.designPhoto}><Image src="/images/hrms-portfolio/tablet.webp" alt="Creative work displayed on a tablet with design materials" fill sizes="(max-width:767px) 42vw, 17vw" className="object-cover"/></div>
      <div className={styles.workspacePhoto}><Image src="/images/app-development/agenda/project.webp" alt="A modern workspace with a computer and a wooden desk" fill sizes="(max-width:767px) 42vw, 17vw" className="object-cover"/></div>
      <div className={styles.featured}><span>FEATURED</span><strong>WORK</strong></div>
      <span className={styles.badge} aria-hidden="true">✦</span>
    </div>
    <div className={styles.content}><h2 id="social-curriculum-heading">Learning<br/>Curriculum<span>.</span></h2>
      <ol className={styles.lessons}>{lessons.map((lesson,index)=><li key={index}><span className={styles.number}>{String(index+1).padStart(2,"0")}</span><h3>{lesson.title}</h3><p>{lesson.description}</p></li>)}</ol>
    </div>
  </div></section>;
}
