import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = ({ open }) => {
  console.log(open);
  return (
    <div className={`navbar ${open ? "navbar__custom" : ""}`}>
      {/* logo */}
      <div className="navbar__logo">
        <h1 style={{ color: "#ffffff", fontSize: "50px" }}>B</h1>
      </div>

      {/* display after sign in */}
      {open ? (
        <div className="navbar__menu">
          <Link to="/blog">My Blogs</Link>
          <Link to="/blog">Create Blog</Link>
          <Link to="/blog">logout</Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
