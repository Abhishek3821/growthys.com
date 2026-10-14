"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import styles from "./ui-ux-testimonials.module.css";

const reviews = [
  { quote: "The bread is incredible, crisp on the outside, soft in the middle, and full of flavor. Everything tastes so fresh and thoughtfully made, from the pastries to the sourdough. It’s easily become one of my favorite places", name: "JOHN K.", location: "Montreal, Canada", position: "0% 0%" },
  { quote: "A lovely place to slow down and enjoy something delicious. The pastries are beautifully made, the coffee is excellent, and every visit feels warm and welcoming", name: "SARAH M.", location: "Toronto, Canada", position: "33.333% 100%" },
  { quote: "You can taste the care in everything they make. From a fresh morning croissant to a loaf for the weekend, there’s always something worth coming back for", name: "ALEX R.", location: "Vancouver, Canada", position: "33.333% 0%" },
];

export default function UiUxTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const trackId = useId();
  const [active, setActive] = useState(0);
  function goTo(index: number) {
    const track = trackRef.current;
    const target = track?.children[(index + reviews.length) % reviews.length] as HTMLElement | undefined;
    if (track && target) track.scrollTo({ left: target.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <section className={styles.section} aria-labelledby="uiux-testimonials-heading"><h2 id="uiux-testimonials-heading" className="sr-only">Customer testimonials</h2><div className={styles.layout}>
    <div className={styles.photo}><Image src="/images/services/ui-ux-testimonial-cafe.webp" alt="A customer relaxing in a leather chair with a fresh croissant" fill sizes="(max-width:767px) 90vw, 48vw" className="object-cover"/></div>
    <div className={styles.reviewsPanel} role="region" aria-label="Customer reviews carousel" aria-roledescription="carousel">
      <div className={styles.track} ref={trackRef} id={trackId} tabIndex={0} aria-label="Scroll horizontally through reviews" onScroll={() => { const track = trackRef.current; if (track) setActive(Math.max(0, Math.min(reviews.length-1, Math.round(track.scrollLeft / (track.clientWidth + 16))))); }}>
        {reviews.map((review,index)=><figure key={review.name} className={styles.review} role="group" aria-roledescription="slide" aria-label={`${index+1} of ${reviews.length}`}>
          <p className={styles.label}>testimonials</p><span className={styles.openQuote} aria-hidden="true">“</span><p className={styles.stars} aria-label="5 out of 5 stars">★★★★★</p>
          <blockquote>“{review.quote}”</blockquote><figcaption><span className={styles.avatar} style={{backgroundPosition:review.position}} aria-hidden="true"/><span><strong>{review.name}</strong><span>{review.location}</span></span></figcaption><span className={styles.closeQuote} aria-hidden="true">”</span>
        </figure>)}
      </div>
      <div className={styles.controls}><button type="button" aria-label="Previous review" aria-controls={trackId} onClick={()=>goTo(active-1)}>←</button><div className={styles.dots}>{reviews.map((review,index)=><button key={review.name} type="button" aria-label={`Show review ${index+1}`} aria-current={active===index ? "true" : undefined} aria-controls={trackId} onClick={()=>goTo(index)}/>)}</div><button type="button" aria-label="Next review" aria-controls={trackId} onClick={()=>goTo(active+1)}>→</button></div>
    </div>
  </div></section>;
}
