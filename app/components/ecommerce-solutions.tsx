import Image from "next/image";
import ecommerceImage from "../../public/images/ecommerce-solutions.webp";
import styles from "./ecommerce-solutions.styles";

const benefits = [
  "Conversion-focused mobile-first UI/UX engineering reducing checkout friction.",
  "AI-driven personalization, smart search filters, and dynamic pricing models.",
  "High-speed cloud infrastructure engineered to withstand viral traffic spikes.",
];

export default function EcommerceSolutions() {
  return (
    <section className={styles.section} id="ecommerce-solutions" aria-labelledby="ecommerce-heading">
      <div className={styles.container}>
        <div className={styles.visual}>
          <Image
            src={ecommerceImage}
            alt="Shopping cart with colorful bags in front of glowing sales charts"
            className={styles.image}
            placeholder="blur"
            sizes="(max-width: 900px) 90vw, (max-width: 1800px) 39vw, 674px"
          />
        </div>
        <div className={styles.content}>
          <h2 id="ecommerce-heading">Tailored IT Solutions for Modern E-Commerce</h2>
          <div className={styles.description}>
            <p><span className={styles.brand}>Capyngen</span> delivers tailored IT solutions for global e-commerce and DTC retail brands. From predictive AI product recommendation engines and unified CRM systems to high-conversion UI/UX design and elastic DevOps, we empower online stores to scale smoothly.</p>
            <p>We construct robust storefronts that reduce cart abandonment, automate high-volume fulfillment, and provide personalized omni-channel customer journeys.</p>
          </div>
          <ul className={styles.benefits}>
            {benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
          <button className={styles.consultationButton} type="button" disabled>
            Schedule E-Commerce Consultation
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
