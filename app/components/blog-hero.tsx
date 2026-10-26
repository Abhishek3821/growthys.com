"use client";

import Image from "next/image";
import Link from "next/link";
import WhatsAppForm from "./whatsapp-form";
import Navbar from "./navbar";
import { blogArticles, getReadingTime } from "../data/blog-articles";
import styles from "./blog-hero.styles";

export default function BlogHero() {
  const featured = blogArticles[0];
  const secondary = blogArticles[1] ?? featured;
  const secondaryHref = `/blogs/${secondary.id}${secondary === featured ? "#section-3" : ""}`;
  const secondaryTitle = secondary === featured ? "Start With Local SEO" : secondary.title;


  return (
    <div className={styles.page}>
      <header className={styles.navigation}>

        <Navbar onHomePage={false} currentPage="/blogs" />
      </header>

      <section className={styles.hero} aria-labelledby="blog-heading">
        <div className={styles.masthead}>
          <h1 id="blog-heading">Growthys Journal</h1>
          <div className={styles.introduction}>
            <p>Practical ideas for digital growth. Explore SEO, marketing and technology with Growthys.</p>
            <details className={styles.subscribe}>
              <summary>Subscribe now <span className={styles.arrow} aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></span></summary>
              <WhatsAppForm className={styles.subscribeForm} introduction="Hi Growthys! I would like to request Growthys Journal updates at the email below." aria-describedby="blog-whatsapp-note">
                <label htmlFor="blog-subscribe-email">A little inspiration in your inbox</label>
                <div>
                  <input id="blog-subscribe-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required />
                  <button type="submit">Join</button>
                </div>
                <p id="blog-whatsapp-note">Request updates through WhatsApp. Your email will be filled in; tap Send to share it.</p>
              </WhatsAppForm>
            </details>
          </div>
        </div>

        <div className={styles.stories}>
          <article className={`${styles.featured} relative`}>
            <Link href={`/blogs/${featured.id}`} aria-label={`Read ${featured.title}`} className="absolute inset-0 z-10 rounded focus-visible:outline-2 focus-visible:outline-offset-4" />
            <div className={styles.featuredCopy}>
              <span className={styles.category}><i aria-hidden="true" /> {featured.category}</span>
              <h2>{featured.title}</h2>
              <p className={styles.description}>{featured.excerpt}</p>
              <div className={styles.featuredMeta}>
                <div className={styles.authorRow}>
                  <span className={styles.author}><span className={styles.avatar} aria-hidden="true">G</span> Growthys</span>
                  <span>{getReadingTime(featured)} min read</span>
                </div>
                <div className={styles.tags} aria-label="Article topics"><span>{featured.category}</span><span>Small Business</span><span>Local Search</span><span>Content</span><span>Growth</span></div>
              </div>
            </div>
            <div className={styles.featuredImage}>
              <Image src={featured.image} alt={featured.imageAlt} fill preload sizes="(max-width: 600px) 100vw, (max-width: 1000px) 65vw, 50vw" />
            </div>
          </article>

          <article className={`${styles.sideStory} relative`}>
            <Link href={secondaryHref} aria-label={`Read ${secondaryTitle}`} className="absolute inset-0 z-10 rounded focus-visible:outline-2 focus-visible:outline-offset-4" />
            <div className={styles.sideImage}>
              <Image src={secondary.image} alt={secondary.imageAlt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 35vw, 25vw" />
            </div>
            <div className={styles.sideCopy}>
              <h2>{secondaryTitle}</h2>
              <p>{secondary === featured ? "Serving customers in a particular city or area? Make local SEO your first focus. Local searches often carry the strongest buying intent." : secondary.excerpt}</p>
              <span className={styles.sideMeta}>{getReadingTime(secondary)} min read <span aria-hidden="true">·</span> {secondary.category}</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
