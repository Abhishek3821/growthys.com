"use client";

import { socialMediaContent } from "../data/social-media-content";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef } from "react";
import styles from "./social-media-travel-articles.module.css";

const processImages = [
  { image: "/images/social-media/graphics/discover.webp", alt: "Audience research portraits, competitor feed cards and a brand discovery moodboard" },
  { image: "/images/social-media/graphics/plan.webp", alt: "A coordinated social content calendar with planned posts and platform priorities" },
  { image: "/images/social-media/graphics/create.webp", alt: "A smartphone filming setup and reel editing timeline for content creation" },
  { image: "/images/social-media/graphics/review.webp", alt: "A social carousel preview with client feedback and an approval check" },
  { image: "/images/social-media/graphics/publish.webp", alt: "Scheduled social posts and community replies in a coordinated publishing workflow" },
  { image: "/images/social-media/graphics/measure.webp", alt: "Reach, engagement and audience analytics in a monthly social media report" },
];
const articles = socialMediaContent.process.steps.map((step, index) => ({
  ...processImages[index % processImages.length],
  title: step.title,
  category: socialMediaContent.process.eyebrow,
  author: step.description,
}));

export default function SocialMediaTravelArticles() {
  const trackRef = useRef<HTMLUListElement>(null);
  const trackId = useId();
  function scroll(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 280) + (Number.parseFloat(getComputedStyle(track).gap) || 0)), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <section className={styles.section} aria-labelledby="social-travel-articles-heading">
    <div className={styles.container}>
      <header className={styles.header}><h2 id="social-travel-articles-heading" aria-label={socialMediaContent.process.title}>A Clear Process for Social Media<br/>That Works</h2><Link href="/contact#contact-inquiry" className={styles.more}>LET’S TALK</Link></header>
      <div className={styles.carousel}>
        <button type="button" className={`${styles.arrow} ${styles.previous}`} onClick={() => scroll(-1)} aria-label="Scroll to previous process steps" aria-controls={trackId}>‹</button>
        <ul className={styles.track} id={trackId} ref={trackRef} tabIndex={0} aria-label={socialMediaContent.process.title}>
          {articles.map((article,index) => <li key={article.title} className={`${styles.card} ${index === 1 ? styles.featured : ""}`}><Link href="/blogs" aria-label={`Discuss ${article.title}`}>
            <div className={styles.photo}><Image quality={95} src={article.image} alt={article.alt} fill sizes="(max-width: 600px) 70vw, (max-width: 900px) 40vw, 23vw" className="object-cover"/><span className={styles.open} aria-hidden="true">↗</span></div>
            <div className={styles.caption}><p>{article.category}</p><h3>{article.title}</h3><span>{article.author}</span></div>
          </Link></li>)}
        </ul>
        <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => scroll(1)} aria-label="Scroll to next process steps" aria-controls={trackId}>›</button>
      </div>
    </div>
  </section>;
}
