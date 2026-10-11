const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "industries", href: "#industries" },
  { label: "approach", href: "#approach" },
  { label: "insights", href: "#insights" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="hero-nav" aria-label="Main navigation">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
