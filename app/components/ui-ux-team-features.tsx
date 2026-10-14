import Image from "next/image";
import styles from "./ui-ux-team-features.module.css";

export default function UiUxTeamFeatures() {
  return (
    <section className={styles.section} aria-labelledby="uiux-team-features-heading">
      <div className={styles.container}>
        <header className={styles.heading}><h2 id="uiux-team-features-heading">Everything Your Team Needs to<br className="hidden sm:block" /> Work Smarter</h2><p>From task tracking to real-time chat, our features are built to keep your team connected, organized,<br className="hidden lg:block" /> and moving forward—together.</p></header>
        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.chat}`}>
            <Image src="/images/services/ui-ux-team-chat.webp" alt="Colleagues celebrating a successful project with a high five" fill sizes="(max-width:767px) 90vw, 62vw" className="object-cover" />
            <div className={styles.copy}><h3>Built-in Team Chat</h3><p>Communicate instantly with your teammates and keep every conversation connected to your work.</p></div>
          </article>
          <article className={`${styles.card} ${styles.tasks}`}><div className={styles.copy}><h3>Task Assignment</h3><p>Easily create, assign, and track tasks to keep everyone aligned and accountable.</p></div></article>
          <article className={`${styles.card} ${styles.scheduling}`}><div className={styles.copy}><h3>Real-Time Scheduling</h3><p>Plan meetings, set deadlines, and sync calendars so your team stays on the same page.</p></div></article>
          <article className={`${styles.card} ${styles.progress}`}>
            <div className={styles.portrait}><Image src="/images/services/ui-ux-progress-portrait.webp" alt="A smiling team member in a mustard blouse" fill sizes="(max-width:767px) 45vw, 33vw" className="object-contain object-bottom" /></div>
            <div className={styles.copy}><h3>Progress Tracking</h3><p>Visualize team performance with dashboards that highlight what’s done and what’s next.</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}
