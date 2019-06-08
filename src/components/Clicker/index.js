import React from "react";

function Clicker(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.image}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Clicker;
