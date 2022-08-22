import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      {/* <div className="menu_style">
                <NavLink activeclassname="active_class" to="/">Home</NavLink>
                <NavLink exact activeClassName="active_class" to="/about">About Us</NavLink>
                <NavLink activeclassname="active_class" to="/contact">Contact Us</NavLink>
                <NavLink exact activeClassName="active_class" to="/help">Help Us</NavLink>
               
                
            </div> */}
      {/* <NavLink href="/" >About</a>
            <NavLink href="/contact" > Contact</a> */}
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink
                  activeClassName="menu_active"
                  className="navbar-brand"
                  to="/"
                >
                  KISHAN
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse ml-50%"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link "
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="service"
                      >
                        Services
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="about"
                      >
                        About Us
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/contact"
                        activeClassName="menu_active"
                        className="nav-link"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <br/>
        </div>
      </div>
    </>
  );
};
export default Menu;
