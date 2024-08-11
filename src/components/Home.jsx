import React, { useEffect, useState } from "react";
import ProfileImg from "../assets/images/profile.jpg";
import AboutSvg from "../assets/images/svg/about-svg.svg";
import ResumeSvg from "../assets/images/svg/resume-svg.svg";
import ServicesSvg from "../assets/images/svg/services-svg.svg";
import ContactSvg from "../assets/images/svg/contact-svg.svg";
import AboutSection from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Contact from "./Contact";
import $ from "jquery";
import CV from "../assets/pdf/Aziz Ruri Suparman.pdf";
import { Link } from "react-router-dom";
import { staticValue } from "../vars";

const Home = () => {
    //Text
    const firstTexts = ["Back-End Engineer"];
    const secondTexts = ["Back-End Engineer"];
    const intervalTime = 600;

    const [firstTextIndex, setFirstTextIndex] = useState(0);
    const [secondTextIndex, setSecondTextIndex] = useState(0);

    useEffect(() => {
        const firstTextTimeout = setTimeout(() => {
            setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
        }, intervalTime * 3);

        return () => clearTimeout(firstTextTimeout);
    }, [firstTextIndex, firstTexts.length]);

    useEffect(() => {
        const secondTextTimeout = setTimeout(() => {
            setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
        }, intervalTime * 3);

        return () => clearTimeout(secondTextTimeout);
    }, [secondTextIndex, secondTexts.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFirstTextIndex((prevIndex) => (prevIndex + 1) % firstTexts.length);
            setSecondTextIndex((prevIndex) => (prevIndex + 1) % secondTexts.length);
        }, intervalTime * 7);

        return () => clearInterval(interval);
    });

    // Logo marquee
    useEffect(() => {
        document.querySelectorAll(".logos").forEach(function (logosContainer) {
            const copy = logosContainer.querySelector(".logos-slide").cloneNode(true);
            logosContainer.appendChild(copy);
        });
    }, []);

    // Toggle Btn
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const menuToggle = document.getElementById("menu-toggle");
        const sideMenu = document.querySelector(".side-menu");
        const menuItems = document.querySelectorAll(".menu-list-main li");

        const handleMenuToggle = () => {
            setMenuOpen(!menuOpen);
            menuToggle.classList.toggle("open");
            sideMenu.classList.toggle("show");
        };

        const handleMenuItemClick = (event) => {
            event.preventDefault();
            const linkElement = event.currentTarget.querySelector("a");
            if (linkElement) {
                const targetId = linkElement.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
                setMenuOpen(false);
                menuToggle.classList.remove("open");
                sideMenu.classList.remove("show");
            }
        };

        if (menuToggle && sideMenu && menuItems.length > 0) {
            menuToggle.addEventListener("click", handleMenuToggle);
            menuItems.forEach((item) => {
                item.addEventListener("click", handleMenuItemClick);
            });

            $(".hamburger").click(function () {
                $(this).toggleClass("is-active");
            });

            return () => {
                menuToggle.removeEventListener("click", handleMenuToggle);
                menuItems.forEach((item) => {
                    item.removeEventListener("click", handleMenuItemClick);
                });
            };
        }
    }, [menuOpen]);

    const [activeLink, setActiveLink] = useState("");

    const handleClick = (event, id) => {
        event.preventDefault();
        setActiveLink(id);
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <button id="menu-toggle" className="menu-toggle-button">
                <span className="hamburger" id="hamburger-1">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
            </button>
            {/* <!-- ====================================== Side Menu ===================================== --> */}
            <div className="side-menu">
                <div className="profile-img-main">
                    <img className="zoom_in" src={ProfileImg} alt="profile-img" />
                    <h1 className="fade_up">
                        {staticValue.firstName}{" "}
                        <span>
                            {staticValue.middleName} {staticValue.lastName}
                        </span>
                    </h1>
                    <h2 className="designer fade_up">{firstTexts[firstTextIndex]}</h2>
                    <div className="profile-media-icons-main fade_up">
                        {staticValue.socialMedia.map((val, i) => (
                            <Link to={val.url} className="profile-media-icons" target="_blank">
                                <img src={val.icon} alt="socmed-svg" />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="menu-list-main">
                    <ul>
                        <li className={`active-menu-action ${activeLink === "about" ? "active" : ""}`}>
                            <a className="fade_right" href="#about" onClick={(e) => handleClick(e, "about")}>
                                <img src={AboutSvg} alt="home-svg" />
                                About
                            </a>
                        </li>
                        <li className={`active-menu-action ${activeLink === "resume" ? "active" : ""}`}>
                            <a className="fade_right" href="#resume" onClick={(e) => handleClick(e, "resume")}>
                                <img src={ResumeSvg} alt="home-svg" />
                                Resume
                            </a>
                        </li>
                        <li className={`active-menu-action ${activeLink === "services" ? "active" : ""}`}>
                            <a className="fade_right" href="#services" onClick={(e) => handleClick(e, "services")}>
                                <img src={ServicesSvg} alt="home-svg" />
                                Services
                            </a>
                        </li>
                        <li className={`active-menu-action ${activeLink === "contact" ? "active" : ""}`} id="contact-line">
                            <a className="fade_right" href="#contact" onClick={(e) => handleClick(e, "contact")}>
                                <img src={ContactSvg} alt="home-svg" />
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div id="wrap">
                        <Link to={CV} rel="noreferrer" target="_blank" className="btn-slide">
                            <span className="circle">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        className="download-svg"
                                        d="M13 12H16L12 16L8 12H11V8H13V12ZM15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            <span className="title">Download CV</span>
                            <span className="title-hover">Click Here</span>
                        </Link>{" "}
                    </div>
                </div>
            </div>

            {/* <!-- ====================================== Side Menu End ===================================== --> */}
            <div className="main-containe" data-bs-spy="scroll">
                <AboutSection />
                <Resume />
                <Services />
                <Contact />
            </div>
        </>
    );
};
export default Home;
