import Image from "next/image";
import topazArtwork from "../../public/images/intelligent-experiences/topaz.webp";
import cobaltArtwork from "../../public/images/intelligent-experiences/cobalt.webp";
import asterArtwork from "../../public/images/intelligent-experiences/aster.webp";
import styles from "./intelligent-experiences.styles";

const experiences = [
  {
    name: "Growthys SEO Engine",
    artwork: topazArtwork,
    alt: "Colorful coral, orange and turquoise ribbons folded into a finely pleated sculpture",
    description: "Growthys SEO adapts best-in-class search strategies for your business, ensuring sustainable rankings and successful organic growth tailored to your market and goals.",
    featured: false,
    href: null,
  },
  {
    name: "Growthys Cloud & CRM",
    artwork: cobaltArtwork,
    alt: "Flowing lavender and blue data waves illuminated by sparkling points of light",
    description: "A set of services, solutions, and platforms that act as a force multiplier for your CRM & management software and cloud-powered business transformation.",
    featured: true,
    href: null,
  },
  {
    name: "Growthys Marketing AI",
    artwork: asterArtwork,
    alt: "Translucent lavender glass ribbons curling into fluid loops with dark blue edges",
    description: "Growthys Marketing AI empowers marketers with the superpower of automation to create memorable customer experiences, increase efficiency, and drive growth.",
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
            {"Whether you're building your brand from scratch, transforming your IT solutions company in India strategy, or amplifying your marketing efforts, data remains the biggest enabler of growth."}
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
                  <a className={styles.learnMore} href={experience.href} aria-label="Learn more about Growthys Cloud & CRM">Learn More <ArrowUpRight /></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
