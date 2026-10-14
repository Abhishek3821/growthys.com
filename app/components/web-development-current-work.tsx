import Image from "next/image";
import styles from "./web-development-current-work.module.css";

export default function WebDevelopmentCurrentWork() {
  return (
    <section aria-labelledby="web-current-work-heading" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <h2 id="web-current-work-heading">About<br />Current Work.</h2>
          <p className={styles.description}>Lorem ipsum dolor sit amet, vel atqui signiferumque, graece verear eu quo. In pri minim delectus, mea ad malis persius consequat.</p>
          <div className={styles.highlights}><p>Lorem ipsum dolor</p><p>Lorem ipsum dolor</p></div>
        </div>
        <div className={styles.collage}>
          <span className={`${styles.circle} ${styles.navy}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.orange}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.blue}`} aria-hidden="true" />
          <span className={`${styles.circle} ${styles.yellow}`} aria-hidden="true" />
          <div className={styles.teamPhoto}>
            <Image src="/images/crm-management/team/tablet.webp" alt="Colleagues sharing ideas and reviewing their work on a tablet" fill sizes="(max-width: 767px) 48vw, 27vw" className="object-cover" />
          </div>
          <div className={styles.meetingPhoto}>
            <Image src="/images/crm-management/team/meeting.webp" alt="A team discussing their project together in a bright office" fill sizes="(max-width: 767px) 53vw, 32vw" className="object-cover" />
          </div>
          <p className={styles.workLabel}>NEW WAY OF WORKING</p>
        </div>
      </div>
    </section>
  );
}
