import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { TextField } from '@material-ui/core';
// import axios from "axios";
import { Table } from "react-bootstrap";
import nodata from "../Images/nodata4.jpg"


const StudentList = () => {
  const [students, setStudents] = useState([]);


  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let result = await fetch(`http://localhost:5000/students/get`);
    result = await result.json();
    setStudents(result);
  };

  const deleteProduct = async (id) => {
    // console.log(id);
    let result = await fetch(
      `http://localhost:5000/students//delete-student/${id}`,
      {
        method: "Delete",
      }
    );
    result = await result.json();
    if (result) {
      alert("record is deleted");
    }
    window.location.reload();
  };

  //search
  const searchHandler = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/students/search/${key}`);
      result = await result.json();
      if (result) {
        setStudents(result);
      }
    } else {
      getData();
    }
  };

  return (
    <>
    <div className="div-ser">
     {/* <TextField id="filled-basic" label="Search" variant="filled" onChange={searchHandler} /> */}
     <TextField id="standard-basic" label="Search " variant="standard"  onChange={searchHandler}/>
     </div>

      {students.length > 0 ? (
<div className="table-wrapper">
        <Table striped bordered hover className="th">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>message</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            students.map((elem) => {
              return (
                <tbody>
                  <tr>
                    <td>{elem.name}</td>
                    <td>{elem.phone}</td>
                    <td>{elem.email}</td>
                    <td>{elem.msg}</td>
                    <td>
                      
                        <Link className="edit-link" to={"/update/" + elem._id}>{''}Edit{''}</Link>
                         &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        <button className="delete-btn" onClick={() => deleteProduct(elem._id)}>
                          Delete
                        </button>
                      </td>
                    
                  </tr>
                </tbody>
              )
            })
          }
        </Table>
      </div>
      ): 
      (
        <div className="nodata">
         <img src={nodata} />
        </div>
      )}
      
    </>
  );
};

export default StudentList;
