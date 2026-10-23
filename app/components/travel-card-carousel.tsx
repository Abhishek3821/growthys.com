"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import dunes from "../../public/images/homepage/service-seo.webp";
import cliffs from "../../public/images/homepage/service-performance.webp";
import coast from "../../public/images/homepage/service-web.webp";
import map from "../../public/images/homepage/services-network.webp";
import beach from "../../public/images/homepage/service-software.webp";
import island from "../../public/images/homepage/service-crm-hrms.webp";
import styles from "./travel-card-carousel.styles";

const destinations = [
  { name: "SEO Services", location: "Organic Traffic", image: dunes, description: "Rank for searches that bring buyers. Technical SEO, content strategy, and local SEO for Gurugram, Delhi NCR, and pan-India businesses.", distance: "3–6 Months", temperature: "Organic Traffic", rating: "4.9", price: "3–6 Months" },
  { name: "Performance Marketing", location: "ROAS", image: cliffs, description: "Paid campaigns built around leads and revenue. Google Search, Shopping, and Meta lead campaigns with weekly performance reporting.", distance: "30 Days", temperature: "ROAS", rating: "4.8", price: "30 Days" },
  { name: "Web Design & Development", location: "Conversions", image: coast, description: "Responsive, fast, SEO-ready websites that look good and convert better. Built by the best design agency team inside Growthys.", distance: "4–8 Weeks", temperature: "Conversions", rating: "4.9", price: "4–8 Weeks" },
  { name: "Software Development", location: "Custom Builds", image: beach, description: "Custom web and mobile applications built around your workflows. As a software development company, we deliver from idea to launch and beyond.", distance: "8–16 Weeks", temperature: "Custom Builds", rating: "4.8", price: "8–16 Weeks" },
  { name: "CRM & HRMS Systems", location: "Automation", image: island, description: "Custom CRM & management software and HRMS software development that keep sales, support, attendance, and payroll in one connected system.", distance: "6–12 Weeks", temperature: "Automation", rating: "4.9", price: "6–12 Weeks" }
];

export default function TravelCardCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const running = !hovered && !focused;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % destinations.length);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, [activeIndex, running]);

  return (
    <section className={styles.section} id="travel-escapes" aria-labelledby="travel-escapes-heading" aria-roledescription="carousel">
      <Image className={styles.map} src={map} alt="" fill sizes="100vw" />
      <div className={styles.shade} />
      <h2 className={styles.srOnly} id="travel-escapes-heading">Explore Next Growth Services</h2>
      <div className={styles.stage}>
        <div
          className={styles.deck}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
          }}
        >
          {destinations.map((destination, index) => {
            let offset = (index - activeIndex + destinations.length) % destinations.length;
            if (offset > 2) offset -= destinations.length;
            const depth = Math.abs(offset);
            return (
              <article
                className={styles.card}
                key={destination.name}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${destinations.length}: ${destination.name}`}
                data-active={offset === 0}
                style={{ "--offset": offset, "--depth": depth, zIndex: 10 - depth } as CSSProperties}
                onPointerEnter={(event) => { if (event.pointerType !== "touch") setHovered(true); }}
                onPointerLeave={() => setHovered(false)}
                onPointerCancel={() => setHovered(false)}
              >
                <button className={styles.cardSelect} type="button" aria-label={`Show ${destination.name}`} aria-current={offset === 0 ? "true" : undefined} onClick={() => setActiveIndex(index)} />
                <div className={styles.photo}><Image src={destination.image} alt="" fill placeholder="blur" sizes="(max-width: 700px) 260px, 340px" className={styles.photoImage} /></div>
                <div className={styles.body}>
                  <h3>{destination.name}</h3>
                  <p className={styles.location}><svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1a5 5 0 0 0-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 0 0-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" /></svg>{destination.location}</p>
                  <h4>Description</h4>
                  <p className={styles.description}>{destination.description}</p>
                  <dl className={styles.stats}>
                    <div><dt>Timeline</dt><dd>{destination.distance}</dd></div>
                    <div><dt>Focus</dt><dd>{destination.temperature}</dd></div>
                    <div><dt>Rating</dt><dd>{destination.rating}</dd></div>
                  </dl>
                  <div className={styles.cardFooter}>
                    <div><p>Timeline</p><strong>{destination.price}</strong></div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className={styles.srOnly} aria-live={running ? "off" : "polite"} aria-atomic="true">{destinations[activeIndex].name}, destination {activeIndex + 1} of {destinations.length}</p>
      </div>
    </section>
  );
}
