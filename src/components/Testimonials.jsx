import localBusiness from "../assets/LocalBusiness.png";
import storeExample2 from "../assets/Store example 2.png";
import storeExample3 from "../assets/store example 3.png";

const testimonials = [
  {
    quote:
      "We finally look as good online as we do in person. The calls started coming in immediately.",
    type: "Mexican Restaurant",
    name: "Sofia M.",
    image: localBusiness
  },
  {
    quote:
      "The site is fast, clean, and customers actually read the service list now.",
    type: "Pizza Shop",
    name: "Andre B.",
    image: storeExample2
  },
  {
    quote:
      "Our bookings jumped after launch and the site is easy to keep updated.",
    type: "Ukrainian Restaurant",
    name: "Dr. Kim L.",
    image: storeExample3
  }
];

export default function Testimonials() {
  return (
    <section className="section testimonials section--divider" data-reveal>
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Client Stories</p>
          <h2>Businesses Feel the Difference.</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <div key={item.name} className="testimonial-card" data-reveal>
              {item.image ? (
                <div className="testimonial-photo">
                  <img
                    src={item.image}
                    alt="Client business interior"
                    className="testimonial-photo__image"
                  />
                </div>
              ) : (
                <div className="photo-placeholder testimonial-photo">
                  [PHOTO PLACEHOLDER: Client Business Interior]
                </div>
              )}
              <p className="quote">“{item.quote}”</p>
              <div className="testimonial-meta">
                <span className="muted">{item.type}</span>
                <span className="name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
