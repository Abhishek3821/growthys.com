import Image from "next/image";
import unifiedTeam from "../../public/images/insights/company-overview/unified-team.webp";
import marketingTechnology from "../../public/images/insights/company-overview/marketing-technology.webp";
import clearReporting from "../../public/images/insights/company-overview/clear-reporting.webp";
import connectedGrowth from "../../public/images/insights/company-overview/connected-growth.webp";
import styles from "./insights-articles.styles";

const articles = [
  {
    category: "What We Do",
    title: "Marketing That Converts. Technology That Scales.",
    description: "From SEO and social media to CRM & management software and HRMS software development, we deliver services that solve real business problems — not just fill a service list.",
    image: marketingTechnology,
    alt: "A magnifying lens, target, analytics ribbon and connected cloud illustrating marketing that converts and technology that scales.",
  },
  {
    category: "How We Work",
    title: "Clear Plans. Honest Reporting. No Surprises.",
    description: "Every project starts with goals, timelines, and measurable KPIs. You see the same numbers we see, and you know what is happening at every stage.",
    image: clearReporting,
    alt: "A glass reporting dashboard with rising charts and project milestones representing clear plans and measurable KPIs.",
  },
  {
    category: "Why It Matters",
    title: "Because Growth Needs Both Sides Working Together",
    description: "Most businesses struggle because marketing and technology are handled by different vendors. Our best consulting company-grade team connects both — so campaigns, websites, and systems all move in the same direction.",
    image: connectedGrowth,
    alt: "Two complementary sculptural arches joined into a bridge, representing marketing and engineering working toward shared growth.",
  },
];

export default function InsightsArticles() {
  return (
    <section id="blogs" className={styles.section} aria-labelledby="insights-articles-heading">
      <div className={styles.inner}>
        <h2 id="insights-articles-heading" className={styles.heading}>
          Practical Ways to Understand<br />How We <em>Work.</em>
        </h2>

        <article className={styles.featured}>
          <div className={styles.featuredImage}>
            <Image src={unifiedTeam} quality={95} alt="Connected design, marketing and software workstations in one studio, illustrating one team with a technology core." fill placeholder="blur" sizes="(max-width: 700px) 100vw, (max-width: 1248px) 50vw, 600px" />
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.category}>Who We Are</span>
            <h3>A Digital Marketing Company With a Technology Core</h3>
            <p>Growthys is a digital marketing company and IT solutions company in India based in Gurugram, Haryana. We handle marketing, design, and software development under one roof — so strategy and execution stay connected.</p>
            <div className={styles.featuredFooter}>
              <span className={styles.readTime}>Marketing + Technology</span>
              <span className={styles.byline}>One team. <strong>Growthys</strong></span>
            </div>
          </div>
        </article>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article className={styles.card} key={article.category}>
              <div className={styles.cardImage}>
                <Image src={article.image} quality={95} alt={article.alt} fill placeholder="blur" sizes="(max-width: 700px) 100vw, (max-width: 1248px) 33vw, 390px" />
                <span className={styles.category}>{article.category}</span>
              </div>
              <div className={styles.cardContent}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
