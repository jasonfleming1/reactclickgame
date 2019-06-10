//============ IMPORTS ============
import React from "react";
import "./header.css";

//============ CONTENT ============
const Header = (props) => (
    <header className="header" id="headerContainer">
        <div id="brand">Princess Clicker</div>
        <div id="alert">{props.alert}</div>
        <div id="scoreBoard">Score: | High Score: </div>
    </header>
);

//============ EXPORT ============
export default Header;