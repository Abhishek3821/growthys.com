import styles from "./insights-why-choose.styles";

const features = [
  {
    icon: "quality",
    title: "Quality in Every Detail",
    description: "We combine thoughtful design with proven tools to create work that stands the test of time.",
    value: "10+",
    label: "years of experience",
  },
  {
    icon: "personal",
    title: "Built Around You",
    description: "Every project starts with your vision, shaped around your goals and the way you work.",
    value: "100+",
    label: "projects delivered",
  },
  {
    icon: "calendar",
    title: "On-Time Delivery",
    description: "Clear planning and open communication keep every milestone moving in the right direction.",
    value: "0",
    label: "missed deadlines",
  },
  {
    icon: "support",
    title: "Support at Every Step",
    description: "A friendly team, ready to listen, answer your questions and help whenever you need us.",
    value: "100%",
    label: "commitment to your success",
  },
] as const;

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "quality" && <><path d="m16 4 10 4v8c0 6-5 10-10 12C11 26 6 22 6 16V8l10-4Z" /><path d="m11 15 3.5 3.5L22 11" /></>}
      {name === "personal" && <><path d="m7 5 20 20-5 5L2 10l5-5Z" /><path d="m8 11 3-3m2 8 3-3m2 8 3-3" /><path d="m19 4 3-2 6 6-2 3-7-7Zm-4 5-5 5m-3 3-3 9 9-3 5-5" /></>}
      {name === "calendar" && <><rect x="5" y="7" width="22" height="21" rx="2" /><path d="M10 3v8m12-8v8M5 14h22" /></>}
      {name === "support" && <><path d="M5 18v-3a11 11 0 0 1 22 0v3" /><rect x="3" y="15" width="5" height="9" rx="2.5" /><rect x="24" y="15" width="5" height="9" rx="2.5" /><path d="M26 24c0 3-3 4-7 4" /><rect x="14" y="26" width="6" height="4" rx="2" /></>}
    </svg>
  );
}

export default function InsightsWhyChoose() {
  return (
    <section className={styles.section} aria-labelledby="insights-why-choose-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Why choose us</p>
            <h2 id="insights-why-choose-heading">Reliability. Experience.<br />Attention to detail.</h2>
          </div>
          <p className={styles.intro}>We bring your ideas to life with care and purpose.<br className={styles.desktopBreak} /> From the first conversation to the final delivery, we take care of every detail.</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.card} key={feature.icon}>
              <div className={styles.icon}><FeatureIcon name={feature.icon} /></div>
              <h3>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
              <div className={styles.stat}>
                <p className={styles.value}>{feature.value}</p>
                <p className={styles.label}>{feature.label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
