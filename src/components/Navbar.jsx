import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow"  >
        <div className="container">
          <Link className="nav-link" to={"/"}>
            React
          </Link> 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-5">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/signin"}>
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/upload"}>
                  File Upload
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/signpage"}>
                  Sign Page
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
