import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../src/Images/home.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btnName="Get Stated"
      />
    </>
  );
};
export default Home;
