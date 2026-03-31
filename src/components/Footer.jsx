import logo from "../assets/Footer Logo.png";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" }
];
const services = [
  "Up to 5 core pages",
  "Mobile-responsive design",
  "Basic SEO setup",
  "Photography add-on"
];
const social = ["Instagram", "LinkedIn", "Behance"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a className="logo" href="/" aria-label="Anchor Studio home">
            <img src={logo} alt="Anchor Studio" />
          </a>
          <p className="muted">
            Premium websites for restaurants and local service businesses.
          </p>
          <p className="footer__phone">(917) 318-1186</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul className="footer-list">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul className="footer-list">
            {services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul className="footer-list">
            <li>
              <a href="mailto:Ebasse3@gmail.com">Ebasse3@gmail.com</a>
            </li>
            <li>Chicago, IL</li>
            {social.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© 2026 Anchor Studio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
