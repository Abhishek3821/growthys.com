import { graphicDesignContent } from "../data/graphic-design-content";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./graphic-content-sections.module.css";

function Scalloped({ children, className = "", color = "#fcf8ed" }: { children: ReactNode; className?: string; color?: string }) {
  return <div className={`${styles.scalloped} ${className}`}>
    <svg viewBox="0 0 1000 600" preserveAspectRatio="none" className={styles.paper} aria-hidden="true" fill={color}>
      <rect x="30" y="30" width="940" height="540" />
      {Array.from({ length: 16 }, (_, i) => <g key={i}><circle cx={35 + i * 62} cy="35" r="35" /><circle cx={35 + i * 62} cy="565" r="35" /></g>)}
      {Array.from({ length: 9 }, (_, i) => <g key={i}><circle cx="35" cy={35 + i * 66} r="35" /><circle cx="965" cy={35 + i * 66} r="35" /></g>)}
    </svg>
    <div className={styles.paperContent}>{children}</div>
  </div>;
}

function DesignTools({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 100 110" className={className} fill="none" aria-hidden="true"><path d="M22 54 15 13l11-3 13 44M55 54 66 7l12 3-9 44M12 51h76l-8 48H20l-8-48Z" fill="#f5e4a2" stroke="#b29b52" strokeWidth="3" /><path d="M25 66h50M34 77h32M25 20l6-2M67 20l10 2" stroke="#b29b52" strokeWidth="2" /><circle cx="50" cy="84" r="5" fill="#fff0ad" stroke="#b29b52" strokeWidth="2" /></svg>;
}

function Portrait({ src, alt }: { src: string; alt: string }) {
  return <div className={styles.photoFrame}><Scalloped><div className={styles.photo}><Image src={src} alt={alt} quality={95} fill sizes="(max-width: 767px) 80vw, 430px" className="object-cover" /></div></Scalloped></div>;
}

const concerns = graphicDesignContent.benefits.items.map((item, index) => ({
  ...item,
  color: ["#800512", "#99b4df", "#a18c36", "#f5bccd"][index],
  ink: ["#fbe5a7", "#fff8ee", "#fff8dd", "#760c20"][index],
}));

export default function GraphicContentSections() {
  return <>
    <section aria-labelledby="candy-club-heading" className={`${styles.section} ${styles.club}`}>
      <Scalloped className={styles.clubPaper}>
        <div className={styles.clubLogo} aria-hidden="true"><b>Growthys</b><span>Design Club</span></div>
        <p className={styles.eyebrow}><span className={styles.pinkLabel}>MONTHLY DESIGN PARTNERSHIP</span></p>
        <h2 id="candy-club-heading" className={styles.candyHeading}>Join the Growthys<br />Design Club</h2>
        <p className={styles.price}>On-brand, every month</p>
        <p className={styles.clubDescription}>{graphicDesignContent.club.description}</p>
        <Link href="/contact#contact-inquiry" className={styles.button}>JOIN THE DESIGN CLUB</Link>
        <p className={styles.finePrint}>{graphicDesignContent.club.tagline}</p>
      </Scalloped>
      <div className={styles.heart} aria-hidden="true">Make your<br />brand<br />shine!</div>
      <span className={styles.gummy} aria-hidden="true">✿</span><span className={styles.cherries} aria-hidden="true">🖌️</span>
      <svg viewBox="0 0 130 65" className={styles.fish} aria-hidden="true"><path d="M12 20h87l25 12-25 13H12a9 9 0 0 1-9-9v-7a9 9 0 0 1 9-9Z" fill="#f04b4f" stroke="#b92e40" strokeWidth="2" /><circle cx="115" cy="32" r="2.5" fill="#8a2639" /><path d="M22 20v25m65-25v25M23 32h64m12-12v25" fill="none" stroke="#c23142" strokeWidth="2" /></svg>
      <div className={styles.candyBag} aria-hidden="true" />
    </section>

    <section aria-labelledby="content-conversations-heading" className={`${styles.section} ${styles.conversations}`}>
      <div className={styles.twoColumn}>
        <div>
          <h2 id="content-conversations-heading" className={styles.heading}>More designs aren&apos;t the <span className={styles.light}>ANSWER.</span> More on-brand designs <span className={styles.light}>ARE.</span></h2>
          <p>{graphicDesignContent.brand.paragraphs[0]}</p>
          <p>{graphicDesignContent.brand.paragraphs[1]}</p>
          <p className={styles.eyebrow}>{graphicDesignContent.brand.eyebrow}<br />{graphicDesignContent.brand.tagline}</p>
        </div>
        <div className={styles.frameWrap}><Portrait src="/images/graphic-designing/graphics/brand-system.webp" alt="A consistent brand system across colour palettes, style guides, social templates and packaging" /><DesignTools className={styles.drinkSticker} /></div>
      </div>
    </section>

    <section aria-labelledby="scattered-brand-heading" className={`${styles.section} ${styles.scattered}`}>
      <p className={styles.eyebrow}>{graphicDesignContent.benefits.eyebrow}</p>
      <h2 id="scattered-brand-heading" className={styles.displayHeading}>YOUR DESIGNS START <mark>BUILDING A BRAND</mark> —<br className="hidden sm:block" /> NOT JUST FILLING A FEED.</h2>
      <div className={styles.concerns}>{concerns.map((item) => <Scalloped key={item.title} color={item.color} className={styles.concern}><div style={{ color: item.ink }}><h3>{item.title}</h3><p>{item.text}</p></div></Scalloped>)}</div>
    </section>

    <section aria-labelledby="difference-heading" className={`${styles.section} ${styles.testimonial}`}>
      <h2 id="difference-heading" className={styles.testimonialHeading}>From Brief to Brand —<br className="hidden sm:block" /> How We <span className={styles.light}>Design</span></h2>
      <Scalloped className={styles.quotePaper}><div className={styles.quoteLayout}>
        <div className={styles.quotePhoto}><Image src="/images/graphic-designing/graphics/design-process.webp" alt="Logo concept sketches, construction grids and colour swatches for a custom visual identity" quality={95} fill sizes="(max-width: 767px) 70vw, 280px" className="object-cover" /></div>
        <div><p className={styles.quoteIntro}>A clear process for a consistent brand.</p><blockquote>Discover. Direction.<br />Design. Deliver.</blockquote>{graphicDesignContent.process.steps.map((step) => <p key={step.title} className={styles.quoteIntro}><strong>{step.title}</strong><br />{step.description}</p>)}<p className={styles.attribution}>GROWTHYS DESIGN PROCESS</p></div>
      </div></Scalloped>
    </section>

    <section aria-labelledby="dream-client-heading" className={`${styles.section} ${styles.dreamClient}`}>
      <div className={styles.twoColumn}>
        <Portrait src="/images/graphic-designing/graphics/designer-collaboration.webp" alt="Graphic designers refining a brand guide, colour palette and packaging together" />
        <div><h2 id="dream-client-heading" className={styles.heading}>{graphicDesignContent.dream.title}</h2><p>{graphicDesignContent.dream.description}</p></div>
      </div>
    </section>

    <section aria-labelledby="pick-me-up-heading" className={`${styles.section} ${styles.pickMeUp}`}>
      <Scalloped className={styles.offerPaper}>
        <p className={styles.introducing}>{graphicDesignContent.offer.intro}</p>
        <h2 id="pick-me-up-heading" className={styles.displayHeading}>{graphicDesignContent.offer.title}</h2>
        <p className={styles.eyebrow}>{graphicDesignContent.offer.eyebrow}</p>
        <p>{graphicDesignContent.offer.paragraphs[0]}</p>
        <p>{graphicDesignContent.offer.paragraphs[1]}</p>
        <Link href="/contact#contact-inquiry" className={`${styles.button} ${styles.offerButton}`}>{graphicDesignContent.offer.cta}</Link>
      </Scalloped>
    </section>
  </>;
}
