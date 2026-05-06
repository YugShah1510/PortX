import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechBar from "../components/Techbar";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechBar />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />

    </div>
  );
};

export default Home;