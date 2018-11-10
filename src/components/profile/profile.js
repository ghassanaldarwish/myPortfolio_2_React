import React, { Component } from "react";
import { Element } from "react-scroll";

import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <Element name="profile">
        <div className="Profile">
          <div className="container ">
            <h2>Profile</h2>
            <p className="text-capitalize">
              Self-driven with a good understanding of programming and the
              technological space. I have acquired a unique combination of
              logical skills through my own efforts and from formal training. I
              would like to develop a career in a technologically oriented
              company, where I can build upon and enhance my skill set.
            </p>
          </div>
        </div>
      </Element>
    );
  }
}

export default Profile;
