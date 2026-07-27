import { staticValue } from "../vars";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <section className="section hero" id="about">
            <div className="hero-grid reveal">
                <img className="hero-avatar" src={staticValue.avatarUrl} alt={staticValue.fullName} />
                <div>
                    <p className="eyebrow">{staticValue.role}</p>
                    <h1>{staticValue.fullName}</h1>
                    <p className="lede">{staticValue.summary}</p>

                    <div className="social-row">
                        {staticValue.socialMedia.map((val) => (
                            <Link key={val.name} to={val.url} target="_blank" rel="noreferrer" className="icon-link" aria-label={val.name}>
                                <img src={val.icon} alt="" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="fact-grid reveal">
                <div className="fact">
                    <p className="fact-label">Location</p>
                    <p className="fact-value">{staticValue.location}</p>
                </div>
                <div className="fact">
                    <p className="fact-label">Phone</p>
                    <a className="fact-value fact-action" href={`tel:${staticValue.phoneNumber}`}>
                        {staticValue.phoneNumberView}
                    </a>
                </div>
                <div className="fact">
                    <p className="fact-label">Email</p>
                    <a className="fact-value fact-action" href={`mailto:${staticValue.emailAddress}`}>
                        {staticValue.emailAddress}
                    </a>
                </div>
                <div className="fact">
                    <p className="fact-label">Experience</p>
                    <p className="fact-value">{staticValue.experience}</p>
                </div>
                <div className="fact">
                    <p className="fact-label">Freelance</p>
                    <p className="fact-value">{staticValue.freelanceAvailability ? "Available" : "Unavailable"}</p>
                </div>
                <div className="fact">
                    <p className="fact-label">Language</p>
                    <p className="fact-value">{staticValue.mainLanguage}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
