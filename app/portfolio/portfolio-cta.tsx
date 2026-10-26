import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio-cta.module.css";
import { growthysShowcaseContent as content } from "../data/growthys-showcase-content";

export default function PortfolioCta() {
  return (
    <>
    <section className={styles.section} aria-labelledby="portfolio-cta-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{content.cta.eyebrow}</p>
          <h2 id="portfolio-cta-heading" className={styles.heading}>
            {content.cta.title}
          </h2>
          <p className={styles.description}>{content.cta.description}</p>
          <Link href="/contact#contact-inquiry" className={styles.button}>
            {content.cta.action} <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
        <Image src="/images/portfolio/high-five.webp" alt="Two hands high-fiving, with green and pink sleeves and celebratory doodles, representing a creative partnership." width={1200} height={700} sizes="(max-width: 700px) 100vw, 50vw" className={styles.illustration} />
      </div>
      <svg className={styles.wave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 42C100 49 150 7 260 30S410 47 510 20 690 31 790 43 960 9 1070 30 1270 51 1360 37 1410 37 1440 41V60H0Z" fill="#10213b" /></svg>
    </section>
    <section className={styles.closing} aria-labelledby="plot-twist-heading">
      <div className={styles.closingInner}>
        <span className={styles.sparkle} aria-hidden="true">✳</span>
        <h2 id="plot-twist-heading">{content.closing.title}</h2>
        {content.closing.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <Link href="/contact#contact-inquiry">{content.closing.action} <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
    </>
  );
}
