import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light text-light sticky-top bg-secondary Navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ghassan Aldarwish
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse NavbarFlexFix"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="profile"
                >
                  Profile
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default navbar;
