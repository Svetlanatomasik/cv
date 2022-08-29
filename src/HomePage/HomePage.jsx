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
              <li>Email: </li>
            </ul>
          </div>

          <div className="social">
            <h5>SOCIAL:</h5>
            <ul>
              <li>LinkedIn: </li>
              <li>GitHub: </li>
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
            <h3>Projects:</h3>
            My projects created with react and sass:
            <a
              className="fitboss"
              href=""
              target="_blank"
              // rel="noopener noreferrer"
            >
              {" "}
              FitBoss{" "}
            </a>
            <a
              className="fitboss"
              href=""
              target="_blank"
              // rel="noopener noreferrer"
            >
              {" "}
              My CV{" "}
            </a>
            <a
              className="fitboss"
              href=""
              target="_blank"
              // rel="noopener noreferrer"
            >
              {" "}
              Hiring Company{" "}
            </a>
          </div>

          <div className="it-skills">
            IT skills:
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
            Education:
            <h5>2022 BIT, Belgrade Institute of Technology</h5>
            Industry leading, highly intensive 10 week (400 hours) front-end
            boot camp
            <div>2011-2015 Medical school </div>
            Pharmacy Technicians
          </div>

          <div className="work-experience">
            Work experience:
            <div>2018-2019 Lilly Drogerie, Belgrade - Pharmacy Technicians</div>
            <div>
              2020-2021 Apoteka Dispersa, Belgrade - Pharmacy Technicians
            </div>
          </div>
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default HomePage;
