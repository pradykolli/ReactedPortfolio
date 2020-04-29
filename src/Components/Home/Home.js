import React, {useEffect} from 'react'
// import banner from '../../Assets/Images/banner.jpg'
import logo from '../../Assets/Images/logo1.jpg'
import { Row, Col } from 'reactstrap';
import './Home.css'
import ContentCards from '../ContentCards/ContentCards';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
function Home() {
    useEffect(() => {
        toast("Hi there! Welcome!",{
            position:toast.POSITION.TOP_CENTER,
            autoClose:3000
        })
    })
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
                <Col md="4">
                    <div className="imageWrapper">
                        <img src={logo} alt="Pradeep Kolli" />
                    </div>
                </Col>
                <Col md="8">
                    <ContentCards cardTitle = "Hi">
                        "I'm a Web designer / developer based in Salt Lake City, UT.
                    I'm an experienced software engineer with a demonstrated history of working in the information technology and services industry.
                    Skilled in Html5, Javascript, CSS3, Sass, Bootstrap 2.x-4.x, React, Angular 2.0."
                    </ContentCards>
                </Col>
            </Row>
            <Row className="mt-10">
                <Col md="8">
                    <ContentCards cardTitle = "As a designer">
                            "I've designed customized layout for a very complex application which is responsive for all available devices.
                        I was involved in key designing aspects which involved universal usability of application and the applicaition to repsond accordingly.
                        I have grown familiarity with mutiple designing tools such as Sketch, Axure, Adobe XD, Mockups.
                        I'm well aware of tools such as Adobe Illustrator, Adobe Photoshop CS6 and Adobe Lightroom."
                    </ContentCards>
                </Col>
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
            </Row>
            <Row className="mt-10">
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
                <Col md="8">
                    <ContentCards cardTitle = "As a developer">
                            "Keeping in mind the responsive design and Code reuability,
                        I've written readable and efficient code while following the company's coding standards.
                        Writing accessible code wherever possible and necessary was well addressed.
                        Worked on multiple frameworks such as React, Node+Ejs, Angular 2.x with Material Design, Bootstrap 2.x-4.x, Microsoft Fabric UI.
                        Modularity was always primarily considered as a key aspect of coding.
                        Comfortable with Css, Sass."
                    </ContentCards>
                </Col>
            </Row>
        </div>
    );
}

export default Home