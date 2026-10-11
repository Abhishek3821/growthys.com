"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import monuments from "../../public/images/footer/indian-monuments.webp";
import styles from "./site-footer.module.css";

const linkGroups = [
  { title: "Quick Links", links: [{ label: "Home", href: "/" }, { label: "Shop Sarees" }, { label: "About Us" }] },
  { title: "Customer Care", links: [{ label: "FAQs", href: "#faq" }, { label: "Shipping & Delivery" }, { label: "Size & Care Guide" }, { label: "Track Your Order" }] },
  { title: "Company Links", links: [{ label: "Help & Support", href: "#faq" }, { label: "Privacy Policy" }, { label: "Terms & Conditions" }, { label: "Contact Us", href: "#contact" }] },
];

function BrandEmblem() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="28" fill="#acc7c2" stroke="#a87855" strokeWidth="2" />
      <circle cx="32" cy="32" r="24" stroke="#e8d6b8" strokeWidth="1.5" strokeDasharray="2 2" />
      {[0, 60, 120, 180, 240, 300].map((angle) => <g key={angle} transform={`rotate(${angle} 32 32)`}><path d="M32 32c-9-7-12-15-6-18 5-2 10 7 6 18Z" fill="#d99a57" stroke="#8d6049" /><path d="M32 32c9-7 12-15 6-18-5-2-10 7-6 18Z" fill="#be6f59" stroke="#8d6049" /><circle cx="32" cy="9" r="2" fill="#f3d294" /></g>)}
      <circle cx="32" cy="32" r="7" fill="#edc779" stroke="#875a45" /><circle cx="32" cy="32" r="3" fill="#a55e4a" />
    </svg>
  );
}

function SocialIcon({ name }: { name: "Pinterest" | "Instagram" | "Facebook" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "Pinterest" && <path fill="currentColor" d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-1.8.2-2.7l1.3-5.5s-.3-.6-.3-1.6c0-1.5.8-2.6 1.9-2.6.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.6 2 1.7 2 2.1 0 3.6-2.7 3.6-5.8 0-2.4-1.6-4.2-4.6-4.2-3.3 0-5.4 2.5-5.4 5.2 0 1 .3 1.7.8 2.2.2.2.2.3.1.6l-.3 1c0 .3-.3.4-.6.3-1.6-.6-2.3-2.3-2.3-4.2 0-3.1 2.6-6.9 7.9-6.9 4.2 0 7 3.1 7 6.4 0 4.4-2.4 7.7-5.9 7.7-1.2 0-2.3-.7-2.7-1.4l-.8 3c-.3 1-.8 2-1.2 2.8A10 10 0 1 0 12 2Z" />}
      {name === "Instagram" && <><rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" /><circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="#fff" /></>}
      {name === "Facebook" && <><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8" fill="#fff" /></>}
    </svg>
  );
}

export default function SiteFooter() {
  const [showNotice, setShowNotice] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  return (
    <footer className={styles.footer} aria-label="Dhaaraa footer">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo} aria-label="Dhaaraa home"><BrandEmblem /><span>dhaaraa</span></a>
            <p>DHARAA is where tradition meets sustainability. We create organic cotton, silk, and linen sarees that honor India&apos;s weaving heritage while caring for you and the planet.</p>
          </div>
          <div className={styles.newsletter}>
            <h2>Newsletter</h2>
            <form onSubmit={handleSubscribe}>
              <label className={styles.srOnly} htmlFor="footer-newsletter-email">Newsletter email address</label>
              <div className={styles.formRow}>
                <input id="footer-newsletter-email" name="email" type="email" autoComplete="email" placeholder="Enter email address" required onChange={() => setShowNotice(false)} />
                <button type="submit">Submit</button>
              </div>
              {showNotice && <p className={styles.notice} role="status">Newsletter subscriptions are coming soon.</p>}
            </form>
            <p>Stay connected with conscious fashion. Get updates on new collections, exclusive offers, and stories from our artisans.</p>
          </div>
        </div>
        <div className={styles.navigation}>
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={`Footer ${group.title}`}>
              <h2>{group.title}</h2>
              <ul>{group.links.map((link) => <li key={link.label}>{"href" in link ? <a href={link.href}>{link.label}</a> : <button type="button" disabled>{link.label}</button>}</li>)}</ul>
            </nav>
          ))}
          <div className={styles.connect}>
            <h2>Connect With Us</h2>
            <p>supportxxx@dharaa.com</p>
            <p>+91 9XXXX XXX25</p>
            <div className={styles.socials} aria-label="Social media">
              {(["Pinterest", "Instagram", "Facebook"] as const).map((name) => <button type="button" key={name} aria-label={name} disabled><SocialIcon name={name} /></button>)}
            </div>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 DHARAA. All Rights Reserved.</p>
      </div>
      <div className={styles.skyline} aria-hidden="true"><Image src={monuments} alt="" className={styles.monuments} sizes="100vw" /></div>
    </footer>
  );
}
