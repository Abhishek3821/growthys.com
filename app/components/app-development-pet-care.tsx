import { appDevelopmentContent } from "../data/app-development-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./app-development-pet-care.module.css";

function AppIllustration() {
  return <svg viewBox="0 0 150 125" fill="none" className={styles.dog} aria-hidden="true"><rect x="40" y="7" width="70" height="111" rx="13" fill="#fff9e8" stroke="#3b7773" strokeWidth="5" /><path d="M63 16h24M68 108h14" stroke="#3b7773" strokeWidth="4" strokeLinecap="round" /><rect x="50" y="29" width="50" height="24" rx="4" fill="#cdf3f9" stroke="#3b7773" strokeWidth="3" /><path d="m65 64-8 8 8 8m20-16 8 8-8 8m-7-20-6 24M52 94h45M15 42l8 5m-3-20 5 8m101 48 9-3m-9 16 9 3" stroke="#3b7773" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function AppDevelopmentPetCare() {
  return (
    <section aria-labelledby="app-pet-care-heading" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="app-pet-care-heading">{appDevelopmentContent.product.title}</h2>
          <p>{appDevelopmentContent.product.intro}</p>
        </header>
        <div className={styles.cards}>
          <div className={styles.photo}>
            <Image quality={95} src="/images/app-development/graphics/product-planning.webp" alt="A founder and designer planning a mobile product with wireframes and a prototype" fill sizes="(max-width: 767px) 90vw, 46vw" className="object-cover" />
          </div>
          <div className={styles.treatment}>
            <h3>{appDevelopmentContent.product.plans}</h3>
            <p>{appDevelopmentContent.product.description}</p>
            <Link href="/contact#contact-inquiry" className={styles.button}>Book a Free Consultation</Link>
            <AppIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
