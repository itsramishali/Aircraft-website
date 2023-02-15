import React from "react";
import "./App.css";
import Navbar from "./Navbar";

function Destination() {
    return(
        <>
<Navbar />
<div className="Destination">
<h1 className='tittle-about pb-5'><u><b>Destination</b></u></h1>
<div>
          <h1 className="img-tittle">Fly with Us to Amazing Destinations</h1>
          <img
            src="https://media.gettyimages.com/id/1225840727/photo/passenger-airplane-taking-of-at-sunrise.jpg?s=612x612&w=gi&k=20&c=MJv5LmKmhCqLm8rzLZDFc3i4uFXqXHr5aJeQ653jqIE="
            alt=""
            width="100%"
            height="600"
          />
          <div className="carousel-caption">
            <button className="button-img3">Book Now</button>
          </div>
        </div>
        <div className="all-article">
        <div  className="row article-destination">
<div className="col-md-5"> 
        <h4>Article 1</h4>
 <img
            src="https://i0.wp.com/wheelchairtravel.org/wp-content/uploads/2020/01/faq-air-boarding-v2020-header.jpg?fit=2500%2C1333&ssl=1"
            alt=""
            width="100%"
            height="300"
          /></div>
<div className="col-md-5">  
            <h4>Article 2</h4>
<img
            src="https://media.wired.com/photos/60089424ec9655e0017e4e38/4:3/w_2131,h_1598,c_limit/Business-Boarding-Aircrafts-Covid-1229537692.jpg"
            alt=""
            width="100%"
            height="300"
          /></div>
        </div>
      
        <div  className="row article-destination">
<div className="col-md-5"> 
        <h4>Article 3</h4>
 <img
            src="https://c8.alamy.com/comp/2B7W3H0/a-colour-landscape-image-showing-a-passenger-jet-at-the-gate-at-an-airport-2B7W3H0.jpg"
            alt=""
            width="100%"
            height="300"
          /></div>
<div className="col-md-5">  
            <h4>Article 4</h4>
<img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3K0UvW9GwelmQ7TbdX8g_sVySWG58GUBDXL0D-l3NH7vUgqbh9ghoR-D54iAjZPnVnKo&usqp=CAU"
            alt=""
            width="100%"
            height="300"
          /></div>
        </div>
        <div  className="row article-destination">
<div className="col-md-5"> 
        <h4>Article 5</h4>
 <img
            src="https://www.traveller.com.au/content/dam/images/h/0/v/t/u/p/image.related.articleLeadwide.620x349.h0vtp4.png/1518153661953.jpg"
            alt=""
            width="100%"
            height="300"
          /></div>
<div className="col-md-5">  
            <h4>Article 6</h4>
<img
            src="https://aerospace.honeywell.com/content/dam/aerobt/en/images/learn/about-us/press-releases/horizontal/AeroBT-GoDirect_Fuel_Efficiency_2880x1440.jpg"
            alt=""
            width="100%"
            height="300"
          /></div>
        </div>
</div>
</div>
        </>
    )
}

export default Destination;