import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <Navbar expand="lg" fixed="top">
                {/* <Navbar.Brand href="/">Navbar scroll</Navbar.Brand> */}
                <NavLink className="brand" to="/">
                    TechNext
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse
                    id="navbarScroll"
                    className="justify-content-end"
                >
                    <Nav className="navBar__links">
                        <NavLink exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                        <NavLink exact activeClassName="active" to="/profile/">
                            Profile
                        </NavLink>
                        <NavLink exact activeClassName="active" to="/users/">
                            Users
                        </NavLink>
                        {/* <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;
