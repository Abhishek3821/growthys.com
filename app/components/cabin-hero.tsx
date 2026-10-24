"use client";

import siteStyles from "../site-styles";
import styles from "./cabin-hero.module.css";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import SocialIcon from "./social-icon";
import { socialLinks } from "../data/social-links";
import buildArtwork from "../../public/images/homepage/hero-build-v11-8k.webp";
import scaleArtwork from "../../public/images/homepage/hero-scale-v11-8k.webp";
import riseArtwork from "../../public/images/homepage/hero-rise-v11-8k.webp";

const stories = [
  {
    number: "001",
    label: "Build",
    title: ["Grow Your", "Business Faster"],
    index: "Build Bold. Grow Smart.",
    description: ["A digital marketing company turning attention into revenue — SEO, software, CRM, and HRMS under one roof."],
    image: buildArtwork,
    imageAlt: "Emerald-glass steps with a golden growth path, target and glowing sphere, representing a strong foundation for business growth.",
    caption: "Build Bold. Grow Smart.",
  },
  {
    number: "002",
    label: "Scale",
    title: ["Technology", "Meets Marketing"],
    index: "Marketing Meets Real Technology",
    description: ["Growthys connects software development and digital marketing so your business grows without friction."],
    image: scaleArtwork,
    imageAlt: "Connected emerald-glass loops, a cloud and gold data nodes, representing marketing and technology scaling together.",
    caption: "Marketing Meets Real Technology",
  },
  {
    number: "003",
    label: "Rise",
    title: ["Smarter Growth", "Starts Here"],
    index: "Your Growth, Engineered Digitally",
    description: ["An IT solutions company delivering SEO, CRM & management software, and HRMS software development."],
    image: riseArtwork,
    imageAlt: "An ascending emerald-glass ribbon carrying an amber sphere, representing smarter growth through connected digital systems.",
    caption: "Your Growth, Engineered Digitally",
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={down ? "[transform:rotate(180deg)]" : undefined}><path d="M12 21V3m-4 4 4-4 4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>;
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


  return (
    <section className={`${siteStyles["cabin-hero"]} ${styles.hero}`} id="home" aria-label="Growthys — marketing and technology">
      <div className={`${siteStyles["hero-background"]} ${styles.artwork}`}>
        {stories.map((item, index) => (
          <Image
            key={item.number}
            className={siteStyles["hero-image"] + (activeStory === index ? (" " + siteStyles["hero-image-active"]) : ("")) + ""}
            src={item.image}
            alt={activeStory === index ? item.imageAlt : ""}
            aria-hidden={activeStory !== index}
            fill
            preload={index === 0}
            loading={index === 0 ? undefined : "eager"}
            placeholder="blur"
            quality={95}
            sizes="100vw"
          />
        ))}
      </div>
      <div className={siteStyles["hero-shade"]} aria-hidden="true" />
      <header className={siteStyles["hero-header"]}>

        <Navbar />
      </header>
      <div className={siteStyles["hero-story"]} aria-live="polite" aria-atomic="true">
        <div className={siteStyles["story-copy"]} key={activeStory}>
          <p className={siteStyles["story-eyebrow"]}>{story.label} {story.number}</p>
          <h1 className={siteStyles["story-title"]}>{story.title.map((line) => <span key={line}>{line}</span>)}</h1>
        </div>
        <p className={siteStyles["hero-description"] + " " + siteStyles["story-copy"]} id="about" key={`description-${story.number}`}>
          {story.description.map((line) => <span key={line}>{line}</span>)}
        </p>
      </div>
      <div className={siteStyles["story-controls"]} aria-label="Featured story controls">
        <button className={siteStyles["round-button"]} type="button" aria-label="Previous story" onClick={() => changeStory(-1)}><Arrow /></button>
        <button className={siteStyles["round-button"]} type="button" aria-label="Next story" onClick={() => changeStory(1)}><Arrow down /></button>
      </div>
      <nav className={siteStyles["hero-index"]} id="index" aria-label="Story index">
        <p className={siteStyles["index-label"]} aria-hidden="true">&nbsp;</p>
        <div className={siteStyles["index-list"]}>
          {stories.map((item, index) => <button className={siteStyles["index-item"]} key={item.number} type="button" aria-current={activeStory === index ? "true" : undefined} onClick={() => setActiveStory(index)}><span className={siteStyles["index-number"]}>0{index + 1}</span><span className={siteStyles["index-title"]}>{item.index}</span></button>)}
        </div>
      </nav>
      <footer className={siteStyles["hero-footer"]}>
        <p className={siteStyles["cover-location"]} id="cover-location">{story.caption}</p>
        <div className={siteStyles["social-links"]} aria-label="Social media">
          {socialLinks.map(({ name, href }) => <a key={name} href={href} className={siteStyles["round-button"]} target="_blank" rel="noopener noreferrer" aria-label={`Growthys on ${name}`}><SocialIcon name={name} /></a>)}
        </div>
      </footer>
    </section>
  );
}
