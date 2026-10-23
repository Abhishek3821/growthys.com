import { socialMediaContent } from "../data/social-media-content";
import Image from "next/image";
import Navbar from "./navbar";
import styles from "./social-media-hero.module.css";

export default function SocialMediaHero() {
  return <div className={styles.hero}>
    <header className={styles.header}><Navbar onHomePage={false} currentPage="/social-media-marketing" /></header>
    <section className={styles.layout} aria-labelledby="social-media-heading">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>SOCIAL MEDIA<br/>MARKETING <span aria-hidden="true">🏠</span></p>
        <h1 id="social-media-heading" aria-label={socialMediaContent.hero.title}>Your Brand Deserves<br/>a Feed People<br/>Actually Follow.</h1>
        <div className={styles.socialStat}><svg viewBox="0 0 50 55" fill="none" aria-hidden="true"><rect x="8" y="8" width="23" height="39" rx="4" fill="#718ead" transform="rotate(12 8 8)"/><rect x="12" y="13" width="15" height="26" rx="1" fill="#c7e7ee" transform="rotate(12 12 13)"/><path d="M20 21h12v10H20Z" fill="#f6c666"/><rect x="28" y="8" width="17" height="16" rx="4" fill="#ef6d94"/><path d="m32 15 3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg><p><strong>Social Media Marketing</strong><span>{socialMediaContent.hero.description}</span></p></div>
        <svg viewBox="0 0 150 100" className={styles.scribble} fill="none" stroke="#9d9d98" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true"><path d="M5 9C65-1 61 68 28 50 1 35 75 7 80 57c2 17 17 26 43 27m-13-9 14 9-13 6"/></svg>
        <form action="/contact#contact-inquiry" method="get" className={styles.form}><label htmlFor="social-hero-email" className="sr-only">Your email address</label><input id="social-hero-email" type="email" name="email" placeholder="Enter your email" autoComplete="email" required/><button type="submit">Let’s Get Social <span aria-hidden="true">↗</span></button></form>
      </div>
      <div className={styles.artwork}>
        <div className={styles.grid} aria-hidden="true"/>
        <span className={`${styles.square} ${styles.squareOne}`} aria-hidden="true"/><span className={`${styles.square} ${styles.squareTwo}`} aria-hidden="true"/><span className={`${styles.square} ${styles.squareThree}`} aria-hidden="true"/>
        <div className={styles.portrait}><Image quality={95} src="/images/social-media/graphics/hero-social-studio.webp" alt="A fashion reel, social campaign cards and reach analytics in a colourful editorial collage" fill preload sizes="(max-width:767px) 100vw, 60vw" className="object-contain object-bottom"/></div>
        <div className={styles.like} aria-hidden="true">♥<span>+1</span></div>
        <span className={styles.megaphone} aria-hidden="true">📣</span>
        <div className={styles.results}><span aria-hidden="true">🏆</span><p>Winning<br/>Results</p></div>
        <div className={styles.reach}><p>Your reach</p><strong>2,420</strong><span>↗ Let your brand grow</span><svg viewBox="0 0 110 85" fill="none" aria-hidden="true"><rect x="8" y="61" width="18" height="18" rx="2" fill="#efc74d"/><rect x="35" y="45" width="18" height="34" rx="2" fill="#dbaa18"/><rect x="62" y="26" width="18" height="53" rx="2" fill="#f3c435"/><path d="M6 51C34 54 65 35 95 7m-21 2 23-4-3 22" stroke="#5c9a62" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <svg viewBox="0 0 90 80" className={styles.loop} fill="none" stroke="#b8bbb5" strokeWidth="1" aria-hidden="true"><ellipse cx="43" cy="40" rx="30" ry="22" transform="rotate(-22 43 40)"/><ellipse cx="43" cy="40" rx="26" ry="28" transform="rotate(20 43 40)"/></svg>
      </div>
    </section>
  </div>;
}
