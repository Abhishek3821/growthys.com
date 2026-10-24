import Image from "next/image";
import styles from "./cms-education.module.css";
import { cmsDesignContent } from "../data/cms-design-content";

function StudentPortrait({ position, label, className }: { position: "top-right" | "bottom-right" | "bottom-left"; label: string; className: string }) {
  const right = position.endsWith("right");
  const bottom = position.startsWith("bottom");
  return <div className={`${styles.portrait} ${className}`}>
    <div className={styles.portraitSheet} style={{ left: right ? "-100%" : "0", top: bottom ? "-100%" : "0" }}>
      <Image src="/images/website-design/learning-students.png" alt={label} fill sizes="(max-width: 767px) 85vw, 600px" className="object-cover" />
    </div>
  </div>;
}

function LearningIcon({ book = false }: { book?: boolean }) {
  return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    {book ? <><path d="M20 11C15 7 9 8 6 9v22c5-2 10-1 14 2 4-3 9-4 14-2V9c-3-1-9-2-14 2ZM20 11v22M10 14h6m-6 5h6m8-5h6m-6 5h6" strokeLinecap="round" strokeLinejoin="round" /></> : <><ellipse cx="20" cy="20" rx="7" ry="15" /><ellipse cx="20" cy="20" rx="7" ry="15" transform="rotate(60 20 20)" /><ellipse cx="20" cy="20" rx="7" ry="15" transform="rotate(120 20 20)" /><circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" /></>}
  </svg>;
}

export default function CmsEducation() {
  return (
    <section aria-labelledby="cms-education-heading" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>PUBLISH YOUR WAY</p>
          <h2 id="cms-education-heading">Flexible CMS<br className="hidden lg:block" /> Design for Teams<br className="hidden lg:block" /> That Work<br className="hidden lg:block" /> Differently</h2>
          <p className={styles.description}>{cmsDesignContent.flexibility.paragraphs.join(" ")}</p>
        </div>
        <div className={styles.collage}>
          <StudentPortrait position="bottom-right" className={styles.mainPortrait} label="A smiling student with glasses holding books" />
          <StudentPortrait position="top-right" className={styles.leftPortrait} label="A student in an orange sweater carrying books and a backpack" />
          <StudentPortrait position="bottom-left" className={styles.smallPortrait} label="A student wearing headphones and holding colourful notebooks" />
          <div className={`${styles.iconTile} ${styles.science}`}><LearningIcon /></div>
          <div className={`${styles.iconTile} ${styles.reading}`}><LearningIcon book /></div>
        </div>
      </div>
    </section>
  );
}
