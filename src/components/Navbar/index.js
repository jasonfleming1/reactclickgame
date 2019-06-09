//============ IMPORTS ============
import React from "react";
import "./navbar.css"

//============ CONTENT ============
const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul>
            <li classNmae="brand">
                <a href="/">Princess Clicker</a>
            </li>
            <li>
                Score: | Top Score:
            </li>
        </ul>
    </nav>
);

//============ EXPORT ============
export default Navbar();