import React from "react";
import myLogo from "./JCLogo3.svg";
import logoJ from "./Logo3J.svg";
import logoC from "./Logo3C.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

require("bootstrap");

function App() {
  return (
    <div className="container-fluid app mx-0 px-0 h-100">
      <header>
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

      <section>
        <div className="bg-white">
          <h3 className="my-5">{"Welcome to my Portfolio Website,"}</h3>
          <h3 className="my-5">{"my name is"}</h3>
          <h1 className="my-5">
            <span>
              <img src={logoJ} className="logo-font" alt="jogoJ" />
            </span>
            {"ose David "}
            <span>
              <img src={logoC} className="logo-font" alt="jogoc" />
              {"edeno"}
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default App;
