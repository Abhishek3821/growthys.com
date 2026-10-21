import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./cms-design-hero.module.css";

function FashionPhoto({ name, alt, small = false, notch = false }: { name: string; alt: string; small?: boolean; notch?: boolean }) {
  return <div className={`${styles.photo} ${small ? styles.smallPhoto : ""} ${notch ? styles.notched : ""}`}>
    <Image src={`/images/cms-design/${name}.webp`} alt={alt} fill preload sizes="(max-width: 600px) 43vw, (max-width: 900px) 28vw, 19vw" className="object-cover" />
  </div>;
}

export default function CmsDesignHero() {
  return <div className={styles.hero}>
    <header className={styles.header}>

      <Navbar onHomePage={false} currentPage="/cms-design" />
    </header>
    <section aria-labelledby="cms-design-heading" className={styles.content}>
      <div className={styles.headingRow}>
        <Link href="/contact#contact-inquiry" aria-label="Learn about our CMS design services" className={styles.learnLink}>
          <svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id="cms-learn-circle" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" /></defs><text fontSize="8" letterSpacing="2.8"><textPath href="#cms-learn-circle">Learn about us · Explore the vision · </textPath></text><path d="M44 38 62 50 44 62Z" /></svg>
        </Link>
        <h1 id="cms-design-heading">Elevate Your Style With<br className="hidden sm:block" /> Bold Fashion</h1>
        <div className={styles.community} aria-label="Connect with our creative team">
          <div><Image src="/images/cms-design/yellow-portrait.webp" alt="" fill sizes="32px" className="object-cover" /></div>
          <div><Image src="/images/cms-design/creative-avatar.webp" alt="" fill sizes="32px" className="object-cover" /></div>
          <Link href="/contact#contact-inquiry" aria-label="Meet the Growthys team">+</Link>
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.outerColumn}>
          <FashionPhoto name="orange-look" alt="Model wearing a bold orange tracksuit and cap" notch />
          <FashionPhoto name="colourful-look" alt="Curly-haired model wearing a colourful turquoise jacket" small />
        </div>
        <div className={styles.tallColumn}>
          <FashionPhoto name="green-suit" alt="Model in an oversized emerald green suit against a sage backdrop" notch />
        </div>
        <div className={styles.middleColumn}>
          <svg viewBox="0 0 50 50" className={styles.sun} aria-hidden="true">{Array.from({length: 12}, (_, i) => <ellipse key={i} cx="25" cy="10" rx="2" ry="4" transform={`rotate(${i * 30} 25 25)`} fill="#efa971" />)}<circle cx="25" cy="25" r="5" fill="#f5bd7e" /></svg>
          <FashionPhoto name="yellow-portrait" alt="Fashion portrait with a mustard yellow hat and textured coat" />
          <Link href="/contact#contact-inquiry" className={styles.explore}>Explore Collections <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.tallColumn}>
          <FashionPhoto name="blue-suit" alt="Model in an icy blue suit and sunglasses against a cyan backdrop" notch />
        </div>
        <div className={styles.outerColumn}>
          <FashionPhoto name="heart-sunglasses" alt="Model wearing red heart-shaped sunglasses and an ivory T-shirt" notch />
          <FashionPhoto name="teal-look" alt="Model in an emerald green jacket against a deep teal backdrop" small />
        </div>
      </div>
    </section>
  </div>;
}
