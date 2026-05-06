import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Logo.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* optional: make logo clickable */}
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>           {/* ✅ FIXED */}
        <Link to="/templates">Templates</Link> {/* optional */}
        <Link to="/login">Log in</Link>
      </div>

      <button className="preview-btn">Try Preview</button>
    </nav>
  );
};

export default Navbar;