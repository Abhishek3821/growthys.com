import Image from "next/image";
import Link from "next/link";
import styles from "./ui-ux-business-solutions.module.css";

const solutions = [
  { title: "Financial income and expenses", description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.", image: "/images/crm-management/team/planning.webp", alt: "A business team reviewing a project together around a laptop" },
  { title: "Marketing solution for IT business", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", image: "/images/crm-management/team/meeting.webp", alt: "Professionals discussing ideas during a business meeting" },
];

export default function UiUxBusinessSolutions() {
  return <section aria-labelledby="uiux-business-solutions-heading" className={styles.section}>
    <h2 id="uiux-business-solutions-heading" className="sr-only">Business solutions</h2>
    <div className={styles.container}>{solutions.map((solution,index) => <article key={solution.title} className={`${styles.row} ${index === 1 ? styles.reversed : ""}`}>
      <div className={styles.photo}><Image src={solution.image} alt={solution.alt} fill sizes="(max-width:767px) 90vw, 58vw" className="object-cover"/><span className={styles.dots} aria-hidden="true"><i/><i/><i/></span></div>
      <div className={styles.copy}><h3>{solution.title}</h3><p>{solution.description}</p><div className={styles.actions}><Link href="/blogs">Read more<span className="sr-only"> about {solution.title}</span></Link><Link href="/contact#contact-inquiry">Order similar <span aria-hidden="true">⟶</span><span className="sr-only">: {solution.title}</span></Link></div></div>
    </article>)}</div>
  </section>;
}
