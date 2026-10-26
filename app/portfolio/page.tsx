import type { Metadata } from "next";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import SocialIcon from "../components/social-icon";
import { socialLinks } from "../data/social-links";
import styles from "./portfolio.module.css";
import PortfolioServices from "./portfolio-services";
import SelectedWork from "./selected-work";
import PortfolioCta from "./portfolio-cta";
import SiteFooter from "../components/site-footer";
import { growthysShowcaseContent as content } from "../data/growthys-showcase-content";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/portfolio" },
  title: "Portfolio | Growthys",
  description: content.hero.description,
}, "/portfolio");

export default function PortfolioPage() {
  return (
    <>
    <main className={styles.page}><PageStructuredData path="/portfolio" metadata={metadata} />
      <header className={styles.header}>
        <Navbar onHomePage={false} currentPage="/portfolio" />
      </header>
      <section className={styles.hero} aria-labelledby="portfolio-heading">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{content.hero.eyebrow}</p>
          <h1 id="portfolio-heading" className={styles.heading}>
            {`${content.hero.title.split(". ")[0]}. `}<span>{content.hero.title.split(". ")[1]}</span>
          </h1>
          <p className={styles.description}>
            {content.hero.description}
          </p>
          <div className={styles.actions}>
            <Link href="/contact#contact-inquiry" className={styles.primary}>
              {content.hero.actions[0]} <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="#about-growthys" className={styles.secondary}>
              {content.hero.actions[1]} <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
          <div className={styles.socials}>
            <span>Let’s connect</span>
            {socialLinks.map(({ name, href }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Growthys on ${name} (opens in a new tab)`} title={`Growthys on ${name}`}>
                <SocialIcon name={name} />
              </a>
            ))}
            <a href="mailto:growthysofficial@gmail.com" aria-label="Email Growthys" title="growthysofficial@gmail.com">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
        <div className={styles.artwork}>
          <Image src="/images/portfolio/hero.webp" alt="Illustration of a laptop with a code editor, a mobile app, a leafy plant, and a Growthys coffee mug against a pink backdrop." width={1024} height={1024} preload sizes="(max-width: 760px) 100vw, 55vw" className={styles.illustration} />
        </div>
      </section>
      <section id="about-growthys" className={styles.about} aria-labelledby="about-heading">
        <svg className={styles.topWave} viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0H1440V38C1260-18 1190 88 970 45S730 5 540 43 210-20 0 46Z" fill="#fffaf7" /></svg>
        <div className={styles.aboutInner}>
          <div className={styles.aboutArtwork}>
            <Image src="/images/portfolio/about.webp" alt="Illustration of a developer in a navy hoodie working on a Growthys laptop, with a plant, coffee, and creative doodles." width={1200} height={900} sizes="(max-width: 760px) 100vw, 46vw" className={styles.aboutIllustration} />
          </div>
          <div className={styles.aboutCopy}>
            <p className={styles.aboutEyebrow}>{content.about.eyebrow}</p>
            <h2 id="about-heading" className={styles.aboutHeading}>{content.about.title}</h2>
            {content.about.paragraphs.map((paragraph) => <p className={styles.aboutDescription} key={paragraph}>{paragraph}</p>)}
            <dl className={styles.stats}>
              <div className={styles.stat}>
                <div className={`${styles.statIcon} ${styles.pink}`} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="m16 3 4 3 5 1 1 5 3 4-3 4-1 5-5 1-4 3-4-3-5-1-1-5-3-4 3-4 1-5 5-1Z" /><path d="m11 16 3 3 7-7" /></svg></div>
                <dt>{content.about.stats[0].label}</dt><dd>{content.about.stats[0].value}</dd>
              </div>
              <div className={styles.stat}>
                <div className={`${styles.statIcon} ${styles.green}`} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><rect x="4" y="5" width="24" height="23" rx="3" /><path d="M4 12h24M10 3v5m12-5v5m-9 9-3 3 3 3m6-6 3 3-3 3" /></svg></div>
                <dt>{content.about.stats[1].label}</dt><dd>{content.about.stats[1].value}</dd>
              </div>
              <div className={styles.stat}>
                <div className={`${styles.statIcon} ${styles.yellow}`} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><circle cx="13" cy="10" r="5" /><path d="M3 27v-3a10 10 0 0 1 20 0v3H3Zm18-22a5 5 0 0 1 0 10m4 3a9 9 0 0 1 4 7v2h-3" /></svg></div>
                <dt>{content.about.stats[2].label}</dt><dd>{content.about.stats[2].value}</dd>
              </div>
              <div className={styles.stat}>
                <div className={`${styles.statIcon} ${styles.lavender}`} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 13h18v7a9 9 0 0 1-18 0v-7Zm18 1h2a5 5 0 0 1 0 10h-3M3 29h24M10 9c-3-3 3-3 0-6m5 6c-3-3 3-3 0-6m5 6c-3-3 3-3 0-6" /></svg></div>
                <dt>{content.about.stats[3].label}</dt><dd>{content.about.stats[3].value}</dd>
              </div>
            </dl>
          </div>
        </div>
        <svg className={styles.bottomWave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 42C180-5 240 78 430 40S660 8 850 39 1100 4 1280 30 1400 38 1440 30V60H0Z" fill="#fffaf7" /></svg>
      </section>
      <SelectedWork />
      <PortfolioServices />
      <PortfolioCta />
    </main>
    <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" brandCopy={content.brand} />
    </>
  );
}
