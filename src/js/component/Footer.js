import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="custom-footer mt-auto py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">
              &copy; {new Date().getFullYear()} Alberto Valtierra Jr
            </p>
          </div>
          <div className="col-md-6 text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/albertovaltierrajr"
                  target="_blank"
                  className="footer-link"
                >
                  Linkedin
                </a>
              </li>
              <li className="list-inline-item ml-3">
                <a
                  href="https://github.com/Betojr04"
                  target="_blank"
                  className="footer-link"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
