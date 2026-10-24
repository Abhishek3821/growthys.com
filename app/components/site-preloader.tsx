"use client";

import { useEffect, useState } from "react";
import styles from "./site-preloader.module.css";

export default function SitePreloader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  useEffect(() => {
    if (phase !== "loading") return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = document.querySelector<HTMLImageElement>("main img");
    let cancelled = false;
    let minimumTimer = 0;
    const minimum = new Promise<void>((resolve) => {
      minimumTimer = window.setTimeout(resolve, reducedMotion ? 0 : 900);
    });
    const timeout = window.setTimeout(() => setPhase("leaving"), 4000);

    Promise.allSettled([minimum, document.fonts.ready, hero ? hero.decode() : Promise.resolve()])
      .then(() => { if (!cancelled) setPhase("leaving"); });

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      window.clearTimeout(minimumTimer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase === "done") return;
    const content = document.getElementById("site-content");
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    if (content) content.inert = true;
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      if (content) content.inert = false;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1250;
    const timer = window.setTimeout(() => setPhase("done"), duration);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <>
      <noscript><style>{`.growthys-preloader { display: none !important; }`}</style></noscript>
      <div className={`growthys-preloader ${styles.loader}`} data-leaving={phase === "leaving"} role="status" aria-label="Loading Growthys">
        <div className={styles.brand}>growthys<span>.</span></div>
        <div className={styles.track} aria-hidden="true"><span /></div>
      </div>
    </>
  );
}
