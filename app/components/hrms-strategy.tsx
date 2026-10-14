import Image from "next/image";
import Link from "next/link";
import styles from "./hrms-strategy.module.css";

export default function HrmsStrategy() {
  return (
    <section className={styles.section} aria-labelledby="hrms-strategy-heading">
      <div className={styles.layout}>
        <div className={styles.darkPanel}>
          <p className={styles.eyebrow}><span aria-hidden="true">⌁</span> About the strategist</p>
          <h2 id="hrms-strategy-heading">Strategy first.<br/><span>Always.</span></h2>
          <p className={styles.description}>I lead projects of brand and design digital from a clear address, combining strategic vision and visual sensitivity to build systems coherent and durable.</p>
          <div className={styles.actions}><Link href="/contact#contact-inquiry">More About Me <span aria-hidden="true">↪</span></Link><Link href="#hrms-services-heading">See Services <span aria-hidden="true">↪</span></Link></div>
          <Link href="/blogs" className={styles.caseStudy}>
            <div className={styles.caseImage}><Image src="/images/services/capital-growth-flower.png" alt="A sculptural flower representing brand growth" fill sizes="100px" className="object-cover"/></div>
            <div><h3>Increasing Brand Engagement<br/>from 10K to 50K</h3><p>See Details <span aria-hidden="true">↪</span></p></div>
          </Link>
        </div>
        <div className={styles.photoPanel}>
          <Image src="/images/services/hrms-strategy-portrait.webp" alt="A strategist in glasses and a beige overshirt" fill sizes="(max-width:767px) 90vw, 47vw" className="object-cover"/>
          <dl className={styles.stats}>
            <div><dd>3.8<span>×</span></dd><dt>Across all paid ad campaigns</dt><p>↑ 64% above industry avg</p></div>
            <div><dd>+240%</dd><dt>Via SEO · average 8 months</dt><p>↑ Compounding, not paid</p></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
