import React from "react";
export default function Common({ heading, text }) {
  return (
    <>
      <div className="px-lg-5 px-3 container-fluid">
        <div className="row">
          <div
            className="col-12 text-center"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              minHeight: "85vh",
              MinWidth: "100vw",
            }}
          >
            <div className="row">
              <div
                className="col-md-6 col-10 mt-4 mb-3 my-md-0 m-auto"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {heading}
                <h4>We are a team of developers making websites.</h4>
                {text}
              </div>
              <div className="col-md-6 col-10 m-auto mt-2 mb-4">
                <img
                  src="https://cdn.dribbble.com/users/354116/screenshots/2522668/randomstudy0000.gif"
                  alt="Study"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
