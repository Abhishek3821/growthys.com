import { ecommerceMarketingContent } from "../data/ecommerce-marketing-content";
import Image from "next/image";
import styles from "./ecommerce-marketing-hobbies.module.css";

const hobbies = ecommerceMarketingContent.love.items;
const photos = [
  { name: "product-page", alt: "Product page optimization with product details, colour options and a purchase button" },
  { name: "cart-recovery", alt: "Abandoned cart recovery using automated email" },
  { name: "ad-testing", alt: "Comparing product advertising creatives and audiences" },
  { name: "revenue-analytics", alt: "Ecommerce dashboard measuring sales and completed orders" },
];

export default function EcommerceMarketingHobbies() {
  return (
    <section aria-labelledby="ecommerce-hobbies-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.content}>
          <h2 id="ecommerce-hobbies-heading" aria-label={ecommerceMarketingContent.love.title}>WE LOVE</h2>
          <p className={styles.introduction}>{ecommerceMarketingContent.love.title}</p>
          <div className={styles.description}>
            <p>{ecommerceMarketingContent.love.intro}</p>
            <p>{ecommerceMarketingContent.perspective.takeaway}</p>
          </div>
          <div className={styles.interests}>
            <ul aria-label="The ecommerce marketing details we love">{hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}</ul>
            <p className={styles.verticalCopy}>PRODUCT PAGES TO DELIVERY<br />DETAILS THAT DRIVE REVENUE<br />GROWTHYS — VOL. 05</p>
          </div>
        </div>
        <div className={styles.photos}>{photos.map((photo) => <div key={photo.name} className={styles.photo}><Image quality={95} src={`/images/ecommerce-marketing/graphics/${photo.name}.webp`} alt={photo.alt} fill sizes="(max-width: 767px) 44vw, 26vw" className="object-cover" /></div>)}</div>
        <div className={styles.footer} aria-hidden="true"><span>LET’S MAKE YOUR STORE<br />IMPOSSIBLE TO IGNORE</span><span>BUILT FOR COMPLETED ORDERS</span><span>GROWTHYS — 05</span></div>
      </div>
    </section>
  );
}
