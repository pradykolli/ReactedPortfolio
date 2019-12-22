import React from 'react'
import { Row, Col } from 'reactstrap'
import StarKit from './StarKit/StarKit'
import logo from '../../Assets/Images/logo4.jpg'
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
                            <div className="imageWrapper grayscale">
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
                            <div className="description">
                                <p>Telephone <i className="fas fa-phone"></i> </p><p><a href="tel:+18016716511">+1 (801)-671-6511</a></p>
                                <p>Email <i className="fas fa-envelope"></i> </p><p><a href="mailto:pradykolli@gmail.com" rel="noopener noreferrer" target="_blank">pradykolli@gmail.com</a></p>
                                <p>Address <i className="fas fa-home"></i> </p><p>1121 N.College Dr, Apt-56, Maryville MO 64468</p>
                                <p>GitHub <i className="fab fa-github"></i> </p><p><a href="https://github.com/pradykolli" rel="noopener noreferrer" target="_blank">http://github.com/pradykolli</a></p>
                            </div>
                        </div>
                    </div>
                </Col>
                {/* Code for the right article part */}
                <Col md="8" className="rightCol">
                    <div className="employmentHistory">
                        <h3 className="nameTitle">Employment History</h3>
                        <div className="description">
                            <h4>Infosys</h4>
                            <h5><strong>UI/UX developer - Senior Systems Engineer. 2016-2018</strong></h5>
                            <ul>
                                <li>Designed and developed multiple websites for our client <strong>Tikit Ltd.</strong>, who is a software provider for major law firms in the United Kingdom.</li> 
                                <li>Used the latest <strong>Bootstrap</strong> frameworks for most of the websites and followed company standards.</li>   
                                <li>Implemented <strong>Responsive Web Design</strong> to make various websites adapt to multiple devices supporting all the possible resolutions.</li> 
                                <li>Implemented <strong>SASS, LESS</strong> in a couple of my websites making it easy to code and reduce code redundancy.</li> 
                                <li>Used <strong>Fabric UI</strong> framework for developing a document maintenance plugin which works with <strong>Microsoft Word</strong> and <strong>Office 365</strong>.</li> 
                                <li>Strong knowledge on <strong>Bootstrap2 and above, HTML5, CSS3</strong>. </li> 
                                <li>All the websites made were <strong>Accessibility</strong> ready and adhere to WAC guideline A and AA.</li> 
                                <li>Set up frequent meetings with the stake holders for their inputs during the design phase of UX.</li> 
                                <li>Used <strong>Axure</strong> to design layouts for wireframes and mock screens. After approval from the client, the same were referred and developed into code.   </li> 
                                <li>Migrated an existing bootstrap 2 project to bootstrap 3 which was 60% code change but achieved it within the strict timelines. </li> 
                                <li>Performed rigorous testing on all the available devices (MAC, Iphone5, 6, 6+, Android Nexus5, Samsung devices, Android Tab, IPad, IPadMini) and browsers (Safari, Chrome, Internet Explorer, Edge, Opera) before delivering the code to the testing team. </li> 
                                <li>Gained a little bit of knowledge in <strong>Typescript</strong> as well as <strong>Angular 5.0</strong> during the time of code integration from raw HTML’s into Angular components.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="academicHistory">
                        <h3 className="nameTitle">Academic History</h3>
                        <div className="description">
                            <h5>Northwest Missouri State University, Maryville, MO, USA</h5>
                            <h5><strong>Master of Science, Applied Computer Science, 3.9/4.0</strong></h5>
                        </div>
                        <div className="description">
                            <h5>School of Information Technology and Engineering (SITE), VIT University, Vellore, TN, India</h5>
                            <h5><strong>Master of Science (Integrated), Software Engineering, May 2015, GPA: 3.5/4.0</strong></h5>
                        </div>
                    </div>
                    <div className="academicHistory">
                        <h3 className="nameTitle">Personal Skill Set</h3>
                        <div className="description">
                            <ul>
                                <li>Strong willingness to learn new skills and abilities and observe perception.</li>
                                <li>Excellent problem solving and Analytical Skills.</li>	
                                <li>Strong team player. Ability to adhere to tight deadlines and meeting all deliverables.</li>
                                <li>Initiative for taking new responsibilities and high Interpersonal skills. </li>
                                <li>Good Leadership Qualities.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="previousProjects">
                        <h3 className="nameTitle">Previous Builds</h3>
                        <div className="description">
                            <ul>
                                <li><a href="https://pradykolli.github.io/BuildingWebapp-MDB/" title="https://pradykolli.github.io/BuildingWebapp-MDB/" rel="noopener noreferrer" target="_blank">Building Web Apps - Website using a Material Design Bootstrap</a></li>
                                <li><a href="https://pradykolli.github.io/portfolio/index.html" title="https://pradykolli.github.io/portfolio/index.html" rel="noopener noreferrer" target="_blank">Portfolio - Website using HTML, CSS, JS, JQuery</a></li>
                                <li><a href="https://pradykolli.github.io/GuestIn/index.html" title="https://pradykolli.github.io/GuestIn/index.html" rel="noopener noreferrer" target="_blank">GuestIn - Website using HTML, CSS, JS, JQuery, Bootsrap 4.0</a></li>
                                <li><a href="https://pradystoshoplist.herokuapp.com/" title="https://pradystoshoplist.herokuapp.com/" rel="noopener noreferrer" target="_blank">ShoppingToDoList - Website using MERN Stack.</a></li>
                                <li><a href="https://kolli-portfolio.herokuapp.com/" title="https://kolli-portfolio.herokuapp.com/" rel="noopener noreferrer" target="_blank">Potfolio - Website using Ejs, Express, Node.</a></li>
                                <li><a href="https://fullstack-ejs.herokuapp.com/" title="https://fullstack-ejs.herokuapp.com/" rel="noopener noreferrer" target="_blank">EmptyYourPockets - Website using Ejs, Express, Node, MDB.</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Resume