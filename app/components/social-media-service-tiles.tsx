import { socialMediaContent } from "../data/social-media-content";
import Image from "next/image";
import Link from "next/link";
import styles from "./social-media-service-tiles.module.css";

function TileIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "service" && <><circle cx="16" cy="16" r="13"/><path d="M10 12h12M10 16h12M10 20h8M13 9v14"/></>}
    {kind === "spark" && <><path d="M16 3v7m0 12v7M3 16h7m12 0h7M7 7l5 5m8 8 5 5M7 25l5-5m8-8 5-5"/><circle cx="16" cy="16" r="4"/></>}
    {kind === "layout" && <><rect x="5" y="5" width="22" height="22" rx="2"/><path d="M5 12h22M13 12v15M9 8h1m4 0h1"/></>}
    {kind === "recycle" && <><path d="m12 4 4-2 5 9m-1-6 1 6-6-1M26 14l4 4-6 9m5-4-5 4-3-5M15 28H5l-2-5 5-9m-4 4 4-4 3 5"/></>}
    {kind === "diamond" && <><path d="m5 11 5-6h12l5 6-11 16L5 11Zm0 0h22M10 5l6 22 6-22"/></>}
    {kind === "flag" && <><path d="M8 29V4m0 1h17l-4 6 4 6H8"/></>}
  </svg>;
}

const tiles = [
  { name: "Reels & Video", image: "/images/social-media/graphics/reel-campaign.webp", kind: "", dark: true },
  { name: "Content Calendars", image: "/images/social-media/graphics/plan.webp", kind: "layout", dark: true },
  { name: "Content Creation", image: "", kind: "recycle", dark: false },
  { name: "Brand Voice", image: "", kind: "diamond", dark: false },
  { name: "Carousel Design", image: "/images/social-media/graphics/festive-carousel.webp", kind: "", dark: true },
  { name: "Platform Strategy", image: "", kind: "flag", dark: false },
  { name: "Stories & Community", image: "/images/social-media/graphics/publish.webp", kind: "", dark: true },
  { name: "Captions & Reporting", image: "/images/social-media/graphics/measure.webp", kind: "spark", dark: true },
];

export default function SocialMediaServiceTiles() {
  return <section className={styles.section} aria-labelledby="social-service-tiles-heading"><h2 id="social-service-tiles-heading" className="sr-only">{socialMediaContent.services.capabilities}</h2><div className={styles.layout}>
    <div className={styles.serviceCards}>
      <article className={styles.service}><span className={styles.serviceIcon}><TileIcon kind="service"/></span><h3>{socialMediaContent.services.solutions.title}</h3><p>{socialMediaContent.services.solutions.description}</p><Link href="/contact#contact-inquiry">Get started</Link></article>
      <article className={styles.service}><span className={styles.serviceIcon}><TileIcon kind="spark"/></span><h3>{socialMediaContent.services.projects.title}</h3><p>{socialMediaContent.services.projects.description}</p><Link href="/contact#contact-inquiry">Get started</Link></article>
    </div>
    <ul className={styles.tiles}>{tiles.map(tile=><li key={tile.name} className={`${styles.tile} ${tile.dark ? styles.dark : ""}`}><Link href="/contact#contact-inquiry" aria-label={`Enquire about ${tile.name}`}>
      {tile.image && <Image quality={95} src={tile.image} alt="" fill sizes="(max-width:767px) 42vw, 12vw" className="object-cover"/>}
      {tile.kind && <span className={styles.tileIcon}><TileIcon kind={tile.kind}/></span>}
      <span className={styles.tileName}>{tile.name}</span>
    </Link></li>)}</ul>
  </div></section>;
}
