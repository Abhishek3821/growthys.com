import Image from "next/image";
import styles from "./content-marketing-selected-work.module.css";

const projects = [
  { name: "FinTrack – Finance App", category: "Mobile App Design", description: "A personal finance app to track expenses, budgets and savings goals.", theme: "finance" },
  { name: "Shopzy – E-commerce", category: "Web Design", description: "A clean and modern e-commerce website designed for fashion lovers.", theme: "shop" },
  { name: "Healthi – Wellness App", category: "Mobile App Design", description: "A wellness app that helps users build healthy habits and track progress.", theme: "health" },
  { name: "Taskly – Team Workspace", category: "Dashboard Design", description: "An intuitive workspace to organize projects and keep teams connected.", theme: "workspace" },
];

function ProjectPreview({ theme }: { theme: string }) {
  if (theme === "shop") return <div className={styles.browser}><div className={styles.browserBar}><b>shopzy.</b><span>New arrivals · Collections</span></div><div className={styles.shopHero}><div><small>THE NEW EDIT</small><strong>Summer<br />Collection.</strong><span>Explore collection →</span></div><div className={styles.shopPhoto}><Image src="/images/content-marketing/designer/portrait.webp" alt="" fill sizes="150px" className="object-cover" /></div></div><div className={styles.swatches}><i /><i /><i /><i /></div></div>;
  if (theme === "workspace") return <div className={styles.dashboard}><aside><b>taskly.</b><span>Overview</span><span>My projects</span><span>Team</span><span>Calendar</span></aside><div className={styles.dashboardBody}><b>Let’s make it happen.</b><div className={styles.metrics}><span>24<small>Projects</small></span><span>86%<small>Completed</small></span></div><div className={styles.chart}>{[40, 65, 48, 85, 60, 95, 75].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><small>Team activity</small><div className={styles.activity} /></div></div>;
  return <div className={styles.phones}>{[0, 1, 2].map((phone) => <div className={`${styles.phone} ${phone === 0 ? styles.primaryPhone : ""}`} key={phone}><div className={styles.notch} /><small>{theme === "finance" ? "FinTrack" : "healthi"}</small><b>{phone === 0 ? (theme === "finance" ? "$12,840" : "Feel your best.") : (theme === "finance" ? "Your activity" : "Daily progress")}</b><div className={styles.phoneGraphic}>{theme === "finance" ? "↗" : "♡"}</div><div className={styles.phoneTiles}><i /><i /></div><div className={styles.phoneLines}><i /><i /><i /></div><div className={styles.phoneNav}>⌂　◌　＋　▤</div></div>)}</div>;
}

export default function ContentMarketingSelectedWork() {
  return <section className={styles.section} aria-labelledby="content-selected-work-heading"><div className={styles.container}><header className={styles.heading}><h2 id="content-selected-work-heading">Selected <span>Work</span><svg aria-hidden="true" viewBox="0 0 30 32" fill="none"><path d="M15 25S1 16 4 8c2-6 9-4 11 1 3-8 13-6 12 1-1 9-12 20-19 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg></h2><p>A few projects I’m proud of.</p></header><div className={styles.grid}>{projects.map((project) => <article className={styles.card} key={project.name}><div className={`${styles.preview} ${styles[project.theme]}`} aria-hidden="true"><ProjectPreview theme={project.theme} /></div><div className={styles.copy}><h3>{project.name}</h3><span className={styles.category}>{project.category}</span><p>{project.description}</p><a href="/contact#contact-inquiry" aria-label={`Discuss a project like ${project.name}`}>Discuss Project <span aria-hidden="true">→</span></a></div></article>)}</div></div></section>;
}
