import React from "react";
import myLogo from "./JCLogo3.svg";
import rocCurve from "./ROC Curve.png";
import filteredData from "./filtered data.png";
import classificationResults from "./classification results.png";
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
  "Scroll down to see the projects I've developed since starting my Masters in \
  Electrical Engineering program at Florida International University.";

const eegTextTitle =
  "Interictal Spikes Detection - Implementing Neural Networks";

const eegText =
  "Epilepsy is an illness that affects a sizeable percentage of the people worldwide, \
  being one of the most common neurological diseases globally. The brain’s electrical \
  activity can be measured using Electroencephalogram (EEG) data, which neurologists \
  can study in order to find the source of epileptic seizures in the human brain. This \
  process can consume a lot of a neurologist’s valuable time, since they have to \
  manually analyze hours of EEG data. The purpose of this project is to find an \
  automated method to detect interictal spikes in EEG data, in order to simplify the \
  neurologist’s job by saving time, which will in consequence reduce costs associated \
  to EEG testing.";

function App() {
  return (
    <div className="app">
      <header className="bg-dark">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#intro-section">
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
                <a href="#about-section" className="nav-link">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects-section" className="nav-link">
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
        <section id="intro-section" className="intro-section bg-white">
          <div>
            <div>
              <h4 className="welcome-text">
                {"Welcome to my Portfolio Website"}
              </h4>
            </div>
            <div>
              <h4 className="welcome-text">{"I am"}</h4>
            </div>
            <div>
              <div>
                <h1 className="welcome-text">
                  {/* <span>
                    <img src={logoJ} className="logo-font" alt="logoJ" />
                  </span> */}
                  {"Jose"}
                </h1>
              </div>
              <div>
                <h1 className="welcome-text">
                  {/* <span>
                    <img src={logoC} className="logo-font" alt="logoC" />
                  </span> */}
                  {"Cedeno"}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section id="about-section" className="about-section">
          <div id="about-text">
            <p>{aboutText}</p>
          </div>
        </section>

        <section id="projects-section" className="projects-section">
          <div id="projects-text">
            <p>{projectsText}</p>
          </div>
        </section>

        <section className="first-project">
          <div id="interictal">
            <h3 className="eeg-title">{eegTextTitle}</h3>
            <p>{eegText}</p>
            <ul>
              <li>
                {
                  "Designed and trained an Artificial Neural Network \
                  (ANN) to detect features in Electroencephalogram \
                  (EEG) medical data, using the Neural Network Toolbox \
                  from MATLAB."
                }
              </li>
              <li>
                {
                  "Filtered the data by designing a Band-Pass Butterworth \
                  FIR filter with an open-source MATLAB Toolbox called EEGLAB."
                }
              </li>
              <li>
                {
                  "Decided which features of the EEG data were to be introduced \
                  in the Neural Network."
                }
              </li>
              <li>
                {
                  "Selected the positive and negative samples for the training \
                  algorithm."
                }
              </li>
              <li>
                {
                  "Verified the network by feeding it new EEG data from the same \
                  patient and plotted the results."
                }
              </li>
              <li>
                {
                  "Made a report of the project, with recommendations of other \
                  features that could be fed into the Neural Network to increase \
                  its accuracy."
                }
              </li>
            </ul>
            <div className="eeg-images">
              <img src={rocCurve} alt="ROC Curve" />
              <img src={filteredData} alt="ROC Curve" />
              <img src={classificationResults} alt="ROC Curve" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
