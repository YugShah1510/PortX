import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-box">
        
        <h2>
          Your next portfolio is{" "}
          <span className="gradient-text">one click away.</span>
        </h2>

        <p>
          Pick a template, drop in your details, and download the source. Free forever.
        </p>

        <Link to="/templates">
          <button className="cta-btn">
            Browse Templates →
          </button>
        </Link>

      </div>
    </section>
  );
};

export default CTA;