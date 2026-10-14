import Image from "next/image";
import Link from "next/link";
import styles from "./social-media-instructor.module.css";

const highlights = [
  { text: "6-Figure Agency Owner", kind: "agency" },
  { text: "Thousands of Students", kind: "students" },
  { text: "Proven Systems & Strategies", kind: "systems" },
  { text: "Real-World Experience", kind: "experience" },
] as const;

function HighlightIcon({ kind }: { kind: (typeof highlights)[number]["kind"] }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "agency" && <><circle cx="16" cy="16" r="13"/><path d="M20 9h-5a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8h-6m5-19v22"/></>}
    {kind === "students" && <><circle cx="16" cy="9" r="4"/><path d="M9 27v-7a7 7 0 0 1 14 0v7M5 7a4 4 0 0 0 0 8m22-8a4 4 0 0 1 0 8M3 19v8m26-8v8"/></>}
    {kind === "systems" && <><rect x="5" y="3" width="22" height="26" rx="2"/><path d="M11 9h10M11 13h6M10 24l5-6 4 3 4-6"/></>}
    {kind === "experience" && <><path d="M4 29V19h5v10m5 0V13h5v16m5 0V6h5v23M3 12l9-6 7 1 9-6m-6 0h6v6"/></>}
  </svg>;
}

export default function SocialMediaInstructor() {
  return (
    <section className={styles.section} aria-labelledby="social-instructor-heading">
      <div className={styles.banner}>
        <div className={styles.photo}><Image src="/images/services/social-media-instructor.webp" alt="Sara smiling at her desk behind a laptop in a bright home office" fill sizes="(max-width: 767px) 85vw, 28vw" className="object-cover" /></div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Meet Your Instructor</p>
          <h2 id="social-instructor-heading">Hi, I’m Sara! <span aria-hidden="true">☺</span></h2>
          <p className={styles.description}>I went from a broke freelancer to a 6-figure social media agency owner. Now I teach aspiring social media managers how to build profitable, freedom-based businesses of their own.</p>
          <Link href="/contact#contact-inquiry" className={styles.button}>Learn More About Sara</Link>
        </div>
        <ul className={styles.highlights}>{highlights.map(highlight => <li key={highlight.kind}><HighlightIcon kind={highlight.kind} /><span>{highlight.text}</span></li>)}</ul>
      </div>
    </section>
  );
}
