import React, { Component } from "react";
import { Element } from "react-scroll";
import "./contact.css";

class About extends Component {
  render() {
    return (
      <Element name="contact">
        <div className="Contact">
          <div className="container ">
            <h2>Contact Me</h2>
            <p>Email: ghassanaldarwish@yahoo.com</p>
            <p>Location: Germany, Berlin</p>
            <div className="MediaNetwork ">
              <div className=" MediaNetworkIcons">
                <a href="https://codepen.io/Ghassanooooo/ " target="_blank">
                  <span className="codepen ">
                    <i className="fab fa-codepen " />
                  </span>
                </a>
              </div>
              <div className=" MediaNetworkIcons">
                <a
                  href="https://www.facebook.com/profile.php?id=100010789830008 "
                  target="_blank"
                >
                  <span className="facebook ">
                    <i className="fab fa-facebook-f " />
                  </span>
                </a>
              </div>
              <div className=" MediaNetworkIcons">
                <a
                  href="https://www.linkedin.com/in/ghassan-aldarwish-029682172 "
                  target="_blank"
                >
                  <span className="twitter ">
                    <i className="fab fa-linkedin " />
                  </span>
                </a>
              </div>
              <div className=" MediaNetworkIcons">
                <a href="https://github.com/Ghassanooooo " target="_blank">
                  <span className="github ">
                    <i className="fab fa-git " />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default About;
