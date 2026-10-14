import Image from "next/image";
import topazArtwork from "../../public/images/intelligent-experiences/topaz.webp";
import cobaltArtwork from "../../public/images/intelligent-experiences/cobalt.webp";
import asterArtwork from "../../public/images/intelligent-experiences/aster.webp";
import styles from "./intelligent-experiences.styles";

const experiences = [
  {
    name: "Infosys Topaz",
    artwork: topazArtwork,
    alt: "Colorful coral, orange and turquoise ribbons folded into a finely pleated sculpture",
    description: "Infosys Topaz : Adapts best-in-class foundation models for your business, ensuring sustainable and successful AI programs tailored to your specific data and enterprise needs.",
    featured: false,
    href: null,
  },
  {
    name: "Infosys Cobalt",
    artwork: cobaltArtwork,
    alt: "Flowing lavender and blue data waves illuminated by sparkling points of light",
    description: "Infosys Cobalt is a set of services, solutions, and platforms that acts as a force multiplier for cloud-powered enterprise transformation.",
    featured: true,
    href: "https://www.infosys.com/services/cloud-cobalt.html",
  },
  {
    name: "Infosys Aster",
    artwork: asterArtwork,
    alt: "Translucent lavender glass ribbons curling into fluid loops with dark blue edges",
    description: "Infosys Aster empower marketers with the superpower of AI to create memorable customer experiences, increase efficiency, and drive growth",
    featured: false,
    href: null,
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function IntelligentExperiences() {
  return (
    <section className={styles.section} id="services" aria-labelledby="intelligent-experiences-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="intelligent-experiences-heading">Crafting <span>Intelligent</span> Experiences</h2>
          <p>
            Whether you&apos;re building your own models, transforming your cloud strategy,
            or amplifying your marketing efforts, data remains the biggest enabler of AI.
          </p>
          <a className={styles.curiousButton} href="#experience-solutions">I’m Curious <ArrowUpRight /></a>
        </header>

        <div className={styles.cards} id="experience-solutions">
          {experiences.map((experience) => (
            <article className={styles.card} key={experience.name}>
              <div className={styles.visual}>
                <Image src={experience.artwork} alt={experience.alt} fill placeholder="blur" sizes={experience.featured
                  ? "(max-width: 600px) 94vw, (max-width: 900px) 560px, (max-width: 1544px) 34vw, 512px"
                  : "(max-width: 600px) 94vw, (max-width: 900px) 560px, (max-width: 1544px) 28vw, 424px"} className={styles.artwork} />
              </div>
              <div className={styles.panel}>
                <h3>{experience.name}</h3>
                <p>{experience.description}</p>
                {experience.href && (
                  <a className={styles.learnMore} href={experience.href} target="_blank" rel="noopener noreferrer" aria-label="Learn more about Infosys Cobalt (opens in a new tab)">Learn More <ArrowUpRight /></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
