import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../src/Images/about.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
    <Common
        name="Wel-Come to About page"
        imgsrc={web}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};
export default About;
