import styles from "./management-section.styles";

const benefits = [
  {
    icon: "results",
    title: "E-Commerce & Startups",
    description: "SEO, shopping ads, and go-to-market campaigns that help digital marketing company clients find customers and grow sales fast.",
  },
  {
    icon: "experience",
    title: "Healthcare & Education",
    description: "Patient acquisition, admission funnels, and CRM & management software integration that turn enquiries into real conversions.",
  },
  {
    icon: "strategy",
    title: "Real Estate & B2B",
    description: "Lead-generation landing pages, local SEO, and IT support services company in India-grade systems for long sales cycles and serious buyers.",
  },
] as const;

function ManagementIcon({ name }: { name: (typeof benefits)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "results" && <>
        <circle cx="24" cy="14" r="4" />
        <circle cx="11" cy="17" r="3.5" />
        <circle cx="37" cy="17" r="3.5" />
        <path d="M17 27v-2a7 7 0 0 1 14 0v2M5 30v-4a6 6 0 0 1 11-3M43 30v-4a6 6 0 0 0-11-3M5 30h8m22 0h8" />
        <rect x="16" y="27" width="16" height="13" rx="3" />
        <path d="M21 27v-2h6v2m-11 6h16m-9-1v3h2v-3" />
      </>}
      {name === "experience" && <>
        <path d="m25 6 2.3 2.7 3.5-.1.6 3.4 2.8 2-1.6 3.1.5 3.4-3.3 1.1-1.9 2.9-3.3-1-3.3 1-1.9-2.9-3.3-1.1.5-3.4-1.6-3.1 2.8-2 .6-3.4 3.5.1Z" />
        <circle cx="25" cy="15" r="4.5" />
        <path d="m22.5 15 1.6 1.6 3.2-3.3M21 24l-1 6 5-2 5 2-1-6M7 31l7-3 8 5h8a3 3 0 0 1 0 6H19m12-6 7-4a3 3 0 0 1 4 4l-8 9H18L7 38M4 30h3v11H4" />
      </>}
      {name === "strategy" && <>
        <path d="M16 41v-7h-5v-9H7l5-9a15 15 0 0 1 29 5c0 7-5 12-9 15v5H16Z" />
        <path d="M16 19a11 11 0 0 1 22 2M20 18a7 7 0 0 1 14 2M24 18a3 3 0 0 1 6 1M13 25h6l4-4 4 4 6-3 5 2M18 29h11v5H18m3 0v7m8-15v3M18 37h8" />
      </>}
    </svg>
  );
}

export default function ManagementSection() {
  return (
    <section className={styles.section} id="approach" aria-labelledby="management-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 id="management-heading">
            <span className={styles.accent}>Industries</span>
            <span><strong className={styles.accent}>We</strong></span>
            <span>Serve</span>
          </h2>
          <button className={styles.arrowButton} type="button" aria-label="Learn more about industries we serve" disabled>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        {benefits.map((benefit) => (
          <article className={styles.feature} key={benefit.icon}>
            <div className={styles.icon}><ManagementIcon name={benefit.icon} /></div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
