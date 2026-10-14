import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./ui-ux-hero.module.css";

export default function UiUxHero() {
  return <div className={styles.hero}>
    <header className={styles.header}><Link href="/" aria-label="Growthys home" className={styles.brand}>Growthys<span>®</span></Link><Navbar onHomePage={false} currentPage="/ui-ux-design" /></header>
    <section className={styles.content} aria-labelledby="ui-ux-heading">
      <div className={styles.headingBlock}>
        <h1 id="ui-ux-heading"><span className={styles.firstLine}>WINTER <span className={styles.smile} aria-hidden="true">☺</span>UTFIT <span className={styles.chevrons} aria-hidden="true">▸▸▸▸</span></span><span className={styles.secondLine}>GIVE <svg viewBox="0 0 70 45" aria-hidden="true"><path d="M5 9v22c0 13 14 13 14 0V14c0-13 14-13 14 0v17c0 13 14 13 14 0V14c0-13 14-13 14 0v22" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/></svg> YOU SOME <span className={styles.warmth}><i aria-hidden="true"/>WARMTH</span></span><span className="sr-only">Winter outfit gives you some warmth.</span></h1>
        <p>Elevate Your Wardrobe With Our Fashion Finds.<br/>Discover Your Signature Style At Fashion Avenue</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.lookCard}>
          <div className={styles.lookPhoto}><Image src="/images/ui-ux-design/winter-look.webp" alt="A playful 3D character wearing a blue puffer vest, green bag and chunky sneakers" fill preload sizes="(max-width:767px) 90vw, 32vw" className="object-cover"/>
            <p className={`${styles.productLabel} ${styles.pullover}`}>Pullover -<br/><strong>70.54$</strong></p><p className={`${styles.productLabel} ${styles.bag}`}>Green Bag<br/><strong>100.12$</strong></p><p className={`${styles.productLabel} ${styles.mug}`}>Gray mug<br/><strong>22.56$</strong></p><p className={`${styles.productLabel} ${styles.shorts}`}>Black shorts<br/><strong>120.92$</strong></p><p className={`${styles.productLabel} ${styles.shoes}`}>Black shoes<br/><strong>987.96$</strong></p>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.actions}><Link href="/contact#contact-inquiry" className={styles.shop}>SHOP NOW <span aria-hidden="true">⟶</span></Link><Link href="#uiux-collection" className={styles.explore}>EXPLORE MORE PRODUCTS</Link></div>
          <div className={styles.collection} id="uiux-collection"><Image src="/images/ui-ux-design/winter-closeup.webp" alt="A cheerful 3D fashion character waving in a blue vest and green checkered sweater" fill preload sizes="(max-width:767px) 90vw, 32vw" className="object-cover"/><div className={styles.collectionLabel}><h2>Awesome<br/><strong>collection</strong></h2><Link href="/contact#contact-inquiry">View All ↗</Link></div></div>
        </div>
        <div className={styles.right}>
          <div className={styles.newSet}><Image src="/images/ui-ux-design/winter-side.webp" alt="Side view of a 3D character wearing a black puffer jacket and holding a brown bag" fill preload sizes="(max-width:767px) 90vw, 32vw" className="object-cover"/><div className={styles.setLabel}><h2>winter new set</h2><p>756.54$</p><Link href="/contact#contact-inquiry">View All</Link></div></div>
          <div className={styles.slices} aria-hidden="true">{[0,1,2].map(index=><div key={index}><div className={styles.sliceSheet} style={{top:`-${index * 100}%`}}><Image src="/images/ui-ux-design/winter-side.webp" alt="" fill sizes="32vw" className="object-cover"/></div>{index===2&&<span>⟶</span>}</div>)}</div>
        </div>
      </div>
    </section>
  </div>;
}
