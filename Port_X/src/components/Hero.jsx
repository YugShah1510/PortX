import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">


      <h1>Templates that<br /><span className="gradient-text">look like you</span><br /><span className="gradient-text">hired</span> <span className="gradient-text-2">a developer.</span></h1>

      <p>
        Browse a curated set of premium portfolios. Drop in your own bio and
        projects to see them rendered live, then download the full source code —
        no email, no paywall, no nonsense.
      </p>

      <div className="buttons">
        <button className="hero-primary-btn">Browse Templates →</button>
        <button className="hero-secondary-btn">▶️ Try Live Preview</button>
      </div>

      <div className="features">
        <span>Instant ZIP download</span>
        <span>No signup required</span>
        <span>Production-ready code</span>
      </div>
    </section>
  );
};

export default Hero;