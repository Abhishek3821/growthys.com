import Image from "next/image";
import styles from "./web-development-success.module.css";

const points = [
  { number: "01", kind: "pin", color: "#3067f2" },
  { number: "02", kind: "gear", color: "#26278c" },
  { number: "03", kind: "like", color: "#f39731" },
  { number: "04", kind: "idea", color: "#ffd005" },
  { number: "05", kind: "handshake", color: "#3067f2" },
] as const;

function SuccessIcon({ kind }: { kind: (typeof points)[number]["kind"] }) {
  return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "pin" && <><path d="M20 34S9 23 9 15a11 11 0 0 1 22 0c0 8-11 19-11 19Z" /><circle cx="20" cy="15" r="4" /></>}
    {kind === "gear" && <><path d="m16 5-2 5-5 1-3 5 3 4-1 5 5 4 5-1 4 3 5-3 1-5 4-3-1-6-5-2-2-5-8-2Z" /><circle cx="20" cy="19" r="6" /></>}
    {kind === "like" && <><path d="M15 17 22 7c2-3 5-1 4 3l-2 7h8c2 0 3 2 2 4l-3 10H15V17ZM7 17h8v15H7V17Z" /></>}
    {kind === "idea" && <><path d="M14 24c-1-4-5-6-5-12a11 11 0 0 1 22 0c0 6-4 8-5 12M14 25h12m-11 4h10m-8 4h6M17 15l3 4 3-4m-3 4v6" /></>}
    {kind === "handshake" && <><path d="m5 14 8-4 7 3 6-3 9 5-5 11-5 5-14-6L5 14Zm15-1-5 5 3 3 5-3 7 8M9 22l-3 2-4-10 4-2m25 0 6 3-4 10-3-1M17 28l3-3m1 5 3-3" /></>}
  </svg>;
}

export default function WebDevelopmentSuccess() {
  return (
    <section aria-labelledby="web-success-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="web-success-heading">New Way of Success.</h2>
        <div className={styles.diagram}>
          <ol className={styles.points}>
            {points.map((point) => (
              <li key={point.number} className={styles.point}>
                <div className={styles.pointCopy}><h3>{point.number}</h3><p>Lorem ipsum dolor sit amet, vel atqui signiferumque, graece verear eu quo. In pri minim delectus, mea ad malis persius consequat.</p></div>
                <span className={styles.icon} style={{ backgroundColor: point.color }}><SuccessIcon kind={point.kind} /></span>
              </li>
            ))}
          </ol>
          <div className={styles.portrait}>
            <Image src="/images/services/web-development-success.webp" alt="A smiling man in a white shirt looking at his smartphone" fill sizes="(max-width: 767px) 70vw, 35vw" className="object-contain object-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
}
