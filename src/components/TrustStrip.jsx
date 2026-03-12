const categories = ["Restaurants", "Barbershops", "Cafes", "Clinics", "Contractors"];

export default function TrustStrip() {
  return (
    <section className="trust-strip" data-reveal>
      <div className="container trust-strip__inner">
        <span className="trust-strip__text">
          Built specifically for restaurants and local service businesses.
        </span>
        <div className="trust-strip__labels">
          {categories.map((item) => (
            <span key={item} className="trust-label">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
