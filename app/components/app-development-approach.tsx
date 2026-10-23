import { appDevelopmentContent } from "../data/app-development-content";
import Image from "next/image";
import styles from "./app-development-approach.module.css";

export default function AppDevelopmentApproach() {
  return (
    <section aria-labelledby="app-approach-heading" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <h2 id="app-approach-heading">{appDevelopmentContent.approach.title}</h2>
          <div className={styles.description}>
            {appDevelopmentContent.approach.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className={styles.photos}>
          <div className={styles.lampPhoto}>
            <Image quality={95} src="/images/app-development/graphics/discovery.webp" alt="App designers reviewing user journeys and mobile wireframes" fill sizes="(max-width: 767px) 43vw, 25vw" className="object-cover" />
          </div>
          <div className={styles.armchairPhoto}>
            <Image quality={95} src="/images/app-development/graphics/testing.webp" alt="Mobile engineers testing an app on real devices" fill sizes="(max-width: 767px) 43vw, 25vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
