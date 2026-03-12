import { useState } from "react";
import logo from "../assets/New Logo.png";

const navLinks = ["Home", "Work", "Services", "Process", "Pricing", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar navbar--solid">
      <div className="container navbar__inner">
        <div className="logo">
          <img src={logo} alt="Anchor Studio" />
        </div>
        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a key={link} className="nav-link" href="#">
              {link}
            </a>
          ))}
        </nav>
        <button className="btn btn--primary">Request a Quote</button>
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
            <a key={link} className="mobile-menu__link" href="#">
              {link}
            </a>
          ))}
          <button className="btn btn--primary mobile-menu__cta">
            Request a Quote
          </button>
          <p className="mobile-menu__phone">(917) 318-1186</p>
        </div>
      </div>
    </header>
  );
}
