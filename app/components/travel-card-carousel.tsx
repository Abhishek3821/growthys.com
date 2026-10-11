"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import dunes from "../../public/images/travel-deck/golden-dunes.webp";
import cliffs from "../../public/images/travel-deck/sunset-cliffs.webp";
import coast from "../../public/images/travel-deck/azure-coast.webp";
import map from "../../public/images/travel-deck/world-map.webp";
import beach from "../../public/images/destinations/siargao.webp";
import island from "../../public/images/destinations/el-nido.webp";
import styles from "./travel-card-carousel.module.css";

const destinations = [
  { name: "Golden Dunes", location: "Namibia, Namib Desert", image: dunes, description: "Explore golden sand dunes, drifting desert trails and quiet horizons. A timeless escape into the wilderness.", distance: "2190 M", temperature: "32°C", rating: "4.8", price: "€1320" },
  { name: "Sunset Cliffs", location: "USA, California, Big Sur", image: cliffs, description: "Dramatic ocean cliffs and rose-colored skies meet the Pacific coast. A dreamy destination for slow evenings.", distance: "7960 M", temperature: "19°C", rating: "4.8", price: "€1670" },
  { name: "Azure Coast", location: "France, Alpes-Côte d’Azur, Nice", image: coast, description: "A stunning Mediterranean coastline with crystal-clear waters and charming seaside towns. Perfect for relaxing vacations and scenic walks.", distance: "762 M", temperature: "22°C", rating: "4.9", price: "€1195" },
  { name: "Royal Sand Bay", location: "Philippines, Siargao Island", image: beach, description: "Discover palm-lined shores and soft white sand, with turquoise lagoons and peaceful days beside the sea.", distance: "1320 M", temperature: "28°C", rating: "4.8", price: "€1770" },
  { name: "Emerald Wild Island", location: "Philippines, Palawan, El Nido", image: island, description: "Lush green islands shelter hidden coves and blue lagoons. An unforgettable island escape surrounded by nature.", distance: "2460 M", temperature: "27°C", rating: "4.9", price: "€1480" },
];

function Plane() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m21.2 3.2-1.4-.4-5.5 5.5-9-2.3-1.8 1.8 7.4 3.8-4.2 4.2-3-.5-1.4 1.4 4 1.6 1.6 4 1.4-1.4-.5-3 4.2-4.2 3.8 7.4 1.8-1.8-2.3-9 5.5-5.5-.4-1.6Z" /></svg>;
}

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
      <h2 className={styles.srOnly} id="travel-escapes-heading">Explore your next escape</h2>
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
                    <div><dt>Distance</dt><dd>{destination.distance}</dd></div>
                    <div><dt>Temp</dt><dd>{destination.temperature}</dd></div>
                    <div><dt>Rating</dt><dd>{destination.rating}</dd></div>
                  </dl>
                  <div className={styles.cardFooter}>
                    <div><p>Total Price</p><strong>{destination.price}</strong></div>
                    <span className={styles.plane}><Plane /></span>
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
