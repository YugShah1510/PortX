// src/components/Template.jsx

import "./Template.css";
import logo from "../assets/portx-logo.jpg";
import { Link } from "react-router-dom";

const templates = [
    {
        id: 1,
        title: "Minimalist Dev",
        tags: ["BEGINNER", "HTML/CSS"],
        rating: "4.9",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
        desc: "A clean, whitespace-heavy portfolio for full-stack engineers.",
        previewUrl: "https://cyberpunk-luxury-portfolio.vercel.app/",
    },

    {
        id: 2,
        title: "Terminal X",
        tags: ["ADVANCED", "REACT"],
        rating: "4.8",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
        desc: "Command-line inspired portfolio with hacker aesthetics.",
        previewUrl: "https://3000-98b0c760-481e-4c99-b8b1-387ec150bcbb.orchids.cloud/?_cb=1778085790002",
    },

    {
        id: 3,
        title: "Bento Grid Pro",
        tags: ["ADVANCED", "REACT"],
        rating: "4.9",
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
        desc: "Modern bento-box portfolio layout with beautiful showcases.",
        previewUrl: "https://3001-bbb0f790-8f63-44bd-bc78-3380c55c5997.orchids.cloud/?_cb=1778088036834",
    },

    {
        id: 4,
        title: "Cyberpunk UI",
        tags: ["ADVANCED", "REACT"],
        rating: "4.7",
        image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
        desc: "Neon-infused futuristic portfolio with smooth hover effects.",
    },

    {
        id: 5,
        title: "Academic Clean",
        tags: ["BEGINNER", "HTML/CSS"],
        rating: "4.6",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
        desc: "Perfect for CS students to showcase projects and research.",
    },

    {
        id: 6,
        title: "Monolith",
        tags: ["ADVANCED", "REACT"],
        rating: "5.0",
        image:
            "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1600&auto=format&fit=crop",
        desc: "Bold brutalist portfolio with oversized typography.",
    },
];

export default function Template() {
    return (
        <div className="app">


            <header className="header">
                <div className="header-overlay"></div>

                <div className="navbar">
                    <img src={logo} alt="logo" className="logo-img" />

                    <nav className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/templates">Templates</Link>
                        <Link to="/login">Log in</Link>
                    </nav>

                    <button className="preview-btn">Explore</button>
                </div>
            </header>



            <section className="hero-section">
                <h1>The <span>library.</span><br />Handpicked. Obsessed over.</h1>

                <button className="download-btn">Download All .ZIP</button>
            </section>



            <section className="filter-section">
                <div className="filters">
                    <button className="active">ALL</button>
                    <button>BEGINNER</button>
                    <button>ADVANCED</button>
                    <button>REACT-BASED</button>
                    <button>HTML/CSS</button>
                </div>

                <input type="text" placeholder="Search templates..." />
            </section>



            <section className="cards-grid">
                {templates.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.image} alt={item.title} />

                            <div className="card-top">
                                <div className="tags">
                                    {item.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="card-content">
                            <div className="title-rating">
                                <h2>{item.title}</h2>
                                <span>⭐ {item.rating}</span>
                            </div>

                            <p>{item.desc}</p>

                            <div className="card-buttons">
                                <button
                                    className="preview"
                                    onClick={() => item.previewUrl && window.open(item.previewUrl, "_blank")}
                                >
                                    Preview
                                </button>
                                <button className="zip">.ZIP</button>
                            </div>


                        </div>
                    </div>
                ))}
            </section>



            <footer className="footer">
                <div className="footer-left">
                    <img src={logo} alt="logo" className="footer-logo" />

                    <p>
                        Premium, hand-crafted portfolio templates for the next generation
                        of builders.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>EXPLORE</h4>
                    <a href="/">Templates</a>
                    <a href="/">Sign in</a>
                    <a href="/">Features</a>
                </div>

                <div className="footer-links">
                    <h4>COMMUNITY</h4>

                    <div className="socials">
                        <span>GitHub</span>
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}