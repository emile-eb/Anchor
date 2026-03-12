import icon1 from "../assets/new icon 1.png";
import icon2 from "../assets/New icon 2 use this one.png";
import icon3 from "../assets/New Icon 3.png";
import icon4 from "../assets/new icon 4.png";
import icon5 from "../assets/New Icon 5.png";

const steps = [
  {
    title: "Discovery",
    desc: "We map your goals, audience, and conversion flow.",
    icon: icon1
  },
  {
    title: "Design",
    desc: "Premium layouts tailored to your brand and industry.",
    icon: icon2
  },
  {
    title: "Build",
    desc: "Fast, responsive development with clean structure.",
    icon: icon3
  },
  {
    title: "Launch",
    desc: "SEO-ready, analytics connected, and ready to scale.",
    icon: icon4
  },
  {
    title: "Support",
    desc: "Ongoing updates and performance care.",
    icon: icon5
  }
];

export default function Process() {
  return (
    <section className="section process section--divider" data-reveal>
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Our Process</p>
          <h2>Structured, Calm, and Built for Momentum.</h2>
        </div>
        <div className="process__timeline">
          {steps.map((step, index) => (
            <div key={step.title} className="process-step" data-reveal>
              <span className="step-number">0{index + 1}</span>
              <div className="process-step__content">
                <h3>{step.title}</h3>
                <p className="muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
