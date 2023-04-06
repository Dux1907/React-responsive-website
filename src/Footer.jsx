import React from "react";

const Footer = () => {
  return (
    <>
      <p
        className="text-center mt-4 mb-2"
        style={{ position: "relative", bottom: "5px" }}
      >
        &copy;{new Date().getFullYear()} All rights reserved || Terms and
        conditions Applied.
      </p>
    </>
  );
};

export default Footer;
