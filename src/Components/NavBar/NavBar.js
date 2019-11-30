import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
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
        <Router>
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand >Prady Kolli</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className={styles["navLinks"]} href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/resume">Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/game">Game</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contactMe">Contact Me</NavLink>
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