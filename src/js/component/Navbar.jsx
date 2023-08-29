import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Home</span>
      </Link>
      <div className="ml-auto">
        <Link to="/addcontact">
          <span className="navbar-brand mb-0 h1">Add Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
