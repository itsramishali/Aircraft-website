import React from 'react';
import './Contact.css';
import Footer from "./Footer";

function Contact() {
    return (
        <>
            <div>
                <h1 className="main-heading">Contact Us</h1>
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
                <h3 className="sm-heading">We're with You Always</h3>
                <div className='book-part'>
                    <form >
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>First Name*</label><br />
                                <input className='b-Input w-100' type="text" />
                            </div>

                            <div className='col-md-6'>
                                <label>Last Name*</label><br />
                                <input  className='b-Input w-100' type="text" />
                            </div>
                        </div>

                        <div className='edit-margin'>
                            <label >Email Address*</label><br />
                            <input  className='b-Input w-100' type="email" />
                        </div>

                        <div className='edit-margin'>
                            <label>Subject*</label><br />
                            <input  className='b-Input w-100' type="text" />
                        </div>

                        <div className='edit-margin'>
                            <label >Message*</label><br />
                            <textarea  className="b-Input w-100"  cols="30" rows="10"></textarea>
                        </div>

                        <div className='butt-on'>
                            <button className='buttonInput'>Send</button>
                        </div>
                    </form>
                </div>
                <div className='book-part'>
                    <h3 className='sm-heading'>Sign Up to Our Newsletter</h3>
                    <p className="p text-center">
                        <b>We respect your privacy.</b>
                    </p>

                    <div className='edit-margin'>
                        <label>Name</label><br />
                        <input  className="b-Input w-100" type="text" />
                    </div>

                    <div className='edit-margin'>
                        <label >Email Address</label><br />
                        <input className="b-Input w-100" type="email" />
                    </div>

                    <div className='butt-on'>
                        <button className='buttonInput '>Subscribe</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;