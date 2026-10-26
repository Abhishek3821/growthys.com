import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Portfolio | Growthys",
  description: "Digital products, websites, and mobile experiences designed and built by Growthys. Let's bring your next idea to life.",
};

export default function PortfolioPage() {
  return (
    <>
    <main className={styles.page}>
      <header className={styles.header}>
        <Navbar onHomePage={false} currentPage="/portfolio" />
      </header>
      <section className={styles.hero} aria-labelledby="portfolio-heading">
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Hi, we’re Growthys <span aria-hidden="true">👋</span></p>
          <h1 id="portfolio-heading" className={styles.heading}>
            We build digital<br />products<br />that <span>people love</span>
          </h1>
          <p className={styles.description}>
            We’re a team of designers and developers building fast, scalable,
            and beautiful web &amp; mobile experiences that solve real-world problems.
          </p>
          <div className={styles.actions}>
            <Link href="/contact#contact-inquiry" className={styles.primary}>
              Start a project <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/insights" className={styles.secondary}>
              About Growthys <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
            <p className={styles.aboutEyebrow}>About Growthys</p>
            <h2 id="about-heading" className={styles.aboutHeading}>Building apps<br />with <span>purpose<svg viewBox="0 0 180 16" preserveAspectRatio="none" aria-hidden="true"><path d="M3 10C50 2 124 2 173 5L119 12 176 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></span></h2>
            <p className={styles.aboutDescription}>We’re Growthys, a team bringing design and development together to build web and mobile apps.<br />We turn ideas into real products with clean code, thoughtful user experiences, and modern technologies.</p>
            <dl className={styles.stats}>
              <div className={styles.stat}>
                <div className={`${styles.statIcon} ${styles.pink}`} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="m16 3 4 3 5 1 1 5 3 4-3 4-1 5-5 1-4 3-4-3-5-1-1-5-3-4 3-4 1-5 5-1Z" /><path d="m11 16 3 3 7-7" /></svg></div>
                <dt>Combined experience</dt><dd>10+ Years</dd>
              </div>
              <div className={styles.stat}>
                <div className={`${styles.statIcon} ${styles.green}`} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><rect x="4" y="5" width="24" height="23" rx="3" /><path d="M4 12h24M10 3v5m12-5v5m-9 9-3 3 3 3m6-6 3 3-3 3" /></svg></div>
                <dt>Projects built</dt><dd>30+</dd>
              </div>
              <div className={styles.stat}>
                <div className={`${styles.statIcon} ${styles.yellow}`} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><circle cx="13" cy="10" r="5" /><path d="M3 27v-3a10 10 0 0 1 20 0v3H3Zm18-22a5 5 0 0 1 0 10m4 3a9 9 0 0 1 4 7v2h-3" /></svg></div>
                <dt>Happy clients</dt><dd>20+</dd>
              </div>
              <div className={styles.stat}>
                <div className={`${styles.statIcon} ${styles.lavender}`} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 13h18v7a9 9 0 0 1-18 0v-7Zm18 1h2a5 5 0 0 1 0 10h-3M3 29h24M10 9c-3-3 3-3 0-6m5 6c-3-3 3-3 0-6m5 6c-3-3 3-3 0-6" /></svg></div>
                <dt>Cups of coffee</dt><dd>∞</dd>
              </div>
            </dl>
          </div>
        </div>
        <svg className={styles.bottomWave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 42C180-5 240 78 430 40S660 8 850 39 1100 4 1280 30 1400 38 1440 30V60H0Z" fill="#f0edff" /></svg>
      </section>
      <PortfolioServices />
      <SelectedWork />
      <PortfolioCta />
    </main>
    <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" />
    </>
  );
}
