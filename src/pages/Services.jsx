import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import QuoteButton from "../components/QuoteButton.jsx";

const coreServices = [
  "Up to 5 core pages (for example Home, Menu, About, Contact, and Location)",
  "Mobile-responsive design",
  "Basic on-page SEO setup",
  "Integration of contact forms and/or online ordering links",
  "Google Maps and business information integration",
  "Initial content formatting using text and images provided by the client"
];

export default function Services() {
  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Navbar />
      <main className="services-page">
        <section className="section services-hero" data-reveal>
          <div className="container services-hero__grid">
            <div data-reveal>
              <p className="eyebrow">Services</p>
              <h1>Clean, modern websites for local businesses that need to convert.</h1>
              <p className="lead">
                Our core website package covers the essentials most restaurants
                and service businesses need to launch with confidence.
              </p>
              <div className="services-hero__actions">
                <QuoteButton />
                <a className="btn btn--secondary" href="/contact">
                  Contact Page
                </a>
              </div>
            </div>
            <aside className="services-summary-card" data-reveal>
              <p className="eyebrow">Core Package</p>
              <h3>Built to get you online fast without the usual clutter.</h3>
              <p className="body">
                The offer is intentionally focused: strong structure, clear
                information, and the key integrations a local business actually
                needs.
              </p>
            </aside>
          </div>
        </section>

        <section className="section section--divider services-section" data-reveal>
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">What Is Included</p>
              <h2>Everything needed for a polished, working website foundation.</h2>
            </div>
            <div className="services-grid">
              {coreServices.map((service) => (
                <article key={service} className="service-card" data-reveal>
                  <span className="service-card__icon">+</span>
                  <p>{service}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section services-addon" data-reveal>
          <div className="container services-addon__grid">
            <div className="services-addon__content" data-reveal>
              <p className="eyebrow">Add-On Option</p>
              <h2>Professional photography, handled for you.</h2>
              <p className="body">
                If you need stronger visuals, we can coordinate a professional
                shoot with our photographer so the final site feels credible and
                custom instead of stitched together from low-quality images.
              </p>
            </div>
            <div className="services-addon__card" data-reveal>
              <h3>Photography add-on</h3>
              <ul className="contact-card__list">
                <li>Professional photo coverage for your business</li>
                <li>Better hero images, interiors, products, or team photos</li>
                <li>Designed to improve the final website presentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section final-cta" data-reveal>
          <div className="container final-cta__inner">
            <div>
              <h2>Need a site package tailored to your business?</h2>
              <p className="muted">Send over what you need and we will map the next step.</p>
            </div>
            <a className="btn btn--primary" href="/contact">
              Go to Contact
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
