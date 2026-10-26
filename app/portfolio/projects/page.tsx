import type { Metadata } from "next";
import { withSocialMetadata } from "../../lib/social-metadata";
import { PageStructuredData } from "../../components/structured-data";
import Link from "next/link";
import Navbar from "../../components/navbar";
import SiteFooter from "../../components/site-footer";
import SelectedWork from "../selected-work";
import styles from "../portfolio.module.css";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/portfolio/projects" },
  title: "All Projects | Growthys",
  description: "Explore Growthys app concepts across food delivery, e-commerce, personal finance, and fitness.",
}, "/portfolio/projects");

export default function AllProjectsPage() {
  return (
    <>
      <main className={styles.page}><PageStructuredData path="/portfolio/projects" metadata={metadata} />
        <header className={styles.header}>
          <Navbar onHomePage={false} currentPage="/portfolio" />
        </header>
        <div className={styles.projectsBack}>
          <Link href="/portfolio#selected-work">← Back to Portfolio</Link>
        </div>
        <SelectedWork allProjects />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" />
    </>
  );
}
