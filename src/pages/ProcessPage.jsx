import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import QuoteButton from "../components/QuoteButton.jsx";
import icon1 from "../assets/new icon 1.png";
import icon2 from "../assets/New icon 2 use this one.png";
import icon3 from "../assets/New Icon 3.png";
import icon4 from "../assets/new icon 4.png";
import icon5 from "../assets/New Icon 5.png";

const steps = [
  {
    title: "Discovery",
    desc: "We map your goals, audience, and conversion flow before design starts.",
    detail:
      "This stage is about clarity. We look at what your business needs to communicate, what customers need to find quickly, and what the site should push them to do next.",
    icon: icon1
  },
  {
    title: "Design",
    desc: "We shape the layout, tone, and page flow around your business type.",
    detail:
      "The goal is a site that feels custom and credible, not generic. We focus on hierarchy, clear information, and a presentation that fits how local customers actually browse.",
    icon: icon2
  },
  {
    title: "Build",
    desc: "We turn approved direction into a fast, responsive website.",
    detail:
      "Pages are built to work cleanly across desktop and mobile, with a structure that supports speed, usability, and easy navigation.",
    icon: icon3
  },
  {
    title: "Launch",
    desc: "We connect the final details and get the site ready for real traffic.",
    detail:
      "That includes SEO basics, contact or ordering links, location details, and the practical information your customers are expecting to see.",
    icon: icon4
  },
  {
    title: "Support",
    desc: "We stay available for updates, refinements, and next-step improvements.",
    detail:
      "Once the site is live, we can help keep it current, improve weak spots, and support future additions as the business grows.",
    icon: icon5
  }
];

export default function ProcessPage() {
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
      <main className="process-page">
        <section className="section process-hero" data-reveal>
          <div className="container process-hero__grid">
            <div data-reveal>
              <p className="eyebrow">Process</p>
              <h1>A clear process from first conversation to launch.</h1>
              <p className="lead">
                The work is structured to stay simple: define the direction,
                design the right pages, build them cleanly, and launch without
                unnecessary friction.
              </p>
            </div>
            <aside className="process-page__summary" data-reveal>
              <p className="eyebrow">How We Work</p>
              <h3>Calm, direct, and built around momentum.</h3>
              <p className="body">
                Each phase has a clear purpose so you always know what is
                happening, what is needed from you, and what comes next.
              </p>
            </aside>
          </div>
        </section>

        <section className="section section--divider process-page__section" data-reveal>
          <div className="container process-page__steps">
            {steps.map((step, index) => (
              <article key={step.title} className="process-page__card" data-reveal>
                <div className="process-page__card-top">
                  <span className="step-number">0{index + 1}</span>
                  <div className="process-page__icon">
                    <img src={step.icon} alt="" />
                  </div>
                </div>
                <h2>{step.title}</h2>
                <p className="body">{step.desc}</p>
                <p className="muted">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section final-cta" data-reveal>
          <div className="container final-cta__inner">
            <div>
              <h2>Want to start with the first step?</h2>
              <p className="muted">Reach out and we can map your project from there.</p>
            </div>
            <QuoteButton />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
