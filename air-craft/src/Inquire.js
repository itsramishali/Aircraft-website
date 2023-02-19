import React from "react";
import "./App.css";

import Footer from "./Footer"

function Inquire() {
  return (
    <>
    
      <div className="Inquire">
        <h1 className="tittle-Inquire pb-5">
          <u>
            <b>Inquire Now</b>
          </u>
        </h1>
        <div className="row">
          <div className="col-md-8">
            <img
              src="https://wallpapers.com/images/featured/k2bvoms91kvb0tfp.jpg"
              alt=""
              width="100%"
              height="400"
            />
          </div>
          <div className="col-md-3 card border-secondary">
            <div class="card-body text-secondary">
              <h5 className="Immediate">For Immediate Assistance</h5>
              <h4 className="phone-inquire">Phone</h4>
              <h6 className="phoneNo-inquire">+93111111444</h6>
              <h4 className="email-inquire">Email</h4>
              <h6 className="emailName-inquire">auraairlines.com</h6>
            </div>
          </div>
        </div>
<div className="firstForm-inquire">
        <h2 className="headinng-Inquire">We're with You Always</h2>
        <div className="inputs-Inquire">
          <h5 className="name-Inquire pt-3">Name *</h5>

          <input
            className="firstInput-Inquire "
            type="text"
            placeholder="First Name"
          />
          <input
            className="lastInput-Inquire"
            type="text"
            placeholder="Last Name"
          />
          <br />
          <h5 className="name-Inquire">Email Address *</h5>
          <input className="emailInput-Inquire" type="text" placeholder="" />
          <br />
          <h5 className="name-Inquire pt-5">Phone Number *</h5>
          <input className="emailInput-Inquire" type="text" placeholder="" />
          <br />
          <h5 className="name-Inquire pt-5">Message </h5>
          <input className="messageInput-Inquire" type="text" placeholder="" />

          <p className="reached-inquire">How Do You Wish To Be Reached? *</p>
          <select className="reached-inquire" name="" id="">
  
 
  <option value="call us">Call us </option>
  <option value="email">Email</option>
</select>
<br />
<div className=" button-inquire">
<button type="button" className="buttonin-inquire" >Send</button></div>
        </div>
        </div>
        <h2 className="headinng-Inquire">Sign Up to Our  Newsletter</h2>
        <div className="inputs-Inquire mt-5">
        <h3 className="headinng0-Inquire">We Respect Your Privacy and  it's  Our Priority</h3>
        <h5 className="name-Inquire">Name *</h5>
          <input className="emailInput-Inquire" type="text" placeholder="" />
          <br />
          <h5 className="name-Inquire pt-3">Email Address *</h5>
          <input className="emailInput-Inquire" type="text" placeholder="" />
          <div className="button-inquire">
          <input className="button buttonin-inquire" type="submit" value="Subscribe"></input></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Inquire;
