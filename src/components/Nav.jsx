import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active" className="normal">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="normal"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
