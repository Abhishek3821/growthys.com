"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef } from "react";
import styles from "./social-media-travel-articles.module.css";

const articles = [
  { image: "/images/digital-marketing/travel-videos/backpacker.webp", title: "Find Your Next Great Escape", category: "OUTDOOR STORIES", author: "Stories from the road", alt: "A backpacker enjoying a mountain landscape" },
  { image: "/images/misty-forest.webp", title: "Three Ways To Get Travel Discounts", category: "TRAVEL DISCOUNTS", author: "Travel notes and practical tips", alt: "A misty forest with tall evergreen trees" },
  { image: "/images/forest-cabin.webp", title: "A Slower Way To Explore", category: "WEEKEND ESCAPES", author: "A little closer to nature", alt: "A secluded cabin nestled in a green forest" },
  { image: "/images/digital-marketing/travel-videos/overlook.webp", title: "Take The Scenic Route", category: "DESTINATION GUIDES", author: "Fresh perspectives on familiar places", alt: "A hiker looking across a sweeping mountain landscape" },
];

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
      <header className={styles.header}><h2 id="social-travel-articles-heading">BECOME A TRAVEL PRO IN<br/>ONE EASY LESSON</h2><Link href="/blogs" className={styles.more}>MORE ARTICLES</Link></header>
      <div className={styles.carousel}>
        <button type="button" className={`${styles.arrow} ${styles.previous}`} onClick={() => scroll(-1)} aria-label="Scroll to previous articles" aria-controls={trackId}>‹</button>
        <ul className={styles.track} id={trackId} ref={trackRef} tabIndex={0} aria-label="Travel articles">
          {articles.map((article,index) => <li key={article.title} className={`${styles.card} ${index === 1 ? styles.featured : ""}`}><Link href="/blogs" aria-label={`Read ${article.title}`}>
            <div className={styles.photo}><Image src={article.image} alt={article.alt} fill sizes="(max-width: 600px) 70vw, (max-width: 900px) 40vw, 23vw" className="object-cover"/><span className={styles.open} aria-hidden="true">↗</span></div>
            <div className={styles.caption}><p>{article.category}</p><h3>{article.title}</h3><span>{article.author}</span></div>
          </Link></li>)}
        </ul>
        <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => scroll(1)} aria-label="Scroll to next articles" aria-controls={trackId}>›</button>
      </div>
    </div>
  </section>;
}
