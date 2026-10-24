import Image from "next/image";
import Link from "next/link";
import styles from "./hrms-strategy.module.css";
import { hrmsContent } from "../data/hrms-content";

export default function HrmsStrategy() {
  return (
    <section className={styles.section} aria-labelledby="hrms-strategy-heading">
      <div className={styles.layout}>
        <div className={styles.darkPanel}>
          <p className={styles.eyebrow}><span aria-hidden="true">⌁</span> HR Automation</p>
          <h2 id="hrms-strategy-heading">Less Manual Work,<br/><span>More Time for People</span></h2>
          <p className={styles.description}>{hrmsContent.automation.description}</p>
          <div className={styles.actions}><Link href="/contact#contact-inquiry">Book a Demo <span aria-hidden="true">↪</span></Link><Link href="#hrms-services-heading">Explore HRMS <span aria-hidden="true">↪</span></Link></div>
          <Link href="#hrms-services-heading" className={styles.caseStudy}>
            <div className={styles.caseImage}><Image src="/images/hrms/graphics/workflow-automation.webp" quality={95} alt="Calendar, payroll and approval tiles connected by a gold loop, representing routine HR task automation." fill sizes="100px" className="object-cover"/></div>
            <div><h3>↑ Less admin time<br/>on routine HR tasks</h3><p>See HRMS Modules <span aria-hidden="true">↪</span></p></div>
          </Link>
        </div>
        <div className={styles.photoPanel}>
          <Image src="/images/hrms/graphics/hr-operations.webp" quality={95} alt="An HR operations professional reviewing attendance and payroll on a laptop in a modern office." fill sizes="(max-width:767px) 90vw, 47vw" className="object-cover"/>
          <dl className={styles.stats}>
            <div><dd>↑<span /></dd><dt>Better attendance</dt><p>accuracy and reporting</p></div>
            <div><dd>↑</dd><dt>Faster payroll processing</dt><p>with fewer manual errors</p></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
