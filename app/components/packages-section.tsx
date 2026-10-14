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
            <span>Your packages,</span>
            <span>at home with their</span>
            <span>code</span>
          </h2>
          <p>
            With GitHub Packages, you can safely publish and consume packages
            within your organization or with the entire world.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="https://docs.github.com/en/packages/quickstart">
              Get started
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m6 4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className={styles.secondaryButton} href="https://github.com/pricing">See pricing</a>
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
