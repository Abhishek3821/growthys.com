import Link from "next/link";
import styles from "./seo-reasons.module.css";

const reasons = [
  { title: "24/7 Support", kind: "support" },
  { title: "Top Guide", kind: "guide" },
  { title: "Best Course", kind: "course" },
] as const;

function ReasonIcon({ kind }: { kind: (typeof reasons)[number]["kind"] }) {
  return <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "support" && <><path d="M7 20v-5a11 11 0 0 1 22 0v7c0 5-3 8-8 8h-3"/><rect x="4" y="16" width="6" height="10" rx="3"/><rect x="26" y="16" width="6" height="10" rx="3"/><path d="M15 30h6"/></>}
    {kind === "guide" && <><circle cx="12" cy="11" r="5"/><path d="M3 30v-4a9 9 0 0 1 18 0v4M24 5v24m0-23h9v11h-9M8 23l4 5 4-5"/></>}
    {kind === "course" && <><rect x="4" y="5" width="28" height="21" rx="2"/><path d="M12 31h12m-6-5v5M4 21h28M11 10h5v7h-5zm10 0h5v7h-5z"/></>}
  </svg>;
}

export default function SeoReasons() {
  return <section className={styles.section} aria-labelledby="seo-reasons-heading"><div className={styles.container}>
    <h2 id="seo-reasons-heading">3 Reasons To Choose Us</h2>
    <div className={styles.cards}>{reasons.map(reason => <article key={reason.title} className={styles.card}>
      <span className={styles.icon}><ReasonIcon kind={reason.kind}/></span>
      <h3>{reason.title}</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <Link href="/contact#contact-inquiry" aria-label={`Read more about ${reason.title}`}>Read More <span aria-hidden="true">→</span></Link>
    </article>)}</div>
  </div></section>;
}
