const projects = [
  {
    name: "El Camino Cantina",
    industry: "Mexican Restaurant",
    result: "+38% online reservations"
  },
  {
    name: "Northside Barbers",
    industry: "Barbershop",
    result: "+52% booking requests"
  },
  {
    name: "Riverside Dental",
    industry: "Clinic",
    result: "+41% new patient calls"
  },
  {
    name: "Oak & Steam",
    industry: "Cafe",
    result: "+29% catering inquiries"
  },
  {
    name: "Summit Contractors",
    industry: "Contractor",
    result: "+33% quote submissions"
  },
  {
    name: "Willow Spa",
    industry: "Wellness Studio",
    result: "+46% appointment bookings"
  }
];

export default function PortfolioGrid() {
  return (
    <section className="section portfolio section--band" data-reveal>
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Selected Work</p>
          <h2>Real Local Businesses. Real Results.</h2>
        </div>
        <div className="portfolio__grid">
          {projects.map((project) => (
            <div key={project.name} className="portfolio-card" data-reveal>
              <div className="photo-placeholder portfolio-card__image">
                [PHOTO PLACEHOLDER: {project.industry} Website]
              </div>
              <div className="portfolio-card__body">
                <div>
                  <h3>{project.name}</h3>
                  <p className="muted">{project.industry}</p>
                </div>
                <p className="result">{project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
