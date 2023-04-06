import React from "react";
import "./index.css";
import Common from "./Common";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Common
        heading={
          <h1 style={{ fontSize: "45px" }}>
            You are now on the <span style={{ color: "#6610f2" }}>About</span>{" "}
            page.
          </h1>
        }
        text={
          <button type="button" className="btn btn-dark m-3">
            <NavLink
              className="nav-link mt-lg-0 mt-1 mx-1"
              aria-current="page"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </button>
        }
      />
    </>
  );
};

export default Home;
