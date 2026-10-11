import type { CSSProperties } from "react";
import styles from "./process-section.module.css";

const steps = [
  { title: "Discover", description: "Understand goals, users and the problem deeply.", color: "#4bc9a7", light: "#6dd7bc", icon: "search" },
  { title: "Define", description: "Analyze insights and define the right direction.", color: "#6d9cf6", light: "#8eb5ff", icon: "bulb" },
  { title: "Design", description: "Create wireframes, flows and beautiful UI.", color: "#af88eb", light: "#c8a8f6", icon: "pen" },
  { title: "Prototype", description: "Build interactive prototypes and test with users.", color: "#ff806e", light: "#ff9e8d", icon: "play" },
  { title: "Deliver", description: "Refine, handoff and support for successful launch.", color: "#4bc9a7", light: "#6dd7bc", icon: "rocket" },
] as const;

function ProcessIcon({ name }: { name: (typeof steps)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "search" && <><circle cx="14" cy="14" r="8" /><path d="m20 20 7 7" /></>}
      {name === "bulb" && <><path d="M24 12a8 8 0 1 0-14 5.3c1.7 1.8 2.5 3.1 2.5 5.7h7c0-2.6.8-3.9 2.5-5.7a8 8 0 0 0 2-5.3Z" /><path d="M12.5 26h7M14 29h4M16 23v-7m-3-3 3 3 3-3" /></>}
      {name === "pen" && <><path d="m7 21-2 7 7-2L27 11a3.5 3.5 0 0 0-5-5L7 21Zm12-12 5 5M7 21l5 5" /></>}
      {name === "play" && <><path d="M9 5v22l18-11L9 5Z" /><path d="m15 12 6 4-6 4v-8Z" /></>}
      {name === "rocket" && <><path d="M13 21c-2-4 0-9 5-13 3-2.5 6-3.5 10-4-1 6-3 10-7 14-2 2-5 4-8 3Z" /><circle cx="21" cy="11" r="2.5" /><path d="m12 13-5 1-3 6 8 1m8-3-1 7-6 3-1-7M9 23l-4 5m4-2-1 3" /></>}
    </svg>
  );
}

export default function ProcessSection() {
  return (
    <section className={styles.section} id="our-process" aria-labelledby="process-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <p>My Process</p>
          <h2 id="process-heading">A thoughtful process for great results.</h2>
        </header>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.title} style={{ "--step-color": step.color, "--step-light": step.light } as CSSProperties}>
              <div className={styles.icon}><ProcessIcon name={step.icon} /></div>
              <div className={styles.copy}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
