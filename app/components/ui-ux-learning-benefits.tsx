import { uiUxContent } from "../data/ui-ux-content";
import Image from "next/image";
import styles from "./ui-ux-learning-benefits.module.css";

export default function UiUxLearningBenefits() {
  return <section className={styles.section} aria-labelledby="uiux-learning-benefits-heading">
    <h2 id="uiux-learning-benefits-heading" className="sr-only">{uiUxContent.learning.title}</h2>
    <div className={styles.cards}>
      <article className={`${styles.card} ${styles.expert}`}>
        <div className={styles.artwork} aria-hidden="true"><div className={styles.shadowTile}/><div className={styles.blueTile}/><div className={styles.orangeTile}><svg viewBox="0 0 160 160" fill="#ff8a0d">{Array.from({length:12},(_,i)=><path key={i} d="M80 80C52 69 39 40 53 10c20 4 37 18 40 39 2 13-5 25-13 31Z" transform={`rotate(${i*30} 80 80)`}/>)}</svg></div></div>
        <h3>{uiUxContent.learning.items[0].title}</h3><p>{uiUxContent.learning.items[0].description}</p>
      </article>
      <article className={`${styles.card} ${styles.flexible}`}>
        <div className={styles.studyArtwork}>
          <div className={styles.playPanel} aria-hidden="true"><svg viewBox="0 0 200 150"><defs><linearGradient id="uiux-study-play" x1="0" y1="1" x2="1" y2="0"><stop stopColor="#fff1bd"/><stop offset=".5" stopColor="#ffbd82"/><stop offset="1" stopColor="#f14798"/></linearGradient></defs><path d="M18 15 94 75 18 135Z" fill="url(#uiux-study-play)"/><path d="m100 5 81 70-81 70Z" fill="url(#uiux-study-play)"/></svg></div>
          <div className={styles.studentOne}><Image quality={95} src="/images/ui-ux-design/graphics/design-workspace.webp" alt="A UI designer reviewing a shared component library" fill sizes="(max-width:767px) 30vw, 12vw" className="object-cover"/></div>
          <div className={styles.studentTwo}><Image quality={95} src="/images/ui-ux-design/graphics/product-team.webp" alt="Product designers and a developer reviewing interface prototypes" fill sizes="(max-width:767px) 32vw, 13vw" className="object-cover"/></div>
        </div>
        <h3>{uiUxContent.learning.items[1].title}</h3><p>{uiUxContent.learning.items[1].description}</p>
      </article>
      <article className={`${styles.card} ${styles.network}`}>
        <div className={styles.people} aria-hidden="true">{Array.from({length:10},(_,i)=><span key={i} style={{backgroundPosition:`${(i%4)*100/3}% ${i%2===0 ? 0 : 100}%`}}/>)}</div>
        <h3>{uiUxContent.learning.items[2].title}</h3><p>{uiUxContent.learning.items[2].description}</p>
      </article>
    </div>
  </section>;
}
