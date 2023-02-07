import React from "react";
import './Navbar.css';


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end"  id="navbarSupportedContent">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto float-right">
                            <li className="nav-item edit">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item  edit">
                                <a className="nav-link active float-right" aria-current="page" href="#">Book</a>
                            </li>
                            <li className="nav-item edit">
                                <a className="nav-link dropdown-toggle active float-right" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Aircraft Guide
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item edit">
                                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item edit">
                                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item edit">
                                <a className="nav-link active" aria-current="page" href="#">Membership</a>
                            </li>
                            <li className="nav-item edit">
                                <a className="nav-link active" aria-current="page" href="#">Destinations</a>
                            </li>
                            <li className="nav-item edit">
                                <a className="nav-link active" aria-current="page" href="#">Offers</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;