import React from "react";
import CardsData from "./CardsData";
import Data from "./Data";

const Service = () => {
  return (
    <>
      <h1 className=" my-3 text-center">Components and Utilities</h1>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-11">
            <div className="row">
              {Data.map((val, index) => {
                return (
                  <CardsData
                    key={index}
                    title={val.title}
                    description={val.description}
                    src={val.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
