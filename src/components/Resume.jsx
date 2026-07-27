import { staticValue } from "../vars";

const Resume = () => {
    return (
        <>
            <section className="section" id="experience">
                <div className="section-heading reveal">
                    <h2>Experience</h2>
                </div>
                <div className="timeline reveal">
                    {staticValue.experiences.map((exp, i) => (
                        <div className="timeline-item" key={i}>
                            <div className="timeline-marker" />
                            <div className="timeline-body">
                                <div className="timeline-head">
                                    <h3>{exp.position}</h3>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <p className="company">
                                    {exp.company} · {exp.location}
                                </p>
                                <ul className="highlights">
                                    {exp.highlights.map((h, j) => (
                                        <li key={j}>{h}</li>
                                    ))}
                                </ul>
                                <p className="stack">{exp.stack}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" id="skills">
                <div className="section-heading reveal">
                    <h2>Skills & Technologies</h2>
                </div>
                <div className="skill-groups reveal">
                    {staticValue.skillGroups.map((group) => (
                        <div className="skill-group" key={group.title}>
                            <p className="skill-group-title">{group.title}</p>
                            <div className="skill-pills">
                                {group.skills.map((skill) => (
                                    <span className="skill-pill" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
export default Resume;
