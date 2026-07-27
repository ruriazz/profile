import { staticValue } from "../vars";

const Services = () => {
    if (!staticValue.freelanceAvailability) return null;

    return (
        <section className="section" id="services">
            <div className="section-heading reveal">
                <h2>Services</h2>
                <p className="section-sub">Open to freelance and contract work in these areas.</p>
            </div>
            <div className="services-grid reveal">
                {staticValue.services.map((service) => (
                    <div className="service-card" key={service.title}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Services;
