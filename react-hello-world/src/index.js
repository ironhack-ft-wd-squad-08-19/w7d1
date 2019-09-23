// const React = require('react');

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const greeting = <h1 className="heading">Hello World!</h1>;

const imgSrc = "https://source.unsplash.com/random/800x600";

const myStyle = {
  height: "200px"
};

const element = (
  <div>
    {greeting}
    <p
      style={{
        backgroundColor: "pink"
      }}
    >
      Random number: {Math.floor(Math.random() * 10)}
    </p>
    <img src={imgSrc} style={myStyle} />
  </div>
);

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, greeting)
// );

ReactDOM.render(element, document.getElementById("root"));
