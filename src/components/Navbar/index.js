//============ IMPORTS ============
import React from "react";
import "./navbar.css"
//https://react-bootstrap.github.io/components/navbar/
//https://www.turtle-techies.com/post/react-navbar-with-bootstrap-4/

//============ CONTENT ============
const Navbar = (props) => (
    <nav className="navbar sticky-top navbar-expand-lg">
        <ul>
            <li classNmae="brand">
                <a href="/">Princess Clicker</a>
            </li>
        </ul>
    </nav>
);

//============ EXPORT ============
export default Navbar();