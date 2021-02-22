import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    const location = useLocation();

    return (
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
                <Link
                    to="/react-portfolio/about" className={location.pathname === "/react-portfolio/about" ? "nav-link active" : "nav-link"} >
                </Link>
            </Nav.Item>

    
        </Nav>
    );
}

export default Nav;
