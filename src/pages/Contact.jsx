import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const initialForm = {
  name: "",
  email: "",
  business: "",
  phone: "",
  details: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="page">
      <Navbar />
      <main className="contact-page">
        <section className="section contact-hero" data-reveal>
          <div className="container contact-hero__grid">
            <div data-reveal>
              <p className="eyebrow">Contact</p>
              <h1>Tell us about your business and what you need.</h1>
              <p className="lead">
                Send over the basics and we will point you toward the fastest
                next step for your site.
              </p>
              <div className="contact-hero__details">
                <a className="contact-pill" href="tel:9173181186">
                  Call (917) 318-1186
                </a>
                <a
                  className="contact-pill contact-pill--light"
                  href="mailto:Ebasse3@gmail.com"
                >
                  Email Ebasse3@gmail.com
                </a>
              </div>
            </div>
            <aside className="contact-card" data-reveal>
              <p className="eyebrow">What to Expect</p>
              <ul className="contact-card__list">
                <li>Clear reply path by phone or email</li>
                <li>Quick review of your current site or idea</li>
                <li>Recommendation based on your business type</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section section--divider contact-section" data-reveal>
          <div className="container contact-section__grid">
            <div className="contact-form-wrap" data-reveal>
              <p className="eyebrow">Contact Form</p>
              <h2>Start the conversation.</h2>
              <form
                className="contact-form"
                action="https://formsubmit.co/Ebasse3@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Anchor Studio inquiry"
                />
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </label>
                <label className="field">
                  <span>Business</span>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Business name"
                  />
                </label>
                <label className="field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 555-5555"
                  />
                </label>
                <label className="field field--full">
                  <span>Project details</span>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows="7"
                    placeholder="Tell us what kind of website you need, what is not working now, and any timeline."
                    required
                  />
                </label>
                <button className="btn btn--primary" type="submit">
                  Send Inquiry
                </button>
              </form>
            </div>

            <div className="contact-sidebar" data-reveal>
              <div className="contact-sidebar__card">
                <h3>Direct contact</h3>
                <p className="body">
                  Prefer not to fill out the form? Reach out directly and we can
                  keep it simple.
                </p>
                <div className="contact-links">
                  <a href="tel:9173181186">(917) 318-1186</a>
                  <a href="mailto:Ebasse3@gmail.com">Ebasse3@gmail.com</a>
                </div>
              </div>
              <div className="contact-sidebar__card contact-sidebar__card--muted">
                <h3>Good to include</h3>
                <ul className="contact-card__list">
                  <li>Your business type</li>
                  <li>Whether you already have a website</li>
                  <li>Any booking, menu, or lead-gen needs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
