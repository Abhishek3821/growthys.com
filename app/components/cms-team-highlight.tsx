import Image from "next/image";
import styles from "./cms-team-highlight.module.css";
import { cmsDesignContent } from "../data/cms-design-content";

const paragraphs = cmsDesignContent.editors.paragraphs;

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
          <p className={styles.caption}>{paragraphs[0]}</p>
        </div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>EDITOR EXPERIENCE</p>
          <h2 id="cms-team-highlight-heading">Built for<br />Non-Technical Editors</h2>
          <p className={styles.description}>{paragraphs[1]}</p>
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
