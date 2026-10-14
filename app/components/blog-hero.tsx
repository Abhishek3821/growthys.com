"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import Navbar from "./navbar";
import fox from "../../public/images/blogs/arctic-fox.webp";
import mountain from "../../public/images/blogs/mountain-dream.webp";
import styles from "./blog-hero.styles";

export default function BlogHero() {
  const [subscribeNotice, setSubscribeNotice] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribeNotice(true);
  }

  return (
    <div className={styles.page}>
      <header className={styles.navigation}>
        <Link href="/" className={styles.brand} aria-label="Growthys home">growthys<span>®</span></Link>
        <Navbar onHomePage={false} currentPage="/blogs" />
      </header>

      <section className={styles.hero} aria-labelledby="blog-heading">
        <div className={styles.masthead}>
          <h1 id="blog-heading">Quietly Thinking</h1>
          <div className={styles.introduction}>
            <p>A calm space for slow thoughts. No noise — just reflection, meaning, and quiet curiosity.</p>
            <details className={styles.subscribe}>
              <summary>Subscribe now <span className={styles.arrow} aria-hidden="true"><svg viewBox="0 0 20 20" fill="none"><path d="M5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></span></summary>
              <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                <label htmlFor="blog-subscribe-email">A little inspiration in your inbox</label>
                <div>
                  <input id="blog-subscribe-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required onChange={() => setSubscribeNotice(false)} />
                  <button type="submit">Join</button>
                </div>
                {subscribeNotice && <p role="status">Newsletter subscriptions are coming soon.</p>}
              </form>
            </details>
          </div>
        </div>

        <div className={styles.stories}>
          <article className={`${styles.featured} relative`}>
            <Link href="/blogs/unnamed-wild" aria-label="Read Returning to the unnamed wild beyond the maps" className="absolute inset-0 z-10 rounded focus-visible:outline-2 focus-visible:outline-offset-4" />
            <div className={styles.featuredCopy}>
              <span className={styles.category}><i aria-hidden="true" /> Lifestyle</span>
              <h2>Returning to the unnamed wild beyond the maps</h2>
              <p className={styles.description}>These are places that refuse to be mapped — not because they’re lost, but because they’re alive.</p>
              <div className={styles.featuredMeta}>
                <div className={styles.authorRow}>
                  <span className={styles.author}><span className={styles.avatar} aria-hidden="true">G</span> Growthys</span>
                  <span>2 min read</span>
                </div>
                <div className={styles.tags} aria-label="Article topics"><span>Wildness</span><span>Nature</span><span>Stillness</span><span>Technology</span><span>Mindfulness</span></div>
              </div>
            </div>
            <div className={styles.featuredImage}>
              <Image src={fox} alt="A white arctic fox with amber eyes resting in fresh snow" fill preload placeholder="blur" sizes="(max-width: 600px) 100vw, (max-width: 1000px) 65vw, 50vw" />
            </div>
          </article>

          <article className={`${styles.sideStory} relative`}>
            <Link href="/blogs/machines-dream" aria-label="Read When machines begin to dream of trees" className="absolute inset-0 z-10 rounded focus-visible:outline-2 focus-visible:outline-offset-4" />
            <div className={styles.sideImage}>
              <Image src={mountain} alt="A distant mountain glowing coral pink above blue ridges at dawn" fill placeholder="blur" sizes="(max-width: 600px) 100vw, (max-width: 1000px) 35vw, 25vw" />
            </div>
            <div className={styles.sideCopy}>
              <h2>When machines begin to dream of trees</h2>
              <p>A calm space for ideas that move in nature — part reflection, part possibility. Where technology and the living world meet.</p>
              <span className={styles.sideMeta}>2 min read <span aria-hidden="true">·</span> Journal</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
