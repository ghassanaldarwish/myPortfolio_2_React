import React, { Component } from "react";
import Home from "./components/home/home";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Profile />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
