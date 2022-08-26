import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from "react";

import Contact from "./Components/Contact";
import Error from "./Error";
import Menu from "./Menu";
import Help from "./Help";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";
import ListData from "./Components/ListData";
import UpdateData from "./Components/UpdateData";
const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/listdata" element={<ListData />} />
        <Route path="/update/:id" element={<UpdateData />} />

        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
