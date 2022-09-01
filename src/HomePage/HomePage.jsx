import React from "react";
import "./homePage.scss";
import SearchJob from "../Images/job.jpg";
import cvImg from "../Images/cvImg.jpg";

function HomePage() {
  return (
    <div className="home-page">
      <div className="personal-info">
        <div className="header-wrapper">
          <img className="cv-img" src={cvImg} alt="CV" />
          <h1>Svetlana Tomašik</h1>
          <div className="frontend">Junior Frontend developer</div>
        </div>

        <div className="img-wrapper">
          <img className="job-img" src={SearchJob} alt="Background" />
        </div>
      </div>

      <div className="main">
        <div className="info">
          <div className="contact">
            <h5>CONTACT:</h5>
            <ul>
              <li>Address: Belgrade, Serbia</li>
              <li>Phone: +381 63 813 2648</li>
              <li>Email: seka.corazon@gmail.com</li>
            </ul>
          </div>

          <div className="social">
            <h5>SOCIAL:</h5>
            <ul>
              <li>
                LinkedIn:
                <a href="https://www.linkedin.com/in/svetlana-toma%C5%A1ik-a8382224a/">
                  https://www.linkedin.com/in/svetlana
                </a>
              </li>
              <li>
                GitHub:
                <a href="https://github.com/Svetlanatomasik">
                  https://github.com/Svetlanatomasik
                </a>
              </li>
            </ul>
          </div>

          <div className="personal-skills">
            <h5>PERSONAL SKILLS:</h5>
            <ul>
              <li>Communication and presentation</li>
              <li>Teamwork</li>
              <li>Organisational skills</li>
              <li>Creative thinking</li>
              <li>Professionalism and strong work ethic</li>
              <li>Adaptability</li>
              <li>Responsibility</li>
            </ul>
          </div>

          <div className="languages">
            <h5>LANGUAGES:</h5>
            <ul>
              <li>English (Intermediate level)</li>
              <li>Slovakian (Advanced level) </li>
              <li>German (Beginner level)</li>
            </ul>
          </div>
        </div>

        <div className="work-info">
          <div className="my-projects">
            <div className="title">Projects:</div>
            <ul>
              <li>Links to projects created with react and sass:</li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Svetlanatomasik/fitboss"
                >
                  FitBoss
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/Svetlanatomasik/cv">
                  My CV
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/Svetlanatomasik/hiring-company"
                >
                  Hiring Company
                </a>
              </li>
              </ul>
          </div>

          <div className="it-skills">
            <div className="title">IT skills:</div>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Git</li>
              <li>AJAX</li>
              <li>JSON</li>
              <li>Photoshop</li>
            </ul>
          </div>

          <div className="education">
            <div className="title">Education:</div>
            <ul>
              <li className="education-place">
                2022 BIT, Belgrade Institute of Technology
              </li>
              <li className="description">
                Industry leading, highly intensive 10 week (400 hours) front-end
                boot camp
              </li>
              <li className="education-place">2011-2015 Medical school</li>
              <li className="description">Pharmacy Technicians</li>
            </ul>
          </div>

          <div className="work-experience">
            <div className="title">Work experience</div>
            <ul>
              <li>2018-2019 Lilly Drogerie, Belgrade - Pharmacy Technicians</li>
              <li>
                2020-2021 Apoteka Dispersa, Belgrade - Pharmacy Technicians
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default HomePage;
