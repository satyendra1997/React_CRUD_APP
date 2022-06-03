import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav id="navbar">
        <ul id="nav_ul">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Form</Link>
          </li>
          <li>
            <Link to={"/view"}>View List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
