import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects-data";
import styles from "./selected-work.module.css";
import { growthysShowcaseContent as content } from "../data/growthys-showcase-content";

function Arrow() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function SelectedWork({ allProjects = false }: { allProjects?: boolean }) {
  const Heading = allProjects ? "h1" : "h2";
  return (
    <section id="selected-work" className={`${styles.section} ${allProjects ? styles.catalogue : ""}`} aria-labelledby="work-heading">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>{content.work.eyebrow}</p>
            <Heading id="work-heading" className={styles.heading}>{allProjects ? "All Projects" : content.work.title}<svg viewBox="0 0 110 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9C35 3 64 3 91 4L62 11 106 9" /></svg></Heading>
          </div>
          <p className={styles.description}>{content.work.description}</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => {
            const copy = content.work.items.find((item) => item.slug === project.slug)!;
            return (
            <article className={styles.card} key={project.slug}>
              <Link href={`/portfolio/projects/${project.slug}`} aria-label={`Explore ${project.name}`} className={styles.previewLink}>
                <Image src={`/images/portfolio/${project.slug}.webp`} alt={`${project.name} app concept shown on two mobile screens`} width={800} height={800} sizes="(max-width: 520px) 100vw, (max-width: 1000px) 50vw, 33vw" className={styles.preview} />
              </Link>
              <div className={styles.cardBody}>
                <p className={styles.category}>{copy.category}</p>
                <h3><Link href={`/portfolio/projects/${project.slug}`}>{copy.title}</Link></h3>
                <p className={styles.cardDescription}>{copy.description}</p>
                <Link href={`/portfolio/projects/${project.slug}`} className={styles.caseLink} aria-label={`View ${project.name} concept case study`}>{copy.action} <Arrow /></Link>
              </div>
            </article>
          );})}
        </div>
        {!allProjects && <div className={styles.allProjects}><Link href="/portfolio/projects" className={styles.allButton}>See All Projects <Arrow /></Link></div>}
      </div>
      {!allProjects && <svg className={styles.wave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 42C180-5 240 78 430 40S660 8 850 39 1100 4 1280 30 1400 38 1440 30V60H0Z" fill="#f0edff" /></svg>}
    </section>
  );
}
