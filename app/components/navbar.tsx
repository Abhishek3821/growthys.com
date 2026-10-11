"use client";

import Link from "next/link";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  { label: "Services", href: "#services" },
  { label: "Company overview", href: "/insights" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ onHomePage = true, currentPage = onHomePage ? "/" : "/contact" }: { onHomePage?: boolean; currentPage?: "/" | "/contact" | "/insights" | "/blogs" }) {
  const slotRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    }

    const mobile = window.matchMedia("(max-width: 700px)");
    function onViewportChange() {
      if (!mobile.matches) setMenuOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    mobile.addEventListener("change", onViewportChange);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      mobile.removeEventListener("change", onViewportChange);
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    if (!portalRoot) return;

    let previousY = window.scrollY;
    let directionStart = previousY;
    let direction = 0;
    let initialTop = 17;
    let frame: number | null = null;

    function update() {
      frame = null;
      const nav = navRef.current;
      if (!nav) return;

      // Clamp elastic overscroll so the navbar does not flicker at page edges.
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = Math.max(0, Math.min(window.scrollY, maxY));
      const delta = currentY - previousY;
      const nextDirection = Math.sign(delta);
      if (nextDirection && nextDirection !== direction) {
        directionStart = previousY;
        direction = nextDirection;
      }

      nav.style.setProperty("--nav-top", `${Math.max(17, initialTop - currentY)}px`);
      nav.dataset.scrolled = String(currentY > 80);

      if (currentY <= 24 || nav.dataset.menuOpen === "true" || nav.contains(document.activeElement)) {
        setHidden(false);
      } else if (delta > 0 && currentY > 100 && currentY - directionStart >= 10) {
        setHidden(true);
      } else if (delta < 0 && directionStart - currentY >= 8) {
        setHidden(false);
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
      if (frame === null) frame = window.requestAnimationFrame(update);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [portalRoot]);

  const navigation = (
    <nav
      ref={navRef}
      className={`hero-nav${portalRoot ? " hero-nav-floating" : ""}`}
      aria-label="Main navigation"
      data-hidden={hidden}
      data-menu-open={menuOpen}
      data-home-page={onHomePage}
      inert={hidden}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <Link href="/#home" className="hero-nav-brand" aria-label="Growthys home" onClick={() => setMenuOpen(false)}>Growthys</Link>
      <button
        ref={toggleRef}
        className="hero-nav-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={() => {
          setHidden(false);
          setMenuOpen((open) => !open);
        }}
      >
        <span /><span /><span />
      </button>
      <div className="hero-nav-links" id={menuId}>
        {links.map((link) => (
          <Link key={link.href} href={!onHomePage && link.href.startsWith("#") ? `/${link.href}` : link.href} aria-current={link.href === currentPage ? "page" : undefined} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );

  // Keep the header's space while escaping hero clipping and stacking contexts.
  return (
    <div ref={slotRef} className="hero-nav-slot">
      {portalRoot ? createPortal(navigation, portalRoot) : navigation}
    </div>
  );
}
