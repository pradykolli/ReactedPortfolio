import React from 'react'
// import banner from '../../Assets/Images/banner.jpg'
import logo from '../../Assets/Images/logo1.jpg'
import { Row, Col } from 'reactstrap';
import './Home.css'
function Home(){
    return (
        <div>
            <Row>
                {/* <Col><img src={banner} className="banner" alt="Banner of the site" /></Col> */}
                <Col><h1>Pradeep Kolli</h1></Col>
            </Row>
            <Row>
                <Col>
                    <h2>Web Developer(React) | iOS Application Developer | IoT Enthusiast</h2>
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    <div className="webDeveloperSection">
                        <h1>Hi.</h1>
                        <p>
                            I'm a Web designer / developer based in Salt Lake City, UT.
                            I'm an experienced software engineer with a demonstrated history of working in the information technology and services industry.
                            Skilled in Html5, Javascript, CSS3, Sass, Bootstrap 2.x-4.x, React, Angular 2.0. 
                        </p>
                    </div>
                </Col>
                <Col md="4">
                    <div className="imageWrapper">
                        <img src={logo} alt="Pradeep Kolli" />
                    </div>
                </Col>
            </Row>
            <Row className="mt-10">
                <Col md="4">
                    <div className="iconWrapper">
                        <i className="fab fa-adobe"></i>
                    </div>
                    <div>
                        <h3>Adobe Xd</h3>
                        <h3>Adobe Photoshop CS6</h3>
                        <h3>Mockups</h3>
                    </div>
                </Col>
                <Col md="8">
                    <div className="webDeveloperSection">
                        <h1>As a designer.</h1>
                        <p>
                            I'm a Web designer / developer based in Salt Lake City, UT.
                            I'm an experienced software engineer with a demonstrated history of working in the information technology and services industry.
                            Skilled in Html5, Javascript, CSS3, Sass, Bootstrap 2.x-4.x, React, Angular 2.0. 
                        </p>
                    </div>
                </Col>
            </Row> 
            <Row className="mt-10">
                <Col md="8">
                    <div className="webDeveloperSection">
                        <h1>As a developer.</h1>
                        <p>
                            I'm a Web designer / developer based in Salt Lake City, UT.
                            I'm an experienced software engineer with a demonstrated history of working in the information technology and services industry.
                            Skilled in Html5, Javascript, CSS3, Sass, Bootstrap 2.x-4.x, React, Angular 2.0. 
                        </p>
                    </div>
                </Col>
                <Col md="4">
                    <div className="iconWrapper">
                        <i className="fab fa-css3"></i>
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-bootstrap"></i>
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-angular"></i>
                        <i className="fab fa-accessible-icon"></i>
                    </div>
                </Col>
            </Row> 
        </div>  
    );
}

export default Home