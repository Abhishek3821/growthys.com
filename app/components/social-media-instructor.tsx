import { socialMediaContent } from "../data/social-media-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./social-media-instructor.module.css";

const highlights = socialMediaContent.why.items.map((item, index) => ({ text: item.title, kind: (["agency", "students", "systems", "experience"] as const)[index] }));

function HighlightIcon({ kind }: { kind: (typeof highlights)[number]["kind"] }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "agency" && <><circle cx="10" cy="9" r="4"/><circle cx="23" cy="9" r="4"/><path d="M3 27v-6a7 7 0 0 1 14 0v6m1-11a7 7 0 0 1 12 5v6M11 23h11m-3-3 3 3-3 3"/></>}
    {kind === "students" && <><rect x="5" y="3" width="22" height="26" rx="2"/><path d="M10 9h12M10 13h8M10 24v-5m6 5v-8m6 8V14"/></>}
    {kind === "systems" && <><rect x="8" y="3" width="16" height="26" rx="3"/><path d="M13 7h6m-5 18h4"/><rect x="11" y="11" width="10" height="9" rx="1"/><path d="m15 13 4 3-4 2v-5Z"/></>}
    {kind === "experience" && <><path d="M5 18v-4a11 11 0 0 1 22 0v8c0 5-3 7-9 7"/><rect x="3" y="15" width="5" height="9" rx="2"/><rect x="24" y="15" width="5" height="9" rx="2"/><path d="M14 29h5"/></>}
  </svg>;
}

export default function SocialMediaInstructor() {
  return (
    <section className={styles.section} aria-labelledby="social-instructor-heading">
      <div className={styles.banner}>
        <div className={styles.photo}><Image quality={95} src="/images/social-media/graphics/creative-team.webp" alt="Social media strategists and designers reviewing a reel and content calendar" fill sizes="(max-width: 767px) 85vw, 28vw" className="object-cover" /></div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Why Growthys</p>
          <h2 id="social-instructor-heading">{socialMediaContent.why.title} <span aria-hidden="true">☺</span></h2>
          <p className={styles.description}>{socialMediaContent.why.intro}</p>
          <Link href="/contact#contact-inquiry" className={styles.button}>Discuss Your Social Strategy</Link>
        </div>
        <ul className={styles.highlights}>{highlights.map(highlight => <li key={highlight.kind}><HighlightIcon kind={highlight.kind} /><span>{highlight.text}</span></li>)}</ul>
      </div>
    </section>
  );
}
