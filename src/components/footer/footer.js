import React from "react";

import "./footer.css";

const footer = props => (
  <footer className="Footer">
    <div className="container ">
      <p>
        &copy;2018 Ghassan Aldarwish. with
        <span role="img" aria-label="emotion ">
          {" "}
          💗{" "}
        </span>
      </p>
    </div>
  </footer>
);

export default footer;
