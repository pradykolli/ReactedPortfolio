import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import logo from '../../Assets/Images/logo4.jpg'
import "./Resume.css"
function Resume() {
    const handlePrint = () => {
        window.print();
    };
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
                            <p className="description">Senior Frontend Engineer</p>
                            <p className="description">React | TypeScript | Next.js | Frontend Architecture</p>
                        </div>
                        <div className="careerGoalSection">
                            <h3 className="nameTitle">Professional Summary</h3>
                            <p className="description">Senior Frontend Engineer with 8+ years of experience building scalable, accessible and data-intensive enterprise web applications, with deep production experience in React, JavaScript, TypeScript, Redux and frontend architecture. Strong financial-services and wealth-management background delivering advisor-facing portfolio and holdings applications. Experienced in reusable component systems, custom data grids, REST API integration, state management, automated testing, accessibility, CI/CD and technical leadership. Currently extending this foundation into the modern React ecosystem, including Next.js, TanStack Query, modern E2E testing, Node.js and AI-enabled application patterns.</p>
                        </div>
                        <div className="careerGoalSection">
                            <h3 className="nameTitle">Technical Skills</h3>
                            <ul className="description">
                                <li>Frontend: React, TypeScript, JavaScript (ES6+), Next.js, HTML5, CSS3, SASS, Responsive Design, Accessibility/WCAG 2.1 AA</li>
                                <li>Architecture &amp; State: Frontend Architecture, Component Architecture, Reusable UI Components, Redux, Context API, TanStack Query, Server-State Management</li>
                                <li>Testing: Jest, React Testing Library, Enzyme, Unit Testing, E2E Testing, Playwright/Cypress concepts, CI Quality Gates</li>
                                <li>Backend &amp; APIs: Node.js, RESTful APIs, Axios, .NET Backend Integration, API Integration, Authentication Concepts</li>
                                <li>Cloud &amp; DevOps: Azure, Jenkins CI/CD, Git, GitHub, NPM, ESLint, Ansible, WiX/MSI Packaging</li>
                                <li>UI &amp; Data: Chart.js, React-Charts-2, Data Visualization, Data Grids, jsPDF, html2canvas, Aspose, Adobe XD, InVision</li>
                                <li>AI / Modern Engineering: LLM/API Integration Concepts, AI-assisted application patterns, prompt/response workflows, streaming UX concepts</li>
                            </ul>
                            <p className="description"><strong>Modern-stack note:</strong> Next.js, TanStack Query, modern E2E testing and AI/LLM application patterns are being actively developed through current hands-on learning/projects; they are not represented as historical production experience.</p>
                        </div>
                        <div className="contactDetails">
                            <h3 className="nameTitle">Contact Details</h3>
                            <div className="description">
                                <p>Telephone <i className="fas fa-phone"></i> </p><p><a href="tel:+18016716511">+1 (801)-671-6511</a></p>
                                <p>Email <i className="fas fa-envelope"></i> </p><p><a href="mailto:pradykolli@gmail.com" rel="noopener noreferrer" target="_blank">pradykolli@gmail.com</a></p>
                                <p>Location <i className="fas fa-home"></i> </p><p>Mississauga, ON</p>
                                <p>LinkedIn <i className="fab fa-linkedin"></i> </p><p>Pradeep Kolli</p>
                                <p>GitHub <i className="fab fa-github"></i> </p><p><a href="https://github.com/pradykolli" rel="noopener noreferrer" target="_blank">Pradykolli</a></p>
                                <p>Visa Status <i className="fas fa-id-card"></i> </p><p>Canadian Permanent Resident</p>
                            </div>
                        </div>
                    </div>
                </Col>
                {/* Code for the right article part */}
                <Col md="8" className="rightCol">
                    <div className="employmentHistory">
                        <h3 className="nameTitle">Professional Experience</h3>
                        <div className="description">
                            <h4>INFOSYS LTD. — Technology Lead / Senior Software Engineer | March 2020 – Present</h4>
                            <h5><strong>Client Financials — Global Wealth Management Platform (Bank of America, Plano, TX, USA) | April 2021 – Present</strong></h5>
                            <ul>
                                <li>Architected and maintained a client-facing Holdings &amp; Portfolio Management application enabling Financial Advisors to view consolidated household account data across multiple investment product classes.</li>
                                <li>Designed and delivered responsive React interfaces using JavaScript/TypeScript, HTML5, CSS3 and Bootstrap, emphasizing reusable component architecture and maintainable frontend code.</li>
                                <li>Engineered a custom high-performance data grid from scratch supporting hierarchical expandable rows, multi-column filtering, sorting, inline edit/delete, row selection, contextual navigation and click-to-trade workflows.</li>
                                <li>Built a dynamic selection and subtotal engine that calculated real-time totals for arbitrary sets of holdings, supporting advisor-driven portfolio analysis.</li>
                                <li>Developed reusable summary widgets and portfolio visualizations using Chart.js and React-Charts-2 for account balances and portfolio composition.</li>
                                <li>Managed application state using Redux and Context API and integrated RESTful backend services through Axios to deliver live account and portfolio data.</li>
                                <li>Implemented data-export workflows including Web API exports, Excel generation with Aspose, and client-side PDF generation using jsPDF and html2canvas.</li>
                                <li>Maintained frontend quality with NPM and ESLint and supported Jenkins CI/CD pipelines, release readiness, build troubleshooting and production support.</li>
                                <li>Contributed to enterprise deployment tooling through WiX/MSI packaging and Ansible-based environment provisioning.</li>
                                <li>Participated in architecture discussions, code reviews and technical mentoring, helping establish frontend engineering standards across distributed teams.</li>
                            </ul>
                        </div>
                        <div className="description">
                            <h5><strong>SSP — Self Service Portal (Regions Bank, Remote, TX, USA) | September 2020 – March 2021</strong></h5>
                            <ul>
                                <li>Established application boilerplate and built reusable components using React, JSX, Node.js and styled-components.</li>
                                <li>Implemented React Hooks including useState and useEffect and used Context API for shared application data.</li>
                                <li>Developed SASS-based styling and integrated reusable form controls, including date and phone-number components.</li>
                                <li>Implemented session-timeout behavior based on page sensitivity, including automatic logout and appropriate navigation.</li>
                                <li>Worked within Agile/Scrum delivery practices including sprint planning, backlog management, story estimation and daily ceremonies.</li>
                            </ul>
                        </div>
                        <div className="description">
                            <h5><strong>WMAP Discovery (UBS, Remote, TX, USA) | May 2020 – September 2020</strong></h5>
                            <ul>
                                <li>Established application boilerplate and built reusable React components including floating containers and flexible data tables.</li>
                                <li>Used TypeScript for strict typing and improved frontend maintainability.</li>
                                <li>Implemented BEM-based CSS conventions and pixel-accurate interfaces from approved UX designs.</li>
                                <li>Developed Jest/Enzyme unit tests and achieved 85% coverage across branches, statements, functions and lines.</li>
                                <li>Prototyped Azure Cognitive Services integrations and reusable React components for speech-to-text capabilities.</li>
                                <li>Participated in frontend architecture discussions, sprint planning and technical coordination with business and engineering stakeholders.</li>
                            </ul>
                        </div>
                        <div className="description">
                            <h4>INFOSYS LTD. — Software Engineer (Chandigarh, India) | December 2015 – June 2018</h4>
                            <h5><strong>Tikit Carpediem — Law Technology Web Applications</strong></h5>
                            <ul>
                                <li>Designed and developed responsive web applications for a leading UK legal-technology software provider serving major law firms.</li>
                                <li>Built responsive interfaces using Bootstrap, HTML5, CSS3, SASS and LESS with emphasis on maintainable, reusable styling.</li>
                                <li>Developed a Microsoft Word/Office 365 document-maintenance plugin using Fabric UI.</li>
                                <li>Delivered accessibility-ready applications aligned with WCAG A/AA requirements and validated behavior across devices and major browsers.</li>
                                <li>Collaborated with stakeholders during UX/design phases and translated Adobe XD wireframes and mockups into production interfaces.</li>
                                <li>Acted as team lead for three months during a leadership transition and coordinated timelines for a major framework migration.</li>
                                <li>Led a Bootstrap 2-to-3 migration involving substantial code changes while meeting strict delivery timelines.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="academicHistory">
                        <h3 className="nameTitle">Selected Modernization Projects</h3>
                        <div className="description">
                            <h5><strong>Portfolio Engineering Lab — Current Learning &amp; Hands-on Projects</strong></h5>
                            <ul>
                                <li>Building a production-style wealth-management dashboard using Next.js, React, TypeScript, TanStack Query, REST APIs and accessible reusable components to demonstrate modern frontend architecture.</li>
                                <li>Developing a hands-on AI financial-assistant prototype exploring LLM API integration, streaming responses, structured outputs, conversation workflows and responsible AI application patterns.</li>
                                <li>Adding modern testing and delivery practices including React Testing Library/Playwright, linting, type checking and CI-oriented quality gates.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="academicHistory">
                        <h3 className="nameTitle">Education</h3>
                        <div className="description">
                            <ul>
                                <li>Master of Science, Applied Computer Science — Northwest Missouri State University, Maryville, MO, USA | GPA: 3.9/4.0</li>
                                <li>Master of Science (Integrated), Software Engineering — VIT University, Vellore, India | May 2015 | GPA: 3.5/4.0</li>
                            </ul>
                            <Button className='secondary printBtn' onClick={handlePrint}>
                                <i className="fas fa-print"></i> Print Resume
                            </Button>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Resume