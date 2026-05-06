import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      
      <p className="tag">// LOVED BY MAKERS</p>

      <h2>
        What people are shipping with <br /> PortX.
      </h2>

      <div className="cards">


        <div className="card">
          <span className="quote">❝</span>
          <p>
            I shipped my portfolio in under an hour. The personalize-and-render flow is genuinely magic — it feels like the template was built for me.
          </p>

          <div className="user">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" alt="Marcus T." />
            <div>
              <h4>Marcus T.</h4>
              <span>Senior Engineer @ Stripe</span>
            </div>
          </div>
        </div>


        <div className="card">
          <span className="quote">❝</span>
          <p>
            Cleanest portfolio templates I’ve seen this year. No bloat, no weird gradients, just thoughtful design that lets the work breathe.
          </p>

          <div className="user">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop" alt="Sarah K." />
            <div>
              <h4>Sarah K.</h4>
              <span>Product Designer</span>
            </div>
          </div>
        </div>


        <div className="card">
          <span className="quote">❝</span>
          <p>
            Downloaded the source, deployed to Vercel, customized in 20 minutes. PortX did in an afternoon what others charge subscriptions for.
          </p>

          <div className="user">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop" alt="David L." />
            <div>
              <h4>David L.</h4>
              <span>Indie Photographer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;