import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./content-marketing-hero.module.css";

export default function ContentMarketingHero() {
  return <div className={styles.hero}>
    <header className={styles.header}><Link href="/" aria-label="Growthys home" className={styles.brand}>Growthys<span>®</span></Link><Navbar onHomePage={false} currentPage="/content-marketing" /></header>
    <section className={styles.content} aria-labelledby="content-marketing-heading">
      <h1 id="content-marketing-heading">URBAN STREETWEAR HUB</h1>
      <div className={styles.grid}>
        <div className={styles.arrivals}><Image src="/images/content-marketing/arrivals.webp" alt="Streetwear model in an orange beanie and camouflage jacket raising a peace sign" fill preload sizes="(max-width:767px) 90vw, 34vw" className="object-cover"/><div className={styles.arrivalLabel}><Link href="/contact#contact-inquiry"><h2>#NEW ARRIVALS</h2><span aria-hidden="true">↘</span></Link><p>See more of what’s new.<br/>Fresh ideas. Bold expressions.<br/>Your next statement starts here.</p></div></div>
        <div className={styles.right}>
          <div className={styles.collection}><Image src="/images/content-marketing/collection.webp" alt="Three models wearing black streetwear under a blue sky" fill preload sizes="(max-width:767px) 90vw, 61vw" className="object-cover"/><Link href="/contact#contact-inquiry" className={styles.collectionLabel}>#COLLECTIONS_23 <span className="sr-only">Explore the collection</span></Link><div className={styles.contactWrap}><Link href="/contact#contact-inquiry" className={styles.contact}>CONTACT US <svg viewBox="0 0 28 23" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="2" y="3" width="24" height="17" rx="3"/><path d="m3 5 11 9L25 5"/></svg></Link></div></div>
          <div className={styles.infoCards}>
            <Link href="/#faq" className={styles.faq}><p>Have a question?<br/>Contact our manager</p><div><h2>#FAQ</h2><span>Popular</span></div></Link>
            <Link href="/contact#contact-inquiry" className={styles.quality}><Image src="/images/content-marketing/sneaker.webp" alt="An orange and black high-top sneaker with a white sole" fill sizes="(max-width:767px) 42vw, 20vw" className="object-cover"/><h2>#QUALITY</h2><span aria-hidden="true">⊕</span></Link>
            <div className={styles.community}><div><h2>3.650+</h2><span aria-hidden="true">↘</span></div><p>Fresh perspectives.<br/>More stories to discover.<br/>A community that keeps<br/>moving forward.</p></div>
          </div>
        </div>
      </div>
    </section>
  </div>;
}
