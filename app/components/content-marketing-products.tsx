import Image from "next/image";
import styles from "./content-marketing-products.module.css";

const products = [
  { name: "Tablets & Capsules", image: "tablets", alt: "Blue and white capsules in silver blister packs", color: "#eef8fc" },
  { name: "Syrups & Suspensions", image: "syrups", alt: "Amber syrup bottle with a clear dosing cup", color: "#edf9f5" },
  { name: "Injectables", image: "injectables", alt: "Clear medical vials and a syringe", color: "#f2eefc" },
  { name: "Ointments & Creams", image: "ointments", alt: "White ointment tube and cream jar", color: "#fcf0f5" },
];

export default function ContentMarketingProducts() {
  return (
    <section className={styles.section} aria-labelledby="content-products-heading">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Our Products</p>
          <h2 id="content-products-heading">A Wide Range of Pharmaceutical Solutions</h2>
          <p className={styles.description}>From everyday health needs to specialised therapies, we offer a comprehensive range of pharmaceutical products designed for a healthier tomorrow.</p>
          <a className={styles.button} href="/contact#contact-inquiry">View All Products <span aria-hidden="true">→</span></a>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <article className={styles.card} style={{ backgroundColor: product.color }} key={product.image}>
              <div className={styles.image}><Image src={`/images/content-marketing/products/${product.image}.webp`} alt={product.alt} fill sizes="(max-width: 600px) 42vw, (max-width: 1000px) 35vw, 17vw" className="object-cover" /></div>
              <div className={styles.copy}><h3>{product.name}</h3><a href="/contact#contact-inquiry" aria-label={`Enquire about ${product.name}`}>Explore <span aria-hidden="true">→</span></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
