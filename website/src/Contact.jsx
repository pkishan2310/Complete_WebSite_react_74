import React, { useState } from "react";

const Contact = () => {
    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const InputEvent=(event)=>{

        const {name,value}=event.target;

        setData((preval)=>{
            return{
                ...preval,
                [name]: value,
            };
        });
    };

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`my name is ${data.fullname}. My Mobbile Number is ${data.phone} and my email is ${data.email}, here is what i want to say ${data.msg}`)
        
        setData({fullname:"",email:"",phone:"", msg:"" });

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
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                  required

                />
              </div>

              <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Enter your Phone Number"
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
                  required
                ></textarea>
              </div>

              <div className="col-12">
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
