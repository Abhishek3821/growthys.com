import Image, { type StaticImageData } from "next/image";
import wildlife from "../../public/images/insights/experience-wildlife.webp";
import tradition from "../../public/images/insights/experience-tradition.webp";
import village from "../../public/images/insights/experience-village.webp";
import mountains from "../../public/images/insights/experience-mountains.webp";
import waterfall from "../../public/images/insights/experience-waterfall.webp";
import hills from "../../public/images/insights/experience-hills.webp";
import styles from "./insights-experiences.module.css";

type ExperienceCardProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  sizes: string;
  className?: string;
};

function ExperienceCard({ image, alt, title, sizes, className = "" }: ExperienceCardProps) {
  return (
    <article className={`${styles.card} ${className}`}>
      <Image src={image} alt={alt} fill placeholder="blur" sizes={sizes} />
      <span className={styles.rating} aria-label="4.5 out of 5">4.5</span>
      <div className={styles.caption}>
        <h3>NTB</h3>
        <p>{title}</p>
      </div>
    </article>
  );
}

export default function InsightsExperiences() {
  return (
    <section className={styles.section} aria-label="Island experiences">
      <div className={styles.gallery}>
        <div className={styles.leftColumn}>
          <ExperienceCard image={wildlife} alt="A Komodo dragon raising its head in a sunlit woodland" title="Wildlife Experience" sizes="(max-width: 520px) 50vw, (max-width: 800px) 45vw, 25vw" className={styles.wildlife} />
          <ExperienceCard image={tradition} alt="Traditional ceremonial dancers in front of a thatched-roof village house" title="Warrior Tradition" sizes="(max-width: 520px) 50vw, (max-width: 800px) 45vw, 25vw" />
        </div>

        <ExperienceCard image={village} alt="Tall thatched-roof houses lining a winding path through a traditional Sumbanese village" title="Traditional Sumbanese Village" sizes="(max-width: 520px) 100vw, (max-width: 800px) 55vw, 32vw" className={styles.village} />

        <div className={styles.rightColumn}>
          <ExperienceCard image={mountains} alt="Conical thatched houses in a green clearing surrounded by forested mountains" title="Misty Mountain Village" sizes="(max-width: 800px) 100vw, 45vw" className={styles.mountains} />
          <div className={styles.bottomRow}>
            <ExperienceCard image={waterfall} alt="A tall waterfall flowing down a lush tropical cliff" title="Waterfall" sizes="(max-width: 800px) 40vw, 18vw" className={styles.waterfall} />
            <ExperienceCard image={hills} alt="Soft green hills and curved grassy ridgelines in warm afternoon light" title="Traditional Attire" sizes="(max-width: 800px) 60vw, 30vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
