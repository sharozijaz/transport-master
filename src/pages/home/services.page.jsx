import React from 'react';
import Footer from '../../components/footer/footer.component';
import Navbar from '../../components/navbar/navbar.component';
import aboutImage from "../../assets/transport1.PNG";
import aboutImage1 from "../../assets/transport2.PNG";
import aboutImage2 from "../../assets/transport3.PNG";
import "./services.style.scss";

const Contact = () => {
    return (
        <>
            <Navbar />
            <h1 style={{ marginTop: '170px', textAlign: 'center', fontSize: '40px', fontWeight: 'bold' }}>Services</h1>
            <section >
                <div className='section1' style={{backgroundColor: '#ebe9eb'}}>
                    <img src={aboutImage} className= "transport-image"/>
                    <div className='transport-text'>
                        <div className="transport-heading">
                            <h1>Transport</h1>
                        </div>
                        <p className='transport-paragraph' style={{lineHeight: '1.6'}}>
                            Our fleet of Kenworth prime movers and equipments are renewed to ensure that we can 
                            provide our services on time, every time. Our equipments are serviced by our team of 
                            qualified mechanics which we are acredited under NHVAS. We specialise in the following 
                            transport solutions in both general and express situations:<br />
                            <br />

                            &#10004; Intrastate transport<br />
                            &#10004; Interstate transport<br />
                            &#10004; Regrigerated transport<br />
                            &#10004; General transport<br />
                            &#10004; Overnight service available to capital cities Australia wide<br />
                            &#10004; Rail Siding<br />
                            &#10004; Dangerous Goods<br />
                            &#10004; Containerisation Specialists - Any size, any time, anywhere! We have skels, tipping<br />
                            skels and sideloaders ready to go!<br />
                            &#10004; Over-dimensional Loads<br /><br />

                            We are licensed for L.C.L. and F.C.L. containers. We offer complete or part service,<br />
                            whatever you desire – we can collect and deliver your container at any time as well as <br />
                            deconsolidate for you and return the empty container. Efficient delivery or storage of the <br />
                            deconsolidated goods is our mission.
                        </p>
                    </div>



                </div>

            </section>
            
            <section >
                <div className='section1'>
                    <div className='transport-text'>
                        <div className="transport-heading">
                            <h1>STORAGE & HANDLING</h1>
                        </div>
                        <p className='transport-paragraph' style={{lineHeight: '1.6'}}>
                        Our goal is to provide clean, secure, efficient and cost effective storage & handling 
                        solutions. We operate at a high professional standard when it comes to our storage 
                        facilities and maintain the tightest 24/7 security measures to ensure the safety of 
                        customers goods. A summary of our storage & handling facilities are as follows:<br />
                            <br />

                            &#10004; Covered warehouse facilities - over 200000 sq ft secured. Serviced by a well 
                        maintained fleet of forklifts overhead crane and qualified forklift drivers that ensure 
                        fast access to goods for customers.<br />
                        &#10004; Uncovered storage area - over 300000 sq ft serviced by a 52 tonne Hyster container 
                        crane and forklifts - This area is used for storing of containers and goods that do not 
                        need protection from the elements.<br />
                        &#10004; Crushing, screening and rebagging of materials<br />
                        &#10004; 2 × Licensed Quarantine station - class 1.1 and 1.3<br />
                        &#10004; Fumigation - FCL & LCL<br />
                        &#10004; Deconsolidate & Consolidate materials for import / export<br />
                        &#10004; Steam Cleaning of containers<br />
                        &#10004; Steel Coils facilities<br />
                        &#10004; 2 × AQIS wash bay facilities<br />
                        &#10004; Undercover wash bay (28 metres long, 8 metres wide, 14 metres high<br /><br />
                        </p>
                    </div>

                    <img src={aboutImage1} className= "transport-image"/>

                </div>

            </section>

            <section >
                <div className='section1' style={{backgroundColor: '#ebe9eb'}}>
                    <img src={aboutImage2} className= "transport-image"/>
                    <div className='transport-text'>
                        <div className="transport-heading">
                            <h1>WEIGHBRIDGE</h1>
                        </div>
                        <p className='transport-paragraph' style={{lineHeight: '1.6'}}>
                        Our weighbridge is available to the public during 8am-4pm Monday through Friday no 
                        appointment needed.<br />
                            <br />

                            &#10004; We can weigh Cars, Trucks, Trailers, Caravans and Custom motor vehicles.<br />
                            &#10004; Cost of Weighbridge per vehicle<br />
                            &#10004; Weight check with receipts and written docket $55.00<br />
                            &#10004; Weight check no docket $35.00<br />
                            &#10004; Payment by Cash Or Card<br /><br/>

                        For further information regarding our Weighbridge please don’t hesitate to contact us.
                        <br /><br />
                        </p>
                    </div>



                </div>

            </section>



            <Footer />
        </>
    );
};

export default Contact;