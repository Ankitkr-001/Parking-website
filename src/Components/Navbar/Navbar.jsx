import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="link">
        {/* <ul>
                <NavLink to={"/"} ><li>Home</li></NavLink>
                <NavLink to={"/about"} ><li>About</li></NavLink>
                <NavLink to={"/conceptused"} ><li>Concept Used</li></NavLink>
                <NavLink to={"/feedback"} ><li>Feedback</li></NavLink>
                <span></span>
            </ul> */}
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/conceptused" activeClassName="active">
              Concept Used
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" activeClassName="active">
              Feedback
            </NavLink>
          </li>
          <span></span>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
