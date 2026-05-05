import "./Footer.css";
import logo from "../assets/github_logo.png";
import logo1 from "../assets/threads_white.png";
import logo2 from "../assets/linkedin.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={logo} alt="logo" />
                        <span>PortX</span>
                    </div>

                    <p>
                        Premium portfolio templates built for makers. Browse,
                        preview with your own data, and download production-
                        ready source code in one click.
                    </p>
                </div>

                {/* CENTER */}
                <div className="footer-links">
                    <h4>PRODUCT</h4>
                    <a href="#">Templates</a>
                    <a href="#">Categories</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>

                <div className="footer-social">
                    <h4>CONNECT</h4>
                    <div className="icons">
                        <div className="icon">
                            <img src={logo} alt="github" />
                        </div>
                        <div className="icon">
                            <img src={logo1} alt="linkedin" />
                        </div>
                        <div className="icon">
                            <img src={logo2} alt="threads" />
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;