import React from "react";
import CustomizeComputerSvg from "../assets/images/svg/customize-computer.svg";
import PlanSvg from "../assets/images/svg/plan.svg";
import DatabaseSvg from "../assets/images/svg/database.svg";
import CloudGearSvg from "../assets/images/svg/cloud-gear-automation.svg";
import GalleryImg2 from "../assets/images/gallery/gallery-img2.jpg";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <>
            {/* <!-- ====================================== Section Services ===================================== --> */}
            <section className="Services-section" id="services">
                <div className="heading-container">
                    <h2 className="section-heading-text coding-skill-text fade_up">Services.</h2>
                    <div className="line"></div>
                </div>
                <h3 className="services-product-text fade_up">TRANSFORMING IDEAS INTO DIGITAL MASTERPIECES</h3>
                <p className="visoion-text fade_up">
                    Empowering your digital vision with expert web development, API solutions, seamless database design, and cutting-edge DevOps.
                </p>
                <div className="row services-row">
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
                        <Link>
                            <div className="services-img">
                                <img src={CustomizeComputerSvg} alt="web-development" />
                            </div>
                            <p className="services-text">Crafting Custom Websites</p>
                            <p className="molestie">
                                We transform your ideas into stunning, responsive websites. With a focus on intuitive design and exceptional user experience, we
                                create web solutions that are not only visually appealing but also function flawlessly across all devices.
                            </p>
                        </Link>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
                        <Link>
                            <div className="services-img services-img2">
                                <img src={PlanSvg} alt="restful-api" />
                            </div>
                            <p className="services-text services-text2">Seamless API Integrations</p>
                            <p className="molestie">
                                Building seamless digital bridges between applications and services. We design and develop robust, easy-to-integrate APIs that ensure
                                your data flows smoothly and securely across platforms.
                            </p>
                        </Link>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
                        <Link>
                            <div className="services-img services-img3">
                                <img src={DatabaseSvg} alt="database-design" />
                            </div>
                            <p className="services-text services-text3">Scalable Data Solutions</p>
                            <p className="molestie">
                                Great applications need a solid data foundation. We craft efficient, scalable, and secure databases that optimize data management and
                                are ready to support your business growth.
                            </p>
                        </Link>
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 services-column fade_up">
                        <Link>
                            <div className="services-img services-img4">
                                <img src={CloudGearSvg} alt="devops-solution" />
                            </div>
                            <p className="services-text services-text4">Efficient DevOps Practices</p>
                            <p className="molestie">
                                We seamlessly merge development and operations to enhance efficiency and speed. Our advanced DevOps solutions ensure your development
                                processes run smoother, faster, and more reliably.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Services End ===================================== --> */}
            {/* <!-- ====================================== Section Services Pop Up ===================================== --> */}
            <div id="services-popup" className="popup-container">
                <div className="popup-content popup-content2">
                    <Link to="#" className="close">
                        &times;
                    </Link>
                    <h2 className="simple-steps">UI/UX DESIGN</h2>
                    <img className="blog-popup-img1" src={GalleryImg2} alt="gallery-img8" />
                    <p className="blog-sit-text">
                        Just because we cant get out and about like we normally would, doesn’t mean we have to taking pictures. There’s still plenty you can do,
                        provided you are prepared to use some imagination. Here are a few ideas to keep you shooting until normal life resumes.
                    </p>
                    <p className="blog-sit-text">
                        Most photographers love to shoot the unusual, and you don’t get much more unusual than These Unprecedented Times. Right now everything counts
                        as out of the ordinary. There are a number of remarkable things about these lockdown days that are worth photographing now we can remember
                        them when it is all over.
                    </p>
                    <p className="blog-sit-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis
                        omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.
                    </p>
                    <h2 className="simple-steps services-popup-text">What Is Ui/Ux?</h2>
                    <p className="blog-sit-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis
                        omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non.
                    </p>
                    <p className="blog-sit-text">
                        treets empty that are usually busy are remarkable and can evoke the sense of historical pictures from before the invention of the motorcar.
                        Other things that are different at the moment will be queues to get into stores and the lines marked out on the floor to show how far apart
                        we should be.
                    </p>
                </div>
            </div>
            {/* <!-- ====================================== Services PopUp End ===================================== --> */}
        </>
    );
};
export default Services;
