import Image from "next/image";
import styles from "./ecommerce-marketing-about.module.css";

export default function EcommerceMarketingAbout() {
  return (
    <section aria-labelledby="ecommerce-about-heading" className={styles.section}>
      <div className={styles.poster}>
        <div className={styles.portrait}>
          <Image src="/images/services/ecommerce-marketing-about.webp" alt="A woman wearing a cream blazer outdoors with windblown hair" fill sizes="(max-width: 767px) 90vw, 47vw" className="object-cover" />
        </div>
        <div className={styles.content}>
          <p className={styles.introduction}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <ul className={styles.tags} aria-label="Creative disciplines">
            <li>Design</li><li>Strategy</li><li>Marketing</li>
          </ul>
          <div className={styles.headingRow}>
            <h2 id="ecommerce-about-heading">ABOUT<br />ME</h2>
            <p className={styles.verticalCopy}>CREATIVE PERSPECTIVE<br />PERSONAL EXPRESSION<br />GROWTHYS STUDIO — 2026</p>
          </div>
        </div>
        <div className={styles.footer} aria-hidden="true">
          <span>LET’S MAKE YOUR BRAND<br />IMPOSSIBLE TO IGNORE</span>
          <span>DESIGNED TO LEAVE A MARK</span>
          <span>HASU — 02</span>
        </div>
      </div>
    </section>
  );
}
