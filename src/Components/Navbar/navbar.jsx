import React from 'react';
import './navbar.css'
import logo1 from "./bg removed review guru logo.png";
import { useState } from 'react';

function Navbar() {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

    const handleDropdownToggle = () => {
      setIsDropdownOpen1(!isDropdownOpen1);
    };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light shadow navbar-content">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo1} alt="logo-image" className="logo-image" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Terms & Conditions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Privacy Policy
                </a>
              </li>
              <div className="profile d-flex flex-row mx-5">
                <li>
                  <div className="btn-group dropleft dropdown-user mt-2">
                    <a href="/profile">
                      <i
                        className="fa fa-user-o dropdown-toggle"
                        onClick={handleDropdownToggle}
                        aria-haspopup="true"
                        style={{ fontSize: "25px", color: "black" }}
                        aria-expanded={isDropdownOpen1 ? "true" : "false"}
                      ></i>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle1"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i
                      class="fa-regular fa-bell"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="">
                        Notifications
                      </a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export  default Navbar;
 