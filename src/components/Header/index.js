//============ IMPORTS ============
import React from "react";
//import Navbar from "react-bootstrap/NavbarBrand"
import "./header.css";

//============ CONTENT ============
const Header = (props) => (
    <header className="header" id="headerContainer">
        <div id="brand">Princess Clicker</div>
        <div id="alert">Don't click the same princess twice!</div>
        <div id="scoreBoard">Score: | High Score: </div>
    </header>
);

//============ EXPORT ============
export default Header;