import Image from "next/image";
import styles from "./ecommerce-marketing-volunteer.module.css";

const works = [
  { year: "2024", alt: "A woman beside a bright yellow sunflower in natural sunlight" },
  { year: "2023", alt: "Three volunteers standing together outdoors" },
  { year: "2022", alt: "A pale yellow flower against a sage green backdrop" },
];

export default function EcommerceMarketingVolunteer() {
  return (
    <section aria-labelledby="ecommerce-volunteer-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.content}>
          <p className={styles.introduction}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <ul className={styles.tags} aria-label="Volunteer work interests"><li>Design</li><li>Support</li><li>Community</li></ul>
          <h2 id="ecommerce-volunteer-heading">VOLUNTEER<br />WORK</h2>
        </div>
        <div className={styles.works}>
          {works.map((work, index) => (
            <article key={work.year} className={styles.work} aria-labelledby={`volunteer-work-${work.year}`}>
              <p className={styles.verticalCopy}>VOLUNTEER EXPERIENCE<br />CREATIVE CONTRIBUTIONS<br />COMMUNITY &amp; CONNECTION</p>
              <div className={styles.photo}>
                <div className={styles.photoSheet} style={{ top: `${index * -100}%` }}>
                  <Image src="/images/services/ecommerce-marketing-volunteer.webp" alt={work.alt} fill sizes="(max-width: 767px) 45vw, 25vw" className="object-cover" />
                </div>
              </div>
              <div className={styles.workDetails}>
                <p className={styles.year}>{work.year}</p>
                <h3 id={`volunteer-work-${work.year}`}>WORK NAME</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR BRAND<br />IMPOSSIBLE TO IGNORE</span><span>DESIGNED TO LEAVE A MARK</span><span>HASU — 07</span></div>
      </div>
    </section>
  );
}
