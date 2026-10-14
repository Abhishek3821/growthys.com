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

function Drink({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 100 110" className={className} fill="none" aria-hidden="true"><path d="M7 20H92Q89 58 58 61V91L80 94V102H22V94L45 91V61Q13 58 7 20Z" fill="#f5e4a2" stroke="#b29b52" strokeWidth="3" /><path d="M14 29H84M52 61V88" stroke="#b29b52" strokeWidth="2" /><circle cx="86" cy="17" r="14" fill="#fff0ad" stroke="#b29b52" strokeWidth="2" /></svg>;
}

function Portrait({ src, alt }: { src: string; alt: string }) {
  return <div className={styles.photoFrame}><Scalloped><div className={styles.photo}><Image src={src} alt={alt} fill sizes="(max-width: 767px) 80vw, 430px" className="object-cover" /></div></Scalloped></div>;
}

const concerns = [
  { title: "You’re posting consistently.", text: "But it’s not getting the results you hoped for. Everyone else seems to have cracked the code.", color: "#800512", ink: "#fbe5a7" },
  { title: "Your saved folder is stacked with reel audios, post ideas, and caption inspo…", text: "But actually turning those ideas into content relevant to your brand feels impossible.", color: "#99b4df", ink: "#fff8ee" },
  { title: "You want to be known for something in your industry.", text: "But right now, your point of view feels like a jumble of recognisable voices.", color: "#a18c36", ink: "#fff8dd" },
  { title: "You know Instagram is a powerful marketing tool", text: "But without a super clear idea of WHAT to post, it feels less like a solid growth strategy and more like a daily chore.", color: "#f5bccd", ink: "#760c20" },
];

export default function GraphicContentSections() {
  return <>
    <section aria-labelledby="candy-club-heading" className={`${styles.section} ${styles.club}`}>
      <Scalloped className={styles.clubPaper}>
        <div className={styles.clubLogo} aria-hidden="true"><b>nectar</b><span>Candy Club</span></div>
        <p className={styles.eyebrow}><span className={styles.pinkLabel}>MONTHLY CANDY SUBSCRIPTION</span></p>
        <h2 id="candy-club-heading" className={styles.candyHeading}>Join the Nectar<br />Candy Club</h2>
        <p className={styles.price}>$25/month</p>
        <p className={styles.clubDescription}>A little sweetness, delivered monthly. Discover a curated mix of Swedish candy, from fruity gummies to sweet-and-sour favourites, with something new to love in every box.</p>
        <Link href="/contact#contact-inquiry" className={styles.button}>JOIN THE CANDY CLUB</Link>
        <p className={styles.finePrint}>A monthly treat. A sweeter little ritual.</p>
      </Scalloped>
      <div className={styles.heart} aria-hidden="true">Stay a lil’<br />something<br />sweet!</div>
      <span className={styles.gummy} aria-hidden="true">✿</span><span className={styles.cherries} aria-hidden="true">🍒</span>
      <svg viewBox="0 0 130 65" className={styles.fish} aria-hidden="true"><path d="M12 31L0 8L37 17Q80 -7 123 30Q84 66 36 46L0 57Z" fill="#f04b4f" stroke="#b92e40" strokeWidth="2" /><circle cx="106" cy="27" r="2.5" fill="#8a2639" /><path d="M51 16L60 27L47 39M70 15L79 26L66 39M90 20L95 29L84 39" fill="none" stroke="#c23142" strokeWidth="2" /></svg>
      <div className={styles.candyBag} aria-hidden="true" />
    </section>

    <section aria-labelledby="content-conversations-heading" className={`${styles.section} ${styles.conversations}`}>
      <div className={styles.twoColumn}>
        <div>
          <h2 id="content-conversations-heading" className={styles.heading}>More content isn’t the <span className={styles.light}>ANSWER.</span> More specific conversations <span className={styles.light}>ARE.</span></h2>
          <p>Generic content themes like “lifestyle” and “educate” are fine… but let’s be real. With a million other people using the exact same topics, they won’t make you known in your industry.</p>
          <p>But content conversations hit different — they’re infused with YOUR unique point of view, expertise, and personality. Your content becomes a reflection of your brand, building real engagement, trust, and demand.</p>
          <p className={styles.eyebrow}>SO, WHAT ARE CONTENT CONVERSATIONS?<br />THINK CONTENT THEMES, BUT CAFFEINATED.</p>
        </div>
        <div className={styles.frameWrap}><Portrait src="/images/crm-management/clients/young-professional.webp" alt="A creative professional finding inspiration on his phone" /><Drink className={styles.drinkSticker} /></div>
      </div>
    </section>

    <section aria-labelledby="scattered-brand-heading" className={`${styles.section} ${styles.scattered}`}>
      <p className={styles.eyebrow}>BUT RIGHT NOW…</p>
      <h2 id="scattered-brand-heading" className={styles.displayHeading}>YOUR BRAND IS FEELING <mark>SCATTERED</mark> AND<br className="hidden sm:block" /> IT’S GIVING… 3PM-SLUMP.</h2>
      <div className={styles.concerns}>{concerns.map((item) => <Scalloped key={item.title} color={item.color} className={styles.concern}><div style={{ color: item.ink }}><h3>{item.title}</h3><p>{item.text}</p></div></Scalloped>)}</div>
    </section>

    <section aria-labelledby="difference-heading" className={`${styles.section} ${styles.testimonial}`}>
      <h2 id="difference-heading" className={styles.testimonialHeading}>Your difference isn’t what you do — it’s how<br className="hidden sm:block" /> you <span className={styles.light}>COMMUNICATE</span> it.</h2>
      <Scalloped className={styles.quotePaper}><div className={styles.quoteLayout}>
        <div className={styles.quotePhoto}><Image src="/images/services/branding-steps/concepts.webp" alt="Creative sketches exploring a distinctive visual identity" fill sizes="(max-width: 767px) 70vw, 280px" className="object-cover" /></div>
        <div><p className={styles.quoteIntro}>Ashley’s content started reaching beyond friends and family, drawing in her ideal clients:</p><blockquote>“I was overthinking everything and constantly comparing myself to other businesses. Coming up with content ideas also felt intimidating. Now, I have a few conversation topics ready to go!”</blockquote><p className={styles.attribution}>— ASHLEY, PERSONAL COLOR CONSULTANT</p></div>
      </div></Scalloped>
    </section>

    <section aria-labelledby="dream-client-heading" className={`${styles.section} ${styles.dreamClient}`}>
      <div className={styles.twoColumn}>
        <Portrait src="/images/crm-management/team/tablet.webp" alt="Two professionals sharing ideas and reviewing a project together" />
        <div><h2 id="dream-client-heading" className={styles.heading}>Your dream client isn’t looking for just another service provider — they want to hire a leading expert. It’s time to become known and own your niche.</h2><p>And it all starts with defining your unique set of content conversations.</p></div>
      </div>
    </section>

    <section aria-labelledby="pick-me-up-heading" className={`${styles.section} ${styles.pickMeUp}`}>
      <Scalloped className={styles.offerPaper}>
        <p className={styles.introducing}>Introducing…</p>
        <h2 id="pick-me-up-heading" className={styles.displayHeading}>THE PICK-ME-UP</h2>
        <p className={styles.eyebrow}>THAT 3PM ICED COFFEE FEELING, BUT FOR YOUR CONTENT</p>
        <p>A done-for-you positioning and content strategy intensive to help you turn content conversations into connections that make you known — even if 10,000 other people also do what you do.</p>
        <p>Inside, we’ll clarify your point of view, define your unique content conversations, and build a repeatable content strategy so showing up online feels intuitive and fun. And with ongoing support, you won’t just have a plan. You’ll have the confidence to execute it consistently.</p>
        <Link href="/contact#contact-inquiry" className={`${styles.button} ${styles.offerButton}`}>DON’T FORCE THE STRATEGY</Link>
      </Scalloped>
    </section>
  </>;
}
