import Image from "next/image";
import packagesArtwork from "../../public/images/github-packages.webp";
import styles from "./packages-section.styles";

export default function PackagesSection() {
  return (
    <section className={styles.section} id="packages" aria-labelledby="packages-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>New</span>
          <h2 id="packages-heading">
            <span>Customer Data,</span>
            <span>Safe With</span>
            <span>Our Brand</span>
          </h2>
          <p>
            {"With Growthys Analytics, you can safely collect, understand, and act on customer data — within your organisation or across every channel you run."}
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="/contact">
              Get started
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className={styles.secondaryButton} href="#digital-banking">See pricing</a>
          </div>
        </div>
        <div className={styles.visual}>
          <Image
            src={packagesArtwork}
            alt="GitHub Octocat surrounded by colorful purple, blue and pink three-dimensional shapes."
            fill
            placeholder="blur"
            sizes="(max-width: 760px) 94vw, (max-width: 1544px) 44vw, 660px"
            className={styles.artwork}
          />
        </div>
      </div>
    </section>
  );
}
