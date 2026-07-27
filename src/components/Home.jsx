import { useState } from "react";
import AboutSection from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Contact from "./Contact";
import { staticValue } from "../vars";

const NAV_ITEMS = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    ...(staticValue.freelanceAvailability ? [{ id: "services", label: "Services" }] : []),
    { id: "contact", label: "Contact" },
];

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (event, id) => {
        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <>
            <header className="site-nav">
                <a href="#about" className="brand" onClick={(e) => handleNavClick(e, "about")}>
                    <span>.{staticValue.nick}</span>
                </a>

                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {NAV_ITEMS.map((item) => (
                        <a key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}>
                            {item.label}
                        </a>
                    ))}
                    <a href={staticValue.cvUrl} target="_blank" rel="noreferrer" className="btn-cta nav-cv">
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path
                                d="M10 2.5v9.17m0 0 3.33-3.34M10 11.67 6.67 8.33M4.17 14.17v1.66c0 .92.75 1.67 1.66 1.67h8.34c.92 0 1.66-.75 1.66-1.67v-1.66"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Download
                    </a>
                </nav>

                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </header>

            <main>
                <AboutSection />
                <Resume />
                <Services />
                <Contact />
            </main>
        </>
    );
};

export default Home;
