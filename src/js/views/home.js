import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Beto from "../../img/Beto.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="left-section">
        <img src={Beto} alt="Beto Valtierra" className="profile-pic" />
      </div>
      <div className="right-section">
        <h4 className="intro-text">Hello, my name is</h4>
        <h1 className="name">Beto Valtierra Jr</h1>
        <h2 className="profession">Full Stack Software Developer</h2>
        <p className="about-me">
          I'm Alberto—a software developer merging finance expertise with tech
          innovation. As a current Software Engineering student at ASU, I
          complement my academic learnings by diving into hands-on projects,
          ranging from virtual trading platforms to dynamic stock portfolio
          optimization systems. My mission? To create user-centric solutions
          that enhance efficiency and tackle real-world challenges. If you're a
          recruiter looking for a dedicated and versatile developer, or a
          business seeking a solution-focused freelancer, let's forge a
          partnership and turn visions into realities.
        </p>
        <div className="btn-group">
          <Link to="/projectpage">
            <button className="btn-projects">See My Projects</button>
          </Link>
          <Link to="/contactmepage">
            <button className="btn-contact">Contact Me</button>
          </Link>
          <a
            href="https://www.linkedin.com/in/albertovaltierrajr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-social">
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </a>
          <a
            href="https://github.com/betojr04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-social">
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
