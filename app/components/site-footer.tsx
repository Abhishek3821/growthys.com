"use client";

import Image from "next/image";
import Link from "next/link";
import footerSkyline from "../../public/images/homepage/footer-india.webp";
import growthysLogo from "../../public/images/footer/growthys-logo.jpeg";
import styles from "./site-footer.styles";

const linkGroups = [
  { title: "Quick Links", links: [
    { label: "Home", href: "/" },
    { label: "Company overview", href: "/insights" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ] },
  { title: "Our Services", links: [
    { label: "Performance Marketing", href: "/performance-marketing" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "Search Engine Optimization (SEO)", href: "/search-engine-optimization" },
    { label: "Social Media Marketing", href: "/social-media-marketing" },
    { label: "Content Marketing", href: "/content-marketing" },
    { label: "Ecommerce Marketing", href: "/ecommerce-marketing" },
    { label: "Website Design", href: "/website-design" },
    { label: "Web Development", href: "/web-development" },
    { label: "App Development", href: "/app-development" },
    { label: "UI/UX Design", href: "/ui-ux-design" },
    { label: "Graphic Designing", href: "/graphic-designing" },
    { label: "CMS Design", href: "/cms-design" },
    { label: "E-Commerce Solutions", href: "/e-commerce-solutions" },
    { label: "HRMS Software", href: "/hrms-software" },
    { label: "CRM & Management Software", href: "/crm-management-software" },
  ] },
  { title: "Company Links", links: [{ label: "Help & Support", href: "/help-support" }, { label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms & Conditions", href: "/terms-conditions" }, { label: "Contact Us", href: "#contact" }] },
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
            <Link href="/" className={styles.logo} aria-label="Growthys home">
              <Image src={growthysLogo} alt="Growthys" className={styles.logoImage} sizes="320px" />
            </Link>
            <p>A digital marketing company and IT solutions company in India, helping businesses grow with smart marketing, clean design, and reliable technology. Based in Gurugram, Haryana — serving clients across India and beyond.</p>
          </div>
          <div className={styles.newsletter}>
            <h2>Follow Us</h2>
            <div className={styles.socials} aria-label="Social media">
              {(["Pinterest", "Instagram", "Facebook"] as const).map((name) => <button type="button" key={name} aria-label={name} disabled><SocialIcon name={name} /></button>)}
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          {linkGroups.filter((group) => group.title !== "Our Services").map((group) => (
            <nav key={group.title} aria-label={`Footer ${group.title}`}>
              <h2>{group.title}</h2>
              <ul>{group.links.map((link) => <li key={link.label}>{link.href ? <a href={resolveHref(link.href)}>{link.label}</a> : <button type="button" disabled>{link.label}</button>}</li>)}</ul>
            </nav>
          ))}
          <div className={styles.connect}>
            <h2>Connect With Us</h2>
            <p><span aria-hidden="true">📍</span> <Link href="/contact#contact-location">Gurugram, Haryana, India</Link></p>
            <p><span aria-hidden="true">📧</span> <a href="mailto:growthysofficial@gmail.com">growthysofficial@gmail.com</a></p>
            <p><span aria-hidden="true">📞</span> <a href="tel:+919625663269">+91 9625663269</a></p>
            <p><span aria-hidden="true">💬</span> <a href="https://wa.me/919625663269" target="_blank" rel="noopener noreferrer">WhatsApp: +91 9625663269</a></p>
          </div>
          <nav className={styles.services} aria-label="Footer Our Services">
            <h2>Our Services</h2>
            <ul>{linkGroups.find((group) => group.title === "Our Services")?.links.map((link) => <li key={link.label}><Link href={link.href!}>{link.label}</Link></li>)}</ul>
          </nav>
        </div>
        <p className={styles.copyright}>© 2026 Growthys. All Rights Reserved.</p>
      </div>
      <div className={styles.skyline} aria-hidden="true"><Image src={footerSkyline} alt="" className={styles.monuments} sizes="100vw" /></div>
    </footer>
  );
}
