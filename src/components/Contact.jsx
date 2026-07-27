import { staticValue } from "../vars";

const Contact = () => {
    return (
        <section className="section" id="contact">
            <div className="section-heading reveal">
                <h2>Get In Touch</h2>
                <p className="section-sub">Reach out directly — happy to talk about roles, projects, or freelance work.</p>
            </div>
            <div className="contact-grid reveal">
                <a className="contact-card" href={`mailto:${staticValue.emailAddress}`}>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">{staticValue.emailAddress}</p>
                </a>
                <a className="contact-card" href={`tel:${staticValue.phoneNumber}`}>
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">{staticValue.phoneNumberView}</p>
                </a>
                {staticValue.socialMedia.map((val) => (
                    <a className="contact-card" key={val.name} href={val.url} target="_blank" rel="noreferrer">
                        <p className="contact-label">{val.name}</p>
                        <p className="contact-value">{val.url.replace(/^https?:\/\//, "")}</p>
                    </a>
                ))}
            </div>

            <footer className="footer">
                © {new Date().getFullYear()} {staticValue.nick}. All rights reserved.
            </footer>
        </section>
    );
};
export default Contact;
