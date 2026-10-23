import { contentMarketingContent } from "../data/content-marketing-content";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./content-marketing-hero.module.css";

export default function ContentMarketingHero() {
  return <div className={styles.hero}>
    <header className={styles.header}><Navbar onHomePage={false} currentPage="/content-marketing" /></header>
    <section className={styles.content} aria-labelledby="content-marketing-heading">
      <h1 id="content-marketing-heading" aria-label={contentMarketingContent.hero.title}>Words That Rank.<br/>Stories That Sell.</h1>
      <div className={styles.grid}>
        <div className={styles.arrivals}><Image quality={95} src="/images/content-marketing/graphics/editorial-hero.webp" alt="Editorial journal, article layouts and a tablet with original long-form content" fill preload sizes="(max-width:767px) 90vw, 34vw" className="object-cover"/><div className={styles.arrivalLabel}><Link href="/contact#contact-inquiry"><h2>#FRESH IDEAS</h2><span aria-hidden="true">↘</span></Link><p>{contentMarketingContent.hero.teaser.map((line, index) => <span key={line}>{index > 0 && <br/>}{line}</span>)}</p></div></div>
        <div className={styles.right}>
          <div className={styles.collection}><Image quality={95} src="/images/content-marketing/graphics/content-hub.webp" alt="A content hub with articles, guides, an editorial calendar and search performance" fill preload sizes="(max-width:767px) 90vw, 61vw" className="object-cover"/><Link href="/contact#contact-inquiry" className={styles.collectionLabel}>#CONTENT THAT CONNECTS <span className="sr-only">Explore our content services</span></Link><div className={styles.contactWrap}><Link href="/contact#contact-inquiry" className={styles.contact}>CONTACT US <svg viewBox="0 0 28 23" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="2" y="3" width="24" height="17" rx="3"/><path d="m3 5 11 9L25 5"/></svg></Link></div></div>
          <div className={styles.infoCards}>
            <Link href="#faq" className={styles.faq}><p>Have a question?<br/>Talk to our content team</p><div><h2>#FAQ</h2><span>Popular</span></div></Link>
            <Link href="/contact#contact-inquiry" className={styles.quality}><Image quality={95} src="/images/content-marketing/graphics/blogs.webp" alt="Original blog and article layouts with research notes and editorial tools" fill sizes="(max-width:767px) 42vw, 20vw" className="object-cover"/><h2>#QUALITY</h2><span aria-hidden="true">⊕</span></Link>
            <div className={styles.community}><div><h2>CONTENT</h2><span aria-hidden="true">↘</span></div><p>Blogs. Guides.<br/>Case studies. Landing pages.<br/>Turn readers into customers.</p></div>
          </div>
        </div>
      </div>
    </section>
  </div>;
}
