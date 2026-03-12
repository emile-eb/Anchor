const benefits = [
  {
    title: "Built to Convert",
    desc: "Clear calls-to-action that guide customers to book or call.",
    metric: "3.2x",
    label: "Average inquiry lift"
  },
  {
    title: "Fast Loading Performance",
    desc: "Optimized builds for quick load times on every device.",
    metric: "1.1s",
    label: "Typical load time"
  },
  {
    title: "Easy to Manage",
    desc: "Streamlined layouts that make updates painless.",
    metric: "15m",
    label: "Update turnaround"
  }
];

export default function Results() {
  return (
    <section className="section results results--wave" data-reveal>
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Results</p>
          <h2>Performance That Feels Measurable.</h2>
        </div>
        <div className="results__grid">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="result-card" data-reveal>
              <div className="result-metric">
                <span className="metric-value">{benefit.metric}</span>
                <span className="metric-label">{benefit.label}</span>
              </div>
              <h3>{benefit.title}</h3>
              <p className="muted">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
