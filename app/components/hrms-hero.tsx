import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./hrms-hero.module.css";
import { hrmsContent } from "../data/hrms-content";

const features = hrmsContent.hero.roles;

function FeatureIcon({ kind }: { kind: (typeof features)[number]["icon"] }) {
  return <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "design" && <><path d="m7 19 10-10 3 3-10 10H7v-3ZM15 11l3 3M8 6h12v3M5 10v13h13" /></>}
    {kind === "photo" && <><path d="M5 9h5l2-3h5l2 3h4v14H5V9Z"/><circle cx="14" cy="16" r="4"/></>}
    {kind === "freelance" && <><path d="M5 6h18v13H5V6Zm-2 17h22M11 11l-3 3 3 3m6-6 3 3-3 3"/></>}
  </svg>;
}

export default function HrmsHero() {
  return <div className={styles.hero}>
    <header className={styles.header}><Navbar onHomePage={false} currentPage="/hrms-software" /></header>
    <section className={styles.content} aria-labelledby="hrms-heading">
      <svg viewBox="0 0 230 420" className={styles.abstract} aria-hidden="true"><defs><pattern id="hrms-rings" width="85" height="85" patternUnits="userSpaceOnUse">{[12,22,32,42,52].map(r=><circle key={r} cx="42" cy="42" r={r} fill="none" stroke="#131616" strokeWidth="1.2"/>)}</pattern></defs><path d="M0 0C80 90 45 112 120 190S235 315 115 340 65 400 0 420Z" fill="#242827"/><path d="M0 0C80 90 45 112 120 190S235 315 115 340 65 400 0 420Z" fill="url(#hrms-rings)"/></svg>
      <span className={styles.dots} aria-hidden="true"/>
      <div className={styles.copy}>
        <span className={styles.signature} aria-hidden="true">Growthys</span>
        <h1 id="hrms-heading">{hrmsContent.hero.title[0]}<br/><span>{hrmsContent.hero.title[1]}</span></h1>
        <p>{hrmsContent.hero.description}</p>
        <dl className={styles.details}><div><dt>{hrmsContent.hero.platform.label}:</dt><dd><Link href="/contact#contact-inquiry">{hrmsContent.hero.platform.value}</Link></dd></div><div><dt>{hrmsContent.hero.audience.label}:</dt><dd>{hrmsContent.hero.audience.value}</dd></div></dl>
        <div className={styles.actions}><Link href="/contact#contact-inquiry">Book a Free Demo</Link><Link href="/contact#contact-inquiry">Talk to Our Team</Link></div>
      </div>
      <div className={styles.artwork}><div className={styles.yellowShape}/><div className={styles.portrait}><Image src="/images/hrms/graphics/hero-hr-platform.webp" quality={95} alt="A connected HR platform illustration with an employee dashboard, attendance calendar, payroll and profile cards." fill preload sizes="(max-width:767px) 100vw, 54vw" className="object-contain object-bottom"/></div></div>
      <ul className={styles.features}>{features.map(feature=><li key={feature.title}><span className={`${styles.icon} ${feature.icon === "photo" ? styles.gold : ""}`}><FeatureIcon kind={feature.icon}/></span><div><h2>{feature.title}</h2><p>{feature.description}</p></div><span className={styles.chevron} aria-hidden="true">›</span></li>)}</ul>
    </section>
  </div>;
}
