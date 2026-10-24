import Image, { type StaticImageData } from "next/image";
import gurugram from "../../public/images/insights/company-overview/gurugram-base.webp";
import companyFocus from "../../public/images/insights/company-overview/company-focus.webp";
import clients from "../../public/images/insights/company-overview/client-partnerships.webp";
import industries from "../../public/images/insights/company-overview/industry-solutions.webp";
import rating from "../../public/images/insights/company-overview/client-rating.webp";
import team from "../../public/images/insights/company-overview/multidisciplinary-team.webp";
import styles from "./insights-experiences.styles";

type ExperienceCardProps = {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  overviewHeading?: boolean;
  sizes: string;
  className?: string;
};

function ExperienceCard({ image, alt, title, description, overviewHeading = false, sizes, className = "" }: ExperienceCardProps) {
  return (
    <article className={`${styles.card} ${className}`}>
      <Image src={image} quality={95} alt={alt} fill placeholder="blur" sizes={sizes} />
      <span className={styles.rating}>{overviewHeading ? "A Quick Look at Growthys" : "Growthys"}</span>
      <div className={styles.caption}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default function InsightsExperiences() {
  return (
    <section className={styles.section} aria-label="A Quick Look at Growthys">
      <div className={styles.gallery}>
        <div className={styles.leftColumn}>
          <ExperienceCard image={gurugram} alt="Modern glass office towers and landscaped greenery inspired by Cyber City in Gurugram, Haryana." title="Founded" description="Gurugram, Haryana, India" overviewHeading sizes="(max-width: 520px) 50vw, (max-width: 800px) 45vw, 25vw" className={styles.wildlife} />
          <ExperienceCard image={companyFocus} alt="A target, laptop and connected cloud representing digital marketing, software development and IT consulting." title="Focus" description="Digital marketing, software development, IT consulting" sizes="(max-width: 520px) 50vw, (max-width: 800px) 45vw, 25vw" />
        </div>

        <ExperienceCard image={clients} alt="Connected buildings of different sizes and a globe representing startups, SMEs and enterprises across India and abroad." title="Clients" description="Startups, SMEs, enterprises across India and abroad" sizes="(max-width: 520px) 100vw, (max-width: 800px) 55vw, 32vw" className={styles.village} />

        <div className={styles.rightColumn}>
          <ExperienceCard image={industries} alt="Connected shopping, healthcare, education, property and manufacturing objects representing the industries Growthys serves." title="Industries" description="E-commerce, healthcare, education, real estate, manufacturing, D2C" sizes="(max-width: 800px) 100vw, 45vw" className={styles.mountains} />
          <div className={styles.bottomRow}>
            <ExperienceCard image={rating} alt="A faceted green glass star on a champagne pedestal representing client satisfaction and reliable service." title="Rating" description="4.9/5 average client rating" sizes="(max-width: 800px) 40vw, 18vw" className={styles.waterfall} />
            <ExperienceCard image={team} alt="Connected design, marketing and development workstations representing a multidisciplinary team under one roof." title="Team" description="Designers, marketers, developers, and consultants under one roof" sizes="(max-width: 800px) 60vw, 30vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
