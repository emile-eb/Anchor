import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import TrustStrip from "../components/TrustStrip.jsx";
import ProblemSolution from "../components/ProblemSolution.jsx";
import Process from "../components/Process.jsx";
import Results from "../components/Results.jsx";
import About from "../components/About.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FinalCta from "../components/FinalCta.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
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
      <main>
        <Hero />
        <TrustStrip />
        <div id="services">
          <ProblemSolution />
        </div>
        <Results />
        <div id="process">
          <Process />
        </div>
        <About />
        <Testimonials />
        <div id="pricing">
          <FinalCta />
        </div>
      </main>
      <Footer />
    </div>
  );
}
