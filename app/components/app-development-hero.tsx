import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import styles from "./app-development-hero.module.css";

export default function AppDevelopmentHero() {
  return (
    <div className={styles.hero}>
      <header className={styles.header}>
        <Link href="/" aria-label="Growthys home" className={styles.brand}>Growthys<span>®</span></Link>
        <Navbar onHomePage={false} currentPage="/app-development" />
      </header>
      <section aria-labelledby="app-development-heading" className={styles.content}>
        <div className={styles.topGrid}>
          <div className={styles.copy}>
            <h1 id="app-development-heading">Fueling Brands<br />for the <span>Digital<svg viewBox="0 0 230 22" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12Q98 28 225 3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg></span><br />Age.</h1>
            <p>We craft impactful digital experiences through strategy, design, and technology to help your brand grow, engage, and lead.</p>
            <div className={styles.actions}><Link href="/contact#contact-inquiry" className={styles.getStarted}>Get Started</Link><Link href="#app-preview" className={styles.watchVideo}>View Preview</Link></div>
            <svg viewBox="0 0 140 140" className={styles.sun} aria-hidden="true">{Array.from({length: 20}, (_, index) => <path key={index} d={`M70 ${index % 2 ? 20 : 5}V63`} transform={`rotate(${index * 18} 70 70)`} fill="none" stroke={index % 2 ? "#ffad88" : "#d1c9c0"} strokeWidth="1" />)}<circle cx="70" cy="70" r="5" fill="#ff8050" /></svg>
          </div>
          <div id="app-preview" className={styles.photoCard} tabIndex={-1}>
            <Image src="/images/services/app-development-phone.webp" alt="A woman in a blue blouse using her smartphone at home" fill preload sizes="(max-width: 767px) 90vw, 50vw" className="object-cover" />
            <div className={styles.balanceCard} role="img" aria-label="App dashboard preview showing a balance of 15,560 dollars and a rising trend chart">
              <p className={styles.balanceLabel}>Balance</p>
              <div className={styles.balanceRow}><strong>$ 15,560.00</strong><span>Oct – Feb⌄</span></div>
              <svg viewBox="0 0 250 100" className={styles.chart} aria-hidden="true"><defs><linearGradient id="app-balance-gradient" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#bec4bf" stopOpacity=".4" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient></defs><path d="M4 84C22 82 27 36 48 46S77 66 98 53 122 29 143 38 173 6 199 9 228 23 245 32V98H4Z" fill="url(#app-balance-gradient)" /><path d="M4 84C22 82 27 36 48 46S77 66 98 53 122 29 143 38 173 6 199 9 228 23 245 32" fill="none" stroke="#242b28" strokeWidth="2" /><rect x="115" y="8" width="43" height="22" rx="5" fill="#232927" /><text x="136.5" y="23" textAnchor="middle" fill="white" fontSize="12">$500</text><circle cx="136" cy="39" r="4" fill="#ff8152" /></svg>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.clientCard}>
            <div className={styles.avatars} aria-hidden="true">{["0% 0%", "33.333% 0%", "33.333% 100%", "66.667% 100%"].map((position) => <span key={position} style={{backgroundPosition: position}} />)}</div>
            <div><p className={styles.clientCount}>305K+</p><p className={styles.clientDescription}>Happy clients and successful<br />transactions</p></div>
          </div>
          <div className={styles.lightCard}><p>600K+</p><span>Clients</span></div>
          <div className={styles.orangeCard}><div className={styles.statSymbols} aria-hidden="true"><svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="18" cy="18" r="13" /><path d="m18 4 11 20H7L18 4Zm0 28L7 12h22L18 32Z" /></svg><span>↗</span></div><p>50K</p><span className={styles.contribution}>24/7 Contribution in<br />the next year</span></div>
        </div>
      </section>
    </div>
  );
}
