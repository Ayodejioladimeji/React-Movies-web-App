import React from "react";
import "./Nav.css";
import "./NavQuery.css";
import icon from "./layomi.png";

const Nav = ({ searchTerm, handleChange, handleSubmit }) => {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <div className="icon-link">
          <img src={icon} alt="link" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Nav;
