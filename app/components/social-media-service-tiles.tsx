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
  { name: "Audio experiences", image: "/images/digital-marketing/marquee/headphones.webp", kind: "", dark: true },
  { name: "Project management", image: "/images/hrms-portfolio/architecture.webp", kind: "layout", dark: true },
  { name: "Creative process", image: "", kind: "recycle", dark: false },
  { name: "Brand ideas", image: "", kind: "diamond", dark: false },
  { name: "Brand design", image: "/images/hrms-selected-projects/shopping-bag.webp", kind: "", dark: true },
  { name: "Digital strategy", image: "", kind: "flag", dark: false },
  { name: "Visual storytelling", image: "/images/website-design/zebras.webp", kind: "", dark: true },
  { name: "Creative campaigns", image: "/images/hrms-portfolio/typewriter.webp", kind: "spark", dark: true },
];

export default function SocialMediaServiceTiles() {
  return <section className={styles.section} aria-labelledby="social-service-tiles-heading"><h2 id="social-service-tiles-heading" className="sr-only">Creative services and capabilities</h2><div className={styles.layout}>
    <div className={styles.serviceCards}>
      <article className={styles.service}><span className={styles.serviceIcon}><TileIcon kind="service"/></span><h3>Service your solutions</h3><p>Useful solutions that bring your business goals, creative ideas and audience together through thoughtful design.</p><Link href="/contact#contact-inquiry">Get started</Link></article>
      <article className={styles.service}><span className={styles.serviceIcon}><TileIcon kind="spark"/></span><h3>Projects, built together</h3><p>Explore a collaborative approach to content, digital experiences and visual communication for your brand.</p><Link href="/contact#contact-inquiry">Get started</Link></article>
    </div>
    <ul className={styles.tiles}>{tiles.map(tile=><li key={tile.name} className={`${styles.tile} ${tile.dark ? styles.dark : ""}`}><Link href="/contact#contact-inquiry" aria-label={`Enquire about ${tile.name}`}>
      {tile.image && <Image src={tile.image} alt="" fill sizes="(max-width:767px) 42vw, 12vw" className="object-cover"/>}
      {tile.kind && <span className={styles.tileIcon}><TileIcon kind={tile.kind}/></span>}
      <span className={styles.tileName}>{tile.name}</span>
    </Link></li>)}</ul>
  </div></section>;
}
