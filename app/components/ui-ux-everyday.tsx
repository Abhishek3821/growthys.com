import Image from "next/image";
import styles from "./ui-ux-everyday.module.css";

const tips = [
  { title: "Daily Planning Tips", description: "Start each morning with a quick overview and suggested priorities based on your habits." },
  { title: "End-of-Day Review", description: "Reflect on your progress and prep for tomorrow with a simple nightly check-in." },
  { title: "Quick Notes", description: "Capture thoughts, ideas, and reminders instantly without breaking your flow." },
  { title: "Recurring Tasks", description: "Automate routine to-dos with repeating task settings to save time and reduce mental load." },
  { title: "Goal Tracking", description: "Set weekly or monthly goals and watch your progress with built-in tracking tools." },
  { title: "Focus Sessions", description: "Use timed sessions to stay locked in and track how long you’re truly focused." },
];

export default function UiUxEveryday() {
  return (
    <section className={styles.section} aria-labelledby="uiux-everyday-heading">
      <div className={styles.container}>
        <header className={styles.heading}><h2 id="uiux-everyday-heading">Work Smarter<br/><span>Every Day</span></h2><p>Helpful Tools. Actionable Tips.<br/>Better Habits.</p></header>
        <div className={styles.layout}>
          <div className={styles.photo}><Image src="/images/services/ui-ux-everyday-headphones.webp" alt="A woman wearing pink-lit headphones in a vivid blue studio" fill sizes="(max-width:767px) 90vw, 45vw" className="object-cover"/></div>
          <ol className={styles.tips}>{tips.map((tip,index)=><li key={tip.title}><span className={styles.number} aria-hidden="true">{String(index+1).padStart(2,"0")}</span><h3>{tip.title}</h3><p>{tip.description}</p></li>)}</ol>
        </div>
      </div>
    </section>
  );
}
