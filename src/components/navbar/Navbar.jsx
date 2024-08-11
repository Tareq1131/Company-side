import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "./../../assets/Images/mt.jpg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid px-5">
          <NavLink to="/">
            <img src={logo} alt="Object Fashion" className="logoimg" style={{width:'100px',height: '50px'}} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isMobileMenuOpen ? "show" : ""
            }`}
            id="navbarTogglerDemo02"
          >
            <div className="nav-links py-2">
              <ul className="navbar-nav mb-2 mb-lg-0 gap-4 fs-5">
                <li className="nav-item">
                  <NavLink
                    exact="true"
                    className="nav-link"
                    activeclassname="active"
                    to="/"
                    onClick={handleLinkClick}
                  >
                    Home
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/aboutus"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/mainproduct"
                    onClick={handleLinkClick}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/sustainability"
                    onClick={handleLinkClick}
                  >
                    Sustainability
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/contact"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeclassname="active"
                    to="/patners"
                    onClick={handleLinkClick}
                  >
                    Partnership
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-bottom: 150px;
  .nav-link {
    font-weight: 700;
    font-family: serif;
  }
  .container-fluid {
    padding: 18px 100px !important;
  }
  .navbar-nav {
    margin-right: 310px;
  }

  @media (max-width: 1440px) {
    /* .container-fluid {
      padding: 0px 100px !important;
    } */
    .navbar-nav {
      margin-right: 210px;
    }
  }
  @media (max-width: 1024px) {
    /* .navbar {
      margin-top: 38px;
    } */
    .navbar-nav {
      margin-right: 10px;
    }
  }

  @media (max-width: 991px) {
    .container-fluid {
      padding: 0px 50px !important;
    }
    .navbar-collapse {
      position: fixed;
      top: 100px;
      left: 550;
      right: 0;
      background-color: #fff;
      z-index: 1000;
      padding: 10px 30px;
      display: none; /* Initially hide it */

      transition: max-height 0.5s ease-in-out; /* Smooth transition for max-height */
    }

    .navbar-collapse.show {
      display: block; /* Show it when toggler is clicked */
    }
    .nav-link {
      padding: 10px;
      margin-left: 10px;
      /* background-color: #992828; */
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    .navbar-collapse {
      top: 80px;
    }

    .navbar {
      margin-top: 0px;
      padding: 20px;
    }
    .container-fluid {
      padding: 0px 8px !important;
    }
    .logoimg {
      width: 140px;
    }
  }
  @media (max-width: 500px) {
    .navbar {
      margin-top: 0px;
      padding: 20px;
    }
    .container-fluid {
      padding: 0px 8px !important;
    }
    .logoimg {
      width: 100px;
    }
  }

  .nav-links {
    margin-left: auto; /* Align navigation links to the left */
  }

  .nav-link {
    &.active {
      /* font-weight: bold; */
      position: relative;
      background-color: #e9e4e4ef;
      padding: 10px 30px;
      border-radius: 5px;
      height: 100%;
      width: 100%;
      transition: 0.8s all ease-in-out;
    }
    /* .nav-link {
    &.active {

    } */

    &.active::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      /* background-color: #000; */
    }
  }
`;

export default Navbar;
