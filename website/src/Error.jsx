import React from "react";
import { NavLink } from "react-router-dom";


const Error=()=>{
    return(
        <>
            <div id="wrapper">
            {/* <img className="image1" src="https://images01.nicepage.com/page/37/32/web-page-design-preview-373292.jpg" /> */}
            <div className="info">
                <h1>404 Error Page</h1>
                <p>Sorry, This Page Does't Exist  !!!!</p>
                <NavLink to="/">Goto Home page</NavLink>

            </div>
           </div>
        </>
    )
}
export default Error;