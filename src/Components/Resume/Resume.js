import React from 'react'
import {Row, Col} from 'reactstrap'
import logo from '../../Assets/Images/logo2.jpg'
import "./Resume.css"
function Resume(){
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
                            <p className="description">
                                <ul>
                                    <li>Excellent problem solving and Analytical Skills.</li>
                                    <li>Strong team player.</li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
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