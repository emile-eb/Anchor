import logo from "../assets/Footer Logo.png";

const nav = ["Home", "Work", "Services", "Process", "Pricing", "Contact"];
const services = [
  "Restaurant Websites",
  "Service Business Sites",
  "Menu & Booking Systems",
  "Ongoing Care"
];
const social = ["Instagram", "LinkedIn", "Behance"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="logo">
            <img src={logo} alt="Anchor Studio" />
          </div>
          <p className="muted">
            Premium websites for restaurants and local service businesses.
          </p>
          <p className="footer__phone">(917) 318-1186</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul className="footer-list">
            {nav.map((item) => (
              <li key={item}>{item}</li>
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
            <li>hello@anchorstudio.co</li>
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
