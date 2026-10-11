import Image from "next/image";
import type { CSSProperties } from "react";
import portraits from "../../public/images/testimonial-portraits.webp";
import styles from "./team-cta.module.css";

const portraitOrder = [5, 2, 0, 7, 4, 6, 1, 5, 3, 7, 2];

export default function TeamCta({ href = "#contact-inquiry" }: { href?: string }) {
  return (
    <section className={styles.section} aria-labelledby="team-cta-heading">
      <div className={styles.stage}>
        <div className={styles.portraits} aria-hidden="true">
          {portraitOrder.map((portrait, index) => {
            const angle = (index - 5) * 21;
            const radians = angle * Math.PI / 180;

            return (
              <div
                className={styles.portrait}
                key={index}
                style={{
                  "--x": `${50 + 50 * Math.sin(radians)}%`,
                  "--y": `${70 - 55 * Math.cos(radians)}cqw`,
                  "--rotation": `${angle}deg`,
                } as CSSProperties}
              >
                <Image
                  src={portraits}
                  alt=""
                  className={styles.portraitImage}
                  sizes="(max-width: 1200px) 60vw, 720px"
                  style={{ left: `${(portrait % 4) * -100}%`, top: `${Math.floor(portrait / 4) * -100}%` }}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.content}>
          <div className={styles.stars} aria-hidden="true">★★★★★</div>
          <p className={styles.eyebrow}>Made for ambitious teams</p>
          <h2 id="team-cta-heading">Ready to Power Up<span>Your Team?</span></h2>
          <p className={styles.description}>Bring your ideas to life with smarter tools, better workflows, and a team that grows with you.</p>
          <a className={styles.button} href={href}>
            Get started
            <span aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          </a>
        </div>
      </div>
    </section>
  );
}
