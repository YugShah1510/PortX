import "./Features.css";
import codeLogo from "../assets/code.png";
import codeLogo1 from "../assets/built.png";
import codeLogo2 from "../assets/customize.png";
import codeLogo3 from "../assets/infinite.png";
import codeLogo4 from "../assets/lightnings.png";
import codeLogo5 from "../assets/rockets.png";

const features = [
  {
    title: "Production-grade code",
    desc: "Hand-crafted, comment-heavy components you can actually read. No obfuscated bundlers, no surprises.",
    logo: codeLogo,
  },
  {
    title: "Deploy in 60 seconds",
    desc: "Drop on Vercel, Netlify, or GitHub Pages. Zero backend required, zero config files to tweak.",
    logo: codeLogo5,
  },
  {
    title: "Built for developers",
    desc: "Designed with CS students & engineers in mind — project cards, stack badges, GitHub embeds.",
    logo: codeLogo1,
  },
  {
    title: "Customize everything",
    desc: "CSS variables + Tailwind tokens. Rebrand in minutes, not weeks.",
    logo:codeLogo2,
  },
  {
    title: "Lightning fast",
    desc: "Static by default. Sub-second time-to-interactive, perfect Lighthouse scores out of the box.",
    logo:codeLogo4,
  },
  {
    title: "Forever yours",
    desc: "Pay once, own the source. No subscription. No strings. No watermark.",
    logo:codeLogo3,
  },
];

const Features = () => {
  return (
    <section className="features-section">

      <div className="features-top">
        <h2 className="features-heading">
          Six reasons this doesn’t feel like <br />
          another <span>template shop.</span>
        </h2>

        <p className="features-subtext">
          Every template is hand-reviewed, lighthouse-optimized, and ships with
          thoughtful defaults so you can stop fiddling and start shipping.
        </p>
      </div>


      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
  <span className="feature-number">
    {String(index + 1).padStart(2, "0")}
  </span>


  {item.logo && (
    <img src={item.logo} alt="logo" className="feature-logo" />
  )}


  <h3>{item.title}</h3>
  <p>{item.desc}</p>
</div>

          
        ))}
      </div>
    </section>
  );
};

export default Features;