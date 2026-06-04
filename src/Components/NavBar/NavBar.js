import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Game from '../Game/Game';
import Resume from '../Resume/Resume';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import styles from "./NavBar.css";
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Router basename="/ReactedPortfolio">
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand >Prady Kolli</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link className={styles["navLinks"]} to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/resume">Resume</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/game">Game</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contactMe">Contact Me</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/contactMe">
                        <ContactMe />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default NavBar