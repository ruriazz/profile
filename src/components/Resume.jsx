import PythonImg from "../assets/images/python.png";
import DjangoImg from "../assets/images/django.png";
import GoImg from "../assets/images/go.png";
import JavascriptImg from "../assets/images/javascript.png";
import DockerImg from "../assets/images/docker.png";
import { staticValue } from "../vars";

const Resume = () => {
    return (
        <>
            {/* <!-- ====================================== Section Education Experience ===================================== --> */}
            <section className="education-experience" id="resume">
                <div className="row">
                    <div className="col-xxl-6 col-lg-6">
                        <div className="heading-container">
                            <h2 className="section-heading-text about-me fade_up">Education.</h2>
                            <div className="line"></div>
                        </div>
                        {staticValue.educations.map((val, i) => (
                            <div className="education position-relative fade_up">
                                <div className="side_circle_ring">
                                    <div className="small_yellow_border">
                                        <div className="small_yellow_circle"></div>
                                    </div>
                                </div>
                                <div className="small_yellow_border_main">
                                    <p className="bachelor">{val.title}</p>
                                    <p className="cursus university">{val.university}</p>
                                    <p className="cursus">{val.period}</p>
                                    <p className="cursus">{val.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-xxl-6 col-lg-6">
                        <div className="heading-container">
                            <h2 className="section-heading-text about-me fade_up">Experience.</h2>
                            <div className="line"></div>
                        </div>
                        {staticValue.experiences.map((val, i) => (
                            <div className="education position-relative fade_up">
                                <div className="side_circle_ring">
                                    <div className="small_yellow_border">
                                        <div className="small_yellow_circle"></div>
                                    </div>
                                </div>
                                <div className="small_yellow_border_main">
                                    <p className="bachelor">{val.position}</p>
                                    <p className="cursus university">
                                        {val.company}
                                        <br />
                                        {val.location}
                                    </p>
                                    <p className="cursus">{val.period}</p>
                                    <p className="cursus">{val.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Education Experience End ===================================== --> */}

            {/* <!-- ====================================== Section Design Skill ===================================== --> */}
            <section className="design-skill-section">
                <div className="heading-container">
                    <h2 className="section-heading-text coding-skill-text fade_up">Skills & Technologies.</h2>
                    <div className="line"></div>
                </div>
                <div className="design-skill-sub-section">
                    <div className="design-skills-img-main photoshop flip_up python">
                        <img src={PythonImg} alt="python-img" />
                        <div className="skill-counter-main">
                            <p>85%</p>
                            <p className="python">Python</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main photoshop flip_up django">
                        <img src={DjangoImg} alt="django-img" />
                        <div className="skill-counter-main">
                            <p>80%</p>
                            <p className="django">Django</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main photoshop flip_up go">
                        <img src={GoImg} alt="go-img" />
                        <div className="skill-counter-main">
                            <p>75%</p>
                            <p className="go">Go</p>
                        </div>
                    </div>

                    <div className="design-skills-img-main photoshop flip_up js">
                        <img src={JavascriptImg} alt="javascript-img" />
                        <div className="skill-counter-main">
                            <p>85%</p>
                            <p className="js">JavaScript</p>
                        </div>
                    </div>
                    <div className="design-skills-img-main photoshop flip_up docker">
                        <img src={DockerImg} alt="docker-img" />
                        <div className="skill-counter-main">
                            <p>90%</p>
                            <p className="docker">Docker</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
        </>
    );
};
export default Resume;
