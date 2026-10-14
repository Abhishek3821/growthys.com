import Image from "next/image";
import styles from "./cms-agenda.module.css";

const dates = [
  { day: "22", color: "#8974f5", items: 3 },
  { day: "23", color: "#ff8f57", items: 2 },
] as const;

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v5m8-5v5M4 10h16m-12 4h2m4 0h2m-8 3h2m4 0h2" strokeLinecap="round" /></svg>;
}

export default function CmsAgenda() {
  return <section aria-labelledby="cms-agenda-heading" className={styles.section}>
    <h2 id="cms-agenda-heading" className="sr-only">January event agenda</h2>
    <div className={styles.panel}>
      <div className={styles.building}>
        <Image src="/images/cms-design/agenda-building.webp" alt="A modern office tower viewed from below" fill sizes="(max-width: 767px) 100vw, 35vw" className="object-cover" />
      </div>
      <div className={styles.schedule}>
        {dates.map(({ day, color, items }) => <div key={day} className={styles.row}>
          <article className={styles.dateCard} style={{ backgroundColor: color }} aria-labelledby={`cms-date-${day}`}>
            <div className={styles.dateHeader}>
              <span className={styles.calendar} style={{ color }}><CalendarIcon /></span>
              <h3 id={`cms-date-${day}`}><span className={styles.day}>{day}</span><span className={styles.month}>January</span></h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </article>
          <div className={styles.agenda}>
            <h4 style={{ color }}>Agenda<span className="sr-only"> for {day} January</span></h4>
            <ul>{Array.from({ length: items }, (_, index) => <li key={index}>
              <span className={styles.check} aria-hidden="true"><svg viewBox="0 0 16 16" fill="none"><path d="m4 8 2.5 2.5L12 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <span>Lorem ipsum dolor sit amet, consectetur</span>
            </li>)}</ul>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
}
