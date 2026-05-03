import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechBar from "../components/Techbar";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechBar /> 
      <Features/>
      
    </div>
  );
};

export default Home;