import axios from "axios";
import Footer from "../footer/footer.component";
import React, { Component, useState } from "react";
import "./Uploadimages.css";
export default function UploadImages() {
  const [img1, setImg1] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [img2, setImg2] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [img3, setImg3] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [img4, setImg4] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [img5, setImg5] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  const [img6, setImg6] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const uploadfiles = () => {
    document.getElementById("selectFile").click();
  };
  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg1(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const imageHandler1 = (e) => {
    const reader1 = new FileReader();

    reader1.onload = () => {
      if (reader1.readyState === 2) {
        setImg2(reader1.result);
      }
    };

    reader1.readAsDataURL(e.target.files[0]);
  };
  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };
  const [userInfo1, setuserInfo1] = useState({
    file1: [],
    filepreview1: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  });

  const handleInputChange1 = (event) => {
    setuserInfo1({
      ...userInfo1,
      file1: event.target.files[1],
      filepreview1: URL.createObjectURL(event.target.files[1]),
    });
  };
  const imageHandler2 = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg3(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  const imageHandler3 = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg4(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const imageHandler4 = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg5(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const imageHandler5 = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg6(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <div>
        <button
          style={{
            marginLeft: "20px",
            fontSize: "30px",
            color: "white",
            background: "#2e6595",
            border: "none",
            width: "50px",
            height: "50px",
            marginRight: "20px",
            marginTop: "10px",
          }}
          onClick={uploadfiles.bind(this)}
        >
          {" "}
          +{" "}
        </button>
        <input
          type="file"
          id="selectFile"
          style={{ display: "none" }}
          onClick={handleInputChange}
        />

        <button
          style={{
            fontSize: "30px",
            color: "white",
            background: "#2e6595",
            border: "none",
            width: "50px",
            height: "50px",
            marginRight: "20px",
            marginTop: "10px",
          }}
          onClick={uploadfiles.bind(this)}
        >
          {" "}
          +{" "}
        </button>
        <input
          type="file"
          id="selectFile"
          style={{ display: "none" }}
          onClick={handleInputChange1}
        />

        <button
          style={{
            fontSize: "30px",
            color: "white",
            background: "#2e6595",
            border: "none",
            width: "50px",
            height: "50px",
            marginRight: "20px",
            marginTop: "10px",
          }}
          onClick={uploadfiles.bind(this)}
        >
          {" "}
          +{" "}
        </button>
        <input
          type="file"
          id="selectFile"
          style={{ display: "none" }}
          onClick={imageHandler2}
        />
        <br />

        <button
          style={{
            marginLeft: "20px",
            fontSize: "30px",
            color: "white",
            background: "#2e6595",
            border: "none",
            width: "50px",
            height: "50px",
            marginRight: "20px",
            marginTop: "10px",
          }}
          onClick={uploadfiles.bind(this)}
        >
          {" "}
          +{" "}
        </button>
        <input
          type="file"
          id="selectFile"
          style={{ display: "none" }}
          onClick={imageHandler3}
        />

        <button
          style={{
            fontSize: "30px",
            color: "white",
            background: "#2e6595",
            border: "none",
            width: "50px",
            height: "50px",
            marginRight: "20px",
            marginTop: "10px",
          }}
          onClick={uploadfiles.bind(this)}
        >
          {" "}
          +{" "}
        </button>
        <input
          type="file"
          id="selectFile"
          style={{ display: "none" }}
          onClick={imageHandler4}
        />

        <button
          style={{
            fontSize: "30px",
            color: "white",
            background: "#2e6595",
            border: "none",
            width: "50px",
            height: "50px",
            marginRight: "20px",
            marginTop: "10px",
          }}
          onClick={uploadfiles.bind(this)}
        >
          {" "}
          +{" "}
        </button>
        <input
          type="file"
          id="selectFile"
          style={{ display: "none" }}
          onClick={imageHandler5}
        />
      </div>
      <div className="box-image">
        <div className="img-holder">
          <img src={userInfo.filepreview} alt="" id="img" className="img" />
        </div>
        <div className="img-holder">
          <img src={userInfo1.filepreview1} alt="" id="img" className="img" />
        </div>
        <div className="img-holder">
          <img src={img3} alt="" id="img" className="img" />
        </div>
      </div>
      <div className="box-image">
        <div className="img-holder">
          <img src={img4} alt="" id="img" className="img" />
        </div>
        <div className="img-holder">
          <img src={img5} alt="" id="img" className="img" />
        </div>
        <div className="img-holder">
          <img src={img6} alt="" id="img" className="img" />
        </div>
      </div>

    </div>
  );
}
