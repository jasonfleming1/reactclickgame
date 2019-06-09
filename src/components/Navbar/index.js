//============ IMPORTS ============
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css"
//https://react-bootstrap.github.io/components/navbar/
//https://www.turtle-techies.com/post/react-navbar-with-bootstrap-4/

//============ CONTENT ============
const Navigation = (props) => (
    <Navbar sticky="top">
        <Navbar.Brand href="/">Princess Clicker</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
           <Navbar.Text>
               Current Score: {props.score} | High Score: {props.highScore}
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
);

//============ EXPORT ============
export default Navigation();