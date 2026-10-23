import { seoContent } from "../data/seo-content";
import Link from "next/link";
import styles from "./seo-reasons.module.css";

const reasons = seoContent.reasons.items.map((item, index) => ({ ...item, kind: (["support", "guide", "course"] as const)[index] }));

function ReasonIcon({ kind }: { kind: (typeof reasons)[number]["kind"] }) {
  return <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "support" && <><rect x="4" y="4" width="28" height="23" rx="3"/><path d="M10 31h16m-8-4v4M9 22v-6m7 6V11m7 11v-9m-14-1 7-5 7 3 4-5"/></>}
    {kind === "guide" && <><path d="M18 3 30 8v10c0 7-6 12-12 15C12 30 6 25 6 18V8l12-5Z"/><path d="m12 17 4 4 8-9"/></>}
    {kind === "course" && <><rect x="3" y="5" width="30" height="22" rx="3"/><path d="M3 11h30M12 32h12m-6-5v5m-6-17-4 4 4 4m12-8 4 4-4 4m-4-8-4 8"/></>}
  </svg>;
}

export default function SeoReasons() {
  return <section className={styles.section} aria-labelledby="seo-reasons-heading"><div className={styles.container}>
    <h2 id="seo-reasons-heading">{seoContent.reasons.title}</h2>
    <div className={styles.cards}>{reasons.map(reason => <article key={reason.title} className={styles.card}>
      <span className={styles.icon}><ReasonIcon kind={reason.kind}/></span>
      <h3>{reason.title}</h3>
      <p>{reason.description}</p>
      <Link href="/contact#contact-inquiry" aria-label={`Read more about ${reason.title}`}>Read More <span aria-hidden="true">→</span></Link>
    </article>)}</div>
  </div></section>;
}
