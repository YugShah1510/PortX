import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo.jpeg"; // 👈 import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/templates">Templates</Link>
        <Link to="/login">Log in</Link>
      </div>

      <Link to="/templates">
        <button className="preview-btn">Explore</button>
      </Link>
    </nav>
  );
};

export default Navbar;