import Image from "next/image";
import styles from "./cms-learning-collage.module.css";
import { cmsDesignContent } from "../data/cms-design-content";

function Student({ lower = false }: { lower?: boolean }) {
  return (
    <div className={styles.studentSheet} style={{ top: lower ? "-100%" : "0" }}>
      <Image src="/images/website-design/learning-students.png" alt={lower ? "A smiling student with headphones and colourful notebooks" : "A smiling student holding a stack of notebooks"} fill sizes="(max-width: 767px) 80vw, 550px" className="object-cover" />
    </div>
  );
}

export default function CmsLearningCollage() {
  return (
    <section aria-labelledby="cms-learning-collage-heading" className={styles.section}>
      <div className={styles.collage}>
        <div className={styles.studentOne}><Student /></div>
        <div className={styles.teamPhoto}>
          <Image src="/images/crm-management/team/creative.webp" alt="A diverse team sharing ideas and learning together around a table" fill sizes="(max-width: 767px) 65vw, 850px" className="object-cover" />
        </div>
        <div className={styles.logoTile}>
          <svg viewBox="0 0 64 42" fill="none" aria-hidden="true"><path d="m5 15 27-11 27 11-27 11L5 15Z" stroke="#eadc83" strokeWidth="2" /><path d="M16 21v9c10 7 23 7 32 0v-9M58 16v17" stroke="#6a9ca8" strokeWidth="2" strokeLinecap="round" /></svg>
          <span>Growthys</span>
        </div>
        <div className={styles.studentTwo}><Student lower /></div>
        <div className={styles.content}>
          <p className={styles.eyebrow}>DESIGNING TOGETHER</p>
          <h2 id="cms-learning-collage-heading">Great CMS Design<br className="hidden lg:block" /> Is a<br className="hidden lg:block" /> Collaboration</h2>
          <p className={styles.description}>{cmsDesignContent.collaboration.paragraphs.join(" ")}</p>
        </div>
      </div>
    </section>
  );
}
