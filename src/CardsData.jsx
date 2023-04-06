import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const CardsData = (props) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6 text-center css gy-4">
        <div className="card" style={{ width: "22rem", height: "22rem" }}>
          <img
            src={props.src}
            style={{ width: "99%", height: "7rem" }}
            className="card-img-top"
            alt={props.title}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <NavLink to="/" className="btn btn-primary mb-1">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsData;
