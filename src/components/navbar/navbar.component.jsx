import { Link, Outlet, NavLink } from "react-router-dom";
import "./navbar.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../../assets/AGH Transport Logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>
      {/* <div className="nav-main-container">
        <div className="nav-container">
          <div className="navbar">
            <div className="nav-logo">
              <img src={logo} alt="AGH Logo" />
            </div>
            <div className="nav-links-centre">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/about">Services</Link>
                </li>
                <li>
                  <Link to="/about">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="nav-links-left">
              <ul>
               
                <li>
                  <Link to="/getaqoute" className="quote">
                    Get Quote{" "}
                    <FontAwesomeIcon icon={faAngleRight} id="padding-left" />{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* Mobile Nav */}
      <div className="nav-main-container">
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <img src={logo} alt="Logo " />
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {/* <li className="nav-item"> 
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>*/}
              <li className="nav-item">
                <NavLink
                  exact
                  to="/services"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item">
                <Link to="/getaqoute" className="quote nav-links">
                  Get Quote{" "}
                  <FontAwesomeIcon icon={faAngleRight} id="padding-left" />{" "}
                </Link>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
