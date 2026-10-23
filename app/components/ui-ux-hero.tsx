import { uiUxContent } from "../data/ui-ux-content";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./ui-ux-hero.module.css";

export default function UiUxHero() {
  return <div className={styles.hero}>
    <header className={styles.header}><Navbar onHomePage={false} currentPage="/ui-ux-design" /></header>
    <section className={styles.content} aria-labelledby="ui-ux-heading">
      <div className={styles.headingBlock}>
        <h1 id="ui-ux-heading" aria-label={uiUxContent.hero.title}><span className={styles.firstLine}>INTUITIVE <span className={styles.smile} aria-hidden="true">☺</span>INTERFACES <span className={styles.chevrons} aria-hidden="true">▸▸▸▸</span></span><span className={styles.secondLine}>KEEP <svg viewBox="0 0 70 45" aria-hidden="true"><path d="M5 9v22c0 13 14 13 14 0V14c0-13 14-13 14 0v17c0 13 14 13 14 0V14c0-13 14-13 14 0v22" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/></svg> USERS <span className={styles.warmth}><i aria-hidden="true"/>COMING BACK</span></span><span className="sr-only">{uiUxContent.hero.title}</span></h1>
        <p>{uiUxContent.hero.description}</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.lookCard}>
          <div className={styles.lookPhoto}><Image quality={95} src="/images/ui-ux-design/graphics/design-workflow.webp" alt="A product design workflow connecting research, wireframes, final interfaces and developer handoff" fill preload sizes="(max-width:767px) 90vw, 32vw" className="object-cover"/>
            <p className={`${styles.productLabel} ${styles.pullover}`}>User Research<br/><strong>Understand users</strong></p><p className={`${styles.productLabel} ${styles.bag}`}>Wireframes<br/><strong>Clear structure</strong></p><p className={`${styles.productLabel} ${styles.mug}`}>UI Systems<br/><strong>Stay consistent</strong></p><p className={`${styles.productLabel} ${styles.shorts}`}>Prototypes<br/><strong>Test early</strong></p><p className={`${styles.productLabel} ${styles.shoes}`}>Handoff<br/><strong>Ready to build</strong></p>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.actions}><Link href="/contact#contact-inquiry" className={styles.shop}>BOOK A FREE UX REVIEW <span aria-hidden="true">⟶</span></Link><Link href="#uiux-collection" className={styles.explore}>EXPLORE OUR UI/UX WORK</Link></div>
          <div className={styles.collection} id="uiux-collection"><Image quality={95} src="/images/ui-ux-design/graphics/saas-dashboard.webp" alt="A SaaS dashboard with clear onboarding steps and a highlighted first action" fill preload sizes="(max-width:767px) 90vw, 32vw" className="object-cover"/><div className={styles.collectionLabel}><h2>SaaS<br/><strong>Dashboard</strong></h2><Link href="/contact#contact-inquiry">Discuss Design ↗</Link></div></div>
        </div>
        <div className={styles.right}>
          <div className={styles.newSet}><Image quality={95} src="/images/ui-ux-design/graphics/banking-app.webp" alt="A mobile banking recipient selection and transfer confirmation flow" fill preload sizes="(max-width:767px) 90vw, 32vw" className="object-cover"/><div className={styles.setLabel}><h2>Mobile Banking App</h2><p>Clearer transfer flows</p><Link href="/contact#contact-inquiry">Discuss Design</Link></div></div>
          <div className={styles.slices} aria-hidden="true">{[0,1,2].map(index=><div key={index}><div className={styles.sliceSheet} style={{top:`-${index * 100}%`}}><Image quality={95} src="/images/ui-ux-design/graphics/banking-app.webp" alt="" fill sizes="32vw" className="object-cover"/></div>{index===2&&<span>⟶</span>}</div>)}</div>
        </div>
      </div>
    </section>
  </div>;
}
