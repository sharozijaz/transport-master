import footerLogo from "../../assets/Group-18.svg";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./footer.style.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={footerLogo} alt="Footer Logo" />
            </div>
            <div className="footer-form">
              <form>
                <div className="email-form">
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="email-button">
                  <button>
                    Send{" "}
                    <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-1">
              <div className="footer-nav-title">
                <h1>Company</h1>
              </div>
              <div className="footer-nav-links">
                <ul>
                  <li>
                    <Link to="/aagh">About AGH Transport</Link>
                  </li>
                  <li>
                    <Link to="/aagh">Location</Link>
                  </li>
                  <li>
                    <Link to="/aagh">Careers</Link>
                  </li>
                  <li>
                    <Link to="/aagh">Governes</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-nav-2">
              <div className="footer-nav-title">
                <h1>Contact</h1>
              </div>
              <div className="footer-nav-links">
                <ul>
                  <li>
                    <Link to="/aagh">Enquiries</Link>
                  </li>
                  <li>
                    <Link to="/aagh">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/aagh">Privacy Policy </Link>
                  </li>
                  <li>
                    <Link to="/aagh">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-nav-3">
              <div className="footer-nav-title">
                <h1>Services</h1>
              </div>
              <div className="footer-nav-links">
                <ul>
                  <li>
                    <Link to="/aagh">eAGH Transport Login</Link>
                  </li>
                  <li>
                    <Link to="/aagh">VPN Login</Link>
                  </li>
                  <li>
                    <Link to="/aagh">Stores</Link>
                  </li>
                  <li>
                    <Link to="/aagh">.</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div className="footer-line"></div>
        <div className="footer-rights">
          <div className="footer-copy">
            <p>Copyright © 2022 AGH TRANSPORT - All Rights Reserved.</p>
          </div>
          <div className="footer-icons">
            <FontAwesomeIcon icon={faFacebook} id="padding-left" />
            <FontAwesomeIcon icon={faTwitter} id="padding-left" />
            <FontAwesomeIcon icon={faLinkedin} id="padding-left" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
