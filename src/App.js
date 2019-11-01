import React from "react";
import myLogo from "./JCLogo3.svg";
import logoJ from "./Logo3J.svg";
import logoC from "./Logo3C.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

require("bootstrap");

const aboutText =
  "I'm a MS in Electrical Engineering and MBA passionate about software development, \
  data science, computer vision and business analysis. I designed this website using \
  node.js, react, bootstrap, css-flexbox, and uploaded it using git. Here you will \
  find the projects I've made in different programming languages as well as the \
  technologies I used for each of them.";

const projectsText =
  "These projects are developed in Python, my strongest programming language. I \
  started developing in Python in 2016, after starting my Masters in Electrical \
  Engineering program in Florida International University.";

function App() {
  return (
    <div className="app">
      <header className="bg-dark">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#">
            <img src={myLogo} alt="myLogo" className="app-mylogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto nav-fill w-100">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="sections">
        <section className="intro-section bg-white">
          <div>
            <div>
              <h4 className="welcome-text">
                {"Welcome to my Portfolio Website,"}
              </h4>
            </div>
            <div>
              <h4 className="welcome-text">{"my name is"}</h4>
            </div>
            <div>
              <div>
                <h1 className="welcome-text">
                  {/* <span>
                    <img src={logoJ} className="logo-font" alt="jogoJ" />
                  </span> */}
                  {"Jose"}
                </h1>
              </div>
              <div>
                <h1 className="welcome-text">
                  {/* <span>
                    <img src={logoC} className="logo-font" alt="jogoC" />
                  </span> */}
                  {"Cedeno"}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div id="about-text">
            <p>{aboutText}</p>
          </div>
        </section>

        <section className="projects-section">
          <div id="projects-text">
            <p>{projectsText}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
