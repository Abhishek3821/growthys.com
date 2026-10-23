import { uiUxContent } from "../data/ui-ux-content";
import Image from "next/image";
import styles from "./ui-ux-team-features.module.css";

export default function UiUxTeamFeatures() {
  return (
    <section className={styles.section} aria-labelledby="uiux-team-features-heading">
      <div className={styles.container}>
        <header className={styles.heading}><h2 id="uiux-team-features-heading">Everything Your Product Needs<br className="hidden sm:block" /> to Feel Right</h2><p>From wireframes to final handoff, our features are built to keep your product usable,<br className="hidden lg:block" /> consistent, and ready to grow.</p></header>
        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.chat}`}>
            <Image quality={95} src="/images/ui-ux-design/graphics/user-research.webp" alt="A UX researcher observing a participant testing a mobile prototype" fill sizes="(max-width:767px) 90vw, 62vw" className="object-cover" />
            <div className={styles.copy}><h3>{uiUxContent.features.items[0].title}</h3><p>{uiUxContent.features.items[0].description}</p></div>
          </article>
          <article className={`${styles.card} ${styles.tasks}`}><div className={styles.copy}><h3>{uiUxContent.features.items[1].title}</h3><p>{uiUxContent.features.items[1].description}</p></div></article>
          <article className={`${styles.card} ${styles.scheduling}`}><div className={styles.copy}><h3>{uiUxContent.features.items[2].title}</h3><p>{uiUxContent.features.items[2].description}</p></div></article>
          <article className={`${styles.card} ${styles.progress}`}>
            <div className={styles.portrait}><Image quality={95} src="/images/ui-ux-design/graphics/prototype-testing.webp" alt="A clickable mobile prototype linked to a wireframe with a highlighted touch target" fill sizes="(max-width:767px) 45vw, 33vw" className="object-contain object-bottom" /></div>
            <div className={styles.copy}><h3>{uiUxContent.features.items[3].title}</h3><p>{uiUxContent.features.items[3].description}</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}
