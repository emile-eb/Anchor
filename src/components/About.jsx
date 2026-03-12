import aboutImage from "../assets/founder photo.jpg";

export default function About() {
  return (
    <section className="section about" data-reveal>
      <div className="container about__grid">
        <div className="about__image" data-reveal>
          <div className="about-photo">
            <img
              src={aboutImage}
              alt="Founder portrait"
              className="about-photo__image"
            />
          </div>
          <p className="about-caption">
            Co-Founder and Sales Manager ~ Thomas L. Meyer
          </p>
        </div>
        <div className="about__content" data-reveal>
          <p className="eyebrow">About the Studio</p>
          <h2>Local Business Websites Built With Real-World Flow in Mind.</h2>
          <p className="body">
            We focus exclusively on physical businesses because we understand the
            day-to-day realities: busy staff, walk-in traffic, and customers who
            need clear answers fast. Our job is to make your website feel as
            welcoming and professional as your storefront.
          </p>
          <p className="body">
            Every layout is structured to build trust, highlight your services,
            and help customers take the next step without friction.
          </p>
        </div>
      </div>
    </section>
  );
}
