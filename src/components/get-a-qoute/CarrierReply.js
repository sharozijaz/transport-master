import React, {
  useState,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  ListItem,
  DropDownList,
} from "react";
import ReactDOM from "react-dom";
import "./home.css";
import "./CarrierReply.css";
import { Navigate } from "react-router-dom";
import AdditionalInfo from "./Additionalnfo";
import Navbar from "../navbar/navbar.component";
import emailjs from "emailjs-com";
import Footer from "../footer/footer.component";
function CarrierReply(props) {
  const state = { phone: "" };
  const [error, setError] = useState(null);
  const [textColor, setTextColor] = useState("white");
  const [textColor1, setTextColor1] = useState("white");
  const [textColor2, setTextColor2] = useState("white");
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+61");
  const [business, setBusiness] = useState("");
  const [goToAddionalInfo, setGoToAddionalInfo] = React.useState(false);
  const [goToLoadDetails, setGoToLoadDetails] = React.useState(false);
  const handle = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("business", business);
  };
  if (goToAddionalInfo) {
    return <Navigate to="/additionalInfo" />;
  }
  if (goToLoadDetails) {
    return <Navigate to="/loadDetails" />;
  }
  // const handleOnChange = value => {
  // console.log(value);
  // this.setState({ phone: value }, () => {
  //   console.log(this.state.phone);
  // });
  //  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div onSubmit={sendEmail} className="app">
        <div  className="login-form">
          <div className="headingg">
            <b>Carriers Reply to You With Quotations!</b>
          </div>
          <hr></hr>
          <br />
          <h4 style={{ fontSize: "18px" }}>Name</h4>
          <div>
            <input
              style={{ fontSize: "13px", height: "40px", width: "100%" }}
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name.trim().length === 0 ? (
              <p style={{ color: textColor }}>
                &#x24D8; Please fill this field
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <h4 style={{ fontSize: "18px", marginTop: "15px" }}>Phone</h4>
          <div>
            <input
              style={{ fontSize: "13px", height: "40px", width: "100%" }}
              maxLength="12"
              required
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phone.trim().length === 3 ? (
              <p style={{ color: textColor1 }}>
                &#x24D8; Please fill this field
              </p>
            ) : (
              <p></p>
            )}
            {/* <PhoneInput */}
            {/* inputExtraProps={{ */}
            {/* name: "phone", */}
            {/* }} */}
            {/* defaultCountry={"AU"} */}
            {/* value={phone} */}
            {/* onChange={(e) => setPhone(e.target.value)} */}
            {/* /> */}
          </div>
          <h4 style={{ fontSize: "18px", marginTop: "15px" }}>Email</h4>
          <div>
            <input
              value={email}
              onChange={handleChange}
              required
              style={{
                fontSize: "13px",
                height: "40px",
                borderRadius: "3px",
                width: "100%",
              }}
              type="email"
              placeholder="@mail.com"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            {email.trim().length === 0 ? (
              <p style={{ color: textColor2 }}>
                &#x24D8; Please fill this field
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <h4 style={{ fontSize: "18px", marginTop: "15px" }}>Business (optional)</h4>
          <div>
            <input
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              style={{ fontSize: "13px", height: "40px", width: "100%" }}
              type="text"
              placeholder="Business Name"
            />
          </div>
          <br />
          <br />
          <div className="container2">
            <div className="btn-align">
              <button
                className="w3-show-inline-btn2"
                style={{ color: "white" }}
                onClick={() => {
                  setGoToLoadDetails(true);
                }}
              >
                &#8249;
              </button>
            </div>
            <div className="btn-align1">
              <button
                className="w3-show-inline-btn2"
                style={{ color: "white" }}
                onClick={() => {
                  if (
                    name.trim().length !== 0 &&
                    email.trim().length !== 0 &&
                    phone.trim().length !== 3
                  ) {
                    handle();
                    setGoToAddionalInfo(true);
                  } else {
                    if (name.trim().length === 0) {
                      setTextColor("red");
                    }
                    if (phone.trim().length === 3) {
                      setTextColor1("red");
                    }
                    if (email.trim().length === 0) {
                      setTextColor2("red");
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
      <Footer />
    </div>
  );
}
export default CarrierReply;
