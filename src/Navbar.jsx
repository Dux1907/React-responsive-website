import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h2 className="my-1" style={{ color: "#6610f2" }}>
            Bootstrap 5
          </h2>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link mt-lg-0 mt-1 fs-4 mx-1"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4 mx-1" to="/service">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4 mx-1"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4 mx-1"
                  aria-current="page"
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
