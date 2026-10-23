import { webDevelopmentContent } from "../data/web-development-content";
import Image from "next/image";
import styles from "./web-development-current-work.module.css";

export default function WebDevelopmentCurrentWork() {
  return (
    <section aria-labelledby="web-current-work-heading" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <h2 id="web-current-work-heading">About Our<br />Current Work.</h2>
          <p className={styles.description}>{webDevelopmentContent.current.paragraphs.join(" ")}</p>
          <div className={styles.highlights}>{webDevelopmentContent.current.services.map((service) => <p key={service}>{service}</p>)}</div>
        </div>
        <div className={styles.collage}>
          <span className={`${styles.circle} ${styles.navy}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.orange}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.blue}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.yellow}`} aria-hidden="true" />
          <div className={styles.teamPhoto}>
            <Image quality={95} src="/images/web-development/graphics/ui-planning.webp" alt="Designers reviewing website wireframes, page structure and visual direction" fill sizes="(max-width: 767px) 48vw, 27vw" className="object-cover" />
          </div>
          <div className={styles.meetingPhoto}>
            <Image quality={95} src="/images/web-development/graphics/testing.webp" alt="Software engineers testing a responsive website across desktop, tablet and mobile" fill sizes="(max-width: 767px) 53vw, 32vw" className="object-cover" />
          </div>
          <p className={styles.workLabel}>BUILT AROUND YOUR BUSINESS</p>
        </div>
      </div>
    </section>
  );
}
