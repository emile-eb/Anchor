import heroMockup from "../assets/Best Hero Mockup.png";
import QuoteButton from "./QuoteButton.jsx";

export default function Hero() {
  return (
    <section className="section hero" data-reveal>
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <p className="eyebrow">Web Design Agency for Local Business</p>
          <h1>Websites That Bring More Customers Through Your Door.</h1>
          <p className="lead">
            We design fast, modern websites built specifically for restaurants and
            local businesses that want to look professional and attract more
            customers.
          </p>
          <div className="hero__actions">
            <QuoteButton />
            <a className="btn btn--secondary" href="#/services">
              View Services
            </a>
          </div>
        </div>
        <div className="hero__media" data-reveal>
          <div className="mockup-stack">
            <div className="mockup mockup--desktop">
              <img
                src={heroMockup}
                alt="Restaurant website mockup"
                className="mockup__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
