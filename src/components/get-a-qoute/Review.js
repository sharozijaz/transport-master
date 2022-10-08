import React, { useState } from "react";
import "./home.css";
import "./CarrierReply.css";
import "./review.css";
import Navbar from "../navbar/navbar.component";
import emailjs from "emailjs-com";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../footer/footer.component";
function Review(props) {
  const [goToAddionalInfo, setGoToAddionalInfo] = React.useState(false);
  const [goToReply, setGoToReply] = React.useState(false);
  const [goToLoadDetails, setGoToLoadDetails] = React.useState(false);
  const [goTogetQoute, setGoTogetQoute] = React.useState(false);
  const [agree, setAgree] = useState(false);
  const [goToMain, setGoToMain] = React.useState(false);
  const [color,setColor] = useState("gainsboro");

  const checkboxHandler = () => {
     setColor("#75c382");
     if(agree===false){
        setColor("#75c382");
     }
     else{
        setColor("gainsboro");
     }
     setAgree(!agree);
  }
  const btnHandler = () => {
     sendEmail();
  };
  if(goToMain){
     return <Navigate to ='/'/>
  }
  if (goToAddionalInfo) {
     return <Navigate to='/additionalInfo' />
  }
  if (goTogetQoute) {
     return <Navigate to='/getaqoute' />
  }
  if (goToReply) {
     return <Navigate to='/carrierReply' />
  }
  if (goToLoadDetails) {
     return <Navigate to='/loadDetails' />
  }
  function sendEmail(e) {
     e.preventDefault();
     emailjs.sendForm("service_17hyzsd", "template_2pxmcnz", e.target, "gPXTeO65rNGy-o48v").then(res => {
        setGoToMain(true);
     }).catch(err => console.log(err));
     alert("Your response has been submitted, we will get back to you soon.");
  }
  return (
     <>
        <div>
           <Navbar />
           <form onSubmit={sendEmail}>
              <div className="app">
                 <div style={{ width: '800px', textAlign: 'center' }} className="login-form">
                    <div className="headingg"><b>Review & Submit</b></div>
                    <hr /><br/>
                    <div >
                       <div class="Roww2 row">
                          <b>Pickup:</b>
                          <input value={localStorage.getItem("pickupAddress")} name='pickup' style={{ marginLeft: '20px', backgroundColor: 'white', width: '700px', textAlign: 'center', fontSize: '16px', border: 'none', height: '20px' }} type="text" />
                          <b style={{ fontSize: '30px' }}> &#8595; </b>
                          <br /><br />
                          <b>Deliver:</b>
                          <input value={localStorage.getItem("dropoffAddress")} name='deliver' style={{ marginLeft: '20px', backgroundColor: 'white', width: '700px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" />
                       </div>
                       <input value={localStorage.getItem("timing")} name='availability' style={{ backgroundColor: 'white', width: '200px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" />
                       <div className="container2">
                          <button className="another-form-button"
                             onClick={() => {
                                setGoTogetQoute(true);
                             }}
                          >Edit</button><br/>
                       </div><br/><hr />
                       <p><b>Category:</b> <input value={localStorage.getItem("option")} name='category' style={{ paddingLeft: '-100px', backgroundColor: 'white', width: '200px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p><br />
                       {(localStorage.getItem("describe").trim().length !== 0 && localStorage.getItem("describe1").trim().length !== 0) ?
                          <div>
                             <div class="Roww1 row">
                                <div style={{ marginLeft: '30px' }} class="Columnn1 col-md-4 col-sm-12">
                                   <p > <b>Quantity: </b> <input value={localStorage.getItem("qty")} name='quantity' style={{ backgroundColor: 'white', width: '70px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Length: </b> <input value={localStorage.getItem("l") + " " + localStorage.getItem("mmMtrs")} name='length' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Width: </b> <input value={localStorage.getItem("w") + " " + localStorage.getItem("mmMtrs")} name='width' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Height: </b> <input value={localStorage.getItem("h") + " " + localStorage.getItem("mmMtrs")} name='height' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Weight: </b> <input value={localStorage.getItem("w") + " " + localStorage.getItem("mmMtrs")} name='weight' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Condition: </b> <input value={localStorage.getItem("operationalNonGear")} name='condition' style={{ backgroundColor: 'white', width: '110px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                </div>
                             </div><br />
                             <div class="Roww1 row">
                                <div style={{ marginLeft: '30px' }} class="Columnn1 col-md-4 col-sm-12">
                                   <p > <b>Quantity: </b> <input value={localStorage.getItem("qty1")} name='quantity1' style={{ backgroundColor: 'white', width: '70px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Length: </b> <input value={localStorage.getItem("l1") + " " + localStorage.getItem("mmMtrs1")} name='length1' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Width: </b>  <input value={localStorage.getItem("w1") + " " + localStorage.getItem("mmMtrs1")} name='width1' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Height: </b> <input value={localStorage.getItem("h1") + " " + localStorage.getItem("mmMtrs1")} name='height1' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Weight: </b> <input value={localStorage.getItem("w1") + " " + localStorage.getItem("mmMtrs1")} name='weight1' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Condition: </b> <input value={localStorage.getItem("operationalNonGear1")} name='condition1' style={{ backgroundColor: 'white', width: '110px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                </div>
                             </div>
                          </div>
                          : <div>
                             <div class="Roww1 row">
                                <div style={{ marginLeft: '30px' }} class="Columnn1 col-md-4 col-sm-12">
                                   <p > <b>Quantity: </b> <input value={localStorage.getItem("qty")} name='quantity' style={{ backgroundColor: 'white', width: '70px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Length: </b> <input value={localStorage.getItem("l") + " " + localStorage.getItem("mmMtrs")} name='length' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Width: </b> <input value={localStorage.getItem("w") + " " + localStorage.getItem("mmMtrs")} name='width' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Height: </b> <input value={localStorage.getItem("h") + " " + localStorage.getItem("mmMtrs")} name='height' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Weight: </b> <input value={localStorage.getItem("w") + " " + localStorage.getItem("mmMtrs")} name='weight' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Condition: </b> <input value={localStorage.getItem("operationalNonGear")} name='condition' style={{ backgroundColor: 'white', width: '110px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                </div>
                             </div>
                          </div>}<br />
                       {localStorage.getItem("describe2").trim().length !== 0 ?
                          <div>
                             <div class="Roww1 row">
                                <div style={{ marginLeft: '30px' }} class="Columnn1 col-md-4 col-sm-12">
                                   <p > <b>Quantity: </b> <input value={localStorage.getItem("qty2")} name='quantity2' style={{ backgroundColor: 'white', width: '70px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Length: </b> <input value={localStorage.getItem("l2") + " " + localStorage.getItem("mmMtrs2")} name='length2' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Width: </b> <input value={localStorage.getItem("w2") + " " + localStorage.getItem("mmMtrs2")} name='width2' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Height: </b> <input value={localStorage.getItem("h2") + " " + localStorage.getItem("mmMtrs2")} name='height2' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Weight: </b> <input value={localStorage.getItem("w2") + " " + localStorage.getItem("mmMtrs2")} name='weight2' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Condition: </b> <input value={localStorage.getItem("operationalNonGear2")} name='condition2' style={{ backgroundColor: 'white', width: '110px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                </div>
                             </div><br />
                          </div>
                          : null}
                       {localStorage.getItem("describe3").trim().length !== 0 ?
                          <div>
                             <div class="Roww1 row">
                                <div style={{ marginLeft: '30px' }} class="Columnn1 col-md-4 col-sm-12">
                                   <p > <b>Quantity: </b> <input value={localStorage.getItem("qty3")} name='quantity3' style={{ backgroundColor: 'white', width: '70px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Length: </b> <input value={localStorage.getItem("l3") + " " + localStorage.getItem("mmMtrs3")} name='length3' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Width: </b> <input value={localStorage.getItem("w3") + " " + localStorage.getItem("mmMtrs3")} name='width3' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Height: </b> <input value={localStorage.getItem("h3") + " " + localStorage.getItem("mmMtrs3")} name='height3' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Weight: </b> <input value={localStorage.getItem("w3") + " " + localStorage.getItem("mmMtrs3")} name='weight3' style={{ backgroundColor: 'white', width: '100px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                   <p > <b>Condition: </b> <input value={localStorage.getItem("operationalNonGear3")} name='condition3' style={{ backgroundColor: 'white', width: '110px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                                </div><br />
                             </div>
                          </div>
                          : null}
                       <div className="container2">
                          <button className="another-form-button"
                             onClick={() => {
                                setGoToLoadDetails(true);
                             }}
                          >Edit</button>
                       </div><br/><hr />
                       <p name="comment" style={{marginLeft:"50px"}}> <b>Comment: </b> <input value={localStorage.getItem("comment")} name='comment' style={{ backgroundColor: 'white', width: '200px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                       <p name="listingDuration"> <b>Listing Duration: </b> <input value={localStorage.getItem("listingDuration")} name='listingDuration' style={{ backgroundColor: 'white', width: '70px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" />days</p><br/>
                       <div className="container2">
                          <button className="another-form-button"
                             onClick={() => {
                                setGoToAddionalInfo(true);
                             }}
                          >Edit</button>
                       </div><br/><hr />
                       <p name="name" style={{marginLeft:"50px"}}> <b>Name: </b> <input value={localStorage.getItem("name")} name='name' style={{ backgroundColor: 'white', width: '200px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                       <p name="phone" style={{marginLeft:"50px"}}> <b>Phone: </b> <input value={localStorage.getItem("phone")} name='phone' style={{ backgroundColor: 'white', width: '200px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                       <p name="email" style={{marginLeft:"50px"}}> <b>Email: </b> <input value={localStorage.getItem("email")} name='email' style={{ backgroundColor: 'white', width: '200px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p>
                       <p name="business" style={{marginLeft:"50px"}}> <b>Business: </b> <input value={localStorage.getItem("business")} name='business' style={{ backgroundColor: 'white', width: '200px', textAlign: 'center', fontSize: '16px', border: 'none', height: '40px' }} type="text" /></p><br/>
                       <div className="container2">
                          <button className="another-form-button"
                             onClick={() => {
                                setGoToReply(true);
                             }}
                          >Edit</button>
                       </div><br/>
                       <div><br />
                          <input type="checkbox" id="agree" onChange={checkboxHandler} style={{ marginLeft: '-190px', marginRight: '-190px' }} />
                          <label htmlFor="agree">
                             <small style={{fontSize:'15px', visibility:'visible'}} class="grecaptcha-badge">I accept & agree to the
                                <a style={{color:'blue', textDecoration:'none' }} href="https://policies.google.com/privacy"> Terms and Conditions</a> and
                                <a style={{color:'blue', textDecoration:'none' }} href="https://policies.google.com/terms"> Privacy Policy.</a>
                             </small></label></div><br/>
                       <hr /><br/>
                       <div className="container2">
                          <button style={{ color: 'white' , background:color}} className="submitbtn" disabled={!agree} onClick={btnHandler}>Submit</button>
                       </div>
                    </div><br/><hr /><br />
                    <div className="container2">
                       <div className="btn-align">
                          <button onClick={() => { setGoToAddionalInfo(true); }} className="w3-show-inline-btn2" style={{ "color": "white", marginLeft: '-150px' }} >&#8249;</button>
                       </div>
                    </div>
                 </div>
              </div>
           </form>
           <Footer />
        </div>
     </>
  );
}

export default Review
