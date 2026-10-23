import { uiUxContent } from "../data/ui-ux-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./ui-ux-tennis-community.module.css";

const memberVisuals = [
  { photo: "/images/ui-ux-design/graphics/user-research.webp", alt: "A UX research session with a participant testing a prototype" },
  { position: "center", graphic: "saas-dashboard", alt: "A clear SaaS onboarding dashboard" },
  { position: "center", graphic: "handoff", alt: "Organised interface artboards and developer specifications" },
  { position: "center", graphic: "design-system", alt: "A consistent reusable UI component library" },
  { position: "center", graphic: "prototype-testing", alt: "A mobile prototype with a highlighted test interaction" },
  { position: "center", graphic: "travel-food", alt: "Travel booking and food delivery interface designs" },
  { photo: "/images/ui-ux-design/graphics/product-team.webp", alt: "Product designers collaborating on prototype and developer handoff" },
];
const members = uiUxContent.why.items.map((item, index) => ({
  ...memberVisuals[index],
  stat: String(index + 1).padStart(2, "0"),
  title: item.title,
  description: item.description,
}));

export default function UiUxTennisCommunity() {
  return <section className={styles.section} aria-labelledby="uiux-tennis-heading">
    <div className={styles.container}>
      <header className={styles.heading}><h2 id="uiux-tennis-heading">Why Choose Growthys<br/>for UI/UX Design<br/>Today</h2><p>{uiUxContent.why.intro}</p><div className={styles.actions}><Link href="/contact#contact-inquiry">Get Started <span aria-hidden="true">→</span></Link><Link href="/contact#contact-inquiry">Learn More <span aria-hidden="true">→</span></Link></div></header>
      <div className={styles.columns}>{members.map((member,index)=><div key={member.stat} className={styles.column}>
        <div className={styles.photo}>{member.photo ? <Image quality={95} src={member.photo} alt={member.alt ?? "Design team members"} fill sizes="(max-width:600px) 42vw, 14vw" className="object-cover"/> : <span className={styles.portrait} style={{backgroundPosition:member.position, backgroundImage: `url(/images/ui-ux-design/graphics/${member.graphic}.webp)`, backgroundSize: "cover"}} role="img" aria-label={member.alt}/>}</div>
        <div className={styles.stat}><p>{member.stat}</p><span><strong>{member.title}</strong><br/>{member.description}</span></div>
        <div className={styles.accent} aria-hidden="true"><span>{["↗","✦","◒","↗","✦","◒","↗"][index]}</span></div>
      </div>)}</div>
    </div>
  </section>;
}
