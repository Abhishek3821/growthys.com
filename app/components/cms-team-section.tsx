import Image from "next/image";
import styles from "./cms-team-section.module.css";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export default function CmsTeamSection() {
  return (
    <section aria-labelledby="cms-team-heading" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.introduction}>
          <p className={styles.eyebrow}>Your Text Here</p>
          <h2 id="cms-team-heading">Lorem ipsum<br />dolor sit</h2>
        </div>
        <div className={styles.celebration}>
          <Image src="/images/crm-management/team/celebration.webp" alt="A diverse team celebrating together in a bright office" fill sizes="(max-width: 767px) 100vw, 58vw" className="object-cover" />
        </div>
        <div className={styles.collaboration}>
          <Image src="/images/crm-management/team/planning.webp" alt="Colleagues collaborating on ideas around a laptop" fill sizes="(max-width: 767px) 100vw, 42vw" className="object-cover" />
        </div>
        <div className={styles.details}>
          {[0, 1].map((index) => (
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
