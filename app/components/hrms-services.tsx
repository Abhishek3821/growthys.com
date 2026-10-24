"use client";

import Link from "next/link";
import { useId, useRef } from "react";
import styles from "./hrms-services.module.css";
import { hrmsContent } from "../data/hrms-content";

const services = hrmsContent.modules.items;

function ServiceIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "design" && <><path d="m6 16 14-11 14 11M20 5v6M8 17l6 15h12l6-15M20 12l-7 8 7 12 7-12-7-8Z"/><circle cx="20" cy="20" r="3"/></>}
    {kind === "web" && <><rect x="5" y="7" width="30" height="26" rx="3"/><path d="M5 14h30M10 11h1m4 0h1m-3 9-4 4 4 4m14-8 4 4-4 4m-5-9-4 10"/></>}
    {kind === "marketing" && <><path d="m7 18 15-7v18L7 23v-5Zm15-7 7-5v28l-7-5M10 24l3 10h5l-3-9M33 14l4-2m-4 8h5m-5 6 4 2"/></>}
    {kind === "app" && <><rect x="11" y="4" width="18" height="32" rx="3"/><path d="M17 8h6m-6 23h6M16 15h8v9h-8z"/></>}
  </svg>;
}

export default function HrmsServices() {
  const trackRef = useRef<HTMLUListElement>(null);
  const trackId = useId();
  function scroll(direction: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 260) + gap), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <section className={styles.section} aria-labelledby="hrms-services-heading">
    <div className={styles.layout}>
      <header className={styles.intro}><p>HRMS Modules</p><h2 id="hrms-services-heading">{hrmsContent.modules.title}</h2><div className={styles.controls}><button type="button" aria-label="Scroll to previous HRMS modules" aria-controls={trackId} onClick={() => scroll(-1)}>←</button><button type="button" aria-label="Scroll to next HRMS modules" aria-controls={trackId} onClick={() => scroll(1)}>→</button></div></header>
      <ul ref={trackRef} id={trackId} className={styles.track} tabIndex={0} aria-label="HRMS modules, scroll horizontally to explore">
        {services.map(service => <li key={service.title} className={styles.card}><Link href={service.href}><span className={styles.icon} style={{ backgroundColor: service.color }}><ServiceIcon kind={service.kind}/></span><h3>{service.title}</h3><p>{service.description}</p></Link></li>)}
      </ul>
    </div>
  </section>;
}
