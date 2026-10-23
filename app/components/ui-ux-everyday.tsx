import { uiUxContent } from "../data/ui-ux-content";
import Image from "next/image";
import styles from "./ui-ux-everyday.module.css";

const tips = uiUxContent.everyday.items;

export default function UiUxEveryday() {
  return (
    <section className={styles.section} aria-labelledby="uiux-everyday-heading">
      <div className={styles.container}>
        <header className={styles.heading}><h2 id="uiux-everyday-heading">Work Smarter<br/><span>Every Day</span></h2><p>Helpful Methods. Practical Tools.<br/>Stronger Products.</p></header>
        <div className={styles.layout}>
          <div className={styles.photo}><Image quality={95} src="/images/ui-ux-design/graphics/design-workspace.webp" alt="A product designer reviewing a component library with wireframes and design notes" fill sizes="(max-width:767px) 90vw, 45vw" className="object-cover"/></div>
          <ol className={styles.tips}>{tips.map((tip,index)=><li key={tip.title}><span className={styles.number} aria-hidden="true">{String(index+1).padStart(2,"0")}</span><h3>{tip.title}</h3><p>{tip.description}</p></li>)}</ol>
        </div>
      </div>
    </section>
  );
}
