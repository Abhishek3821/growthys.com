import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/navbar";
import SiteFooter from "../../../components/site-footer";
import { getProject, projects } from "../../projects-data";
import styles from "./case-study.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return { title: "Project not found | Growthys" };
  return {
    title: `${project.name} — App Concept Case Study | Growthys`,
    description: project.overview,
    openGraph: { title: `${project.name} | Growthys`, description: project.overview, images: [{ url: `/images/portfolio/${project.slug}.webp`, alt: `${project.name} app concept` }] },
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <div className={styles.page} style={{ "--project-color": project.color } as CSSProperties}>
        <header className={styles.navigation}><Navbar onHomePage={false} currentPage="/portfolio" /></header>
        <main className={styles.main}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/portfolio">Portfolio</Link><span aria-hidden="true">/</span><Link href="/portfolio/projects">All Projects</Link><span aria-hidden="true">/</span><span aria-current="page">{project.name}</span></nav>
          <article>
            <header className={styles.hero}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>A Growthys app concept</p>
                <span className={styles.category}>{project.category}</span>
                <h1>{project.name}<span>.</span></h1>
                <p className={styles.lead}>{project.overview}</p>
                <a href="#project-overview" className={styles.primary}>Explore the project <span aria-hidden="true">↓</span></a>
                <p className={styles.caption}>Concept design · Mobile experience · UI/UX</p>
              </div>
              <div className={styles.heroVisual}>
                <Image src={`/images/portfolio/${project.slug}.webp`} alt={`${project.name} interface showcase featuring two mobile app screens`} width={800} height={800} preload sizes="(max-width: 760px) 100vw, 50vw" />
                <span className={styles.visualLabel}>The interface / {project.name}</span>
              </div>
            </header>

            <dl className={styles.facts}>
              <div><dt>Industry</dt><dd>{project.category}</dd></div>
              <div><dt>Experience</dt><dd>Mobile app</dd></div>
              <div><dt>Focus</dt><dd>Product &amp; interface design</dd></div>
              <div><dt>Project type</dt><dd>Concept exploration</dd></div>
            </dl>

            <section id="project-overview" className={styles.overview} aria-labelledby="overview-heading">
              <div><p className={styles.eyebrow}>01 / The idea</p><h2 id="overview-heading">Everyday needs.<br />Thoughtful design.</h2><p className={styles.note}>An exploration of how this product could look and feel.</p></div>
              <div className={styles.story}><div><h3>The challenge</h3><p>{project.challenge}</p></div><div><h3>The design approach</h3><p>{project.approach}</p></div></div>
            </section>

            <section className={styles.features} aria-labelledby="features-heading">
              <p className={styles.eyebrow}>02 / The experience</p>
              <h2 id="features-heading">Small details. A clearer experience.</h2>
              <div className={styles.featureGrid}>{project.features.map((feature, index) => <div className={styles.featureCard} key={feature.title}><span className={styles.featureNumber}>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></div>)}</div>
            </section>

            <section className={styles.journey} aria-labelledby="journey-heading">
              <div><p className={styles.eyebrow}>03 / The journey</p><h2 id="journey-heading">From first tap<br />to next step.</h2></div>
              <ol>{project.journey.map((step, index) => <li key={step}><span>0{index + 1}</span><h3>{step}</h3>{index < project.journey.length - 1 && <span className={styles.stepArrow} aria-hidden="true">→</span>}</li>)}</ol>
            </section>
          </article>

          <aside className={styles.nextProject} aria-labelledby="next-project-heading">
            <div><p className={styles.eyebrow}>Keep exploring</p><h2 id="next-project-heading">Next up: {nextProject.name}</h2><p>{nextProject.description}</p><Link href={`/portfolio/projects/${nextProject.slug}`} className={styles.nextLink}>View case study <span aria-hidden="true">↗</span></Link></div>
            <Link href={`/portfolio/projects/${nextProject.slug}`} aria-label={`Explore ${nextProject.name}`}><Image src={`/images/portfolio/${nextProject.slug}.webp`} alt={`${nextProject.name} mobile app concept preview`} width={800} height={800} sizes="(max-width: 600px) 100vw, 280px" /></Link>
          </aside>
          <section className={styles.cta} aria-labelledby="case-cta-heading"><p className={styles.eyebrow}>Your idea could be next</p><h2 id="case-cta-heading">Let’s build something great.</h2><div><Link href="/contact#contact-inquiry" className={styles.primary}>Start a Project <span aria-hidden="true">↗</span></Link><Link href="/portfolio/projects" className={styles.backLink}>← All Projects</Link></div></section>
        </main>
      </div>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" />
    </>
  );
}
