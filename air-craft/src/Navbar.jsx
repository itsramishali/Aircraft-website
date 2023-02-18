import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse "  id="navbarSupportedContent">
                        <form className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto float-right">
                            <li className="nav-item edit">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item  edit">
                                <Link className="nav-link active float-right" aria-current="page" to="/Book">Book</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link dropdown-toggle active float-right"    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Aircraft Guide
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link active" aria-current="page" to="/About us">About Us</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link active" aria-current="page" to="/Contact">Contact Us</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link active" aria-current="page" to="/Membership">Membership</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link active" aria-current="page" to="Destination">Destinations</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link active" aria-current="page" to="/Offers">Offers</Link>
                            </li>
                            <li className="nav-item edit">
                                <Link className="nav-link active" aria-current="page" to="/Inquire">Inquire</Link>
                            </li>
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;