import Image from "next/image";
import strategy from "../../public/images/insights/article-strategy.webp";
import growth from "../../public/images/insights/article-growth.webp";
import operations from "../../public/images/insights/article-operations.webp";
import workflow from "../../public/images/insights/article-workflow.webp";
import styles from "./insights-articles.styles";

const articles = [
  {
    category: "Growth",
    title: "The Real Cost of Bad Design (It’s Not What You Think)",
    description: "Poor design slows down decisions, clutters your message and stalls growth.",
    image: growth,
    alt: "Pale blue sculptural folds surrounding a soft coral glow",
  },
  {
    category: "Operations",
    title: "How to Get More Done Without Hiring a Full Design Team",
    description: "Lean teams are using design subscriptions to stay fast without hiring.",
    image: operations,
    alt: "Black sculptural head wearing a futuristic visor against a gray backdrop",
  },
  {
    category: "Workflow",
    title: "What Working With a Design Subscription Actually Looks Like",
    description: "A behind the scenes look at how founders use design subscriptions to move faster.",
    image: workflow,
    alt: "Two hands reaching toward one another in soft studio light",
  },
];

export default function InsightsArticles() {
  return (
    <section id="blogs" className={styles.section} aria-labelledby="insights-articles-heading">
      <div className={styles.inner}>
        <h2 id="insights-articles-heading" className={styles.heading}>
          Practical reads to help<br />you move <em>faster.</em>
        </h2>

        <article className={styles.featured}>
          <div className={styles.featuredImage}>
            <Image src={strategy} alt="An expressive monochrome portrait captured in motion" fill placeholder="blur" sizes="(max-width: 700px) 100vw, (max-width: 1248px) 50vw, 600px" />
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.category}>Strategy</span>
            <h3>Why Most Startups Keep Getting Design Wrong</h3>
            <p>Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.</p>
            <div className={styles.featuredFooter}>
              <span className={styles.readTime}>5 min read</span>
              <span className={styles.byline}>by <strong>Growthys</strong></span>
            </div>
          </div>
        </article>

        <div className={styles.grid}>
          {articles.map((article) => (
            <article className={styles.card} key={article.category}>
              <div className={styles.cardImage}>
                <Image src={article.image} alt={article.alt} fill placeholder="blur" sizes="(max-width: 700px) 100vw, (max-width: 1248px) 33vw, 390px" />
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
