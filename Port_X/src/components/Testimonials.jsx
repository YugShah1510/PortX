import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      
      <p className="tag">// LOVED BY MAKERS</p>

      <h2>
        What people are shipping with <br /> PortX.
      </h2>

      <div className="cards">

        {/* Card 1 */}
        <div className="card">
          <span className="quote">❝</span>
          <p>
            I shipped my portfolio in under an hour. The personalize-and-render flow is genuinely magic — it feels like the template was built for me.
          </p>

          <div className="user">
            <img src="/avatar1.jpg" alt="" />
            <div>
              <h4>Marcus T.</h4>
              <span>Senior Engineer @ Stripe</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <span className="quote">❝</span>
          <p>
            Cleanest portfolio templates I’ve seen this year. No bloat, no weird gradients, just thoughtful design that lets the work breathe.
          </p>

          <div className="user">
            <img src="/avatar2.jpg" alt="" />
            <div>
              <h4>Sarah K.</h4>
              <span>Product Designer</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <span className="quote">❝</span>
          <p>
            Downloaded the source, deployed to Vercel, customized in 20 minutes. PortX did in an afternoon what others charge subscriptions for.
          </p>

          <div className="user">
            <img src="/avatar3.jpg" alt="" />
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