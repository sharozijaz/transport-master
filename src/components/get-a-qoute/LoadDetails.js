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
import "./LoadDetails.css";
import { Navigate } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import { CCloseButton } from "@coreui/react";
import CarrierReply from "./CarrierReply";
import Footer from "../footer/footer.component";

function LoadDetails(props) {
  const [textColor, setTextColor] = useState("white");
  const [textColor1, setTextColor1] = useState("white");
  const [textColor2, setTextColor2] = useState("white");
  const [textColor3, setTextColor3] = useState("white");
  const [textColor4, setTextColor4] = useState("white");
  const [textColor5, setTextColor5] = useState("white");
  const [textColor6, setTextColor6] = useState("white");
  const [textColor7, setTextColor7] = useState("white");
  const [textColor8, setTextColor8] = useState("white");
  const [textColor9, setTextColor9] = useState("#f7f7f7");
  const [textColor10, setTextColor10] = useState("#f7f7f7");
  const [textColor11, setTextColor11] = useState("#f7f7f7");
  const [textColor12, setTextColor12] = useState("#f7f7f7");
  const [textColor13, setTextColor13] = useState("#f7f7f7");
  const [textColor14, setTextColor14] = useState("#f7f7f7");
  const [textColor15, setTextColor15] = useState("#f7f7f7");
  const [textColor16, setTextColor16] = useState("#f7f7f7");
  const [textColor17, setTextColor17] = useState("#f7f7f7");
  const [textColor18, setTextColor18] = useState("#f7f7f7");
  const [textColor19, setTextColor19] = useState("#f7f7f7");
  const [textColor20, setTextColor20] = useState("#f7f7f7");
  const [textColor21, setTextColor21] = useState("#f7f7f7");
  const [textColor22, setTextColor22] = useState("#f7f7f7");
  const [textColor23, setTextColor23] = useState("#f7f7f7");
  const [textColor24, setTextColor24] = useState("#f7f7f7");
  const [textColor25, setTextColor25] = useState("#f7f7f7");
  const [textColor26, setTextColor26] = useState("#f7f7f7");
  const [textColor27, setTextColor27] = useState("#f7f7f7");
  const [textColor28, setTextColor28] = useState("#f7f7f7");
  const [textColor29, setTextColor29] = useState("#f7f7f7");
  const [textColor30, setTextColor30] = useState("#f7f7f7");
  const [textColor31, setTextColor31] = useState("#f7f7f7");
  const [textColor32, setTextColor32] = useState("#f7f7f7");
  const [textColor33, setTextColor33] = useState("white");
  const [textColor34, setTextColor34] = useState("#f7f7f7");
  const [textColor35, setTextColor35] = useState("#f7f7f7");
  const [textColor36, setTextColor36] = useState("#f7f7f7");
  const [counter, setCounter] = useState(0);
  const [describe, setDescribe] = useState("");
  const [qty, setQty] = useState("");
  const [H, setH] = useState("");
  const [L, setL] = useState("");
  const [W, setW] = useState("");
  const [wgt, setWgt] = useState("");
  const [option, setOption] = useState("");
  const [op, setOp] = useState("");
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [describe1, setDescribe1] = useState("");
  const [qty1, setQty1] = useState("");
  const [H1, setH1] = useState("");
  const [L1, setL1] = useState("");
  const [W1, setW1] = useState("");
  const [wgt1, setWgt1] = useState("");
  const [op1, setOp1] = useState("");
  const [describe2, setDescribe2] = useState("");
  const [qty2, setQty2] = useState("");
  const [H2, setH2] = useState("");
  const [L2, setL2] = useState("");
  const [W2, setW2] = useState("");
  const [wgt2, setWgt2] = useState("");
  const [op2, setOp2] = useState("");
  const [describe3, setDescribe3] = useState("");
  const [qty3, setQty3] = useState("");
  const [H3, setH3] = useState("");
  const [L3, setL3] = useState("");
  const [W3, setW3] = useState("");
  const [wgt3, setWgt3] = useState("");
  const [op3, setOp3] = useState("");
  const [op4, setOp4] = useState("");
  const [op5, setOp5] = useState("");
  const [op6, setOp6] = useState("");
  const [op7, setOp7] = useState("");
  const [state6, setState6] = useState(false);
  const [state7, setState7] = useState(false);
  const [state8, setState8] = useState(false);
  const [state9, setState9] = useState(false);
  const [state10, setState10] = useState(false);
  const [state11, setState11] = useState(false);
  const [state12, setState12] = useState(false);
  const [state13, setState13] = useState(false);
  const [state14, setState14] = useState(false);
  const [state15, setState15] = useState(false);
  const [state16, setState16] = useState(false);
  const [state17, setState17] = useState(false);
  const [state18, setState18] = useState(false);
  const [state19, setState19] = useState(false);
  const [state20, setState20] = useState(false);
  const [state21, setState21] = useState(false);
  const [state22, setState22] = useState(false);
  const [state23, setState23] = useState(false);
  const [goToReply, setGoToReply] = React.useState(false);
  const [GoToGetQoute, setGoToGetQoute] = React.useState(false);
  const [anotherForm, setAnotherForm] = React.useState(false);
  const [anotherForm1, setAnotherForm1] = React.useState(false);
  const [anotherForm2, setAnotherForm2] = React.useState(false);
  const formhandler = () => {
    if (counter === 0) {
      setAnotherForm(true);
    }
    if (counter === 1) {
      setAnotherForm1(true);
    }
    if (counter === 2) {
      setAnotherForm2(true);
    }
    setCounter((count) => count + 1);
  };
  const handle = () => {
    localStorage.setItem("option", option);
    localStorage.setItem("l", L);
    localStorage.setItem("h", H);
    localStorage.setItem("w", W);
    localStorage.setItem("wgt", wgt);
    localStorage.setItem("qty", qty);
    localStorage.setItem("describe", describe);
    localStorage.setItem("operationalNonGear", op);
    localStorage.setItem("l1", L1);
    localStorage.setItem("h1", H1);
    localStorage.setItem("w1", W1);
    localStorage.setItem("wgt1", wgt1);
    localStorage.setItem("qty1", qty1);
    localStorage.setItem("describe1", describe1);
    localStorage.setItem("operationalNonGear1", op1);
    localStorage.setItem("l2", L2);
    localStorage.setItem("h2", H2);
    localStorage.setItem("w2", W2);
    localStorage.setItem("wgt2", wgt2);
    localStorage.setItem("qty2", qty2);
    localStorage.setItem("describe2", describe2);
    localStorage.setItem("operationalNonGear2", op2);
    localStorage.setItem("l3", L3);
    localStorage.setItem("h3", H3);
    localStorage.setItem("w3", W3);
    localStorage.setItem("wgt3", wgt3);
    localStorage.setItem("qty3", qty3);
    localStorage.setItem("describe3", describe3);
    localStorage.setItem("operationalNonGear3", op3);
    localStorage.setItem("mmMtrs", op4);
    localStorage.setItem("mmMtrs1", op5);
    localStorage.setItem("mmMtrs2", op6);
    localStorage.setItem("mmMtrs3", op7);
  };
  if (goToReply) {
    return <Navigate to="/carrierReply" />;
  }
  if (GoToGetQoute) {
    return <Navigate to="/getaqoute" />;
  }
  const toggle = () => {
    setState(!state);
    if (state1 == true) {
      setState1(false);
    }
    setOp("Operational");
  };
  const toggle1 = () => {
    setState1(!state1);
    if (state == true) {
      setState(false);
    }
    setOp("Non-Gear");
  };
  const toggle2 = () => {
    setState2(!state2);
  };
  const toggle3 = () => {
    setState3(!state3);
    setGoToReply(true);
  };
  const toggle4 = () => {
    setState4(!state4);
    if (state5 == true) {
      setState5(false);
    }
    setOp4("mm");
  };
  const toggle5 = () => {
    setState5(!state5);
    if (state4 == true) {
      setState4(false);
    }
    setOp4("mtrs");
  };
  const toggle6 = () => {
    setState6(!state6);
    if (state7 == true) {
      setState7(false);
    }
    setOp1("Operational");
  };
  const toggle7 = () => {
    setState7(!state7);
    if (state6 == true) {
      setState6(false);
    }
    setOp1("Non-Gear");
  };
  const toggle8 = () => {
    setState8(!state8);
  };
  const toggle9 = () => {
    setState9(!state9);
    setGoToReply(true);
  };
  const toggle10 = () => {
    setState10(!state10);
    if (state11 == true) {
      setState11(false);
    }
    setOp5("mm");
  };
  const toggle11 = () => {
    if (state10 == true) {
      setState10(false);
    }
    setState11(!state11);
    setOp5("mtrs");
  };
  const toggle12 = () => {
    setState12(!state12);
    if (state13 == true) {
      setState13(false);
    }
    setOp2("Operational");
  };
  const toggle13 = () => {
    setState13(!state13);
    if (state12 == true) {
      setState12(false);
    }
    setOp2("Non-Gear");
  };
  const toggle14 = () => {
    setState14(!state14);
  };
  const toggle15 = () => {
    setState15(!state15);
    setGoToReply(true);
  };
  const toggle16 = () => {
    setState16(!state16);
    if (state17 == true) {
      setState17(false);
    }
    setOp6("mm");
  };
  const toggle17 = () => {
    if (state16 == true) {
      setState16(false);
    }
    setState17(!state17);
    setOp6("mtrs");
  };
  const toggle18 = () => {
    setState18(!state18);
    if (state19 == true) {
      setState19(false);
    }
    setOp3("Operational");
  };
  const toggle19 = () => {
    setState19(!state19);
    if (state18 == true) {
      setState18(false);
    }
    setOp3("Non-Gear");
  };
  const toggle20 = () => {
    setState20(!state20);
  };
  const toggle21 = () => {
    setState21(!state21);
    setGoToReply(true);
  };
  const toggle22 = () => {
    setState22(!state22);
    if (state23 == true) {
      setState23(false);
    }
    setOp7("mm");
  };
  const toggle23 = () => {
    if (state22 == true) {
      setState22(false);
    }
    setState23(!state23);
    setOp7("mtrs");
  };

  return (
    <div>
      <Navbar />
      <div className="app">
        <div style={{marginTop:'12%'}}  className="login-form">
          <div
            style={{
              marginTop: "10px",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "20px",
              color: "#003c71",
            }}
          >
            <b>Load Details</b>
          </div>
          <br />
          <hr />
          <div>
            <h4
              style={{
                fontSize: "18px",
                marginTop: "20px",
                color: "rgb(90, 90, 90)",
                marginBottom: "5px",
              }}
            >
              Category
            </h4>
            <div>
              <select
                value={option}
                onChange={(e) => setOption(e.target.value)}
                style={{ width: "100%", height: "51px", borderRadius: "3px" }}
                id="Please Select"
              >
                <option value="Please select">Please select</option>
                <option value="Machinery">Machinery</option>
                <option value="Truck">Truck</option>
                <option value="Car">Car</option>
                <option value="Motorbike">Motorbike</option>
                <option value="Pallets">Pallets</option>
                <option value="Shipping Container">Shipping Container</option>
                <option value="General">General</option>
                <option value="Tipper needed">Tipper needed</option>
                <option value="Hay">Hay</option>
                <option value="Trailers">Trailers</option>
                <option value="Boat">Boat</option>
                <option value="Portable Building">Portable Building</option>
                <option value="Furniture Remover">
                  Furniture Remover (Full Home Load)
                </option>
                <option value="Pipe">Pipe</option>
                <option value="Lifestock">Lifestock (Not Pets)</option>
                <option value="Other">Other</option>
                <option value="Pilot">Pilot</option>
                <option value="Hotshot">Hotshot</option>
              </select>
              {option.trim().length === 0 ? (
                <p style={{ color: textColor }}>
                  &#x24D8; Please fill this field
                </p>
              ) : (
                <p style={{ color: textColor }}>Please fill this field</p>
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
              Describe Cargo
            </h4>
            <div>
              <input
                value={describe}
                required
                onChange={(e) => setDescribe(e.target.value)}
                style={{
                  width: "100%",
                  height: "50px",
                  borderLeftColor: "red",
                  borderLeftWidth: "5px",
                }}
                type="text"
                placeholder="example: Steers55"
              />
              {describe.trim().length === 0 ? (
                <p style={{ color: textColor1 }}>
                  &#x24D8; Please fill this field
                </p>
              ) : (
                <p style={{ color: textColor1 }}>Please fill this field</p>
              )}
            </div>
            {/* <h4
              style={{
                fontSize: "18px",
                marginTop: "20px",
                color: "rgb(90, 90, 90)",
                marginBottom: "5px",
              }}
            >
              Options
            </h4> 
            <div>
              <button
                className={"option1 " + (state ? "toggle--close" : "")}
                onClick={toggle}
              >
                Operational
              </button>
              <button
                className={"option1 " + (state1 ? "toggle--close" : "")}
                onClick={toggle1}
              >
                Non Geor
              </button>
              {op.trim().length === 0 ? (
                <p style={{ color: textColor2 }}>
                  &#x24D8; Please fill this field
                </p>
              ) : (
                <p></p>
              )}
            </div>*/}
            <h4
              style={{
                fontSize: "18px",
                marginTop: "20px",
                color: "rgb(90, 90, 90)",
                marginBottom: "5px",
              }}
            >
              Do you have any measurements &/or weight?
            </h4>
            <div className="container1">
              <div className="btn-align">
                <button
                  className={"option2 " + (state2 ? "toggle--close" : "")}
                  onClick={toggle2}
                >
                  Yes
                </button>
                <button
                  className={"option2 " + (state3 ? "toggle--close" : "")}
                  onClick={toggle3}
                >
                  No
                </button>
                {state2 === false && state3 === false ? (
                  <p style={{ color: textColor33 }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p style={{ color: textColor33 }}>Please fill this field</p>
                )}
              </div>
              <div className="btn-align1">
                <button
                  className={"option3 " + (state4 ? "toggle--close" : "")}
                  onClick={toggle4}
                >
                  MM
                </button>
                <button
                  className={"option3 " + (state5 ? "toggle--close" : "")}
                  onClick={toggle5}
                >
                  Mtrs
                </button>
                {op4.trim().length === 0 ? (
                  <p style={{ color: textColor3 }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p style={{ color: textColor3 }}>Please fill this field</p>
                )}
              </div>
            </div>
            <br></br>
            <div className="container1">
              <div className="btn-align">
                <button className="buttonss ">L</button>
                <input
                  value={L}
                  required
                  onChange={(e) => setL(e.target.value)}
                  style={{ height: "47px" }}
                  type="text"
                  className="input-field"
                />
                {L.trim().length === 0 ? (
                  <p style={{ color: textColor4 }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p style={{ color: textColor4 }}>Please fill this field</p>
                )}
              </div>
              <div className="btn-align2">
                <button className="buttonss ">W</button>
                <input
                  value={W}
                  required
                  onChange={(e) => setW(e.target.value)}
                  style={{ height: "47px" }}
                  type="text"
                  className="input-field"
                />
                {W.trim().length === 0 ? (
                  <p style={{ color: textColor5 }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p style={{ color: textColor5 }}>Please fill this field</p>
                )}
              </div>
            </div>
            <br></br>
            <div className="container1">
              <div className="btn-align">
                <button className="buttonss ">H</button>
                <input
                  value={H}
                  required
                  onChange={(e) => setH(e.target.value)}
                  style={{ height: "47px" }}
                  type="text"
                  className="input-field"
                />
                {H.trim().length === 0 ? (
                  <p style={{ color: textColor6 }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p style={{ color: textColor6 }}>Please fill this field</p>
                )}
              </div>
              <div className="btn-align2">
                <button className="buttonss ">Wgt</button>
                <input
                  value={wgt}
                  required
                  onChange={(e) => setWgt(e.target.value)}
                  style={{ height: "47px" }}
                  type="text"
                  className="input-field1"
                />
                <select
                  label="Please select"
                  style={{
                    width: "70px",
                    height: "46px",
                    borderRadius: "3px",
                    "padding-top": "10px",
                    "padding-bottom": "10px",
                    border: "1px solid grey",
                  }}
                >
                  <option value="Please select">Please select</option>
                  <option value="Kg">Kg</option>
                  <option value="Tn">Tn</option>
                </select>
                {wgt.trim().length === 0 ? (
                  <p style={{ color: textColor7 }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p style={{ color: textColor7 }}>Please fill this field</p>
                )}
              </div>
            </div>
            <br></br>
            <div className="container1">
              <div className="btn-align">
                <button className="buttonss ">Qty</button>
                <input
                  value={qty}
                  required
                  onChange={(e) => setQty(e.target.value)}
                  style={{ height: "47px" }}
                  type="text"
                  className="input-field"
                />
                {qty.trim().length === 0 ? (
                  <p style={{ color: textColor8 }}>
                    &#x24D8; Please fill this field
                  </p>
                ) : (
                  <p style={{ color: textColor8 }}>Please fill this field</p>
                )}
              </div>
            </div>
            <br></br>
            <div>
              {anotherForm == true ? (
                <div className="another-form">
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "-100px",
                      marginTop: "-0px",
                    }}
                  >
                    <CCloseButton
                      className="close-button"
                      onClick={() => {
                        setAnotherForm(false);
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "110px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Describe Cargo
                  </h4>
                  <div>
                    <input
                      value={describe1}
                      required
                      onChange={(e) => setDescribe1(e.target.value)}
                      style={{
                        width: "100%",
                        height: "50px",
                        borderLeftColor: "red",
                        borderLeftWidth: "5px",
                      }}
                      type="text"
                      placeholder="example: Steers55"
                    />
                    {describe1.trim().length === 0 ? (
                      <p style={{ color: textColor9 }}>
                        &#x24D8; Please fill this field
                      </p>
                    ) : (
                      <p style={{ color: textColor9 }}>Please fill this field</p>
                    )}
                  </div>
                  {/* <h4 
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Options
                  </h4>
                  <div>
                    <button
                      className={"option1 " + (state6 ? "toggle--close" : "")}
                      onClick={toggle6}
                    >
                      Operational
                    </button>
                    <button
                      className={"option1 " + (state7 ? "toggle--close" : "")}
                      onClick={toggle7}
                    >
                      Non Geor
                    </button>
                    {op1.trim().length === 0 ? (
                      <p style={{ color: textColor10 }}>
                        &#x24D8; Please fill this field
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </div>*/}
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Do you have any measurements &/or weight?
                  </h4>
                  <div className="container1">
                    <div className="btn-align">
                      <button
                        className={"option2 " + (state8 ? "toggle--close" : "")}
                        onClick={toggle8}
                      >
                        Yes
                      </button>
                      <button
                        className={"option2 " + (state9 ? "toggle--close" : "")}
                        onClick={toggle9}
                      >
                        No
                      </button>
                      {state8 === false && state9 === false ? (
                        <p style={{ color: textColor34 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor34 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align1">
                      <button
                        className={
                          "option3 " + (state10 ? "toggle--close" : "")
                        }
                        onClick={toggle10}
                      >
                        MM
                      </button>
                      <button
                        className={
                          "option3 " + (state11 ? "toggle--close" : "")
                        }
                        onClick={toggle11}
                      >
                        Mtrs
                      </button>
                      {op5.trim().length === 0 ? (
                        <p style={{ color: textColor11 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor11 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">L</button>
                      <input
                        value={L1}
                        required
                        onChange={(e) => setL1(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {L1.trim().length === 0 ? (
                        <p style={{ color: textColor12 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor12 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align2">
                      <button className="buttonss ">W</button>
                      <input
                        value={W1}
                        required
                        onChange={(e) => setW1(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {W1.trim().length === 0 ? (
                        <p style={{ color: textColor13 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor13 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">H</button>
                      <input
                        value={H1}
                        required
                        onChange={(e) => setH1(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {H1.trim().length === 0 ? (
                        <p style={{ color: textColor14 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor14 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align2">
                      <button className="buttonss ">Wgt</button>
                      <input
                        value={wgt1}
                        required
                        onChange={(e) => setWgt1(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field1"
                      />
                      <select
                        label="Please select"
                        style={{
                          width: "70px",
                          height: "46px",
                          borderRadius: "3px",
                          "padding-top": "10px",
                          "padding-bottom": "10px",
                          border: "1px solid grey",
                        }}
                      >
                        <option value="Please select">Please select</option>
                        <option value="Kg">Kg</option>
                        <option value="Tn">Tn</option>
                      </select>
                      {wgt1.trim().length === 0 ? (
                        <p style={{ color: textColor15 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor15 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">Qty</button>
                      <input
                        value={qty1}
                        required
                        onChange={(e) => setQty1(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {qty1.trim().length === 0 ? (
                        <p style={{ color: textColor16 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor16 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              {anotherForm1 == true ? (
                <div className="another-form">
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "-100px",
                      marginTop: "-0px",
                    }}
                  >
                    <CCloseButton
                      className="close-button"
                      onClick={() => {
                        setAnotherForm1(false);
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "110px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Describe Cargo
                  </h4>
                  <div>
                    <input
                      value={describe2}
                      required
                      onChange={(e) => setDescribe2(e.target.value)}
                      style={{
                        width: "100%",
                        height: "50px",
                        borderLeftColor: "red",
                        borderLeftWidth: "5px",
                      }}
                      type="text"
                      placeholder="example: Steers55"
                    />
                    {describe2.trim().length === 0 ? (
                      <p style={{ color: textColor17 }}>
                        &#x24D8; Please fill this field
                      </p>
                    ) : (
                      <p style={{ color: textColor17 }}>Please fill this field</p>
                    )}
                  </div>
                  {/* <h4 
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Options
                  </h4>
                  <div>
                    <button
                      className={"option1 " + (state12 ? "toggle--close" : "")}
                      onClick={toggle12}
                    >
                      Operational
                    </button>
                    <button
                      className={"option1 " + (state13 ? "toggle--close" : "")}
                      onClick={toggle13}
                    >
                      Non Geor
                    </button>
                    {op2.trim().length === 0 ? (
                      <p style={{ color: textColor18 }}>
                        &#x24D8; Please fill this field
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </div>*/}
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Do you have any measurements &/or weight?
                  </h4>
                  <div className="container1">
                    <div className="btn-align">
                      <button
                        className={
                          "option2 " + (state14 ? "toggle--close" : "")
                        }
                        onClick={toggle14}
                      >
                        Yes
                      </button>
                      <button
                        className={
                          "option2 " + (state15 ? "toggle--close" : "")
                        }
                        onClick={toggle15}
                      >
                        No
                      </button>
                      {state14 === false && state15 === false ? (
                        <p style={{ color: textColor35 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor35 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align1">
                      <button
                        className={
                          "option3 " + (state16 ? "toggle--close" : "")
                        }
                        onClick={toggle16}
                      >
                        MM
                      </button>
                      <button
                        className={
                          "option3 " + (state17 ? "toggle--close" : "")
                        }
                        onClick={toggle17}
                      >
                        Mtrs
                      </button>
                      {op6.trim().length === 0 ? (
                        <p style={{ color: textColor19 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor19 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">L</button>
                      <input
                        value={L2}
                        required
                        onChange={(e) => setL2(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {L2.trim().length === 0 ? (
                        <p style={{ color: textColor20 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor20 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align2">
                      <button className="buttonss ">W</button>
                      <input
                        value={W2}
                        required
                        onChange={(e) => setW2(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {W2.trim().length === 0 ? (
                        <p style={{ color: textColor21 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor21 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">H</button>
                      <input
                        value={H2}
                        required
                        onChange={(e) => setH2(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {H2.trim().length === 0 ? (
                        <p style={{ color: textColor22 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor22 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align2">
                      <button className="buttonss ">Wgt</button>
                      <input
                        value={wgt2}
                        required
                        onChange={(e) => setWgt2(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field1"
                      />
                      <select
                        label="Please select"
                        style={{
                          width: "70px",
                          height: "46px",
                          borderRadius: "3px",
                          "padding-top": "10px",
                          "padding-bottom": "10px",
                          border: "1px solid grey",
                        }}
                      >
                        <option value="Please select">Please select</option>
                        <option value="Kg">Kg</option>
                        <option value="Tn">Tn</option>
                      </select>
                      {wgt2.trim().length === 0 ? (
                        <p style={{ color: textColor23 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor23 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">Qty</button>
                      <input
                        value={qty2}
                        required
                        onChange={(e) => setQty2(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {qty2.trim().length === 0 ? (
                        <p style={{ color: textColor24 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor24 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              {anotherForm2 == true ? (
                <div className="another-form">
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "-100px",
                      marginTop: "-0px",
                    }}
                  >
                    <CCloseButton
                      className="close-button"
                      onClick={() => {
                        setAnotherForm2(false);
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "110px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Describe Cargo
                  </h4>
                  <div>
                    <input
                      value={describe3}
                      required
                      onChange={(e) => setDescribe3(e.target.value)}
                      style={{
                        width: "100%",
                        height: "50px",
                        borderLeftColor: "red",
                        borderLeftWidth: "5px",
                      }}
                      type="text"
                      placeholder="example: Steers55"
                    />
                    {describe3.trim().length === 0 ? (
                      <p style={{ color: textColor25 }}>
                        &#x24D8; Please fill this field
                      </p>
                    ) : (
                      <p style={{ color: textColor25 }}>Please fill this field</p>
                    )}
                  </div>
                  {/* <h4 
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Options
                  </h4>
                  <div>
                    <button
                      className={"option1 " + (state18 ? "toggle--close" : "")}
                      onClick={toggle18}
                    >
                      Operational
                    </button>
                    <button
                      className={"option1 " + (state19 ? "toggle--close" : "")}
                      onClick={toggle19}
                    >
                      Non Geor
                    </button>
                    {op3.trim().length === 0 ? (
                      <p style={{ color: textColor26 }}>
                        &#x24D8; Please fill this field
                      </p>
                    ) : (
                      <p></p>
                    )}
                  </div>*/}
                  <h4
                    style={{
                      fontSize: "18px",
                      marginTop: "20px",
                      color: "rgb(90, 90, 90)",
                      marginBottom: "5px",
                    }}
                  >
                    Do you have any measurements &/or weight?
                  </h4>
                  <div className="container1">
                    <div className="btn-align">
                      <button
                        className={
                          "option2 " + (state20 ? "toggle--close" : "")
                        }
                        onClick={toggle20}
                      >
                        Yes
                      </button>
                      <button
                        className={
                          "option2 " + (state21 ? "toggle--close" : "")
                        }
                        onClick={toggle21}
                      >
                        No
                      </button>
                      {state20 === false && state21 === false ? (
                        <p style={{ color: textColor36 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor36 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align1">
                      <button
                        className={
                          "option3 " + (state22 ? "toggle--close" : "")
                        }
                        onClick={toggle22}
                      >
                        MM
                      </button>
                      <button
                        className={
                          "option3 " + (state23 ? "toggle--close" : "")
                        }
                        onClick={toggle23}
                      >
                        Mtrs
                      </button>
                      {op7.trim().length === 0 ? (
                        <p style={{ color: textColor27 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor27 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">L</button>
                      <input
                        value={L3}
                        required
                        onChange={(e) => setL3(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {L3.trim().length === 0 ? (
                        <p style={{ color: textColor28 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor28 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align2">
                      <button className="buttonss ">W</button>
                      <input
                        value={W3}
                        required
                        onChange={(e) => setW3(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {W3.trim().length === 0 ? (
                        <p style={{ color: textColor29 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor29 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">H</button>
                      <input
                        value={H3}
                        required
                        onChange={(e) => setH3(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {H3.trim().length === 0 ? (
                        <p style={{ color: textColor30 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor30 }}>Please fill this field</p>
                      )}
                    </div>
                    <div className="btn-align2">
                      <button className="buttonss ">Wgt</button>
                      <input
                        value={wgt3}
                        required
                        onChange={(e) => setWgt3(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field1"
                      />
                      <select
                        label="Please select"
                        style={{
                          width: "70px",
                          height: "46px",
                          borderRadius: "3px",
                          "padding-top": "10px",
                          "padding-bottom": "10px",
                          border: "1px solid grey",
                        }}
                      >
                        <option value="Please select">Please select</option>
                        <option value="Kg">Kg</option>
                        <option value="Tn">Tn</option>
                      </select>
                      {wgt3.trim().length === 0 ? (
                        <p style={{ color: textColor31 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor31 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                  <br></br>
                  <div className="container1">
                    <div className="btn-align">
                      <button className="buttonss ">Qty</button>
                      <input
                        value={qty3}
                        required
                        onChange={(e) => setQty3(e.target.value)}
                        style={{ height: "47px" }}
                        type="text"
                        className="input-field"
                      />
                      {qty3.trim().length === 0 ? (
                        <p style={{ color: textColor32 }}>
                          &#x24D8; Please fill this field
                        </p>
                      ) : (
                        <p style={{ color: textColor32 }}>Please fill this field</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <br />
            <br />
            <div className="container2">
              <button className="another-form-button" onClick={formhandler}>
                + Add another item
              </button>
            </div>

            <br />
            <br />
            <div className="container2">
              <div className="btn-align">
                <button
                  className="w3-show-inline-btn2"
                  style={{ color: "white" }}
                  onClick={() => {
                    setGoToGetQoute(true);
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
                      option.trim().length !== 0 &&
                      describe.trim().length !== 0 &&
                      op.trim().length !== 0 &&
                      L.trim().length !== 0 &&
                      W.trim().length !== 0 &&
                      qty.trim().length !== 0 &&
                      wgt.trim().length !== 0 &&
                      H.trim().length !== 0 &&
                      op4.trim().length !== 0
                    ) {
                      if (anotherForm === true) {
                        if (
                          describe1.trim().length !== 0 &&
                          op1.trim().length !== 0 &&
                          L1.trim().length !== 0 &&
                          W1.trim().length !== 0 &&
                          qty1.trim().length !== 0 &&
                          wgt1.trim().length !== 0 &&
                          H1.trim().length !== 0 &&
                          op5.trim().length !== 0
                        ) {
                          handle();
                          setGoToReply(true);
                        } else {
                          if (describe1.trim().length === 0) {
                            setTextColor9("red");
                          }
                          if (op1.trim().length === 0) {
                            setTextColor10("red");
                          }
                          if (op5.trim().length === 0) {
                            setTextColor11("red");
                          }
                          if (L1.trim().length === 0) {
                            setTextColor12("red");
                          }
                          if (W1.trim().length === 0) {
                            setTextColor13("red");
                          }
                          if (H1.trim().length === 0) {
                            setTextColor14("red");
                          }
                          if (wgt1.trim().length === 0) {
                            setTextColor15("red");
                          }
                          if (qty1.trim().length === 0) {
                            setTextColor16("red");
                          }
                          if (state8 === false && state9 === false) {
                            setTextColor34("red");
                          }
                        }
                      } else if (anotherForm1 === true) {
                        if (
                          describe2.trim().length !== 0 &&
                          op2.trim().length !== 0 &&
                          L2.trim().length !== 0 &&
                          W2.trim().length !== 0 &&
                          qty2.trim().length !== 0 &&
                          wgt2.trim().length !== 0 &&
                          H2.trim().length !== 0 &&
                          op6.trim().length !== 0
                        ) {
                          handle();
                          setGoToReply(true);
                        } else {
                          if (describe2.trim().length === 0) {
                            setTextColor17("red");
                          }
                          if (op2.trim().length === 0) {
                            setTextColor18("red");
                          }
                          if (op6.trim().length === 0) {
                            setTextColor19("red");
                          }
                          if (L2.trim().length === 0) {
                            setTextColor20("red");
                          }
                          if (W2.trim().length === 0) {
                            setTextColor21("red");
                          }
                          if (H2.trim().length === 0) {
                            setTextColor22("red");
                          }
                          if (wgt2.trim().length === 0) {
                            setTextColor23("red");
                          }
                          if (qty2.trim().length === 0) {
                            setTextColor24("red");
                          }
                          if (state14 === false && state15 === false) {
                            setTextColor35("red");
                          }
                        }
                      } else if (anotherForm2 === true) {
                        if (
                          describe3.trim().length !== 0 &&
                          op3.trim().length !== 0 &&
                          L3.trim().length !== 0 &&
                          W3.trim().length !== 0 &&
                          qty3.trim().length !== 0 &&
                          wgt3.trim().length !== 0 &&
                          H3.trim().length !== 0 &&
                          op7.trim().length !== 0
                        ) {
                          handle();
                          setGoToReply(true);
                        } else {
                          if (describe3.trim().length === 0) {
                            setTextColor25("red");
                          }
                          if (op3.trim().length === 0) {
                            setTextColor26("red");
                          }
                          if (op7.trim().length === 0) {
                            setTextColor27("red");
                          }
                          if (L3.trim().length === 0) {
                            setTextColor28("red");
                          }
                          if (W3.trim().length === 0) {
                            setTextColor29("red");
                          }
                          if (H3.trim().length === 0) {
                            setTextColor30("red");
                          }
                          if (wgt3.trim().length === 0) {
                            setTextColor31("red");
                          }
                          if (qty3.trim().length === 0) {
                            setTextColor32("red");
                          }
                          if (state20 === false && state21 === false) {
                            setTextColor36("red");
                          }
                        }
                      } else {
                        handle();
                        setGoToReply(true);
                      }
                    } else {
                      if (option.trim().length === 0) {
                        setTextColor("red");
                      }
                      if (describe.trim().length === 0) {
                        setTextColor1("red");
                      }
                      if (op.trim().length === 0) {
                        setTextColor2("red");
                      }
                      if (op4.trim().length === 0) {
                        setTextColor3("red");
                      }
                      if (L.trim().length === 0) {
                        setTextColor4("red");
                      }
                      if (W.trim().length === 0) {
                        setTextColor5("red");
                      }
                      if (H.trim().length === 0) {
                        setTextColor6("red");
                      }
                      if (wgt.trim().length === 0) {
                        setTextColor7("red");
                      }
                      if (qty.trim().length === 0) {
                        setTextColor8("red");
                      }
                      if (state2 === false && state3 === false) {
                        setTextColor33("red");
                      }
                      if (describe1.trim().length === 0) {
                        setTextColor9("red");
                      }
                      if (op1.trim().length === 0) {
                        setTextColor10("red");
                      }
                      if (op5.trim().length === 0) {
                        setTextColor11("red");
                      }
                      if (L1.trim().length === 0) {
                        setTextColor12("red");
                      }
                      if (W1.trim().length === 0) {
                        setTextColor13("red");
                      }
                      if (H1.trim().length === 0) {
                        setTextColor14("red");
                      }
                      if (wgt1.trim().length === 0) {
                        setTextColor15("red");
                      }
                      if (qty1.trim().length === 0) {
                        setTextColor16("red");
                      }
                      if (state8 === false && state9 === false) {
                        setTextColor34("red");
                      }
                    }
                    if (describe3.trim().length === 0) {
                      setTextColor25("red");
                    }
                    if (op3.trim().length === 0) {
                      setTextColor26("red");
                    }
                    if (op7.trim().length === 0) {
                      setTextColor27("red");
                    }
                    if (L3.trim().length === 0) {
                      setTextColor28("red");
                    }
                    if (W3.trim().length === 0) {
                      setTextColor29("red");
                    }
                    if (H3.trim().length === 0) {
                      setTextColor30("red");
                    }
                    if (wgt3.trim().length === 0) {
                      setTextColor31("red");
                    }
                    if (qty3.trim().length === 0) {
                      setTextColor32("red");
                    }
                    if (state20 === false && state21 === false) {
                      setTextColor36("red");
                    }
                    if (describe2.trim().length === 0) {
                      setTextColor17("red");
                    }
                    if (op2.trim().length === 0) {
                      setTextColor18("red");
                    }
                    if (op6.trim().length === 0) {
                      setTextColor19("red");
                    }
                    if (L2.trim().length === 0) {
                      setTextColor20("red");
                    }
                    if (W2.trim().length === 0) {
                      setTextColor21("red");
                    }
                    if (H2.trim().length === 0) {
                      setTextColor22("red");
                    }
                    if (wgt2.trim().length === 0) {
                      setTextColor23("red");
                    }
                    if (qty2.trim().length === 0) {
                      setTextColor24("red");
                    }
                    if (state14 === false && state15 === false) {
                      setTextColor35("red");
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
      <Footer />
    </div>
  );
}
export default LoadDetails;
