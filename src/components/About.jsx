import React, { useEffect } from "react";
import { staticValue } from "../vars";

const AboutSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(
            ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
        );
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const callOnclickHandle = () => window.open(`tel:${staticValue.phoneNumber}`);
    const sendEmailOnCLickHandle = () => window.open(`mailto:${staticValue.emailAddress}`);

    return (
        <>
            {/* <!-- ====================================== Section About ===================================== --> */}
            <section className="About-section jos" id="about">
                <div className="heading-container">
                    <h2 className="section-heading-text about-me fade_up">About Me.</h2>
                    <div className="line"></div>
                </div>
                <p className="section-sub-text about-sub-text zoom_in">
                    As a Backend Software Engineer, I bring expertise in designing and developing scalable and efficient backend systems. My background includes
                    proficient database management, performance optimization, and seamless API integration to ensure optimal application functionality. I am
                    dedicated to tackling technical challenges and continually enhancing software architecture, delivering robust solutions that meet both user and
                    business requirements.
                </p>
                <div className="about-detail-main">
                    <p className="about-detail">Name</p>
                    <p className="about-detail-info">{staticValue.fullName}</p>
                </div>
                <div className="about-detail-main">
                    <p className="about-detail">Nationality</p>
                    <p className="about-detail-info">{staticValue.nationality}</p>
                </div>
                <div className="about-detail-main">
                    <p className="about-detail">Phone</p>
                    <p className="about-detail-info email" onClick={callOnclickHandle}>
                        {staticValue.phoneNumberView}
                    </p>
                </div>
                <div className="about-detail-main">
                    <p className="about-detail">Email</p>
                    <p className="about-detail-info email" onClick={sendEmailOnCLickHandle}>
                        {staticValue.emailAddress}
                    </p>
                </div>
                <div className="about-detail-main">
                    <p className="about-detail">Experience</p>
                    <p className="about-detail-info">{staticValue.experience}</p>
                </div>
                <div className="about-detail-main">
                    <p className="about-detail">Freelance</p>
                    <p className="about-detail-info">{staticValue.freelanceAvailability ? "Available" : "Unavailable"}</p>
                </div>
                <div className="about-detail-main">
                    <p className="about-detail">Primary Language</p>
                    <p className="about-detail-info">{staticValue.mainLanguage}</p>
                </div>
            </section>
            {/* <!-- ====================================== Section About End ===================================== --> */}
        </>
    );
};
export default AboutSection;
