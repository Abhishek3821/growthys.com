import { socialMediaContent } from "../data/social-media-content";
import Link from "next/link";
import styles from "./social-media-high-impact.module.css";

const services = socialMediaContent.why.items.map((item, index) => ({ ...item, icon: ["ui", "graphic", "branding", "website"][index] }));

function DesignIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 52 48" className={styles.icon} fill="none" aria-hidden="true">
    {kind === "ui" && <><rect x="6" y="6" width="38" height="28" rx="3" fill="#b5dded"/><path d="M21 34h8v5h-8z" fill="#7284b7"/><rect x="13" y="13" width="9" height="14" rx="1" fill="#a788d8"/><rect x="27" y="13" width="10" height="6" rx="1" fill="#f5d76a"/><path d="M28 24h9M28 28h6" stroke="#5d91a8" strokeWidth="2" strokeLinecap="round"/><path d="M17 40h17" stroke="#4ab3c3" strokeWidth="3" strokeLinecap="round"/></>}
    {kind === "graphic" && <><circle cx="24" cy="23" r="18" fill="#c3e5e5"/><path d="M24 5v18l15-10A18 18 0 0 0 24 5Z" fill="#f4cd64"/><path d="m24 23 15-10a18 18 0 0 1-2 23L24 23Z" fill="#ee7b93"/><path d="M24 23 37 36a18 18 0 0 1-25-1L24 23Z" fill="#8b7bc9"/><path d="m14 37 23-25 5 5-25 23-6 1 3-4Z" fill="#4b9ca9"/><path d="m37 12 5-5 5 5-5 5" fill="#f09f62"/></>}
    {kind === "branding" && <><path d="m12 5 4 5 6-1 3 5 6 2-1 6 3 5-5 4-2 6-6-1-5 3-4-5-6-2 1-6-3-5 5-4 4-12Z" fill="#52bdd1"/><circle cx="18" cy="23" r="8" fill="#fff7e1"/><path d="m25 35 16-19 5 5-19 17-5 1 3-4Z" fill="#f2ba67"/><path d="m38 19 4 4" stroke="#b67cd0" strokeWidth="3"/></>}
    {kind === "website" && <><rect x="5" y="6" width="38" height="29" rx="3" fill="#a886d7"/><path d="M5 14h38" stroke="#644bb2" strokeWidth="3"/><circle cx="11" cy="10" r="1.5" fill="#f9d27a"/><circle cx="17" cy="10" r="1.5" fill="#f4a1bd"/><rect x="11" y="20" width="12" height="9" rx="1" fill="#f5c35e"/><path d="M28 21h9m-9 5h7" stroke="#e9dff7" strokeWidth="2" strokeLinecap="round"/><path d="m24 38 19-18 4 5-21 16-5 1 3-4Z" fill="#ef78ac"/><path d="m41 22 4 4" stroke="#fbcf73" strokeWidth="2"/></>}
  </svg>;
}

export default function SocialMediaHighImpact() {
  return <section className={styles.section} aria-labelledby="social-high-impact-heading"><div className={styles.layout}>
    <header className={styles.intro}>
      <svg viewBox="0 0 35 35" className={styles.mark} aria-hidden="true"><rect x="3" y="3" width="12" height="12" fill="#f64b9b"/><rect x="16" y="16" width="12" height="12" fill="#68b9da"/></svg>
      <h2 id="social-high-impact-heading" aria-label={socialMediaContent.services.title}>High-Impact Services<br/>to Take Your Business<br/>to the Next Level</h2>
      <p>{socialMediaContent.services.intro}</p>
      <Link href="#social-impact-services" className={styles.button}>Explore Services</Link>
    </header>
    <div id="social-impact-services" className={styles.cards}>{services.map(service=><article key={service.title} className={styles.card}><DesignIcon kind={service.icon}/><h3>{service.title}</h3><p>{service.description}</p></article>)}</div>
  </div></section>;
}
