// <div id="parent">
//     <div id="child">
//      <h1> I'm h1 tag </h1>
//      <h2> I'm h2 tag </h2>
// </div>
//    </div>
import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span> React Element </span>;

const title = (
  <h1 tabIndex="1" className="head">
    {elem}
    Namaste React..
  </h1>
);

const Heading = () => (
  <div id="container">
    <h1> Namaste React from functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
