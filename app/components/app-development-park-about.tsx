import { appDevelopmentContent } from "../data/app-development-content";
import Image from "next/image";
import styles from "./app-development-park-about.module.css";

function ParkIcon({ kind }: { kind: "balloons" | "carousel" | "bicycle" }) {
  return (
    <svg viewBox="0 0 110 100" className={styles.icon} fill="none" stroke="#687ba1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="55" cy="53" r="37" fill="#f8fbf3" stroke="none" />
      {kind === "balloons" && <><rect x="31" y="12" width="45" height="78" rx="9" fill="#72bee6" /><rect x="36" y="22" width="35" height="56" rx="3" fill="#f8fbf3" /><path d="M46 17h15M50 84h7M42 42h23l-3 15H46l-4-21h-5" /><circle cx="49" cy="64" r="3" fill="#f9bfd7" /><circle cx="61" cy="64" r="3" fill="#f9bfd7" /></>}
      {kind === "carousel" && <><rect x="31" y="12" width="45" height="78" rx="9" fill="#f8b7d3" /><rect x="36" y="22" width="35" height="56" rx="3" fill="#f8fbf3" /><path d="M46 17h15M50 84h7M42 68l9-12 12 5" /><path d="M67 41c0 10-12 20-12 20S43 51 43 41a12 12 0 0 1 24 0Z" fill="#8dbee0" /><circle cx="55" cy="41" r="4" fill="#f8fbf3" /></>}
      {kind === "bicycle" && <><rect x="31" y="12" width="45" height="78" rx="9" fill="#8dbee0" /><rect x="36" y="22" width="35" height="56" rx="3" fill="#f8fbf3" /><path d="M46 17h15M50 84h7" /><rect x="42" y="29" width="10" height="15" rx="2" fill="#f9bfd7" /><rect x="57" y="29" width="8" height="15" rx="2" fill="#72bee6" /><path d="M43 69V57h6v12m5 0V49h6v20M41 70h24" /></>}
    </svg>
  );
}

const highlights = (["balloons", "carousel", "bicycle"] as const).map((kind, index) => ({ kind, text: <>{appDevelopmentContent.types.items[index * 2]}<br />{appDevelopmentContent.types.items[index * 2 + 1]}</> }));

export default function AppDevelopmentParkAbout() {
  return (
    <section aria-labelledby="app-park-about-heading" className={styles.section} lang="en">
      <div className={styles.layout}>
        <div className={styles.candyPhoto}>
          <Image quality={95} src="/images/app-development/graphics/app-types.webp" alt="A mobile app connected to commerce, booking, field teams and business dashboards" fill sizes="(max-width: 767px) 65vw, 35vw" className="object-contain object-bottom" />
        </div>
        <div className={styles.content}>
          <h2 id="app-park-about-heading">{appDevelopmentContent.types.title}</h2>
          <p className={styles.description}>{appDevelopmentContent.types.intro}<br />{appDevelopmentContent.types.closing}</p>
          <ul className={styles.highlights}>{highlights.map((highlight) => <li key={highlight.kind}><ParkIcon kind={highlight.kind} /><p>{highlight.text}</p></li>)}</ul>
        </div>
        <span className={`${styles.bubble} ${styles.bubbleOne}`} aria-hidden="true" />
        <span className={`${styles.bubble} ${styles.bubbleTwo}`} aria-hidden="true" />
        <span className={`${styles.bubble} ${styles.bubbleThree}`} aria-hidden="true" />
      </div>
    </section>
  );
}
