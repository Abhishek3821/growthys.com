import Image from "next/image";
import styles from "./app-development-park-about.module.css";

function ParkIcon({ kind }: { kind: "balloons" | "carousel" | "bicycle" }) {
  return (
    <svg viewBox="0 0 110 100" className={styles.icon} fill="none" stroke="#687ba1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="55" cy="53" r="37" fill="#f8fbf3" stroke="none" />
      {kind === "balloons" && <><path d="M55 33v46M33 46l22 33 24-34" /><ellipse cx="55" cy="24" rx="13" ry="17" fill="#72bee6" /><path d="m52 40 3-4 3 4" fill="#72bee6" /><path d="M33 28C15 27 13 45 24 52c10 6 19-2 20-10 1-7-3-13-11-14Z" fill="#f9bfd7" /><path d="M77 26c18-2 26 19 15 26-10 7-20 0-22-8-2-7 0-15 7-18Z" fill="#f3a5c7" /></>}
      {kind === "carousel" && <><path d="M56 11v-8l14 4-14 5M19 43Q41 32 56 12q15 20 37 31H19Z" fill="#f8b7d3" /><path d="m36 43 20-31 20 31M23 43v37m64-37v37M43 43v34m24-34v34" /><path d="M15 83h82v7H15Z" fill="#eaa4c6" /><path d="M32 68h9l5-7 7 2 3 6-6 5H35l-3-6Zm31-9h7l5 7 8-1 2 7-6 5H63v-8" fill="#8dbee0" /><path d="M17 43q10 12 19 0 10 12 20 0 10 12 20 0 9 12 19 0" /></>}
      {kind === "bicycle" && <><circle cx="25" cy="67" r="18" stroke="#bd7fad" strokeWidth="5" /><circle cx="85" cy="67" r="18" stroke="#bd7fad" strokeWidth="5" /><path d="m25 67 17-33 16 33H25l24-22h24l12 22M72 45l-4-18h13M38 34h15" stroke="#6b9abc" strokeWidth="3" /><circle cx="58" cy="67" r="4" fill="#bd7fad" /><path d="m58 67 8 6" /></>}
    </svg>
  );
}

const highlights = [
  { kind: "balloons", text: <>Развлечения для<br />взрослых и детей</> },
  { kind: "carousel", text: <>45 европейских<br />аттракционов</> },
  { kind: "bicycle", text: <>Всё для вашего<br />активного отдыха</> },
] as const;

export default function AppDevelopmentParkAbout() {
  return (
    <section aria-labelledby="app-park-about-heading" className={styles.section} lang="ru">
      <div className={styles.layout}>
        <div className={styles.candyPhoto}>
          <Image src="/images/services/app-development-cotton-candy.webp" alt="Розовая сахарная вата на палочке" fill sizes="(max-width: 767px) 65vw, 35vw" className="object-contain object-bottom" />
        </div>
        <div className={styles.content}>
          <h2 id="app-park-about-heading">О парке</h2>
          <p className={styles.description}>Зелёный островок, парк культуры и отдыха имени Юрия Гагарина — один из самых популярных мест в Самаре. Прямо в центре города можно погулять в зелёной роще, покататься на лодках по пруду, посетить аттракционы на любой вкус.<br />Для посетителей каждый день в парке работают пункты проката велосипедов и роликов, можно покататься на лошадях.</p>
          <ul className={styles.highlights}>{highlights.map((highlight) => <li key={highlight.kind}><ParkIcon kind={highlight.kind} /><p>{highlight.text}</p></li>)}</ul>
        </div>
        <span className={`${styles.bubble} ${styles.bubbleOne}`} aria-hidden="true" />
        <span className={`${styles.bubble} ${styles.bubbleTwo}`} aria-hidden="true" />
        <span className={`${styles.bubble} ${styles.bubbleThree}`} aria-hidden="true" />
      </div>
    </section>
  );
}
