import { socialMediaContent } from "../data/social-media-content";
import Image from "next/image";
import styles from "./social-media-about-care.module.css";

const features = socialMediaContent.about.features.map((item, index) => ({ title: item.title, secondLine: item.description, kind: ["wallet", "chat", "lock", "people"][index] }));

function CareIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "wallet" && <><rect x="5" y="6" width="22" height="21" rx="3"/><path d="M5 11h22M20 16h7v7h-7a3.5 3.5 0 0 1 0-7Z"/><circle cx="22" cy="19.5" r="1" fill="currentColor"/></>}
    {kind === "chat" && <><path d="M5 5h18v15H12l-6 5v-5H5V5ZM24 11h4v17l-6-5h-5"/><path d="M10 10h8m-8 4h6"/></>}
    {kind === "lock" && <><rect x="5" y="4" width="22" height="24" rx="3"/><path d="M10 10h12M10 15h7m-7 8v-4m6 4v-6m6 6v-9"/></>}
    {kind === "people" && <><circle cx="16" cy="9" r="4"/><path d="M9 28v-5a7 7 0 0 1 14 0v5M5 7a4 4 0 0 0 0 8m22-8a4 4 0 0 1 0 8M2 25v-4a5 5 0 0 1 4-5m24 9v-4a5 5 0 0 0-4-5"/></>}
  </svg>;
}

export default function SocialMediaAboutCare() {
  return <section className={styles.section} aria-labelledby="social-about-care-heading">
    <span className={styles.ribbon} aria-hidden="true"/>
    <div className={styles.panel}>
      <p className={styles.eyebrow}>{socialMediaContent.about.eyebrow}</p>
      <div className={styles.grid}>
        <article className={styles.introduction}>
          <div className={styles.photo}><Image quality={95} src="/images/social-media/graphics/creative-team.webp" alt="An Indian social media creative team planning brand content and campaigns" fill sizes="(max-width:767px) 40vw, 22vw" className="object-cover"/></div>
          <div><h2 id="social-about-care-heading">{socialMediaContent.about.title}</h2><p>{socialMediaContent.about.description}</p></div>
        </article>
        <article className={styles.members}><h3>{socialMediaContent.about.impressions.title}</h3><p>{socialMediaContent.about.impressions.description}</p><svg viewBox="0 0 150 110" className={styles.conversation} aria-hidden="true"><rect x="8" y="5" width="70" height="22" rx="5" fill="#d8e2d5" stroke="#8d9c8c"/><path d="m48 27 9 8v-8" fill="#d8e2d5" stroke="#8d9c8c"/><rect x="94" y="10" width="40" height="24" rx="5" fill="#f89b81"/><path d="m102 34-5 8 13-8" fill="#f89b81"/><rect x="12" y="76" width="120" height="23" rx="8" fill="#2e3531"/><path d="M32 63h32l-3 24H22Z" fill="#f68664"/><path d="M85 64h29l10 23H83Z" fill="#f68664"/><circle cx="45" cy="50" r="12" fill="#efbb93"/><path d="M33 46q2-24 22-8l3 15-8-7-17 0Z" fill="#343b33"/><circle cx="99" cy="51" r="12" fill="#efbb93"/><path d="M88 43q12-19 22 2l-10-3-12 1Z" fill="#343b33"/><path d="m54 69 17 8 20-8" fill="none" stroke="#efbb93" strokeWidth="8" strokeLinecap="round"/><path d="m32 97-4 12m31-12 3 12m32-12-4 12m30-12 4 12" stroke="#252b26" strokeWidth="7"/></svg></article>
        <div className={styles.features}>{features.map(feature=><article key={feature.kind}><span className={styles.icon}><CareIcon kind={feature.kind}/></span><h3>{feature.title}<br/>{feature.secondLine}</h3></article>)}</div>
      </div>
    </div>
  </section>;
}
