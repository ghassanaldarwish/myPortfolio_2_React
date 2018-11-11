import React, { Component } from "react";
import { Element } from "react-scroll";
import "./projects.css";
import alDeveloper from "../../assets/ad-developer.png";
import burger from "../../assets/burger-builder.png";
import myPortfolio1 from "../../assets/my-portfolio.png";
import myPortfolio2 from "../../assets/myPortfolio_2.png";
import tictactoe from "../../assets/tic-tac-toe-starter.png";
import shoppincart from "../../assets/shoppin-cart.png";

class Projects extends Component {
  state = {
    proData: [
      {
        img: alDeveloper,
        title: "Al-Developer Social Network",
        discrption:
          "A quick walkthrough of my al-developer app built using React, React Router, Redux ,Express and mongoDB",
        github: "https://github.com/Ghassanooooo/al-developer-back-front",
        Demo: "https://al-developer.herokuapp.com"
      },
      {
        img: burger,
        title: "Burger Customise",
        discrption:
          "A quick walkthrough of my burger customise app built using React, React Router, and Redux",
        github: "https://github.com/Ghassanooooo/burger-customise",
        Demo: "https://dci-burger.herokuapp.com"
      },
      {
        img: myPortfolio1,
        title: "My First Portfolio",
        discrption: "my first project build by html and css i love it",
        github: "https://github.com/Ghassanooooo/my-portfolio",
        Demo: "https://ghassanooooo.github.io/my-portfolio"
      },
      {
        img: myPortfolio2,
        title: "My 2nd Portfolio",
        discrption:
          "my Portfolio_2 app built using Javascript, jquery, css and html",
        github: "https://github.com/Ghassanooooo/myPortfolio_2",
        Demo: "https://ghassanooooo.github.io/myPortfolio_2"
      },
      {
        img: tictactoe,
        title: "tic tac toe Game",
        discrption: " a game build it with React,  Sass",
        github: "https://github.com/Ghassanooooo/tic-tac-toe-starter",
        Demo: "http://Ghassanooooo.github.io/tic-tac-toe-starter"
      },
      {
        img: shoppincart,
        title: "Shoppin Cart",
        discrption: "Creating A Simple Shopping Cart with React.js",
        github: "https://github.com/Ghassanooooo/shoppin-cart",
        Demo: "/"
      }
    ]
  };
  render() {
    return (
      <Element name="projects">
        <div className="Projects">
          <div className="container ">
            <h2 className="mb-5">Projects</h2>
            <div className="row">
              {this.state.proData.map(item => (
                <div className="col-md-4 mb-5 ">
                  <div className="card">
                    <img
                      alt="pro img"
                      className="card-img-top"
                      src={item.img}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.discrption}</p>
                      <a
                        href={item.github}
                        className="btn btn-primary mr-2"
                        target="_blank"
                      >
                        Github
                      </a>
                      <a
                        href={item.Demo}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Projects;
