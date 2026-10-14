"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import elNido from "../../public/images/destinations/el-nido.webp";
import baguio from "../../public/images/destinations/baguio.webp";
import siargao from "../../public/images/destinations/siargao.webp";
import vigan from "../../public/images/destinations/vigan.webp";
import styles from "./top-destinations.styles";

const destinations = [
  { name: "El Nido", image: elNido, alt: "Turquoise water surrounded by El Nido's limestone cliffs", price: "4,999", category: "Beach paradise", rating: "4.8", reviews: "1.2k", location: "Palawan, Region", color: "#fb525b" },
  { name: "Baguio City", image: baguio, alt: "Colorful houses on Baguio City's forested hillsides", price: "1,200", category: "Mount Getaway", rating: "4.6", reviews: "950", location: "Benguet, Region", color: "#4a8cff" },
  { name: "Siargao", image: siargao, alt: "Palm trees beside Siargao's white sand and turquoise sea", price: "5,500", category: "Surf & Chill", rating: "4.9", reviews: "2k", location: "Surigao del Norte, Region", color: "#ff7358" },
  { name: "Vigan", image: vigan, alt: "Historic buildings along Calle Crisologo in Vigan", price: "4,250", category: "Heritage City", rating: "4.7", reviews: "780", location: "Ilocos Sur, Region", color: "#ff424b" },
];

const count = destinations.length;
// Copies at either end let all four cards stay visible during a seamless loop.
const slides = [...destinations, ...destinations, ...destinations];

function Chevron({ previous = false }: { previous?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={previous ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function TopDestinations() {
  const [position, setPosition] = useState(count);
  const [active, setActive] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const moving = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gesture = useRef<{ x: number; y: number; id: number } | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  function finishMove() {
    if (timer.current) clearTimeout(timer.current);
    setAnimated(false);
    setPosition((current) => count + ((current - count) % count + count) % count);
    moving.current = false;
    setIsMoving(false);
  }

  function move(direction: number) {
    if (moving.current) return;
    setActive((current) => (current + direction + count) % count);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimated(false);
      setPosition((current) => count + ((current - count + direction) % count + count) % count);
      return;
    }
    moving.current = true;
    setIsMoving(true);
    setAnimated(true);
    setPosition((current) => current + direction);
    // Also unlock if a browser interrupts the transition or the tab is hidden.
    timer.current = setTimeout(finishMove, 700);
  }

  function startSwipe(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    gesture.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function endSwipe(event: PointerEvent<HTMLDivElement>) {
    const start = gesture.current;
    gesture.current = null;
    if (!start || start.id !== event.pointerId) return;
    const distance = event.clientX - start.x;
    if (Math.abs(distance) > 40 && Math.abs(distance) > Math.abs(event.clientY - start.y) * 1.2) {
      move(distance < 0 ? 1 : -1);
    }
  }

  return (
    <section className={styles.section} id="top-destinations" aria-labelledby="destinations-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="destinations-heading">Top Destinations</h2>
          <p>From island escapes to cool mountain towns, discover where your next journey will take you</p>
        </header>

        <div className={styles.viewport} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Top destinations, use left and right arrow keys to explore" onPointerDown={startSwipe} onPointerUp={endSwipe} onPointerCancel={() => { gesture.current = null; }} onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }} onWheel={(event) => {
          if (Math.abs(event.deltaX) > Math.abs(event.deltaY) && Math.abs(event.deltaX) > 15) move(event.deltaX > 0 ? 1 : -1);
        }}>
          <div className={`${styles.track} ${animated ? styles.animated : ""}`} style={{ "--position": position } as CSSProperties} role="list" onTransitionEnd={(event) => {
            if (event.target === event.currentTarget && event.propertyName === "transform") finishMove();
          }}>
            {slides.map((destination, index) => (
              <article className={styles.card} key={`${destination.name}-${index}`} role="listitem" aria-hidden={index < count || index >= count * 2 ? true : undefined}>
                <Image src={destination.image} alt={index < count || index >= count * 2 ? "" : destination.alt} fill placeholder="blur" sizes="(max-width: 420px) 83vw, (max-width: 640px) 42vw, (max-width: 1500px) 21vw, 310px" className={styles.photo} draggable={false} />
                <div className={styles.shade} aria-hidden="true" />
                <p className={styles.price}>starts at <strong>₱{destination.price}</strong></p>
                <div className={styles.details}>
                  <h3>{destination.name}</h3>
                  <div className={styles.meta}><span>{destination.category}</span><span className={styles.rating}><span aria-hidden="true">★</span> {destination.rating} ({destination.reviews})</span></div>
                  <p className={styles.location}><span style={{ color: destination.color }} aria-hidden="true">●</span>{destination.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className={styles.footer}>
          <button className={styles.viewMore} type="button" onClick={() => move(1)} disabled={isMoving}>View more</button>
          <p className={styles.srOnly} role="status" aria-live="polite">Card {active + 1} of {count}: {destinations[active].name}</p>
          <div className={styles.controls}>
            <button type="button" onClick={() => move(-1)} disabled={isMoving} aria-label="Previous destination"><Chevron previous /></button>
            <button type="button" onClick={() => move(1)} disabled={isMoving} aria-label="Next destination"><Chevron /></button>
          </div>
        </footer>
      </div>
    </section>
  );
}
