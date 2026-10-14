import Image from "next/image";
import Link from "next/link";
import styles from "./ui-ux-tennis-community.module.css";

const members = [
  { photo: "/images/crm-management/team/planning.webp", alt: "Members sharing a conversation around a table", stat: "100", description: "Top tennis courts available for all levels" },
  { position: "100% 0%", stat: "2K+", description: "Members sharing a passion for the game" },
  { position: "33.333% 100%", stat: "20+", description: "Weekly sessions to help build your skills" },
  { position: "66.667% 0%", stat: "All", description: "Skill levels welcome in our community" },
  { position: "66.667% 100%", stat: "30+", description: "Community events throughout the year" },
  { position: "100% 100%", stat: "10+", description: "Years of bringing tennis lovers together" },
  { photo: "/images/crm-management/team/tablet.webp", alt: "Community members spending time together", stat: "5", description: "Expert coaches to improve your game" },
];

export default function UiUxTennisCommunity() {
  return <section className={styles.section} aria-labelledby="uiux-tennis-heading">
    <div className={styles.container}>
      <header className={styles.heading}><h2 id="uiux-tennis-heading">Discover Your<br/>Passion for Tennis<br/>Today</h2><p>Join our vibrant community at Tennis Haven and elevate your skills.</p><div className={styles.actions}><Link href="/contact#contact-inquiry">Get Started <span aria-hidden="true">→</span></Link><Link href="/contact#contact-inquiry">Learn More <span aria-hidden="true">→</span></Link></div></header>
      <div className={styles.columns}>{members.map((member,index)=><div key={member.stat} className={styles.column}>
        <div className={styles.photo}>{member.photo ? <Image src={member.photo} alt={member.alt ?? "Community members"} fill sizes="(max-width:600px) 42vw, 14vw" className="object-cover"/> : <span className={styles.portrait} style={{backgroundPosition:member.position}} role="img" aria-label="Smiling community member portrait"/>}</div>
        <div className={styles.stat}><p>{member.stat}</p><span>{member.description}</span></div>
        <div className={styles.accent} aria-hidden="true"><span>{["↗","✦","◒","↗","✦","◒","↗"][index]}</span></div>
      </div>)}</div>
    </div>
  </section>;
}
