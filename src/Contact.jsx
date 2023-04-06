import React from "react";
import { useState } from "react";
const Contact = () => {
  const [prev, final] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });
  const submit = (e) => {
    e.preventDefault();
    alert(
      `your name is ${prev.fname} ${prev.lname}.Your phone number is ${prev.phone}.Your E-mail id is ${prev.email} and your message is ${prev.message}.`
    );
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    final((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center text-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="col-xl-5 col-lg-7 col-md-8 col-10 border border-1 p-sm-5 rounded form-group">
            <h2 className="m-2 mb-4">Contact Us</h2>
            <form action="page_submission_URL" method="POST">
              <div className="input-group">
                <span className="input-group-text">First and last name</span>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                  required="true"
                  name="fname"
                  value={prev.fname}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                  required=""
                  name="lname"
                  value={prev.lname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone number"
                  required=""
                  name="phone"
                  value={prev.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  for="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required=""
                  name="email"
                  value={prev.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="form-label"
                ></label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                  required=""
                  name="message"
                  value={prev.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                onClick={submit}
                type="button"
                className="btn btn-secondary mb-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
