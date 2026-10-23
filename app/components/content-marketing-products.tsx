import { contentMarketingContent } from "../data/content-marketing-content";
import Image from "next/image";
import styles from "./content-marketing-products.module.css";

const products = contentMarketingContent.services.items.map((name, index) => ({
  name,
  image: ["blogs", "landing-pages", "white-papers", "email-newsletters"][index],
  alt: ["Original blog and article layouts with editorial research tools", "A landing page with clear message hierarchy and an orange call to action", "Research reports, case-study spreads and white-paper layouts", "A connected email sequence with newsletter layouts and an envelope"][index],
  color: ["#eef8fc", "#edf9f5", "#f2eefc", "#fcf0f5"][index],
}));

export default function ContentMarketingProducts() {
  return (
    <section className={styles.section} aria-labelledby="content-products-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{contentMarketingContent.services.eyebrow}</p>
          <h2 id="content-products-heading">{contentMarketingContent.services.title}</h2>
          <p className={styles.description}>{contentMarketingContent.services.intro}</p>
          <a className={styles.button} href="/contact#contact-inquiry">Discuss Content Services <span aria-hidden="true">→</span></a>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <article className={styles.card} style={{ backgroundColor: product.color }} key={product.image}>
              <div className={styles.image}><Image quality={95} src={`/images/content-marketing/graphics/${product.image}.webp`} alt={product.alt} fill sizes="(max-width: 600px) 42vw, (max-width: 1000px) 35vw, 17vw" className="object-cover" /></div>
              <div className={styles.copy}><h3>{product.name}</h3><a href="/contact#contact-inquiry" aria-label={`Enquire about ${product.name}`}>Explore <span aria-hidden="true">→</span></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
