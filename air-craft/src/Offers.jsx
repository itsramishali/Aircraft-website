import React from "react";
import './Offers.css';
import Footer from "./Footer";


function Offers() {
    return (
        <>
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
                        <div class="carousel-caption d-none d-md-block">
                            <button className="justify-content-end">book now</button>
                        </div>
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

            <div className="book-part my-5">
                <h3 className="">Offers Are</h3>
                <ul>
                    <li>Solid for reduced rates</li>
                    <li>Usually Offer when an Aircraft</li>
                        <ul>
                            <li >is landing to pickup passengers</li>
                            <li>has to flown empty back to its home</li>
                        </ul>
                    <li>Solely for the benfit of our clients</li>
                </ul>
            </div>

            <div className="book-part">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Seats</th>
                            <th>From</th>
                            <th>to</th>
                            <th>Available From</th>
                            <th>Available From</th>
                            <th>Btn</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>a</td>
                            <td>5</td>
                            <td>gale</td>
                            <td>Jaffina</td>
                            <td>13.02.2023</td>
                            <td>28.02.2023</td>
                            <td><button className="buttonInput">Request Details</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}
export default Offers;