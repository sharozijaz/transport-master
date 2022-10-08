import React from "react";
import {
  useRef,
  useState,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  ListItem,
  DropDownList,
} from "react";
import "./home.css";
import "./CarrierReply.css";
import { Navigate } from "react-router-dom";
import CommentBox from "./CommentBox";
import UploadImages from "./UploadImages";
import Navbar from "../navbar/navbar.component";
import cn from "classnames";
import Footer from "../footer/footer.component";
import Review from "./Review";
import UploadImages1 from "./UploadImage1";
const INITIAL_HEIGHT = 46;
function AddiitonalInfo(props) {
  const [comment, setComment] = useState("");
  const [textColor, setTextColor] = useState("white");
  const [textColor1, setTextColor1] = useState("white");
  const [listingDuration, setListingDuration] = useState("");
  const [goToReview, setGoToReview] = React.useState(false);
  const [goToReply, setGoToReply] = React.useState(false);
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const handle = () => {
    localStorage.setItem("comment", comment);
    localStorage.setItem("listingDuration", listingDuration);
  };
  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };
  const onChange = (e) => {
    setComment(e.target.value);
  };
  const onClose = () => {
    setComment("");
    setIsExpanded(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("send the form data somewhere");
  };
  if (goToReply) {
    return <Navigate to="/carrierReply" />;
  }
  if (goToReview) {
    return <Navigate to="/review" />;
  }
  const toggle = () => {
    setListingDuration("1");
    setState(!state);
  };
  const toggle1 = () => {
    setState1(!state1);
    setListingDuration("2");
  };
  const toggle2 = () => {
    setState2(!state2);
    setListingDuration("3");
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="app">
          <div  className="login-form">
            <div className="headingg">
              <b>Additional Info</b>
            </div>
            <hr></hr>
            <br />
            <h4 style={{ fontSize: "18px" }}>Comments</h4>
            <form
              onSubmit={onSubmit}
              ref={containerRef}
              className={cn("comment-box", {
                expanded: isExpanded,
                collapsed: !isExpanded,
                modified: comment.length > 0,
              })}
              style={{
                minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
              }}
            >
              <label htmlFor="comment"></label>
              <textarea
                required
                style={{ width: '100%', paddingLeft: '5px' }}
                ref={textRef}
                
                onFocus={onExpand}
                onChange={onChange}
                className="comment-field"
                placeholder="Comments"
                value={comment}
                name="comment"
                id="comment"
                rows={3}
              />
              {comment.trim().length === 0 ? (
                <p style={{ color: textColor }}>
                  &#x24D8; Please fill this field
                </p>
              ) : (
                <p></p>
              )}
            </form>
            <h4 style={{ fontSize: "18px" }}>Add Photos (optional)</h4>
            <UploadImages />

            <br></br>
            <div>
              <br />
              <h4 style={{ fontSize: "18px" }}>My listing duration (days)</h4>
              <button
                style={{
                  marginLeft: "20px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  height: "50px",
                }}
                className={"option2 " + (state ? "toggle--close" : "")}
                onClick={toggle}
              >
                1
              </button>
              <button
                style={{ height: "50px" }}
                className={"option2 " + (state1 ? "toggle--close" : "")}
                onClick={toggle1}
              >
                2
              </button>
              <button
                style={{
                  borderStartEndRadius: "5px",
                  borderBottomRightRadius: "5px",
                  height: "50px",
                }}
                className={"option2 " + (state2 ? "toggle--close" : "")}
                onClick={toggle2}
              >
                3
              </button>
              {listingDuration.trim().length === 0 ? (
                <p style={{ color: textColor1 }}>
                  &#x24D8; Please fill this field
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <br />
            <div className="container2">
              <div className="btn-align">
                <button
                  className="w3-show-inline-btn2"
                  style={{ color: "white" }}
                  onClick={() => {
                    setGoToReply(true);
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
                      listingDuration.trim().length !== 0 &&
                      comment.trim().length !== 0
                    ) {
                      handle();
                      setGoToReview(true);
                    } else {
                      if (comment.trim().length === 0) {
                        setTextColor("red");
                      }
                      if (listingDuration.trim().length === 0) {
                        setTextColor1("red");
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
      <Footer />
    </>
  );
}

export default AddiitonalInfo;
