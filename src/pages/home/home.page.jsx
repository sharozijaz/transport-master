import "./home.style.scss";
import Team from "../../components/team/team";
import { useForm } from "react-hook-form";
import aboutImage from "../../assets/about.png";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import maskGroup2 from "../../assets/Mask-Group-2.png";
import maskGroup3 from "../../assets/Mask-Group-3.png";
// import maskGroup4 from "../../assets/Mask-Group-4.png";
// import maskGroup7 from "../../assets/transport3.PNG";
import maskGroup5 from "../../assets/Mask-Group-5.png";
import maskGroup6 from "../../assets/MaskGroup4.png";
import truckImage from "../../assets/Mask-Group-6.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import GoogleMap from "../../components/googleMap/map.component";
import Footer from "../../components/footer/footer.component";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import whatsappicon from "../../assets/whatsapp_icon.png";
import emailjs from "emailjs-com";

const HomePage = () => {
  const [pdf1, setPdf1] = useState(false);
  const [pdf2, setPdf2] = useState(false);
  const [pdf3, setPdf3] = useState(false);
  const [pdf4, setPdf4] = useState(false);
  const [pdf5, setPdf5] = useState(false);
  const [pdf6, setPdf6] = useState(false);
  const [pdf7, setPdf7] = useState(false);
  const [pdf8, setPdf8] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state1, setState1] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  if (pdf1) {
    return <Navigate to="/pdf1" />;
  }
  if (pdf2) {
    return <Navigate to="/pdf2" />;
  }
  if (pdf3) {
    return <Navigate to="/pdf3" />;
  }
  if (pdf4) {
    return <Navigate to="/pdf4" />;
  }
  if (pdf5) {
    return <Navigate to="/pdf5" />;
  }
  if (pdf6) {
    return <Navigate to="/pdf6" />;
  }
  if (pdf7) {
    return <Navigate to="/pdf7" />;
  }
  if (pdf8) {
    return <Navigate to="/pdf8" />;
  }
  if (state1) {
    return <Navigate to="/services" />;
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_17hyzsd",
        "template_7nz662o",
        e.target,
        "gPXTeO65rNGy-o48v"
      )
      .catch((err) => console.log(err));
    alert("Your response has been submitted, we will get back to you soon.");
  }

  return (
    <>
      <div className="hero">
        <div className="hero-blank"></div>
        <div className="hero-text">
          <h2>Your number one</h2>
          <h1>Heavy Haulage Trucking Fleet</h1>
          <p>
            No job is too big or small, give us a call at
            <a href="https://wa.me/15551234567"></a>
            <img
              style={{ marginLeft: "10px" }}
              height={25}
              src={whatsappicon}
            />{" "}
            0488840786
          </p>
        </div>
      </div>
      {/* Welcome Section */}
      <div className="about-section">
        <div className="about-image">
          <img src={aboutImage} alt="Truck Going" />
        </div>
        <div className="about-text">
          <div className="about-sub-heading">
            <h2>Welcome to AGH Transport</h2>
          </div>
          <div className="about-heading">
            <h1>Providing Full Rang of Transportation</h1>
          </div>
          <div className="about-paragraph">
            <p>
              Our heavy haulage trucking company was established in 2017,
              however the owners have been in the trucking industry a lot longer
              than that! <br />
              Our truck site is located in Western Sydney Mount Vernon
              <br /> We are an enthusiastic team driven by driving and being
              apart of a fantastic industry. In these unique times we call to
              ACTION and lean on our strength of being agile <br />
              without compromise. To always bring our best to our clients needs.
              <br />
              Our teams trucking journey began from a very early age in life.
              <br />
              Understanding the engine equipment, its capacity and moveability
              is what keeps the team engaged. <br />
              We can demonstrate through action not just words we are a
              specialist Trucking company in heavy haulage and every job we
              undertake we strive to hit the gold standard in trucking.
              <br /> When it comes to delivering flexible, reliable, safe, and
              economical transportation. We operate a modern state of the art
              Heavy Haulage fleet. <br />
              We look forward in working with you!
            </p>
          </div>
          <div className="about-button">
            <button>
              Learn More
              <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
            </button>
          </div>
        </div>
      </div>
      {/* Our Values Mobile */}
      <div className="our-values-m">
        <div className="values-heading-m">
          <h1>Our Values</h1>
        </div>
        <div className="value-respect-m">
          <h2>RESPECT</h2>
          <p>
            Respect the model law that our industry, state and territories are
            governed by. Respect our clients requirements, plan accordingly and
            innovate where needed.
          </p>
        </div>
        <div className="value-respect-m">
          <h2>COMMUNICATE</h2>
          <p>
            Communicate and demonstrate through positive impact service.
            Establish a robust and healthy working relationship with all
            relevant stakeholders.
          </p>
        </div>
        <div className="value-respect-m">
          <h2>DEDICATION</h2>
          <p>
            We can dedicate our drivers and trucks to your businesses needs.
            Provide us with as much information as possible so we can navigate a
            successful outcome. We look forward in hearing from you ! Set up a
            time and book Online!s
          </p>
        </div>
      </div>
      {/* Our Values MMobile */}

      {/*Our Values section*/}
      <div className="values-section">
        <div className="value-heading">
          <h1>OUR VALUES</h1>
        </div>
        <div className="value-container-9">
          <div className="value">
            <h5>RESPECT</h5>

            <p>
              Respect the model law that our industry, state and territories are
              governed by. Respect our clients requirements, plan accordingly
              and innovate where needed
            </p>
          </div>
          <div className="value">
            <h5>COMMUNICATE</h5>

            <p>
              Communicate and demonstrate through positive impact service.
              Establish a robust and healthy working relationship with all
              relevent stackholders.
            </p>
          </div>
          <div className="value">
            <h5>DEDICATION</h5>

            <p>
              We can dedicate our drivers and trucks to your businesses needs.
              Provide us with as much information as possible so we can navigate
              a successful outcome.We look forward in hearing from you! Set up a
              time and Book Online!
            </p>
          </div>
        </div>
      </div>
      {/*Our Services section*/}
      {/* Mobile Services */}
      <div className="services-mobile">
        <div className="services-blank-m">
          <h1>Our Services</h1>
        </div>
        <div className="services-content-m">
          <div className="services-cards-m">
            <div className="services-card-1-m">
              <div className="card-image-m">
                <img src={maskGroup2} alt="" />
              </div>
              <div className="card-heading-m">
                <h1>TRANSPORT</h1>
              </div>
              <div className="card-paragraph-m">
                <p>
                  Our fleet of Kenworth prime movers and <br />
                  equipments are renewed to ensure that we can <br />
                  provide our services on time, every time.
                </p>
              </div>
              <div className="card-button-m about-button services-button">
                <button
                  onClick={() => {
                    setState1(true);
                  }}
                >
                  Learn More{" "}
                  <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
                </button>
              </div>
            </div>
            <div className="services-card-2-m">
              <div className="card-image-m">
                <img src={maskGroup3} alt="" />
              </div>
              <div className="card-heading-m">
                <h1>STORAGE & HANDLING</h1>
              </div>
              <div className="card-paragraph-m">
                <p>
                  Our goal is to provide clean, secure, efficient and <br />
                  cost effective storage & handling solutions.
                  <br />
                  <br />
                </p>
              </div>
              <div className="card-button-m about-button services-button">
                <button
                  onClick={() => {
                    setState1(true);
                  }}
                >
                  Learn More{" "}
                  <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Services */}
      {/* Our Fleet */}
      <div className="our-fleet-m">
        <div className="our-fleet-text">
          <h1>Our Fleet</h1>
          <p>State of the Art Equipment With Regular Mechanical Checks</p>
        </div>
        <div className="our-fleet-box">
          <div class="box1">
            <h4>Prime Movers</h4>
          </div>
          <div class="box2">
            <h4>Prairie Wagons</h4>
          </div>
          <div class="box3">
            <h4>Flat Tops</h4>
          </div>
          <div class="box4">
            <h4>Drop Deck Flat Top</h4>
          </div>
          <div class="box5">
            <h4>Top Decks</h4>
          </div>
        </div>
      </div>
      <div className="services-section">
        <h1>Our Services</h1>
        <div className="services-bg">
          <div className="services-blank">
            <img src={maskGroup5} alt="World Map" />
          </div>
          <div className="services-content">
            <img src={maskGroup6} alt="Truck" />
          </div>
        </div>
        <div className="services-section-cards">
          <div className="services-section-card-1">
            <div className="card-image">
              <img src={maskGroup3} alt="trucks" />
            </div>
            <div className="services-text">
              <h2>TRANSPORT</h2>
              <p>
                Our fleet of Kenworth prime movers and <br />
                equipments are renewed to ensure that we can <br />
                provide our services on time, every time.​
              </p>
            </div>
            <div className="about-button services-button">
              <button
                onClick={() => {
                  setState1(true);
                }}
              >
                Learn More
                <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
              </button>
            </div>
          </div>

          <div className="services-section-card-2">
            <div className="card-image">
              <img src={maskGroup3} alt="trucks" />
            </div>
            <div className="services-text">
              <h2>STORAGE & HANDLING</h2>
              <p>
                Our goal is to provide clean, secure, efficient and <br />
                cost effective storage & handling solutions.
                <br />
                <br />
              </p>
            </div>
            <div className="about-button services-button">
              <button
                onClick={() => {
                  setState1(true);
                }}
              >
                Learn More
                <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
              </button>
            </div>
          </div>
          <div className="services-section-card-3">
            <div className="card-image">
              <img src={maskGroup3} alt="trucks" />
            </div>
            <div className="services-text">
              <h2>WEIGHBRIDGE</h2>
              <p>
                We can weigh Cars, Trucks, Trailers, Caravans <br />
                and Custom motor vehicles, no appointment <br />
                needed.​
              </p>
            </div>
            <div className="about-button services-button">
              <button
                onClick={() => {
                  setState1(true);
                }}
              >
                Learn More
                <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Our Fleet */}

      <div className="our-fleet">
        <div className="our-fleet-text">
          <h1>Our Fleet</h1>
          <p>State of the Art Equipment With Regular Mechanical Checks</p>
        </div>
        <div className="our-fleet-box">
          <div className="box">
            <h4>
              Prime
              <br /> Movers
            </h4>
          </div>
          <div className="box">
            <h4>
              Prairie
              <br /> Wagons
            </h4>
          </div>
          <div className="box">
            <h4>
              Flat
              <br /> Tops
            </h4>
          </div>
          <div className="box">
            <h4>
              Drop Deck
              <br /> Flat Top
            </h4>
          </div>
          <div className="box">
            <h4>
              Top <br />
              Decks
            </h4>
          </div>
        </div>
        <div className="about-button">
          <button>
            Learn More
            <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
          </button>
        </div>
      </div>

      {/* Safety Section */}
      <div className="safty-section">
        <div className="safty-section-text">
          <h1>Safety</h1>
          <p>
            Pursuant to Section 28 of the Work Health and Safety Act
            [i]2011[ii],While at work, a worker must,
            <br />
            <br /> a) take reasonable care for his or her own health and safety;
            <br />
            <br />
            b)take reasonable care that his or her acts or omissions do not
            adversely affect the health and safety of other persons;
            <br />
            <br /> c) comply, so far as the worker is reasonably able, with any
            reasonable instruction that is given by the person conducting the
            business or undertaking to allow the person to comply with this
            (the) Act; <br />
            <br />
            d) co-operate with any reasonable policy or procedure of the person
            conducting the business or undertaking relating to health or safety
            at the workplace that has been notified to workers. Falls from
            heights What is the problem? Drivers are frequently required to work
            from heights. The design of the vehicle, the type of load
            transported, the collection and delivery points can all lead to the
            driver having to access the cabin, tray or trailer frequently. What
            are the risks? <br />
            <br />
            <br />
            The risk of falling from a height increases when:
            <br />
            <br /> • entering and exiting the cabin <br />• loading or unloading
            goods or livestock <br />• arranging and restraining loads <br />•
            checking a load at a loading bay or en route to the destination{" "}
            <br />• checking livestock <br />• tarping or un-tarping
            <br /> • undertaking maintenance <br />• working at night, in wet or
            windy conditions, or on uneven surfaces. What is a solution to the
            problem? Responsibilities A number of businesses may be involved in
            loading and unloading freight, such as: <br />• the transport
            operator <br />• the business operating the workplace where freight
            is being loaded/unloaded <br />• the business(es) controlling mobile
            plant at the workplace. Under the workplace health and safety laws,
            each business shares responsibility for the health and safety of
            those involved in the work, to the extent of their capacity to
            influence and control the work. Everyone must work together to
            ensure the risks associated with falls from a height are eliminated,
            or if this not possible, minimised.
          </p>
          <p className="info">
            <span className="highlight">
              [i] Work Health and Safety Act 2011 (legislation.gov.au)
            </span>{" "}
            <br />
            <br /> <span className="highlight">[ii]</span> Definition: WORK
            HEALTH AND SAFETY ACT 2011 - SECT 28 Duties of workers 28 Duties of
            workers . While at work, a worker must-- (a) take reasonable care
            for his or her own health and safety, and (b) take reasonable care
            that his or her acts or omissions do not adversely affect the health
            and safety of other persons, and
          </p>
        </div>
        <div className="safty-section-invest">
          <div className="invest-text">
            <FontAwesomeIcon icon={faQuoteLeft} className="comma" />
            <h2>
              Our investment in <br />a safest fleet
            </h2>
          </div>
          <div className="invest-questions">
            <button className="btn-1">
              <p>
                What is the Problem?{" "}
                <FontAwesomeIcon icon={faInfoCircle} className="space" />
              </p>
            </button>
            <button className="btn-2">
              <p>
                What are the risks? <FontAwesomeIcon icon={faInfoCircle} />
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* Compliance */}
      <div className="compliance-section">
        <div className="comliance-image">
          <img src={truckImage} alt="Truck Going" />
        </div>
        <div className="compliance-content">
          <div className="comliance-text">
            <h1>Compliance</h1>
          </div>
          <div className="compliance-buttons">
            <button
              onClick={() => {
                setPdf1(true);
              }}
            >
              <p>Drills and Induction Programs</p>{" "}
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <button
              onClick={() => {
                setPdf2(true);
              }}
            >
              <p>Driver Wellness Check</p>{" "}
              <FontAwesomeIcon icon={faDownload} className="compliance-btn" />
            </button>
            <button
              onClick={() => {
                setPdf3(true);
              }}
            >
              <p>Drugs and Alcohol</p> <FontAwesomeIcon icon={faDownload} />
            </button>
            <button
              onClick={() => {
                setPdf4(true);
              }}
            >
              <p>Driver Fatigue Management Policy and Procedure</p>{" "}
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <button
              onClick={() => {
                setPdf5(true);
              }}
            >
              <p>Dangerous Goods</p> <FontAwesomeIcon icon={faDownload} />
            </button>
            <button
              onClick={() => {
                setPdf6(true);
              }}
            >
              <p>Anti-Bribery and Anti-Corruption Policy</p>{" "}
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <p
              style={{
                paddingTop: "10px",
                marginTop: "10px",
                fontSize: "18px",
              }}
            >
              <b>Feel free to contact us at </b>
              <u>
                <b style={{ color: "blue" }}>compliance@aghtpt.com </b>
              </u>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Downloads */}
      <div className="downloads-section">
        <div className="download-text">
          <h1>Downloads</h1>
        </div>
        <div className="download-buttons">
          <button
            onClick={() => {
              setPdf7(true);
            }}
          >
            <p>Privacy Policy</p> <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
        <div className="download-buttons">
          <button
            onClick={() => {
              setPdf8(true);
            }}
          >
            <p>Disclaimer</p> <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </div>

      <Team />
      {/* Forum Section */}
      <div className="form-section">
        <div className="form-input">
          <form onSubmit={sendEmail}>
            <div className="form-heading">
              <h1>Contact Us</h1>
              <p>Drop us a line!</p>
            </div>
            <div className="form-field">
              <form onSubmit={handleSubmit(onSubmit)} className="form-el">
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  type="text"
                  placeholder="First name"
                  {...register("First name", { required: true, maxLength: 80 })}
                />
                <input
                  className="input-field"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  className="input-field message"
                  type="text"
                  placeholder="Message"
                  {...register("Message", {})}
                />
                <div className="about-button form-btn">
                  <button>
                    Send Now
                    <FontAwesomeIcon icon={faAngleRight} id="padding-left" />
                  </button>
                </div>
              </form>
            </div>
          </form>
        </div>

        <div className="form-data">
          <div className="form-text-area">
            <p>
              <span>
                KEEP ON TRUCKIN ! & KEEP AUSTRALIA MOVING!
                <br /> We look forward to hearing from you and working together
                to meet your business goals with excellent results!
                <br />
                <br />
              </span>
              <span>
                <br /> AGH TRANSPORT
                <br /> 1413 Elizabeth or, Kemps Creek NSW 2178 <br />
                <br />
              </span>
              <span>
                <br /> Email: admin@aghtpt.com <br />
                <br />
              </span>
              <span>
                <br /> HOURS
                <br /> Open today 09:00 am – 05:00 pm
              </span>
            </p>
          </div>
          <div className="form-map">
            <GoogleMap />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
