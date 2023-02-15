import React from 'react';
import './App.css';
import Navbar from './Navbar';

function About() {
    return(
    <>
    <Navbar />
<div className='About us'>

<h1 className='tittle-about pb-5'><u><b>About us</b></u></h1>
<div>
        <h1 className="img-tittle">Fly with Aura !!!</h1>
<img  src="https://media.vanityfair.com/photos/563d20b0ffe4c2a35a2a9145/master/pass/t-a-wing-and-a-prayer-us-airlines.jpg" alt=""  width="100%" height="600" />
<div className="carousel-caption">
     <button className="button-img1">Book Now</button>
                            </div>
</div>
<div className='row descirition'>
    <div className='col-md-5 '>
        <h2>Our Mission</h2>
        <p className='desciritionText-about' >Discover the highlights of Srilanka with the best destination. Tourist Business Travel. Find Travel Ideas For Planning Your Holiday to Sri Lanka. Quickest turnaround. Travel with Confidences. IATA Certified. No more waiting in line. Types: Tourism, Business.</p>
    </div>
    <div className='col-md-7'>
    <img  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="" width="100%" height="500" />    
    </div>
</div>
<div className='row descirition'>
    <div className='col-md-5 '>
        <h2>Our vision</h2>
        <p className='desciritionText-about' >SriLankan Airlines operates over 560 flights per week across Asia. The Airline operates to 113 destinations in 51 countries (including codeshare operations) from its main hub located at Bandaranaike International Airport near Colombo.</p>
    </div>
    <div className='col-md-7'>
    <img  src="https://burst.shopifycdn.com/photos/clouds-from-aircraft-window.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="" width="100%" height="500" />    
    </div>
</div>
<div className='desciritionColor-about'>
<div>
<h3 className='desciritionText-about3'><b>How We Are</b></h3>
<img  src="https://media.istockphoto.com/photos/passenger-airplane-flying-above-clouds-during-sunset-picture-id155439315?b=1&k=20&m=155439315&s=612x612&w=0&h=XTBXR1CYyXaWm0K7kz7ptdxLnmCsll1qYGFuEJGygc0=" alt="" width="100%" height="500" /> 
</div>
<div>
<h3 className='desciritionText-about3'><b>Our Services</b></h3>
<img  src="https://image.cnbcfm.com/api/v1/image/106537227-1589463911434gettyimages-890234318.jpeg?v=1589463982&w=1920&h=1080" alt="" width="100%" height="500" /> 
</div>
</div>
<div className='row descirition'>
<h3 className='descirition5-about'>Message From Chairman</h3>
    <div className='col-md-5 '>
        <p className='desciritionText-about' >Discover the highlights of Srilanka with the best destination. Tourist Business Travel. Find Travel Ideas For Planning Your Holiday to Sri Lanka. Quickest turnaround. Travel with Confidences. IATA Certified. No more waiting in line. Types: Tourism, Business.</p>
    </div>
    <div className='col-md-7'>
    <img  src="https://petapixel.com/assets/uploads/2022/05/how-to-take-photos-out-of-an-airplane-window-featured.jpg" alt="" width="100%" height="500" />    
    </div>
</div>
</div>
    </>
    )
}
export default About ;