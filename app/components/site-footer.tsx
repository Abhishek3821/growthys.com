"use client";

import SocialIcon from "./social-icon";
import { socialLinks } from "../data/social-links";
import Image from "next/image";
import Link from "next/link";
import footerSkyline from "../../public/images/homepage/footer-india.webp";
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


type SiteFooterProps = {
  onHomePage?: boolean;
  contactHref?: string;
  faqHref?: string;
  brandCopy?: { name: string; title: string; paragraphs: readonly string[] };
};

export default function SiteFooter({ onHomePage = true, contactHref, faqHref, brandCopy }: SiteFooterProps) {
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
              {brandCopy?.name ?? "Growthys"}
            </Link>
            {brandCopy ? <><h2>{brandCopy.title}</h2>{brandCopy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</> : <p>A digital marketing company and IT solutions company in India, helping businesses grow with smart marketing, clean design, and reliable technology. Based in Gurugram, Haryana — serving clients across India and beyond.</p>}
          </div>
          <div className={styles.newsletter}>
            <h2>Follow Us</h2>
            <div className={styles.socials} aria-label="Social media">
              {socialLinks.map(({ name, href }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Growthys on ${name}`}><SocialIcon name={name} /></a>)}
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
