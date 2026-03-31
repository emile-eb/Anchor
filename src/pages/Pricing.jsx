import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const plans = [
  {
    name: "Starter",
    price: "$750",
    cadence: "starting investment",
    summary:
      "A clean launch package for small local businesses that need a professional online presence fast.",
    cta: "Get Started",
    href: "#/contact",
    features: [
      "Up to 3 core pages",
      "Mobile-responsive design",
      "Basic contact form setup",
      "Google Maps and business info integration",
      "Client-provided content formatting"
    ]
  },
  {
    name: "Growth",
    price: "$1,250",
    cadence: "starting investment",
    summary:
      "The strongest fit for most businesses that need a full site with the key essentials done properly.",
    cta: "Request Quote",
    href: "#/contact",
    featured: true,
    features: [
      "Up to 5 core pages",
      "Mobile-responsive design",
      "Basic on-page SEO setup",
      "Contact forms and ordering link integration",
      "Google Maps and business information integration",
      "Client-provided content formatting",
      "Professional photography included"
    ]
  },
  {
    name: "Professional",
    price: "$1,850",
    cadence: "starting investment",
    summary:
      "For businesses that need a more polished presentation, stronger structure, and more custom execution.",
    cta: "Book a Call",
    href: "#/contact",
    features: [
      "Everything in Growth",
      "Expanded page structure",
      "Refined messaging and layout support",
      "Advanced content organization",
      "Priority revisions and launch support"
    ]
  },
  {
    name: "Custom",
    price: "Custom",
    cadence: "scope-based quote",
    summary:
      "Best for more complex builds, special integrations, or businesses that need custom photography and strategy.",
    cta: "Talk to Us",
    href: "#/contact",
    features: [
      "Larger page count or custom structure",
      "Online ordering or advanced lead flow support",
      "Custom content planning",
      "Professional photography add-on",
      "Tailored scope and rollout"
    ]
  }
];

export default function Pricing() {
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
      <main className="pricing-page">
        <section className="section pricing-hero" data-reveal>
          <div className="container">
            <div className="section-heading pricing-heading" data-reveal>
              <p className="eyebrow">Pricing</p>
              <h1>Website packages built for local businesses.</h1>
              <p className="lead">
                Clear starting points, straightforward scope, and room to scale
                when you need more than the basics.
              </p>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
                  data-reveal
                >
                  {plan.featured ? (
                    <div className="pricing-card__badge">Most Popular</div>
                  ) : null}
                  <div className="pricing-card__body">
                    <h3>{plan.name}</h3>
                    <p className="pricing-card__summary">{plan.summary}</p>
                    <div className="pricing-card__price">
                      <span className="pricing-card__amount">{plan.price}</span>
                      <span className="pricing-card__cadence">{plan.cadence}</span>
                    </div>
                    <div className="pricing-card__actions">
                      <a className="btn btn--primary" href={plan.href}>
                        {plan.cta}
                      </a>
                    </div>
                    <ul className="pricing-feature-list">
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-note" data-reveal>
          <div className="container pricing-note__inner">
            <div>
              <p className="eyebrow">Add-On</p>
              <h2>Professional photography is available as an add-on.</h2>
              <p className="body">
                If your current photos are holding the site back, we can arrange
                a shoot with our photographer and build the visual direction
                around those assets.
              </p>
            </div>
            <a className="btn btn--secondary" href="#/contact">
              Ask About Photography
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
