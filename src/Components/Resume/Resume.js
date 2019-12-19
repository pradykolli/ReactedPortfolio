import React from 'react'
import { Row, Col } from 'reactstrap'
import StarKit from './StarKit/StarKit'
import logo from '../../Assets/Images/logo2.jpg'
import "./Resume.css"
function Resume() {
    return (
        <div>
            <Row>
                {/* Code for the left article part */}
                <Col md="4" className="leftCol">
                    <div className="backgroundLayer"></div>
                    <div className="overlayLayer">
                        <div className="imageSection">
                            <div className="imageWrapper">
                                <img src={logo} alt="Pradeep Kolli" />
                            </div>
                            <h1 className="nameTitle">Pradeep Kolli</h1>
                            <p className="description">Front-End Developer</p>
                        </div>
                        <div className="careerGoalSection">
                            <h3 className="nameTitle">Career Goals</h3>
                            <p className="description">"Create applications and websites with the user in mind,
                            building it with a usable and intuitive user interface experience.
                            Continually striving to learn new technologies and look for ways to better myself in this rapidly changing industry."</p>
                        </div>
                        <div className="careerGoalSection">
                            <h3 className="nameTitle">Core Strengths</h3>
                            <ul className="description">
                                <li>
                                    <p className="text-left">HTML5</p> 
                                    <p className="text-right"><StarKit number="5" /></p>
                                </li>
                                <li>
                                    <p className="text-left">CSS3</p> 
                                    <p className="text-right"><StarKit number="4" /></p>
                                </li>
                                <li>
                                    <p className="text-left">Bootstrap</p> 
                                    <p className="text-right"><StarKit number="5" /></p>
                                </li>
                                <li>
                                    <p className="text-left">React</p> 
                                    <p className="text-right"><StarKit number="3" /></p>
                                </li>
                                <li>
                                    <p className="text-left">Angular</p> 
                                    <p className="text-right"><StarKit number="3" /></p>
                                </li>
                                <li>
                                    <p className="text-left">Javascript</p> 
                                    <p className="text-right"><StarKit number="4" /></p>
                                </li>
                                <li>
                                    <p className="text-left">JQuery</p> 
                                    <p className="text-right"><StarKit number="4" /></p>
                                </li>
                            </ul>
                        </div>
                        <div className="contactDetails">
                            <h3 className="nameTitle">Contact Details</h3>
                            <p className="description">
                                <span>Telephone <i className="fas fa-phone"></i>: <a href="tel:+18016716511">+1 (801)-671-6511</a></span><br />
                                <span>Email <i className="fas fa-envelope"></i>: <a href="mailto:pradykolli@gmail.com" rel="noopener noreferrer" target="_blank">pradykolli@gmail.com</a></span><br />
                                <span>Address <i className="fas fa-home"></i>: 1121 N.College Dr, Apt-56, Maryville MO 64468</span><br />
                                <span>GitHub <i className="fab fa-github"></i>: <a href="https://github.com/pradykolli" rel="noopener noreferrer" target="_blank">http://github.com/pradykolli</a></span><br />
                            </p>
                        </div>
                    </div>
                </Col>
                {/* Code for the right article part */}
                <Col md="8"></Col>
            </Row>
        </div>
    );
}

export default Resume