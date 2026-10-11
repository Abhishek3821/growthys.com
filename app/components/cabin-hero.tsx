"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import forestCabin from "../../public/images/forest-cabin.webp";
import mistyForest from "../../public/images/misty-forest.webp";
import lakesideCabin from "../../public/images/lakeside-cabin.webp";

const stories = [
  {
    number: "002",
    title: ["Lost in", "the woods"],
    index: "A cabin stay like no other",
    description: ["A collection of one of a kind", "stays in the woods. From the simple", "and understated to unexpected grandeur."],
    image: forestCabin,
    imageAlt: "A timber cabin nestled in a lush forest, with a hiker in a mustard jacket walking toward it.",
    caption: "Cover cabin / Wilderness hut, Australia",
  },
  {
    number: "003",
    title: ["Into the", "unknown"],
    index: "Unknown forests across the globe",
    description: ["Follow the quiet trails", "through ancient forests and morning mist.", "Discover a world beyond the familiar."],
    image: mistyForest,
    imageAlt: "A winding trail among towering moss-covered trees and ferns in a misty forest.",
    caption: "Into the unknown / Ancient forest trails",
  },
  {
    number: "004",
    title: ["A place", "of your own"],
    index: "Starting your first remote cabin build",
    description: ["Find a little space to call your own.", "A lakeside cabin, a slower rhythm,", "and room to dream beyond the everyday."],
    image: lakesideCabin,
    imageAlt: "A warmly lit timber cabin beside a still mountain lake surrounded by evergreen forest.",
    caption: "A place of your own / Lakeside cabin dreams",
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={down ? { transform: "rotate(180deg)" } : undefined}><path d="M12 21V3m-4 4 4-4 4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function CabinHero() {
  const [activeStory, setActiveStory] = useState(0);
  const story = stories[activeStory];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveStory((current) => (current + 1) % stories.length);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [activeStory]);

  function changeStory(direction: number) {
    setActiveStory((current) => (current + direction + stories.length) % stories.length);
  }

  function share(network: "facebook" | "twitter") {
    const url = encodeURIComponent(window.location.href);
    const destination = network === "facebook"
      ? `https://www.facebook.com/sharer/sharer.php?u=${url}`
      : `https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent("Lost in the woods — CABIN&WILD")}`;
    window.open(destination, "_blank", "noopener,noreferrer,width=640,height=480");
  }

  return (
    <section className="cabin-hero" id="home" aria-label="Cabin and Wild — unique wilderness stays">
      <div className="hero-background">
        {stories.map((item, index) => (
          <Image
            key={item.number}
            className={`hero-image${activeStory === index ? " hero-image-active" : ""}`}
            src={item.image}
            alt={activeStory === index ? item.imageAlt : ""}
            aria-hidden={activeStory !== index}
            fill
            preload={index === 0}
            loading={index === 0 ? undefined : "eager"}
            placeholder="blur"
            sizes="100vw"
          />
        ))}
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <header className="hero-header">
        <a className="wordmark" href="#home" aria-label="Growthys home" onClick={() => setActiveStory(0)}>Growthys</a>
        <Navbar />
      </header>
      <div className="hero-story" aria-live="polite" aria-atomic="true">
        <div className="story-copy" key={activeStory}>
          <p className="story-eyebrow">Unique stays {story.number}</p>
          <h1 className="story-title">{story.title.map((line) => <span key={line}>{line}</span>)}</h1>
        </div>
        <p className="hero-description story-copy" id="about" key={`description-${story.number}`}>
          {story.description.map((line) => <span key={line}>{line}</span>)}
        </p>
      </div>
      <div className="story-controls" aria-label="Featured story controls">
        <button className="round-button" type="button" aria-label="Previous story" onClick={() => changeStory(-1)}><Arrow /></button>
        <button className="round-button" type="button" aria-label="Next story" onClick={() => changeStory(1)}><Arrow down /></button>
      </div>
      <nav className="hero-index" id="index" aria-label="Story index">
        <p className="index-label">Index</p>
        <div className="index-list">
          {stories.map((item, index) => <button className="index-item" key={item.number} type="button" aria-current={activeStory === index ? "true" : undefined} onClick={() => setActiveStory(index)}><span className="index-number">0{index + 1}</span><span className="index-title">{item.index}</span></button>)}
        </div>
      </nav>
      <footer className="hero-footer">
        <p className="cover-location" id="cover-location">{story.caption}</p>
        <div className="social-links" aria-label="Share this page">
          <button type="button" className="round-button" aria-label="Share on Facebook" onClick={() => share("facebook")}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.1 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.5 1.6-1.5h1.7V3.2A22 22 0 0 0 15 3c-2.5 0-4.2 1.5-4.2 4.3v2.3H8v3.2h2.8V21z" /></svg></button>
          <button type="button" className="round-button" aria-label="Share on Twitter" onClick={() => share("twitter")}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 6.1a7.4 7.4 0 0 1-2.1.6 3.7 3.7 0 0 0 1.6-2 7.4 7.4 0 0 1-2.3.9A3.6 3.6 0 0 0 12 8.9a10.3 10.3 0 0 1-7.5-3.8 3.6 3.6 0 0 0 1.1 4.8 3.6 3.6 0 0 1-1.6-.4v.1c0 1.7 1.2 3.2 2.9 3.5a3.7 3.7 0 0 1-1.6.1 3.6 3.6 0 0 0 3.4 2.5A7.3 7.3 0 0 1 4.2 17H3.3a10.3 10.3 0 0 0 5.6 1.7c6.7 0 10.4-5.6 10.4-10.4v-.5A7.4 7.4 0 0 0 21 6.1z" /></svg></button>
        </div>
      </footer>
    </section>
  );
}
