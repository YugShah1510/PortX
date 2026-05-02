import "./Navbar.css";
import logo from "../assets/logo.jpeg"; // 👈 import

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Templates</a>
        <a href="#">Log in</a>
      </div>

      <button className="preview-btn">Try Preview</button>
    </nav>
  );
};

export default Navbar;