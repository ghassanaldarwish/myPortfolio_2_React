import React, { Component } from "react";

import { Element } from "react-scroll";

import "./home.css";

class App extends Component {
  render() {
    return (
      <Element name="home">
        <div class=" bg-overlay ">
          <div class="row text-center">
            <div className="container ">
              <h1>Hello, I'm Ghassan Aldarwish</h1>
              <h4>
                <br />
                I'm software engineer
              </h4>
              <br />
              <br />
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default App;
