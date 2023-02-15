import React from "react";
import "./App.css";
import Navbar from "./Navbar";

function Membership() {
  return (
    <>
      <Navbar />
      <div className="Membership">
        <div>
          <h1 className="img-tittle">For an Extraordinary Fly</h1>
          <img
            src="https://gray-wmctv-prod.cdn.arcpublishing.com/resizer/nsgGaJW2V-VSsC4fl6Xu6vYVTC8=/800x600/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/5V62QS6ZHNF6DBA7656F3RS4UY.jpg"
            alt=""
            width="100%"
            height="600"
          />
          <div className="carousel-caption">
            <button className="button-img2">Book Now</button>
          </div>
        </div>
        <div className="circle-membership">

        <ul>
            <li>24/7 dedicated personal advisor</li>
            <li>Add rates  per every travel </li>
            <li>Free  travel for the added rates</li>
            <li>Get exclusive offers for  travels</li>
            <li>Livestyle management</li>
            <li>Handling hotel arrangements</li>
            <li>Handling ticket reservations for events </li>
        </ul>
        </div>
        <div className='row descirition mb-5'>
    <div className='col-md-6 desciritionTextb-Membership'>
        
        <p className='desciritionText-Membership' >Membership has it's  Privileges & Last for an Eternity.</p>
    </div>
    <div className='col-md-6'>
    <img  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" width="100%" height="500" />    
    </div></div>

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
          <h5 className="name-Inquire pt-5">Contact Number *</h5>
          <input className="emailInput-Inquire" type="text" placeholder="" />
          <br />
          <br />
       

          <p className="reached-inquire">How Do You Wish To Be Reached? *</p>
          <select className="reached-inquire" name="" id="">
  
 
  <option value="call us">call us </option>
  <option value="email">email</option>
</select>
<br />
<h6 className="hometown">Hometown</h6>
<select className="reached-inquire" name="" id="">
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
  <option value=""></option>
</select>
  <input className="countryInput" type="text" placeholder="" />
  <p className="reached-inquire pt-5">How often do you travel</p>
  <input className="emptyInput" type="text" placeholder="" />
  <p className="reached-inquire">What benefits of Membership are you most interested in?</p>
  <input className="emptyInput" type="text" placeholder="" />

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
    </>
  );
}

export default Membership;
