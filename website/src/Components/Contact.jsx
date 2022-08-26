import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    // console.log("formSubmit called aaaa");
    console.log(data);
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        msg: data.msg,
      }),
    };
    fetch("http://localhost:5000/students/create-student", requestOptions).then(
      (res) => {
        // console.log(res.body);
        if (res.status === 200) alert("Message Send successfully ");
        else Promise.reject();
      }
    );
    // .catch((err) => alert("Something went wrong"));

    window.location.reload();
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Phone Number"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your Email Address"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>

              <div className="submit-btn">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
