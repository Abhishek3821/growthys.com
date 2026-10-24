import Image from "next/image";
import styles from "./cms-team-section.module.css";
import { cmsDesignContent } from "../data/cms-design-content";

const paragraphs = cmsDesignContent.structure.paragraphs;

export default function CmsTeamSection() {
  return (
    <section aria-labelledby="cms-team-heading" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>CONTENT-FIRST CMS DESIGN</p>
          <h2 id="cms-team-heading">Structure First,<br />Design Second</h2>
        </div>
        <div className={styles.celebration}>
          <Image src="/images/crm-management/team/celebration.webp" alt="A diverse team celebrating together in a bright office" fill sizes="(max-width: 767px) 100vw, 58vw" className="object-cover" />
        </div>
        <div className={styles.collaboration}>
          <Image src="/images/crm-management/team/planning.webp" alt="Colleagues collaborating on ideas around a laptop" fill sizes="(max-width: 767px) 100vw, 42vw" className="object-cover" />
        </div>
        <div className={styles.details}>
          {paragraphs.map((description, index) => (
            <div key={index} className={styles.textColumn}>
              <span className={styles.accent} aria-hidden="true" />
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
