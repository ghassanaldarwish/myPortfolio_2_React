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
              For several months I have focused my career path and academic
              pursuits on learning and developing those all-important skills
              necessary to be great in this type of role. As a personal mission,
              I strive to empower and improve other’s outlook and circumstances.
              I believe being genuine and nurturing, along with professional and
              driven, is an essential combination for people in my field. I
              possess HTML, CSS, SASS, JavaScript, ES6, TypeScript, GraphQL,
              React, React Native, Redux, Node.js, Express, socket.io, WebPack,
              npm, MySql and MongoDB, my abilities extend to think outside the
              box and critical thinking with proficiency in team-building.
              Working with people from diverse backgrounds have provided me with
              a deep understanding and awareness of differences in both
              individuals and organizations. These qualities will help to
              support Fit Analytics’s mission while reflecting positively on the
              professionalism and competencies in its employees.
            </p>
          </div>
        </div>
      </Element>
    );
  }
}

export default Profile;
