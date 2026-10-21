"use client";

import siteStyles from "../site-styles";

import Link from "next/link";
import Image from "next/image";
import logoStyles from "./navbar-logo.module.css";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  { label: "Company overview", href: "/insights" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Performance Marketing", "Web Development", "Website Design", "App Development",
  "Digital Marketing", "Search Engine Optimization (SEO)", "E-Commerce Solutions",
  "HRMS Software", "CRM & Management Software", "Social Media Marketing",
  "Graphic Designing", "UI/UX Design", "CMS Design", "Content Marketing", "Ecommerce Marketing",
];

const servicePages: Record<string, "/performance-marketing" | "/website-design" | "/digital-marketing" | "/e-commerce-solutions" | "/crm-management-software" | "/graphic-designing" | "/cms-design" | "/ecommerce-marketing" | "/web-development" | "/app-development" | "/search-engine-optimization" | "/hrms-software" | "/social-media-marketing" | "/ui-ux-design" | "/content-marketing"> = {
  "Performance Marketing": "/performance-marketing",
  "Website Design": "/website-design",
  "Digital Marketing": "/digital-marketing",
  "E-Commerce Solutions": "/e-commerce-solutions",
  "CRM & Management Software": "/crm-management-software",
  "Graphic Designing": "/graphic-designing",
  "CMS Design": "/cms-design",
  "Ecommerce Marketing": "/ecommerce-marketing",
  "Web Development": "/web-development",
  "App Development": "/app-development",
  "Search Engine Optimization (SEO)": "/search-engine-optimization",
  "HRMS Software": "/hrms-software",
  "Social Media Marketing": "/social-media-marketing",
  "UI/UX Design": "/ui-ux-design",
  "Content Marketing": "/content-marketing",
};

export default function Navbar({ onHomePage = true, currentPage = onHomePage ? "/" : "/contact" }: { onHomePage?: boolean; currentPage?: "/" | "/contact" | "/insights" | "/blogs" | "/performance-marketing" | "/website-design" | "/digital-marketing" | "/e-commerce-solutions" | "/crm-management-software" | "/graphic-designing" | "/cms-design" | "/ecommerce-marketing" | "/web-development" | "/app-development" | "/search-engine-optimization" | "/hrms-software" | "/social-media-marketing" | "/ui-ux-design" | "/content-marketing" }) {
  const slotRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const servicesRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const servicesId = useId();
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function closeMenus() {
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) closeMenus();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (servicesOpen) {
        setServicesOpen(false);
        servicesRef.current?.focus();
      } else {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    const mobile = window.matchMedia("(max-width: 700px)");
    function onViewportChange() {
      closeMenus();
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    mobile.addEventListener("change", onViewportChange);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      mobile.removeEventListener("change", onViewportChange);
    };
  }, [menuOpen, servicesOpen]);

  useLayoutEffect(() => {
    if (!portalRoot) return;

    let previousY = window.scrollY;
    let initialTop = 17;

    function update() {
      const nav = navRef.current;
      if (!nav) return;

      // Clamp elastic overscroll so the navbar does not flicker at page edges.
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = Math.max(0, Math.min(window.scrollY, maxY));
      const delta = currentY - previousY;
      nav.style.setProperty("--nav-top", `${Math.max(17, initialTop - currentY)}px`);
      logoRef.current?.style.setProperty("--logo-top", `${Math.max(17, initialTop - currentY)}px`);
      nav.dataset.scrolled = String(currentY > 80);

      if (currentY === 0 || delta < 0) {
        setHidden(false);
      } else if (delta > 0) {
        // React immediately to direction changes, including near the page top.
        // Close dropdowns so they cannot keep the navigation visible.
        setMenuOpen(false);
        setServicesOpen(false);
        setHidden(true);
      }

      previousY = currentY;
    }

    function measure() {
      const slot = slotRef.current;
      const nav = navRef.current;
      if (!slot || !nav) return;
      const rect = slot.getBoundingClientRect();
      initialTop = rect.top + window.scrollY;
      nav.style.setProperty("--nav-width", `${rect.width}px`);
      nav.style.setProperty("--nav-right", `${window.innerWidth - rect.right}px`);
      update();
    }

    function onScroll() {
      update();
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [portalRoot]);

  const navigation = (
    <>
    <Link ref={logoRef} href="/" aria-label="Growthys home" className={logoStyles.logo} data-hidden={hidden} inert={hidden} onClick={closeMenus}>
      <Image src="/images/brand/growthys-logo.png" alt="Growthys" width={900} height={251} sizes="(max-width: 700px) 145px, 180px" preload />
    </Link>
    <nav
      ref={navRef}
      className={siteStyles["hero-nav"] + (portalRoot ? (" " + siteStyles["hero-nav-floating"]) : ("")) + (currentPage === "/performance-marketing" || currentPage === "/crm-management-software" || currentPage === "/ecommerce-marketing" ? " [&_a.hero-nav-brand]:text-white!" : "")}
      aria-label="Main navigation"
      data-hidden={hidden}
      data-menu-open={menuOpen}
      data-services-open={servicesOpen}
      data-home-page={onHomePage}
      inert={hidden}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenus();
      }}
    >
      <button
        ref={toggleRef}
        className={siteStyles["hero-nav-toggle"]}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={() => {
          setHidden(false);
          setServicesOpen(false);
          setMenuOpen((open) => !open);
        }}
      >
        <span /><span /><span />
      </button>
      <div className={siteStyles["hero-nav-links"]} id={menuId}>
        <div className={siteStyles["hero-nav-services"]}>
          <button ref={servicesRef} type="button" className={siteStyles["hero-nav-services-toggle"]} aria-expanded={servicesOpen} aria-controls={servicesId} onClick={() => { setHidden(false); setServicesOpen((open) => !open); }}>
            Services <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <ul id={servicesId} className={siteStyles["hero-nav-services-list"]} hidden={!servicesOpen} aria-label="Our services">
            {services.map((service) => (
              <li key={service}>
                {servicePages[service] ? (
                  <Link href={servicePages[service]} className="min-h-0! rounded-[10px]! p-0! whitespace-normal!" aria-current={currentPage === servicePages[service] ? "page" : undefined} onClick={closeMenus}>
                    <span>{service}</span>
                  </Link>
                ) : <span>{service}</span>}
              </li>
            ))}
          </ul>
        </div>
        {links.map((link) => (
          <Link key={link.href} href={!onHomePage && link.href.startsWith("#") ? `/${link.href}` : link.href} aria-current={link.href === currentPage ? "page" : undefined} onClick={closeMenus}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
    </>
  );

  // Keep the header's space while escaping hero clipping and stacking contexts.
  return (
    <div ref={slotRef} className={siteStyles["hero-nav-slot"]}>
      {portalRoot ? createPortal(navigation, portalRoot) : navigation}
    </div>
  );
}
