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
        <a href="#">Home</a>
        <a href="#">Templates</a>
        <Link to="/login">Log in</Link>
      </div>

      <button className="preview-btn">Try Preview</button>
    </nav>
  );
};

export default Navbar;