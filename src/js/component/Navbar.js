import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Beto
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/projectpage" className="nav-link navbar-link">
              Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contactmepage" className="nav-link navbar-link">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
