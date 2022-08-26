import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateData = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = async () => {
    console.log(params);
    let result = await fetch(
      `http://localhost:5000/students//update-student/${params.id}`
    );
    result = await result.json();
    console.log(result);

    setname(result.name);
    setphone(result.phone);
    setemail(result.email);
    setmsg(result.msg);
  };

  const updateData = async (e) => {
    // console.log("formSubmit called aaaa");
    //  console.log(data);
    // e.preventDefault();
    let result = await fetch(
      `http://localhost:5000/students/update-student/${params.id}`,
      {
        method: "put",
        body: JSON.stringify({ name, phone, email, msg }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    result = await result.json();
    console.log(result);
    navigate("/listdata");

    window.location.reload();
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Update Data </h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
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
                  value={phone}
                  onChange={(e) => {
                    setphone(e.target.value);
                  }}
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
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
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
                  value={msg}
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                  onClick={updateData}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateData;
