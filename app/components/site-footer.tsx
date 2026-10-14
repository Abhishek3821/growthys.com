"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import monuments from "../../public/images/footer/indian-monuments.webp";
import growthysLogo from "../../public/images/footer/growthys-logo.jpeg";
import styles from "./site-footer.styles";

const linkGroups = [
  { title: "Quick Links", links: [{ label: "Home", href: "/" }, { label: "Shop Sarees" }, { label: "About Us" }] },
  { title: "Customer Care", links: [{ label: "FAQs", href: "#faq" }, { label: "Shipping & Delivery" }, { label: "Size & Care Guide" }, { label: "Track Your Order" }] },
  { title: "Company Links", links: [{ label: "Help & Support", href: "#faq" }, { label: "Privacy Policy" }, { label: "Terms & Conditions" }, { label: "Contact Us", href: "#contact" }] },
];

function SocialIcon({ name }: { name: "Pinterest" | "Instagram" | "Facebook" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "Pinterest" && <path fill="currentColor" d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-1.8.2-2.7l1.3-5.5s-.3-.6-.3-1.6c0-1.5.8-2.6 1.9-2.6.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.6 2 1.7 2 2.1 0 3.6-2.7 3.6-5.8 0-2.4-1.6-4.2-4.6-4.2-3.3 0-5.4 2.5-5.4 5.2 0 1 .3 1.7.8 2.2.2.2.2.3.1.6l-.3 1c0 .3-.3.4-.6.3-1.6-.6-2.3-2.3-2.3-4.2 0-3.1 2.6-6.9 7.9-6.9 4.2 0 7 3.1 7 6.4 0 4.4-2.4 7.7-5.9 7.7-1.2 0-2.3-.7-2.7-1.4l-.8 3c-.3 1-.8 2-1.2 2.8A10 10 0 1 0 12 2Z" />}
      {name === "Instagram" && <><rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" /><circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" fill="#fff" /></>}
      {name === "Facebook" && <><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8" fill="#fff" /></>}
    </svg>
  );
}

type SiteFooterProps = {
  onHomePage?: boolean;
  contactHref?: string;
  faqHref?: string;
};

export default function SiteFooter({ onHomePage = true, contactHref, faqHref }: SiteFooterProps) {
  const [showNotice, setShowNotice] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  function resolveHref(href: string) {
    if (href === "#contact" && contactHref) return contactHref;
    if (href === "#faq" && faqHref) return faqHref;
    if (onHomePage || !href.startsWith("#")) return href;
    return href === "#contact" ? "#contact-inquiry" : `/${href}`;
  }

  return (
    <footer className={styles.footer} aria-label="Growthys footer">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo} aria-label="Growthys home">
              <Image src={growthysLogo} alt="Growthys" className={styles.logoImage} sizes="320px" />
            </a>
            <p>Growthys brings ideas to life through thoughtful design and technology. We create digital experiences that help businesses connect, grow, and move forward.</p>
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
            <p>Stay connected with Growthys. Get updates on our latest work, insights, and ideas in design and technology.</p>
          </div>
        </div>
        <div className={styles.navigation}>
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={`Footer ${group.title}`}>
              <h2>{group.title}</h2>
              <ul>{group.links.map((link) => <li key={link.label}>{link.href ? <a href={resolveHref(link.href)}>{link.label}</a> : <button type="button" disabled>{link.label}</button>}</li>)}</ul>
            </nav>
          ))}
          <div className={styles.connect}>
            <h2>Connect With Us</h2>
            <p><a href={resolveHref("#contact")}>Contact Growthys</a></p>
            <p>+91 9XXXX XXX25</p>
            <div className={styles.socials} aria-label="Social media">
              {(["Pinterest", "Instagram", "Facebook"] as const).map((name) => <button type="button" key={name} aria-label={name} disabled><SocialIcon name={name} /></button>)}
            </div>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 Growthys. All Rights Reserved.</p>
      </div>
      <div className={styles.skyline} aria-hidden="true"><Image src={monuments} alt="" className={styles.monuments} sizes="100vw" /></div>
    </footer>
  );
}
