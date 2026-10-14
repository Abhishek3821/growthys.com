import Image from "next/image";
import styles from "./cms-team-highlight.module.css";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function CmsTeamHighlight() {
  return (
    <section aria-labelledby="cms-team-highlight-heading" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.visuals}>
          <div className={styles.photos}>
            <div className={styles.photo}>
              <Image src="/images/crm-management/team/planning.webp" alt="Colleagues discussing a project around a laptop" fill sizes="(max-width: 767px) 44vw, 31vw" className="object-cover" />
            </div>
            <div className={styles.photo}>
              <Image src="/images/crm-management/team/tablet.webp" alt="Two business professionals reviewing their work on a tablet" fill sizes="(max-width: 767px) 44vw, 31vw" className="object-cover" />
            </div>
          </div>
          <p className={styles.caption}>{description}</p>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Your Text Here</p>
          <h2 id="cms-team-highlight-heading">Lorem ipsum<br />dolor sit</h2>
          <p className={styles.description}>{description}</p>
          <div className={styles.avatars} aria-label="Our team">
            <span className={styles.avatar} style={{ backgroundPosition: "0% 0%" }} role="img" aria-label="Team member portrait" />
            <span className={styles.avatar} style={{ backgroundPosition: "33.333% 100%" }} role="img" aria-label="Team member portrait" />
            <span className={styles.avatar} style={{ backgroundPosition: "66.667% 100%" }} role="img" aria-label="Team member portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}
