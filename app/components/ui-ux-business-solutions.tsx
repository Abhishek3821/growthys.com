import { uiUxContent } from "../data/ui-ux-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./ui-ux-business-solutions.module.css";

const solutions = uiUxContent.solutions.map((item, index) => ({
  ...item,
  image: ["/images/ui-ux-design/graphics/banking-app.webp", "/images/ui-ux-design/graphics/saas-dashboard.webp"][index],
  alt: ["A clear banking transfer journey with recipient selection and confirmation", "A SaaS workspace with organised navigation, onboarding and reusable components"][index],
}));

export default function UiUxBusinessSolutions() {
  return <section aria-labelledby="uiux-business-solutions-heading" className={styles.section}>
    <h2 id="uiux-business-solutions-heading" className="sr-only">Business solutions</h2>
    <div className={styles.container}>{solutions.map((solution,index) => <article key={solution.title} className={`${styles.row} ${index === 1 ? styles.reversed : ""}`}>
      <div className={styles.photo}><Image quality={95} src={solution.image} alt={solution.alt} fill sizes="(max-width:767px) 90vw, 58vw" className="object-cover"/><span className={styles.dots} aria-hidden="true"><i/><i/><i/></span></div>
      <div className={styles.copy}><h3>{solution.title}</h3><p>{solution.description}</p><div className={styles.actions}><Link href="/contact#contact-inquiry">Read more<span className="sr-only"> about {solution.title}</span></Link><Link href="/contact#contact-inquiry">Discuss a project <span aria-hidden="true">⟶</span><span className="sr-only">: {solution.title}</span></Link></div></div>
    </article>)}</div>
  </section>;
}
