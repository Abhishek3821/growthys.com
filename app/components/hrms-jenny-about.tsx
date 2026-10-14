import Image from "next/image";
import Link from "next/link";
import styles from "./hrms-jenny-about.module.css";

const skills = ["Mobile App Design", "UX/UI Design", "Website Design", "Design System", "Prototype", "Dashboard", "Wireframe Design"];
const stats = [
  { value: "250+", label: "Successful Projects" },
  { value: "25+", label: "Industry Covered" },
  { value: "150+", label: "Happy Customers" },
  { value: "16+", label: "Years of Experience" },
];

export default function HrmsJennyAbout() {
  return <section className={styles.section} aria-labelledby="hrms-jenny-heading">
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.visual}>
          <div className={styles.orangeShape} aria-hidden="true"/>
          <div className={styles.portrait}><Image src="/images/services/hrms-jenny-about.webp" alt="A smiling designer in a beige cap and glasses pointing to the side" fill sizes="(max-width:767px) 90vw, 40vw" className="object-contain object-bottom"/></div>
          <ul className={styles.skills} aria-label="Design skills">{skills.map((skill,index)=><li key={skill} className={styles[`skill${index}`]}>{skill}</li>)}</ul>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}><span className={styles.mark} aria-hidden="true"><i/><i/><i/></span> About Me</p>
          <h2 id="hrms-jenny-heading">Who is <span>Jenny Scott?</span><svg viewBox="0 0 28 28" fill="none" aria-hidden="true"><path d="M14 2v7m10-2-5 5m7 7-7-2M3 17l7-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg></h2>
          <p className={styles.description}>Hey there, I’m Jenny Scott — a product designer passionate about creating intuitive digital experiences that blend aesthetics with functionality.</p>
          <div className={styles.actions}><Link href="/contact#contact-inquiry">Contact Me <span aria-hidden="true">→</span></Link><span className={styles.signature} aria-hidden="true">Jenny Scott</span></div>
        </div>
      </div>
      <dl className={styles.stats}>{stats.map(stat=><div key={stat.label}><dd>{stat.value}</dd><dt>{stat.label}</dt><span className={styles.separator} aria-hidden="true"><i/><i/><i/></span></div>)}</dl>
    </div>
  </section>;
}
