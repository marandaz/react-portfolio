import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';

// function Nav() {
//     const location = useLocation();

//     return (
//         <Nav className="justify-content-end" activeKey="/home">
//             <Nav.Item>
//                 <Link
//                     to="/react-portfolio/about" className={location.pathname === "/react-portfolio/about" ? "nav-link active" : "nav-link"} >
//                 </Link>
//             </Nav.Item>

    
//         </Nav>
//     );
// }

// export default Nav;

function NavTabs(props) {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>

        {/* <Link
                    to="/portfolio-react/about"
                    className={location.pathname === "/portfolio-react/about" ? "nav-link active" : "nav-link"}
                >
                    about
        </Link> */}
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => props.handlePageChange("Projects")}
            className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => props.handlePageChange("Resume")}
            className={props.currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  