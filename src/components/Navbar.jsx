import { useState } from "react";
import logo from "../assets/New Logo.png";
import QuoteButton from "./QuoteButton.jsx";

const navLinks = [
  { label: "Home", href: "#/" },
  { label: "Services", href: "#/services" },
  { label: "Process", href: "#/process" },
  { label: "Pricing", href: "#/pricing" },
  { label: "Contact", href: "#/contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="navbar navbar--solid">
      <div className="container navbar__inner">
        <a className="logo" href="#/" aria-label="Anchor Studio home">
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
          className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__shell">
          <div className="container mobile-menu__inner">
            <div className="mobile-menu__header">
              <p className="mobile-menu__eyebrow">Menu</p>
              <a
                className="mobile-menu__home"
                href="#/"
                onClick={handleCloseMenu}
              >
                Anchor Studio
              </a>
            </div>
            <div className="mobile-menu__links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="mobile-menu__link"
                  href={link.href}
                  onClick={handleCloseMenu}
                >
                  <span>{link.label}</span>
                  <span className="mobile-menu__arrow" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </a>
              ))}
            </div>
            <div className="mobile-menu__footer">
              <QuoteButton className="btn btn--primary mobile-menu__cta" />
              <a className="mobile-menu__contact" href="tel:9173181186">
                Call (917) 318-1186
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
