import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./home.css";
import { useNavigate, Navigate } from "react-router-dom";
import Footer from "../footer/footer.component";
import Navbar from "../navbar/navbar.component";
import emailjs from "emailjs-com";
import LoadDetails from "./LoadDetails";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const GetQuotesPage1 = (props) => {
  const [textColorpickup, setTextColorpickup] = useState("white");
  const [textColordeliver, setTextColordeliver] = useState("white");
  const [textColoroption, setTextColoroption] = useState("white");
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [a, setA] = useState("");
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  var [address, setAddress] = React.useState("");
  var [address1, setAddress1] = React.useState("");
  const [timing, setTiming] = React.useState("");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rjbes5e",
        "template_kzibln8",
        e.target,
        "xEssf5cJrYAc_cAhT"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const handleSelect = (value) => {
    setAddress(value);
  };
  const toggle = () => {
    setState(!state);
    if (state1 == true) {
      setState1(false);
    }
    setA("ASAP");
    setTiming("ASAP");
  };
  const toggle1 = () => {
    setState1(!state1);
    if (state == true) {
      setState(false);
    }
    setA("Ready Now");
    setTiming("Ready Now");
  };
  let navigate = useNavigate();
  const [goToContact, setGoToContact] = React.useState(false);
  const [goToMain, setGoToMain] = React.useState(false);

  if (goToContact) {
    console.log(address);
    return <Navigate to="/loadDetails" />;
  }
  if (goToMain) {
    <Navigate to="/home" />;
  }
  function handleChange(e) {
    setAddress(e.target.value);
  }
  const database = [
    {
      pickup: "pickup1",
      deliver: "deliver1",
    },
    {
      pickup: "pickup2",
      deliver: "deliver2",
    },
  ];

  const errors = {
    upickup: "invalid pickup",
    udeliver: "invalid deliver",
  };
  const handle = () => {
    localStorage.setItem("pickupAddress", address);
    localStorage.setItem("dropoffAddress", address1);
    localStorage.setItem("timing", timing);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    var { upickup, udeliver } = document.forms[0];
    const userData = database.find((user) => user.pickup === upickup.value);

    if (userData) {
      if (userData.deliver !== udeliver.value) {
        setErrorMessages({ name: "udeliver", message: errors.udeliver });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "upickup", message: errors.upickup });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <form onSubmit={sendEmail}>
        <div className="app">
          
          <div className="login-form">
          <h3>
            <b>Receive Transport Quotes</b>
          </h3>
            <div
              style={{
                marginTop: "10px",
                textAlign: "center",
                fontWeight: "500",
                fontSize: "20px",
                color: "#003c71",
              }}
            ><br/>
              <b>Location & Availibility</b>
            </div>
            <br />
            <hr></hr>
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  marginTop: "20px",
                  color: "rgb(90, 90, 90)",
                  marginBottom: "5px",
                }}
              >
                Pickup
              </h4>
              <div>
                {/* <input value={address} onChange={(e)=>setAddress(e.target.value)} required style={{ width: '465px', height: '50px' }} id="autocomplete" placeholder= {props.address?props.address:"Search suburb"} name="pickup" type="text"></input> */}
                {/* {renderErrorMessage("pickup")} */}
                <GooglePlacesAutocomplete
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["AU"],
                    },
                  }}
                  selectProps={{
                    value,
                    onChange: setValue,
                  }}
                  apiKey="AIzaSyA-F9moLzfO6nheP9hVOhH5wsRjNo8xr6U"
                />
                {address.trim().length === 0 ? (
                  <p style={{ color: textColorpickup }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p></p>
                )}
              </div>

              <h4
                style={{
                  fontSize: "18px",
                  marginTop: "20px",
                  color: "rgb(90, 90, 90)",
                  marginBottom: "5px",
                }}
              >
                Deliver
              </h4>
              <div>
                {/* <input value={address1} onChange={(e)=>setAddress1(e.target.value)} required style={{ width: '465px', height: '50px' }} id="autocomplete" placeholder= {props.address1?props.address1:"Search suburb"} name="deliver" type="text"></input> */}
                {/* {renderErrorMessage("deliver")} */}
                <GooglePlacesAutocomplete
                  autocompletionRequest={{
                    componentRestrictions: {
                      country: ["AU"],
                    },
                  }}
                  selectProps={{
                    value1,
                    onChange: setValue1,
                  }}
                  apiKey="AIzaSyA-F9moLzfO6nheP9hVOhH5wsRjNo8xr6U"
                />
                {address1.trim().length === 0 ? (
                  <p style={{ color: textColordeliver }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p></p>
                )}
              </div>

              <h4
                style={{
                  fontSize: "18px",
                  marginTop: "20px",
                  color: "rgb(90, 90, 90)",
                  marginBottom: "5px",
                }}
              >
                When is it ready to go?
              </h4>
              <div>
                <button
                  style={{ width: "50%", height: "60px" }}
                  className={"option1 " + (state ? "toggle--close" : "")}
                  onClick={toggle}
                >
                  ASAP
                </button>
                <button
                  style={{ width: "50%", height: "60px" }}
                  className={"option1 " + (state1 ? "toggle--close" : "")}
                  onClick={toggle1}
                >
                  Ready Now
                </button>
                {timing.trim().length === 0 ? (
                  <p style={{ color: textColoroption }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p></p>
                )}
              </div>

              <br />
              <br />
              <div className="container2">
                <div className="btn-align1">
                  <button
                    className="w3-show-inline-btn2"
                    style={{ color: "white" }}
                    onClick={() => {
                      address = value.label;
                      console.log(value);
                      address1 = value1.label;
                      console.log(value1);
                      if (
                        address.trim().length !== 0 &&
                        address1.trim().length !== 0 &&
                        timing.trim().length !== 0
                      ) {
                        handle();
                        setGoToContact(true);
                      } else {
                        if (address.trim().length === 0) {
                          setTextColorpickup("red");
                        }
                        if (address1.trim().length === 0) {
                          setTextColordeliver("red");
                        }
                        if (timing.trim().length === 0) {
                          setTextColoroption("red");
                        }
                      }
                    }}
                  >
                    &#8250;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default GetQuotesPage1;
