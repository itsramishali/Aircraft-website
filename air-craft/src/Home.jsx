import React from "react";
import "./Home.css";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <div className="main-heading">
                <h1 className="main-heading">Welcome</h1>
            </div>
            <div
                id="carouselExampleControls"
                className="carousel slide  carsouel1-edit"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://i.ytimg.com/vi/maufDGFgCZo/maxresdefault.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://i.pinimg.com/originals/23/ed/d8/23edd8ffb4cea75191489e1dc9c598f2.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://wallpaperaccess.com/full/254381.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="text-part">
                <p className="text-center">
                    Aura Airlines is a concept conglomerate in the Airline Industry <br />
                    in Sri Lanka which was founded in 2018 and dedicates its approach mainly <br /> to uplift Airline services solely for the benefit of the entire community. <br />
                    Private & Business Airline, as an exclusive platform which customers <br /> can benefit from in the fields of Leisure, Corporate and VIP transport solutions, <br /> and service for both domestic and international market.

                </p>
                <div className="row row-edit" >
                    <div className="col-md-2">
                        <button className="buttonInput " type="submit" value="Subscribe">
                            Inquire Now
                        </button>
                    </div>
                    <div className="col-md-2">
                        <button className="buttonInput" type="submit" value="Subscribe">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            {/* 1 */}
            <div className="row row-edit my-5">
                <div className="col-md-5 marg mx-3">
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                    />
                </div>
                <div className="col-md-5 mx-3">
                    <p>
                        <li>Our Services</li>
                        <ul>
                            <li>Corporate VIP/VVIP Client</li>
                            <li>Passenger Charter</li>
                            <li>Leisure</li>
                            <li>Aerial Work</li>
                            <li>Branding and Advertising</li>
                            <li>Medical Evacuation</li>
                            <li>Special Events-Product Launches</li>
                            <li>Flower Drops</li>
                            <li>Banner Towing/ Flag Displays</li>
                            <li>Wedding Photography</li>
                            <li>Celebrations</li>
                            <ul>
                                <li>Anniversary Celebrations</li>
                                <li>Birthday Celebrations</li>
                                <li>Any other as required</li>
                            </ul>

                        </ul>
                    </p>
                </div>
            </div>

            {/* 2 */}
            <div className="row row-edit my-5">
                <div className="col-md-5 mx-3">
                    <p>
                        <li>Why Aura Airlines Charter</li>
                        <ul>
                            Island wide Coverage <br />
                            Anytime, Anywhere <br />
                            Available 24/7/365 <br />
                            Best value for money <br />
                            Ensure Safety, Security and Privacy <br />
                            Full of Comfort, Luxury and Convenience <br />
                            To fly happily <br />
                            Guaranteed customer satisfaction <br />
                            Preeminent and Personalized Service <br />


                        </ul>
                    </p>
                </div>
                <div className="col-md-5 marg mx-3">
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                    />
                </div>
            </div>

            {/* 3 */}
            <div className="row row-edit my-5">
                <div className="col-md-5 marg mx-3">
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                    />
                </div>
                <div className="col-md-5 mx-3">
                    <li>Safety</li>
                    <p>
                    Aura Airlines considers safety as its prime consideration and therefore has implemented safety management systems (SMS) throughout our operation both horizontally and vertically.Highly experienced crew will provide extra support with safety ensuring health and personal welfare of our valuable clients.

                    </p>
                </div>
            </div>

            {/* 4 */}
            <div className="row row-edit my-5">
                <div className="col-md-5 mx-3">
                    <li>Dedication</li>
                    <p>
                    Our product reflects and improves the quality of life with the mission 
                    of the airline to make air travel an integral part of the tourism industry
                    and Aura Airlines to be the most flexible, reliable, and safest mode of
                    transport for domestic air travel among tourists, corporate clients, and locals.
                    </p>
                </div>
                <div className="col-md-5 marg mx-3">
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                    />
                </div>
            </div>

            <h3 className="sm-heading">Articles</h3>
            <div className="row row-edit">
                <div className="col-md-3 mx-4 mb-5">
                    <img
                        className="d-block w-100"
                        src="https://wallpaper.dog/large/10792407.jpg"
                        alt=""
                    />
                </div>

                <div className="col-md-3  mx-4 mb-5">
                    <img
                        className="d-block w-100"
                        src="https://wallpaper.dog/large/10792407.jpg"
                        alt=""
                    />
                </div>

                <div className="col-md-3  mx-4 mb-5">
                    <img
                        className="d-block w-100"
                        src="https://wallpaper.dog/large/10792407.jpg"
                        alt=""
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;
