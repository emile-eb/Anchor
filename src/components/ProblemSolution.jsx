const pains = [
  "Outdated website",
  "Hard to update menus or services",
  "Slow loading pages",
  "Customers cannot find you online"
];

export default function ProblemSolution() {
  return (
    <section className="section split" data-reveal>
      <div className="container split__grid">
        <div className="split__left" data-reveal>
          <p className="eyebrow">Common Pain Points</p>
          <ul className="pain-list">
            {pains.map((pain, index) => (
              <li key={pain} className="pain-item">
                <span className="icon-placeholder">{index + 1}</span>
                <span>{pain}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="split__right" data-reveal>
          <h2>We Fix What’s Costing You Customers.</h2>
          <p className="body">
            We rebuild local business websites with a focus on speed, clarity,
            and trust. Every page is designed to help customers find you fast and
            take action.
          </p>
        </div>
      </div>
    </section>
  );
}
