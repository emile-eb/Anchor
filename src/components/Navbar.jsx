import { useState } from "react";
import logo from "../assets/New Logo.png";
import QuoteButton from "./QuoteButton.jsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar navbar--solid">
      <div className="container navbar__inner">
        <a className="logo" href="/" aria-label="Anchor Studio home">
          <img src={logo} alt="Anchor Studio" />
        </a>
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.label} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <QuoteButton />
        <button
          className="navbar__toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="container mobile-menu__inner">
          {navLinks.map((link) => (
            <a key={link.label} className="mobile-menu__link" href={link.href}>
              {link.label}
            </a>
          ))}
          <QuoteButton className="btn btn--primary mobile-menu__cta" />
          <p className="mobile-menu__phone">(917) 318-1186</p>
        </div>
      </div>
    </header>
  );
}
